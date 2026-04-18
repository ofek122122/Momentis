import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { DemoParser } from '@/components/marketing/DemoParser'
import { ArrowRight, Type, Mic, Camera, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Live demo — Try Momenties in your browser',
  description: 'Type any sentence. Watch Momenties turn it into a real calendar event. No signup, no card, no catch.',
  alternates: { canonical: '/demo' },
  openGraph: {
    title: 'Try Momenties\'s AI live',
    description: 'Type a sentence. See it parsed. No signup required.',
    url: '/demo',
  },
}

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Live sandbox"
        title={
          <>
            Try it. <em className="not-italic text-gold">Right here.</em>
          </>
        }
        lede="No signup. No card. Just the parser. Type a sentence and watch Momenties turn it into a structured event. If you like what you see, the real thing is two clicks away."
        crumbs={[{ label: 'Demo' }]}
      />

      {/* Interactive demo */}
      <section className="py-16 px-5 md:px-8 border-b border-border relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 dot-grid opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(40% 40% at 50% 0%, rgba(197,163,92,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <DemoParser />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              What just happened
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Under the hood.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                n: '01',
                title: 'chrono-node, locally',
                desc: 'A local natural-language date parser handles the obvious cases in milliseconds. Free, fast, private.',
              },
              {
                n: '02',
                title: 'Gemini 2.5 Flash, in the cloud',
                desc: 'For ambiguous or complex inputs, we escalate to Google\'s Gemini 2.5 Flash with a carefully-tuned system prompt.',
              },
              {
                n: '03',
                title: 'Zod, for safety',
                desc: 'The AI\'s output is validated against a strict Zod schema. If it fails, we fall back to the chrono result. No garbage events, ever.',
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <span className="font-mono text-xs text-gold/50">{step.n}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other input modes */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              In the real app
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Two more ways in.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-2xl border border-border lux-card p-7">
                <Mic className="h-6 w-6 text-gold mb-5" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Speak freely
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Hold the mic and dump your week out loud. Deepgram Nova-3 transcribes in about
                  a second, and the parser handles multi-event sentences gracefully.
                </p>
                <div className="rounded-xl border border-border bg-[#0a0a0d] p-4 font-mono text-xs leading-relaxed text-foreground/80">
                  <span className="text-gold/70">&quot;standup every weekday at nine for fifteen minutes,</span><br />
                  <span className="text-gold/70">&nbsp;dinner with mike friday,</span><br />
                  <span className="text-gold/70">&nbsp;dentist tuesday four&quot;</span><br />
                  <span className="text-muted-foreground mt-2 block">→ 3 events scheduled</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border lux-card p-7">
                <Camera className="h-6 w-6 text-gold mb-5" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Snap a schedule
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Exam timetable, concert bill, wedding itinerary, back-of-napkin list — Gemini
                  Vision reads the whole thing and extracts every date and time at once.
                </p>
                <div className="rounded-xl border border-border bg-[#0a0a0d] p-4 space-y-1.5 text-xs font-mono text-foreground/80">
                  <div>📷 exam_schedule.jpg →</div>
                  <div className="text-gold/80">• Math 101 — Oct 12, 9:00</div>
                  <div className="text-gold/80">• History — Oct 13, 14:00</div>
                  <div className="text-gold/80">• Lab 4 — Oct 16, 10:00</div>
                  <div className="text-muted-foreground">+ 17 more</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-b border-border text-center">
        <Sparkles className="h-10 w-10 text-gold mx-auto mb-5 float-y" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
          Ready to stop typing into form fields?
        </h2>
        <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
          Momenties is free forever for individual use. Takes 90 seconds to set up.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors shadow-lg shadow-gold/10"
          >
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 h-11 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            See every feature →
          </Link>
        </div>
      </section>
    </>
  )
}
