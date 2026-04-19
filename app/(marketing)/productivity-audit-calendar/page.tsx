import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Productivity Audit Calendar — How to run a time audit before changing your schedule',
  description:
    'A productivity audit calendar places the time audit as a discrete data-collection phase before any schedule changes, identifies the gap between planned time allocation and actual time spent, maps energy patterns against task difficulty, and schedules the audit review before the redesign — so productivity changes are made from evidence instead of assumption.',
  alternates: { canonical: '/productivity-audit-calendar' },
  openGraph: {
    title: 'Productivity Audit Calendar — Momenties',
    description: 'Run a time audit before changing your schedule.',
    url: '/productivity-audit-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Time audit placed as a discrete data-collection phase with a defined end date',
    desc: '"Time audit: [start date] — [start date + 14 days]." Time audit placed as a discrete calendar phase with a defined start and end date. 14-day audit captures two full work weeks — enough to include recurring meetings, weekly commitments, and one cycle of your regular task rhythm. A time audit without an end date becomes a permanent overhead activity. 14-day audit with a defined end date produces a dataset and then stops — producing data you act on rather than data you perpetually collect.',
  },
  {
    icon: Clock,
    title: 'Audit review placed as a meeting before any schedule redesign begins',
    desc: '"Productivity audit review: [audit end + 2 days]." Audit review placed as a calendar meeting 2 days after the audit ends. 2-day gap gives time to process the audit data before the review. Audit review before the schedule redesign: what percentage of time was spent on high-leverage activities, what captured time that was not planned, where is the gap between intended allocation and actual allocation. No schedule redesign begins before the audit review is complete — changes made from audit data hold; changes made from intuition repeat.',
  },
  {
    icon: BarChart3,
    title: 'Energy mapping placed against actual task difficulty, not assumed difficulty',
    desc: '"Energy audit: [audit week, annotate each task with energy level 1-5]." During the time audit, each completed task tagged with energy level (1 = low, 5 = high). Energy mapping reveals which tasks consume more cognitive energy than expected and which time-of-day slots correlate with highest performance. Energy audits consistently produce surprises — tasks assumed to be low-difficulty often consume high energy because of context-switching cost, and vice versa. Schedule redesign that accounts for energy patterns produces sustainable schedules; redesign that ignores energy produces schedules that collapse by Thursday.',
  },
  {
    icon: Shield,
    title: 'Scheduled redesign placed after audit review with a 30-day implementation window',
    desc: '"Schedule redesign: [audit review + 3 days]. Implementation trial: [redesign + 30 days]." Schedule redesign placed 3 days after the audit review, followed by a 30-day implementation trial. 30-day trial window before evaluating the redesign — new schedule patterns require 3-4 weeks to produce reliable data. Redesign evaluation placed at day 30, not day 3. Schedules abandoned after 3 days were abandoned before they had a chance to demonstrate whether they worked. 30-day trial with a hard evaluation date separates "this schedule is hard to maintain" from "this schedule doesn\'t work."',
  },
]

const AUDIT_STEPS = [
  {
    step: 'Place the audit as a 14-day data-collection phase, not a standing practice',
    detail: '"Time audit phase: [date] to [date + 14 days]. Daily 5-minute capture at end of day." 14-day audit with a daily 5-minute end-of-day capture. Capture format: list every task worked on, time spent on each (estimate), energy level (1-5), whether the task was planned or reactive, and whether the task moved a priority forward or not. 14 days of data reveals patterns that single-day introspection misses — specifically, the recurring time drains that appear weekly (Friday reporting, Monday standups, end-of-month reconciliation) and the reactive tasks that consistently displace planned work.',
  },
  {
    step: 'Categorize captured time by leverage level before the audit review',
    detail: '"Pre-review categorization: [audit end + 1 day]." Each captured task categorized by leverage level before the review meeting. Leverage categories: high (advances a primary goal, not replicable by delegation), medium (necessary but replicable or delegatable), low (administrative, reactive, or neither advancing a goal nor required). Categorization done before the review — not during. Pre-categorization allows the review to focus on patterns and decisions rather than on sorting raw data. Most time audits produce a categorization that surprises: high-leverage work represents 20-30% of actual time for most professionals.',
  },
  {
    step: 'Identify the gap between planned allocation and actual allocation',
    detail: '"Allocation gap analysis: planned vs. actual, expressed in hours per week." Allocation gap analysis placed before the schedule redesign. Gap analysis: how many hours per week did you intend to spend on high-leverage work vs. how many hours did the audit show you actually spent. Gap between intention and actual is the core productivity problem — not motivation, not discipline, not tools. Most schedule redesigns that fail do so because they try to increase high-leverage time without reducing the low-leverage time that currently occupies those hours. Allocation gap analysis makes the trade-off explicit.',
  },
  {
    step: 'Map energy patterns against time-of-day and task type',
    detail: '"Energy pattern map: [audit data] — peak hours, trough hours, task energy cost." Energy pattern map built from the audit data. Pattern map: which hours of the day produced the highest energy ratings on high-difficulty tasks, which hours produced the lowest. Energy peaks are typically consistent within a 90-120 minute window and occur at the same time-of-day across the audit period. Energy map used to align high-leverage tasks with peak energy hours in the redesigned schedule. Aligning task difficulty with energy availability is the single highest-ROI schedule change — more impactful than any time management technique applied to a misaligned schedule.',
  },
  {
    step: 'Place the schedule redesign as a calendar event with defined decisions',
    detail: '"Schedule redesign session: [audit review + 3 days], 90 minutes." Schedule redesign placed as a 90-minute calendar event with defined decisions: where will high-leverage tasks be placed (aligned with energy peaks), what recurring low-leverage time drains will be batched or eliminated, what daily structure will protect deep work from reactive interruption. Redesign session produces a written schedule template — not a resolution, a calendar block template. Template implemented as recurring calendar events starting the following Monday.',
  },
  {
    step: 'Place the 30-day trial evaluation before deciding whether to adjust or keep the redesign',
    detail: '"30-day evaluation: [redesign start + 30 days]." 30-day evaluation placed before the redesign begins. Evaluation: repeat the energy and allocation audit for the final week of the trial, compare high-leverage time allocation to the pre-redesign audit baseline, and compare energy ratings at peak hours to the pre-redesign baseline. 30-day evaluation is not a decision to abandon the schedule — it is a data point. Schedules that produce 10% improvement in high-leverage allocation in 30 days produce 20-30% improvement in 90 days as the patterns become automatic.',
  },
]

const AUDIT_FAILURES = [
  { failure: 'Schedule redesign made without an audit — changes repeat existing patterns', consequence: 'Schedule redesigns made from intuition rather than data typically produce the same schedule with different labels. The meetings that currently consume three hours every Tuesday get moved to Wednesday — the underlying cause (poorly scoped meeting agenda, no mandatory pre-read, attendees who should not be in the room) remains. A time audit identifies the cause; intuition identifies the symptom. Redesigns that address causes hold; redesigns that address symptoms require re-redesign 60 days later when the symptom re-emerges in a new form.' },
  { failure: 'Audit runs indefinitely without a defined end date — data collected but never analyzed', consequence: 'Time audits without defined end dates produce data accumulation rather than insight. The act of capturing time makes you feel productive without producing the allocation gap analysis that changes behavior. A 14-day audit with a hard end date and a scheduled review 2 days later produces actionable data. A rolling audit that continues for weeks produces data that is too large to analyze without specialized tools and too stale at the far end to be representative of current patterns.' },
  { failure: 'Energy mapping skipped — schedule redesigned around time blocks without energy alignment', consequence: 'Schedule redesigns that allocate high-leverage time blocks without mapping energy produce schedules that feel correct on paper and collapse in practice. Scheduling a 3-hour deep work block at 2 PM is productive only if 2 PM is a peak energy window for the specific person. For afternoon energy-dip people, the 2 PM deep work block competes with post-lunch cognitive decline and produces one hour of effective work followed by two hours of low-quality time that feels like work. Energy mapping takes 30 additional minutes during the audit and eliminates this failure mode entirely.' },
  { failure: '30-day trial abandoned at day 5 — schedule judged before it has time to produce data', consequence: 'New schedule patterns feel inefficient in the first week because they require active management — checking the template, resisting reactive task insertion, and enforcing the planned structure against the pull of existing habits. Week one data is not representative of week four data. Schedules abandoned at day 5 are abandoned before the cognitive overhead of maintaining the new pattern has reduced. The 30-day evaluation date placed on the calendar before the redesign begins is the mechanism that prevents this — it converts "this feels hard" from a reason to quit into a data point to track.' },
]

export default function ProductivityAuditCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Productivity Audit Calendar"
        title={
          <>
            14-day time audit before any schedule change.
            <br />
            <em className="not-italic text-gold">Allocation gap analysis. Energy mapping. 30-day trial.</em>
          </>
        }
        lede="Most schedule redesigns repeat existing patterns because they are made from intuition rather than data. A productivity audit calendar places the time audit as a discrete 14-day data-collection phase, maps actual time allocation against intended allocation, identifies energy patterns by task type and time-of-day, and places the schedule redesign only after the audit review is complete — so productivity changes are made from evidence and hold past the first week."
        crumbs={[{ label: 'Productivity Audit Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/time-audit"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time audit guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the productivity audit so schedule changes produce lasting results.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to run a productivity audit that produces a schedule redesign with a 30-day trial and an evaluation date.</h2>
          </Reveal>
          <div className="space-y-3">
            {AUDIT_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four productivity audit patterns that produce redesigned schedules that collapse within two weeks.</h2>
          </Reveal>
          <div className="space-y-3">
            {AUDIT_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Productivity audit analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for productivity audit discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'High-leverage time allocation (planned vs. actual, hours per week)',
                'Reactive task frequency (unplanned tasks as % of total captured time)',
                'Energy level by task type and time-of-day (peak vs. trough identification)',
                'Audit completion rate (daily captures completed / 14 days)',
                'Pre-redesign vs. post-redesign allocation gap (30-day comparison)',
                'Schedule adherence rate (planned blocks kept vs. disrupted)',
                'Days from audit end to redesign implementation',
                '30-day trial evaluation completion before schedule judgment',
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
        title="14-day audit before the schedule redesign."
        subtitle="Time allocation gap analysis, energy mapping, redesign session, and 30-day trial with evaluation date. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time audit guide', href: '/time-audit' }}
      />
    </>
  )
}
