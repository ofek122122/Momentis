import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const start = Date.now()

  try {
    await db.$queryRaw`SELECT 1`
    const dbLatencyMs = Date.now() - start

    return NextResponse.json(
      {
        status: 'ok',
        version: process.env.npm_package_version ?? 'unknown',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        db: { status: 'ok', latencyMs: dbLatencyMs },
      },
      { status: 200 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error'
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        db: { status: 'error', error: message },
      },
      { status: 503 },
    )
  }
}
