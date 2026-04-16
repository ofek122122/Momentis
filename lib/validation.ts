import { z } from 'zod'

// ── Shared constants ────────────────────────────────────────────────
export const MAX_TEXT_LENGTH = 2000
export const MAX_TITLE_LENGTH = 500
export const MAX_LOCATION_LENGTH = 500
export const MAX_DESCRIPTION_LENGTH = 5000
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024 // 10 MB
export const MAX_AUDIO_BYTES = 25 * 1024 * 1024 // 25 MB

const VALID_CATEGORIES = [
  'work',
  'personal',
  'health',
  'education',
  'social',
  'other',
] as const

// ── Schemas ─────────────────────────────────────────────────────────

export const parseTextSchema = z.object({
  text: z
    .string()
    .min(1, 'text is required')
    .max(MAX_TEXT_LENGTH, `text must be under ${MAX_TEXT_LENGTH} characters`),
})

export const createEventSchema = z.object({
  title: z
    .string()
    .min(1, 'title is required')
    .max(MAX_TITLE_LENGTH, `title must be under ${MAX_TITLE_LENGTH} characters`),
  start: z.string().or(z.date()).pipe(z.coerce.date()),
  end: z.string().or(z.date()).pipe(z.coerce.date()),
  location: z
    .string()
    .max(MAX_LOCATION_LENGTH)
    .optional(),
  description: z
    .string()
    .max(MAX_DESCRIPTION_LENGTH)
    .optional(),
  category: z.enum(VALID_CATEGORIES).optional(),
}).refine(
  (data) => data.end > data.start,
  { message: 'end must be after start', path: ['end'] }
)

export const deleteEventSchema = z.object({
  id: z
    .string()
    .min(1, 'id is required')
    .max(1024)
    .regex(/^[a-zA-Z0-9_-]+$/, 'invalid event id format'),
})

export const ALLOWED_IMAGE_MIMES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
] as const

export const ALLOWED_AUDIO_MIMES = [
  'audio/webm',
  'audio/ogg',
  'audio/mp4',
  'audio/mpeg',
  'audio/wav',
  'audio/flac',
] as const

// ── Image magic-byte validation ─────────────────────────────────────

const MAGIC_BYTES: Record<string, number[][]> = {
  'image/jpeg': [[0xff, 0xd8, 0xff]],
  'image/png': [[0x89, 0x50, 0x4e, 0x47]],
  'image/gif': [
    [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], // GIF87a
    [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], // GIF89a
  ],
  'image/webp': [], // RIFF header checked separately
}

export function validateImageMagicBytes(
  buffer: ArrayBuffer,
  claimedMime: string
): boolean {
  const bytes = new Uint8Array(buffer)
  if (bytes.length < 12) return false

  // WebP: RIFF....WEBP
  if (claimedMime === 'image/webp') {
    return (
      bytes[0] === 0x52 && // R
      bytes[1] === 0x49 && // I
      bytes[2] === 0x46 && // F
      bytes[3] === 0x46 && // F
      bytes[8] === 0x57 && // W
      bytes[9] === 0x45 && // E
      bytes[10] === 0x42 && // B
      bytes[11] === 0x50 // P
    )
  }

  const signatures = MAGIC_BYTES[claimedMime]
  if (!signatures) return false

  return signatures.some((sig) =>
    sig.every((byte, i) => bytes[i] === byte)
  )
}

// ── Helpers ─────────────────────────────────────────────────────────

/** Sanitise user text before embedding it in an AI prompt. */
export function sanitizeForPrompt(text: string): string {
  // Strip characters that could break prompt structure
  return text
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '') // control chars
    .slice(0, MAX_TEXT_LENGTH)
}
