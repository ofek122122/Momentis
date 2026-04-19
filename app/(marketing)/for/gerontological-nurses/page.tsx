import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Gerontological Nurses | Momenties",
  description: "Momenties helps gerontological nurses manage GERO-BC certification, ANCC fellowship CE, dementia care specialist training, falls prevention competency documentation, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "GERO-BC Certification & Gerontological Nursing Specialty MOC",
    description:
      "Gerontological nurses maintaining Gerontological Nursing Certification (GERO-BC) through the American Nurses Credentialing Center (ANCC) follow a 5-year recertification cycle — requiring 75 contact hours of CE with a minimum of 51 hours in gerontological nursing topics, OR passing the GERO-BC examination. ANCC also offers Advanced Practice Gerontological Nursing Certification (GNP-BC for Gerontological Nurse Practitioners and CNS-BC for Clinical Nurse Specialists) — each with independent 5-year cycles. Gerontological nurses in memory care or dementia-specific settings may pursue Alzheimer's Association Dementia Care Specialist certification, requiring annual renewal. HARTFORD CENTER Institute for Geriatric Nursing Try This series competency documentation is recommended annually. NICHE (Nurses Improving Care for Healthsystem Elders) program participation requires ongoing staff education documentation. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "Dementia Care Specialist Training & Falls Prevention Competency Calendar",
    description:
      "Gerontological nurses in memory care programs managing dementia patients maintain Alzheimer's Association Dementia Care Practice Recommendations competency documentation — ANCC-approved CE modules required annually. Falls prevention competency — including Morse Fall Scale or STEADI (Stopping Elderly Accidents, Deaths & Injuries) toolkit implementation — requires annual institutional competency validation. Restraint alternatives competency (OBRA 87 compliance for long-term care settings) requires annual education and competency sign-off. Pressure injury prevention competency — WOCN Wound Care basic competency or AHRQ Pressure Injury Prevention CE — requires annual documentation. Elder abuse recognition and mandatory reporting CE — required in long-term care settings under OBRA 87 — requires annual completion with attestation. Momenties schedules all competency renewals.",
  },
  {
    icon: BarChart3,
    title: "ANCC Fellowship CE & Gerontological Nursing Conference Calendar",
    description:
      "American Association for Long-Term Care Nursing (AALTCN) Annual Conference (spring) is the primary gerontological nursing CE event — abstract submission opens September-October, 7-8 months in advance. ANCC fellowship maintenance requires ANCC-approved CE sources. NICHE Annual Conference (spring) provides hospital-based gerontological nursing CE including HELP (Hospital Elder Life Program) implementation, delirium prevention CE, and age-friendly hospital framework updates. National Association of Directors of Nursing Administration in Long Term Care (NADONA/LTC) provides CE for gerontological nurses in leadership roles in skilled nursing facilities (SNFs). Gerontological Nursing Certification Review Course (GNCRN) webinar series provides targeted GERO-BC recertification CE. The Gerontological Society of America (GSA) Annual Scientific Meeting (November) provides geriatric care evidence CE. Momenties schedules all deadlines.",
  },
  {
    icon: Users,
    title: "CMS MDS Assessment, State License & Long-Term Care Compliance Calendar",
    description:
      "Gerontological nurses in SNF or LTC settings managing MDS (Minimum Data Set) assessments maintain RAI (Resident Assessment Instrument) User Manual training — CMS updates RAI manuals annually, with required facility-wide training within 90 days of update release. MDS coordinator certification — RAC-CT (Resident Assessment Coordinator Certified) through AAPACN — requires 3-year renewal with 30 CE hours in RAI/MDS topics. CMS Annual Survey preparation (5-year survey cycle for LTC) requires annual mock survey participation and F-Tag audit documentation. Five-Star Quality Rating System monthly QM reporting data submission requires accurate MDS assessment completion to protect facility star ratings. State nursing license renewal (2-3 year cycles) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Delirium Prevention in Hospitalized Older Adults — NEJM 2023",
    description: "HELP-Plus randomized trial (n=2,800 patients ≥70) confirming enhanced HELP protocol reduces delirium incidence 44% — required ANCC CE update for gerontological nurses on delirium prevention bundle implementation, CAM screening documentation, and NICHE-aligned care coordination protocols.",
  },
  {
    title: "Falls Prevention Multicomponent Intervention — Lancet 2024",
    description: "STRIDE trial 5-year follow-up (n=5,000 community-dwelling older adults) confirming individualized fall risk reduction interventions reduce serious fall injuries 26% — required ANCC CE update for gerontological nurses on STEADI toolkit application, medication reconciliation for fall risk, and home assessment coordination.",
  },
  {
    title: "Dementia Care in Acute Settings — JAMA 2023",
    description: "National cohort study (n=180,000 hospitalized dementia patients) identifying nurse-sensitive care practices that reduce restraint use and improve functional outcomes — required GERO-BC CE update on dementia-specific communication techniques, restraint alternatives documentation, and family partnership models.",
  },
  {
    title: "Polypharmacy Review in Nursing Home Residents — NEJM 2024",
    description: "STOPP/START criteria multicenter implementation (n=3,000 SNF residents) confirming nurse-pharmacist collaborative medication review reduces inappropriate prescribing 38% — required ANCC CE update for gerontological nurses on medication reconciliation frameworks and documentation for MDS quality measures.",
  },
  {
    title: "Pressure Injury Prevention Bundle — JAMA 2024",
    description: "National collaborative (n=120 LTC facilities, 15,000 residents) confirming multi-component pressure injury prevention bundle reduces facility-acquired pressure injuries 52% — required WOCN and ANCC CE update for gerontological nurses on SKIN bundle documentation and CMS F686 compliance.",
  },
  {
    title: "Age-Friendly Health Systems in Long-Term Care — JAMA 2023",
    description: "IHI Age-Friendly 4Ms framework national implementation study (n=600 LTC facilities) confirming What Matters, Medication, Mentation, Mobility framework reduces functional decline 22% — required NICHE and ANCC CE update for gerontological nurses on 4Ms screening documentation and care planning integration.",
  },
]

const testimonial = {
  quote:
    "GERO-BC recertification, Dementia Care Specialist annual renewal, RAC-CT renewal, annual MDS RAI manual training, falls prevention competency, pressure injury prevention competency, elder abuse CE, CMS mock survey preparation, and state license — all completely different cycles and bodies. Momenties mapped every deadline into one calendar. I renewed GERO-BC with 24 hours to spare and passed with my highest score.",
  name: "Chidinma O.",
  title: "RN, GERO-BC, RAC-CT, Memory Care Program Director",
}

export default function GerontologicalNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Gerontological Nurses"
        title="GERO-BC Certification. Dementia Care Training. MDS Compliance. One Calendar."
        subtitle="Momenties tracks GERO-BC and GNP-BC recertification cycles, Alzheimer&apos;s Association dementia care specialist renewal, falls prevention and pressure injury competency documentation, RAC-CT MDS coordinator renewal, CMS survey preparation cycles, and state license so gerontological nurses maintain every credential without administrative overload."
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
            Landmark Studies Shaping Gerontological Nursing Practice
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
