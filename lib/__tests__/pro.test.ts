import { describe, it, expect, vi } from 'vitest'

// Mock auth and db before importing pro
vi.mock('@/lib/auth', () => ({
  auth: vi.fn().mockResolvedValue(null),
}))

vi.mock('@/lib/db', () => ({
  db: {
    user: {
      findUnique: vi.fn().mockResolvedValue(null),
      update: vi.fn().mockResolvedValue({}),
    },
  },
}))

describe('pro tier system', () => {
  it('free tier has limited AI parses', async () => {
    const { getTierLimits } = await import('@/lib/pro')
    const limits = getTierLimits('free')
    expect(limits.aiParsesPerDay).toBe(3)
  })

  it('pro tier has unlimited AI parses', async () => {
    const { getTierLimits } = await import('@/lib/pro')
    const limits = getTierLimits('pro')
    expect(limits.aiParsesPerDay).toBe(Infinity)
  })

  it('free tier cannot access analytics', async () => {
    const { getTierLimits } = await import('@/lib/pro')
    const limits = getTierLimits('free')
    expect(limits.hasAnalytics).toBe(false)
    expect(limits.hasThemes).toBe(false)
    expect(limits.hasSharedCalendars).toBe(false)
  })

  it('pro tier has all features enabled', async () => {
    const { getTierLimits } = await import('@/lib/pro')
    const limits = getTierLimits('pro')
    expect(limits.hasAnalytics).toBe(true)
    expect(limits.hasThemes).toBe(true)
    expect(limits.hasSharedCalendars).toBe(true)
    expect(limits.hasSmartSuggestions).toBe(true)
    expect(limits.hasTemplates).toBe(true)
    expect(limits.hasFocusMode).toBe(true)
  })

  it('free tier limited to 1 calendar connection', async () => {
    const { TIER_LIMITS } = await import('@/lib/pro')
    expect(TIER_LIMITS.free.calendarConnections).toBe(1)
  })

  it('pro tier has unlimited calendar connections', async () => {
    const { TIER_LIMITS } = await import('@/lib/pro')
    expect(TIER_LIMITS.pro.calendarConnections).toBe(Infinity)
  })
})
