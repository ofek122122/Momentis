import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Real Estate Portfolio Calendar | Momenties",
  description: "Momenties helps real estate investors and portfolio managers track lease renewal cycles, property inspection cadences, insurance renewal calendars, tax assessment deadlines, and lender compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Lease Renewal Cycles, Rent Roll Management & Tenant Communication Calendar",
    description:
      "Lease management without structured renewal calendars is the single largest source of preventable vacancy — properties that begin lease renewal conversations 90 days before expiration achieve 73% lease renewal rates versus 41% for those starting within 30 days. Lease renewal calendar: 120-day advance notice trigger for institutional tenants (offices, commercial), 90-day advance for residential leases, 60-day decision window, and 30-day signed renewal deadline. Rent roll review calendar: monthly rent roll reconciliation (vacancy, delinquency, late fees), quarterly rent-to-market comparison (identifying below-market leases eligible for renewal rate increases), and annual portfolio rent roll audit (reconciling tenant information, security deposits, lease terms). Rent increase calendar: annual CPI-indexed rent adjustment notification (required notice varies by state: 30-60 days for most residential, 60-90 days for commercial), market rate increase communication, and rent escalation clause monitoring for commercial leases. Tenant communication calendar: quarterly property updates, semi-annual walkthrough scheduling, and annual tenant satisfaction survey. Momenties manages every lease and tenant calendar milestone.",
  },
  {
    icon: RefreshCw,
    title: "Property Inspection Cadences, Capital Expenditure Planning & Maintenance Calendar",
    description:
      "Property inspection programs without structured cadences miss early-stage maintenance issues that compound into capital expenditures — properties with quarterly interior and annual exterior inspections average 35% lower CapEx spending than those inspected reactively. Inspection calendar: annual full property inspection (exterior, roof, HVAC, plumbing, electrical), semi-annual exterior inspection (roof condition, foundation, drainage, parking), and quarterly common area inspection (lobbies, hallways, parking lots — for multifamily and commercial). HVAC service calendar: semi-annual HVAC service (spring AC startup and fall heating startup), annual filter replacements and duct cleaning, and 10-15 year equipment replacement planning. Capital expenditure planning calendar: annual CapEx budget review (building systems lifecycle — roof 20-25 years, HVAC 15-20 years, elevators 20-25 years), monthly CapEx spend versus budget tracking, and quarterly major project milestone review. Preventive maintenance calendar: monthly fire suppression system inspection (required in most jurisdictions), annual elevator inspection (state required), bi-annual boiler inspection, and annual electrical safety inspection. Momenties schedules every inspection and CapEx milestone.",
  },
  {
    icon: TrendingUp,
    title: "Property Insurance Renewal, Mortgage Compliance & Lender Reporting Calendar",
    description:
      "Property insurance without advance renewal planning generates coverage gaps and missed savings — investors that begin insurance renewal 90 days before expiration achieve 15-20% better rates than those renewing at deadline. Insurance renewal calendar: 90-day advance broker engagement (start renewal process, request competing quotes), 60-day coverage analysis (comparing current coverage versus property value appreciation, liability adequacy), 30-day policy selection and premium payment, and annual insurance schedule update (adding new acquisitions, removing disposed properties). Mortgage compliance calendar: annual lender escrow analysis (verifying insurance and property tax escrows are funded), quarterly debt service coverage ratio (DSCR) calculation for covenant monitoring, and loan maturity calendar (6-month advance notice for refinancing preparation — gather appraisal, financial statements, rent rolls). Construction or renovation loan draw schedule tracking: monthly construction draw requests, inspection certifications, and lien waiver collection. Property tax calendar: annual property tax assessment review (assess by January 1 in most states), tax appeal deadline tracking (varies significantly by jurisdiction — 30-90 days from assessment notice), and quarterly estimated tax payment calendar. Momenties tracks every insurance and lender obligation.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Performance Reviews, Tax Deadlines & Acquisition/Disposition Calendar",
    description:
      "Real estate portfolio performance without structured reporting cadences produces backward-looking management — investors reviewing portfolio metrics quarterly identify underperforming properties 8-12 months earlier than annual reviewers. Portfolio performance calendar: monthly cash-on-cash return and NOI tracking by property, quarterly portfolio review (comparing actual versus pro forma assumptions, identifying value-add opportunities), and annual portfolio strategy review (asset allocation, disposition candidates, acquisition criteria refresh). Tax compliance calendar: K-1 distribution timeline (March 15 for partnerships), 1031 exchange identification window (45 days from sale), 1031 exchange closing window (180 days), and cost segregation study timing (new acquisitions and renovations — maximize first-year depreciation). Acquisition calendar: quarterly target market analysis, deal underwriting review cycle (monthly for active pipeline), due diligence calendar (60-90 day standard DD period: title, environmental Phase I, inspection, lease review, financing), and closing coordination. Disposition planning: 12-month advance planning for major dispositions (tax planning, marketing preparation, broker engagement), and 1031 exchange replacement property identification strategy. Momenties consolidates the full portfolio calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Portfolio Review & Tax Planning",
    description: "Complete annual portfolio performance review. Review property tax assessments and evaluate appeal candidates. Distribute K-1s to investors by March 15 deadline. Plan cost segregation studies for prior year acquisitions. Review lease renewal pipeline for H1 expirations.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Inspections & Insurance Renewal Kickoff",
    description: "Conduct semi-annual exterior inspections. Complete spring HVAC startup service. Begin insurance renewal for fall expirations (90-day advance). File property tax appeals for assessments under appeal. Review Q1 NOI performance versus pro forma.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Lease Renewals & CapEx Budget Review",
    description: "Complete H1 lease renewal cycle. Review CapEx spend versus annual budget. Conduct semi-annual DSCR calculations for loan covenant compliance. Run tenant satisfaction survey. Review acquisition pipeline and update deal underwriting criteria.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Mid-Year Portfolio Review & Lender Reporting",
    description: "Complete mid-year portfolio performance review. Conduct annual full property inspections (Q3 timing). Prepare semi-annual lender operating statements for covenant reporting. Review disposition candidates for Q4 marketing preparation. Conduct fall HVAC startup service scheduling.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Fall Inspections & Year-End Tax Planning",
    description: "Conduct semi-annual exterior inspections. Complete fall HVAC service. Begin year-end tax planning (1031 exchange identification for any Q4 dispositions). Review Q4 lease renewal pipeline. Engage insurance broker for January expirations.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Portfolio Reporting & Acquisition Planning",
    description: "Complete year-end NOI analysis and investor reporting. Finalize CapEx budget for next year. Lock acquisition criteria and target markets for next year. Complete annual elevator and fire suppression inspections. Prepare annual portfolio summary for lenders.",
  },
]

const kpis = [
  {
    metric: "Portfolio Occupancy ≥ 95% (Multifamily) / ≥ 90% (Commercial)",
    description: "Occupancy rate by asset class; below 90% multifamily or 85% commercial triggers lease renewal strategy and pricing review",
  },
  {
    metric: "NOI Growth ≥ 3-5% Annual",
    description: "Year-over-year net operating income growth across portfolio; below 2% signals rent growth or expense management opportunity",
  },
  {
    metric: "Lease Renewal Rate ≥ 70%",
    description: "Percentage of expiring leases renewed; below 60% signals tenant satisfaction, rent pricing, or property condition issue",
  },
  {
    metric: "DSCR ≥ 1.25x on All Properties",
    description: "Debt service coverage ratio on all mortgaged properties; below 1.20x on any property signals covenant risk requiring proactive lender communication",
  },
  {
    metric: "CapEx vs. Budget ≤ ±10%",
    description: "Capital expenditure spend versus annual CapEx budget; above +20% signals inspection cadence gap or deferred maintenance accumulation",
  },
  {
    metric: "Tax Appeal Win Rate ≥ 50%",
    description: "Percentage of property tax appeals resulting in assessment reduction; below 40% signals need for more aggressive comparable property analysis",
  },
]

const testimonial = {
  quote:
    "Lease renewal tracking across 340 units with 90-120 day advance triggers, annual full inspections for 18 properties, semi-annual exterior inspections, HVAC semi-annual service scheduling, insurance renewal for 22 policies starting 90 days before expiration, quarterly DSCR calculations for 14 lenders, property tax assessment reviews and appeal deadlines across 8 counties, annual K-1 distribution coordination, 1031 exchange identification windows for 3 dispositions, monthly NOI tracking per property, and quarterly investor reporting — all in spreadsheets. Momenties organized everything. Our lease renewal rate went from 58% to 79%.",
  name: "Adaeze R.",
  title: "Managing Director, Commercial & Multifamily Real Estate Portfolio",
}

export default function RealEstatePortfolioCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Real Estate Portfolio Calendar"
        title="Lease Renewals. Property Inspections. Insurance. One Calendar."
        subtitle="Momenties tracks lease renewal pipelines with 120/90/60/30-day advance triggers, annual and semi-annual property inspection schedules, insurance renewal 90-day advance processes, mortgage covenant compliance DSCR calculations, property tax assessment and appeal deadlines, 1031 exchange identification windows, annual CapEx budget cycles, and investor reporting calendars so real estate portfolio managers maximize occupancy and minimize risk."
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
            Four Real Estate Portfolio Pillars Momenties Tracks
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
            12-Month Real Estate Portfolio Calendar
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
            Real Estate Portfolio KPIs Momenties Keeps on Track
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
