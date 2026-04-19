import type { Metadata } from "next"
import { TrendingUp, Users, FileText, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Investor Relations Calendar | Momenties",
  description: "Build a systematic investor relations calendar — earnings call preparation cycles, investor conference schedules, shareholder communication cadences, and SEC filing deadline management that keeps public and private company IR programs current.",
}

const pillars = [
  {
    icon: FileText,
    title: "Earnings Call Preparation & SEC Filing Calendar",
    description:
      "Earnings call preparation begins 6 weeks before announcement — not the week of. Momenties schedules the complete earnings preparation calendar: CFO/IR alignment on guidance framework (6 weeks out), investor Q&A prep sessions (4 weeks out), script drafts and legal review (3 weeks out), quiet period start (calendar blocked with automated notifications to executives), and earnings release coordination (wire timing, 8-K filing, investor call dial-in logistics). SEC filing deadlines — 10-Q within 40 days of quarter end (large accelerated filers), 10-K within 60 days, 8-K within 4 business days of material events — are tracked with compliance owner alerts before windows close.",
  },
  {
    icon: TrendingUp,
    title: "Investor Conference & Non-Deal Roadshow Calendar",
    description:
      "Institutional investor conference slots — J.P. Morgan, Goldman Sachs, Morgan Stanley, Needham, and sector-specific conferences — fill 6-12 months in advance. Conference submission windows open months before the event; missing the window means no slot. Momenties tracks all major investor conference submission deadlines, manages non-deal roadshow scheduling (targeting buy-side analysts and portfolio managers 2-3 times annually), and coordinates management availability against earnings blackout periods and acquisition quiet windows. Analyst day planning — typically annual, 3-4 months of preparation — is calendared with content production milestones and venue logistics.",
  },
  {
    icon: Users,
    title: "Shareholder Communication Cadence & Proxy Season Calendar",
    description:
      "Shareholder communication outside of earnings creates the ongoing narrative that institutional investors hold through volatility. Momenties schedules quarterly investor letters (2-3 weeks after earnings), annual report production (12-week production calendar ending at proxy filing), and proxy season management: record date establishment, proxy statement filing (DEF 14A at least 40 days before annual meeting), shareholder meeting logistics, and vote solicitation campaigns for contested matters. Activist investor monitoring — 13D/13G filing alerts, shareholder engagement policy review annually — is part of the proactive IR calendar.",
  },
  {
    icon: BarChart3,
    title: "Analyst Coverage Management & IR Performance Metrics",
    description:
      "Analyst coverage management is an active calendar program — not a passive outcome. Momenties schedules quarterly analyst model update calls (2 weeks after earnings, when models are being rebuilt), initiation of coverage target management, and annual sell-side analyst day participation decisions. IR website content updates — investor presentations, factsheets, ESG reports — are calendared quarterly with legal review. IR performance metrics reviews: stock performance vs. peer group, short interest trend, institutional ownership changes from 13F filings (reported 45 days after each quarter end), and consensus estimate accuracy — are reviewed monthly before board reporting.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "IR Calendar Build & Analyst Relationship Mapping",
    description: "Map full annual IR calendar including all SEC filing deadlines, earnings dates, conference submission windows, and quiet periods; audit analyst coverage and model accuracy; identify target institutional investors for non-deal roadshow program.",
  },
  {
    month: "Month 3",
    title: "First Earnings Cycle & Investor Messaging Refresh",
    description: "Execute first structured earnings preparation cycle; update investor presentation; conduct post-earnings analyst calls; calibrate guidance communication strategy based on market reaction.",
  },
  {
    month: "Month 4–5",
    title: "Investor Conference Season & Non-Deal Roadshow",
    description: "Execute spring investor conference program; complete non-deal roadshow targeting top 20 institutional holders; update IR website with refreshed materials; conduct shareholder composition analysis.",
  },
  {
    month: "Month 6",
    title: "Annual Meeting & Proxy Season Close",
    description: "Execute annual shareholder meeting; certify proxy results; update governance disclosures; review activist monitoring program; assess ESG reporting calendar for next proxy cycle.",
  },
  {
    month: "Month 7–9",
    title: "Analyst Day Planning & Fall Conference Program",
    description: "Launch analyst day content planning (if annual); execute fall investor conference program; complete 13F ownership analysis for Q2; update peer group comparison and relative valuation narrative.",
  },
  {
    month: "Month 10–12",
    title: "Year-End IR Program Review & Next-Year Planning",
    description: "Present annual IR program review to board (investor mix, analyst coverage, conference ROI, stock liquidity); plan next-year IR budget; lock conference calendar for following year; begin annual report production.",
  },
]

const kpis = [
  {
    metric: "Consensus Estimate Accuracy",
    target: "Revenue ±3%, EPS ±5%",
    description: "Variance between company guidance and sell-side consensus — consistent misses above 5% signal guidance calibration issues that erode institutional investor trust and increase stock volatility.",
  },
  {
    metric: "Analyst Coverage",
    target: "Maintained or growing",
    description: "Number of sell-side analysts providing active coverage — declining coverage reduces liquidity and institutional discovery; target 1 new initiator per year for growing companies.",
  },
  {
    metric: "Investor Meeting Conversion",
    target: "≥ 15% NDR → follow-on",
    description: "Percentage of non-deal roadshow meetings resulting in follow-on investor engagement or position building — below 10% suggests investor messaging or targeting misalignment.",
  },
  {
    metric: "SEC Filing On-Time Rate",
    target: "100% by statutory deadline",
    description: "Percentage of SEC filings (10-K, 10-Q, 8-K, DEF 14A) filed by statutory deadline — any late filing triggers SEC notice, analyst commentary, and potential institutional investor concern.",
  },
  {
    metric: "Institutional Ownership Stability",
    target: "≤ 5% net change/quarter",
    description: "Net change in institutional ownership per quarter from 13F analysis — above 10% net outflow for two consecutive quarters signals institutional conviction breakdown requiring narrative assessment.",
  },
  {
    metric: "IR Website Currency",
    target: "Updated within 5 days of earnings",
    description: "Recency of investor presentation, factsheet, and financial data on IR website — outdated materials (more than 2 weeks post-earnings) signal IR program under-investment to active investors.",
  },
]

const testimonial = {
  quote:
    "Our quiet periods overlapped with conference submission windows, analyst day prep started 3 weeks before the event instead of 3 months, and our 13F analysis happened when someone thought to run it. Momenties gave our IR program its first real calendar. Our last earnings cycle had zero surprises, and we secured the Needham Growth conference slot for the first time in three years.",
  name: "Seun T.",
  title: "VP Investor Relations, Nasdaq-Listed SaaS",
}

export default function InvestorRelationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Investor Relations Calendar"
        title="On-Time Filings. Secured Conference Slots. Zero Earnings Surprises."
        subtitle="A systematic investor relations calendar with earnings preparation cycles, conference submission deadlines, shareholder communication cadences, and SEC filing management that keeps your IR program credible and your investors informed."
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
            Four Systems That Build IR Program Excellence
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
            Your Annual Investor Relations Calendar
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
            KPIs That Define IR Program Maturity
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
