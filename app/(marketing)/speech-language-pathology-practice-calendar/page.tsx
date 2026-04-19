import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Speech-Language Pathology Practice Calendar | Momenties",
  description: "Momenties helps speech-language pathology practices manage CCC-SLP renewal, ASHA CEU cycles, MIPS reporting, Medicare NOMS quality reporting, and payer credentialing in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "CCC-SLP Licensure, ASHA Certification & Specialty Certification Calendar",
    description:
      "Speech-Language Pathologists maintain ASHA CCC-SLP (Certificate of Clinical Competence, 3-year renewal with 30 CEUs per renewal interval) — the national standard credential for SLPs in all practice settings. State SLP licensure: 49 states plus DC require state SLP license with CE requirements varying from 10-30 hours per renewal cycle (annual, biennial, or triennial). State licensure CE and ASHA CEU requirements overlap but are not always identical — some ASHA CEUs do not count for state licensure and vice versa, requiring dual tracking. Multi-state practice: SLPs in early intervention, teletherapy, or multi-state agency settings track separate state license renewals. ASHA specialty certification: BCS-S (Board Certified Specialist in Swallowing and Swallowing Disorders, ASHA, 3-year renewal, 12 specialty CEUs), BCS-F (Fluency), BCS-CL (Child Language), BCS-N (Neurophysiology), BCS-GER (Gerontological), and BCS-ASD (Autism Spectrum Disorders) for SLPs in specialty practice areas. Telepractice certification: ASHA-certified Telepractice certificate maintenance for SLPs in telehealth programs. Augmentative and Alternative Communication (AAC): ASHA ACSS (Assistive Communication Specialist Support) CE for SLPs in AAC programs. Voice specialty: NCVS (National Center for Voice and Speech) annual CE for SLPs in professional voice programs. LSVT LOUD: annual LSVT LOUD re-certification for SLPs treating Parkinson&apos;s disease. Lee Silverman Voice Treatment: annual treatment fidelity documentation. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: RefreshCw,
    title: "ASHA CEU Compliance & SLP Conference Calendar",
    description:
      "ASHA Annual Convention (November) is the primary SLP CE event — abstract submission opens February, and provides the largest single source of ASHA-approved CEUs directly applicable to CCC-SLP renewal. ASHA online CE self-study provides year-round CEU accumulation. DYSPHAGIA Research Society Annual Meeting (March) for SLPs in swallowing disorders programs. AAC-RERC Annual Symposium for SLPs in AAC programs. Voice Foundation Annual Symposium (May) for SLPs in voice programs. Early Intervention annual CE: ASHA early intervention module annual update for SLPs in Part C (IDEA Early Intervention) programs, annual state early intervention provider training requirement. School-based CE: ASHA Schools Conference annual CE for school SLPs, annual IEP documentation training, and IDEA/FAPE compliance annual CE for school-based SLPs. Dysphagia specialty CE: annual MBSS (Modified Barium Swallow Study) interpretation CE, annual FEES (Fiberoptic Endoscopic Evaluation of Swallowing) competency documentation for SLPs performing FEES (annual if not BCS-S), annual texture modification standards CE (IDDSI framework annual update), and annual instrumental dysphagia evaluation CE. Cognitive-communication CE: annual TBI cognitive-communication assessment CE, annual aphasia treatment evidence-based practice CE, and annual dementia communication CE. Fluency CE: annual stuttering treatment CE update. Voice CE: annual voice disorder assessment and treatment CE. Traumatic brain injury CE: annual TBI treatment guideline update CE. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "MIPS Reporting, Medicare NOMS & Quality Calendar",
    description:
      "Speech-language pathology practices billing Medicare face systematic quality reporting obligations. MIPS calendar: 2025 performance year January 1 through December 31, submission window January 1 through March 31 (following year), and MIPS final score notification July-August. SLP MIPS quality measures include functional communication outcomes measures, patient-reported outcomes, and care coordination activities. Medicare functional reporting: NOMS (National Outcomes Measurement System, ASHA) quarterly data submission for SLPs in adult outpatient programs — NOMS provides functional communication measures required for Medicare Part B billing documentation. NOMS functional communication measure (FCM) quarterly report review and ASHA registry submission. Medicare Part B dysphagia billing: annual documentation of medical necessity standards for dysphagia evaluation and treatment (LCD review, annual coding update for 92610, 92526, 92597, 92607/92608 — videofluoroscopic swallow study codes), and quarterly coverage determination review for swallowing programs. Payer credentialing: CAQH quarterly attestation for all participating SLPs, annual Medicare PECOS verification, annual payer re-credentialing with commercial plans and Medicaid managed care organizations. Telepractice billing compliance: annual telehealth billing update for SLP telepractice (CPT 98971 and modifier 95 annual update). School district contract management: annual individual IDEA service contract renewal for SLPs working as independent contractors in school settings. Annual outcomes data preparation for payer contract negotiations (treatment efficacy and discharge rate data). Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "FEES Certification, Dysphagia Quality & Practice Operations Calendar",
    description:
      "SLP practices with instrumental dysphagia evaluation capabilities (FEES, MBSS) face equipment maintenance and competency documentation requirements. Equipment maintenance: annual FEES scope inspection and maintenance documentation (Pentax, Karl Storz, Olympus — manufacturer annual service requirement), annual light source and camera maintenance, biannual scope sterilization protocol competency documentation, and annual x-ray fluoroscopy suite calibration documentation for MBSS programs. FEES competency calendar: annual FEES procedural competency documentation (ASHA BCS-S standards or institutional credentialing requirement), annual FEES interpretation accuracy calibration exercise (inter-rater reliability documentation with supervising SLP or medical director), and annual modified barium swallow study report quality audit. School-based compliance: annual IEP compliance audit for school-contracted SLPs (IDEA mandates written IEP with annual review, triennial reevaluation — compliance documentation required), annual FERPA training documentation for school-based SLPs with student record access, and annual CPR/BLS recertification (required for school-based SLPs in most states). Practice financial: monthly insurance billing reconciliation, quarterly AR aging review, annual fee schedule review (CPT annual update effective January 1), and annual professional liability insurance renewal 60-day advance. OSHA: annual bloodborne pathogen training for SLPs with mucosal contact risk (FEES, oral motor treatment), and annual HazCom training for cleaning agents. Annual staff performance reviews. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "MIPS Submission & CEU Audit",
    tasks: [
      "MIPS data submission window opens January 1 (closes March 31)",
      "ASHA CEU transcript audit — verify progress toward 3-year renewal",
      "Annual FEES scope maintenance documentation",
      "Annual fee schedule CPT code update effective January 1",
      "CAQH Q1 quarterly attestation",
      "Annual NOMS Q1 functional communication data submission",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & Credentialing",
    tasks: [
      "MIPS data submission deadline March 31",
      "State SLP license renewal filings (state-specific cycles)",
      "Annual professional liability insurance renewal (60-day advance)",
      "Annual payer re-credentialing initiation — commercial plans, Medicaid",
      "Annual Medicare PECOS verification",
      "Dysphagia Research Society Annual Meeting CE",
    ],
  },
  {
    phase: "May – Jun",
    title: "Specialty CE & School Year Close",
    tasks: [
      "Voice Foundation Annual Symposium CE for voice specialty SLPs",
      "Annual IEP compliance audit for school-contracted SLPs",
      "Annual FERPA training documentation",
      "FEES interpretation accuracy calibration exercise",
      "LSVT LOUD annual re-certification documentation",
      "Annual CPR/BLS recertification scheduling for school-based SLPs",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "MIPS Score Notification",
    tasks: [
      "MIPS final score notification received — plan improvement activities",
      "Annual BCS-S or specialty certification CE progress audit",
      "Annual MBSS quality audit",
      "Annual school district contract renewal negotiations",
      "Annual dysphagia texture modification IDDSI update CE",
      "Annual TBI cognitive-communication CE update",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "ASHA Convention Registration",
    tasks: [
      "ASHA Annual Convention registration (November event)",
      "MIPS 2025 performance year quality measure selection",
      "Annual bloodborne pathogen OSHA training documentation",
      "Annual outcomes data preparation for contract negotiations",
      "CAQH Q3 quarterly attestation",
      "Annual FEES scope sterilization protocol competency",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "ASHA Convention & Year-End",
    tasks: [
      "ASHA Annual Convention — primary CEU accumulation event",
      "MIPS performance year data collection closes December 31",
      "Annual SLP license CE completion verification",
      "Annual HazCom training documentation",
      "Annual staff performance reviews",
      "NOMS Q4 functional communication data submission",
    ],
  },
]

const kpis = [
  { label: "ASHA CEU Cycle", value: "30 per 3 years", note: "Plus state licensure CE tracked separately" },
  { label: "MIPS Submission Window", value: "Jan 1 – Mar 31", note: "Performance year + 1" },
  { label: "NOMS Data Submission", value: "Quarterly", note: "Medicare Part B billing documentation" },
  { label: "CAQH Attestation", value: "Quarterly", note: "All participating SLPs" },
  { label: "FEES Scope Maintenance", value: "Annual", note: "Manufacturer service requirement" },
  { label: "IEP Annual Review Compliance", value: "100%", note: "IDEA mandate — no grace period" },
]

const testimonial = {
  quote:
    "CCC-SLP 3-year renewal with 30 CEUs and separate state license CE requirements for 2 states, BCS-S specialty certification 3-year renewal with 12 specialty CEUs, ASHA Convention November annual attendance, Dysphagia Research Society Annual Meeting CE, annual MBSS interpretation CE, annual FEES interpretation competency documentation with inter-rater reliability calibration, annual FEES scope annual maintenance for 2 scopes, LSVT LOUD annual re-certification for 3 SLPs, CAQH quarterly attestation for 6 participating SLPs, MIPS January through March submission window with functional communication outcomes measures, annual PECOS verification for all Medicare-enrolled SLPs, annual re-credentialing with 5 commercial plans and 3 Medicaid MCOs, NOMS quarterly data submission, annual IEP compliance audit for school contract covering 140 students, annual FERPA training for 4 school-based SLPs, annual CPR/BLS recertification for 6 clinical staff, annual bloodborne pathogen training, annual professional liability renewal 60 days advance, CPT annual fee schedule update, and annual outcomes data preparation for Blue Cross contract renegotiation — across 2 outpatient clinic locations. Momenties mapped every deadline.",
  name: "Chisom SLP.",
  title: "MS, CCC-SLP, BCS-S, Owner-Director, Speech-Language Pathology & Dysphagia Practice",
}

export default function SpeechLanguagePathologyPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Speech-Language Pathology Practices"
        title="CCC-SLP Renewal. MIPS Reporting. FEES Competency. One Calendar."
        subtitle="Momenties tracks CCC-SLP 3-year renewal with dual ASHA and state licensure CE requirements, BCS-S specialty certification, ASHA Convention annual CEU event, CAQH quarterly attestation, MIPS January through March submission, NOMS quarterly functional communication data, annual FEES scope maintenance, LSVT LOUD annual re-certification, annual IEP compliance audits for school contracts, annual payer re-credentialing, and professional liability 60-day renewal advance so speech-language pathology practices stay credentialed and compliant."
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
            Four Calendar Pillars Momenties Manages for You
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

      {/* 12-Month Timeline */}
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
            Your SLP Practice Compliance Year, Month by Month
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.tasks.map((task) => (
                    <li key={task} style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.55, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>›</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            What Momenties Tracks for SLP Practices
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div
                key={k.label}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#c5a35c", fontSize: "1.8rem", fontWeight: 700, marginBottom: 6 }}>{k.value}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>{k.label}</p>
                <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.82rem" }}>{k.note}</p>
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
