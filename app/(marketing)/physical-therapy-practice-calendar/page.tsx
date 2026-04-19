import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Physical Therapy Practice Calendar | Momenties",
  description: "Momenties helps physical therapy practices manage PT license renewals, ABPTS specialty certification, FSBPT continuing competence requirements, payer credentialing cycles, and Medicare compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "PT License, ABPTS Specialty Certification & Credentialing Calendar",
    description:
      "Physical Therapists maintain state licensure with CE requirements ranging from 15-30 hours per renewal cycle (2-year in most states, annual in some), with jurisprudence exam required in many states on renewal. Multi-state licensure: PT Compact (PTLC) allows PTs to practice in member states with a privilege to practice, but CE documentation must reflect the home state requirements. ABPTS (American Board of Physical Therapy Specialties) board-certified specialists — OCS (Orthopaedic Certified Specialist), SCS (Sports Certified Specialist), NCS (Neurologic Certified Specialist), GCS (Geriatric Certified Specialist), PCS (Pediatric Certified Specialist), CCS (Cardiovascular & Pulmonary Certified Specialist), WCS (Women&apos;s Health Certified Specialist), ECS (Electrophysiologic Certified Specialist), OMPT (Orthopaedic Manual Physical Therapy), and ACE (Aquatic Certified Exercise) — maintain 10-year specialty recertification with 30 contact hours in specialty content in the final 5 years. ABPTS specialty exam: 5-year provisional certification renewal available before full 10-year reexamination. PTA supervised practice documentation: states vary in supervision ratio requirements for PTAs — annual review of state PTA supervision laws required. Medicare enrollment: CMS-855I provider enrollment with 5-year revalidation and annual PECOS verification. CAQH ProView quarterly attestation. Group NPI and individual NPI maintenance for group practices. Momenties tracks every license and credential cycle.",
  },
  {
    icon: RefreshCw,
    title: "CEU Compliance, APTA Conference & Specialty CE Calendar",
    description:
      "APTA (American Physical Therapy Association) Combined Sections Meeting (CSM) held annually in February is the largest PT CE event in the US — abstract submission opens May-June, providing access to section-specific CE in all ABPTS specialty areas. APTA Annual Conference provides additional CE. Section-specific conferences: APTA Orthopaedic Section course (manual therapy certification CE), APTA Sports Physical Therapy Section Annual Conference, APTA Neurology Section Conference, APTA Academy of Geriatric Physical Therapy Annual Conference. CEU compliance strategy: FSBPT (Federation of State Boards of Physical Therapy) continuing competence requirements vary by state — most states accept APTA-sponsored CE and ABPTS-approved CE directly. Dry needling CE: continuing competence documentation for PTs performing dry needling — state-specific initial training requirements (some states require 40-54 hours) and annual competency documentation. Spinal manipulation CE: where permitted for PTs, annual manipulation continuing competency documentation. Aquatic therapy CE: AQUATIC EDGE or ATRI certification annual renewal for PTs offering aquatic therapy programs. Functional capacity evaluation (FCE): annual FCE protocol reliability training for PTs performing occupational medicine evaluations. LSVT BIG certification: annual LSVT BIG re-certification CE for PTs in Parkinson&apos;s disease programs. NDT (Neurodevelopmental Treatment) annual recertification CE for pediatric PTs. Pilates for rehabilitation annual instructor renewal. IASTM (instrument-assisted soft tissue mobilization) annual certification renewal for PTs using Graston or ASTYM techniques. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "MIPS Reporting, Payer Credentialing & Medicare Compliance Calendar",
    description:
      "Physical therapy practices billing Medicare and participating in value-based care programs face systematic quality reporting and credentialing obligations that create a predictable annual compliance calendar. MIPS (Merit-based Incentive Payment System) calendar: 2025 performance year data collection January 1 through December 31, MIPS data submission window January 1 through March 31 (following year), and MIPS final score notification July-August (2-year delay). PT MIPS measures include functional outcome measures (FOTO, OPTIMAL, or PROMIS-29 — required for claims-based and registry submission), patient experience measures (CAHPS for MIPS), and improvement activities (telehealth, care coordination). Payer credentialing calendar: CAQH quarterly attestation (insurance companies use CAQH to verify credentials — quarterly update required), Medicare annual PECOS verification, annual credentialing file review with each participating payer (Blue Cross, Aetna, UnitedHealth — typical annual re-credentialing cycle), and new payer application processing time (90-180 days — must initiate before practice growth milestones). Medicare ABN (Advance Beneficiary Notice) compliance: annual training update for front desk staff on Medicare ABN requirements for non-covered PT services. Medicare cap: no longer applies (repealed 2018), but KX modifier documentation training annual update. Telehealth compliance: annual telehealth documentation standards update for PT telehealth billing. Workers&apos; compensation panel membership: annual renewal with state workers&apos; comp carriers and managed care organizations. Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Functional Outcomes Reporting, Staff Credentialing & Practice Operations Calendar",
    description:
      "Physical therapy practice operations revolve around a quarterly functional outcomes reporting cycle and annual staff credentialing renewal that create predictable administrative workload if managed proactively. Functional outcomes program: FOTO (Focus on Therapeutic Outcomes), OPTIMAL, or PROMIS-29 quarterly performance report review — benchmark comparison to national PT practice norms for similar case mix, annual outcomes report preparation for payer contract renewal negotiations, and patient-reported outcome data integration annual review. Staff credentialing calendar: PT license renewal tracking across all therapists (2-year cycle in most states — staggered by individual hire date), PTA license renewal tracking, annual CPR/BLS recertification for all clinical staff (AHA requires 2-year recertification, but many practices require annual renewal), and annual OSHA bloodborne pathogen training documentation. Equipment maintenance: annual ultrasound calibration documentation (APTA-recommended — therapeutic ultrasound output must be verified annually), annual electrical safety testing for all modalities (e-stim, traction, laser), and biennial calibration of isokinetic dynamometer if applicable. Practice liability: annual professional liability (malpractice) insurance renewal 60-day advance, annual general liability renewal, and annual commercial property insurance renewal. Annual staff performance reviews and compensation adjustment cycle. Practice growth: annual outcomes data preparation for payer contract renegotiation (value-based contract performance review), and annual referral source relationship calendar (physician office visits, orthopedic surgeon relationship maintenance). Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "MIPS Submission & CSM Conference",
    tasks: [
      "MIPS 2024 performance year data submission window (January 1 – March 31)",
      "APTA Combined Sections Meeting (February) — CE for all ABPTS specialties",
      "Annual staff license renewal audit — identify expirations in next 12 months",
      "Annual CPR/BLS recertification schedule for clinical staff",
      "Annual ultrasound calibration documentation",
      "CAQH quarterly attestation (Q4 prior year and Q1 current year)",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & Credentialing",
    tasks: [
      "MIPS data submission deadline March 31",
      "State PT license renewals due this cycle (state-specific)",
      "Annual professional liability insurance renewal (60-day advance)",
      "Annual payer re-credentialing cycle — Blue Cross, Aetna, United",
      "Medicare annual PECOS verification",
      "Annual bloodborne pathogen OSHA training documentation",
    ],
  },
  {
    phase: "May – Jun",
    title: "Mid-Year Outcomes Review",
    tasks: [
      "FOTO/OPTIMAL/PROMIS-29 Q2 performance report review",
      "ABPTS specialty certification CE audit — track progress toward 10-year renewal",
      "Dry needling annual competency documentation",
      "Annual LSVT BIG re-certification for Parkinson&apos;s program PTs",
      "Staff performance reviews mid-year check-in",
      "Referral source relationship cultivation visits",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "MIPS Score Notification & Planning",
    tasks: [
      "MIPS final score notification received (July-August) — plan improvement activities",
      "Workers&apos; comp panel membership renewal applications",
      "Annual general liability and commercial property insurance renewal",
      "Functional outcomes H1 annual benchmarking report preparation",
      "CAQH quarterly attestation",
      "APTA Section conference CE — orthopaedic, sports, neurology",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "MIPS Performance Year Prep",
    tasks: [
      "MIPS 2025 performance year quality measure selection review",
      "Annual electrical safety testing for all modalities",
      "ABPTS specialty examination registration if due this cycle",
      "Annual outcomes data preparation for payer contract negotiations",
      "Aquatic therapy/IASTM/Pilates annual certification renewals",
      "NDT annual recertification for pediatric PTs",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Year-End Compliance Close",
    tasks: [
      "MIPS performance year data collection closes December 31",
      "Annual PT license renewal preparation — CE completion verification",
      "Year-end staff credentialing file audit",
      "Annual Medicare ABN training for front desk staff",
      "CAQH Q4 attestation",
      "Annual telehealth documentation standards review",
    ],
  },
]

const kpis = [
  { label: "PT Licenses Tracked", value: "Per therapist", note: "2-year cycles, staggered by hire date" },
  { label: "MIPS Submission Window", value: "Jan 1 – Mar 31", note: "Following performance year" },
  { label: "CAQH Attestation", value: "Quarterly", note: "Insurance credentialing requirement" },
  { label: "Ultrasound Calibration", value: "Annual", note: "APTA-recommended output verification" },
  { label: "ABPTS Specialty CE", value: "30 hrs / 5 years", note: "In final 5 years before reexam" },
  { label: "Payer Re-credentialing", value: "Annual", note: "90–180 day processing window" },
]

const testimonial = {
  quote:
    "PT license renewals for 9 therapists across 2 states with different CE requirements — some with OCS or SCS specialty certification 10-year cycles, CAQH quarterly attestation for all 12 licensed providers, MIPS 2024 data submission window January 1 through March 31 with FOTO outcome measure documentation review, MIPS improvement activities documentation for telehealth and care coordination, annual PECOS verification for all Medicare-enrolled providers, annual re-credentialing with 6 insurance companies each with different timelines, annual professional liability renewal 60 days in advance, annual ultrasound calibration documentation for 8 units, annual electrical safety testing for 24 modality devices, annual bloodborne pathogen training for all 14 staff, CPR/BLS renewal scheduling for 12 clinical staff, workers&apos; comp panel renewal with 4 carriers, dry needling annual competency documentation for 5 PTs, LSVT BIG re-certification for 3 PTs in Parkinson&apos;s program, annual outcomes benchmarking preparation for contract renegotiations, and APTA CSM registration — simultaneously for 3 clinic locations. Momenties mapped every deadline.",
  name: "Adaeze PT.",
  title: "PT, DPT, OCS, Owner-Director, Outpatient Orthopedic Physical Therapy Group",
}

export default function PhysicalTherapyPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Physical Therapy Practices"
        title="PT License Renewals. MIPS Reporting. Payer Credentialing. One Calendar."
        subtitle="Momenties tracks PT and PTA license renewals for all therapists with staggered 2-year cycles, ABPTS specialty certification 10-year renewal milestones, CAQH quarterly attestation for all providers, MIPS January 1 through March 31 data submission window, annual payer re-credentialing with 90-day processing lead time, annual ultrasound calibration documentation, CPR/BLS annual scheduling, dry needling competency documentation, workers&apos; comp panel renewals, and functional outcomes quarterly reviews so physical therapy practices stay compliant and competitive."
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
            Your PT Practice Compliance Year, Month by Month
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
            What Momenties Tracks for Physical Therapy Practices
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
