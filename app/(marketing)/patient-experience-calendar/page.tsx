import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Patient Experience Calendar | Momenties",
  description: "Momenties helps patient experience officers and healthcare quality leaders track HCAHPS survey cycles, Press Ganey reporting cadences, patient advisory council meetings, service recovery programs, and CMS quality metric reporting in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "HCAHPS Survey Cycles & CMS Quality Reporting Calendar",
    description:
      "HCAHPS (Hospital Consumer Assessment of Healthcare Providers and Systems) is a publicly reported CMS quality measure — survey administration must follow CMS-approved sampling protocols with monthly patient mailing cycles (surveys mailed 2-42 days post-discharge), quarterly data submission to the HCAHPS data collection center, and annual public reporting updates on Hospital Compare. Medicare Value-Based Purchasing (VBP) Program ties HCAHPS domain scores directly to payment adjustments — the Patient Experience of Care domain (25% of VBP score) requires continuous monitoring against national benchmarks (top-box scores) and peer comparator data. Annual HCAHPS performance improvement planning cycles: baseline analysis (Q1), intervention design (Q2), implementation monitoring (Q3), and VBP impact modeling (Q4). Momenties tracks every survey cycle and reporting deadline.",
  },
  {
    icon: RefreshCw,
    title: "Press Ganey & Patient Advisory Council Engagement Cadence",
    description:
      "Press Ganey (or NRC Health/Qualtrics) patient satisfaction data requires structured review cadences: weekly dashboard reviews for frontline managers, monthly department-level deep dives with service recovery action plans, and quarterly executive presentations with trend analysis and competitive benchmarking. Patient and Family Advisory Council (PFAC) governance — a CMS Conditions of Participation requirement for many programs and a JCAHO accreditation standard — requires quarterly PFAC meetings with documented agenda, attendance, and action items. PFAC charter review (annual), member recruitment cycles (ongoing), and PFAC report to the Board of Directors (annual) require structured calendar management. Patient experience rounding programs — leadership rounding, nurse leader rounding, and hourly rounding compliance — require weekly reporting to maintain hardwired behavior. Momenties schedules every touchpoint.",
  },
  {
    icon: TrendingUp,
    title: "Service Recovery Program & Complaint Resolution Calendar",
    description:
      "CMS Conditions of Participation require a formal patient grievance process with 7-day written resolution for formal grievances — tracking resolution timeliness and patient satisfaction with the resolution process is a compliance requirement. Service recovery program effectiveness reviews — measuring re-service success rates, complaint root cause trends, and department-level grievance rates — require monthly analysis and quarterly executive reporting. JCAHO accreditation (3-year cycle) surveys patient rights and complaint management compliance — preparation requires documentation review 6-8 weeks prior. Patient experience data integration with safety event reporting — identifying overlap between complaints and patient safety events — requires quarterly combined analysis sessions. Annual Voice of the Patient program reviews synthesize complaint data, HCAHPS trends, and PFAC input into an integrated improvement roadmap. Momenties manages every resolution cycle.",
  },
  {
    icon: BarChart3,
    title: "CMS Star Ratings, Accreditation Prep & Patient Experience ROI Reporting",
    description:
      "CMS Hospital Star Ratings are updated annually — star rating preview data is available 3 months before public release, providing a window for final improvement initiatives that may affect the calculation. JCAHO Disease-Specific Care Certification programs (3-year cycle) include patient experience measures as certification criteria. DNV Healthcare accreditation (annual surveys) includes patient rights and experience standards reviewed at every visit. Patient experience ROI reporting — connecting patient satisfaction improvements to revenue metrics (patient loyalty, market share, reimbursement optimization) — requires quarterly financial analytics integration. Annual Patient Experience Week (typically May) requires 6-8 weeks of advance planning for clinical staff recognition programs, patient appreciation events, and community outreach. Momenties consolidates the full lifecycle.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual PX Baseline Assessment & Calendar Design",
    description: "Complete annual HCAHPS and Press Ganey baseline analysis. Model CMS VBP impact projections. Set departmental HCAHPS improvement targets. Recruit PFAC members for open seats. Design annual Patient Experience improvement roadmap.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Performance Review & Service Recovery Program Launch",
    description: "Conduct Q1 patient experience data review with departmental scorecards. Run PFAC Q1 meeting. Launch or refresh service recovery training for frontline staff. Review complaint root cause data and update resolution protocols.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Patient Experience Week & Mid-Year Intervention Assessment",
    description: "Execute Patient Experience Week recognition programming. Complete H1 HCAHPS trend analysis. Review rounding program compliance rates. Assess VBP domain score trajectory. Submit Q2 HCAHPS data and run mid-year competitive benchmark review.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "JCAHO Preparation & CMS Star Rating Preview",
    description: "Begin JCAHO accreditation preparation if survey due within 12 months. Review CMS Star Rating preview data when available. Conduct PFAC Q3 meeting. Run summer patient experience deep dive with service line leaders.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 Review & VBP Performance Optimization",
    description: "Conduct Q3 patient experience performance review. Model final VBP payment adjustment projections based on YTD performance. Run annual patient experience ROI analysis. Complete complaint management annual review and update grievance policies.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual Board Report & Next-Year Program Planning",
    description: "Deliver annual patient experience report to Board and senior leadership. Complete PFAC annual report and charter review. Submit Q4 HCAHPS data. Design next-year PX improvement strategy and budget. Complete annual PFAC member recognition program.",
  },
]

const kpis = [
  {
    metric: "HCAHPS Top-Box Score ≥ 75th Percentile",
    description: "Overall hospital rating and recommend scores relative to national peers, tracked quarterly",
  },
  {
    metric: "Grievance Resolution ≤ 7 Days",
    description: "CMS-required written resolution within 7 days for formal patient grievances, zero exceptions",
  },
  {
    metric: "Leadership Rounding Compliance ≥ 90%",
    description: "Completed leadership and nurse leader rounding as scheduled, tracked weekly by unit",
  },
  {
    metric: "PFAC Meeting Quorum 100%",
    description: "Patient and Family Advisory Council meetings held on schedule with documented quorum and action items",
  },
  {
    metric: "Service Recovery Re-Service Rate ≥ 80%",
    description: "Patients offered service recovery who express satisfaction with resolution within 30 days",
  },
  {
    metric: "VBP Patient Experience Score Improving YoY",
    description: "CMS Value-Based Purchasing Patient Experience of Care domain score trajectory, modeled quarterly",
  },
]

const testimonial = {
  quote:
    "We had HCAHPS data coming in monthly, Press Ganey reports quarterly, PFAC meetings four times a year, CMS VBP modeling twice a year, a JCAHO survey window, CMS Star Rating previews, Patient Experience Week programming, and complaint resolution 7-day SLAs running continuously. Each had its own tracking system. Momenties mapped every deadline into one calendar. Our HCAHPS overall rating score moved from the 52nd to 71st percentile in 18 months.",
  name: "Chisom A.",
  title: "Chief Experience Officer, 450-Bed Regional Medical Center",
}

export default function PatientExperienceCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Patient Experience Calendar"
        title="HCAHPS Cycles. Press Ganey Reviews. PFAC Governance. One Calendar."
        subtitle="Momenties tracks HCAHPS survey and submission cycles, Press Ganey performance review cadences, Patient and Family Advisory Council governance, CMS VBP patient experience domain modeling, service recovery program reviews, and JCAHO accreditation preparation so patient experience leaders drive improvement without dropping a deadline."
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
            Four Patient Experience Pillars Momenties Tracks
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
            12-Month Patient Experience Calendar
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
            Patient Experience KPIs Momenties Keeps on Track
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
