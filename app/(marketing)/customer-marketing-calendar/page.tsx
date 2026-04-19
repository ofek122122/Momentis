import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Marketing Calendar | Momenties",
  description: "Plan your customer marketing calendar with expansion campaigns, advocacy programs, renewal touchpoints, and health score reviews. Turn customers into your best growth channel.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Expansion & Upsell Campaign Calendar",
    body: "Expansion campaigns require different timing than acquisition: trigger-based beats scheduled beats. Schedule three types: product-usage triggers (users hitting feature limits or usage thresholds → seat expansion offer), lifecycle triggers (6-month anniversary → annual plan upgrade offer with 15–20% discount), and cohort-based campaigns (customers who adopted Feature A in the last 90 days → introduce Feature B). Monthly expansion revenue review: track expansion MRR as a % of total MRR (benchmark: 20–30% for healthy SaaS). Schedule a dedicated expansion pipeline review for CSMs quarterly — tie it to QBR prep.",
  },
  {
    icon: Clock,
    title: "Renewal & Retention Calendar",
    body: "Renewal timeline: 90 days before renewal → health score review + renewal kickoff. 60 days → executive business review or CSM value recap. 30 days → formal renewal proposal sent. 14 days → final negotiation window. 7 days → last-chance outreach if not renewed. Churn risk intervention: any customer with health score drop >15 points in 30 days gets a triggered CSM check-in within 48 hours. Quarterly churn autopsy: for every churned account, document primary churn reason, health score at last contact, and expansion revenue lost — feed insights back into lifecycle triggers and product roadmap.",
  },
  {
    icon: BarChart3,
    title: "Advocacy & Reference Program Calendar",
    body: "Advocacy pipeline: identify NPS 9–10 customers within 30 days of score → request a review on G2/Capterra (target: 1 review per 10 NPS 9–10 responses). Case study pipeline: 3 case studies per quarter — kickoff 8 weeks before planned publish, customer approval 2 weeks before. Reference program: 10–15 active references per sales vertical, refreshed quarterly (customers shouldn&apos;t field more than 2 reference calls per quarter without explicit opt-in). Speaking and co-marketing calendar: customer speakers for webinars, 6 weeks lead time; conference speaking, 4 months lead time. Award nominations calendar: track industry award deadlines annually.",
  },
  {
    icon: Users,
    title: "Customer Health Score & QBR Rhythm",
    body: "Health score review cadence: enterprise customers (>$50K ARR) monthly, mid-market ($10K–$50K) quarterly, SMB (<$10K) automated scoring only with triggered alerts. QBR schedule: enterprise quarterly, mid-market semi-annually, SMB annually or skipped entirely. QBR prep: pull usage data 2 weeks ahead, draft value summary 1 week ahead, share agenda 3 days ahead. Customer advisory board (CAB): 2 sessions per year for strategic accounts — 6 weeks prep, agenda shaped by product team, action items followed up within 2 weeks. Annual customer survey: run Q4, publish results to customers in Q1.",
  },
]

const timeline = [
  {
    phase: "Q1",
    label: "Retention Foundation",
    description:
      "Publish annual customer survey results, run new-year business review for all enterprise accounts, launch first case study cohort (3 stories), review and refresh reference roster, set health score thresholds and churn risk triggers for the year.",
  },
  {
    phase: "Q2",
    label: "Expansion Sprint",
    description:
      "Run seat expansion campaign for high-usage accounts, launch mid-year upgrade offer with annual incentive, run first CAB session of the year, identify and nominate customers for industry awards (most deadlines fall April–June), publish second case study cohort.",
  },
  {
    phase: "Q3",
    label: "Advocacy & Community",
    description:
      "Deepen G2/Capterra review pipeline (review velocity often peaks mid-year), source customer speakers for Q4 conference season, refresh reference roster for Q4 sales push, run semi-annual health score audit, publish third case study cohort.",
  },
  {
    phase: "Q4",
    label: "Renewal & Planning Season",
    description:
      "Renewal focus: 90/60/30-day pipeline review for all January–March renewals, annual plan upgrade campaign with year-end incentive, run second CAB session, launch annual customer survey, plan next year&apos;s customer marketing calendar with CS and product teams.",
  },
]

const metrics = [
  { label: "Net Revenue Retention (NRR)", benchmark: "≥110% NRR is best-in-class for SaaS" },
  { label: "Gross Revenue Retention (GRR)", benchmark: "≥90% for enterprise, ≥85% for SMB" },
  { label: "Expansion MRR as % of total MRR", benchmark: "20–30% indicates healthy customer growth" },
  { label: "NPS to review conversion rate", benchmark: "≥10% of NPS 9–10 responses yield a public review" },
  { label: "Health score early warning accuracy", benchmark: "≥70% of churned accounts flagged ≥30 days ahead" },
  { label: "QBR completion rate", benchmark: "≥90% of enterprise accounts receive QBR each quarter" },
]

export default function CustomerMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Marketing Calendar"
        title="Turn Customers into Your Best Growth Channel with Structured Touchpoints"
        subtitle="Expansion campaigns, renewal timelines, advocacy pipelines, and health score reviews — all on one calendar that compounds retention and net revenue retention."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Customer Marketing Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly calendar */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Annual Customer Marketing Calendar by Quarter
            </h2>
          </Reveal>
          <div className="space-y-6">
            {timeline.map(({ phase, label, description }) => (
              <Reveal key={phase}>
                <div
                  className="rounded-xl p-8"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <span
                        className="inline-block rounded-lg px-3 py-1 text-xs font-semibold"
                        style={{ background: "rgba(197,163,92,0.15)", color: "#c5a35c" }}
                      >
                        {phase}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-lg font-semibold" style={{ color: "#f0ece3" }}>
                        {label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              Customer Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics quarterly to confirm your customer base compounds revenue, not just headcount.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ label, benchmark }) => (
              <Reveal key={label}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c5a35c" }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {benchmark}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;We went from 94% GRR to 108% NRR in two quarters. Customer marketing was always an afterthought — once we gave it a structured calendar, it became our highest-ROI growth channel.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Jordan K.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Customer Success, B2B SaaS ($18M ARR, 400+ accounts)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your customer marketing touchpoints in minutes"
        subtitle="Momenties keeps every renewal trigger, advocacy campaign, and QBR in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
