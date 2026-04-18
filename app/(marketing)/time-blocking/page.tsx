import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, Clock, Zap, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Time blocking with AI — Build a protected week in seconds',
  description:
    'Time blocking works. Setting it up takes too long. Momenties lets you block time with natural language — "deep work tuesday 2–5pm every week" — and tracks whether your blocks actually hold.',
  alternates: { canonical: '/time-blocking' },
  openGraph: {
    title: 'Time blocking with AI',
    description: 'Build a protected week in seconds, not minutes.',
    url: '/time-blocking',
    type: 'website',
  },
}

const EXAMPLES = [
  {
    input: 'deep work tuesday and thursday 9am to noon',
    result: '2 recurring blocks created, 9:00–12:00 AM, every week',
  },
  {
    input: 'email and admin every day 8–9am',
    result: 'Recurring daily block created, 8:00–9:00 AM',
  },
  {
    input: 'no meetings friday afternoons',
    result: 'Recurring "Protected" block, Fridays 12:00–6:00 PM',
  },
  {
    input: 'weekly review friday 4pm for 45 minutes',
    result: 'Recurring event, Friday 4:00–4:45 PM',
  },
  {
    input: 'block 2 hours this week for reading',
    result: 'Smart scheduling finds the best 2-hour slot this week',
  },
]

const SCIENCE = [
  { stat: '2.4×', label: 'More likely to complete a task when it has a specific time slot on your calendar vs. a to-do list item' },
  { stat: '23 min', label: 'Average recovery time to regain focus after an interruption during deep work' },
  { stat: '64%', label: 'Of knowledge workers say blocked focus time is their most productive period of the week' },
]

const HOW = [
  {
    icon: Zap,
    title: 'Natural language blocks',
    desc: 'Type or speak your time blocks exactly as you think about them. Momenties creates recurring or one-off blocks instantly.',
  },
  {
    icon: Clock,
    title: 'Focus mode protection',
    desc: 'Tag a block as Focus and Momenties auto-enables DND when it starts. Attendees who try to book over it get a warning.',
  },
  {
    icon: BarChart3,
    title: 'Compliance analytics',
    desc: 'See which blocks actually held vs. which got filled with meetings. The data makes the pattern undeniable.',
  },
]

export default function TimeBlockingPage() {
  return (
    <>
      <PageHero
        eyebrow="Time blocking"
        title={
          <>
            Build a protected week
            <br />
            <em className="not-italic text-gold">in seconds, not minutes.</em>
          </>
        }
        lede="Time blocking is one of the most evidence-backed productivity techniques. The reason most people don't do it is the friction: setting up recurring blocks, maintaining them, and enforcing them takes real effort. Momenties removes that friction."
        crumbs={[{ label: 'Time blocking' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-mode"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus mode
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Focus mode on Pro trial</p>
      </PageHero>

      {/* Stats */}
      <section className="py-14 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SCIENCE.map((s, i) => (
              <Reveal key={s.stat} delay={i * 70}>
                <div className="rounded-xl border border-border p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gold mb-2">{s.stat}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What you type</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Time blocks in natural language.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {EXAMPLES.map((ex, i) => (
              <Reveal key={ex.input} delay={i * 35}>
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-[#0f0f14] border-b border-border px-5 py-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold/40" />
                    <p className="text-sm text-muted-foreground font-mono italic">"{ex.input}"</p>
                  </div>
                  <div className="px-5 py-3 flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <p className="text-sm text-foreground/90">{ex.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Three pieces</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What makes time blocking actually work.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {HOW.map((h, i) => (
              <Reveal key={h.title} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <h.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{h.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why it matters</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Time blocking fails for one reason.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                The research on time blocking is consistent: people who assign specific times to their work are significantly more likely to do that work than people who keep to-do lists. The mechanism is straightforward — a time on your calendar is a commitment to yourself. A list item is a wish.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                But most people who try time blocking eventually give up. The reason is almost never the technique — it's the maintenance cost. You have to create the blocks. You have to update them when things shift. You have to re-block when meetings eat them. You have to re-enforce the blocks every week when they get trampled.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties addresses the creation cost with AI parsing — a block that would take 6 clicks takes one sentence. It addresses the enforcement cost with Focus mode — the block enforces itself. It addresses the feedback cost with analytics — you can see exactly how well your blocks held last week without manually reviewing your calendar.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Most people who use time blocking with Momenties for one week don't stop. The friction floor drops below the threshold where it feels like work.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/focus-mode" className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors">
                How Focus mode protects blocks <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/features/analytics" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Calendar analytics <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Block this week. Actually protect it this time."
        subtitle="Natural language blocks, Focus mode, and compliance analytics."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See Focus mode', href: '/focus-mode' }}
      />
    </>
  )
}
