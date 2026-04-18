import type { MomentiesEvent } from '@/types'

export interface ConflictPair {
  newEvent: MomentiesEvent
  existingEvent: MomentiesEvent
}

/**
 * Detect time overlaps between new events and existing ones.
 * Two events conflict if their time ranges overlap:
 *   newStart < existingEnd AND newEnd > existingStart
 */
export function detectConflicts(
  newEvents: MomentiesEvent[],
  existingEvents: MomentiesEvent[]
): ConflictPair[] {
  const conflicts: ConflictPair[] = []

  for (const newEvent of newEvents) {
    const ns = new Date(newEvent.start).getTime()
    const ne = new Date(newEvent.end).getTime()

    for (const existing of existingEvents) {
      const es = new Date(existing.start).getTime()
      const ee = new Date(existing.end).getTime()

      if (ns < ee && ne > es) {
        conflicts.push({ newEvent, existingEvent: existing })
      }
    }
  }

  return conflicts
}
