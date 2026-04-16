'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6 bg-background">
      <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center">
        <AlertTriangle className="h-10 w-10 text-gold/40" />
      </div>
      <div className="space-y-2">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="text-sm text-muted-foreground max-w-sm">
          An unexpected error occurred. This has been logged automatically.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-gold/30 transition-all press"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Try again
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
        >
          <Home className="h-3.5 w-3.5" />
          Go home
        </Link>
      </div>
    </div>
  )
}
