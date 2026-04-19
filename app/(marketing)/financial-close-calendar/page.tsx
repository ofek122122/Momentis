import type { Metadata } from "next"
import { DollarSign, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Financial Close Calendar | Momenties",
  description: "Build a systematic financial close calendar — month-end close checklists, accrual review cycles, financial statement preparation timelines, external audit coordination, and close efficiency programs that reduce close time and eliminate last-minute surprises.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "Month-End Close Checklists & Hard Close Calendar",
    description:
      "Financial close processes without a structured checklist calendar produce inconsistent close quality — preparers skip steps under deadline pressure, reviewers receive incomplete packages, and errors discovered after financial statements are distributed require restatements. Momenties schedules the complete month-end close task calendar: Day 1-2 bank reconciliations and cash sweep verification, Day 2-3 accounts receivable aging and accrual bookings, Day 3-4 accounts payable cutoff review and accrued liabilities, Day 4-5 fixed asset depreciation and intercompany eliminations, Day 5-6 revenue recognition entries and deferred revenue reconciliation, Day 6-7 financial statement preparation and variance analysis. Hard close deadlines — driven by board reporting schedules, covenant reporting requirements, or investor update commitments — are locked with owner assignments and reviewer approval gates. Momenties manages the complete close sequence.",
  },
  {
    icon: RefreshCw,
    title: "Accrual Review Cycles & Revenue Recognition Governance",
    description:
      "Accruals managed without a governance cadence drift into incorrect estimates — bonus accruals that don&apos;t track actual payout formulas, warranty reserves built on stale assumptions, and revenue recognition entries that accumulate errors in complex contract structures. Momenties schedules monthly accrual reasonableness reviews (comparing accrual balances to actual payment history and updated business assumptions), quarterly accrual true-up processes (adjusting material accruals based on updated forecasts and recent actuals), and annual accrual policy reviews (auditing all significant accrual categories against GAAP guidance and current business conditions). Revenue recognition governance — ASC 606 contract review schedules for complex multi-element arrangements, deferred revenue roll-forward validation, and SSP analysis updates — are managed with timing aligned to contract renewal cycles. Intercompany elimination schedules are reconciled monthly with automated mismatch alerts.",
  },
  {
    icon: TrendingUp,
    title: "External Audit Coordination & Board Financial Reporting Calendar",
    description:
      "External audits become chaotic when audit preparation is reactive — PBC lists arrive without preparation time, auditor requests disrupt close team workflows, and key schedules are built under pressure. Momenties schedules audit preparation activities 90 days before audit start (field work calendar, PBC list distribution, audit committee presentation prep), interim audit periods (walkthroughs, substantive testing, and management letter response drafts), and year-end audit completion milestones (opinion delivery, financial statement filing, and management representation letter). Board financial reporting calendars — monthly package for audit committee, quarterly for full board, annual for external investors — are managed with 5-day preparation windows before each meeting. SEC filing deadline calendars (10-K, 10-Q, 8-K, Proxy Statement) are tracked with 45-day extension procedures where applicable.",
  },
  {
    icon: BarChart3,
    title: "Close Efficiency Programs & Financial Reporting Quality Metrics",
    description:
      "Close processes measured only by close day number miss the quality dimensions that matter — a 3-day close with 40 journal entry errors is worse than a 7-day close with none. Momenties schedules monthly close quality retrospectives (reviewing JE error rates, reclass counts, and auditor adjustments from prior period), quarterly close efficiency improvement sprints (identifying bottlenecks through process mapping and root cause analysis), and annual close process benchmarking reviews (comparing close days, FTE hours, and error rates against industry peer data). Balance sheet review cadences — detailed analytical review of each balance sheet account against prior period and forecast — are managed quarterly with variance explanations documented before board reporting. Financial controls self-assessment (FCSA) for SOX 302/404 certifications is managed with quarterly control testing documentation requirements.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Close Audit & Calendar Architecture",
    description: "Map current close process timing, bottlenecks, and error patterns; build month-end close task calendar with owner assignments; implement hard close deadlines aligned to reporting schedule; establish accrual review governance; create board financial reporting calendar with preparation windows.",
  },
  {
    month: "Month 3",
    title: "Close Checklist Implementation & Accrual Governance Launch",
    description: "Launch structured month-end close checklist with approval gates; implement monthly accrual reasonableness reviews; establish revenue recognition governance calendar; run first close quality retrospective; implement balance sheet analytical review cadence.",
  },
  {
    month: "Month 4–5",
    title: "Audit Preparation Program & Reporting Quality Measurement",
    description: "Launch 90-day audit preparation calendar for year-end audit; implement JE error rate tracking; run first close efficiency improvement sprint; establish board reporting preparation windows; implement intercompany reconciliation monitoring.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Close Performance Review",
    description: "Present mid-year close performance metrics (close days trend, error rates, accrual accuracy); review H1 audit readiness status; run mid-year FCSA control testing; assess revenue recognition governance effectiveness; update close calendar for H2 business changes.",
  },
  {
    month: "Month 7–9",
    title: "Year-End Audit Preparation & SOX Compliance",
    description: "Launch year-end audit preparation (PBC list distribution, walkthrough scheduling); complete quarterly SOX 302/404 control testing documentation; run semi-annual accrual policy review; complete close process benchmarking against industry peers; run balance sheet analytical review.",
  },
  {
    month: "Month 10–12",
    title: "Year-End Close & Annual Close Program Review",
    description: "Execute year-end hard close calendar; coordinate external audit field work; present annual close program review (close day trend, quality improvement, audit cost efficiency); finalize next-year close calendar with board meeting schedule alignment; run annual accrual policy update.",
  },
]

const kpis = [
  {
    metric: "Days to Close",
    target: "≤ 5 business days",
    description: "Calendar days from period end to financial statement completion — above 10 days indicates process bottlenecks or resource constraints; best-in-class mid-market companies achieve 3-5 day closes through automation and parallel processing; track trend year-over-year.",
  },
  {
    metric: "Journal Entry Error Rate",
    target: "≤ 0.5% of JEs reclassed",
    description: "Percentage of journal entries requiring post-approval reclassification or reversal — above 2% indicates preparer training problems or inadequate reviewer oversight; auditor-proposed adjustments above $50K in aggregate signal material error patterns.",
  },
  {
    metric: "Accrual True-Up Rate",
    target: "≤ 5% variance to actual",
    description: "Average variance between accrual estimates and actual payments for the top 10 accrual categories — above 10% variance consistently indicates model assumptions are stale or business conditions have changed without accrual updates.",
  },
  {
    metric: "Board Package On-Time Delivery",
    target: "100% delivered on schedule",
    description: "Percentage of board and audit committee financial packages delivered by the committed deadline — any late delivery impairs board preparation and creates reputational risk; track days-in-advance for each package to identify close process bottlenecks.",
  },
  {
    metric: "Audit Adjustment Magnitude",
    target: "≤ 1% of net assets",
    description: "Total auditor-proposed adjustments as a percentage of net assets — above 2% in aggregate indicates systematic close process quality failures; track adjustments by category to identify recurring error patterns requiring control improvements.",
  },
  {
    metric: "SOX Control Testing Completion",
    target: "100% by quarterly deadline",
    description: "Percentage of SOX 302/404 control tests completed by quarterly certification deadline — any incomplete control test creates a disclosure deficiency; track test completion rate 30 days before certification deadline to identify at-risk controls.",
  },
]

const testimonial = {
  quote:
    "Close was taking 14 business days, auditors proposed $2.3M in adjustments, board packages were consistently 2-3 days late, and we were doing quarterly SOX documentation as a fire drill. Momenties gave us a structured financial close calendar. We&apos;re now at 6 days to close, audit adjustments dropped to $180K, and the board package has been delivered on time every month for 18 months.",
  name: "Adaora B.",
  title: "VP Finance and Controller, Series D Manufacturing",
}

export default function FinancialCloseCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Financial Close Calendar"
        title="6-Day Close. $180K Audit Adjustments. Board Packages On Time."
        subtitle="A systematic financial close calendar with month-end close checklists, accrual governance cycles, revenue recognition reviews, external audit coordination timelines, SOX control testing schedules, and board reporting preparation cadences that reduce close time and eliminate financial reporting surprises."
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
            Four Systems That Build Financial Close Excellence
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
            Your 12-Month Financial Close Optimization Roadmap
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
            KPIs That Define Financial Close Program Maturity
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
