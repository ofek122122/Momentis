import { auth } from '@/lib/auth'
import { DeepgramClient } from '@deepgram/sdk'
import { ALLOWED_AUDIO_MIMES, MAX_AUDIO_BYTES } from '@/lib/validation'
import { limitVoice } from '@/lib/rate-limit'
import { log } from '@/lib/logger'
import { NextResponse } from 'next/server'

const deepgram = new DeepgramClient({ apiKey: process.env.DEEPGRAM_API_KEY })

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user) {
    log.authFailure('/api/voice')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Rate limit
  const rl = limitVoice(session.user.id)
  if (!rl.allowed) {
    log.rateLimited('/api/voice', session.user.id)
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

  const audio = formData.get('audio') as File | null
  if (!audio) {
    return NextResponse.json({ error: 'audio is required' }, { status: 400 })
  }

  // MIME whitelist for audio
  if (
    audio.type &&
    !ALLOWED_AUDIO_MIMES.includes(audio.type as typeof ALLOWED_AUDIO_MIMES[number])
  ) {
    return NextResponse.json({ error: 'Unsupported audio format' }, { status: 415 })
  }

  // Size limit
  if (audio.size > MAX_AUDIO_BYTES) {
    return NextResponse.json(
      { error: `Audio file too large (max ${MAX_AUDIO_BYTES / 1024 / 1024} MB)` },
      { status: 413 }
    )
  }

  const buffer = Buffer.from(await audio.arrayBuffer())

  try {
    const response = await deepgram.listen.v1.media.transcribeFile(buffer, {
      model: 'nova-3',
      smart_format: true,
      language: 'en',
    })

    const transcript =
      'results' in response
        ? (response.results.channels[0]?.alternatives?.[0]?.transcript ?? '')
        : ''

    return NextResponse.json({ transcript })
  } catch (err) {
    log.apiError('/api/voice', err, session.user.id)
    return NextResponse.json(
      { error: 'Transcription failed' },
      { status: 502 }
    )
  }
}
