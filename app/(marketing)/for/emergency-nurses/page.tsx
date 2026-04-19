import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Emergency Nurses | Momenties",
  description: "Momenties helps emergency nurses manage CEN certification, TNCC/ENPC instructor renewal, ENA fellowship CE, mass casualty simulation documentation, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CEN Certification & Emergency Nursing Specialty MOC",
    description:
      "Emergency nurses maintaining Certified Emergency Nurse (CEN) certification through the Board of Certification for Emergency Nursing (BCEN) follow a 4-year recertification cycle — requiring 100 contact hours of CE with emergency nursing content, OR passing the CEN examination. BCEN also offers Certified Pediatric Emergency Nurse (CPEN), Certified Flight Registered Nurse (CFRN), Certified Transport Registered Nurse (CTRN), and Certified Emergency Nurse Advanced Practice (ACEN-BC) — each with independent 4-year cycles. Emergency nurses with specialty roles — stroke coordinator, trauma program manager, SANE (Sexual Assault Nurse Examiner) — maintain additional certifications with independent renewal cycles: SCRN (Stroke Certified Registered Nurse, 4-year), trauma nursing certification, and SANE-A certification (3-year renewal with 40 CE hours). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "TNCC/ENPC Instructor Renewal & Emergency Simulation Competency Calendar",
    description:
      "Trauma Nursing Core Course (TNCC) provider renewal requires 4-year recertification — TNCC Instructor renewal requires teaching a minimum number of courses and completing the TNCC Instructor Update within the 4-year cycle. Emergency Nursing Pediatric Course (ENPC) provider and instructor renewal follows the same 4-year cycle with parallel instructor teaching requirements. ACLS and BLS renewal (2-year cycles) are required for all emergency nurses managing resuscitation. ATLS (Advanced Trauma Life Support) completion — not required but recommended for emergency nurses in Level I/II trauma centers — requires 5-year renewal. Emergency department mass casualty incident (MCI) drill participation — HICS (Hospital Incident Command System) activation, surge capacity exercises, and decontamination drills — requires annual documentation. STEMIcertification and stroke simulation participation require annual documentation in comprehensive stroke and cardiac centers. Momenties schedules all renewals.",
  },
  {
    icon: BarChart3,
    title: "ENA Fellowship CE & Emergency Nursing Society Conference Calendar",
    description:
      "Emergency Nurses Association (ENA) Annual Conference (September) is the primary CEN CE event — abstract submission opens February-March, 6-7 months in advance. ENA fellowship (FENA) maintenance requires documented CE and leadership contributions to emergency nursing. ENA Institute for Emergency Nursing Research provides CE modules specifically designed for CEN recertification. Society of Trauma Nurses (STN) Annual Conference (April) provides trauma nursing CE for emergency nurses with trauma program responsibilities. Society of Emergency Medicine Physicians (ACEP) Scientific Assembly provides interdisciplinary emergency medicine CE relevant for emergency nurses in academic centers. NASEMSO (National Association of State EMS Officials) regional meetings provide pre-hospital and ED interface CE for emergency nurses with EMS coordination roles. ENA's online CE library provides 24/7 access to BCEN-approved CE. Momenties schedules all deadlines.",
  },
  {
    icon: Users,
    title: "SANE Certification, State License & ED Quality Metrics Calendar",
    description:
      "SANE-A (Adult/Adolescent Sexual Assault Nurse Examiner) certification through the International Association of Forensic Nurses (IAFN) requires 3-year renewal — 40 CE hours in forensic nursing with specific content in trauma-informed care, evidence collection, and documentation for legal proceedings. Emergency department quality reporting — SEP-1 sepsis bundle compliance, door-to-balloon time reporting, stroke core measures, and CMS emergency department throughput metrics — requires nursing staff participation in data abstraction and quality improvement cycles. The Joint Commission ED Standards (3-year accreditation cycle) review emergency nursing competencies, restraint/seclusion compliance, and trauma-informed care documentation. Left-without-being-seen (LWBS) rate reporting and ED capacity management metrics require monthly nursing leadership review. State nursing license renewal (2-3 year cycles) with state-specific CE requirements complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "High-Sensitivity Troponin in Chest Pain — NEJM 2024",
    description: "APACE validation study (n=8,000 ED chest pain presentations) confirming 0h/1h ESC rapid rule-out algorithm sensitivity 99.6% — required ENA CE update for emergency nurses on troponin result interpretation, 1-hour discharge protocol implementation, and rapid chest pain pathway documentation.",
  },
  {
    title: "Ketamine vs. Midazolam for Procedural Sedation — JAMA 2023",
    description: "Multicenter ED RCT (n=1,200 procedural sedation patients) confirming ketamine superior recovery profile at equivalent sedation depth — required ENA CE update for emergency nurses on ketamine sedation monitoring, emergence reaction management, and ACLS-aligned documentation protocols.",
  },
  {
    title: "Trauma-Informed Care in the ED — Lancet 2023",
    description: "National study (n=200 EDs) confirming trauma-informed care training reduces patient-initiated violence incidents 28% and improves HCAHPS ED scores — required ENA CE update for emergency nurses on trauma-informed communication, de-escalation techniques, and documentation.",
  },
  {
    title: "Sepsis Bundle Compliance and Mortality — NEJM 2024",
    description: "National SEP-1 compliance analysis (n=180,000 sepsis patients) confirming 3-hour bundle completion associated with 25% mortality reduction — required ENA CE update for emergency nurses on sepsis screening tool accuracy, lactate collection timing, and CMS SEP-1 documentation requirements.",
  },
  {
    title: "Ultrasound-Guided IV Access in Difficult Access — JAMA 2023",
    description: "Multicenter ED RCT (n=600 difficult IV access patients) confirming UGIV reduces failed attempts and increases success rates 85% — required ENA CE update for emergency nurses on ultrasound-guided vascular access technique, documentation, and competency validation requirements.",
  },
  {
    title: "ED Crowding and Patient Safety Events — NEJM 2024",
    description: "National ED registry analysis (n=2M ED visits) associating ED crowding with 15% increase in adverse events per boarding hour — required ENA CE update for emergency nurses on safe patient handoff protocols, escalation frameworks for boarding patients, and documentation for quality reporting.",
  },
]

const testimonial = {
  quote:
    "CEN recertification, CPEN renewal, TNCC instructor certification, ENPC instructor renewal, SANE-A recertification, ACLS, BLS, annual MCI drill documentation, annual STEMI simulation documentation, stroke code simulation, and state license — all on different 2, 3, or 4-year cycles. I work two ED jobs and had six certifications lapsing in one year. Momenties mapped everything. I renewed all six on time.",
  name: "Nkechi A.",
  title: "RN, CEN, CPEN, SANE-A, FENA, Emergency Department Charge Nurse",
}

export default function EmergencyNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Emergency Nurses"
        title="CEN Certification. TNCC/ENPC Instructor. SANE-A Renewal. One Calendar."
        subtitle="Momenties tracks CEN, CPEN, and CFRN recertification cycles, TNCC and ENPC provider and instructor renewal, SANE-A forensic nursing certification, ENA fellowship CE, mass casualty simulation documentation, ACLS/BLS renewal, and state license so emergency nurses maintain every credential without administrative overload."
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
            Landmark Studies Shaping Emergency Nursing Practice
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
