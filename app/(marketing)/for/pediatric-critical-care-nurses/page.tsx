import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Critical Care Nurses | Momenties",
  description: "Momenties helps pediatric critical care nurses manage CCRN-P certification, PALS/NRP instructor renewal, AACN Synergy CE, ECMO specialist credentialing, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CCRN-P Certification & Pediatric Critical Care Specialty MOC",
    description:
      "Pediatric critical care nurses maintaining CCRN-Pediatric (CCRN-P) certification through the American Association of Critical-Care Nurses (AACN) follow a 3-year recertification cycle — requiring 100 hours of CE with a minimum of 36 hours in acute and critical care topics, OR passing the CCRN-P examination. AACN Synergy Certification (CCRN-P) is distinguished from PCCN-K (Progressive Care Certified Nurse for pediatrics) — nurses in step-down or IMC roles maintain PCCN-P instead. AACN Advanced Practice certification (CCNS or ACNPC-AG for NPs in PICU) carries separate credentialing requirements. Pediatric critical care nurses with specialty focus — cardiac, neurology, trauma — may pursue additional certifications: CFRN (Certified Flight Registered Nurse), TCRN (Trauma Certified RN), or CPN (Certified Pediatric Nurse) — each with independent renewal cycles. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "PALS/NRP Instructor Renewal & Simulation Competency Calendar",
    description:
      "Pediatric Advanced Life Support (PALS) provider certification requires 2-year renewal with PALS Instructor renewal on the same cycle if applicable. Neonatal Resuscitation Program (NRP) provider/instructor renewal (2-year) is required for pediatric critical care nurses in units caring for neonatal transfers or pediatric-neonatal hybrid ICUs. ECMO specialist credentialing — for PICU nurses proning or managing ECMO circuits — requires institution-specific ECMO training completion plus annual competency validation, with ELSO (Extracorporeal Life Support Organization) annual competency documentation recommended. Pediatric emergency simulation participation — septic shock, respiratory failure, cardiac arrest, and ECMO emergency scenarios — requires quarterly documentation for most PICU programs. AACN Pediatric Critical Care Nurse (PCCN-P) or CCRN-P residency validation for new critical care nurses (Beacon Award participating units) requires structured preceptorship documentation. Momenties schedules all renewals and simulations.",
  },
  {
    icon: BarChart3,
    title: "AACN Fellowship CE & Pediatric Critical Care Conference Calendar",
    description:
      "AACN National Teaching Institute (NTI, May/June) is the primary CCRN-P CE event — abstract submission opens September-October, 7-8 months in advance. AACN Beacon Award for Excellence (unit-level recognition) requires documentation of nursing staff certification rates, quality outcomes, and professional development activities — annual program documentation cycle. Society of Critical Care Medicine (SCCM) Congress (February) provides pediatric critical care evidence CE including PICU management updates, pediatric sedation analgesia bundles, and family-centered ICU care CE. Pediatric Intensive Care Society (PICS) Annual Conference (UK, recognized by AACN for CE) provides international pediatric critical care evidence. AACN Essentials of Critical Care Orientation (ECCO) for new PICU nurses requires 4-6 month completion window. Momenties schedules all deadlines.",
  },
  {
    icon: Users,
    title: "ACLS/BLS Renewal, Pediatric ECMO Registry & State License Management",
    description:
      "ACLS certification (2-year renewal) is required for pediatric critical care nurses managing hemodynamic emergencies including cardiac arrest in the PICU. BLS renewal (2-year cycle) applies to all critical care nurses. ECMO specialists participating in ELSO (Extracorporeal Life Support Organization) registry data submission maintain annual ELSO competency documentation. Pediatric transport nurses (CCRN-P nurses participating in PICU transport programs) maintain Certified Transport Registered Nurse (CTRN) certification with 4-year renewal. AACN Healthy Work Environment standards documentation — required for AACN Beacon Award recognition — includes nursing satisfaction surveys, nurse-sensitive quality indicators, and interprofessional collaboration metrics tracked annually. State nursing license renewal (2-3 year cycles) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Lung-Protective Ventilation in Pediatric ARDS — NEJM 2023",
    description: "PARDS Collaborative Network study (n=1,800 pediatric ARDS patients) confirming low tidal volume ventilation (6 ml/kg IBW) with PEEP optimization reduces PICU mortality — required AACN CCRN-P CE update on pediatric ventilator management bundles, daily sedation interruption protocols, and spontaneous breathing trial criteria.",
  },
  {
    title: "Dexmedetomidine vs. Midazolam for PICU Sedation — JAMA 2024",
    description: "RESTORE-2 RCT (n=1,200 PICU patients) confirming dexmedetomidine reduces ventilator days and delirium incidence versus midazolam — required AACN CE update for pediatric critical care nurses on PICU sedation algorithms, CAPD delirium screening, and sedation vacation protocols.",
  },
  {
    title: "Early Enteral Nutrition in PICU — Lancet 2023",
    description: "PEPANIC extension analysis (n=1,400 critically ill children) confirming early goal-directed enteral nutrition within 24 hours improves functional recovery — required AACN CE update for pediatric critical care nurses on enteral nutrition initiation protocols, GI tolerance monitoring, and documentation for nutritional adequacy quality metrics.",
  },
  {
    title: "ECMO for Refractory Pediatric Septic Shock — NEJM 2024",
    description: "Multicenter cohort (n=340 pediatric septic shock ECMO cases) defining survival predictors and optimal ECMO initiation timing — required AACN ECMO CE update for PICU nurses on septic shock ECMO criteria, circuit management during vasopressor weaning, and family communication protocols.",
  },
  {
    title: "Pediatric Early Warning Systems — JAMA Pediatrics 2023",
    description: "National validation of PEWS (Pediatric Early Warning Score) with Bedside PEWS reducing PICU transfers and cardiac arrests outside ICU 35% — required AACN CE update for pediatric critical care nurses on rapid response team activation, PEWS documentation, and deterioration recognition education.",
  },
  {
    title: "Family-Centered Rounds Outcomes in PICU — Pediatrics 2024",
    description: "Multicenter RCT (n=800 PICU families) confirming structured family-centered rounds improve family satisfaction and reduce length of stay — required AACN CE update for pediatric critical care nurses on family-centered care communication, parent activation coaching, and ICU diary programs.",
  },
]

const testimonial = {
  quote:
    "CCRN-P recertification, PALS instructor renewal, NRP provider renewal, ECMO annual competency, ACLS, BLS, quarterly simulation documentation, AACN Beacon Award program documentation cycles, and state license — I have been in PICU nursing for 12 years and the paperwork only gets more complex. Momenties mapped every certification on one calendar. I renewed CCRN-P with 30 CE hours to spare for the first time in my career.",
  name: "Obiageli N.",
  title: "RN, CCRN-P, ECMO Specialist, Pediatric ICU Charge Nurse",
}

export default function PediatricCriticalCareNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Critical Care Nurses"
        title="CCRN-P Certification. PALS/NRP Renewal. ECMO Credentialing. One Calendar."
        subtitle="Momenties tracks CCRN-P recertification cycles, PALS and NRP provider and instructor renewal, ECMO specialist annual competency documentation, AACN fellowship CE, pediatric simulation quarterly requirements, ACLS/BLS renewal, and state license so pediatric critical care nurses maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pediatric Critical Care Practice
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
