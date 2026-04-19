import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Remote Team Calendar — How to structure a distributed team calendar across time zones',
  description:
    'A remote team calendar places the working hours overlap window as the only synchronous meeting time, maintains async-first documentation windows before synchronous calls, places time zone-aware recurring events at consistent local times for each participant, and schedules team visibility touchpoints that replace the hallway conversations distributed work eliminates — so the remote team maintains coordination without meeting fragmentation.',
  alternates: { canonical: '/remote-team-calendar' },
  openGraph: {
    title: 'Remote Team Calendar — Momenties',
    description: 'Structure a distributed team calendar across time zones.',
    url: '/remote-team-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Synchronous meeting time limited to the overlap window across all time zones',
    desc: '"Synchronous window: [overlap start]–[overlap end], [time zones]. All recurring meetings in this window." Synchronous meeting time limited to the actual overlap window. If the team spans EST and PST, the synchronous window is 12 PM–5 PM EST / 9 AM–2 PM PST. No recurring meeting scheduled outside this window. Meetings scheduled outside the overlap window require at least one participant to attend at 7 AM or 9 PM — the meeting attendance is technically compliant and practically compromised. Overlap window defined once, embedded in the team calendar, and treated as the constraint rather than a preference.',
  },
  {
    icon: Clock,
    title: 'Async documentation window placed before each synchronous meeting',
    desc: '"Async prep window: [meeting - 24 hours]. Async materials due: [meeting - 2 hours]." Async documentation window placed 24 hours before each synchronous meeting. Materials due 2 hours before the meeting — not at the start. 2-hour lead time gives each time zone participant time to read before the meeting, regardless of when they arrive at their desk. Synchronous meetings without async preparation require the first 15-20 minutes for context transfer that should have been written. Remote meetings without async prep become the most expensive possible way to share written information.',
  },
  {
    icon: BarChart3,
    title: 'Time zone-aware recurring events placed at consistent local times for each participant',
    desc: '"Weekly sync: 10 AM PST / 1 PM EST / 6 PM GMT, Tuesdays." Recurring events placed with explicit time zone notation. Consistent local times for each participant — a recurring event that displays "10 AM" to the PST participant and "1 PM" to the EST participant is a fixed meeting. A recurring event that was set up in EST and displays "3 PM" to the PST participant after a daylight saving time shift is a meeting that moved. Explicit time zone management prevents the daylight saving time drift that causes remote teams to miss meetings by one hour without realizing until the scheduled time arrives.',
  },
  {
    icon: Shield,
    title: 'Team visibility touchpoints placed to replace hallway conversations remote work eliminates',
    desc: '"Daily async standup: [async channel], 9 AM each participant\'s local time. Weekly video social: [optional, standing, Friday 30 minutes]." Async daily standup placed as a daily written update in a designated channel — what I completed, what I\'m working on, any blockers. Written standup visible to all time zones as each person arrives online. Weekly optional social call placed as a standing event distinct from work meetings. Remote teams lose the spontaneous relationship-building that happens physically — deliberately scheduled social interaction that is low-stakes and optional replaces the serendipitous hallway conversation without forcing attendance.',
  },
]

const REMOTE_STEPS = [
  {
    step: 'Map the actual overlap window before scheduling any recurring meeting',
    detail: '"Team time zone map: [list all team members and their time zones]." Time zone map built before any recurring meeting is placed. Overlap window calculation: for each pair of time zones, identify the business-hours overlap. If the team spans more than one 8-hour window, the actual synchronous overlap may be 3-4 hours or less. Overlap window documented as a team resource and embedded in the recurring meeting description. Meetings proposed outside the overlap window trigger a documented exception process — not automatic acceptance. Teams that map their overlap window before scheduling discover it is often smaller than assumed.',
  },
  {
    step: 'Define async-first norms before the first synchronous meeting is scheduled',
    detail: '"Async-first norms: written documentation before synchronous escalation." Async-first norms defined before the team\'s first recurring synchronous meeting. Norms: what types of communication are async by default (status updates, decisions with clear criteria, one-way information sharing), what types require synchronous treatment (ambiguous decisions with multiple stakeholders, sensitive feedback, complex problem-solving where written exchange is too slow), and the async preparation requirement for any synchronous meeting. Norms placed in the team calendar event description for each recurring meeting — visible every time the event opens.',
  },
  {
    step: 'Place recurring meetings at the same local time for each participant, not at the same clock time',
    detail: '"Tuesday sync: 10 AM PST = 1 PM EST = 6 PM GMT. Daylight saving adjustment tracked." Recurring meetings placed at a specific local time for the lowest-latitude participant (typically the westernmost) and the corresponding times for all other participants explicitly noted. When daylight saving time changes in one region but not another, the relative times shift — teams that use UTC for scheduling avoid this; teams that schedule in local time must adjust twice per year when US and European DST transitions occur on different dates. UTC-anchored recurring events placed with explicit UTC time visible in the event title.',
  },
  {
    step: 'Place async work windows as protected calendar blocks at the start of each participant\'s workday',
    detail: '"Deep work block: 9–11 AM [participant local time], recurring." Deep work blocks placed at the start of each participant\'s workday — before the synchronous overlap window opens. Teams distributed across time zones have a natural deep work period in the morning before the overlap window begins. This period is most valuable when it is explicitly protected from meeting placement. Deep work blocks placed as recurring calendar events signal their protected status to meeting organizers and prevent the overlap window from expanding backward into the morning hours that are meant for focused work.',
  },
  {
    step: 'Place the weekly team visibility update as an async event, not a synchronous meeting',
    detail: '"Weekly written update: [async channel, Fridays, each participant]." Weekly team visibility update placed as an async written event — each team member posts a Friday end-of-week update: what was completed, what was learned, what is planned for next week, and any unresolved blockers. Weekly async update replaces the all-hands status meeting that remote teams often schedule to create visibility. Written updates are searchable, persistent, and readable in any time zone — synchronous status meetings are ephemeral and require simultaneous attendance. Teams with weekly async updates do not need weekly all-hands for visibility.',
  },
  {
    step: 'Place the quarterly in-person or high-bandwidth video event for relationship investment',
    detail: '"Quarterly team intensive: [Q start + 2 weeks], 2 days." Quarterly high-bandwidth event placed early in each quarter. Annual or biannual team offsites produce diminishing relationship value — quarterly investment produces compounding relationship value. Quarterly event format: 2 days, mix of structured working sessions and unstructured social time, explicit time for the conversations that don\'t happen in recurring meetings. Teams that meet quarterly in person or in high-quality video sessions maintain relationship bonds that sustain async collaboration for the 12 weeks between events. Teams that rely entirely on async and weekly syncs experience relationship erosion within 2-3 quarters.',
  },
]

const REMOTE_FAILURES = [
  { failure: 'Meetings scheduled outside the overlap window — one participant always compromised', consequence: 'Recurring meetings scheduled outside the team\'s overlap window require at least one participant to attend at an inconvenient time permanently. The participant at 7 AM or 9 PM will eventually either miss meetings, send a delegate, or become a lower-quality meeting participant than their daytime colleagues. The rotating "off-hours" meeting that moves each week to distribute the inconvenience is perceived as fair but is operationally fragmented — participants cannot build a consistent rhythm around a meeting that arrives at a different time each week. Overlap-window-only meetings are attended by all participants at a reasonable time.' },
  { failure: 'Synchronous meetings without async prep — first 15 minutes spent on context that should be written', consequence: 'Remote synchronous meetings without async preparation require a context transfer period at the start of every call. The context transfer — "here\'s the situation, here\'s what we\'ve tried, here\'s what we\'re deciding" — takes 10-20 minutes of a 30-60 minute meeting. For a weekly meeting with 5 participants across 4 time zones, this represents 50-100 person-minutes of expensive synchronous time used to share information that could have been written asynchronously in 10 minutes. Async prep materials placed 2 hours before the meeting convert the synchronous time from context transfer to decision-making.' },
  { failure: 'No async daily standup — team members invisible to each other between weekly syncs', consequence: 'Remote teams without an async daily standup develop visibility gaps. Team members who are blocked are blocked silently until the next synchronous call. Team members who have completed work that depends on others\' awareness remain unaware that the dependent work is ready. The absence of daily async standups is most acute across time zones — a blocker that appears at 9 AM PST is visible to the EST team member the next day\'s standup, not the same day. Daily async standups create a continuous visibility stream that surfaces blockers within hours across time zones rather than within days.' },
  { failure: 'No deliberate social structure — team relationships erode, async communication becomes transactional', consequence: 'Remote teams without deliberate social structure develop transactional communication patterns within 3-6 months. Without the spontaneous social contact of physical proximity, team members develop relationships that are exclusively work-task-oriented — they know what their colleagues are working on but not who their colleagues are. Transactional communication produces technically accurate async updates and interpersonally thin relationships. Interpersonally thin relationships produce conflict that escalates faster, feedback that lands harsher, and collaboration that requires more explicit negotiation. Optional weekly social calls and quarterly in-person investment prevent the transactional drift before it accumulates.' },
]

export default function RemoteTeamCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Remote Team Calendar"
        title={
          <>
            Meetings only in the overlap window.
            <br />
            <em className="not-italic text-gold">Async prep before each call. Daily written standup.</em>
          </>
        }
        lede="Remote team coordination failures are mostly scheduling failures. A remote team calendar limits synchronous meetings to the actual overlap window across all time zones, places async documentation 2 hours before each synchronous call, anchors recurring events to consistent local times for each participant, places a daily async standup for cross-timezone visibility, and schedules quarterly high-bandwidth events for relationship investment — so the remote team maintains coordination without the meeting fragmentation that comes from ignoring time zones."
        crumbs={[{ label: 'Remote Team Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-for-remote-teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Remote teams guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the remote team calendar so coordination happens without time zone friction.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a remote team calendar that respects time zones, protects deep work, and maintains visibility across locations.</h2>
          </Reveal>
          <div className="space-y-3">
            {REMOTE_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four remote team calendar patterns that produce coordination failures and relationship erosion.</h2>
          </Reveal>
          <div className="space-y-3">
            {REMOTE_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Remote team calendar analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for remote team coordination discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Meetings scheduled within overlap window (% of total team meetings)',
                'Async prep completion rate (materials submitted 2+ hours before meeting)',
                'Daily async standup participation rate (% of team per week)',
                'Meeting-free morning hours per participant per week (deep work protection)',
                'Meetings outside overlap window per month (exception rate)',
                'Weekly async update completion rate (Fridays, % of team)',
                'Quarterly high-bandwidth event attendance rate',
                'Time zone drift incidents (DST adjustment misses per year)',
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
        title="Overlap window only. Async prep before every call."
        subtitle="Time zone-aware scheduling, async daily standup, deep work protection, and quarterly relationship investment. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Remote teams guide', href: '/calendar-for-remote-teams' }}
      />
    </>
  )
}
