'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROMPTS = [
  {
    input: 'dentist thursday 3pm',
    event: {
      title: 'Dentist appointment',
      day: 'Thu, Apr 23',
      time: '3:00 – 4:00 PM',
      place: 'Dr. Lewis, Dental Clinic',
      color: 'emerald',
    },
  },
  {
    input: 'lunch with sarah tomorrow at 12:30 at that ramen place',
    event: {
      title: 'Lunch with Sarah',
      day: 'Tomorrow',
      time: '12:30 – 1:30 PM',
      place: 'Momofuku Ramen, 10 E 3rd St',
      color: 'gold',
    },
  },
  {
    input: 'team standup every weekday 9am',
    event: {
      title: 'Team standup',
      day: 'Mon–Fri · recurring',
      time: '9:00 – 9:15 AM',
      place: 'Google Meet',
      color: 'sky',
    },
  },
  {
    input: 'call mom sunday evening',
    event: {
      title: 'Call mom',
      day: 'Sun, Apr 26',
      time: '7:00 – 7:30 PM',
      place: 'Phone',
      color: 'rose',
    },
  },
]

const COLOR_MAP: Record<string, string> = {
  emerald: 'bg-emerald-500/70',
  gold: 'bg-gold/80',
  sky: 'bg-sky-400/70',
  rose: 'bg-rose-400/70',
}

export function HeroDemo() {
  const [idx, setIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [showEvent, setShowEvent] = useState(false)

  useEffect(() => {
    let cancelled = false
    const current = PROMPTS[idx]
    setTyped('')
    setShowEvent(false)
    ;(async () => {
      for (let i = 0; i <= current.input.length; i++) {
        if (cancelled) return
        setTyped(current.input.slice(0, i))
        await new Promise((r) => setTimeout(r, 40 + Math.random() * 30))
      }
      await new Promise((r) => setTimeout(r, 500))
      if (cancelled) return
      setShowEvent(true)
      await new Promise((r) => setTimeout(r, 3200))
      if (cancelled) return
      setIdx((p) => (p + 1) % PROMPTS.length)
    })()
    return () => {
      cancelled = true
    }
  }, [idx])

  const current = PROMPTS[idx]

  return (
    <div className="relative mx-auto max-w-2xl">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[40px] opacity-60 blur-2xl"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 50%, rgba(197,163,92,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative rounded-2xl border border-border bg-[#0f0f14]/90 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="ml-3 text-[11px] font-mono text-muted-foreground/60">
            momenties — new event
          </div>
        </div>

        <div className="p-6 md:p-8 min-h-[260px]">
          <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-gold/70 mb-3">
            Just say it
          </label>
          <div className="flex items-start gap-3 pb-5 border-b border-border/60">
            <Sparkles className="h-4 w-4 text-gold mt-1 shrink-0" />
            <p className="font-display text-xl md:text-2xl text-foreground leading-snug tracking-tight text-left">
              {typed}
              <span className="caret inline-block w-[2px] h-[1.1em] translate-y-0.5 bg-gold/80 ml-0.5" />
            </p>
          </div>

          <div
            className={cn(
              'mt-5 transition-all duration-500',
              showEvent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            )}
          >
            <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.015] p-4 text-left">
              <div className={cn('w-1 self-stretch rounded-full', COLOR_MAP[current.event.color])} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    scheduled
                  </span>
                </div>
                <div className="font-display text-base md:text-lg font-semibold text-foreground">
                  {current.event.title}
                </div>
                <div className="mt-2 space-y-1 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-gold/60" />
                    {current.event.day}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-gold/60" />
                    {current.event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-gold/60" />
                    {current.event.place}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {PROMPTS.map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-1 rounded-full transition-all duration-500',
              i === idx ? 'w-8 bg-gold' : 'w-1 bg-white/15'
            )}
          />
        ))}
      </div>
    </div>
  )
}
