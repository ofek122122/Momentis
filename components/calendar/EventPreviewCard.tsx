'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { AlertCircle, AlertTriangle, Clock, MapPin, Loader2, Sparkles } from 'lucide-react'
import type { MomentiesEvent } from '@/types'
import type { ConflictPair } from '@/lib/conflicts'

interface EventPreviewCardProps {
  events: MomentiesEvent[]
  open: boolean
  onConfirm: (events: MomentiesEvent[]) => Promise<void>
  onClose: () => void
  error?: string | null
  conflicts?: ConflictPair[]
  suggestions?: MomentiesEvent[]
  suggestLoading?: boolean
  onUseSuggestion?: (suggestion: MomentiesEvent) => void
}

export function EventPreviewCard({
  events,
  open,
  onConfirm,
  onClose,
  error,
  conflicts = [],
  suggestions = [],
  suggestLoading = false,
  onUseSuggestion,
}: EventPreviewCardProps) {
  const [saving, setSaving] = useState(false)

  async function handleConfirm() {
    setSaving(true)
    try {
      await onConfirm(events)
    } finally {
      setSaving(false)
    }
  }

  const conflictTitles = new Set(conflicts.map(c => c.newEvent.title))

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm border-border bg-card" aria-describedby="preview-desc">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {events.length === 1 ? 'Add to calendar?' : `Add ${events.length} events?`}
          </DialogTitle>
          <p id="preview-desc" className="sr-only">
            Review parsed events before adding them to your Google Calendar.
          </p>
        </DialogHeader>

        {/* Conflict warning */}
        {conflicts.length > 0 && (
          <div
            className="flex items-start gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300"
            role="alert"
          >
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
            <span>
              {conflicts.length === 1
                ? 'This event overlaps with an existing event on your calendar.'
                : `${conflicts.length} time conflicts detected with your existing schedule.`}
            </span>
          </div>
        )}

        <div className="space-y-2 max-h-64 overflow-y-auto pr-0.5">
          {events.map((event, i) => {
            const hasConflict = conflictTitles.has(event.title)
            return (
              <div
                key={event.id ?? event.sourceId ?? i}
                className={`rounded-md border p-3 space-y-1.5 ${
                  hasConflict
                    ? 'border-amber-500/30 bg-amber-500/5'
                    : 'border-border bg-muted/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm text-foreground flex-1">{event.title}</p>
                  {hasConflict && (
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400 shrink-0" aria-label="Schedule conflict" />
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 text-gold/60 shrink-0" aria-hidden="true" />
                  <span>
                    {format(new Date(event.start), 'EEE, MMM d · h:mm a')}
                    {' – '}
                    {format(new Date(event.end), 'h:mm a')}
                  </span>
                </div>

                {event.location && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 text-gold/60 shrink-0" aria-hidden="true" />
                    <span>{event.location}</span>
                  </div>
                )}

                {event.category && (
                  <span className="inline-block font-mono text-[9px] tracking-widest uppercase text-gold/50 border border-gold/20 rounded px-1.5 py-0.5">
                    {event.category}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Smart time suggestions */}
        {(suggestLoading || suggestions.length > 0) && (
          <div className="rounded-md border border-gold/20 bg-gold/5 p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-gold font-medium">
              <Sparkles className="h-3 w-3" />
              <span>AI-suggested time</span>
            </div>
            {suggestLoading ? (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span className="font-mono">Finding the best time slot...</span>
              </div>
            ) : (
              suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => onUseSuggestion?.(s)}
                  className="w-full flex items-center justify-between rounded-md border border-border hover:border-gold/30 bg-card p-2.5 transition-all group"
                >
                  <div className="text-left">
                    <p className="text-xs font-medium text-foreground">{s.title}</p>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
                      {format(new Date(s.start), 'EEE, MMM d · h:mm a')} – {format(new Date(s.end), 'h:mm a')}
                    </p>
                  </div>
                  <span className="text-[10px] text-gold font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    Use this
                  </span>
                </button>
              ))
            )}
          </div>
        )}

        {error && (
          <div
            className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive"
            role="alert"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </div>
        )}

        <DialogFooter className="gap-2">
          <Button variant="ghost" size="sm" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button
            size="sm"
            className="bg-gold text-[#0c0c0f] hover:bg-gold/90 font-medium press"
            onClick={handleConfirm}
            disabled={saving}
          >
            {saving ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin mr-1.5" />
                Saving...
              </>
            ) : (
              <>Add {events.length > 1 ? `all ${events.length}` : 'event'}</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
