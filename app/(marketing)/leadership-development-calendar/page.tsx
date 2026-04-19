import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Leadership Development Calendar | Momenties",
  description: "Momenties helps CHROs, CLOs, and leadership development teams track cohort program cycles, 360-degree feedback windows, coaching engagement cadences, succession planning reviews, and leadership assessment renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Leadership Cohort Program Cycles & Certification Renewals",
    description:
      "Senior leadership programs — EMBA cohorts, Harvard Executive Education, Center for Creative Leadership (CCL) Leadership Development Program — operate on fixed cohort calendars requiring application deadlines (3-6 months prior), pre-program assessments (6-8 weeks prior), and post-program integration plans (30/60/90-day follow-through). Internal leadership academies (high-potential director-to-VP tracks, emerging manager cohorts) require annual cohort nominations, design review cycles (Q1), launch windows (Q2), and alumni activation sessions (Q4). Functional leadership certifications — Certified Professional in Learning & Performance (CPLP/CPTD), ICF coaching credentials (ACC/PCC/MCC), DDI Targeted Selection certification — have continuing education unit (CEU) requirements and recertification cycles (3-year). Momenties tracks every program and certification window.",
  },
  {
    icon: RefreshCw,
    title: "360-Degree Feedback Cycles & Developmental Coaching Cadence",
    description:
      "360-degree feedback programs require precise timing: rater nomination windows (2 weeks), survey administration periods (2-3 weeks), data aggregation and report generation (1 week), and facilitator-guided debrief sessions (within 2 weeks of report delivery). Annual 360 cycles for senior leaders and bi-annual cycles for high-potentials must be staggered to prevent rater fatigue. Executive coaching engagements — typically 6-12 month programs — require contracting milestones (goals alignment, session scheduling, sponsor briefings), mid-engagement check-ins (month 3), and closing assessments with sponsor debrief. Group coaching programs (peer advisory cohorts, team coaching engagements) have bi-weekly session cadences and quarterly impact reviews. ICF-credentialed coach supervision hours (10 hours/3 years) require advance scheduling. Momenties keeps every coaching cycle on track.",
  },
  {
    icon: TrendingUp,
    title: "Succession Planning Reviews & Talent Pipeline Assessment",
    description:
      "Enterprise succession planning follows a structured annual cycle: talent calibration sessions (Q1 — identify successors for Tier 1/2 roles), development plan activation (Q2 — assign stretch assignments, sponsorship, and experiences), mid-year progress review (Q3 — assess readiness trajectory and bench strength gaps), and board/CEO succession reporting (Q4). Ready-now and ready-in-2-year successor identification requires validated leadership assessment data — Hogan Assessments (annual), Lominger/KORN Ferry Leadership Architect competency reviews, or Predictive Index behavioral profiles — with reassessment cycles aligned to succession review milestones. Critical role gap analysis and external talent pipeline benchmarking require annual external market intelligence reviews. Momenties manages the complete succession calendar.",
  },
  {
    icon: BarChart3,
    title: "Leadership Effectiveness Measurement & L&D ROI Reporting",
    description:
      "Leadership development ROI measurement follows Kirkpatrick Level 1-4 evaluation: satisfaction surveys (Level 1, immediate post-program), learning assessments (Level 2, knowledge/skill confirmation), behavior change surveys to managers (Level 3, 60-90 days post-program), and business impact analysis (Level 4, 6-12 months post-program). Quarterly talent reviews with business unit leaders — presenting leadership pipeline health, bench strength metrics, and high-potential attrition risk — require 4-6 weeks of data preparation. Annual leadership development strategy presentations to the board or C-suite require business case framing: investment per leader developed, internal promotion rates versus external hire rates, and leadership quality index trend data. Momenties schedules every evaluation and review cycle.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Leadership Calendar Design & Cohort Nominations",
    description: "Design the annual leadership development calendar — map cohort launch windows, 360 cycles, and succession review milestones. Open high-potential nominations with business unit leaders. Finalize executive coaching rosters. Set assessment baseline for the year.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Cohort Launch, Coaching Contracting & Talent Calibration",
    description: "Launch Q1 leadership cohort programs. Complete executive coaching contracting — goals alignment, sponsor briefings, session calendaring. Conduct Q1 talent calibration sessions with senior leadership. Identify Tier 1/2 role successors and flag bench strength gaps.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "360-Degree Feedback Cycle & Development Plan Activation",
    description: "Launch mid-year 360-degree feedback cycle for senior leaders. Facilitate debrief sessions and integrate 360 insights into individual development plans. Activate Q2 development experiences — stretch assignments, cross-functional rotations, external mentors, and sponsorship activation.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Mid-Year Coaching Reviews & High-Potential Program Progress",
    description: "Conduct mid-engagement coaching check-ins and impact assessments. Review high-potential cohort progress with sponsoring executives. Run Level 3 behavior change surveys (90-day follow-up from Q1 programs). Identify at-risk high-potentials and activate retention interventions.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Succession Review, Bench Strength Reporting & Q4 Cohort Launch",
    description: "Conduct Q3 succession readiness reviews — update successor profiles and readiness ratings. Prepare bench strength reports for Q4 board/CEO succession presentations. Launch Q4 leadership cohort programs. Begin annual external talent benchmarking for critical role gaps.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual ROI Review, Board Reporting & Next-Year Planning",
    description: "Complete Kirkpatrick Level 4 impact analysis for the year. Deliver annual leadership development ROI presentation to C-suite/board. Run annual 360 cycle for high-potentials. Finalize next-year cohort design, budget, and calendar. Complete certification renewals and CEU documentation.",
  },
]

const kpis = [
  {
    metric: "Internal Promotion Rate ≥ 70%",
    description: "Senior roles filled by internal candidates with active development plans vs. external hires",
  },
  {
    metric: "High-Potential Retention ≥ 92%",
    description: "Annual retention rate for employees formally designated as high-potential",
  },
  {
    metric: "360 Completion Rate ≥ 90%",
    description: "Leaders completing full 360 cycles including debrief and development plan integration",
  },
  {
    metric: "Coaching Engagement Utilization ≥ 85%",
    description: "Executive coaching sessions used versus contracted, measured per cohort",
  },
  {
    metric: "Succession Coverage ≥ 80% Tier-1 Roles",
    description: "Critical roles with at least one ready-now or ready-in-2-year identified successor",
  },
  {
    metric: "Leadership Quality Index Improving YoY",
    description: "Composite score from 360 data, promotion readiness ratings, and engagement index for leaders",
  },
]

const testimonial = {
  quote:
    "We were managing fourteen concurrent leadership programs — three executive cohorts, an emerging managers academy, 360 cycles for 200 senior leaders, forty executive coaching engagements, two succession review cycles, and annual CPTD recertifications for the L&D team itself. Every one had its own calendar. Momenties mapped all of it. Our internal promotion rate hit 76% last year.",
  name: "Ngozi F.",
  title: "Chief Learning Officer, Fortune 500 Financial Services",
}

export default function LeadershipDevelopmentCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Leadership Development Calendar"
        title="Cohort Programs. 360 Cycles. Succession Reviews. One Calendar."
        subtitle="Momenties tracks leadership cohort launch windows, 360-degree feedback cycles, executive coaching cadences, succession planning review milestones, and L&D certification renewals so talent leaders build the pipeline without dropping a single development window."
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
            Four Leadership Development Pillars Momenties Tracks
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
            12-Month Leadership Development Calendar
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
            Leadership Development KPIs Momenties Keeps on Track
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
