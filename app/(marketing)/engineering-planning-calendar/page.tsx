import type { Metadata } from "next"
import { Target, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Engineering Planning Calendar | Momenties",
  description: "Build a systematic engineering planning calendar — sprint and quarter planning cadence, architecture review cycles, technical debt sprints, and engineering metrics reviews that keep delivery velocity high and technical health measurable.",
}

const pillars = [
  {
    icon: Target,
    title: "Sprint Planning, Retro & Quarterly Engineering Planning",
    description:
      "Delivery consistency requires a disciplined planning calendar, not just a Jira board. Momenties maps the full engineering planning cycle: bi-weekly sprint kick-offs with pre-populated capacity templates, end-of-sprint retros with async action item capture, monthly engineering all-hands, and quarterly planning cycles where roadmap is re-scoped against team capacity and product priorities. Engineering manager 1:1s, performance review cycles, and career development check-ins are all scheduled proactively — before calendar conflicts compress them out of existence.",
  },
  {
    icon: Users,
    title: "Architecture Review & Design Doc Cadence",
    description:
      "Architecture decisions made without a review process create the technical debt that kills velocity 18 months later. Momenties schedules weekly architecture review committee (ARC) sessions for RFC submissions, quarterly system design reviews for high-traffic components, and annual technology radar updates where the stack is evaluated against current best practices. Design doc review SLAs — 48 hours for feedback, 5 business days for approval — are tracked with owner reminders before decisions fall through the cracks.",
  },
  {
    icon: TrendingUp,
    title: "Technical Debt & Reliability Investment Sprints",
    description:
      "Technical debt and reliability work never win priority battles against feature requests unless they have protected time on the calendar. Momenties schedules monthly tech debt sprints (typically 20% of engineering capacity), quarterly reliability investment weeks focused on SLOs, on-call burden reduction, and observability improvements, and annual security dependency update sprints. Post-incident review sessions are automatically queued within 5 business days of any P0/P1 incident — closing the reliability feedback loop before institutional memory fades.",
  },
  {
    icon: BarChart3,
    title: "Engineering Metrics Reviews & On-Call Health Monitoring",
    description:
      "Engineering health requires a metrics review cadence as much as a product velocity review. Momenties schedules weekly DORA metrics reviews (deployment frequency, lead time, change failure rate, MTTR), monthly on-call burden analysis to prevent alert fatigue and burnout, and quarterly engineering NPS surveys from within the team. Engineering metrics are compiled into monthly reports for the executive team — translating developer experience data into business risk language that CEOs and CFOs understand.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Planning Cadence Setup & Engineering Calendar Audit",
    description: "Map current planning ceremonies and identify gaps; establish bi-weekly sprint calendar; configure quarterly planning cycle; launch architecture review process and RFC template library.",
  },
  {
    month: "Month 3",
    title: "Q1 Planning & Technical Debt Backlog Grooming",
    description: "Execute first structured quarterly engineering planning; groom technical debt backlog with severity and effort scoring; establish 20% capacity policy for tech debt and present to product leadership.",
  },
  {
    month: "Month 4–6",
    title: "DORA Metrics Baseline & On-Call Review Launch",
    description: "Establish DORA metrics baseline (deployment frequency, lead time, change failure rate, MTTR); launch monthly on-call burden analysis; set SLO targets for top 10 critical services.",
  },
  {
    month: "Month 7",
    title: "Mid-Year Architecture Review & Tech Radar Update",
    description: "Conduct comprehensive system architecture review; update technology radar with adopt/trial/hold recommendations; assess technical debt portfolio against Q1-Q2 investment.",
  },
  {
    month: "Month 8–10",
    title: "Reliability Investment Quarter",
    description: "Execute quarterly reliability investment sprint; reduce top 5 on-call alert sources; improve P50/P99 latency targets; run annual security dependency audit and update sprint.",
  },
  {
    month: "Month 11–12",
    title: "Annual Engineering Review & Roadmap Planning",
    description: "Present annual engineering health report (DORA trends, technical debt velocity, on-call burden, team NPS); present to board on engineering capacity and technical risk; lock next-year staffing plan.",
  },
]

const kpis = [
  {
    metric: "Deployment Frequency",
    target: "Daily or higher (elite)",
    description: "Number of production deployments per day per service — elite DevOps teams deploy multiple times daily; below weekly suggests release process friction slowing feature delivery.",
  },
  {
    metric: "Change Failure Rate",
    target: "≤ 5%",
    description: "Percentage of deployments causing production incidents — elite teams maintain below 5%; above 15% signals insufficient pre-production testing or deployment process gaps.",
  },
  {
    metric: "Mean Time to Restore (MTTR)",
    target: "≤ 1 hour",
    description: "Average time to restore service after production incident — elite teams restore in under 1 hour; above 24 hours indicates monitoring gaps or unclear incident response ownership.",
  },
  {
    metric: "Technical Debt Ratio",
    target: "≤ 20% of sprint capacity",
    description: "Percentage of sprint capacity spent on tech debt — below 10% means debt is accumulating; above 30% means product velocity is being sacrificed for remediation.",
  },
  {
    metric: "On-Call Alert Fatigue Score",
    target: "≤ 2 actionable alerts/shift",
    description: "Average actionable alerts per on-call engineer per shift — above 10/shift indicates alert tuning failure and creates burnout risk for engineering retention.",
  },
  {
    metric: "Engineering NPS",
    target: "≥ 7 / 10 quarterly",
    description: "Internal engineering satisfaction score — below 6 indicates developer experience, tools, or planning process issues that will compound into retention risk within 6 months.",
  },
]

const testimonial = {
  quote:
    "We had great engineers but terrible planning discipline — quarterly planning happened in week 10 of the quarter, architecture reviews blocked on one VP&apos;s calendar, and tech debt was always &apos;next sprint.&apos; Momenties gave our engineering org a structured calendar. Deployment frequency tripled in 6 months, change failure rate dropped from 18% to 6%, and we haven&apos;t had a P0 in four months.",
  name: "Tayo A.",
  title: "VP Engineering, Series C SaaS",
}

export default function EngineeringPlanningCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Engineering Planning Calendar"
        title="Deploy Daily. Reduce Change Failures. Zero Tech Debt Surprises."
        subtitle="A systematic engineering planning calendar with sprint cadences, architecture review cycles, protected tech debt sprints, and DORA metrics reviews that translate planning discipline into measurably faster delivery."
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
            Four Systems That Build Engineering Delivery Excellence
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
            Your 12-Month Engineering Planning Roadmap
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
            DORA Metrics & Engineering Health KPIs
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
