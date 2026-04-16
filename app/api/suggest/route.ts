import { auth } from '@/lib/auth'
import { listUpcomingEvents } from '@/lib/google-calendar'
import { suggestTimeSlot } from '@/lib/parser/smart-schedule'
import { parseTextSchema } from '@/lib/validation'
import { limitParse } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/suggest POST')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitParse(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/suggest POST', session.user.id)
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = parseTextSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
  }

  try {
    const events = await listUpcomingEvents(session.user.id)
    const prefs = await db.userPreference.findUnique({
      where: { userId: session.user.id },
    })
    const preferences = prefs ? {
      workingHoursStart: prefs.workingHoursStart,
      workingHoursEnd: prefs.workingHoursEnd,
      timezone: prefs.timezone,
    } : undefined

    const suggestions = await suggestTimeSlot(parsed.data.text, events, preferences)
    return NextResponse.json({ suggestions: suggestions ?? [] })
  } catch (err) {
    log.apiError('/api/suggest POST', err, session.user.id)
    return NextResponse.json({ error: 'Failed to generate suggestions' }, { status: 502 })
  }
}
