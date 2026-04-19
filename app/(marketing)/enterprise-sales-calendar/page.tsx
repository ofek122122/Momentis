import type { Metadata } from "next"
import { Target, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Enterprise Sales Calendar | Momenties",
  description: "Build a systematic enterprise sales calendar — multi-threaded account cadence, procurement and legal timeline management, executive business review scheduling, and pipeline review rhythms that close 6-figure deals on time.",
}

const pillars = [
  {
    icon: Target,
    title: "Multi-Threaded Account Cadence & Champion Management",
    description:
      "Enterprise deals die from single-threading — one champion, no breadth, vulnerable to turnover. Momenties maps weekly multi-threaded outreach schedules: champion touch cadence, economic buyer executive sequence, technical validator check-ins, and procurement relationship management. It tracks last-contacted dates across all stakeholders, surfaces stale threads before they cool completely, and queues executive sponsor calls 30 days before critical procurement decision points.",
  },
  {
    icon: Users,
    title: "Procurement, Legal & Security Review Timeline",
    description:
      "Enterprise procurement adds 60-120 days to deal cycles if not anticipated. Security questionnaire response, MSA redlines, DPA negotiation, InfoSec review, and procurement committee approval each have distinct lead times that must be calendared against deal close dates. Momenties builds reverse-engineered procurement timelines from target close: security questionnaire submission 8 weeks prior, legal redline kick-off 6 weeks prior, procurement committee agenda submission 4 weeks prior — preventing late-stage timeline surprises.",
  },
  {
    icon: TrendingUp,
    title: "Executive Business Review & Mutual Action Plan Scheduling",
    description:
      "Mutual action plans (MAPs) and executive business reviews (EBRs) are the two highest-leverage activities in enterprise sales — both require 3-4 week scheduling lead times for executives. Momenties prompts AE to send MAP proposals when deals enter formal evaluation, queues EBR scheduling when executive sponsor goes dark for more than 14 days, and maintains a standing EBR calendar for existing enterprise accounts at 90-day intervals to protect NRR and identify expansion signals.",
  },
  {
    icon: BarChart3,
    title: "Pipeline Reviews, Forecast Cadence & Deal Inspection",
    description:
      "Enterprise forecast accuracy requires weekly deal inspection rhythm: MEDDPICC scoring updates, stage gate criteria verification, next-step commitment confirmation, and competitive positioning review. Momenties schedules weekly 1:1 pipeline reviews for each enterprise AE, monthly forecast calls with written deal updates, and quarterly deal retrospectives for won and lost opportunities over $100K — giving managers the inspection cadence needed to forecast ±5% and coach deals before close date slippage compounds.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "ICP Account Targeting & Territory Planning",
    description: "Define enterprise ICP criteria, build target account list by territory, assign account ownership, map existing relationship coverage, and configure Momenties enterprise cadence templates per segment.",
  },
  {
    month: "Month 3–4",
    title: "Multi-Threading Launch & EBR Program",
    description: "Launch structured multi-threading cadences for top-20 target accounts; establish standing EBR schedule for existing enterprise customers; train AEs on MAP best practices and launch first MAP pilots.",
  },
  {
    month: "Month 5–6",
    title: "Procurement Timeline Integration",
    description: "Map standard procurement and legal review timelines by account size; integrate reverse-engineered procurement calendars into Momenties deal plans; establish security questionnaire response SLA workflow.",
  },
  {
    month: "Month 7–8",
    title: "Pipeline Inspection Cadence Enforcement",
    description: "Enforce weekly MEDDPICC update cadence; launch monthly forecast call structure with written deal summaries; run first quarterly win/loss retrospective for enterprise deals over $100K.",
  },
  {
    month: "Month 9–10",
    title: "Expansion Account Activation",
    description: "Map existing enterprise accounts for expansion signals; schedule proactive EBRs 60 days before renewal dates; launch land-and-expand playbooks for accounts using less than 40% of purchased licenses.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Enterprise Sales Plan",
    description: "Present enterprise segment performance (ASP trend, win rate vs. target, average sales cycle, competitive win rate); plan next-year territory assignments, quota distribution, and investment in enterprise SDR support.",
  },
]

const kpis = [
  {
    metric: "Average Enterprise ASP",
    target: "Track & grow YoY",
    description: "Average selling price for enterprise segment — primary indicator of whether enterprise motion is moving upmarket or commoditizing under competitive pressure.",
  },
  {
    metric: "Enterprise Sales Cycle",
    target: "≤ 90 days (≤ $250K ACV)",
    description: "Average days from qualified opportunity to closed-won for enterprise deals — above 120 days for sub-$250K ACV signals procurement process issues or insufficient executive access.",
  },
  {
    metric: "Multi-Thread Coverage",
    target: "≥ 4 contacts per deal",
    description: "Number of active stakeholder threads per enterprise opportunity — deals with 4+ active contacts close at 3× the rate of single-threaded deals in enterprise segments.",
  },
  {
    metric: "Forecast Accuracy",
    target: "±5% of called number",
    description: "Variance between quarterly enterprise forecast and actual closed-won ARR — consistent accuracy beyond ±15% signals deal inspection process failure or sandbagging.",
  },
  {
    metric: "EBR Completion Rate",
    target: "≥ 85% of scheduled",
    description: "Percentage of scheduled executive business reviews completed on time — EBR cancel rate above 30% signals champion health risk and potential churn exposure.",
  },
  {
    metric: "Enterprise Win Rate",
    target: "≥ 25% of qualified",
    description: "Percentage of qualified enterprise opportunities resulting in closed-won — below 20% signals ICP mismatch, competitive positioning gaps, or deal qualification issues.",
  },
]

const testimonial = {
  quote:
    "Our enterprise pipeline was a black hole — deals would slip 90 days at a time because procurement timelines caught us off guard. Momenties gave every AE a reverse-engineered procurement calendar from day one of legal review. Average deal cycle dropped from 148 to 87 days in two quarters, and forecast accuracy went from ±22% to ±6%.",
  name: "Femi O.",
  title: "VP Enterprise Sales, B2B SaaS",
}

export default function EnterpriseSalesCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Enterprise Sales Calendar"
        title="Close Enterprise Deals 40% Faster with a Structured Sales Calendar"
        subtitle="A systematic enterprise sales calendar with multi-threading cadences, reverse-engineered procurement timelines, EBR scheduling, and weekly pipeline inspection rhythms that turn 90-day slippage into on-time closes."
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
            Four Systems That Accelerate Enterprise Deals
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
            Your 12-Month Enterprise Sales Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
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
            KPIs That Define Enterprise Sales Excellence
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
