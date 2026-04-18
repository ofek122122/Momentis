import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Mic2, Zap, Globe, Volume2, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice add — Speak your calendar into existence',
  description:
    'Talk to your calendar. Momenties transcribes your voice and parses it into an event in under 440ms. Works in 30 languages. No "Hey Calendar" wake words.',
  alternates: { canonical: '/features/voice' },
  openGraph: {
    title: 'Momenties Voice Add',
    description: 'Speak your calendar into existence. Under 440ms.',
    url: '/features/voice',
    type: 'website',
  },
}

const STEPS = [
  {
    step: '01',
    time: '0ms',
    title: 'You tap the mic and speak',
    desc: 'Tap the microphone icon in the input bar or press the M key. Speak naturally, like you\'re telling someone about a meeting.',
  },
  {
    step: '02',
    time: '~340ms',
    title: 'Deepgram transcribes',
    desc: 'Audio streams to Deepgram Nova-3 in real time. We get a transcript back while you\'re still speaking. Median time: 340ms.',
  },
  {
    step: '03',
    time: '~100ms',
    title: 'Parser converts to event',
    desc: 'The transcript goes through our hybrid parser. 75% of inputs are handled by chrono-node locally in 18ms. The rest go to Gemini.',
  },
  {
    step: '04',
    time: '~440ms total',
    title: 'Event appears',
    desc: 'A fully structured event — title, time, duration, participants — appears for your confirmation. One tap to save.',
  },
]

const EXAMPLES = [
  { input: '"dentist thursday three pm for an hour"', output: 'Dentist · Thu Apr 24 · 3:00–4:00 PM' },
  { input: '"call with sarah next week tuesday morning"', output: 'Call with Sarah · Tue Apr 29 · 9:00 AM' },
  { input: '"team lunch every friday at noon starting next week"', output: 'Team Lunch · Fri (weekly) · 12:00–1:00 PM' },
  { input: '"remind me about the board presentation in three weeks"', output: 'Board Presentation · May 12 · all-day reminder' },
  { input: '"cancel my four o\'clock today"', output: 'Deletes 4:00 PM event today' },
]

const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Japanese', 'Korean',
  'Mandarin', 'Arabic', 'Hindi', 'Dutch', 'Polish', 'Russian', 'Swedish', 'Turkish',
  'Danish', 'Finnish', 'Norwegian', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian', 'Malay',
]

export default function VoicePage() {
  return (
    <>
      <PageHero
        eyebrow="Voice add"
        title={
          <>
            Speak it.
            <br />
            <em className="not-italic text-gold">It&apos;s scheduled.</em>
          </>
        }
        lede="The fastest way to create a calendar event is also the most natural one. Say what you need, hear it confirmed, and move on. No typing. No form fields. 440ms end-to-end."
        crumbs={[{ label: 'Features' }, { label: 'Voice' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try voice add <Mic2 className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See the demo
          </Link>
        </div>
      </PageHero>

      {/* Examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What you can say</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Talk like a human. Not a computer.
            </h2>
          </Reveal>
          <div className="space-y-2">
            {EXAMPLES.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-4">
                  <div className="flex items-start gap-3">
                    <Mic2 className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground italic">{ex.input}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-px flex-1 bg-border/50" />
                        <ArrowRight className="h-3 w-3 text-gold/40" />
                        <div className="h-px flex-1 bg-border/50" />
                      </div>
                      <p className="text-sm text-foreground font-medium mt-2">{ex.output}</p>
                    </div>
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
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pipeline</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four steps in under half a second.
            </h2>
          </Reveal>
          <div className="relative pl-8">
            <div className="absolute left-3 top-4 bottom-4 w-px bg-border" aria-hidden />
            <div className="space-y-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.step} delay={i * 60}>
                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center">
                      <span className="font-mono text-[9px] text-gold/70">{String(i + 1)}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-sm font-medium text-foreground">{step.title}</h3>
                          <span className="font-mono text-[10px] text-gold/60 border border-gold/20 bg-gold/5 px-1.5 py-0.5 rounded">{step.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Languages</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              30 languages supported.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Deepgram Nova-3 handles transcription. Our parser handles the rest.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span key={lang} className="text-xs font-mono text-muted-foreground border border-border/50 rounded-full px-3 py-1">
                  {lang}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it can't do */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Limitations</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              What voice add doesn&apos;t do.
            </h2>
          </Reveal>
          <div className="space-y-2">
            {[
              { item: 'No wake word', note: 'You have to tap the mic. We won\'t listen in the background.' },
              { item: 'No complex instructions in one phrase', note: '"Add lunch and also move my 3pm to 4pm" — say them separately for best results.' },
              { item: 'Mobile app not yet released', note: 'Voice add is available on the web app. The mobile app (with offline voice) ships Q4 2026.' },
            ].map((l, i) => (
              <Reveal key={l.item} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{l.item}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{l.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Say the next event out loud."
        subtitle="Tap the mic, say the thing, it's on your calendar. 440ms."
        primary={{ label: 'Try voice add free', href: '/login' }}
        secondary={{ label: 'See all input methods', href: '/features' }}
      />
    </>
  )
}
