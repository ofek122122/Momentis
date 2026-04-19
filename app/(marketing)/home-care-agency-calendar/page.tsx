import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Home Care Agency Calendar | Momenties",
  description: "Momenties gives home care agencies an AI-powered calendar that tracks Medicare CoP compliance, Joint Commission recertification, aide competency renewals, OASIS submission deadlines, and CAHPS survey windows — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "Agency License & Accreditation Renewal Calendar",
    description:
      "Home care agencies managing facility and staff credential cycles track state home health agency license renewal (annual or biennial depending on state health department — license renewal 60-90 days advance application required), Medicare Home Health Agency Certification renewal (CMS 855A revalidation every 5 years plus annual PECOS verification — Conditions of Participation survey readiness maintained continuously), CHAP (Community Health Accreditation Partner) accreditation (3-year cycle, continuous standards compliance with triennial on-site survey), ACHC (Accreditation Commission for Health Care) accreditation (3-year cycle, annual self-assessment with triennial on-site survey), or Joint Commission Home Care accreditation (3-year cycle, annual performance review with triennial survey). Caregiver and clinician credentials: annual RN license verification for all clinical staff, annual Home Health Aide (HHA) competency evaluation renewal (CMS CoP §484.80 — annually documented), annual HHA/CNA in-service training documentation (12 hours annual in-service required by most states), and biennial CPR/BLS renewal for all direct care staff. OASIS coordinator OASIS-E training: annual OASIS-E update training for all OASIS-completing RNs. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "OASIS Submission Deadlines & Medicare CoP Calendar",
    description:
      "Home care agencies participating in Medicare Home Health must submit OASIS assessments with strict timing requirements: OASIS-E Start of Care (SOC) submission within 30 days of SOC date (iQIES submission), OASIS-E Resumption of Care (ROC) within 30 days of ROC date, OASIS-E Follow-Up (60-day) within 30 days of assessment date, OASIS-E Transfer to Inpatient within 30 days, and OASIS-E Discharge within 30 days. Monthly OASIS submission compliance audit (iQIES rejection rate tracking). HIPPS rate accuracy: quarterly HIPPS code accuracy audit — verify PDGM grouper assignment matches clinical documentation. CMS Conditions of Participation annual compliance calendar: annual infection prevention and control program review (CoP §484.70), annual QAPI program annual review (CoP §484.65), annual patient rights and responsibilities policy review, and annual emergency preparedness plan review and drill documentation (CoP §484.102 — annual full-scale exercise). Home Health Value-Based Purchasing (HHVBP): annual HHVBP measure baseline review (CMS expanded HHVBP to all Medicare-certified HHAs 2023 — affects payment adjustment). Annual HH-CAHPS survey vendor contract renewal. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "QAPI, Clinical Outcomes & Home Care Quality Calendar",
    description:
      "Home care agencies maintaining Medicare CoP and Joint Commission accreditation manage comprehensive QAPI calendars: quarterly QAPI committee meeting and meeting minutes documentation (CoP §484.65 — quarterly review of clinical and administrative performance improvement projects), quarterly adverse event log review (falls, medication errors, hospitalizations — quarterly RCA for high-frequency events), quarterly rehospitalization rate review (CoP standard — 30-day rehospitalization rate review with improvement action plan), and annual QAPI plan update (CoP requires annual written QAPI plan). Home Health Compare quality measures: quarterly Home Health Compare star rating review (CMS updates quarterly — monitor process and outcome measure performance), quarterly HHVBP composite quality measure tracking (7 measures: discharge to community, acute care hospitalization, emergency department use, improvement in function, medication reconciliation, timely initiation, influenza immunization). Patient safety: quarterly falls prevention protocol documentation review, quarterly wound care outcome documentation review. Infection prevention: monthly NHSN home health infection surveillance reporting (for agencies enrolled in NHSN HH tracking). Staff competency: annual HHA competency evaluation documentation audit. Annual state OASIS accuracy audit participation. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Payer Enrollment, Background Checks & Home Care Business Calendar",
    description:
      "Home care agencies managing payer enrollment and compliance maintain: annual Medicare enrollment PECOS verification for the agency, annual state Medicaid home health provider enrollment renewal (state-specific annual or biennial — submit 90 days early), annual managed Medicaid MCO re-credentialing for contracted payers (United, Aetna, Molina, Centene — annual or biennial re-credentialing cycles), and annual workers&apos; compensation home health panel renewal. Staff background check compliance calendar: OIG Exclusions List monthly check for all new hires and annual re-check for all existing staff (LEIE monthly update — failure to check triggers Medicare billing exclusion), annual state criminal background recertification requirement for HHAs (many states require periodic background rechecks — annual or 3-year depending on state), and annual sex offender registry check for direct care staff. Financial compliance: annual cost report filing (CMS Form 2552-10 — home health cost report due 5 months after fiscal year end), annual audit of physician signature compliance (CMS Plan of Care signatures — 60-day certification signatures required, no-signature billing errors risk). Annual flu vaccine documentation for all direct care patient-facing staff (CMS CoP influenza vaccination requirement). Benefits: annual FMLA and ADA policy review update. Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "OIG Check & QAPI Annual Plan",
    tasks: [
      "Annual QAPI plan update — document goals, performance improvement projects, and outcomes for current year",
      "Annual OIG/LEIE exclusions list check for all existing staff (in addition to monthly new hire checks)",
      "Annual emergency preparedness plan review and update",
      "Annual infection prevention and control program annual review",
      "OASIS-E submission compliance audit — Q4 prior-year rejection rate review",
    ],
  },
  {
    month: "March – April",
    title: "Annual Flu Vaccine Documentation & License Renewal",
    tasks: [
      "Annual state home health agency license renewal application (60-90 days advance — many states: April-June due)",
      "Quarterly QAPI committee meeting and minutes documentation (Q1)",
      "Annual OASIS-E training update for all OASIS-completing RNs (OASIS-E content annual update review)",
      "Annual patient rights and responsibilities policy review and update",
      "Quarterly Home Health Compare star rating review — Q1 CMS update",
    ],
  },
  {
    month: "May – June",
    title: "Annual Cost Report & Competency Push",
    tasks: [
      "Annual CMS Form 2552-10 home health cost report (due 5 months after fiscal year end — June 1 for December 31 FYE)",
      "Annual HHA competency evaluation cycle — schedule all evaluations due by year-end",
      "Annual HHA/CNA 12-hour in-service training documentation — verify hours logged for all aides",
      "Annual state Medicaid home health provider enrollment renewal (submit 90 days early)",
      "Quarterly QAPI committee meeting and minutes documentation (Q2)",
    ],
  },
  {
    month: "July – August",
    title: "Mid-Year Background Checks & HHVBP Review",
    tasks: [
      "Annual state criminal background recheck for direct care staff (states requiring periodic rechecks)",
      "Annual sex offender registry check for all direct care patient-facing staff",
      "Mid-year HHVBP composite quality measure tracking review — assess trajectory before year-end",
      "Biennial CPR/BLS renewal for all direct care staff — audit expiration dates",
      "Quarterly QAPI committee meeting and minutes documentation (Q3)",
    ],
  },
  {
    month: "September – October",
    title: "Annual Flu Campaign & CoP Drill",
    tasks: [
      "Annual influenza vaccination documentation for all patient-facing staff (CMS CoP requirement — document by November 1)",
      "Annual emergency preparedness full-scale exercise (CoP §484.102 — document date, participants, and corrective actions)",
      "Annual managed Medicaid MCO re-credentialing applications (United, Aetna, Molina — 90-day advance submission)",
      "Quarterly Home Health Compare star rating review — Q3 CMS update",
      "Annual FMLA and ADA policy review and update for all direct care staff",
    ],
  },
  {
    month: "November – December",
    title: "Year-End QAPI Review & Enrollment Prep",
    tasks: [
      "Quarterly QAPI committee meeting and minutes documentation (Q4)",
      "Annual QAPI annual program performance review and documentation",
      "Medicare enrollment PECOS annual verification for the agency",
      "Annual physician signature compliance audit — 60-day certification signatures for all active plans of care",
      "Annual workers&apos; comp home health panel renewal applications for Q1 payers",
    ],
  },
]

const kpis = [
  {
    metric: "OASIS Submission On-Time Rate",
    target: "≥ 98% submitted within 30 days",
    description: "Late OASIS submissions trigger iQIES compliance flags and potential Medicare payment holds — track every episode.",
  },
  {
    metric: "OIG/LEIE Monthly Check Compliance",
    target: "100% of staff checked monthly",
    description: "Billing with an OIG-excluded employee triggers full Medicare reimbursement repayment plus exclusion — no exceptions.",
  },
  {
    metric: "HHA Annual Competency Rate",
    target: "100% of aides evaluated annually",
    description: "Missing HHA competency evaluations violate CMS CoP §484.80 and trigger survey deficiencies — track every aide.",
  },
  {
    metric: "30-Day Rehospitalization Rate",
    target: "Below national benchmark (≤ 13%)",
    description: "Rehospitalization rate is a primary HHVBP measure — rates above benchmark reduce Medicare payments by up to 5%.",
  },
  {
    metric: "QAPI Meeting Documentation",
    target: "Quarterly minutes filed within 30 days",
    description: "Missing QAPI meeting documentation is a Joint Commission and Medicare CoP survey deficiency — document every quarter.",
  },
  {
    metric: "Influenza Staff Vaccination Rate",
    target: "≥ 80% of patient-facing staff",
    description: "CMS CoP requires annual influenza vaccination documentation — agencies below 80% face survey deficiency citations.",
  },
]

const testimonial = {
  quote:
    "Annual state home health agency license renewal in 3 states on different cycles, Medicare CMS 855A 5-year revalidation tracking, CHAP accreditation triennial on-site survey prep with annual self-assessment, monthly OIG/LEIE exclusions list check for all 84 direct care staff, annual OIG re-check for all existing staff, annual state criminal background recheck for aides in 2 states with periodic recheck requirements, OASIS-E submission 30-day compliance tracking for 340 active episodes, monthly OASIS rejection rate audit, quarterly HIPPS code accuracy audit, quarterly QAPI committee meeting and minutes for 3 locations, annual QAPI plan update, annual infection prevention program review, annual emergency preparedness plan review, annual full-scale EP drill documentation, quarterly Home Health Compare and HHVBP composite measure tracking, annual HHA competency evaluation scheduling for 56 aides, annual 12-hour in-service training documentation for all aides, biennial CPR/BLS renewal tracking for all clinical staff, annual OASIS-E update training for 12 OASIS-completing RNs, annual flu vaccine documentation for all patient-facing staff, annual state Medicaid home health enrollment renewal in 3 states, annual managed Medicaid MCO re-credentialing for 4 payers, annual CMS Form 2552-10 cost report June deadline, annual physician signature compliance audit for 340 active plans of care, and annual workers&apos; comp panel renewals — all simultaneously across 3 locations. Momenties mapped every deadline.",
  name: "Chidinma HC.",
  title: "RN, BSN, Administrator & Owner, 3-Location Medicare-Certified Home Care Agency",
}

export default function HomeCareAgencyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Home Care Agency Calendar"
        title="OASIS Deadlines. OIG Monthly Checks. QAPI Documentation. One Calendar."
        subtitle="Momenties tracks OASIS-E submission 30-day windows for every episode, monthly OIG/LEIE exclusions checks for all staff, quarterly QAPI committee meeting documentation, annual HHA competency evaluations, annual in-service training hours, CMS CoP annual emergency preparedness drill documentation, annual flu vaccine documentation, HHVBP composite measure quarterly tracking, annual state Medicaid enrollment renewals, and annual managed Medicaid MCO re-credentialing — so your home care agency never misses a compliance deadline."
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
            Four Calendar Pillars for Home Care Agency Compliance
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
            Your Home Care Agency Compliance Calendar
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
            Six KPIs Every Home Care Agency Should Track
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
