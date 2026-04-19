import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Addiction Treatment Center Compliance Calendar | Momenties",
  description: "Momenties helps addiction treatment centers track CARF or JCAHO 3-year accreditation, SAMHSA OTP annual certification, DEA narcotic treatment program registration, buprenorphine prescriber training renewals, monthly drug testing documentation audits, HIPAA 42 CFR Part 2 annual training, and state behavioral health license renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "State BH License, SAMHSA Certification & Accreditation Calendar",
    description:
      "Addiction treatment centers maintain state behavioral health (BH) or substance use disorder (SUD) treatment facility license with annual renewal requirements. State SUD facility license: annual renewal in most states (license fee, annual inspection, staffing ratio compliance, physical plant compliance). SAMHSA OTP certification: Opioid Treatment Program (OTP) certification — annual SAMHSA certification renewal for methadone clinics (SAMHSA 42 CFR Part 8 annual certification, annual accreditation body audit). SAMHSA federal certification exception application: annual waiver review for OTPs in states with additional restrictions. State methadone clinic license: separate from SAMHSA certification — annual state controlled substance license for methadone dispensing. Accreditation: CARF (Commission on Accreditation of Rehabilitation Facilities) 3-year accreditation with annual conformance review; TJC Behavioral Health Care accreditation 3-year cycle with annual review; NCQA 3-year accreditation for behavioral health organizations; COA (Council on Accreditation) 4-year cycle. DEA narcotic treatment program registration: annual DEA NTP registration renewal (separate from individual provider DEA registrations — required for all OTPs dispensing methadone). NAADAC (National Association for Alcoholism and Drug Abuse Counselors) membership annual renewal. NASADAD (National Association of State Alcohol and Drug Abuse Directors) membership. Annual OIG/LEIE exclusions check for all staff, contractors, and prescribers. Annual governing body meeting and program policy review. Momenties tracks all accreditation and licensing cycles.",
  },
  {
    icon: RefreshCw,
    title: "HIPAA 42 CFR Part 2, DEA Compliance & Regulatory Training Calendar",
    description:
      "Addiction treatment regulatory compliance calendar: 42 CFR Part 2 (Confidentiality of Substance Use Disorder Patient Records) annual training: annual 42 CFR Part 2 compliance training for all staff (stricter than HIPAA — SUD patient records require patient-specific written consent for each disclosure; no TPO exception for SUD records without consent), annual 42 CFR Part 2 patient consent form update review, annual audit of all disclosure logs. HIPAA annual training for all staff (PHI handling in addition to 42 CFR Part 2 restrictions). Annual 42 CFR Part 8 OTP regulation compliance review (for methadone clinics — take-home methadone criteria, monthly counseling documentation, diversion control plan annual review). DEA compliance: DEA NTP registration annual renewal (OTP), DEA 3-year individual prescriber registration renewals, biennial controlled substance physical inventory (methadone, buprenorphine, naloxone — within 2 days of DEA anniversary), monthly controlled substance dispensing log reconciliation. Annual FWA (fraud, waste, and abuse) compliance training for all billing staff. Annual state SUD reporting compliance: annual TEDS (Treatment Episode Data Set) submission to SAMHSA/state, annual state SUD outcomes reporting (state-specific annual reporting requirements). Diversion control: annual OTP diversion control plan review and update (SAMHSA requirement — 42 CFR 8.12(c)(3)), monthly urine drug screen compliance documentation review, quarterly take-home medication diversion risk assessment. Annual SAMHSA/CSAT annual review preparation. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "MOUD Quality, Retention Rates & Treatment Quality Calendar",
    description:
      "Addiction treatment center quality compliance calendar: MOUD (Medication for Opioid Use Disorder) quality metrics: monthly buprenorphine treatment retention rate review (SAMHSA/PCSS benchmark — 12-month retention rate ≥60%), monthly methadone treatment retention rate review (OTP benchmark — 12-month retention ≥70%), monthly urine drug screen compliance rate review (UDS completion rate for all MOUD patients — SAMHSA standard ≥90% monthly UDS compliance). Counseling compliance: monthly individual counseling session completion rate review (state licensing requirement — minimum counseling frequency per level of care), monthly group therapy attendance rate review. Patient safety quality: monthly adverse drug reaction documentation review (buprenorphine respiratory depression, methadone QTc prolongation), quarterly QTc monitoring documentation audit for all methadone patients exceeding 100mg/day (SAMHSA/ASAM benchmark — annual EKG for ≥100mg/day). Naloxone: annual naloxone co-prescription rate review (SAMHSA benchmark — ≥80% of MOUD patients with naloxone prescription or provision). Alcohol use disorder quality: quarterly acamprosate/naltrexone treatment compliance review, monthly AUDIT-C completion rate review. Withdrawal management quality: quarterly CIWA-Ar documentation audit (Clinical Institute Withdrawal Assessment — alcohol withdrawal severity scoring completeness). Annual outcomes reporting: annual HEDIS measure review for behavioral health payers, annual patient satisfaction survey. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Prescriber REMS, Insurance Billing & Treatment Center Financial Compliance Calendar",
    description:
      "Addiction treatment center financial and prescriber compliance calendar: buprenorphine prescriber compliance: DATA waiver (X-DEA) annual patient count notification to SAMHSA at 100-patient limit for individual prescribers, annual PCSS (Provider Clinical Support System) buprenorphine prescribing CE (1-hour annual CE required for continued prescribing in many practice settings), annual buprenorphine prescriber DEA registration verification. Naltrexone (extended-release): annual Vivitrol IM injection competency documentation for nursing and prescribing staff. Methadone QTc program: annual methadone EKG protocol review (ASAM/SAMHSA methadone cardiac monitoring guideline annual review). Annual E&amp;O/professional liability insurance renewal — addiction medicine professional liability, begin 90 days before expiration. Annual malpractice/liability insurance for facility. Annual cyber liability insurance renewal (SUD patient records have heightened protection under 42 CFR Part 2). Annual workers&apos; compensation premium audit. Annual payer credentialing renewals: annual Medicaid behavioral health provider enrollment renewal (state Medicaid BH managed care annual), annual Medicare enrollment revalidation (CMS-855B facility enrollment 5-year cycle with annual location verification). Annual billing compliance audit: annual coding and billing compliance audit (HCPCS H-codes for SUD treatment, CPT codes for MOUD office visits, E/M billing for buprenorphine patients — annual audit). Annual SAMHSA Block Grant reporting (state SAPT block grant annual outcomes reporting for funded programs). Momenties tracks all financial compliance.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "SAMHSA Annual Review & Regulatory Compliance",
    items: [
      "Annual SAMHSA/CSAT annual OTP review preparation (January–March review cycle)",
      "Annual 42 CFR Part 2 patient consent form update review",
      "Annual TEDS submission to SAMHSA (Treatment Episode Data Set — prior year data)",
      "Annual state SUD outcomes annual report submission",
      "Monthly OIG/LEIE exclusions check for all staff and prescribers",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "DEA Registration Renewals & Diversion Control",
    items: [
      "Annual DEA NTP registration renewal (OTP — spring cycle)",
      "Annual OTP diversion control plan review and update",
      "Biennial DEA controlled substance physical inventory (within 2 days of anniversary)",
      "Annual CARF or TJC accreditation annual conformance review",
      "Annual governing body meeting with policy review and annual program report",
    ],
  },
  {
    phase: "May–Jun",
    title: "Insurance Renewals & Prescriber REMS Compliance",
    items: [
      "Annual professional liability and facility malpractice insurance renewal — 90-day advance",
      "Annual cyber liability insurance renewal",
      "Annual DATA waiver SAMHSA patient count notifications for all buprenorphine prescribers",
      "Annual Vivitrol IM injection competency documentation for clinical staff",
      "Annual 42 CFR Part 2 compliance training for all staff",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "Quality Reviews & Mid-Year Outcomes",
    items: [
      "Mid-year MOUD retention rate review (12-month rolling retention vs. benchmarks)",
      "Annual naloxone co-prescription rate review",
      "Quarterly QTc monitoring documentation audit for high-dose methadone patients",
      "Annual HEDIS behavioral health measure review for commercial payers",
      "Annual patient satisfaction survey distribution",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "HIPAA Training & Staff Credential Renewals",
    items: [
      "Annual HIPAA Privacy and Security training for all staff",
      "Annual FWA compliance training for all billing staff",
      "Annual PCSS buprenorphine prescribing CE completion for all prescribers",
      "Annual billing and coding compliance audit (HCPCS H-codes, E/M billing)",
      "Annual state SUD facility license renewal preparation",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "Year-End License Renewals & SAPT Block Grant",
    items: [
      "Annual state behavioral health facility license renewal",
      "Annual state methadone clinic controlled substance license renewal",
      "Annual SAMHSA Block Grant state SAPT annual outcomes reporting",
      "Annual Medicaid behavioral health provider enrollment renewal",
      "Annual workers&apos; compensation premium audit",
    ],
  },
]

const kpis = [
  {
    metric: "MOUD 12-Month Retention",
    target: "≥ 60% buprenorphine / ≥ 70% methadone",
    description: "12-month treatment retention rate at or above SAMHSA/PCSS benchmarks — monitored monthly as the primary outcome metric for MOUD program quality.",
  },
  {
    metric: "UDS Compliance Rate",
    target: "≥ 90% monthly",
    description: "Monthly urine drug screen completion rate at or above 90% for all active MOUD patients — SAMHSA standard for OTP and buprenorphine program quality monitoring.",
  },
  {
    metric: "Naloxone Co-Prescription",
    target: "≥ 80% of MOUD patients",
    description: "80% or more of MOUD patients with current naloxone prescription or provision — SAMHSA benchmark for overdose prevention in addiction treatment programs.",
  },
  {
    metric: "42 CFR Part 2 Training",
    target: "100% annual completion",
    description: "All staff complete annual 42 CFR Part 2 compliance training — zero disclosure violations under the stricter SUD confidentiality regulations that exceed HIPAA.",
  },
  {
    metric: "OIG Monthly Checks",
    target: "100% every month",
    description: "All employees, contractors, and prescribers checked against OIG/LEIE monthly — zero excluded individuals billing Medicaid or Medicare through the treatment center.",
  },
  {
    metric: "SAMHSA Annual Certification",
    target: "Zero lapses",
    description: "SAMHSA OTP annual certification and state methadone license renewed before expiration with zero lapse days — lapse triggers immediate suspension of methadone dispensing authority.",
  },
]

const testimonial = {
  quote:
    "Annual SAMHSA OTP certification renewal for 2 methadone clinics, annual DEA NTP registration renewals for both clinics, biennial DEA controlled substance physical inventory for methadone and buprenorphine and naloxone at both clinics, monthly controlled substance dispensing log reconciliation, annual 42 CFR Part 2 compliance training for 42 staff members, annual HIPAA training for 42 staff, annual OTP diversion control plan review and update, CARF 3-year accreditation annual conformance review, monthly OIG LEIE exclusions checks for all 42 staff and 8 prescribers, annual governing body meeting and program policy review, monthly MOUD retention rate reviews for 280 methadone patients and 140 buprenorphine patients, monthly UDS compliance rate reviews, quarterly QTc monitoring documentation audits for 38 high-dose methadone patients, annual naloxone co-prescription rate review, annual DATA waiver SAMHSA patient count notifications for 6 buprenorphine prescribers, annual PCSS buprenorphine CE for all 6 prescribers, annual Vivitrol injection competency for 8 clinical staff, annual TEDS data submission for prior year, annual state SUD outcomes annual report, annual SAPT Block Grant reporting, annual FWA compliance training for billing staff, annual Medicaid behavioral health provider enrollment renewals, annual billing and coding compliance audit for HCPCS H-codes, annual professional liability and facility malpractice insurance renewal, annual cyber liability insurance, annual workers compensation audit, and annual state behavioral health facility license renewals — all simultaneously. Momenties mapped every deadline.",
  name: "Kwame ATC.",
  title: "LCAS, MAC, CADC-II, Multi-Site Addiction Treatment Center Executive Director",
}

export default function AddictionTreatmentCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Addiction Treatment Center Compliance Calendar"
        title="SAMHSA OTP Annual Certification. DEA NTP Registration. 42 CFR Part 2 Training. One Calendar."
        subtitle="Momenties tracks SAMHSA OTP annual certification renewals, annual DEA narcotic treatment program registration renewals, annual 42 CFR Part 2 compliance training for all staff, CARF or TJC accreditation annual reviews, monthly OIG exclusion checks, monthly MOUD retention rate reviews, monthly UDS compliance reviews, quarterly QTc monitoring audits, annual naloxone co-prescription rate reviews, annual buprenorphine DATA waiver SAMHSA notifications, annual TEDS data submissions, and state behavioral health license renewals so addiction treatment center directors maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Addiction Treatment Center
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
            Your Addiction Treatment Center Compliance Year at a Glance
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
