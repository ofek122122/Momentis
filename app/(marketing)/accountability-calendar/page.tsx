import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accountability Calendar — How to build an accountability system that actually sticks',
  description:
    'An accountability calendar works by making commitments visible, check-ins scheduled in advance, and review dates fixed before they become optional. Most accountability systems fail not because the goals were wrong but because the check-in was never placed on the calendar when the commitment was made.',
  alternates: { canonical: '/accountability-calendar' },
  openGraph: {
    title: 'Accountability Calendar — Momenties',
    description: 'Accountability check-ins scheduled when commitments are made, not remembered later.',
    url: '/accountability-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Check-in placed at commitment, not remembered later',
    desc: 'The accountability failure point is not the goal — it is the missing check-in. "I\'ll review progress next week" fails because "next week" is mental overhead competing with everything else. When a commitment is made: "Accountability check-in with [name] — thursday 7pm, 30 minutes." Placed on the calendar in the same moment the commitment happens. Nothing to remember.',
  },
  {
    icon: Clock,
    title: 'Check-in cadence matched to goal type',
    desc: '"Daily — habit formation (first 30 days)." "Weekly — project milestones, creative output." "Biweekly — exercise or health goals." "Monthly — financial goals, long-horizon projects." Cadence mismatch is the second most common failure. Daily check-ins on long-horizon goals create anxiety without insight. Monthly check-ins on habits allow drift that compounds silently.',
  },
  {
    icon: BarChart3,
    title: 'Commitment completion analytics',
    desc: 'Accountability partners who track completion rates over 30 and 90 days develop insight about goal architecture that anecdotal memory never provides. Which goal types generate the most check-in completions? Which produce consistent drift? Analytics shows completion rate by goal category — helping both the accountable party and the partner optimize for commitment reliability over time.',
  },
  {
    icon: Shield,
    title: 'Commitment review cycles placed proactively',
    desc: '"30-day commitment review — [name], 45 minutes." Placed when the goal is set. Not after 30 days when review has become awkward. The review is not optional — it is where course correction happens. If the goal is no longer appropriate, the review is where it is formally renegotiated, not where it quietly disappears.',
  },
]

const ACCOUNTABILITY_STEPS = [
  {
    step: 'State the commitment with a specific outcome and date',
    detail: 'Not "I\'ll work on the manuscript" but "I will complete the first draft of chapter 3 by friday at 5pm." Outcome-based commitments are checkable. Effort-based commitments are not — they allow drift without visible failure.',
  },
  {
    step: 'Place the check-in immediately',
    detail: '"Accountability check-in — [name], wednesday 8pm, 20 minutes." On the calendar the moment the commitment is spoken. Both parties add it. The check-in is not a suggestion — it is the mechanism that converts intention into accountability.',
  },
  {
    step: 'Set the review frequency to match goal complexity',
    detail: '"New habit — daily check-in, first 21 days, then weekly." "Creative project — weekly milestone review." "Annual revenue goal — monthly review with quarterly deep-dive." Front-load check-in frequency when commitments are fresh and habits are forming. Scale back as behavior stabilizes.',
  },
  {
    step: 'Place a midpoint reflection before the deadline',
    detail: '"Midpoint reflection — [goal name], monday 7pm." The midpoint is where blockers surface and scope adjustments happen. Without a midpoint reflection, the first signal of a problem is the missed deadline. The midpoint exists to prevent that.',
  },
  {
    step: 'Complete the commitment review on schedule',
    detail: '"30-day review — what worked, what didn\'t, what next?" The review is where the accountability system evolves. Goals that no longer serve are closed. Goals that need extension are renegotiated. Goals that were completed are acknowledged. Without this, accountability systems collapse into guilt and avoidance.',
  },
  {
    step: 'Calibrate and set the next commitment',
    detail: '"New commitment — [updated goal], check-in [date]." Each cycle the commitment becomes more precisely calibrated to what is actually achievable. Over time, completion rate improves not because effort increases but because commitments become more realistically scoped.',
  },
]

const ACCOUNTABILITY_FAILURES = [
  { failure: 'Accountability partner, no calendar anchor', consequence: 'Accountability conversations happen "when we talk anyway." The check-in drifts, then disappears. Without a recurring calendar anchor, the accountability relationship degrades into social support — valuable, but not accountability.' },
  { failure: 'Check-in placed too far out', consequence: 'A first check-in at 2 weeks gives 2 weeks of drift time before any correction. For new habits and short-deadline goals, a 2-week check-in arrives after the problem has already compounded.' },
  { failure: 'Vague commitment, exact check-in', consequence: 'Checking in on "working on fitness" cannot produce accountability because there is no standard to assess against. The commitment must be specific enough to be checkable. The check-in quality depends entirely on commitment specificity.' },
  { failure: 'No commitment review at cycle end', consequence: 'Accountability without review produces an accumulation of old commitments that were never formally closed, renewed, or released. This creates psychological weight that eventually causes people to avoid the accountability relationship entirely.' },
]

export default function AccountabilityCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Accountability Calendar"
        title={
          <>
            Commitments made. Check-ins scheduled.
            <br />
            <em className="not-italic text-gold">Drift caught before it compounds.</em>
          </>
        }
        lede="Most accountability systems fail not because the goals were wrong but because the check-in was never placed on the calendar when the commitment was made. An accountability calendar schedules every check-in, midpoint reflection, and commitment review at the moment of commitment — so accountability is enforced by the calendar, not by memory or willpower."
        crumbs={[{ label: 'Accountability Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/goal-setting-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Goal setting calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports consistent accountability.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build an accountability system that actually holds.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACCOUNTABILITY_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four accountability patterns that produce invisible drift.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACCOUNTABILITY_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Accountability analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for commitment follow-through.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Check-in completion rate by goal type',
                'Average days between commitment and first check-in',
                'Commitment completion rate at deadline',
                'Midpoint reflection completion rate',
                'Commitment cycle length vs. completion rate correlation',
                '30-day and 90-day accountability streaks',
                'Goal category performance patterns',
                'Commitment review cadence adherence',
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
        title="Commitments made. Check-ins scheduled."
        subtitle="Accountability check-in calendar, commitment tracking, and goal completion analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Goal setting calendar', href: '/goal-setting-calendar' }}
      />
    </>
  )
}
