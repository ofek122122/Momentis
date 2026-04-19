import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "People Operations Calendar | Momenties",
  description: "Momenties helps VP People and HR operations leaders track performance review cycles, compensation review cadences, benefits open enrollment, HR compliance deadlines, and employee experience program governance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Performance Review Cycles, Goal-Setting Cadence & Calibration Governance",
    description:
      "Performance management programs without structured calendar governance produce inconsistent manager behaviors — employees in teams with ad-hoc review processes receive 40% fewer documented performance conversations than those in structured programs. Annual performance review calendar: Q1 mid-year goal check-in (January-February) following Q4 annual review, H1 performance pulse (June) with calibration for flight-risk identification, Q3 goal revision window (September), and Q4 annual review cycle (November-December) requiring 6-week preparation. Calibration calendar: manager calibration training (annual, pre-review season), VP-level calibration sessions (2 weeks before final ratings), and HRBP calibration support (concurrent with manager sessions). 360-degree feedback cycles: launch (T-21 days before review), completion deadline (T-14), manager review of aggregated feedback (T-7). Promotion cycles: twice-annual (Q2 and Q4) with nomination windows (T-30), HRBP screen (T-21), exec calibration (T-14), and approval (T-7). Momenties manages the full performance and promotion calendar.",
  },
  {
    icon: RefreshCw,
    title: "Compensation Review Cycles, Total Rewards Planning & Equity Refresh Calendar",
    description:
      "Compensation programs managed without structured calendars produce equity erosion — salary bands that go unreviewed for 18+ months fall below market by an average of 12-15% in high-demand engineering markets. Annual compensation review calendar: external market data purchase (Radford, Mercer, Levels.fyi for tech — August), salary band refresh analysis (September), manager merit recommendations (October), comp committee review (November), and employee notification (January). Equity refresh grant calendar: annual refresh grant cycle (March for most tech companies), cliff and vesting schedule review (annual), underwater option repricing governance (ad-hoc with board approval). Benefits open enrollment (October-November for January 1 effective date): plan design review (July-August), carrier negotiations (August-September), employee communication launch (4 weeks before enrollment window), and enrollment deadline. ESPP enrollment windows (semi-annual). Annual total compensation statement distribution (February). Momenties schedules every compensation and equity milestone.",
  },
  {
    icon: TrendingUp,
    title: "HR Compliance Deadlines, EEO-1 Filing & People Audit Calendar",
    description:
      "HR compliance calendars carry hard legal deadlines — EEO-1 Component 1 filing (May 31 for prior year data, for companies with 100+ employees or federal contractors), VETS-4212 federal contractor reporting (September 30), OSHA Form 300A annual summary posting (February 1 through April 30), and ACA 1094-C/1095-C filing (March 31 for electronic filers). I-9 audit calendar: new hire I-9 completion (Day 1 for new hires, Section 2 within 3 business days), I-9 re-verification for expiring work authorization (90-day advance reminder system), and annual I-9 internal audit. FMLA administration calendar: FMLA notice requirements (5 business days from knowledge of qualifying event), medical certification deadline (15 days), and annual FMLA policy notice distribution. State-specific HR compliance (California DFEH annual report, New York pay equity audit, pay transparency compliance in CO/NY/WA/CA) requires state-by-state tracking. Annual HR audit: policy handbook review, compensation equity analysis, and benefits compliance review. Momenties consolidates the full HR compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "Employee Experience Programs, Engagement Surveys & People Analytics Calendar",
    description:
      "Employee experience programs without measurement cadences produce vanity metrics — engagement surveys launched without action planning follow-through decrease employee trust in the feedback process by 23% within 12 months. Annual engagement survey calendar: survey design and vendor selection (T-60), manager communication training (T-30), survey launch (2-week window), results analysis (T+14), manager results distribution (T+21), company-wide results presentation (T+30), and departmental action planning (T+45). Pulse survey cadence: quarterly pulse (5-7 questions, 10-minute completion target), with department-level results reviewed at monthly manager meetings. Onboarding experience surveys: Day 30, Day 60, and Day 90 automated triggers with manager notification for low scores. Offboarding exit interview program: structured interview (within 5 days of departure notice), aggregated quarterly analysis, and annual attrition trend presentation to exec team. People analytics quarterly reporting: attrition analysis by level/department/tenure, pay equity dashboard, and DEI hiring funnel metrics. Momenties schedules every people program milestone.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Review Close-Out & Compensation Notification",
    description: "Distribute Q4 performance review outcomes and ratings. Notify employees of compensation changes effective January 1. Complete annual total compensation statement distribution. Launch Q1 goal-setting process with OKR alignment. Post OSHA Form 300A (February 1). File ACA 1095-C employee copies (January 31).",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 HR Compliance Filings & Equity Refresh Grants",
    description: "File ACA 1094-C/1095-C with IRS (March 31 electronic deadline). Process annual equity refresh grant cycle. Run Q1 engagement pulse survey. Complete I-9 internal audit for prior year hires. Launch manager calibration training for H1 review season. Review open FMLA cases for re-certification requirements.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "EEO-1 Filing & H1 Performance Review Season",
    description: "File EEO-1 Component 1 (May 31 deadline). Launch H1 performance mid-year check-in cycle. Complete Q2 360-degree feedback cycle. Run semi-annual promotion calibration cycle. Review H1 attrition trends and flight-risk identification. Launch annual engagement survey design and vendor selection.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Annual Engagement Survey & Compensation Market Data",
    description: "Launch annual employee engagement survey. Purchase external compensation market data (Radford, Mercer). Begin salary band refresh analysis. Complete H1 HR compliance audit. Distribute engagement survey results to managers. Launch department-level action planning for engagement initiatives.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "VETS-4212 Filing & Benefits Open Enrollment",
    description: "File VETS-4212 (September 30 deadline for federal contractors). Launch benefits open enrollment (October). Complete Q3 compensation committee review. Begin Q4 performance review preparation and manager training. Launch Q3 engagement pulse survey. Finalize headcount plan for next year with finance.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Q4 Performance Reviews & Year-End HR Close",
    description: "Execute Q4 performance review and calibration cycle. Complete year-end I-9 audit. Run semi-annual promotion cycle (December). Finalize compensation changes for January 1 effective date. Distribute annual handbook update. Complete year-end people analytics report for board.",
  },
]

const kpis = [
  {
    metric: "Performance Review Completion ≥ 95%",
    description: "Percentage of employees with completed performance reviews by cycle deadline; below 90% signals manager accountability gap",
  },
  {
    metric: "HR Compliance Filing Rate 100% On-Time",
    description: "EEO-1, VETS-4212, ACA, OSHA filings completed before statutory deadlines with zero penalties",
  },
  {
    metric: "Regrettable Attrition ≤ 8% Annually",
    description: "Voluntary attrition of high performers; above 10% in engineering or leadership signals compensation or engagement issue",
  },
  {
    metric: "Engagement Score ≥ 75th Percentile (Benchmark)",
    description: "Annual engagement survey composite score versus industry benchmark; below 60th percentile signals systematic intervention needed",
  },
  {
    metric: "Offer Acceptance Rate ≥ 85%",
    description: "Percentage of extended offers accepted; below 75% signals compensation, process, or employer brand issue",
  },
  {
    metric: "Compensation Equity Variance ≤ 2% by Gender/Race",
    description: "Pay gap between comparable roles across demographic groups in annual compensation equity analysis",
  },
]

const testimonial = {
  quote:
    "Annual performance review cycles with calibration for 1,200 employees, twice-annual promotion cycles, annual compensation review with external benchmarking, equity refresh grant processing, benefits open enrollment with three plan changes, EEO-1 and VETS-4212 compliance filings, ACA reporting, OSHA 300A posting cycle, annual engagement survey with departmental action planning, quarterly pulse surveys, semi-annual I-9 audits, and FMLA administration — all tracked in HRIS exports and spreadsheets. Momenties organized everything. We had zero compliance filing penalties for the first time in four years.",
  name: "Obiageli A.",
  title: "VP People Operations, Series D Enterprise SaaS",
}

export default function PeopleOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="People Operations Calendar"
        title="Performance Reviews. HR Compliance. Benefits Enrollment. One Calendar."
        subtitle="Momenties tracks performance review and calibration cycles, compensation review and equity refresh timelines, EEO-1/VETS-4212/ACA/OSHA compliance filing deadlines, benefits open enrollment windows, annual engagement survey programs, I-9 audit cadences, and FMLA administration so people operations leaders run compliant, high-performing HR programs without administrative gaps."
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
            Four People Operations Pillars Momenties Tracks
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
            12-Month People Operations Calendar
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
            People Operations KPIs Momenties Keeps on Track
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
