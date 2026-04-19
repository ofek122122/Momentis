import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Engineering Team Calendar | Momenties",
  description: "Momenties helps VPs of Engineering and CTOs track sprint ceremonies, technical debt review cycles, on-call rotation health, architecture review cadences, and engineering org performance reviews in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Sprint Ceremonies, Release Cadence & Engineering Rhythm Design",
    description:
      "Engineering team operating cadence starts with the sprint — and most engineering organizations have inconsistent ceremony execution that degrades velocity over time. Sprint planning (first day of sprint), daily standup, sprint review (last Friday), and retrospective (final day) require zero-friction scheduling that auto-recurs across team time zones. Release cadence governance — weekly deploys, feature flag review meetings, and rollback go/no-go ceremonies — requires advance scheduling to avoid conflicts with on-call rotations and sprint boundaries. Quarterly roadmap refinement sessions (3-4 hours, involving product, design, and engineering leads) require 2-week advance scheduling with pre-read material distribution. Annual engineering strategy day (full engineering org offsite or virtual, typically January) requires 6-8 weeks of preparation. Momenties manages every recurring ceremony and milestone.",
  },
  {
    icon: RefreshCw,
    title: "Technical Debt Review Cycles & Architecture Decision Records",
    description:
      "Technical debt without a structured review process compounds — and engineering organizations that defer tech debt reviews consistently miss quality targets and accumulate performance degradation. Quarterly tech debt review sessions — identifying and prioritizing debt items, estimating remediation effort, and allocating sprint capacity (typically 10-20% of velocity) — require cross-team engineering lead participation. Architecture review board (ARB) for major technical decisions (new services, data model changes, infrastructure migrations) requires 1-2 week RFC (Request for Comment) review periods before decisions are finalized. Annual system design review — mapping service boundaries, identifying scalability bottlenecks, and auditing dependency graphs — requires 4-6 week coordination. SLA and reliability target reviews (quarterly) align uptime commitments with current infrastructure capacity. Momenties tracks every review cycle.",
  },
  {
    icon: TrendingUp,
    title: "On-Call Rotation Health, Incident Reviews & SRE Cadence",
    description:
      "On-call program health requires continuous calendar discipline: weekly on-call handoff meetings, monthly on-call health reviews (alert volume, pager fatigue analysis, MTTD/MTTR trends), and quarterly on-call rotation reviews (ensuring equitable distribution and burnout prevention). Post-incident review (PIR) SLAs — P1 incidents require PIR within 48 hours of resolution, P2 within 1 week — require standing calendar capacity. Quarterly game day / chaos engineering exercises (injecting controlled failures to validate resilience) require 3-4 weeks of environment preparation and rollback planning. Annual incident retrospective (full-year incident pattern analysis) informs SLA revision and infrastructure investment decisions for the following year. Runbook review cycles (quarterly) prevent documentation decay. Momenties manages every SRE cadence.",
  },
  {
    icon: BarChart3,
    title: "Engineering Metrics Reporting, Hiring Reviews & Career Development Cadence",
    description:
      "Engineering org performance reporting — DORA metrics (deployment frequency, lead time for changes, MTTR, change failure rate), velocity trends, and technical debt ratio — requires weekly automated dashboards and monthly VP/CTO reporting. Annual engineering org review with the CEO/board presents engineering capacity, delivery velocity, and reliability data in business outcome terms. Engineering hiring review (quarterly) — headcount utilization against plan, recruiter pipeline health, and interview-to-offer conversion rates — aligns hiring execution with product roadmap commitments. Engineering career development cadence: quarterly 1:1 development plan check-ins (mandatory for ICs with more than 6 months tenure), bi-annual skip-level meetings, and annual promotion cycle preparation (calibration sessions 6 weeks before company promotion window). Momenties consolidates the full engineering operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Engineering Strategy & Q1 Roadmap Lock",
    description: "Run annual engineering strategy session. Lock Q1 roadmap and distribute to engineering teams. Set annual DORA metric baselines and reliability targets. Review on-call rotation structure and alert hygiene. Complete quarterly architecture review board charter renewal.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Tech Debt Review & Hiring Plan Execution",
    description: "Conduct Q1 technical debt review and allocate remediation capacity in sprints. Run Q1 engineering metrics review with product and CTO. Complete first quarterly on-call health review. Activate approved engineering headcount from annual plan. Run Q1 skip-level meetings for engineering managers.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Engineering Review & Game Day Execution",
    description: "Conduct H1 engineering org performance review. Run Q2 game day / chaos engineering exercise. Complete Q2 tech debt review. Begin H2 roadmap planning with product and design. Run bi-annual performance check-ins for engineering ICs.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Architecture Review & On-Call Burnout Audit",
    description: "Run quarterly architecture review board for H2 initiatives. Complete on-call pager fatigue audit and rotation rebalancing. Review SLA targets against H1 incident data. Begin annual system design review preparation. Complete Q2 engineering hiring pipeline review.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 Tech Debt Review & Promotion Calibration",
    description: "Conduct Q3 technical debt review and prioritize Q4 remediation. Begin annual promotion calibration sessions (6 weeks before company promotion window). Run Q3 skip-level meetings. Complete annual system design review. Begin annual engineering strategy preparation for January.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual Incident Retrospective & Next-Year Planning",
    description: "Deliver annual incident retrospective and SLA revision recommendations. Complete annual engineering org review deck for CEO/board. Lock next-year roadmap and headcount plan. Run end-of-year team retrospective. Complete full-year DORA metrics analysis and baseline reset.",
  },
]

const kpis = [
  {
    metric: "Deployment Frequency ≥ 1/Day (Elite)",
    description: "DORA elite metric: deployments to production daily or multiple times per day per service",
  },
  {
    metric: "Lead Time for Changes ≤ 1 Day (Elite)",
    description: "Time from code commit to production deployment; measures CI/CD pipeline efficiency",
  },
  {
    metric: "Change Failure Rate ≤ 5%",
    description: "Percentage of deployments causing degraded service requiring hotfix, rollback, or patch",
  },
  {
    metric: "MTTR ≤ 1 Hour for P1 Incidents",
    description: "Mean time to restore service after P1 production incident; tracked monthly against SLA",
  },
  {
    metric: "Technical Debt Ratio ≤ 15% of Sprint Capacity",
    description: "Sprint velocity allocated to debt remediation versus new feature development, tracked quarterly",
  },
  {
    metric: "On-Call Alert Volume Declining QoQ",
    description: "Actionable alert volume per engineer per week; sustained growth indicates missing automation",
  },
]

const testimonial = {
  quote:
    "Quarterly tech debt reviews, monthly on-call health reviews, weekly PIR SLAs for P1 incidents, quarterly architecture reviews, game days, annual system design reviews, promotion calibration cycles, DORA metrics reporting, and roadmap planning sessions for eight teams — all tracked in Notion docs and calendar invites that constantly got moved. Momenties organized everything. Our deployment frequency went from three times a week to twice a day within one quarter.",
  name: "Emeka C.",
  title: "VP Engineering, Series C Developer Tools Company",
}

export default function EngineeringTeamCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Engineering Team Calendar"
        title="Sprint Ceremonies. Tech Debt Reviews. On-Call Health. One Calendar."
        subtitle="Momenties tracks sprint ceremony cadences, quarterly technical debt review cycles, architecture review board schedules, on-call rotation health reviews, game day planning, DORA metrics reporting, and engineering promotion calibration cycles so engineering leaders run high-performing teams without operational chaos."
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
            Four Engineering Operations Pillars Momenties Tracks
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
            12-Month Engineering Team Calendar
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
            Engineering KPIs Momenties Keeps on Track
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
