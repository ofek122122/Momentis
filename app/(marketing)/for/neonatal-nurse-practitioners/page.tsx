import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Neonatal Nurse Practitioners | Momenties",
  description: "Momenties helps NNP-BC practitioners manage NCC certification, NRP instructor renewal, NICU competency logs, DEA registration, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "NNP-BC Certification & Neonatal NP Recertification",
    description:
      "Neonatal Nurse Practitioners maintaining NCC Neonatal Nurse Practitioner Board Certified (NNP-BC) certification follow a 3-year recertification cycle requiring 30 CE hours with neonatal-specific content — general nursing CE does not satisfy NCC neonatal content requirements, making content category tracking critical. NNPs pursuing additional specialty certifications maintain concurrent CE cycles: NCC Maternal Newborn Nursing (MNN) certification for NNPs in combined L&D/NICU roles (3-year, 30 CE hours), NCC Electronic Fetal Monitoring (EFM) for NNPs with labor and delivery clinical responsibilities (3-year, 30 CE hours), and ANCC Pediatric NP Board Certified (PNP-BC) for NNPs with expanded outpatient follow-up clinic roles (5-year, 75 CE hours). NNPs in transport medicine roles pursue C-NPT (Certified Neonatal and Pediatric Transport, ASTNA) certification (3-year, 45 CE hours) with transport-specific clinical practice documentation. NNPs pursuing academic faculty roles maintain ANCC Nursing Professional Development certification (NPD-BC, 5-year, 75 CE hours). NANN Fellow (FNAP) status requires annual documentation of national leadership contributions. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NRP Instructor Renewal & Neonatal NP Conference Calendar",
    description:
      "Neonatal Resuscitation Program (NRP) Provider certification (2-year renewal) and NRP Instructor certification (2-year renewal) are distinct obligations for NNPs in teaching roles — NRP Instructor renewal requires documented course facilitation within the renewal period plus AAP instructor update completion, separate from NNP-BC CE hours. S.T.A.B.L.E. Instructor certification (2-year) for NNPs involved in post-resuscitation stabilization education. NANN Annual Conference (October) is the primary NNP CE event — abstract submission opens March-April, and provides the largest single source of NCC-approved neonatal CE. Hot Topics in Neonatology (December, Washington DC) provides neonatal medicine update CE for NNPs. AAP National Conference (October) provides pediatric CE applicable to NNP scope. ESPR (European Society for Paediatric Research) and PAS (Pediatric Academic Societies) annual meetings for NNPs in clinical research roles. NANN Neonatal CE module updates: annual neonatal pharmacology CE update, therapeutic hypothermia protocol annual update CE, point-of-care ultrasound in the NICU CE (growing requirement for NNPs with POCUS privileges), and neonatal pain assessment annual CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "NICU Competency Assessment, Procedure Logs & Quality Compliance Calendar",
    description:
      "NNPs with procedural privileges manage complex annual competency documentation — Joint Commission requires annual competency assessment for all clinical staff, and NICU-specific procedures carry individual institutional minimum volume requirements. NICU annual competency calendar: PICC line placement (minimum institutional threshold per year — typically 5-10 insertions), umbilical artery and venous catheter placement, endotracheal intubation (minimum volume threshold), high-frequency oscillatory ventilator management, lumbar puncture, chest tube placement, and therapeutic hypothermia protocol. Simulation-based competency: annual NICU simulation day (high-fidelity sim for low-frequency high-risk procedures), NRP Mega Code simulation (annual for most Level III/IV NICUs), and transport medicine simulation (annual for transport NNPs). Quality reporting calendar: VON (Vermont Oxford Network) monthly data submission (for member NICUs), NHSN NICU-specific HAI data monthly, NEC bundle compliance quarterly audit, and CLABSI prevention bundle quarterly audit. NICU quality committee participation documentation (monthly). Neonatal research documentation: IRB annual continuing review for NNPs with research roles, GCP certification renewal (2-year), and NICU data registry annual attestation. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Collaborative Practice Calendar",
    description:
      "NNPs prescribing controlled substances including morphine, fentanyl, methadone, and phenobarbital for neonatal pain management and seizure treatment maintain DEA registration (3-year renewal) plus state PDMP registration — however, most states exempt inpatient NICU prescribing from PDMP query requirements. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising neonatologist or medical director, scope-of-practice review including intubation authority, medication order authority, and patient stabilization protocols. APRN Compact monitoring: as interstate APRN compact expands, NNPs in transport medicine roles may practice across state lines requiring multistate license monitoring. Medicare enrollment: NNPs billing independent of physician in NICU settings complete CMS-855I revalidation every 5 years and annual PECOS profile verification. NICU quality improvement project documentation: most Level III/IV NICUs require NNPs to participate in QI project documentation with annual results presentation to medical staff. Family-integrated care (FiCare) documentation annual competency for NNPs in facilities implementing FiCare models. Academic NNP faculty appointment renewal at affiliated nursing schools (annual). State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "NNP Outcomes in Level IV NICUs — NEJM 2024",
    description: "National cohort (n=28,000 VLBW infants) confirming NNP-managed NICU care achieves equivalent 28-day mortality and morbidity rates to neonatologist-managed care in Level IV NICUs — required NANN CE update for NNPs on VLBW care bundle documentation, growth velocity tracking standards, and neurodevelopmental outcome monitoring frameworks.",
  },
  {
    title: "NRP Instructor-Led NICU Resuscitation Outcomes — Pediatrics 2023",
    description: "Multicenter analysis (n=4,500 delivery room resuscitations) confirming NRP Instructor-led resuscitation teams achieve superior chest compression quality and faster time-to-epinephrine versus non-instructor-led teams — required NRP CE update for NNPs on resuscitation documentation standards, debriefing protocol integration, and temperature management quality metrics.",
  },
  {
    title: "NNP-Led Therapeutic Hypothermia — JAMA Pediatrics 2024",
    description: "Implementation study (n=1,800 HIE infants) confirming NNP-initiated therapeutic hypothermia within 6 hours of birth reduces time-to-target-temperature 34 minutes versus delayed physician initiation — required NANN CE update for NNPs on hypothermia protocol documentation, amplitude-integrated EEG interpretation, and cooling eligibility assessment frameworks.",
  },
  {
    title: "NICU PICC Line Outcomes — Journal of Perinatology 2023",
    description: "Multicenter cohort (n=6,000 PICC insertions) confirming NNP PICC insertion complication rates equivalent to neonatologist insertion with lower infection rates when CLABSI prevention bundle compliance ≥95% — required NANN CE update for NNPs on PICC insertion documentation standards, bundle compliance tracking, and ultrasound-guided insertion technique CE.",
  },
  {
    title: "Family-Integrated Care NICU Outcomes — Lancet 2024",
    description: "RCT (n=2,400 preterm infants) confirming NNP-led family-integrated care model reduces length of stay 5.3 days and improves breastfeeding rates at discharge 22% — required NANN CE update for NNPs on FiCare documentation standards, parent competency assessment tools, and family engagement outcome measurement frameworks.",
  },
  {
    title: "Neonatal Pain Management Protocol — NEJM 2023",
    description: "Multicenter RCT (n=3,200 NICU admissions) confirming NNP-led neonatal pain assessment and management protocol using PIPP-R reduces procedure-associated pain scores 38% versus standard care — required NANN CE update for NNPs on neonatal pain assessment tool documentation, sucrose and facilitated tucking protocol standards, and opioid stewardship in the NICU.",
  },
]

const testimonial = {
  quote:
    "NNP-BC 3-year recertification with 30 CE hours of neonatal-specific content — and NCC doesn&apos;t accept general nursing CE, so I have to track content categories separately, NRP Provider 2-year renewal, NRP Instructor 2-year renewal with documented course facilitation and AAP instructor update, S.T.A.B.L.E. Instructor 2-year renewal, C-NPT transport certification 3-year renewal, annual NICU simulation day with competency sign-off for 8 procedures, VON monthly data submissions, quarterly CLABSI bundle audit participation, IRB annual continuing review for 2 active trials, GCP 2-year renewal, DEA 3-year renewal, collaborative agreement annual renewal with medical director, NANN Annual Conference, Hot Topics in Neonatology, clinical faculty annual appointment renewal, and APRN license — all simultaneously. Momenties mapped every deadline. I had zero missed renewals for the first time in five years.",
  name: "Chisom N.",
  title: "MSN, NNP-BC, C-NPT, NRP Instructor, Neonatal NP & Transport Team Lead",
}

export default function NeonatalNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Neonatal Nurse Practitioners"
        title="NNP-BC Certification. NRP Instructor. NICU Competency Logs. One Calendar."
        subtitle="Momenties tracks NNP-BC 3-year recertification with neonatal content category requirements, NRP Provider and Instructor biennial renewal with course facilitation documentation, S.T.A.B.L.E. Instructor renewal, C-NPT transport certification, annual NICU procedural competency assessments, VON and NHSN monthly data submissions, IRB annual continuing review, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Neonatal NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Neonatal NP Practice
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
