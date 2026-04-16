import { createDAVClient, DAVObject } from 'tsdav'
import { db } from '@/lib/db'
import { log } from '@/lib/logger'
import type { CalendroEvent } from '@/types'

async function getAppleClient(userId: string) {
  const apple = await db.appleCalendar.findUnique({ where: { userId } })
  if (!apple || !apple.enabled) return null

  const client = await createDAVClient({
    serverUrl: apple.calendarUrl,
    credentials: {
      username: apple.appleId,
      password: apple.appPassword,
    },
    authMethod: 'Basic',
    defaultAccountType: 'caldav',
  })

  return client
}

// ── Bug 4 fix: Unfold ICS lines per RFC 5545 Section 3.1 ───────────
// "Long content lines SHOULD be split into a multiple line representations
//  using a line "folding" technique. That is, a long line can be split
//  between any two characters by inserting a CRLF immediately followed
//  by a single linear white-space character (i.e., SPACE or HTAB)."
function unfoldICS(ics: string): string {
  return ics.replace(/\r?\n[ \t]/g, '')
}

// ── Bug 8 fix: Parse TZID and convert to proper timezone ────────────
// Common TZID mappings for iCloud calendars
const TZID_MAP: Record<string, number> = {
  'US/Eastern': -5, 'America/New_York': -5,
  'US/Central': -6, 'America/Chicago': -6,
  'US/Mountain': -7, 'America/Denver': -7,
  'US/Pacific': -8, 'America/Los_Angeles': -8,
  'Europe/London': 0, 'GMT': 0, 'UTC': 0,
  'Europe/Paris': 1, 'Europe/Berlin': 1, 'CET': 1,
  'Europe/Helsinki': 2, 'Europe/Athens': 2, 'EET': 2,
  'Asia/Jerusalem': 2, 'Israel': 2,
  'Asia/Tokyo': 9, 'Japan': 9,
  'Asia/Shanghai': 8, 'Asia/Hong_Kong': 8,
  'Australia/Sydney': 10,
}

function parseICSDate(icsDate: string, tzid?: string): Date {
  const clean = icsDate.replace(/[^0-9TZ]/g, '')
  const match = clean.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2}))?/)
  if (!match) return new Date(icsDate)

  const [, y, m, d, h = '0', min = '0', s = '0'] = match

  // If ends with Z, it's UTC
  if (clean.endsWith('Z')) {
    return new Date(Date.UTC(+y, +m - 1, +d, +h, +min, +s))
  }

  // If TZID provided, apply offset
  if (tzid) {
    const offset = TZID_MAP[tzid]
    if (offset !== undefined) {
      return new Date(Date.UTC(+y, +m - 1, +d, +h - offset, +min, +s))
    }
  }

  // No timezone info — treat as local time
  return new Date(+y, +m - 1, +d, +h, +min, +s)
}

function extractICSField(ics: string, field: string): { value: string; params: Record<string, string> } | null {
  // Match FIELD;PARAM=VALUE;PARAM=VALUE:content or FIELD:content
  const regex = new RegExp(`^(${field}(?:;[^:]*)?):(.*)$`, 'm')
  const match = ics.match(regex)
  if (!match) return null

  const fullProp = match[1]
  const value = match[2]

  // Parse parameters (e.g., TZID=America/New_York)
  const params: Record<string, string> = {}
  const paramParts = fullProp.split(';').slice(1)
  for (const part of paramParts) {
    const eqIdx = part.indexOf('=')
    if (eqIdx !== -1) {
      params[part.slice(0, eqIdx)] = part.slice(eqIdx + 1)
    }
  }

  return { value, params }
}

function icsToCalendroEvent(obj: DAVObject): CalendroEvent | null {
  const raw = obj.data as string
  if (!raw) return null

  // Bug 4: Unfold before extracting fields
  const data = unfoldICS(raw)

  const summaryField = extractICSField(data, 'SUMMARY')
  const dtstartField = extractICSField(data, 'DTSTART')
  const dtendField = extractICSField(data, 'DTEND')
  const locationField = extractICSField(data, 'LOCATION')
  const descriptionField = extractICSField(data, 'DESCRIPTION')
  const uidField = extractICSField(data, 'UID')

  const summary = summaryField?.value
  const dtstart = dtstartField?.value
  const uid = uidField?.value

  if (!summary || !dtstart) return null

  // Bug 8: Pass TZID to date parser
  const startTzid = dtstartField?.params.TZID
  const endTzid = dtendField?.params.TZID

  const start = parseICSDate(dtstart, startTzid)
  const end = dtendField?.value
    ? parseICSDate(dtendField.value, endTzid)
    : new Date(start.getTime() + 60 * 60 * 1000)

  if (isNaN(start.getTime())) return null

  return {
    id: uid ?? undefined,
    title: summary,
    start,
    end,
    location: locationField?.value ?? undefined,
    description: descriptionField?.value ?? undefined,
    sourceId: uid ?? undefined,
    sourceCalendarId: 'apple',
  }
}

function calendroEventToICS(event: CalendroEvent): string {
  const uid = event.id ?? `calendro-${Date.now()}@calendro.app`
  const now = new Date()
  const formatDate = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

  let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Calendro//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${formatDate(now)}
DTSTART:${formatDate(event.start)}
DTEND:${formatDate(event.end)}
SUMMARY:${event.title}`

  if (event.location) ics += `\nLOCATION:${event.location}`
  if (event.description) ics += `\nDESCRIPTION:${event.description}`

  ics += `\nEND:VEVENT\nEND:VCALENDAR`
  return ics
}

export async function listAppleEvents(
  userId: string,
  from: Date,
  to: Date
): Promise<CalendroEvent[]> {
  try {
    const client = await getAppleClient(userId)
    if (!client) return []

    const calendars = await client.fetchCalendars()
    if (!calendars.length) return []

    const allEvents: CalendroEvent[] = []

    for (const calendar of calendars) {
      try {
        const objects = await client.fetchCalendarObjects({
          calendar,
          timeRange: {
            start: from.toISOString(),
            end: to.toISOString(),
          },
        })

        for (const obj of objects) {
          const event = icsToCalendroEvent(obj)
          if (event) allEvents.push(event)
        }
      } catch (err) {
        log.warn('apple_calendar_fetch_error', {
          calendarName: calendar.displayName,
          error: err instanceof Error ? err.message : 'Unknown',
        })
      }
    }

    return allEvents.sort((a, b) => a.start.getTime() - b.start.getTime())
  } catch (err) {
    log.apiError('apple-calendar/list', err, userId)
    return []
  }
}

export async function createAppleEvent(
  userId: string,
  event: CalendroEvent
): Promise<string | null> {
  try {
    const client = await getAppleClient(userId)
    if (!client) return null

    const calendars = await client.fetchCalendars()
    const calendar = calendars[0]
    if (!calendar) return null

    const ics = calendroEventToICS(event)

    await client.createCalendarObject({
      calendar,
      filename: `${event.id ?? Date.now()}.ics`,
      iCalString: ics,
    })

    return event.id ?? 'created'
  } catch (err) {
    log.apiError('apple-calendar/create', err, userId)
    return null
  }
}

export async function testAppleConnection(
  appleId: string,
  appPassword: string
): Promise<{ success: boolean; calendars: string[] }> {
  try {
    const client = await createDAVClient({
      serverUrl: 'https://caldav.icloud.com',
      credentials: { username: appleId, password: appPassword },
      authMethod: 'Basic',
      defaultAccountType: 'caldav',
    })

    const calendars = await client.fetchCalendars()
    return {
      success: true,
      calendars: calendars.map(c => String(c.displayName ?? 'Unnamed')),
    }
  } catch {
    return { success: false, calendars: [] }
  }
}

export async function isAppleLinked(userId: string): Promise<boolean> {
  const apple = await db.appleCalendar.findUnique({ where: { userId } })
  return !!apple?.enabled
}

// Exported for testing
export { unfoldICS, parseICSDate }
