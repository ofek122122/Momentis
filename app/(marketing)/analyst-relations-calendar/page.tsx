import type { Metadata } from "next"
import { Users, FileText, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Analyst Relations Calendar | Momenties",
  description: "Run a proactive analyst relations program — structured briefing cadences, Magic Quadrant and Forrester Wave submission timelines, RFI response workflows, and influence measurement that ties AR to pipeline.",
}

const pillars = [
  {
    icon: Users,
    title: "Analyst Briefing & Inquiry Cadence",
    description:
      "Map every tier-1 and tier-2 analyst to a recurring briefing schedule: quarterly product updates for strategic analysts, semi-annual strategy briefings for influencer-tier, and ad-hoc inquiries within 48-hour SLA. Momenties surfaces upcoming briefing windows, prompts pre-brief prep (update decks, gather customer proof points), and logs analyst sentiment and key ask-me-agains so institutional knowledge never leaves with the departing AR manager.",
  },
  {
    icon: FileText,
    title: "Research Submission & RFI Response Workflow",
    description:
      "Never miss a Magic Quadrant, Forrester Wave, or IDC MarketScape submission window. Momenties maps each major research cycle — Gartner Q4 lock-in, Forrester Wave nomination, IDC data collection — to a reverse-engineered task calendar: customer reference capture 90 days prior, internal data validation 60 days prior, legal review 30 days prior, submission 2 weeks before deadline. RFI response queues route to the right SME with SLA tracking.",
  },
  {
    icon: TrendingUp,
    title: "Analyst Event & Speaking Calendar",
    description:
      "Orchestrate analyst conference presence: Gartner Summit, Forrester Technology & Innovation, IDC Directions, and bespoke analyst council events. Momenties tracks nomination deadlines, abstract submissions, speaker prep milestones, and pre/post-event briefing windows — ensuring your executives arrive prepared and every event generates documented analyst relationships rather than one-off name-drops.",
  },
  {
    icon: BarChart3,
    title: "AR Performance Measurement & Reporting",
    description:
      "Quantify AR impact quarterly: share-of-voice in research notes, analyst recommendation frequency, Magic Quadrant/Wave position movement, and inquiry-to-deal influence. Momenties aggregates briefing completion rates, sentiment trend data, research citation counts, and ARR from analyst-influenced deals into board-ready AR scorecards — moving analyst relations from soft relationship management to measurable revenue enablement.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "AR Audit & Analyst Mapping",
    description: "Audit current analyst relationships, tier analysts by influence and coverage relevance, document last-briefed dates, and establish Momenties AR calendar with tier-based cadence rules.",
  },
  {
    month: "Month 3–4",
    title: "Briefing Program Launch",
    description: "Launch proactive outreach to tier-1 analysts with updated corporate narrative; establish quarterly product briefing rhythm; create reusable briefing deck template and customer proof-point library.",
  },
  {
    month: "Month 5–6",
    title: "Research Cycle Alignment",
    description: "Map all major research publication timelines (Gartner MQ, Forrester Wave, IDC); build reverse-engineered submission calendars; run first customer reference capture sprint for upcoming evaluations.",
  },
  {
    month: "Month 7–8",
    title: "Event & Council Activation",
    description: "Submit conference speaker nominations, secure analyst council participation, schedule pre/post-event briefings with attending analysts, and activate executive sponsor relationships.",
  },
  {
    month: "Month 9–10",
    title: "Influence Measurement Framework",
    description: "Instrument analyst-to-pipeline tracking with CRM tagging; launch analyst sentiment scoring system; publish first AR influence report to sales and marketing leadership.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Next-Cycle Planning",
    description: "Present annual AR ROI (research position movement, pipeline influenced, voice-of-analyst quotes in deals), negotiate analyst firm contracts for renewal, and set next-year tier priorities and research submission calendar.",
  },
]

const kpis = [
  {
    metric: "Briefing Completion Rate",
    target: "≥ 90% on schedule",
    description: "Percentage of planned tier-1 and tier-2 briefings executed within scheduled quarter — leading indicator of relationship health.",
  },
  {
    metric: "Research Mention Rate",
    target: "Track & grow QoQ",
    description: "Number of times company appears in analyst research notes, blogs, and social commentary vs. prior period and vs. top-3 competitors.",
  },
  {
    metric: "MQ / Wave Position",
    target: "Advance or maintain",
    description: "Position movement in primary Gartner Magic Quadrant or Forrester Wave — the most cited AR outcome by boards and enterprise buyers.",
  },
  {
    metric: "RFI Response SLA",
    target: "100% on time",
    description: "Percentage of analyst RFI / inquiry responses delivered within 48 hours (tier-1) or 72 hours (tier-2). Late responses damage research treatment.",
  },
  {
    metric: "Analyst-Influenced ARR",
    target: "Track & attribute",
    description: "Closed-won ARR where an analyst recommendation, Magic Quadrant placement, or Forrester citation appeared in the deal's CRM timeline.",
  },
  {
    metric: "Analyst Sentiment Score",
    target: "≥ 4.0 / 5.0",
    description: "Internally scored post-briefing sentiment — tracks whether analysts leave conversations as advocates, neutrals, or skeptics over time.",
  },
]

const testimonial = {
  quote:
    "Before Momenties, our AR program ran on a spreadsheet and good intentions. We missed the Gartner data submission window two years in a row. Now every cycle is pre-mapped, every reference capture is scheduled, and we moved from Niche Player to Visionary. That&apos;s not just an AR win — it closed $4M in enterprise deals where analysts were cited.",
  name: "Priya S.",
  title: "VP Corporate Communications & Analyst Relations, Enterprise SaaS",
}

export default function AnalystRelationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Analyst Relations Calendar"
        title="Never Miss a Magic Quadrant Window Again"
        subtitle="A structured AR calendar that maps briefing cadences, research submission deadlines, and event presence into one proactive program — with measurement that ties analyst influence to closed revenue."
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
            Four Systems That Make AR Proactive, Not Reactive
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
            Your 12-Month AR Program Roadmap
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
            KPIs That Make AR Accountable to Revenue
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
