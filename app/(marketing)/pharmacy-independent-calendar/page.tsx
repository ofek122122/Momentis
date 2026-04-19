import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Independent Pharmacy Calendar | Momenties",
  description: "Momenties helps independent pharmacies manage pharmacist license renewals, DEA biennial CS inventory, NABP DMEPOS accreditation, PBM audit preparation cycles, and HIPAA compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Pharmacist License, DEA Registration & Controlled Substance Compliance Calendar",
    description:
      "Independent pharmacies operate under the most heavily regulated license environment in healthcare — pharmacist licenses, pharmacy permits, DEA registrations, state controlled substance registrations, and federal DEA Schedule II record-keeping requirements create overlapping compliance obligations. Pharmacist CE requirements vary by state: most states require 15-30 CE hours per 2-year renewal cycle, with mandatory pharmacotherapy CE in many states (ACPE-accredited CE required in all states). Immunization CE: all 50 states allow pharmacist-administered vaccines — annual immunization CE update required in most states (APhA or ACPE-accredited immunization training, typically 8-20 hours initial with annual CE). Medication therapy management (MTM) certification: CPESN (Community Pharmacy Enhanced Services Network) participation requires annual MTM competency documentation. DEA pharmacy registration (3-year renewal) — separate from DEA practitioner registration, pharmacies renew on institutional registration timeline. State pharmacy permit: annual or biennial renewal depending on state board. DEA Schedule II biennial inventory: DEA 21 CFR 1304.11 requires biennial physical inventory of all Schedule II through V controlled substances — inventory must occur every 2 years within 2 days of the biennial anniversary date. DEA Form 222 (paper) or CSOS electronic order system: annual audit of completed DEA 222 forms and electronic records. State controlled substance registration: separate from DEA — annual or biennial renewal in states with separate state CS registration requirements. NABP (National Association of Boards of Pharmacy) e-Profile annual verification. Momenties tracks every regulatory cycle.",
  },
  {
    icon: RefreshCw,
    title: "PBM Credentialing, Specialty Pharmacy Accreditation & Payer Calendar",
    description:
      "Independent pharmacies must maintain credentialing with pharmacy benefit managers (PBMs) and may pursue specialty pharmacy accreditation to access specialty drug dispensing contracts — creating a continuous credentialing and renewal calendar. PBM credentialing: NCPDP provider ID annual verification, annual re-credentialing with Express Scripts, CVS Caremark, OptumRx, Humana Pharmacy, Prime Therapeutics — each PBM has distinct re-credentialing cycles (typically annual or biennial). Medicare Part D pharmacy accreditation: pharmacies participating in Medicare Part D preferred networks must maintain accreditation through URAC, ACHC, or TJC — annual accreditation compliance review and triennial full survey for TJC-accredited pharmacies. DMEPOS supplier accreditation: pharmacies dispensing durable medical equipment, prosthetics, orthotics, and supplies to Medicare patients must maintain DMEPOS accreditation (NABP, ACHC, or other CMS-approved accreditor — typically 3-year accreditation cycle with annual compliance review). Specialty pharmacy accreditation: URAC Specialty Pharmacy accreditation (3-year), ACHC Specialty Pharmacy (3-year), and TJC Specialty Pharmacy Standards for pharmacies dispensing specialty medications. PSAOmembership annual renewal for independent pharmacies in purchasing/service organizations. Compounding pharmacy compliance: USP 795 and USP 797 annual staff training documentation (sterile compounding state board requirements), PCAB (Pharmacy Compounding Accreditation Board) accreditation (3-year) for compounding pharmacies. 340B program compliance: annual 340B audit documentation for covered entity participating pharmacies. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "HIPAA Compliance, PBM Audit Readiness & Quality Calendar",
    description:
      "Independent pharmacies face PBM audits that can recoup months of dispensing revenue — systematic audit readiness documentation throughout the year is the most financially consequential compliance activity. PBM audit readiness calendar: monthly prescription documentation review (hard copy prescriptions, refill authorization documentation, physician order completeness), quarterly PBM audit response drill (CVS Caremark, Express Scripts, and OptumRx audits are unannounced — internal audit quarterly), and annual DIR fee reconciliation review (Medicare Part D Direct and Indirect Remuneration fees — annual true-up typically occurs 12-18 months after dispensing). HIPAA compliance calendar: annual HIPAA security risk assessment (required by HIPAA Security Rule — must document all ePHI assets and risks), annual BAA audit (Business Associate Agreements with PBMs, software vendors, 340B administrators, prescription benefit platforms), annual HIPAA staff training documentation, and annual breach risk assessment review. Immunization quality: VFC (Vaccines for Children) program annual re-enrollment (December-January), annual VFC compliance review and site visit preparation, and annual VAERS (Vaccine Adverse Event Reporting System) training documentation. Medication synchronization quality: annual medication synchronization program outcomes report (PDC — Proportion of Days Covered — for high-priority chronic medications). Star Ratings quality: annual Medicare Part D star rating measures documentation — medication adherence for ACE inhibitors/ARBs, statins, and oral antidiabetics are pharmacy-impacted measures. Annual MTM case review and billing documentation. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "State Board Inspections, Compounding Compliance & Financial Calendar",
    description:
      "Independent pharmacies face state board of pharmacy inspections, typically announced or unannounced every 2-4 years, with continuous inspection readiness required. State board inspection readiness calendar: quarterly internal self-inspection using state board inspection checklist, annual pharmacist-in-charge (PIC) documentation review (most states require annual PIC designation documentation and notification to state board), annual facility record review (prescription record retention — typically 2-5 years per state law), and annual refrigeration temperature log review (vaccine storage and biologics — CDC Vaccine Storage and Handling Toolkit). Compounding pharmacy compliance: quarterly USP 795/797/800 environmental monitoring documentation (sterile compounding requires quarterly air sampling, surface sampling — state board requirement varies), annual clean room HVAC certification, and annual compounding training documentation for all compounding staff. Financial calendar: monthly PBM claim reconciliation (matching adjudicated claims to remittance), monthly DIR fee accrual estimate (for cash flow planning), quarterly estimated tax payments, annual 1099-MISC for independent contractor pharmacists, and annual business personal property tax schedule update for pharmacy equipment. Annual pharmaceutical wholesaler contract renegotiation (primary wholesaler — McKesson, AmerisourceBergen, Cardinal Health — annual pricing review). Annual malpractice and commercial general liability insurance renewal 60-day advance. Annual pharmacy software license renewal. CPT code update effective January 1 for MTM billing. Annual pharmacy staff performance reviews. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "Inventory & VFC Re-enrollment",
    tasks: [
      "DEA biennial inventory (if due this year — must occur within 2 days of anniversary)",
      "VFC program annual re-enrollment documentation",
      "Annual HIPAA security risk assessment",
      "Annual HIPAA staff training documentation",
      "MTM CPT code annual fee schedule update",
      "CAQH and NCPDP annual profile verification",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & DEA Compliance",
    tasks: [
      "Pharmacist license renewal filings (state-specific cycles)",
      "State pharmacy permit renewal",
      "DEA pharmacy registration renewal (3-year cycle tracking)",
      "Annual professional liability insurance renewal (60-day advance)",
      "Annual DIR fee reconciliation review",
      "Annual PBM re-credentialing cycle — Express Scripts, CVS Caremark",
    ],
  },
  {
    phase: "May – Jun",
    title: "Accreditation Reviews",
    tasks: [
      "DMEPOS accreditation annual compliance review",
      "Specialty pharmacy accreditation mid-cycle review",
      "Annual 340B audit documentation for covered entity pharmacies",
      "Annual compounding staff training documentation",
      "Annual refrigeration temperature log audit",
      "Annual pharmacist immunization CE update",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "PBM Audit Prep & Quality",
    tasks: [
      "Q3 internal PBM audit readiness drill",
      "Medicare Part D Star Rating mid-year adherence measure review",
      "Annual wholesaler contract renegotiation window",
      "Annual pharmacy software license renewal review",
      "Annual business personal property tax schedule update",
      "NABP e-Profile annual verification",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Medicare Star & Flu Season",
    tasks: [
      "Medicare Part D star rating final push — adherence measures close October",
      "Annual flu vaccination campaign launch",
      "URAC/ACHC accreditation annual compliance review",
      "Annual BAA audit for all PHI vendors",
      "Annual malpractice and CGL insurance renewal",
      "Annual MTM case review and billing documentation",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Year-End Compliance Close",
    tasks: [
      "DEA 222 form annual audit",
      "Annual prescription record retention compliance review",
      "Annual state controlled substance registration renewal",
      "Annual compounding environmental monitoring documentation review",
      "Year-end PBM claim reconciliation",
      "1099 preparation for independent contractor pharmacists",
    ],
  },
]

const kpis = [
  { label: "Pharmacist License Cycles", value: "Per pharmacist", note: "2-year state-specific CE" },
  { label: "DEA Biennial CS Inventory", value: "Every 2 years", note: "Within 2 days of anniversary date" },
  { label: "PBM Internal Audit Drills", value: "Quarterly", note: "CVS, ESI, OptumRx unannounced" },
  { label: "DMEPOS Accreditation Cycle", value: "3-year", note: "Annual compliance review" },
  { label: "HIPAA Security Risk Assessment", value: "Annual", note: "ePHI asset documentation required" },
  { label: "Star Rating Adherence Push", value: "Oct deadline", note: "ACE/ARB, statin, antidiabetic PDC" },
]

const testimonial = {
  quote:
    "Pharmacist license renewals for 4 pharmacists with different CE completion timelines, state pharmacy permit annual renewal, DEA pharmacy registration 3-year renewal, DEA biennial controlled substance inventory with 2-day window compliance, state controlled substance registration annual renewal, annual PBM re-credentialing with Express Scripts, CVS Caremark, OptumRx, and Humana, DMEPOS accreditation annual compliance review, specialty pharmacy ACHC accreditation triennial survey preparation, monthly DIR fee accrual tracking, quarterly internal PBM audit readiness drill, annual HIPAA security risk assessment, annual BAA audit for 18 vendors, annual HIPAA staff training for 8 employees, VFC annual re-enrollment January, annual refrigeration temperature log audit, annual immunization CE for all 4 pharmacists, Medicare Part D star rating adherence measure annual push for 380 diabetic/cardiac patients, annual 340B audit documentation, annual wholesaler contract renegotiation with McKesson, annual compounding staff training documentation for sterile compounding, quarterly USP 797 environmental monitoring documentation, annual professional liability renewal, and annual pharmacy software license renewal — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze Ph.",
  title: "PharmD, RPh, Owner, Independent Community & Specialty Pharmacy",
}

export default function PharmacyIndependentCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Independent Pharmacies"
        title="DEA CS Inventory. PBM Audit Readiness. DMEPOS Accreditation. One Calendar."
        subtitle="Momenties tracks pharmacist license renewals with ACPE CE requirements, DEA biennial controlled substance inventory with 2-day window compliance, state pharmacy permit annual renewal, quarterly internal PBM audit readiness drills for CVS Caremark and Express Scripts, DMEPOS accreditation annual compliance reviews, annual HIPAA security risk assessment, VFC annual re-enrollment, Medicare Part D star rating adherence push, DIR fee annual reconciliation, 340B audit documentation, and annual wholesaler contract renegotiation so independent pharmacies stay compliant and profitable."
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
            Your Independent Pharmacy Compliance Year, Month by Month
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
            What Momenties Tracks for Independent Pharmacies
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
