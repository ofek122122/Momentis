import type { Metadata } from "next"
import { Database, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Data Governance Calendar | Momenties",
  description: "Build a systematic data governance calendar — data quality review cycles, privacy compliance assessments, data catalog maintenance cadence, and governance committee meeting schedules that keep data assets trustworthy and compliant.",
}

const pillars = [
  {
    icon: Database,
    title: "Data Quality Review Cycles & Data Catalog Maintenance",
    description:
      "Data quality degrades silently without a structured review cadence. Momenties schedules monthly data quality scorecards for critical business domains (customer, product, financial), quarterly data catalog audits where stale assets are archived and ownership is reconfirmed, and annual enterprise data inventory assessments aligned to compliance reporting windows. Data steward assignments — with 30-day onboarding calendars for new stewards — are managed proactively. Data lineage documentation reviews for high-impact pipelines are scheduled semi-annually before regulatory audits require retroactive reconstruction.",
  },
  {
    icon: RefreshCw,
    title: "Privacy Compliance & Data Retention Assessment Calendar",
    description:
      "GDPR, CCPA, CPRA, and HIPAA all impose data retention, deletion, and breach notification obligations on different timelines. Momenties maps the full privacy compliance calendar: quarterly privacy impact assessment (PIA) reviews for new data processing activities, semi-annual data retention policy enforcement runs (identifying and scheduling deletion of records past retention period), and annual Records of Processing Activities (RoPA) updates required under GDPR Article 30. Data subject request (DSR) SLA tracking — 30-day GDPR and 45-day CCPA response windows — is managed with owner-assigned queues and escalation alerts.",
  },
  {
    icon: TrendingUp,
    title: "Data Governance Committee Meetings & Policy Review Cadence",
    description:
      "Data governance without a structured committee cadence becomes policy theater. Momenties schedules monthly data governance steering committee meetings with pre-built agenda templates (data quality exceptions, policy change requests, access governance reviews), quarterly data governance maturity assessments, and annual enterprise data strategy reviews where the data governance operating model is evaluated against business growth. Policy review cycles — data classification policy annually, access governance policy semi-annually, data sharing agreement review quarterly — are tracked with version control and owner sign-off workflows.",
  },
  {
    icon: BarChart3,
    title: "Access Governance Reviews & Third-Party Data Risk Audits",
    description:
      "Data access sprawl and third-party data sharing are the fastest-growing governance risks for scaling companies. Momenties schedules quarterly user access reviews for sensitive data systems (identifying and revoking unnecessary access), semi-annual third-party data processing agreement audits (verifying DPA compliance and sub-processor changes), and annual vendor data risk assessments for all vendors with access to personal or confidential data. Cloud data store configuration reviews — S3 bucket policies, BigQuery IAM, Snowflake role grants — are calendared monthly with automated drift detection alerts.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Data Governance Baseline & Committee Launch",
    description: "Complete enterprise data inventory; assign data stewards to all critical domains; launch data governance steering committee with meeting cadence; establish data quality baseline scorecards for top 10 business-critical datasets.",
  },
  {
    month: "Month 3",
    title: "Data Catalog Build & Classification Rollout",
    description: "Deploy data catalog with ownership, sensitivity classification, and lineage documentation for top 50 data assets; implement data classification policy; configure automated PII discovery scanning.",
  },
  {
    month: "Month 4–5",
    title: "Privacy Compliance Assessment & RoPA Build",
    description: "Complete privacy impact assessments for all active data processing activities; build GDPR Records of Processing Activities (RoPA); implement DSR response workflow with SLA tracking; audit data retention enforcement.",
  },
  {
    month: "Month 6–7",
    title: "Access Governance Launch & Third-Party Audit",
    description: "Execute first quarterly access review for all sensitive data systems; complete third-party DPA audit; remediate top access governance findings; publish data access policy with owner training.",
  },
  {
    month: "Month 8–10",
    title: "Data Quality Improvement Sprint & Lineage Documentation",
    description: "Execute targeted data quality improvement sprint for bottom-quartile domains; document lineage for all financial and compliance-critical pipelines; conduct mid-year data governance maturity assessment.",
  },
  {
    month: "Month 11–12",
    title: "Annual Governance Review & Next-Year Strategy",
    description: "Present annual data governance report (quality trends, compliance posture, catalog coverage, access review findings); update enterprise data strategy; define next-year governance investment priorities and tooling roadmap.",
  },
]

const kpis = [
  {
    metric: "Data Quality Score",
    target: "≥ 95% for critical domains",
    description: "Completeness, accuracy, timeliness, and consistency score for business-critical data domains — below 85% for financial or customer data creates material reporting risk.",
  },
  {
    metric: "Data Catalog Coverage",
    target: "≥ 80% of critical assets",
    description: "Percentage of identified critical data assets with active ownership, classification, and lineage documentation in the enterprise data catalog — below 60% signals ungoverned data sprawl.",
  },
  {
    metric: "DSR Response SLA",
    target: "100% within 30/45 days",
    description: "Percentage of data subject requests (GDPR/CCPA) fulfilled within statutory response windows — any miss creates regulatory exposure; above 5% miss rate signals process failure.",
  },
  {
    metric: "Access Review Completion",
    target: "100% quarterly",
    description: "Percentage of user access reviews for sensitive data systems completed on schedule — missed access reviews are a SOC 2 Type II control deficiency and a common audit finding.",
  },
  {
    metric: "Policy Compliance Rate",
    target: "≥ 90% by domain",
    description: "Percentage of data assets conforming to data classification and retention policy — below 75% indicates policy is not operational and creates audit and breach liability.",
  },
  {
    metric: "Third-Party DPA Coverage",
    target: "100% of data processors",
    description: "Percentage of vendors processing personal data with current, signed Data Processing Agreements — any gap represents a live GDPR Article 28 violation for EU data subjects.",
  },
]

const testimonial = {
  quote:
    "Our data governance program existed on paper but not in practice — DSR deadlines were tracked in a spreadsheet, access reviews happened when someone remembered, and our RoPA was two years out of date. Momenties turned our governance calendar into an operational system. We passed our GDPR audit with zero findings and our DSR response rate is 100% for the first time.",
  name: "Amara O.",
  title: "Chief Data Officer, Series D B2B SaaS",
}

export default function DataGovernanceCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Data Governance Calendar"
        title="Clean Data. Zero Compliance Gaps. Trusted Data Assets."
        subtitle="A systematic data governance calendar with monthly quality reviews, quarterly access audits, privacy compliance assessment cycles, and governance committee cadences that keep data assets trustworthy and audit-ready."
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
            Four Systems That Build Data Governance Excellence
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
            Your 12-Month Data Governance Roadmap
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
            KPIs That Define Data Governance Maturity
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
