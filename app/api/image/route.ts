import { auth } from '@/lib/auth'
import { extractEventsFromImage } from '@/lib/parser/gemini'
import {
  ALLOWED_IMAGE_MIMES,
  MAX_IMAGE_BYTES,
  validateImageMagicBytes,
} from '@/lib/validation'
import { limitImage } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/image')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limit
  const rl = limitImage(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/image', session.user.id)
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) },
      }
    )
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const file = formData.get('file') as File | null
  if (!file) {
    return NextResponse.json({ error: 'file is required' }, { status: 400 })
  }

  // MIME whitelist
  if (!ALLOWED_IMAGE_MIMES.includes(file.type as typeof ALLOWED_IMAGE_MIMES[number])) {
    return NextResponse.json({ error: 'Unsupported file type' }, { status: 415 })
  }

  // Size limit
  if (file.size > MAX_IMAGE_BYTES) {
    return NextResponse.json(
      { error: `File too large (max ${MAX_IMAGE_BYTES / 1024 / 1024} MB)` },
      { status: 413 }
    )
  }

  const bytes = await file.arrayBuffer()

  // Magic-byte validation — verify actual file content matches claimed MIME
  if (!validateImageMagicBytes(bytes, file.type)) {
    log.warn('image_magic_byte_mismatch', {
      userId: session.user.id,
      claimedMime: file.type,
    })
    return NextResponse.json(
      { error: 'File content does not match declared type' },
      { status: 415 }
    )
  }

  const base64 = Buffer.from(bytes).toString('base64')

  try {
    const result = await extractEventsFromImage(base64, file.type)
    return NextResponse.json(result)
  } catch (err) {
    log.apiError('/api/image', err, session.user.id)
    return NextResponse.json(
      { error: 'Failed to extract events from image' },
      { status: 502 }
    )
  }
}
