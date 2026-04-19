import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Ambulatory Surgery Center Compliance Calendar | Momenties",
  description: "Momenties helps ASCs track CMS Conditions for Coverage annual survey prep, AAAHC or TJC accreditation cycles, DEA biennial CS inventory, OSHA annual training, monthly OIG exclusions check, quarterly quality improvement reporting, and staff annual competency documentation in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "ASC License, CMS Certification & Accreditation Renewal Calendar",
    description:
      "Ambulatory Surgery Centers maintain state ASC operating license (annual renewal in most states with annual fee) plus CMS Medicare certification under Conditions for Coverage (42 CFR Part 416). CMS Conditions for Coverage: annual CMS self-survey preparation (CMS conducts unannounced surveys — annual internal mock survey recommended before anticipated survey window). Accreditation: AAAHC (Accreditation Association for Ambulatory Health Care) 3-year accreditation cycle with annual compliance attestation; TJC (The Joint Commission) ASC accreditation 3-year cycle with annual follow-up; HFAP (Healthcare Facilities Accreditation Program) 3-year cycle. Medical director agreement: annual renewal of ASC medical director agreement (CMS CfC 42 CFR 416.46 — medical director oversight annual contract renewal, scope of services documentation). Annual Governing Body meeting documentation (CMS requirement — annual Governing Body meeting with minutes, annual budget approval, annual policy review). Annual QAPI (Quality Assessment and Performance Improvement) program report (CMS CfC — annual QAPI plan and report documentation). Staff credentialing: annual reappointment process for all clinical staff and physicians (annual credentialing cycle at many ASCs vs. biennial at hospital-based programs). Annual OIG/LEIE exclusions check for all employees, contractors, and physicians. Annual fire safety inspection (state and local AHJ — annual fire extinguisher, sprinkler, and alarm inspection). Quarterly fire drill documentation. Momenties tracks all accreditation and licensing cycles.",
  },
  {
    icon: RefreshCw,
    title: "DEA Controlled Substances, OSHA & Clinical Compliance Calendar",
    description:
      "ASC DEA compliance calendar: DEA registration 3-year renewal (may require separate DEA registration for the ASC entity in addition to individual provider DEA registrations), biennial controlled substance physical inventory within 2 days of DEA anniversary (count all Schedule II–V controlled substances — propofol is Schedule IV, opioids Schedule II, benzodiazepines Schedule IV, ketamine Schedule III), monthly controlled substance log reconciliation (perpetual inventory for all Schedule II controlled substances), annual DEA Take-Back Day participation (October and April). OSHA compliance: annual OSHA bloodborne pathogen training for all clinical staff (OSHA 1910.1030), annual OSHA hazard communication training (GHS/SDS for surgical chemicals, sterilization agents, tissue fixatives), annual bloodborne pathogen exposure control plan review, annual OSHA written programs review. Infection prevention: annual instrument reprocessing competency assessment for all sterile processing staff, quarterly sterilization monitoring audit (weekly biological indicator testing — 52 annual spore tests documentation), quarterly endoscope reprocessing audit (if applicable — SGNA annual guidelines review). Annual surgical site infection (SSI) surveillance: quarterly SSI rate review (CMS Ambulatory Surgical Measures — ASC-3 through ASC-9 annual reporting). Annual radiation safety: annual fluoroscopy/C-arm dosimetry documentation for staff with radiation exposure. Annual malignant hyperthermia cart inspection and dantrolene expiration audit. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "CMS Quality Reporting, SSI Surveillance & ASC Quality Calendar",
    description:
      "ASC quality compliance calendar: CMS Ambulatory Surgical Center Quality Reporting (ASCQR) program: annual CMS ASCQR data submission deadlines (August 15 for prior calendar year data — ASC-1 through ASC-20 quality measures), quarterly chart abstraction for ASCQR measures, annual CMS ASC compare star rating preparation. Patient safety quality: monthly wrong site/wrong patient event review (TJC National Patient Safety Goals — monthly adverse event log review), quarterly time-out compliance audit (Universal Protocol — 100% of procedures with documented surgical timeout), quarterly surgical fire safety audit. Anesthesia quality: monthly anesthesia adverse event review (AANA/ASA quality metrics — unplanned hospital admission rate, anesthesia-related adverse event rate), quarterly PONV (post-operative nausea and vomiting) protocol compliance review. Patient experience: quarterly CAHPS ASC survey distribution and response rate review (annual CMS CAHPS-ASC data submission), annual patient satisfaction composite score review. Infection control quality: monthly hand hygiene compliance rate monitoring, quarterly ASC-level SSI rate calculation vs. national NSQIP ASC benchmarks. Discharge quality: quarterly unexpected readmission or ER visit rate review (CMS ASC-11 — emergency department visits within 7 days, hospital admissions within 7 days of procedure). Annual mock emergency drill: annual malignant hyperthermia drill and code response drill documentation. Annual anesthesia machine and monitoring equipment calibration. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Insurance, Staff Competency & ASC Financial Compliance Calendar",
    description:
      "ASC financial and operational compliance calendar: annual general liability and professional liability insurance renewal — ASC professional liability, general liability, and umbrella coverage; medical malpractice (separate policies for each operating physician or blanket ASC policy), begin 90 days before expiration. Annual cyber liability insurance renewal (patient EHR data, billing data). Annual workers&apos; compensation premium audit. Annual D&amp;O (Directors &amp; Officers) insurance renewal for multi-physician ASC entities. Annual HIPAA compliance: annual HIPAA Security Risk Assessment (ASC EHR, patient scheduling systems, billing), annual BAA audit for all vendors, annual HIPAA training for all staff. Staff competency annual documentation: annual BLS/ACLS renewal for all clinical staff (AHA biennial but many ASCs require annual), annual malignant hyperthermia competency documentation, annual moderate sedation competency for all sedating providers, annual sterile processing competency. Annual equipment maintenance: annual anesthesia machine certification, annual electrosurgical unit inspection, annual sterilizer calibration and annual preventive maintenance documentation. CMS ASCQR annual payment determination: annual CMS ASCQR reporting compliance verification (failure to report reduces CMS payment rate by 2%). Annual Ambulatory Surgery Center Association (ASCA) membership annual renewal. Annual state ASC association membership renewal. Annual revenue cycle audit: annual coding and billing compliance audit (ASC CPT coding accuracy, modifier compliance — annual review). Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "ASCQR Reporting & Post-Year-End Compliance",
    items: [
      "Begin CMS ASCQR data abstraction for prior calendar year (August 15 deadline)",
      "Annual Governing Body meeting with minutes, budget approval, and policy review",
      "Annual QAPI plan documentation and prior year QAPI report",
      "Monthly OIG/LEIE exclusion checks for all employees and physicians",
      "Annual HIPAA Security Risk Assessment",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "DEA Inventory & Spring Fire Safety",
    items: [
      "Biennial DEA controlled substance physical inventory (within 2 days of DEA anniversary — spring cycle)",
      "Annual fire safety inspection (state AHJ — fire extinguisher, sprinkler, alarm)",
      "Quarterly fire drill Q1 documentation",
      "Annual BAA audit for all PHI-handling vendors",
      "Annual DEA Take-Back Day participation (April)",
    ],
  },
  {
    phase: "May–Jun",
    title: "Malpractice Insurance & Clinical Competency Audits",
    items: [
      "Annual professional liability and general liability insurance renewal — 90-day advance",
      "Annual HIPAA training for all staff",
      "Annual sterile processing competency assessment for all sterile processing staff",
      "Quarterly sterilization monitoring audit (Q2 — weekly spore test documentation review)",
      "Annual moderate sedation competency documentation for all sedating providers",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "ASCQR Deadline & CMS Quality Reporting",
    items: [
      "CMS ASCQR data submission deadline: August 15",
      "Annual CMS mock survey preparation (internal mock survey)",
      "Annual staff credentialing reappointment cycle completion",
      "Quarterly time-out compliance audit (Q3 — Universal Protocol)",
      "Quarterly unexpected readmission and ER visit rate review (Q2 data)",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "Annual Survey Window & Safety Drills",
    items: [
      "Annual malignant hyperthermia drill and code response drill",
      "Annual dantrolene and MH cart expiration inspection",
      "Annual anesthesia machine and monitoring equipment calibration",
      "Annual DEA Take-Back Day participation (October)",
      "Quarterly PONV protocol compliance review (Q3)",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "Year-End License Renewals & Annual Audits",
    items: [
      "Annual state ASC operating license renewal",
      "Annual medical director agreement renewal",
      "Annual OSHA bloodborne pathogen training for all clinical staff",
      "Annual revenue cycle coding and billing compliance audit",
      "Annual workers&apos; compensation premium audit",
    ],
  },
]

const kpis = [
  {
    metric: "OIG Monthly Checks",
    target: "100% every month",
    description: "All employees, contractors, and credentialed physicians checked against OIG/LEIE monthly — zero excluded individuals billing Medicare or Medicaid through the ASC.",
  },
  {
    metric: "ASCQR Submission",
    target: "Filed by August 15",
    description: "Annual CMS Ambulatory Surgical Center Quality Reporting data submitted by August 15 — failure to report results in 2% CMS payment reduction the following calendar year.",
  },
  {
    metric: "Surgical Timeout",
    target: "100% Universal Protocol",
    description: "100% of procedures with documented surgical timeout per Universal Protocol — quarterly audit with zero procedures without timeout documentation.",
  },
  {
    metric: "Spore Testing",
    target: "Weekly — 52 per year",
    description: "Weekly biological indicator (spore test) completed and documented every week — 52 per year with zero missed weeks per CMS Conditions for Coverage and AAAHC standards.",
  },
  {
    metric: "DEA CS Inventory",
    target: "100% within 2 days",
    description: "Biennial DEA controlled substance physical inventory completed within 2 days of DEA registration anniversary — DEA 21 CFR 1304.11 zero-defect compliance.",
  },
  {
    metric: "SSI Rate",
    target: "Below NSQIP ASC benchmark",
    description: "ASC-level surgical site infection rate at or below national NSQIP ASC benchmark for each procedure category — quarterly calculation with root cause analysis for any outlier.",
  },
]

const testimonial = {
  quote:
    "Annual state ASC operating license renewal for 2 facilities, monthly OIG LEIE exclusions checks for 48 employees and contracted physicians and vendors at both facilities, annual CMS Conditions for Coverage mock survey preparation, annual AAAHC accreditation annual compliance attestation, CMS ASCQR data abstraction and August 15 submission for 2,400 annual cases across both facilities, annual Governing Body meeting documentation including budget and policy review, annual QAPI plan and report, DEA biennial controlled substance physical inventory within 2 days of anniversary for both ASC DEA registrations, monthly CS log reconciliation for all Schedule II controlled substances, annual DEA Take-Back Day April and October, annual OSHA bloodborne pathogen training for 36 clinical staff, annual OSHA hazard communication training, annual bloodborne pathogen exposure control plan review, quarterly sterilization monitoring spore test documentation audit for 104 weekly spore tests per year, quarterly time-out compliance audits, quarterly surgical fire safety audits, quarterly PONV protocol compliance reviews, quarterly unexpected readmission rate reviews, monthly hand hygiene compliance rate reviews, annual malignant hyperthermia drill and MH cart dantrolene expiration audit, annual anesthesia machine certification for 4 anesthesia machines, annual electrosurgical unit inspection, annual sterile processing competency for 6 staff, annual moderate sedation competency for all sedating providers, annual staff credentialing reappointment for 28 privileged physicians, annual medical director agreement renewals, annual HIPAA Security Risk Assessment, annual BAA audit, annual HIPAA training, annual professional liability and general liability insurance renewal, annual workers compensation payroll audit, annual revenue cycle coding and billing compliance audit, and annual fire safety inspections — all simultaneously. Momenties mapped every deadline.",
  name: "Chidinma ASC.",
  title: "RN, BSN, CASC, Multi-Site ASC Administrator",
}

export default function AmbulatorySurgeryCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Ambulatory Surgery Center Compliance Calendar"
        title="ASCQR by August 15. OIG Monthly. DEA Biennial Inventory. One Calendar."
        subtitle="Momenties tracks monthly OIG LEIE exclusion checks, annual CMS ASCQR data submission by August 15, DEA biennial controlled substance physical inventory, quarterly surgical timeout compliance audits, weekly spore testing documentation, annual CMS Conditions for Coverage mock survey preparation, annual AAAHC accreditation compliance, annual fire safety inspections, quarterly fire drills, annual malignant hyperthermia drills, annual HIPAA Security Risk Assessment, and annual ASC professional liability insurance renewal so ASC administrators maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your ASC
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
            Your ASC Compliance Year at a Glance
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
