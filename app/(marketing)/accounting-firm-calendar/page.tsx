import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Accounting Firm Calendar | Momenties",
  description: "Momenties gives accounting firms an AI-powered calendar that tracks CPA license renewal, CPE cycles, PCAOB registration, peer review deadlines, tax filing seasons, FBAR April 15, and AICPA ethics requirements — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "CPA License & CPE Renewal Calendar",
    description:
      "Accounting firms managing CPA credential cycles track state CPA license renewal (annual or biennial depending on state board — 40 states require 40 CPE hours per year, 10 states use biennial 80-hour cycles), AICPA ethics CPE requirement (4 hours of AICPA-approved ethics CPE per year in most states — ethics non-compliance triggers expedited board review), and specialty certifications: CFF (Certified in Financial Forensics, AICPA, 3-year renewal, 60 CPE hours with forensics-specific content), ABV (Accredited in Business Valuation, AICPA, 3-year renewal, 60 CPE hours), CITP (Certified Information Technology Professional, AICPA, 3-year renewal, 120 CPE hours), PFS (Personal Financial Specialist, AICPA, 3-year renewal, 60 CPE hours), and CGMA (Chartered Global Management Accountant, AICPA/CIMA, annual CPD — 120 hours per 3-year cycle). CFE (Certified Fraud Examiner, ACFE, 2-year renewal, 40 CPE hours) for forensic accounting practices. CIA (Certified Internal Auditor, IIA, 3-year, 120 CPE hours) for internal audit-focused practices. EA (Enrolled Agent, IRS, 3-year renewal, 72 CE hours with 6 ethics hours) for firms with tax controversy practices. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "Tax Filing Deadlines & Annual Compliance Calendar",
    description:
      "Accounting firms managing client tax calendars track individual and business filing deadlines: January 31 W-2/1099 recipient distribution and IRS transmittal deadline, February 28/March 31 paper/electronic 1099 IRS filing deadline, March 15 S-corporation (Form 1120-S) and partnership (Form 1065) federal filing deadline (or 6-month extension), April 15 individual (Form 1040) and C-corporation (Form 1120) federal filing deadline (or extension), April 15 FBAR (FinCEN Form 114) deadline for clients with foreign financial accounts ≥$10,000 (automatic 6-month extension to October 15), May 15 Form 990 nonprofit filing deadline (or extension to November 15), June 15 second estimated tax payment (Q2), September 15 extended S-corp/partnership extended return deadline, and October 15 extended individual return deadline. State filing deadlines vary — Momenties maps all state-specific conforming deadlines. Trust and estate: Form 706 estate tax return 9 months from date of death (plus 6-month extension to 15 months). Payroll: quarterly Form 941 (April 30, July 31, October 31, January 31) and annual Form 940 FUTA (January 31). Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Peer Review, PCAOB & Audit Firm Quality Calendar",
    description:
      "Accounting firms in the AICPA PCPS (Private Companies Practice Section) or enrolled in AICPA Peer Review Program maintain triennial peer review (due date assigned by AICPA — 3-year cycle with 6-month extension available): preparation begins 12 months before due date with engagement file selection, 6-month review period, and report issuance within 120 days of field work. Firms registered with PCAOB (Public Company Accounting Oversight Board) performing SEC registrant audits maintain annual PCAOB registration renewal (no fee, but annual Form 2 updates required), PCAOB inspections (annual for firms auditing 100+ SEC clients; triennial for smaller registered firms), and biennial PCAOB continuing professional education (CPE) requirements for audit engagement partners. Government audit: GAGAS (Yellow Book) CPE requirement — 80 hours per 2-year period, at least 24 hours in governmental topics for government auditors. SSARS (Statements on Standards for Accounting and Review Services) update: annual SSARS update review CE for review and compilation engagements. Quality control: annual QC document update review (SQMS — Statement on Quality Management Standards — AICPA effective 2025). Peer review readiness: quarterly engagement file quality review for firms enrolled in peer review. Momenties tracks all audit firm quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "PTIN Renewal, E-File Provider & Firm Business Calendar",
    description:
      "Accounting firms with tax preparation staff maintain IRS PTIN (Preparer Tax Identification Number) annual renewal for all paid preparers (January 1 renewal window opens — PTIN expires December 31 each year; renew by December 31 to avoid lapse). IRS e-file provider (EFIN) annual compliance: annual EFIN suitability check attestation, annual IRS Publication 1345 e-file provider agreement update acceptance, and annual IRS e-Services portal access renewal. Annual IRS representation credential (EA, CPA, attorney) verification for all staff who represent clients before the IRS. Firm registration: annual state CPA firm permit renewal (required in most states for firms with attest authority — separate from individual CPA license), AICPA membership annual renewal, state CPA society annual membership renewal. Professional liability: annual CPA professional liability insurance renewal (60-90 days advance — E&O renewal). CPE tracking: annual CPE completion audit for all licensed CPAs — verify NASBA-compliant CPE sponsor credit, ethics hours, and carry-forward limits (most states allow up to 50% carryover). Annual IRS Circular 230 compliance review for all practitioners. Quarterly payroll tax deposit compliance (semi-weekly or monthly depositor schedule — firm-level compliance). Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "PTIN Renewal & W-2/1099 Season",
    tasks: [
      "IRS PTIN annual renewal for all paid preparers — window opens January 1, must complete by December 31",
      "January 31: W-2 and 1099 recipient distribution AND IRS transmittal deadline",
      "January 31: Form 940 FUTA annual return and Form 941 Q4 payroll tax return",
      "Annual IRS e-Services and EFIN suitability check attestation",
      "CPE audit: verify all staff CPA CE hours for licenses renewing in Q1",
    ],
  },
  {
    month: "March – April",
    title: "Tax Season Peak & FBAR Deadline",
    tasks: [
      "March 15: S-corporation (1120-S) and partnership (1065) federal filing or extension",
      "April 15: Individual (1040) and C-corporation (1120) federal filing or extension",
      "April 15: FBAR (FinCEN 114) for all clients with foreign accounts ≥$10,000",
      "April 15: First estimated tax payment (Q1) — client reminder",
      "April 30: Form 941 Q1 payroll tax return",
    ],
  },
  {
    month: "May – June",
    title: "Nonprofit Filings & Peer Review Prep",
    tasks: [
      "May 15: Form 990 nonprofit annual return filing (or 6-month extension to November 15)",
      "June 15: Second estimated tax payment (Q2) — client reminder",
      "Peer review preparation: engagement file selection for firms with review due in Q3/Q4",
      "Annual CPA firm state permit renewal applications (due dates vary by state — most June-September)",
      "Annual AICPA and state CPA society membership renewal",
    ],
  },
  {
    month: "July – August",
    title: "Mid-Year CPE Push & Quality Review",
    tasks: [
      "July 31: Form 941 Q2 payroll tax return",
      "Annual CPA professional liability (E&O) insurance renewal — submit 60-90 days before expiration",
      "Quarterly engagement file quality review — peer review readiness check",
      "Mid-year CPE audit — all staff on track for annual CE requirements",
      "PCAOB Form 2 annual update for registered audit firms",
    ],
  },
  {
    month: "September – October",
    title: "Extended Returns Season & FBAR Extension",
    tasks: [
      "September 15: Extended S-corporation and partnership returns due",
      "September 15: Third estimated tax payment (Q3) — client reminder",
      "October 15: Extended individual returns due",
      "October 15: Extended FBAR (FinCEN 114) returns due",
      "October 31: Form 941 Q3 payroll tax return",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CPE Completion & PTIN Renewal Push",
    tasks: [
      "November 15: Extended Form 990 nonprofit returns due",
      "December 31: PTIN expiration — all staff must renew by this date",
      "Year-end CPE completion sprint — all CPAs must meet state board requirements by December 31",
      "Annual ethics CPE verification — 4 hours required in most states",
      "Annual IRS Circular 230 compliance review for all tax practitioners",
    ],
  },
]

const kpis = [
  {
    metric: "PTIN Annual Renewal Rate",
    target: "100% renewed by December 31",
    description: "Paid preparers with a lapsed PTIN cannot legally prepare federal tax returns — enforcement ramping up each filing season.",
  },
  {
    metric: "Annual CPE Completion Rate",
    target: "100% of CPAs meet state hours",
    description: "CPE shortfalls trigger license suspension — track each CPA&apos;s hours by category including the ethics requirement.",
  },
  {
    metric: "Peer Review Readiness Score",
    target: "Quarterly internal engagement review",
    description: "Firms that conduct quarterly internal engagement file reviews reduce peer review deficiency findings by over 70%.",
  },
  {
    metric: "Client Tax Filing On-Time Rate",
    target: "≥ 99% filed or extended on time",
    description: "Late penalties compound quickly — track each entity type&apos;s deadline separately (1040, 1065, 1120-S, 1120, 990).",
  },
  {
    metric: "FBAR Client Compliance Rate",
    target: "100% of qualifying clients filed",
    description: "FBAR penalties start at $10,000 per violation for non-willful failures — identify all qualifying clients early each year.",
  },
  {
    metric: "CPA Firm State Permit Renewal",
    target: "Renewed before expiration in each state",
    description: "Lapsed CPA firm permits in attest states prevent issuing audit reports — renewal dates vary by state from June to December.",
  },
]

const testimonial = {
  quote:
    "Annual IRS PTIN renewal for 14 paid preparers by December 31, annual CPE audit for 8 licensed CPAs across 6 state boards with different annual and biennial cycles and varying ethics hour requirements, 4 AICPA specialty certification renewals on staggered 3-year cycles — CFF, ABV, CITP, and PFS, annual CPA firm state permit renewal in 4 states, AICPA Peer Review triennial cycle with quarterly engagement file quality reviews, annual PCAOB Form 2 update for our SEC registrant practice, annual PCAOB inspection readiness review, annual CPA professional liability E&O renewal 90 days early, annual AICPA and state CPA society membership renewals, January 31 W-2 and 1099 transmittal for 180 business clients, FBAR April 15 tracking for 34 qualifying clients, Form 990 May 15 tracking for 12 nonprofit clients, quarterly Form 941 for the firm, annual state estimated tax tracking for clients in 8 states, annual IRS Circular 230 compliance review, annual EFIN suitability check, and year-end CPE completion sprint every December — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze CPA.",
  title: "CPA, CFF, ABV, Managing Partner, 8-CPA Regional Accounting Firm",
}

export default function AccountingFirmCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Accounting Firm Calendar"
        title="CPA License. PTIN Renewal. Peer Review. Tax Deadlines. One Calendar."
        subtitle="Momenties tracks annual PTIN renewal for every paid preparer, CPE hours by category across all state boards, AICPA specialty certification 3-year renewals, CPA firm state permit renewal per state, triennial peer review with quarterly engagement file reviews, PCAOB annual Form 2 updates, tax filing season deadlines including FBAR April 15 and Form 990 May 15, quarterly Form 941 payroll returns, and annual CPA professional liability renewal — so your accounting firm never misses a credential or compliance deadline."
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
            Four Calendar Pillars for Accounting Firm Compliance
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
            Your Accounting Firm Compliance Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((phase, idx) => (
              <div
                key={phase.month}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 0,
                  borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    padding: "24px 20px",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    background: "#0e0e12",
                  }}
                >
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {phase.month}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {phase.title}
                  </p>
                </div>
                <div style={{ padding: "24px 28px", background: "#0a0a0d" }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#c5a35c", marginTop: 2, flexShrink: 0 }}>›</span>
                        <span style={{ color: "rgba(240,236,227,0.7)", fontSize: "0.9rem", lineHeight: 1.55 }}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            Six KPIs Every Accounting Firm Should Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "22px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.15rem", marginBottom: 4 }}>{k.target}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>{k.description}</p>
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
