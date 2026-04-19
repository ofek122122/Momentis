import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Urgent Care Center Calendar | Momenties",
  description: "Momenties helps urgent care centers manage UCAOA accreditation, CLIA waiver renewals, provider license cycles, OSHA compliance, and seasonal volume planning in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "UCAOA Accreditation, CLIA Waiver & Facility License Calendar",
    description:
      "Urgent care centers pursue UCAOA (Urgent Care Association of America) Accreditation or The Joint Commission Urgent Care Certification to demonstrate quality standards — UCAOA accreditation is a 3-year cycle with annual self-assessment required. The Joint Commission Primary Care Medical Home (PCMH) or Urgent Care Certification follows a 2-3 year cycle with mid-cycle report requirements. CLIA (Clinical Laboratory Improvement Amendments) waiver: most urgent care centers operate under a CLIA Certificate of Waiver for point-of-care testing (rapid strep, flu A/B, COVID-19 antigen, RSV, urine pregnancy, blood glucose, INR by fingerstick) — CLIA Certificate of Waiver renews every 2 years, with the application due before current certificate expires. CLIA Certificate of Registration or Compliance: urgent care centers adding moderate-complexity testing (CBC, CMP, cultures) upgrade to a higher CLIA certificate — annual fee and inspection every 2 years. State urgent care facility license: most states require a separate ambulatory care facility or urgent care facility license (annual or biennial renewal). DEA registration: urgent care centers prescribing controlled substances for pain management maintain a separate facility DEA registration (3-year renewal) distinct from individual provider DEA registrations. X-ray facility permit: state radiation control board permit for diagnostic x-ray equipment (annual or biennial renewal). Occupational health authorization: urgent care centers with occupational medicine programs maintain employer authorization agreements with workers&apos; compensation carriers — annual renewal. OSHA 300 log annual posting: February 1 through April 30 for facilities with 10+ employees. Momenties tracks every regulatory cycle.",
  },
  {
    icon: RefreshCw,
    title: "Provider Credentialing, Clinical Staff CE & Urgent Care Operations Calendar",
    description:
      "Urgent care centers with multiple providers (physicians, NPs, PAs) face staggered license renewal cycles across all clinical staff — a systematic calendar prevents practice disruption from lapsed provider credentials. Provider credentialing calendar: all physician, NP, and PA license renewals tracked with 90-day advance notification, DEA registration 3-year renewals tracked per provider, state PDMP registration annual renewals per prescribing provider, BLS/ACLS recertification annual scheduling (AHA requires 2-year recertification — urgent care centers typically require annual renewal), and ATLS/TNCC optional certifications for urgent care providers. CLIA waiver quality assurance calendar: monthly CLIA quality control documentation for all POC test devices (manufacturers require daily or monthly QC per kit instructions — CLIA requires documentation), quarterly equipment maintenance documentation for x-ray and POC devices, and biennial CLIA certificate renewal application preparation (filed 2-3 months before expiration). Urgent care clinical CE: UCAOA annual education track, AAFP (American Academy of Family Physicians) urgent care module CE, ACEP urgent care section CE, and annual opioid prescribing CE for controlled substance prescribers. Occupational medicine CE: annual DOT physical examiner certification renewal (FMCSA Medical Examiner — 10-year initial, then periodic) for urgent care providers conducting CDL physicals. Annual infection control CE: annual contact precaution and isolation protocol training, annual PPE competency documentation. Annual medication storage compliance: vaccine storage and handling annual competency for urgent care centers offering immunizations. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Volume Planning, Flu Campaign & Quality Calendar",
    description:
      "Urgent care revenue is highly seasonal — respiratory illness season (October through March) accounts for 55-65% of annual visit volume, with predictable peaks around flu season onset, school openings, and back-to-school physicals. Seasonal volume calendar: back-to-school physical and sports physical season (July-August — 8-week peak), flu vaccine campaign launch (August-September — vaccine delivery coordination, staff immunization, marketing launch), fall respiratory season preparation (September-October — rapid diagnostic test inventory, staffing adjustments, extended hours planning), flu peak (November-January — highest volume period), spring allergy season (March-May — allergy testing and treatment marketing), and summer sports injury and occupational medicine season (May-August). Vaccine compliance calendar: VFC (Vaccines for Children) program annual re-enrollment (December-January) for urgent care centers offering pediatric vaccines, annual flu vaccine ordering and delivery coordination (typically April-May for following fall delivery), annual VAERS training documentation, and annual vaccine storage temperature log audit. HEDIS and quality measures: annual HEDIS colorectal cancer screening documentation for eligible patients, and CAHPS patient satisfaction survey annual administration. Telehealth: annual telehealth billing compliance update for urgent care telemedicine (asynchronous and synchronous). Payer credentialing: CAQH quarterly attestation for all providers, annual payer re-credentialing with commercial plans, Medicare, and Medicaid. Momenties maps every seasonal window.",
  },
  {
    icon: BarChart3,
    title: "HIPAA Compliance, Financial Operations & Urgent Care Tax Calendar",
    description:
      "Urgent care centers face HIPAA compliance obligations as covered entities and financial complexity from multi-payer billing, workers&apos; compensation, and potential multi-state or multi-site operations. HIPAA compliance calendar: annual HIPAA security risk assessment (required by HIPAA Security Rule — ePHI asset inventory and risk analysis), annual HIPAA privacy training for all staff, annual BAA (Business Associate Agreement) audit for all vendors with PHI access (EHR, billing service, x-ray PACS, laboratory, answering service), and annual HIPAA breach risk assessment. Billing and revenue cycle: monthly AR aging review (>90 days outstanding), quarterly payer mix analysis, annual fee schedule review and update (CPT code changes effective January 1), and annual Medicare PECOS verification for all enrolled providers. Workers&apos; compensation billing: state-specific workers&apos; comp fee schedule annual update review (many states update WC fee schedules January 1 or annually), annual employer authorization agreement renewals. Financial compliance: monthly bank reconciliation, quarterly financial statement review, and annual business tax preparation (S-Corp 1120-S, LLC 1065, or C-Corp 1120 per entity structure). Employment law: annual I-9 audit for all employees, annual EEOC and anti-harassment training documentation, annual wage and hour law compliance review. Equipment leases: annual review of equipment lease contracts (x-ray, EHR, POC devices) for renewal or upgrade decisions. Annual commercial general liability and professional liability insurance renewal 60-day advance. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "Tax Filings & OSHA Compliance",
    tasks: [
      "OSHA 300 log annual posting (February 1)",
      "W-2 and 1099 distribution (January 31)",
      "VFC program annual re-enrollment",
      "Annual HIPAA security risk assessment",
      "Annual HIPAA staff privacy training",
      "CAQH Q1 quarterly attestation for all providers",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & Credentialing",
    tasks: [
      "State urgent care facility license renewal",
      "Provider license renewal audit (90-day advance notification)",
      "Annual professional liability and CGL insurance renewal (60-day advance)",
      "Annual CLIA QC documentation review",
      "Annual BAA audit for all PHI vendors",
      "Annual payer re-credentialing cycle initiation",
    ],
  },
  {
    phase: "May – Jun",
    title: "CLIA Renewal & Summer Prep",
    tasks: [
      "CLIA Certificate of Waiver biennial renewal application (if due)",
      "State x-ray facility permit renewal",
      "Flu vaccine ordering for fall season",
      "Back-to-school physical season preparation",
      "Annual opioid prescribing CE for controlled substance providers",
      "Annual infection control CE documentation",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "Back-to-School Peak",
    tasks: [
      "Back-to-school and sports physical season peak volume",
      "Annual staff BLS/ACLS recertification scheduling",
      "Flu vaccine delivery and storage verification",
      "Annual VAERS training documentation",
      "Annual vaccine storage temperature log audit",
      "Annual UCAOA accreditation self-assessment",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Flu Campaign Launch",
    tasks: [
      "Flu vaccine campaign marketing launch",
      "Staff immunization completion documentation",
      "Fall respiratory season staffing and inventory preparation",
      "Annual DOT physical examiner certification renewal (if due)",
      "CAQH Q3 quarterly attestation",
      "Annual CPT code update preparation for January 1",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Peak Respiratory Season",
    tasks: [
      "Flu peak season — maximum staffing and POC test inventory",
      "Annual Medicare PECOS verification for all enrolled providers",
      "DEA registration 3-year renewal tracking",
      "Annual I-9 audit for all employees",
      "Annual wage and hour compliance review",
      "Annual equipment lease review for renewal or upgrade",
    ],
  },
]

const kpis = [
  { label: "Provider Licenses Tracked", value: "Per provider", note: "MD, NP, PA — staggered cycles" },
  { label: "CLIA Waiver Renewal", value: "Every 2 years", note: "Apply 60-90 days before expiration" },
  { label: "Monthly CLIA QC Documentation", value: "Per device", note: "Manufacturer requirement" },
  { label: "Flu Season Revenue Window", value: "Oct – Mar", note: "55–65% of annual visit volume" },
  { label: "CAQH Attestation", value: "Quarterly", note: "All participating providers" },
  { label: "HIPAA Risk Assessment", value: "Annual", note: "ePHI asset inventory required" },
]

const testimonial = {
  quote:
    "Provider license renewals for 6 NPs and 3 physicians with different state and renewal timelines, facility urgent care license annual renewal, CLIA Certificate of Waiver biennial renewal with monthly QC documentation for 14 POC devices, state x-ray facility permit annual renewal, UCAOA accreditation 3-year cycle with annual self-assessment, annual professional liability renewal 60 days advance, CAQH quarterly attestation for 9 providers, annual HIPAA security risk assessment, annual BAA audit for 11 vendors, annual HIPAA training for 28 staff, VFC annual re-enrollment January, flu vaccine ordering May, flu campaign launch September, back-to-school physical season July-August preparation, annual opioid prescribing CE for 5 DEA-registered providers, annual BLS recertification scheduling for 22 clinical staff, annual infection control training documentation, annual DOT physical examiner renewal for 4 providers, annual Medicare PECOS verification for all enrolled providers, annual payer re-credentialing with 8 commercial plans, CPT code annual fee schedule update, and annual OSHA 300 log posting — across 3 urgent care locations. Momenties mapped every deadline.",
  name: "Emeka UC.",
  title: "CEO & Medical Director, 3-Location Urgent Care Group",
}

export default function UrgentCareCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Urgent Care Centers"
        title="CLIA Waiver Renewals. Provider Credentialing. Flu Season Planning. One Calendar."
        subtitle="Momenties tracks CLIA Certificate of Waiver biennial renewal with monthly QC documentation, UCAOA accreditation 3-year cycle, provider license renewals for all MDs, NPs, and PAs, CAQH quarterly attestation, annual HIPAA security risk assessment, VFC annual re-enrollment, flu vaccine ordering and campaign launch sequences, back-to-school peak season preparation, state x-ray facility permit renewal, annual DOT physical examiner renewals, and payer re-credentialing 90-day lead times so urgent care centers stay compliant and operationally ready year-round."
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
            Your Urgent Care Compliance Year, Month by Month
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
            What Momenties Tracks for Urgent Care Centers
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
