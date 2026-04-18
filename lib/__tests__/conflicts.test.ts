import { describe, it, expect } from 'vitest'
import { detectConflicts } from '@/lib/conflicts'
import type { MomentiesEvent } from '@/types'

function event(title: string, startHour: number, endHour: number): MomentiesEvent {
  const start = new Date('2026-04-10')
  start.setHours(startHour, 0, 0, 0)
  const end = new Date('2026-04-10')
  end.setHours(endHour, 0, 0, 0)
  return { title, start, end }
}

describe('detectConflicts', () => {
  it('detects overlapping events', () => {
    const newEvents = [event('Gym', 9, 10)]
    const existing = [event('Meeting', 9, 11)]
    const conflicts = detectConflicts(newEvents, existing)
    expect(conflicts).toHaveLength(1)
    expect(conflicts[0].newEvent.title).toBe('Gym')
    expect(conflicts[0].existingEvent.title).toBe('Meeting')
  })

  it('returns empty for non-overlapping events', () => {
    const newEvents = [event('Gym', 7, 8)]
    const existing = [event('Meeting', 9, 10)]
    expect(detectConflicts(newEvents, existing)).toHaveLength(0)
  })

  it('detects partial overlap', () => {
    const newEvents = [event('Lunch', 11, 13)]
    const existing = [event('Call', 12, 13)]
    expect(detectConflicts(newEvents, existing)).toHaveLength(1)
  })

  it('handles empty arrays', () => {
    expect(detectConflicts([], [event('X', 1, 2)])).toHaveLength(0)
    expect(detectConflicts([event('X', 1, 2)], [])).toHaveLength(0)
  })
})
