'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, X, Clock, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import type { MomentiesEvent } from '@/types'

interface SearchBarProps {
  events: MomentiesEvent[]
  onEventSelect: (event: MomentiesEvent) => void
}

export function SearchBar({ events, onEventSelect }: SearchBarProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<MomentiesEvent[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
        setTimeout(() => inputRef.current?.focus(), 50)
      }
      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
        setResults([])
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([])
      return
    }
    const lower = q.toLowerCase()
    const filtered = events.filter(e =>
      e.title.toLowerCase().includes(lower) ||
      (e.description?.toLowerCase().includes(lower) ?? false) ||
      (e.location?.toLowerCase().includes(lower) ?? false)
    ).slice(0, 10) // Limit to 10 results
    setResults(filtered)
  }, [events])

  useEffect(() => {
    const timeout = setTimeout(() => search(query), 150)
    return () => clearTimeout(timeout)
  }, [query, search])

  function handleSelect(event: MomentiesEvent) {
    onEventSelect(event)
    setOpen(false)
    setQuery('')
    setResults([])
  }

  if (!open) {
    return (
      <button
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50) }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:border-gold/30 transition-all"
        aria-label="Search events (Ctrl+K)"
      >
        <Search className="h-3 w-3" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 rounded bg-muted text-[9px] font-mono text-muted-foreground/60">
          ⌘K
        </kbd>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] sm:pt-[15vh]" onClick={() => { setOpen(false); setQuery(''); setResults([]) }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-up" style={{ animationDuration: '0.15s' }} />
      <div
        className="relative w-full max-w-lg mx-4 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-up"
        style={{ animationDuration: '0.2s' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search events by title, location, description..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none font-mono caret-gold"
            autoComplete="off"
          />
          {query && (
            <button onClick={() => { setQuery(''); setResults([]) }} className="text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <kbd className="px-1.5 py-0.5 rounded bg-muted text-[9px] font-mono text-muted-foreground/60">ESC</kbd>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="max-h-64 overflow-y-auto p-2">
            {results.map((event, i) => (
              <button
                key={event.id ?? event.sourceId ?? i}
                onClick={() => handleSelect(event)}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gold/10 transition-colors group"
              >
                <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                  {event.title}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {format(new Date(event.start), 'EEE, MMM d · h:mm a')}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Empty state */}
        {query && results.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-sm text-muted-foreground">No events found for &ldquo;{query}&rdquo;</p>
          </div>
        )}

        {/* Hint */}
        {!query && (
          <div className="py-6 text-center">
            <p className="text-xs text-muted-foreground/50 font-mono">Type to search your events</p>
          </div>
        )}
      </div>
    </div>
  )
}
