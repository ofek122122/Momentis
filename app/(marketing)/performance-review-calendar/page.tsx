import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Star as StarIcon, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Performance Review Calendar — How to schedule feedback conversations that improve performance, not just document it',
  description:
    'A performance review calendar schedules feedback conversations at 30, 60, and 90 days, places mid-year calibration before annual reviews, and puts development conversations before goals drift. Most annual reviews surface problems that were visible throughout the year. A review calendar surfaces them while there is still time to act.',
  alternates: { canonical: '/performance-review-calendar' },
  openGraph: {
    title: 'Performance Review Calendar — Momenties',
    description: 'Schedule feedback conversations that improve performance, not just document it.',
    url: '/performance-review-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: StarIcon,
    title: 'Annual review cycle placed in January for the full year',
    desc: '"Mid-year check-in — june." "Q3 calibration — september." "Annual review — december." "Goal-setting for next year — january." Review cycle placed in January for the full year. Managers who discover the annual review is next month in November spend November catching up on a year of observations. Managers who placed the review cycle in January arrive at reviews with 12 months of documented conversations.',
  },
  {
    icon: Clock,
    title: 'Monthly 1:1s with feedback agenda placed as standing events',
    desc: '"Monthly 1:1 — standing, 30 minutes, first monday." Agenda: performance highlights, obstacles, development progress, and next month\'s focus. Standing 1:1s placed at the start of the year — not scheduled when the manager has time. Monthly feedback conversations produce 12 data points before the annual review. Annual reviews supported by no 1:1s produce one data point: the manager\'s recollection.',
  },
  {
    icon: BarChart3,
    title: 'Mid-year calibration placed before the annual review season',
    desc: '"Mid-year calibration — june, manager + HR." Mid-year calibration placed in January for the full year. Calibration reviews: goal progress, performance rating, development trajectory, and any course corrections needed. Calibration in June gives six months to address underperformance before the annual review. Calibration in October gives six weeks.',
  },
  {
    icon: Shield,
    title: 'PIP and development plan milestones placed on the calendar',
    desc: '"Performance improvement plan check-in — weeks 2, 4, 8, 12." "Development plan progress review — monthly." PIP milestones placed as calendar events when the plan is created — not scheduled reactively when the deadline approaches. Development plan reviews placed at creation. Plans without calendar milestones become plans that are reviewed once and forgotten.',
  },
]

const REVIEW_STEPS = [
  {
    step: 'Place the full review cycle at the start of each year',
    detail: '"Load in January: quarterly 1:1 summaries, mid-year calibration, Q3 calibration, year-end review, and next-year goal setting." Annual cycle placed in January, not November. Goal-setting session placed in January for the following year — not scheduled reactively after the annual review ends. Teams that begin next-year goal conversations in January align on priorities 4 months earlier than teams that begin in March.',
  },
  {
    step: 'Place monthly 1:1s with a performance-focused agenda',
    detail: '"Monthly 1:1 — standing, 45 minutes, last wednesday of each month." Agenda: three performance highlights, two obstacles, one development update, one focus area for next month. Monthly 1:1s placed with a standing agenda template. 1:1s without a structured performance agenda drift toward status updates. Status updates produce project information. Performance conversations produce actionable feedback.',
  },
  {
    step: 'Schedule the mid-year review with calibration preparation',
    detail: '"Mid-year review prep — June 1, 1 hour." "Mid-year calibration — June 15, manager + HR." "Communicate mid-year feedback — June 20." Prep, calibration, and communication placed as a 3-event sequence in January. Mid-year calibration without manager preparation produces uninformed ratings. Calibration without employee feedback communication produces reviews that surprise employees. The three events are a sequence, not three independent tasks.',
  },
  {
    step: 'Place goal check-ins at each quarter end — not just year end',
    detail: '"Q1 goal check-in — March 31." "Q2 goal check-in — June 30." "Q3 goal check-in — September 30." Goal check-ins placed quarterly as standing calendar events. Goals reviewed quarterly are modified when priorities shift. Goals reviewed annually are evaluated against original context that may no longer be relevant. Quarterly check-ins produce goal accuracy. Annual check-ins produce annual goal post-mortems.',
  },
  {
    step: 'Build the annual review from documented 1:1 notes — not memory',
    detail: '"Annual review prep — November 30, 2 hours." "Annual review self-assessment due — December 5." "Review draft complete — December 10." Annual review preparation sequence placed in January. Managers who prepare annual reviews from documented 1:1 notes produce accurate, specific evaluations. Managers who recall a year from memory produce recency-biased evaluations that underweight the first half of the year consistently.',
  },
  {
    step: 'Schedule a post-review development plan session',
    detail: '"Post-review development plan — 2 weeks after annual review, 60 minutes." Development plan session placed at the time the annual review is scheduled — not booked after the review ends. Annual reviews that close without a development plan conversation produce feedback without a path. Development plan session placed in advance becomes a standing commitment that converts the review into forward momentum.',
  },
]

const REVIEW_FAILURES = [
  { failure: 'Annual review is the only structured feedback conversation', consequence: 'Annual reviews that occur without a year of monthly 1:1s are supported by one data point: the manager\'s memory. Memory is recency-biased, inconsistent, and produces evaluations that do not reflect the full year of performance. Monthly 1:1s with a standing performance agenda produce 12 data points before the annual review — and surface problems while there is still time to address them.' },
  { failure: 'Mid-year calibration scheduled after mid-year', consequence: 'Mid-year calibration in October gives six weeks to address issues before the annual review. Mid-year calibration in June gives six months. The timing of the calibration determines whether identified issues are addressable or historical. Calibration placed at the start of the year in June — not scheduled when someone remembers it needs to happen.' },
  { failure: 'Goal check-ins only at year-end', consequence: 'Goals set in January against January priorities are often evaluated in December against December context. Quarterly goal check-ins surface priority shifts, resource changes, and scope drift while adjustments are still possible. Annual goal check-ins produce evaluations of work against obsolete objectives that nobody modified because no one scheduled a check-in.' },
  { failure: 'PIP milestones not placed on the calendar at plan creation', consequence: 'Performance improvement plans without calendar milestones are documentation, not improvement systems. PIPs with calendar check-ins at weeks 2, 4, 8, and 12 convert documented expectations into supervised improvement with regular accountability. Milestones placed when the plan is created are milestones that happen. Milestones scheduled reactively when problems compound are milestones that are placed too late.' },
]

export default function PerformanceReviewCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Performance Review Calendar"
        title={
          <>
            Feedback scheduled. Development tracked.
            <br />
            <em className="not-italic text-gold">Annual review supported by 12 monthly conversations.</em>
          </>
        }
        lede="Most annual reviews surface problems that were visible throughout the year but never surfaced in a scheduled feedback conversation. A performance review calendar places monthly 1:1s with a standing agenda, mid-year calibration in June rather than October, quarterly goal check-ins, and the annual review preparation sequence — so evaluations are built from documented observations, not year-end memory."
        crumbs={[{ label: 'Performance Review Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/hr"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for HR
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties converts performance reviews into feedback systems.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a performance review calendar that produces improvement, not documentation.</h2>
          </Reveal>
          <div className="space-y-3">
            {REVIEW_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four review calendar patterns that produce documentation instead of improvement.</h2>
          </Reveal>
          <div className="space-y-3">
            {REVIEW_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Review analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for performance review discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly 1:1 completion rate per manager',
                'Mid-year calibration completion date',
                'Goal check-in completion rate per quarter',
                'Annual review delivered on schedule rate',
                'Development plan session completion post-review',
                'PIP milestone completion rate',
                'Manager feedback conversation frequency',
                'Post-review goal-setting session completion rate',
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
        title="Feedback scheduled. Development tracked."
        subtitle="Monthly 1:1 cadence, mid-year calibration, quarterly goal check-ins, and annual review preparation sequence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for HR', href: '/for/hr' }}
      />
    </>
  )
}
