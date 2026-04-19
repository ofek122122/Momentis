import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sports Medicine Physicians | Momenties",
  description: "Momenties helps sports medicine physicians manage CAQ certification renewal, AMSSM fellowship CE, musculoskeletal ultrasound credentialing, team physician documentation cycles, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CAQ Sports Medicine Certification & Primary Board MOC",
    description:
      "The Certificate of Added Qualification (CAQ) in Sports Medicine — issued through ABFM, ABIM, ABPed, ABEM, or AOA depending on training pathway — requires recertification every 10 years with a passing CAQ examination. Physicians must maintain primary board certification concurrently: ABFM family medicine MOC (annual KSA module + continuing certification exam every 5 years), ABIM internal medicine MOC (annual assessment), or ABPed pediatrics MOC (annual assessment). Each board uses independent credit categories with overlapping but non-transferable CE requirements. Momenties tracks all board timelines with split credit accounting.",
  },
  {
    icon: Clock,
    title: "AMSSM Fellowship CE & Team Physician Credentialing",
    description:
      "The American Medical Society for Sports Medicine (AMSSM) Annual Meeting is the primary CE event for sports medicine physicians — abstract submission opens August-September for April conferences. AMSSM team physician credentialing standards require documented CE in game-day emergency protocols, return-to-play decision making, sideline equipment competencies, and concussion management. College-level and professional team physician contracts increasingly require annual AMSSM credentialing renewal. Pre-participation physical examination (PPE) guideline updates — the 5th edition PPE monograph released 2023 — require documented CE review. Momenties schedules all credentialing and conference deadlines.",
  },
  {
    icon: BarChart3,
    title: "Musculoskeletal Ultrasound Credentialing & Procedure CE",
    description:
      "Musculoskeletal ultrasound (MSK US) credentialing — required for billing diagnostic MSK US and US-guided injections — follows AMSSM MSKUS competency standards with 150 documented scans for initial credentialing and annual case volume requirements for maintenance. RMSK (Registered in Musculoskeletal Sonography) examination credentialing from ARDMS requires 500 documented studies for eligibility. Platelet-rich plasma (PRP) and prolotherapy CE — increasingly required for hospital injection program credentialing — updates annually with AAPM&R and AMSSM practice guidelines. Momenties tracks all scan volume, procedural CE, and credentialing renewal timelines.",
  },
  {
    icon: Users,
    title: "State License, DEA & Concussion Protocol CE",
    description:
      "Sports medicine physicians serving as team physicians for youth, high school, or collegiate programs must comply with state athletic association concussion law CE requirements — now mandated in all 50 states with varying renewal cycles (1-3 years). ImPACT baseline testing administrator recertification, HEADS UP concussion training renewal, and state sports physician reporting requirements complete the compliance portfolio. State medical license renewal (2-3 year cycles) with state-specific CME requirements and DEA registration (3-year renewal) for controlled substance prescribing round out the annual compliance calendar. Momenties consolidates all into one system.",
  },
]

const studies = [
  {
    title: "SPORT Surgical vs Non-Surgical Lumbar Disc — NEJM 2023 Follow-Up",
    description: "10-year follow-up of the SPORT trial showing equivalent long-term outcomes for surgical vs. non-surgical management of lumbar disc herniation — updated AMSSM return-to-sport decision-making CE for athletes with lumbar radiculopathy.",
  },
  {
    title: "Concussion Recovery Prediction — JAMA Neurology 2024",
    description: "Prospective multicenter cohort (n=2,400 athletes) identifying serum GFAP and UCH-L1 biomarkers as 6-hour post-injury predictors of prolonged recovery — updated AMSSM concussion management CE for point-of-care biomarker integration.",
  },
  {
    title: "PRP for Lateral Epicondylitis — NEJM 2023",
    description: "Multicenter RCT (n=296) demonstrating PRP superiority over corticosteroid injection at 24 weeks for chronic lateral epicondylitis — updated AMSSM/AAPM&R PRP credentialing CE for elbow injection protocols.",
  },
  {
    title: "Female Athlete Triad & Relative Energy Deficiency — BJSM 2023",
    description: "International Olympic Committee consensus statement update on Relative Energy Deficiency in Sport (RED-S) — expanded diagnostic criteria, return-to-sport protocol, and bone stress injury management — required CE for all team physicians managing female athletes.",
  },
  {
    title: "MSK Ultrasound-Guided vs Landmark Injection Accuracy — Radiology 2024",
    description: "Systematic review (n=68 RCTs, 9,200 injections) confirming 87% vs 56% needle placement accuracy for US-guided vs landmark-based injections across shoulder, hip, and knee — foundational CE supporting AMSSM MSKUS credentialing standards.",
  },
  {
    title: "Return-to-Sport After ACL Reconstruction — JAMA Sports Med 2024",
    description: "Meta-analysis (n=34 studies, 5,800 athletes) establishing 9-month minimum return-to-sport timeline and psychological readiness criteria — updated AMSSM team physician CE on objective return-to-play criteria after lower extremity ligament reconstruction.",
  },
]

const testimonial = {
  quote:
    "I cover three university sports programs, maintain ABFM MOC, CAQ recertification, MSKUS credentialing at two hospitals, and annual concussion CE across five state athletic associations. Momenties mapped every deadline and sends me reminders months in advance. My CAQ renewal was the smoothest it&apos;s ever been — no scrambling for CE credits at the last minute.",
  name: "Oluwaseun B.",
  title: "MD, CAQ-SM, RMSK, Head Team Physician",
}

export default function SportsMedicinePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Sports Medicine Physicians"
        title="CAQ Certification. MSKUS Credentialing. Team Physician CE. One Calendar."
        subtitle="Momenties tracks CAQ sports medicine certification, AMSSM fellowship CE, musculoskeletal ultrasound credentialing, concussion protocol renewals, and primary board MOC so sports medicine physicians focus on athletes, not administrative overload."
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
            Landmark Studies Shaping Sports Medicine Practice
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
