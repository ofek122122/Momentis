import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { FileText, Clock, BarChart3, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Calendar — How to plan, schedule, and publish content consistently',
  description:
    'A content calendar converts content strategy into a publication schedule with deadlines, review windows, and distribution tasks. Most content programs stall not from lack of ideas but from lack of calendar discipline: no deadline set, no review window blocked, no distribution task placed.',
  alternates: { canonical: '/content-calendar' },
  openGraph: {
    title: 'Content Calendar — Momenties',
    description: 'Plan, schedule, and publish content consistently with calendar discipline.',
    url: '/content-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: FileText,
    title: 'Content pipeline with production deadlines',
    desc: 'Content without deadlines has no velocity. "Publish blog post: [topic]" placed as a final deadline anchors the entire production chain. Working backward: "First draft — 5 days before publish." "Review and edit — 3 days before." "Final approval — 1 day before." "Publish and distribute — publish day." The pipeline is a calendar, not a project board. Events fire; boards are optional.',
  },
  {
    icon: Clock,
    title: 'Production windows blocked before deadline pressure',
    desc: '"Content writing block — tuesday/thursday 9-11am." Placed as recurring protected time before the production cycle demands it. Writers who schedule writing time reactively (when a deadline is close) produce under time pressure with deteriorating quality. Protected recurring writing time fills the pipeline before urgency appears.',
  },
  {
    icon: BarChart3,
    title: 'Publishing cadence analytics',
    desc: 'Content teams that track publishing cadence analytics discover that 40% of planned content is published late, 20% is never published, and the remaining 40% clusters in the last week of each month. Analytics shows actual publish cadence versus planned cadence. The variance is always instructive: it reveals where the production bottleneck is located — drafting, review, or distribution.',
  },
  {
    icon: Layers,
    title: 'Multi-channel distribution scheduled at publication',
    desc: '"Publish article — tuesday 9am." "Send newsletter — tuesday 11am." "Share on LinkedIn — tuesday 12pm." "Schedule Twitter/X thread — tuesday 1pm." Distribution tasks placed as separate calendar events when the content is published — not remembered later. Distribution following publication is where most content programs lose compounding reach.',
  },
]

const CONTENT_STEPS = [
  {
    step: 'Set the publishing cadence and anchor dates',
    detail: '"Publish 2 blog posts per week — tuesdays and thursdays." "Weekly newsletter — fridays 9am." "Monthly long-form piece — last tuesday." Anchor dates placed in January for the full year. Cadence discipline begins with publishing slots that exist whether or not content is ready — the slot creates the productive pressure.',
  },
  {
    step: 'Work backward from publish date to set production deadlines',
    detail: '"Blog post publish: thursday. Final edit: wednesday noon. First draft: monday noon." Production deadlines placed as calendar events when the publish date is set. The draft deadline is the most important — if the draft is late, everything downstream compresses. Draft deadline is non-negotiable.',
  },
  {
    step: 'Block recurring writing and production time',
    detail: '"Deep writing block — 9-11am, monday and tuesday." Protected, recurring calendar time for content production. Not tentative — confirmed. Writing that happens in blocked time is higher quality and more consistent than writing that happens in reactive gaps. Block writing time before deadlines appear on the horizon.',
  },
  {
    step: 'Place review and approval as separate calendar events',
    detail: '"Content review — [name], wednesday 2pm, 30 minutes." Review is a calendar appointment, not a Slack message. When review has a time and a participant, it happens. When review is a message that awaits a response, it delays. Approval block placed for the decision-maker, not just the reviewer.',
  },
  {
    step: 'Schedule distribution at publication time',
    detail: '"Publish [post title] — thursday 9am." At the time this publish event is created: "LinkedIn share — thursday 10am." "Newsletter mention — friday." Distribution tasks placed as separate calendar events immediately after the publish event is created. Distribution is not improvised after publishing — it is scheduled in advance.',
  },
  {
    step: 'Review publishing velocity monthly',
    detail: '"Content velocity review — last friday of each month, 20 minutes." How many pieces were planned versus published? What was the average days-late for published pieces? Which stage (drafting, review, distribution) had the most delay? Each monthly review improves the next month\'s production calendar based on actual observed bottlenecks.',
  },
]

const CONTENT_FAILURES = [
  { failure: 'Content planned, no production deadlines set', consequence: 'Content exists on an ideas list, not on a calendar. No event fires to trigger production. The list grows while the calendar shows no content work. Publication never happens on a predictable cadence.' },
  { failure: 'Review step not calendared', consequence: 'Draft sits in someone\'s email waiting for review. Publish deadline approaches. Review is skipped or rushed. Quality declines or deadline slips. The review step is the most commonly uncalendered step in content production.' },
  { failure: 'Distribution improvised after publishing', consequence: 'Publication happens tuesday. The social shares happen wednesday — if remembered. The newsletter mention happens friday — if it makes it. The window of peak distribution attention is missed because distribution was not pre-scheduled.' },
  { failure: 'No recurring writing time, only deadline pressure', consequence: 'Writing happens under deadline pressure, which produces lower quality, higher stress, and a production rhythm that is too reactive to sustain. Blocked recurring writing time is what separates consistent content programs from sporadic ones.' },
]

export default function ContentCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Calendar"
        title={
          <>
            Content scheduled. Deadlines honored.
            <br />
            <em className="not-italic text-gold">Publishing consistent.</em>
          </>
        }
        lede="Most content programs stall not from lack of ideas but from lack of calendar discipline — no draft deadline placed, no review window blocked, no distribution task scheduled. A content calendar converts content strategy into a publication pipeline where every step has a calendar event, and publishing happens consistently because the calendar enforces it."
        crumbs={[{ label: 'Content Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/editorial-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Editorial calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties produces consistent content publishing.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a content calendar that publishes on cadence.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONTENT_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four content calendar patterns that produce inconsistent publishing.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONTENT_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Content analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for content publishing consistency.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Planned vs. published pieces per month',
                'Average days late per published piece',
                'Production stage where delays occur most',
                'Writing block utilization rate',
                'Review completion rate on schedule',
                'Distribution task completion rate',
                'Publishing cadence vs. target cadence',
                'Content velocity trend month over month',
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
        title="Content scheduled. Deadlines honored."
        subtitle="Production pipeline calendar, distribution scheduling, and publishing velocity analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Editorial calendar', href: '/editorial-calendar' }}
      />
    </>
  )
}
