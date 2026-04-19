import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product Design Calendar | Momenties",
  description: "Momenties helps product design leaders track design sprint cycles, user research cadences, design system maintenance reviews, accessibility audit schedules, and design team performance reviews in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Design Sprint Cycles, Research Planning & UX Roadmap Governance",
    description:
      "Product design programs run on cadenced discovery and delivery cycles — and teams without structured research calendars become reactive, shipping features without validated insights. Quarterly design sprint planning: research questions scoped to product roadmap bets, sprint team composition, and prototype testing windows. User research recruiting calendars require 2-3 week lead times for participant recruitment, scheduling, and compensation logistics. Quarterly UX roadmap reviews — aligning design priorities with engineering capacity and product strategy — require cross-functional attendance and 1-week pre-read distribution. Annual design strategy review (goals, team capabilities, tooling, and process maturity) requires 4-6 weeks of team input and stakeholder synthesis. Momenties manages every research and design governance milestone.",
  },
  {
    icon: RefreshCw,
    title: "Design System Maintenance & Component Library Review Calendar",
    description:
      "Design systems without a maintenance calendar accumulate inconsistencies that compound into technical debt and designer productivity loss — Figma component drift, documentation gaps, and token mismatches erode system value within 6 months of launch. Quarterly design system audits: component coverage review (new product areas without design system coverage), usage analytics review (which components are adopted vs. abandoned), and token consistency audit between Figma and code implementation. Monthly design system changelog review: communicating breaking changes to design and engineering teams with migration guides. Semi-annual design system contributor training: ensuring new designers and engineers can contribute and extend the system correctly. Annual design system maturity assessment: benchmarking against Nielsen Norman and Figma Design System standards. Momenties tracks every system review cycle.",
  },
  {
    icon: TrendingUp,
    title: "Accessibility Audit Cycles, WCAG Compliance & Inclusive Design Reviews",
    description:
      "WCAG 2.2 compliance requires structured audit cycles — products that pass accessibility audits at launch regress within 6 months without continuous review. Quarterly accessibility audits (automated + manual): axe-core automated scan results review, screen reader testing (NVDA, JAWS, VoiceOver) for critical user flows, color contrast compliance audit, and keyboard navigation testing. Annual third-party accessibility audit (WCAG 2.2 AA conformance assessment) — required for enterprise contracts and ADA litigation risk management — requires 4-6 weeks of vendor coordination and remediation planning. Inclusive design review sessions (bi-annual) — evaluating new features against disability inclusion frameworks — require cross-functional participation from engineering, legal, and product. VPAT (Voluntary Product Accessibility Template) annual refresh required for enterprise sales and government contracts. Momenties schedules every audit and review.",
  },
  {
    icon: BarChart3,
    title: "Usability Testing Cadence, Design Metrics & Team Development Reviews",
    description:
      "Design metrics reporting — task completion rates, time-on-task for critical flows, error rates, SUS (System Usability Scale) scores, and design-to-development handoff quality ratings — requires monthly compilation and quarterly leadership reporting. Quarterly design critique and peer review sessions (cross-team design reviews, portfolio critique for ICs, design leadership synthesis) are discipline investments that prevent quality drift. Designer career development cadence: monthly 1:1 portfolio reviews for ICs, quarterly goal check-ins tied to IC levels, and bi-annual promotion cycle preparation. Annual design portfolio review for the organization: showcasing design impact on business metrics, accessibility improvements, and design system maturity for executive and board visibility. Momenties consolidates the full design operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Design Strategy & Q1 Research Calendar",
    description: "Complete annual design strategy review and communicate priorities to team. Lock Q1 research calendar with recruiting timelines. Run design system annual maturity assessment. Set annual design metrics baselines. Launch new IC development plans.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Accessibility Audit & Design System Review",
    description: "Run Q1 accessibility audit (automated + manual testing). Complete Q1 design system component review. Conduct first quarterly UX roadmap review with product and engineering. Run mid-Q1 usability testing sessions for shipped features.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Design Review & Research Synthesis",
    description: "Conduct H1 design program retrospective. Synthesize Q1-Q2 research findings into actionable insights. Run semi-annual inclusive design review. Complete design-to-engineering handoff quality audit. Run bi-annual designer career development reviews.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Mid-Year Design System Audit & Annual Accessibility Assessment",
    description: "Run Q3 design system audit focusing on new product area coverage. Coordinate annual third-party accessibility audit (WCAG 2.2 AA). Refresh Q3 research calendar. Review design tool stack ROI and renewal timelines.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 UX Review & Promotion Cycle Preparation",
    description: "Conduct Q3 UX roadmap review and Q4 priority setting. Begin IC promotion cycle preparation (6 weeks before company promotion window). Run Q3 cross-team design critique. Refresh VPAT for enterprise sales support.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Design Impact Review & Next-Year Planning",
    description: "Compile annual design impact report (business outcomes, accessibility improvements, design system adoption). Present to executive team. Complete Q4 accessibility audit. Lock next-year design strategy, headcount, and tooling budget.",
  },
]

const kpis = [
  {
    metric: "User Research Velocity ≥ 4 Studies/Quarter",
    description: "Validated research studies completed per quarter, measured across discovery and usability testing",
  },
  {
    metric: "Design System Adoption ≥ 80% of New Features",
    description: "Percentage of shipped features using design system components versus custom/one-off implementations",
  },
  {
    metric: "WCAG 2.2 AA Compliance ≥ 95% Critical Flows",
    description: "Percentage of primary user flows passing automated and manual WCAG 2.2 AA accessibility testing",
  },
  {
    metric: "SUS Score ≥ 75 (Good Usability)",
    description: "System Usability Scale score for primary product flows; below 68 indicates usability intervention needed",
  },
  {
    metric: "Design-to-Dev Handoff Rework Rate ≤ 10%",
    description: "Percentage of design specs requiring significant revision after engineering implementation begins",
  },
  {
    metric: "Design Metrics Reporting 100% On-Time Monthly",
    description: "Monthly design metrics report delivered to leadership within 5 business days of month end",
  },
]

const testimonial = {
  quote:
    "Quarterly user research calendars with 3-week recruiting lead times, quarterly design system reviews, Q1 and Q3 accessibility audits, an annual third-party WCAG audit, semi-annual inclusive design reviews, VPAT annual refresh, monthly design metrics for four stakeholders, and IC promotion prep cycles — all managed in Linear and Notion. Momenties organized everything. Our design team research velocity went from 2 studies per quarter to 5 within two quarters.",
  name: "Adaeze F.",
  title: "VP Product Design, Series B B2B SaaS",
}

export default function ProductDesignCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Product Design Calendar"
        title="Design Sprints. Accessibility Audits. Design System Reviews. One Calendar."
        subtitle="Momenties tracks user research recruitment timelines, quarterly design sprint cycles, design system maintenance reviews, WCAG accessibility audit schedules, annual third-party conformance assessments, VPAT refresh cycles, and design team development cadences so product design leaders ship great work without operational chaos."
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
            Four Product Design Pillars Momenties Tracks
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
            12-Month Product Design Calendar
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
            Product Design KPIs Momenties Keeps on Track
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
