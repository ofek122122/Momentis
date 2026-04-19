import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: '1-on-1 Meeting Calendar — how to structure a weekly 1-on-1 that actually changes how a manager and direct report work together',
  description:
    'A 1-on-1 without a calendar structure becomes a status update the manager could have gotten from a Slack message. This guide covers how to set the 1-on-1 agenda in advance so the meeting starts with the employee\'s priorities, the right 50/50 split between career development and operational topics, how to use the running 1-on-1 doc as the accountability layer between meetings, and how to run the quarterly 1-on-1 retrospective so the format evolves with the relationship.',
  alternates: { canonical: '/one-on-one-meeting-calendar' },
  openGraph: {
    title: '1-on-1 Meeting Calendar',
    description: 'Structure a weekly 1-on-1 that actually changes how a manager and direct report work together.',
    url: '/one-on-one-meeting-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'The agenda belongs to the direct report — the manager\'s job is to be responsive',
    desc: 'A 1-on-1 where the manager drives the agenda is a status meeting. Status meetings are useful, but they do not build the trust or surface the signals that make a 1-on-1 valuable. The direct report adds to the shared 1-on-1 doc before the meeting. The manager reviews before and adds their items at the bottom. The meeting starts with the direct report\'s highest-priority item. If the manager\'s items are time-sensitive, they go first — but this is the exception, not the default. The format signals who the meeting is for. A 1-on-1 that consistently starts with the manager\'s updates produces a direct report who stops adding to the agenda.',
  },
  {
    icon: Clock,
    title: 'The 50/50 split: half operational, half career and development',
    desc: 'A 1-on-1 that is entirely operational produces a direct report who knows their manager is responsive to immediate problems but has no idea whether their career is on track. A 1-on-1 that is entirely developmental produces a manager who is unaware of operational blockers until they escalate. The 50/50 split — half of each 1-on-1 for operational topics (blockers, decisions, project status requiring discussion), half for career development (skill development, career trajectory, feedback on recent work, professional goals) — does not require a strict timer. It requires a manager who actively redirects operational-only agendas toward developmental topics and vice versa.',
  },
  {
    icon: BarChart3,
    title: 'The running 1-on-1 doc is the accountability layer between meetings',
    desc: 'Action items agreed in a 1-on-1 that are not written down are not completed at the rate of action items that are written down. The shared 1-on-1 doc has three sections: agenda (direct report items, then manager items), notes from the current meeting, and open action items with owners and deadlines from previous meetings. The open action items section is reviewed at the start of every 1-on-1 — not as a performance review but as a discipline that demonstrates that what is agreed in the 1-on-1 has consequences. A manager who never follows up on 1-on-1 action items teaches their direct report that 1-on-1 commitments are suggestions.',
  },
  {
    icon: Users,
    title: 'The quarterly 1-on-1 retrospective: is this format still working?',
    desc: 'A 1-on-1 format that worked for a new employee in their first month may not work for the same employee eighteen months later when they are more confident, working on larger problems, and need less tactical guidance. Once per quarter, the last 10 minutes of a 1-on-1 is a retrospective on the 1-on-1 itself: What is working? What is not? What should we change? The quarterly retrospective is a calendar event — not a spontaneous conversation that happens if someone brings it up. The frequency, format, and focus of the 1-on-1 should evolve with the relationship and the employee\'s development stage.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Week one', action: 'Set the 1-on-1 recurring calendar event with the direct report. Block 30-50 minutes (30 for experienced direct reports with low operational load, 50 for new hires or high-complexity roles). Create the shared 1-on-1 doc and share access now — the doc structure: Agenda (direct report items first, manager items second), Notes section, and Open Action Items with owner and deadline columns. Explain the format to the direct report: this meeting is for their agenda. The manager reviews the doc before the meeting. The quarterly retrospective cadence is placed on the calendar now: the last week of each quarter has a 1-on-1 retrospective event.' },
  { time: 'Before each 1-on-1', action: 'Direct report adds agenda items by the morning of the meeting day. Manager reviews the agenda before the meeting — not during the first five minutes of the meeting. Manager adds their items at the bottom. Neither party should be seeing the agenda for the first time when the meeting starts. If the direct report has not added items by the morning of the meeting, the manager sends a brief message: "What\'s most on your mind for our 1-on-1 today?" — not to chase, but to surface the signal that the direct report may not know what 1-on-1s are for.' },
  { time: 'During 1-on-1', action: 'Start with the direct report\'s highest-priority item. Work through their agenda. Manager items at the end. For each topic: if it produces an action item, write it in the Open Action Items section with owner and deadline before moving to the next topic — not as a retrospective task at the end. Feedback on recent work: specific, behavioral, referenced to a specific event in the last week. Not "you\'re doing great" — "the way you handled the Q3 planning meeting when the scope changed was exactly the right move and here\'s what specifically made it effective." End 5 minutes early to capture outstanding action items.' },
  { time: 'After 1-on-1', action: 'Action items are captured in the shared doc before the meeting ends. Nothing to do after — no meeting summary to write, no follow-up email to send. The shared doc is the record. If a manager finds themselves writing extensive post-1-on-1 summaries, the doc structure is not working. The next meeting\'s first agenda item is always a review of Open Action Items from the previous meeting. A direct report who has not completed their action items without explanation is a signal — surfaced at the start of the 1-on-1, not by a message the day before.' },
  { time: 'Skip one', action: 'If the 1-on-1 must be skipped due to a conflict: cancel with at least 24 hours notice, never cancel the morning of, and reschedule to a specific time the same week — not "we\'ll catch up next week." A manager who skips 1-on-1s without rescheduling teaches their direct report that the meeting is optional. The pattern of skipped 1-on-1s is a leading indicator that surfaces in exit interviews. If 1-on-1s are being skipped consistently, the recurring event needs to move to a better slot — not be left as a ghost meeting that never happens.' },
  { time: 'Quarterly retro', action: 'Quarterly 1-on-1 retrospective: last 10 minutes of the Q-end 1-on-1 are reserved for the format review. Three questions: (1) What is working about our 1-on-1s? (2) What is not working? (3) What should we change in Q+1? The format change is documented in the shared doc. Common quarter-3 changes: frequency shifts (weekly to biweekly as the employee becomes more independent), focus shifts (less tactical, more career), format shifts (structured agenda replaced by a more free-form conversation as trust increases). The quarterly retrospective is a calendar event, not a spontaneous conversation.' },
  { time: 'Annual review', action: 'Annual 1-on-1 audit: review the shared doc from the past year. How many action items were completed on time? How many were consistently not completed by the same person? What topics dominated the agenda over the year? What topics were never discussed despite being on the list? The annual audit is an input to the direct report\'s annual review — not a substitute for it. The pattern of 1-on-1 engagement (who adds items, who follows through on action items, what topics never come up) is often the most honest signal about the health of the working relationship.' },
]

export default function OneOnOneMeetingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="1-on-1 Meeting Calendar"
        title={
          <>
            Agenda belongs to the direct report. 50/50 operational and development.
            <br />
            <em className="not-italic text-gold">Running doc is the accountability layer. Quarterly retrospective on the calendar.</em>
          </>
        }
        lede="A 1-on-1 without a calendar structure becomes a weekly status update. The 1-on-1 calendar is set up in week one: shared doc with direct-report-first agenda, 50/50 split between operational topics and career development, open action items reviewed at every meeting start, and a quarterly format retrospective placed on the calendar before the first meeting happens. The meeting is for the direct report — the manager\'s job is to show up prepared and follow through. Momenties structures the full 1-on-1 calendar and accountability rhythm."
        crumbs={[{ label: '1-on-1 Meeting Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/performance-review-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Performance reviews
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">1-on-1 calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a 1-on-1 structure that builds the relationship instead of reporting status.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">1-on-1 meeting calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From week-one setup through the quarterly retrospective and annual review that evolves the format with the relationship.</h2>
          </Reveal>
          <div className="space-y-3">
            {CALENDAR_RHYTHM.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I had run 1-on-1s for six years before I understood why they were not working. They were status updates. I drove the agenda. I asked what people were working on. They told me. We identified blockers. I helped. Useful, but not what a 1-on-1 is for. When I switched to the direct-report-driven agenda with a shared doc, the first thing I noticed was that my engineers started adding items I never would have asked about: a concern about team dynamics, a question about their career path, frustration with a process that had been slowing them down for months. None of that had surfaced in the status-update format because I had not created the conditions for it. The quarterly retrospective was the second unlock — it gave me explicit permission to change the format when it stopped working. The format should not be fixed. The relationship changes. The format needs to change with it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ryan C.</div>
                  <div className="text-xs text-muted-foreground">Engineering manager, distributed team of 8, 9 years of people management</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the 1-on-1 calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every recurring and milestone event in a structured 1-on-1 calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Weekly 1-on-1 — 30-50 minutes, direct-report-driven agenda',
                'Shared 1-on-1 doc — created in week one, agenda + notes + open action items',
                'Pre-meeting prep — doc reviewed by both parties before the meeting',
                'Action items — written in doc before moving to the next topic',
                'Open action items review — first agenda item every meeting',
                'Skip protocol — reschedule within the same week, never to next week',
                'Quarterly format retrospective — last 10 minutes of Q-end 1-on-1',
                'Annual 1-on-1 audit — action item completion rate and topic pattern review',
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
        title="1-on-1s that build the relationship — not just report status."
        subtitle="Direct-report-driven agenda, 50/50 operational and development split, running accountability doc, and quarterly format retrospective. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Performance reviews', href: '/performance-review-calendar' }}
      />
    </>
  )
}
