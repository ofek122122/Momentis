import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, BarChart3, Shield, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work-life balance and your calendar — Make the invisible visible',
  description:
    'Work-life balance isn\'t about working less — it\'s about working intentionally. Momenties shows where your time actually goes, protects time off from meeting creep, and helps you understand your week clearly.',
  alternates: { canonical: '/work-life-balance' },
  openGraph: {
    title: 'Work-life balance and your calendar',
    description: 'Make the invisible visible.',
    url: '/work-life-balance',
    type: 'website',
  },
}

const PILLARS = [
  {
    icon: BarChart3,
    title: 'See where your time actually goes',
    desc: 'Most people think they work 8 hours. Analytics shows the reality: meetings, focused work, and administrative tasks broken down per day and week. The data creates awareness. Awareness creates change.',
  },
  {
    icon: Shield,
    title: 'Protect non-work time',
    desc: 'Block evenings and weekends as "personal time" with Focus mode. When colleagues try to book 7pm calls, they see the block — and most find a daytime slot instead.',
  },
  {
    icon: Sun,
    title: 'Start work with intention',
    desc: 'The Daily Brief gives you a calm, 45-second overview each morning: what\'s ahead, where the load is, one scheduling suggestion. Less anxiety. More intentionality.',
  },
]

const SIGNALS = [
  { signal: 'Meeting hours > 4h/day, 3+ days/week', insight: 'You\'re in reactive mode. Protect at least two mornings for proactive work.' },
  { signal: 'Focus blocks created but regularly overridden', insight: 'Your blocks need more friction. Enable Focus mode — attendee warnings change behavior.' },
  { signal: 'Empty slots after 6pm appearing in analytics', insight: 'Late work is normalized in your calendar. Add a recurring "Personal time" block from 6pm.' },
  { signal: 'Time with any single person > 25% of your week', insight: 'Strong dependency. Worth an explicit conversation about asynchronous alternatives.' },
]

export default function WorkLifeBalancePage() {
  return (
    <>
      <PageHero
        eyebrow="Work-life balance"
        title={
          <>
            What you don&apos;t measure
            <br />
            <em className="not-italic text-gold">you can&apos;t improve.</em>
          </>
        }
        lede="Work-life balance is a calendar problem before it's anything else. If your calendar doesn't show you where your time goes, you can't make informed decisions about it. Momenties makes the invisible visible."
        crumbs={[{ label: 'Work-life balance' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan · Analytics on Pro trial</p>
      </PageHero>

      {/* Three pillars */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How Momenties helps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Three calendar interventions.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signals */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Analytics signals</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What the data tells you.</h2>
            <p className="text-sm text-muted-foreground mt-2">Patterns analytics surfaces and what to do about them.</p>
          </Reveal>
          <div className="space-y-4">
            {SIGNALS.map((s, i) => (
              <Reveal key={s.signal} delay={i * 40}>
                <div className="rounded-xl border border-border/50 lux-card p-5">
                  <p className="text-xs font-mono text-gold/60 uppercase tracking-wider mb-2">Pattern detected</p>
                  <p className="text-sm font-medium text-foreground mb-3">{s.signal}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/80 leading-relaxed">{s.insight}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Work-life balance is a measurement problem.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most people who feel like their work-life balance is off don't have a clear picture of what "off" looks like in numbers. They know they feel too busy. They know evenings feel rushed. But they can't tell you exactly how many hours they were in meetings last week, or what percentage of Tuesday was reactive work vs. proactive.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Calendars are the best available data source for this. They're not perfect — they capture what you scheduled, not what you actually did — but they're close. And for most people, the gap between "what I think I do" and "what my calendar shows" is genuinely surprising.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties' analytics tab doesn't tell you how to live. It shows you what your calendar currently looks like — hours in meetings, focus ratio, time by person — and trusts you to draw conclusions. Most people who spend five minutes with that data make at least one calendar change. The act of seeing it is the intervention.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/features/analytics" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              Explore calendar analytics <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA
        title="You can't improve what you can't see. Start seeing."
        subtitle="Calendar analytics and focus mode. Free trial."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See analytics features', href: '/features/analytics' }}
      />
    </>
  )
}
