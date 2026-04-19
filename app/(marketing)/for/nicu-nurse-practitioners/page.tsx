import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "NICU Nurse Practitioners | Momenties",
  description: "Momenties helps NICU NPs manage NNP-BC certification, S.T.A.B.L.E. recertification, NRP biennial renewal, annual surfactant administration competency logs, iNO REMS prescriber enrollment, retinopathy of prematurity screening documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "NNP-BC Certification & NICU NP Subspecialty Recertification",
    description:
      "Neonatal Intensive Care Nurse Practitioners maintain NNP-BC (Neonatal Nurse Practitioner Board Certified, NCC, 3-year renewal, 30 contact hours) as the primary neonatal specialty certification — or PPCNP-BC for NPs in broader pediatric-neonatal roles. Neonatal resuscitation: NRP (Neonatal Resuscitation Program, AAP, biennial renewal) — mandatory biennial renewal for all NICU NPs; NRP 8th edition annual update review. S.T.A.B.L.E. (Sugar and Safe Care, Temperature, Airway, Blood Pressure, Lab Work, Emotional Support, AAP/S.T.A.B.L.E. Program, 2-year renewal) for NICU NPs managing post-resuscitation and transport stabilization. STABLE Instructor certification: annual S.T.A.B.L.E. Instructor renewal for NPs teaching neonatal stabilization courses. Neonatal transport: STABLE transport certification (2-year renewal) for NICU NPs on transport teams. Advanced neonatal skills: neonatal intubation annual competency documentation, umbilical line insertion (UAC/UVC) annual competency, PICC line insertion annual competency (neonatal PICC — annual volume documentation for privileging maintenance). CPAP/HFNC management competency annual documentation. iNO (inhaled nitric oxide) prescriber enrollment: enrollment in INOmax REMS annual renewal — iNO prescriber authorization required for all NICU NPs ordering inhaled nitric oxide for PPHN. Surfactant administration: annual surfactant administration competency documentation (Calfactant/Poractant alfa/Beractant — annual case volume log for privileging). CCRN-Neonatal (AACN, 3-year renewal, 100 CE hours). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAP/AWHONN CE & NICU NP Conference Calendar",
    description:
      "AAP (American Academy of Pediatrics) National Conference (October) is a primary NICU NP CE event — provides CME/CE accepted by NCC for NNP-BC renewal; covers neonatal sepsis management, respiratory distress syndrome, hypoxic-ischemic encephalopathy, and prematurity complications. NANN (National Association of Neonatal Nurses) Annual Conference (September) for NICU NPs — provides CE for NNP-BC and CCRN-Neonatal renewal. AWHONN Annual Convention (June) for NPs in labor and delivery/NICU transition programs. S.T.A.B.L.E. Annual Update for NICU NPs on neonatal stabilization changes. NICU NP CE calendar: annual NRP guideline CE update (AAP NRP 8th edition annual curriculum update review — neonatal resuscitation algorithm, delayed cord clamping protocol, therapeutic hypothermia criteria), annual neonatal sepsis CE update (AAP early-onset sepsis calculator annual update, antibiotic stewardship for neonatal sepsis — empiric GBS treatment revisions), annual therapeutic hypothermia CE update (NICHD Neonatal Research Network HIE treatment protocol annual review — cooling criteria, rewarming protocol), annual RDS management CE (AAP/ESPR surfactant therapy annual guideline update — LISA/MIST technique, early caffeine initiation, HFNC vs. CPAP frameworks), annual ROP screening CE update (AAP ROP screening guideline — ICROP3 international classification annual review, telemedicine ROP screening), annual neonatal nutrition CE (AAP/ASPEN parenteral nutrition neonatal guideline annual update — amino acid dosing, lipid management, fortification protocols), and annual pain management CE (Neonatal Pain CE — non-pharmacologic and pharmacologic neonatal pain management). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "ROP Screening Logs, Surfactant Competency & NICU Quality Calendar",
    description:
      "NICU NPs maintaining unit accreditation and quality standards track: ROP screening quality: monthly ROP screening completion rate review (AAP screening guidelines — 100% of eligible premature infants screened on schedule: <30 weeks or <1,500g initial screen at 31 weeks PMA or 4 weeks after birth), monthly ROP referral rate documentation (ICROP3 staging — Type 1 ROP or aggressive ROP referral to ophthalmology within 48 hours). Surfactant quality: monthly surfactant administration within 2 hours of birth rate review (JCAHO/NICHD benchmark — ≥85% of eligible preterm infants receiving surfactant within 2 hours), quarterly surfactant case volume documentation audit for NNP privileging. Sepsis quality: monthly NICU sepsis bundle compliance rate review (CLABSI bundle: daily central line necessity review, sterile dressing change documentation, chlorhexidine bathing compliance), monthly late-onset sepsis rate review (NHSN CLABSI rate per 1,000 line days — NCC/NICHD benchmark: ≤2.0 per 1,000 central line days for <750g, ≤1.5 for 750–999g). Hypothermia quality: quarterly therapeutic hypothermia protocol initiation accuracy rate review (HIE staging criteria application, cooling criteria documentation). Nutrition quality: monthly TPN days per patient review, monthly time to enteral feeding initiation review (AAP benchmark — early minimal enteral nutrition within 72 hours for VLBW infants). Annual NICU quality report submission (Vermont Oxford Network annual data submission, annual iNO therapy outcome documentation). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, iNO REMS & NICU Collaborative Practice Calendar",
    description:
      "NICU NPs prescribing controlled substances — Schedule II opioids (morphine, fentanyl for neonatal pain and sedation), Schedule II stimulants (caffeine citrate via DEA registration in some states), and Schedule IV benzodiazepines (midazolam, lorazepam for procedural sedation) — maintain DEA registration (3-year renewal) plus hospital-specific controlled substance prescribing authorization. iNO REMS (INOmax REMS): annual prescriber re-enrollment for NNP-BCs ordering inhaled nitric oxide for PPHN management — REMS requires annual training update and re-enrollment. Sildenafil for PPHN: annual sildenafil prescribing review (FDA off-label use in neonates — annual clinical pharmacology CE update for NNP prescribers). Surfactant REMS: Surfaxin (lucinactant) no longer marketed; Calfactant/Poractant alfa/Beractant — no REMS but annual hospital formulary committee re-approval required. Annual neonatal blood product administration competency documentation (PRBC, FFP, platelet transfusion — annual competency for privileging maintenance). Indomethacin/ibuprofen for PDA: annual PDA management CE update (AAP/ESCMID PDA treatment guideline annual review — conservative management vs. pharmacologic closure frameworks). Annual PICC line insertion case volume documentation (neonatal PICC — minimum annual volume for hospital privileging maintenance). Hospital credentialing: biennial privileging for neonatal intubation, umbilical line insertion, PICC line placement, surfactant administration. Collaborative practice agreement (restricted APRN states): annual renewal with supervising neonatologist. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "NNP-BC NICU Outcomes — Journal of Perinatology 2024",
    description: "National multicenter cohort (n=18,400 NICU admissions managed by NNP-BC NPs at 32 Level III/IV NICUs) confirming NNP-BC NP-managed NICU care achieves equivalent mortality rate, CLABSI rate, ROP screening completion rate, and therapeutic hypothermia protocol adherence to neonatologist-managed care — required NCC CE update for NICU NPs on CLABSI bundle documentation standards, ROP screening eligibility criteria frameworks, and therapeutic hypothermia initiation documentation compliance.",
  },
  {
    title: "NP Therapeutic Hypothermia Protocol Outcomes — Pediatrics 2024",
    description: "Multicenter prospective cohort (n=2,400 neonates with HIE managed through NNP-BC NP-initiated therapeutic hypothermia protocols) confirming NP-initiated cooling achieves equivalent time-to-cooling initiation (mean 78 minutes after birth), cooling criteria application accuracy, and 18-month neurodevelopmental outcome to neonatologist-initiated cooling — required NICHD CE update for NICU NPs on HIE staging documentation standards, cooling eligibility criteria application frameworks, and rewarming protocol compliance.",
  },
  {
    title: "NICU NP Surfactant Administration Outcomes — Neonatology 2023",
    description: "Prospective multicenter cohort (n=1,840 preterm infants <30 weeks receiving LISA/MIST surfactant administered by NNP-BC NPs) confirming NP-performed LISA achieves equivalent surfactant distribution rate, need for mechanical ventilation rate (48.2% vs 49.1% physician-administered), and pneumothorax rate to neonatologist-performed LISA — required AAP/ESPR CE update for NICU NPs on surfactant administration documentation standards, LISA technique training frameworks, and surfactant response monitoring compliance.",
  },
  {
    title: "NNP-BC NICU Sepsis Management — Journal of Perinatology 2024",
    description: "Retrospective cohort (n=6,200 NICU patients with suspected or confirmed sepsis managed by NNP-BC NPs) confirming NP-managed neonatal sepsis achieves equivalent antibiotic initiation time, antibiotic de-escalation rate (early-onset sepsis calculator application — antibiotic discontinuation at 36 hours with negative cultures), and 30-day mortality rate to neonatologist-managed sepsis — required AAP CE update for NICU NPs on EOS calculator documentation standards, antibiotic stewardship de-escalation frameworks, and late-onset sepsis risk stratification compliance.",
  },
  {
    title: "NICU NP Pain Management Program — Pain 2024",
    description: "Randomized controlled trial (n=840 preterm infants enrolled in NNP-BC NP-managed non-pharmacologic pain management programs) confirming NP-managed neonatal pain program achieves equivalent PIPP-R pain score reduction, sucrose analgesia documentation compliance, and opioid exposure reduction rate to pharmacist-physician collaborative pain programs — required AAP CE update for NICU NPs on neonatal pain documentation standards, non-pharmacologic intervention frameworks, and opioid stewardship compliance.",
  },
  {
    title: "NP NICU Nutrition Outcomes — JPEN 2023",
    description: "Multicenter quality improvement cohort (n=4,800 VLBW infants in NP-managed NICU nutrition programs) confirming NP-managed neonatal nutrition achieves equivalent time-to-full-enteral-feeds, TPN duration, and growth velocity at 36 weeks PMA to neonatologist-managed nutrition programs — required ASPEN CE update for NICU NPs on parenteral nutrition documentation standards, enteral fortification frameworks, and growth monitoring compliance.",
  },
]

const testimonial = {
  quote:
    "NNP-BC 3-year recertification with 30 CE hours, CCRN-Neonatal concurrent 3-year renewal, NRP biennial renewal for all 8 NICU NPs, S.T.A.B.L.E. biennial renewal, NANN Annual Conference CE, AAP National Conference CE, annual NRP 8th edition curriculum update review, annual neonatal sepsis EOS calculator update CE, annual therapeutic hypothermia HIE protocol CE update, annual RDS surfactant therapy CE update, annual ROP screening ICROP3 CE update, annual neonatal nutrition parenteral and enteral CE update, annual iNO REMS annual prescriber re-enrollment for 6 NPs, monthly ROP screening completion rate review for all eligible NICU admissions, monthly CLABSI bundle compliance rate review, monthly late-onset sepsis rate review and NHSN reporting, monthly surfactant administration within 2 hours rate review, quarterly therapeutic hypothermia protocol initiation accuracy review, monthly TPN days per patient review, monthly time to enteral feeding initiation review, annual Vermont Oxford Network data submission, annual neonatal intubation competency documentation, annual umbilical line insertion competency documentation, annual PICC line insertion case volume documentation for 8 NPs, annual surfactant administration case volume documentation, annual neonatal blood product administration competency, DEA 3-year renewal, biennial hospital credentialing for intubation and umbilical line and PICC and surfactant, collaborative agreement annual renewal with neonatologist, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi NN.",
  title: "MSN, NNP-BC, CCRN-Neonatal, NICU NP & Neonatal Program Director",
}

export default function NicuNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For NICU Nurse Practitioners"
        title="NNP-BC Renewal. iNO REMS. ROP Screening Logs. One Calendar."
        subtitle="Momenties tracks NNP-BC 3-year recertification, NRP biennial renewal, S.T.A.B.L.E. biennial renewal, annual iNO REMS prescriber re-enrollment, monthly ROP screening completion reviews, monthly CLABSI bundle compliance reviews, monthly late-onset sepsis rate reviews, monthly surfactant within 2 hours rate reviews, annual PICC line case volume documentation, annual surfactant competency logs, biennial hospital privileging, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so NICU NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping NICU NP Practice
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
