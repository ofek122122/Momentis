import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Supply Chain Operations Calendar | Momenties",
  description: "Momenties helps VP Supply Chain and operations leaders track demand planning cycles, supplier review cadences, inventory optimization reviews, logistics contract renewals, and supply chain risk assessment calendars in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Demand Planning Cycles, S&OP Calendar & Forecast Governance",
    description:
      "Supply chain planning programs without structured S&OP calendars produce reactive procurement and persistent inventory imbalances — organizations with mature S&OP processes achieve 15-20% lower inventory carrying costs than those with ad-hoc planning. Monthly S&OP calendar: statistical forecast review (week 1), demand sensing update with commercial team (week 2), supply review and constraint identification (week 3), and executive S&OP meeting (week 4). Quarterly S&OP deep dive: 18-month rolling forecast review with capital implications, strategic capacity planning review, and new product introduction pipeline integration. Annual demand planning cycle: bottoms-up SKU-level annual plan (Q3), consensus forecast review (Q4 first half), final plan lock (Q4 second half). Forecast accuracy metrics: MAPE (Mean Absolute Percentage Error) and bias tracking by product family (monthly), root cause analysis for >15% MAPE outliers, and annual forecasting model refresh. Sales velocity and seasonal pattern library updates (annual). Momenties manages the full S&OP and demand planning calendar.",
  },
  {
    icon: RefreshCw,
    title: "Supplier Performance Reviews, Contract Renewals & Sourcing Calendar",
    description:
      "Supplier relationships without structured review cadences produce cost creep and quality degradation — procurement teams that conduct quarterly supplier scorecards identify performance issues 6-9 months earlier than teams using only annual reviews. Supplier performance review calendar: monthly scorecard for strategic suppliers (top 20% by spend or criticality), quarterly business review for preferred suppliers, and annual supplier summit with top 10 suppliers. Contract lifecycle management: 12-month advance trigger for strategic contracts (start renegotiation process), 6-month advance for preferred supplier contracts, and 3-month advance for standard vendor agreements. Annual sourcing strategy refresh: total cost of ownership analysis, make-versus-buy reviews, and geographic diversification assessment. RFP calendar: quarterly sourcing event planning (align RFPs to contract expiration pipeline), and strategic category RFP (18-24 month cycle for major categories). Supplier financial risk monitoring (quarterly for single-source suppliers, semi-annual for dual-source). Supplier diversity program reporting (annual — Tier 1 and Tier 2 spend reporting). Momenties schedules every sourcing and supplier review cycle.",
  },
  {
    icon: TrendingUp,
    title: "Inventory Optimization Reviews, Warehouse Efficiency & Working Capital Calendar",
    description:
      "Inventory without structured optimization cycles accumulates excess and obsolete stock — companies that review inventory segmentation quarterly average 12% lower E&O (excess and obsolete) write-downs than annual reviewers. Inventory review calendar: weekly fast-mover stockout risk review (ABC-XYZ analysis for top 20% SKUs), monthly safety stock recalculation (lead time variability updates, demand variability updates), quarterly inventory segmentation review (ABC classification refresh, slow-mover identification), and annual inventory policy reset (service level targets, min-max recalibration). Warehouse efficiency review: monthly productivity metrics (units per labor hour, dock-to-stock cycle time, order fill rate), quarterly layout optimization review, and annual warehouse capacity planning for next-year volume projections. Working capital optimization: monthly inventory days-on-hand versus target, quarterly cash conversion cycle review with finance, and annual working capital improvement initiative planning with CFO. 3PL performance review (monthly service level, quarterly business review, annual contract renegotiation). Momenties tracks every inventory and warehouse review cycle.",
  },
  {
    icon: BarChart3,
    title: "Logistics Contract Renewals, Supply Chain Risk & Sustainability Calendar",
    description:
      "Logistics networks without contract renewal calendars expose companies to spot market rates — transportation contracts caught at expiration without advance renegotiation pay 18-25% premium versus negotiated rates. Logistics contract calendar: 6-month advance trigger for TL/LTL carrier contracts (start RFP process), 4-month advance for parcel and last-mile contracts, 3-month advance for freight forwarding agreements, and 9-month advance for ocean container annual rate negotiations (ocean carriers set annual rates May-June for August-July periods). Supply chain risk review: quarterly geopolitical risk assessment (single-country concentration review, tariff exposure analysis), semi-annual business continuity plan test, and annual supply chain resilience audit. Supply chain sustainability reporting: CDP Supply Chain questionnaire response (annual, typically September-November deadline), Scope 3 supplier emissions data collection (annual, for GHG reporting), and supplier sustainability scorecard (semi-annual). Supply chain technology roadmap review (annual): ERP supply chain module assessment, demand sensing tool evaluation, and autonomous procurement AI assessment. Momenties consolidates the full supply chain operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Plan Lock & Supplier Summit Planning",
    description: "Lock annual demand plan and distribute to procurement and operations. Launch annual supplier summit invitations (6-month lead time for Q3 event). Run Q1 inventory segmentation review. Complete January S&OP cycle. Begin ocean freight annual rate negotiation preparation for August rates.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Supplier Reviews & Inventory Optimization",
    description: "Complete Q1 supplier scorecards and business reviews. Run Q1 sourcing RFP events for contracts expiring in Q3. Complete Q1 supply chain risk geopolitical review. Update safety stock calculations for Q2 seasonal demand patterns. Review 3PL Q1 performance against SLA.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Ocean Freight Negotiations & H1 Supply Chain Review",
    description: "Execute ocean carrier annual rate negotiations (May-June for August-July period). Conduct H1 supply chain performance review. Run supplier financial risk semi-annual review. Complete CDP supply chain questionnaire preparation. Begin ocean freight tender process if spot rates warrant.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Supplier Reviews & Working Capital Audit",
    description: "Complete Q2 supplier scorecards. Run semi-annual business continuity plan test. Complete H1 working capital review with CFO. Launch Q3 sourcing events for Q1 contract expirations. Update inventory policy for peak season demand.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Demand Planning Launch & Supplier Summit",
    description: "Launch annual bottoms-up demand planning process. Host annual strategic supplier summit. Complete Q3 supplier performance reviews. Run annual supply chain resilience audit. Begin CDP supply chain questionnaire response (September-November deadline). Start annual transportation RFP for year-ahead contract renewals.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual Plan Consensus & Contract Renewals",
    description: "Complete annual demand plan consensus review. Lock major logistics contracts for next year. Complete Q4 inventory segmentation and E&O review. Finalize supply chain sustainability supplier data collection. Deliver annual supply chain performance report to board.",
  },
]

const kpis = [
  {
    metric: "Forecast MAPE ≤ 15% Monthly",
    description: "Mean absolute percentage error on monthly demand forecast by product family; above 20% signals model or data quality issue requiring intervention",
  },
  {
    metric: "Inventory Days-on-Hand vs. Target ±10%",
    description: "Actual DOH versus policy DOH by segment; persistent excess signals poor demand planning or supplier lead time forecasting",
  },
  {
    metric: "Supplier On-Time Delivery ≥ 95%",
    description: "Percentage of purchase orders delivered on requested date; below 90% for strategic suppliers triggers business review escalation",
  },
  {
    metric: "Perfect Order Rate ≥ 98%",
    description: "Orders delivered on-time, complete, undamaged, with correct documentation; below 95% directly impacts customer satisfaction and NPS",
  },
  {
    metric: "Transportation Spend vs. Budget ≤ ±5%",
    description: "Freight cost variance versus annual budget; above +10% typically signals carrier rate or mode mix issue requiring contract review",
  },
  {
    metric: "E&O Inventory ≤ 3% of Total",
    description: "Excess and obsolete inventory as percentage of total inventory value; above 5% signals demand planning, new product introduction, or discontinuation process gaps",
  },
]

const testimonial = {
  quote:
    "Monthly S&OP cycles for 14,000 SKUs, quarterly supplier scorecards for 180 suppliers, ocean freight annual rate negotiations starting in May, annual parcel and TL carrier RFPs, 3PL monthly performance reviews, 6-month advance contract triggers across 240 supplier agreements, quarterly geopolitical risk reviews, semi-annual BCP tests, annual supplier summit, CDP supply chain questionnaire, Scope 3 emissions data collection from 80 suppliers, and inventory segmentation reviews — all tracked in spreadsheets and ERP exports. Momenties organized everything. Our forecast MAPE dropped from 22% to 14% in one year.",
  name: "Kwame S.",
  title: "VP Supply Chain & Operations, Global Consumer Products Company",
}

export default function SupplyChainOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Supply Chain Operations Calendar"
        title="S&OP Cycles. Supplier Reviews. Contract Renewals. One Calendar."
        subtitle="Momenties tracks monthly S&OP and demand planning cycles, quarterly supplier performance scorecards, logistics contract renewal pipelines with 3-9 month advance triggers, ocean freight annual negotiation windows, inventory optimization review cadences, supply chain risk assessments, BCP test schedules, and sustainability reporting deadlines so supply chain leaders run high-performing operations without planning gaps."
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
            Four Supply Chain Operations Pillars Momenties Tracks
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
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            12-Month Supply Chain Operations Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Supply Chain KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
