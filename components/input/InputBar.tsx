'use client'

import { useState, useTransition } from 'react'
import { ArrowUp, Loader2 } from 'lucide-react'
import { VoiceButton } from './VoiceButton'
import { ImageUploadButton } from './ImageUploadButton'
import { EventPreviewCard } from '@/components/calendar/EventPreviewCard'
import { detectConflicts, type ConflictPair } from '@/lib/conflicts'
import type { MomentiesEvent, ParseResult } from '@/types'

import { hasVagueTime } from '@/lib/parser/vague-time'

interface InputBarProps {
  onEventsAdded?: () => void
  existingEvents?: MomentiesEvent[]
}

export function InputBar({ onEventsAdded, existingEvents = [] }: InputBarProps) {
  const [text, setText] = useState('')
  const [pendingEvents, setPendingEvents] = useState<MomentiesEvent[]>([])
  const [showPreview, setShowPreview] = useState(false)
  const [imageParsing, setImageParsing] = useState(false)
  const [confirmError, setConfirmError] = useState<string | null>(null)
  const [parseError, setParseError] = useState<string | null>(null)
  const [conflicts, setConflicts] = useState<ConflictPair[]>([])
  const [suggestions, setSuggestions] = useState<MomentiesEvent[]>([])
  const [suggestLoading, setSuggestLoading] = useState(false)
  const [isPending, startTransition] = useTransition()

  const isBusy = isPending || imageParsing

  function showEvents(events: MomentiesEvent[]) {
    if (events.length > 0) {
      setPendingEvents(events)
      setConflicts(detectConflicts(events, existingEvents))
      setShowPreview(true)
      setParseError(null)
    } else {
      setParseError('No events found. Try something like "meeting tomorrow at 2pm".')
      setTimeout(() => setParseError(null), 4000)
    }
  }

  async function submit() {
    if (!text.trim() || isBusy) return
    startTransition(async () => {
      try {
        const res = await fetch('/api/parse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        })
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          setParseError((data as { error?: string }).error ?? 'Failed to parse. Try again.')
          setTimeout(() => setParseError(null), 4000)
          return
        }
        const result = (await res.json()) as ParseResult
        const events = result.events.map(e => ({
          ...e,
          start: new Date(e.start),
          end: new Date(e.end),
        }))
        showEvents(events)
        if (events.length > 0) {
          setText('')
          // Fetch smart suggestions if time seems vague
          if (hasVagueTime(events)) {
            fetchSuggestions(text)
          }
        }
      } catch {
        setParseError('Network error. Check your connection.')
        setTimeout(() => setParseError(null), 4000)
      }
    })
  }

  async function fetchSuggestions(inputText: string) {
    setSuggestLoading(true)
    setSuggestions([])
    try {
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      })
      if (res.ok) {
        const data = (await res.json()) as { suggestions: MomentiesEvent[] }
        if (data.suggestions.length > 0) {
          setSuggestions(data.suggestions.map(s => ({
            ...s,
            start: new Date(s.start),
            end: new Date(s.end),
          })))
        }
      }
    } catch {
      // Silently fail — suggestions are optional
    } finally {
      setSuggestLoading(false)
    }
  }

  function handleImageResult(result: ParseResult) {
    const events = result.events.map(e => ({
      ...e,
      start: new Date(e.start),
      end: new Date(e.end),
    }))
    showEvents(events)
  }

  async function handleConfirm(events: MomentiesEvent[]) {
    setConfirmError(null)
    try {
      const results = await Promise.all(
        events.map(event =>
          fetch('/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event),
          })
        )
      )
      const failed = results.filter(r => !r.ok)
      if (failed.length > 0) {
        setConfirmError(`${failed.length} event(s) could not be saved. Please try again.`)
        return
      }
      setShowPreview(false)
      setPendingEvents([])
      setConflicts([])
      onEventsAdded?.()
    } catch {
      setConfirmError('Network error. Please check your connection and try again.')
    }
  }

  return (
    <>
      {/* Input dock — fixed at bottom on mobile (above mobile nav), relative on desktop */}
      <div className="border-t border-border bg-background/95 backdrop-blur px-4 py-4 fixed bottom-14 left-0 right-0 z-40 md:relative md:bottom-auto md:left-auto md:right-auto md:z-auto">
        <div className="max-w-3xl mx-auto">
          <div
            className={`
              input-breathe
              flex items-center gap-2 rounded-xl border border-border
              bg-[#131318] px-4 py-3
              focus-within:border-gold/40 focus-within:ring-2 focus-within:ring-gold/10
              transition-all duration-300
            `}
          >
            <label htmlFor="event-input" className="sr-only">
              Type an event to add to your calendar
            </label>
            <input
              id="event-input"
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  submit()
                }
              }}
              placeholder='e.g. "dentist thursday 3pm" or snap a schedule...'
              className="
                flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50
                outline-none font-mono caret-gold
              "
              disabled={isBusy}
              autoComplete="off"
              aria-describedby="input-hint"
            />

            {/* Action buttons */}
            <div className="flex items-center gap-1 shrink-0" role="group" aria-label="Input actions">
              <VoiceButton
                onTranscript={t => setText(prev => prev ? `${prev} ${t}` : t)}
                disabled={isBusy}
              />
              <ImageUploadButton
                onResult={handleImageResult}
                loading={imageParsing}
                setLoading={setImageParsing}
              />
              <button
                onClick={submit}
                disabled={!text.trim() || isBusy}
                aria-label="Parse and add event"
                className="
                  ml-1 w-8 h-8 flex items-center justify-center rounded-lg
                  bg-gold text-[#0c0c0f] font-bold
                  hover:bg-gold/90 disabled:opacity-30 disabled:cursor-not-allowed
                  transition-all active:scale-95
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50
                "
              >
                {isPending
                  ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  : <ArrowUp className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Parse error toast */}
          {parseError && (
            <div
              className="mt-2 text-center text-xs text-amber-400 font-mono animate-fade-up"
              role="alert"
            >
              {parseError}
            </div>
          )}

          {/* Hint */}
          {!parseError && (
            <p
              id="input-hint"
              className="mt-2 text-center font-mono text-[10px] text-muted-foreground/40 tracking-wider"
            >
              ENTER to submit · mic for voice · photo for schedule scans
            </p>
          )}
        </div>
      </div>

      <EventPreviewCard
        events={pendingEvents}
        open={showPreview}
        onConfirm={handleConfirm}
        onClose={() => {
          setShowPreview(false)
          setPendingEvents([])
          setConfirmError(null)
          setConflicts([])
          setSuggestions([])
          setSuggestLoading(false)
        }}
        error={confirmError}
        conflicts={conflicts}
        suggestions={suggestions}
        suggestLoading={suggestLoading}
        onUseSuggestion={(suggestion) => {
          setPendingEvents([{
            ...pendingEvents[0],
            title: suggestion.title,
            start: new Date(suggestion.start),
            end: new Date(suggestion.end),
            category: suggestion.category,
          }])
          setSuggestions([])
          setConflicts(detectConflicts([suggestion], existingEvents))
        }}
      />
    </>
  )
}
