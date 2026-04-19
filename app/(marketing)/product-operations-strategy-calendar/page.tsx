import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product Operations Strategy Calendar | Momenties",
  description: "Momenties helps VP Product and product operations leaders track product planning cycles, roadmap review cadences, user research programs, pricing review calendars, and product team development in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Product Planning Cycles, OKR Setting & Roadmap Governance Calendar",
    description:
      "Product roadmaps without structured planning cadences produce reactive backlog management — product teams without annual planning processes spend 40% more time in unplanned stakeholder management meetings than those with quarterly roadmap governance. Annual product planning calendar: Q3 strategy review and theme setting, Q4 annual product planning (bottoms-up team capacity, top-down strategic initiative alignment), January roadmap publication and stakeholder communication, and quarterly roadmap review (January, April, July, October) with OKR progress check-in. Quarterly OKR planning: product team OKR setting (T-30 before quarter start), OKR alignment check-in with engineering and design (T-14), quarter-start OKR publication, mid-quarter OKR health check (week 6), and end-of-quarter OKR review (week 12). Annual product strategy presentation to board (8-12 week preparation cycle): market positioning, competitive analysis, 3-year product vision, and capability investment thesis. Momenties manages the full product planning and roadmap calendar.",
  },
  {
    icon: RefreshCw,
    title: "User Research Programs, Discovery Cadence & Customer Feedback Calendar",
    description:
      "Product discovery without structured research cadences produces feature factories — product teams with fewer than 4 user research cycles per quarter are 3x more likely to ship features with low adoption than teams maintaining weekly discovery touchpoints. User research calendar: weekly discovery sessions (2-3 user interviews per product manager per week during discovery sprints), monthly usability testing (5-8 participant sessions for major feature launches), quarterly user panel review (30-50 NPS survey respondents for deep feedback sessions), and annual customer advisory board (2-day event, 20-30 strategic customers). Customer feedback analysis cadence: weekly NPS comment analysis and tagging, monthly support ticket theme analysis (product pain point extraction), quarterly user research synthesis presentation to leadership, and annual Voice of Customer program report. Feature adoption monitoring: 30-day, 60-day, and 90-day adoption metrics for all major feature launches with retrospective analysis. Beta program governance: monthly beta cohort review, quarterly beta program refresh. Momenties schedules every research and discovery cycle.",
  },
  {
    icon: TrendingUp,
    title: "Pricing Review Cycles, Packaging Strategy & Monetization Calendar",
    description:
      "Pricing strategies reviewed less frequently than annually lose an average of 8-12% of available revenue through unaddressed willingness-to-pay gaps — and companies that test pricing continuously achieve 15-20% higher revenue per user than static pricers. Annual pricing review calendar: competitive pricing intelligence audit (Q1), willingness-to-pay research (conjoint analysis or Van Westendorp, Q2), packaging optimization analysis (Q3, evaluating feature-tier alignment with segment needs), and annual pricing model review with CFO (Q4, evaluating expansion revenue potential). Pricing experiment calendar: monthly pricing A/B test design and launch, 60-90 day test evaluation window, and quarterly pricing test portfolio review. Freemium-to-paid conversion analysis (monthly): funnel analytics by acquisition channel, conversion rate by usage pattern, and monetization touchpoint optimization. Enterprise pricing governance: annual enterprise tier review, custom contract pricing governance (monthly win/loss review with sales team). Annual packaging refresh: feature rationalization (deprecated features, new tier additions). Momenties tracks every pricing and monetization review cycle.",
  },
  {
    icon: BarChart3,
    title: "Product Analytics Review, Toolstack Governance & PM Career Development",
    description:
      "Product analytics programs without review cadences accumulate dashboard debt — product teams at Series C+ stage average 200+ product dashboards, with 60% rarely accessed after initial creation. Monthly product analytics review: DAU/WAU/MAU trends, feature-level adoption metrics, cohort retention analysis, and funnel conversion rate monitoring. Quarterly product toolstack review: feature flags platform utilization (LaunchDarkly, Optimizely, Statsig), analytics platform ROI (Mixpanel, Amplitude, Heap), and feedback management tool effectiveness. Annual product metrics framework review: ensuring OKR-metric alignment, sunsetting orphaned metrics, and updating leading indicator definitions as product evolves. PM career development: quarterly growth conversations (product craft skills, leadership skills, domain expertise), annual PM career level assessment, quarterly PM training program coordination (Reforge, Lenny&apos;s Newsletter, Continuous Discovery Habits), and annual PM conference calendar (Mind the Product, ProductCon — abstract submission typically 4-6 months advance). Annual product team structure review: squad composition, PM-to-engineering ratio analysis, and specialist role planning. Momenties consolidates the full product operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Roadmap Publication & Q1 OKR Launch",
    description: "Publish annual product roadmap and communicate to stakeholders. Launch Q1 OKRs with cross-functional alignment. Complete annual pricing competitive audit. Run Q1 user research sprint planning. Kick off annual product strategy board presentation preparation.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 OKR Review & Pricing Research Launch",
    description: "Complete Q1 OKR review and Q2 OKR setting. Launch annual willingness-to-pay research (conjoint analysis or Van Westendorp). Run monthly usability testing for Q2 major feature launches. Complete Q1 product analytics review. Review beta program cohort and refresh participants.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Roadmap Review & User Research Synthesis",
    description: "Conduct H1 roadmap health review and stakeholder communication. Complete semi-annual Voice of Customer synthesis presentation. Review pricing experiment portfolio from H1 tests. Run H1 product toolstack ROI review. Hold semi-annual customer advisory board session.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 OKR Review & Packaging Strategy",
    description: "Complete Q2 OKR review and Q3 OKR setting. Launch annual packaging optimization analysis. Run quarterly PM career development reviews. Review annual board strategy presentation structure. Complete Q2 product analytics deep dive with cohort analysis.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Product Planning Launch & Strategy Prep",
    description: "Launch annual product planning cycle (Q3 strategy review). Begin annual board strategy presentation preparation. Run Q3 OKR review and Q4 OKR setting. Complete annual product metrics framework review. Start PM conference abstract submissions (Mind the Product, ProductCon).",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual Pricing Review & Next-Year Roadmap Lock",
    description: "Complete annual pricing model review with CFO. Lock next-year product roadmap and communicate to engineering and design. Run annual customer advisory board (2-day event). Complete annual PM performance reviews. Deliver annual product strategy presentation to board.",
  },
]

const kpis = [
  {
    metric: "Feature Adoption Rate ≥ 40% at 30 Days",
    description: "Percentage of target users adopting major features within 30 days of launch; below 25% at 60 days triggers retrospective and improvement plan",
  },
  {
    metric: "OKR Completion Rate ≥ 70% Quarterly",
    description: "Percentage of quarterly OKRs rated as met or exceeded; below 60% signals planning process issues or execution capacity constraints",
  },
  {
    metric: "Product NPS ≥ 40",
    description: "Product-level Net Promoter Score from quarterly user panel; below 30 signals systemic product quality or value delivery issue",
  },
  {
    metric: "Discovery-to-Delivery Ratio ≥ 1:3",
    description: "Weeks in product discovery versus delivery per quarter; below 1:5 signals under-investment in discovery and elevated shipping-wrong-thing risk",
  },
  {
    metric: "Roadmap Delivery Rate ≥ 80% Quarterly",
    description: "Planned roadmap items delivered on schedule per quarter; below 65% consistently signals capacity planning or scope management issue",
  },
  {
    metric: "User Research Cadence ≥ 4 Studies/Quarter",
    description: "Completed user research studies per quarter per product team; below 2 studies per quarter correlates with lower feature adoption metrics",
  },
]

const testimonial = {
  quote:
    "Quarterly roadmap reviews for 6 product squads, annual pricing review with willingness-to-pay research, monthly usability testing for major features, quarterly user panels, twice-annual customer advisory board, weekly NPS analysis and support ticket synthesis, monthly beta cohort reviews, quarterly PM career conversations for 14 PMs, annual product strategy board presentation, OKR planning cycles across 4 quarters, annual product toolstack ROI review, PM conference abstract submission deadlines, and quarterly product analytics deep dives — all tracked in Notion. Momenties organized everything. Our feature adoption rate went from 28% to 51% at 30 days.",
  name: "Taiwo P.",
  title: "VP Product, Series C SaaS Platform",
}

export default function ProductOperationsStrategyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Product Operations Strategy Calendar"
        title="Roadmap Planning. User Research. Pricing Reviews. One Calendar."
        subtitle="Momenties tracks quarterly roadmap review cycles, annual product planning windows, weekly user research cadences, monthly usability testing programs, customer advisory board schedules, annual pricing willingness-to-pay research, packaging strategy review cycles, PM career development conversations, and product toolstack governance so product leaders run high-performing product organizations without planning gaps."
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
            Four Product Operations Pillars Momenties Tracks
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
            12-Month Product Operations Calendar
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
            Product Operations KPIs Momenties Keeps on Track
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
