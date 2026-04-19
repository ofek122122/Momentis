import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentorship Calendar — How to structure mentorship so relationships produce outcomes, not just conversations',
  description:
    'A mentorship calendar places monthly 1:1 sessions as standing recurring events, sets quarterly goal review milestones at the start of each quarter, schedules introductions the mentor commits to making within 30 days of each session, and places an annual relationship review each January. Most mentorship relationships produce fewer outcomes than they could because sessions happen without structure and commitments made verbally are not tracked.',
  alternates: { canonical: '/mentorship-calendar' },
  openGraph: {
    title: 'Mentorship Calendar — Momenties',
    description: 'Structure mentorship so relationships produce outcomes, not just conversations.',
    url: '/mentorship-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Monthly sessions placed as standing recurring events, not ad hoc scheduling',
    desc: '"Monthly mentorship session — standing, first Thursday of month." Monthly session placed as a recurring standing event — not rescheduled from scratch each month. Ad hoc scheduling introduces a 3-5 day coordination overhead each cycle and creates gaps when both parties are busy. A standing recurring session is rescheduled only when necessary, not rebuilt from scratch monthly. Mentorship relationships that require scheduling effort each month meet less frequently than ones with standing time.',
  },
  {
    icon: Clock,
    title: 'Commitments from each session placed as calendar actions within 48 hours',
    desc: '"Post-session action: introduction to [name] — 48 hours." Commitments made in mentorship sessions — introductions, document shares, reading recommendations — placed as calendar events within 48 hours of the session. Verbal commitments not placed on calendar are completed at a materially lower rate than ones with a due date. The 48-hour placement window captures the session while context is fresh. Introductions delayed beyond 2 weeks require a re-warm context message.',
  },
  {
    icon: BarChart3,
    title: 'Quarterly goal review placed at the start of each quarter',
    desc: '"Q1 mentorship goal review — January 15." Quarterly goal review placed at the start of each quarter — not at the end. Start-of-quarter goal review sets the mentee&apos;s direction for the next 13 weeks while there is still time to act on it. End-of-quarter review is a retrospective, not a planning tool. Annual goals set in January reviewed quarterly: on pace, ahead, or blocked — and what the mentor can do in Q2 that couldn&apos;t be done in Q1.',
  },
  {
    icon: Shield,
    title: 'Annual relationship review placed in January to set goals and introductions for the year',
    desc: '"Annual mentorship review — January, goals for year, 3 introductions committed." Annual relationship review placed each January. Mentor commits to 3 specific introductions for the year by name or role. Mentee articulates 3 goals for the year that the mentor can actively support. Annual review gives both parties a frame for whether each session is making progress on something specific. Mentorship without an annual review produces good conversations but diffuse outcomes.',
  },
]

const MENTOR_STEPS = [
  {
    step: 'Place the monthly session as a standing recurring event in January',
    detail: '"January: monthly mentorship session — standing, first Thursday, 60 minutes." Monthly session placed as a standing recurring event at the start of the year — not scheduled month-to-month. Standing placement ensures the time is protected before other commitments fill the calendar. Mentorship sessions that must be scheduled each month compete with other priorities and occur less frequently. Recurring standing event scheduled for the year — each session rescheduled only when genuinely necessary.',
  },
  {
    step: 'Set annual goals and mentor commitments in the January session',
    detail: '"January session: mentee 3 goals for year, mentor 3 introductions committed by name." Annual goal-setting session placed in January. Mentee presents 3 specific goals for the year — not general aspirations but concrete outcomes. Mentor commits to 3 specific introductions by name or role — not "I can introduce you to people in X." January session with explicit commitments gives the relationship a direction that monthly sessions can build toward.',
  },
  {
    step: 'Place post-session actions within 48 hours of each session',
    detail: '"Post-session: [action] placed within 48 hours." After each monthly session, any commitment made — introduction, document, referral, reading list — placed as a calendar event with a due date within 7 days. Commitments made verbally without a calendar placement have a completion rate materially lower than ones with a date. "I&apos;ll send you that article" without a calendar event becomes "I meant to send you that article."',
  },
  {
    step: 'Place quarterly goal reviews at the start of Q2, Q3, and Q4',
    detail: '"Q2 goal review — April 1." "Q3 goal review — July 1." "Q4 goal review — October 1." Quarterly goal review placed at the start of each quarter. Review question: which of the 3 annual goals is on pace? Which is blocked and what does the mentor do to unblock it? Start-of-quarter placement means the next 13 weeks can be oriented toward the blocked goal. End-of-quarter placement means the next quarter is already underway before the conversation happens.',
  },
  {
    step: 'Track the introduction pipeline across the year',
    detail: '"Mentor introduction pipeline: [name] — Q1 committed, sent?" Introduction tracking placed as a simple checklist updated at each session. Mentor committed to 3 introductions in January — at Q2 review, how many have been made? At Q3 review, are remaining introductions still relevant or has the mentee&apos;s goal evolved? Introduction pipeline tracked as a separate thread from goal tracking — introductions are actions, not goals.',
  },
  {
    step: 'Place the annual relationship review each December to close and reset',
    detail: '"December: annual relationship review — 90-minute session, outcomes review." Annual relationship review placed each December. Review: which of the 3 goals were achieved? Which introductions were made and what resulted from them? What should the mentee pursue in the next year that the current mentor is well-positioned to support? What would be better supported by a different mentor? December review closes the year and informs whether to continue the current structure in January.',
  },
]

const MENTOR_FAILURES = [
  { failure: 'Sessions scheduled ad hoc rather than held as standing recurring events', consequence: 'Mentorship relationships that require scheduling coordination each month meet less frequently than ones with standing time. Ad hoc scheduling introduces 3-5 days of coordination overhead per cycle and creates gaps when either party is busy. Monthly cadence maintained for the first 3-4 months often drops to quarterly when ad hoc scheduling meets a busy period. Standing recurring event with rescheduling as the exception produces materially more sessions per year than ad hoc scheduling as the default.' },
  { failure: 'Commitments made in sessions not placed on calendar', consequence: 'Verbal commitments made during mentorship sessions — introductions, document shares, referrals — are completed at a substantially lower rate than ones placed on calendar with a due date. "I&apos;ll introduce you to X" said in a session without a next action has a half-life of about one week before it becomes context that requires reconstruction. Post-session action placed within 48 hours with a 7-day due date converts the session into a set of completed actions rather than a set of intentions.' },
  { failure: 'No annual goals set — sessions proceed without a direction', consequence: 'Mentorship sessions without annual goals produce good conversations but diffuse outcomes. The session is useful but does not build toward anything in particular. Annual goals established in January give each monthly session a frame: is this session moving the mentee toward one of the 3 goals? Quarterly reviews answer whether the mentee is on pace. Mentors who don&apos;t know what the mentee is trying to achieve in a given year cannot make the specific introductions or provide the specific guidance that would actually accelerate it.' },
  { failure: 'Introduction commitments made without tracking or follow-through', consequence: 'Introductions are often the highest-value action a mentor can take and the one most likely to fall through without explicit tracking. "I know someone you should meet" said in January and not placed on a follow-up calendar typically does not result in an introduction. Introduction pipeline tracked across the year — committed, sent, responded, met — converts the mentor&apos;s network into a concrete asset for the mentee. Introductions tracked produce introductions made. Introductions discussed produce introductions intended.' },
]

export default function MentorshipCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentorship Calendar"
        title={
          <>
            Sessions standing. Commitments tracked.
            <br />
            <em className="not-italic text-gold">Introductions made, goals reached.</em>
          </>
        }
        lede="Most mentorship relationships produce fewer outcomes than they could — not because the mentor lacks knowledge or the mentee lacks ambition, but because sessions happen without structure and commitments made verbally are never tracked. A mentorship calendar places monthly sessions as standing recurring events, sets annual goals with explicit mentor commitments in January, places post-session actions within 48 hours, and reviews quarterly so both parties know whether the relationship is producing the outcomes it should."
        crumbs={[{ label: 'Mentorship Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/founders"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for founders
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures mentorship so relationships produce outcomes.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a mentorship calendar where sessions produce outcomes and commitments are kept.</h2>
          </Reveal>
          <div className="space-y-3">
            {MENTOR_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four mentorship patterns that produce good conversations but diffuse outcomes.</h2>
          </Reveal>
          <div className="space-y-3">
            {MENTOR_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Mentorship analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for mentorship discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly session completion rate (sessions held vs. scheduled)',
                'Post-session action completion within 48-hour placement window',
                'Introduction pipeline: committed, sent, responded, met',
                'Annual goal review completion at Q1, Q2, Q3, Q4',
                'Goals on pace vs. blocked at each quarterly review',
                'December annual review completion rate',
                'Session lead time for rescheduled sessions',
                'Commitment-to-completion rate across the year',
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
        title="Sessions standing. Commitments tracked."
        subtitle="Monthly standing sessions, 48-hour post-session actions, introduction pipeline, and annual goal tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for founders', href: '/for/founders' }}
      />
    </>
  )
}
