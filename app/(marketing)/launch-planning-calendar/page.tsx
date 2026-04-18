import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Launch Planning Calendar — How to schedule a product launch so launch day is a milestone, not a scramble',
  description:
    'A launch planning calendar places go/no-go decision points 3 weeks before launch, sequences PR embargo lifts and customer communications independently, and builds the post-launch response cadence before launch day. Most launch failures are visible in the launch calendar 4 weeks before launch day — in the wrong sequence, missing owners, or conflicting embargoes.',
  alternates: { canonical: '/launch-planning-calendar' },
  openGraph: {
    title: 'Launch Planning Calendar — Momenties',
    description: 'Schedule a product launch so launch day is a milestone, not a scramble.',
    url: '/launch-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Go/no-go decision points placed 3 weeks and 1 week before launch',
    desc: '"Go/no-go — T-3 weeks: product readiness, legal clearance, support readiness." "Go/no-go — T-1 week: final decision, communication sequence locked." Two go/no-go checkpoints placed before launch. T-3 weeks: enough time to slip the launch date if major issues surface. T-1 week: final decision with all stakeholders aligned. Go/no-go placed before launch — not scheduled when someone asks. A go/no-go meeting discovered at T-3 days produces a scramble, not a decision.',
  },
  {
    icon: Clock,
    title: 'PR embargo sequence placed in the launch calendar before T-4 weeks',
    desc: '"T-4 weeks: press briefings under embargo." "T-1 week: review quotes and embargo confirmation." "Launch day, 6am: embargo lift, press release live." PR embargo sequence placed in the launch calendar when press briefings are scheduled — not managed via separate email chains. Embargo lift time placed in calendar with specific hour — an embargo lift at "launch day morning" is different from one at 6am ET with everyone synchronized.',
  },
  {
    icon: BarChart3,
    title: 'Post-launch response cadence placed before launch day',
    desc: '"Launch +2 hours: first metrics review." "Launch +24 hours: first day report." "Launch +72 hours: retention and activation check." "Launch +7 days: week 1 retrospective." Post-launch response cadence placed before launch day — not scheduled after launch day metrics arrive. Teams that place post-launch check-ins in advance respond faster to issues than teams that schedule check-ins when metrics surface problems.',
  },
  {
    icon: Shield,
    title: 'Customer communication sequence placed with owner, channel, and timing',
    desc: '"T-2 weeks: beta users notified." "T-1 week: waitlist notified." "Launch day: email announcement + social." "Launch +3 days: customer success outreach to enterprise accounts." Each customer communication in the launch sequence placed with specific owner, channel, timing, and draft-complete date. Communication sequence discovered unowned at T-1 week produces the kind of launch day that requires a post-mortem.',
  },
]

const LAUNCH_STEPS = [
  {
    step: 'Build the full launch calendar 8 weeks before launch day',
    detail: '"T-8 weeks: launch calendar built with all workstreams." Launch calendar placed 8 weeks before launch with: go/no-go checkpoints, press briefing dates, embargo sequence, customer communication milestones, internal readiness reviews, support training date, and post-launch response cadence. An 8-week launch calendar placed at T-8 weeks identifies workstream conflicts. The same planning done at T-3 weeks manages the conflicts with less runway.',
  },
  {
    step: 'Place two go/no-go decision checkpoints with specific criteria',
    detail: '"T-3 weeks go/no-go: product stability, legal, localization complete, support ready." "T-1 week go/no-go: final stakeholder alignment, PR synchronized, embargo confirmed." Each go/no-go placed with explicit criteria and decision owners — not just a meeting on the calendar. T-3 weeks go/no-go: if product fails, date slips to next viable window. T-1 week go/no-go: if minor issues remain, proceed with known risks documented.',
  },
  {
    step: 'Sequence the PR embargo lifecycle from briefing to lift',
    detail: '"T-4 weeks: press briefings under embargo." "T-2 weeks: embargo confirmation sent to all briefed reporters." "T-1 week: review final quotes and embargo list." "Launch day, 6am ET: embargo lift." Embargo lifecycle placed as a connected sequence — each event linked to the next. Embargo confusion produces competitive intelligence leaks and embargo breaks. Embargo sequence placed as a connected calendar chain, not a series of separate events managed in email.',
  },
  {
    step: 'Place customer communication sequence with owners and draft deadlines',
    detail: '"T-2 weeks: beta user notification draft complete." "T-10 days: beta notification sent." "T-1 week: waitlist notification draft complete." "T-3 days: waitlist notification sent." "Launch day: announcement email." Each customer communication placed with draft deadline, review owner, send owner, and send time. Draft deadlines placed before send deadlines — not the same day. Communication sequence without draft deadlines produces launch day drafting.',
  },
  {
    step: 'Place the support and sales enablement readiness checkpoints',
    detail: '"T-3 weeks: support knowledge base complete." "T-2 weeks: support training completed." "T-1 week: support readiness confirmed at go/no-go." "T-2 weeks: sales enablement materials complete." "T-1 week: sales briefing done." Support and sales readiness placed as checkpoints with owners — not assumed complete because launch is approaching. Support teams that discover knowledge gaps at T-2 days cannot serve launch day volume adequately.',
  },
  {
    step: 'Build the post-launch response cadence before launch day',
    detail: '"Launch +2 hours: first metrics review." "Launch +24 hours: day 1 report to leadership." "Launch +72 hours: activation and retention check." "Launch +7 days: week 1 retrospective." "Launch +30 days: full launch retrospective." Post-launch cadence placed before launch day — not scheduled when metrics arrive. Teams with pre-placed post-launch check-ins identify and respond to activation problems 12-24 hours faster than teams that schedule check-ins reactively.',
  },
]

const LAUNCH_FAILURES = [
  { failure: 'Launch calendar built at T-3 weeks instead of T-8 weeks', consequence: 'Launch calendars built at T-3 weeks discover workstream conflicts when there is no longer time to resolve them — the PR embargo is already placed, the press briefings are scheduled, and the go/no-go criteria haven\'t been written. T-8 week launch planning discovers the same conflicts with 5 weeks of resolution runway. The same problems exist; the difference is whether they can be resolved before launch day.' },
  { failure: 'Go/no-go meeting scheduled reactively rather than placed in advance', consequence: 'Go/no-go meetings that are scheduled when someone thinks to ask for one occur at different times for each workstream — product might be ready, legal might have concerns, and support might not be trained, but nobody has scheduled the conversation where all three surface simultaneously. Go/no-go placed 3 weeks before launch with explicit criteria produces a decision. Go/no-go scheduled T-2 days produces a launch day with known open risks and no documentation.' },
  { failure: 'Customer communication sequence without draft deadlines', consequence: 'Customer communication sequences that place send dates without draft deadlines produce launch week content drafting under launch week pressure. A beta user notification due at T-10 days needs a draft deadline at T-12 days and a review at T-11 days. Without draft deadlines, T-10 day send dates become T-10 day drafts, which become T-8 day sends, which miss the intended notification window before the launch itself.' },
  { failure: 'Post-launch cadence scheduled after launch metrics arrive', consequence: 'Post-launch check-ins scheduled when metrics surface problems occur 12-24 hours after the metrics warrant a response — the check-in is scheduled, attendees respond, and the meeting happens while the problem compounds. Post-launch cadence placed before launch day converts reactive firefighting into proactive monitoring: the 2-hour check-in, the 24-hour review, and the 72-hour activation check all happen whether or not metrics seem to warrant them.' },
]

export default function LaunchPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Launch Planning Calendar"
        title={
          <>
            Go/no-go placed. Embargo sequenced.
            <br />
            <em className="not-italic text-gold">Launch day is a milestone, not a scramble.</em>
          </>
        }
        lede="Most launch failures are visible in the launch calendar 4 weeks before launch day — in the wrong sequence, missing owners, or conflicting embargoes. A launch planning calendar places go/no-go checkpoints 3 weeks and 1 week before launch, sequences the PR embargo lifecycle as a connected chain, places customer communication with draft deadlines before send deadlines, and builds the post-launch response cadence before launch day — so every launch is managed, not survived."
        crumbs={[{ label: 'Launch Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/product-managers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for product managers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents launch day scrambles.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a launch planning calendar where launch day is a milestone, not a milestone with open risks.</h2>
          </Reveal>
          <div className="space-y-3">
            {LAUNCH_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four launch calendar patterns that produce launch day scrambles.</h2>
          </Reveal>
          <div className="space-y-3">
            {LAUNCH_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Launch analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for launch discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Launch calendar build date vs. launch date',
                'Go/no-go T-3 week decision completion',
                'Go/no-go T-1 week final decision completion',
                'Embargo lift time placed vs. actual lift',
                'Customer communication draft deadline adherence',
                'Support readiness confirmed before launch',
                'Post-launch cadence completion rate',
                'Days from launch to first retrospective',
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
        title="Go/no-go placed. Embargo sequenced."
        subtitle="8-week launch calendar, dual go/no-go checkpoints, PR embargo lifecycle, and post-launch response cadence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for product managers', href: '/for/product-managers' }}
      />
    </>
  )
}
