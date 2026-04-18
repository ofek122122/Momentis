import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Natural language calendar — Type events the way you think',
  description:
    'Momenties is a natural language calendar that converts plain text into structured events in under 20ms. No forms, no dropdowns, no friction.',
  alternates: { canonical: '/natural-language-calendar' },
  openGraph: {
    title: 'The natural language calendar',
    description: 'Type "dentist thursday 3pm" and it\'s on your calendar.',
    url: '/natural-language-calendar',
    type: 'website',
  },
}

const EXAMPLES = [
  {
    input: 'dentist thursday 3pm for an hour',
    output: { title: 'Dentist', date: 'Thu, Apr 24', time: '3:00–4:00 PM', confidence: '99%' },
  },
  {
    input: 'call with sarah next week tuesday morning',
    output: { title: 'Call with Sarah', date: 'Tue, Apr 29', time: '9:00 AM', confidence: '94%' },
  },
  {
    input: 'team standup every weekday at 9am',
    output: { title: 'Team standup', date: 'Mon–Fri (recurring)', time: '9:00 AM', confidence: '98%' },
  },
  {
    input: 'coffee with jake next friday at 11 at Ozone',
    output: { title: 'Coffee with Jake', date: 'Fri, Apr 25', time: '11:00 AM · Ozone', confidence: '97%' },
  },
  {
    input: 'block thursday afternoon for deep work',
    output: { title: 'Deep work', date: 'Thu, Apr 24', time: '1:00–5:00 PM', confidence: '91%' },
  },
  {
    input: 'move my 3pm to 4pm today',
    output: { title: 'Existing event moved', date: 'Today', time: '4:00 PM', confidence: '95%' },
  },
]

const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Japanese', 'Korean', 'Arabic', 'Mandarin']

export default function NaturalLanguageCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Natural language calendar"
        title={
          <>
            Type it the way
            <br />
            <em className="not-italic text-gold">you think it.</em>
          </>
        }
        lede="Momenties converts plain text into structured calendar events in under 20ms. No forms to fill, no dropdowns to navigate. Just type what you need and press enter."
        crumbs={[{ label: 'Natural language calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try it free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Live demo
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Examples</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What you type. What you get.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {EXAMPLES.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 35}>
                <div className="rounded-xl border border-border lux-card overflow-hidden">
                  <div className="bg-[#0f0f14] border-b border-border px-5 py-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold/40" />
                    <p className="text-sm text-muted-foreground font-mono italic">"{ex.input}"</p>
                  </div>
                  <div className="px-5 py-3 flex flex-wrap items-center gap-x-6 gap-y-1">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/50">Title</span>
                      <p className="text-sm font-medium text-foreground">{ex.output.title}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/50">Date</span>
                      <p className="text-sm text-foreground/90">{ex.output.date}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/50">Time</span>
                      <p className="text-sm text-foreground/90">{ex.output.time}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-gold/50">Confidence</span>
                      <p className="text-sm font-mono text-gold">{ex.output.confidence}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Architecture</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              18ms. No magic — just the right stack.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                The reason most AI calendar apps feel slow is that they send every input to a language model. Gemini and GPT-4 are impressive, but they have 200–800ms latency. That&apos;s not slow by AI standards — but it&apos;s slow by calendar standards.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                We use a hybrid approach. First, we run <strong className="font-medium text-foreground">chrono-node</strong> — a local date parser that runs in your browser in under 20ms. It handles 75% of inputs correctly. When it&apos;s not confident, the input goes to <strong className="font-medium text-foreground">Gemini 2.5 Flash</strong> (280ms). The average latency across all inputs is well under 100ms.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                We also parse on a 250ms debounce — not per keystroke. The AI is called when you pause, not on every letter. That means four API calls per second at most, rather than one per character. The input feels instant; the network is barely touched.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/ai" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              Full AI architecture deep-dive <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Languages</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">10 languages on the Gemini path.</h2>
            <p className="mt-2 text-sm text-muted-foreground">English, Spanish, French, German, Portuguese, Italian, Japanese, Korean, Arabic, Mandarin. More coming with Gemini updates.</p>
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

      {/* What it can't do */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What natural language input doesn&apos;t do.</h2>
          </Reveal>
          <div className="space-y-2">
            {[
              { item: 'No ambiguous multi-action commands', note: '"Add lunch and also reschedule my 3pm" should be two separate inputs for best results.' },
              { item: 'Recurring events require explicit patterns', note: '"Every other Tuesday" works. Vague patterns like "occasionally" don\'t.' },
              { item: 'Person lookup isn\'t automatic', note: '"Lunch with Lisa" creates an event with that title — it won\'t auto-invite Lisa from your contacts yet.' },
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
        title="Type your next event. See what 18ms feels like."
        subtitle="Free forever. First event in under 90 seconds."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'Live demo', href: '/demo' }}
      />
    </>
  )
}
