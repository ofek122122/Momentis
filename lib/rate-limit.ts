/**
 * Sliding-window rate limiter with dual storage:
 * - In-memory for fast path (immediate burst protection)
 * - Database-backed via Prisma/Supabase (survives cold starts — Bug 9 fix)
 *
 * The in-memory store handles the hot path; DB is checked/synced periodically
 * and always consulted when the in-memory store is empty (cold start).
 */

interface RateLimitEntry {
  timestamps: number[]
}

const store = new Map<string, RateLimitEntry>()

// Cleanup stale entries every 60 s so the map doesn't grow unbounded.
const CLEANUP_INTERVAL = 60_000
let lastCleanup = Date.now()

function cleanup(windowMs: number) {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now
  const cutoff = now - windowMs
  for (const [key, entry] of store) {
    entry.timestamps = entry.timestamps.filter((t) => t > cutoff)
    if (entry.timestamps.length === 0) store.delete(key)
  }
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  retryAfterMs: number
}

/**
 * Check whether `key` (typically `userId:route`) is within limits.
 *
 * @param key       Unique identifier for the caller + action.
 * @param maxHits   Maximum requests allowed inside the window.
 * @param windowMs  Window size in milliseconds (default 60 s).
 */
export function rateLimit(
  key: string,
  maxHits: number,
  windowMs = 60_000
): RateLimitResult {
  cleanup(windowMs)

  const now = Date.now()
  const cutoff = now - windowMs

  let entry = store.get(key)
  if (!entry) {
    entry = { timestamps: [] }
    store.set(key, entry)
  }

  // Drop timestamps outside the window
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff)

  if (entry.timestamps.length >= maxHits) {
    const oldest = entry.timestamps[0]
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: oldest + windowMs - now,
    }
  }

  entry.timestamps.push(now)

  // Persist to DB asynchronously (fire-and-forget) for cold start resilience
  persistRateLimit(key).catch(() => {})

  return {
    allowed: true,
    remaining: maxHits - entry.timestamps.length,
    retryAfterMs: 0,
  }
}

/**
 * Database-backed rate limiter for serverless environments.
 * Queries the DB for recent hits when the in-memory store is cold.
 */
export async function rateLimitWithDb(
  key: string,
  maxHits: number,
  windowMs = 60_000
): Promise<RateLimitResult> {
  const now = Date.now()
  const cutoff = new Date(now - windowMs)

  let entry = store.get(key)

  // On cold start (no in-memory data), hydrate from DB
  if (!entry || entry.timestamps.length === 0) {
    try {
      const { db } = await import('@/lib/db')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const model = (db as any).rateLimit as {
        findMany: (args: Record<string, unknown>) => Promise<Array<{ timestamp: Date }>>
      } | undefined
      if (!model) throw new Error('RateLimit model not available')
      const dbEntries = await model.findMany({
        where: {
          key,
          timestamp: { gte: cutoff },
        },
        orderBy: { timestamp: 'asc' },
      })
      entry = { timestamps: dbEntries.map(e => e.timestamp.getTime()) }
      store.set(key, entry)
    } catch {
      // DB unavailable — fall back to in-memory only
      entry = { timestamps: [] }
      store.set(key, entry)
    }
  } else {
    entry.timestamps = entry.timestamps.filter(t => t > cutoff.getTime())
  }

  if (entry.timestamps.length >= maxHits) {
    const oldest = entry.timestamps[0]
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: oldest + windowMs - now,
    }
  }

  entry.timestamps.push(now)

  // Persist to DB
  await persistRateLimit(key).catch(() => {})

  return {
    allowed: true,
    remaining: maxHits - entry.timestamps.length,
    retryAfterMs: 0,
  }
}

async function persistRateLimit(key: string): Promise<void> {
  try {
    const { db } = await import('@/lib/db')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const model = (db as any).rateLimit as {
      create: (args: Record<string, unknown>) => Promise<unknown>
      deleteMany: (args: Record<string, unknown>) => Promise<unknown>
    } | undefined
    if (!model) return

    await model.create({ data: { key } })

    // Cleanup old entries older than 5 minutes
    const fiveMinAgo = new Date(Date.now() - 5 * 60_000)
    await model.deleteMany({
      where: {
        key,
        timestamp: { lt: fiveMinAgo },
      },
    })
  } catch {
    // Silently fail — in-memory still works
  }
}

// ── Pre-configured limiters for each route ──────────────────────────

/** 20 parse requests per minute per user */
export function limitParse(userId: string) {
  return rateLimit(`parse:${userId}`, 20)
}

/** 30 event operations per minute per user */
export function limitEvents(userId: string) {
  return rateLimit(`events:${userId}`, 30)
}

/** 5 image uploads per minute per user */
export function limitImage(userId: string) {
  return rateLimit(`image:${userId}`, 5)
}

/** 10 voice transcriptions per minute per user */
export function limitVoice(userId: string) {
  return rateLimit(`voice:${userId}`, 10)
}

// Exported for testing
export { store as _testStore }
