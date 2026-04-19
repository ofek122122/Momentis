import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Occupational Therapy Practice Calendar | Momenties",
  description: "Momenties gives OT practices an AI-powered calendar that tracks NBCOT renewal, CHT certification, AOTA CE cycles, CAQH quarterly updates, MIPS reporting, payer credentialing, and school-based IEP compliance — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "OTR/COTA License & NBCOT Renewal Calendar",
    description:
      "Occupational therapy practices managing OTR (Occupational Therapist Registered) and COTA (Certified Occupational Therapy Assistant) credential cycles track NBCOT renewal (every 3 years, 36 PDUs — Professional Development Units — with AOTA-approved categories including learning, teaching, research, and fieldwork supervision), state OT license renewal (2-year cycles in most states, with state-specific CE hour requirements ranging from 24 to 30 hours), and specialty certifications: CHT (Certified Hand Therapist, HTCC, 5-year renewal with 3,000 hand therapy hours plus 80 CE hours), SIPT/Ayres Sensory Integration certification (ASI, 3-year renewal, 30 hours), NDTA NDT (Neurodevelopmental Treatment, 3-year renewal, 45 hours), AOTA Board Specialty Certification in Gerontology, Mental Health, Pediatrics, or Physical Rehabilitation (5-year renewal, 500 practice hours plus 50 CE hours), and Low Vision Rehabilitation specialty (ACVREP CLVR, 3-year, 36 CE hours). Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "AOTA Conference CE & OT Annual Renewal Calendar",
    description:
      "AOTA Annual Conference & Expo (April) is the primary CE event for OTs — provides AOTA CEUs accepted by NBCOT and most state boards. ASHT Annual Meeting (October) for CHT-eligible hand therapy CE. AOTA Inspire (virtual, ongoing) for on-demand PDU completion. School-based OT CE: annual IEP procedural compliance training (IDEA 2004 annual update), annual assistive technology assessment documentation CE, and annual MTSS (Multi-Tiered System of Supports) documentation training. Hand therapy CE calendar: annual splinting and orthotic fabrication update CE, annual evidence-based hand rehabilitation CE (ASHT annual guideline review), and annual post-surgical hand protocol CE. Mental health OT CE: annual trauma-informed care CE, annual sensory modulation CE, and annual psychiatric medication interaction CE. Pediatric OT CE: annual sensory processing CE, annual feeding therapy CE (SOS approach annual training), and annual handwriting assessment CE (Handwriting Without Tears annual provider renewal). Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "CAQH, MIPS & OT Payer Credentialing Calendar",
    description:
      "Occupational therapy practices billing Medicare and commercial insurers maintain CAQH ProView profiles with quarterly attestation (every 120 days — profile expires and claims may deny without quarterly re-attestation), annual PECOS enrollment verification, and Medicare 5-year revalidation. MIPS reporting calendar for OT practices billing ≥$90,000 Medicare: January 1 data collection start, March 31 MIPS data submission deadline for prior performance year, annual QPP portal update review, and quarterly MIPS performance tracking dashboard review. Payer credentialing cycles: annual UnitedHealthcare, Aetna, BCBS OT panel re-credentialing applications (60-90 day processing — submit 90 days before expiration), annual workers&apos; compensation panel re-credentialing (state-specific annual renewal), annual school district contracted OT provider agreement renewal, and annual Medicare Advantage plan OT re-credentialing. NPI annual taxonomy verification. Medicaid provider enrollment renewal (annual in most states). Momenties tracks all credentialing deadlines.",
  },
  {
    icon: BarChart3,
    title: "School-Based IEP Compliance, Equipment & OT Quality Calendar",
    description:
      "Occupational therapy practices providing school-based services maintain annual IEP compliance documentation calendars (IDEA requires annual IEP review within 365 days of prior IEP meeting — Momenties tracks every student&apos;s annual review date), triennial reevaluation tracking (IDEA 3-year re-evaluation — consent and evaluation completion tracking), annual assistive technology device inventory and documentation audit, and annual Extended School Year (ESY) eligibility documentation review (May deadline for most districts). Equipment and facility compliance: annual adaptive equipment calibration and safety inspection documentation, annual OSHA hazard communication training for OT staff handling splinting materials, and annual HIPAA security risk assessment. Outcome measurement: PEDI-CAT or WeeFIM functional outcome measure quarterly aggregate report, COPM (Canadian Occupational Performance Measure) annual outcome documentation audit, annual FOTO (Focus On Therapeutic Outcomes) data submission for participating practices, and annual school-based OT service minutes compliance audit (Medicaid school billing compliance). Momenties tracks all quality cycles.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "MIPS Submission & License Audit",
    tasks: [
      "Submit prior-year MIPS data by March 31 — begin preparation January 1",
      "Audit all OTR/COTA state license expiration dates for the year",
      "NBCOT renewal PDU audit — verify hours logged for practitioners due this cycle",
      "CAQH quarterly attestation (Q1 — due by end of January)",
      "Annual PECOS enrollment verification for all billing providers",
    ],
  },
  {
    month: "March – April",
    title: "AOTA Conference & IEP Spring Cycle",
    tasks: [
      "MIPS prior-year submission deadline: March 31",
      "AOTA Annual Conference & Expo (April) — register and plan CE attendance",
      "Spring IEP annual review cycle begins — pull list of all IEPs due April–June",
      "IDEA triennial reevaluation tracking — consent letters for students due Q2",
      "Annual assistive technology assessment documentation review",
    ],
  },
  {
    month: "May – June",
    title: "ESY Documentation & School Year Close",
    tasks: [
      "Extended School Year (ESY) eligibility documentation deadline (May for most districts)",
      "CAQH quarterly attestation (Q2 — due by end of April/early May)",
      "Annual IEP compliance audit — verify all annual reviews completed within 365 days",
      "Annual school-based Medicaid billing compliance audit",
      "CHT renewal documentation check — clinical hours and CE log review",
    ],
  },
  {
    month: "July – August",
    title: "Back-to-School Prep & Credentialing Push",
    tasks: [
      "Submit payer re-credentialing applications due Q4 (90-day advance — submit by August)",
      "Annual workers&apos; compensation panel renewal applications",
      "CAQH quarterly attestation (Q3 — due by end of July)",
      "Annual adaptive equipment safety inspection and calibration documentation",
      "Annual OSHA hazard communication training for splinting materials",
    ],
  },
  {
    month: "September – October",
    title: "ASHT Conference & Fall IEP Cycle",
    tasks: [
      "ASHT Annual Meeting (October) — CHT CE attendance and documentation",
      "Fall IEP annual review cycle — pull list of all IEPs due October–December",
      "Annual HIPAA security risk assessment",
      "NBCOT PDU year-end audit for practitioners with December 31 renewal windows",
      "Annual MIPS quality measure performance review (Q3 YTD — adjust before year-end)",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CE Completion & MIPS Data Lock",
    tasks: [
      "CAQH quarterly attestation (Q4 — due by end of October/early November)",
      "CE hour completion push for all state license renewals due Q1 of next year",
      "MIPS data collection closes December 31 — final quality measure documentation",
      "Annual COPM and PEDI-CAT/WeeFIM outcome aggregate report",
      "Annual school district OT service agreement renewal submissions",
    ],
  },
]

const kpis = [
  {
    metric: "CAQH Attestation Compliance",
    target: "100% on-time quarterly",
    description: "Missed CAQH attestation causes claim denials within 30–60 days — track all providers quarterly.",
  },
  {
    metric: "IEP Annual Review On-Time Rate",
    target: "≥ 98% within 365 days",
    description: "Late IEP annual reviews trigger IDEA compliance citations from state education agencies.",
  },
  {
    metric: "NBCOT PDU Completion Rate",
    target: "36 PDUs per 3-year cycle",
    description: "NBCOT OTR certification lapses without 36 PDUs — state license renewal also requires CE documentation.",
  },
  {
    metric: "Payer Re-Credentialing Lead Time",
    target: "Applications submitted 90 days early",
    description: "Late payer credentialing causes participation gaps and retroactive claim reversals.",
  },
  {
    metric: "MIPS Performance Score",
    target: "≥ 75 points to avoid penalty",
    description: "MIPS scores below 75 trigger Medicare payment reductions in the subsequent payment year.",
  },
  {
    metric: "Triennial Reevaluation Compliance",
    target: "100% completed within 3 years",
    description: "Overdue IDEA triennial reevaluations trigger state monitoring and corrective action plans.",
  },
]

const testimonial = {
  quote:
    "NBCOT OTR renewal every 3 years with 36 PDUs tracked across learning, teaching, and supervision categories, CHT 5-year renewal with 3,000 clinical hours and 80 CE hours, AOTA Annual Conference CE, ASHT Annual Meeting CE for hand therapy, CAQH quarterly attestation for 6 providers, MIPS January-March submission, annual PECOS verification, annual UnitedHealthcare and Aetna and BCBS re-credentialing with 90-day advance submissions, annual workers&apos; comp panel renewals across 3 states, IEP annual review tracking for 84 school-based students with individual 365-day windows, triennial reevaluation tracking for 28 students, ESY eligibility documentation May deadlines, annual school-based Medicaid billing compliance audit, annual assistive technology inventory, annual HIPAA security risk assessment, annual OSHA hazard communication training, sensory integration ASI 3-year renewal, two state OT license 2-year renewals on different cycles, and Medicare 5-year revalidation — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze OT.",
  title: "OTD, OTR/L, CHT, Owner & Lead Therapist, Multi-Setting OT Practice",
}

export default function OccupationalTherapyPracticeCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Occupational Therapy Practice Calendar"
        title="NBCOT Renewal. IEP Compliance. CHT Certification. One Calendar."
        subtitle="Momenties tracks NBCOT 3-year PDU cycles, CHT 5-year renewal with clinical hours, AOTA Annual Conference CE, CAQH quarterly attestation for every provider, MIPS January–March submission, 90-day-advance payer re-credentialing, IEP annual review 365-day windows for every school-based student, IDEA triennial reevaluation tracking, ESY eligibility deadlines, and state OT license renewal cycles — so your occupational therapy practice never misses a deadline."
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
            Four Calendar Pillars for OT Practice Compliance
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
            Your OT Practice Compliance Calendar
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
            Six KPIs Every OT Practice Should Track
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
