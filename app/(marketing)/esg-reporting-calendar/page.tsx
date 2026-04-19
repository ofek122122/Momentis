import type { Metadata } from "next"
import { Leaf, FileText, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "ESG Reporting Calendar | Momenties",
  description: "Build a systematic ESG reporting calendar — GHG emissions data collection cycles, CDP and TCFD disclosure schedules, sustainability committee meeting cadences, and third-party ESG audit timelines that keep your ESG program credible and audit-ready.",
}

const pillars = [
  {
    icon: Leaf,
    title: "GHG Emissions Data Collection & Science-Based Targets Calendar",
    description:
      "Greenhouse gas emissions reporting requires a structured data collection calendar — not a Q4 scramble through utility bills. Momenties schedules monthly Scope 1 and Scope 2 energy consumption data collection from facility managers and finance teams, quarterly Scope 3 upstream and downstream emissions data collection from key suppliers and logistics providers, and annual emissions inventory compilation with third-party verification (required for GHG Protocol alignment, Science Based Targets initiative, and most ESG rating frameworks). SBTi target validation renewals — required when material business changes occur — are tracked with 90-day lead time. Emissions reduction initiative tracking cadence is scheduled quarterly against approved decarbonization roadmap milestones.",
  },
  {
    icon: FileText,
    title: "CDP, TCFD & Regulatory Disclosure Calendar",
    description:
      "CDP climate disclosure is due in July annually — with data collection starting in January and scoring methodology published in March. Missing the CDP submission window creates a year-long gap in institutional investor records. Momenties schedules the complete disclosure calendar: TCFD alignment assessment (annual, typically Q1), CDP questionnaire preparation (12-week cycle from data collection to submission), GRI Standards index update (post-annual report publication), and SASB industry-specific disclosure update. SEC Climate Disclosure Rule compliance — effective for large accelerated filers in 2025-2026 — requires Scope 1/2 verification audit scheduling and materiality assessment documentation. EU CSRD applicability assessment is managed for companies with EU operations.",
  },
  {
    icon: TrendingUp,
    title: "Sustainability Committee Meetings & Board ESG Oversight Calendar",
    description:
      "ESG programs without governance cadence lack credibility with institutional investors and proxy advisors. Momenties schedules quarterly sustainability committee meetings (management-level, with cross-functional ESG working group participation), semi-annual board ESG oversight committee presentations (ESG metrics vs. targets, material ESG risks, regulatory compliance status), and annual ESG materiality reassessment (updated every 2-3 years with stakeholder engagement process). Proxy season ESG preparation — Say-on-Pay ESG integration, shareholder ESG proposals, ISS/Glass Lewis ESG score management — is managed in parallel with the proxy calendar beginning 4 months before the annual meeting date.",
  },
  {
    icon: BarChart3,
    title: "Third-Party ESG Audit, Ratings Management & Supplier Assessment",
    description:
      "Third-party ESG assurance — limited or reasonable assurance on GHG inventory and key ESG metrics — requires auditor engagement 6-8 months before reporting deadline. Momenties schedules MSCI ESG Rating review and improvement cycle (annual re-rating typically March-May), Sustainalytics ESG Risk Rating assessment cycle, ISS ESG score management, and CDP verification audit scheduling. Supplier ESG assessment programs — requiring suppliers above spend thresholds to complete EcoVadis, CDP Supply Chain, or custom ESG questionnaires — are managed with submission deadlines and non-response escalation alerts. Annual Scope 3 supplier engagement campaigns are calendared to coincide with CDP Supply Chain submission windows.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "ESG Baseline Assessment & Reporting Calendar Architecture",
    description: "Audit current ESG data collection infrastructure; identify material ESG topics; map all external reporting deadlines (CDP, TCFD, GRI, SASB); assign data owners; establish GHG inventory methodology.",
  },
  {
    month: "Month 3",
    title: "GHG Inventory Launch & Scope 3 Supplier Outreach",
    description: "Launch structured Scope 1/2/3 data collection workflow; begin supplier ESG assessment program; complete first quarterly emissions data collection; assess SBTi target feasibility.",
  },
  {
    month: "Month 4–5",
    title: "CDP Preparation & ESG Ratings Improvement",
    description: "Begin CDP questionnaire preparation; audit current MSCI and Sustainalytics score drivers; identify top 5 improvement opportunities; complete TCFD alignment gap assessment.",
  },
  {
    month: "Month 6",
    title: "Third-Party Verification Engagement & Mid-Year Review",
    description: "Engage third-party auditor for GHG limited assurance; run mid-year ESG metrics review vs. targets; update ESG risk register; prepare board ESG oversight presentation.",
  },
  {
    month: "Month 7–9",
    title: "CDP Submission & Annual Report ESG Integration",
    description: "Submit CDP climate questionnaire; complete supplier ESG assessments; draft sustainability report content; integrate ESG content into annual report production cycle.",
  },
  {
    month: "Month 10–12",
    title: "Annual ESG Report Publication & Next-Year Planning",
    description: "Publish annual sustainability/ESG report with third-party verification; update GRI index and TCFD table; present annual ESG program review to board; set next-year ESG targets and disclosure calendar.",
  },
]

const kpis = [
  {
    metric: "GHG Data Collection Completeness",
    target: "≥ 95% of Scope 1/2 by Q1",
    description: "Percentage of Scope 1 and Scope 2 emissions data collected and validated by end of Q1 — below 85% by April creates CDP submission risk and third-party verification timeline pressure.",
  },
  {
    metric: "CDP Score",
    target: "B or above (leadership A-)",
    description: "CDP climate score — Management (C) is minimum acceptable for institutional investor screening; Leadership (A-/A) improves ESG ratings and appears in CDP Climate A List benchmarks.",
  },
  {
    metric: "Emissions Reduction vs. SBTi",
    target: "On track annually",
    description: "Absolute Scope 1+2 emissions reduction progress vs. approved SBTi pathway — off-track status two consecutive years triggers SBTi target revocation and public CDP disclosure requirement.",
  },
  {
    metric: "ESG Rating Improvement",
    target: "MSCI BBB or above",
    description: "MSCI ESG rating — CCC/B ratings trigger exclusion from ESG-screened funds and negative proxy advisor commentary; BBB+ positioning requires addressing laggard ESG issue areas systematically.",
  },
  {
    metric: "Supplier ESG Coverage",
    target: "≥ 70% of Scope 3 spend",
    description: "Percentage of total procurement spend covered by supplier ESG assessments — below 50% coverage creates Scope 3 data quality issues that affect CDP score and SBTi Scope 3 target validation.",
  },
  {
    metric: "ESG Report Publication",
    target: "Within 90 days of fiscal year end",
    description: "Days from fiscal year end to ESG report publication — above 180 days creates investor relations and proxy season complications; below 90 days signals mature ESG data infrastructure.",
  },
]

const testimonial = {
  quote:
    "We had ESG commitments but not an ESG program — emissions data came from three different teams with no consolidation process, CDP was always a last-minute fire drill, and our MSCI rating sat at BB for two years while we wondered why. Momenties gave our sustainability team a real calendar. We published our first verified ESG report on time, CDP went from C to B, and MSCI upgraded us to BBB.",
  name: "Nkechi A.",
  title: "Chief Sustainability Officer, Nasdaq-Listed Manufacturing",
}

export default function ESGReportingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="ESG Reporting Calendar"
        title="CDP B Score. Verified Emissions. ESG Report Published On Time."
        subtitle="A systematic ESG reporting calendar with monthly GHG data collection cycles, CDP and TCFD disclosure schedules, third-party verification audit timelines, and sustainability committee cadences that keep your ESG program credible, verified, and audit-ready."
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
            Four Systems That Build ESG Program Credibility
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
            Your Annual ESG Reporting Roadmap
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
            KPIs That Define ESG Program Maturity
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
