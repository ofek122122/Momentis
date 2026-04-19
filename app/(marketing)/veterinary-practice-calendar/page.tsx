import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Veterinary Practice Calendar | Momenties",
  description: "Momenties helps veterinary practices track veterinarian license renewals, CE requirements, DEA registration, controlled substance compliance, AVMA accreditation cycles, and practice management deadlines in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Veterinarian License Renewal, CE Compliance & Specialty Certification Calendar",
    description:
      "Veterinary practices without structured license renewal calendars generate state regulatory violations — a lapsed veterinary license prohibits practicing veterinary medicine in that state, and most states impose immediate suspension for CE non-compliance, making systematic tracking essential for every veterinarian in the practice. Veterinarian license renewal calendar: state veterinary license renewal (biennial in most states — all 50 states have different renewal dates, fee structures, and CE requirements for multi-state licensed veterinarians), CE completion requirements per renewal (most states require 24-40 hours per renewal cycle — state-specific), mandatory CE content (most states require 1-3 hours of jurisprudence and ethics CE per renewal cycle — state-specific content), and veterinary technician license renewal (separate from DVM renewal — biennial in most states, 20 CE hours per cycle). Board specialty certification: ABVP (American Board of Veterinary Practitioners, 5-year, 100 CE hours in specialty area), DACVIM (Diplomate ACVIM, annual CE for continuing diplomate status), DACVS (Diplomate ACVS, annual CE), and DACVD (Diplomate ACVD, annual CE). Exotic animal specialty: AAV (Association of Avian Veterinarians) annual CE, and ABVP Avian Practice 5-year recertification. Emergency specialty: ACVECC (American College of Veterinary Emergency and Critical Care, annual CE). Dentistry specialty: AVDC (American Veterinary Dental College, annual CE). Behavior specialty: ACVB (American College of Veterinary Behaviorists, annual CE). Momenties manages every license milestone.",
  },
  {
    icon: RefreshCw,
    title: "DEA Registration, Controlled Substance Compliance & VCPR Documentation Calendar",
    description:
      "Veterinary practices without structured DEA and controlled substance compliance calendars generate federal enforcement actions — veterinarians are among the largest controlled substance prescribers regulated by DEA, and DEA veterinary inspections occur every 3-5 years, requiring complete Schedule II-V dispensing records and audit trails. DEA registration calendar: DEA Form 224 renewal (3-year cycle — renewal notice sent 60 days before expiration, but practices must independently track), DEA registration for each practice location (separate DEA number per physical location), and DEA mid-level practitioner registration for veterinary technicians in states granting independent prescribing authority. Controlled substance compliance calendar: biennial controlled substance inventory (DEA-required biennial physical inventory of all Schedule II-V drugs — document date, drug, quantity, form per item), monthly Schedule II controlled substance reconciliation (dispensing log reconciliation with inventory — recommended best practice), annual DEA Form 41 completion for expired/damaged controlled substances, and PDMP registration where applicable (some states include veterinary DEA prescribers in PDMP). Veterinarian-client-patient relationship (VCPR) calendar: VCPR documentation annual audit (state-specific — most states require active VCPR before prescribing or dispensing medications), telehealth VCPR compliance (AVMA model practice act telemedicine guideline compliance), and prescription validity period monitoring (most states, 1-year valid prescription after VCPR exam). Compounding compliance: state pharmacy board annual veterinary compounding compliance review, and USP 797/800 compliance annual audit for practices with in-house compounding. Momenties schedules every compliance deadline.",
  },
  {
    icon: TrendingUp,
    title: "AVMA Accreditation, OSHA Compliance & Veterinary Hospital Quality Calendar",
    description:
      "Veterinary practices seeking AAHA (American Animal Hospital Association) accreditation or AVMA CVEA recognition face systematic quality standard cycles — AAHA accreditation requires compliance with 900+ standards reviewed every 3 years, and practices with AAHA accreditation command 15-20% premium pricing over non-accredited practices. AAHA accreditation calendar: 3-year accreditation cycle (renewal inspection 6 months before expiration — practices submit self-assessment 4 months before), annual AAHA standards update review (AAHA releases annual standards updates — practices must document compliance with new standards within 6-12 months), and interim self-assessment annual documentation. OSHA veterinary compliance calendar: annual OSHA Hazard Communication training for all staff (HazCom standard 29 CFR 1910.1200 — annual documentation of training completion), annual anesthetic gas monitoring (N2O and isoflurane — NIOSH REL monitoring recommended annually for practices with inhalant anesthesia), rabies exposure protocol annual review (post-exposure prophylaxis protocol documentation), radiation safety annual review (for practices with digital radiography — annual dosimeter badge review, x-ray safety training), and annual sharps injury log review (OSHA Bloodborne Pathogen standard). Diagnostic quality: in-house laboratory annual calibration documentation (hematology analyzer, chemistry analyzer — manufacturer-recommended annual calibration), and reference laboratory SLA annual review. Pharmacy compliance: state pharmacy board veterinary drug license annual renewal, veterinary drug compounding registration annual renewal, and expired drug disposal log quarterly. Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Client Wellness Calendar, Seasonal Health Programs & Practice Management",
    description:
      "Veterinary practices without structured wellness and seasonal health program calendars miss the recurring preventive care revenue that drives 40-50% of practice revenue — heartworm test annual reminders, dental month promotions, and vaccine recall systems represent systematic revenue that requires advance planning. Client wellness recall calendar: annual wellness exam reminder system (11-month recall — within 30 days of prior annual exam), rabies vaccine recalls (1-year vs. 3-year product tracking — state-mandated minimum frequency varies), core vaccine recalls (DA2PP, FVRCP — 1 or 3-year schedules per patient age and previous vaccination), feline leukemia recalls (annual for at-risk cats), heartworm test annual recalls (year-round in endemic regions), flea/tick prevention annual reorders, and parasite prevention seasonal reminders. Seasonal health programs: February Dental Month (AAHA/AVMF National Pet Dental Health Month — practice promotion preparation begins January), spring heartworm prevention launch (April — inventory pre-position February), summer heat safety campaign (June-July), National Senior Pet Month (October — targeted wellness promotions for pets 7+), and December holiday safety campaign. Practice management calendar: staff performance reviews (annual), DVM associate contract renewal review (90-day advance for annual contracts), AVMA group health insurance annual renewal, practice liability insurance annual renewal, and practice valuation annual update (for partnership agreements or succession planning). Equipment maintenance: digital radiography unit annual service contract, ultrasound annual calibration, dental equipment annual service, and anesthesia machine annual safety inspection. Momenties consolidates the full veterinary practice calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "License Renewal Season & Dental Month Execution",
    description: "Execute February National Pet Dental Health Month promotion (AAHA/AVMF — preparation complete by January 31). Renew veterinarian and technician licenses with January/February expiration deadlines — verify CE completion. Complete biennial DEA controlled substance inventory if due in Q1. File any annual state pharmacy board drug license renewals. Run January CE completion audit for all DVMs and technicians. Begin spring heartworm prevention inventory pre-position (February). Review rabies vaccination schedule compliance for patient records.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Prevention Launch & Q1 Compliance Review",
    description: "Launch spring heartworm/flea/tick prevention campaign (April inventory already positioned). Complete CE for DVMs with spring license renewal deadlines. Run AAHA standards self-assessment documentation (Q1 — for practices in accreditation year). Complete OSHA HazCom annual training documentation for all staff. Run controlled substance monthly reconciliation review (Schedule II drugs). Submit biennial DEA inventory if due in Q2. Begin summer heat safety campaign preparation (June execution).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year CE Push & Equipment Maintenance Season",
    description: "Run mid-year CE completion audit for all staff. Schedule annual equipment maintenance — anesthesia machines, dental units, digital radiography calibration (summer before fall respiratory season). Complete summer license renewals for DVMs and technicians. Run Q2 controlled substance reconciliation. Schedule annual radiation dosimeter badge review for radiography-equipped practices. Review VCPR documentation compliance for patients receiving prescription refills. Begin National Senior Pet Month promotion planning (October).",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Summer Campaign Execution & Fall Prep",
    description: "Execute summer heat safety campaign. Run annual anesthetic gas monitoring (N2O/isoflurane — NIOSH REL — schedule industrial hygienist visit). Begin fall wellness campaign planning. Complete DEA registration renewals due in Q3-Q4 (60-day advance — track expiration independently). Run mid-year wellness recall audit (which patient segments have lapsed annual wellness exams). Review compounding pharmacy compliance for custom drug formulations. Begin National Senior Pet Month promotion (October execution).",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Senior Pet Month & Annual Insurance Renewal",
    description: "Execute National Senior Pet Month campaign (October). Renew practice liability insurance (90-day advance for January anniversary). Renew AVMA group health insurance (90-day advance). Begin December holiday safety campaign preparation. Run Q3 controlled substance log reconciliation. Complete fall license renewals for DVMs and technicians. Run annual sharps injury log review (OSHA Bloodborne Pathogen annual review). Begin annual AAHA standards self-assessment if renewal year. Review DEA Form 41 for any expired drugs accumulated during the year.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Compliance Close & Annual Planning",
    description: "Execute holiday safety campaign (December). Complete year-end CE for all DVMs and technicians with December 31 annual CE deadlines. File annual DEA Form 41 for expired controlled substance destruction. Complete year-end controlled substance inventory and reconciliation. Run annual VCPR documentation audit. Lock next-year wellness recall campaign calendar and seasonal promotion schedule. Run annual staff performance reviews. Plan next-year February Dental Month promotion (January execution). Complete biennial DEA inventory if due in Q4.",
  },
]

const kpis = [
  {
    metric: "Veterinarian License Renewal On-Time 100%",
    description: "Zero lapsed veterinary licenses across all states and staff; a lapsed DVM license prohibits practice of veterinary medicine and generates state board disciplinary action",
  },
  {
    metric: "DEA Controlled Substance Compliance 100%",
    description: "Complete DEA dispensing logs, biennial inventory, and monthly Schedule II reconciliation; DEA veterinary inspections result in immediate suspension for recordkeeping violations",
  },
  {
    metric: "Wellness Recall Compliance Rate ≥ 85%",
    description: "Percentage of patients receiving annual wellness exam within 13 months of prior visit; below 75% signals recall system gaps — each 10% improvement in recall compliance generates 8-12% annual revenue increase",
  },
  {
    metric: "CE Completion Rate 100%",
    description: "All DVMs and technicians completing required CE hours before license renewal; incomplete CE generates automatic license suspension in most states — emergency CE completion required for reinstatement",
  },
  {
    metric: "OSHA Training Compliance 100%",
    description: "Annual HazCom and OSHA safety training documented for all staff; OSHA veterinary inspections result in per-violation fines of $15,625-$156,259 for serious or willful violations",
  },
  {
    metric: "AAHA Standards Compliance ≥ 95%",
    description: "Percentage of applicable AAHA standards in compliance at any time; below 85% compliance risks AAHA accreditation loss — accreditation commands 15-20% premium pricing versus non-accredited practices",
  },
]

const testimonial = {
  quote:
    "Veterinarian license renewals for 6 DVMs and 8 technicians across 2 states on biennial cycles with different state-specific CE requirements, monthly Schedule II controlled substance reconciliation, biennial DEA inventory, DEA registration renewal for 2 practice locations, annual OSHA HazCom training documentation for 18 staff, annual anesthetic gas monitoring, annual radiation dosimeter badge review, annual compounding pharmacy compliance review, annual sharps injury log review, AAHA 3-year accreditation cycle with annual standards self-assessment, February Dental Month preparation and execution, spring heartworm prevention inventory pre-position February, seasonal campaign calendar with 6 programs, wellness recall system audit (annual review of 4,200 active patient records), rabies 1-year vs. 3-year vaccine schedule tracking for 1,800 dogs, annual equipment maintenance calendar (anesthesia machines, dental units, digital radiography), practice liability insurance annual renewal, AVMA health insurance renewal, annual DEA Form 41 for expired drugs, and staff performance reviews — all in spreadsheets. Momenties organized everything.",
  name: "Kwame V.",
  title: "Practice Owner & Medical Director, 3-DVM Small Animal Hospital",
}

export default function VeterinaryPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Veterinary Practice Calendar"
        title="DVM License Renewals. DEA Compliance. AAHA Accreditation. One Calendar."
        subtitle="Momenties tracks veterinarian and technician license renewals with CE completion audits, DEA registration 3-year renewal cycles, monthly Schedule II controlled substance reconciliation, biennial DEA inventory, annual OSHA HazCom training documentation, annual anesthetic gas monitoring, AAHA 3-year accreditation cycles with annual standards self-assessment, seasonal wellness campaign production windows, and practice insurance renewal advance windows so veterinary practices never miss a regulatory filing or compliance obligation."
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
            Four Veterinary Practice Pillars Momenties Tracks
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
            12-Month Veterinary Practice Calendar
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
            Veterinary Practice KPIs Momenties Keeps on Track
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
