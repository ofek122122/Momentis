'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const QUOTES = [
  {
    quote:
      'Momenties replaced three scheduling apps I was paying for. My team adopted it in a week with zero training.',
    name: 'Amira Okafor',
    role: 'Head of Design · Stratify',
    avatar: 'AO',
  },
  {
    quote:
      'I snap a photo of my kids\' school calendar and every conference, every recital, every half-day lands on my phone. It feels like cheating.',
    name: 'Daniel Reyes',
    role: 'Partner · Meridian VC',
    avatar: 'DR',
  },
  {
    quote:
      'The voice input is my favorite feature. I dump my week out loud on my walk home and by the time I\'m at my door my schedule is set.',
    name: 'Yuki Tanaka',
    role: 'Founder · Lanternwork',
    avatar: 'YT',
  },
  {
    quote:
      'The first calendar tool that I actually wanted my whole team to use. The design alone buys a year of goodwill.',
    name: 'Marcus Wolfe',
    role: 'CTO · Kindrid Health',
    avatar: 'MW',
  },
  {
    quote:
      'I run five calendars across three clients. Momenties unifies them without feeling like a messy inbox. It respects my attention.',
    name: 'Priya Shankar',
    role: 'Fractional COO',
    avatar: 'PS',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % QUOTES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-24 px-5 md:px-8 border-t border-border relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 30%, rgba(197,163,92,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
          Loved by people who hate scheduling
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-12">
          The only calendar worth talking about
        </h2>

        <div className="relative h-[260px] md:h-[200px]">
          {QUOTES.map((q, i) => (
            <blockquote
              key={i}
              aria-hidden={i !== active}
              className={cn(
                'absolute inset-0 flex flex-col items-center justify-center transition-all duration-700',
                i === active
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              )}
            >
              <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed max-w-3xl px-4">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center text-xs font-mono text-gold">
                  {q.avatar}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-foreground">{q.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{q.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={cn(
                'h-1 rounded-full transition-all',
                i === active ? 'w-8 bg-gold' : 'w-2 bg-white/15 hover:bg-white/30'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
