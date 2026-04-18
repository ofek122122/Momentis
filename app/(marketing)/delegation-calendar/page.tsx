import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delegation Calendar — How to delegate work and track it without micromanaging',
  description:
    'Effective delegation requires calendar discipline: follow-up dates placed when work is assigned, not remembered. A delegation calendar tracks what was assigned, to whom, and when to check in — without requiring constant status meetings or micromanagement.',
  alternates: { canonical: '/delegation-calendar' },
  openGraph: {
    title: 'Delegation Calendar — Momenties',
    description: 'Delegate work and track it with calendar follow-ups, not status meetings.',
    url: '/delegation-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Follow-up placed at delegation, not remembered later',
    desc: 'The most common delegation failure: work assigned without a follow-up date. The follow-up is mental overhead that competes with other work and often drops. When delegating, place the follow-up immediately: "Check-in with Marcus on market research — thursday 2pm." The follow-up is on the calendar the moment the delegation happens. Nothing to remember.',
  },
  {
    icon: Clock,
    title: 'Delegation window matched to task complexity',
    desc: '"First draft review — 3 days after assignment." "Midpoint check-in — 1 week." "Final delivery — 2 weeks." The follow-up cadence is matched to the task, not defaulted to "end of week." Short-cycle tasks need earlier check-ins; long-cycle tasks need midpoint review. Mismatched cadence produces either micromanagement or last-minute surprises.',
  },
  {
    icon: BarChart3,
    title: 'Delegation load analytics',
    desc: 'Managers who review analytics on delegated tasks vs. self-retained tasks often find a misalignment: high-value work being kept, low-value work being kept for comfort, or tasks "delegated" that never get followed up. Analytics shows what percentage of your calendar time is occupied by work that could be delegated — and what\'s currently delegated but tracking poorly.',
  },
  {
    icon: Shield,
    title: 'Escalation triggers placed proactively',
    desc: 'Delegation without an escalation trigger produces crises. "If I don\'t hear back by wednesday — escalate" placed as a calendar alert at delegation time means the trigger fires automatically. No mental energy spent monitoring. No "I should have followed up earlier" discovery on the day before the deadline.',
  },
]

const DELEGATION_STEPS = [
  {
    step: 'Assign the task with a clear outcome',
    detail: 'Not "work on the Q2 report" but "complete the Q2 revenue analysis with charts by next friday at 5pm." Outcome-based delegation gives the recipient clarity and gives you a measurable completion standard.',
  },
  {
    step: 'Confirm context and authority',
    detail: '"You have authority to access the database directly and pull whatever data you need. If you hit a permission issue, contact IT — cc me." Delegation without authority transfer is not real delegation — it creates constant check-ins as blockers arise.',
  },
  {
    step: 'Place the midpoint check-in immediately',
    detail: '"Check-in with [name] on Q2 analysis — wednesday 10am." Placed on the calendar the moment the task is delegated. The check-in is not optional — it surfaces blockers before they become delivery failures.',
  },
  {
    step: 'Place the escalation trigger',
    detail: '"If Q2 draft not received by thursday noon — follow up directly." Calendar alert fires Thursday at noon. If the draft is received, cancel the alert. If not, you have 24 hours to intervene before the Friday deadline.',
  },
  {
    step: 'Review on delivery, not before',
    detail: 'Between the midpoint check-in and the delivery date: nothing. No status requests, no "just checking in" messages. The calendar handles the follow-up cadence. Unsolicited check-ins erode the autonomy that makes delegation work.',
  },
  {
    step: 'Debrief and document for next delegation',
    detail: '"Post-delegation debrief — [task], 15 minutes, [next day]." One short session: did the delegation succeed? What context was missing? Was the outcome definition clear enough? Each debrief improves the next delegation. Placed on the calendar immediately after delivery.',
  },
]

const DELEGATION_FAILURES = [
  { failure: 'No follow-up date at delegation', consequence: 'Delegated work disappears into the recipient\'s queue. Without a calendar anchor, both parties have different assumptions about when review happens.' },
  { failure: 'Follow-up cadence too frequent', consequence: 'Micromanagement signals distrust and makes delegation more expensive than doing the work. Recipients stop exercising judgment when they expect a check-in tomorrow.' },
  { failure: 'Follow-up cadence too infrequent', consequence: 'Problems compound between check-ins. A blocker at day 3 that goes unaddressed becomes a delivery failure at day 14.' },
  { failure: 'Delegating without authority', consequence: 'The recipient cannot complete the work without escalating every decision. Real delegation transfers both task and decision-making authority within the task scope.' },
]

export default function DelegationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Delegation Calendar"
        title={
          <>
            Work delegated. Follow-up handled.
            <br />
            <em className="not-italic text-gold">No micromanagement required.</em>
          </>
        }
        lede="Most delegation fails not because the wrong work was assigned but because no follow-up was placed on the calendar when the assignment happened. A delegation calendar places every follow-up, midpoint check-in, and escalation trigger on the calendar at the moment of delegation — so delegated work is tracked by the calendar, not by memory, and not by a constant stream of status meetings."
        crumbs={[{ label: 'Delegation Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/meeting-cadence"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Meeting cadence guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports effective delegation tracking.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to delegate work and track it without micromanaging.</h2>
          </Reveal>
          <div className="space-y-3">
            {DELEGATION_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four delegation patterns that produce late or failed deliveries.</h2>
          </Reveal>
          <div className="space-y-3">
            {DELEGATION_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Delegation analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for delegation effectiveness.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Delegated task follow-up completion rate',
                'Time between delegation and first check-in',
                'Escalation trigger activation rate',
                'Delegated work delivered on-time rate',
                'Self-retained vs. delegated work ratio',
                'Post-delegation debrief completion',
                'Check-in frequency by task recipient',
                'Manager focus time freed by delegation',
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
        title="Work delegated. Follow-up handled."
        subtitle="Delegation follow-up calendar, escalation triggers, and delegation load analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Meeting cadence guide', href: '/meeting-cadence' }}
      />
    </>
  )
}
