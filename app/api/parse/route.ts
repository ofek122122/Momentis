import { auth } from '@/lib/auth'
import { parseText } from '@/lib/parser'
import { parseTextSchema, sanitizeForPrompt } from '@/lib/validation'
import { limitParse } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/parse')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limit
  const rl = limitParse(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/parse', session.user.id)
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) },
      }
    )
  }

  // Validate input
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = parseTextSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    )
  }

  try {
    const sanitized = sanitizeForPrompt(parsed.data.text)
    const result = await parseText(sanitized)
    return NextResponse.json(result)
  } catch (err) {
    log.apiError('/api/parse', err, session.user.id)
    return NextResponse.json(
      { error: 'Failed to parse text' },
      { status: 502 }
    )
  }
}
