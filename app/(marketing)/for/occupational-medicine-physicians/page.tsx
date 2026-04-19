import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Occupational Medicine Physicians | Momenties",
  description: "Momenties helps occupational medicine physicians manage ABPM/ACOEM board certification renewal, MRO certification, DOT physical examiner recertification, OSHA medical surveillance program cycles, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM/ACOEM Board Certification & Occupational Medicine MOC",
    description:
      "The American Board of Preventive Medicine (ABPM) Occupational Medicine certification requires recertification every 10 years with a passing examination covering occupational toxicology, industrial hygiene, ergonomics, disability evaluation, and workers&apos; compensation medicine. ACOEM (American College of Occupational and Environmental Medicine) fellowship maintenance requires 50 CME hours in occupational medicine annually — with specific requirements for environmental medicine, fitness-for-duty evaluation, and return-to-work CE. Diplomates with dual certification in aerospace medicine, public health, or clinical pharmacology must maintain parallel MOC requirements. Momenties tracks all timelines simultaneously.",
  },
  {
    icon: Clock,
    title: "MRO Certification, DOT Physical Examiner & Drug Testing CE",
    description:
      "Medical Review Officer (MRO) certification — issued through AAMRO or MROCC — requires recertification every 5 years with a written examination and 12 MRO CME hours every 3 years. DOT Federal Motor Carrier Safety Administration (FMCSA) certified medical examiner status requires registration on the National Registry and biennial recertification training (10 hours every 5 years). Drug and alcohol testing program management CE — required for MROs, SAPs (Substance Abuse Professionals), and DER administrators — is updated when DOT 49 CFR Part 40 regulations change. Momenties tracks all MRO, NRCME, and SAP deadlines with advance alerts.",
  },
  {
    icon: BarChart3,
    title: "OSHA Medical Surveillance Program Cycles & Compliance CE",
    description:
      "Occupational physicians managing OSHA-mandated medical surveillance programs must track exam cycles for each covered standard: OSHA 1910.1025 lead (periodic exams based on blood lead levels), 1910.1028 benzene (annual for exposed workers), 1910.1096 ionizing radiation, 1910.134 respiratory protection (fit testing annually + medical evaluation), and hazard-specific programs for silica, asbestos, and noise. Program compliance audits — required when OSHA citations are issued or when new regulatory interpretations are published — require CE updates. Momenties manages all surveillance calendar cycles by standard, exposure level, and employee cohort.",
  },
  {
    icon: Users,
    title: "State License, Workers&apos; Compensation CE & IME Credentialing",
    description:
      "Independent Medical Examination (IME) credentialing — required for workers&apos; compensation IME panels in most states — has state-specific CE and documentation requirements with renewal cycles of 1-3 years. Workers&apos; compensation evaluator certification programs (California QME, Florida IME, New York IME) each carry independent CE requirements with exam-based renewal. State medical license renewal (2-3 year cycles) with occupational medicine-specific CME requirements applies in states with specialty CE mandates. Aerospace Medicine dual certifications require FAA medical certification currency. Momenties consolidates all state-specific compliance deadlines.",
  },
]

const studies = [
  {
    title: "OSHA Silica Standard Medical Surveillance Outcomes — JOEM 2024",
    description: "5-year outcomes analysis of OSHA 1910.1053 crystalline silica medical surveillance program demonstrating 34% earlier silicosis detection rates with structured surveillance vs. symptom-driven evaluation — updated ACOEM surveillance protocol CE for construction and manufacturing occupational health programs.",
  },
  {
    title: "Long-COVID Occupational Impact & RTW Outcomes — Lancet 2024",
    description: "Multicenter cohort (n=4,800 workers with long-COVID) establishing evidence-based functional capacity evaluation criteria and graduated return-to-work protocols — foundational CE for occupational physicians managing post-COVID disability and fitness-for-duty evaluations.",
  },
  {
    title: "DOT Drug Testing Update: Oral Fluid Testing — FR 2023",
    description: "DOT 49 CFR Part 40 final rule implementing oral fluid drug testing as an alternative to urine for DOT-mandated programs — mandatory CE update for all MROs, DERs, and occupational medicine programs managing DOT-regulated employer drug testing.",
  },
  {
    title: "Workplace Opioid Program Outcomes — JOEM 2023",
    description: "National analysis (n=620 employers) demonstrating structured workplace opioid programs (post-offer testing, prescriber communication protocols, SAP return-to-duty) reduced occupational opioid-related incidents by 41% — updated ACOEM opioid prescribing guideline CE.",
  },
  {
    title: "Heat Illness Prevention: NIOSH REL Update — NIOSH 2024",
    description: "NIOSH updated Recommended Exposure Limit (REL) for occupational heat exposure with new WBGT action levels — required CE for occupational physicians developing heat illness prevention programs and OSHA General Duty Clause compliance.",
  },
  {
    title: "Noise-Induced Hearing Loss Surveillance — Am J Ind Med 2024",
    description: "Population analysis (n=180,000 audiograms) validating revised OSHA standard threshold shift criteria and identifying occupational noise exposure patterns in non-traditional industries — updated ACOEM hearing conservation program CE.",
  },
]

const testimonial = {
  quote:
    "I manage occupational health programs for 12 employers, maintain ABPM certification, hold MRO status, run a QME panel in three states, and cover DOT physical exams. Every credential runs on a different cycle. Momenties built me a master compliance calendar that pulls it all together — I haven&apos;t had a lapse since.",
  name: "Emeka O.",
  title: "MD, MPH, FACOEM, MRO, QME",
}

export default function OccupationalMedicinePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Occupational Medicine Physicians"
        title="ABPM Certification. MRO Status. DOT Examiner. One Calendar."
        subtitle="Momenties tracks ABPM occupational medicine certification, MRO recertification, FMCSA medical examiner status, OSHA surveillance program cycles, and IME credentialing so occupational physicians stay compliant across every employer program."
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
            Landmark Studies Shaping Occupational Medicine Practice
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
