import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Veterinary Practice Calendar | Momenties",
  description: "Momenties gives veterinary practices an AI-powered calendar that tracks DEA CS renewal, state veterinary license cycles, USDA accreditation, AVMA CE requirements, controlled substance inventory logs, and rabies certificate compliance — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "Veterinary License & DEA Renewal Calendar",
    description:
      "Veterinary practices managing DVM and licensed veterinary technician (LVT/CVT/RVT) credential cycles track state veterinary license renewal (2-3 year cycles with state-specific CE requirements ranging from 20 to 30 hours per cycle), AVMA CE credit verification (RACE-approved CE preferred by most state boards), DEA registration renewal (3-year cycle — separate DEA registration number required per practice location, not per practitioner), and state controlled substance (CS) registration renewal (annual or biennial depending on state veterinary board). Specialty certifications: DACVIM (Diplomate American College of Veterinary Internal Medicine, subspecialties: SA Internal Medicine, Cardiology, Neurology, Oncology — board certification maintenance requires annual ACVIM CE hour documentation), DACVS (Diplomate ACVS Surgery — biennial continuing education documentation), DACVD (Diplomate ACVD Dermatology — biennial CE), and CVMA (Certified Veterinary Medical Acupuncturist, IVAS, 3-year renewal, 30 CE hours) for practices offering integrative medicine. ISVMA/state VMA membership CE: annual state VMA conference CE for license-required categories. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "USDA Accreditation, DEA CS Logs & Annual Compliance Calendar",
    description:
      "USDA APHIS Veterinary Accreditation is required for all DVMs issuing health certificates for interstate and international travel, performing USDA-required physical examinations for livestock movement, and signing export health certificates — accreditation renewal is every 3 years with online Category I or II training, and annual online Category training modules (USDA VS Form 1-23) for accredited veterinarians. DEA controlled substance compliance calendar: biennial DEA CS physical inventory (required within 2 days of biennial DEA registration anniversary — all Schedule II-V controlled substances counted and documented on DEA Form 222 or CSOS equivalent), monthly controlled substance log reconciliation (dispensing log vs. remaining inventory — monthly discrepancy review), annual DEA order form (Form 222/CSOS) audit, and annual state CS board inspection readiness review. Rabies vaccine certificate compliance: rabies vaccine lot number and expiration date documentation per patient (required for legally valid rabies certificate), annual rabies certificate form update (state-specific form updates from state veterinary board). AVMA Annual Convention (July-August): primary CE event for DVMs. State VMA Annual Conference: state-specific required CE category documentation. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "OSHA, AAHA Accreditation & Veterinary Quality Calendar",
    description:
      "Veterinary practices maintaining AAHA (American Animal Hospital Association) accreditation (3-year cycle, 900+ standards across 18 categories) track annual AAHA compliance self-assessment, biennial AAHA on-site evaluation, quarterly AAHA standard update review (AAHA releases standard updates quarterly — review and implementation documentation), and annual AAHA practice management software update compliance. OSHA compliance calendar: annual hazard communication (HazCom) training for all staff (OSHA 1910.1200 — right-to-know training for anesthetic gases, disinfectants, chemotherapy drugs), annual radiation safety training for digital radiography staff, annual OSHA Bloodborne Pathogens training (for mixed practice or wound management staff), quarterly SDS (Safety Data Sheet) binder update, and annual personal protective equipment (PPE) fit assessment. Radiation: annual x-ray and dental radiography unit calibration, state radiation facility permit renewal (annual or biennial). Anesthesia: annual anesthetic machine service documentation. Pharmacy: annual controlled substance log completeness audit, AVMA/NAVLE Veterinary Prescription compounding CE annual update. Patient safety: quarterly anesthesia adverse event log review, annual medication error log review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Payer Credentialing, Pet Insurance & Veterinary Business Calendar",
    description:
      "Veterinary practices offering financing, wellness plans, and pet insurance direct billing manage annual Trupanion/Healthy Paws/Nationwide pet insurance direct payment enrollment renewal, annual CareCredit and Scratchpay veterinary financing partner renewal, annual wellness plan contract review (Banfield/VetCor/independent plan contract annual renewal with plan price and benefit update), and annual AVMA Professional Liability Insurance renewal (60-90 days advance renewal for coverage continuity). Business compliance calendar: annual state sales tax registration renewal for retail product sales (veterinary supplies, prescription diets — nexus determination annual review), annual DEA order quantity report (DEA Form 222 or CSOS annual usage tracking for Schedule II substances), annual state board of pharmacy veterinary drug dispensing permit renewal (required in many states for in-clinic pharmacy), and annual USPS or UPS controlled substance shipping compliance review for practices mailing prescriptions. Staff: annual veterinary technician license audit for all credentialed staff, annual OSHA required posting update (OSHA 300/300A February 1 posting for practices with 11+ employees). Momenties tracks all business compliance deadlines.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "OSHA 300A Posting & CS Inventory Audit",
    tasks: [
      "Post OSHA 300A Summary (February 1 through April 30) for practices with 11+ employees",
      "Annual controlled substance log completeness audit — verify all Schedule II-V dispensing log entries",
      "Annual state CS board registration renewal (due Q1 in many states)",
      "Annual state veterinary board license audit — flag all DVM/LVT renewals due this year",
      "Annual CareCredit and pet insurance partner enrollment renewal verification",
    ],
  },
  {
    month: "March – April",
    title: "DEA Renewal & State License Push",
    tasks: [
      "DEA registration renewals due in Q2 — submit 60 days early to avoid lapse",
      "Biennial DEA CS physical inventory (within 2 days of DEA anniversary — schedule now)",
      "Annual state board of pharmacy veterinary drug dispensing permit renewal",
      "USDA APHIS annual online Category training module completion for accredited DVMs",
      "Annual SDS binder quarterly update (Q1)",
    ],
  },
  {
    month: "May – June",
    title: "Spring CE Push & AAHA Compliance Check",
    tasks: [
      "Quarterly AAHA standard update review — document implementation of new standards",
      "Annual x-ray and dental radiography unit calibration and documentation",
      "Annual anesthetic machine service documentation",
      "State VMA spring meeting CE attendance and documentation",
      "Annual rabies certificate form update — verify current state-specific form in use",
    ],
  },
  {
    month: "July – August",
    title: "AVMA Convention & Back-to-School Pet Health Season",
    tasks: [
      "AVMA Annual Convention (July-August) — CE attendance and documentation for license renewal",
      "Annual state VMA conference CE documentation",
      "Back-to-school pet health campaign (August) — 4-week advance prep for heartworm/flea/tick push",
      "Monthly CS log reconciliation — mid-year discrepancy review",
      "Annual OSHA HazCom training for all staff (anesthetic gases, disinfectants, chemo drugs)",
    ],
  },
  {
    month: "September – October",
    title: "Biennial Inventory & Wellness Plan Renewals",
    tasks: [
      "Annual wellness plan contract review — submit renewal or renegotiation 60 days before expiration",
      "Annual AVMA Professional Liability Insurance renewal (submit 60-90 days early)",
      "Annual radiation safety training for digital radiography staff",
      "OSHA Bloodborne Pathogens annual training for wound management staff",
      "Quarterly AAHA standard update review (Q3)",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CE Completion & License Renewal Push",
    tasks: [
      "CE hour completion push for all DVM/LVT state license renewals due Q1 of next year",
      "Annual DEA order quantity report — Schedule II annual usage tracking review",
      "Annual state sales tax registration renewal for retail product sales",
      "Year-end CE audit — verify RACE-approved CE hour categories for license compliance",
      "USDA APHIS 3-year accreditation renewal — submit if due Q1 (begin 90 days early)",
    ],
  },
]

const kpis = [
  {
    metric: "DEA CS Biennial Inventory Compliance",
    target: "100% within 2 days of DEA anniversary",
    description: "Late DEA biennial inventory triggers DEA audit — maintain precise documentation within the 2-day window.",
  },
  {
    metric: "Monthly CS Log Reconciliation",
    target: "Zero unresolved discrepancies monthly",
    description: "Monthly dispensing log vs. physical inventory reconciliation — discrepancies require same-day investigation and documentation.",
  },
  {
    metric: "USDA Accreditation Training Completion",
    target: "100% annual module completion",
    description: "Lapsed USDA accreditation prevents issuing health certificates for interstate or international travel — no grace period.",
  },
  {
    metric: "DVM/LVT License Renewal On-Time Rate",
    target: "100% renewed before expiration",
    description: "Practicing with a lapsed veterinary license triggers state board disciplinary action and potential DEA suspension.",
  },
  {
    metric: "AAHA Compliance Self-Assessment",
    target: "Annual internal audit before biennial inspection",
    description: "Practices that complete annual internal AAHA standard reviews reduce on-site evaluation failure rates by over 60%.",
  },
  {
    metric: "CE Hours Completion Rate",
    target: "100% of staff meet state requirements",
    description: "Missing CE hours at license renewal triggers late fees, board investigations, and potential license suspension.",
  },
]

const testimonial = {
  quote:
    "State veterinary license renewals for 4 DVMs on different biennial cycles, LVT license renewals for 6 technicians on staggered 2-year cycles, DEA registration renewals for 2 clinic locations on different 3-year anniversaries, biennial DEA controlled substance physical inventory within 2 days of each location&apos;s DEA anniversary, monthly CS log reconciliation for Schedule II through V at both locations, annual state CS board registration renewal, USDA APHIS annual online Category I and II training modules for 3 accredited DVMs, USDA 3-year accreditation renewal for 2 DVMs, annual rabies certificate form update, AAHA accreditation biennial on-site evaluation prep with quarterly standard update reviews, annual anesthetic machine service documentation for 4 units, annual x-ray calibration for 3 digital radiography units, annual HazCom training, annual radiation safety training, OSHA 300A February posting, annual SDS binder quarterly updates, annual wellness plan contract review with 3 plan providers, annual AVMA Professional Liability Insurance renewal 90 days early, annual CareCredit and Trupanion enrollment renewals, annual state board of pharmacy drug dispensing permit renewal, and AVMA Annual Convention CE documentation — all simultaneously across 2 locations. Momenties mapped every deadline.",
  name: "Kwame V.",
  title: "DVM, DACVIM, Owner & Medical Director, 2-Location Mixed Veterinary Practice",
}

export default function VeterinaryPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Veterinary Practice Calendar"
        title="DEA CS Logs. USDA Accreditation. AAHA Standards. One Calendar."
        subtitle="Momenties tracks DEA 3-year registration renewal per location, biennial CS physical inventory within the 2-day window, monthly CS log reconciliation, USDA APHIS annual accreditation training modules, 3-year USDA accreditation renewal, AAHA biennial on-site evaluation prep with quarterly standard reviews, DVM and LVT staggered license renewals, annual anesthetic machine and radiography calibration documentation, OSHA annual training cycles, and wellness plan contract renewals — so your veterinary practice never misses a compliance deadline."
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
            Four Calendar Pillars for Veterinary Practice Compliance
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
            Your Veterinary Practice Compliance Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((phase, idx) => (
              <div
                key={phase.month}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 0,
                  borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    padding: "24px 20px",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    background: "#0e0e12",
                  }}
                >
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {phase.month}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {phase.title}
                  </p>
                </div>
                <div style={{ padding: "24px 28px", background: "#0a0a0d" }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#c5a35c", marginTop: 2, flexShrink: 0 }}>›</span>
                        <span style={{ color: "rgba(240,236,227,0.7)", fontSize: "0.9rem", lineHeight: 1.55 }}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            Six KPIs Every Veterinary Practice Should Track
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
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "22px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.15rem", marginBottom: 4 }}>{k.target}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>{k.description}</p>
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
