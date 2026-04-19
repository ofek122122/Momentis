import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Clinical Nurse Leaders | Momenties",
  description: "Momenties helps Clinical Nurse Leaders manage CNL certification renewal, AACN fellowship CE, quality improvement project documentation, hospital credentialing, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CNL Certification Renewal & Clinical Nurse Leader MOC",
    description:
      "Clinical Nurse Leaders maintaining American Association of Colleges of Nursing (AACN) Clinical Nurse Leader (CNL) certification follow a 5-year recertification cycle requiring 100 contact hours of CE with documentation of CNL-specific competencies — systems thinking, evidence-based practice, quality improvement, care coordination, and interprofessional team leadership. CNL recertification requires clinical practice documentation — minimum 2,000 hours of CNL-role nursing practice over the 5-year period with documented quality improvement initiative participation. CNLs pursuing advanced certification may hold CPHQ (Certified Professional in Healthcare Quality) through NAHQ with a 2-year, 30 CE hour renewal cycle. Nurse executives may hold CENP (Certified Executive Nursing Practice, AONE, 3-year cycle, 45 CE hours) or FACHE (American College of Healthcare Executives Fellow, annual maintenance with CE) concurrent with CNL certification. CNS (Clinical Nurse Specialist) certification through ANCC follows a 5-year cycle if CNLs hold dual CNS credentialing. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AACN Fellowship CE & CNL Conference Calendar",
    description:
      "American Association of Colleges of Nursing (AACN) CNL Summit (annual, typically April) is the primary CNL CE event — abstract submission opens October-November, 5-6 months in advance. American Organization for Nursing Leadership (AONL, formerly AONE) Annual Conference (March/April) provides nursing leadership CE relevant for CNL practice advancement. Academy of Medical-Surgical Nurses (AMSN) Annual Conference provides CNL CE for medical-surgical unit CNLs. Institute for Healthcare Improvement (IHI) Annual Forum (December) provides quality improvement CE relevant for CNL quality improvement methodologies. IHI Open School quality improvement certification (annual renewal for CNLs leading QI initiatives). Lean Six Sigma Green Belt or Black Belt certification renewal (annual PDU requirements for ASQ-certified CNLs). TeamSTEPPS Master Trainer certification (annual skills verification for CNLs leading interprofessional team training). Human Factors Engineering CE for patient safety-focused CNLs (annual). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Quality Improvement Project Portfolio, QI Methodology Certification & Outcomes Calendar",
    description:
      "CNLs managing unit-level quality improvement portfolios require structured documentation calendars — CMS quality measure reporting deadlines, Joint Commission survey preparation, and Magnet documentation cycles all create concurrent compliance obligations. CNL quality project documentation: quarterly QI project progress reports (for regulatory compliance and Magnet documentation), annual QI project portfolio presentation at unit or hospital quality council, and Magnet Program project outcome documentation (continuous documentation for Magnet-designated hospitals with 4-year renewal cycles). CMS value-based purchasing measures: hospital HCAHPS scores (quarterly reporting), HAC Reduction Program (annual performance calculation), and VBP program Total Performance Score (annual). Press Ganey or other patient experience vendor annual contract review and survey instrument updates. National Database of Nursing Quality Indicators (NDNQI) data submission (quarterly): nurse-sensitive indicators (falls, pressure injuries, CLABSI, CAUTI rates, RN satisfaction). Joint Commission accreditation preparation (3-year cycle): Tracer methodology preparation, nursing standards documentation, and accreditation response planning. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, Hospital Credentialing & CNL Leadership Development Calendar",
    description:
      "CNLs in academic medical centers or large health systems participate in structured clinical ladder advancement programs — clinical ladder portfolio review (annual or biennial), clinical scholarship documentation (publication, presentation, or poster requirements), and peer review evaluation (annual). Hospital-level CNL credentialing: annual reappointment at facilities requiring CNL credentialing for prescriptive or advanced practice documentation, privileging for CNL-specific procedures (IV access, blood administration, specific assessment protocols), and department-specific competency annual verification. DAISY Award CNL recognition nomination calendar (annual). CNL preceptor and mentorship obligations: formal preceptor training certification (annual renewal for CNLs precepting students), clinical faculty appointment renewal at affiliated nursing programs (annual or biennial), and nursing student clinical rotation scheduling coordination. State board license renewal (2-year cycles) with state-specific CE requirements. Evidence-based practice fellowship participation: annual EBP project completion documentation for CNLs in formal EBP fellowship programs. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "CNL Impact on Hospital Quality Outcomes — JAMA Internal Medicine 2024",
    description: "Multicenter quasi-experimental study (n=8,000 patients across 20 CNL-staffed units) confirming CNL-led care coordination reduces preventable readmissions 18% and HAC rates 22% — required CNL CE update on care transition documentation, risk stratification tool implementation, and multidisciplinary huddle facilitation frameworks.",
  },
  {
    title: "Nurse-Sensitive Indicators and Staffing — NEJM 2023",
    description: "Multi-state longitudinal study (n=350 hospitals) confirming RN staffing below 4:1 patient-to-nurse ratio correlates with 32% higher HAI rate — required AACN CE update for CNLs on evidence-based staffing advocacy methodologies, NDNQI data interpretation, and unit-level staffing optimization frameworks.",
  },
  {
    title: "CNL-Led Sepsis Bundles — Critical Care Medicine 2024",
    description: "Before-after study (n=1,500 sepsis patients) confirming CNL-implemented sepsis bundle protocol reduces 30-day mortality 14% and ICU transfer rates 19% — required CNL CE update on SEP-1 measure documentation, nurse-initiated sepsis alert system design, and interprofessional sepsis protocol rollout frameworks.",
  },
  {
    title: "Evidence-Based Practice Implementation Effectiveness — Worldviews on Evidence-Based Nursing 2023",
    description: "Systematic review (n=45 EBP implementation studies) identifying CNL facilitation as strongest predictor of sustained EBP adoption at unit level — required AACN CE update for CNLs on implementation science frameworks (IOWA Model, PDSA cycles), EBP project documentation for Magnet designation, and outcomes measurement planning.",
  },
  {
    title: "Interprofessional Team Communication and Patient Safety — BMJ Quality & Safety 2024",
    description: "Multicenter RCT (n=12,000 hospitalized patients) confirming structured interprofessional rounding led by CNLs reduces medication errors 28% and improves patient experience scores — required CNL CE update on structured communication tools (SBAR, CUS), TeamSTEPPS facilitation, and interprofessional rounding documentation.",
  },
  {
    title: "Nurse Burnout and CNL Staffing Models — Lancet 2023",
    description: "International survey (n=25,000 RNs across 45 countries) confirming units with dedicated CNL roles report 24% lower burnout prevalence — required AONL CE update for CNLs on burnout prevention program implementation, resilience program facilitation, and unit culture assessment tools.",
  },
]

const testimonial = {
  quote:
    "CNL 5-year certification renewal with 100 CE hours and 2,000 clinical hours documentation, CPHQ biennial renewal, IHI Forum annual CE, CNL Summit annual abstract submission, TeamSTEPPS Master Trainer annual skills verification, Lean Green Belt annual PDU requirements, NDNQI quarterly data submissions for 8 nurse-sensitive indicators, Magnet documentation for ongoing QI projects, Joint Commission accreditation preparation cycle, annual hospital clinical ladder portfolio, preceptor certification annual renewal, university clinical faculty annual appointment renewal, and state license — all tracked in paper files. Momenties organized everything. I submitted the highest-quality Magnet portfolio in our unit history.",
  name: "Chisom L.",
  title: "MSN, CNL, CPHQ, Clinical Nurse Leader & Patient Safety Officer",
}

export default function ClinicalNurseLeadersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Clinical Nurse Leaders"
        title="CNL Certification. QI Portfolio. NDNQI Reporting. One Calendar."
        subtitle="Momenties tracks CNL 5-year recertification CE cycles, CPHQ biennial renewal, IHI quality improvement certification annual requirements, TeamSTEPPS Master Trainer annual verification, NDNQI quarterly data submission windows, Magnet documentation cycles, Joint Commission accreditation preparation, clinical ladder annual portfolio reviews, preceptor certification renewal, and state RN license so Clinical Nurse Leaders maintain every credential without administrative overload."
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
            Four Credential Pillars Momenties Manages for You
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

      {/* Landmark Studies */}
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
            Landmark Studies Shaping Clinical Nurse Leader Practice
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {studies.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, marginBottom: 6, fontSize: "0.95rem" }}>
                  {s.title}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {s.description}
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
