import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Time Audit — How to audit your calendar and reclaim your week',
  description:
    'A time audit shows exactly where your hours go. Learn how to audit your calendar in 15 minutes, identify time drains, and restructure your week using Momenties calendar analytics.',
  alternates: { canonical: '/time-audit' },
  openGraph: {
    title: 'Time Audit — Momenties',
    description: 'Audit your calendar. See where the week actually goes.',
    url: '/time-audit',
    type: 'website',
  },
}

const AUDIT_STEPS = [
  {
    number: '01',
    title: 'Tag every event for one week',
    body: 'The audit starts with tagging. Add a category to every event as it happens: "meeting," "deep-work," "admin," "reactive," "personal." One week of tagged data is enough to see real patterns.',
  },
  {
    number: '02',
    title: 'Pull the weekly breakdown',
    body: 'After 7 days, open Analytics. The breakdown shows hours per category. Most people are shocked: they expected 30% meetings and find 55%. The data doesn\'t lie, and it doesn\'t soften the truth.',
  },
  {
    number: '03',
    title: 'Identify the top three time drains',
    body: 'Look for categories that are higher than intended. Recurring meetings that could be async. Admin tasks that could be delegated. Reactive blocks that crowded out deep work. Three is enough to start.',
  },
  {
    number: '04',
    title: 'Redesign the ideal week',
    body: 'Block the week you want before the week you\'ll get. Deep work in the morning. Meetings clustered in the afternoon. Hard stops at 6pm. The calendar becomes a blueprint, not a record of what happened to you.',
  },
  {
    number: '05',
    title: 'Run the audit again in 4 weeks',
    body: 'One audit is a snapshot. Four weeks of data is a trend. The second audit shows whether the changes stuck. Most patterns take 3 weeks to shift. The third audit shows the new baseline.',
  },
]

const WHAT_AUDITS_REVEAL = [
  { label: 'Meeting overload', desc: 'Most knowledge workers have 40-60% of their week in meetings. Most think it\'s 25%. The audit closes the gap between perception and reality.' },
  { label: 'The reactive tax', desc: '"Quick calls" and unplanned interruptions rarely show up in planned calendars. Tagging them reveals the true cost — often 8-12 hours per week.' },
  { label: 'Deep work deficit', desc: 'The typical audit shows 2-4 hours of genuine deep work per week. Most roles require 15-20 to produce meaningful output. The gap is the problem.' },
  { label: 'Energy mismatches', desc: 'Admin tasks in the morning. Creative work in the afternoon. The audit shows when high-complexity work is being done in low-energy slots.' },
]

export default function TimeAuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Time Audit"
        title={
          <>
            Where does your week
            <br />
            <em className="not-italic text-gold">actually go?</em>
          </>
        }
        lede="A time audit is 15 minutes of analysis that changes how you schedule for months. Most people have a significant gap between the week they think they have and the week they actually do. Calendar analytics closes that gap with data."
        crumbs={[{ label: 'Time Audit' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start your audit <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Analytics features
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* What audits reveal */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common findings</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What most time audits reveal.</h2>
          </Reveal>
          <div className="space-y-3">
            {WHAT_AUDITS_REVEAL.map((item, i) => (
              <Reveal key={item.label} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5-step audit */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How to do it</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The 5-step time audit.</h2>
          </Reveal>
          <div className="space-y-4">
            {AUDIT_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xl font-bold text-gold/30 shrink-0 w-8">{step.number}</span>
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-2">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties tracks</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your audit dashboard, automatically.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Hours per category per week',
                'Meeting vs. deep work ratio',
                'Daily time distribution by hour',
                'Trend lines across 4+ weeks',
                'Custom tag analytics',
                'Focus block completion rate',
                'Week-over-week comparison',
                'Calendar balance score',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Start your time audit today."
        subtitle="One week of data changes how you schedule. Momenties makes the audit automatic."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Analytics features', href: '/features/analytics' }}
      />
    </>
  )
}
