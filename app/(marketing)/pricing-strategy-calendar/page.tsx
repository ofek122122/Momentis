import type { Metadata } from "next"
import { DollarSign, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pricing Strategy Calendar | Momenties",
  description: "Build a systematic pricing strategy calendar — annual pricing review cycles, competitive pricing intelligence cadences, value metric validation reviews, and packaging optimization schedules that protect NRR and expand revenue per customer.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "Annual Pricing Review Cycle & Price Change Execution Calendar",
    description:
      "Most SaaS companies leave 15-20% of revenue on the table by not running systematic annual pricing reviews. Momenties schedules the complete pricing review calendar: Q1 win/loss pricing sensitivity analysis, Q2 customer willingness-to-pay research (conjoint analysis or Van Westendorp surveys with 60-day fielding cycle), Q3 pricing model design and internal alignment, and Q4 price change communication and execution (60-day customer notice windows for existing contracts, 30-day website and CRM update cycle). Annual CPI-based price escalation clauses in enterprise contracts — typically 3-5% annually — require notification letter generation and tracking. Pricing changes not executed on a structured calendar compress NRR.",
  },
  {
    icon: RefreshCw,
    title: "Competitive Pricing Intelligence & Benchmarking Cadence",
    description:
      "Competitive pricing changes faster than annual reviews can track — Momenties schedules monthly competitive pricing monitoring (pricing page changes, new tier introductions, announced discounting changes), quarterly competitive pricing benchmark analysis comparing price positioning across 5-7 direct competitors, and bi-annual win/loss pricing attribution analysis identifying deals lost on price vs. lost on value. Price-to-value ratio benchmarking — comparing feature density and outcome metrics against competitors at equivalent price points — is calendared semi-annually with input from sales, CS, and product. Pricing intelligence feeds the quarterly competitive battlecard update cycle.",
  },
  {
    icon: TrendingUp,
    title: "Value Metric Validation & Packaging Architecture Reviews",
    description:
      "Pricing models built on the wrong value metric — charging per seat when customers think in outcomes, or charging per usage when customers prefer predictability — erode NRR systematically. Momenties schedules semi-annual value metric validation studies (customer interviews, expansion correlation analysis, churn cohort analysis by pricing plan), annual packaging architecture reviews where tier structure, feature allocation, and add-on strategy are evaluated against current ICP and expansion motion, and quarterly add-on and usage-based pricing performance reviews. New product pricing decisions — triggered at each product launch milestone — are structured with 8-week pricing research cycles rather than last-minute CEO decisions.",
  },
  {
    icon: BarChart3,
    title: "Pricing Performance Reviews & NRR Attribution Analysis",
    description:
      "Pricing decisions without a measurement cadence are indistinguishable from guesses. Momenties schedules monthly pricing performance dashboards (ACV by plan, discount rate by segment, plan migration rates, expansion from pricing tier upgrades), quarterly NRR attribution analysis identifying whether net revenue retention is driven by seat expansion, upgrade, price increases, or churn-driven contraction, and annual pricing program ROI reviews comparing pricing investment to revenue per customer improvement. Board-level pricing metrics — ACV per customer, gross revenue retention, pricing-driven expansion — are compiled into quarterly executive packages with year-over-year trend analysis.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Pricing Audit & Competitive Baseline",
    description: "Audit current pricing model, discount rates, plan mix, and win/loss pricing attribution; complete competitive pricing benchmark across top 7 competitors; identify top 3 pricing model risks and opportunities.",
  },
  {
    month: "Month 3",
    title: "Willingness-to-Pay Research & Value Metric Validation",
    description: "Field customer willingness-to-pay survey (conjoint or Van Westendorp, n≥200); conduct value metric correlation analysis; complete 10-15 customer interviews on pricing perception and expansion triggers.",
  },
  {
    month: "Month 4–5",
    title: "Pricing Model Design & Internal Alignment",
    description: "Design pricing model update based on research; present pricing scenarios to sales, CS, finance, and product; model revenue impact of each scenario; align on recommended model and timeline.",
  },
  {
    month: "Month 6",
    title: "Price Change Communication & Execution",
    description: "Send required customer notice for price changes; update website, pricing page, and CRM; train sales on new pricing and objection handling; launch updated packaging to new customers.",
  },
  {
    month: "Month 7–9",
    title: "Post-Change Performance Monitoring & Packaging Optimization",
    description: "Monitor win rate, discount rate, and plan mix against pre-change baseline; identify conversion or churn anomalies; run packaging optimization experiments; prepare mid-year pricing performance review.",
  },
  {
    month: "Month 10–12",
    title: "Annual Pricing Program Review & Next-Year Planning",
    description: "Present annual pricing program review (NRR impact, ACV per customer improvement, competitive position assessment); plan next-year pricing research calendar; confirm CPI escalation clause execution for enterprise contracts.",
  },
]

const kpis = [
  {
    metric: "Net Revenue Retention",
    target: "≥ 110% (expansion SaaS)",
    description: "NRR including expansion, contraction, and churn — below 100% means existing customers are shrinking revenue; elite SaaS companies maintain 115-130% NRR through systematic pricing and expansion programs.",
  },
  {
    metric: "Average Contract Value Growth",
    target: "≥ 10% YoY",
    description: "Year-over-year growth in ACV per new customer — flat or declining ACV with growing customer count signals pricing compression and value positioning deterioration.",
  },
  {
    metric: "Discount Rate",
    target: "≤ 15% average discount",
    description: "Average discount from list price across all new bookings — above 25% average discount indicates pricing is set too high for the market, or sales lacks pricing discipline enforcement.",
  },
  {
    metric: "Pricing Plan Mix",
    target: "≥ 30% in top tier",
    description: "Percentage of customers on highest-value pricing tier — below 20% in top tier suggests tier architecture is not driving upgrade behavior or top tier value delivery is insufficient.",
  },
  {
    metric: "Pricing-Driven Expansion Rate",
    target: "≥ 20% of expansion",
    description: "Percentage of NRR expansion attributable to tier upgrades or price increases (vs. seat expansion) — measures how effectively pricing architecture supports revenue growth without requiring headcount growth.",
  },
  {
    metric: "Win Rate on Pricing",
    target: "≤ 10% lost on price",
    description: "Percentage of lost deals where price was the primary objection — above 15% price-loss rate signals pricing is out of market range or value communication is failing, not actual price problem.",
  },
]

const testimonial = {
  quote:
    "We hadn&apos;t raised prices in 3 years, had no idea what our customers would pay, and discounting was completely at rep discretion. Momenties gave us a pricing calendar. We ran proper willingness-to-pay research, executed a structured price increase with 90 days notice, and saw NRR improve from 104% to 118% in two quarters without meaningful churn.",
  name: "Adaeze B.",
  title: "VP Revenue Operations, Series C B2B SaaS",
}

export default function PricingStrategyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Pricing Strategy Calendar"
        title="110%+ NRR. Controlled Discounting. Annual Pricing Reviews That Stick."
        subtitle="A systematic pricing strategy calendar with annual willingness-to-pay research cycles, competitive pricing benchmarks, value metric validation reviews, and price change execution cadences that protect and expand revenue per customer."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Systems That Build Pricing Excellence
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your 12-Month Pricing Strategy Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            KPIs That Define Pricing Program Maturity
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
