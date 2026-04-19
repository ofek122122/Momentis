import type { Metadata } from "next"
import { DollarSign, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Revenue Recognition Calendar | Momenties",
  description: "Build a systematic ASC 606 revenue recognition calendar — contract review cadence, variable consideration estimates, performance obligation close reviews, and audit preparation workflows that keep finance and sales aligned.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "ASC 606 Contract Review & Performance Obligation Cadence",
    description:
      "ASC 606 revenue recognition begins at contract inception — identifying performance obligations, transaction prices, and variable consideration before booking. Momenties schedules monthly contract review queues for deals over materiality thresholds, prompts SSP (standalone selling price) analysis for multi-element arrangements, and routes complex contracts to technical accounting review 30 days before period close. New deal structures (usage-based pricing, milestone-based contracts, customer options) trigger non-standard recognition pattern reviews automatically.",
  },
  {
    icon: RefreshCw,
    title: "Variable Consideration & Constraint Analysis Cycle",
    description:
      "Variable consideration — discounts, refunds, performance bonuses, usage-based revenue — requires quarterly probability-weighted estimates and constraint analysis under ASC 606. Momenties schedules the variable consideration estimation cycle 3 weeks before each quarter close, routes updates to technical accounting for constraint review, and maintains an audit trail of estimate methodology changes. SaaS companies with usage-based contracts get automated prompts as consumption data becomes available for recognition analysis.",
  },
  {
    icon: TrendingUp,
    title: "Period Close Revenue Calendar & Reconciliation Workflow",
    description:
      "Month-end and quarter-end revenue close require precise sequencing: deferred revenue roll-forward, contract asset reconciliation, SSP updates, and disclosure package preparation. Momenties builds a reverse-engineered close calendar from your reporting deadline — surfacing each task owner, due date, and predecessor dependency — and alerts controllers when upstream tasks fall behind schedule before the close window compresses. Commission capitalization (ASC 340-40) and customer acquisition cost reviews are scheduled quarterly.",
  },
  {
    icon: BarChart3,
    title: "Audit Preparation & Revenue Disclosure Reviews",
    description:
      "External audit preparation for revenue recognition requires organized documentation of significant judgments: variable consideration, contract modifications, principal vs. agent determinations, and bill-and-hold arrangements. Momenties schedules quarterly documentation reviews to ensure audit evidence stays current rather than scrambling at year-end. ASC 606 disclosure drafts are scheduled 6 weeks before fiscal year-end for review, and internal controls testing for revenue recognition is mapped to SOX calendar requirements.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Contract Portfolio Audit & Recognition Policy Refresh",
    description: "Audit existing contract portfolio for ASC 606 compliance gaps, refresh SSP analysis for all product and service lines, and document any contract modification accounting policy elections.",
  },
  {
    month: "Month 3",
    title: "Q1 Close & Variable Consideration Cycle",
    description: "Execute Q1 variable consideration estimates, complete deferred revenue roll-forward, finalize contract asset reconciliation, and prepare quarterly disclosure package for CFO and audit committee review.",
  },
  {
    month: "Month 4–5",
    title: "SSP Benchmarking & Usage-Based Revenue Review",
    description: "Run semi-annual standalone selling price analysis; review usage-based contract recognition methodology; update constraint analysis for any new deal structures added in Q1.",
  },
  {
    month: "Month 6",
    title: "H1 Close & Midyear Accounting Policy Review",
    description: "Execute H1 close with full ASC 606 disclosure package; run midyear accounting policy review for any new revenue streams; prepare audit committee revenue recognition update.",
  },
  {
    month: "Month 7–9",
    title: "Q3 Variable Consideration & Audit Prep Pre-Work",
    description: "Execute Q3 variable consideration cycle; begin preliminary audit documentation for year-end significant judgment memos; complete SOX control testing for revenue recognition processes.",
  },
  {
    month: "Month 10–12",
    title: "Year-End Close, Audit & Disclosure Finalization",
    description: "Execute year-end ASC 606 close; finalize audit documentation package for revenue recognition; complete annual disclosure drafts; conduct post-close retrospective to improve next-year close cadence.",
  },
]

const kpis = [
  {
    metric: "Close Cycle Time",
    target: "≤ 5 business days",
    description: "Days from period end to revenue close package completion — best-in-class SaaS finance teams close revenue in 3-5 days; above 8 days signals process inefficiency or data quality issues.",
  },
  {
    metric: "Audit Adjustment Rate",
    target: "Zero material adjustments",
    description: "Number of material revenue recognition audit adjustments — each adjustment signals a process breakdown in contract review, variable consideration estimation, or SSP analysis.",
  },
  {
    metric: "Contract Review Coverage",
    target: "100% above threshold",
    description: "Percentage of new contracts above materiality threshold receiving formal ASC 606 review before revenue booking — below 95% creates audit exposure and disclosure risk.",
  },
  {
    metric: "Deferred Revenue Accuracy",
    target: "≤ 0.5% variance",
    description: "Variance between deferred revenue roll-forward and general ledger balance — persistent variance above 1% indicates process breakdown in contract modification tracking.",
  },
  {
    metric: "SSP Analysis Currency",
    target: "Refreshed semi-annually",
    description: "Age of standalone selling price analysis for each performance obligation — SSPs older than 12 months create audit risk and may not reflect current pricing in the market.",
  },
  {
    metric: "Variable Consideration Estimate Accuracy",
    target: "Within ±3% of actuals",
    description: "Variance between quarterly variable consideration estimates and final settled amounts — tracks estimation methodology quality and identifies contracts requiring tighter monitoring.",
  },
]

const testimonial = {
  quote:
    "We were spending the last 10 days of every quarter in a revenue recognition scramble — SSP updates, variable consideration estimates, and contract reviews all happening at once. Momenties moved all the pre-work 3 weeks earlier. Our close dropped from 9 days to 4, we had zero audit adjustments for the first time, and the CFO stopped asking for status updates.",
  name: "Ngozi T.",
  title: "VP Controller, Pre-IPO SaaS",
}

export default function RevenueRecognitionCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Revenue Recognition Calendar"
        title="Close Revenue in 4 Days. Zero Audit Adjustments."
        subtitle="A structured ASC 606 calendar that moves contract reviews, variable consideration estimates, and SSP analysis 3 weeks before period close — so your team stops scrambling and starts shipping accurate numbers on time."
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
            Four Systems That Make ASC 606 Compliance Systematic
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
            Your Annual Revenue Recognition Calendar
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
            KPIs That Define Revenue Recognition Excellence
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
