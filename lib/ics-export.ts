import type { MomentiesEvent } from '@/types'

function formatICSDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function escapeICSText(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}

export function eventsToICS(events: MomentiesEvent[], calendarName = 'Momenties'): string {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//Momenties//${calendarName}//EN`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${calendarName}`,
  ]

  for (const event of events) {
    const uid = event.id ?? event.sourceId ?? `momenties-${Date.now()}-${Math.random().toString(36).slice(2)}@momenties.app`
    lines.push('BEGIN:VEVENT')
    lines.push(`UID:${uid}`)
    lines.push(`DTSTAMP:${formatICSDate(new Date())}`)
    lines.push(`DTSTART:${formatICSDate(new Date(event.start))}`)
    lines.push(`DTEND:${formatICSDate(new Date(event.end))}`)
    lines.push(`SUMMARY:${escapeICSText(event.title)}`)
    if (event.location) lines.push(`LOCATION:${escapeICSText(event.location)}`)
    if (event.description) lines.push(`DESCRIPTION:${escapeICSText(event.description)}`)
    if (event.category) lines.push(`CATEGORIES:${event.category.toUpperCase()}`)
    lines.push('END:VEVENT')
  }

  lines.push('END:VCALENDAR')
  return lines.join('\r\n')
}

export function parseICSFeed(icsContent: string): MomentiesEvent[] {
  const events: MomentiesEvent[] = []
  const eventBlocks = icsContent.split('BEGIN:VEVENT')

  for (let i = 1; i < eventBlocks.length; i++) {
    const block = eventBlocks[i].split('END:VEVENT')[0]
    if (!block) continue

    // Unfold lines
    const unfolded = block.replace(/\r?\n[ \t]/g, '')

    const getField = (name: string): string | undefined => {
      const regex = new RegExp(`^${name}[;:](.*)$`, 'm')
      const match = unfolded.match(regex)
      if (!match) return undefined
      // Strip parameters (everything before the last colon in the property line)
      const colonIdx = match[0].indexOf(':')
      return match[0].slice(colonIdx + 1).trim()
    }

    const summary = getField('SUMMARY')
    const dtstart = getField('DTSTART')
    const dtend = getField('DTEND')
    const location = getField('LOCATION')
    const description = getField('DESCRIPTION')
    const uid = getField('UID')

    if (!summary || !dtstart) continue

    const parseDate = (s: string): Date => {
      const clean = s.replace(/[^0-9TZ]/g, '')
      const m = clean.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2}))?/)
      if (!m) return new Date(s)
      const [, y, mo, d, h = '0', mi = '0', sec = '0'] = m
      if (clean.endsWith('Z')) return new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +sec))
      return new Date(+y, +mo - 1, +d, +h, +mi, +sec)
    }

    const start = parseDate(dtstart)
    const end = dtend ? parseDate(dtend) : new Date(start.getTime() + 3600000)

    if (isNaN(start.getTime())) continue

    events.push({
      id: uid,
      title: summary.replace(/\\n/g, '\n').replace(/\\,/g, ',').replace(/\\;/g, ';'),
      start,
      end,
      location: location?.replace(/\\n/g, '\n').replace(/\\,/g, ','),
      description: description?.replace(/\\n/g, '\n').replace(/\\,/g, ','),
      sourceCalendarId: 'ics-import',
    })
  }

  return events
}
