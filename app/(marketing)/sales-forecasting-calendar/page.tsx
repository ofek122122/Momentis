import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sales Forecasting Calendar | Momenties",
  description: "Build a systematic sales forecasting calendar — weekly forecast review cadences, pipeline inspection cycles, commit culture enforcement rhythms, and forecast accuracy accountability programs that deliver ±5% forecast accuracy every quarter.",
}

const pillars = [
  {
    icon: Target,
    title: "Weekly Forecast Reviews & Pipeline Inspection Cadence",
    description:
      "Sales forecast accuracy is a lagging indicator of pipeline inspection discipline — not a gift from Excel. Momenties schedules the complete forecast management calendar: Monday pipeline hygiene sessions (stage advancement, close date accuracy, deal health scoring), Wednesday forecast reviews (bottom-up rep submissions, manager roll-ups, deal-by-deal inspection for commit and best-case categories), and Friday leadership forecast calls (final weekly commit, variance from prior call analysis, late-stage deal status). Pipeline inspection templates — triggered at each deal stage with qualification checklist and next-step ownership — prevent deals from aging in-stage without movement.",
  },
  {
    icon: RefreshCw,
    title: "Quarterly Planning Cadence & Quota Setting Calendar",
    description:
      "Quota setting done in the last two weeks of a quarter produces quotas that are either too easy (protecting from last quarter&apos;s miss) or too aggressive (anchored to board pressure). Momenties schedules the full quota setting calendar: capacity planning 10 weeks before quarter start, territory design 8 weeks out, quota modeling and scenario analysis 6 weeks out, manager review and appeals 4 weeks out, and quota letter distribution 3 weeks before quarter start. Ramp schedule documentation for new hires, quota relief policies for unexpected territory changes, and mid-year quota adjustments are managed with owner-assigned approval workflows.",
  },
  {
    icon: TrendingUp,
    title: "CRM Hygiene Enforcement & Data Quality Calendar",
    description:
      "Forecast accuracy is directly proportional to CRM data quality — and CRM data quality decays daily without enforcement. Momenties schedules weekly CRM hygiene audits (deals without next steps, close dates in the past, opportunities without recent activity), bi-weekly pipeline reviews where managers certify stage and close date accuracy for their segment, and quarterly data quality assessments scoring CRM completeness across all required fields. Automated alerts — triggered when close dates are pushed more than 14 days without a logged reason, or when commit-stage deals go 7 days without activity — are managed in the same calendar system as human review cycles.",
  },
  {
    icon: BarChart3,
    title: "Forecast Accuracy Accountability & Revenue Operations Reviews",
    description:
      "Forecast accuracy without accountability improves nothing. Momenties schedules monthly forecast accuracy reviews comparing submitted commits to actual attainment by rep, manager, and segment — identifying systematic biases (reps who chronically over-commit, segments that consistently miss). Quarterly revenue operations reviews where the forecast methodology itself is evaluated — pipeline coverage ratios, stage conversion rates, average sales cycle length, and win rate by segment — are scheduled 2 weeks before board meetings. Annual sales forecasting methodology reviews where the forecast model is recalibrated against 12 months of actuals are built into the fiscal year planning calendar.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Forecast Process Audit & Calendar Architecture",
    description: "Audit current forecast accuracy (commit vs. close), CRM data quality, and review cadence; design forecast review calendar; implement CRM hygiene enforcement; establish baseline pipeline coverage ratios by segment.",
  },
  {
    month: "Month 3",
    title: "Weekly Forecast Rhythm Launch & Rep Training",
    description: "Launch structured weekly forecast review cadence; train reps on commit vs. best-case definitions; implement deal health scoring; run first forecast accuracy accountability review.",
  },
  {
    month: "Month 4–5",
    title: "Pipeline Inspection Discipline & CRM Data Quality Sprint",
    description: "Implement bi-weekly manager pipeline certification; run CRM data quality sprint (fixing stale deals, missing fields, outdated close dates); establish pipeline coverage ratio targets by segment.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Forecast Accuracy Review & Methodology Assessment",
    description: "Run comprehensive forecast accuracy analysis (rep-level, manager-level, segment-level); identify systematic biases; recalibrate stage weighting and coverage ratio targets; adjust Q3-Q4 forecast process.",
  },
  {
    month: "Month 7–9",
    title: "Quota Setting Process for Next Fiscal Year",
    description: "Launch next fiscal year quota planning process; complete capacity planning, territory design, and quota modeling; distribute quota letters 3 weeks before Q1 start; finalize ramp schedules for planned new hires.",
  },
  {
    month: "Month 10–12",
    title: "Annual Forecast Model Recalibration & Q1 Planning",
    description: "Recalibrate forecast model against full-year actuals; update stage conversion rates, average sales cycle, and win rate benchmarks; lock Q1 forecast cadence calendar; present annual forecast accuracy report.",
  },
]

const kpis = [
  {
    metric: "Forecast Accuracy",
    target: "Within ±5% of commit",
    description: "Variance between weekly committed forecast and actual quarter-end attainment — above ±10% variance signals either sandbagging or chronic over-commitment; ±5% is achievable with disciplined pipeline management.",
  },
  {
    metric: "Pipeline Coverage Ratio",
    target: "3× quota at quarter start",
    description: "Total pipeline value relative to quota at start of quarter — below 2.5× at quarter start predicts quota miss with 80% accuracy; below 2× makes attainment mathematically improbable without extraordinary luck.",
  },
  {
    metric: "CRM Data Completeness",
    target: "≥ 95% required fields",
    description: "Percentage of active opportunities with all required CRM fields populated — below 80% completeness means forecast models are operating on incomplete data and accuracy suffers systematically.",
  },
  {
    metric: "Forecast Submission Compliance",
    target: "100% by Wednesday noon",
    description: "Percentage of reps submitting weekly forecast by the established deadline — below 85% submission rate signals process breakdown that cascades into inaccurate leadership roll-ups.",
  },
  {
    metric: "Stage Conversion Rate Accuracy",
    target: "Within 5% of model",
    description: "Actual stage-to-close conversion rates vs. model assumptions — significant divergence (over 10%) indicates qualification criteria drift or competitive dynamics have changed, requiring model recalibration.",
  },
  {
    metric: "Commit Attainment Rate",
    target: "≥ 85% of submitted commit",
    description: "Percentage of deals in commit stage that close in the committed quarter — below 70% commit attainment indicates commit definition is too loose or deal inspection is insufficient before commit.",
  },
]

const testimonial = {
  quote:
    "We were missing forecast by 20-30% every quarter — sometimes over, sometimes under. The board had lost confidence in our revenue predictions. Momenties gave us a weekly forecast discipline that we actually maintained. Within two quarters we were within 5% of commit every week, and the board finally trusted our numbers again.",
  name: "Taiwo O.",
  title: "CRO, Series C Enterprise SaaS",
}

export default function SalesForecastingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Sales Forecasting Calendar"
        title="±5% Forecast Accuracy. 3× Pipeline Coverage. Board-Ready Numbers."
        subtitle="A systematic sales forecasting calendar with weekly pipeline inspection cadences, commit culture enforcement rhythms, CRM data quality programs, and forecast accuracy accountability cycles that deliver consistent revenue predictability every quarter."
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
            Four Systems That Build Forecast Excellence
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
            Your 12-Month Sales Forecasting Roadmap
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
            KPIs That Define Sales Forecast Excellence
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
