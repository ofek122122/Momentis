import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investor Update Calendar — How to structure monthly investor updates that build trust and surface problems early',
  description:
    'An investor update calendar sends monthly investor updates within 10 days of month-end, structures each update around metrics first and narrative second, reserves board updates for material decisions rather than status reporting, and places the annual year-in-review update with 4-week lead time — so investors receive consistent information that builds trust and surfaces problems before they become emergencies.',
  alternates: { canonical: '/investor-update-calendar' },
  openGraph: {
    title: 'Investor Update Calendar — Momenties',
    description: 'Structure monthly investor updates that build trust and surface problems early.',
    url: '/investor-update-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Monthly investor update sent within 10 days of month-end, not when the founder has time',
    desc: '"Monthly investor update: [month] — due [month-end + 10 days]." Monthly investor update placed as a hard calendar deadline, not a variable task. 10-day post-month-end window gives time to compile accurate metrics but closes before the investor has concluded the update will be late. Founders who send updates "when they have time" send updates when things are going well and go silent when things are not — a pattern that signals to investors that updates are directionally correlated with company performance rather than operationally consistent. Consistent monthly updates sent on schedule — including months with difficult news — are the highest-trust investor communication pattern.',
  },
  {
    icon: Clock,
    title: 'Metrics first in every update — narrative follows numbers, not the reverse',
    desc: '"Update structure: [revenue], [burn], [runway], [key metric 1], [key metric 2] — then narrative." Metrics placed first in every investor update before any narrative context. Investors who receive narrative-first updates must read through founder framing before they can assess the underlying data. Metrics-first updates allow investors to form their own initial assessment and then read the founder narrative as context for the numbers they have already seen. Consistent metrics-first formatting also makes month-over-month comparison possible — investors who receive consistently structured updates can scan 6-12 months of data in 90 seconds without searching for the revenue line.',
  },
  {
    icon: BarChart3,
    title: 'Board updates reserved for decisions, not for status reporting',
    desc: '"Board meeting agenda: [decision 1 — context, options, recommendation]. [Decision 2 — context, options, recommendation]." Board meeting agenda structured around decisions that require board input, not status reporting. Status reporting belongs in the monthly investor update, which board members receive on the same cadence as all other investors. A board meeting consumed by status reporting that investors already received in their monthly update wastes board member time and crowds out the decision-making time that board meetings exist to provide. Board agendas pre-circulated 5 business days before each board meeting with decision context, relevant data, and a specific recommendation from the founder.',
  },
  {
    icon: Shield,
    title: 'Problems disclosed in the update, not after the investor asks',
    desc: '"Update section: challenges — [problem statement], [what we are doing about it], [what we need]." Challenges section included in every monthly update — not just in months when the founder wants to ask for help. Founders who disclose problems only when they need investor help train investors to interpret silence as the absence of problems. Founders who include a consistent challenges section — including months when the challenges are minor — give investors an accurate reading of company difficulty and position themselves to ask for specific help when needed. Investors who receive problems only at crisis stage become reactive; investors who receive problems early have time to be useful.',
  },
]

const INVESTOR_STEPS = [
  {
    step: 'Build the investor update template once and use it unchanged for 12 months',
    detail: '"Investor update template: [month], [date sent]. Revenue: [MRR/ARR]. Burn: [monthly burn]. Runway: [months]. [Key metric 1]: [value]. [Key metric 2]: [value]. Highlights: [3 bullets]. Challenges: [1-2 bullets]. Asks: [specific asks]." Template built once before the first update and used without structural changes for 12 consecutive months. Template changes mid-year disrupt month-over-month comparability and signal that the metrics being tracked changed — which may be operationally necessary but appears to investors as measurement shopping. Lock the template for at least 4 quarters, announce any changes explicitly when they occur, and explain what the new metric measures that the previous metric did not.',
  },
  {
    step: 'Place the metric collection process on the calendar before the update is due',
    detail: '"Metrics collection: [month-end + 5 days]. Update draft: [month-end + 8 days]. Update sent: [month-end + 10 days]." Metric collection process placed as a calendar event 5 days after month-end — not triggered by the update deadline. Founders who wait until the update is due to collect metrics discover that the data is not ready and either delay the update or send with estimates. Metric collection placed as a discrete prior step produces a ready data set 48-72 hours before the update draft is due. For companies using a CRM and financial system with automated reporting, the metric collection step is verification — for companies with manual processes, 5 days is required to compile accurate numbers.',
  },
  {
    step: 'Place the quarterly board meeting with 4-week lead time and agenda distributed 5 days before',
    detail: '"Q[N] board meeting: [quarter-end + 3 weeks]. Agenda distributed: [board meeting - 5 business days]." Quarterly board meeting placed at quarter-end plus 3 weeks — after the quarterly metrics are available and before the next quarter is more than 3 weeks old. Agenda distributed 5 business days before the board meeting with decision context documents pre-circulated. Board members who receive decision context 5 days before a meeting arrive prepared to decide — board members who receive context on the day of the meeting spend the first 20 minutes reading material that should have been read in advance. Pre-circulation is non-negotiable for decision-quality board meetings.' },
  {
    step: 'Track investor asks and responses — not just what you sent, but what you asked for',
    detail: '"Ask: [specific request], [date asked], [investor], [response status]." Investor asks tracked as calendar items with follow-up dates. Asks made in monthly updates that receive no response within 2 weeks receive one follow-up in the subsequent update. Founders who track asks and responses discover which investors are actively engaged and which are passive. Tracking responses also prevents the pattern of repeatedly asking for the same thing — introductions, candidates, customers — without closing the loop when an ask is fulfilled, which signals to investors that founder communication is unidirectional.' },
  {
    step: 'Place the annual year-in-review update with 4-week production lead time',
    detail: '"Annual year-in-review: [January 15 target]. Production start: [December 15]." Annual year-in-review update placed on the December calendar 4 weeks before the January 15 target send date. Year-in-review updates that are the most substantive investor communication of the year require more than a weekend of production. Annual year-in-review content: full-year metrics versus prior year and versus plan, major milestones, major failures and what was learned, team evolution, and outlook for the coming year. Investors who receive a substantive annual year-in-review communicate it to other investors — it is the investor update most likely to generate new introductions and renewed confidence from passive investors.' },
  {
    step: 'Send the bad news update before the investor hears it from someone else',
    detail: '"Bad news update trigger: [event], [update within 48 hours]." Material negative events — a key hire departure, a major customer churn, a fundraising process that is not closing — sent to investors within 48 hours of the event, not held for the monthly update cycle. Investors who hear material negative news from sources other than the founder — a shared connection, a LinkedIn announcement, an industry contact — experience a trust failure that monthly updates cannot repair. Bad news sent directly and promptly, with context and a specific plan, maintains the communication integrity that investor relationships require. The bad news update is not a crisis communication — it is a continuation of the consistent, honest communication pattern the monthly updates establish.' },
]

const INVESTOR_FAILURES = [
  { failure: 'No-update months — silence when things are hard trains investors to distrust silence', consequence: 'Founders who skip monthly investor updates during difficult periods train investors to interpret update gaps as performance signals. An investor who has received 8 consecutive monthly updates and then receives silence for 2 months will correctly infer that the company is experiencing difficulty — even if the founder&apos;s intention was simply to have time to turn the situation around before reporting it. The absence of the update communicates more than the update would have. Consistent monthly updates — including months with difficult news — are the only pattern that removes the directional interpretation from the communication cadence.' },
  { failure: 'Narrative-first updates — founders frame before investors can assess data independently', consequence: 'Investor updates structured with narrative before metrics produce a reading experience in which the investor encounters the founder&apos;s framing before the underlying data. Experienced investors read the metrics first regardless of where they appear in the document — but they also notice that the narrative precedes the numbers, which signals founder preference for framing over transparency. Metrics-first formatting is a structural commitment to data transparency that sophisticated investors recognize and unsophisticated investors benefit from. The cost of metrics-first formatting is zero; the trust signal it sends is compounding.' },
  { failure: 'Board meetings as status updates — decision-making time consumed by reporting', consequence: 'Board meetings structured primarily as status reporting replace the decision-making function of the board with a read-out function that duplicates the monthly investor update. Board members who receive monthly investor updates and then attend quarterly board meetings that cover the same status information become progressively less prepared for decisions — they arrive at board meetings expecting status and discover decisions. Board meeting agendas should be structured around 2-3 material decisions requiring board input, with all status information pre-circulated in the monthly update cadence. Status-driven board meetings produce advisory boards; decision-structured board meetings produce governance.' },
  { failure: 'Reactive investor communication — problems disclosed only when founder needs help', consequence: 'Founders who disclose challenges only when they need investor assistance train investors to treat problem disclosure as a fundraising signal. An investor who receives a challenge disclosure in month 14 of a relationship that has had no prior challenge sections interprets the disclosure as the founder asking for help — not as a continuation of honest communication. The interpretation is correct — but it produces a transactional rather than a trust-based response. Investors who receive consistent challenge sections in monthly updates — including months when the challenges are minor and no ask is attached — build the pattern recognition that allows them to respond usefully when a major challenge requires escalation.' },
]

export default function InvestorUpdateCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Update Calendar"
        title={
          <>
            Monthly updates sent on schedule, not when things are going well.
            <br />
            <em className="not-italic text-gold">Metrics first. Challenges every month. Problems surfaced early.</em>
          </>
        }
        lede="Investor update failures are mostly consistency failures. An investor update calendar places monthly updates as hard deadlines within 10 days of month-end, structures every update with metrics before narrative, includes a challenges section in every update — not just months when the founder wants help, reserves board meetings for decisions rather than status reporting, and places the annual year-in-review with production lead time — so investors receive consistent information that builds trust and surfaces problems before they become emergencies."
        crumbs={[{ label: 'Investor Update Calendar' }]}
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
            Founders guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the investor update calendar so communication builds trust consistently.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build an investor update calendar that maintains trust, surfaces problems early, and structures board meetings around decisions.</h2>
          </Reveal>
          <div className="space-y-3">
            {INVESTOR_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four investor update patterns that erode trust and produce reactive rather than proactive investor relationships.</h2>
          </Reveal>
          <div className="space-y-3">
            {INVESTOR_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Investor calendar analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for investor update calendar discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly update send date (days after month-end, target ≤10)',
                'Update consistency rate (% of months with update sent)',
                'Challenges section inclusion rate (% of updates with challenges)',
                'Board meeting agenda pre-circulation lead time (days before meeting)',
                'Investor ask response tracking (open, closed, no response)',
                'Bad news update lag (hours from event to investor notification)',
                'Annual year-in-review production lead time (days before send)',
                'Passive investor re-engagement rate (response to annual update)',
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
        title="Monthly updates on schedule. Metrics first. Problems surfaced early."
        subtitle="Consistent investor update cadence, board meeting decision structure, annual year-in-review, and investor ask tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Founders guide', href: '/for/founders' }}
      />
    </>
  )
}
