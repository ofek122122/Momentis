import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { DollarSign, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Budget Planning Calendar — How to schedule financial reviews that prevent budget surprises',
  description:
    'A budget planning calendar schedules financial reviews before decisions create commitments, places annual budget cycles as recurring events, and ensures quarterly variance reviews happen before overspending becomes structural. Most budget surprises are not caused by unexpected events — they are caused by missing the review that would have identified the trend.',
  alternates: { canonical: '/budget-planning-calendar' },
  openGraph: {
    title: 'Budget Planning Calendar — Momenties',
    description: 'Schedule financial reviews before decisions create commitments.',
    url: '/budget-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: DollarSign,
    title: 'Annual budget cycle placed as recurring calendar events',
    desc: '"Q4 budget planning season — october/november." "Annual budget approval — december." "Q1 actuals review — mid-april." "Mid-year reforecast — july." "Q3 actuals review — mid-october." The annual budget cycle placed on the calendar in January for the full year. Budget season never arrives as a surprise because it has been on the calendar since January 1.',
  },
  {
    icon: Clock,
    title: 'Budget review scheduled before commitments, not after',
    desc: '"Major vendor contract review — before renewal date, 30 days prior." "Headcount budget review — before hiring approvals." "Capital expenditure review — before purchase orders." Budget reviews placed as calendar events when the decision horizon is visible — not when the commitment is already made. The review happens before the signature, not after the invoice.',
  },
  {
    icon: BarChart3,
    title: 'Variance review placed monthly, not quarterly',
    desc: 'Teams that review budget variance quarterly discover problems that have been compounding for 90 days. Monthly variance reviews: "Budget actuals — last business day of each month, 30 minutes." Monthly review at the line-item level shows trends before they become structural. A department that is 3% over budget in month 2 can course-correct. At 3% over in month 10, it cannot.',
  },
  {
    icon: Shield,
    title: 'Forecast update windows placed at set intervals',
    desc: '"Rolling forecast update — first week of each quarter." Forecast discipline requires scheduled time to update assumptions. Budgets set in January against January assumptions become misleading by April without a reforecast. Rolling forecast updates placed as recurring calendar events — not performed reactively when the gap between budget and reality becomes embarrassing.',
  },
]

const BUDGET_STEPS = [
  {
    step: 'Load the full annual budget cycle in January',
    detail: '"Budget planning season: october-november." "Budget approval: december." "Q1 review: april." "Q2 mid-year reforecast: july." "Q3 review: october." "Year-end close: january-february." All budget cycle events placed in January for the full year — and the following year\'s planning season pre-loaded in Q4. Budget cycles do not sneak up on budget owners who placed them on the calendar 12 months in advance.',
  },
  {
    step: 'Place monthly actuals review as a recurring event',
    detail: '"Budget actuals review — last business day of each month, 30-45 minutes." Recurring, non-optional. Monthly review: run vs. budget for the month, year-to-date variance, and trend projection. Three questions: are we on track, why are we off track if not, and what decision is required now? Monthly reviews prevent quarterly "how did this happen" conversations.',
  },
  {
    step: 'Place rolling forecast updates quarterly',
    detail: '"Rolling forecast update — first monday of each quarter, 2 hours." Update revenue and expense assumptions based on actual performance to date. Adjust forward projection. Reforecast-to-budget variance is often more useful than actuals-to-budget variance for decision-making. Quarterly reforecast placed on the calendar in January — not scheduled when the pressure builds.',
  },
  {
    step: 'Place decision-triggered reviews before commitments',
    detail: '"Headcount budget review — before each hiring approval." "Vendor contract renewal — 60 days before renewal date." "Capital expenditure — before purchase order." Decision-triggered reviews placed when the hiring or contract decision enters the pipeline — not when the invoice arrives. The review is the prerequisite, not the aftermath.',
  },
  {
    step: 'Schedule budget-to-actuals presentations',
    detail: '"Board/leadership budget presentation — quarterly, 2 days after actuals close." Budget presentations placed when the actuals close dates are known. Presentation preparation block placed the week before. Actuals-to-budget analysis, reforecast, and narrative prepared before the pressure of the presentation, not during it.',
  },
  {
    step: 'Conduct an annual budget retrospective before planning season',
    detail: '"Annual budget retrospective — september, before Q4 planning season." What did last year\'s budget get wrong, and why? Where was variance consistently positive or negative? What assumptions were unrealistic? The retrospective informs the next cycle\'s planning assumptions. Budget accuracy improves across years when this review happens before — not during — the next planning cycle.',
  },
]

const BUDGET_FAILURES = [
  { failure: 'Budget review only at quarter-end', consequence: 'Problems compound for 90 days before they are visible. By the time a 15% overrun is identified at quarter-end, 90 days of spending has occurred without intervention. Monthly reviews catch 30-day trends.' },
  { failure: 'Forecast not updated after Q1 actuals', consequence: 'By July, the January budget reflects January assumptions — not current reality. Decisions made against a stale budget produce systematic errors. Rolling reforecast is what converts a static budget into a live management tool.' },
  { failure: 'Budget planning season arrives as a surprise', consequence: 'October budget season requires October preparation. Finance teams who discover the Q4 budget cycle has begun in early November spend November catching up rather than planning. The cycle should be on the calendar in January.' },
  { failure: 'Commitment review happens after the commitment', consequence: 'Budget reviews placed after contracts are signed or hires are made are not reviews — they are post-mortems. The review that changes behavior is the review that happens before the commitment.' },
]

export default function BudgetPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Budget Planning Calendar"
        title={
          <>
            Reviews scheduled. Variance caught early.
            <br />
            <em className="not-italic text-gold">Budget season never a surprise.</em>
          </>
        }
        lede="Most budget surprises are not caused by unexpected events — they are caused by missing the monthly review that would have identified the trend before it compounded for 90 days. A budget planning calendar places actuals reviews monthly, reforecast windows quarterly, and the annual budget cycle in January for the full year — so every financial decision is made with current visibility."
        crumbs={[{ label: 'Budget Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/annual-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Annual planning calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents budget surprises.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a budget planning calendar that prevents surprises.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four budget calendar patterns that produce preventable surprises.</h2>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for budget review discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly actuals review completion rate',
                'Days between actuals close and review',
                'Quarterly reforecast completion rate',
                'Budget planning season start lead time',
                'Decision review pre-commitment rate',
                'Budget presentation preparation lead time',
                'Annual budget retrospective completion',
                'Forecast accuracy improvement year over year',
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
        title="Reviews scheduled. Variance caught early."
        subtitle="Monthly actuals reviews, quarterly reforecast windows, and full annual budget cycle calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Annual planning calendar', href: '/annual-planning-calendar' }}
      />
    </>
  )
}
