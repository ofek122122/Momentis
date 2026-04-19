import type { Metadata } from "next"
import { Search, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Competitive Intelligence Calendar | Momenties",
  description: "Build a systematic competitive intelligence calendar — competitor monitoring cadence, battlecard refresh cycles, win/loss analysis program, and CI distribution that arms your sales team before every deal.",
}

const pillars = [
  {
    icon: Search,
    title: "Competitor Monitoring & Signal Capture Cadence",
    description:
      "Systematic CI starts with consistent monitoring: weekly product changelog reviews, bi-weekly G2/Capterra review scrapes, monthly pricing page audits, quarterly 10-K or funding announcement analysis, and real-time alerts on competitor job postings (a leading indicator of product investment). Momenties schedules every monitoring task with the right cadence per signal type, routes new intelligence to the right owner (product, sales, marketing), and ensures nothing sits unreviewed in a Slack thread for weeks.",
  },
  {
    icon: RefreshCw,
    title: "Battlecard Refresh & Win/Loss Analysis Cycle",
    description:
      "Stale battlecards are worse than no battlecards — they build false rep confidence and generate lost deals. Momenties enforces quarterly battlecard audits tied to competitor product release cycles, monthly win/loss call review blocks, and post-mortem documentation workflows after every competitive loss over $10K ACV. Each battlecard gets a freshness score and expiration date; Momenties alerts the CI owner and sales enablement lead before reps encounter outdated content in the field.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Positioning & Messaging Refresh",
    description:
      "Competitive positioning must evolve faster than competitor messaging. Momenties schedules bi-annual positioning reviews tied to competitor major releases, new funding rounds, and category shift events (analyst reports, acquisitions). It queues messaging refresh workshops with product marketing, triggers homepage and deck updates when positioning changes, and routes approved competitive claims through legal review — ensuring every customer-facing asset reflects current defensible differentiation.",
  },
  {
    icon: BarChart3,
    title: "CI Distribution & Sales Enablement Reviews",
    description:
      "Competitive intelligence with no distribution is market research theater. Momenties schedules monthly CI newsletters to sales and CS, quarterly battlecard training sessions, and automated deal-level CI push when a competitor is named in CRM opportunity fields. Bi-annual CI program reviews assess battlecard usage rates, win rate change in competitive deals, and rep satisfaction scores — proving CI&apos;s contribution to revenue rather than operating as an invisible back-office function.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "CI Audit & Monitoring Infrastructure",
    description: "Audit existing competitive assets, identify coverage gaps, configure monitoring tools and alert triggers, and establish signal-to-owner routing for product, sales, and marketing CI needs.",
  },
  {
    month: "Month 3–4",
    title: "Battlecard Build & Win/Loss Launch",
    description: "Build or refresh battlecards for top 5 competitors; launch structured win/loss interview program with 5 calls/month minimum; establish freshness scoring and quarterly review cadence.",
  },
  {
    month: "Month 5–6",
    title: "Sales Distribution & Enablement Integration",
    description: "Integrate battlecards into sales enablement platform; launch monthly CI newsletter; configure CRM-triggered CI push for competitive deals; train reps on battlecard usage and feedback loop.",
  },
  {
    month: "Month 7–8",
    title: "Positioning Refresh Cycle",
    description: "Conduct mid-year competitive positioning workshop; update homepage, pitch deck, and one-pager messaging; validate changes against win/loss themes; route updates through legal review.",
  },
  {
    month: "Month 9–10",
    title: "Win Rate Impact Analysis",
    description: "Analyze competitive win rate before and after CI program launch; segment by competitor, deal size, and sales rep; identify battlecard gaps correlated with loss patterns; prioritize refresh backlog.",
  },
  {
    month: "Month 11–12",
    title: "Annual CI Review & Next-Year Roadmap",
    description: "Present annual CI program ROI to leadership (win rate lift, deal velocity, rep NPS on CI quality); plan next-year competitor coverage expansion; negotiate CI tool contracts for renewal.",
  },
]

const kpis = [
  {
    metric: "Competitive Win Rate",
    target: "Lift ≥ 10% YoY",
    description: "Win rate in deals where a named competitor was present — the primary outcome metric for CI program effectiveness, tracked quarterly against baseline.",
  },
  {
    metric: "Battlecard Freshness Score",
    target: "≥ 90% current",
    description: "Percentage of active battlecards reviewed within the last 90 days — leading indicator of CI quality and rep confidence in competitive assets.",
  },
  {
    metric: "Win/Loss Interview Volume",
    target: "≥ 5 / month",
    description: "Number of completed structured win/loss interviews — primary input to battlecard quality and positioning decisions; below 3/month yields statistically unreliable patterns.",
  },
  {
    metric: "CI Asset Usage Rate",
    target: "≥ 60% of reps",
    description: "Percentage of sales reps who accessed battlecards or CI assets in the past 30 days — low usage signals distribution or relevance failure, not CI quality failure.",
  },
  {
    metric: "Competitor Signal Response Time",
    target: "≤ 5 business days",
    description: "Time from competitor major product release or pricing change to updated CI asset in reps' hands — measures CI agility and pipeline protection speed.",
  },
  {
    metric: "Rep CI Satisfaction (NPS)",
    target: "≥ 7 / 10",
    description: "Quarterly rep survey score on CI quality and usefulness in deals — highest-signal leading indicator of whether CI program is actually enabling sales.",
  },
]

const testimonial = [
  {
    quote:
      "Our battlecards were six months stale and reps had stopped using them. We built a quarterly refresh cadence with Momenties and added a win/loss interview block every two weeks. Competitive win rate went from 38% to 52% in two quarters — sales now requests CI before we push it.",
    name: "Adaeze K.",
    title: "Senior Competitive Intelligence Manager, B2B SaaS",
  },
]

export default function CompetitiveIntelligenceCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Competitive Intelligence Calendar"
        title="Keep Your Battlecards Fresh. Win More Competitive Deals."
        subtitle="A structured CI calendar with monitoring cadences, quarterly battlecard refresh cycles, win/loss analysis programs, and distribution workflows that arm reps before every competitive deal."
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
            Four Systems That Keep CI Ahead of Your Competitors
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
            Your 12-Month CI Program Roadmap
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
            KPIs That Prove CI Drives Revenue
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
          {testimonial.map((t) => (
            <blockquote
              key={t.name}
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
                &ldquo;{t.quote}&rdquo;
              </p>
              <p style={{ color: "#c5a35c", fontWeight: 600 }}>{t.name}</p>
              <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{t.title}</p>
            </blockquote>
          ))}
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
