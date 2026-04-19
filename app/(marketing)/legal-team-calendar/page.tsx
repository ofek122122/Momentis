import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Legal Team Calendar | Momenties",
  description: "Momenties helps General Counsel and legal operations leaders track contract renewal cycles, outside counsel review cadences, compliance program calendars, litigation hold governance, and attorney bar renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Contract Renewal Cycles, CLM Governance & Commercial Calendar",
    description:
      "Commercial contracts without systematic renewal calendars create concentrated expiration risk — legal teams that discover renewals within 30 days of expiration have 40% lower negotiation leverage than those with 90+ day advance notice. Contract lifecycle management (CLM) calendar: enterprise customer agreements (annual renewal, 90-day advance notice trigger), vendor MSAs (2-3 year renewal, 120-day advance trigger for strategic vendors), SaaS subscription agreements (annual, 60-day advance), real estate leases (5-10 year term, 12-month advance option exercise window), and employment agreement evergreen review cycles. Contract metadata hygiene: quarterly CLM platform audits — counterparty data, expiration dates, auto-renewal opt-out windows, and executed amendment tracking. Regulatory filing deadlines (SEC, FTC, state AG) require standing calendar entries. IP portfolio — patent maintenance fees, trademark renewal cycles (10-year, $500 USPTO fee), and domain registration renewals — complete the commercial calendar. Momenties manages every contract deadline.",
  },
  {
    icon: RefreshCw,
    title: "Outside Counsel Review, Legal Spend Governance & Panel Management",
    description:
      "Outside counsel spend without structured review cadences grows 15-20% annually on average — and most legal ops teams discover budget variance only at year-end. Monthly legal spend review: invoice approval queues, matter budget variance analysis (flag matters >10% over estimate), and accrual submission to finance (typically T+5 after month-end). Quarterly outside counsel performance reviews: matter-level billing compliance (UTBMS codes, billing guidelines adherence, block billing violations), diversity scorecard tracking, and hourly rate escalation analysis. Annual outside counsel panel review: evaluating panel composition against matter mix, rate benchmarking against ALM survey data, convergence or expansion recommendations, and RFP process for new panel additions. Preferred provider agreement (PPA) renewals (3-year cycle) require 6-month advance preparation. Legal spend dashboard reporting for CFO and board (quarterly). Momenties tracks every spend and panel review cycle.",
  },
  {
    icon: TrendingUp,
    title: "Compliance Program Calendar, Regulatory Deadlines & Policy Review Cycles",
    description:
      "Compliance programs without structured calendars produce reactive crisis management — and regulatory deadlines missed by days create the same liability as those missed by months. Annual compliance calendar: privacy policy review (GDPR/CCPA annual update, triggered by regulatory guidance changes), employee code of conduct certification (annual, 100% completion required), anti-bribery/FCPA training (annual for employees in covered jurisdictions), insider trading window calendar (quarterly blackout periods, board pre-clearance procedures), SOX Section 302/906 CEO-CFO certification cycle (quarterly, 40 days post quarter-end for accelerated filers), and annual board governance calendar (board meeting schedule, proxy filing, annual report). Regulatory examination response calendar: banking regulators (OCC, FDIC, Fed) for fintech/banking-adjacent companies, FTC/state AG inquiry response tracking, and CPSC/FDA for product companies. Litigation hold issuance and release workflows require standing governance. Momenties consolidates the full compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "Attorney Bar Renewal, CLE Compliance & Legal Team Development Calendar",
    description:
      "In-house attorneys managing individual bar renewal obligations while running corporate legal programs face compounded administrative burden — CLE requirements vary by 50 states across 2-3 year cycles with ethics sub-requirements. Attorney CLE tracking: state bar annual report deadlines (varies by state — California 25 CLE hrs/3 years, New York 24 hrs/2 years including 4 ethics, Texas 15 hrs/yr including 3 ethics), multi-state bar admission maintenance, and CLM platform certifications (Ironclad, ContractPodAi, DocuSign CLM). Legal operations team development: Certified Legal Manager (CLM) credential (CLOC), legal project management certification (LPM), and e-discovery certification (CEDS) renewal cycles. Annual legal department budget cycle: matter budget submissions (Q3 draft, Q4 approval, January activation), technology spend review, and outside counsel rate increase negotiations. Legal team satisfaction survey (semi-annual) and career development 1:1 cadence. Momenties manages every attorney professional obligation.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Compliance Calendar Launch & Contract Portfolio Review",
    description: "Distribute annual compliance training assignments (code of conduct, privacy, anti-bribery). Audit CLM platform for contracts expiring in H1 with missing metadata. Issue annual insider trading policy reminder and update trading window calendar. Complete January SOX Section 302/906 certification preparation. Review all outside counsel billing guidelines and distribute updated guidelines to panel.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Legal Spend Review & Compliance Training Deadlines",
    description: "Complete Q1 legal spend review and accrual submission. Run Q1 outside counsel billing compliance audit. Close Q1 annual compliance training completion (most companies set March 31 deadline). Complete Q1 litigation hold status review. Identify H1 contract renewals requiring active negotiation and assign to matter teams.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Outside Counsel Panel Review & Policy Updates",
    description: "Conduct semi-annual outside counsel panel performance review. Update privacy policy and terms of service for H1 regulatory changes (CPRA amendments, FTC rulemaking updates). Complete H1 IP portfolio maintenance fee review. Run legal operations team skill assessment. Begin preferred provider agreement renewal process for fall expirations.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Legal Spend Governance & Contract Renewal Pipeline",
    description: "Complete Q2 legal spend review and board reporting. Audit Q3-Q4 contract expiration pipeline — activate 90-day advance renewal notices for enterprise agreements. Review litigation hold inventory and release holds on resolved matters. Begin annual outside counsel rate increase review for January rate letters. Complete semi-annual attorney CLE progress review.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Legal Budget Cycle & Panel RFP Process",
    description: "Launch annual legal department budget submission (matter budget and outside counsel spend forecast). Begin annual outside counsel panel RFP process for additions or replacements. Complete Q3 legal spend review. Run third-quarter compliance program effectiveness assessment. Update contract playbooks and pre-approved templates for upcoming year.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Contract Renewals, Budget Approval & Bar Renewal Push",
    description: "Execute year-end contract renewal push for December expirations. Complete annual legal budget approval and distribute to matter teams. Finalize outside counsel rate letters for next year. Complete year-end attorney CLE certification filings. Deliver annual legal department performance review and legal risk report to board.",
  },
]

const kpis = [
  {
    metric: "Contract Renewal Rate ≥ 98% On-Time",
    description: "Percentage of contracts renewed before expiration with zero lapsed agreements or auto-renewals missed",
  },
  {
    metric: "Legal Spend Variance ≤ 5% vs. Budget",
    description: "Full-year outside counsel spend versus approved budget; requires monthly accrual discipline throughout the year",
  },
  {
    metric: "Compliance Training Completion 100%",
    description: "Annual code of conduct, privacy, and anti-bribery training completion rate across all required employee populations",
  },
  {
    metric: "Outside Counsel Billing Compliance ≥ 95%",
    description: "Percentage of invoices meeting billing guidelines without requiring write-downs or disputes",
  },
  {
    metric: "Contract Cycle Time ≤ 14 Days (Standard)",
    description: "Days from contract request to executed agreement for standard commercial agreements using pre-approved templates",
  },
  {
    metric: "Attorney CLE Compliance 100%",
    description: "All in-house attorneys meeting state bar CLE requirements with zero delinquent filings or bar suspensions",
  },
]

const testimonial = {
  quote:
    "Quarterly outside counsel spend reviews across 22 law firms, monthly invoice approval queues, 340 contracts tracked in the CLM with staggered expiration dates, annual compliance training campaigns for 800 employees, quarterly SOX certifications, insider trading window management for 35 insiders, CLE tracking for 12 in-house attorneys across 8 state bars, annual preferred provider agreement renewals, and board governance calendar — all tracked in spreadsheets and calendar invites. Momenties organized everything. We had zero lapsed contracts for the first time.",
  name: "Kwame O.",
  title: "General Counsel & Chief Legal Officer, Series D SaaS",
}

export default function LegalTeamCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Legal Team Calendar"
        title="Contract Renewals. Compliance Deadlines. Outside Counsel. One Calendar."
        subtitle="Momenties tracks contract expiration pipelines with 90/60/30-day advance triggers, outside counsel spend review cycles, annual compliance training campaigns, SOX certification windows, attorney CLE deadlines across multiple state bars, and board governance calendars so legal teams never miss a deadline or lapse a contract."
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
            Four Legal Operations Pillars Momenties Tracks
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
            12-Month Legal Team Calendar
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
            Legal Operations KPIs Momenties Keeps on Track
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
