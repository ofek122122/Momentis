import { auth } from '@/lib/auth'
import { listUpcomingEvents } from '@/lib/google-calendar'
import { eventsToICS } from '@/lib/ics-export'
import { limitEvents } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/export GET')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/export GET', session.user.id)
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } }
    )
  }

  try {
    const events = await listUpcomingEvents(session.user.id)
    const ics = eventsToICS(events, `Calendro - ${session.user.name ?? 'My Calendar'}`)

    return new NextResponse(ics, {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="calendro-export.ics"',
      },
    })
  } catch (err) {
    log.apiError('/api/export GET', err, session.user.id)
    return NextResponse.json({ error: 'Export failed' }, { status: 502 })
  }
}
