'use client'

import { useRef } from 'react'
import { ImagePlus, Loader2 } from 'lucide-react'
import type { ParseResult } from '@/types'

interface ImageUploadButtonProps {
  onResult: (result: ParseResult) => void
  loading: boolean
  setLoading: (v: boolean) => void
}

export function ImageUploadButton({ onResult, loading, setLoading }: ImageUploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res    = await fetch('/api/image', { method: 'POST', body: formData })
      const result = await res.json() as ParseResult
      result.events = result.events.map(e => ({
        ...e,
        start: new Date(e.start),
        end:   new Date(e.end),
      }))
      onResult(result)
    } finally {
      setLoading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={loading}
        aria-label="Upload schedule image"
        className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-gold hover:bg-gold/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
      >
        {loading
          ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
          : <ImagePlus className="h-3.5 w-3.5" />
        }
      </button>
    </>
  )
}
