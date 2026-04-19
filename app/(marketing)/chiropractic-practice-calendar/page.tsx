import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Chiropractic Practice Calendar | Momenties",
  description: "Momenties helps chiropractic practices manage DC license renewals, NBCE Part IV competency, specialty certification cycles, MIPS reporting, and payer credentialing in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "DC License, NBCE Part IV & Specialty Certification Calendar",
    description:
      "Doctors of Chiropractic maintain state licensure with CE requirements ranging from 12-40 hours per renewal cycle (annual or biennial depending on state), with state chiropractic board-specific jurisprudence requirements in many states on renewal. Multi-state licensure: DCs practicing in multiple states track separate renewal cycles for each state license (no Compact equivalent for chiropractic). NBCE (National Board of Chiropractic Examiners) does not have a maintenance of certification requirement, but many state boards require NBCE-accepted CE for license renewal. Advanced specialty certifications: DACBSP (Diplomate, American Chiropractic Board of Sports Physicians — 3-year renewal, 50 CE hours in sports chiropractic), DACBR (Diplomate, American Chiropractic Board of Radiology — 3-year renewal, 50 CE hours), DACBN (Diplomate, American Chiropractic Board of Nutrition — 3-year renewal), DACO (Diplomate, American Chiropractic Orthopedists — 3-year renewal), and FICC (Fellow, International Chiropractors Association College of Chiropractic — annual CE). Technique certifications: Active Release Technique (ART) annual recertification (ART seminar completion and skill testing required annually), FAKTR (Functional and Kinetic Treatment with Rehab) annual renewal, and SOT (Sacro Occipital Technique) annual certification. Acupuncture: DCs with acupuncture training maintain separate state acupuncture license or acupuncture endorsement renewal. Pediatric chiropractic: ICPA (International Chiropractic Pediatric Association) Webster Technique certification annual renewal. Medicare enrollment: CMS-855I 5-year revalidation. Momenties tracks every cycle.",
  },
  {
    icon: RefreshCw,
    title: "ACA CE, Technique Seminars & Chiropractic Conference Calendar",
    description:
      "ACA (American Chiropractic Association) Annual Conference provides chiropractic CE — typical spring or fall scheduling depending on year. ICA (International Chiropractors Association) Annual Meeting provides CE accepted by most state boards. State chiropractic association annual convention provides state-specific CE and jurisprudence hours. Technique CE calendar: ART annual recertification seminar (technique must be re-tested annually for active certification), Graston Technique annual hands-on training, IASTM (Instrument-Assisted Soft Tissue Mobilization) annual renewal for DCs using branded techniques, and spinal manipulation protocol CE (ACA CPG updates for cervical and lumbar spine). Rehabilitation CE: functional rehabilitation CE (Postural Restoration Institute, DNS — Dynamic Neuromuscular Stabilization — annual training required), Kinesio Taping annual recertification, McKenzie Part A-D progression continuing education, and functional movement screen (FMS) annual recertification. Nutrition CE: annual nutrition CE for DCs managing clinical nutrition programs (AANP or IFM-affiliated protocols), annual supplement formulary update CE. Pediatric CE: ICPA annual family wellness CE for DCs with pediatric practice focus. Occupational health CE: FCE annual training update for DCs performing functional capacity evaluations in workers&apos; comp programs. Diagnostic imaging: annual digital x-ray continuing competency documentation for DCs performing on-site radiography. CPR/BLS: annual recertification for DCs providing emergency response in clinical settings. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "MIPS Reporting, Payer Credentialing & Medicare Compliance Calendar",
    description:
      "Chiropractic practices billing Medicare face a restricted coverage environment — Medicare Part B covers chiropractic services only for manual manipulation of the spine to correct subluxation, with strict documentation requirements — creating unique compliance obligations. Medicare chiropractic compliance calendar: annual AT modifier documentation training for all clinical staff (AT modifier required on every Medicare manipulation claim — indicates active treatment, not maintenance), annual Medicare utilization review (Medicare scrutinizes high-volume manipulation practitioners — documentation of medical necessity required for all services), and annual Medicare Advantage plan credentialing renewal for participating plans. MIPS for chiropractors: DCs billing ≥$90,000 Medicare annually participate in MIPS — chiropractic MIPS measures include functional outcome reporting (PROMIS-29 or OPTIMAL), the Clinician and Group CAHPS patient experience survey, and improvement activities (telehealth, care coordination, patient engagement). MIPS data submission window: January 1 through March 31 following performance year. CAQH quarterly attestation for all participating insurance plans. Payer re-credentialing: annual re-credentialing with major commercial payers (Blue Cross, Aetna, United, Cigna) — 90-180 day processing time. Personal injury and workers&apos; compensation: annual renewal with state workers&apos; comp panel and personal injury attorney referral network maintenance. Annual outcomes data preparation for payer contract negotiations (manipulation success rate, functional outcome scores, patient satisfaction). Telehealth: annual telehealth billing compliance update for chiropractic telehealth (nutritional counseling, exercise instruction). Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Practice Operations, X-Ray Compliance & Financial Calendar",
    description:
      "Chiropractic practices with on-site radiography face radiation safety compliance obligations in addition to standard practice operations requirements. X-ray compliance calendar: annual x-ray equipment calibration and output measurement documentation (state radiation control board requirement — most states require annual calibration certificate), annual radiation safety training documentation for all staff who may be exposed to scatter radiation, biennial lead apron inspection (annual is best practice — integrity testing required), and state radiation control program license annual renewal (approximately 30 states require separate facility radiography license). OSHA compliance: annual bloodborne pathogen training, annual hazard communication (HazCom) training, and OSHA 300 log February 1 annual posting. Medical waste: biannual or annual medical waste disposal documentation (state-specific — sharps and biohazard waste). Malpractice insurance: annual professional liability insurance renewal 60-day advance, with annual tail coverage assessment for claims-made policies. Practice financials: monthly insurance billing reconciliation, quarterly insurance AR aging review (>120 days outstanding), annual fee schedule review and update (CPT code annual updates effective January 1 — new codes, deleted codes, revised descriptions), and annual practice valuation for partnership or acquisition planning. Staff management: annual staff performance reviews, annual employee handbook review and update, and annual OSHA workplace violence prevention plan review. CPT code annual update: CMS RVU final rule (released November each year — effective January 1). Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "MIPS Submission & Fee Schedule Update",
    tasks: [
      "CPT code and fee schedule update effective January 1",
      "MIPS data submission window opens January 1 (closes March 31)",
      "OSHA 300 log annual posting (February 1)",
      "Annual radiation safety training documentation",
      "Annual staff license renewal audit for upcoming expirations",
      "CAQH Q1 quarterly attestation",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & Credentialing",
    tasks: [
      "MIPS data submission deadline March 31",
      "State DC license renewal filings (state-specific windows)",
      "Annual professional liability insurance renewal (60-day advance)",
      "Annual x-ray equipment calibration documentation",
      "Biennial lead apron integrity inspection",
      "Annual Medicare Advantage credentialing renewal",
    ],
  },
  {
    phase: "May – Jun",
    title: "Technique Certifications & Payer Credentialing",
    tasks: [
      "ART annual recertification seminar",
      "DACBSP/DACO specialty certification CE progress audit",
      "Annual payer re-credentialing cycle — Blue Cross, Aetna, United",
      "ICPA Webster Technique annual renewal",
      "Annual AT modifier documentation training refresher",
      "CAQH Q2 quarterly attestation",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "MIPS Score Notification & Prep",
    tasks: [
      "MIPS final score notification received — plan improvement activities",
      "Workers&apos; comp panel annual renewal applications",
      "Annual functional capacity evaluation protocol training update",
      "Annual nutrition CE for clinical nutrition program",
      "Graston/IASTM annual technique renewal",
      "Annual general liability and property insurance renewal",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Performance Year Preparation",
    tasks: [
      "MIPS 2025 performance year quality measure selection",
      "State chiropractic association annual convention CE",
      "Annual outcomes data preparation for contract negotiations",
      "ACA Annual Conference registration",
      "Annual employee handbook and OSHA workplace violence plan review",
      "Annual digital x-ray continuing competency documentation",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Year-End Compliance Close",
    tasks: [
      "CMS RVU final rule released — prepare January 1 fee schedule update",
      "MIPS performance year data collection closes December 31",
      "Annual CE completion verification for all upcoming license renewals",
      "Medical waste annual disposal documentation",
      "CAQH Q4 quarterly attestation",
      "Annual practice revenue and AR aging year-end review",
    ],
  },
]

const kpis = [
  { label: "DC License States Tracked", value: "Per doctor", note: "Annual or biennial per state" },
  { label: "MIPS Submission Window", value: "Jan 1 – Mar 31", note: "Performance year + 1" },
  { label: "X-Ray Calibration", value: "Annual", note: "State radiation board requirement" },
  { label: "CAQH Attestation", value: "Quarterly", note: "Insurance credentialing compliance" },
  { label: "AT Modifier Training", value: "Annual", note: "Medicare manipulation coverage requirement" },
  { label: "ART Recertification", value: "Annual", note: "Skill testing required — not just CE" },
]

const testimonial = {
  quote:
    "DC license renewals in 2 states with different CE requirements, DACBSP specialty certification 3-year CE audit, ART annual recertification seminar for 4 chiropractors, ICPA Webster Technique annual renewal for 2 DCs, Graston annual renewal, annual x-ray equipment calibration documentation for 3 units, biennial lead apron inspection, annual radiation safety training for 8 staff members, state radiation facility license annual renewal, CAQH quarterly attestation for 4 participating providers, annual Medicare AT modifier documentation training, annual Medicare Advantage re-credentialing for 6 plans, annual payer re-credentialing with 5 commercial insurers, MIPS January 1 through March 31 submission window with PROMIS-29 functional outcome data, annual workers&apos; comp panel renewals with 3 carriers, CPT code annual fee schedule update January 1, OSHA 300 log February 1 posting, annual bloodborne pathogen training for 10 staff, annual professional liability renewal 60 days advance, and annual outcomes data preparation for Blue Cross contract renegotiation — across 2 locations. Momenties mapped every deadline.",
  name: "Kwame Ch.",
  title: "DC, DACBSP, Owner, Chiropractic & Sports Rehabilitation Practice Group",
}

export default function ChiropracticPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Chiropractic Practices"
        title="DC License Renewals. MIPS Reporting. X-Ray Calibration. One Calendar."
        subtitle="Momenties tracks DC license renewals in all states with CE requirements, DACBSP and specialty certification 3-year cycles, ART annual recertification skill testing, annual x-ray equipment calibration and radiation facility license renewal, CAQH quarterly attestation for all providers, MIPS January 1 through March 31 submission window, annual AT modifier Medicare documentation training, payer re-credentialing with 90-day processing windows, workers&apos; comp panel renewals, and CPT code annual fee schedule updates so chiropractic practices stay compliant and fully operational."
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
            Your Chiropractic Practice Compliance Year, Month by Month
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
            What Momenties Tracks for Chiropractic Practices
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
