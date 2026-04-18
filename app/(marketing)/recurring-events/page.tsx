import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recurring events — Create patterns in natural language',
  description:
    'Creating recurring events in most calendar apps requires navigating dropdown menus and selecting from limited preset patterns. Momenties handles any recurring pattern you can describe in plain English.',
  alternates: { canonical: '/recurring-events' },
  openGraph: {
    title: 'Recurring events in natural language',
    description: 'Describe any pattern. Momenties creates it.',
    url: '/recurring-events',
    type: 'website',
  },
}

const EXAMPLES = [
  { input: 'standup every weekday at 9am', parsed: 'Recurring · Mon–Fri · 9:00 AM · No end date' },
  { input: 'book club every other tuesday evening at 7pm', parsed: 'Recurring · Every 2nd Tuesday · 7:00 PM' },
  { input: 'therapy every thursday at 11am for the next 3 months', parsed: 'Recurring · Thursdays · 11:00 AM · 12 occurrences' },
  { input: 'team offsite first monday of every month at 10am', parsed: 'Recurring · 1st Monday of month · 10:00 AM' },
  { input: 'gym every tuesday wednesday thursday at 7am', parsed: 'Recurring · Tue, Wed, Thu · 7:00 AM' },
  { input: 'quarterly planning meeting last friday of each quarter', parsed: 'Recurring · Last Friday of Q1, Q2, Q3, Q4' },
  { input: 'deep work block every monday morning 9 to noon', parsed: 'Recurring · Mondays · 9:00 AM–12:00 PM' },
]

const WHAT_WORKS = [
  'Every weekday / every weekend / every day',
  'Every other [day of week]',
  'Every N weeks / every N days',
  'First/second/third/last [day] of each month',
  'Multiple days: "every tuesday thursday friday"',
  'End date: "for the next 8 weeks" / "until June"',
  'Occurrence count: "10 times" / "for 3 months"',
]

const WHAT_DOESNT = [
  '"Occasionally" or "sometimes" — too vague to parse',
  '"Every few days" — needs a specific number',
  '"Weekdays except Wednesday" — complex exclusions not yet supported',
  '"Last business day of the month" — business day logic coming later',
]

export default function RecurringEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recurring events"
        title={
          <>
            Describe any pattern.
            <br />
            <em className="not-italic text-gold">Momenties creates it.</em>
          </>
        }
        lede="Google Calendar gives you six recurrence options in a dropdown. Momenties gives you language. If you can say it, we can schedule it."
        crumbs={[{ label: 'Recurring events' }]}
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
            Natural language input
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Patterns we handle</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Say it. We schedule it.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {EXAMPLES.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 30}>
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-[#0f0f14] border-b border-border px-5 py-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold/40" />
                    <p className="text-sm text-muted-foreground font-mono italic">"{ex.input}"</p>
                  </div>
                  <div className="px-5 py-3 flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <p className="text-sm text-foreground/90 font-mono text-xs">{ex.parsed}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What works / what doesn't */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <Reveal>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Supported patterns</p>
                <div className="space-y-2">
                  {WHAT_WORKS.map((w, i) => (
                    <div key={w} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80">{w}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={40}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/50 mb-4">Not yet supported</p>
                <div className="space-y-2">
                  {WHAT_DOESNT.map((w, i) => (
                    <div key={w} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 border border-muted-foreground/20 rounded-full shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{w}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Versus dropdown UI */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-4">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why not a dropdown?</h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Recurrence dropdowns exist because they were easy to implement, not because they match how people think. "Every other Tuesday at 7pm" is a completely natural thing to say. Finding it in a recurrence dropdown requires: "Repeat: Weekly" → "Every: 2 weeks" → check "Tuesday." Three interactions to express one thought.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Natural language covers a broader set of patterns (first Monday of the month, last Friday of Q3) and requires zero learning. You type exactly what you'd say to a human assistant, and it works.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Every weekly standup. Every monthly review. One sentence each."
        subtitle="Natural language recurring events. Free forever."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See all NL examples', href: '/natural-language-calendar' }}
      />
    </>
  )
}
