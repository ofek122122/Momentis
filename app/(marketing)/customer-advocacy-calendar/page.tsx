import type { Metadata } from "next"
import { Heart, Star, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Advocacy Calendar | Momenties",
  description: "Build a systematic customer advocacy calendar — reference program management, case study production cadence, G2 and review site programs, and advocacy attribution that ties customer voice to pipeline and closed revenue.",
}

const pillars = [
  {
    icon: Heart,
    title: "Customer Reference Program & Health Scoring",
    description:
      "A reference program without a freshness system collapses within 12 months as champion turnover and product divergence erode reference quality. Momenties schedules quarterly reference health checks — re-qualifying references by use case, deal size, and logo tier — and triggers re-engagement workflows before stale references surface in live deals. Monthly new reference sourcing targets are tracked against reference consumption rates so the pipeline never outpaces the available bench.",
  },
  {
    icon: Star,
    title: "Case Study & Customer Story Production Cadence",
    description:
      "Case study production requires 6-8 week lead times: customer approval, legal review, design, and optimization. Momenties builds the production calendar backwards from publish dates, triggers intake interviews at the right post-onboarding milestone (60-90 days post-go-live), routes drafts through approval workflows, and tracks the pipeline from customer nomination to published asset — ensuring marketing always has fresh proof by vertical, deal size, and use case.",
  },
  {
    icon: TrendingUp,
    title: "G2, Capterra & Review Site Campaigns",
    description:
      "Review site presence is a continuous program, not a quarterly push. Momenties schedules monthly review ask sequences tied to NPS survey high-responders, product milestone emails, and QBR completions — the three highest-conversion ask moments. It queues review response workflows (48-hour SLA on negative reviews), tracks G2 category rating vs. top competitors, and surfaces review volume gaps by segment before analysts or buyers notice.",
  },
  {
    icon: BarChart3,
    title: "Advocacy Attribution & Program Performance Reviews",
    description:
      "Quarterly advocacy reviews that tie customer voice to pipeline and revenue: reference call-to-deal conversion, case study content influence in won deals, G2 rating improvement vs. competition, and advocate NPS. Momenties aggregates advocacy touchpoints across CRM, review sites, and content platforms into one attribution dashboard — enabling advocacy leaders to retire low-performing programs, prioritize high-impact advocate relationships, and present board-ready ROI data.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Advocacy Audit & Reference Program Architecture",
    description: "Audit existing reference bench quality and coverage gaps by vertical, deal size, and use case; build health scoring criteria; establish reference consumption vs. production rate targets.",
  },
  {
    month: "Month 3–4",
    title: "Case Study Pipeline Launch",
    description: "Build case study intake calendar tied to post-onboarding milestones; establish approval workflow and production templates; publish first 4 case studies covering primary ICP verticals.",
  },
  {
    month: "Month 5–6",
    title: "Review Site Program Activation",
    description: "Launch structured monthly review ask sequences; establish 48-hour review response SLA workflow; set G2 category rating and volume targets; integrate review asks into NPS survey follow-up.",
  },
  {
    month: "Month 7–8",
    title: "Ambassador & Champion Program Build",
    description: "Identify top 20 champions for ambassador program; design advocacy tiers (reference, case study, speaking); establish champion perks and recognition calendar; launch advisory board nominations.",
  },
  {
    month: "Month 9–10",
    title: "Advocacy Attribution & Sales Integration",
    description: "Instrument reference-to-deal attribution in CRM; tag case study content influence in won deals; integrate G2 ratings into competitive battlecards; launch monthly advocacy performance report to sales.",
  },
  {
    month: "Month 11–12",
    title: "Annual Advocacy Review & Next-Year Roadmap",
    description: "Present annual advocacy ROI (reference conversions, case study pipeline influence, G2 rank movement, advocate NPS); plan next-year expansion by vertical and geography; renew champion incentive program.",
  },
]

const kpis = [
  {
    metric: "Reference Call Conversion Rate",
    target: "≥ 25% to next stage",
    description: "Percentage of reference calls that result in deal advancement to next stage — primary metric for reference program quality vs. quantity.",
  },
  {
    metric: "Reference Bench Coverage",
    target: "3× deal volume by segment",
    description: "Number of available references per ICP vertical and deal size relative to monthly reference consumption — below 2× signals bench depth risk.",
  },
  {
    metric: "Case Study Publish Cadence",
    target: "≥ 2 / month",
    description: "New customer stories published per month across verticals — below 1/month leaves deal-stage content gaps that sales fills with ad-hoc reference calls.",
  },
  {
    metric: "G2 Rating vs. Category Leader",
    target: "Within 0.2 points",
    description: "G2 star rating differential vs. top-rated competitor in primary category — the most-cited review site metric in enterprise procurement decisions.",
  },
  {
    metric: "Review Volume Growth",
    target: "≥ 15% QoQ",
    description: "Quarter-over-quarter growth in G2 and Capterra review count — sustained velocity signal that review program is systematically activated, not sprint-driven.",
  },
  {
    metric: "Advocacy-Influenced ARR",
    target: "Track & attribute",
    description: "Closed-won ARR where a reference call, case study, or G2 review appeared in the deal timeline — the board metric that justifies customer advocacy headcount.",
  },
]

const testimonial = {
  quote:
    "Our reference bench had 40 contacts and 35 of them hadn&apos;t been touched in six months. We had case studies from three years ago and our G2 rating was 0.4 stars below our top competitor. Momenties gave us a system — monthly reference health checks, a case study production calendar, and review ask sequences tied to NPS. Within a year we were the top-rated product in our G2 category.",
  name: "Taiwo M.",
  title: "Director of Customer Advocacy, Enterprise SaaS",
}

export default function CustomerAdvocacyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Customer Advocacy Calendar"
        title="Turn Happy Customers into a Pipeline Engine"
        subtitle="A structured advocacy calendar with reference program health checks, case study production cadences, review site campaigns, and attribution that proves customer voice drives revenue."
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
            Four Systems That Make Customer Advocacy Systematic
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
            Your 12-Month Advocacy Program Roadmap
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
            KPIs That Make Customer Advocacy Accountable to Revenue
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
