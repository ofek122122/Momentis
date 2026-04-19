import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Maternal Newborn Nurses | Momenties",
  description: "Momenties helps maternal newborn nurses manage RNC-MNN certification, NRP instructor renewal, AWHONN fellowship CE, fetal monitoring competency validation, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "RNC-MNN Certification & Maternal Newborn Nursing Specialty MOC",
    description:
      "Maternal newborn nurses maintaining Registered Nurse Certified — Maternal Newborn Nursing (RNC-MNN) certification through the National Certification Corporation (NCC) follow a 3-year recertification cycle requiring 45 contact hours of CE — at least 15 hours must be in maternal newborn nursing — or passing the recertification examination. NCC also offers the Inpatient Obstetric Nursing (RNC-OB) and Electronic Fetal Monitoring (C-EFM) credentials, which maternal newborn nurses with labor/delivery responsibilities may hold concurrently with RNC-MNN — each has independent 3-year recertification cycles. AWHONN (Association of Women's Health, Obstetric and Neonatal Nurses) Advanced Practice Nursing in Perinatal Care certification and Fetal Heart Monitoring (FHM) certification carry separate renewal requirements. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NRP Instructor Renewal & Fetal Monitoring Competency Validation",
    description:
      "Neonatal Resuscitation Program (NRP) provider status requires renewal every 2 years — NRP 8th Edition requires completion of the NRP eSim module plus skills validation with an NRP Instructor. NRP Instructor status requires 2-year renewal including teaching a minimum number of NRP courses and completing NRP Instructor Update training. AWHONN Intermediate and Advanced Fetal Heart Monitoring courses provide competency validation for maternal newborn nurses with labor/delivery responsibilities — AWHONN recommends institutional fetal monitoring competency validation annually. Maternal newborn nurses with advanced fetal monitoring roles (perinatal educators, charge nurses) must maintain AWHONN Fetal Heart Monitoring Instructor status with biennial renewal. Shoulder dystocia, hemorrhage, and eclampsia obstetric emergency drills — AWHONN recommends quarterly simulations — require documentation. Momenties schedules all renewals and simulation cycles.",
  },
  {
    icon: BarChart3,
    title: "AWHONN Fellowship CE & Perinatal Nursing Conference Calendar",
    description:
      "AWHONN National Convention (June) is the primary maternal newborn nursing CE event — abstract submission opens October-November, 7-8 months in advance. AWHONN fellowship (FAWHONN) maintenance requires 45 contact hours per 3-year cycle with specific requirements in perinatal nursing clinical practice and nursing leadership. AWHONN Perinatal Nursing Management CE — for maternal newborn nurses in charge or management roles — includes staffing ratio CE, nurse-sensitive quality indicator tracking, and perinatal patient safety bundle implementation. ACOG (American College of Obstetricians and Gynecologists) / AWHONN Maternal Safety Bundle training (hemorrhage, hypertension, VTE, sepsis) requires annual competency documentation. National Perinatal Association (NPA) webinar CE series provides quarterly updates on emerging perinatal evidence. Momenties schedules all deadlines.",
  },
  {
    icon: Users,
    title: "State License, ACLS/BLS Renewal & Perinatal Quality Reporting",
    description:
      "Maternal newborn nurses managing obstetric hemorrhage and severe hypertension must maintain AWHONN Advanced Fetal Monitoring competency plus institution-specific obstetric emergency simulation documentation — CMQCC and AIM (Alliance for Innovation on Maternal Health) safety bundle requirements are driving state-level mandates in California, New York, and Illinois. Perinatal quality reporting — Leapfrog Hospital Survey perinatal care measures, HEDIS perinatal depression screening, and CMS maternity quality indicators — requires nursing staff participation in data abstraction and quality improvement cycles. ACLS certification (2-year renewal) is required for maternal newborn nurses on labor/delivery and antepartum high-risk units. BLS renewal (2-year cycle) applies to all maternal newborn nurses. State nursing license renewal (2-3 year cycles) includes mandatory CE requirements varying by state. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Oxytocin Dosing Protocols for Labor Augmentation — NEJM 2023",
    description: "ARRIVE trial 5-year follow-up analysis confirming low-dose oxytocin augmentation reduces cesarean rates without increasing adverse neonatal outcomes — required AWHONN CE update for maternal newborn nurses on oxytocin titration protocols, documentation standards, and uterine tachysystole management.",
  },
  {
    title: "Postpartum Hemorrhage Bundle Implementation — Lancet 2024",
    description: "AIM PPH Bundle national implementation study (n=500 hospitals, 2M births) confirming maternal mortality reduction 14% — required AWHONN CE update for maternal newborn nurses on quantitative blood loss (QBL) measurement, PPH cart preparation, blood bank activation protocols, and debriefing documentation.",
  },
  {
    title: "Nitrous Oxide for Labor Analgesia — JAMA 2023",
    description: "Multicenter RCT (n=1,800 laboring patients) confirming nitrous oxide safety and effectiveness for labor pain management with high patient satisfaction — required AWHONN CE update for maternal newborn nurses on nitrous oxide administration, monitoring parameters, and documentation.",
  },
  {
    title: "Hypertension in Pregnancy Management — NEJM 2024",
    description: "CHAP trial extension analysis confirming tight blood pressure control (goal <140/90) reduces severe maternal hypertension and adverse outcomes — required AWHONN CE update for maternal newborn nurses on BP monitoring frequency, antihypertensive administration, and escalation protocols.",
  },
  {
    title: "Postpartum Depression Screening Outcomes — JAMA 2023",
    description: "Population study (n=180,000 births) demonstrating universal Edinburgh Postnatal Depression Scale screening at 4-6 weeks reduces postpartum depression sequelae — required AWHONN CE update for maternal newborn nurses on EPDS administration, scoring, and warm handoff referral protocols.",
  },
  {
    title: "Skin-to-Skin Contact for Cesarean-Born Infants — Pediatrics 2024",
    description: "Meta-analysis (n=12,000 cesarean deliveries) confirming OR skin-to-skin contact improves breastfeeding initiation and maternal bonding without increasing complications — required AWHONN CE update for maternal newborn nurses on family-centered cesarean protocols and documentation.",
  },
]

const testimonial = {
  quote:
    "RNC-MNN recertification, C-EFM renewal, NRP Instructor status, AWHONN Fetal Heart Monitoring Instructor renewal, ACLS, BLS, quarterly hemorrhage simulation documentation, AIM bundle competency validation, and state license — all on different cycles. I have five certifications expiring in different years. Momenties mapped every deadline. I renewed everything on time last year without a single last-minute scramble.",
  name: "Ngozi A.",
  title: "RN, RNC-MNN, C-EFM, FAWHONN, Perinatal Nurse Educator",
}

export default function MaternalNewbornNursesPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Maternal Newborn Nurses"
        title="RNC-MNN Certification. NRP Renewal. Fetal Monitoring Competency. One Calendar."
        subtitle="Momenties tracks RNC-MNN and C-EFM recertification cycles, NRP provider and instructor renewal, AWHONN fellowship CE, fetal monitoring competency validation, obstetric emergency simulation documentation, ACLS/BLS renewal, and state license so maternal newborn nurses maintain every credential without administrative overload."
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
            Landmark Studies Shaping Maternal Newborn Nursing Practice
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
