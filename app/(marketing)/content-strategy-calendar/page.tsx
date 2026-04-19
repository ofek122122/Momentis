import type { Metadata } from "next"
import { FileText, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Content Strategy Calendar | Momenties",
  description: "Build a systematic content strategy calendar — editorial planning cycles, content audit cadences, SEO refresh schedules, thought leadership production pipelines, and content performance review rhythms that turn content investment into compounding organic growth.",
}

const pillars = [
  {
    icon: FileText,
    title: "Editorial Planning Cycles & Content Production Calendar",
    description:
      "Content strategy without an editorial calendar produces inconsistent publishing — which signals search engines and subscribers that you&apos;re not a reliable information source. Momenties schedules the full editorial planning cycle: quarterly content themes aligned to product roadmap and marketing campaign calendar, monthly editorial meetings to assign topics, writers, and publication dates, weekly production check-ins to manage draft and review stages, and publication day coordination for social amplification. Content briefing templates — including SEO target keywords, competitor gap analysis, and customer journey stage — are triggered automatically at assignment. No more last-minute scrambles to fill the blog.",
  },
  {
    icon: RefreshCw,
    title: "Content Audit, SEO Refresh & Decay Management Calendar",
    description:
      "Content decays. Pages that ranked on page 1 two years ago now rank on page 3 — not because of new competition, but because they haven&apos;t been updated. Momenties schedules quarterly content performance audits (identifying pages with declining CTR, impressions, or conversion), monthly SEO refresh assignments for top-20 organic traffic pages, and annual comprehensive content audits where low-traffic pages are consolidated, redirected, or deleted. Content decay monitoring — triggered when a page drops more than 30% in monthly traffic — creates automatic refresh assignments before rankings collapse past recovery threshold.",
  },
  {
    icon: TrendingUp,
    title: "Thought Leadership Production Pipeline & Executive Content CE",
    description:
      "Thought leadership content — bylined executive articles, original research reports, industry benchmark studies, and conference keynote decks — requires a production calendar completely separate from blog content. Momenties schedules quarterly industry report production cycles (6-week production: research → analysis → design → promotion), executive byline placement calendars for tier-1 publications (pitch deadlines 2-4 months before publication windows), and conference speaking proposal calendars (CFP deadlines are 3-6 months before events for most major industry conferences). Podcast guesting, co-marketing webinars, and analyst Q&A calendars are managed in the same system.",
  },
  {
    icon: BarChart3,
    title: "Content Performance Reviews & Content ROI Measurement Cadence",
    description:
      "Content ROI is invisible without a structured measurement cadence. Momenties schedules weekly content performance dashboards (new content published, top performers by traffic and conversion, content pipeline health), monthly content attribution analysis (which content pieces influenced pipeline and closed-won revenue), and quarterly content program ROI reviews comparing content investment to organic traffic value, lead volume, and influenced ARR. Annual content strategy reviews — where the content mix, channel allocation, and editorial mission are evaluated against business objectives — are calendared before budget planning cycles.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Content Audit & Editorial Calendar Architecture",
    description: "Complete content inventory and performance audit; identify top-20 highest-value pages for refresh; build editorial calendar system with quarterly themes; assign content owners; establish SEO baseline metrics.",
  },
  {
    month: "Month 3",
    title: "Production Pipeline Launch & Thought Leadership Kickoff",
    description: "Launch editorial production pipeline with first quarterly theme; identify thought leadership opportunities and submit conference CFPs; begin first industry report or benchmark study; establish content performance dashboard.",
  },
  {
    month: "Month 4–5",
    title: "SEO Refresh Sprint & Content Decay Remediation",
    description: "Execute first quarterly SEO refresh for top-20 pages; consolidate or redirect bottom-quartile content; build internal linking structure across updated pages; launch first co-marketing webinar.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Content Performance Review",
    description: "Run mid-year content audit comparing traffic, leads, and attribution vs. baseline; assess editorial calendar performance; adjust Q3-Q4 content themes based on search demand and pipeline data.",
  },
  {
    month: "Month 7–9",
    title: "Thought Leadership Publication Cycle & Conference Season",
    description: "Publish annual benchmark or industry report; execute fall conference speaking engagements; launch Q3 editorial theme content; complete second quarterly SEO refresh cycle; run content attribution analysis.",
  },
  {
    month: "Month 10–12",
    title: "Annual Content ROI Review & Next-Year Strategy",
    description: "Present annual content program report (organic traffic growth, content-sourced leads, influenced ARR, content production efficiency); plan next-year editorial themes; set content investment budget; lock Q1 editorial calendar.",
  },
]

const kpis = [
  {
    metric: "Organic Traffic Growth",
    target: "≥ 30% YoY",
    description: "Year-over-year organic search traffic growth — elite content programs compound at 30-50% annually; flat or declining organic traffic signals editorial quality, keyword targeting, or technical SEO issues.",
  },
  {
    metric: "Content-Sourced MQLs",
    target: "≥ 20% of total MQL volume",
    description: "Percentage of marketing qualified leads with content as first-touch or influencing touchpoint — below 15% indicates content is not generating demand, only brand awareness.",
  },
  {
    metric: "Content Publication Cadence",
    target: "≥ 90% of planned pieces on time",
    description: "Percentage of planned content pieces published on schedule — below 75% indicates production pipeline capacity or process issues that compound over time as editorial debt accumulates.",
  },
  {
    metric: "Top-20 Page Refresh Cycle",
    target: "100% refreshed quarterly",
    description: "Percentage of top organic traffic pages receiving content refresh within the quarter — unrefreshed high-traffic pages decay an average of 8% in impressions per quarter without updates.",
  },
  {
    metric: "Content-Influenced Revenue",
    target: "≥ 3× content program cost",
    description: "ARR closed where content was an influencing touchpoint — below 2× indicates content program is not supporting revenue and may require editorial direction change.",
  },
  {
    metric: "Thought Leadership Placements",
    target: "≥ 2 tier-1 placements/quarter",
    description: "Executive bylined articles or research citations in tier-1 industry publications — consistent tier-1 placements drive analyst recognition, investor credibility, and enterprise buyer trust.",
  },
]

const testimonial = {
  quote:
    "We had a content team but not a content program — publishing was sporadic, our top pages decayed for months before anyone noticed, and thought leadership was whatever our CMO felt like writing that week. Momenties gave us an actual editorial calendar. Organic traffic grew 47% in 12 months and content-sourced pipeline tripled because we finally had a system.",
  name: "Kolade F.",
  title: "VP Content Marketing, Series B Enterprise SaaS",
}

export default function ContentStrategyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Content Strategy Calendar"
        title="30% Organic Growth. Consistent Publishing. Zero Content Decay."
        subtitle="A systematic content strategy calendar with quarterly editorial planning cycles, monthly SEO refresh schedules, thought leadership production pipelines, and content ROI measurement cadences that turn content investment into compounding organic growth."
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
            Four Systems That Build Content Program Excellence
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
            Your 12-Month Content Strategy Roadmap
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
            KPIs That Define Content Program Maturity
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
