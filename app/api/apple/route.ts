import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { testAppleConnection } from '@/lib/apple-calendar'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const linkSchema = z.object({
  appleId: z.string().email('Valid Apple ID (email) required'),
  appPassword: z
    .string()
    .min(1, 'App-specific password is required')
    .max(200),
})

/** GET — check if Apple Calendar is linked */
export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apple = await db.appleCalendar.findUnique({
    where: { userId: session.user.id },
  })

  return NextResponse.json({
    linked: !!apple?.enabled,
    appleId: apple?.appleId ?? null,
  })
}

/** POST — link Apple Calendar */
export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = linkSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    )
  }

  const { appleId, appPassword } = parsed.data

  // Test the connection before saving
  const test = await testAppleConnection(appleId, appPassword)
  if (!test.success) {
    return NextResponse.json(
      {
        error:
          'Could not connect to Apple Calendar. Check your Apple ID and app-specific password.',
      },
      { status: 400 }
    )
  }

  // Upsert the Apple Calendar credentials
  await db.appleCalendar.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      appleId,
      appPassword,
      enabled: true,
    },
    update: {
      appleId,
      appPassword,
      enabled: true,
    },
  })

  log.info('apple_calendar_linked', { userId: session.user.id })

  return NextResponse.json({
    success: true,
    calendars: test.calendars,
  })
}

/** DELETE — unlink Apple Calendar */
export async function DELETE() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  await db.appleCalendar.deleteMany({
    where: { userId: session.user.id },
  })

  log.info('apple_calendar_unlinked', { userId: session.user.id })

  return NextResponse.json({ success: true })
}
