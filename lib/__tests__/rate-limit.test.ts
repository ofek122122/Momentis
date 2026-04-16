import { describe, it, expect } from 'vitest'
import { rateLimit } from '@/lib/rate-limit'

describe('rateLimit', () => {
  it('allows requests within the limit', () => {
    const key = `test-allow-${Date.now()}`
    const r1 = rateLimit(key, 3, 60_000)
    expect(r1.allowed).toBe(true)
    expect(r1.remaining).toBe(2)
  })

  it('blocks requests exceeding the limit', () => {
    const key = `test-block-${Date.now()}`
    rateLimit(key, 2, 60_000)
    rateLimit(key, 2, 60_000)
    const r3 = rateLimit(key, 2, 60_000)
    expect(r3.allowed).toBe(false)
    expect(r3.remaining).toBe(0)
    expect(r3.retryAfterMs).toBeGreaterThan(0)
  })

  it('counts remaining correctly', () => {
    const key = `test-remaining-${Date.now()}`
    const r1 = rateLimit(key, 5, 60_000)
    expect(r1.remaining).toBe(4)
    const r2 = rateLimit(key, 5, 60_000)
    expect(r2.remaining).toBe(3)
  })
})
