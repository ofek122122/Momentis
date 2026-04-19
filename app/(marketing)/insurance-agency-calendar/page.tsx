import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Insurance Agency Calendar | Momenties",
  description: "Momenties helps insurance agencies manage producer license renewals, E&O insurance renewal, carrier appointment renewals, open enrollment deadlines, and continuing education compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Producer License, E&O Insurance & Carrier Appointment Calendar",
    description:
      "Insurance producers operate under state licensing regimes requiring renewal every 1-2 years in all 50 states, with CE requirements that vary from 12-24 hours per renewal period and mandatory ethics CE in most states. Multi-state producers managing licenses across 10, 20, or 30+ states face a continuous renewal calendar — Sircon and NIPR non-resident license renewal windows differ by state, and CE requirements are not reciprocal. P&C license CE: state-specific requirements (California: 24 hours biennial including 3 hours ethics; Texas: 30 hours annual including 3 hours ethics; Florida: 24 hours biennial; New York: 15 hours biennial). Life/Health license CE: state-specific with LTC (Long-Term Care) training requirement (California: 8 hours LTC for new licensees; Texas: 8 hours LTC every 2 years) and annuity training CE (FINRA/NAIC model regulation requires product-specific training before annuity sales). Surplus lines broker license: separate annual or biennial renewal in states where maintained, with surplus lines CE requirements. E&O (Errors & Omissions) professional liability insurance: annual renewal with 60-90 day advance review — coverage limits affected by carrier appointments and book of business growth. Agency agreement and carrier appointment renewal: most carrier contracts are evergreen but subject to annual performance review — appointment renewal documentation and commission schedule updates. FINRA Series 6/7/63/65/66 for agents selling variable products: annual CE (FINRA Firm Element) plus regulatory element every 3 years. Momenties tracks every license and renewal cycle.",
  },
  {
    icon: RefreshCw,
    title: "AEP/OEP, Medicare & Individual Market Enrollment Calendar",
    description:
      "The Medicare Annual Enrollment Period (AEP: October 15 through December 7) and Open Enrollment Period (OEP: January 1 through March 31) are the two highest-revenue windows for health insurance agents — 70% of Medicare Advantage and PDP enrollment activity occurs in AEP, requiring 8-12 weeks of preparation. AEP preparation calendar: CMS certifications for all Medicare Advantage and PDP carriers (typically available August-September — AHIP Medicare certification annual plus carrier-specific modules, all must be completed before October 15 marketing is permitted), carrier contracting and appointment renewals for following plan year (typically July-October), and Medicare marketing compliance annual review (CMS Medicare Marketing Guidelines update released annually — review required before AEP). Individual and family market enrollment: ACA Open Enrollment (November 1 through January 15 in most states) — state marketplace certification renewal required annually (Covered California, NY State of Health, etc.), and federally-facilitated marketplace (FFM) annual certification renewal. Special enrollment period (SEP) management: year-round SEP documentation calendar — qualifying life events require submission within 30-60 days. Group health annual renewal: employer group health plan renewal typically 60-120 days before anniversary date (January 1 anniversary groups: October-November renewal window). Annual benefit renewal campaign: broker of record letter renewal for group clients (annual documentation update). Life and annuity suitability: annual NAIC suitability regulation update training for annuity agents — most states require completion before sales. Momenties schedules all enrollment windows.",
  },
  {
    icon: TrendingUp,
    title: "Client Renewal Pipeline, Claims Advocacy & Policy Review Calendar",
    description:
      "Insurance agency revenue is a renewal business — 85-95% of revenue comes from policy renewals, and systematic renewal pipeline management is the single most important practice management activity. P&C renewal pipeline calendar: 120-day renewal outreach for commercial lines (request loss runs, review coverage, market if needed), 90-day renewal for personal lines (proactive contact, coverage review, rate change preparation), and annual commercial lines account review (ACORD coverage checklist review, certificate of insurance updates, umbrella/excess adequacy review). Professional liability and specialty lines: annual D&O/EPLI/Cyber renewal timeline — Cyber insurance annual renewal requires current security questionnaire (typically released 90 days before expiration), updated data inventory, and MFA/EDR compliance documentation. Life insurance annual policy review: annual in-force illustration update for universal life policies (interest-sensitive policies require annual review to detect underfunded premium), annual term conversion window tracking, and annuity annual review and 1035 exchange evaluation. Medicare client annual review: annual Medicare plan comparison October 1 (plan data available for comparison before AEP), IRMAA income-related monthly adjustment amount annual assessment for high-income Medicare clients, and LIS/Extra Help application annual redetermination. Claims advocacy: annual claims review meeting for commercial clients, annual loss run analysis, and policy anniversary claims-made tail coverage assessment. Momenties tracks every renewal and review cycle.",
  },
  {
    icon: BarChart3,
    title: "Financial Compliance, Commission Reconciliation & Agency Tax Calendar",
    description:
      "Insurance agencies receive commission income from multiple carriers across multiple product lines — reconciling direct commissions, contingency bonuses, and override compensation creates a continuous accounting obligation with year-end tax complexity. Commission reconciliation calendar: monthly carrier statement reconciliation (direct bill vs. agency bill premium tracking), monthly contingency bonus progress tracking (carrier-specific written premium and loss ratio thresholds — typically Q3 reporting for year-end bonuses), and annual carrier profit sharing calculation (typically distributed February-March for prior year performance). Trust account management: in states requiring premium trust accounts (premium financing, surplus lines), monthly three-way reconciliation of trust account (agency bill collections vs. carrier remittances vs. ledger balance). State surplus lines tax: quarterly or annual surplus lines stamping office premium tax filing depending on state — deadlines vary from 30 to 90 days post-quarter. Producer payroll: annual producer W-2 and 1099 distribution (commission-only producers January 31), quarterly payroll tax deposits for employee producers, and annual DE 9/DE 9C filing. Carriers 1099: aggregate carrier 1099-MISC for agency fees over $600. Annual E&O audit: prepare complete files for E&O policy renewal with summary of any claims or reported incidents. FINRA annual compliance review: for agencies with registered representatives — annual compliance meeting documentation, annual fingerprint and background check renewal for variable license holders. Business entity renewal: annual LLC/corporation renewal report in state of domicile. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "Post-AEP Reconciliation & License Renewals",
    tasks: [
      "AEP enrollment reconciliation — confirm all December enrollments processed",
      "OEP January 1 through March 31 activation",
      "Producer W-2 and 1099 distribution (January 31)",
      "Carrier annual profit sharing statements received and reconciled",
      "Annual E&O renewal policy review (60-90 day advance)",
      "State license CE audit — identify CE gaps for upcoming renewals",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "Group Renewal Season & Compliance",
    tasks: [
      "April 1 group health renewal pipeline — 90-day outreach begins January",
      "Medicare OEP closes March 31",
      "Annual NAIC annuity suitability training update",
      "FINRA Firm Element annual CE for variable license holders",
      "Annual surplus lines stamping office Q1 premium tax filing",
      "Annual carrier appointment renewal review",
    ],
  },
  {
    phase: "May – Jun",
    title: "Mid-Year Client Reviews",
    tasks: [
      "Commercial lines 120-day renewal outreach for October 1 renewals",
      "Annual in-force universal life illustration review campaign",
      "D&O/Cyber renewal preparation for July 1 anniversaries",
      "Medicare client IRMAA assessment for high-income clients",
      "Annual life insurance term conversion window review",
      "Mid-year commission reconciliation audit",
    ],
  },
  {
    phase: "Jul – Sep",
    title: "AEP Certification & Medicare Prep",
    tasks: [
      "AHIP Medicare annual certification (available July-August)",
      "Carrier-specific Medicare Advantage certification modules",
      "CMS Medicare Marketing Guidelines annual review",
      "October 1 Medicare plan data available — comparison analysis",
      "AEP marketing materials compliance review",
      "October 1 group health renewals — final presentations",
    ],
  },
  {
    phase: "Oct – Nov",
    title: "AEP Peak Season",
    tasks: [
      "AEP opens October 15 — Medicare Advantage and PDP enrollment",
      "ACA Open Enrollment November 1 kickoff",
      "Annual P&C personal lines proactive renewal outreach",
      "Contingency bonus Q3 progress review",
      "Year-end commercial lines renewal push",
      "Annual agency E&O cyber questionnaire preparation",
    ],
  },
  {
    phase: "Dec",
    title: "Year-End Close & Planning",
    tasks: [
      "AEP closes December 7 — final enrollment confirmations",
      "Year-end commission reconciliation with all carriers",
      "State license renewals due Q1 — CE completion verification",
      "Annual trust account three-way reconciliation",
      "W-9 collection audit for all contractors paid ≥$600",
      "Annual business entity renewal report filing",
    ],
  },
]

const kpis = [
  { label: "State Producer Licenses Tracked", value: "1–50 states", note: "Per producer per line of authority" },
  { label: "AEP Certification Completion", value: "Before Oct 15", note: "AHIP + all carrier modules" },
  { label: "Renewal Pipeline Lead Time", value: "90–120 days", note: "Personal vs commercial lines" },
  { label: "E&O Renewal Window", value: "60–90 days", note: "Before expiration" },
  { label: "Monthly Commission Reconciliation", value: "12x/year", note: "Per carrier, per line" },
  { label: "Cyber Insurance Questionnaire", value: "90 days out", note: "Security posture documentation" },
]

const testimonial = {
  quote:
    "Producer license renewals in 18 states across P&C, L/H, and surplus lines — each with different CE hour requirements, ethics requirements, and LTC training requirements, annual E&O renewal 60 days in advance with current cyber security questionnaire, AHIP Medicare annual certification plus carrier-specific modules for 7 carriers all before October 15, ACA marketplace certification renewals for Covered California and the FFM, OEP January 1 through March 31 management, AEP October 15 through December 7 peak season, monthly commission statement reconciliation from 22 carriers, contingency bonus Q3 progress tracking for 6 carriers, annual carrier appointment renewals, commercial lines 120-day renewal pipeline for 145 commercial accounts, annual D&O/Cyber renewal with security questionnaire preparation for 38 clients, annual in-force UL illustration campaign for 52 policies, FINRA Firm Element annual CE for 4 variable-licensed producers, quarterly surplus lines premium tax filing in 3 states, annual profit sharing reconciliation, producer W-2 and 1099 processing January 31, and annual LLC renewal — simultaneously. Momenties mapped every deadline.",
  name: "Ngozi I.",
  title: "Principal, Independent Insurance Agency ($3.4M annual premium under management)",
}

export default function InsuranceAgencyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Insurance Agencies"
        title="Producer License Renewals. AEP Certifications. E&O Renewal. One Calendar."
        subtitle="Momenties tracks producer license renewals across all 50 states with CE requirements per line of authority, AHIP Medicare certification and carrier-specific modules before October 15 AEP deadline, ACA marketplace certification renewals, E&O annual renewal 60-day advance window, monthly commission reconciliation from all carriers, 90-120 day commercial lines renewal pipeline, annual D&O/Cyber renewal with security questionnaire, FINRA Firm Element annual CE for variable license holders, and quarterly surplus lines tax filings so insurance agencies never miss a compliance or revenue deadline."
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
            Four Calendar Pillars Momenties Manages for You
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
            Your Insurance Agency Compliance Year, Month by Month
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.tasks.map((task) => (
                    <li key={task} style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.55, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>›</span>
                      {task}
                    </li>
                  ))}
                </ul>
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
            What Momenties Tracks for Insurance Agencies
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div
                key={k.label}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#c5a35c", fontSize: "1.8rem", fontWeight: 700, marginBottom: 6 }}>{k.value}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>{k.label}</p>
                <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.82rem" }}>{k.note}</p>
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
