import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Lactation Medicine Physicians | Momenties",
  description: "Momenties helps lactation medicine physicians manage ABIM/ABFM fellowship training, IBCLC certification, ABM fellowship CE, BFHI hospital accreditation participation, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "IBCLC Certification & Lactation Medicine Specialty MOC",
    description:
      "Physicians practicing lactation medicine typically hold International Board Certified Lactation Consultant (IBCLC) certification through IBLCE (International Board of Lactation Consultant Examiners) — a 5-year recertification cycle requiring 75 Continuing Education Recognition Points (CERPs) in lactation/breastfeeding, with at least 5 CERPs in communication or counseling skills. Lactation medicine physicians maintain their primary board certification — ABIM, ABFM, ABP, or ABOG — with concurrent MOC requirements independent of IBCLC renewal. Academy of Breastfeeding Medicine (ABM) membership with fellowship recognition (FABM) requires documented ABM CE participation. Physicians seeking additional credentials may pursue the American Board of Integrative Medicine (ABOIM) certification relevant for lactation medicine practitioners with integrative health approaches. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ABM Fellowship CE & Lactation Medicine Conference Calendar",
    description:
      "Academy of Breastfeeding Medicine (ABM) Annual Conference (October/November) is the primary lactation medicine CE event — abstract submission opens March-April, 7-8 months in advance. IBLCE-approved CERPs for IBCLC recertification must come from CERP-approved providers — ABM, ILCA (International Lactation Consultant Association), and academic medical center CME programs provide IBLCE-recognized CE. ILCA Annual Conference (July) provides IBCLC CERP CE. Breastfeeding and Human Lactation Study Group (BHLSG) annual symposia provide emerging lactation science CE. Safe Infant Sleep and Breastfeeding combined CE (updated AAP 2022 safe sleep guidelines integrated with breastfeeding support guidance) requires annual competency documentation at institutions with lactation programs. Maternal medication and lactation CE — LactMed database quarterly updates and Medications and Mother&apos;s Milk (Hale) annual update — requires annual review. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Baby-Friendly Hospital Initiative Accreditation & BFHI Compliance Calendar",
    description:
      "Lactation medicine physicians in BFHI (Baby-Friendly Hospital Initiative) accredited facilities participate in Baby-Friendly USA 10-step implementation review cycles — BFHI accreditation requires 4-year renewal with site assessment participation, staff education compliance (all perinatal staff trained in breastfeeding support), and annual self-assessment data submission. BFHI accreditation physician education requirements include completion of the 20-hour WHO/UNICEF lactation management course or equivalent — typically required for new physicians joining BFHI-designated programs and for re-accreditation documentation. Hospital breastfeeding quality metrics (exclusive breastfeeding rates at discharge, breastfeeding initiation rates, NICU breastfeeding support rates) require monthly data tracking and quarterly reporting. Joint Commission Perinatal Care Core Measures (breastfeeding exclusivity measure) require physician documentation compliance. Momenties manages all BFHI compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA & Lactation Program Quality Reporting Calendar",
    description:
      "Lactation medicine physicians prescribing medications to support lactation — domperidone (off-label in the US, legal under physician prescription), oxytocin for let-down support, or managing medication safety in breastfeeding — maintain DEA registration for controlled substance management concurrent with lactation consultation. Hospital lactation program quality reporting — JCAHO perinatal care standards, The Joint Commission breastfeeding measure compliance (breastfeeding initiation for qualifying newborns), and HEDIS prenatal and postpartum breastfeeding counseling measures — require physician documentation participation. Postpartum depression screening programs integrated with lactation support require annual competency update in EPDS administration and referral protocols. State medical license renewal (2-3 year cycles) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Updated AAP Breastfeeding Recommendations — Pediatrics 2022/2023 CE Update",
    description: "AAP 2022 policy statement extending exclusive breastfeeding recommendation to 6 months with continued breastfeeding to 2+ years — required ABM CE update for lactation medicine physicians on updated counseling frameworks, documentation for HEDIS breastfeeding measures, and BFHI compliance documentation.",
  },
  {
    title: "Galactagogue Evidence Review — Cochrane 2023",
    description: "Systematic review of domperidone, metoclopramide, and herbal galactagogues for insufficient milk supply — required IBLCE CERP CE update for lactation medicine physicians on evidence-based galactagogue prescribing, medication safety counseling, and documentation standards.",
  },
  {
    title: "NICU Breastfeeding Support Outcomes — JAMA 2024",
    description: "Multicenter study (n=3,000 NICU infants) confirming lactation medicine consultation reduces NICU breastfeeding cessation 38% — required ABM CE update for lactation medicine physicians on NICU-specific lactation support protocols, kangaroo mother care documentation, and BFHI NICU standards compliance.",
  },
  {
    title: "Postpartum Depression and Breastfeeding Duration — NEJM 2023",
    description: "Cohort study (n=12,000 postpartum women) demonstrating bidirectional relationship between PPD and breastfeeding cessation — required ABM CE update for lactation medicine physicians on integrated PPD screening in lactation consultations, referral protocols, and treatment-compatible breastfeeding support.",
  },
  {
    title: "Medications and Breastfeeding Safety — Obstetrics & Gynecology 2024",
    description: "Updated ACOG systematic review of psychiatric medications in breastfeeding — antidepressants, antipsychotics, and anxiolytics — required IBCLC CERP CE update on LactMed data integration, medication risk counseling frameworks, and shared decision-making documentation for continuing medications while breastfeeding.",
  },
  {
    title: "Digital Lactation Support Outcomes — Lancet 2023",
    description: "RCT (n=1,200 breastfeeding mothers) confirming telehealth lactation consultation equivalent to in-person consultation for breastfeeding duration at 6 months — required ABM CE update for lactation medicine physicians on telehealth lactation assessment protocols, documentation standards, and BFHI telehealth integration.",
  },
]

const testimonial = {
  quote:
    "IBCLC recertification with 75 CERPs on a 5-year cycle, ABIM MOC with quarterly LKA, FABM fellowship CE, BFHI 4-year re-accreditation participation, BFHI staff education compliance tracking, monthly breastfeeding quality metrics, JCAHO perinatal care compliance, DEA registration, and state license — all simultaneously. Momenties mapped every deadline. I renewed IBCLC with 15 surplus CERPs for the first time.",
  name: "Ngozi C.",
  title: "MD, IBCLC, FABM, Lactation Medicine Program Director",
}

export default function LactationMedicinePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Lactation Medicine Physicians"
        title="IBCLC Certification. BFHI Accreditation. ABM Fellowship CE. One Calendar."
        subtitle="Momenties tracks IBCLC recertification CERP cycles, primary board MOC, ABM fellowship CE, BFHI Baby-Friendly Hospital accreditation participation, breastfeeding quality metric reporting, JCAHO perinatal care compliance, DEA registration, and state license so lactation medicine physicians maintain every credential without administrative overload."
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
            Landmark Studies Shaping Lactation Medicine Practice
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
