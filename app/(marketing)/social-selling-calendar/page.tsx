import type { Metadata } from "next"
import { Users2, MessageSquare, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Social Selling Calendar | Momenties",
  description: "Build a systematic social selling calendar — LinkedIn presence cadence, trigger-based outreach, content-to-conversation pipelines, and attribution that proves pipeline contribution.",
}

const pillars = [
  {
    icon: Users2,
    title: "LinkedIn Presence & Content Cadence",
    description:
      "Map every touchpoint for consistent executive and rep visibility: post scheduling, comment engagement windows, connection request quotas, and SSI (Social Selling Index) check-ins. Momenties surfaces your weekly content calendar, reminds reps to engage within the first hour of buyer activity, and logs SSI trends so leadership can spot coaching opportunities before quota misses compound.",
  },
  {
    icon: MessageSquare,
    title: "Social Listening & Trigger-Based Outreach",
    description:
      "Turn intent signals into timely conversations: job-change alerts, company funding announcements, executive LinkedIn posts, and earnings call keywords all trigger prioritized outreach windows. Momenties queues trigger outreach tasks with suggested messaging frameworks, ensuring reps act within the 48-hour relevance window and capture context in CRM without manual logging friction.",
  },
  {
    icon: TrendingUp,
    title: "Content-to-Conversation Pipeline",
    description:
      "Build a repeatable engine: educational posts → warm comments → connection requests → DM sequences → booked meetings. Momenties tracks each prospect through the social funnel, surfaces who engaged with which content, and prompts reps to send the right value add at the right conversion moment — moving from passive follower to active opportunity.",
  },
  {
    icon: BarChart3,
    title: "Social Selling Performance Reviews",
    description:
      "Monthly and quarterly reviews that tie social activity to pipeline and closed-won revenue. Momenties aggregates SSI, response rates, content-sourced meetings, and social-influenced ARR into one dashboard — enabling managers to reward high-activity reps, identify conversion bottlenecks, and present board-ready data on social as a legitimate GTM channel.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Foundation & Profile Optimization",
    description: "Audit rep LinkedIn profiles, establish personal brand guidelines, define ICP social personas, and configure listening keywords and trigger alerts.",
  },
  {
    month: "Month 3–4",
    title: "Content Cadence Launch",
    description: "Launch 3×/week content schedule per rep, establish engagement SLAs (comment within 1 hour of buyer post), and build 90-day content theme calendar.",
  },
  {
    month: "Month 5–6",
    title: "Trigger Outreach Playbooks",
    description: "Deploy job-change, funding, and intent-signal playbooks with Momenties task queues; run first cohort A/B test on DM opening lines and measure response rates.",
  },
  {
    month: "Month 7–8",
    title: "Content-to-Meeting Conversion Optimization",
    description: "Map full social funnel from post impression to booked meeting; identify drop-off stages; A/B test DM sequences; optimize cadence from warm engagement to meeting ask.",
  },
  {
    month: "Month 9–10",
    title: "Scale & Manager Enablement",
    description: "Roll program to full sales org, train managers on SSI coaching, launch peer leaderboard, and establish monthly rep recognition tied to social-sourced pipeline.",
  },
  {
    month: "Month 11–12",
    title: "Attribution & Annual Review",
    description: "Finalize social-to-pipeline attribution model, present annual ROI, benchmark SSI and win rate improvement YoY, and plan next-year content themes and channel expansion.",
  },
]

const kpis = [
  {
    metric: "SSI Score",
    target: "≥ 70 / 100",
    description: "LinkedIn Social Selling Index across all four pillars — correlated with 45% more opportunities.",
  },
  {
    metric: "Trigger Response Rate",
    target: "≥ 35%",
    description: "Replies to trigger-based outreach within 48-hour relevance window vs. cold outreach benchmark of 8%.",
  },
  {
    metric: "Content-Sourced Meetings",
    target: "≥ 20% of pipeline",
    description: "Booked discovery calls attributed to a social content touchpoint in the 30 days prior to outreach.",
  },
  {
    metric: "Social-Influenced ARR",
    target: "Track & grow YoY",
    description: "Closed-won revenue where social engagement appeared in the multi-touch attribution path.",
  },
  {
    metric: "DM → Meeting Rate",
    target: "≥ 12%",
    description: "Percentage of DM conversations that convert to a booked meeting — 3× cold email benchmark.",
  },
  {
    metric: "Content Engagement Rate",
    target: "≥ 4%",
    description: "Average engagement rate on rep posts (likes + comments + shares ÷ impressions) vs. LinkedIn avg of 0.5–1%.",
  },
]

const testimonial = {
  quote:
    "Social selling used to feel like busy work. With Momenties, our reps see exactly when to post, who to reach out to after a trigger, and whether it&apos;s moving pipeline. We tied $1.2M in influenced ARR to social in year one — that&apos;s board conversation territory.",
  name: "Kofi A.",
  title: "Head of Sales Development, Enterprise SaaS",
}

export default function SocialSellingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Social Selling Calendar"
        title="Turn LinkedIn into a Predictable Pipeline Machine"
        subtitle="A structured calendar that moves social selling from ad-hoc to systematic — with trigger playbooks, content cadences, and attribution that proves ROI to your board."
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
            Four Systems That Make Social Selling Repeatable
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
            Your 12-Month Social Selling Roadmap
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
            KPIs That Prove Social Selling Works
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
