import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team Meeting Calendar — How to design a meeting cadence that protects deep work',
  description:
    'A team meeting calendar batches recurring meetings into designated days, protects two or more no-meeting blocks per week for deep work, places the weekly standup at a fixed time that does not move, and schedules all-hands and retrospectives on a predictable cycle — so the team has the meeting structure they need without the meeting fragmentation that kills individual output.',
  alternates: { canonical: '/team-meeting-calendar' },
  openGraph: {
    title: 'Team Meeting Calendar — Momenties',
    description: 'Design a meeting cadence that protects deep work.',
    url: '/team-meeting-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Meeting days batched so non-meeting days are protected for deep work',
    desc: '"Meeting days: Tuesday, Thursday. No-meeting days: Monday, Wednesday, Friday." Meeting days batched to Tuesday and Thursday. Monday, Wednesday, and Friday protected as no-meeting days. Batching meeting days produces two outcomes: meetings that happen get full attention because they are expected, and no-meeting days produce uninterrupted deep work because the expectation is established. The most common team meeting failure is distributed meetings — one meeting Monday morning, one Tuesday midday, one Wednesday late afternoon — that fragment every day without consolidating any. Meeting batching is a scheduling decision, not a cultural one.',
  },
  {
    icon: Clock,
    title: 'Weekly standup placed at a fixed time that never moves',
    desc: '"Weekly standup: [day], [time], standing. Duration: 15 minutes." Weekly standup placed at a fixed time that does not change week to week. A standup that moves — "let\'s do it at 10 today, I have a conflict at 9" — produces a team that cannot plan around it and eventually stops treating it as fixed infrastructure. 15-minute standup with a hard stop. Agenda: what did you complete, what will you complete, any blockers for the team. Standup that exceeds 15 minutes is not a standup — it is a status meeting that should be scheduled separately.',
  },
  {
    icon: BarChart3,
    title: 'Retrospective placed on a predictable cycle with a preparation window',
    desc: '"Sprint retrospective: [sprint end date], 60 minutes. Retro prep: [retro - 24 hours]." Retrospective placed at the end of every sprint or every two weeks on a fixed cycle. Retrospective preparation placed 24 hours before — team members add items to the retro board before the meeting, not during it. Retrospectives without preparation produce 15 minutes of gathering feedback that should have been gathered asynchronously and 45 minutes of discussing the first item raised, which is rarely the highest-priority item. Prep window converts a reactive meeting into a prioritized meeting.',
  },
  {
    icon: Shield,
    title: 'All-hands placed quarterly on a predictable schedule announced in advance',
    desc: '"All-hands: [Q start + 2 weeks], standing quarterly. 60 minutes." All-hands placed quarterly, on the same week of each quarter. Quarterly predictability means the team builds the all-hands into their planning cycle rather than treating it as a surprise calendar invasion. All-hands agenda fixed in advance: company metric update, one product or initiative deep dive, open Q&A with a hard cutoff. All-hands without a fixed agenda become a 60-minute status update that could have been an email. Fixed agenda with predictable structure converts attendance from obligation to expectation.',
  },
]

const MEETING_STEPS = [
  {
    step: 'Audit the current meeting load before redesigning the cadence',
    detail: '"Meeting audit: [2-week retrospective]." Before redesigning the meeting cadence, audit the current meeting load for the past two weeks. Audit: how many recurring meetings exist, total meeting hours per person per week, percentage of days that have at least one meeting blocking a 2-hour deep work window, and which meetings have a defined agenda vs. which are open-ended discussions. Most teams that feel over-meeting discover during the audit that 40% of their recurring meetings have no clear owner and no defined outcome — these are the meetings that should be cancelled before any new cadence is designed.',
  },
  {
    step: 'Designate meeting days and protect no-meeting days before scheduling anything else',
    detail: '"Meeting days: [2 days/week]. No-meeting days: [3 days/week]." Designate meeting days before scheduling any recurring meeting. Meeting days are the only days on which new recurring meetings are placed. No-meeting days are protected at the team level — any request to place a meeting on a no-meeting day requires explicit opt-in from all attendees. Most teams that designate meeting days find that their current recurring meetings fit within 2 days with minor rescheduling. The redesign is a scheduling decision, not a negotiation with individual team members about their availability.',
  },
  {
    step: 'Place all recurring meetings on the designated meeting days in priority order',
    detail: '"Priority order: standup, sprint ceremonies, 1:1s, team syncs, cross-functional meetings." Place recurring meetings on meeting days in priority order. Standup first — it is the non-negotiable synchronization point. Sprint ceremonies (planning, retro, review) second. 1:1s third — scheduled at fixed times that do not float week to week. Team syncs fourth. Cross-functional meetings last — these are the most negotiable in terms of timing. Cross-functional meetings placed by the team that controls more of the attendees. Teams that place their own recurring meetings first have meetings that land on their meeting days; teams that allow external meetings to land anywhere lose their meeting-day structure within 30 days.',
  },
  {
    step: 'Set meeting norms as calendar event descriptions, not team documents',
    detail: '"Meeting norms embedded in recurring event descriptions." Meeting norms placed in the recurring calendar event description rather than in a team document. Norms in the event description: agenda format, pre-read requirement (yes/no and where it lives), time limit and hard stop, action item owner format. Norms in a team document are read once and forgotten. Norms in the calendar event are visible every time the participant opens the event — the 5 seconds before the meeting when norms are most likely to be applied.',
  },
  {
    step: 'Place a quarterly meeting audit to remove recurring meetings that have lost purpose',
    detail: '"Quarterly meeting audit: [Q start + 1 week], standing." Quarterly meeting audit placed as a standing team meeting. Audit: review every recurring meeting, confirm it still has a defined owner and a clear outcome, and cancel or restructure any meeting that fails the audit. Recurring meetings that survive the audit continue. Recurring meetings that cannot answer "who owns this, what decision does it produce, and who specifically needs to be there" are cancelled or converted to async. Most teams discover 1-2 recurring meetings per quarter that have outlived their purpose and are consuming collective team time with no identifiable output.',
  },
  {
    step: 'Protect the no-meeting day norm by treating violations as exceptions requiring approval',
    detail: '"No-meeting day exception: explicit opt-in required from all attendees." No-meeting day violations treated as exceptions requiring explicit opt-in from every attendee, not implicit acceptance from calendar acceptance. The process: meeting organizer acknowledges they are requesting a no-meeting day exception, explains the urgency, and each attendee individually confirms opt-in. Friction in the exception process is the feature, not a bug — it converts casual no-meeting day violations into considered decisions. Teams that allow frictionless no-meeting day overrides lose the protection within 60 days as exception becomes norm.',
  },
]

const MEETING_FAILURES = [
  { failure: 'Meetings distributed across every day — no day is available for sustained deep work', consequence: 'Teams that distribute recurring meetings evenly across the week produce a schedule where no day has a 3-hour uninterrupted block. The Monday 9 AM standup, the Tuesday 11 AM sync, the Wednesday 2 PM planning, and the Thursday 4 PM retro each consume 45-60 minutes of calendar but also consume the transition time before and after — the pre-meeting context-switch and the post-meeting re-engagement delay. The actual cost of each meeting is 90-120 minutes of productive time. Distributed meetings across five days produce zero days suitable for deep work. Batched meetings on two days produce three days with protected deep work windows.' },
  { failure: 'Standup that moves week to week — treated as optional by the team', consequence: 'A standup that moves — from 9 AM to 10 AM because of a conflict, from Tuesday to Wednesday because of a holiday, from 15 minutes to 30 minutes because someone has updates — is not infrastructure. It is a suggestion. Teams that experience a standup that moves regularly begin skipping it when attendance is inconvenient because the standup has demonstrated through its own behavior that it is flexible. Fixed standups have attendance rates above 90% because the team has built the fixed time into their morning routine. Flexible standups have attendance rates that decline to 50-60% within three months.' },
  { failure: 'All-hands scheduled with less than 2 weeks notice — treated as a disruption', consequence: 'All-hands meetings announced less than 2 weeks in advance arrive as calendar disruptions rather than anticipated company events. Team members who receive a calendar invite for next Friday\'s all-hands on Monday have already scheduled their Friday as a no-meeting deep work day or committed to deliverables that conflict. All-hands placed on a predictable quarterly schedule are planned around. All-hands announced last-minute are attended by people who had no conflicting commitments by chance — a self-selected audience that underrepresents the team members most focused on delivery.' },
  { failure: 'Retrospectives without preparation — first 15 minutes spent gathering feedback that should be async', consequence: 'Retrospectives without a 24-hour preparation window begin with a facilitation exercise to gather feedback that the team could have submitted asynchronously. The facilitation exercise produces items in random order, with the loudest or first-raised item dominating the discussion. Retrospectives with a 24-hour async preparation window begin with a pre-sorted list of items ranked by the number of team members who raised similar themes — the meeting time is spent on structured discussion of the highest-priority items rather than on the gathering exercise. Pre-preparation converts a reactive retrospective into a prioritized one.' },
]

export default function TeamMeetingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Team Meeting Calendar"
        title={
          <>
            Meeting days Tuesday and Thursday.
            <br />
            <em className="not-italic text-gold">No-meeting days protected. Standup at a fixed time.</em>
          </>
        }
        lede="Teams that feel over-meeting are usually under-structured. A team meeting calendar batches all recurring meetings to two designated days, protects three days per week for deep work, places the standup at a time that never changes, runs retrospectives with a 24-hour preparation window, and audits recurring meetings quarterly to cancel ones that have lost purpose — so the team has the synchronization they need without the fragmentation that destroys individual output."
        crumbs={[{ label: 'Team Meeting Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/no-meeting-wednesday"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            No-meeting day guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures team meetings so synchronization is protected and deep work is preserved.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to design a team meeting cadence that your team treats as infrastructure, not overhead.</h2>
          </Reveal>
          <div className="space-y-3">
            {MEETING_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four team meeting patterns that produce over-meeting teams and under-delivered work.</h2>
          </Reveal>
          <div className="space-y-3">
            {MEETING_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Meeting cadence analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for team meeting discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Meeting hours per person per week (current vs. redesign)',
                'No-meeting day violation rate (exceptions per month)',
                'Standup attendance rate (% of team at fixed standup)',
                'Days with at least one 3-hour uninterrupted block per person',
                'Retrospective preparation completion rate (items submitted before meeting)',
                'Recurring meetings cancelled per quarterly audit',
                'Meeting-to-output ratio (meeting hours vs. deliverable completion rate)',
                'All-hands advance notice lead time (days from announcement to event)',
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
        title="Meeting days batched. Deep work days protected."
        subtitle="Meeting cadence design, no-meeting day protection, standup at a fixed time, and quarterly recurring meeting audit. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'No-meeting day guide', href: '/no-meeting-wednesday' }}
      />
    </>
  )
}
