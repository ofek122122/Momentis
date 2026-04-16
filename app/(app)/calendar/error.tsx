'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function CalendarError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center px-6">
      <AlertTriangle className="h-8 w-8 text-gold/40" />
      <div className="space-y-1">
        <h2 className="font-display text-lg font-semibold">Something went wrong</h2>
        <p className="text-sm text-muted-foreground max-w-xs">
          Failed to load your calendar. This is usually a Google auth token issue.
        </p>
      </div>
      <button
        onClick={reset}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-gold/30 transition-all"
      >
        <RefreshCw className="h-3.5 w-3.5" />
        Try again
      </button>
    </div>
  )
}
