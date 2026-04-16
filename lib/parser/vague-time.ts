import type { CalendroEvent } from '@/types'

/**
 * Detect if parsed events have vague/default times.
 * Midnight (00:00) or 9 AM exactly usually means no specific time was parsed.
 */
export function hasVagueTime(events: CalendroEvent[]): boolean {
  return events.some(e => {
    const start = new Date(e.start)
    return start.getMinutes() === 0 && start.getSeconds() === 0 && (
      start.getHours() === 0 ||
      start.getHours() === 9
    )
  })
}
