import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team Offsite Calendar — how to plan and structure a team offsite that actually changes how the team works',
  description:
    'A team offsite without a calendar structure produces two days of good conversations that do not change anything on Monday morning. This guide covers how to set the offsite agenda before booking the venue, the right ratio of strategic work to relationship-building, how to capture decisions in real time, and how to run the post-offsite accountability calendar so the momentum from the offsite survives the first week back.',
  alternates: { canonical: '/team-offsite-calendar' },
  openGraph: {
    title: 'Team Offsite Calendar',
    description: 'Plan and structure a team offsite that actually changes how the team works.',
    url: '/team-offsite-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Set the agenda before booking the venue — the venue should serve the agenda',
    desc: 'Booking a venue and then figuring out what to do there produces an offsite shaped by the space rather than the team\'s needs. The agenda — specifically: what decisions must come out of this offsite, what strategic questions need 4+ hours of uninterrupted group thinking, what relationship dynamics need unstructured time — determines the format, duration, and venue requirements. A strategy offsite with three major decisions needs a different space than a team-building offsite focused on relationship depth. Agenda first, venue second.',
  },
  {
    icon: Clock,
    title: 'The 60/40 ratio: 60% structured work, 40% unstructured time',
    desc: 'Offsites filled with back-to-back sessions produce exhaustion and no relationship-building. Offsites with too much unstructured time produce anxiety and a sense that nothing got done. The 60/40 ratio — 60% of waking hours as structured work (decision-making, strategy sessions, working groups), 40% as unstructured time (meals, free time, casual conversation) — has become the working standard for effective remote and hybrid team offsites. The 40% is where the informal relationship-building happens that is the actual long-term value of an in-person offsite.',
  },
  {
    icon: BarChart3,
    title: 'Capture decisions in real time on a shared document — not in retrospective notes',
    desc: 'Decisions discussed at an offsite but not captured in writing before everyone leaves are typically re-discussed (partially) in the first team meeting back. The decision was "made" but the specifics were not recorded: owner, deadline, success criteria, and implications. One person in every session is designated as the decision logger. The decision log has four columns: decision, owner, deadline, and what changes on Monday because of this decision. The decision log is shared with the full team before the offsite ends.',
  },
  {
    icon: Users,
    title: 'The post-offsite accountability week is part of the offsite — not an afterthought',
    desc: 'The most common reason offsite decisions do not survive the first week back: no one specifically owns the first action and no deadline was set in the room. The post-offsite accountability structure is built at the offsite, not after it: each decision from the decision log gets a 1-week, 1-month, and 3-month checkpoint on the calendar before anyone leaves. The 1-week checkpoint is the most important — it is the moment when offsite momentum either converts to behavior change or dissipates into the operational backlog.',
  },
]

const CALENDAR_RHYTHM = [
  { time: '8 weeks out', action: 'Set the offsite agenda before anything else. What decisions must come out of this offsite? (list them explicitly — if you cannot list them, the offsite is not ready to be planned). What strategic questions need group time? What relationship dynamics need unstructured time? Agenda sets venue requirements, duration, and attendee list. Book venue after agenda is confirmed. Place pre-offsite preparation assignments on the calendar: reading, pre-work documents, and decision proposals distributed to attendees 2 weeks before offsite.' },
  { time: '2 weeks out', action: 'Pre-work distribution: every structured session has pre-reading or a decision proposal distributed 2 weeks before the offsite. No session that requires a decision begins with a 30-minute briefing on the decision context — that briefing should have been the pre-work. Teams that arrive at an offsite without pre-work spend the first half of every session getting everyone to the same context level before the actual discussion can begin. Pre-work is a non-negotiable logistics item that is on the calendar 2 weeks before the offsite date.' },
  { time: 'Day 1', action: 'Start with a framing session: what does success for this offsite look like? State the specific decisions that need to be made by end of day 2. This creates a throughline for the two days and gives the group a criterion for evaluating whether the offsite achieved its purpose. Structured sessions in the morning when cognitive energy is highest. Relationship-building activities in the afternoon. Evening: unstructured social time — not a structured dinner with an agenda.' },
  { time: 'Day 2', action: 'Decision sessions in the morning. Decision log review at midday — which decisions have been logged with owners and deadlines, which are still open. Close decisions before leaving. Post-offsite accountability session at end of day 2: for each decision in the log, place a 1-week checkpoint on the calendar before anyone leaves. The 1-week checkpoint is the first moment the offsite decision is tested against the operational reality of the following week.' },
  { time: '1 week post', action: '1-week accountability checkpoint: 30 minutes, team call. One question per decision: what happened in the first week? Not a status update — a specific answer to whether the decision resulted in a change in behavior. Any decision that produced no change in the first week gets explicit escalation: is this decision still valid, or did the context change? Decisions that are valid but not acted on need a revised owner or deadline. Decisions that are no longer valid are formally closed.' },
  { time: '1 month post', action: '1-month accountability review: 60 minutes. For each offsite decision: what changed since the offsite? What is now different about how the team operates? Any decision that has not produced a visible change by 1 month either failed at execution (accountability issue) or failed at decision quality (the decision was wrong). Both diagnoses inform the next offsite agenda.' },
  { time: 'Pre-next offsite', action: 'Two weeks before the next offsite: review the decision log from the previous offsite. How many decisions are fully implemented? How many are partially implemented? How many produced no change? The answer shapes the next offsite agenda: if implementation rate is low, the next offsite needs a session on decision-making and accountability structure before it addresses new strategic questions. If implementation rate is high, the next offsite can go deeper on strategy.' },
]

export default function TeamOffsiteCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Team Offsite Calendar"
        title={
          <>
            Agenda before venue. Decisions captured in real time.
            <br />
            <em className="not-italic text-gold">1-week accountability checkpoint before anyone leaves.</em>
          </>
        }
        lede="A team offsite without a calendar structure produces two days of good conversations that do not change anything on Monday morning. The offsite calendar starts with the agenda 8 weeks out, pre-work distributed 2 weeks before, structured work in the morning and relationship-building in the afternoon, a decision log maintained in real time, and the 1-week accountability checkpoint placed on the calendar before anyone leaves the venue. The offsite is not done until the 1-month review runs. Momenties builds the full offsite calendar structure."
        crumbs={[{ label: 'Team Offsite Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/conference-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Conference planning
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Team offsite principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a team offsite that produces lasting behavior change instead of temporary enthusiasm.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Team offsite calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From agenda-setting 8 weeks out through the 1-month post-offsite review that determines the next offsite agenda.</h2>
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
                &ldquo;We had done three annual team offsites that all felt great in the room and changed almost nothing by the following month. The diagnosis was obvious in retrospect: we had no decision log, no ownership, and no post-offsite accountability structure. The conversations were good but they were not decisions — they were discussions that we mistook for decisions. The fourth offsite we placed a decision log on the shared screen throughout every session, had someone capturing decisions with owners and deadlines in real time, and placed the 1-week checkpoint on everyone&apos;s calendar before we left the venue. Of the eight decisions from that offsite, six were visibly implemented by the 1-month review. None of the previous three offsites had produced that kind of follow-through.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ben K.</div>
                  <div className="text-xs text-muted-foreground">Engineering director, 20-person distributed team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the team offsite calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every planning and accountability event in the full offsite calendar structure.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                '8 weeks out — agenda set with specific required decisions listed before venue booked',
                '2 weeks out — pre-work distributed to all attendees',
                'Day 1 — framing session states required decisions for 2-day period',
                'Day 2 — decision log review at midday; all decisions have owners and deadlines',
                'End of day 2 — 1-week accountability checkpoint placed on all calendars before leaving',
                '1 week post-offsite — 30-min check: what changed in the first week?',
                '1 month post-offsite — 60-min review: which decisions are implemented?',
                'Pre-next offsite — previous decision log reviewed as agenda-setting input',
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
        title="Team offsites that change how the team works — not just how it feels."
        subtitle="Agenda before venue, 60/40 structured-to-unstructured ratio, real-time decision log, and 1-week accountability checkpoint placed before anyone leaves. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Conference planning', href: '/conference-planning-calendar' }}
      />
    </>
  )
}
