import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Annual Planning Calendar — how to structure the year so strategy decisions happen in November, not January when you are already behind',
  description:
    'An annual planning process that starts in January is a process where the year is already in motion before the strategy is set. This guide covers how to run the annual planning cycle in Q4 so strategy is locked before the new year begins, how to separate the operating plan from the budget to prevent finance timelines from driving strategy decisions, how to set annual targets that survive contact with Q1 without requiring a full replan, and how to structure the quarterly review cadence so the annual plan is a living document that updates without starting over.',
  alternates: { canonical: '/annual-planning-calendar' },
  openGraph: {
    title: 'Annual Planning Calendar',
    description: 'Structure the year so strategy decisions happen in November, not January when you are already behind.',
    url: '/annual-planning-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Strategy locked in November — operating plan and budget follow strategy, not the reverse',
    desc: 'An annual planning process that runs in parallel with budgeting produces a plan where finance constraints determine strategy rather than strategy determining resource allocation. The annual planning calendar separates strategy from budgeting: strategic priorities and annual targets are locked in November in a leadership session before finance builds the budget. The budget is built to fund the locked strategy — not the other way around. A strategy session that happens after the budget is set is a resource negotiation, not a strategy session. The November strategy lock includes: three to five strategic priorities for the year, success metrics and targets for each priority, and the resourcing model required to hit the targets.',
  },
  {
    icon: Clock,
    title: 'The October review: what worked, what did not, and what changes next year',
    desc: 'An annual planning process that starts with next year before completing this year produces a plan built on incomplete data and unexamined assumptions. The October full-year review — run before the November strategy session — answers four questions: which bets paid off and why (what to double down on), which bets failed and what was learned (what to stop or change), what the competitive and market environment changed in the past 12 months (what forces shape next year), and what the team is capable of that it was not capable of a year ago (what new options exist). The October review is a structured session with a fixed output: a written one-page summary of year-end findings that inputs directly to the November strategy session.',
  },
  {
    icon: BarChart3,
    title: 'Annual targets set with a Q1 stress test built in — not revised when Q1 misses',
    desc: 'Annual targets that are set optimistically and then revised after a Q1 miss train the organization that targets are negotiable. The annual planning calendar includes a Q1 stress test: before targets are finalized in November, leadership asks "what would have to be true in Q1 for us to miss this target by 20%?" and "if that happens, what is the response?" The stress test produces a contingency branch for each major annual target — not to plan for failure, but to ensure that a Q1 miss has a pre-agreed response rather than triggering a reactive replan. Annual targets that survive a Q1 miss without a full replan require that the stress test was built at planning time, not after the miss.',
  },
  {
    icon: Users,
    title: 'Quarterly review cadence converts the annual plan from a document into a decision system',
    desc: 'An annual plan that is reviewed once at year-end is a document. An annual plan reviewed quarterly with a fixed decision framework becomes a decision system. The quarterly review cadence built into the annual planning calendar: Q1 review (April) — first 90 days versus annual target, Q1 stress test contingency triggered or not, Q2 forecast update; Q2 review (July) — mid-year performance, H2 operating plan adjustments authorized; Q3 review (October) — full-year projection locked, Q4 operating decisions finalized, November strategy session preparation begins. Each quarterly review has a fixed output: a one-page update to the annual plan that is distributed to all stakeholders before the next planning cycle begins.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'September', action: 'Annual planning kickoff: planning calendar and session dates confirmed. October full-year review session scheduled (90 minutes, fixed agenda). November strategy session scheduled (3-4 hours, offsite). December operating plan and budget sessions scheduled. Pre-read for October review assigned: each function lead produces a one-page year-to-date performance summary with three key findings. Competitive and market intelligence brief assigned: what changed in the competitive landscape in the past 12 months?' },
  { time: 'October', action: 'Full-year review session (90 minutes): structured debrief of current year. Four fixed questions: (1) which bets paid off — what specific results exceeded expectations and why? (2) which bets failed — what did not work and what was learned? (3) what changed in the market and competitive environment that changes the opportunity or threat landscape? (4) what is the team capable of now that it was not capable of 12 months ago? Output: one-page written summary of year-end findings. This document is the primary input to the November strategy session. No next-year discussion in October — the full-year review is backward-looking only.' },
  { time: 'November', action: 'Strategy session (3-4 hours): forward-looking only. Three to five strategic priorities for next year selected using the October review findings as input. For each priority: success metric defined (what does winning look like?), annual target set with Q1 stress test (what would a 20% miss look like in Q1, and what is the pre-agreed response?), and resourcing model required to hit target (headcount, budget envelope, dependencies). Strategy session output: a one-page strategy brief with priorities, targets, and resourcing model. This document is locked before the budget process begins.' },
  { time: 'December', action: 'Operating plan and budget: budget is built to fund the November strategy brief, not to set strategy. Finance presents resource constraints; leadership uses the strategy brief to make resourcing tradeoffs between priorities rather than allowing budget constraints to reshape strategy. Operating plan produced: quarterly milestones for each strategic priority, ownership assigned, and dependencies between teams identified. December 15 target for operating plan lock — so the team enters January knowing what the year looks like, not discovering it in January planning sessions.' },
  { time: 'Q1–Q3 reviews', action: 'Quarterly reviews (April, July, October): 90-minute fixed agenda. Section 1 — performance versus annual targets (15 min). Section 2 — Q1 stress test triggered or not: if yes, pre-agreed response activates — no ad hoc replan (20 min). Section 3 — operating plan adjustments authorized for next quarter (30 min). Section 4 — next planning cycle preparation (for October: strategy session pre-read assigned) (15 min). Quarterly review output: one-page update distributed to stakeholders. Annual plan is updated — not replaced — at each quarterly review.' },
  { time: 'Year-end', action: 'Year-end debrief (separate from October review): 60-minute session focused on the planning process itself — not the year\'s results. Four questions: (1) did the November strategy session produce a plan the team executed against, or did the plan change materially in Q1? (2) were the Q1 stress tests accurate — did the contingency branches predict the actual misses? (3) did the quarterly review cadence produce timely decisions or did reviews become reporting sessions? (4) what changes to the planning process itself for next year? Output: planning process retrospective incorporated into the September kickoff for the next cycle.' },
  { time: 'Planning errors', action: 'Four planning errors the annual calendar prevents: (1) January planning — strategy set after the year has already started, with no Q4 review to inform it. (2) Budget-first planning — finance timeline drives strategy session timing, producing resource-constrained strategy rather than resource-funded strategy. (3) Annual targets revised at Q1 miss — no pre-agreed contingency branch means every miss triggers a reactive replan. (4) Annual plan as year-end document — reviewed once at year-end with no quarterly decision cadence, meaning the plan is abandoned after Q1 rather than updated.' },
]

export default function AnnualPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Annual Planning Calendar"
        title={
          <>
            Strategy locked in November. Budget follows strategy.
            <br />
            <em className="not-italic text-gold">Q1 stress test built in. Quarterly reviews update the plan — not replace it.</em>
          </>
        }
        lede="An annual planning process that starts in January is already behind. The annual planning calendar runs the strategy session in November — before the budget process begins — so resource allocation follows strategic priorities rather than finance timelines determining strategy. The October full-year review, November strategy lock, December operating plan, and Q1-Q3 quarterly review cadence convert the annual plan from a document into a decision system that updates without requiring a full replan. Momenties structures the full annual planning calendar so the strategy session drives the year."
        crumbs={[{ label: 'Annual Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/quarterly-business-review-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            QBR calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual planning calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for an annual planning calendar where strategy drives budget and targets survive contact with Q1.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual planning calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From the September kickoff through the year-end process retrospective that improves the next cycle.</h2>
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
                &ldquo;We used to run our annual planning in January. By the time the strategy was set, Q1 was already happening and we were making operating decisions without a plan to anchor them. We moved to a November strategy session and it changed the character of the entire year. October was the honest debrief — what actually worked, what we had been telling ourselves worked but had not — and November was the first time strategy felt like a real choice rather than a budget negotiation. The Q1 stress test changed how we set targets: instead of optimistic targets that got revised in April, we set targets we were willing to defend even if Q1 came in 20% below forecast. Two years in a row we hit targets without a replan. The quarterly review cadence is what makes the annual plan a living document — it updates instead of getting abandoned after Q1.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">David K.</div>
                  <div className="text-xs text-muted-foreground">COO, Series B SaaS company, 120-person team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the annual planning calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every planning session and decision checkpoint in a structured annual cycle that starts in Q4.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'September kickoff — planning calendar confirmed, October pre-read assigned',
                'October full-year review — four questions, one-page written output',
                'November strategy session — priorities, targets, and Q1 stress test locked',
                'December operating plan — budget built to fund strategy, locked December 15',
                'April Q1 review — stress test triggered or not, H1 forecast updated',
                'July Q2 review — mid-year performance, H2 operating plan adjustments',
                'October Q3 review — full-year projection locked, November prep begins',
                'Year-end planning retrospective — process improvement incorporated into next September kickoff',
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
        title="Strategy set in November. Budget follows. Targets survive Q1."
        subtitle="Annual planning calendar: October full-year review, November strategy lock with Q1 stress test, December operating plan, and quarterly review cadence that updates the plan without replacing it. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'QBR calendar', href: '/quarterly-business-review-calendar' }}
      />
    </>
  )
}
