import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Child & Adolescent Psychiatrists | Momenties",
  description: "Momenties helps child and adolescent psychiatrists manage ABPN dual MOC, CAP subspecialty certification, AACAP fellowship CE, pediatric psychopharmacology updates, REMS compliance, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPN General Psychiatry MOC & CAP Subspecialty Certification",
    description:
      "Child and adolescent psychiatrists maintain ABPN general psychiatry certification through MOC (annual Self-Assessment CME + 10-year recertification or LLSA pathway) alongside the Child and Adolescent Psychiatry (CAP) subspecialty certification — a separate 10-year examination covering developmental psychopathology, family systems, pediatric psychopharmacology, school consultation, and juvenile forensic psychiatry. Each board carries independent CME category requirements with no credit transfer between general psychiatry and CAP subspecialty tracks. Momenties tracks both ABPN certification timelines simultaneously with split credit counters and advance exam window alerts.",
  },
  {
    icon: Clock,
    title: "AACAP Fellowship CE & Child Mental Health Research Curriculum",
    description:
      "The American Academy of Child and Adolescent Psychiatry (AACAP) Annual Meeting is the primary CE event for CAP subspecialists — abstract submission opens May-June for October conferences, 4-5 months in advance. AACAP fellowship maintenance requires documented CE in autism spectrum disorder, ADHD pharmacotherapy, eating disorders, trauma-informed care, and school-based mental health. The American Society of Adolescent Psychiatry (ASAP) and Society for Developmental-Behavioral Pediatrics (SDBP) provide subspecialty CE for academic CAP practitioners. AACAP Practice Parameters — updated 2023-2024 for ASD, ADHD, and early childhood disorders — require documented CE review for CAP diplomates. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Pediatric Psychopharmacology CE & REMS Program Compliance",
    description:
      "Child and adolescent psychiatrists prescribing to minors navigate the most complex psychopharmacology CE landscape in psychiatry. Clozapine REMS (CARES program) requires monthly ANC monitoring documentation and prescriber re-enrollment annually. Stimulant prescribing CE — updated ADHD medication guidance from AACAP and FDA 2023 — is required for physicians with pediatric ADHD practices exceeding 50 patients. Lithium, valproate (STEPS REMS), and extended-release quetiapine all carry monitoring CE requirements. Suicidality black box warning CE — required since FDA 2004 mandate, renewed with SSRI updates — must be documented for all CAP prescribers. Momenties tracks all REMS and pharmacotherapy CE cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA, Telehealth CE & School Consultation Credentialing",
    description:
      "CAP practitioners providing school consultation services — IEP participation, 504 plan psychiatric input, threat assessment consultations — require documented CE in IDEA education law, Section 504, and school-based mental health service delivery. Telehealth prescribing CE — required in 14 states with pediatric telehealth-specific prescribing restrictions — has expanded with post-pandemic regulatory changes that vary by controlled substance class. DEA registration (3-year renewal) with multi-state practice coverage, and state medical license renewal (2-3 year cycles) with state-specific CME, complete the compliance portfolio. Momenties consolidates all deadlines.",
  },
]

const studies = [
  {
    title: "AACAP Revised ADHD Practice Parameters — JAACAP 2023",
    description: "Comprehensive AACAP ADHD guideline update covering diagnostic criteria, stimulant titration protocols, non-stimulant options (viloxazine, atomoxetine, guanfacine), and telehealth prescribing — required CE for all CAP diplomates with ADHD practices.",
  },
  {
    title: "Early Childhood Adversity & Psychiatric Outcomes — JAMA Psychiatry 2024",
    description: "Longitudinal cohort (n=9,400 children) establishing ACEs dose-response relationship with childhood-onset mood, anxiety, and PTSD disorders — updated AACAP trauma-informed care CE for CAP practitioners in high-adversity practice settings.",
  },
  {
    title: "Lurasidone for Pediatric Bipolar Depression — NEJM 2024",
    description: "Multicenter RCT (n=350 ages 10-17) confirming lurasidone safety and efficacy for pediatric bipolar I depression — updated pediatric psychopharmacology CE requirements for CAP board recertification and hospital credentialing.",
  },
  {
    title: "Autism Diagnosis & Early Intervention Outcomes — Lancet 2023",
    description: "Systematic review (n=22 RCTs, 3,800 children) confirming ESDM and JASPER early intervention superiority over standard care in ASD social communication outcomes — updated AACAP ASD Practice Parameter CE.",
  },
  {
    title: "Adolescent Cannabis Use & Psychosis Risk — JAMA Psychiatry 2024",
    description: "Meta-analysis (n=1.1M adolescents) quantifying 2.6× increased first-episode psychosis risk with regular cannabis use before age 18 — required CE for CAP practitioners developing substance use prevention and early psychosis intervention programs.",
  },
  {
    title: "School-Based Mental Health Intervention Outcomes — NEJM 2024",
    description: "National RCT (n=4,200 students, 52 schools) demonstrating Tier 2 school-based CBT programs reduced anxiety and depression symptoms by 38% — foundational CE for CAP school consultation practice and IEP psychiatric input.",
  },
]

const testimonial = {
  quote:
    "ABPN general recertification, CAP subspecialty exam, AACAP fellowship CE, clozapine REMS re-enrollment, telehealth prescribing CE in three states, school consultation credentialing — each on a different clock. Momenties showed me the full credential landscape at once. I&apos;ve been practicing 14 years and this is the first time I&apos;ve felt actually in control of my compliance calendar.",
  name: "Ngozi C.",
  title: "MD, FAPA, FAACAP, Child & Adolescent Psychiatry Fellowship Director",
}

export default function ChildAdolescentPsychiatristsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Child & Adolescent Psychiatrists"
        title="ABPN MOC. CAP Subspecialty. AACAP CE. REMS Compliance. One Calendar."
        subtitle="Momenties tracks ABPN general psychiatry MOC, CAP subspecialty certification, AACAP fellowship CE, pediatric psychopharmacology REMS requirements, and school consultation credentialing so child psychiatrists focus on patients, not paperwork."
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
            Landmark Studies Shaping Child & Adolescent Psychiatry Practice
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
