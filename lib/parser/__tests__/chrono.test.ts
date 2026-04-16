import { describe, it, expect } from 'vitest'
import { parseWithChrono } from '@/lib/parser/chrono'

describe('parseWithChrono', () => {
  it('parses a simple tomorrow event with explicit time', () => {
    const result = parseWithChrono('gym tomorrow at 7am', new Date('2026-04-08'))
    expect(result.events).toHaveLength(1)
    expect(result.events[0].start.getHours()).toBe(7)
    expect(result.confidence).toBe('high')
    expect(result.method).toBe('chrono')
  })

  it('infers 1-hour duration when no end time given', () => {
    const result = parseWithChrono('lunch tuesday noon', new Date('2026-04-08'))
    expect(result.events[0].end.getTime() - result.events[0].start.getTime()).toBe(3_600_000)
  })

  it('returns low confidence for text with no recognizable date', () => {
    const result = parseWithChrono('maybe we should meet sometime', new Date('2026-04-08'))
    expect(result.confidence).toBe('low')
    expect(result.events).toHaveLength(0)
  })

  it('returns high confidence for explicit date and time', () => {
    const result = parseWithChrono('dentist april 15 at 3pm', new Date('2026-04-08'))
    expect(result.confidence).toBe('high')
    expect(result.events[0].start.getMonth()).toBe(3) // April = 3
    expect(result.events[0].start.getHours()).toBe(15)
  })
})
