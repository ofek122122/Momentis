import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Media Buying Calendar | Momenties",
  description: "Build a systematic media buying calendar — channel planning and upfront commitment cycles, creative testing cadence, budget pacing reviews, and attribution reporting that optimizes media spend across paid search, social, programmatic, and CTV.",
}

const pillars = [
  {
    icon: Target,
    title: "Channel Planning & Upfront Commitment Calendar",
    description:
      "Media efficiency starts with planning ahead of the market. Programmatic upfront commitments, CTV/OTT deal negotiations, and high-CPM Q4 inventory lock-ins require media buying decisions 90-120 days in advance of campaign flights. Momenties maps the full media planning calendar: annual upfront planning in Q3, channel mix reviews tied to quarterly budget cycles, creative lead times per channel, and publisher deal deadline windows — ensuring media buyers never pay premium CPMs for inventory they could have locked at upfront rates.",
  },
  {
    icon: RefreshCw,
    title: "Creative Testing & Rotation Cadence",
    description:
      "Creative fatigue is the silent killer of media performance — most campaigns lose 30-50% of effectiveness at 6-8 weeks without fresh creative. Momenties schedules creative rotation reviews at 4-week intervals per channel, queues creative production briefs 6 weeks before rotation deadlines, tracks creative performance by variant and audience segment, and surfaces statistical significance thresholds so media buyers rotate on data rather than gut. New creative briefs are automatically triggered when a winner shows diminishing returns.",
  },
  {
    icon: TrendingUp,
    title: "Budget Pacing & Bid Strategy Review",
    description:
      "Pacing failures — underspending in Q1-Q3, overspending in Q4 to hit annual numbers — destroy media efficiency and annual ROAS targets. Momenties schedules weekly pacing check-ins against monthly delivery targets, monthly bid strategy reviews as auction dynamics shift, and quarterly budget reallocation windows where spend moves from underperforming channels to outperformers. Automated pacing alerts trigger when a channel is 10% ahead or behind plan, enabling mid-flight corrections before variance compounds.",
  },
  {
    icon: BarChart3,
    title: "Attribution Reviews & Media Mix Modeling",
    description:
      "Cross-channel attribution is the most underinvested capability in most media programs. Momenties schedules quarterly attribution model validation reviews, annual media mix modeling (MMM) runs aligned with budget planning cycles, and incrementality test windows for major channels — ensuring media budgets are allocated on measured contribution rather than last-click proxies. Post-campaign reporting is scheduled within 2 weeks of campaign end, with standardized templates that enable YoY performance comparison across all channels.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Media Audit & Annual Channel Planning",
    description: "Audit prior-year media performance by channel, CPM, CPC, ROAS, and incrementality; complete annual media mix recommendation; negotiate upfront programmatic and CTV commitments for Q3-Q4.",
  },
  {
    month: "Month 3–4",
    title: "Creative Pipeline Build & Q2 Campaign Launch",
    description: "Commission creative for Q2 campaigns with 6-week production lead times; establish creative rotation calendar; launch Q2 campaigns with bid strategy documentation and pacing targets by channel.",
  },
  {
    month: "Month 5–6",
    title: "Attribution Modeling & Mid-Year Budget Review",
    description: "Run H1 attribution model validation; complete media mix model refresh with H1 actuals; reallocate H2 budget based on measured ROAS by channel; lock Q3 upfront deals.",
  },
  {
    month: "Month 7–8",
    title: "Q3 Campaign Execution & Incrementality Testing",
    description: "Execute Q3 campaigns with weekly pacing reviews; run planned incrementality tests for top 2-3 channels; compile Q3 creative performance data for rotation decisions.",
  },
  {
    month: "Month 9–10",
    title: "Q4 Preparation & Holiday Campaign Launch",
    description: "Lock Q4 inventory commitments; brief holiday creative 8 weeks before Black Friday; establish Q4 daily pacing targets; document Q4 contingency budget for opportunistic buys.",
  },
  {
    month: "Month 11–12",
    title: "Q4 Execution & Annual Media Review",
    description: "Execute Q4 with daily pacing surveillance; run post-holiday ROAS analysis; complete annual media performance review; present next-year channel mix and budget recommendations.",
  },
]

const kpis = [
  {
    metric: "blended ROAS",
    target: "Track & grow QoQ",
    description: "Return on ad spend across all paid media channels — primary efficiency metric; segment by channel, creative, audience, and funnel stage to identify optimization levers.",
  },
  {
    metric: "Creative Rotation Lag",
    target: "≤ 6 weeks between refreshes",
    description: "Days between creative rotation in high-frequency channels — above 8 weeks means campaigns running creatively fatigued ad units losing 30-50% of their original click-through rates.",
  },
  {
    metric: "Budget Pacing Accuracy",
    target: "Within ±5% monthly",
    description: "Variance between planned and actual monthly media spend — persistent variance creates Q4 end-of-year cramming, last-minute publisher deals, and permanent ROAS efficiency loss.",
  },
  {
    metric: "CPL vs. Target",
    target: "Within 10% of plan",
    description: "Cost per lead vs. channel-specific target — tracks bid efficiency and audience quality across paid search, paid social, and programmatic channels with weekly cadence.",
  },
  {
    metric: "Incrementality Lift",
    target: "Measured annually per channel",
    description: "True incremental revenue contribution of each major paid media channel measured via geo-based or holdout testing — the only valid way to validate media mix model allocations.",
  },
  {
    metric: "Media Efficiency Ratio",
    target: "Improve YoY",
    description: "Total media spend as a percentage of revenue attributed to media — tracks whether the program is becoming more or less efficient over time as a portfolio, not just channel-by-channel.",
  },
]

const testimonial = {
  quote:
    "We were spending $8M/year in paid media and running creative for 14 weeks without rotation, allocating budget based on last-click attribution, and doing pacing checks monthly. Momenties moved creative rotation to 4-week sprints, weekly pacing reviews, and quarterly incrementality tests. ROAS improved 34% in one year without increasing budget.",
  name: "Zainab O.",
  title: "VP Performance Marketing, DTC Brand",
}

export default function MediaBuyingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Media Buying Calendar"
        title="Rotate Creative Before It Fatigues. Pace Before It Slips."
        subtitle="A systematic media buying calendar with upfront commitment timelines, creative rotation cadences, weekly pacing reviews, and quarterly attribution validation that improves ROAS without increasing budget."
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
            Four Systems That Maximize Media Efficiency
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
            Your Annual Media Buying Calendar
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
            KPIs That Define Media Buying Excellence
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
