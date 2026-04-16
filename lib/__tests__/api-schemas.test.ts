import { describe, it, expect } from 'vitest'
import { z } from 'zod'

// Replicate the schemas from API routes for testing
// (These are defined inline in route files and not exported)

const updateEventSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1).max(500).optional(),
  start: z.string().or(z.date()).pipe(z.coerce.date()).optional(),
  end: z.string().or(z.date()).pipe(z.coerce.date()).optional(),
  location: z.string().max(500).optional().nullable(),
  description: z.string().max(5000).optional().nullable(),
  category: z.enum(['work', 'personal', 'health', 'education', 'social', 'other']).optional(),
  color: z.enum(['blue', 'violet', 'emerald', 'amber', 'pink', 'red', 'cyan', 'gold', 'zinc']).optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
})

const membershipActionSchema = z.object({
  action: z.enum(['upgrade']),
})

const searchSchema = z.object({
  query: z.string().min(1).max(500),
  color: z.string().optional(),
  category: z.string().optional(),
  priority: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
})

const updatePrefsSchema = z.object({
  timezone: z.string().min(1).max(100).optional(),
  defaultReminderMinutes: z.number().int().min(0).max(10080).optional(),
  defaultEventDuration: z.number().int().min(5).max(1440).optional(),
  workingHoursStart: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  workingHoursEnd: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  morningBriefingTime: z.string().regex(/^\d{2}:\d{2}$/).optional(),
  defaultCalendarView: z.enum(['month', 'week', 'day']).optional(),
})

describe('updateEventSchema (/api/events PATCH)', () => {
  it('accepts valid update with id and title', () => {
    const result = updateEventSchema.safeParse({ id: 'event-123', title: 'New title' })
    expect(result.success).toBe(true)
  })

  it('accepts update with date strings', () => {
    const result = updateEventSchema.safeParse({
      id: 'event-123',
      start: '2026-04-17T10:00:00Z',
      end: '2026-04-17T11:00:00Z',
    })
    expect(result.success).toBe(true)
  })

  it('accepts update with all optional fields', () => {
    const result = updateEventSchema.safeParse({
      id: 'event-123',
      title: 'Updated Meeting',
      start: '2026-04-17T10:00:00Z',
      end: '2026-04-17T11:00:00Z',
      location: 'Room 101',
      description: 'Weekly sync',
      category: 'work',
      color: 'gold',
      priority: 'high',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing id', () => {
    const result = updateEventSchema.safeParse({ title: 'No id' })
    expect(result.success).toBe(false)
  })

  it('rejects empty id', () => {
    const result = updateEventSchema.safeParse({ id: '' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid category', () => {
    const result = updateEventSchema.safeParse({ id: 'x', category: 'invalid' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid color', () => {
    const result = updateEventSchema.safeParse({ id: 'x', color: 'rainbow' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid priority', () => {
    const result = updateEventSchema.safeParse({ id: 'x', priority: 'critical' })
    expect(result.success).toBe(false)
  })

  it('accepts nullable location', () => {
    const result = updateEventSchema.safeParse({ id: 'x', location: null })
    expect(result.success).toBe(true)
  })

  it('rejects title exceeding max length', () => {
    const result = updateEventSchema.safeParse({ id: 'x', title: 'a'.repeat(501) })
    expect(result.success).toBe(false)
  })
})

describe('membershipActionSchema (/api/membership POST)', () => {
  it('accepts upgrade action', () => {
    const result = membershipActionSchema.safeParse({ action: 'upgrade' })
    expect(result.success).toBe(true)
  })

  it('rejects invalid action', () => {
    const result = membershipActionSchema.safeParse({ action: 'downgrade' })
    expect(result.success).toBe(false)
  })

  it('rejects missing action', () => {
    const result = membershipActionSchema.safeParse({})
    expect(result.success).toBe(false)
  })

  it('rejects empty string action', () => {
    const result = membershipActionSchema.safeParse({ action: '' })
    expect(result.success).toBe(false)
  })

  it('rejects non-string action', () => {
    const result = membershipActionSchema.safeParse({ action: 42 })
    expect(result.success).toBe(false)
  })
})

describe('searchSchema (/api/search POST)', () => {
  it('accepts query only', () => {
    const result = searchSchema.safeParse({ query: 'meeting' })
    expect(result.success).toBe(true)
  })

  it('accepts query with all filters', () => {
    const result = searchSchema.safeParse({
      query: 'standup',
      color: 'gold',
      category: 'work',
      priority: 'high',
      dateFrom: '2026-04-01',
      dateTo: '2026-04-30',
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty query', () => {
    const result = searchSchema.safeParse({ query: '' })
    expect(result.success).toBe(false)
  })

  it('rejects missing query', () => {
    const result = searchSchema.safeParse({ color: 'gold' })
    expect(result.success).toBe(false)
  })

  it('rejects query over 500 chars', () => {
    const result = searchSchema.safeParse({ query: 'a'.repeat(501) })
    expect(result.success).toBe(false)
  })
})

describe('updatePrefsSchema (/api/preferences PATCH)', () => {
  it('accepts valid timezone', () => {
    const result = updatePrefsSchema.safeParse({ timezone: 'US/Eastern' })
    expect(result.success).toBe(true)
  })

  it('accepts valid working hours', () => {
    const result = updatePrefsSchema.safeParse({
      workingHoursStart: '09:00',
      workingHoursEnd: '18:00',
    })
    expect(result.success).toBe(true)
  })

  it('accepts all preference fields', () => {
    const result = updatePrefsSchema.safeParse({
      timezone: 'Asia/Jerusalem',
      defaultReminderMinutes: 15,
      defaultEventDuration: 45,
      workingHoursStart: '08:30',
      workingHoursEnd: '17:00',
      morningBriefingTime: '07:30',
      defaultCalendarView: 'week',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid time format for working hours', () => {
    const result = updatePrefsSchema.safeParse({ workingHoursStart: '9am' })
    expect(result.success).toBe(false)
  })

  it('rejects negative reminder minutes', () => {
    const result = updatePrefsSchema.safeParse({ defaultReminderMinutes: -5 })
    expect(result.success).toBe(false)
  })

  it('rejects reminder over 10080 (1 week)', () => {
    const result = updatePrefsSchema.safeParse({ defaultReminderMinutes: 10081 })
    expect(result.success).toBe(false)
  })

  it('rejects event duration under 5 minutes', () => {
    const result = updatePrefsSchema.safeParse({ defaultEventDuration: 3 })
    expect(result.success).toBe(false)
  })

  it('rejects invalid calendar view', () => {
    const result = updatePrefsSchema.safeParse({ defaultCalendarView: 'year' })
    expect(result.success).toBe(false)
  })

  it('accepts empty object (all fields optional)', () => {
    const result = updatePrefsSchema.safeParse({})
    expect(result.success).toBe(true)
  })
})
