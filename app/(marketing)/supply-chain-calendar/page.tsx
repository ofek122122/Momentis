import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Supply Chain Calendar | Momenties",
  description: "Build a systematic supply chain calendar — supplier performance reviews, inventory optimization cycles, demand planning cadences, risk assessment programs, and supply chain resilience drills that reduce stockouts, lower costs, and improve delivery reliability.",
}

const pillars = [
  {
    icon: Target,
    title: "Supplier Performance Reviews & Qualification Calendar",
    description:
      "Supplier relationships managed without a structured review cadence drift toward underperformance — quality escapes accumulate, delivery reliability decays, and cost increases pass unchallenged until a supply disruption forces emergency action. Momenties schedules monthly scorecards for critical Tier 1 suppliers (on-time delivery, quality rejection rates, lead time accuracy), quarterly business reviews (QBRs) with top 20 suppliers by spend (reviewing performance trends, capacity constraints, and pricing), and annual supplier qualification audits (facility visits, financial health review, continuity planning documentation). New supplier onboarding programs — qualification, compliance documentation, first-article inspection, and trial order validation — are managed with milestone calendars and approval gate timelines. Supplier development programs for underperforming suppliers include 90-day improvement plans with weekly check-ins.",
  },
  {
    icon: RefreshCw,
    title: "Inventory Optimization Cycles & Demand Planning Cadence",
    description:
      "Inventory managed by intuition accumulates excess and ages into obsolescence — while simultaneously generating stockouts on fast-movers that demand planning models miss. Momenties schedules weekly demand signal reviews (sales orders, backlog, distribution requests), monthly inventory rebalancing sessions (identifying excess and slow-moving inventory for liquidation or repositioning), and quarterly inventory optimization sprints (updating safety stock levels, reorder points, and min/max parameters based on updated lead time and demand variability data). Annual inventory policy reviews — setting ABC/XYZ classification targets, safety stock investment guidelines, and inventory turnover targets — are aligned to budget planning. Seasonal inventory build plans are calendared 16 weeks in advance with procurement coordination and warehouse capacity pre-booking.",
  },
  {
    icon: TrendingUp,
    title: "Demand Planning Reviews & S&OP Cadence",
    description:
      "Sales and Operations Planning without a disciplined cadence produces the bullwhip effect — demand signals amplify upstream, creating inventory swings that erode supplier relationships and working capital. Momenties schedules weekly demand desk reviews (comparing actuals to forecast with bias measurement), monthly consensus demand planning meetings (aligning sales, marketing, and operations on the unconstrained demand plan), and quarterly S&OP executive meetings (presenting constrained plan, capacity gaps, and investment decisions to leadership). Annual plan resets — rebuilding the statistical baseline model with updated market data, segmentation, and new product introductions — are timed 10 weeks before fiscal year start. Forecast accuracy measurement (MAPE by product family and customer tier) is reviewed monthly with owner accountability for bias and accuracy improvement.",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Risk Assessment & Resilience Program Calendar",
    description:
      "Supply chain risk without a structured assessment calendar is invisible until it becomes a crisis — single-source dependencies, geographic concentration, and financial fragility in the supplier base accumulate until a disruption forces reactive response. Momenties schedules quarterly supply chain risk reviews (mapping critical single-source items, geographic concentration, and suppliers with financial distress signals), semi-annual resilience drills (testing supply continuity playbooks for top 5 disruption scenarios — supplier bankruptcy, port congestion, natural disaster, quality recall), and annual supply chain network optimization reviews evaluating make/buy decisions, nearshoring opportunities, and buffer stock strategies. Supplier financial health monitoring — credit rating changes, news alerts, and payment behavior signals — is reviewed monthly for Tier 1 and Tier 2 suppliers above $1M spend. Supply chain ESG audits are calendared annually for suppliers above spend threshold.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Supply Chain Audit & Performance Architecture",
    description: "Audit current supplier performance data, inventory accuracy, and demand forecast quality; map critical single-source items and geographic concentration risks; build supplier scorecard framework; establish monthly demand review cadence; run baseline inventory optimization analysis.",
  },
  {
    month: "Month 3",
    title: "Supplier QBR Launch & S&OP Cadence Implementation",
    description: "Launch first quarterly supplier QBRs for top 20 suppliers; implement monthly S&OP consensus demand planning process; run first inventory rebalancing session; establish supplier development program for underperformers; launch weekly demand desk reviews.",
  },
  {
    month: "Month 4–5",
    title: "Risk Assessment Program & Safety Stock Optimization",
    description: "Complete first quarterly supply chain risk review; run first resilience drill for top disruption scenario; update safety stock parameters with current lead time data; run seasonal inventory build planning for Q3/Q4; implement supplier financial health monitoring.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Supply Chain Review & H2 Planning",
    description: "Present mid-year supply chain performance (supplier OTIF, inventory turns, forecast accuracy); review H1 risk events and resilience program gaps; reforecast H2 demand plan with actuals; run mid-year inventory investment review; update single-source risk mitigation progress.",
  },
  {
    month: "Month 7–9",
    title: "Annual Supplier Qualification & Network Review",
    description: "Launch annual supplier qualification audit cycle; run semi-annual resilience drills for remaining scenarios; complete supply chain network optimization review; run ESG audit for suppliers above threshold; run ABC/XYZ inventory classification update.",
  },
  {
    month: "Month 10–12",
    title: "Annual S&OP Reset & Budget Planning",
    description: "Run annual statistical forecast baseline rebuild; present annual supply chain performance review (supplier quality, inventory ROI, resilience improvements); complete supplier contract renewals and pricing negotiations; lock next-year inventory investment targets; finalize next-year S&OP calendar.",
  },
]

const kpis = [
  {
    metric: "On-Time In-Full (OTIF) Rate",
    target: "≥ 95% OTIF",
    description: "Percentage of orders delivered on time and in full quantity — below 90% OTIF creates production line disruptions, lost sales, and customer satisfaction erosion; track by supplier to identify which relationships require QBR escalation.",
  },
  {
    metric: "Inventory Turns",
    target: "Industry-appropriate, trending up",
    description: "Annual revenue divided by average inventory value — below industry benchmark indicates excess inventory tying up working capital; above benchmark risks stockout exposure; optimize by ABC class rather than averaging across the portfolio.",
  },
  {
    metric: "Demand Forecast Accuracy (MAPE)",
    target: "≤ 15% MAPE by product family",
    description: "Mean Absolute Percentage Error on 12-week rolling demand forecasts — above 25% MAPE by product family indicates statistical model failures or bias; forecast accuracy below 80% causes either excess inventory builds or stockout events.",
  },
  {
    metric: "Supply Chain Risk Score",
    target: "Zero critical single-source items",
    description: "Number of critical components with a single qualified source and no approved alternative — each single-source item above $100K annual spend is a potential production-halting disruption; target dual-source qualification for all A-class items within 18 months.",
  },
  {
    metric: "Supplier Quality Rejection Rate",
    target: "≤ 0.5% incoming rejection",
    description: "Percentage of incoming supplier deliveries rejected for quality failures — above 2% rejection rate indicates systemic supplier quality management failures requiring supplier development programs or supplier change decisions.",
  },
  {
    metric: "Inventory Write-Off Rate",
    target: "≤ 0.5% of inventory value",
    description: "Annual inventory write-offs as a percentage of total inventory value — above 1% indicates demand planning failures, excess procurement, or product obsolescence management problems; track by product family to identify demand planning bias patterns.",
  },
]

const testimonial = {
  quote:
    "We had 47 single-source critical items, no supplier QBR cadence, a statistical forecast model nobody trusted, and safety stock levels nobody had updated since 2019. We discovered the risks in the COVID disruption. Momenties gave us a structured supply chain calendar. Single-source items are down to 8, OTIF improved from 81% to 96%, and our forecast MAPE dropped from 34% to 12%.",
  name: "Adewale B.",
  title: "VP Supply Chain, Series D Manufacturing & Hardware",
}

export default function SupplyChainCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Supply Chain Calendar"
        title="96% OTIF. 12% MAPE. 8 Single-Source Risks Remaining."
        subtitle="A systematic supply chain calendar with monthly supplier scorecards, quarterly QBRs, weekly demand planning reviews, semi-annual resilience drills, inventory optimization cycles, and S&OP cadences that reduce stockouts, lower inventory costs, and improve supply chain resilience."
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
            Four Systems That Build Supply Chain Excellence
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
            Your 12-Month Supply Chain Roadmap
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
            KPIs That Define Supply Chain Program Maturity
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
