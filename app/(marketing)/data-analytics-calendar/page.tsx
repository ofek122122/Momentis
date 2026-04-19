import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Data Analytics Calendar | Momenties",
  description: "Momenties helps data and analytics leaders track data quality review cycles, model retraining cadences, data governance board meetings, analytics toolstack reviews, and BI reporting cadences in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Data Quality Review Cycles & Data Pipeline Health Calendar",
    description:
      "Data quality without structured review cycles degrades silently — Gartner estimates that poor data quality costs organizations $12.9M annually on average, and most quality issues are preventable with scheduled review cadences. Weekly data quality monitoring reviews: automated data quality rule failure rates, pipeline SLA breach alerts, and null/duplicate rate thresholds by critical data domain. Monthly data lineage reviews: tracing schema changes through the data warehouse, identifying undocumented transformations, and auditing upstream source system changes that affect downstream analytics. Quarterly data catalog audits: asset documentation completeness, ownership assignment, and deprecated dataset cleanup. Annual data architecture review: benchmarking data warehouse or lakehouse performance, evaluating partitioning strategies, and planning infrastructure scaling for projected data volume growth. Momenties manages every pipeline and quality review cycle.",
  },
  {
    icon: RefreshCw,
    title: "Model Retraining Cadences & ML Experiment Review Calendar",
    description:
      "Machine learning models in production without scheduled retraining drift — and model drift is invisible until it becomes a business problem. Monthly model performance reviews: prediction accuracy, precision/recall, AUC-ROC trends against baseline, and feature drift detection (using Population Stability Index or similar). Quarterly model retraining cycles: retraining on refreshed data, A/B testing retrained versus live models, and champion/challenger framework governance. Annual ML roadmap review: evaluating model portfolio against business priorities, sunsetting underperforming models, and planning new model development. MLOps toolstack review (annual): assessing ML platform ROI (Databricks, Vertex AI, SageMaker, MLflow), feature store utilization, and monitoring coverage. Experimentation calendar: ensuring A/B test velocity (minimum 1 active experiment per product area per sprint) with statistical significance governance. Momenties tracks every model and experiment cycle.",
  },
  {
    icon: TrendingUp,
    title: "Data Governance Board Cadence & Privacy Compliance Calendar",
    description:
      "Data governance without a structured calendar produces ad-hoc decisions that accumulate into inconsistent data definitions, access control gaps, and compliance risk. Monthly data governance committee meetings: cross-functional review of new data requests, PII handling policies, and data sharing agreements. Quarterly data access reviews: auditing who has access to sensitive data, revoking stale access, and validating role-based access control alignment with HR records. GDPR and CCPA data subject request (DSR) processing SLAs — 30 days for GDPR, 45 days for CCPA — require standing operational workflows. Annual privacy impact assessment (PIA) for new data products. Data retention policy review (annual): purging data beyond retention windows, updating data retention schedules, and validating backup data destruction. SOC 2 Type II data controls evidence collection requires continuous documentation. Momenties consolidates the full governance calendar.",
  },
  {
    icon: BarChart3,
    title: "BI Reporting Cadences, Analytics ROI & Toolstack Review Calendar",
    description:
      "Analytics team ROI reporting — self-service BI adoption rates, dashboard usage analytics, analyst-to-data-request ratio, and time-to-insight metrics — requires monthly compilation and quarterly leadership presentation. Annual BI toolstack review: assessing Tableau/Looker/Power BI/Sigma utilization, license optimization opportunities, and contract renewal negotiations (starting 90 days before expiration). Quarterly data product roadmap review: prioritizing analyst capacity against business stakeholder requests, managing technical debt in the analytics layer, and communicating roadmap to business partners. Weekly analytics team standup and monthly analytics retrospective keep delivery rhythm. Annual data analytics strategy presentation to senior leadership — connecting analytics capability investments to business outcomes — requires 4-6 weeks of preparation. Momenties schedules every reporting and governance cycle.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Data Strategy & Model Portfolio Review",
    description: "Complete annual data analytics strategy review. Assess ML model portfolio performance against business KPIs. Launch data quality baseline audit. Set annual analytics team OKRs. Review data catalog completeness and assign ownership gaps.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Model Retraining & Governance Board Review",
    description: "Execute Q1 ML model retraining cycle. Run Q1 data governance committee meeting with PII audit. Complete Q1 data access review. Assess BI tool adoption rates and optimize underutilized dashboards. Run first quarterly analytics ROI review.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Analytics Review & Privacy Compliance Audit",
    description: "Conduct H1 data analytics program review. Complete semi-annual data retention policy review and purge cycle. Run privacy impact assessment for new H2 data products. Assess data pipeline SLA compliance trends. Begin BI toolstack renewal negotiations if applicable.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Model Review & Data Architecture Assessment",
    description: "Complete Q2 model performance review and identify retraining candidates. Run annual data architecture review for next-year infrastructure planning. Conduct Q3 data governance committee. Review SOC 2 data controls evidence and remediate gaps.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 Data Quality Audit & Experimentation Review",
    description: "Complete Q3 data quality audit with domain-level scorecards. Review ML experimentation velocity and A/B test backlog. Run quarterly data catalog freshness audit. Begin annual analytics strategy preparation for January presentation.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Model Retraining & Next-Year Planning",
    description: "Execute Q4 model retraining cycle. Complete annual BI toolstack review and license optimization. Run annual analytics team retrospective. Lock next-year analytics roadmap and tooling budget. Deliver year-end analytics ROI report to leadership.",
  },
]

const kpis = [
  {
    metric: "Data Quality Score ≥ 95% Across Critical Domains",
    description: "Completeness, accuracy, and timeliness scores across revenue, customer, and product data domains",
  },
  {
    metric: "Model Prediction Accuracy Variance ≤ 5% Monthly",
    description: "Drift in model performance metrics (AUC, precision, recall) month-over-month for production models",
  },
  {
    metric: "Self-Service BI Adoption ≥ 60% of Business Users",
    description: "Percentage of business stakeholders actively using self-service dashboards versus analyst-generated reports",
  },
  {
    metric: "Pipeline SLA Compliance ≥ 99%",
    description: "Percentage of data pipeline jobs completing within defined SLA windows without alert escalation",
  },
  {
    metric: "Data Request Backlog ≤ 2 Weeks",
    description: "Time from analytics request submission to delivery; above 4 weeks signals team capacity issue",
  },
  {
    metric: "Data Governance Access Reviews 100% Quarterly",
    description: "All sensitive data access reviews completed quarterly with zero overdue access revocations",
  },
]

const testimonial = {
  quote:
    "Monthly data quality reviews, quarterly model retraining cycles, monthly data governance committee, quarterly data access reviews with HR sync, annual data architecture review, GDPR DSR SLA tracking, annual BI toolstack renewals, semi-annual data retention purge cycles, and weekly pipeline health reporting for four executives — all in spreadsheets and Slack. Momenties organized everything. Our model drift incidents dropped from nine per quarter to one.",
  name: "Emeka F.",
  title: "VP Data & Analytics, Series D E-Commerce Platform",
}

export default function DataAnalyticsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Data Analytics Calendar"
        title="Data Quality Reviews. Model Retraining. Governance Board. One Calendar."
        subtitle="Momenties tracks data quality review cycles, ML model retraining cadences, data governance committee meetings, quarterly access reviews, privacy compliance deadlines, BI toolstack renewal negotiations, and analytics ROI reporting so data and analytics leaders run high-performing programs without operational gaps."
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
            Four Data Analytics Pillars Momenties Tracks
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
            12-Month Data Analytics Calendar
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
            Data Analytics KPIs Momenties Keeps on Track
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
