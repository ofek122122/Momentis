import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Success Calendar — How to structure CS touchpoints so churn is detected before it becomes a decision',
  description:
    'A customer success calendar places the 30-day onboarding milestone before the product fatigue window, maintains a quarterly business review cadence as a standing event, places the renewal conversation 90 days before the contract date, and schedules health score reviews weekly rather than reactively — so customer success prevents churn instead of responding to it.',
  alternates: { canonical: '/customer-success-calendar' },
  openGraph: {
    title: 'Customer Success Calendar — Momenties',
    description: 'Structure CS touchpoints so churn is detected before it becomes a decision.',
    url: '/customer-success-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: '30-day onboarding milestone placed before the product fatigue window opens',
    desc: '"30-day onboarding milestone: [contract start + 30 days]." Onboarding milestone placed at contract signing — not at day 20 when fatigue is already visible. 30-day milestone agenda: is the customer using the product for the intended workflow, has the initial use case been validated, and what is the first measurable outcome? Customers who reach a validated use case by day 30 have 3x the retention rate of customers who are still "getting set up" at day 30. The milestone creates the urgency to activate before the fatigue window.',
  },
  {
    icon: Clock,
    title: 'Quarterly business reviews placed as standing recurring events at contract signing',
    desc: '"QBR: standing, [specific date each quarter]." All 4 quarterly business reviews placed at contract signing with specific dates. QBR placed as a standing event means the review happens regardless of the quarter\'s firefighting. QBR scheduled "sometime next quarter" happens in month 3, when it is either canceled for a product issue or squeezed into a 30-minute call between other commitments. QBR placed as a standing event at a specific date becomes part of the customer relationship rhythm — not a reactive scheduling exercise.',
  },
  {
    icon: BarChart3,
    title: 'Renewal conversation placed 90 days before the contract date, not at it',
    desc: '"Renewal conversation: [contract anniversary - 90 days]." Renewal conversation placed 90 days before the contract anniversary. 90 days gives time to address any open support issues before the renewal decision, present a usage and ROI summary, discuss any contract structure changes, and process the renewal paperwork before the contract lapses. Renewal conversations started at the contract anniversary happen under time pressure — the customer has already made their renewal decision by then, it just hasn\'t been communicated.',
  },
  {
    icon: Shield,
    title: 'Weekly health score review placed as a standing event, not a reactive trigger',
    desc: '"Weekly CS health review: standing, Monday 9 AM." Weekly health score review placed as a standing event — not triggered when a health score drops. Standing weekly review surfaces declining engagement trends before the score crosses a threshold. A customer whose health score declined 3 points for 3 consecutive weeks is at risk — visible in a standing weekly review, invisible in a reactive alert. Reactive alerts fire when the decline is already significant. Standing reviews detect the trend before the alert fires.',
  },
]

const CS_STEPS = [
  {
    step: 'Place the 30-day, 60-day, and 90-day onboarding milestones at contract signing',
    detail: '"Day 30: first value milestone. Day 60: full workflow adoption review. Day 90: business outcome validated." Three onboarding milestones placed at contract signing. Day 30: is the customer using the product for the primary intended workflow? Day 60: is the customer using all of the purchased features, or are there unused capabilities that reduce perceived value? Day 90: has the customer identified and documented a measurable business outcome from the product? 90-day business outcome validation is the difference between a customer who feels good about the purchase and a customer who can articulate why the purchase was worth it at renewal.',
  },
  {
    step: 'Place quarterly business reviews with agendas defined in advance',
    detail: '"QBR agenda: usage review, business outcome summary, upcoming roadmap preview, and next-quarter success goals." QBR agenda defined and shared with the customer 2 weeks before the review date. Agenda shared 2 weeks in advance gives the customer time to prepare questions, pull internal data, and involve relevant stakeholders. QBR without a pre-shared agenda is a conversation. QBR with a pre-shared agenda is a business review. The distinction determines whether the executive sponsor attends. Executive sponsors attend business reviews with pre-shared agendas; they skip conversations.',
  },
  {
    step: 'Place the renewal conversation 90 days before the contract date with preparation milestones',
    detail: '"Renewal prep: [anniversary - 90 days]. Usage summary draft: [anniversary - 75 days]. Commercial discussion: [anniversary - 60 days]. Renewal signed: [anniversary - 30 days]." Renewal conversation placed 90 days before the anniversary with 4 internal milestones. Usage summary draft at minus-75 days gives the CSM time to pull and analyze the customer\'s actual usage data before the commercial conversation. Commercial discussion at minus-60 days begins the renewal negotiation with enough time to resolve pricing disagreements before the clock creates pressure. Renewal signed at minus-30 days leaves a buffer for legal review and billing processing.',
  },
  {
    step: 'Place the expansion conversation after the first business outcome is documented',
    detail: '"Expansion conversation: [day 90 outcome validation + 2 weeks]." Expansion conversation placed 2 weeks after the 90-day business outcome is validated and documented. Expansion conversations held before a business outcome is documented are premature — the customer cannot make the case internally for additional spend if they cannot articulate the ROI of the current spend. Expansion conversations held 2 weeks after a documented outcome are timed when the customer\'s perception of value is at its highest and the internal champion has a business case to present to the approver.',
  },
  {
    step: 'Place the at-risk customer intervention 2 weeks before the health score threshold',
    detail: '"At-risk review: weekly Monday, for any customer declining 2+ weeks consecutively." Weekly standing review surfaces customers declining before the threshold. At-risk customers identified in the standing weekly review receive a proactive outreach: "I noticed your team hasn\'t logged in this week — is there anything I can help with?" At-risk customers identified only when the health score crosses a threshold receive a reactive save conversation after the disengagement is significant. Proactive outreach at 2-week decline has a 60% recovery rate. Reactive save at threshold has a 20% recovery rate.',
  },
  {
    step: 'Place the annual success plan review as a separate event from the QBR',
    detail: '"Annual success plan review: [contract anniversary - 120 days]." Annual success plan review placed 120 days before the contract anniversary — separate from the quarterly business review. Annual review agenda: did the customer achieve the goals they set at the beginning of the year, what were the obstacles, and what are the goals for the next year? Annual review at minus-120 days gives time to document outcome progress before the renewal conversation at minus-90 days. Annual review that shows the customer achieved their success plan goals produces a renewal conversation that starts from success. Annual review that shows gaps produces a renewal conversation that starts from a documented recovery plan.',
  },
]

const CS_FAILURES = [
  { failure: 'Onboarding milestones tracked in a spreadsheet — discovered late when the customer is already at risk', consequence: 'Onboarding milestones tracked in a spreadsheet are discovered when the spreadsheet is reviewed, which happens when something else prompts a check. A customer who reaches day 45 without a 30-day milestone review has already entered the product fatigue window. The 30-day milestone is not a check-in — it is the deadline for validating that the customer\'s initial use case is working. Milestones that miss their date produce customers who are using the product incorrectly for 30 days before the error is corrected. Calendar placement with a specific date converts the milestone from a review that happens when remembered to a review that happens on schedule.' },
  { failure: 'QBR scheduled "sometime next quarter" — happens in month 3, if at all', consequence: 'QBRs scheduled informally after the close of each quarter happen in month 3 of the next quarter when both parties have had time to deprioritize scheduling. Month 3 QBR means the executive sponsor is not available (they\'ve moved on from the topic), the usage data is 5 months old (the Q1 data reviewed in June), and the renewal is 3 months away rather than 9 months away. QBR placed as a standing event at a specific date at contract signing converts the QBR from a scheduling negotiation into a standing business practice that both parties plan around.' },
  { failure: 'Renewal conversation started at the contract date — customer decision already made', consequence: 'Renewal conversations started at the contract anniversary happen after the customer has already made their renewal decision. The customer who decided not to renew made that decision 60-90 days before the anniversary based on their experience in month 10. The renewal conversation at the anniversary is the notification, not the decision point. Renewal conversations placed 90 days before the anniversary happen when the customer is still evaluating their options, their internal champion still has time to make the business case, and contract structure changes can be negotiated without a lapsing contract creating pressure.' },
  { failure: 'Health score monitored only when an alert fires — disengagement already significant at threshold', consequence: 'Health score alerts fire when a threshold is crossed — typically after 2-3 weeks of declining engagement. At threshold, the customer has already disengaged from the product, the primary user has developed alternative workflows, and the internal champion may have begun evaluating competitors. Weekly standing health review surfaces the same customer after 1 week of declining engagement — when the CSM can address a specific friction point before the customer develops compensating behaviors. The difference between a 1-week intervention and a threshold-triggered intervention is the difference between addressing a workflow friction and addressing a customer who has already decided the product doesn\'t work.' },
]

export default function CustomerSuccessCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Success Calendar"
        title={
          <>
            Onboarding milestone by day 30. QBR standing every quarter.
            <br />
            <em className="not-italic text-gold">Renewal conversation at 90 days. Churn detected weekly.</em>
          </>
        }
        lede="Most churn is not a surprise — it is a pattern that was visible weeks before the cancellation if the CSM was looking at the right moments. A customer success calendar places the 30-day onboarding milestone before the product fatigue window, sets quarterly business reviews as standing events at contract signing, puts the renewal conversation 90 days before the contract date, and reviews health scores weekly rather than reactively — so customer success prevents churn instead of responding to it."
        crumbs={[{ label: 'Customer Success Calendar' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures customer success touchpoints so at-risk signals surface before churn becomes a decision.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a customer success calendar where every renewal is anticipated and every risk is detected early.</h2>
          </Reveal>
          <div className="space-y-3">
            {CS_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CS patterns that produce churn that felt like a surprise but wasn&apos;t.</h2>
          </Reveal>
          <div className="space-y-3">
            {CS_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CS analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for customer success discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Day 30 milestone completion rate vs. target across all accounts',
                'QBR completion rate vs. standing schedule (by quarter)',
                'Renewal conversation lead time (days before contract anniversary)',
                'Renewal signed date vs. contract anniversary (buffer remaining)',
                'Expansion conversation timing (days after 90-day outcome validation)',
                'Weekly health review completion rate and at-risk customers identified',
                'At-risk intervention lead time (days of decline before outreach)',
                'Annual success plan review completion at minus-120 days',
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
        title="Onboarding milestone by day 30. QBR standing every quarter."
        subtitle="Onboarding milestone calendar, standing QBR placement, 90-day renewal window, and weekly health score discipline. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for founders', href: '/for/founders' }}
      />
    </>
  )
}
