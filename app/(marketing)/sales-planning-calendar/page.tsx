import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sales Planning Calendar — How to schedule pipeline reviews, quota planning, and sales cycle management',
  description:
    'A sales planning calendar schedules pipeline reviews weekly rather than quarterly, places territory planning before quota is set, and builds a cadence of forecast reviews that prevents end-of-quarter surprises. Most missed quotas are visible in the pipeline 6 weeks before quarter-end. A sales planning calendar surfaces them in time to act.',
  alternates: { canonical: '/sales-planning-calendar' },
  openGraph: {
    title: 'Sales Planning Calendar — Momenties',
    description: 'Schedule pipeline reviews that prevent end-of-quarter surprises.',
    url: '/sales-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Weekly pipeline reviews placed as standing non-negotiable events',
    desc: '"Pipeline review — standing, tuesday 9am, 30 minutes." Pipeline review placed as a standing event — not scheduled when it seems useful. Weekly pipeline review: deal stage distribution, movement since last week, deals at risk, next week\'s close probability. Sales teams that review pipeline weekly identify stalled deals 6 weeks before quarter-end. Teams that review monthly identify them 2 weeks before quarter-end, when intervention is less effective.',
  },
  {
    icon: Clock,
    title: 'Quarterly business review prepared before the QBR meeting',
    desc: '"QBR prep block — 3 days before QBR." "QBR — Q1, Q2, Q3, Q4, last week of quarter." QBR placed in January for all four quarters. Prep block placed 3 days before each QBR — not scheduled the morning of. QBR prep: quota attainment analysis, pipeline quality review, territory analysis, next quarter forecast. QBRs prepared in advance produce strategic conversations. QBRs assembled the morning of produce status updates.',
  },
  {
    icon: BarChart3,
    title: 'End-of-quarter push cadence placed at Q-6 weeks',
    desc: '"Q-6 week pipeline review — deals that must advance to close this quarter." "Q-4 week deal review — close probability updated." "Q-2 week forecast lock — committed and upside pipeline." Quarterly push cadence placed at the start of each quarter. Sales reps and managers who identify at-risk deals 6 weeks before quarter-end can change their outcome. Those who identify them at 2 weeks document the outcome.',
  },
  {
    icon: Shield,
    title: 'Annual territory and quota planning placed before fiscal year starts',
    desc: '"Annual territory planning — 6 weeks before fiscal year start." "Quota negotiation — 4 weeks before." "Account planning kickoff — 2 weeks before." Territory and quota planning sequence placed 6 weeks before fiscal year start — not after it. Sales reps who arrive at January 1 with territory plans and account priorities outperform those who begin planning in January.',
  },
]

const SALES_STEPS = [
  {
    step: 'Place the annual sales planning sequence before fiscal year start',
    detail: '"6 weeks before FY start: territory analysis and account segmentation." "4 weeks before: quota plan and negotiation." "2 weeks before: account plan completion." "Week 1: territory launch." Annual planning sequence placed in the prior Q4 — not started when the new fiscal year begins. Sales reps who begin Q1 with completed account plans work more efficiently than those who plan and execute simultaneously.',
  },
  {
    step: 'Schedule weekly pipeline reviews as recurring standing events',
    detail: '"Weekly pipeline review — standing, tuesday morning, 30 minutes." Agenda: net new pipeline added this week, deal stage changes, deals stalled for more than 2 weeks, next close date changes, and next week\'s commitments. Standing pipeline review placed at the start of the year. Pipeline reviews scheduled reactively — when leadership asks for a forecast — occur when the pressure is already present.',
  },
  {
    step: 'Place monthly territory analysis reviews',
    detail: '"Monthly territory review — first monday of each month, 60 minutes." Territory analysis: total pipeline vs. quota coverage, account penetration by segment, whitespace and expansion opportunities, competitive displacement opportunities. Monthly territory reviews placed as standing events prevent territory drift — the gradual shift of time and attention toward existing accounts at the expense of net new.',
  },
  {
    step: 'Build the quarterly end-of-quarter push sequence from week 6',
    detail: '"Q-6 weeks: pipeline audit." "Q-4 weeks: at-risk deal review." "Q-2 weeks: forecast lock." "Q-1 week: push call and commitment." End-of-quarter push sequence placed at the start of each quarter — week 6, 4, 2, and 1. Sequence placed in advance converts end-of-quarter into a managed process rather than a reactive scramble. Each stage of the sequence produces a different action.',
  },
  {
    step: 'Schedule customer success and expansion review cadence',
    detail: '"Monthly customer health review — 30 minutes, last friday of each month." "Quarterly expansion opportunity review — 60 minutes." "Annual executive business review — scheduled 8 weeks in advance." Customer success reviews placed as standing events — not scheduled when renewals are approaching. Expansion conversations placed quarterly — not after the renewal is already in negotiation.',
  },
  {
    step: 'Conduct the post-quarter retrospective before the next quarter begins',
    detail: '"Post-quarter retrospective — first week of new quarter, 90 minutes." Review: quota attainment, forecast accuracy, deals lost vs. won analysis, pipeline generation vs. target, and top 3 changes for next quarter. Post-quarter retrospective placed at the start of the quarter — not scheduled when there is time. Retrospective before Q2 begins informs Q2 strategy. Retrospective in week 3 of Q2 informs Q3 strategy.',
  },
]

const SALES_FAILURES = [
  { failure: 'Pipeline review happens at month-end, not weekly', consequence: 'Monthly pipeline reviews allow stalled deals to compound for 30 days without intervention. Weekly pipeline reviews surface stalls within 7 days — the minimum time required to take corrective action before they become quarter-end problems. The difference between a weekly pipeline review and a monthly one is roughly 3 weeks of intervention time per stalled deal.' },
  { failure: 'QBR assembled the day of rather than prepared 3 days before', consequence: 'QBRs assembled the morning of the meeting produce status updates, not strategic conversations. QBRs prepared over 3 days produce analysis, not just data. The 3-day prep block placed in the calendar is the mechanism that converts a QBR from a reporting event into a planning event.' },
  { failure: 'End-of-quarter push identified at Q-2 weeks rather than Q-6', consequence: 'Deals identified as at-risk at Q-2 weeks have a different intervention window than deals identified at Q-6 weeks. 6-week window: re-engage champions, address blockers, add value. 2-week window: discount, apply pressure, accept the outcome. The end-of-quarter push cadence placed at Q-6 weeks determines which window is available.' },
  { failure: 'Annual territory planning begins on January 1', consequence: 'Sales reps who begin territory and account planning on January 1 are planning and executing simultaneously for most of Q1. Reps who complete territory and account planning 2 weeks before January 1 execute from day 1. Annual planning placed in Q4 — not Q1 — is the difference between a planned Q1 and an improvised one.' },
]

export default function SalesPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sales Planning Calendar"
        title={
          <>
            Pipeline reviewed. Quota managed.
            <br />
            <em className="not-italic text-gold">Quarter-end surprises visible 6 weeks early.</em>
          </>
        }
        lede="Most missed quotas are visible in the pipeline 6 weeks before quarter-end — but only to sales teams that review pipeline weekly rather than monthly. A sales planning calendar places standing weekly pipeline reviews, an end-of-quarter push cadence starting at week 6, quarterly business review prep sequences, and annual territory planning before the fiscal year starts — so every quarter is managed, not survived."
        crumbs={[{ label: 'Sales Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/sales"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for sales
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents end-of-quarter pipeline surprises.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a sales planning calendar that manages quotas, not just tracks them.</h2>
          </Reveal>
          <div className="space-y-3">
            {SALES_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four sales calendar patterns that produce end-of-quarter surprises.</h2>
          </Reveal>
          <div className="space-y-3">
            {SALES_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sales analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for sales planning discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Weekly pipeline review completion rate',
                'Average days between pipeline review and deal action',
                'QBR preparation completion 3 days before meeting',
                'End-of-quarter push sequence start week',
                'Annual territory planning completion date',
                'Post-quarter retrospective completion rate',
                'Monthly territory analysis completion rate',
                'Forecast accuracy by quarter',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Pipeline reviewed. Quota managed."
        subtitle="Weekly pipeline reviews, Q-6 push cadence, QBR prep sequence, and annual territory planning calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for sales', href: '/for/sales' }}
      />
    </>
  )
}
