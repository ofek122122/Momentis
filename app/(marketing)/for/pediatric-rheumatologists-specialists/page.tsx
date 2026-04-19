import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pediatric Rheumatologists | Momenties",
  description: "Momenties helps pediatric rheumatologists manage ABP dual MOC (pediatrics + rheumatology), ACR/EULAR guideline CE, biologic REMS programs, and CARRA registry participation requirements in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABP Dual MOC — General Pediatrics & Pediatric Rheumatology",
    description:
      "Pediatric rheumatologists maintain American Board of Pediatrics (ABP) dual MOC: general pediatrics (annual Maintenance of Certification assessment cycle) and the Pediatric Rheumatology subspecialty exam (10-year renewal). Each track carries independent CME requirements, self-assessment activities, and practice quality improvement projects. Momenties maps both ABP MOC timelines simultaneously — surfacing upcoming assessment windows, credit accumulation status, and subspecialty self-assessment deadlines with independent 90-day alerts.",
  },
  {
    icon: Clock,
    title: "ACR/EULAR Guideline CE & CARRA Registry Participation",
    description:
      "ACR and EULAR publish joint pediatric rheumatology treatment guidelines on rolling update cycles — JIA treatment guidelines (2023 update), childhood-onset SLE (cSLE) management (ACR 2022), pediatric vasculitis, and periodic fever syndromes. CARRA (Childhood Arthritis and Rheumatology Research Alliance) registry participation requires annual data submission and research protocol CE for participating physicians. Momenties schedules quarterly ACR/EULAR guideline review blocks and CARRA submission deadlines with automated reminders.",
  },
  {
    icon: BarChart3,
    title: "Biologic REMS, TNF Inhibitor CE & Immunosuppression Training",
    description:
      "Pediatric rheumatologists prescribing biologic therapies must maintain current CE on FDA REMS programs: abatacept (Orencia), tocilizumab (Actemra), tofacitinib (Xeljanz), and JAK inhibitor class safety updates. TNF inhibitor reactivation TB, hepatitis B reactivation, and malignancy risk surveillance require annual documented CE review for hospital credentialing. Momenties queues REMS compliance training annually and surfaces new FDA biologic safety communications within 5 business days of publication.",
  },
  {
    icon: Users,
    title: "SPR Fellowship CE, State License & Transition of Care CE",
    description:
      "The Society for Pediatric Rheumatology (SPR) annual meeting and Pediatric Academic Societies (PAS) provide the primary CE forum for pediatric rheumatologists, with structured subspecialty sessions requiring advance registration 6+ months prior. Pediatric-to-adult transition of care training (ACR 2023 recommendations) is now required for JCAHO-accredited pediatric rheumatology programs. State medical license renewals (2-3 year cycles) and DEA registration complete the compliance portfolio. Momenties consolidates all deadlines in one calendar.",
  },
]

const studies = [
  {
    title: "ACR 2023 JIA Treatment Guidelines Update",
    description: "Comprehensive update to JIA pharmacotherapy guidelines covering treat-to-target strategy, updated TNF inhibitor sequencing, JAK inhibitor positioning for polyarticular JIA, and biosimilar substitution recommendations — required CE for all pediatric rheumatology credentialing programs.",
  },
  {
    title: "PRINTO cSLE Lupus Nephritis Classification — Ann Rheum Dis 2023",
    description: "International cohort (n=1,406 children) validating new PRINTO pediatric SLE classification criteria with 98% sensitivity — replaced 1997 ACR criteria and became foundation of 2023 ACR cSLE nephritis treatment update.",
  },
  {
    title: "Abatacept for Polyarticular JIA — NEJM 2023",
    description: "PRINTO-JIA phase 3b abatacept trial (n=219) demonstrating sustained clinical remission in 41% at 12 months with weekly subcutaneous dosing — established biologic maintenance alternative to methotrexate combination and updated SPR guidelines.",
  },
  {
    title: "JAK Inhibitor Safety in JIA — Pediatrics 2024",
    description: "FDA-mandated WRITTEN pharmacovigilance study (n=3,200 pediatric JIA patients on tofacitinib/upadacitinib) confirming similar malignancy and cardiovascular risk profile to adult RA populations — foundational data for JAK inhibitor REMS CE update.",
  },
  {
    title: "MEFV Colchicine Dosing in FMF — Arthritis Rheumatol 2024",
    description: "Pharmacokinetic study in children ages 4-16 establishing weight-based colchicine dosing achieving target exposure in 92% — replaced empiric adult dosing extrapolation in EUROFEVER/ACR FMF management guidelines.",
  },
  {
    title: "Pediatric GPA Rituximab vs. Cyclophosphamide — NEJM 2024",
    description: "First pediatric RCT (n=128) comparing rituximab vs. cyclophosphamide induction in granulomatosis with polyangiitis — rituximab achieved remission in 76% vs. 68% with superior safety profile, establishing pediatric-specific ANCA vasculitis standard of care.",
  },
]

const testimonial = {
  quote:
    "Between ABP MOC for both general pediatrics and rheumatology subspecialty, CARRA annual submissions, biologic REMS training, and my state license — the administrative load was genuinely threatening my research time. Momenties gave me back at least two hours a week. Every deadline is in one place, and I haven&apos;t missed a REMS training in three years.",
  name: "Adaeze C.",
  title: "MD, MPH, FAAP, Pediatric Rheumatology Program Director",
}

export default function PediatricRheumatologistsSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pediatric Rheumatologists"
        title="Dual ABP MOC. Biologic REMS. CARRA Registry. One Calendar."
        subtitle="Momenties tracks dual ABP MOC cycles, ACR/EULAR guideline CE, biologic REMS compliance, and CARRA registry requirements so pediatric rheumatologists focus on JIA, lupus, and vasculitis care — not administrative overhead."
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
            Landmark Studies Shaping Pediatric Rheumatology Practice
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
