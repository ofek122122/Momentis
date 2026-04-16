import { auth } from '@/lib/auth'
import { listUpcomingEvents } from '@/lib/google-calendar'
import { limitEvents } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const searchSchema = z.object({
  query: z.string().min(1).max(500),
  color: z.string().optional(),
  category: z.string().optional(),
  priority: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
})

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/search POST')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/search POST', session.user.id)
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

  const parsed = searchSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
  }

  try {
    const events = await listUpcomingEvents(session.user.id)
    const q = parsed.data.query.toLowerCase()

    const filtered = events.filter(event => {
      // Text search
      const matchesText = event.title.toLowerCase().includes(q) ||
        (event.description?.toLowerCase().includes(q) ?? false) ||
        (event.location?.toLowerCase().includes(q) ?? false)

      if (!matchesText) return false

      // Filters
      if (parsed.data.color && event.color !== parsed.data.color) return false
      if (parsed.data.category && event.category !== parsed.data.category) return false
      if (parsed.data.priority && event.priority !== parsed.data.priority) return false
      if (parsed.data.dateFrom) {
        const from = new Date(parsed.data.dateFrom)
        if (new Date(event.start) < from) return false
      }
      if (parsed.data.dateTo) {
        const to = new Date(parsed.data.dateTo)
        if (new Date(event.start) > to) return false
      }

      return true
    })

    return NextResponse.json({ events: filtered, total: filtered.length })
  } catch (err) {
    log.apiError('/api/search POST', err, session.user.id)
    return NextResponse.json({ error: 'Search failed' }, { status: 502 })
  }
}
