/**
 * Structured logger — writes JSON lines to stdout so any log aggregator
 * (Vercel, Datadog, etc.) can pick them up.
 */

type LogLevel = 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  event: string
  userId?: string
  route?: string
  [key: string]: unknown
}

function emit(entry: LogEntry) {
  const line = JSON.stringify({ ts: new Date().toISOString(), ...entry })
  if (entry.level === 'error') {
    console.error(line)
  } else {
    console.log(line)
  }
}

export const log = {
  info(event: string, meta?: Record<string, unknown>) {
    emit({ level: 'info', event, ...meta })
  },
  warn(event: string, meta?: Record<string, unknown>) {
    emit({ level: 'warn', event, ...meta })
  },
  error(event: string, meta?: Record<string, unknown>) {
    emit({ level: 'error', event, ...meta })
  },

  /** Log an API route error with sanitised message (never leak stack traces). */
  apiError(route: string, err: unknown, userId?: string) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    emit({ level: 'error', event: 'api_error', route, message, userId })
  },

  /** Log a rate-limit hit. */
  rateLimited(route: string, userId: string) {
    emit({ level: 'warn', event: 'rate_limited', route, userId })
  },

  /** Log an auth failure (401). */
  authFailure(route: string) {
    emit({ level: 'warn', event: 'auth_failure', route })
  },
}
