import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Security Awareness Calendar | Momenties",
  description: "Momenties helps CISOs and security teams track phishing simulation cycles, security awareness training completion, compliance certification renewals, tabletop exercise schedules, and incident response drill cadences in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Phishing Simulation Cycles & Security Awareness Training Cadence",
    description:
      "Security awareness programs require structured cadences to produce measurable behavior change — SANS Institute research indicates monthly phishing simulations reduce click rates from 37% to 5% within 12 months versus quarterly simulations which plateau at 15%. Monthly phishing simulation campaigns require 2-week design windows (landing page customization, pretexting scenario development), deployment periods, and post-campaign reporting with department-level click rate analysis. Annual security awareness training completion — NIST SP 800-50 recommends role-based training refreshed annually — requires learning management system (LMS) tracking, completion escalation workflows, and audit-ready documentation. New hire security awareness onboarding (within 30 days of hire) adds a parallel completion tracking stream. Momenties manages every simulation and training cycle.",
  },
  {
    icon: RefreshCw,
    title: "Compliance Certification Renewals & Security Team Credentialing",
    description:
      "Security team certification management is a continuous calendar discipline: CISSP (3-year renewal, 120 CPE credits), CISM (3-year renewal, 120 CPE credits), CISA (3-year renewal, 120 CPE credits), CEH (3-year renewal), CompTIA Security+ (3-year renewal, 50 CEUs), and OSCP/OSCE (no expiration but many organizations require renewal). SOC 2 Type II audit readiness requires continuous evidence collection — policy review (annual), vendor risk assessment (annual), access review (quarterly), and penetration test (annual). ISO 27001 internal audit (annual) and surveillance audit (annual) require 8-10 weeks of preparation. NIST CSF maturity assessments and CIS Controls implementation verification (annual) require 6-8 weeks of evidence gathering. PCI DSS compliance (annual) and HIPAA Security Rule risk assessment (annual) complete the compliance calendar. Momenties tracks every renewal and audit cycle.",
  },
  {
    icon: TrendingUp,
    title: "Tabletop Exercises, Penetration Testing & Incident Response Drills",
    description:
      "CISA and NIST recommend quarterly tabletop exercises covering different threat scenarios — ransomware response (Q1), business email compromise (Q2), supply chain compromise (Q3), and insider threat (Q4). Annual red team/penetration testing requires 6-8 week scoping and coordination windows, report remediation tracking (critical findings within 30 days, high within 90 days), and validation retesting. Incident response plan (IRP) review and update cycles — required annually for SOC 2, ISO 27001, and many cyber insurance policies — require tabletop scenario integration. Cyber insurance renewal preparation (annual) requires completing cyber insurance questionnaires with current security control evidence — starting 90 days before renewal expiration. Business continuity and disaster recovery test (annual) aligns with incident response program. Momenties schedules every exercise and test.",
  },
  {
    icon: BarChart3,
    title: "Vulnerability Management Reviews, Patch SLAs & Security Metrics Reporting",
    description:
      "Vulnerability management programs require structured review cadences: weekly vulnerability scanner report review, monthly patch SLA compliance reporting (critical patches within 24-72 hours, high within 30 days), quarterly attack surface review (new assets, deprecated controls, exposure changes), and annual penetration test remediation validation. Security metrics reporting to executive leadership and the board — mean time to detect (MTTD), mean time to respond (MTTR), phishing click rates, patch compliance, and security awareness training completion — requires monthly compilation and quarterly board presentation. Annual security program review with external advisor or vCISO benchmarks program maturity against industry peers. Cyber insurance policy review (annual) aligns coverage with current threat landscape and control posture. Momenties consolidates the full security operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Security Program Assessment & Calendar Design",
    description: "Complete annual security risk assessment. Launch annual security awareness training campaign. Run Q1 tabletop exercise (ransomware scenario). Scope annual penetration test. Renew lapsing security certifications. Begin SOC 2 evidence collection for H1.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Penetration Test Execution & Q1 Phishing Review",
    description: "Execute annual penetration test. Review Q1 phishing simulation results and adjust campaign targeting for high-risk departments. Complete quarterly access review. Begin ISO 27001 internal audit preparation. Report Q1 security metrics to executive team.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Pen Test Remediation & Q2 Tabletop Exercise",
    description: "Track and verify critical/high penetration test findings remediation. Run Q2 tabletop exercise (BEC scenario). Complete H1 SOC 2 evidence compilation. Run semi-annual phishing program effectiveness review. Conduct vendor risk assessment refresh for top-tier vendors.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "SOC 2 Audit & Cyber Insurance Renewal Preparation",
    description: "Execute SOC 2 Type II auditor fieldwork. Begin cyber insurance renewal questionnaire preparation (if Q4 renewal). Run Q3 tabletop exercise (supply chain scenario). Review and update incident response plan. Complete annual security awareness training completion audit.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "ISO 27001 Surveillance & Annual Policy Review",
    description: "Execute ISO 27001 surveillance audit. Complete annual information security policy review and updates. Submit cyber insurance renewal. Run Q3 phishing simulation deep-dive analysis. Report Q3 security metrics. Begin planning next-year security awareness program.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Review, DR Test & Next-Year Security Planning",
    description: "Run Q4 tabletop exercise (insider threat scenario). Execute annual DR/BCP test. Deliver annual security program board presentation. Finalize next-year security budget and program calendar. Complete any lapsing certification renewals. Run year-end vulnerability management retrospective.",
  },
]

const kpis = [
  {
    metric: "Phishing Click Rate ≤ 5%",
    description: "Organization-wide phishing simulation click rate after 12 months of monthly campaigns",
  },
  {
    metric: "Security Training Completion ≥ 98%",
    description: "Annual security awareness training completed by all employees within required timeframes",
  },
  {
    metric: "Critical Patch Compliance ≥ 99%",
    description: "Critical vulnerabilities patched within 72-hour SLA across all in-scope systems",
  },
  {
    metric: "Pen Test Critical Findings Remediated ≤ 30 Days",
    description: "100% of critical penetration test findings closed within 30-day SLA with validation testing",
  },
  {
    metric: "MTTD ≤ 4 Hours for High-Priority Alerts",
    description: "Mean time to detect confirmed security incidents from initial alert generation",
  },
  {
    metric: "Security Certification Currency 100%",
    description: "All security team members maintaining required certifications with zero lapses",
  },
]

const testimonial = {
  quote:
    "Monthly phishing simulations, annual security awareness training for 1,200 employees, quarterly tabletop exercises, annual pen test with remediation tracking, SOC 2 Type II continuous evidence collection, ISO 27001 surveillance audit prep, six CISSP and CISM renewals on different cycles, cyber insurance renewal, and quarterly board security metrics — all tracked in spreadsheets. Momenties organized everything. We passed our SOC 2 Type II audit with zero exceptions last year.",
  name: "Adaeze O.",
  title: "CISO, Series C Healthcare Technology Company",
}

export default function SecurityAwarenessCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Security Awareness Calendar"
        title="Phishing Simulations. Compliance Audits. Pen Tests. One Calendar."
        subtitle="Momenties tracks monthly phishing simulation cycles, security awareness training completion, CISSP and CISM certification renewals, quarterly tabletop exercises, annual penetration test and remediation tracking, SOC 2 and ISO 27001 audit preparation, and cyber insurance renewal so security teams maintain every obligation without administrative gaps."
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
            Four Security Awareness Pillars Momenties Tracks
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
            12-Month Security Awareness Calendar
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
            Security Awareness KPIs Momenties Keeps on Track
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
