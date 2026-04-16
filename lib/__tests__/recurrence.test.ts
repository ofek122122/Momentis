import { describe, it, expect } from 'vitest'
import {
  toRRULE,
  parseRRULE,
  expandRecurringEvent,
  describeRecurrence,
} from '@/lib/recurrence'
import type { CalendroEvent, RecurrenceRule } from '@/types'

describe('toRRULE', () => {
  it('generates a daily RRULE', () => {
    const rule: RecurrenceRule = { frequency: 'daily' }
    expect(toRRULE(rule)).toBe('FREQ=DAILY')
  })

  it('generates a weekly RRULE with interval', () => {
    const rule: RecurrenceRule = { frequency: 'weekly', interval: 2 }
    expect(toRRULE(rule)).toBe('FREQ=WEEKLY;INTERVAL=2')
  })

  it('generates RRULE with BYDAY', () => {
    const rule: RecurrenceRule = { frequency: 'custom', daysOfWeek: [1, 3, 5] }
    expect(toRRULE(rule)).toBe('FREQ=WEEKLY;BYDAY=MO,WE,FR')
  })

  it('generates RRULE with COUNT', () => {
    const rule: RecurrenceRule = { frequency: 'monthly', count: 12 }
    expect(toRRULE(rule)).toBe('FREQ=MONTHLY;COUNT=12')
  })
})

describe('parseRRULE', () => {
  it('parses a simple daily RRULE', () => {
    const rule = parseRRULE('FREQ=DAILY')
    expect(rule.frequency).toBe('daily')
  })

  it('parses RRULE with BYDAY', () => {
    const rule = parseRRULE('FREQ=WEEKLY;BYDAY=MO,WE,FR')
    expect(rule.frequency).toBe('weekly')
    expect(rule.daysOfWeek).toEqual([1, 3, 5])
  })

  it('parses interval', () => {
    const rule = parseRRULE('FREQ=WEEKLY;INTERVAL=2')
    expect(rule.interval).toBe(2)
  })

  it('round-trips through toRRULE and parseRRULE', () => {
    const original: RecurrenceRule = { frequency: 'weekly', interval: 3 }
    const rrule = toRRULE(original)
    const parsed = parseRRULE(rrule)
    expect(parsed.frequency).toBe('weekly')
    expect(parsed.interval).toBe(3)
  })
})

describe('expandRecurringEvent', () => {
  it('expands daily events within range', () => {
    const event: CalendroEvent = {
      id: 'test-1',
      title: 'Standup',
      start: new Date('2026-04-06T09:00:00'),
      end: new Date('2026-04-06T09:30:00'),
      recurrence: { frequency: 'daily' },
    }

    const rangeStart = new Date('2026-04-06')
    const rangeEnd = new Date('2026-04-10')

    const occurrences = expandRecurringEvent(event, rangeStart, rangeEnd)
    expect(occurrences.length).toBe(4) // Apr 6, 7, 8, 9
    expect(occurrences[0].isRecurringInstance).toBe(true)
    expect(occurrences[0].recurringEventId).toBe('test-1')
  })

  it('respects exceptions', () => {
    const event: CalendroEvent = {
      id: 'test-2',
      title: 'Gym',
      start: new Date('2026-04-06T07:00:00'),
      end: new Date('2026-04-06T08:00:00'),
      recurrence: { frequency: 'daily' },
    }

    const rangeStart = new Date('2026-04-06')
    const rangeEnd = new Date('2026-04-10')
    const exceptions = ['2026-04-08']

    const occurrences = expandRecurringEvent(event, rangeStart, rangeEnd, exceptions)
    // Should skip Apr 8
    expect(occurrences.length).toBe(3)
    const dates = occurrences.map(o => o.start.getDate())
    expect(dates).not.toContain(8)
  })

  it('respects count limit', () => {
    const event: CalendroEvent = {
      id: 'test-3',
      title: 'Check-in',
      start: new Date('2026-04-01T10:00:00'),
      end: new Date('2026-04-01T10:30:00'),
      recurrence: { frequency: 'weekly', count: 3 },
    }

    const rangeStart = new Date('2026-04-01')
    const rangeEnd = new Date('2026-12-31')

    const occurrences = expandRecurringEvent(event, rangeStart, rangeEnd)
    expect(occurrences.length).toBe(3)
  })

  it('returns single event when no recurrence', () => {
    const event: CalendroEvent = {
      id: 'test-4',
      title: 'One-off',
      start: new Date('2026-04-10T14:00:00'),
      end: new Date('2026-04-10T15:00:00'),
    }

    const rangeStart = new Date('2026-04-01')
    const rangeEnd = new Date('2026-04-30')

    const occurrences = expandRecurringEvent(event, rangeStart, rangeEnd)
    expect(occurrences).toHaveLength(1)
    expect(occurrences[0].title).toBe('One-off')
  })
})

describe('describeRecurrence', () => {
  it('describes daily', () => {
    expect(describeRecurrence({ frequency: 'daily' })).toBe('Every day')
  })

  it('describes weekly with interval', () => {
    expect(describeRecurrence({ frequency: 'weekly', interval: 2 })).toBe('Every 2 weeks')
  })

  it('describes custom with days', () => {
    expect(describeRecurrence({ frequency: 'custom', daysOfWeek: [1, 3, 5] })).toBe('Every Mon, Wed, Fri')
  })
})
