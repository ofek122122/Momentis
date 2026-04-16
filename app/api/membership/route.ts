import { auth } from '@/lib/auth'
import { getUserTier, upgradeToPro, getTierLimits } from '@/lib/pro'
import { limitEvents } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const membershipActionSchema = z.object({
  action: z.enum(['upgrade']),
})

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const tier = await getUserTier(session.user.id)
  const limits = getTierLimits(tier)
  return NextResponse.json({ tier, limits })
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/membership POST')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = limitEvents(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/membership POST', session.user.id)
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

  const parsed = membershipActionSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
  }

  if (parsed.data.action === 'upgrade') {
    // Mock payment — in production this would integrate with Stripe
    const success = await upgradeToPro(session.user.id)
    if (success) {
      log.info('user_upgraded_to_pro', { userId: session.user.id })
      return NextResponse.json({ success: true, tier: 'pro' })
    }
    return NextResponse.json({ error: 'Upgrade failed' }, { status: 500 })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
