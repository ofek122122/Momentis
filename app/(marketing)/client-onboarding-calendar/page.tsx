import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Onboarding Calendar — How to schedule client onboarding so clients activate in 30 days, not 90',
  description:
    'A client onboarding calendar places the kickoff call within 5 business days of contract signature, sequences milestone check-ins at day 7, 14, 30, and 60, and builds the account health review cadence before the first renewal window. Most client churn is decided in the first 90 days. A client onboarding calendar prevents early churn by front-loading value delivery.',
  alternates: { canonical: '/client-onboarding-calendar' },
  openGraph: {
    title: 'Client Onboarding Calendar — Momenties',
    description: 'Schedule client onboarding so clients activate in 30 days, not 90.',
    url: '/client-onboarding-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Kickoff call placed within 5 business days of contract signature',
    desc: '"Kickoff call — within 5 business days of contract signature." Kickoff call placed as a deadline, not a scheduling convenience. Clients who wait 2-3 weeks for a kickoff call start the relationship in a wait state — the enthusiasm from the sales process has cooled and the internal champion has moved on to other priorities. 5-day kickoff window placed as a constraint: kickoff scheduled before contract is fully executed, not after.',
  },
  {
    icon: Clock,
    title: 'Day 7, 14, 30, and 60 milestone check-ins placed at contract execution',
    desc: '"Day 7: initial setup complete check." "Day 14: first use case live." "Day 30: value delivered check-in." "Day 60: expansion readiness review." Milestone check-ins placed at contract execution — not scheduled when milestones approach. Clients with milestone calendar events have defined success checkpoints. Clients without them drift through onboarding without anchors. The first 30-day milestone is the highest-leverage intervention point for churn prevention.',
  },
  {
    icon: BarChart3,
    title: 'Account health review placed at 90 days before first renewal',
    desc: '"Account health review — 90 days before renewal." Account health review placed 90 days before the first renewal window — not 30 days before. 90-day review: product adoption depth, use case expansion, stakeholder map, and renewal risk assessment. 90-day window: enough runway to address adoption gaps, add users, or expand use cases before renewal pressure creates a binary stay/leave decision.',
  },
  {
    icon: TrendingUp,
    title: 'Executive sponsor introduction placed within 30 days of contract signature',
    desc: '"Executive sponsor introduction — within 30 days of contract." Executive sponsor introduction placed as a calendar event — not as a nice-to-have. Executive sponsor introduction within 30 days of contract signature creates a relationship layer above the day-to-day contact. When the day-to-day contact changes — which happens in the first year at most companies — executive sponsor relationship is the continuity that preserves the account.',
  },
]

const ONBOARD_STEPS = [
  {
    step: 'Schedule the kickoff call before the contract is fully executed',
    detail: '"Kickoff call — within 5 business days of signature." Kickoff scheduling started during contract review — not after signature. Calendar invite sent with contract. Kickoff agenda placed in the invite: success metrics, technical setup timeline, stakeholder introductions, and day 30/60/90 milestones. Clients who receive a kickoff calendar invite with the contract experience a different onboarding than clients who wait for the CSM to schedule.',
  },
  {
    step: 'Place the day 7, 14, 30, and 60 milestone check-in sequence at kickoff',
    detail: '"Day 7: initial configuration complete." "Day 14: first use case live and tested." "Day 30: value delivery confirmed, expansion use cases identified." "Day 60: adoption depth review, stakeholder expansion." Milestone sequence placed during kickoff call — agreed on live, with calendar invites sent immediately. Milestones agreed on but not calendared are intentions. Milestones on the client\'s calendar are commitments.',
  },
  {
    step: 'Place the executive sponsor introduction within 30 days',
    detail: '"Executive sponsor introduction — day 14-30." Executive sponsor introduction placed within the first 30 days — not after the account is established. Introduction: executive to executive, positioning the partnership at a level above the day-to-day contact. Executive sponsor introduction placed in the calendar at kickoff — not scheduled when the day-to-day contact leaves. By the time the contact leaves, the introduction window has passed.',
  },
  {
    step: 'Schedule monthly account health check-ins as standing events',
    detail: '"Monthly account health check-in — standing, 30 minutes, last friday of each month." Standing monthly check-in placed at onboarding start — not scheduled when health issues surface. Agenda: product usage since last call, active use cases, roadblocks, and next 30-day focus. CSMs who schedule check-ins reactively have fewer touchpoints than their quota and spend more time in reactive conversations.',
  },
  {
    step: 'Place the 90-day account health review before the first renewal window',
    detail: '"Account health review — 90 days before renewal date." Account health review placed at contract execution — renewal date known, 90-day window calculable. Review: product adoption depth, use case expansion, stakeholder map, renewal risk flags, expansion opportunity. 90-day pre-renewal review allows time to address risk factors before they become objections. 30-day pre-renewal review documents the outcome.',
  },
  {
    step: 'Build the post-onboarding handoff sequence for long-term management',
    detail: '"Onboarding complete — day 60 transition review." "Day 61: account transitioned to long-term CSM ownership." "Day 75: 2-week check-in from new owner." Onboarding-to-ongoing handoff placed as a structured calendar sequence — not executed when someone thinks to schedule it. Clients who experience a structured handoff with a named ongoing owner feel a continuation. Clients who experience silence after onboarding completion feel an ending.',
  },
]

const ONBOARD_FAILURES = [
  { failure: 'Kickoff call scheduled 2-3 weeks after contract signature', consequence: 'Clients waiting 2-3 weeks for a kickoff call experience the highest-risk onboarding window — after the enthusiasm of purchase but before any value has been delivered. The internal champion\'s attention has moved to other priorities. Their stakeholders wonder if they made the right decision. 5-day kickoff window is a constraint that prevents the relationship from cooling before it starts.' },
  { failure: 'Milestone check-ins scheduled reactively when issues surface', consequence: 'Milestone check-ins scheduled reactively — when the CSM notices low usage or the client raises concerns — occur after the problem has already developed. Day 7, 14, and 30 milestones placed at contract execution convert reactive check-ins into proactive ones. The day 30 check-in that finds low adoption has 60 days before renewal to address it. The same discovery at 90 days before renewal has 0 days.' },
  { failure: 'Account health review placed 30 days before renewal rather than 90', consequence: 'Account health reviews placed 30 days before renewal identify risks when there is minimal runway to address them. A client with low adoption identified at T-30 can receive documentation and training — but cannot experience value before renewal. The same client identified at T-90 can receive an expansion use case, add new users, and experience new value. T-90 review produces a different renewal conversation.' },
  { failure: 'Executive sponsor introduction deferred until the account is established', consequence: 'Executive sponsor introductions deferred until the account is "stable" happen after the day-to-day contact\'s opinion of the product is already formed — and after the introduction window when a partnership-level relationship can be built. Executive sponsor introduction within 30 days of signature creates a parallel relationship that exists independent of the day-to-day contact. Deferred until stable usually means deferred until after the first renewal decision.' },
]

export default function ClientOnboardingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Onboarding Calendar"
        title={
          <>
            Kickoff in 5 days. Activation at day 30.
            <br />
            <em className="not-italic text-gold">Renewal risk visible at 90 days, not 30.</em>
          </>
        }
        lede="Most client churn is decided in the first 90 days — but only companies that measure activation in the first 30 days can prevent it. A client onboarding calendar places the kickoff call within 5 business days of contract signature, sequences milestone check-ins at days 7, 14, 30, and 60, places the executive sponsor introduction within 30 days, and builds the 90-day pre-renewal health review at contract execution — so churn is a pattern to prevent, not an outcome to explain."
        crumbs={[{ label: 'Client Onboarding Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/consultants"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for consultants
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents first-year client churn.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a client onboarding calendar where the first 90 days produce renewal confidence, not churn risk.</h2>
          </Reveal>
          <div className="space-y-3">
            {ONBOARD_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four onboarding calendar patterns that produce first-year churn.</h2>
          </Reveal>
          <div className="space-y-3">
            {ONBOARD_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Onboarding analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for client onboarding discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Days from contract to kickoff call',
                'Day 30 activation milestone completion rate',
                'Day 60 value delivery check-in completion rate',
                'Executive sponsor introduction completion date',
                '90-day pre-renewal health review completion',
                'Monthly check-in standing event completion rate',
                'Onboarding-to-ongoing handoff sequence completion',
                'First-year renewal rate by onboarding calendar adherence',
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
        title="Kickoff in 5 days. Activation at day 30."
        subtitle="5-day kickoff constraint, day 7/14/30/60 milestones, 90-day renewal health review, and monthly standing check-ins. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for consultants', href: '/for/consultants' }}
      />
    </>
  )
}
