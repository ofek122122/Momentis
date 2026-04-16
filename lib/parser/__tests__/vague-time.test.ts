import { describe, it, expect } from 'vitest'
import { hasVagueTime } from '../vague-time'
import type { CalendroEvent } from '@/types'

function makeEvent(start: Date, end?: Date): CalendroEvent {
  return {
    title: 'Test Event',
    start,
    end: end ?? new Date(start.getTime() + 3600000),
  }
}

describe('hasVagueTime', () => {
  it('returns true for midnight (no time specified)', () => {
    const events = [makeEvent(new Date('2026-04-17T00:00:00'))]
    expect(hasVagueTime(events)).toBe(true)
  })

  it('returns true for 9 AM exactly (common default)', () => {
    const events = [makeEvent(new Date('2026-04-17T09:00:00'))]
    expect(hasVagueTime(events)).toBe(true)
  })

  it('returns false for specific time like 3pm', () => {
    const events = [makeEvent(new Date('2026-04-17T15:00:00'))]
    expect(hasVagueTime(events)).toBe(false)
  })

  it('returns false for time with minutes like 2:30pm', () => {
    const events = [makeEvent(new Date('2026-04-17T14:30:00'))]
    expect(hasVagueTime(events)).toBe(false)
  })

  it('returns true if any event has vague time', () => {
    const events = [
      makeEvent(new Date('2026-04-17T15:30:00')),
      makeEvent(new Date('2026-04-18T00:00:00')),
    ]
    expect(hasVagueTime(events)).toBe(true)
  })

  it('returns false for empty array', () => {
    expect(hasVagueTime([])).toBe(false)
  })

  it('returns false for 9:15 AM (has minutes)', () => {
    const events = [makeEvent(new Date('2026-04-17T09:15:00'))]
    expect(hasVagueTime(events)).toBe(false)
  })
})
