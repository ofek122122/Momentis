import { google, calendar_v3 } from 'googleapis'
import { db } from '@/lib/db'
import { log } from '@/lib/logger'
import type { MomentiesEvent } from '@/types'

// ── Bug 5 fix: Mutex to prevent token refresh race conditions ───────
const tokenLocks = new Map<string, Promise<void>>()

async function withTokenLock<T>(userId: string, fn: () => Promise<T>): Promise<T> {
  // Wait for any existing lock on this user
  const existing = tokenLocks.get(userId)
  if (existing) await existing

  let resolve: () => void
  const lock = new Promise<void>((r) => { resolve = r })
  tokenLocks.set(userId, lock)

  try {
    return await fn()
  } finally {
    resolve!()
    tokenLocks.delete(userId)
  }
}

async function getCalendarClient(userId: string) {
  const account = await db.account.findFirst({
    where: { userId, provider: 'google' },
  })

  if (!account?.access_token) {
    throw new Error('No Google account linked for this user')
  }

  const oauth2 = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET
  )

  oauth2.setCredentials({
    access_token: account.access_token,
    refresh_token: account.refresh_token ?? undefined,
    expiry_date: account.expires_at ? account.expires_at * 1000 : undefined,
  })

  // Bug 5 fix: Persist refreshed tokens with lock to prevent race conditions
  oauth2.on('tokens', (tokens) => {
    withTokenLock(userId, async () => {
      const update: Record<string, string | number | null> = {}
      if (tokens.access_token) update.access_token = tokens.access_token
      if (tokens.refresh_token) update.refresh_token = tokens.refresh_token
      if (tokens.expiry_date) update.expires_at = Math.floor(tokens.expiry_date / 1000)
      if (Object.keys(update).length > 0) {
        await db.account.update({
          where: { id: account.id },
          data: update,
        })
        log.info('google_token_refreshed', { userId })
      }
    }).catch(err => log.apiError('token-refresh', err, userId))
  })

  return google.calendar({ version: 'v3', auth: oauth2 })
}

export function buildGoogleEvent(event: MomentiesEvent): calendar_v3.Schema$Event {
  return {
    summary: event.title,
    location: event.location,
    description: event.description,
    start: { dateTime: event.start.toISOString(), timeZone: 'UTC' },
    end: { dateTime: event.end.toISOString(), timeZone: 'UTC' },
  }
}

export async function createGoogleEvent(
  userId: string,
  event: MomentiesEvent
): Promise<string> {
  const calendar = await getCalendarClient(userId)
  const response = await calendar.events.insert({
    calendarId: 'primary',
    requestBody: buildGoogleEvent(event),
  })
  return response.data.id!
}

// ── Bug 3 fix: Paginated event fetching ─────────────────────────────
export async function listEvents(
  userId: string,
  from: Date,
  to: Date
): Promise<MomentiesEvent[]> {
  const calendar = await getCalendarClient(userId)
  const allEvents: MomentiesEvent[] = []
  let pageToken: string | undefined

  do {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: from.toISOString(),
      timeMax: to.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 250,
      pageToken,
    })

    const items = response.data.items ?? []
    for (const e of items) {
      allEvents.push({
        id: e.id ?? undefined,
        title: e.summary ?? 'Untitled',
        start: new Date(e.start?.dateTime ?? e.start?.date ?? ''),
        end: new Date(e.end?.dateTime ?? e.end?.date ?? ''),
        location: e.location ?? undefined,
        description: e.description ?? undefined,
        sourceId: e.id ?? undefined,
      })
    }

    pageToken = response.data.nextPageToken ?? undefined
  } while (pageToken)

  return allEvents
}

export async function listUpcomingEvents(
  userId: string
): Promise<MomentiesEvent[]> {
  const from = new Date('2020-01-01T00:00:00Z')
  const to = new Date()
  to.setFullYear(to.getFullYear() + 1)
  return listEvents(userId, from, to)
}

export async function updateGoogleEvent(
  userId: string,
  eventId: string,
  updates: Partial<MomentiesEvent>
): Promise<void> {
  const calendar = await getCalendarClient(userId)

  const patch: calendar_v3.Schema$Event = {}
  if (updates.title !== undefined) patch.summary = updates.title
  if (updates.location !== undefined) patch.location = updates.location
  if (updates.description !== undefined) patch.description = updates.description
  if (updates.start !== undefined)
    patch.start = { dateTime: updates.start.toISOString(), timeZone: 'UTC' }
  if (updates.end !== undefined)
    patch.end = { dateTime: updates.end.toISOString(), timeZone: 'UTC' }

  await calendar.events.patch({
    calendarId: 'primary',
    eventId,
    requestBody: patch,
  })
}

export async function deleteGoogleEvent(
  userId: string,
  eventId: string
): Promise<void> {
  const calendar = await getCalendarClient(userId)
  await calendar.events.delete({ calendarId: 'primary', eventId })
}
