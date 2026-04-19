import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sales Forecast Calendar — How to build a forecast cadence that produces accurate pipeline data',
  description:
    'A sales forecast calendar places the pipeline review before the forecast submission, maintains a weekly deal progression check, places the quarterly forecast with a defined close date, and schedules the forecast accuracy retrospective after each quarter — so the sales forecast is built from pipeline data, not from optimism.',
  alternates: { canonical: '/sales-forecast-calendar' },
  openGraph: {
    title: 'Sales Forecast Calendar — Momenties',
    description: 'Build a forecast cadence that produces accurate pipeline data.',
    url: '/sales-forecast-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Weekly pipeline review placed before the forecast, not at the same time',
    desc: '"Weekly pipeline review: [day], [time], 30 minutes. Forecast submission: [day + 2 days]." Pipeline review placed 2 days before the forecast submission. Pipeline review before the forecast: review each deal in the commit and best-case categories, confirm the next step is scheduled (not pending), verify the deal stage matches the actual stage of the sales conversation, and identify deals that have stalled for more than 14 days. Forecast built from reviewed pipeline, not from last week\'s forecast with adjustments. Pipeline review that precedes the forecast by 48 hours gives time to have deal-specific conversations before committing numbers.',
  },
  {
    icon: Clock,
    title: 'Deal progression check placed weekly as a standing individual review',
    desc: '"Deal progression check: [rep name], weekly, [day]." Individual deal progression check placed as a standing weekly self-review. Check: for each open opportunity, has the deal advanced since last week (stage change, next step completed, new stakeholder engaged), is the close date still realistic, and is the next step scheduled. Deals that have not advanced in 14 days flagged as at-risk. Deal progression checks that happen weekly surface stalls before they become forecast misses. Deal progression checks that happen monthly surface stalls after the quarter is already in jeopardy.',
  },
  {
    icon: BarChart3,
    title: 'Quarterly forecast placed with a defined submission date and board presentation sequence',
    desc: '"QBR forecast submission: [quarter end - 4 weeks]. Board presentation: [quarter end - 2 weeks]." Quarterly forecast placed with a hard submission date 4 weeks before quarter end. 4-week forecast window: commit category finalized by week 1, best-case category finalized by week 2, gap analysis and coverage plan finalized by week 3, executive presentation by week 4. Forecasts submitted the week of quarter end reflect current quarter deals with 2 weeks left — the forecast has already missed its purpose. 4-week forecast gives time for pipeline acceleration, deal escalation, and executive intervention where needed.',
  },
  {
    icon: Shield,
    title: 'Forecast accuracy retrospective placed after each quarter before the next forecast cycle',
    desc: '"Forecast accuracy retrospective: [quarter end + 2 weeks]. Next quarter forecast launch: [retro + 1 week]." Forecast accuracy retrospective placed 2 weeks after quarter end. Retrospective: what was the commit forecast vs. what closed, which deal categories (commit, best-case, upside) had the highest accuracy, what were the common characteristics of deals that closed vs. stalled, and what pipeline signals predicted the outcome. Retrospective placed before the next quarter forecast launch — each quarter\'s forecast methodology improved by the prior quarter\'s accuracy data.',
  },
]

const FORECAST_STEPS = [
  {
    step: 'Define forecast categories and stage definitions before the first forecast submission',
    detail: '"Forecast definitions: [commit, best-case, upside, pipeline] — agreed criteria for each category." Forecast categories defined before the first weekly pipeline review. Category criteria: commit (rep is willing to stake their number on this deal closing in the quarter, documented verbal commitment from the economic buyer, no major obstacles known), best-case (high confidence but one open item remaining — procurement, legal, or final approval), upside (deal in the funnel with realistic shot, depends on acceleration), pipeline (early stage, not in quarter call). Definitions documented in the calendar event description for the weekly pipeline review — visible every week when the review opens.',
  },
  {
    step: 'Place the weekly pipeline review as a fixed standing meeting that does not float',
    detail: '"Weekly pipeline review: [day], [time], standing. Attendees: rep + manager." Weekly pipeline review placed as a fixed standing meeting. Format: rep walks each deal in commit and best-case categories. For each deal: what happened this week, what is the next step and when is it scheduled, what is the risk to closing in quarter. Manager confirms or challenges the stage and category. 30-minute meeting with a hard stop. Pipeline review that runs long is not a pipeline review — it is a deal deep-dive that should be scheduled separately for the specific deal that needs more time.',
  },
  {
    step: 'Place the mid-quarter pipeline audit to identify coverage gaps before they become quarter misses',
    detail: '"Mid-quarter pipeline audit: [quarter start + 6 weeks]." Mid-quarter pipeline audit placed at week 6 of 13. At week 6, the quarter has enough deal-stage data to identify whether the committed pipeline is sufficient to hit the target, but enough runway remains to take action — add pipeline, accelerate deals, or reset the forecast expectation. Mid-quarter audits placed at week 10 (two weeks before quarter end) produce reaction with 2 weeks left. Mid-quarter audits placed at week 6 produce action with 7 weeks left.',
  },
  {
    step: 'Place the quarterly forecast submission with a board presentation sequence and internal milestones',
    detail: '"Quarterly forecast: [Q end - 4 weeks] — commit finalized. [Q end - 3 weeks] — best-case finalized. [Q end - 2 weeks] — gap analysis. [Q end - 1 week] — executive presentation." Four-week quarterly forecast placed with discrete milestones. Commit category finalized at minus-4 weeks because commit deals should be closeable with no major obstacles — finalizing them 4 weeks out tests the commit category definition. Best-case finalized at minus-3 weeks. Gap analysis (current forecast vs. target, coverage plan if gap exists) at minus-2 weeks. Executive presentation at minus-1 week with full-quarter view.',
  },
  {
    step: 'Place the deal velocity tracking as a weekly metric update separate from the pipeline review',
    detail: '"Deal velocity tracking: [weekly, automated or rep-updated]." Deal velocity metric placed as a weekly update: average sales cycle length by deal size segment, average time in each stage, and percentage of deals advancing week-over-week. Deal velocity data is the leading indicator for quarterly forecast accuracy — deals that are advancing at the historical average rate are likely to close; deals that are spending twice the average time in a single stage are likely to stall. Velocity data placed in the weekly cadence rather than the quarterly retrospective converts a lagging indicator into a live pipeline management tool.',
  },
  {
    step: 'Place the forecast accuracy retrospective before the next quarter forecast launch',
    detail: '"Forecast accuracy retrospective: [Q end + 2 weeks]. 60 minutes." Forecast accuracy retrospective placed 60 minutes, 2 weeks after quarter end. Analysis: commit forecast accuracy (what was in commit at Q end - 4 weeks vs. what closed), best-case accuracy, common characteristics of deals that slipped, and pipeline signals that predicted the outcome. Retrospective findings applied to next quarter\'s category definitions, stage criteria, and pipeline review process. Teams that run forecast retrospectives quarterly improve commit accuracy by 15-25% over 4 quarters; teams that skip retrospectives repeat the same forecast misses.',
  },
]

const FORECAST_FAILURES = [
  { failure: 'Forecast submitted without a preceding pipeline review — built from last week\'s numbers', consequence: 'Forecasts submitted without a pipeline review are last week\'s forecast with a few manual adjustments. The deals in commit are the same deals that were in commit 7 days ago — without a structured review, stalled deals are not moved to best-case or pipeline, and new deals that have advanced are not moved up to commit. Forecast accuracy degrades over the quarter because the forecast is tracking last week\'s beliefs about the pipeline, not the current state of each deal. A 48-hour pipeline review preceding the forecast submission converts the forecast from a belief-based estimate to a data-based commitment.' },
  { failure: 'No mid-quarter audit — gap identified in week 11 with 2 weeks left', consequence: 'Sales teams without a mid-quarter pipeline audit discover coverage gaps when it is too late to take meaningful action. A gap identified at week 11 of 13 leaves 2 weeks to add pipeline, accelerate deals, and reset expectations — insufficient time to change the quarter. A gap identified at week 6 leaves 7 weeks to act: add pipeline from prospecting or channel, accelerate late-stage deals with executive engagement, bring in a partner deal, or set the expectation reset with leadership early enough that planning can adjust. Mid-quarter audits at week 6 convert gap awareness from a post-mortem into an action plan.' },
  { failure: 'Forecast accuracy retrospective skipped — quarter misses repeated without diagnostic', consequence: 'Sales organizations that do not run forecast accuracy retrospectives repeat the same forecast failure patterns quarter over quarter. The specific failure — deals that slipped from commit because economic buyer approval was assumed rather than confirmed, deals that were lost to competition not reflected in the pipeline — is never diagnosed. The next quarter\'s commit category is populated using the same criteria that produced the miss. Retrospectives convert a quarter miss from a numbers story into a process diagnosis. Teams that run quarterly retrospectives identify the 2-3 structural patterns that cause their forecast misses and fix them within two quarters.' },
  { failure: 'Pipeline review as a manager monologue rather than a structured deal walk — stalls not surfaced', consequence: 'Pipeline reviews where the manager asks "how\'s the Acme deal going?" and the rep provides a narrative are not pipeline reviews — they are deal update conversations that surface the information the rep chooses to volunteer. Structured pipeline reviews where the manager confirms the next step is scheduled (not pending), the stage matches the actual conversation stage, and the deal has advanced since last week surface the information the rep may not volunteer: a deal that has been in demo stage for 6 weeks, a next step that was "waiting to hear back" for 3 weeks, a deal where the economic buyer has not been engaged. Structured reviews surface stalls; narrative reviews confirm beliefs.' },
]

export default function SalesForecastCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sales Forecast Calendar"
        title={
          <>
            Pipeline review 2 days before the forecast.
            <br />
            <em className="not-italic text-gold">Mid-quarter audit at week 6. Retrospective after each quarter.</em>
          </>
        }
        lede="Sales forecasts built without a preceding pipeline review are built from last week's beliefs about the pipeline, not the current deal state. A sales forecast calendar places a structured pipeline review 48 hours before each forecast submission, runs a mid-quarter audit at week 6 when there is still time to act, submits the quarterly forecast 4 weeks before quarter end with discrete internal milestones, and runs a forecast accuracy retrospective before the next quarter begins — so the forecast is built from pipeline data and improves each quarter."
        crumbs={[{ label: 'Sales Forecast Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/sales-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Sales planning calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the sales forecast cadence so pipeline data drives the forecast, not optimism.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a sales forecast calendar where the pipeline review precedes the submission and the retrospective improves next quarter.</h2>
          </Reveal>
          <div className="space-y-3">
            {FORECAST_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four sales forecast patterns that produce quarter misses that repeat.</h2>
          </Reveal>
          <div className="space-y-3">
            {FORECAST_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sales forecast analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for sales forecast discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Commit forecast accuracy (forecast vs. closed, % variance by quarter)',
                'Best-case forecast accuracy (best-case category close rate)',
                'Pipeline review completion rate (reviews held before each forecast submission)',
                'Mid-quarter audit timing (week 6 target vs. actual)',
                'Deal velocity by stage (average days in each stage, current vs. historical)',
                'Deals stalled 14+ days (flagged at-risk vs. deals that slipped from commit)',
                'Forecast category migration rate (commit to closed vs. commit to slip)',
                'Forecast accuracy improvement quarter-over-quarter (retrospective impact)',
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
        title="Pipeline review before the forecast. Retrospective after the quarter."
        subtitle="Weekly pipeline review cadence, mid-quarter audit at week 6, quarterly forecast with internal milestones, and accuracy retrospective. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Sales planning calendar', href: '/sales-planning-calendar' }}
      />
    </>
  )
}
