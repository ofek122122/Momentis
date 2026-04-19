import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sales Operations Calendar | Momenties",
  description: "Momenties helps sales operations leaders track quota setting cycles, CRM hygiene reviews, sales capacity planning, territory design cadences, and revenue reporting in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Quota Setting Cycles & Sales Capacity Planning Calendar",
    description:
      "Quota setting without a structured annual calendar produces quota misses, rep attrition, and board credibility problems — and the cascade starts 6 months before the quota year begins. Annual quota planning cycle: Q3 bottoms-up rep capacity modeling (ramp curves, attrition assumptions, headcount plan), Q3 top-down revenue target alignment with finance, Q3 territory and account assignment design, Q4 quota finalization and rep communication (best practice: quotas communicated before December 31 for January year-starts). Mid-year quota adjustments — triggered by M&A, product launches, or territory changes — require governance workflows with VP Sales, CFO, and legal approval. Compensation plan design cycle (Q3, parallel to quota setting) requires legal review, HR alignment, and board compensation committee approval for VP+ plans. Momenties manages every quota milestone.",
  },
  {
    icon: RefreshCw,
    title: "CRM Hygiene Reviews, Pipeline Quality & Forecast Governance",
    description:
      "CRM data quality without scheduled review cycles decays within 90 days — leading to inaccurate forecasts, missed renewal alerts, and broken marketing attribution. Weekly CRM hygiene enforcement: rep-level pipeline coverage ratios (3x for segment, 4x for enterprise), opportunity stage progression rules, and close date accuracy audits. Monthly pipeline quality reviews: stage conversion rates by rep and segment, average deal velocity against plan, and churn signal identification from health scores. Quarterly forecast cadence governance: methodology review (bottom-up vs. AI-assisted forecast comparison), confidence band calibration against actuals, and scenario planning (best/base/worst) review with CFO. Annual CRM audit: field usage compliance, deduplication, and integration health with marketing automation and customer success platforms. Momenties schedules every review.",
  },
  {
    icon: TrendingUp,
    title: "Territory Design Reviews & Sales Segmentation Calendar",
    description:
      "Territory design requires structured annual reviews to prevent coverage drift — under-penetrated territories, rep capacity mismatches, and account assignment conflicts accumulate over time and suppress attainment. Annual territory design cycle (Q3, parallel to quota): TAM analysis by segment, geographic coverage modeling, and named account assignment governance. Quarterly territory exception reviews (reps requesting account transfers, new logo assignment disputes, channel conflict resolution) require standing governance meetings with Sales VP and Operations. ICP (Ideal Customer Profile) update cycle (bi-annual) refreshes firmographic scoring models with product and CS data — triggering segment reassignment and CRM scoring updates. Account health scoring model refresh (quarterly) integrates product usage, support ticket volume, and contract renewal probability. Momenties tracks every territory review cycle.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics Reporting, Tool Stack Reviews & Sales Ops Governance",
    description:
      "Sales operations analytics reporting — win/loss rates by stage and competitor, rep attainment distribution, sales cycle length by segment and deal size, and pipeline generation by source — requires weekly automated dashboards and monthly leadership reporting. CRO/VP Sales QBR preparation (quarterly) requires 2-week data compilation window: waterfall analysis, rep-level drill-downs, and competitive intelligence integration. Annual sales toolstack review: assessing ROI of each sales tool (Outreach, Gong, ZoomInfo, Clari, Seismic), consolidation opportunities, and contract renewal negotiations (starting 90 days before expiration). RevOps governance calendar: monthly cross-functional revenue reviews (Sales, Marketing, CS), quarterly RevOps architecture reviews, and annual GTM motion assessment. Momenties consolidates the full sales operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "New Year Quota Activation & CRM Reset",
    description: "Activate new fiscal year quotas and territories. Run January CRM hygiene sprint. Launch new compensation plan communication. Establish H1 pipeline coverage targets. Set annual revenue reporting baselines.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Close & Forecast Calibration",
    description: "Support Q1 close operations. Run post-Q1 win/loss analysis. Calibrate forecast model against Q1 actuals. Begin H1 territory exception review. Run first CRO QBR preparation cycle.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year Pipeline Review & Tool Stack Assessment",
    description: "Conduct mid-year pipeline quality deep-dive. Run semi-annual ICP refresh. Begin annual sales tool stack review and ROI analysis. Prepare H2 capacity modeling. Run bi-annual competitive win/loss review with Sales leadership.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q3 Quota Planning Kickoff & Territory Design",
    description: "Launch next-year quota planning process. Complete TAM analysis and territory design for next fiscal year. Begin compensation plan design cycle. Run Q3 CRM audit. Refresh account health scoring model.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Quota Finalization & Comp Plan Governance",
    description: "Finalize next-year quotas with finance sign-off. Complete compensation plan legal and HR review. Begin rep-level quota communication preparation. Run Q3 win/loss review. Negotiate renewals for sales tool contracts expiring Q1.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Close Support & Next-Year Readiness",
    description: "Support year-end close operations. Communicate final quotas and territories to reps before December 31. Complete annual RevOps architecture review. Run full-year revenue analytics retrospective. Lock next-year sales operations calendar.",
  },
]

const kpis = [
  {
    metric: "Quota Attainment Distribution 50-70% at 100%+",
    description: "Percentage of reps achieving quota; below 40% signals quota accuracy issue, above 80% signals under-quota",
  },
  {
    metric: "Pipeline Coverage Ratio ≥ 3x at Quarter Start",
    description: "Beginning-of-quarter pipeline versus quota; below 2.5x is a leading indicator of a missed quarter",
  },
  {
    metric: "Forecast Accuracy ±10% of Actuals",
    description: "Variance between called forecast and final quarterly bookings, measured over rolling 4 quarters",
  },
  {
    metric: "CRM Data Quality Score ≥ 90%",
    description: "Percentage of open opportunities with complete required fields and accurate close dates",
  },
  {
    metric: "Sales Cycle Length Flat or Declining",
    description: "Average days from opportunity creation to close, segmented by deal size and ICP tier",
  },
  {
    metric: "Win Rate ≥ 25% from Stage 2",
    description: "Percentage of opportunities advancing past Stage 2 that close as won, by segment and rep",
  },
]

const testimonial = {
  quote:
    "Annual quota planning starting in Q3, Q3 territory design, compensation plan governance, monthly CRM hygiene sprints, quarterly forecast calibration reviews, four QBR prep cycles, annual tool stack review, mid-year ICP refresh, and monthly RevOps cross-functional reviews — all managed in Salesforce reports and spreadsheets. Momenties organized everything. Our Q1 forecast accuracy improved from 78% to 94% after implementing structured review cadences.",
  name: "Kwame T.",
  title: "VP, Revenue Operations, Series C SaaS — $60M ARR",
}

export default function SalesOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Sales Operations Calendar"
        title="Quota Planning. Pipeline Reviews. Forecast Governance. One Calendar."
        subtitle="Momenties tracks annual quota setting and territory design cycles, weekly CRM hygiene reviews, monthly pipeline quality sessions, quarterly forecast governance meetings, sales tool stack reviews, and RevOps cross-functional cadences so sales operations leaders keep revenue predictable."
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
            Four Sales Operations Pillars Momenties Tracks
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
            12-Month Sales Operations Calendar
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
            Sales Operations KPIs Momenties Keeps on Track
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
