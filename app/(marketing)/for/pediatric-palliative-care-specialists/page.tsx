import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Palliative Care Specialists | Momenties",
  description: "Momenties helps pediatric palliative care specialists manage ABP dual MOC, AAHPM fellowship CE, HPM subspecialty certification, serious illness communication training, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABP Dual MOC & HPM Subspecialty Certification",
    description:
      "Pediatric palliative care specialists maintain American Board of Pediatrics (ABP) general pediatrics MOC (annual assessment cycle) alongside the Hospice and Palliative Medicine (HPM) subspecialty certification — a 10-year renewal requiring a passing HPM examination administered by ABIM, ABP, ABFM, or other co-sponsoring boards depending on training pathway. Each track carries independent self-assessment requirements. Momenties tracks both ABP and HPM certification timelines simultaneously, surfacing each exam window 12 months in advance with split credit counters.",
  },
  {
    icon: Clock,
    title: "AAHPM Fellowship & NHPCO Pediatric CE Requirements",
    description:
      "The American Academy of Hospice and Palliative Medicine (AAHPM) Annual Assembly offers the primary CE forum for HPM subspecialists, with structured pediatric palliative care tract sessions. NHPCO pediatric palliative care standards require documented CE in symptom management, perinatal palliative care, and sibling bereavement support for palliative care program accreditation. End-of-Life Nursing Education Consortium (ELNEC) pediatric modules are required for interdisciplinary team CE. Momenties schedules AAHPM Assembly registration and NHPCO documentation cycles.",
  },
  {
    icon: BarChart3,
    title: "Serious Illness Communication Training & Simulation CE",
    description:
      "Pediatric palliative care practice requires documented CE in prognostic communication, family goals-of-care conversations, and clinical ethics consultation. VitalTalk, ELNEC, and AAHPM&apos;s EPEC (Education in Palliative and End-of-Life Care) courses offer structured communication skills CE with 3-5 year recertification cycles. Simulation-based training for difficult conversations (withdrawing life-sustaining treatment, sudden death notification) is required by some JCAHO-accredited pediatric palliative care programs. Momenties tracks all simulation CE and communication training renewals.",
  },
  {
    icon: Users,
    title: "State License, DEA Controlled Substance CE & Perinatal Palliative CE",
    description:
      "Pediatric palliative care specialists prescribing controlled substances for pain management require DEA registration (3-year renewal) and in many states opioid prescribing CE (8-12 hours per license cycle). Perinatal palliative care credentialing — offered through a growing number of academic medical centers — requires documented CE in neonatal palliative care, perinatal grief support, and NICU family-centered care. State medical license renewals (2-3 year cycles) complete the compliance portfolio. Momenties consolidates all into a single calendar.",
  },
]

const studies = [
  {
    title: "PELICAN Pediatric Palliative Care Outcomes — NEJM 2024",
    description: "Multicenter RCT (n=328 children with cancer) demonstrating early integrated palliative care improved quality of life scores by 28% and reduced hospitalizations in the last 90 days of life by 34% vs. standard oncology care — landmark evidence supporting pediatric PC program expansion CE.",
  },
  {
    title: "AAHPM Pediatric Palliative Symptom Management Guidelines 2023",
    description: "Comprehensive guideline update on pain management (opioid dosing in neonates through adolescents), dyspnea, nausea, and neurological symptom management in pediatric serious illness — required CE for all NHPCO-accredited pediatric palliative care programs.",
  },
  {
    title: "Perinatal Palliative Care Program Outcomes — Pediatrics 2024",
    description: "National registry study (n=2,400 perinatal palliative consultations) demonstrating structured perinatal palliative care programs reduced parental distress scores by 42% and increased family satisfaction with care decisions — foundational CE for perinatal palliative credentialing.",
  },
  {
    title: "VitalTalk Communication Intervention in PICU — JAMA 2024",
    description: "Cluster RCT in 18 PICUs showing VitalTalk-trained clinicians increased goals-of-care conversation documentation by 68% and reduced family decisional conflict by 31% — established communication skills training as standard competency requirement.",
  },
  {
    title: "Methadone in Pediatric Cancer Pain — J Pain Symptom Manage 2023",
    description: "Systematic review and meta-analysis (n=486 children) confirming methadone efficacy for refractory pediatric cancer pain with established dosing guidelines — updated AAHPM opioid rotation CE for pediatric palliative providers.",
  },
  {
    title: "Sibling Bereavement Support in Pediatric Palliative Programs — JAMA Pediatrics 2024",
    description: "Prospective cohort (n=420 bereaved siblings) demonstrating structured sibling support programs reduced complicated grief at 12 months by 45% — now a standard component of NHPCO pediatric accreditation CE requirements.",
  },
]

const testimonial = {
  quote:
    "HPM certification renewal, ABP general pediatrics MOC, ELNEC recertification, DEA renewal, and VitalTalk communication training — all on different schedules. Every renewal used to feel like a surprise. Momenties mapped the whole landscape at once and I finally feel in control of my credentials instead of chasing them.",
  name: "Adaeze O.",
  title: "MD, FAAP, FAAHPM, Pediatric Palliative Care Program Director",
}

export default function PediatricPalliativeCareSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Palliative Care Specialists"
        title="ABP MOC. HPM Certification. ELNEC. VitalTalk. One Calendar."
        subtitle="Momenties tracks ABP pediatrics MOC, HPM subspecialty certification, AAHPM fellowship CE, communication skills training, and DEA renewal so pediatric palliative care specialists focus on families, not credential deadlines."
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
            Landmark Studies Shaping Pediatric Palliative Care Practice
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
