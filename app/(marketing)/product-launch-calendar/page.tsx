import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Launch Calendar — How to coordinate a launch so every team is ready on the same day',
  description:
    'A product launch calendar works backward from launch day to place go/no-go checkpoints, coordinates marketing, engineering, sales, and support readiness milestones on a single timeline, and ensures the post-launch review is scheduled before launch day rather than after. Most launches that miss windows miss them not because the product was unready but because the launch calendar did not exist.',
  alternates: { canonical: '/product-launch-calendar' },
  openGraph: {
    title: 'Product Launch Calendar — Momenties',
    description: 'Coordinate a launch so every team is ready on the same day.',
    url: '/product-launch-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Launch day placed at project start with all milestones derived from it',
    desc: '"Launch day: [date]. All milestones work backward from here." Launch day placed at project start and treated as a fixed anchor. All downstream milestones — engineering complete, QA sign-off, marketing assets ready, sales training done, support documentation final — placed as offsets from launch day. Working backward from a fixed launch day reveals what must be complete by when. Working forward from today accumulates delays that push the launch date until it becomes ambiguous.',
  },
  {
    icon: Clock,
    title: 'Go/no-go checkpoints placed T-14 and T-3 with explicit criteria',
    desc: '"T-14 go/no-go: engineering complete, QA 90% pass rate, docs final, sales trained." Go/no-go checkpoint placed 14 days before launch with explicit, written criteria — not "does the team feel ready?" but "is QA pass rate above 90%? Is the help center live? Has sales completed training?" T-14 checkpoint gives 14 days to address a no-go determination. T-3 checkpoint is the final gate — anything that requires a no-go at T-3 requires a launch date change, not a last-minute scramble.',
  },
  {
    icon: BarChart3,
    title: 'Cross-functional readiness milestones on a single timeline',
    desc: '"Marketing: assets final T-14." "Engineering: feature complete T-21, QA complete T-7." "Sales: training complete T-7." "Support: documentation live T-7, support trained T-5." "Legal: review complete T-14." Each team&apos;s readiness milestone placed on a single shared calendar — not in separate project management systems. Cross-functional visibility reveals dependencies: sales training can&apos;t complete if the feature isn&apos;t demo-able. Single timeline makes the dependency visible.',
  },
  {
    icon: Shield,
    title: 'Post-launch review placed before launch day, not scheduled after',
    desc: '"Post-launch review — launch day + 7, already on calendar." Post-launch review placed before launch day. Review scheduled before the launch means the meeting happens regardless of launch chaos or post-launch urgency. Post-launch reviews scheduled after the launch compete with fire-fighting and are rescheduled or dropped at a high rate. A 7-day post-launch review placed before the launch is a 7-day post-launch review. A 7-day post-launch review scheduled after the launch is often a 30-day post-launch review.',
  },
]

const LAUNCH_STEPS = [
  {
    step: 'Place launch day and work backward to set the full milestone calendar',
    detail: '"Launch day: [date]. T-21: feature complete. T-14: marketing assets final, legal review complete, go/no-go 1. T-7: QA complete, sales training complete, support docs live. T-3: go/no-go 2. T-0: launch." Every milestone placed on day one, working backward from launch day. If the backward calculation reveals that T-21 engineering complete requires work to start yesterday, that is information — not a planning failure. Better to discover the timeline is infeasible at T-60 than at T-3.',
  },
  {
    step: 'Place explicit go/no-go criteria in the calendar event, not in a separate document',
    detail: '"T-14 go/no-go criteria: QA pass rate ≥90%, help center live, sales demo-ready, legal review signed." Go/no-go criteria written into the calendar event — not in a separate spec document that may not be read before the meeting. Explicit criteria prevent go/no-go meetings from becoming status update meetings. "Is QA at 90%?" is a yes/no question. "Does the team feel ready?" is a consensus exercise. Go/no-go meetings with written criteria make decisions rather than discussions.',
  },
  {
    step: 'Place cross-functional readiness milestones on a shared calendar',
    detail: '"Engineering: feature complete [date]." "Marketing: landing page live [date], email sequence scheduled [date]." "Sales: training session [date], battle card final [date]." "Support: documentation live [date], escalation path documented [date]." Cross-functional milestones placed on a single shared calendar — not in separate Jira/Asana/Notion systems visible only to each team. Shared calendar gives each team visibility into what others are completing and when. Dependency visibility: if engineering slips, marketing sees it before assets are finalized for a date that won&apos;t hold.',
  },
  {
    step: 'Place the embargo date and lift time for press and analyst coverage',
    detail: '"Press embargo lift: launch day 9:00 AM ET." Embargo lift time placed as a calendar event with the exact time, shared with marketing and communications. Embargo management requires PR and communications teams to have the lift time confirmed before outreach. Embargo lifting without coordinated timing produces some coverage before the announcement is live — and some coverage citing a page that doesn&apos;t exist yet. Press embargo lift placed as a hard calendar event at the time it will lift, not a general launch day marker.',
  },
  {
    step: 'Place the post-launch monitoring cadence before launch day',
    detail: '"Post-launch T+1: error rate review." "Post-launch T+3: NPS and support ticket volume." "Post-launch T+7: full review." Post-launch monitoring cadence placed before launch day. T+1 error rate review: is the product behaving as expected? T+3 early signal review: any anomalies in usage, support volume, or NPS? T+7 full review: full picture of launch performance against goals. Post-launch reviews placed before launch ensures the cadence happens as planned, not as time permits.',
  },
  {
    step: 'Place the retrospective and next iteration planning before the post-launch period ends',
    detail: '"Launch retrospective — T+14." "Next iteration kickoff — T+21." Retrospective placed at T+14 — after the first week of data but before the team has mentally moved to the next project. Retrospective: what went well in the launch process, what should change for the next launch? Next iteration kickoff placed at T+21 with the first iteration of improvements informed by launch data. Planning placed before it competes with other priorities — T+21 planned at T-14 holds better than T+21 planned at T+1.',
  },
]

const LAUNCH_FAILURES = [
  { failure: 'Launch day is an aspiration rather than a fixed anchor', consequence: 'Launch calendars built by working forward from today treat the launch date as an output of the process rather than a constraint on it. Forward-planning launch calendars accumulate delays at each milestone — each slip pushes the next milestone — until the launch date is rediscovered as infeasible at T-14. Backward-planning from a fixed launch day reveals infeasibility at T-60, when there is time to add resources, reduce scope, or negotiate the date before commitments are made externally.' },
  { failure: 'Go/no-go checkpoint criteria are not written down before the meeting', consequence: 'Go/no-go meetings without written criteria become status update meetings that end with "we think we&apos;re ready." Written criteria — "QA pass rate ≥90%, help center published, sales training complete" — make the go/no-go decision a lookup, not a consensus process. Teams that know their criteria before the go/no-go meeting prepare for the specific questions. Teams that don&apos;t know the criteria prepare for a general readiness conversation. These produce different meetings and different decisions.' },
  { failure: 'Each team tracks its readiness milestones in separate systems', consequence: 'Launch coordination that lives in separate systems — engineering in Jira, marketing in Asana, sales in Salesforce — requires a dedicated coordination role to surface cross-team dependency visibility. Without shared visibility, marketing finalizes assets for a launch date that engineering has internally decided to slip. Sales schedules training for a feature demo that QA has identified as not ready. Single shared launch calendar gives cross-functional milestone visibility without requiring a dedicated program manager to translate between systems.' },
  { failure: 'Post-launch review scheduled after the launch rather than before it', consequence: 'Post-launch reviews scheduled after the launch compete with post-launch fire-fighting and re-entry to normal work. A product launch that encounters issues consumes the attention that would have gone to scheduling and preparing the review. Reviews scheduled before the launch have calendar hold regardless of what happens after launch day. Post-launch reviews held within 7 days of launch capture decisions, near-misses, and process improvements while the launch is still recent — 30-day post-launch reviews reconstruct rather than recall.' },
]

export default function ProductLaunchCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Launch Calendar"
        title={
          <>
            Every team ready on the same day.
            <br />
            <em className="not-italic text-gold">Go/no-go criteria met. Post-launch review done.</em>
          </>
        }
        lede="Most launches that miss windows miss them not because the product was unready but because the launch calendar did not exist — or existed as a date without milestones. A product launch calendar works backward from launch day to place explicit go/no-go checkpoints, puts cross-functional readiness milestones for engineering, marketing, sales, support, and legal on a single shared timeline, places the embargo lift time as a hard event, and schedules the post-launch review cadence before launch day so it happens regardless of what follows."
        crumbs={[{ label: 'Product Launch Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/product-managers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for product managers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties coordinates a launch so every team is ready on the same day.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a product launch calendar where every team is ready and the post-launch review happens.</h2>
          </Reveal>
          <div className="space-y-3">
            {LAUNCH_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four launch planning patterns that produce misaligned teams and missed windows.</h2>
          </Reveal>
          <div className="space-y-3">
            {LAUNCH_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Launch analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for product launch discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'T-14 go/no-go criteria pass rate by team',
                'Cross-functional milestone completion vs. launch timeline',
                'Milestone slip rate and days slipped per milestone',
                'Post-launch review completion within 7 days',
                'T+1/T+3/T+7 monitoring cadence completion',
                'Retrospective completion rate within 14 days of launch',
                'Engineering feature-complete to launch gap (days)',
                'Sales training completion before go/no-go checkpoint',
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
        title="Every team ready on the same day."
        subtitle="Backward-planned milestones, explicit go/no-go criteria, cross-functional readiness tracking, and post-launch review cadence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for product managers', href: '/for/product-managers' }}
      />
    </>
  )
}
