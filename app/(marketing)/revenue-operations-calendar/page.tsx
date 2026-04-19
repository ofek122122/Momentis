import type { Metadata } from "next"
import { BarChart3, RefreshCw, Target, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Revenue Operations Calendar | Momenties",
  description: "Build a revenue operations calendar with data hygiene sprints, forecasting review cadences, tech stack audits, territory planning cycles, and monthly RevOps performance reviews that improve forecast accuracy and accelerate revenue.",
}

const pillars = [
  {
    icon: BarChart3,
    title: "Pipeline & Forecast Review Cadence",
    body: "RevOps forecast accuracy determines whether your CEO trusts the number. Weekly forecast review: rolling 4-week forecast (close date ≤28 days), stage-weighted pipeline value (commit vs best case vs pipeline CE — Salesforce forecast categories), coverage ratio review (qualified pipeline ÷ quota — target 3-4× for enterprise, 5-6× for SMB). Deal inspection cadence: Monday morning forecast call — CRO reviews top 10 deals by ARR, stage movement since last week, close date slippage flag (deals where close date moved ≥2 weeks in either direction), MEDDIC/SPICED completeness score. Forecast model review quarterly: compare your roll-up forecast vs weighted pipeline vs AI-predicted forecast — calibrate weighting by rep tenure, deal type, segment. Stage conversion rate analysis: monthly review of stage-to-stage conversion by segment, product, and rep — identifies pipeline quality degradation 4-6 weeks before quota misses. Scenario planning: monthly best case / commit / pipeline scenario — revenue range to board. Historicalcomparison: rolling 12-month comparison of forecast accuracy (commit accuracy target: ±5% of actuals). Momenties schedules every forecast review, deal inspection, and accuracy audit.",
  },
  {
    icon: RefreshCw,
    title: "CRM Data Hygiene & Process Compliance Sprints",
    body: "CRM data quality is the foundation of every RevOps metric — bad data produces wrong forecasts, broken attribution, and missed signals. Data hygiene sprint cadence: weekly automated data quality report (empty required fields, duplicate contacts, closed/won deals missing ARR or close date, opportunities with no activity in 14 days), monthly manual hygiene sprint (remove test/demo accounts, merge duplicates, fix company domain mismatches), quarterly deep-clean (re-validate lead source attribution, re-map territory assignments, archive 18+ month dormant prospects). Required field compliance: opportunity stage entry requirements enforced by CRM workflow (cannot advance without MEDDIC fields at stage 3 CE). Contact coverage: every account with ≥1 opportunity must have ≥3 contacts (champion, economic buyer, technical buyer) — audit monthly. Activity logging compliance: reps log ≥80% of meetings in CRM within 24 hours — track per rep weekly. Reporting accuracy: test top 3 board dashboards against raw data monthly — dashboard/reality divergence caught before board meeting. Momenties schedules data hygiene sprints and compliance audit dates automatically.",
  },
  {
    icon: Target,
    title: "Territory Planning, Quota Setting & Compensation Calendar",
    body: "Annual territory planning calendar: territory design review — September (15 weeks before new fiscal year start), finalized by November 1. ICP scoring refresh: quarterly TAM remodel (new company funding rounds, headcount changes, tech stack signals), territory rebalance when rep AE count changes ≥15% from target. Quota setting process: quota model built from top-down (board ARR target) and bottom-up (rep capacity × activity benchmarks × pipeline coverage ratio) — reconcile delta October-November. Quota publication: December 1 (minimum 30 days before fiscal year — 60 days best practice). Comp plan design calendar: compensation plan renewal Q4 (finalize November, publish December 1), accelerators and SPIFFs designed for Q1-Q2 soft periods. Mid-year quota revision process: RevOps + CRO review at end of Q2 — criteria for adjustment (market contraction ≥15%, major product pivot, rep ramp undercount). Territory conflict resolution: SLA — RevOps resolves territory disputes within 5 business days (escalation path: AE → manager → CRO → RevOps final adjudication). Momenties schedules territory planning milestones, quota publication, and comp plan approval deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Tech Stack Audits, Attribution Reviews & RevOps Metrics",
    body: "Quarterly tech stack audit: review every tool in the revenue stack (CRM, SEP, intent data, conversation intelligence, CPQ, billing) — is each tool used by ≥60% of intended users? Cost per user, integration health, contract renewal dates. Contract renewal calendar: flag every SaaS contract 90 days before renewal for ROI review (retain / renegotiate / cancel). Attribution model review: quarterly multi-touch attribution review — first touch vs last touch vs linear vs time-decay attribution comparison. Campaign attribution coverage: ≥90% of opportunities must have a source attributed — audit monthly. Lead routing audit: quarterly review of lead routing rules in CRM/SEP — stale round-robin weights, missing assignment rules for new territories. Monthly RevOps metrics review: forecast accuracy %, pipeline coverage ratio, stage conversion rates by segment, CRM data quality score, attribution completeness %, tech stack adoption %. Quarterly RevOps retrospective: which process changes improved forecast accuracy, which data initiatives reduced hygiene burden, what territory change improved pipe distribution. Annual RevOps benchmark: compare your forecast accuracy, pipeline coverage, and win rate vs industry medians (Gartner/Forrester/Clari benchmarks). Momenties generates monthly RevOps scorecards from your CRM integration.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Baseline & Data Audit", description: "Baseline CRM data quality score, establish forecast accuracy baseline, audit tech stack utilization, set required-field compliance rules, launch weekly data hygiene report." },
  { phase: "Month 3–4", label: "Forecast Model Calibration", description: "Compare roll-up vs weighted vs AI forecast for 2 quarters, calibrate stage weights by rep/segment, deploy deal inspection checklist in weekly forecast call." },
  { phase: "Month 5–6", label: "Attribution & Pipeline Quality", description: "Audit lead source attribution completeness (target ≥90%), fix lead routing gaps, deploy ICP scoring for territory optimization, establish stage conversion rate dashboards." },
  { phase: "Month 7–8", label: "Territory & Compensation Prep", description: "Begin Q4 territory planning cycle (if September), review TAM model, build quota model from top-down + bottom-up reconciliation, audit comp plan for plan year." },
  { phase: "Month 9–10", label: "Tech Stack & Contract Review", description: "Quarterly tech stack audit: ROI per tool, contract renewals flagged 90 days out, integration health check, user adoption rates. Eliminate/consolidate underused tools." },
  { phase: "Month 11–12", label: "Annual Review & Reset", description: "Annual RevOps audit: forecast accuracy YoY, win rate trend, attribution coverage trend. Publish quota for next year. Finalize territory design. Benchmark vs industry." },
]

const metrics = [
  { label: "Forecast accuracy (commit vs actual)", benchmark: "Target ±5% (top RevOps orgs ±3%)" },
  { label: "Pipeline coverage ratio", benchmark: "Enterprise: 3-4× | SMB: 5-6× qualified pipeline to quota" },
  { label: "CRM required-field compliance rate", benchmark: "Target ≥90% at stage gates" },
  { label: "Lead source attribution completeness", benchmark: "Target ≥90% of opportunities with source" },
  { label: "Stage-to-stage conversion accuracy (model vs actual)", benchmark: "Within ±10% of model each quarter" },
  { label: "Tech stack utilization (intended users)", benchmark: "Target ≥60% active use per tool per month" },
]

export default function RevenueOperationsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Revenue Operations Calendar"
        title="A Revenue Operations Calendar That Improves Forecast Accuracy Every Quarter"
        subtitle="From weekly data hygiene sprints to annual territory planning milestones — Momenties keeps every RevOps review, audit, and deadline on one calendar so pipeline quality and forecast accuracy compound."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every RevOps System, One Calendar
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

      {/* 12-month plan */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              12-Month RevOps Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from data audit to fully systematic revenue operations.
            </p>
          </Reveal>
          <div className="space-y-4">
            {timeline.map(({ phase, label, description }) => (
              <Reveal key={phase}>
                <div
                  className="rounded-xl p-6 flex gap-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="shrink-0 w-28">
                    <p className="text-xs font-semibold" style={{ color: "#c5a35c" }}>{phase}</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "#f0ece3" }}>{label}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-12" style={{ color: "#f0ece3" }}>
              RevOps KPIs Worth Tracking
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map(({ label, benchmark }) => (
              <Reveal key={label}>
                <div
                  className="rounded-xl p-5"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: "#f0ece3" }}>{label}</p>
                  <p className="text-xs" style={{ color: "#8b8b8b" }}>{benchmark}</p>
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
              &ldquo;Our forecast accuracy was ±22% before we systematized RevOps. The problem wasn&apos;t the model — it was that data hygiene sprints happened whenever someone noticed, territory conflicts sat unresolved, and tech audits never happened. Putting everything on a Momenties calendar — weekly hygiene, quarterly audits, annual territory planning — moved us to ±6% in three quarters.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Jordan K.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Revenue Operations, Enterprise SaaS — $35M ARR
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your RevOps calendar and improve forecast accuracy starting this quarter"
        subtitle="Momenties keeps every pipeline review, data hygiene sprint, territory planning milestone, and tech audit on one calendar so revenue operations compounds systematically."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
