import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isBefore,
  isAfter,
  isSameDay,
  startOfDay,
  differenceInMinutes,
} from 'date-fns'
import type { MomentiesEvent, RecurrenceRule } from '@/types'

/**
 * Convert a RecurrenceRule to an RRULE string (RFC 5545 subset).
 */
export function toRRULE(rule: RecurrenceRule): string {
  const parts: string[] = []

  const freqMap: Record<string, string> = {
    daily: 'DAILY',
    weekly: 'WEEKLY',
    monthly: 'MONTHLY',
    yearly: 'YEARLY',
    custom: 'WEEKLY', // custom defaults to weekly with specific days
  }
  parts.push(`FREQ=${freqMap[rule.frequency] ?? 'WEEKLY'}`)

  if (rule.interval && rule.interval > 1) {
    parts.push(`INTERVAL=${rule.interval}`)
  }

  if (rule.daysOfWeek && rule.daysOfWeek.length > 0) {
    const dayNames = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    parts.push(`BYDAY=${rule.daysOfWeek.map(d => dayNames[d]).join(',')}`)
  }

  if (rule.dayOfMonth) {
    parts.push(`BYMONTHDAY=${rule.dayOfMonth}`)
  }

  if (rule.endDate) {
    const d = new Date(rule.endDate)
    const formatted = d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
    parts.push(`UNTIL=${formatted}`)
  }

  if (rule.count) {
    parts.push(`COUNT=${rule.count}`)
  }

  return parts.join(';')
}

/**
 * Parse an RRULE string back into a RecurrenceRule.
 */
export function parseRRULE(rrule: string): RecurrenceRule {
  const parts = rrule.split(';')
  const map: Record<string, string> = {}
  for (const part of parts) {
    const [key, value] = part.split('=')
    if (key && value) map[key] = value
  }

  const freqMap: Record<string, RecurrenceRule['frequency']> = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
    YEARLY: 'yearly',
  }

  const dayMap: Record<string, number> = {
    SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6,
  }

  const rule: RecurrenceRule = {
    frequency: freqMap[map.FREQ] ?? 'weekly',
  }

  if (map.INTERVAL) {
    rule.interval = parseInt(map.INTERVAL, 10)
  }

  if (map.BYDAY) {
    rule.daysOfWeek = map.BYDAY.split(',').map(d => dayMap[d] ?? 0)
  }

  if (map.BYMONTHDAY) {
    rule.dayOfMonth = parseInt(map.BYMONTHDAY, 10)
  }

  if (map.UNTIL) {
    // Parse YYYYMMDDTHHMMSSZ format
    const s = map.UNTIL
    if (s.length >= 8) {
      const y = s.slice(0, 4)
      const m = s.slice(4, 6)
      const d = s.slice(6, 8)
      rule.endDate = `${y}-${m}-${d}`
    }
  }

  if (map.COUNT) {
    rule.count = parseInt(map.COUNT, 10)
  }

  return rule
}

/**
 * Generate all occurrences of a recurring event within a date range.
 * Returns MomentiesEvent instances for each occurrence.
 */
export function expandRecurringEvent(
  event: MomentiesEvent,
  rangeStart: Date,
  rangeEnd: Date,
  exceptions: string[] = []
): MomentiesEvent[] {
  if (!event.recurrence) return [event]

  const rule = event.recurrence
  const durationMin = differenceInMinutes(event.end, event.start)
  const occurrences: MomentiesEvent[] = []
  const exceptionDates = new Set(exceptions.map(d => startOfDay(new Date(d)).toISOString()))

  let current = new Date(event.start)
  let count = 0
  const maxCount = rule.count ?? 365 // safety limit
  const endDate = rule.endDate ? new Date(rule.endDate) : addYears(rangeEnd, 1)

  while (isBefore(current, rangeEnd) && isBefore(current, endDate) && count < maxCount) {
    if (isAfter(current, rangeStart) || isSameDay(current, rangeStart) ||
        (isBefore(current, rangeStart) && isAfter(new Date(current.getTime() + durationMin * 60_000), rangeStart))) {
      // Check if this date is in exceptions
      const dayKey = startOfDay(current).toISOString()
      if (!exceptionDates.has(dayKey)) {
        // For weekly with specific days, only add if current day matches
        if (rule.frequency === 'custom' && rule.daysOfWeek && rule.daysOfWeek.length > 0) {
          if (rule.daysOfWeek.includes(current.getDay())) {
            const end = new Date(current.getTime() + durationMin * 60_000)
            occurrences.push({
              ...event,
              id: `${event.id}_${current.toISOString()}`,
              start: new Date(current),
              end,
              isRecurringInstance: true,
              recurringEventId: event.id,
            })
          }
        } else {
          const end = new Date(current.getTime() + durationMin * 60_000)
          occurrences.push({
            ...event,
            id: `${event.id}_${current.toISOString()}`,
            start: new Date(current),
            end,
            isRecurringInstance: true,
            recurringEventId: event.id,
          })
        }
      }
    }

    // Advance to next occurrence
    const interval = rule.interval ?? 1
    switch (rule.frequency) {
      case 'daily':
        current = addDays(current, interval)
        break
      case 'weekly':
        current = addWeeks(current, interval)
        break
      case 'monthly':
        current = addMonths(current, interval)
        break
      case 'yearly':
        current = addYears(current, interval)
        break
      case 'custom':
        // For custom, advance day by day but only yield matching days
        current = addDays(current, 1)
        break
    }

    count++
  }

  return occurrences
}

/**
 * Human-readable description of a recurrence rule.
 */
export function describeRecurrence(rule: RecurrenceRule): string {
  const interval = rule.interval ?? 1
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  switch (rule.frequency) {
    case 'daily':
      return interval === 1 ? 'Every day' : `Every ${interval} days`
    case 'weekly':
      return interval === 1 ? 'Every week' : `Every ${interval} weeks`
    case 'monthly':
      return interval === 1 ? 'Every month' : `Every ${interval} months`
    case 'yearly':
      return interval === 1 ? 'Every year' : `Every ${interval} years`
    case 'custom':
      if (rule.daysOfWeek && rule.daysOfWeek.length > 0) {
        const days = rule.daysOfWeek.map(d => dayNames[d]).join(', ')
        return `Every ${days}`
      }
      return 'Custom schedule'
  }
}
