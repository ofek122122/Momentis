import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Franchise Operations Calendar | Momenties",
  description: "Momenties helps franchisees and franchise operators track FDD renewal deadlines, franchise agreement milestones, royalty reporting cycles, brand audit preparation, and multi-unit compliance calendars in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "FDD Renewal, Franchise Agreement Milestones & Compliance Disclosure Calendar",
    description:
      "Franchise operations without structured disclosure calendars generate FTC compliance exposure — franchisors must provide an updated FDD at least 14 days before any franchise agreement is signed, and FDD renewal deadlines vary by state registration (16 states require registration, each with independent renewal dates). FDD calendar: FDD annual renewal (within 120 days of fiscal year end for calendar-year franchisors), state registration renewal (16 registration states: California, Hawaii, Illinois, Indiana, Maryland, Michigan, Minnesota, New York, North Dakota, Oregon, Rhode Island, South Dakota, Virginia, Washington, Wisconsin — each with independent renewal deadlines ranging from 120 days post fiscal year end to specific calendar dates), and FDD amendment triggers (material change disclosure required within 60-90 days of material event). Franchise agreement milestones: option exercise calendar (right of first refusal, area development option, renewal option exercise windows — typically 6-12 months before expiration), territory protection expiration review, co-term agreement renewal (multi-unit agreements), and franchise agreement renewal negotiation (2-3 years before expiration). Pre-sale disclosure: franchisee pre-sale disclosure timing tracking (14-day federal rule), resale consent tracking (franchisor approval required for franchisee transfers — typically 30-60 day window). Momenties manages every disclosure milestone.",
  },
  {
    icon: RefreshCw,
    title: "Royalty Reporting Cycles, Technology Fee Audits & Financial Compliance Calendar",
    description:
      "Franchise financial compliance without structured calendars generates audit exposure — franchise agreements typically require weekly or monthly royalty reporting with automatic late fee provisions of 1.5-2% per month on underpaid royalties, and technology system audits can trigger back-payment demands if POS data inconsistencies are discovered. Royalty reporting calendar: weekly royalty reports (typical for food service and retail franchises — submitted by Monday for prior week), monthly royalty reports (service franchise and professional services), royalty audit window (franchisor right to audit typically within 3 years of report submission), and POS data reconciliation monthly (ensure royalty reporting matches POS gross sales). Marketing fund compliance: national marketing fund contribution reporting (typically with royalty report), local marketing spend documentation (minimum spend requirement — typically 2-5% of gross sales — quarterly audit), co-op marketing fund participation (regional advertising co-op quarterly billing), and promotional compliance documentation. Technology fee compliance: POS system update compliance (franchisor-mandated software updates — typical 30-day implementation window), required technology subscription renewals, security compliance (PCI-DSS annual scan for franchisees processing payments), and Wi-Fi and network standard compliance audit. Momenties schedules every financial compliance cycle.",
  },
  {
    icon: TrendingUp,
    title: "Brand Audit Preparation, Quality Standards & Operations Compliance Calendar",
    description:
      "Franchise brand compliance without structured audit preparation generates scores that affect renewals and multi-unit expansion rights — franchisees scoring below 80% on brand audits typically face mandatory improvement plans that can affect franchise renewal eligibility. Brand audit calendar: scheduled brand inspection (semi-annual or annual per franchise system — 30-day advance notice in most systems), mystery shopper program (monthly or quarterly — no advance notice), food safety audit (NSF or similar third-party, semi-annual for food franchises), and operational compliance review (annual). Operations compliance calendar: training certification renewal for all managers (annual — most franchise systems require manager certification renewals), new product rollout training (per system rollout calendar — typically 30-60 day pre-launch training window), equipment upgrade compliance (per franchisor schedule), and uniform and signage compliance review (annual). Health and safety compliance: health permit annual renewal, food handler certification annual for all staff, fire safety inspection, and OSHA training documentation. Franchise field consultant visit preparation: quarterly field consultant visit (advance prep checklist), and annual business review with regional director. Momenties consolidates the full brand compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "Multi-Unit Expansion Calendar, Lease Management & Franchisee Association Calendar",
    description:
      "Multi-unit franchisees without structured expansion calendars miss ADAs (Area Development Agreement) milestone deadlines that trigger contract default — ADA development schedules typically require opening of a specific number of units by specified dates, with rights reverting to the franchisor for missed milestones. Area development calendar: ADA development schedule milestone review (quarterly), unit opening milestone compliance (typically 1-2 new units per year per ADA), site approval process timeline (site selection → franchisor approval → lease negotiation → construction → opening: typically 6-18 months), and ADA territory protection review. Lease management calendar: lease renewal pipeline (12-18 months before expiration — option exercise windows typically 6-12 months before expiration), personal guarantee review and renegotiation at each renewal, co-tenancy clause monitoring (if anchor tenant leaves — triggers lease modification rights), CAM reconciliation (annual — landlord provides within 90 days of fiscal year end), and landlord consent for assignment or transfer. Franchisee association calendar: national franchisee association annual convention and annual meeting, regional franchisee advisory council quarterly meetings, FAC representation elections, and system-wide brand innovation committee participation (for qualifying franchisees). Renewal negotiation: franchise agreement renewal option review 2-3 years in advance, renewal terms negotiation, and renewal disclosure (updated FDD must be provided at renewal). Momenties tracks all multi-unit franchisee obligations.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "FDD Annual Renewal & Royalty Year-End Filing",
    description: "Complete FDD annual renewal (due within 120 days of December 31 fiscal year end — approximately April 30 deadline). File Q4 royalty reports. Complete annual health permits and food handler certifications due Q1. Run January mystery shopper preparation. Review franchise agreement renewal options expiring in H1. Complete annual manager certification renewals for Q1 cycle.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "State Registration Renewals & Spring Brand Audit Prep",
    description: "Complete state FDD registration renewals for states with Q2 deadlines (varies by state). Prepare for spring scheduled brand inspections. Submit Q1 royalty reports and marketing fund contributions. Complete annual POS data reconciliation with Q1 royalty filings. Review ADA development milestones due H1. Run Q1 field consultant visit preparation.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Annual Business Review & Mid-Year Compliance Check",
    description: "Complete annual business review with regional director (most franchise systems Q2). File Q2 royalty reports. Run mid-year brand audit score review. Complete local marketing spend documentation audit for Q1-Q2. Review equipment upgrade compliance per franchisor rollout schedule. Submit H1 local co-op marketing reports. Run mid-year lease pipeline review.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Fall Brand Audit Prep & Expansion Planning",
    description: "Prepare for fall scheduled brand inspections. Begin site selection process for next-year ADA development milestones (6-18 month lead time). File Q3 royalty reports. Complete PCI-DSS annual security scan. Review technology subscriptions and system updates due Q3-Q4. Run franchisee association annual convention preparation.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Year-End Campaign & Renewal Negotiations",
    description: "Execute year-end promotional calendar per franchisor marketing plan. Review franchise agreements expiring within 24 months — begin renewal negotiation process. Complete Q3 royalty and marketing fund filings. Run fall brand inspection. Complete annual OSHA and food safety training documentation. Submit mystery shopper improvement plan for any units below threshold.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Compliance Close & Next-Year Planning",
    description: "Complete Q4 royalty reports (year-end). Lock next-year ADA development plan and site pipeline. Complete annual manager certification renewals for year-end cycle. File December royalty reports. Prepare FDD renewal documents for Q1 submission. Review lease renewals expiring next year. Plan next-year brand compliance calendar and training schedule.",
  },
]

const kpis = [
  {
    metric: "Brand Audit Score ≥ 85%",
    description: "Consistent above-80% brand audit scores maintain franchise agreement renewal eligibility; below 75% triggers mandatory improvement plan and may affect multi-unit expansion rights",
  },
  {
    metric: "Royalty Reporting On-Time Rate 100%",
    description: "Zero late royalty reports; late reporting triggers automatic 1.5-2% monthly late fees and franchisor audit rights — pattern of late filing can be cited in renewal termination",
  },
  {
    metric: "Manager Certification Completion 100%",
    description: "All managers current on franchisor-required certifications before annual renewal window; lapsed certifications discovered at brand audit generate immediate improvement plan",
  },
  {
    metric: "Local Marketing Spend ≥ Required %",
    description: "Monthly local marketing spend at or above franchise agreement minimum (typically 2-5% of gross sales); below minimum triggers royalty audit and back-payment demand",
  },
  {
    metric: "ADA Milestone On-Time Rate 100%",
    description: "All area development agreement opening milestones met on schedule; missed ADA milestones trigger territory reversion and can constitute franchise agreement default",
  },
  {
    metric: "Food Safety Audit Score ≥ 90%",
    description: "Third-party food safety audit scores above 90%; below 80% triggers mandatory retraining, re-audit at franchisee cost, and temporary operational review by franchisor",
  },
]

const testimonial = {
  quote:
    "FDD annual renewal within 120 days of fiscal year end, state registration renewals in California, Illinois, Maryland, and New York on independent deadline calendars, weekly royalty reports for 6 locations, monthly marketing fund contributions, quarterly local marketing spend documentation audits, annual PCI-DSS security scans, semi-annual brand inspections for all 6 units, monthly mystery shopper monitoring, ADA development milestone quarterly review with 2 units under development, manager certification renewals for 18 managers across systems, new product rollout training windows, equipment upgrade compliance schedule, health permit annual renewals for 6 locations, food handler certifications for 80 staff, lease renewal pipeline for 6 leases with option exercise windows, CAM reconciliation annual for 6 locations, annual franchisee association convention, and franchise agreement renewal negotiations for 2 expiring agreements — all in spreadsheets. Momenties organized everything. We had zero compliance gaps for the first time.",
  name: "Taiwo F.",
  title: "Multi-Unit Franchisee, 6 Locations, 2 Franchise Systems",
}

export default function FranchiseOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Franchise Operations Calendar"
        title="FDD Renewals. Royalty Reporting. Brand Audits. One Calendar."
        subtitle="Momenties tracks FDD annual renewal timelines and state registration deadlines across 16 registration states, weekly and monthly royalty reporting cycles with late fee triggers, semi-annual brand inspection preparation windows, mystery shopper monthly readiness, manager certification renewal tracking, local marketing spend quarterly audits, ADA development milestone compliance, lease renewal pipelines with option exercise windows, and franchise agreement renewal negotiation timelines so franchise operators never miss a disclosure or compliance deadline."
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
            Four Franchise Operations Pillars Momenties Tracks
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
            12-Month Franchise Operations Calendar
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
            Franchise Operations KPIs Momenties Keeps on Track
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
