import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Clock, BarChart3, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Project Timeline Calendar — How to manage project deadlines and milestones on your calendar',
  description:
    'A project timeline calendar translates deliverable dates, milestone reviews, and resource commitments into a calendar that makes project status visible every day. Here\'s how to structure project timelines on the calendar so deadlines surface early enough to act on them.',
  alternates: { canonical: '/project-timeline-calendar' },
  openGraph: {
    title: 'Project Timeline Calendar — Momenties',
    description: 'Manage project deadlines and milestones on your calendar so nothing arrives as a surprise.',
    url: '/project-timeline-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Target,
    title: 'Milestones as hard calendar dates',
    desc: 'A project milestone that exists only in a project management tool has no daily visibility. Placing each milestone on the calendar as a hard deadline — "MVP feature complete — friday, march 7" — makes it visible in every weekly calendar review. Milestones discovered the week before they\'re due are managed; milestones discovered the day before are crises.',
  },
  {
    icon: Calendar,
    title: 'Work blocks scheduled backward from deadlines',
    desc: 'Starting from the delivery date, work backward: final review, revisions, first draft, research, kickoff. Each phase becomes a calendar block placed weeks ahead of the deadline. "Design review — feb 21" requires "design draft — feb 14" requires "design kickoff — feb 7." The calendar shows whether the schedule is achievable before work starts.',
  },
  {
    icon: BarChart3,
    title: 'Project time analytics by phase',
    desc: 'Tag calendar blocks by project and phase: research, design, development, review, delivery. Analytics shows time spent per phase per project. Are research phases running over and compressing development time? Which projects are consuming more calendar capacity than planned? Data surfaces scope creep before it becomes a delivery problem.',
  },
  {
    icon: Clock,
    title: 'Buffer blocks prevent deadline compression',
    desc: 'Projects run late because no buffer exists for unexpected delays. A buffer block — "project buffer — 2 days before delivery" — is a scheduled, flexible block that absorbs unexpected work without colliding with the delivery date. Buffer that isn\'t on the calendar doesn\'t get used — it gets consumed by other scheduled events.',
  },
]

const TIMELINE_STRUCTURE = [
  {
    phase: 'Kickoff block',
    timing: 'Day 1 of project',
    detail: 'Define scope, assign owners, confirm delivery dates, and place all downstream milestone dates on the calendar immediately. A kickoff that doesn\'t end with the project timeline on the calendar has not fully kicked off.',
  },
  {
    phase: 'Milestone reviews',
    timing: 'At each phase completion',
    detail: 'Scheduled milestone reviews — "phase 1 complete review — [date]" — as hard calendar events. Review confirms the work meets acceptance criteria before the next phase begins. Milestones not formally reviewed accumulate rework debt.',
  },
  {
    phase: 'Dependency checkpoints',
    timing: '1 week before each dependency',
    detail: '"Confirm client feedback received — [date]." Dependencies on external inputs — client approval, vendor delivery, legal sign-off — need checkpoints placed before the dependency is needed, not on the day it\'s required.',
  },
  {
    phase: 'Buffer blocks',
    timing: '48-72 hours before final delivery',
    detail: 'Unscheduled time before delivery for unexpected revisions, final checks, and scope that arrived late. Buffer blocks must be on the calendar to survive — unprotected time is claimed by other meetings.',
  },
  {
    phase: 'Delivery block',
    timing: 'Final delivery date',
    detail: '"Deliver: [project name] — [date], 60min." Final delivery as a calendar event. Client submission, handoff meeting, or launch execution scheduled as a committed block with prep time allocated immediately before it.',
  },
  {
    phase: 'Retrospective block',
    timing: '3-5 days after delivery',
    detail: '"Project retrospective — [project name], [date]." What worked, what didn\'t, what to change next project. Placed immediately after delivery, not scheduled "when we have time" — which means never.',
  },
]

const COMMON_FAILURES = [
  { failure: 'Milestones added to project tools, not calendar', consequence: 'No daily visibility. Milestones surface during weekly status meetings instead of being visible in the daily and weekly calendar review.' },
  { failure: 'No backward scheduling from delivery date', consequence: 'Work phases accumulate against the deadline rather than being planned. The last phase always runs over because earlier phases didn\'t account for their time requirements.' },
  { failure: 'Dependencies untracked on calendar', consequence: 'External blockers — client feedback, approvals, vendor deliverables — arrive as surprises. A dependency that wasn\'t calendared wasn\'t managed.' },
  { failure: 'Buffer not scheduled', consequence: 'Every unexpected complication compresses the delivery schedule. Teams work nights and weekends not because the project was complex, but because no buffer absorbed normal variance.' },
]

export default function ProjectTimelineCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Timeline Calendar"
        title={
          <>
            Every milestone visible.
            <br />
            <em className="not-italic text-gold">Deadlines never arrive as surprises.</em>
          </>
        }
        lede="Project timelines that live only in project management tools have no daily visibility. Milestones are discovered the week before they're due. Dependencies arrive as surprises. Delivery dates compress the final week because buffer wasn't planned. A project timeline calendar translates every milestone, dependency, and delivery date into calendar events that surface early enough to manage — not the day they're due."
        crumbs={[{ label: 'Project Timeline Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/time-blocking"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time blocking guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports project timeline calendar discipline.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Timeline structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Six calendar events every project timeline needs.</h2>
          </Reveal>
          <div className="space-y-3">
            {TIMELINE_STRUCTURE.map((item, i) => (
              <Reveal key={item.phase} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-medium text-foreground">{item.phase}</h3>
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide shrink-0">{item.timing}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four project calendar failures that produce late deliveries.</h2>
          </Reveal>
          <div className="space-y-3">
            {COMMON_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Project analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for project timeline health.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Upcoming milestones — 7, 14, 30 days',
                'Hours per project phase per week',
                'Project work time vs. total work time',
                'Milestone completion rate on schedule',
                'Buffer block utilization',
                'Dependency checkpoint completion',
                'Project retrospective completion rate',
                'Delivery date trend: on time vs. late',
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
        title="Every milestone visible. Deadlines never surprise."
        subtitle="Project milestone calendar, backward scheduling, and project phase analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time blocking guide', href: '/time-blocking' }}
      />
    </>
  )
}
