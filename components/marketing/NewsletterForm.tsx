'use client'

import { useState, useTransition } from 'react'
import { Check, Loader2, AlertCircle } from 'lucide-react'
import { subscribeToNewsletter } from '@/app/(marketing)/_actions/newsletter'
import { cn } from '@/lib/utils'

export function NewsletterForm({
  source,
  variant = 'footer',
}: {
  source: string
  variant?: 'footer' | 'blog'
}) {
  const [state, setState] = useState<'idle' | 'sent'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    formData.set('source', source)
    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)
      if (result.ok) setState('sent')
      else setError(result.error)
    })
  }

  if (state === 'sent') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 text-sm text-gold',
          variant === 'footer' ? 'py-2' : ''
        )}
      >
        <Check className="h-4 w-4" />
        Thanks — check your inbox to confirm.
      </div>
    )
  }

  const isBlog = variant === 'blog'

  return (
    <form onSubmit={handleSubmit} className={cn(isBlog ? 'max-w-md mx-auto' : 'max-w-xs')} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="fullname"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />
      <div className={cn('flex gap-2', isBlog && 'mt-2')}>
        <input
          type="email"
          name="email"
          required
          placeholder="you@work.com"
          aria-label="Email address"
          className={cn(
            'flex-1 rounded-lg bg-white/5 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none',
            isBlog ? 'h-11 px-4' : 'h-9 px-3'
          )}
        />
        <button
          type="submit"
          disabled={pending}
          className={cn(
            'inline-flex items-center justify-center gap-1.5 rounded-lg bg-gold text-[#0c0c0f] font-medium hover:bg-gold/90 disabled:opacity-60 transition-colors',
            isBlog ? 'h-11 px-5 text-sm' : 'h-9 px-4 text-sm'
          )}
        >
          {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : isBlog ? 'Subscribe' : 'Join'}
        </button>
      </div>
      {error && (
        <div className="mt-2 flex items-start gap-2 text-xs text-rose-300">
          <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />
          {error}
        </div>
      )}
    </form>
  )
}
