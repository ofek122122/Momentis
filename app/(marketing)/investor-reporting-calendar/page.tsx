import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Investor Reporting Calendar | Momenties",
  description: "Momenties helps CFOs and investor relations leaders track monthly investor update cadences, board meeting prep cycles, cap table management reviews, LP reporting deadlines, and fundraising process milestones in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Monthly Investor Update Cadence & Board Communication Calendar",
    description:
      "Investor updates sent monthly are the single highest-ROI investor relations practice — YC, First Round, and Sequoia research consistently shows monthly updaters raise follow-on rounds 40% faster. Monthly investor update production requires a 5-day production cycle: metrics compilation (day 1), narrative drafting (day 2-3), legal review for material information (day 4), and distribution (day 5). Board meeting preparation follows a structured 3-week cycle: board package draft (week 1), pre-read distribution to directors (week 2, 5-7 days before meeting), and follow-up action item tracking (week post-meeting). Board consent resolutions, option grants requiring board approval, and D&O insurance renewal are board calendar items requiring advance scheduling. Annual board evaluation and governance review (required by some institutional investors) requires 4-6 week coordination. Momenties manages every investor communication cycle.",
  },
  {
    icon: RefreshCw,
    title: "Cap Table Management, 409A Valuation & Option Grant Cycles",
    description:
      "Cap table hygiene requires continuous calendar discipline: quarterly cap table reconciliation (confirming shares outstanding match option pool and stock ledger), annual 409A valuation (required before option grants — safe harbor requires new 409A within 12 months of last valuation, or within 3 months of a material event like a new financing round), and QSBS (Qualified Small Business Stock) eligibility tracking (5-year holding period milestones). Option grant cycles — new hire grants, annual refresh grants, and performance awards — require board approval, 409A currency verification, and ISO/NSO election documentation. Exercise and expiration tracking for employee options requires quarterly review to prevent surprise expiration events. Secondary transaction management (tender offers, direct secondaries) requires coordination with transfer agent, legal, and major investors 6-8 weeks before closing. Momenties tracks every cap table milestone.",
  },
  {
    icon: TrendingUp,
    title: "LP Reporting Deadlines & Fund Administration Calendar",
    description:
      "For founders who have raised from institutional LPs with reporting rights, quarterly LP reports (financial statements, portfolio company updates, capital account statements) follow strict deadlines — typically 45-60 days after quarter end. Annual LP reports (audited financials, management fee and carry calculations, TVPI/DPI/RVPI metrics) require 90-120 days post-year-end with audit completion as the critical path. LP advisory committee (LPAC) meetings — typically quarterly or semi-annual — require board-level preparation and compliance with Side Letter obligations. Fund extension or amendment consent solicitations require 45-60 day notice periods. Capital call notices require 10-day advance notice to LPs. Distributions require 5-7 day processing windows. Momenties manages every LP obligation and fund administration deadline.",
  },
  {
    icon: BarChart3,
    title: "Fundraising Pipeline Management & Data Room Maintenance",
    description:
      "Fundraising process management requires a structured calendar: CIM and pitch deck refresh (quarterly), investor pipeline review (weekly during active fundraise), reference check coordination (2-3 weeks per investor), term sheet negotiation (2-4 weeks), and legal close process (4-8 weeks from term sheet). Data room maintenance — ensuring cap table, financials, legal documents, and customer references are current — requires quarterly audits outside active fundraise windows. Material information disclosure policies — ensuring investor updates and data room materials are consistent with Regulation D requirements and don&apos;t selectively disclose material non-public information — require quarterly legal review. Annual investor day (for growth-stage companies) requires 8-12 weeks of preparation. Momenties consolidates the full fundraising operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Investor Calendar Design & Year-End Reporting",
    description: "Complete year-end investor update with annual metrics review. Distribute audited financials to investors with reporting rights. Schedule full-year board and investor calendar. Refresh 409A valuation if last one exceeds 12 months. Run annual cap table reconciliation.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Board Meeting & Option Grant Cycle",
    description: "Prepare and distribute Q1 board package. Run annual employee option grant refresh with board approval. Review QSBS eligibility for recent hires. Issue Q1 LP report if applicable. Update data room with Q1 financials and metrics.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "409A Refresh & Mid-Year Investor Strategy",
    description: "Initiate 409A valuation if triggered by funding event or annual cycle. Run Q2 cap table reconciliation. Prepare H1 investor update with mid-year metrics. Review fundraising pipeline and data room readiness. Run D&O and key person insurance review.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Board Meeting & LP Advisory Review",
    description: "Prepare and distribute Q2 board package. Issue Q2 LP report if applicable. Conduct LPAC meeting preparation and coordination. Review secondary transaction pipeline if any exist. Update investor CRM with relationship status and last touch dates.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Investor Day Prep & Q3 Board Meeting",
    description: "Begin annual investor day preparation if applicable (8-12 week lead time). Prepare Q3 board package. Run Q3 cap table reconciliation. Refresh investor update template with updated metrics framework. Review material information disclosure policy with legal.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Close Prep & Next-Year Fundraising Plan",
    description: "Prepare year-end investor update framework. Coordinate with auditors for year-end audit engagement. Lock next-year fundraising strategy and investor relations calendar. Complete option pool analysis and refresh grant modeling. Distribute annual board governance survey.",
  },
]

const kpis = [
  {
    metric: "Monthly Investor Update Send Rate 100%",
    description: "Investor updates sent within 5 days of month end every month, zero missed months",
  },
  {
    metric: "409A Currency ≤ 12 Months Old",
    description: "Current 409A valuation in place before any option grants; new 409A within 3 months of material events",
  },
  {
    metric: "Board Package Distributed 5+ Days Pre-Meeting",
    description: "Board pre-reads distributed minimum 5 business days before every board meeting",
  },
  {
    metric: "Cap Table Reconciled Quarterly",
    description: "Cap table matches stock ledger and option pool with zero unexplained variances quarterly",
  },
  {
    metric: "LP Reports Delivered Within 60 Days of Quarter End",
    description: "Quarterly LP reports meeting all side letter and fund agreement reporting obligations",
  },
  {
    metric: "Data Room Updated Within 30 Days of Quarter Close",
    description: "Investor data room refreshed with current financials, metrics, and legal documents quarterly",
  },
]

const testimonial = {
  quote:
    "Monthly investor updates, quarterly board packages, annual 409A valuation timing, option grant cycles requiring current 409A, quarterly cap table reconciliations, semi-annual LPAC meetings, LP quarterly reports with 45-day deadlines, D&O renewal, and year-end audit coordination — all on separate calendars managed by different people. Momenties gave us one investor relations operating system. Our board rating of our investor communications jumped from 7.1 to 8.9 in one year.",
  name: "Chukwuemeka A.",
  title: "CFO, Series B SaaS — $45M ARR",
}

export default function InvestorReportingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Investor Reporting Calendar"
        title="Monthly Investor Updates. Board Packages. 409A Cycles. One Calendar."
        subtitle="Momenties tracks monthly investor update production cycles, board meeting preparation timelines, 409A valuation renewal windows, option grant approval cycles, quarterly cap table reconciliation, LP reporting deadlines, and fundraising data room maintenance so investor relations leaders never miss a commitment."
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
            Four Investor Reporting Pillars Momenties Tracks
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
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            12-Month Investor Reporting Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Investor Reporting KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
