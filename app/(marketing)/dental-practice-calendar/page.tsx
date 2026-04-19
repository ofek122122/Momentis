import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Dental Practice Calendar | Momenties",
  description: "Momenties helps dental practices track dentist license renewals, CE requirements, DEA registration, OSHA compliance, dental board reporting deadlines, and patient recall systems in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Dentist License Renewal, CE Compliance & Specialty Certification Calendar",
    description:
      "Dental practices without structured license renewal calendars generate state board violations — a lapsed dental license prohibits practice and requires immediate cessation of patient care, making systematic tracking essential for every dentist and dental hygienist. Dentist license renewal calendar: state dental board license renewal (biennial in most states — all 50 states have different renewal months, fee structures, and CE requirements for dentists), CE completion requirements per renewal (most states require 30-75 hours per biennial period — state-specific), mandatory CE content (most states require 2-4 hours of infection control CE, 1-2 hours jurisprudence, and some require opioid prescribing CE — state-specific), and dental hygienist license renewal (separate from dentist renewal — biennial in most states, 24-36 hours CE per cycle). Specialty board certification: ABO (American Board of Orthodontics, 10-year, annual CE plus written and clinical recertification exam), AAOMS (American Association of Oral and Maxillofacial Surgeons board recertification, 10-year), ABPD (American Board of Pediatric Dentistry, 10-year), and ABGD (American Board of General Dentistry, 5-year). CAGS (Certificate of Advanced Graduate Study) programs: annual CE requirements for certificate holders. Dental sedation credentialing: conscious sedation permit annual renewal (state-specific — some states require annual sedation permit renewal separate from dental license), ACLS certification biennial renewal (required for dentists with IV sedation permits), and deep sedation/general anesthesia facility permit annual inspection. Momenties manages every license milestone.",
  },
  {
    icon: RefreshCw,
    title: "DEA Registration, Controlled Substance Compliance & Dental OSHA Calendar",
    description:
      "Dental practices without structured DEA and OSHA compliance calendars generate federal and state enforcement actions — dental offices are among the highest per-capita controlled substance dispensers regulated by DEA, and OSHA dental standard inspections average $15,000-$75,000 in fines per violation for unannounced inspections. DEA registration calendar: DEA Form 224 renewal (3-year cycle — dental practices must independently track, renewal notice unreliable), state controlled substance registration (separate from DEA in many states — CS registration required for all dentists prescribing or dispensing scheduled drugs — annual in most states), and biennial controlled substance inventory (DEA-required physical inventory of all Schedule II-V drugs). Dental OSHA compliance calendar: annual bloodborne pathogen training for all clinical staff (OSHA 29 CFR 1910.1030 — documentation required), annual hazard communication training (HazCom — all chemical exposures including mercury, disinfectants, glutaraldehyde), annual sharps injury log review and recordable incident filing (OSHA 300 form — February 1-March 31 posting period), sterilization monitoring weekly spore testing (AAMI standard — documentation for each autoclave), and amalgam separator maintenance (EPA amalgam rule — annual service and certification). Radiation safety: dental x-ray unit annual inspection and calibration (state radiation board requirement — most states require annual), digital sensor calibration annual documentation, and radiation exposure badge monitoring quarterly. Infection control: dental unit waterline testing quarterly (CDC/ADA guideline — maintain <500 CFU/mL), and sterilizer spore test weekly documentation. Momenties schedules every compliance deadline.",
  },
  {
    icon: TrendingUp,
    title: "Insurance Credentialing, Fee Schedule Negotiations & Practice Financial Calendar",
    description:
      "Dental practices without structured insurance and financial calendars lose 15-20% of revenue to billing errors, expired credentialing, and missed fee schedule renegotiations — dental insurance contracts auto-renew at stale rates without systematic renegotiation, compounding revenue impact over multiple cycles. Insurance credentialing calendar: Delta Dental annual credentialing renewal (most Delta plans require annual recredentialing — provider information verification), Cigna Dental annual recredentialing, MetLife annual credentialing update, Aetna annual credentialing, and Medicaid/CHIP annual enrollment renewal (state dental Medicaid programs require annual provider enrollment renewal). Fee schedule calendar: annual fee schedule renegotiation windows (most major dental insurers allow renegotiation once per year — January 1 or contract anniversary), UCR (Usual, Customary, and Reasonable) fee update (January — update practice fee schedule to 75th-90th percentile in market), out-of-network balance billing audit (annual — ensure EOB review for under-reimbursement), and CDT code update annual implementation (American Dental Association CDT code annual update — January 1 effective date, train billing staff). Financial compliance: dental practice buy-sell agreement annual review (for partnership practices — equity valuation update), malpractice insurance annual renewal (90-day advance — claims-made policy retroactive date protection), and cyber liability insurance annual renewal (dental records are HIPAA-protected PHI — cyber risk is significant for cloud-based practice management). Momenties tracks all financial compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Patient Recall Calendar, Seasonal Promotions & Dental Practice Operations",
    description:
      "Dental practices without structured recall and seasonal campaign calendars lose 25-35% of potential hygiene revenue to lapsed recall — adult patients requiring biannual hygiene visits require a 5-6 month recall system with multiple touch points, and practices with systematic recall achieve 85%+ hygiene capacity utilization versus 60-65% for reactive-only scheduling. Patient recall calendar: 6-month hygiene recall system (automated reminder at 5 months, phone outreach at 5.5 months, and day-before confirmation), 3-4 month periodontal maintenance recall (for patients on perio maintenance protocol — higher urgency follow-through required), new patient 6-month recall activation (after initial comprehensive exam — enter recall immediately), and lapsed patient reactivation campaign (patients not seen in 18+ months — quarterly outreach with special reactivation offer). Seasonal promotion calendar: February National Children&apos;s Dental Health Month (ADHA/ADA — promote pediatric preventive care), April National Oral Cancer Awareness Month (clinical documentation and patient education), back-to-school season (July-August — target families for checkups before school year), November-December year-end insurance benefits reminder (patients often have unused dental benefits expiring December 31 — major production opportunity with 8-week campaign), and New Year appointment push (January — patients keeping new-year health resolutions). Practice operations: HIPAA Notice of Privacy Practices annual update review, HIPAA risk assessment annual update, and HITECH breach notification annual training. Momenties consolidates the full dental practice calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "License Renewal Season & CDT Code Implementation",
    description: "Implement new CDT codes effective January 1 — train billing staff and update practice management software. Pay state dental board renewal fees for licenses expiring Q1. Post OSHA 300 log (February 1 — March 31 posting period). Update practice UCR fee schedule (75th-90th percentile of market). Run January bloodborne pathogen training documentation if annual training cycle due. File year-end amalgam separator service certification. Renew state controlled substance registration if January anniversary. Run December hygiene production analysis and set Q1 recall targets.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring CE Push & April Oral Cancer Awareness",
    description: "Execute National Oral Cancer Awareness Month clinical education (April). Complete CE for dentists and hygienists with spring license renewal deadlines. Run dental x-ray unit annual inspection and calibration (schedule with state radiation board service company). Complete quarterly dental unit waterline testing (Q1 — document results). Run insurance credentialing renewals due in Q2. Review fee schedule renegotiation opportunity for mid-year contract anniversaries. Run Q1 controlled substance monthly log reconciliation. Begin back-to-school campaign planning (July-August execution).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year CE Audit & Insurance Contract Review",
    description: "Run mid-year CE completion audit for all dentists and hygienists. Complete summer license renewals for dentists and hygienists. Review OSHA chemical inventory and update SDS binders (semi-annual). Run Q2 dental unit waterline testing. Review malpractice insurance for July anniversary renewals (90-day advance). Complete mid-year controlled substance inventory if biennial cycle due. Run mid-year recall system audit (recall compliance rate — target ≥80% of patients seen within 7 months of scheduled recall).",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Back-to-School Campaign & ACLS Renewal Season",
    description: "Execute back-to-school campaign — target families for comprehensive exams and sealants before school year. Complete ACLS renewal for dentists with IV sedation permits (biennial — track expiration independently). Run annual radiation badge monitoring review. Complete summer CE programs. Begin year-end insurance benefits campaign preparation (November execution — 8-week preparation). Renew DEA registration if Q3-Q4 anniversary (independently track — renewal notices unreliable). Run Q3 dental unit waterline testing.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Year-End Benefits Campaign Launch & Annual License Renewal Push",
    description: "Launch year-end insurance benefits expiration campaign (October launch — 8-week window to December 31 deadline). Complete CE for dentists with October-November renewal deadlines. Renew malpractice insurance for January anniversary (90-day advance — October). Renew cyber liability insurance. Run annual DEA controlled substance biennial inventory if Q4 cycle. Begin February Children&apos;s Dental Health Month planning (January execution). Run Q3 sharps injury log review. Complete sterilizer annual qualification testing.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Benefits Rush & Annual Planning Close",
    description: "Execute year-end insurance benefits campaign peak (December — highest production month in most dental practices due to unused benefits). Complete all remaining CE for December 31 CE year-end deadlines. Renew state dental board licenses expiring Q4. File annual amalgam separator certification. Run annual HIPAA risk assessment. Update HIPAA Notice of Privacy Practices. Lock next-year recall campaign schedule and seasonal promotion calendar. Run annual billing code audit (CDT compliance). Plan next-year January CDT code update implementation. Complete year-end staff performance reviews.",
  },
]

const kpis = [
  {
    metric: "Dental License Renewal On-Time 100%",
    description: "Zero lapsed dental licenses for all dentists and hygienists; a lapsed license requires immediate cessation of patient care and generates state board disciplinary action",
  },
  {
    metric: "Hygiene Recall Compliance Rate ≥ 80%",
    description: "Percentage of active patients seen within 7 months of their scheduled recall date; below 65% indicates recall system gaps — every 10% improvement in recall generates 8-12% hygiene revenue increase",
  },
  {
    metric: "OSHA Training Compliance 100%",
    description: "Annual bloodborne pathogen and HazCom training documented for all clinical staff; OSHA dental inspections result in $15,625-$156,259 per-violation fines for willful violations",
  },
  {
    metric: "Year-End Benefits Production ≥ 20% Above Average",
    description: "November-December production relative to monthly average; practices with 8-week year-end benefits campaigns achieve 20-30% production surge versus reactive-only practices at 5-10%",
  },
  {
    metric: "DEA Compliance 100%",
    description: "Current DEA registration, biennial inventory, and monthly Schedule II log reconciliation; DEA dental inspections result in immediate license suspension for recordkeeping violations",
  },
  {
    metric: "Waterline Testing Compliance 100%",
    description: "Quarterly dental unit waterline testing documented with results ≤500 CFU/mL; non-compliant waterlines generate CDC infection control violations and patient notification obligations",
  },
]

const testimonial = {
  quote:
    "Dental license renewals for 4 dentists and 6 hygienists across 2 states on biennial cycles with different CE requirements and mandatory content hours, DEA renewal for practice location, annual state CS registration renewal, quarterly dental unit waterline testing documentation for 8 operatories, biennial CS inventory, weekly sterilizer spore test documentation for 3 autoclaves, annual x-ray unit calibration for 6 units, annual bloodborne pathogen training for 12 staff, February OSHA 300 log posting, CDT code January implementation training, year-end insurance benefits 8-week campaign preparation, 6-month recall system for 2,800 active patients, 4-month perio maintenance recall for 420 perio maintenance patients, back-to-school July-August campaign, Delta/Cigna/MetLife annual recredentialing, fee schedule annual renegotiation windows, malpractice insurance annual renewal, ACLS biennial renewal for 2 sedation dentists, annual amalgam separator certification, and cyber liability insurance annual renewal — all in spreadsheets. Momenties organized everything. We had our highest December production ever.",
  name: "Emeka D.",
  title: "Practice Owner, 4-Dentist General and Cosmetic Dental Practice",
}

export default function DentalPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Dental Practice Calendar"
        title="License Renewals. DEA Compliance. Year-End Benefits Campaign. One Calendar."
        subtitle="Momenties tracks dentist and hygienist license renewals with CE completion audits, DEA 3-year registration cycles, biennial controlled substance inventories, quarterly dental unit waterline testing, annual OSHA training documentation, weekly sterilizer spore test tracking, annual x-ray calibration, year-end insurance benefits 8-week campaign windows, CDT code annual implementation, patient recall system compliance, and malpractice insurance renewal advance windows so dental practices never miss a compliance deadline or revenue opportunity."
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
            Four Dental Practice Pillars Momenties Tracks
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
            12-Month Dental Practice Calendar
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
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
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
            Dental Practice KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
