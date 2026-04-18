'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Sparkles, Loader2, Users, RefreshCw } from 'lucide-react'

const SAMPLES = [
  'dentist thursday 3pm',
  'lunch with sarah tomorrow at 12:30 at the ramen place',
  'team standup every weekday 9am for 15 minutes',
  'board meeting next friday 2-4pm',
  'mom\'s birthday dinner sunday 7pm at home',
  'gym monday wednesday friday 6:30am',
]

type ParsedEvent = {
  title: string
  start: string
  end: string
  date: string
  location?: string
  recurrence?: string
  attendees?: string[]
}

function fakeParse(input: string): ParsedEvent {
  const lower = input.toLowerCase()
  const now = new Date()

  function nextDayOfWeek(name: string) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const idx = days.indexOf(name)
    if (idx < 0) return null
    const d = new Date(now)
    const delta = (idx - d.getDay() + 7) % 7 || 7
    d.setDate(d.getDate() + delta)
    return d
  }

  let date = new Date(now)
  if (lower.includes('tomorrow')) date.setDate(date.getDate() + 1)
  else if (lower.includes('sunday')) date = nextDayOfWeek('sunday') ?? date
  else if (lower.includes('monday')) date = nextDayOfWeek('monday') ?? date
  else if (lower.includes('tuesday')) date = nextDayOfWeek('tuesday') ?? date
  else if (lower.includes('wednesday')) date = nextDayOfWeek('wednesday') ?? date
  else if (lower.includes('thursday')) date = nextDayOfWeek('thursday') ?? date
  else if (lower.includes('friday')) date = nextDayOfWeek('friday') ?? date
  else if (lower.includes('saturday')) date = nextDayOfWeek('saturday') ?? date

  const timeMatch = lower.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/)
  let hour = 12
  let minute = 0
  if (timeMatch) {
    hour = parseInt(timeMatch[1], 10)
    minute = timeMatch[2] ? parseInt(timeMatch[2], 10) : 0
    if (timeMatch[3] === 'pm' && hour < 12) hour += 12
    if (timeMatch[3] === 'am' && hour === 12) hour = 0
  }

  const durationMatch = lower.match(/(\d+)\s*minute|for (\d+)\s*min|(\d{1,2})-(\d{1,2})(am|pm)?/)
  let durationMin = 60
  if (durationMatch) {
    if (durationMatch[1]) durationMin = parseInt(durationMatch[1], 10)
    else if (durationMatch[2]) durationMin = parseInt(durationMatch[2], 10)
    else if (durationMatch[3] && durationMatch[4]) {
      let h1 = parseInt(durationMatch[3], 10)
      let h2 = parseInt(durationMatch[4], 10)
      if (durationMatch[5] === 'pm') {
        if (h1 < 12) h1 += 12
        if (h2 < 12) h2 += 12
      }
      durationMin = (h2 - h1) * 60
    }
  }

  const start = new Date(date)
  start.setHours(hour, minute, 0, 0)
  const end = new Date(start.getTime() + durationMin * 60_000)

  const locMatch = input.match(/at\s+(?:the\s+)?([a-z0-9' ]+?)(?:$|\s+(?:at|for|from))/i)
  const location = locMatch ? locMatch[1].trim() : undefined

  const withMatch = input.match(/with\s+([a-z, ]+?)(?=\s+(?:at|on|tomorrow|next|this|$))/i)
  const attendees = withMatch
    ? withMatch[1].split(/,|\sand\s/).map((s) => s.trim()).filter(Boolean)
    : undefined

  const recurrenceMatch = /(every|daily|weekdays|monday wednesday friday)/i.exec(lower)
  const recurrence = recurrenceMatch ? `Recurring · ${recurrenceMatch[0]}` : undefined

  // derive title — remove obvious time/date tokens
  let title = input
    .replace(/\b(tomorrow|today|tonight|next|this)\b/gi, '')
    .replace(/\b(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/gi, '')
    .replace(/\b(at\s+the\s+[a-z' ]+)$/i, '')
    .replace(/\b(at\s+[a-z' ]+)$/i, '')
    .replace(/\b(from|at|for)\s+\d.*$/i, '')
    .replace(/\b\d{1,2}(:\d{2})?\s*(am|pm)?\b/gi, '')
    .replace(/\b\d+\s*minute.*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
  title = title.charAt(0).toUpperCase() + title.slice(1)
  if (!title) title = 'New event'

  return {
    title,
    start: start.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    end: end.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    date: start.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }),
    location,
    recurrence,
    attendees,
  }
}

export function DemoParser() {
  const [input, setInput] = useState('dentist thursday 3pm')
  const [parsed, setParsed] = useState<ParsedEvent | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleParse() {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600 + Math.random() * 400))
    setParsed(fakeParse(input))
    setLoading(false)
  }

  function handleSample(s: string) {
    setInput(s)
    setParsed(null)
  }

  return (
    <div className="rounded-3xl border border-border bg-[#0f0f14]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
      {/* Titlebar */}
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-white/[0.015]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          momenties.app/demo
        </span>
        <div className="w-14" />
      </div>

      <div className="p-6 md:p-10 space-y-6">
        {/* Input */}
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
            Try it — type or paste any phrase
          </label>
          <div className="relative">
            <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleParse()
              }}
              placeholder="dentist thursday 3pm"
              className="w-full h-14 pl-11 pr-36 rounded-2xl bg-white/[0.04] border border-border text-base font-display text-foreground placeholder:text-muted-foreground/50 focus:border-gold/40 focus:bg-white/[0.06] focus:outline-none transition-colors input-breathe"
            />
            <button
              type="button"
              onClick={handleParse}
              disabled={loading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 rounded-xl bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 disabled:opacity-60 transition-colors inline-flex items-center gap-2"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Parse'}
            </button>
          </div>
        </div>

        {/* Samples */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Try one of these:
          </p>
          <div className="flex flex-wrap gap-2">
            {SAMPLES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleSample(s)}
                className="px-3 h-8 rounded-full border border-border hover:border-gold/30 hover:text-gold transition-colors text-xs text-muted-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {parsed ? (
          <div className="rounded-2xl border border-gold/25 bg-gradient-to-b from-gold/5 to-transparent p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-wider border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Parsed in 0.82s
              </span>
              <button
                type="button"
                onClick={() => setParsed(null)}
                className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" /> Reset
              </button>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              {parsed.title}
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-foreground/90">
                <Calendar className="h-4 w-4 text-gold/70" />
                {parsed.date}
              </div>
              <div className="flex items-center gap-2 text-foreground/90">
                <Clock className="h-4 w-4 text-gold/70" />
                {parsed.start} – {parsed.end}
              </div>
              {parsed.location && (
                <div className="flex items-center gap-2 text-foreground/90">
                  <MapPin className="h-4 w-4 text-gold/70" />
                  {parsed.location}
                </div>
              )}
              {parsed.attendees && parsed.attendees.length > 0 && (
                <div className="flex items-center gap-2 text-foreground/90">
                  <Users className="h-4 w-4 text-gold/70" />
                  {parsed.attendees.join(', ')}
                </div>
              )}
              {parsed.recurrence && (
                <div className="flex items-center gap-2 text-foreground/90">
                  <RefreshCw className="h-4 w-4 text-gold/70" />
                  {parsed.recurrence}
                </div>
              )}
            </div>
            <div className="mt-5 pt-5 border-t border-border/40 text-xs text-muted-foreground">
              This is a sandbox — no event is saved. Sign up to schedule for real.
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground">
            Your parsed event will appear here.
          </div>
        )}
      </div>
    </div>
  )
}
