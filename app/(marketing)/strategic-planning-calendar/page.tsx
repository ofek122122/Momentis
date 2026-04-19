import type { Metadata } from "next"
import { Target, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Strategic Planning Calendar | Momenties",
  description: "Build a systematic strategic planning calendar — annual plan cadence, OKR and budget alignment cycles, market and competitive assessment programs, and strategy review rhythms that translate planning into execution.",
}

const pillars = [
  {
    icon: Target,
    title: "Annual Strategy Development & Market Assessment",
    description:
      "Strategic plans fail when they&apos;re built on last year&apos;s market assumptions. An annual market and competitive assessment — refreshed 10-12 weeks before the planning cycle begins — surfaces category shifts, ICP evolution, competitive positioning changes, and TAM expansion opportunities that should inform every strategic bet. Momenties schedules the assessment cadence, routes competitor analysis to product and marketing, and ensures leadership arrives at the annual planning offsite with current intelligence rather than intuition.",
  },
  {
    icon: Users,
    title: "Offsite Planning & Cross-Functional Alignment Calendar",
    description:
      "Annual planning offsites generate the strategic direction; the calendar around them generates alignment. Momenties schedules all pre-offsite preparation — functional leader strategy submissions 6 weeks prior, budget scenario modeling 4 weeks prior, pre-read package delivery 2 weeks prior — and maps post-offsite alignment sessions: board review, all-hands strategy communication, OKR cascade to teams, and department budget approval workflows. Strategy without a tight post-offsite calendar becomes good intentions.",
  },
  {
    icon: TrendingUp,
    title: "OKR Setting, Cascade & Quarterly Review Rhythm",
    description:
      "OKRs without a review cadence are wishes. Momenties builds the full OKR calendar: annual company OKR setting in Q4, Q1 cascade to departments and teams, monthly key result check-ins, and quarterly OKR retrospectives where teams grade results and reset for the next quarter. Leadership quarterly business reviews (QBRs) are automatically scheduled 2 weeks after each quarter ends — giving teams time to close their data before executives review performance against strategy.",
  },
  {
    icon: BarChart3,
    title: "Budget Planning, Headcount & Resource Allocation Reviews",
    description:
      "Budget planning is the operational translation of strategy — and it runs on a calendar few companies manage well. Momenties maps the full budget cycle: bottoms-up submission from departments 8 weeks before fiscal year-end, scenario modeling and CFO review 6 weeks out, executive reconciliation 4 weeks out, board approval 2 weeks out, and budget lock with published headcount plans before the new year begins. Mid-year budget reforecasts are scheduled in June and September with defined owner accountability.",
  },
]

const timeline = [
  {
    month: "Month 1–2 (Q4 T-12)",
    title: "Market Assessment & Competitive Intelligence Refresh",
    description: "Commission annual market sizing update, run competitive positioning refresh, survey top customers on priorities, and compile analyst report synthesis for strategy team pre-read.",
  },
  {
    month: "Month 3–4 (Q4 T-8)",
    title: "Functional Strategy Submissions & Budget Bottoms-Up",
    description: "Collect functional leader 3-year strategy submissions; launch bottoms-up budget process; run scenario modeling for base, bull, and bear cases; complete headcount planning by department.",
  },
  {
    month: "Month 5 (Q4 T-6)",
    title: "Annual Planning Offsite",
    description: "Execute 2-3 day leadership offsite with pre-reads delivered 2 weeks prior; finalize company strategy narrative, 3-year ambition, and annual priority bets; select top 3-5 company OKRs.",
  },
  {
    month: "Month 6 (Q4 T-4)",
    title: "Board Review & Budget Approval",
    description: "Present annual plan to board for approval; secure budget authorization; publish OKR cascade framework to all departments; finalize department-level OKRs with executive sign-off.",
  },
  {
    month: "Month 7–9 (Q1–Q2)",
    title: "Execution & Monthly OKR Check-Ins",
    description: "Execute Q1 plan; run monthly OKR check-ins; conduct Q1 QBR 2 weeks after quarter close; schedule mid-year strategy refresh to address major market changes or missed milestones.",
  },
  {
    month: "Month 10–12 (Q3–Q4)",
    title: "Mid-Year Reforecast & Planning Cycle Kickoff",
    description: "Complete Q3 reforecast and budget reallocations; begin next-year market assessment; run Q3 QBR and lessons learned; initiate next annual planning cycle 3 months before fiscal year-end.",
  },
]

const kpis = [
  {
    metric: "OKR Completion Rate",
    target: "60–70% of Key Results",
    description: "Percentage of quarterly key results achieved — below 40% signals overambition or execution breakdown; above 80% signals insufficient stretch, not excellence.",
  },
  {
    metric: "Budget Forecast Accuracy",
    target: "Annual within ±5%",
    description: "Variance between approved annual budget and actual full-year spend — persistent ±15% variance signals planning process maturity issues or major market assumption failures.",
  },
  {
    metric: "Planning Cycle Duration",
    target: "≤ 8 weeks",
    description: "Time from annual planning offsite to published, board-approved budget and OKR cascade — above 12 weeks loses Q1 momentum and signals cross-functional alignment breakdown.",
  },
  {
    metric: "Strategy Communication Reach",
    target: "100% of all-hands",
    description: "Percentage of employees who receive a documented strategy communication within 2 weeks of board plan approval — strategy opacity below the leadership team is a execution risk signal.",
  },
  {
    metric: "QBR Completion Rate",
    target: "4 per year, on schedule",
    description: "Number of quarterly business reviews completed on schedule with written summaries distributed — missed QBRs create feedback vacuum that allows strategy drift to compound undetected.",
  },
  {
    metric: "Strategic Initiative Completion",
    target: "≥ 80% on time",
    description: "Percentage of annual strategic initiatives completed on original schedule and budget — tracks execution discipline against the priorities set in the annual planning process.",
  },
]

const testimonial = {
  quote:
    "We used to start annual planning in October and not finish until February — by which point Q1 was already half over and teams were executing without clarity. Momenties gave us a structured 8-week planning calendar with pre-offsite submissions, budget bottoms-up, and post-offsite cascade all sequenced tightly. We locked our plan before Thanksgiving for the first time in five years.",
  name: "Emeka T.",
  title: "Chief of Staff & VP Strategy, Series C SaaS",
}

export default function StrategicPlanningCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Strategic Planning Calendar"
        title="Lock Your Annual Plan Before the Year Starts"
        subtitle="A structured strategic planning calendar with market assessment cadences, offsite production workflows, OKR cascade rhythms, and budget approval timelines that translate strategy into Q1 execution momentum."
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
            Four Systems That Make Strategic Planning Executable
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
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            The Annual Strategic Planning Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
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
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            KPIs That Define Planning Process Maturity
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
