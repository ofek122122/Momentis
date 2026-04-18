'use client'

import { useState, useTransition } from 'react'
import { Check, Loader2, AlertCircle } from 'lucide-react'
import { submitContact } from '@/app/(marketing)/_actions/contact'

const SUBJECTS = [
  'General question',
  'Support',
  'Sales / Enterprise',
  'Press',
  'Partnership',
  'Something else',
] as const
type Subject = (typeof SUBJECTS)[number]

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sent'>('idle')
  const [subject, setSubject] = useState<Subject>('General question')
  const [error, setError] = useState<{ message: string; field?: string } | null>(null)
  const [pending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('subject', subject)

    startTransition(async () => {
      const result = await submitContact(formData)
      if (result.ok) {
        setState('sent')
      } else {
        setError({ message: result.error, field: result.field })
      }
    })
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/5 to-transparent p-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold/30 mb-5">
          <Check className="h-5 w-5 text-gold" />
        </div>
        <h3 className="font-display text-2xl text-foreground mb-2">Message received.</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Thank you for writing. You&apos;ll get a real human reply within a few hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users, visible to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          invalid={error?.field === 'name'}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@work.com"
          invalid={error?.field === 'email'}
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Subject
        </label>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSubject(s)}
              className={`h-8 px-3 rounded-full text-xs border transition-all ${
                subject === s
                  ? 'border-gold/40 bg-gold/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-white/20 hover:text-foreground'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={4000}
          placeholder="Tell us what's on your mind..."
          className={`w-full rounded-xl bg-white/[0.03] border ${
            error?.field === 'message' ? 'border-rose-400/60' : 'border-border'
          } px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/40 focus:bg-white/[0.05] focus:outline-none transition-colors resize-none`}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-rose-400/30 bg-rose-500/5 p-4 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-rose-400 mt-0.5 shrink-0" />
          <p className="text-sm text-rose-100/90">{error.message}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-foreground">
          By sending, you agree to our{' '}
          <a href="/privacy" className="text-gold hover:underline">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 disabled:opacity-60 transition-colors"
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            'Send message'
          )}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  invalid,
}: {
  label: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
  invalid?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`w-full h-11 rounded-lg bg-white/[0.03] border ${
          invalid ? 'border-rose-400/60' : 'border-border'
        } px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/40 focus:bg-white/[0.05] focus:outline-none transition-colors`}
      />
    </div>
  )
}
