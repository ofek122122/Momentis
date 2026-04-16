import { auth } from '@/lib/auth'
import {
  createGoogleEvent,
  listUpcomingEvents,
  deleteGoogleEvent,
  updateGoogleEvent,
} from '@/lib/google-calendar'
import { createAppleEvent, isAppleLinked } from '@/lib/apple-calendar'
import { createEventSchema, deleteEventSchema } from '@/lib/validation'
import { limitEvents } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const updateEventSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1).max(500).optional(),
  start: z.string().or(z.date()).pipe(z.coerce.date()).optional(),
  end: z.string().or(z.date()).pipe(z.coerce.date()).optional(),
  location: z.string().max(500).optional().nullable(),
  description: z.string().max(5000).optional().nullable(),
  category: z.enum(['work', 'personal', 'health', 'education', 'social', 'other']).optional(),
  color: z.enum(['blue', 'violet', 'emerald', 'amber', 'pink', 'red', 'cyan', 'gold', 'zinc']).optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
})

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/events GET')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/events GET', session.user.id)
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } }
    )
  }

  try {
    const events = await listUpcomingEvents(session.user.id)
    return NextResponse.json(events)
  } catch (err) {
    log.apiError('/api/events GET', err, session.user.id)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 502 }
    )
  }
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/events POST')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/events POST', session.user.id)
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

  const parsed = createEventSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    )
  }

  const event = {
    title: parsed.data.title,
    start: parsed.data.start,
    end: parsed.data.end,
    location: parsed.data.location,
    description: parsed.data.description,
    category: parsed.data.category,
  }

  try {
    const id = await createGoogleEvent(session.user.id, event)

    try {
      const appleLinked = await isAppleLinked(session.user.id)
      if (appleLinked) await createAppleEvent(session.user.id, event)
    } catch (err) {
      log.apiError('/api/events POST (apple sync)', err, session.user.id)
    }

    return NextResponse.json({ id }, { status: 201 })
  } catch (err) {
    log.apiError('/api/events POST', err, session.user.id)
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 502 }
    )
  }
}

/** PATCH — update an existing event (title, time, description, etc.) */
export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/events PATCH')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/events PATCH', session.user.id)
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

  const parsed = updateEventSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    )
  }

  const { id, ...updates } = parsed.data

  try {
    await updateGoogleEvent(session.user.id, id, {
      title: updates.title,
      start: updates.start,
      end: updates.end,
      location: updates.location ?? undefined,
      description: updates.description ?? undefined,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    log.apiError('/api/events PATCH', err, session.user.id)
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 502 }
    )
  }
}

export async function DELETE(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/events DELETE')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/events DELETE', session.user.id)
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } }
    )
  }

  const { searchParams } = new URL(request.url)
  const parsed = deleteEventSchema.safeParse({ id: searchParams.get('id') })
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    )
  }

  try {
    await deleteGoogleEvent(session.user.id, parsed.data.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    log.apiError('/api/events DELETE', err, session.user.id)
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 502 }
    )
  }
}
