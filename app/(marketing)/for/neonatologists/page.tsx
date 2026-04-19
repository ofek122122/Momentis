import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Neonatologists | Momenties",
  description: "Momenties helps neonatologists manage ABP neonatology subspecialty certification, ANC fellowship CE, NRP instructor recertification, NICU quality improvement cycles, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABP Neonatology Subspecialty Certification & General Pediatrics MOC",
    description:
      "Neonatologists maintain American Board of Pediatrics (ABP) general pediatrics certification through the annual ABP Maintenance of Certification cycle (online KSA modules, PI-CME activities, MOC points accumulation) alongside the Neonatal-Perinatal Medicine subspecialty certification — a 5-year recertification cycle with a content-specific examination covering neonatal physiology, ventilator management, neonatal pharmacology, surgical neonatology, and neurodevelopmental follow-up. Each track carries independent CME credit requirements. ABP neonatology diplomates who are also fellowship directors must complete faculty development CE requirements through COMSEP or AAP PERC programs. Momenties tracks all ABP timelines simultaneously.",
  },
  {
    icon: Clock,
    title: "ANC Fellowship CE & NICHD/AAP Neonatology Guideline Updates",
    description:
      "The American Academy of Pediatrics (AAP) Section on Neonatal-Perinatal Medicine annual program at the AAP National Conference is the primary CE event — abstract submission opens June-July for October conferences. Academic Neonatal-Perinatal Medicine fellowship (ANC) CE requires documented updates in hemodynamic monitoring, neuroprotection protocols, and neonatal neurology. NICHD Neonatal Research Network publications — including updated cooling therapy criteria, surfactant protocols, and extreme prematurity outcomes data — require documented CE review for ABP recertification. AAP Clinical Practice Guidelines for neonatal jaundice (2022 update), GBS prophylaxis, and late preterm infant management require annual review. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "NRP Instructor Certification, STABLE & Procedural Credentialing",
    description:
      "Neonatal resuscitation competency requires multiple overlapping certification cycles. NRP (Neonatal Resuscitation Program) instructor certification — required for neonatologists who teach residents and fellows — has a 2-year renewal cycle with online module completion and skills verification. STABLE (Sugar, Temperature, Airway, Blood pressure, Lab work, Emotional support) instructor certification requires renewal every 3 years. Hospital credentialing for neonatal procedures — umbilical line placement, intubation, chest tube insertion, PICC placement, therapeutic hypothermia — follows biennial reappointment cycles with case volume requirements. Momenties tracks all certification and credentialing timelines.",
  },
  {
    icon: Users,
    title: "NICU Quality Improvement Cycles, Vermont Oxford Network & State License",
    description:
      "Neonatologists leading quality improvement programs must document systematic QI participation for ABP PI-CME credit. Vermont Oxford Network (VON) membership requires annual data submission (January 31 deadline) and participation in at least one focused improvement project. California Perinatal Quality Care Collaborative (CPQCC), Ohio Perinatal Quality Collaborative (OPQC), and state-specific perinatal network participation each have annual reporting cycles. Telemedicine neonatology CE — increasingly required for physicians covering level I and II nurseries remotely — has expanded with post-pandemic regulatory changes. State medical license renewal and DEA registration complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "SUPPORT Trial 10-Year Neurodevelopmental Outcomes — NEJM 2024",
    description: "10-year outcomes follow-up of SUPPORT trial cohort (n=1,316 extremely preterm infants) confirming higher oxygen saturation target superiority for neurodevelopmental outcomes — updated ABP neonatology subspecialty CE on oxygen management and long-term follow-up protocols.",
  },
  {
    title: "Prophylactic Indomethacin in Preterm Infants — JAMA 2023",
    description: "Multicenter RCT (n=2,700 infants ≤27 weeks) evaluating prophylactic indomethacin effect on neurodevelopmental outcomes — landmark CE update for neonatologists managing PDA treatment decisions and IVH prevention protocols.",
  },
  {
    title: "Caffeine Dose Optimization in Apnea of Prematurity — NEJM 2024",
    description: "Pharmacokinetic multicenter trial (n=1,800 preterm infants) establishing high-dose caffeine superiority for apnea treatment without increased adverse effects — updated neonatal pharmacology CE for ABP subspecialty recertification.",
  },
  {
    title: "Hypothermia for Moderate vs Mild HIE — Lancet 2024",
    description: "Multicenter RCT (n=408 infants with mild HIE) demonstrating therapeutic hypothermia benefit in mild hypoxic-ischemic encephalopathy — expanded therapeutic hypothermia eligibility CE for all NICU credentialing programs.",
  },
  {
    title: "Noninvasive Respiratory Support in Extreme Prematurity — NEJM 2023",
    description: "Multicenter RCT (n=1,300 infants 23-27 weeks) establishing noninvasive respiratory support superiority over intubation for primary respiratory management — required CE update for neonatology ventilator management credentialing.",
  },
  {
    title: "Gut Microbiome & Necrotizing Enterocolitis Prevention — Nature 2024",
    description: "Longitudinal cohort (n=3,200 preterm infants) identifying gut microbiome signatures predicting NEC onset 5 days before clinical presentation — foundational CE for neonatology NEC surveillance protocols and probiotic intervention CE.",
  },
]

const testimonial = {
  quote:
    "ABP neonatology recertification, general pediatrics MOC, NRP instructor renewal, STABLE certification, VON data submission, CPQCC reporting, hospital reappointment, and state license — on top of a 24/7 call schedule. I&apos;d lost track of half of these until Momenties mapped them all out. My recertification exam prep started 14 months in advance instead of 6 weeks.",
  name: "Chioma A.",
  title: "MD, FAAP, Neonatology Section Chief",
}

export default function NeonatologistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Neonatologists"
        title="ABP Subspecialty Certification. NRP Instructor. VON Reporting. One Calendar."
        subtitle="Momenties tracks ABP neonatology subspecialty certification, NRP instructor renewal, STABLE certification, Vermont Oxford Network data submission, NICU QI participation, and general pediatrics MOC so neonatologists focus on patients, not administrative complexity."
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
            Landmark Studies Shaping Neonatology Practice
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
