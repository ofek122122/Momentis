import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quarterly Business Review Calendar — how to structure a QBR that drives decisions instead of reporting the past',
  description:
    'A quarterly business review without a calendar structure becomes a two-hour report on what already happened. This guide covers how to set the QBR agenda before the quarter ends, the right ratio of backward analysis to forward planning, how to structure QBR decision gates so the review actually changes what happens in Q+1, and how to run the 4-week post-QBR accountability structure so QBR commitments survive the first sprint back.',
  alternates: { canonical: '/quarterly-business-review-calendar' },
  openGraph: {
    title: 'Quarterly Business Review Calendar',
    description: 'Structure a QBR that drives decisions instead of reporting the past.',
    url: '/quarterly-business-review-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Set the QBR agenda 3 weeks before quarter-end — not the week of',
    desc: 'A QBR agenda set the week before the review produces a deck assembled from whatever data is available, shaped by what is easy to show rather than what the business needs to decide. The QBR agenda — specifically: which metrics require a decision (not just a review), what Q+1 resource allocations are on the table, which strategic questions cannot be resolved without cross-functional input — is set 3 weeks before quarter-end. This gives data teams time to build the right views, and gives stakeholders time to prepare positions rather than react to slides.',
  },
  {
    icon: Clock,
    title: 'The 70/30 split: 30% backward analysis, 70% forward decisions',
    desc: 'QBRs filled with performance reporting produce exhaustion and no change in Q+1 plans. The backward analysis — what happened and why — should take no more than 30% of the agenda. The forward decisions — what changes in Q+1 based on what we learned, what bets are we making or abandoning, what resources shift — should take 70%. The 30% feeds the 70%: every metric presented should have a specific question attached to it. "Revenue was $X" is reporting. "Revenue was $X and we need to decide whether to accelerate the enterprise motion or double down on mid-market" is a QBR agenda item.',
  },
  {
    icon: BarChart3,
    title: 'QBR decision gates: every review item ends with a decision or a next step with an owner',
    desc: 'QBR items that end with "good to know" are not QBR items — they are reporting that could have been a dashboard update. Every item on the QBR agenda ends with one of three outcomes: a decision made (with owner and Q+1 implication), a decision deferred to a specific owner with a deadline before the next QBR, or an explicit removal from the agenda for the next quarter. The decision log from the QBR is distributed within 24 hours, not assembled as a retrospective document two weeks later. The decision log is the QBR output.',
  },
  {
    icon: Users,
    title: 'The 4-week post-QBR structure: week 1 activation, week 4 course correction',
    desc: 'QBR decisions that are not implemented in week 1 of Q+1 are typically not implemented at all — the operational reality of the new quarter absorbs them. The post-QBR structure is built at the QBR: week 1 activation check (30 minutes — what specifically changed in the first week of Q+1), week 4 course correction (60 minutes — are Q+1 plans tracking, what early signal requires adjustment). Both are placed on the calendar before the QBR ends. The week 1 check is the most important — it is the moment QBR decisions either convert to behavior change or become a record of what the team intended.',
  },
]

const CALENDAR_RHYTHM = [
  { time: '3 weeks out', action: 'Set the QBR agenda before the quarter ends. For each agenda item: what decision is required, who needs to have a position before the QBR, what data is required that is not currently in a dashboard. Assign a data owner for each non-standard metric. Distribute the agenda with 3-week lead time — attendees who need to prepare positions for revenue allocation, headcount decisions, or product bets need more than a week. Pre-QBR preparation assignments placed on the calendar now: competitive analysis, cohort data, pipeline review each with an owner and a deadline of 5 business days before the QBR.' },
  { time: '1 week out', action: 'Pre-read distribution: all QBR data is distributed 5 business days before the QBR. No QBR session begins with a 30-minute briefing on what happened in Q-1 — that briefing is the pre-read. Teams that arrive at the QBR without pre-reads spend the first half of every session getting everyone to the same context level. Pre-QBR decision preparation: each agenda item has an explicit question that the session will answer. Attendees know what positions they are expected to bring. No first-time reveals of material business news at the QBR.' },
  { time: 'QBR day', action: 'First session: Q-1 retrospective — 30% of time. Each metric reviewed against the question it feeds, not as a standalone report. Second session: Q+1 planning decisions — 70% of time. Resource allocation, initiative prioritization, bets made or abandoned, hiring decisions. Decision log maintained in real time on a shared screen. Third session (final 20 minutes): decision log review — which decisions are logged with owners and Q+1 implications, which are still open. Close open decisions before the QBR ends. Week 1 activation check and week 4 course correction placed on all calendars before the QBR closes.' },
  { time: 'Day +1', action: 'Decision log distributed to all stakeholders within 24 hours. Format: decision, owner, Q+1 implication, deadline for first action. Any decision that was deferred at the QBR has an explicit owner and a deadline in the decision log — not "to be discussed" but "Owner: [name], deadline: [date], outcome: decision on Q+1 enterprise headcount." The decision log is the QBR output that the team references for the next 13 weeks. It is not a meeting summary — it is a contract for Q+1.' },
  { time: 'Week 1 check', action: 'Week 1 activation check: 30 minutes. One question per QBR decision: what specifically happened in week 1 of Q+1 as a result of this decision? Not a status update — a specific behavioral change. Any decision that produced no change in week 1 gets explicit triage: is the decision still valid, is the owner the right person, does the deadline need to move? Decisions that are no longer valid because Q+1 context changed are formally closed and replaced with the new decision. Decisions that are valid but stalled get an escalation owner.' },
  { time: 'Week 4 check', action: '4-week course correction: 60 minutes. Three questions: (1) Are Q+1 plans tracking against Q+1 targets? (2) What early signal from the first month requires a plan adjustment before the quarter is half over? (3) Which QBR decisions are fully activated, partially activated, or stalled? Week 4 is early enough to course-correct. A QBR decision that is still stalled at week 4 either failed at decision quality (wrong decision) or failed at ownership (wrong owner) — both diagnoses inform the next QBR agenda.' },
  { time: 'Pre-QBR prep', action: 'Three weeks before the next QBR: review the decision log from the previous QBR. How many decisions are fully implemented? How many produced the Q+1 change they were intended to produce? The answer shapes the next QBR agenda: if decision implementation rate is low, the next QBR needs a session on decision quality and execution accountability before it addresses new strategic questions. If implementation rate is high, the next QBR can go deeper on the strategic questions the previous quarter surfaced but did not resolve.' },
]

export default function QuarterlyBusinessReviewCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Quarterly Business Review Calendar"
        title={
          <>
            Agenda 3 weeks out. 30% backward, 70% forward.
            <br />
            <em className="not-italic text-gold">Decision log distributed within 24 hours. Week 1 check before Q+1 starts.</em>
          </>
        }
        lede="A QBR without a calendar structure produces two hours of reporting what already happened with no Q+1 decisions made. The QBR calendar starts 3 weeks before quarter-end: agenda set before the quarter closes, pre-reads distributed 5 days before the review, 30/70 backward-to-forward ratio enforced, real-time decision log maintained on shared screen, decision log distributed within 24 hours, and week 1 activation check placed on all calendars before the QBR closes. The QBR is not done until the week 4 course correction runs. Momenties structures the full QBR calendar."
        crumbs={[{ label: 'Quarterly Business Review Calendar' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">QBR calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a QBR that produces Q+1 decisions instead of Q-1 reporting.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Quarterly business review calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From agenda-setting 3 weeks before quarter-end through the 4-week post-QBR course correction.</h2>
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
                &ldquo;We ran QBRs for six quarters that all felt productive and changed almost nothing about Q+1 plans. The diagnosis: we were reviewing performance data and calling it a QBR, but we were not making decisions. The agenda was assembled the week before from whatever was ready. The pre-reads went out the night before. We spent 80% of the time on what happened and 20% on what to do differently. When we restructured with the 3-week lead time, the 30/70 ratio, and the real-time decision log, the seventh QBR produced nine explicit Q+1 decisions with owners and deadlines. By the week 4 check, seven of them had produced visible plan changes. The week 1 activation check was the hardest change to make — it felt like extra process. It turned out to be the check that converted QBR decisions from intentions into actual changes.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Adrienne K.</div>
                  <div className="text-xs text-muted-foreground">Chief Revenue Officer, B2B SaaS company, 40-person go-to-market team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the QBR calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every planning, review, and accountability event in the full quarterly business review calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'QBR agenda set — 3 weeks before quarter-end with explicit decision questions',
                'Pre-read data distributed — 5 business days before the QBR',
                'QBR day — 30% backward analysis, 70% Q+1 decisions, real-time decision log',
                'Decision log distributed — within 24 hours of QBR close',
                'Week 1 activation check — 30-min: what changed in first week of Q+1?',
                'Week 4 course correction — 60-min: are Q+1 plans tracking?',
                'Pre-next QBR prep — previous decision log reviewed as agenda input',
                'Deferred decisions — each has explicit owner and deadline in log, not "to be discussed"',
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
        title="QBRs that change Q+1 plans — not just report Q-1 results."
        subtitle="3-week agenda lead time, 30/70 backward-to-forward ratio, real-time decision log, and week 1 activation check placed before the QBR closes. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Performance reviews', href: '/performance-review-calendar' }}
      />
    </>
  )
}
