import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Mic, Camera, Zap, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Calendar Assistant — Natural language, voice, and photo scheduling',
  description:
    'An AI calendar assistant that understands natural language, voice input, and photos. Add events in under 2 seconds. Analyze how you spend your time. Focus mode protects your important blocks.',
  alternates: { canonical: '/ai-calendar-assistant' },
  openGraph: {
    title: 'AI Calendar Assistant — Momenties',
    description: 'Type it, say it, photograph it. It\'s on your calendar.',
    url: '/ai-calendar-assistant',
    type: 'website',
  },
}

const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Natural language parsing',
    desc: 'Type anything: "dentist thursday 3pm," "team lunch friday noon for 90 mins," "quarterly review last thursday of march." AI extracts every date, time, duration, and title. Under 20ms for most inputs.',
  },
  {
    icon: Mic,
    title: 'Voice-first input',
    desc: 'Speak your schedule hands-free. Voice input works on mobile and desktop. Transcription by Deepgram Nova-3, then parsed by the same AI engine as text. Total latency under 500ms.',
  },
  {
    icon: Camera,
    title: 'Photo-to-calendar',
    desc: 'Photograph any printed schedule — class timetable, conference agenda, training plan, event poster. AI extracts all dates and events and adds them to your calendar. Handle 20 events in 30 seconds.',
  },
  {
    icon: BarChart3,
    title: 'AI-powered analytics',
    desc: 'AI categorizes your events by type and generates weekly summaries. How many hours in meetings? Deep work trending up or down? Personal time protected? AI surfaces the signals that matter.',
  },
]

const PARSING_EXAMPLES = [
  { input: '"dinner with mom saturday 7pm"', parsed: 'Dinner with mom · Sat 7:00 PM', engine: 'chrono-node (18ms)' },
  { input: '"stand-up every weekday 9am 15 mins"', parsed: 'Stand-up · Mon–Fri 9:00–9:15 AM, recurring', engine: 'chrono-node (22ms)' },
  { input: '"doctor appointment the tuesday after thanksgiving"', parsed: 'Doctor appointment · Tue Nov 2026', engine: 'Gemini 2.5 Flash (280ms)' },
  { input: '"board meeting quarterly first tuesday"', parsed: 'Board meeting · recurring quarterly', engine: 'Gemini 2.5 Flash (310ms)' },
  { input: '"wedding anniversary dinner may 14 seven pm, book Nobu"', parsed: 'Wedding anniversary dinner · May 14 7:00 PM · notes: book Nobu', engine: 'Gemini 2.5 Flash (290ms)' },
]

const HOW_IT_WORKS = [
  { step: '1', title: 'Input received', desc: 'Text, voice, or photo. All three paths converge on the same parsing engine.' },
  { step: '2', title: 'Local parsing first', desc: 'chrono-node attempts to parse the input locally. Free, fast (18ms), handles 75% of inputs.' },
  { step: '3', title: 'Gemini fallback', desc: 'Complex or ambiguous inputs go to Gemini 2.5 Flash. Handles relative dates, multi-event inputs, and natural language edge cases.' },
  { step: '4', title: 'Structured event returned', desc: 'title, start, end, duration, recurrence, location, description — all extracted and ready to create.' },
  { step: '5', title: 'Google Calendar synced', desc: 'Event created in Momenties and synced to Google Calendar immediately. Attendees get invites. Siri and Apple Watch see it via CalDAV.' },
]

export default function AiCalendarAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Calendar Assistant"
        title={
          <>
            Type it, say it,
            <br />
            <em className="not-italic text-gold">photograph it.</em>
          </>
        }
        lede="Momenties is an AI calendar assistant that accepts natural language, voice, and photos — and turns any of them into calendar events in under 2 seconds. No form, no field-filling, no friction between the thought and the calendar."
        crumbs={[{ label: 'AI Calendar Assistant' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/natural-language-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            How parsing works
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · All three input methods included · Works with Google Calendar</p>
      </PageHero>

      {/* Capabilities */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What it does</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four AI-powered calendar capabilities.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <c.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parsing examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Parsing examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What the AI understands.</h2>
          </Reveal>
          <div className="space-y-3">
            {PARSING_EXAMPLES.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex-1">
                      <p className="font-mono text-[10px] text-muted-foreground/60 mb-1">Input</p>
                      <p className="font-mono text-sm text-foreground">{ex.input}</p>
                    </div>
                    <div className="hidden sm:block text-gold/30 text-xl pt-4">→</div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] text-muted-foreground/60 mb-1">Event</p>
                      <p className="text-sm text-foreground/90 mb-0.5">{ex.parsed}</p>
                      <span className="font-mono text-[10px] text-gold/50">{ex.engine}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">How the AI works under the hood.</h2>
          </Reveal>
          <div className="space-y-3">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-4 shrink-0 pt-0.5">{step.step}.</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-4">
            <Link href="/natural-language-calendar" className="text-xs text-gold/70 hover:text-gold transition-colors">Full parsing technical details →</Link>
          </Reveal>
        </div>
      </section>

      <CTA
        title="An AI assistant that actually understands your schedule."
        subtitle="Text, voice, or photo. Under 2 seconds. Free forever."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'How parsing works', href: '/natural-language-calendar' }}
      />
    </>
  )
}
