import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Dialysis Center Compliance Calendar | Momenties",
  description: "Momenties helps dialysis centers track CMS ESRD Conditions for Coverage annual survey prep, monthly OIG exclusion checks, monthly water quality testing documentation, quarterly QAPI reporting, annual staff competency assessments, dialysis machine annual preventive maintenance, and IPRO/ESRD Network annual data submission in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "CMS ESRD Certification, State License & Dialysis Center Accreditation Calendar",
    description:
      "Dialysis centers (hemodialysis and peritoneal dialysis) maintain CMS Medicare ESRD facility certification under 42 CFR Part 494 Conditions for Coverage (CfC) with unannounced state survey (annual or biennial survey window). CMS ESRD CfC compliance: annual internal mock survey preparation (CMS surveys are unannounced — typically every 18 months for certified facilities). Annual QAPI (Quality Assessment and Performance Improvement) plan development and annual QAPI program evaluation (CMS CoP 42 CFR 494.110 — annual QAPI program evaluation required). State dialysis facility license: annual renewal in most states with annual fee and staffing documentation. Governing body documentation: annual governing body meeting documentation, annual facility policies and procedures review and approval. Staff credentialing: annual dialysis technician recertification tracking (CHT — Certified Hemodialysis Technician, NNCO, annual CE requirements; CCHT — Certified Clinical Hemodialysis Technician, BONENT, 20 CE hours biennial), annual nursing staff competency (RN/LPN — annual dialysis competency assessment). BONENT and NNCO membership annual renewals. Medical director agreement: annual renewal of nephrologist medical director contract (CMS CfC requirement — annual contract renewal, physician coverage documentation). OIG/LEIE monthly exclusion checks for all employees, contractors, and physicians. Annual emergency preparedness plan review (CMS Emergency Preparedness Rule — annual EP tabletop exercise, annual EP plan update). Momenties tracks all certification and licensing cycles.",
  },
  {
    icon: RefreshCw,
    title: "Water Quality Testing, CMS ESRD Reporting & Regulatory Compliance Calendar",
    description:
      "Dialysis center water quality compliance calendar: monthly water quality testing documentation: monthly dialysate water culture testing (CMS 42 CFR 494.40 — monthly microbiological culture of dialysate water; ≤200 CFU/mL standard; monthly documentation required), monthly endotoxin testing (≤2 EU/mL standard — monthly LAL test documentation), monthly dialysate conductivity and pH documentation, quarterly AAMI/ANSI water quality comprehensive testing (AAMI ST108 annual comprehensive reprocessing water quality analysis — expanded chemical contaminant panel). Annual water treatment equipment maintenance: annual RO (reverse osmosis) membrane replacement or annual performance testing, annual carbon filter testing (free chlorine/chloramine breakthrough test — daily for activated carbon tanks, annual comprehensive audit), annual softener resin testing. CMS ESRD Network reporting: monthly CMS ESRD mortality and hospitalization data submission (CROWNWeb — monthly patient-level data entry for all ESRD patients), annual CMS Five-Star Quality Rating preparation. ESRD network quality reporting: quarterly IPRO/ESRD Network quality measure report review, annual ESRD Network case review submission. HIPAA: annual HIPAA Privacy and Security training for all staff. Annual infection control: monthly access infection rate review (NHSN dialysis event surveillance — monthly fistula/graft/catheter infection rate documentation), quarterly vascular access audit. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "CMS Five-Star Quality, Kt/V & Dialysis Quality Calendar",
    description:
      "Dialysis center CMS quality compliance calendar: Kt/V adequacy quality: monthly Kt/V ≥1.2 (hemodialysis) or weekly Kt/V ≥1.7 (peritoneal dialysis) compliance rate review (CMS ESRD QIP measure — monthly monitoring, annual QIP performance period data), CMS ESRD Quality Incentive Program (QIP) annual performance period (January 1–December 31 — payment year reduces by 2% for performance below minimum score). Anemia management quality: monthly hemoglobin monitoring documentation (target 10–12 g/dL — monthly documentation for all ESRD patients), quarterly ESA (epoetin/darbepoetin) utilization review (hypercalcemia-related ESA dose adjustment — KDIGO guideline quarterly review). Vascular access quality: monthly vascular access care plan documentation audit (CMS ESRD CfC — every patient with catheter must have a plan for conversion to permanent access — monthly documentation), quarterly AV fistula first rate review (NHSN/CMS benchmark — ≥68% of prevalent HD patients with fistula). Mineral metabolism quality: monthly calcium and phosphorus monitoring documentation, quarterly iPTH management review (KDIGO CKD-MBD guideline quarterly review). Fluid management: monthly inter-dialytic weight gain documentation review. Transplant referral: annual transplant referral rate review (CMS ESRD QIP measure — transplant wait-listing rate). Annual dialysis adequacy report submission to CMS QIP. Annual patient satisfaction survey (CMS CAHPS In-Center Hemodialysis Survey annual distribution). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Machine Maintenance, Water System Inspections & Dialysis Operations Calendar",
    description:
      "Dialysis center operations compliance calendar: dialysis machine preventive maintenance: annual dialysis machine preventive maintenance (PM) by biomedical technician — all hemodialysis machines require annual PM documentation per manufacturer specification (annual PM certification for each machine), quarterly dialysis machine conductivity calibration, monthly proportioning system accuracy check. Dialysis equipment: annual dialysate delivery system inspection, annual RO water treatment system annual service, annual heat disinfection system validation. Emergency equipment: monthly AED inspection and battery check, annual crash cart inspection and medication expiration audit, quarterly emergency oxygen inspection. Annual malpractice and professional liability insurance renewal — dialysis center professional liability including medical director liability, begin 90 days before expiration. Annual cyber liability insurance renewal (patient EHR, CROWNWeb submission system). Annual workers&apos; compensation premium audit. Annual OSHA compliance: annual OSHA bloodborne pathogen training for all clinical staff, annual OSHA hazard communication training (dialysis concentrate, disinfectants), annual bloodborne pathogen exposure control plan review, quarterly needle-stick injury review. Annual staff CPR/BLS certification tracking (AHA BLS biennial — annual status audit for all clinical staff). Annual NNCO or BONENT membership and CHT/CCHT certification renewal tracking. Annual nephrologist medical director CE: annual ESRD medical director CE (Renal Physicians Association — ESRD quality guidelines annual update). Momenties tracks all operations compliance.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "CMS QIP Performance Period & Annual Compliance",
    items: [
      "CMS ESRD QIP annual performance period data review (January 1 start of new performance year)",
      "Annual QAPI program evaluation documentation (prior year review and new year plan)",
      "Monthly CROWNWeb patient-level data submission (ongoing — January data)",
      "Monthly OIG/LEIE exclusion checks for all staff and physicians",
      "Annual HIPAA Privacy and Security training for all staff",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "Water Quality Comprehensive Testing & Spring Maintenance",
    items: [
      "Annual AAMI ST108 comprehensive water quality analysis (expanded chemical contaminant panel)",
      "Annual carbon filter breakthrough test and comprehensive audit",
      "Annual RO membrane performance testing or replacement",
      "Annual dialysis machine preventive maintenance (PM cycle — spring machines)",
      "Annual emergency preparedness plan review and tabletop exercise",
    ],
  },
  {
    phase: "May–Jun",
    title: "Malpractice Insurance & Staff Competency Assessments",
    items: [
      "Annual dialysis center professional liability insurance renewal — 90-day advance",
      "Annual cyber liability insurance renewal",
      "Annual dialysis RN/LPN competency assessments (all clinical staff)",
      "Annual CHT/CCHT recertification tracking audit (all dialysis technicians)",
      "Quarterly IPRO/ESRD Network quality measure report review (Q1 data)",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "CMS Annual Survey Preparation & Quality Benchmarking",
    items: [
      "Annual CMS ESRD mock survey preparation (internal compliance review — CfC standards)",
      "Mid-year Kt/V ≥1.2 compliance rate review (CMS ESRD QIP benchmark)",
      "Annual transplant referral rate review (CMS QIP wait-listing rate measure)",
      "Quarterly vascular access AV fistula first rate review (Q2 data)",
      "Annual ESRD Network annual case review submission",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "Annual Fall PM & Staff CE Renewals",
    items: [
      "Annual dialysis machine preventive maintenance (fall PM cycle — remaining machines)",
      "Annual nephrologist medical director CE completion (RPA annual ESRD guideline update)",
      "Annual OSHA bloodborne pathogen training for all clinical staff",
      "Annual OSHA bloodborne pathogen exposure control plan review",
      "Annual crash cart inspection and medication expiration audit",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "Year-End License Renewals & QIP Final Data",
    items: [
      "Annual state dialysis facility license renewal",
      "Annual governing body meeting with policy review and budget approval",
      "Annual medical director contract renewal",
      "CMS ESRD QIP performance period final data review (December 31 close)",
      "Annual CAHPS In-Center Hemodialysis Survey distribution",
    ],
  },
]

const kpis = [
  {
    metric: "Monthly Water Culture",
    target: "≤ 200 CFU/mL every month",
    description: "Monthly dialysate water microbiological culture at or below 200 CFU/mL — CMS 42 CFR 494.40 standard; zero months exceeding limit without corrective action documentation.",
  },
  {
    metric: "Kt/V ≥ 1.2 Compliance",
    target: "≥ 90% of patients monthly",
    description: "Monthly Kt/V adequacy ≥1.2 for 90% or more of hemodialysis patients — CMS ESRD QIP measure; performance below target reduces CMS payment by up to 2%.",
  },
  {
    metric: "OIG Monthly Checks",
    target: "100% every month",
    description: "All employees, contractors, and physicians checked against OIG/LEIE monthly — zero excluded individuals billing Medicare or Medicaid through the dialysis center.",
  },
  {
    metric: "CROWNWeb Submission",
    target: "Monthly — 100% patients",
    description: "Monthly CROWNWeb patient-level ESRD data submitted on time for 100% of enrolled patients — CMS data quality standard with annual Five-Star Rating implications.",
  },
  {
    metric: "Vascular Access Plan",
    target: "100% catheter patients",
    description: "100% of patients with hemodialysis catheter have documented plan and timeline for conversion to permanent vascular access — CMS ESRD CfC monthly documentation.",
  },
  {
    metric: "Machine PM Annual",
    target: "100% of machines documented",
    description: "Annual preventive maintenance completed and documented for 100% of hemodialysis machines per manufacturer specifications — zero machines overdue for annual PM.",
  },
]

const testimonial = {
  quote:
    "Annual CMS ESRD Conditions for Coverage mock survey preparation for 2 dialysis facilities, annual QAPI plan development and prior year evaluation, monthly CROWNWeb patient-level data submissions for 280 patients across 2 facilities, monthly OIG LEIE exclusion checks for all staff and physicians, monthly dialysate water microbiological culture testing documentation for 8 water sampling points, monthly endotoxin testing documentation, monthly conductivity and pH documentation, quarterly AAMI ST108 comprehensive water quality analysis, annual RO membrane performance testing for 4 RO systems, annual carbon filter comprehensive audit, annual dialysis machine PM documentation for 32 hemodialysis machines across 2 facilities, quarterly dialysis machine conductivity calibration, monthly Kt/V adequacy rate reviews for 280 patients, quarterly vascular access AV fistula first rate reviews, monthly hemoglobin monitoring documentation, quarterly ESA utilization reviews, monthly calcium and phosphorus monitoring documentation, quarterly iPTH management reviews, quarterly IPRO ESRD Network quality measure report reviews, annual ESRD Network annual case review, annual transplant referral rate review, annual CAHPS In-Center Hemodialysis survey, annual HIPAA training for 46 staff, annual OSHA bloodborne pathogen training, annual bloodborne pathogen exposure control plan review, annual dialysis competency assessments for 28 clinical staff, annual CHT recertification tracking for 18 technicians, annual medical director contract renewals, annual state dialysis facility license renewals, annual professional liability insurance renewal, annual cyber liability insurance, and annual workers compensation audit — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi DC.",
  title: "RN, CHN, Dialysis Center Administrator — Multi-Site ESRD Facility Director",
}

export default function DialysisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Dialysis Center Compliance Calendar"
        title="Monthly Water Quality. CMS ESRD QIP. CROWNWeb Monthly. One Calendar."
        subtitle="Momenties tracks monthly dialysate water microbiological culture and endotoxin testing, monthly CROWNWeb patient-level submissions, monthly OIG exclusion checks, monthly Kt/V ≥1.2 compliance reviews, monthly vascular access plan documentation, annual AAMI comprehensive water quality testing, annual dialysis machine PM documentation, annual CMS ESRD mock survey preparation, quarterly ESRD Network quality reviews, annual QAPI program evaluations, and annual medical director contract renewals so dialysis center administrators maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Dialysis Center
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
            Your Dialysis Center Compliance Year at a Glance
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
