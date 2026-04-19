import type { Metadata } from "next"
import { Rocket, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Demand Generation Calendar | Momenties",
  description: "Build a systematic demand generation calendar — quarterly campaign planning cycles, content-to-pipeline programs, paid media optimization cadences, ABM account reviews, and pipeline contribution reporting rhythms that predictably fill the sales funnel.",
}

const pillars = [
  {
    icon: Rocket,
    title: "Quarterly Campaign Planning & Launch Calendar",
    description:
      "Demand generation campaigns launched without a structured planning calendar miss the moments that drive pipeline — product launches ship without demand gen support, seasonal buying cycles pass without coverage, and competitive displacement opportunities are left to chance. Momenties schedules quarterly campaign planning sessions (6 weeks before quarter start) with ICP targeting review, message testing matrix, and channel mix planning. Campaign launch calendars — with milestone gates for creative completion, channel activation, and SDR alert workflows — ensure pipeline contribution starts on day one. Post-campaign retrospectives (4 weeks after completion) capture channel efficiency, message resonance, and pipeline conversion data that inform the next planning cycle. Integrated campaign calendars across paid, organic, event, and ABM channels prevent resource conflicts.",
  },
  {
    icon: RefreshCw,
    title: "Content-to-Pipeline Programs & Nurture Sequence Refresh",
    description:
      "Content investments without pipeline attribution are a budget liability — and nurture sequences built at launch lose relevance as product positioning, competitive landscape, and buyer objections evolve. Momenties schedules monthly content performance reviews (analyzing which assets generate MQLs and accelerate pipeline velocity), quarterly nurture sequence audits (updating email copy, offer positioning, and CTA timing based on conversion data), and semi-annual full content strategy reviews where low-performing assets are retired and high-performing formats are scaled. Gated content offers — ebooks, webinars, tools, calculators — are refreshed on a rolling 6-month cycle to prevent offer fatigue. Thought leadership cadences (executive bylines, analyst briefing prep, podcast guesting) are calendared 8-12 weeks in advance with content development milestones.",
  },
  {
    icon: TrendingUp,
    title: "Paid Media Optimization Cadence & Budget Reallocation",
    description:
      "Paid media budgets without an optimization cadence decay in efficiency — CPL increases 20-30% within a quarter without active creative rotation, audience refresh, and bid strategy updates. Momenties schedules weekly paid media performance reviews (CPL by channel, creative fatigue signals, conversion rate by offer), bi-weekly creative refresh cycles (new ad variants launched before frequency caps cause engagement drops), and monthly cross-channel budget reallocation sessions where spend shifts to highest-pipeline-efficiency channels. Quarterly channel strategy reviews — evaluating Google Ads, LinkedIn, Meta, programmatic, and review site categories against pipeline contribution data — guide budget planning. Annual paid media audits (agency performance review, keyword strategy update, audience targeting refresh) are timed for budget planning season.",
  },
  {
    icon: BarChart3,
    title: "ABM Account Reviews & Pipeline Contribution Reporting",
    description:
      "Account-based marketing programs without a structured review cadence stall — target account lists become stale, engagement signals go unactioned, and pipeline contribution claims lack credibility with sales leadership. Momenties schedules monthly ABM account engagement reviews (intent data spikes, website activity, content consumption by account), quarterly target account list refreshes (adding new accounts based on ICP fit scoring, removing accounts that have churned or been disqualified), and bi-annual ABM program reviews with sales leadership comparing pipeline generated from ABM accounts vs. non-ABM accounts. Pipeline contribution reporting — weekly for the demand gen team, monthly for marketing leadership, and quarterly for the board — tracks MQL volume, SQL conversion, pipeline generated, and influenced revenue with channel-level attribution. Campaign ROI dashboards are reviewed monthly against CPL and cost-per-pipeline benchmarks.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Demand Gen Audit & Campaign Architecture",
    description: "Audit current pipeline sources and channel performance; map historical CPL and conversion rates by channel; establish quarterly campaign planning process; build 12-month campaign calendar; define ABM target account list and engagement scoring model.",
  },
  {
    month: "Month 3",
    title: "Q1 Campaign Launch & Paid Media Optimization Setup",
    description: "Launch first structured quarterly campaign with full creative and channel coverage; establish weekly paid media review cadence; launch ABM engagement monitoring; run first content performance review; implement pipeline attribution dashboard.",
  },
  {
    month: "Month 4–5",
    title: "Nurture Sequence Audit & Channel Efficiency Review",
    description: "Run first quarterly nurture sequence audit; update email sequences based on conversion data; complete first cross-channel budget reallocation based on Q1 pipeline data; launch thought leadership content calendar; run first ABM account list refresh.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Pipeline Review & H2 Planning",
    description: "Present mid-year pipeline contribution report (channel efficiency, MQL-to-SQL conversion, pipeline generated vs. plan); run content strategy review; reallocate H2 budget based on H1 channel performance; update ABM program with sales leadership.",
  },
  {
    month: "Month 7–9",
    title: "Creative Refresh Sprint & ABM Program Expansion",
    description: "Run full creative refresh across all paid channels; complete semi-annual content library refresh (retire low-performers, scale winners); expand ABM account list for Q4 campaigns; run quarterly campaign retrospective; update nurture sequences with new product messaging.",
  },
  {
    month: "Month 10–12",
    title: "Annual Review & Next-Year Campaign Planning",
    description: "Present annual demand gen ROI report (pipeline generated, cost-per-pipeline, channel efficiency); run annual paid media audit; complete ABM annual program review with sales; lock next-year campaign calendar and budget allocation; finalize agency and tool contracts.",
  },
]

const kpis = [
  {
    metric: "Marketing-Sourced Pipeline",
    target: "≥ 40% of total pipeline",
    description: "Percentage of sales pipeline with first touch attributed to marketing — below 30% suggests demand gen is under-resourced or attribution methodology gaps; best-in-class B2B SaaS teams drive 40-60% of pipeline from marketing programs.",
  },
  {
    metric: "Cost Per Pipeline Opportunity",
    target: "≤ 3× average deal size/10",
    description: "Total demand gen spend divided by pipeline opportunities created — above benchmark CPP indicates channel inefficiency or ICP targeting problems; track by channel to identify where budget reallocation improves pipeline economics.",
  },
  {
    metric: "MQL Volume vs. Plan",
    target: "Within ±10% of monthly target",
    description: "Monthly MQL volume versus forecast — above ±20% variance indicates demand gen forecasting or campaign execution problems; consistent underperformance triggers channel mix review and campaign acceleration.",
  },
  {
    metric: "Paid Media CPL Trend",
    target: "Flat or declining quarter-over-quarter",
    description: "Cost per lead from paid channels quarter-over-quarter — rising CPL above 15% QoQ without increased TAM signals creative fatigue, audience saturation, or competitive bid pressure requiring immediate creative refresh and audience expansion.",
  },
  {
    metric: "ABM Account Engagement Rate",
    target: "≥ 35% of target accounts engaged",
    description: "Percentage of target accounts with measurable engagement (website visits, content downloads, webinar attendance, or intent signal) in the trailing quarter — below 20% engagement rate suggests ABM personalization or channel coverage gaps.",
  },
  {
    metric: "Content-to-Pipeline Attribution",
    target: "≥ 60% of MQLs content-influenced",
    description: "Percentage of MQLs that engaged with at least one content asset before conversion — below 40% indicates content is not integrated into demand gen programs or content offers are misaligned with buyer journey stages.",
  },
]

const testimonial = {
  quote:
    "We had campaigns running ad hoc, a paid media budget with no optimization cadence, a nurture sequence last updated in 2022, and ABM target accounts that sales hadn&apos;t reviewed in a year. Momenties gave us a structured demand gen calendar. Pipeline sourced from marketing went from 22% to 47% of total in three quarters, and for the first time demand gen had credibility in the revenue review.",
  name: "Chidinma O.",
  title: "VP Demand Generation, Series C B2B SaaS",
}

export default function DemandGenerationCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Demand Generation Calendar"
        title="Predictable Pipeline. 47% Marketing-Sourced. One Calendar."
        subtitle="A systematic demand generation calendar with quarterly campaign planning cycles, content-to-pipeline programs, paid media optimization cadences, ABM account engagement reviews, and pipeline contribution reporting rhythms that predictably fill the sales funnel and give demand gen teams budget credibility."
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
            Four Systems That Build Demand Generation Excellence
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
            Your 12-Month Demand Generation Roadmap
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
            KPIs That Define Demand Generation Program Maturity
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
