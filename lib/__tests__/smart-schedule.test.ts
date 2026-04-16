import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/ai/gemini-client', () => ({
  flashModel: {
    generateContent: vi.fn().mockResolvedValue({
      response: {
        text: () => JSON.stringify([{
          title: 'Gym session',
          start: '2026-04-12T07:00:00Z',
          end: '2026-04-12T08:00:00Z',
          category: 'health',
        }]),
      },
    }),
  },
}))

vi.mock('@/lib/validation', () => ({
  sanitizeForPrompt: vi.fn((text: string) => text),
}))

vi.mock('@/lib/logger', () => ({
  log: { apiError: vi.fn(), info: vi.fn(), warn: vi.fn() },
}))

describe('suggestTimeSlot', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns suggested events when existing events are provided', async () => {
    const { suggestTimeSlot } = await import('@/lib/parser/smart-schedule')
    const existing = [{
      title: 'Meeting',
      start: new Date('2026-04-12T09:00:00Z'),
      end: new Date('2026-04-12T10:00:00Z'),
    }]
    const result = await suggestTimeSlot('gym session', existing)
    expect(result).not.toBeNull()
    expect(result!.length).toBeGreaterThan(0)
    expect(result![0].title).toBe('Gym session')
  })

  it('returns null when no existing events', async () => {
    const { suggestTimeSlot } = await import('@/lib/parser/smart-schedule')
    const result = await suggestTimeSlot('gym session', [])
    expect(result).toBeNull()
  })

  it('passes working hours preferences to the prompt', async () => {
    const { suggestTimeSlot } = await import('@/lib/parser/smart-schedule')
    const { flashModel } = await import('@/lib/ai/gemini-client')
    const existing = [{
      title: 'Work',
      start: new Date('2026-04-12T09:00:00Z'),
      end: new Date('2026-04-12T17:00:00Z'),
    }]
    const prefs = { workingHoursStart: '08:00', workingHoursEnd: '16:00', timezone: 'US/Eastern' }
    await suggestTimeSlot('team lunch', existing, prefs)
    expect(flashModel.generateContent).toHaveBeenCalledWith(
      expect.stringContaining('08:00')
    )
  })
})
