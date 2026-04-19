import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Optometry Practice Calendar | Momenties",
  description: "Momenties helps optometry practices manage OD license renewals, therapeutic drug CE, NCLE contact lens renewals, MIPS reporting, and payer credentialing cycles in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "OD License, Therapeutic Drug Authority & Specialty Certification Calendar",
    description:
      "Doctors of Optometry maintain state licensure with CE requirements ranging from 20-50 hours per renewal cycle (typically 2-year), with mandatory pharmacology CE in all states with therapeutic prescribing authority. All 50 states grant ODs therapeutic drug prescribing authority, but CE requirements for maintaining therapeutic authority vary: California requires 6 hours of pharmacology CE per renewal cycle, Texas requires 32 hours per 2-year cycle including pharmacology, Florida requires 20 hours per 2-year cycle. Glaucoma treatment authority: 44 states allow ODs to treat glaucoma — state-specific CE requirements for glaucoma management (typically 2-4 hours per renewal). Laser procedures: TPA-Plus certification for ODs performing laser procedures (YAG, SLT) — state-specific initial training and CE requirements. Specialty contact lens certification: NCLE (National Contact Lens Examiners) ABO/NCLE certification annual renewal for practice staff fitting contact lenses, with NCLE NCLEX continuing education. Low vision specialty: FAAO (Fellow of the American Academy of Optometry) credential annual membership maintenance. Ocular disease specialty: ODs in medical optometry or ocular disease programs maintain ABCMO (American Board of Certification in Medical Optometry) certification. Pediatric optometry specialty: FCOVD (Fellow, College of Optometrists in Vision Development) certification for ODs in vision therapy programs. Therapeutic contact lens specialty: FSLS (Fellow, Scleral Lens Society) for ODs in specialty contact lens programs. Medicare enrollment: CMS-855I revalidation every 5 years. Momenties tracks every credential cycle.",
  },
  {
    icon: RefreshCw,
    title: "AOA/AAO CE & Optometry Conference Calendar",
    description:
      "AOA (American Optometric Association) Optometry&apos;s Meeting (June) is the primary OD CE event — registration opens January-February, providing the largest single-event source of COPE (Council on Optometric Practitioner Education)-approved CE. AAO (American Academy of Optometry) Annual Meeting (October-November) provides fellowship-level CE for ODs pursuing FAAO. ARVO (Association for Research in Vision and Ophthalmology) for ODs in clinical research. State optometric association annual meeting provides state board-approved CE and jurisprudence hours. Pharmaceutical CE calendar: annual glaucoma drug update CE (prostaglandin analogues, beta-blockers, carbonic anhydrase inhibitors, Rho kinase inhibitors — annual guideline update), annual dry eye disease CE update (cyclosporine, lifitegrast, TPE, intense pulsed light — DEWS II annual guideline update), annual myopia control CE (orthokeratology, soft multifocal contact lenses, low-dose atropine — annual guideline update), annual AMD CE update (anti-VEGF injection co-management protocols, nutritional supplement update), and annual retinal imaging CE (OCT-A, widefield fundus imaging annual interpretation update). Specialty CE: annual scleral lens fit and troubleshooting CE, annual orthokeratology protocol CE, annual vision therapy CE for behavioral optometry programs, and annual low vision rehabilitation CE. Pharmaceutical representative sample policy: annual review of state-specific sample policy compliance for prescription drug samples. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "MIPS Reporting, Payer Credentialing & Medicare Compliance Calendar",
    description:
      "Optometry practices billing Medicare and participating in value-based care programs face systematic quality reporting and credentialing obligations. MIPS calendar for ODs: 2025 performance year January 1 through December 31 data collection, January 1 through March 31 submission window (following year), and MIPS final score notification July-August. OD MIPS quality measures include dilated macular degeneration examination, comprehensive diabetic eye exam, primary open-angle glaucoma optic nerve evaluation, and age-related macular degeneration counseling. Diabetic eye exam quality: annual HEDIS diabetic retinal examination documentation for all diabetic patients — HEDIS DRE measure requires documentation of dilated fundus examination by eye care specialist within the measurement year (measure reported to health plans). Payer credentialing: CAQH quarterly attestation for all participating ODs, annual Medicare PECOS verification, annual re-credentialing with VSP, EyeMed, Davis Vision, Superior Vision, and commercial medical plans (Blue Cross, Aetna, UnitedHealth) — 60-120 day processing time. Co-management credentialing: annual surgical co-management credentialing review with ophthalmology practices for post-cataract, LASIK, and intravitreal injection co-management arrangements. Medicare ophthalmology billing: annual MIPS improvement activities documentation, and annual diagnostic coding audit for proper ICD-10-CM eye diagnosis coding. Telehealth: annual telehealth billing compliance for tele-optometry and remote fundus photo interpretation. Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Optical Lab, Equipment Maintenance & Practice Operations Calendar",
    description:
      "Optometry practices with in-house optical dispensaries and diagnostic equipment face equipment maintenance and retail compliance obligations in addition to professional licensing requirements. Equipment maintenance calendar: annual slit lamp calibration and inspection, annual tonometer calibration (Goldmann applanation — must be calibrated per manufacturer schedule), annual autorefractor and lensmeter calibration, annual OCT (optical coherence tomography) software update and calibration documentation, annual fundus camera maintenance, and biennial or annual keratometer calibration. Optical dispensary compliance: state-specific optician or optical dispensary license annual renewal (many states require separate optical dispensary or optician permits), annual ABO/NCLE staff CE verification for contact lens and dispensing opticians on staff, and frame return policy compliance with state consumer protection laws. Contact lens business compliance: FTC Contact Lens Rule annual staff training (requires release of prescription on request — annual documentation training), annual Fairness to Contact Lens Consumers Act compliance review. HIPAA: annual HIPAA risk assessment, annual BAA audit for all vendors with PHI access, and annual staff HIPAA training documentation. OSHA: annual bloodborne pathogen training documentation and annual eyewash station inspection. Malpractice insurance: annual professional liability renewal 60-day advance. CPT annual update: ophthalmic CPT code changes effective January 1 (annual fee schedule review required). Annual competitive analysis and vision plan contract renegotiation window (typically June-August for following year). Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "MIPS Submission & CPT Updates",
    tasks: [
      "CPT code and ophthalmic fee schedule update effective January 1",
      "MIPS data submission window opens January 1 (closes March 31)",
      "Annual HIPAA risk assessment",
      "Annual HIPAA staff training documentation",
      "Annual FTC Contact Lens Rule compliance training",
      "CAQH Q1 quarterly attestation",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & Credentialing",
    tasks: [
      "MIPS data submission deadline March 31",
      "State OD license renewal filings (state-specific windows)",
      "Annual professional liability insurance renewal (60-day advance)",
      "Annual tonometer calibration documentation",
      "Annual payer re-credentialing cycle — VSP, EyeMed, medical plans",
      "Annual Medicare PECOS verification",
    ],
  },
  {
    phase: "May – Jun",
    title: "Conference Season & Specialty CE",
    tasks: [
      "AOA Optometry&apos;s Meeting — primary CE event",
      "Annual dry eye disease CE update",
      "Annual myopia control CE update (orthokeratology, atropine)",
      "Annual scleral lens troubleshooting CE",
      "Annual vision therapy CE for behavioral optometry program",
      "Annual glaucoma drug update CE",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "MIPS Score & Vision Plan Contracts",
    tasks: [
      "MIPS final score notification received",
      "Vision plan contract renegotiation window (VSP, EyeMed)",
      "Annual OCT software update and calibration documentation",
      "Annual fundus camera maintenance",
      "Annual optical dispensary license renewal (state-specific)",
      "CAQH Q3 quarterly attestation",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "AAO Meeting & Diabetic Eye Exam Push",
    tasks: [
      "AAO Annual Meeting — FAAO fellowship CE",
      "Year-end HEDIS diabetic retinal examination push — all diabetic patients",
      "MIPS 2025 performance year quality measure selection",
      "Annual glaucoma treatment authority CE (state-specific)",
      "Annual AMD anti-VEGF co-management protocol CE",
      "ABO/NCLE staff CE audit for dispensing opticians",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Year-End Compliance Close",
    tasks: [
      "MIPS performance year data collection closes December 31",
      "Annual OD CE completion verification for upcoming renewals",
      "Annual OSHA bloodborne pathogen training",
      "Annual eyewash station inspection documentation",
      "Annual BAA audit for all PHI vendors",
      "CAQH Q4 quarterly attestation",
    ],
  },
]

const kpis = [
  { label: "OD License Renewals Tracked", value: "Per doctor", note: "2-year cycles, state-specific CE" },
  { label: "HEDIS Diabetic Retinal Exam", value: "Annual", note: "All diabetic patients by year-end" },
  { label: "CAQH Attestation", value: "Quarterly", note: "VSP, EyeMed, medical plans" },
  { label: "MIPS Submission Window", value: "Jan 1 – Mar 31", note: "Performance year + 1" },
  { label: "Tonometer Calibration", value: "Annual", note: "Goldmann applanation accuracy" },
  { label: "FTC Contact Lens Rule Training", value: "Annual", note: "Prescription release compliance" },
]

const testimonial = {
  quote:
    "OD license renewal in 2 states with different pharmacology CE requirements, glaucoma treatment authority CE for 2 states, annual dry eye CE update, annual myopia control CE update, annual AMD co-management protocol CE, annual glaucoma drug update CE, annual scleral lens CE, CAQH quarterly attestation for 4 ODs, annual MIPS submission January through March 31 with dilated macular degeneration and diabetic eye exam quality measures, annual PECOS verification for all 4 Medicare-enrolled ODs, annual VSP and EyeMed re-credentialing, annual Blue Cross and Aetna medical plan re-credentialing for eye medical services, annual tonometer calibration documentation for 6 slit lamps, annual OCT software update for 2 units, annual fundus camera maintenance, HEDIS DRE annual push for 280 diabetic patients, annual FTC Contact Lens Rule training for 6 staff, annual HIPAA risk assessment, annual BAA audit for 12 vendors, annual professional liability renewal, annual optical dispensary license renewal, and annual ABO/NCLE CE audit for 3 dispensing opticians — across 2 locations. Momenties mapped every deadline.",
  name: "Taiwo O.",
  title: "OD, FAAO, Owner, Medical Optometry & Specialty Contact Lens Practice",
}

export default function OptometryPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Optometry Practices"
        title="OD License Renewals. MIPS Reporting. HEDIS Diabetic Exams. One Calendar."
        subtitle="Momenties tracks OD license renewals with state-specific pharmacology and glaucoma CE requirements, CAQH quarterly attestation for VSP, EyeMed, and medical plans, MIPS January through March submission window with diabetic eye exam quality measures, annual HEDIS diabetic retinal examination year-end push, tonometer annual calibration documentation, FTC Contact Lens Rule annual staff training, payer re-credentialing 90-day lead times, annual HIPAA risk assessment, and optical dispensary license renewals so optometry practices stay compliant and competitive."
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
            Your Optometry Practice Compliance Year, Month by Month
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
            What Momenties Tracks for Optometry Practices
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
