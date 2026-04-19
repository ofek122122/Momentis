import type { Metadata } from "next"
import { Monitor, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Software Audit Calendar | Momenties",
  description: "Build a systematic software audit calendar — software license compliance cycles, SaaS spend rationalization reviews, IT asset management audit cadences, and vendor contract renewal tracking that prevent audit exposure and eliminate wasted software spend.",
}

const pillars = [
  {
    icon: Monitor,
    title: "Software License Compliance Audit Cycles",
    description:
      "Software audit notifications from Microsoft, Oracle, SAP, IBM, and Autodesk arrive without warning — but organizations with structured compliance audit programs respond from a position of strength rather than scrambling. Momenties schedules quarterly software inventory reconciliation (deployed instances vs. licensed seats), semi-annual license compliance self-audits for top 10 software vendors by spend, and annual comprehensive software asset management reviews. Oracle license compliance — the most aggressive auditor in the industry — requires contract-specific compliance checks for database processors, named user metrics, and virtualization policies every 6 months. Microsoft Enterprise Agreement true-up cycles (typically annual with 30-day reporting window) are tracked with owner-assigned preparation tasks starting 60 days before true-up date.",
  },
  {
    icon: RefreshCw,
    title: "SaaS Spend Rationalization & Renewal Prevention Calendar",
    description:
      "The average mid-market company wastes 30-40% of SaaS spend on unused or redundant tools. Momenties schedules monthly SaaS spend reports (identifying tools with <20% active users in the trailing 30 days), quarterly SaaS rationalization reviews where low-utilization tools are evaluated for cancellation or consolidation, and a structured renewal prevention calendar where every SaaS contract renewal is reviewed 90 days before auto-renewal — not discovered after the invoice hits. Shadow IT discovery audits — identifying SaaS tools purchased without IT approval — are scheduled quarterly with finance reconciliation of corporate card charges against approved vendor list.",
  },
  {
    icon: TrendingUp,
    title: "IT Asset Management Review & Endpoint Compliance Cycles",
    description:
      "IT asset management without a review cadence produces hardware and software inventories that are wrong the moment they&apos;re published. Momenties schedules monthly endpoint compliance scans (OS version, software version, security patch level) with exception reporting, quarterly IT asset database reconciliation (physical audit of data center assets against CMDB), and annual hardware refresh planning (identifying assets approaching end-of-support dates 12-18 months in advance). End-of-life software tracking — Windows Server EOL, SQL Server EOL, and major SaaS platform deprecations — is managed with 18-month planning windows. ITAM certification renewals (IAITAM CSAM, CHAMP) are tracked alongside vendor-specific training requirements.",
  },
  {
    icon: BarChart3,
    title: "Vendor Contract Renewal Tracking & Software Spend Benchmarking",
    description:
      "Software contracts with auto-renewal clauses are a silent budget drain — and most IT organizations discover them too late to negotiate. Momenties builds a complete vendor contract renewal calendar with 90/60/30-day alerts before every auto-renewal date, renewal negotiation preparation tasks (usage analysis, competitive pricing benchmarks, license optimization analysis) starting 90 days out, and vendor NDA and master agreement renewal tracking. Software spend benchmarking — comparing per-user cost against published industry benchmarks for major platforms — is scheduled annually before renewal negotiations begin. IT budget review cycles are integrated with procurement approval workflows.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Software Asset Inventory & Renewal Calendar Build",
    description: "Complete software asset inventory across all endpoints and cloud; map all contract renewal dates with auto-renewal clauses; build vendor compliance risk matrix; establish SaaS utilization baseline.",
  },
  {
    month: "Month 3",
    title: "First SaaS Rationalization Sprint & Compliance Self-Audit",
    description: "Run first SaaS rationalization review (cancel or reassign low-utilization tools); complete Microsoft EA true-up preparation if applicable; run Oracle license compliance self-audit for deployed databases.",
  },
  {
    month: "Month 4–5",
    title: "Shadow IT Discovery & Endpoint Compliance Scan",
    description: "Complete shadow IT discovery audit; reconcile corporate card charges against approved vendor list; run quarterly endpoint compliance scan; publish first software spend dashboard to IT leadership.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Software Audit Review & Renewal Forecast",
    description: "Review software compliance self-audit findings; build 18-month renewal forecast; identify top 10 contracts approaching renewal for negotiation preparation; assess EOL software exposure.",
  },
  {
    month: "Month 7–9",
    title: "Major Vendor Renewal Negotiations & Spend Benchmarking",
    description: "Execute renewal negotiations for highest-spend vendors; run annual software spend benchmarking vs. industry peers; complete second half SaaS rationalization review; update CMDB with H1 asset changes.",
  },
  {
    month: "Month 10–12",
    title: "Annual IT Audit Review & Next-Year Budget Planning",
    description: "Present annual software spend report (savings from rationalization, compliance risk reduction, renewal savings); plan next-year IT asset management program; lock renewal calendar for following year.",
  },
]

const kpis = [
  {
    metric: "SaaS Utilization Rate",
    target: "≥ 70% active users/tool",
    description: "Percentage of licensed seats with active usage in trailing 30 days — below 50% average utilization across the SaaS portfolio signals 20-30% of spend is wasted on unused licenses.",
  },
  {
    metric: "License Compliance Rate",
    target: "≥ 98% for enterprise vendors",
    description: "Percentage of deployed enterprise software installations covered by valid licenses — below 95% creates audit exposure; Microsoft, Oracle, and SAP pursue formal audits when discovery indicates under-licensing.",
  },
  {
    metric: "Auto-Renewal Prevention",
    target: "100% reviewed 90 days prior",
    description: "Percentage of SaaS contracts with auto-renewal reviewed before the 90-day cancellation window — missing this window locks companies into another year of potentially unused software at full list price.",
  },
  {
    metric: "Shadow IT Coverage",
    target: "≤ 5% of SaaS spend unapproved",
    description: "Percentage of SaaS spend identified through shadow IT discovery vs. IT-approved procurement — above 15% indicates procurement policy enforcement failure and creates security and compliance risk.",
  },
  {
    metric: "Software Spend Efficiency",
    target: "≥ 15% YoY cost reduction",
    description: "Year-over-year reduction in software spend through rationalization, license optimization, and renewal negotiation — mature SAM programs achieve 15-25% cost reduction in the first 18 months.",
  },
  {
    metric: "EOL Software Exposure",
    target: "Zero unplanned EOL instances",
    description: "Number of production systems running end-of-life software without an approved upgrade plan — any unplanned EOL creates security vulnerability exposure and vendor support contract complications.",
  },
]

const testimonial = {
  quote:
    "An Oracle audit found us with 200 unlicensed processor licenses — a $4.2M exposure we discovered in the worst possible way. After Momenties, we run proactive compliance audits quarterly. We&apos;ve also eliminated $1.8M in SaaS waste through rationalization and 14 auto-renewals we caught before they processed. The program paid for itself in the first quarter.",
  name: "Kolade O.",
  title: "VP IT Operations, Series D Enterprise Tech",
}

export default function SoftwareAuditCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Software Audit Calendar"
        title="Zero License Exposure. 30% SaaS Savings. No Auto-Renewal Surprises."
        subtitle="A systematic software audit calendar with quarterly license compliance cycles, monthly SaaS utilization reviews, 90-day auto-renewal prevention alerts, and annual comprehensive IT asset audits that eliminate software waste and prevent costly vendor audit exposure."
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
            Four Systems That Build Software Governance Excellence
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
            Your 12-Month Software Audit Roadmap
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
            KPIs That Define Software Governance Maturity
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
