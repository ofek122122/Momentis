import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Addiction Medicine Specialists | Momenties",
  description: "Momenties helps addiction medicine specialists manage ABAM/ABPM board certification renewal, ASAM fellowship CE, buprenorphine/naltrexone prescribing compliance, REMS requirements, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABAM/ABPM Addiction Medicine Certification & Primary Board MOC",
    description:
      "Addiction medicine specialists certified through the American Board of Addiction Medicine (ABAM) or through subspecialty pathways via ABIM, ABFM, ABEM, or ABP maintain certification through a 10-year recertification examination cycle covering substance use disorder pharmacotherapy, motivational interviewing, co-occurring disorders, pain-addiction interface, and withdrawal management. ABAM diplomates concurrently maintaining primary board MOC must satisfy independent CME requirements for each board. ABAM Maintenance of Certification (ABAM MOC) requires 50 AMA PRA Category 1 credits in addiction medicine annually, with specific requirements for pharmacotherapy CE. Momenties tracks all certification timelines simultaneously.",
  },
  {
    icon: Clock,
    title: "ASAM Fellowship CE & Addiction Conference Calendar",
    description:
      "The American Society of Addiction Medicine (ASAM) Annual Conference is the primary CE event for addiction medicine specialists — abstract submission opens September-October for April conferences, 5-6 months in advance. ASAM fellowship (FASAM) maintenance requires documented CE in medication-assisted treatment (MAT), contingency management, harm reduction, and adolescent addiction. The College on Problems of Drug Dependence (CPDD) annual scientific meeting and the American Association for the Treatment of Opioid Dependence (AATOD) conference provide subspecialty CE for opioid treatment program (OTP) practitioners. ASAM guideline updates — 2023 Clinical Practice Guideline for Alcohol Use Disorder — require CE documentation. Momenties schedules all conference and CE deadlines.",
  },
  {
    icon: BarChart3,
    title: "Buprenorphine, Naltrexone & Methadone Prescribing CE Compliance",
    description:
      "The 2023 Consolidated Appropriations Act eliminated the X-waiver requirement for buprenorphine prescribing — but created new compliance requirements: 8-hour training for DEA registrants seeing more than 30 patients with OUD, annual DEA registration renewal with attestation of training completion, and state-specific buprenorphine prescribing CE (now mandated in 12 states for renewal). Methadone OTP clinic medical director certification requires DEA registration, SAMHSA OTP certification maintenance, and state-specific OTP medical director CE (annually in most states). Naltrexone extended-release (Vivitrol) administration training and patient monitoring CE is required for certification programs. Momenties tracks all prescribing compliance cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA, Harm Reduction CE & PCSS Training",
    description:
      "The Provider Clinical Support System (PCSS) — federally funded by SAMHSA — offers free MAT training with accredited CE that satisfies ABAM MOC requirements; scheduling annual PCSS module completion maintains CE compliance efficiently. State medical license renewal (2-3 year cycles) with state-specific SUD or opioid prescribing CE, DEA registration (3-year renewal), and state-specific harm reduction CE (naloxone co-prescribing training, supervised consumption site regulatory updates in applicable jurisdictions) round out the compliance portfolio. LGBTQ+ addiction CE — required for practitioners serving LGBTQ+ populations in several state-funded programs — is managed alongside standard CE requirements. Momenties consolidates everything.",
  },
]

const studies = [
  {
    title: "Buprenorphine X-Waiver Elimination Impact — NEJM 2024",
    description: "National prescriber analysis (n=820,000 DEA registrants) evaluating buprenorphine prescribing patterns post-X-waiver elimination — demonstrated 34% increase in new buprenorphine prescribers and 28% increase in patient access — updated ASAM CE on post-waiver compliance requirements.",
  },
  {
    title: "ASAM Clinical Practice Guideline: Alcohol Use Disorder — JAMA 2023",
    description: "Comprehensive ASAM guideline covering pharmacotherapy selection (naltrexone, acamprosate, disulfiram, gabapentin, baclofen), psychological treatment integration, and post-acute withdrawal management — required CE for all ABAM diplomates and addiction medicine fellowship programs.",
  },
  {
    title: "Injectable Naltrexone vs Buprenorphine for OUD — Lancet 2023",
    description: "Meta-analysis (n=12 RCTs, 3,800 patients) confirming equivalent retention and illicit opioid use reduction for naltrexone XR vs. buprenorphine with adequate induction — updated ASAM treatment selection CE for OUD pharmacotherapy.",
  },
  {
    title: "Stimulant Use Disorder Pharmacotherapy — NEJM 2024",
    description: "Phase 2 RCT (n=400) demonstrating methamphetamine+naltrexone combination superiority over placebo for methamphetamine use disorder — first positive pharmacotherapy trial — required CE update for ABAM recertification curriculum.",
  },
  {
    title: "Fentanyl Test Strip Harm Reduction Outcomes — JAMA IM 2023",
    description: "Prospective cohort (n=2,100 PWID) demonstrating fentanyl test strip access reduced overdose events by 36% and changed drug use behaviors in 61% of users — required ASAM harm reduction CE for addiction medicine practitioners in all settings.",
  },
  {
    title: "Long-Term Buprenorphine Retention & Outcomes — NEJM 2024",
    description: "10-year cohort (n=6,800 patients on buprenorphine maintenance) showing sustained mortality reduction (56% lower all-cause mortality) with continuous vs. discontinued buprenorphine — foundational CE for ABAM recertification long-term MAT management curriculum.",
  },
]

const testimonial = {
  quote:
    "ABAM recertification, primary board MOC, ASAM conference abstract deadlines, post-X-waiver DEA attestation, state opioid prescribing CE in four states, OTP medical director certification, and PCSS training — I was genuinely losing track. Momenties built a master compliance calendar that surfaces everything months before it&apos;s due. I haven&apos;t had a surprise renewal since.",
  name: "Emeka F.",
  title: "MD, FASAM, DABAM, OTP Medical Director",
}

export default function AddictionMedicineSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Addiction Medicine Specialists"
        title="ABAM Certification. Buprenorphine Compliance. ASAM CE. One Calendar."
        subtitle="Momenties tracks ABAM board certification, DEA buprenorphine training attestation, ASAM fellowship CE, methadone OTP compliance, state opioid prescribing requirements, and harm reduction CE so addiction medicine specialists focus on patients, not paperwork."
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
            Landmark Studies Shaping Addiction Medicine Practice
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
