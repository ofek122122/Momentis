import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Affiliate Marketing Calendar | Momenties",
  description: "Plan your affiliate marketing calendar with partner recruitment, content cadence, commission structure reviews, and performance audits. Scale affiliate revenue predictably.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Partner Recruitment & Onboarding Pipeline",
    body: "Build a rolling 90-day recruitment pipeline: identify 20–40 new affiliate candidates per month (competitor affiliate audits, niche blog prospecting, YouTube channel research, community discovery). Outreach cycle: initial contact → 5-day follow-up → final soft-close at 10 days. Onboarding sequence: approval → welcome email with assets kit → 7-day check-in → 30-day performance review. High-volume partners (100+ conversions/month) get a dedicated account manager call scheduled at 14 days. Calendar all onboarding touchpoints to fire automatically on approval date.",
  },
  {
    icon: Clock,
    title: "Content Cadence & Promotional Calendar",
    body: "Coordinate promotional windows 6 weeks ahead so affiliates can plan content creation. Evergreen asset refresh quarterly: updated comparison tables, refreshed screenshots, new testimonials, seasonal copy variants. Campaign-specific assets delivered 3 weeks before activation. Affiliate newsletter: biweekly (Wednesday 10am ET) with commission leaderboard, upcoming promotions, new creatives, and brand news. Black Friday and holiday campaigns require 8-week lead time for top-tier partners. Schedule content deadlines, asset drops, and campaign activations in one calendar view.",
  },
  {
    icon: BarChart3,
    title: "Commission Structure & Incentive Reviews",
    body: "Review commission tiers quarterly: benchmark against affiliate network averages (SaaS standard 20–30% recurring, e-commerce 5–15% per sale). Tiered escalation schedule: 0–10 sales/month = base rate; 11–50 = +5%; 51+ = custom negotiation. Performance bonuses: top 10 affiliates quarterly ($500–$2,000 range). Sub-affiliate networks: 5–10% override on sub-affiliate sales. Schedule payout cycle audits (monthly net-30 or net-60 for threshold-based programs) against your commission ledger to catch discrepancies before affiliates notice.",
  },
  {
    icon: Users,
    title: "Compliance, Attribution & Fraud Audits",
    body: "FTC endorsement disclosure: quarterly reminder to all affiliates, per-campaign compliance check before asset distribution. Attribution audit monthly: verify click-to-conversion window accuracy (standard 30–90 day cookies), cross-device attribution discrepancies, coupon code stacking policy enforcement. Fraud review quarterly: cookie-stuffing flag (CTR >40% or click volume spikes without conversion), cashback/loyalty site policy review, sub-affiliate traffic source audit. Self-referral and coupon-leak investigation triggered immediately on detection. Momenties surfaces your next compliance and audit dates prominently.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Program Launch Foundations",
    description:
      "Finalize commission structure and terms of service, configure tracking platform (Impact, PartnerStack, ShareASale, or in-house), produce starter asset kit (banner sizes: 728×90, 300×250, 160×600; email copy; review template), and recruit your first 10–20 seed affiliates from existing customers and advocates.",
  },
  {
    phase: "Month 2–3",
    label: "Scale Recruitment & First Campaign",
    description:
      "Expand to 50–100 active affiliates. Run first coordinated promotional campaign (limited-time offer, 15–20% elevated commission window for 2 weeks). Publish first affiliate leaderboard. Onboard first content affiliate partnerships (niche bloggers, YouTube reviews). Begin biweekly affiliate newsletter.",
  },
  {
    phase: "Month 4–6",
    label: "Optimization Sprint",
    description:
      "Identify top 20% of affiliates driving 80% of conversions. Design white-glove program tier with dedicated support. Audit attribution model — switch from last-click to multi-touch if coupon affiliates dominate. Refresh creative assets. Begin testing exclusive coupon codes for top partners.",
  },
  {
    phase: "Month 7–12",
    label: "Mature Program Operations",
    description:
      "Quarterly commission reviews. Annual terms update. Q4 holiday campaign planned in August. Sub-affiliate network expansion if category allows. Annual affiliate summit or webinar for top-tier partners. Benchmark program AOV, conversion rate, and EPC against year-ago period.",
  },
]

const metrics = [
  { label: "Active affiliates", benchmark: "Top 20% drive ≥80% of revenue — watch this ratio" },
  { label: "EPC (earnings per click)", benchmark: "≥$1.00 EPC sustains quality affiliate interest" },
  { label: "Conversion rate from affiliate traffic", benchmark: "2–5% for SaaS, 1–3% for e-commerce" },
  { label: "Affiliate-sourced revenue share", benchmark: "20–30% of total new revenue at scale" },
  { label: "Payout ratio", benchmark: "Commission cost ≤35% of affiliate-attributed margin" },
  { label: "Churn in affiliate cohort", benchmark: "<15% of approved affiliates go dormant per quarter" },
]

export default function AffiliateMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliate Marketing Calendar"
        title="Schedule Every Partner Touchpoint for Predictable Affiliate Revenue"
        subtitle="Recruitment pipelines, promotional windows, commission reviews, and compliance audits — all on one calendar that scales your affiliate program without spreadsheet chaos."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of an Affiliate Program Calendar
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

      {/* 12-month timeline */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              12-Month Affiliate Program Calendar
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
              Affiliate Program Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Review these six metrics monthly to ensure your program compounds rather than stagnates.
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
              &ldquo;Our affiliate program went from $8K to $140K monthly revenue in 14 months. The unlock was treating it like a product — scheduled touchpoints, quarterly reviews, and a real promotional calendar that affiliates could plan around.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Priya V.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Affiliate Program Director, DTC SaaS (2,400+ active affiliates)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your affiliate program operations in minutes"
        subtitle="Momenties keeps every partner touchpoint, promotional window, and compliance audit in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
