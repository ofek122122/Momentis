import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Clock, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Budget Review Calendar — How to schedule financial reviews so budget variances are visible before they become problems',
  description:
    'A budget review calendar schedules variance reviews monthly rather than at year-end, places mid-year reforecast before Q3 begins, and builds a cadence of financial reviews that surfaces budget problems in time to act. Most budget overruns are visible 6-8 weeks before they occur. A budget review calendar surfaces them in time to intervene.',
  alternates: { canonical: '/budget-review-calendar' },
  openGraph: {
    title: 'Budget Review Calendar — Momenties',
    description: 'Schedule financial reviews that surface variances before they become overruns.',
    url: '/budget-review-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Monthly budget variance reviews placed as standing non-negotiable events',
    desc: '"Monthly budget review — standing, first monday of each month, 60 minutes." Monthly budget variance review placed as a standing event — not scheduled when numbers are ready. Agenda: actuals vs. budget by category, variance explanations for items >5%, run-rate projection to year-end, and categories approaching threshold. Monthly variance reviews surface budget problems 6-8 weeks before they become overruns.',
  },
  {
    icon: Clock,
    title: 'Mid-year reforecast placed before Q3 begins, not after Q3 ends',
    desc: '"Mid-year reforecast — placed in late June, 3-day block." Mid-year reforecast placed before Q3 begins — not scheduled when Q3 is already underway. Reforecast with Q1+Q2 actuals produces a Q3/Q4 plan grounded in actual performance. Reforecast started in July is a reactive exercise. Reforecast started in late June — before Q3 begins — is a proactive plan. Placement timing determines whether the reforecast is useful.',
  },
  {
    icon: TrendingUp,
    title: 'Annual budget planning sequence placed in Q3 before fiscal year-end',
    desc: '"Annual budget planning — 10-week sequence starting September 1." Budget planning sequence placed in Q3 with sufficient runway: department budget submissions, consolidation, review cycles, and approval. Finance teams that begin budget planning in September close with approved budgets before year-end. Teams that begin in October negotiate final approvals in January — after the fiscal year has already started.',
  },
  {
    icon: Shield,
    title: 'Quarterly forecast reviews placed at start of each quarter',
    desc: '"Quarterly forecast review — first week of Q2, Q3, Q4." Quarterly forecast placed at the start of each quarter with prior quarter actuals. Forecast review: re-set Q-remaining projections, update headcount assumptions, revise capital expenditure timing. Quarterly forecast placed at the start of each quarter — not triggered by a board meeting or investor request.',
  },
]

const BUDGET_STEPS = [
  {
    step: 'Place the annual budget planning sequence in Q3 before October',
    detail: '"September 1: budget guidelines and targets distributed." "September 15: department submissions due." "October 1: consolidation and review." "October 15: revision cycle." "November 1: leadership review." "November 15: board approval." "December 1: approved budget distributed." Annual budget sequence placed in Q3 with a 10-week runway before year-end. Budget sequences started in October produce December negotiations rather than approved plans.',
  },
  {
    step: 'Place monthly budget variance reviews as recurring standing events',
    detail: '"Monthly budget review — standing, first monday of each month, 60 minutes." Agenda: prior month actuals, variance by category, run-rate projection to year-end, categories at >10% variance, and owners for variance explanations. Standing review placed at year start — not scheduled month-by-month. Monthly variance review placed in advance converts budget management from reactive (waiting for problems to surface) to proactive (seeing problems 6-8 weeks early).',
  },
  {
    step: 'Schedule a mid-year reforecast block in late June',
    detail: '"Mid-year reforecast — June 24-26, 3-day block with department heads." Reforecast agenda: Q1+Q2 actuals vs. original budget, H2 reforecast by category, headcount timing revisions, and updated year-end projection. Mid-year reforecast placed in June — before Q3 begins — produces an H2 plan. Same reforecast placed in July produces a Q3 postmortem. The difference is whether the reforecast informs or just records.',
  },
  {
    step: 'Place quarterly forecast reviews at the start of each quarter',
    detail: '"Q2 forecast review — first week of April." "Q3 forecast review — first week of July." "Q4 forecast review — first week of October." Quarterly forecast placed at the start of each quarter — not scheduled reactively for board presentations. Forecast review agenda: re-set Q-remaining projections, update major assumption changes, flag categories where actuals diverged from prior forecast by >15%, and revise year-end projection.',
  },
  {
    step: 'Schedule the year-end close sequence and annual financial review',
    detail: '"Year-end close — December 15: accruals." "December 22: preliminary P&L." "January 5: final close." "January 15: annual financial review." Year-end close sequence placed in Q4 with accrual deadlines, preliminary P&L review, and final close — not scheduled when December arrives. Annual financial review placed in January for full-year actuals vs. budget, lessons for next year\'s budget assumptions, and variance pattern analysis.',
  },
  {
    step: 'Place the capital expenditure review at Q2 and Q3',
    detail: '"Q2 capex review — may, 60 minutes." "Q3 capex review — august, 60 minutes." Capital expenditure reviews placed at Q2 and Q3 to review spend-to-date, timing of uncommitted capex, and whether approved projects remain on schedule. Capex timing is the most reschedulable budget line — Q2 and Q3 reviews identify capex that can be deferred to preserve cash or accelerated to use approved budget before year-end.',
  },
]

const BUDGET_FAILURES = [
  { failure: 'Budget variance reviewed quarterly rather than monthly', consequence: 'Quarterly budget variance reviews allow overspend to compound for 90 days before intervention. A category running 15% over budget identified at month 3 can be corrected in months 4-12. Identified at month 9, it has compounded for 270 days. Monthly variance reviews place the intervention window at 30 days — the minimum window to change trajectory before it affects year-end.' },
  { failure: 'Mid-year reforecast scheduled after Q3 begins', consequence: 'A mid-year reforecast started in July is working with one week of Q3 data while trying to forecast the next 6 months. The same reforecast started in late June — before Q3 begins — works entirely from Q1 and Q2 actuals, which are complete and auditable. The June reforecast produces a plan. The July reforecast produces a projection that\'s already partially obsolete.' },
  { failure: 'Annual budget planning begins in October rather than September', consequence: 'Budget planning sequences that begin in October require approval before January 1 — leaving 12 weeks for department submissions, consolidation, two review cycles, leadership approval, and board approval. Sequences that begin in September have 16 weeks — enough runway for two revision cycles. October start produces approved budgets in January, after the fiscal year has already started.' },
  { failure: 'Year-end close sequence scheduled ad hoc rather than placed in Q4', consequence: 'Year-end close sequences that are scheduled reactively in December produce December fire drills: missed accrual deadlines, preliminary P&L delays, and audit prep conflicts. Year-end close sequences placed in September with specific dates for accruals, preliminary P&L, and final close convert a reactive December scramble into a managed process.' },
]

export default function BudgetReviewCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Budget Review Calendar"
        title={
          <>
            Variances visible. Budget managed.
            <br />
            <em className="not-italic text-gold">Overruns surfaced 6 weeks before they occur.</em>
          </>
        }
        lede="Most budget overruns are visible in actuals 6-8 weeks before they become year-end problems — but only to finance teams that review variance monthly rather than quarterly. A budget review calendar places standing monthly variance reviews, a mid-year reforecast block before Q3 begins, quarterly forecast reviews at the start of each quarter, and an annual budget planning sequence in Q3 — so every budget problem is visible in time to intervene."
        crumbs={[{ label: 'Budget Review Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/accountants-cpa"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for accountants
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents year-end budget surprises.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a budget review calendar that manages financial performance, not just records it.</h2>
          </Reveal>
          <div className="space-y-3">
            {BUDGET_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four budget calendar patterns that produce year-end surprises.</h2>
          </Reveal>
          <div className="space-y-3">
            {BUDGET_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Budget analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for budget management discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly variance review completion date',
                'Mid-year reforecast completion before Q3 start',
                'Annual budget planning sequence start date',
                'Quarterly forecast review completion rate',
                'Year-end close sequence milestone adherence',
                'Capital expenditure review completion rate',
                'Budget revision cycle count per fiscal year',
                'Average days from variance identified to action taken',
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
        title="Variances visible. Budget managed."
        subtitle="Monthly variance reviews, mid-year reforecast, quarterly forecast calendar, and annual budget planning sequence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for accountants', href: '/for/accountants-cpa' }}
      />
    </>
  )
}
