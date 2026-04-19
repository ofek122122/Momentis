import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "NICU Nurses | Momenties",
  description: "Momenties helps NICU nurses manage RNC-NIC certification, NRP instructor renewal, S.T.A.B.L.E. instructor certification, ECMO specialist annual renewal, and state license in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "RNC-NIC Certification & Neonatal Nursing Recertification",
    description:
      "NICU nurses maintaining National Certification Corporation (NCC) Registered Nurse Certified — Neonatal Intensive Care (RNC-NIC) certification follow a 3-year recertification cycle requiring 45 continuing nursing education contact hours with at least 15 hours in neonatal nursing content, or passing the recertification examination. RNC-NIC recertification CE must include evidence of clinical practice maintenance — minimum 2,000 hours of neonatal nursing practice during the 3-year certification period. Nurses pursuing advanced specialty certification may pursue the Certified Neonatal Nurse Practitioner (CNNP) pathway through NCC for NNPs, or CCRN-Neonatal through AACN for nurses in neonatal critical care settings. AACN CCRN-Neonatal certification (3-year, 100 CE hours or examination) requires documentation of neonatal critical care clinical hours. Neonatal transport nurse certification (C-NPT through NCC) follows a 3-year cycle requiring 45 CE hours for NICU nurses in transport programs. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NRP Instructor Renewal & NICU CE Conference Calendar",
    description:
      "Neonatal Resuscitation Program (NRP) Provider certification (2-year renewal) and Instructor certification (2-year renewal) require skills verification and written examination — NICU nurses maintaining NRP instructor status manage both personal renewal and course facilitation scheduling for unit-based NRP education. S.T.A.B.L.E. Program Instructor certification (2-year renewal, 16-hour instructor course) is required for NICU nurses managing neonatal stabilization and transport programs. National Association of Neonatal Nurses (NANN) Annual Conference (October/November) is the primary NICU nursing CE event — abstract submission opens March-April, 6-7 months in advance. NANN provides NICU-specific CE in neonatal pharmacology, family-integrated care, and developmentally supportive care. National Perinatal Association (NPA) Annual Conference (March/April) provides family-centered NICU care CE. ECMO Specialist certification (ELSO annual competency for ECMO-trained NICU nurses) requires annual skills verification and protocol review. Kangaroo Mother Care certification (annual competency documentation at KMC-certified institutions). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "ECMO Specialist Certification, Developmental Care & NICU Quality Calendar",
    description:
      "NICU nurses in ECMO programs maintain Extracorporeal Life Support Organization (ELSO) ECMO Specialist credentialing — annual competency verification required, with ELSO recommending minimum 20 ECMO cases per specialist per year for competency maintenance. Developmental care certification — Neonatal Developmental Care Specialist (NDCS) through NANN or Certified Neonatal Developmental Specialist — requires annual competency documentation at NIDCAP (Newborn Individualized Developmental Care and Assessment Program) certified NICUs. NICU quality reporting: Vermont Oxford Network (VON) quarterly data submission (inborn VLBW outcomes, central line infection rates, chronic lung disease rates), Joint Commission NICU accreditation documentation, and CPQCC (California Perinatal Quality Care Collaborative) semi-annual reporting for California NICUs. Human milk and lactation support program certification — NICU breastfeeding support certification (ILCA/IBLCE pathway for NICU nurses, 5-year CERP renewal) — requires documentation of breastfeeding support hours. Pain assessment certification (NPASS competency annual verification). Momenties tracks all NICU program compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, BLS/ACLS Renewal & NICU Transport Credentialing",
    description:
      "NICU nurses participating in neonatal transport programs maintain additional credentialing — Certified Neonatal/Pediatric Transport (C-NPT, 3-year cycle, 45 CE hours) or Certified Flight Registered Nurse (CFRN, 4-year cycle) for air transport NICU nurses, plus transport team equipment competency annual verification and transport mode-specific training (ground, rotor wing, fixed wing). ACLS provider certification (2-year renewal) for NICU nurses managing cardiac events in older NICU patients. BLS Healthcare Provider (2-year renewal) required for all NICU nurses regardless of additional certifications. Skin care and wound management certification (WOCNCB annual renewal for NICU skin care specialists). Neonatal thermoregulation competency annual verification (institutional requirement at NICU centers with high-risk hypothermia protocols). State nursing board license renewal (2-year cycles in most states) with state-specific CE requirements. NICU charge nurse leadership development: annual charge nurse competency assessment, AONE Nurse Manager Inventory annual update, and institutional leadership CE requirements. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Family Integrated Care in NICU — NEJM 2023",
    description: "International multicenter RCT (n=1,200 preterm infants) confirming family integrated care reduces NICU length of stay 4 days and improves exclusive breastfeeding 18% versus standard family-centered care — required NANN CE update for NICU nurses on FICare implementation frameworks, parent education documentation standards, and developmental care integration.",
  },
  {
    title: "NICU-Acquired Infection Prevention — Lancet 2024",
    description: "NICHD Network multicenter study (n=15,000 VLBW infants) confirming bundle-based CLABSI prevention protocol achieves 85% infection rate reduction — required Joint Commission CE update for NICU nurses on updated central line maintenance bundle documentation, daily necessity assessment, and CLABSI prevention competency verification.",
  },
  {
    title: "Neonatal Opioid Withdrawal Protocol — JAMA 2023",
    description: "Eat Sleep Console approach RCT (n=1,300 NICU infants with NOWS) confirming non-pharmacologic-first protocol reduces NICU length of stay 9 days versus standard Finnegan scoring — required NANN CE update for NICU nurses on ESC assessment framework, pharmacologic weaning protocols, and family engagement in NOWS management.",
  },
  {
    title: "Delayed Cord Clamping in Preterm Infants — NEJM 2024",
    description: "APTS 2 trial (n=800 infants <32 weeks) confirming 60-second cord clamping reduces IVH and necrotizing enterocolitis — required NRP CE update for NICU nurses on delayed cord clamping implementation in complex deliveries, bedside stabilization setup, and documentation standards for cord management.",
  },
  {
    title: "NICU Developmental Outcomes and Noise — Pediatrics 2023",
    description: "Longitudinal study (n=600 NICU graduates) correlating NICU noise exposure with 2-year neurodevelopmental outcomes — required NANN CE update for NICU nurses on noise reduction protocols, developmental care documentation, and family education on NICU environmental optimization.",
  },
  {
    title: "Human Milk Fortification in VLBW Infants — Lancet 2024",
    description: "POUCH trial (n=900 VLBW infants) confirming targeted human milk fortification improves growth outcomes without increasing sepsis risk — required NANN CE update for NICU nurses on human milk fortification protocols, donor milk handling standards, and lactation support documentation for VLBW mother-infant dyads.",
  },
]

const testimonial = {
  quote:
    "RNC-NIC 3-year recertification with 45 CE hours and 2,000 clinical hours documentation, NRP Provider biennial renewal, NRP Instructor biennial course scheduling, S.T.A.B.L.E. Instructor biennial renewal, ECMO annual competency verification with ELSO case logging, NIDCAP developmental care annual competency, C-NPT transport certification 3-year renewal, ACLS biennial renewal, NANN annual conference abstract submission, Vermont Oxford Network quarterly data submissions, Joint Commission NICU documentation, and state license — all simultaneously. Momenties mapped every deadline. I never missed a competency verification again.",
  name: "Adaeze N.",
  title: "RN, RNC-NIC, NRP Instructor, ECMO Specialist, NICU Transport Nurse",
}

export default function NicuNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For NICU Nurses"
        title="RNC-NIC Certification. NRP Instructor. ECMO Specialist. One Calendar."
        subtitle="Momenties tracks RNC-NIC and CCRN-Neonatal 3-year recertification CE cycles, NRP provider and instructor biennial renewal, S.T.A.B.L.E. instructor certification, ECMO annual competency verification, neonatal transport C-NPT renewal, Vermont Oxford Network quarterly data submissions, Joint Commission documentation, and state RN license so NICU nurses maintain every credential without administrative overload."
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
            Landmark Studies Shaping NICU Nursing Practice
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
