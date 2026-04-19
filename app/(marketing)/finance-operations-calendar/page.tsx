import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Finance Operations Calendar | Momenties",
  description: "Momenties helps VP Finance and finance ops leaders track month-end close cycles, FP&A planning cadences, treasury and cash management reviews, AP/AR process optimization, and finance team development in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Month-End Close Cycles & Finance Calendar Governance",
    description:
      "Finance operations calendars run on the close — and close cycles that lack structured planning calendars accumulate errors, create last-minute crises, and produce unreliable financial statements. Monthly close calendar: T+0 (cutoff day activities — AP cutoff, payroll accrual, revenue recognition sign-off), T+1 through T+5 (journal entry processing, balance sheet reconciliations, variance analysis), T+5 or earlier (management reporting package distribution). Close efficiency metrics — days to close trend, JE error rate, reconciliation completion rate — require monthly tracking. Quarter-end close adds additional layers: equity rollforward, tax provision accrual, and external audit PBC (provided by client) list preparation. Year-end close requires 12-16 week coordination with external auditors from audit kickoff through financial statement sign-off. Momenties manages the complete close calendar.",
  },
  {
    icon: RefreshCw,
    title: "FP&A Planning Cadence, Reforecast Cycles & Board Reporting Calendar",
    description:
      "Financial planning and analysis programs require structured annual planning cadences to produce reliable forecasts and business intelligence. Annual operating plan (AOP) calendar: September bottoms-up departmental submissions, October cross-functional review, November board presentation, December board approval — with each stage requiring 1-2 week preparation windows. Monthly reforecast cycles: actuals analysis (week 1), variance investigation (week 2), forecast update with department input (week 3), and management review (week 4). Quarterly board package preparation (4-6 week production cycle) includes financial statements, MD&A narrative, KPI dashboard, and capital allocation recommendations. Annual long-range plan (LRP, 3-5 year model) requires Q3 strategy alignment and Q4 board presentation. Momenties schedules every planning and reporting milestone.",
  },
  {
    icon: TrendingUp,
    title: "Treasury, Cash Management & Working Capital Optimization Calendar",
    description:
      "Treasury operations require continuous calendar discipline: daily cash position reporting, weekly 13-week rolling cash flow forecast updates, and monthly variance analysis against 13-week forecast actuals. Banking relationship reviews (annual) — reviewing fee schedules, credit facility terms, and yield optimization on operating and reserve accounts — require 6-8 weeks of data preparation. Debt covenant compliance reporting (quarterly, per credit agreement terms) must be delivered within the specified timeframe after quarter-end. Interest rate risk reviews (quarterly) assess floating rate debt exposure and hedging program effectiveness. Foreign exchange risk reviews (monthly for companies with >10% international revenue) assess FX exposure and hedging efficiency. Annual insurance program renewal (property, D&O, cyber, E&O) requires 90-day lead time for broker engagement. Momenties tracks every treasury obligation.",
  },
  {
    icon: BarChart3,
    title: "AP/AR Process Optimization, Audit Readiness & Finance Team Development",
    description:
      "Finance operations optimization programs require structured review cadences: quarterly AP process reviews (vendor payment terms optimization, early payment discount capture rates, P-card program utilization), quarterly AR reviews (DSO trend, dispute resolution cycle times, bad debt reserve adequacy), and annual ERP system health review (chart of accounts cleanup, automation opportunity assessment, integration health). SOX (Sarbanes-Oxley) compliance for public companies — or SOX-readiness for pre-IPO companies — requires quarterly management testing of key controls and annual external auditor testing. Finance team career development: monthly 1:1 development reviews, quarterly skill gap assessments, and annual CPA/CFA exam support program coordination. Finance team headcount and capacity planning aligns with FP&A workload and close complexity. Momenties consolidates the full finance operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Year-End Close & Annual Finance Calendar Design",
    description: "Complete year-end audit coordination and financial statement sign-off. Distribute year-end financial statements to stakeholders. Design annual finance operations calendar. Communicate close calendar to department heads. Set annual finance team OKRs and close efficiency targets.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Close & AP/AR Process Review",
    description: "Execute Q1 close on schedule. Complete Q1 board package preparation. Run quarterly AP process review and vendor terms analysis. Review Q1 DSO trend and AR aging. Conduct first quarterly SOX controls testing (if applicable).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Finance Review & Banking Relationship Assessment",
    description: "Conduct H1 financial performance review with executive team. Run semi-annual 13-week cash flow model accuracy audit. Review banking fee schedules and credit facility terms. Complete Q2 board package. Begin mid-year reforecast cycle.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Close & Annual Audit Planning",
    description: "Execute Q2 close and board reporting. Kick off annual audit planning with external auditors. Run Q3 SOX controls testing. Review insurance program renewal requirements (if Q4 renewal). Complete annual ERP system health review.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "AOP Planning Launch & Long-Range Plan",
    description: "Launch annual operating plan process with departmental submissions. Begin 3-5 year long-range planning model. Complete Q3 close and board package. Run AR reserves adequacy review ahead of year-end. Review debt covenant compliance reporting for Q3.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "AOP Finalization, Board Approval & Year-End Prep",
    description: "Complete AOP review and board approval. Distribute finalized budgets to department heads. Prepare year-end close calendar and audit PBC list. Complete annual insurance program renewal. Lock finance team headcount and development plans for next year.",
  },
]

const kpis = [
  {
    metric: "Days to Close ≤ 5 Business Days",
    description: "Management reporting package distribution within 5 business days of month end, every month",
  },
  {
    metric: "Forecast Accuracy ±5% of Month Actuals",
    description: "Variance between reforecast and actual results, measured monthly over rolling 12 months",
  },
  {
    metric: "AR DSO Flat or Declining",
    description: "Days sales outstanding trend; above 50 days for SaaS signals collection process issues",
  },
  {
    metric: "AP Process Automation ≥ 70%",
    description: "Percentage of invoices processed through automated matching versus manual intervention",
  },
  {
    metric: "SOX Key Control Deficiencies = 0",
    description: "Zero material weaknesses or significant deficiencies in quarterly and annual SOX testing",
  },
  {
    metric: "Covenant Headroom ≥ 20% on All Covenants",
    description: "Buffer between actual financial metrics and covenant thresholds, reported quarterly",
  },
]

const testimonial = {
  quote:
    "Monthly close calendar management across eight departments, quarterly board packages with 4-week production cycles, annual AOP planning from September to board approval in December, external audit coordination, quarterly debt covenant compliance reporting, annual banking review, AP/AR quarterly process reviews, and insurance renewals — all tracked in spreadsheets and email. Momenties organized everything. We hit days-to-close of 4 days for the first time in company history.",
  name: "Chidinma T.",
  title: "VP Finance & Head of Financial Operations, Series D SaaS",
}

export default function FinanceOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Finance Operations Calendar"
        title="Month-End Close. FP&A Planning. Audit Readiness. One Calendar."
        subtitle="Momenties tracks month-end close cycles with department-level cutoff dates, FP&A reforecast cadences, board package production timelines, annual operating plan milestones, treasury and covenant reporting obligations, AP/AR optimization reviews, and external audit coordination so finance operations leaders close faster and forecast better."
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
            Four Finance Operations Pillars Momenties Tracks
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
            12-Month Finance Operations Calendar
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
            Finance Operations KPIs Momenties Keeps on Track
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
