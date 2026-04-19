import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Certified Nurse-Midwives | Momenties",
  description: "Momenties helps certified nurse-midwives manage AMCB CNM certification, ACNM fellowship CE, NRP renewal, AWHONN perinatal competency validation, prescriptive authority renewal, and state license management in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AMCB CNM Certification & Midwifery MOC Program",
    description:
      "Certified Nurse-Midwives (CNMs) maintain American Midwifery Certification Board (AMCB) certification through a 5-year recertification cycle — requiring 20 Continuing Education Units (CEUs) in midwifery-related topics, including 2 CEUs in pharmacology for CNMs with prescriptive authority. The AMCB Maintenance of Certification (MOC) program includes a learning needs assessment, self-directed learning activities, and professional development documentation. Certified Midwives (CMs) maintain an identical AMCB cycle with equivalent CE requirements. CNMs with dual APRN roles — concurrent WHNP (Women's Health Nurse Practitioner) certification through NCC or ANCC — maintain independent 3-year recertification cycles for each credential. American College of Nurse-Midwives (ACNM) membership requires annual dues with CE documentation for fellowship maintenance. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NRP Renewal, ACLS/BLS & Obstetric Emergency Simulation Calendar",
    description:
      "Neonatal Resuscitation Program (NRP) provider certification requires 2-year renewal — CNMs attending deliveries must maintain current NRP provider status with skills validation. Advanced Cardiovascular Life Support (ACLS) certification — required for CNMs managing obstetric emergencies including amniotic fluid embolism, cardiac arrest in pregnancy, and maternal code events — requires 2-year renewal. AWHONN Advanced Fetal Heart Monitoring certification (required for CNMs managing labor) requires 3-year renewal with skills demonstration. Obstetric emergency simulation participation — hemorrhage drills (quarterly recommended), shoulder dystocia (quarterly), eclampsia (bi-annual), and cardiac arrest in pregnancy (annual) — requires institutional documentation for hospital privileging and credentialing. ACOG/AWHONN AIM (Alliance for Innovation on Maternal Health) bundle implementation training requires annual competency documentation. Momenties schedules every simulation and renewal.",
  },
  {
    icon: BarChart3,
    title: "ACNM Fellowship CE & Midwifery Society Conference Calendar",
    description:
      "The ACNM Annual Meeting (May/June) is the primary CNM CE event — abstract submission opens October-November, 7-8 months in advance, and ACNM-approved CEUs are eligible for AMCB recertification. ACNM fellowship (FACNM) is a professional recognition (not a separate certification) requiring documented leadership, education, or policy contributions. Midwives Alliance of North America (MANA) Annual Conference provides CE for CNMs with community birth or out-of-hospital practice. Society for Maternal-Fetal Medicine (SMFM) Annual Meeting (February) provides advanced obstetric evidence CE for CNMs in high-risk practices. Pharmacology CE — 2 CEUs required per 5-year AMCB cycle — requires structured coursework in obstetric pharmacology, including oxytocin, magnesium sulfate, antihypertensives, and tocolytic agents. ACNM Core Competency updates require documentation of competency review when published. Momenties schedules all deadlines.",
  },
  {
    icon: Users,
    title: "Prescriptive Authority, Hospital Privileges & State License Management",
    description:
      "CNMs with prescriptive authority manage DEA registration renewal (3-year cycle) for Schedule II-V controlled substances — particularly important for CNMs prescribing misoprostol, codeine, and benzodiazepines in obstetric practice. Prescriptive authority collaborative practice agreements — required in some states for CNM prescribing — require annual review and physician cosignatory signature. Hospital credentialing and privileging for CNMs (2-year cycle) requires maintaining current certifications, malpractice coverage, and CME documentation — credentialing applications must be submitted 3-4 months before privilege expiration. Birth center accreditation participation (AABC or JCAHO, 3-year cycle) requires CNM participation in quality review and documentation. State nursing and midwifery license renewal (2-3 year cycles, varying by state) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Midwifery-Led Care Outcomes — Lancet 2023",
    description: "Global systematic review (n=500,000 births in midwifery-led models) confirming reduced cesarean rates, equivalent neonatal outcomes, and higher patient satisfaction — required ACNM CE update for CNMs on midwifery model advocacy, quality outcomes documentation, and outcomes-based credentialing.",
  },
  {
    title: "Magnesium Sulfate Neuroprotection Protocols — NEJM 2024",
    description: "MAGENTA RCT (n=1,700 preterm births <34 weeks) confirming magnesium sulfate neuroprotection protocol reduces cerebral palsy 33% — required ACNM CE update for CNMs on revised dosing protocols, administration monitoring, and documentation requirements for preterm magnesium programs.",
  },
  {
    title: "Group Prenatal Care Outcomes — JAMA 2023",
    description: "Centering Pregnancy nationwide effectiveness study (n=30,000 pregnancies) confirming group prenatal care reduces preterm birth in high-risk populations 26% — required ACNM CE update for CNMs on group care implementation, facilitator training, and quality metrics documentation.",
  },
  {
    title: "Delayed Cord Clamping Extended Protocol — Pediatrics 2024",
    description: "Systematic review confirming 5-minute delayed cord clamping superiority over 60-90 second protocols for iron stores at 12 months — required ACNM CE update for CNMs on cord management protocols, NICU admission indications, and documentation for quality reporting.",
  },
  {
    title: "Prophylactic Oxytocin for PPH Prevention — NEJM 2023",
    description: "International RCT (n=29,000 vaginal deliveries) confirming tranexamic acid plus oxytocin reduces PPH severity versus oxytocin alone — required ACNM CE update for CNMs on PPH prevention bundle, tranexamic acid administration protocols, and quantitative blood loss documentation.",
  },
  {
    title: "Telehealth Prenatal Care Safety — JAMA 2024",
    description: "Multicenter cohort (n=80,000 telehealth-blended prenatal care pregnancies) confirming non-inferiority to in-person care for low-risk pregnancies — required ACNM CE update for CNMs on telehealth visit documentation, remote monitoring device integration, and appropriate patient selection criteria.",
  },
]

const testimonial = {
  quote:
    "AMCB CNM recertification, WHNP recertification, NRP provider renewal, ACLS, AWHONN fetal monitoring, DEA registration, collaborative practice agreement annual review, hospital privileging cycle, birth center accreditation participation, quarterly obstetric emergency simulations, and state license — all on completely separate calendars. Momenties mapped every deadline. I renewed everything on time and passed my AMCB recertification without any last-minute CE scramble.",
  name: "Adaeze C.",
  title: "CNM, WHNP-BC, FACNM, Birth Center Director & Perinatal Clinical Educator",
}

export default function ClinicalNurseMidwivesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Certified Nurse-Midwives"
        title="AMCB CNM Certification. NRP Renewal. Hospital Privileges. One Calendar."
        subtitle="Momenties tracks AMCB CNM and CM recertification cycles, ACNM fellowship CE, NRP and ACLS renewal, AWHONN fetal monitoring competency, DEA prescriptive authority registration, hospital privileging cycles, and state license management so certified nurse-midwives maintain every credential without administrative overload."
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
            Landmark Studies Shaping Midwifery Practice
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
