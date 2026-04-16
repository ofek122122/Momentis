'use client'

import { useState, useRef } from 'react'
import { Mic, Square, Loader2 } from 'lucide-react'

interface VoiceButtonProps {
  onTranscript: (text: string) => void
  disabled?: boolean
}

type State = 'idle' | 'recording' | 'processing' | 'error'

// Bug 6 fix: Detect supported audio MIME type
function getSupportedMimeType(): { mimeType: string; ext: string } {
  if (typeof MediaRecorder === 'undefined') {
    return { mimeType: 'audio/webm', ext: 'webm' }
  }
  const candidates = [
    { mimeType: 'audio/webm;codecs=opus', ext: 'webm' },
    { mimeType: 'audio/webm', ext: 'webm' },
    { mimeType: 'audio/mp4', ext: 'mp4' },
    { mimeType: 'audio/ogg;codecs=opus', ext: 'ogg' },
    { mimeType: 'audio/ogg', ext: 'ogg' },
  ]
  for (const c of candidates) {
    if (MediaRecorder.isTypeSupported(c.mimeType)) return c
  }
  return { mimeType: 'audio/webm', ext: 'webm' } // fallback
}

export function VoiceButton({ onTranscript, disabled }: VoiceButtonProps) {
  const [state, setState] = useState<State>('idle')
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  async function start() {
    let stream: MediaStream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 2000)
      return
    }

    const { mimeType, ext } = getSupportedMimeType()
    const recorder = new MediaRecorder(stream, { mimeType })
    chunksRef.current = []

    recorder.ondataavailable = e => {
      if (e.data.size > 0) chunksRef.current.push(e.data)
    }
    recorder.onstop = async () => {
      stream.getTracks().forEach(t => t.stop())
      setState('processing')
      try {
        const blob = new Blob(chunksRef.current, { type: mimeType })
        const formData = new FormData()
        formData.append('audio', blob, `rec.${ext}`)
        const res = await fetch('/api/voice', { method: 'POST', body: formData })
        if (res.ok) {
          const { transcript } = (await res.json()) as { transcript: string }
          if (transcript) onTranscript(transcript)
        }
      } catch {
        // Network error
      } finally {
        setState('idle')
      }
    }

    recorder.start()
    recorderRef.current = recorder
    setState('recording')
  }

  function stop() {
    recorderRef.current?.stop()
  }

  const base =
    'w-8 h-8 flex items-center justify-center rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50'

  if (state === 'processing') {
    return (
      <button className={`${base} text-muted-foreground cursor-wait`} disabled aria-label="Processing voice...">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        <span className="sr-only">Processing your voice input</span>
      </button>
    )
  }

  if (state === 'error') {
    return (
      <button className={`${base} text-amber-400 cursor-not-allowed`} disabled aria-label="Microphone unavailable">
        <Mic className="h-3.5 w-3.5" />
        <span className="sr-only">Microphone access denied</span>
      </button>
    )
  }

  if (state === 'recording') {
    return (
      <button
        onClick={stop}
        aria-label="Stop recording"
        className={`${base} text-red-400 bg-red-500/10 hover:bg-red-500/20`}
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute w-6 h-6 rounded-full bg-red-500/20 animate-ping" />
          <Square className="h-3 w-3 fill-current relative" />
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={start}
      disabled={disabled}
      aria-label="Start voice input"
      className={`${base} text-muted-foreground hover:text-gold hover:bg-gold/10 disabled:opacity-30 disabled:cursor-not-allowed`}
    >
      <Mic className="h-3.5 w-3.5" />
    </button>
  )
}
