import { describe, it, expect } from 'vitest'
import {
  parseTextSchema,
  createEventSchema,
  deleteEventSchema,
  validateImageMagicBytes,
} from '@/lib/validation'

describe('parseTextSchema', () => {
  it('accepts valid text', () => {
    const result = parseTextSchema.safeParse({ text: 'meeting tomorrow 3pm' })
    expect(result.success).toBe(true)
  })

  it('rejects empty text', () => {
    const result = parseTextSchema.safeParse({ text: '' })
    expect(result.success).toBe(false)
  })

  it('rejects text over 2000 chars', () => {
    const result = parseTextSchema.safeParse({ text: 'a'.repeat(2001) })
    expect(result.success).toBe(false)
  })
})

describe('createEventSchema', () => {
  it('accepts valid event', () => {
    const result = createEventSchema.safeParse({
      title: 'Standup',
      start: '2026-04-10T10:00:00Z',
      end: '2026-04-10T11:00:00Z',
      category: 'work',
    })
    expect(result.success).toBe(true)
  })

  it('rejects end before start', () => {
    const result = createEventSchema.safeParse({
      title: 'Bad event',
      start: '2026-04-10T11:00:00Z',
      end: '2026-04-10T10:00:00Z',
    })
    expect(result.success).toBe(false)
  })

  it('rejects missing title', () => {
    const result = createEventSchema.safeParse({
      start: '2026-04-10T10:00:00Z',
      end: '2026-04-10T11:00:00Z',
    })
    expect(result.success).toBe(false)
  })
})

describe('deleteEventSchema', () => {
  it('accepts valid alphanumeric id', () => {
    const result = deleteEventSchema.safeParse({ id: 'abc123-xyz' })
    expect(result.success).toBe(true)
  })

  it('rejects empty id', () => {
    const result = deleteEventSchema.safeParse({ id: '' })
    expect(result.success).toBe(false)
  })

  it('rejects ids with special characters', () => {
    const result = deleteEventSchema.safeParse({ id: 'test; DROP TABLE' })
    expect(result.success).toBe(false)
  })
})

describe('validateImageMagicBytes', () => {
  it('validates JPEG magic bytes', () => {
    const buf = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, ...Array(8).fill(0)])
    expect(validateImageMagicBytes(buf.buffer, 'image/jpeg')).toBe(true)
  })

  it('validates PNG magic bytes', () => {
    const buf = new Uint8Array([0x89, 0x50, 0x4e, 0x47, ...Array(8).fill(0)])
    expect(validateImageMagicBytes(buf.buffer, 'image/png')).toBe(true)
  })

  it('rejects mismatched magic bytes', () => {
    const buf = new Uint8Array([0x89, 0x50, 0x4e, 0x47, ...Array(8).fill(0)])
    expect(validateImageMagicBytes(buf.buffer, 'image/jpeg')).toBe(false)
  })

  it('rejects too-small buffers', () => {
    const buf = new Uint8Array([0xff, 0xd8])
    expect(validateImageMagicBytes(buf.buffer, 'image/jpeg')).toBe(false)
  })
})
