import type { Metadata } from "next"
import { Shield, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cybersecurity Operations Calendar | Momenties",
  description: "Build a systematic cybersecurity operations calendar — vulnerability assessment cadence, security awareness training cycles, compliance audit schedules, and incident response rehearsal programs that keep your security posture measurably current.",
}

const pillars = [
  {
    icon: Shield,
    title: "Vulnerability Assessment & Patch Management Cadence",
    description:
      "Security posture degrades between assessments. Momenties schedules monthly automated vulnerability scans for all internet-facing assets, quarterly manual penetration tests for critical systems, and annual red team exercises for the full attack surface. Patch management cadence — critical patches within 24 hours, high within 7 days, medium within 30 days — is enforced with automated overdue alerts to asset owners before compliance windows lapse. Annual third-party pen test scheduling locks vendor lead times and budget before Q4 procurement freezes.",
  },
  {
    icon: RefreshCw,
    title: "Security Awareness Training & Phishing Simulation Cycles",
    description:
      "Human risk is the most persistent attack vector — and security awareness training without a testing cadence produces zero behavioral change. Momenties schedules monthly phishing simulations with click-rate tracking, quarterly security awareness training modules per role (developer, finance, executive), and annual security culture survey to measure program effectiveness. New hire security onboarding is triggered automatically at hire date. Results from each simulation cycle inform the next training content — closing the feedback loop that most programs miss.",
  },
  {
    icon: TrendingUp,
    title: "Compliance Audit Calendar & Control Evidence Collection",
    description:
      "SOC 2 Type II, ISO 27001, HIPAA, PCI-DSS, and FedRAMP all run on annual audit cycles with evidence collection windows that start 6-12 months before audit date. Momenties maps the full compliance calendar: control evidence collection sprints, internal readiness assessments 3 months before audit, auditor RFI response workflows, and remediation tracking for prior-year findings. Continuous control monitoring cadence — access review quarterly, privilege audit monthly, security log review weekly — is enforced with owner-assigned task queues.",
  },
  {
    icon: BarChart3,
    title: "Incident Response Rehearsals & Security Metrics Reporting",
    description:
      "Incident response plans that are never rehearsed fail at the worst moment. Momenties schedules quarterly tabletop exercises with defined scenarios (ransomware, data breach, cloud misconfiguration), annual full IR drill with executive participation, and post-incident review sessions within 2 weeks of any security event. Monthly security metrics dashboards — MTTD, MTTR, vulnerability remediation SLA compliance, phishing click rate trend — are scheduled for CISO review before board reporting cycles.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Security Posture Baseline & Compliance Calendar Mapping",
    description: "Run baseline vulnerability assessment and external attack surface analysis; map all compliance audit deadlines for the year; assign control owners; configure automated scanning and alert cadences.",
  },
  {
    month: "Month 3–4",
    title: "Security Awareness Program Launch",
    description: "Launch monthly phishing simulation program; deploy role-based security training modules; establish click-rate and completion rate baselines; schedule first quarterly tabletop exercise.",
  },
  {
    month: "Month 5–6",
    title: "Q1 Compliance Evidence Sprint & Internal Readiness Assessment",
    description: "Complete Q1 continuous control evidence collection; run internal SOC 2 / ISO 27001 readiness assessment; remediate top findings; prepare audit readiness report for CISO.",
  },
  {
    month: "Month 7–8",
    title: "Annual Pen Test & Red Team Exercise",
    description: "Execute annual third-party penetration test and red team exercise; complete DAST/SAST scans for critical applications; publish remediation roadmap with owner-assigned deadlines.",
  },
  {
    month: "Month 9–10",
    title: "External Audit Execution & Findings Remediation",
    description: "Execute SOC 2 or ISO 27001 annual audit; manage RFI response workflow; track audit findings in Momenties with remediation deadlines; schedule post-audit findings review with leadership.",
  },
  {
    month: "Month 11–12",
    title: "Annual IR Drill & Security Program Review",
    description: "Execute annual full incident response drill with executive team; present annual security program report (posture trends, compliance status, cost of security per protected asset); plan next-year program investments.",
  },
]

const kpis = [
  {
    metric: "Critical Vulnerability SLA",
    target: "100% patched within 24h",
    description: "Percentage of critical severity vulnerabilities remediated within 24-hour SLA — any miss represents a live attack window that should trigger immediate executive escalation.",
  },
  {
    metric: "Phishing Click Rate",
    target: "≤ 5% (trending down)",
    description: "Percentage of employees who click simulated phishing emails — industry median is 15-20%; best-in-class programs drive below 5% within 12 months of consistent monthly simulation.",
  },
  {
    metric: "Mean Time to Detect (MTTD)",
    target: "≤ 24 hours",
    description: "Average time from security incident occurrence to detection — MTTD above 72 hours indicates SIEM tuning or monitoring coverage gaps that increase breach impact.",
  },
  {
    metric: "Compliance Audit Findings",
    target: "Zero repeat findings",
    description: "Number of compliance audit findings that were also identified in the prior year — any repeat finding signals remediation program failure or control sustainability issue.",
  },
  {
    metric: "Security Training Completion",
    target: "≥ 95% by deadline",
    description: "Percentage of employees completing required security awareness training by each module deadline — below 85% creates compliance risk and insurance policy violation exposure.",
  },
  {
    metric: "Mean Time to Respond (MTTR)",
    target: "≤ 4 hours (critical)",
    description: "Average time from alert to active incident response for critical severity alerts — above 8 hours for critical alerts signals SOC capacity, playbook, or on-call escalation gaps.",
  },
]

const testimonial = {
  quote:
    "We had four compliance audits on overlapping calendars, a phishing program that ran twice a year, and patch SLAs that lived in a spreadsheet nobody checked. Momenties gave every control an owner and a deadline. We achieved our first clean SOC 2 Type II with zero exceptions, phishing click rate dropped from 19% to 4%, and we haven&apos;t missed a critical patch SLA since implementation.",
  name: "Emeka K.",
  title: "CISO, Growth-Stage FinTech",
}

export default function CybersecurityOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Cybersecurity Operations Calendar"
        title="Clean SOC 2. Zero Repeat Findings. Phishing Below 5%."
        subtitle="A systematic cybersecurity operations calendar with monthly vulnerability scans, phishing simulation cadences, compliance evidence collection sprints, and IR rehearsal schedules that keep security posture continuously current."
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
            Four Systems That Keep Security Posture Current
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
            Your Annual Cybersecurity Operations Calendar
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
            KPIs That Define Cybersecurity Program Maturity
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
