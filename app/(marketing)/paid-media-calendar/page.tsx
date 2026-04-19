import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Paid Media Calendar | Momenties",
  description: "Plan your paid media calendar with campaign flight schedules, budget pacing reviews, creative rotation, and performance audits. Scale paid acquisition efficiently across channels.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Campaign Flight Scheduling & Budget Allocation",
    body: "Paid media calendar starts with annual budget allocation across channels (benchmark: 40–50% Search, 25–35% Social, 10–20% Display/Programmatic, 5–10% Other). Quarterly reallocation based on ROAS performance — channel with best marginal ROAS receives incremental budget. Monthly flight schedule: each campaign has a defined start date, end date, daily/weekly cap, and pacing review date (7 days after launch). Seasonal uplift calendar: identify 4–6 key promotional periods (Black Friday, end-of-quarter, new year) 12 weeks ahead — build creative brief, landing page, and offer structure before media planning begins.",
  },
  {
    icon: Clock,
    title: "Creative Rotation & Refresh Calendar",
    body: "Creative fatigue benchmarks: Google Ads — rotate headlines and descriptions every 30–45 days if CTR drops >15%. Facebook/Meta — ad frequency >3 in 7 days signals fatigue; creative swap triggered. LinkedIn — creative refresh every 3–4 weeks for same audiences. Creative brief cycle: brief due 4 weeks before campaign launch, first draft review 2 weeks before, final creative approval 5 days before. A/B test calendar: minimum 1 creative A/B test per campaign per quarter (headline, image, format, CTA). Dedicate 20% of impressions to new creative tests, 80% to control. Never pause the control until the test reaches statistical significance (minimum 500 conversions or 95% confidence).",
  },
  {
    icon: BarChart3,
    title: "Budget Pacing & Performance Review Cadence",
    body: "Daily pacing check (automated): flag if spend is >115% or <85% of daily target — adjust bids or budgets within 24 hours. Weekly performance review (Monday morning, 30 minutes): CPC, CPL, ROAS, CTR, Quality Score or Relevance Score — compare against prior week and campaign baseline. Monthly deep review: attribution analysis (first-touch vs last-touch vs data-driven), audience overlap audit (ad fatigue via frequency), keyword cannibalization in Search, and channel-mix efficiency. Quarterly ROAS review: rank all active campaigns by marginal ROAS and reallocate budget from lowest to highest marginal performers.",
  },
  {
    icon: Users,
    title: "Landing Page, CRO & Compliance Calendar",
    body: "Landing page launch calendar: every new campaign requires a matching landing page — minimum 5 days for LP development, 2 days for QA, 1 day for URL implementation in ad platform. CRO testing calendar: one A/B test per landing page per 6 weeks (headline, form length, CTA, social proof placement). Compliance calendar: annual privacy policy review tied to GDPR/CCPA changes (update by January 15 annually). Platform policy audits: Meta ad policy review quarterly (policy updates monthly — subscribe to platform notifications). Google Ads audit: sensitive categories, trademark compliance, destination mismatch — quarterly sweep. UTM taxonomy audit: verify all active campaigns use consistent UTM convention — review before each new campaign launch.",
  },
]

const timeline = [
  {
    phase: "Week 1–2",
    label: "Campaign Architecture",
    description:
      "Define campaign structure (brand vs non-brand, by product line or funnel stage), set up conversion tracking verification, establish UTM taxonomy, confirm audience segments and exclusions, and draft annual channel budget allocation.",
  },
  {
    phase: "Week 3–4",
    label: "Launch & Baseline",
    description:
      "Launch first campaigns with controlled budget ($500–$1,000/day minimum for meaningful data), run daily pacing checks, establish baseline CPL and ROAS benchmarks from first 14 days of data, identify top-performing ad groups for expansion.",
  },
  {
    phase: "Month 2–3",
    label: "Optimization Sprint",
    description:
      "First full monthly review: pause underperforming ad groups (ROAS <0.5× target), expand top performers, launch first creative A/B test, implement audience exclusions (recent customers, bounced visitors), and test one new channel or format.",
  },
  {
    phase: "Month 4–12",
    label: "Scale & Diversify",
    description:
      "Quarterly channel reallocation, creative refresh on 45-day cycle, landing page CRO tests monthly, compliance audit quarterly, and annual strategy reset with media agency or in-house team before Q4 budget planning deadline.",
  },
]

const metrics = [
  { label: "ROAS by channel", benchmark: "Google Search ≥4×, Paid Social ≥2.5×, Display ≥1.5×" },
  { label: "Budget pacing accuracy", benchmark: "Monthly spend within ±10% of planned budget" },
  { label: "CPL trend", benchmark: "Declining or flat CPL as campaign matures (learning phase is 2–4 weeks)" },
  { label: "Ad frequency (Social)", benchmark: "≤3 frequency in 7-day window — above this, refresh creative" },
  { label: "Creative A/B test velocity", benchmark: "≥1 test per campaign per quarter reaching statistical significance" },
  { label: "Conversion tracking coverage", benchmark: "100% of ad spend tied to a trackable conversion action" },
]

export default function PaidMediaCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Paid Media Calendar"
        title="Scale Paid Acquisition Efficiently with a Structured Campaign Calendar"
        subtitle="Flight scheduling, creative rotation, budget pacing reviews, and landing page CRO — all on one calendar so your paid media compounds ROAS instead of burning budget."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Paid Media Calendar
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

      {/* Launch plan */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Paid Media Program Launch Timeline
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
              Paid Media Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics weekly to confirm campaigns are scaling efficiently.
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
              &ldquo;Our blended ROAS jumped from 2.1× to 5.4× in six months — not by spending more, but by having a structured calendar that forced us to rotate creative, rebalance channels monthly, and never let a campaign run stale.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Dmitri V.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Performance Marketing Lead, DTC e-commerce ($4.2M annual ad spend)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your paid media calendar in minutes"
        subtitle="Momenties keeps every campaign flight, creative rotation, and budget review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
