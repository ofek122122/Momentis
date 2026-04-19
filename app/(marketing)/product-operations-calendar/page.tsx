import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product Operations Calendar | Momenties",
  description: "Build a systematic product operations calendar — roadmap review cycles, metrics governance programs, product health monitoring cadences, cross-functional coordination rhythms, and product quality reporting that keeps product teams aligned and shipping with confidence.",
}

const pillars = [
  {
    icon: Target,
    title: "Roadmap Review Cycles & Prioritization Governance Calendar",
    description:
      "Product roadmaps without a governance calendar drift into wishful thinking — stakeholders add requests without tradeoffs, engineering estimates age into fiction, and quarterly commitments are set without capacity validation. Momenties schedules monthly roadmap review sessions (updating estimates, reassessing priorities with new market data, and removing zombie projects that are no longer strategic), quarterly roadmap planning cycles (cross-functional alignment on the next 3-quarter plan with capacity validation against engineering capacity), and annual product strategy reviews (evaluating the 3-year horizon, market position, and capability investment priorities with executive leadership). Discovery sprint calendars — 2-week research cycles scheduled before major feature bets — are managed with customer interview scheduling, synthesis deadlines, and decision gate timelines. Competitive product intelligence reviews are scheduled bi-weekly to inform prioritization decisions.",
  },
  {
    icon: RefreshCw,
    title: "Product Metrics Governance & Data Quality Calendar",
    description:
      "Product metrics programs without governance produce vanity metrics that teams optimize for the wrong outcomes — and data quality issues that go undetected until a board presentation. Momenties schedules weekly product metrics reviews (activation rates, feature adoption, retention cohorts, and NPS by segment), monthly metrics governance audits (verifying tracking implementation accuracy, identifying instrumentation gaps, and validating metric definitions against engineering changes), and quarterly OKR progress reviews (measuring product key results against quarterly targets with owner accountability). Data quality sprints — systematic reviews of instrumentation coverage, event naming consistency, and attribution logic — are scheduled bi-annually before major analytics presentations. Product analytics tool stack reviews (data warehouse, product analytics platform, experiment platform) are conducted annually before contract renewals.",
  },
  {
    icon: TrendingUp,
    title: "Experimentation Program & Feature Release Cadence",
    description:
      "Experimentation without a governance cadence produces underpowered tests, inconclusive results, and teams that ship features without knowing whether they work. Momenties schedules weekly experiment reviews (running experiments, statistical significance monitoring, and decision-making on experiments reaching MDE), monthly experimentation retrospectives (reviewing test velocity, win rate, and learning quality against program targets), and quarterly experimentation program reviews (auditing test design quality, identifying HIPPO overrides that bypass experiment results, and calibrating MDE and confidence thresholds). Feature release calendars — gating releases behind adoption milestones, feedback collection windows, and quality thresholds before GA — are managed with auto-notification to stakeholders. Release notes and changelog cadences are aligned to sprint rhythms with publishing deadlines.",
  },
  {
    icon: BarChart3,
    title: "Product Quality Reviews & Cross-Functional Coordination Calendar",
    description:
      "Product quality without a measurement and review cadence generates reactive firefighting — bugs shipped to customers, performance regressions undetected until user complaints, and accessibility issues discovered in press coverage. Momenties schedules weekly product health dashboards (error rates, p99 latency, crash rates, and accessibility violations by feature area), monthly product quality retrospectives (reviewing incidents, customer-reported bugs, and regression patterns with engineering), and quarterly product portfolio reviews (evaluating feature utilization, deprecation candidates, and technical debt impact on product velocity). Cross-functional product coordination calendars — engineering sprint planning alignment, design system reviews, research synthesis presentations, and GTM readiness gates — are managed with owner assignments and dependency tracking. Annual product accessibility audits and third-party security reviews are timed before major product announcements.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Product Ops Audit & Governance Architecture",
    description: "Audit current roadmap process, metrics instrumentation, and experiment program quality; map cross-functional coordination gaps; build weekly metrics dashboard; establish monthly roadmap review cadence; implement experiment governance framework; define product health monitoring baselines.",
  },
  {
    month: "Month 3",
    title: "Metrics Governance Launch & Experimentation Program",
    description: "Launch monthly metrics governance audits; implement experimentation program calendar with weekly review cadence; establish feature release gating checklist; run first quarterly OKR progress review; implement product quality weekly health dashboard.",
  },
  {
    month: "Month 4–5",
    title: "Roadmap Governance & Cross-Functional Coordination",
    description: "Implement quarterly roadmap planning cycle with capacity validation; launch cross-functional coordination calendar (design, engineering, research, GTM); run first data quality sprint; establish competitive intelligence bi-weekly review; implement release notes cadence.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Product Portfolio Review",
    description: "Run mid-year product portfolio review (feature utilization, deprecation candidates, technical debt prioritization); present H1 experiment program retrospective (test velocity, win rate, learning quality); review OKR H1 performance; update roadmap with H2 market data.",
  },
  {
    month: "Month 7–9",
    title: "Annual Analytics Tool Review & Accessibility Audit",
    description: "Run annual product analytics tool stack review (renewal timing, capability gaps); complete semi-annual data quality sprint; run annual product accessibility audit; review experiment confidence thresholds against industry calibration; run product quality retrospective with engineering.",
  },
  {
    month: "Month 10–12",
    title: "Annual Product Strategy Review & Next-Year Planning",
    description: "Run annual product strategy review with executive leadership (3-year horizon, capability investments); present annual product operations report (metrics quality, experiment program maturity, roadmap forecast accuracy); lock next-year roadmap planning calendar; finalize OKR planning cycle.",
  },
]

const kpis = [
  {
    metric: "Roadmap Forecast Accuracy",
    target: "≥ 80% of quarterly commitments shipped",
    description: "Percentage of features committed in quarterly roadmap planning that ship in the planned quarter — below 60% indicates capacity planning failures or scope inflation; persistent forecast misses erode stakeholder trust and cross-functional planning reliability.",
  },
  {
    metric: "Experiment Win Rate",
    target: "≥ 30% of tests show positive lift",
    description: "Percentage of shipped experiments that produce statistically significant positive outcomes — below 20% indicates hypothesis quality problems or experiment design failures; above 50% may indicate shipping only obvious tests without bold bets.",
  },
  {
    metric: "Metrics Instrumentation Coverage",
    target: "≥ 95% of features tracked",
    description: "Percentage of production features with complete behavioral event tracking — below 85% coverage creates blind spots in product analytics; untracked features cannot be evaluated for adoption, performance, or deprecation decision-making.",
  },
  {
    metric: "Feature Adoption Rate (30-day)",
    target: "≥ 40% of eligible users",
    description: "Percentage of eligible users activating a new feature within 30 days of release — below 20% at 30 days indicates onboarding failure, discoverability problems, or product-market misalignment; track by user segment to identify adoption pattern differences.",
  },
  {
    metric: "Product Error Rate",
    target: "≤ 0.1% of user sessions",
    description: "Percentage of user sessions containing unhandled errors or crashes — above 0.5% indicates quality regression or insufficient pre-release testing; track error rate delta between releases to detect regressions early before customer impact accumulates.",
  },
  {
    metric: "Cross-Functional Coordination NPS",
    target: "≥ 7.5 / 10",
    description: "Engineering and design team satisfaction with product operations coordination quality — below 6.5 indicates coordination failures causing friction; product ops NPS below 6 suggests process problems that create delivery delays and stakeholder frustration.",
  },
]

const testimonial = {
  quote:
    "Our roadmap was a 200-item Jira backlog nobody trusted, our experiment program produced results we never acted on, and product metrics had instrumentation gaps that made half our dashboards unreliable. Engineering complained about coordination. Momenties gave us a product ops calendar. Roadmap forecast accuracy went from 41% to 82%, experiment win rate improved to 36%, and engineering NPS for product coordination went from 5.8 to 8.1.",
  name: "Chinyere A.",
  title: "Head of Product Operations, Series D SaaS Platform",
}

export default function ProductOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Product Operations Calendar"
        title="82% Roadmap Accuracy. 36% Experiment Win Rate. Engineering NPS 8.1."
        subtitle="A systematic product operations calendar with monthly roadmap reviews, weekly metrics governance, quarterly experimentation retrospectives, feature release gating cadences, and cross-functional coordination rhythms that keep product teams aligned and shipping with confidence."
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
            Four Systems That Build Product Operations Excellence
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
            Your 12-Month Product Operations Roadmap
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
            KPIs That Define Product Operations Maturity
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
