import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Hospitalists | Momenties",
  description: "Momenties helps pediatric hospitalists manage ABP board certification, PHM subspecialty certification, SHM/AAP fellowship CE, pediatric quality improvement reporting, PALS instructor certification, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABP Board Certification & Pediatric Hospital Medicine MOC",
    description:
      "Pediatric hospitalists maintain American Board of Pediatrics (ABP) general pediatrics certification — a 5-year MOC cycle requiring 40 ABP-approved CME credits annually, including documented patient safety and quality improvement activities. The ABP Pediatric Hospital Medicine (PHM) subspecialty certification — available since 2019 — requires a separate 10-year recertification examination covering inpatient care, quality metrics, patient safety, and transitions of care. PHM subspecialty MOC requires additional hospitalist-specific CME including SHM learning activities and pediatric quality collaborative work. ABP portfolio-based MOC includes QI project documentation — hospitalists managing quality initiatives (sepsis bundles, readmission reduction, CLABSI prevention) generate MOC credit through documented improvement cycles. Momenties tracks all ABP timelines with subspecialty-specific requirements.",
  },
  {
    icon: Clock,
    title: "SHM Fellowship CE & Pediatric Hospitalist Conference Calendar",
    description:
      "The Society of Hospital Medicine (SHM) Annual Conference (HM) — held March/April — provides PHM-specific CE; abstract submission opens October-November for spring conferences, 5 months in advance. Pediatric Hospital Medicine (PHM) Annual Conference — held jointly by AAP, APA, and SHM — is held July/August with abstract submission deadlines in January-February. AAP National Conference & Exhibition (October/November) provides general pediatrics CE and AAP section-specific CME for hospitalists with subspecialty interests. SHM PHM Fellowship recognition program requires documented CE in transitions of care, clinical excellence, quality/safety, and medical education. Academic pediatric hospitalists participating in medical student and resident education must complete faculty development CE — AMEE and ACGME faculty roles require documented teaching competency renewal. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "PALS/NRP Instructor Certification & Quality Collaborative Reporting",
    description:
      "Pediatric hospitalists maintaining PALS instructor or provider certification (2-year renewal cycle) and NRP (Neonatal Resuscitation Program) certification for hospitals with newborn admissions manage independent certification timelines. ACLS certification (2-year cycle) is required for adult transfers or shared-unit hospitalists. Pediatric quality collaborative reporting — PHIS (Pediatric Health Information System) metrics, PQMP (Pediatric Quality Measures Program) reporting, and AAP Children&apos;s Hospital Association collaborative data submission — requires quarterly data documentation. CLIA waiver certificate maintenance for point-of-care testing performed by hospitalists, and POCUS (point-of-care ultrasound) credentialing for hospitalists performing bedside ultrasound — lung, cardiac, and IV access — require institutional credentialing with annual case volume documentation. Momenties tracks all certification cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA & Hospital Quality Improvement Compliance",
    description:
      "Pediatric hospitalists participating in hospital quality improvement committees — medication safety, CLABSI and CAUTI prevention, sepsis protocol adherence, and readmission reduction — document QI committee participation for ABP MOC QI credit, typically requiring 10+ committee meetings per year with documented outcome measures. Joint Commission readiness — for hospitals subject to TJC accreditation — requires hospitalist documentation review compliance, discharge summary completion rates (within 30 days), and infection control training annual renewal. Children&apos;s hospital designation requirements (CMS Children&apos;s Hospital Graduate Medical Education programs) require hospitalist faculty documentation. State medical license renewal (2-3 year cycles), DEA registration for controlled substance prescribing, mandated reporter training, and implicit bias CE (required in 23 states for license renewal) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "PHM Subspecialty Training Outcomes — Pediatrics 2023",
    description: "National survey of PHM fellowship graduates (n=340) confirming subspecialty training impact on quality improvement leadership, evidence-based practice, and academic productivity — established SHM PHM fellowship CE requirements for clinical excellence and QI leadership documentation.",
  },
  {
    title: "Pediatric Sepsis Bundle Compliance — NEJM 2024",
    description: "IPSO multicenter trial (n=3,600 pediatric sepsis patients) confirming 1-hour sepsis bundle compliance 40% mortality reduction — required AAP/SHM CE update for pediatric hospitalists on sepsis recognition, bundle adherence, and quality collaborative reporting protocols.",
  },
  {
    title: "High-Value Care in Pediatric Hospitalists — JAMA Pediatrics 2023",
    description: "National study (n=180 children&apos;s hospitals) identifying hospitalist-driven interventions reducing low-value care by 28% — established ABP MOC quality improvement credit framework for pediatric hospitalists documenting evidence-based care reduction initiatives.",
  },
  {
    title: "Standardized Discharge Processes in PHM — Pediatrics 2024",
    description: "IPASS discharge communication multicenter study (n=15,000 pediatric discharges) demonstrating structured handoff protocols reducing 30-day readmissions by 22% — required SHM CE update for pediatric hospitalists on care transitions, discharge communication, and readmission reduction programs.",
  },
  {
    title: "POCUS for Pediatric IV Access — Annals of Emergency Medicine 2023",
    description: "Multicenter POCUS guidance for difficult pediatric IV access (n=1,200 patients) demonstrating 67% first-attempt success improvement — updated SHM/AAP CE for pediatric hospitalists pursuing POCUS credentialing for vascular access and bedside assessment.",
  },
  {
    title: "Pediatric Early Warning Systems — NEJM 2023",
    description: "PEWS implementation multicenter study (n=12,000 pediatric inpatients) confirming Pediatric Early Warning Scores reduce unexpected cardiac arrest rates — required PHM CE update for hospitalists on early deterioration recognition, rapid response integration, and PEWS documentation protocols.",
  },
]

const testimonial = {
  quote:
    "ABP general pediatrics MOC, PHM subspecialty recertification, SHM fellowship CE, PALS instructor renewal, NRP recertification, POCUS credentialing at two hospitals, Joint Commission prep documentation, PHIS quarterly data submission, and state license — all running on different clocks. Momenties put every deadline in one view. I haven&apos;t scrambled for a credential in 18 months.",
  name: "Obioma A.",
  title: "MD, FHM, Pediatric Hospital Medicine Division Director",
}

export default function PediatricHospitalistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Hospitalists"
        title="ABP PHM Certification. PALS Instructor. Quality Reporting. One Calendar."
        subtitle="Momenties tracks ABP general and PHM subspecialty certification, SHM fellowship CE, PALS and NRP instructor recertification, pediatric quality collaborative reporting, POCUS credentialing, and hospital quality improvement documentation so pediatric hospitalists maintain every credential without administrative chaos."
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
            Landmark Studies Shaping Pediatric Hospital Medicine Practice
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
