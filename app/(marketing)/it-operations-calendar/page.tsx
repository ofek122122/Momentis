import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "IT Operations Calendar | Momenties",
  description: "Momenties helps IT operations leaders track patch management cycles, incident review cadences, capacity planning reviews, vendor contract renewals, and compliance audit preparation in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Patch Management Cycles & Vulnerability Remediation Calendar",
    description:
      "Patch management is the backbone of IT operations compliance — Microsoft Patch Tuesday (second Tuesday monthly) triggers a cascade: test environment validation (48 hours), staging deployment (days 3-5), production rollout (days 7-14), and patch compliance verification (day 21). Critical vulnerability remediation follows a separate SLA: CVSS 9.0+ critical vulnerabilities require 24-hour emergency patching workflows; CVSS 7.0-8.9 high vulnerabilities require 72-hour remediation; medium vulnerabilities require 30-day remediation windows. Annual OS end-of-life (EOL) planning — Windows Server, RHEL, and database EOL dates published 2-3 years in advance — requires 12-18 month migration projects. Third-party application patching (Adobe, Java, browsers) follows monthly cycles with application-specific testing windows. Momenties tracks every patch cycle and EOL timeline.",
  },
  {
    icon: RefreshCw,
    title: "Incident Review Cadence & Change Advisory Board Governance",
    description:
      "ITIL-aligned IT operations requires structured review cadences: weekly Change Advisory Board (CAB) meetings (standard changes pre-approved, emergency changes reviewed same-day), monthly major incident reviews (post-incident analysis for P1/P2 incidents with 5-whys root cause), and quarterly problem management reviews (identifying recurring incident patterns for permanent resolution). Monthly SLA performance reviews — availability, MTTR, MTBF, change success rate — require data compilation 1 week before review. Annual IT service catalog reviews (removing obsolete services, adding new capabilities, updating SLAs) require 6-8 weeks of stakeholder consultation. IT change freeze periods — year-end financial close (typically Nov 15 - Jan 15), major business events — must be planned 90+ days in advance. Momenties schedules every governance checkpoint.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Planning Reviews & Infrastructure Lifecycle Management",
    description:
      "Capacity planning requires quarterly infrastructure utilization reviews — identifying servers, storage, and network components approaching 80% utilization thresholds before performance degradation occurs. Annual capacity planning cycle: Q1 forecast (trend analysis of past 12 months + growth projections), Q2 budget request (hardware/cloud spend tied to capacity models), Q3 procurement and provisioning, Q4 deployment and validation. Hardware lifecycle management — server refresh cycles (5-7 years), network equipment refresh (7-10 years), storage array refresh (5-6 years) — requires multi-year planning calendars. Cloud cost optimization reviews (monthly) track reserved instance utilization, right-sizing opportunities, and unused resource cleanup. Datacenter contract renewals — colocation agreements, ISP contracts — require 12-18 month advance negotiation windows. Momenties manages the complete infrastructure lifecycle.",
  },
  {
    icon: BarChart3,
    title: "Vendor Contract Renewals, Compliance Audits & IT Governance Reporting",
    description:
      "Vendor contract management is a continuous calendar discipline — enterprise software agreements (SAP, Oracle, Microsoft EA), cloud contracts (AWS, Azure, GCP), and managed service agreements require renewal negotiations starting 6-9 months before expiration. License compliance audits — Microsoft SAM (Software Asset Management), Oracle License Review, and VMware licensing audits — can be triggered by vendors at any time; proactive annual internal license audits reduce audit risk and true-up costs. SOC 2 Type II audit preparation (annual) requires 90-day evidence collection preceding auditor fieldwork. ISO 27001 surveillance audits (annual) and recertification audits (3-year) require internal audit preparation 8 weeks in advance. NIST CSF maturity assessments (annual) and CIS Controls implementation verification complete the compliance calendar. Momenties consolidates the full governance portfolio.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual IT Calendar Design & Compliance Planning",
    description: "Map the annual patch calendar, major compliance audit dates, and contract renewal schedule. Run Q4 incident review and set IT SLA targets for the year. Complete annual IT risk assessment. Finalize hardware lifecycle plan and budget allocations.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Capacity Review & Vendor Contract Optimization",
    description: "Complete Q1 capacity utilization analysis and forecast. Initiate renewals for contracts expiring in Q3-Q4. Run spring cloud cost optimization review. Conduct semi-annual license compliance audit. Begin SOC 2 evidence collection for H1.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 SLA Review & Security Compliance Assessment",
    description: "Conduct H1 SLA performance review. Complete NIST CSF or CIS Controls maturity assessment. Run OS and application EOL audit for next-year planning. Begin ISO 27001 surveillance audit preparation. Review change management success rates and adjust CAB governance.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Mid-Year Capacity Plan & Infrastructure Procurement",
    description: "Complete Q2 capacity review and initiate hardware procurement for Q4 deployments. Run mid-year cloud cost review and right-sizing campaign. Begin budget planning for next fiscal year IT capital expenditures. Update disaster recovery runbooks and test backup restoration.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "SOC 2 Audit & Annual Vendor Strategy Review",
    description: "Execute SOC 2 Type II auditor fieldwork. Complete annual vendor spend and performance review. Negotiate renewals for contracts expiring in Q1 next year. Run annual IT service catalog review with business stakeholders. Complete Q3 capacity review.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Freeze, Compliance Wrap-Up & Next-Year Planning",
    description: "Implement year-end change freeze period. Complete all outstanding compliance documentation. Publish annual IT metrics report. Finalize next-year IT roadmap and capacity plan. Run annual major incident lessons-learned session. Lock IT budget and headcount plan.",
  },
]

const kpis = [
  {
    metric: "Patch Compliance ≥ 98% Within SLA",
    description: "Critical systems patched within defined SLA windows; CVSS 9+ vulnerabilities closed within 24 hours",
  },
  {
    metric: "Change Success Rate ≥ 95%",
    description: "Changes deployed without causing incidents or requiring emergency rollback, measured monthly",
  },
  {
    metric: "Infrastructure Utilization < 80%",
    description: "No production server, storage, or network component sustained above 80% utilization threshold",
  },
  {
    metric: "MTTR for P1 Incidents ≤ 4 Hours",
    description: "Mean time to resolution for Priority 1 incidents, tracked monthly against SLA commitment",
  },
  {
    metric: "License Compliance Variance ≤ 5%",
    description: "Difference between licensed and deployed software quantities, minimizing true-up exposure",
  },
  {
    metric: "Contract Renewals 100% On-Time",
    description: "All vendor contracts renewed or terminated before expiration, zero auto-renewals at unfavorable terms",
  },
]

const testimonial = {
  quote:
    "We were running patch cycles, CAB meetings, quarterly capacity reviews, six vendor contract renewals, a SOC 2 audit, an ISO 27001 surveillance audit, and year-end change freeze planning — all tracked in spreadsheets and email threads. Momenties put every IT operations deadline on one calendar. We hit 99.2% patch compliance last year and had zero surprise contract auto-renewals.",
  name: "Emeka O.",
  title: "VP, IT Operations & Infrastructure, Series C Fintech",
}

export default function ItOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="IT Operations Calendar"
        title="Patch Management. Compliance Audits. Contract Renewals. One Calendar."
        subtitle="Momenties tracks patch management cycles, change advisory board governance, capacity planning reviews, vendor contract renewal deadlines, SOC 2 and ISO 27001 audit preparation timelines, and IT SLA performance reviews so IT operations leaders maintain every obligation without administrative chaos."
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
            Four IT Operations Pillars Momenties Tracks
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
            12-Month IT Operations Calendar
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
            IT Operations KPIs Momenties Keeps on Track
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
