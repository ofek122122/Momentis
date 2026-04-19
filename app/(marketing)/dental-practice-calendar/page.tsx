import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Dental Practice Compliance Calendar | Momenties",
  description: "Momenties helps dental practices track state dental license CE renewals, DEA 3-year renewal, OSHA annual training, HIPAA annual review, radiography equipment certification, nitrous oxide permits, dental board infection control CE, and dental assistant annual competency in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Dentist, Hygienist & Dental Assistant License Renewal Calendar",
    description:
      "Dentists maintain state dental board license with CE requirements that vary by state — typically 30–40 CE hours per biennial renewal cycle (15+ hours per year) including mandatory core topics. FAGD/MAGD (Fellow/Master of the Academy of General Dentistry, AGD): FAGD requires 500 CE hours with 100 participation hours; MAGD requires 1,100 CE hours — ongoing annual tracking. Specialty board certifications: ABOD (American Board of Oral and Maxillofacial Surgery), ABPD (American Board of Pediatric Dentistry, 5–6 year MOC cycle with annual attestation), ABGD (American Board of General Dentistry), ABOMS — each with specific annual or biennial CE requirements. Dental hygienist (RDH) license: biennial renewal with state-specific CE (typically 24–30 CE hours biennial; many states require annual CPR certification). Dental assistant (DA/CDA): DANB CDA (Certified Dental Assistant, 12 CE hours annual) and RDA (Registered Dental Assistant, state license — CE requirements vary). Local anesthesia permit: RDH local anesthesia permit renewal (biennial in most states — CE hours or clinical hours requirement). Nitrous oxide permit: separate state dental board nitrous oxide/N2O/O2 administration permit annual or biennial renewal for dentists and hygienists. Radiography certification: dental radiography operator certification (state requirement — annual or biennial depending on state). DOCS (Dental Organization for Conscious Sedation) or AAOMS sedation training: annual CE for dentists with in-office sedation permits. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: RefreshCw,
    title: "OSHA, Infection Control & HIPAA Compliance Training Calendar",
    description:
      "Annual OSHA bloodborne pathogen training: OSHA 1910.1030 requires annual training for all dental staff with occupational exposure to blood or OPIM — annual documentation of training date, trainer, content covered. Annual OSHA hazard communication training: GHS/SDS updates — dental materials, sterilization chemicals, mercury/amalgam. Annual bloodborne pathogen exposure control plan review (must be reviewed and updated annually — OSHA 1910.1030(c)(1)(iv)). Annual OSHA written programs review: hazard communication written program, chemical hygiene plan (if applicable), emergency action plan. Infection control CE: state dental board infection control CE requirement — many states require annual or biennial infection control CE (OSAP guidelines, CDC Guidelines for Infection Control in Dental Health-Care Settings annual update review). Annual sterilization monitoring compliance: weekly spore (biological indicator) testing documentation audit, monthly autoclave parameter log review, quarterly instrument reprocessing protocol audit. Mercury/amalgam: annual mercury/amalgam waste compliance documentation (EPA Dental Effluent Guidelines — 40 CFR Part 441 — annual separator compliance certification, annual inspection and cleaning of amalgam separator). HIPAA: annual HIPAA Privacy and Security Rule training for all staff (annual training documentation), annual HIPAA Security Risk Assessment review, annual Business Associate Agreement (BAA) audit. Annual radiography safety: annual dental radiography equipment inspection documentation (state radiation control program annual compliance), lead apron inspection. Annual fire and emergency drill documentation. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "DEA Controlled Substance Compliance & Sedation Permit Calendar",
    description:
      "DEA compliance calendar: DEA registration 3-year renewal (must not lapse — DEA lapse means no controlled substance prescribing), biennial controlled substance physical inventory within 2 days of DEA registration anniversary date (DEA 21 CFR 1304.11 — count all Schedule II–V controlled substances and document), monthly controlled substance log reconciliation (DEA 222 forms for Schedule II orders, perpetual inventory documentation), annual DEA disposal of expired/unwanted controlled substances (DEA Take-Back Day participation or DEA Form 41 authorized collector). PDMP: state PDMP registration annual renewal (some states annual, others perpetual — confirm renewal requirements), quarterly PDMP query compliance documentation (most state dental boards require PDMP query before prescribing opioids — documentation audit). Opioid prescribing: annual opioid prescribing CE update (state dental board-mandated annual opioid prescribing CE in most states — 1–3 hours; some states require completion before license renewal). Sedation permits: annual in-office conscious sedation permit renewal (state dental board — annual inspection in some states), annual deep sedation/general anesthesia permit renewal, annual emergency drugs kit inspection (epinephrine, diphenhydramine, nitroglycerin, flumazenil — annual expiration check and replacement). Nitrous oxide: annual N2O machine calibration and scavenging system flow rate documentation. Annual AED and emergency oxygen inspection certification. Quarterly emergency protocol training drill documentation for all staff. Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Dental Board CE, Radiography Licensing & Practice Quality Calendar",
    description:
      "Dental practice quality and administrative compliance calendar: state dental board CE tracking: mandatory CE topics vary by state — most states require annual CPR/BLS (2-year ACLS/BLS certification but many states require dental-specific annual dental emergency CE), annual infection control CE (1–3 hours), annual opioid CE (1–3 hours), annual ethics CE (1–3 hours). Radiography: annual dental radiography operator license renewal (state radiation control program), annual dental X-ray unit inspection and calibration documentation (state radiation safety officer inspection — annual in most states), annual digital sensor/phosphor plate calibration documentation. Annual CODA (Commission on Dental Accreditation) or practice accreditation preparation (if applicable — dental specialty practices or teaching clinics). Annual practice overhead review (dental-specific: laboratory costs as % of collections, supply cost % — ADA benchmarks). Annual dental malpractice/professional liability insurance renewal — 90 days before expiration. Annual workers&apos; compensation premium audit. Annual OSHA 300A posting (February 1–April 30). Annual waste management: hazardous waste manifest annual documentation review, sharps disposal contractor annual contract renewal. Annual dental practice license renewal (separate from individual dentist license — dental establishment/facility license in many states). Quarterly radiograph quality assurance: quarterly radiograph mount/labeling and diagnostic quality audit. Annual dental supply controlled substance inventory (nitrous oxide tank weight documentation). Momenties tracks all quality compliance cycles.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "Post-Year-End Compliance & OSHA Annual Posting",
    items: [
      "Post OSHA 300A Summary (February 1–April 30)",
      "Annual bloodborne pathogen exposure control plan review and update",
      "Annual HIPAA Security Risk Assessment review",
      "Annual BAA (Business Associate Agreement) audit — all vendors with PHI access",
      "Annual dental practice license renewal (January 31 in many states)",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "DEA Inventory & Equipment Inspections",
    items: [
      "Biennial DEA controlled substance physical inventory (within 2 days of DEA anniversary)",
      "Annual amalgam separator compliance certification (EPA 40 CFR Part 441)",
      "Annual dental radiography equipment inspection and calibration documentation",
      "Annual AED and emergency oxygen inspection",
      "Annual sharps disposal contractor contract renewal",
    ],
  },
  {
    phase: "May–Jun",
    title: "OSHA Training & Infection Control Audit",
    items: [
      "Annual OSHA bloodborne pathogen training for all staff",
      "Annual OSHA hazard communication GHS/SDS training",
      "Quarterly instrument reprocessing protocol audit (Q2)",
      "Annual sterilization biological indicator testing documentation audit (52 weekly spore tests)",
      "Annual mercury/amalgam waste documentation review",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "Malpractice Insurance & Mid-Year Financial Review",
    items: [
      "Annual dental malpractice professional liability insurance renewal — 90-day advance",
      "Annual workers&apos; compensation premium audit",
      "Annual practice overhead review (lab costs, supply costs vs. ADA benchmarks)",
      "Annual DEA Take-Back Day participation (October and April — second event)",
      "Annual nitrous oxide machine calibration and scavenging system flow rate documentation",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "CE Completion & License Renewal Prep",
    items: [
      "Complete state dental board biennial CE (for year-end renewal dentists and hygienists)",
      "Complete mandatory CE topics: CPR, infection control, opioid prescribing, ethics CE",
      "Complete DANB annual CDA CE (12 hours — October 31 for December renewal)",
      "Annual emergency drugs kit expiration inspection and replacement",
      "Quarterly emergency protocol training drill documentation (Q3)",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "License Renewals & Year-End Compliance",
    items: [
      "Submit state dental board license renewals (dentist, hygienist, dental assistant)",
      "Submit nitrous oxide permit renewals",
      "Submit sedation permit renewals (conscious sedation, deep sedation if applicable)",
      "Annual HIPAA Privacy Rule training for all staff",
      "DEA monthly controlled substance log reconciliation (December — year-end)",
    ],
  },
]

const kpis = [
  {
    metric: "DEA CS Inventory",
    target: "100% within 2 days of anniversary",
    description: "Biennial DEA controlled substance physical inventory completed within 2 days of DEA registration anniversary date — DEA 21 CFR 1304.11 zero-defect standard.",
  },
  {
    metric: "OSHA Annual Training",
    target: "100% all staff",
    description: "All staff with occupational exposure complete annual OSHA bloodborne pathogen training with documented date, trainer, and content — 100% completion before prior year anniversary.",
  },
  {
    metric: "Spore Testing",
    target: "Weekly — 52 per year",
    description: "Weekly biological indicator (spore test) completed and documented every week — 52 weeks per year with zero missed weeks per OSAP and CDC infection control guidelines.",
  },
  {
    metric: "PDMP Query Compliance",
    target: "100% before opioid Rx",
    description: "PDMP queried and documented before every opioid prescription written — state dental board mandated compliance, zero exceptions for controlled substance prescribing.",
  },
  {
    metric: "CE Hours on Track",
    target: "Zero deficiencies at renewal",
    description: "All licensed providers track CE hours continuously — zero CE deficiencies discovered at renewal deadline across all mandatory topic categories.",
  },
  {
    metric: "Amalgam Separator",
    target: "Annual certification filed",
    description: "Annual EPA 40 CFR Part 441 amalgam separator compliance certification filed on time — annual inspection and cleaning documentation submitted to state environmental agency.",
  },
]

const testimonial = {
  quote:
    "State dental board biennial CE tracking for 4 dentists with staggered renewal dates including mandatory infection control, opioid prescribing, ethics, and CPR CE for each, DANB CDA annual CE for 3 dental assistants, RDH biennial CE with local anesthesia permit renewal for 2 hygienists, DEA 3-year renewal, biennial DEA controlled substance physical inventory within 2 days of anniversary, monthly CS log reconciliation for Schedule II through V, quarterly PDMP query compliance documentation audit, annual opioid prescribing CE completion for all prescribers, in-office conscious sedation permit annual renewal, annual emergency drugs kit expiration inspection, annual AED and emergency oxygen certification, annual OSHA bloodborne pathogen training for 14 staff members, annual OSHA hazard communication training, annual bloodborne pathogen exposure control plan review, 52-week biological indicator spore testing documentation, quarterly instrument reprocessing audit, annual amalgam separator EPA compliance certification, annual dental radiography equipment inspection, annual nitrous oxide permit renewals for 3 providers, annual nitrous oxide machine calibration, annual HIPAA training for 14 staff, annual HIPAA Security Risk Assessment, annual BAA audit, annual dental practice facility license renewal, annual dental malpractice insurance renewal, annual workers compensation audit, OSHA 300A annual posting, and annual sharps disposal contract renewal — all simultaneously. Momenties mapped every deadline.",
  name: "Chidinma DP.",
  title: "DDS, FAGD, Multi-Location Dental Practice Owner",
}

export default function DentalPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Dental Practice Compliance Calendar"
        title="DEA Renewal. OSHA Annual Training. Dental Board CE. One Calendar."
        subtitle="Momenties tracks state dental license CE for dentists, hygienists, and dental assistants, DEA 3-year renewal, biennial DEA controlled substance physical inventory, weekly spore testing documentation, annual OSHA bloodborne pathogen training, annual amalgam separator EPA compliance, annual dental radiography equipment inspection, sedation permit renewals, annual HIPAA training, and dental malpractice insurance renewal so dental practice owners maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Dental Practice
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
            Your Dental Practice Compliance Year at a Glance
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 24,
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.92rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        paddingLeft: 16,
                        position: "relative",
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>·</span>
                      {item}
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
            Six KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0e0e12",
                  border: "1px solid rgba(197,163,92,0.15)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>
                  {k.metric}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.88rem", marginBottom: 8 }}>
                  Target: {k.target}
                </p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.87rem", lineHeight: 1.6 }}>
                  {k.description}
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
