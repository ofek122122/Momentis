import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Zap, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Time Management App — See how you spend your time. Change it.',
  description:
    'Real time management starts with seeing where time actually goes. Momenties analytics shows hours by category per week, trending over time. Fast AI input removes the friction. Focus mode enforces the changes.',
  alternates: { canonical: '/time-management-app' },
  openGraph: {
    title: 'Time Management App — Momenties',
    description: 'See your time. Change your time.',
    url: '/time-management-app',
    type: 'website',
  },
}

const CORE_LOOP = [
  {
    step: '01',
    title: 'Add events in seconds',
    desc: 'Natural language input removes the friction between the plan and the calendar. Events in under 2 seconds means you actually capture everything — not just the important stuff.',
  },
  {
    step: '02',
    title: 'Analytics shows the truth',
    desc: 'Tag-based analytics shows hours per category per week. Deep work vs. meetings. Work vs. personal. Most people are surprised by what they see. That surprise is the starting point.',
  },
  {
    step: '03',
    title: 'Protect what matters',
    desc: 'Focus mode marks blocks as protected and enforces them. Meeting requests get a warning. Notifications pause. The block survives. Changes happen at the enforcement level.',
  },
  {
    step: '04',
    title: 'Review and adjust',
    desc: 'Weekly analytics shows if the adjustments worked. Did protected blocks hold? Is deep work time trending up? Iterative improvement is built into the system.',
  },
]

const INSIGHT_EXAMPLES = [
  {
    insight: '72% of your week is in meetings',
    action: 'Audit meeting calendar. Cancel 2 recurring meetings. Protect 2 deep work blocks per day.',
    result: 'Deep work from 4h/week to 12h/week in 3 weeks.',
  },
  {
    insight: 'Personal time getting squeezed by work',
    action: 'Tag personal events. Analytics shows work is expanding past 7pm. Set hard 6pm end-of-day block.',
    result: 'Personal time recovers. Evening hours genuinely free.',
  },
  {
    insight: 'You\'re spending 40% of time on low-priority client',
    action: 'Tag events by client. Analytics surfaces the imbalance. Scope conversation or rate adjustment.',
    result: 'Portfolio rebalanced based on data, not intuition.',
  },
]

const STATS = [
  { value: '4.5h', label: 'Hours per week spent in meetings by the average knowledge worker (Harvard Business Review)' },
  { value: '31%', label: 'Of working hours spent in meetings that employees describe as unproductive' },
  { value: '2.4×', label: 'More deep work completed when focus blocks are calendar-protected vs. unscheduled' },
]

export default function TimeManagementAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Time Management"
        title={
          <>
            See your time.
            <br />
            <em className="not-italic text-gold">Change your time.</em>
          </>
        }
        lede="Real time management isn't about tips — it's about seeing where time actually goes, then changing what it's going to. Momenties analytics shows the truth. Focus mode enforces the fix. AI input removes all the friction in between."
        crumbs={[{ label: 'Time Management App' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan · Analytics on Pro ($12/month)</p>
      </PageHero>

      {/* Stats */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={i * 60}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-gold mb-2">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core loop */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The four-step time management loop.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CORE_LOOP.map((step, i) => (
              <Reveal key={step.step} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <p className="font-mono text-[10px] text-gold/50 mb-3">{step.step}</p>
                  <h3 className="text-sm font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insight → action examples */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">In practice</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Insight → action → result.</h2>
          </Reveal>
          <div className="space-y-4">
            {INSIGHT_EXAMPLES.map((ex, i) => (
              <Reveal key={ex.insight} delay={i * 60}>
                <div className="rounded-xl border border-border/50 overflow-hidden">
                  <div className="bg-gold/5 border-b border-border/40 px-5 py-3">
                    <p className="text-xs font-mono text-gold/70 uppercase tracking-wider mb-1">Analytics insight</p>
                    <p className="text-sm font-medium text-foreground">{ex.insight}</p>
                  </div>
                  <div className="px-5 py-3 border-b border-border/40">
                    <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Action taken</p>
                    <p className="text-sm text-foreground/80">{ex.action}</p>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Result</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                      <p className="text-sm text-foreground/90">{ex.result}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="The data is already there. You just can't see it yet."
        subtitle="Analytics shows where your time goes. Focus mode changes where it goes next."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
