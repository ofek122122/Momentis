import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, Mic } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice calendar — Add events by speaking, not tapping',
  description:
    'Momenties voice input uses Deepgram Nova-3 for sub-second transcription and chrono-node + Gemini for event parsing. Add events while walking, driving, or mid-task without touching your phone.',
  alternates: { canonical: '/voice-calendar' },
  openGraph: {
    title: 'Voice calendar — Speak it. It\'s scheduled.',
    description: 'Add events while walking, driving, or mid-task.',
    url: '/voice-calendar',
    type: 'website',
  },
}

const VOICE_EXAMPLES = [
  { spoken: '"Dentist next thursday at 3pm for an hour"', result: 'Thu Apr 24 · 3:00–4:00 PM · Dentist' },
  { spoken: '"Team lunch friday noon at The Clove Club"', result: 'Fri Apr 25 · 12:00 PM · Team lunch · The Clove Club' },
  { spoken: '"Remind me about my 4pm call with Salesforce"', result: 'Today · 4:00 PM · Call with Salesforce · 10 min reminder' },
  { spoken: '"Block thursday morning for client work"', result: 'Thu Apr 24 · 9:00 AM–12:00 PM · Client work block' },
  { spoken: '"Add a 30-minute buffer before my board meeting tomorrow"', result: 'Tomorrow · Prep block added 30 min before board meeting' },
]

const PIPELINE_STEPS = [
  { step: 'Speak', detail: 'Tap mic, say your event', ms: '0ms' },
  { step: 'Transcribe', detail: 'Deepgram Nova-3 converts speech to text', ms: '~300ms' },
  { step: 'Parse', detail: 'chrono-node + Gemini extract event structure', ms: '~120ms' },
  { step: 'Preview', detail: 'Event shown for confirmation', ms: 'Instant' },
  { step: 'Confirm', detail: 'Tap or say "confirm." Event created.', ms: 'Instant' },
]

const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Japanese', 'Korean', 'Arabic', 'Mandarin', 'Dutch', 'Polish', 'Russian', 'Swedish', 'Turkish', 'Hindi', 'Indonesian', 'Malay', 'Thai', 'Vietnamese', 'Ukrainian', 'Czech', 'Danish', 'Finnish']

export default function VoiceCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Voice calendar"
        title={
          <>
            Say it.
            <br />
            <em className="not-italic text-gold">It&apos;s scheduled.</em>
          </>
        }
        lede="Voice input uses Deepgram Nova-3 for near-instant transcription and the same AI parsing pipeline as text input. Total latency from speaking to event preview: under 500ms."
        crumbs={[{ label: 'Voice calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try voice input <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/voice"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Technical details
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works in browser + mobile app (Q4)</p>
      </PageHero>

      {/* Voice examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What you can say</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Say it naturally. We get it.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {VOICE_EXAMPLES.map((ex, i) => (
              <Reveal key={ex.spoken} delay={i * 35}>
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-[#0f0f14] border-b border-border px-5 py-3 flex items-center gap-3">
                    <Mic className="h-3.5 w-3.5 text-gold/60" />
                    <p className="text-sm text-muted-foreground font-mono italic">{ex.spoken}</p>
                  </div>
                  <div className="px-5 py-3 flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <p className="text-xs text-foreground/90 font-mono">{ex.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Under the hood</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Voice to event in ~440ms.</h2>
          </Reveal>
          <div className="space-y-2">
            {PIPELINE_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 35}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <div className="w-7 h-7 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[9px] text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{step.step}</span>
                      <span className="font-mono text-[10px] text-gold/60">{step.ms}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* When to use voice */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">When voice shines</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Voice when your hands are busy.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Walking between meetings — speak the next event before you forget it',
                'Driving — voice add without looking at your phone',
                'Mid-task — add without losing context by opening an app',
                'After a client call — log the follow-up before you hang up',
                'In a meeting — add action items in real time without disruption',
                'At the gym — schedule tomorrow\'s work blocks without stopping',
              ].map((use, i) => (
                <div key={use} className="flex items-start gap-2 rounded-xl border border-border/40 p-3">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/80 leading-relaxed">{use}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Language support */}
      <section className="py-14 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">Language support</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">24 languages for voice input.</h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span key={lang} className="text-xs font-mono text-muted-foreground border border-border/50 rounded-full px-3 py-1">{lang}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The fastest event input is no input at all. Just speak."
        subtitle="Voice calendar in your browser. Free forever."
        primary={{ label: 'Try voice input', href: '/login' }}
        secondary={{ label: 'See voice architecture', href: '/features/voice' }}
      />
    </>
  )
}
