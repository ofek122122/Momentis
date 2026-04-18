import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { UserCheck, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onboarding Calendar — How to schedule new hire milestones that produce retention, not compliance',
  description:
    'An onboarding calendar schedules structured check-ins at 30, 60, and 90 days, places manager touchpoints before new hires feel lost, and builds a milestone sequence that produces role clarity and connection — not just documentation. Most early attrition is caused by insufficient onboarding, not poor hiring. The difference is a calendar with milestones, not a checklist with a deadline.',
  alternates: { canonical: '/onboarding-calendar' },
  openGraph: {
    title: 'Onboarding Calendar — Momenties',
    description: 'Schedule onboarding milestones that produce retention, not compliance.',
    url: '/onboarding-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: UserCheck,
    title: '30-60-90 day milestones placed at offer acceptance',
    desc: '"Day 1 orientation." "Week 1 role clarity meeting." "30-day check-in — how are you settling in?" "60-day performance baseline." "90-day formal review." Milestone sequence placed when the offer is accepted — not created the morning of day 30. Managers with milestones on the calendar remember them. Managers without milestones schedule them reactively, after the new hire has already formed their first impression.',
  },
  {
    icon: Clock,
    title: 'Manager touchpoints placed before new hires feel lost',
    desc: '"Day 3 check-in — questions from first week?" "Day 7 — culture and team introduction complete?" "Day 14 — any blockers or confusion?" "Day 21 — first deliverable review." Manager touchpoints placed before the new hire reaches the disorientation window — not scheduled when the manager has capacity. Touch points at 3, 7, 14, and 21 days cost 30 minutes total and prevent 6 months of disengagement.',
  },
  {
    icon: BarChart3,
    title: 'Team introduction sequence placed across the first two weeks',
    desc: '"Key stakeholder introduction — Day 2, 30 minutes." "Cross-functional team intro — Day 5." "Informal team lunch — Week 2." "Executive introduction — Day 10." Team introductions placed as calendar events in week one — not left to the new hire to arrange. New hires who complete structured introductions in the first two weeks build networks 3x faster than those who arrange them informally.',
  },
  {
    icon: Shield,
    title: '90-day review placed before the new hire forms a final impression',
    desc: '"90-day performance review — scheduled from Day 1." "Post-90-day development plan — scheduled at 90-day review." The 90-day review is the first structured feedback the new hire receives on performance, fit, and trajectory. Placed at Day 1, it signals that development is a commitment. Scheduled reactively at Day 85, it signals that performance management is reactive. New hires notice the difference.',
  },
]

const ONBOARD_STEPS = [
  {
    step: 'Place the full milestone sequence when the offer is accepted',
    detail: '"Offer accepted → Day 1, Day 3, Day 7, Day 14, Day 21, Day 30, Day 60, Day 90 events placed immediately." Onboarding calendar created at offer acceptance, not on Day 1. IT access, equipment, system provisioning, and orientation all placed before the start date — not discovered as gaps on Day 1. First-week logistics placed when the hire is confirmed, not when it becomes urgent.',
  },
  {
    step: 'Build a pre-start checklist as calendar events, not a document',
    detail: '"Pre-start: laptop provisioned by Day -5." "Workspace prepared by Day -3." "System access confirmed by Day -2." "Day 1 orientation schedule confirmed by Day -1." Pre-start tasks placed as calendar events with owners. Tasks in a document become tasks that are discovered on Day 1. Tasks on the calendar with owners and deadlines become tasks that are completed before Day 1.',
  },
  {
    step: 'Place the role clarity meeting in week 1 — not week 3',
    detail: '"Role clarity meeting — Day 3, 60 minutes." Manager and new hire align on: first 30-day priorities, what success looks like at 90 days, how decisions are made, and where to find help. Role clarity meeting placed in week 1 produces faster ramp-up. Role clarity meeting scheduled when it seems convenient produces a new hire who spends weeks inferring expectations rather than clarifying them.',
  },
  {
    step: 'Schedule peer buddy introduction as a structured calendar event',
    detail: '"Peer buddy assignment — Day 1." "Buddy check-in schedule — Day 3, Day 10, Day 20." Peer buddy introduced as a structured calendar event, not an informal introduction. Buddy check-ins placed as calendar events for both buddy and new hire. New hires with structured buddy relationships ask questions they would not ask a manager. Buddy relationship placed on the calendar is a buddy relationship that persists past week 1.',
  },
  {
    step: 'Place the 30-day check-in as a performance conversation, not a social call',
    detail: '"30-day check-in — 60 minutes, structured agenda." Agenda: what\'s working, what\'s not, what remains unclear, what the new hire needs from the manager. Placed as a structured conversation with an agenda, not a "how are things going" catch-up. A 30-day check-in with an agenda takes 60 minutes and identifies issues that would otherwise surface as attrition at 90 days.',
  },
  {
    step: 'Conduct a post-90-day onboarding retrospective',
    detail: '"Onboarding retrospective — Day 95, 30 minutes, manager + HR." What worked? What was missing? What should be changed for the next hire? Onboarding retrospective placed 5 days after the 90-day milestone. One retrospective per hire — not one per year. Onboarding programs that are never improved produce the same early attrition repeatedly.',
  },
]

const ONBOARD_FAILURES = [
  { failure: 'Day 1 orientation planned the week before start date', consequence: 'IT provisioning, system access, and workspace readiness confirmed the week before Day 1 are confirmed too late for changes. Laptops not provisioned, access not granted, and managers unavailable on Day 1 are not exceptional incidents — they are the consequence of planning that started too late. Pre-start milestones placed at offer acceptance prevent this.' },
  { failure: '30-day check-in is a status update, not a feedback conversation', consequence: 'New hires who receive a 30-day status update rather than a structured feedback conversation do not know how they are performing relative to expectations. The 30-day check-in with an agenda covers performance, clarity, and support needs — not projects. A status update produces information for the manager. A feedback conversation produces clarity for the new hire.' },
  { failure: 'Team introductions left to the new hire to arrange', consequence: 'New hires who are told to "schedule time with the team" arrange fewer introductions than those who receive a structured introduction sequence. Self-arranged introductions also cluster around the most approachable team members rather than the most relevant ones. Team introduction sequence placed on the calendar produces broader and faster network formation.' },
  { failure: 'No onboarding retrospective after 90 days', consequence: 'Onboarding programs that are never evaluated are never improved. Post-90-day retrospectives take 30 minutes and surface the gaps that produced confusion, slow ramp-up, or early disengagement in the cohort just onboarded. Without the retrospective, the same gaps appear in the next hire\'s experience. The retrospective placed 5 days after the 90-day milestone closes the improvement loop.' },
]

export default function OnboardingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Onboarding Calendar"
        title={
          <>
            Milestones placed. New hires retained.
            <br />
            <em className="not-italic text-gold">30-60-90 reviews scheduled from Day 1.</em>
          </>
        }
        lede="Most early attrition is caused by insufficient onboarding, not poor hiring — and the difference is a calendar with milestones placed at offer acceptance rather than a checklist created on Day 1. An onboarding calendar places manager touchpoints before new hires feel lost, builds a structured introduction sequence in the first two weeks, and schedules the 30-60-90 day review cadence from Day 1 — so retention is an outcome of process, not luck."
        crumbs={[{ label: 'Onboarding Calendar' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties converts onboarding into retention.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build an onboarding calendar that produces retention, not compliance.</h2>
          </Reveal>
          <div className="space-y-3">
            {ONBOARD_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four onboarding calendar patterns that produce early attrition.</h2>
          </Reveal>
          <div className="space-y-3">
            {ONBOARD_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Onboarding analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for onboarding program discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Pre-start milestone completion rate',
                'Day 1 orientation readiness rate',
                'Week 1 role clarity meeting completion rate',
                'Buddy introduction completion in week 1',
                '30-day check-in completion with structured agenda',
                '60-day and 90-day review on-time rate',
                'Team introduction sequence completion rate',
                'Post-90-day retrospective completion rate',
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
        title="Milestones placed. New hires retained."
        subtitle="Pre-start checklist, 30-60-90 day review cadence, team introduction sequence, and post-90 retrospective. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for HR', href: '/for/hr' }}
      />
    </>
  )
}
