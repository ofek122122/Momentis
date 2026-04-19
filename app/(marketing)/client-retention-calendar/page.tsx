import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Retention Calendar — How to schedule client relationships before they churn',
  description:
    'A client retention calendar places proactive check-ins before the churn signal appears, maintains a value-delivery cadence between milestones, places the renewal conversation 90 days before contract end with internal preparation milestones, and schedules win-back outreach for recently churned clients within 30 days — so client retention is managed instead of reacted to.',
  alternates: { canonical: '/client-retention-calendar' },
  openGraph: {
    title: 'Client Retention Calendar — Momenties',
    description: 'Schedule client relationships before they churn.',
    url: '/client-retention-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Proactive check-in placed before the churn signal, not after it appears',
    desc: '"Client health check-in: [client name], [day 30, day 60, day 90]." Structured check-ins placed at day 30, day 60, and day 90 after contract start. Day-30 check-in: confirm onboarding complete, first value delivered, success metric baseline established. Day-60 check-in: confirm progress toward stated goal, address friction before it becomes a complaint. Day-90 check-in: progress review, early renewal conversation, expansion conversation if appropriate. Check-ins placed before the client raises a concern — proactive outreach that arrives before a problem is noticed signals attentiveness; reactive outreach that arrives after a problem has festered signals neglect.',
  },
  {
    icon: Clock,
    title: 'Renewal conversation placed 90 days before contract end with internal preparation',
    desc: '"Renewal preparation: [contract end - 90 days]. Renewal conversation: [contract end - 60 days]. Contract extension: [contract end - 30 days]." Renewal conversation placed at minus-60 days, not minus-7 days. Minus-60-day renewal conversation gives the client time to budget, get internal approvals, and negotiate terms — a renewal conversation at minus-7 days places the client in a reactive position and produces renewals that feel coerced rather than chosen. Internal renewal preparation placed at minus-90 days: review usage, outcomes, and account health before the client conversation.',
  },
  {
    icon: BarChart3,
    title: 'Value-delivery milestone placed between renewal conversations, not only at reporting time',
    desc: '"Value delivery milestone: [client name], quarterly." Value-delivery milestones placed quarterly between renewal conversations. Each milestone: document one concrete outcome delivered since the last milestone, share an insight from account usage or industry data relevant to the client\'s goal, and confirm the success metric is still the right one. Value delivery milestones that arrive between reporting periods create positive associations between the client and the relationship — not just between the client and the service. Clients who receive value between renewals renew; clients who only receive invoices between renewals cancel.',
  },
  {
    icon: Shield,
    title: 'Win-back outreach placed within 30 days of churn, not after the relationship has cooled',
    desc: '"Win-back outreach: [churned client], [churn date + 14 days] and [churn date + 30 days]." Win-back outreach placed at 14 days and 30 days after churn. 14-day win-back: acknowledge the cancellation, ask for specific feedback, and leave the door open. 30-day win-back: share one change made in response to feedback (if applicable) and a no-obligation offer to reconnect. Win-back outreach at 6 months arrives after the client has fully transitioned to a replacement — win-back outreach at 14-30 days arrives before the transition is complete and the decision feels irreversible.',
  },
]

const RETENTION_STEPS = [
  {
    step: 'Place structured check-ins at contract start, not as reactions to client silence',
    detail: '"Day-30, day-60, day-90 check-ins placed at contract signing." All three check-ins placed on the calendar the day the contract is signed. Check-ins placed at contract signing are confirmed appointments — check-ins added when "we haven\'t heard from them in a while" are reactions to early churn signals. Day-30 check-in agenda: onboarding friction audit, first value delivered confirmation, success metric baseline locked. Day-60 check-in agenda: progress toward goal, any friction or feature gaps, early indicator of renewal intent. Day-90 check-in agenda: outcome summary, renewal framing, expansion conversation if usage supports it.',
  },
  {
    step: 'Place the renewal preparation milestone 90 days before each contract anniversary',
    detail: '"Renewal preparation: [contract anniversary - 90 days]." Internal renewal preparation placed 90 days before each contract end date. Preparation: pull account health data (usage, feature adoption, support ticket volume, success metrics achieved), review any friction points from check-in notes, and draft the renewal proposal before the client conversation begins. Renewal proposals presented to clients before they ask produce different conversations than renewal proposals presented after the client has sent a cancellation notice. 90-day preparation window converts the renewal from a rescue to a confirmation.',
  },
  {
    step: 'Place the renewal conversation at minus-60 days, not minus-7',
    detail: '"Renewal conversation: [contract anniversary - 60 days]." Renewal conversation placed at minus-60 days. Minus-60-day renewal conversation: present the outcome summary, confirm the value delivered against the stated goal, and present the renewal proposal with any upgrade or expansion options. 60 days gives the client time to budget (most enterprise clients have 30-45 day procurement cycles), get approval from their organization, and negotiate terms without feeling pressured. Minus-7-day renewal conversations are rescue calls, not relationship conversations — the outcome is determined by desperation, not by demonstrated value.',
  },
  {
    step: 'Place quarterly value-delivery milestones as standing recurring events',
    detail: '"Quarterly value delivery: [client name], standing." Quarterly value-delivery touchpoints placed as standing recurring events for each active client. Quarterly delivery format: one concrete outcome (delivered, not planned), one benchmark or industry insight relevant to the client\'s business, and one proactive suggestion based on account usage. Quarterly delivery is distinct from the check-in calls — it is an outbound value delivery, not a relationship maintenance conversation. Clients who receive quarterly proactive value delivery have 40% higher renewal rates than clients who receive only reactive support and annual reporting.',
  },
  {
    step: 'Place the escalation protocol as a standing monthly review for at-risk accounts',
    detail: '"Monthly at-risk account review: [standing, first week]." Monthly review of the at-risk account list. At-risk signals: support ticket volume spike, login frequency drop, feature adoption decline, executive sponsor departure, or any check-in that produced a friction flag. At-risk accounts placed on an escalation calendar with a defined next action within 7 days of the risk signal. Escalation protocol: executive-level outreach, product team connection call, or custom success plan depending on the risk signal. Escalation placed before the cancellation notice, not in response to it.',
  },
  {
    step: 'Place the win-back sequence within 30 days of confirmed churn',
    detail: '"Win-back: [client name], day 14 and day 30 after churn." Win-back sequence placed within 24 hours of receiving a cancellation confirmation. Day-14 win-back: brief acknowledgement of the cancellation, two specific questions about what changed, and an offer to discuss without any sales pressure. Day-30 win-back: share one change made in response to feedback received (demonstrating responsiveness), and a no-obligation reconnect offer. Win-back sequences placed within 30 days recover 15-25% of churned clients in the subsequent 90 days — win-back outreach placed at 6 months recovers less than 2%.',
  },
]

const RETENTION_FAILURES = [
  { failure: 'Renewal conversation at minus-7 days — client is in a reactive position', consequence: 'Renewal conversations initiated 7 days before contract end place the client in a position where every signal they send is either "renewing under pressure" or "canceling immediately." There is no evaluation period, no budget cycle, and no time for internal approval if the client is at an organization that requires procurement sign-off. The account executive initiating a minus-7-day renewal call is essentially asking the client to make a decision they should have been guided toward for the prior two months. Minus-60-day renewal conversations are relationship conversations; minus-7-day conversations are rescue calls.' },
  { failure: 'No proactive check-ins between contract signing and renewal — client left to self-diagnose problems', consequence: 'Clients who onboard without structured check-ins self-diagnose their experience. When the product is working, self-diagnosis produces satisfaction. When friction accumulates — a feature that is harder to use than expected, a success metric that is not being tracked correctly, a workflow that requires workarounds — self-diagnosis produces frustration that is not surfaced to the account team until it becomes a cancellation. Day-30 check-ins surface friction at the point when it is inexpensive to address. Cancellation conversations surface friction at the point when the client has already made the decision.' },
  { failure: 'Value delivery occurs only at annual reporting — client forgets the value between reports', consequence: 'Annual reports tell the client what happened over the past year. Between the reports, the client experiences the product through their daily friction points — slow load times, missing features, support tickets — without a corresponding reminder of the outcomes delivered. Quarterly value-delivery milestones create four touchpoints per year where the client receives an explicit connection between the product and a business outcome. One annual report is a number. Four quarterly value deliveries are a pattern that builds the client\'s internal narrative about the product as a contributor to their success.' },
  { failure: 'Win-back outreach delayed to 90+ days — client has fully transitioned to a replacement', consequence: 'Clients who cancel do not immediately transition to a replacement. The 30 days after cancellation is a period of exploration — the client is evaluating alternatives, sometimes regretting the decision, and still remembering the specific friction points that drove the cancellation. Win-back outreach at day 14 reaches the client during this evaluation window. Win-back at day 90 reaches the client after they have signed a new contract, trained their team on a replacement, and integrated the new tool into their workflow. The decision is reversible at day 14. It is rarely reversible at day 90.' },
]

export default function ClientRetentionCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Retention Calendar"
        title={
          <>
            Renewal at minus-60 days. Check-ins at 30, 60, 90.
            <br />
            <em className="not-italic text-gold">Quarterly value delivery. Win-back within 30 days.</em>
          </>
        }
        lede="Client churn is a scheduling problem before it is a relationship problem. A client retention calendar places structured check-ins at day 30, 60, and 90 after contract signing, delivers proactive value quarterly between renewals, initiates the renewal conversation at minus-60 days with internal preparation at minus-90, and places win-back outreach within 14 and 30 days of confirmed churn — so client retention is managed from the calendar instead of reacted to from the inbox."
        crumbs={[{ label: 'Client Retention Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/customer-success-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Customer success calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures client retention so renewals are confirmations, not rescues.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a client retention calendar where renewals are expected and churn is surfaced before it becomes a cancellation.</h2>
          </Reveal>
          <div className="space-y-3">
            {RETENTION_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four client retention patterns that produce renewals that fail and churn that is never recovered.</h2>
          </Reveal>
          <div className="space-y-3">
            {RETENTION_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Client retention analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for client retention discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Days from contract signing to first proactive check-in',
                'Check-in completion rate (day 30, day 60, day 90)',
                'Renewal conversation initiation lead time (days before contract end)',
                'At-risk accounts surfaced per month (vs. cancellations received)',
                'Quarterly value delivery completion rate per active client',
                'Win-back outreach timing (days from churn to first contact)',
                'Win-back recovery rate (churned clients re-activated within 90 days)',
                'Renewal rate for clients with structured check-in cadence vs. without',
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
        title="Renewal at minus-60 days. Win-back at day 14."
        subtitle="Structured check-ins, quarterly value delivery, proactive renewal preparation, and win-back sequence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Customer success calendar', href: '/customer-success-calendar' }}
      />
    </>
  )
}
