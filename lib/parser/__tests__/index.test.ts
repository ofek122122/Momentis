import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/parser/gemini', () => ({
  parseWithGemini: vi.fn().mockResolvedValue({
    events: [{ title: 'Complex meeting', start: new Date(), end: new Date(), category: 'work' }],
    confidence: 'high',
    method: 'gemini',
    raw: 'test',
  }),
}))

describe('parseText', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('uses chrono for high-confidence explicit time inputs without calling Gemini', async () => {
    const { parseText } = await import('@/lib/parser/index')
    const { parseWithGemini } = await import('@/lib/parser/gemini')
    const result = await parseText('gym tomorrow at 8am')
    expect(result.method).toBe('chrono')
    expect(parseWithGemini).not.toHaveBeenCalled()
  })

  it('falls back to Gemini for low-confidence ambiguous inputs', async () => {
    const { parseText } = await import('@/lib/parser/index')
    const { parseWithGemini } = await import('@/lib/parser/gemini')
    const result = await parseText('we should catch up sometime next week maybe')
    expect(parseWithGemini).toHaveBeenCalled()
    expect(result.method).toBe('gemini')
  })
})
