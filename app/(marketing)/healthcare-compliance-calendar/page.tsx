import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Healthcare Compliance Calendar | Momenties",
  description: "Momenties helps healthcare compliance officers track HIPAA training cycles, OIG exclusion screening, accreditation survey prep, Medicare enrollment revalidation, and annual compliance program reviews in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "HIPAA Training Cycles, Privacy Breach Response & Annual Compliance Program Review",
    description:
      "Healthcare compliance without structured HIPAA training calendars generates OCR audit exposure — OCR Phase 2 audit findings show that 70% of covered entities have inadequate workforce training documentation, making HIPAA training the most commonly cited compliance deficiency. HIPAA training calendar: annual HIPAA privacy and security awareness training (100% workforce completion — documentation of completion required, typically by December 31), HIPAA training for new employees within 30 days of hire, and role-specific HIPAA training for workforce members with access to ePHI systems (annual). Privacy breach response calendar: breach risk assessment completion (within 60 days of discovery of potential breach), OCR breach notification (60-day deadline for breaches affecting ≥500 individuals), business associate breach notification (10-day contractual notification in most BAAs), and HHS annual breach report (March 1 — for breaches affecting fewer than 500 individuals discovered in prior calendar year). HIPAA Security Rule annual review: annual risk analysis update (HIPAA Security Rule §164.308(a)(1) — required annually), security risk management plan update, and workforce security training annual documentation. Compliance program annual review: annual compliance program assessment, OIG compliance guidance update review, and annual board or governing body compliance report. CMS Conditions of Participation annual self-assessment. Momenties manages every compliance training and program milestone.",
  },
  {
    icon: RefreshCw,
    title: "OIG Exclusion Screening, Medicare Enrollment & Provider Credentialing Compliance Calendar",
    description:
      "OIG exclusion screening without structured monthly cycles exposes healthcare organizations to False Claims Act liability — knowingly employing or contracting with an excluded individual results in exclusion from Medicare and Medicaid and potential Civil Monetary Penalty of $20,000 per day per item or service billed. OIG exclusion screening calendar: monthly OIG LEIE (List of Excluded Individuals and Entities) screening for all employees, contractors, and vendors billing Medicare or Medicaid (monthly — OIG guidance recommends monthly screening), SAM.gov monthly exclusion search, and state Medicaid exclusion list monthly search. Medicare enrollment compliance: CMS-855I (individual provider) 5-year revalidation tracking, CMS-855B (organizational provider) 5-year revalidation, CMS-855S (supplier) 5-year revalidation, and PECOS annual profile verification for all enrolled providers. Stark Law and Anti-Kickback compliance: physician compensation arrangement annual fair market value review, space and equipment lease annual FMV assessment, and personal services arrangement annual review and renewal. False Claims Act compliance: annual FCA risk assessment, compliance hotline annual performance review, and non-retaliation policy annual training. Credentialing compliance: medical staff biennial reappointment cycle management, primary source verification policy annual review, and NPDB (National Practitioner Data Bank) query documentation. Momenties schedules every compliance cycle.",
  },
  {
    icon: TrendingUp,
    title: "CMS Quality Reporting, Value-Based Care Compliance & Accreditation Calendar",
    description:
      "Healthcare quality reporting without structured calendars misses CMS submission windows that affect payment — missed IPPS quality reporting deadlines result in 2% reduction to annual market basket update, representing millions of dollars in lost revenue for hospital systems. CMS quality reporting calendar: Inpatient Quality Reporting (IQR) annual data submission (August 15), Outpatient Quality Reporting (OQR) annual submission, MIPS data submission (March 31 for prior performance year), PQRS/QPP participation tracking, and CAHPS annual survey participation coordination. Hospital Value-Based Purchasing: HVBP quarterly domain performance review, annual TPS challenge period (30 days from notification), and annual domain weight change review. Joint Commission accreditation calendar: triennial survey readiness (continuous preparation), semi-annual internal mock surveys, and disease-specific certification renewal (annual or biennial per program). HIPAA audit protocol preparation: annual HIPAA audit readiness assessment using OCR audit protocol, HIPAA documentation update, and BA agreement annual review. HHS OIG Work Plan annual monitoring: quarterly OIG Work Plan update review (published quarterly — identifies areas of heightened scrutiny), compliance response documentation, and annual work plan impact analysis. State health department licensure: facility licensure annual renewal, state survey readiness continuous maintenance, and state-specific quality reporting compliance. Momenties consolidates the full compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "Compliance Training Calendar, Vendor Audits & Annual Risk Assessment Program",
    description:
      "Healthcare compliance programs without structured annual risk assessments fail OIG effectiveness standards — the OIG Seven Elements of an Effective Compliance Program require annual risk assessment as a fundamental component, and programs without documented annual risk assessments are found non-compliant in CMS audits. Annual compliance risk assessment calendar: organizational risk assessment (annual — identify high-risk areas based on OIG work plan, previous audit findings, billing error rates, and whistleblower trends), clinical compliance risk assessment (annual — high-risk clinical areas per prior year findings), and research compliance risk assessment (annual for organizations conducting federally funded research). Compliance training calendar: anti-kickback and Stark Law annual training (all physicians and executives), FCA annual training (all billing and coding staff), research compliance annual training (all investigators and study coordinators), and coding compliance annual training (all coding staff). Internal audit calendar: annual coding audit by CPT/ICD-10 high-risk code, annual billing audit by payer, mid-year coding and billing audit, and post-payment audit response plan. Vendor compliance: annual business associate agreement inventory review and update, BAA compliance monitoring, and vendor risk assessment annual update. Compliance hotline annual report review and response. Annual compliance effectiveness assessment for board presentation. Momenties tracks all compliance program cycles.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Compliance Program Launch & OIG Work Plan Review",
    description: "File HHS annual breach report (March 1 deadline — begin January). Review Q4 OIG Work Plan updates. Launch annual HIPAA risk analysis update. Complete annual compliance program assessment. Screen all employees in OIG LEIE and SAM.gov (January screening cycle). Review CMS MIPS reporting due March 31 for prior year. Launch Q1 coding audit.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "MIPS Submission & Annual Training Launch",
    description: "Submit MIPS quality data (March 31 deadline). Complete annual FCA and Anti-Kickback training for all billing staff. Launch annual HIPAA privacy and security awareness training cycle. Complete Q1 OIG exclusion screening. Review physician compensation arrangements for annual FMV update. Run annual coding and billing high-risk audit Q1 review.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year Compliance Review & Research Compliance Audit",
    description: "Complete mid-year compliance program effectiveness review. Run annual research compliance risk assessment and training. Complete mid-year HIPAA documentation review and BAA inventory audit. Review Medicare enrollment revalidations due H2. Complete Q2 OIG exclusion screening. Prepare H1 board compliance report. Run Joint Commission mid-year mock survey.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "CMS IQR Submission & Annual Risk Assessment",
    description: "Submit CMS IQR annual data (August 15 deadline). Launch annual organizational compliance risk assessment. Complete Q3 OIG exclusion screening. Review state facility licensure renewals due Q4. Complete annual Stark Law and Anti-Kickback arrangement review. Run annual vendor compliance audit and BAA review. Prepare HVBP annual TPS challenge if applicable.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "HIPAA Training Completion Push & Year-End Audit",
    description: "Push annual HIPAA training completion (target 100% by October for Q4 buffer). Run Q3 OIG Work Plan update review. Complete annual coding audit — high-risk CPT and ICD-10 codes. Run year-end Medicare enrollment revalidation check. Complete annual compliance hotline performance review. Prepare annual board compliance report for Q4 presentation.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Compliance Close & Next-Year Program Planning",
    description: "Complete annual HIPAA training documentation (100% workforce by December 31). Run Q4 OIG exclusion screening. Present annual compliance report to board. Lock next-year compliance training calendar and audit plan. Complete December Medicare enrollment PECOS verification. File CMS OQR annual submission. Plan next-year compliance risk assessment and program calendar.",
  },
]

const kpis = [
  {
    metric: "HIPAA Training Completion 100%",
    description: "Annual HIPAA training completion across entire workforce before December 31; below 95% documented creates OCR audit exposure and demonstrates ineffective compliance program",
  },
  {
    metric: "OIG Exclusion Screening Monthly 100%",
    description: "Monthly OIG LEIE and SAM.gov screening with no missed months; a single month gap creates CMP liability if an excluded individual provided services during the screening gap",
  },
  {
    metric: "CMS Quality Reporting On-Time Rate 100%",
    description: "Zero missed MIPS, IQR, or OQR submission deadlines; late submission forfeits the reporting period's quality payment adjustment affecting annual Medicare revenue",
  },
  {
    metric: "Annual Risk Assessment Completion 100%",
    description: "Annual compliance risk assessment completed and documented; absence is the single most common finding in OIG compliance program effectiveness reviews",
  },
  {
    metric: "Internal Audit Findings Resolution ≥ 90%",
    description: "Percentage of internal audit findings with corrective action plans implemented within 60 days; below 75% demonstrates ineffective compliance program in government investigations",
  },
  {
    metric: "Breach Response SLA Compliance 100%",
    description: "Zero late OCR breach notifications (60-day deadline); late notification is an independent HIPAA violation with separate penalty exposure beyond the underlying breach",
  },
]

const testimonial = {
  quote:
    "Annual HIPAA privacy and security training for 650 employees with 100% completion documentation, HHS annual breach report March 1 deadline, monthly OIG LEIE and SAM.gov screening for 480 employees and 220 contractors, quarterly state Medicaid exclusion screening, 5-year Medicare enrollment revalidation tracking for 180 providers, MIPS annual data submission March 31, CMS IQR submission August 15, annual HVBP domain review, triennial Joint Commission survey readiness with semi-annual mock surveys, annual organizational compliance risk assessment, annual Stark Law FMV reviews for 45 physician arrangements, annual FCA and Anti-Kickback training for billing staff, research compliance training for 60 investigators, annual coding audit across 12 high-risk CPT categories, annual BAA inventory review for 85 business associates, monthly compliance hotline case tracking, and quarterly board compliance reporting — all in spreadsheets. Momenties organized everything. We had zero missed training deadlines for the first time.",
  name: "Obiageli C.",
  title: "Chief Compliance Officer, Regional Health System",
}

export default function HealthcareComplianceCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Healthcare Compliance Calendar"
        title="HIPAA Training. OIG Screening. CMS Quality Reporting. One Calendar."
        subtitle="Momenties tracks annual HIPAA privacy and security training with 100% completion documentation, monthly OIG LEIE and SAM.gov exclusion screening, 5-year Medicare enrollment revalidation cycles, MIPS annual quality data submission deadlines, CMS IQR annual reporting, Joint Commission survey readiness with semi-annual mock surveys, annual compliance risk assessments, Stark Law FMV annual reviews, breach response 60-day notification tracking, and internal audit corrective action timelines so healthcare compliance officers never miss a regulatory deadline."
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
            Four Healthcare Compliance Pillars Momenties Tracks
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
            12-Month Healthcare Compliance Calendar
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
            Healthcare Compliance KPIs Momenties Keeps on Track
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
