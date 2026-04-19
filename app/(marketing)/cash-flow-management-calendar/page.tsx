import type { Metadata } from "next"
import { DollarSign, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cash Flow Management Calendar | Momenties",
  description: "Build a systematic cash flow management calendar — 13-week cash flow forecasts, working capital optimization cycles, covenant compliance reviews, scenario planning cadences, and cash flow reporting rhythms that prevent liquidity crises and give boards confidence.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "13-Week Cash Flow Forecast & Rolling Liquidity Calendar",
    description:
      "Cash flow visibility without a structured forecast calendar means boards and investors discover liquidity gaps too late to act. Momenties schedules weekly 13-week rolling cash flow forecasts (updated every Monday with actual vs. forecast variance analysis and updated projections), monthly cash flow review meetings with CFO and finance leadership (reconciling forecast accuracy, identifying variance drivers, and updating assumptions), and quarterly cash flow model refreshes where seasonality, growth plan assumptions, and working capital targets are recalibrated. Minimum liquidity threshold alerts — triggered when the 13-week forecast shows cash balance falling below runway covenant or operational floor — escalate to board level within 24 hours. Momenties manages the complete forecast governance cycle so finance teams see problems 90 days before they become crises.",
  },
  {
    icon: RefreshCw,
    title: "Working Capital Optimization & Inventory Cash Cycle Management",
    description:
      "Working capital inefficiency silently consumes cash — companies growing 40% YoY can run out of cash due entirely to inventory build, AR DSO expansion, and AP payment acceleration. Momenties schedules monthly working capital ratio reviews (DSO, DPO, DIO trend analysis), quarterly cash conversion cycle optimization sprints (identifying specific AR aging, inventory, and payment term improvements with owner assignments), and semi-annual working capital benchmark reviews comparing CCC against industry peers. Inventory management calendars — reorder point reviews, safety stock level audits, and supplier lead time validation — are updated quarterly. AP payment term optimization (extending terms with key suppliers without relationship damage) is reviewed quarterly with procurement. Annual working capital financing reviews (revolving credit facility utilization, supply chain financing programs) are timed for credit facility renewal cycles.",
  },
  {
    icon: TrendingUp,
    title: "Covenant Compliance Calendar & Lender Communication Cadence",
    description:
      "Debt covenant violations are almost always preventable — they happen when finance teams lose track of covenant testing dates, miss early warning threshold breaches, or fail to communicate with lenders before technical defaults occur. Momenties schedules monthly covenant compliance checks (testing all financial maintenance covenants — leverage ratio, interest coverage, minimum liquidity, EBITDA floors — against current actuals), quarterly covenant compliance certificates (required by most senior credit facilities within 45-60 days of quarter end), and annual lender relationship calls with proactive business update presentations. Covenant headroom alerts — triggered when any covenant approaches within 20% of breach threshold — prompt proactive lender communication before technical defaults occur. Waiver and amendment negotiation timelines are managed with counsel coordination calendars.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Scenario Planning & Board Reporting Calendar",
    description:
      "Cash flow scenario planning without a governance cadence produces outdated models that finance teams don&apos;t trust and boards don&apos;t use. Momenties schedules quarterly scenario plan updates (base, downside, and upside cash scenarios with updated probability weights and action triggers for each scenario), monthly board-level cash flow dashboards (current cash position, 13-week forecast, covenant headroom, and burn rate if applicable), and annual cash flow stress testing cycles where extreme downside scenarios are modeled to identify liquidity floor and action plan triggers. Capital allocation review cadences — evaluating investment return against cash flow impact before committing capex or M&A — are managed quarterly. Investor update preparation timelines (monthly for board, quarterly for investors) include cash flow narrative development with 30-day preparation cycles.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Cash Flow Audit & Forecast Architecture",
    description: "Audit current cash flow forecasting accuracy and working capital ratios; build 13-week rolling cash flow model; establish weekly forecast update cadence; map all covenant compliance testing dates; implement minimum liquidity threshold alerts; run baseline cash conversion cycle analysis.",
  },
  {
    month: "Month 3",
    title: "Covenant Compliance Calendar & Working Capital Sprint",
    description: "Launch monthly covenant compliance check cadence; run first quarterly covenant compliance certificate process; complete first quarterly working capital optimization sprint; establish AP payment term review with procurement; launch monthly board cash flow dashboard.",
  },
  {
    month: "Month 4–5",
    title: "Scenario Planning Launch & Lender Communication Program",
    description: "Build quarterly scenario planning cycle with base/downside/upside models; establish proactive lender communication cadence; run first inventory and reorder point review; complete first semi-annual working capital benchmark analysis; implement covenant headroom alert system.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Cash Flow Review & Working Capital Reforecast",
    description: "Present mid-year cash flow performance vs. plan; reforecast H2 cash flow model with updated assumptions; run mid-year covenant headroom analysis; review AP and AR working capital optimization progress; update scenario plans with H1 actuals.",
  },
  {
    month: "Month 7–9",
    title: "Annual Stress Test & Credit Facility Review",
    description: "Run annual cash flow stress test (modeling extreme downside scenarios and liquidity floor); review revolving credit facility utilization and terms; complete annual working capital financing program review; run supply chain financing program evaluation; prepare lender relationship update presentation.",
  },
  {
    month: "Month 10–12",
    title: "Annual Cash Flow Plan & Board Budget Presentation",
    description: "Build next-year cash flow plan with monthly and quarterly projections; present annual cash flow review (forecast accuracy, working capital improvement, covenant headroom history); run capital allocation review; finalize next-year scenario plans; prepare board budget presentation cash flow narrative.",
  },
]

const kpis = [
  {
    metric: "13-Week Forecast Accuracy",
    target: "Within ±5% variance",
    description: "Actual cash versus 13-week forecast variance by week — above ±10% variance indicates forecast model assumptions failures; persistent forecast misses erode CFO and board confidence in finance&apos;s ability to manage liquidity proactively.",
  },
  {
    metric: "Cash Conversion Cycle",
    target: "Declining quarter-over-quarter",
    description: "Days sales outstanding + days inventory outstanding − days payable outstanding — a rising CCC indicates working capital is consuming cash as the business grows; best-in-class SaaS companies achieve negative CCC through subscription prepayment models.",
  },
  {
    metric: "Covenant Headroom",
    target: "≥ 25% above all covenant floors",
    description: "Distance from each financial maintenance covenant threshold — below 15% headroom triggers lender notification protocols; below 10% headroom requires immediate waiver or amendment negotiation before monthly closes confirm breach.",
  },
  {
    metric: "Minimum Cash Runway",
    target: "≥ 12 months at current burn",
    description: "Months of operating cash remaining at current net burn rate — below 9 months triggers board-level capital raise or cost reduction discussion; below 6 months requires emergency action before market windows close.",
  },
  {
    metric: "Liquidity Alert Response Time",
    target: "≤ 24 hours to board escalation",
    description: "Time from liquidity threshold breach (in forecast, not actual) to board-level communication — delays beyond 48 hours eliminate options; early warning systems only work when escalation is fast enough to allow fundraising or credit facility draw.",
  },
  {
    metric: "Working Capital as % of Revenue",
    target: "Declining or ≤ 10% of ARR",
    description: "Net working capital as a percentage of trailing twelve months revenue — above 15% in SaaS indicates working capital is consuming growth capital; negative working capital (common in prepaid subscription models) generates cash from growth.",
  },
]

const testimonial = {
  quote:
    "We discovered a covenant breach 8 days before the quarterly certificate was due. Our 13-week model was updated monthly at best, working capital had expanded 60% as we scaled, and no one owned the lender communication calendar. Momenties gave us a structured cash flow governance system. We haven&apos;t had a covenant surprise in 6 quarters, and our forecast accuracy is consistently within 4%.",
  name: "Ngozi E.",
  title: "CFO, Series C B2B SaaS",
}

export default function CashFlowManagementCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Cash Flow Management Calendar"
        title="13-Week Visibility. Zero Covenant Surprises. Board-Ready Forecasts."
        subtitle="A systematic cash flow management calendar with weekly 13-week rolling forecasts, monthly covenant compliance reviews, quarterly working capital optimization sprints, scenario planning updates, and board cash flow reporting that prevents liquidity crises and gives finance teams lender confidence."
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
            Four Systems That Build Cash Flow Excellence
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
            Your 12-Month Cash Flow Management Roadmap
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
            KPIs That Define Cash Flow Management Maturity
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
