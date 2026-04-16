import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { limitEvents } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const updatePrefsSchema = z.object({
  timezone: z.string().min(1).max(100).optional(),
  defaultReminderMinutes: z.number().int().min(0).max(10080).optional(),
  defaultEventDuration: z.number().int().min(5).max(1440).optional(),
  workingHoursStart: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  workingHoursEnd: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  morningBriefingTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  defaultCalendarView: z.enum(['month', 'week', 'day']).optional(),
})

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/preferences GET')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const prefs = await db.userPreference.findUnique({
      where: { userId: session.user.id },
    })
    if (!prefs) {
      // Return defaults
      return NextResponse.json({
        timezone: 'UTC',
        defaultReminderMinutes: 30,
        defaultEventDuration: 60,
        workingHoursStart: '09:00',
        workingHoursEnd: '18:00',
        morningBriefingTime: '08:00',
        defaultCalendarView: 'month',
      })
    }
    return NextResponse.json(prefs)
  } catch (err) {
    log.apiError('/api/preferences GET', err, session.user.id)
    return NextResponse.json({ error: 'Failed to fetch preferences' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/preferences PATCH')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/preferences PATCH', session.user.id)
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

  const parsed = updatePrefsSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
  }

  try {
    const prefs = await db.userPreference.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        ...parsed.data,
      },
      update: parsed.data,
    })
    return NextResponse.json(prefs)
  } catch (err) {
    log.apiError('/api/preferences PATCH', err, session.user.id)
    return NextResponse.json({ error: 'Failed to update preferences' }, { status: 500 })
  }
}
