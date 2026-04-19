import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Construction Company Calendar | Momenties",
  description: "Momenties helps construction companies manage contractor license renewals, OSHA training cycles, bonding and insurance renewal windows, bid submission deadlines, and lien filing deadlines in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Contractor License, Bonding & Insurance Compliance Calendar",
    description:
      "General contractors and specialty contractors operate under state licensing regimes that vary dramatically — contractor license renewals range from annual (California: $300, every 2 years with 32 CE hours in some states) to biennial, with CE requirements in states including California (CSLB 8 hours for qualifying individuals), Florida (14 CE hours biennial), Arizona (24 CE hours biennial), and Texas (no CE requirement). Most states require separate specialty trade licenses: electrical (master and journeyman — annual or biennial renewal), plumbing (master plumber — annual or biennial), HVAC (EPA 608 refrigerant certification — no expiration, but annual refrigerant tracking), and roofing (state-specific annual or biennial). Contractor bond renewal: surety bond renewal typically annual — bond amount varies by state license classification ($15,000-$100,000 range), with bond cancellation triggering automatic license suspension. Commercial general liability (CGL) insurance: annual renewal with 30-day advance certificate of insurance update to all active project owners (AIA A201 requirement). Workers&apos; compensation: annual audit and renewal — experience modification rate (EMR/MOD) annual update affects bonding eligibility and contract bid qualification. Professional liability/errors & omissions: annual renewal for design-build contractors, contractors with BIM delivery, or construction managers at risk. OCIP/CCIP enrollment: project-specific owner-controlled or contractor-controlled insurance program enrollment deadlines. Momenties tracks every license and insurance cycle.",
  },
  {
    icon: RefreshCw,
    title: "OSHA Training, Safety Certification & Workforce Compliance Calendar",
    description:
      "Construction is the most heavily OSHA-regulated industry sector — OSHA 29 CFR 1926 (Construction Industry Standards) creates annual and periodic training obligations that are prerequisites for contract performance on federal and state prevailing wage projects, and most private commercial contracts. OSHA training calendar: OSHA 10 (Construction) — no expiration per OSHA, but contractors typically require 4-year renewal for site access; OSHA 30 (Construction — supervisors) — same 4-year industry renewal standard. First Aid/CPR/AED: annual recertification required under OSHA 1926.50 when medical facilities are not reasonably accessible — employer must provide at least one person per worksite per shift who is trained. Fall protection competent person: annual recertification for fall protection competent persons (OSHA 1926.502 requires competent person designation for fall protection systems). Silica dust: annual silica dust safety training required under OSHA 1926.1153 for all workers on tasks with silica exposure — supervisor competency documentation required. Confined space entry: annual refresher training for workers with confined space entry duties (OSHA 1926.1213). Scaffold safety: annual competent person designation for scaffold erection crews. Lead/asbestos: annual refresher required for workers on RRP and asbestos projects. HAZWOPER: annual 8-hour refresher for workers with HAZWOPER 40-hour certification on contaminated site projects. CDL medical certificate: annual or biennial DOT physical for operators of commercial vehicles. Prevailing wage: Davis-Bacon certified payroll weekly documentation for federal projects. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Bid Calendar, Project Milestone Tracking & Lien Deadline Management",
    description:
      "Construction revenue depends on winning bids before competitors — bid windows for public contracts are published on SAM.gov (federal), state procurement portals, and local government bid boards with hard submission deadlines. Federal bidding calendar: SAM.gov registration annual renewal (mandatory for all federal contracting — renewal deadline tracked per registration date), CAGE code verification annual, and SBA size certification renewal (8(a) annual report, HUBZone recertification, SDVOSB annual certification). State prequalification: annual contractor prequalification renewal for state DOT and public works projects — most state DOTs require annual financial statement submission. Lien rights calendar: mechanics lien filing deadlines are the most time-critical compliance obligation in construction finance — preliminary notice (20 days from first furnishing in California, 20 days in Arizona, 10 days in Texas for residential) must be filed before lien rights attach; original contract lien (90 days after completion in California, 60 days after punch list in Florida, 4 months in Texas); lien release coordination with lender at each draw. Payment application calendar: monthly AIA G702/G703 application for payment submission (typical GC-to-owner schedule — 25th of month for following month payment), monthly sworn statement or schedule of values update, and substantial completion documentation with AIA G704. Subcontractor management: subcontractor insurance certificate annual renewal tracking, annual subcontractor prequalification renewal, and joint check agreement documentation. Certified payroll: weekly submission to awarding authority for Davis-Bacon and state prevailing wage projects. Momenties tracks every deadline.",
  },
  {
    icon: BarChart3,
    title: "Financial Compliance, Equipment Depreciation & Construction Tax Calendar",
    description:
      "Construction companies use the percentage-of-completion or completed-contract accounting method — each creating unique tax timing obligations that differ from accrual-basis businesses and require careful year-end revenue recognition management. Construction tax calendar: IRS Form 8697 (Interest Under the Look-Back Method for Completed Long-Term Contracts) — required annually for contracts using percentage-of-completion, filed with tax return. Section 179 and bonus depreciation: equipment purchase documentation must be completed before December 31 for current-year deduction — crane purchases, excavators, lifts, and vehicles tracked against $1,160,000 (2023) Section 179 limit. Form 1099-NEC: subcontractor 1099 distribution January 31 for all subcontractors paid ≥$1,000 during the year — requires W-9 collection throughout the year. Sales and use tax: most states tax construction materials differently by project type (exempt for new construction, taxable on renovation — state-specific rules requiring quarterly or monthly filings). Federal contracting: certified cost or pricing data submission for contracts above simplified acquisition threshold, annual incurred cost submission (ICE) for cost-reimbursable contracts, and DCAA audit preparation. Retainage: state prompt payment act deadlines — most states require retainage release within 30-90 days of final acceptance. Business personal property tax: annual BPP return for construction equipment in states with tangible personal property tax — equipment schedule must be updated annually. OSHA 300 log: annual posting February 1 through April 30, annual submission to OSHA by March 2 for covered establishments. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "Tax Prep & OSHA Compliance",
    tasks: [
      "OSHA 300 log annual posting (February 1)",
      "1099-NEC distribution to all subcontractors (January 31)",
      "W-2 distribution for employees (January 31)",
      "Annual SAM.gov federal contractor registration renewal",
      "State contractor prequalification financial statement submission",
      "Workers&apos; comp annual audit completion",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "License Renewals & Bid Season Prep",
    tasks: [
      "OSHA 300 annual submission to OSHA (March 2)",
      "Contractor license renewal filings (state-specific windows)",
      "Surety bond renewal execution",
      "Spring public works bid season preparation",
      "SAM.gov annual representations and certifications update",
      "State DOT prequalification renewal",
    ],
  },
  {
    phase: "May – Jun",
    title: "Summer Project Launch",
    tasks: [
      "Annual OSHA silica dust training documentation",
      "Annual confined space entry refresher training",
      "Summer project mobilization — lien preliminary notice filing tracking",
      "Fall protection competent person annual designation",
      "CGL and professional liability insurance mid-year review",
      "Subcontractor insurance certificate renewal tracking",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "Mid-Year Compliance Audit",
    tasks: [
      "Annual scaffold safety competent person designation",
      "Annual lead/asbestos refresher for RRP workers",
      "HAZWOPER annual 8-hour refresher for qualified workers",
      "Mid-year lien deadline review for all active projects",
      "Annual DOT physical for CDL operators due this cycle",
      "Annual First Aid/CPR/AED recertification for site supervisors",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Year-End Project Push",
    tasks: [
      "Year-end equipment purchase decisions (Section 179 deadline Dec 31)",
      "Fall public works bid season",
      "Annual subcontractor prequalification renewal cycle",
      "OSHA 30 renewal for supervisors due this cycle",
      "Retainage release documentation for completed projects",
      "Annual business personal property tax schedule update",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Financial Close & Insurance Renewals",
    tasks: [
      "CGL and workers&apos; comp annual renewal (30-day advance COI distribution)",
      "Year-end revenue recognition — percentage-of-completion documentation",
      "Equipment purchases completed before December 31 for Section 179",
      "W-9 collection audit — all subcontractors paid ≥$1,000",
      "Form 8697 look-back interest calculation preparation",
      "Annual safety training completion documentation",
    ],
  },
]

const kpis = [
  { label: "License Jurisdictions Tracked", value: "50 states", note: "GC + specialty trades per state" },
  { label: "Lien Deadlines Per Project", value: "3–5", note: "Preliminary notice, lien filing, release" },
  { label: "OSHA Training Cycles", value: "8 types", note: "Fall, silica, confined space, first aid, etc." },
  { label: "1099-NEC January 31 Deadline", value: "Zero late", note: "Per subcontractor throughout year" },
  { label: "COI Distribution Window", value: "30 days", note: "Before insurance expiration" },
  { label: "Federal SAM.gov Renewal", value: "Annual", note: "Lapse = disqualified from federal bids" },
]

const testimonial = {
  quote:
    "Annual CSLB contractor license renewal for GC and 3 specialty trades, surety bond annual renewal with 30-day advance notification to 22 active project owners, annual CGL renewal with COI distribution, annual workers&apos; comp renewal and EMR update, annual SAM.gov federal registration renewal, annual state DOT prequalification financial statement, OSHA 300 log February 1 posting and March 2 submission, 1099-NEC for 48 subcontractors by January 31, OSHA silica annual training documentation for 34 workers, annual confined space refresher for 12 workers, annual lead/asbestos refresher for 8 RRP-certified workers, HAZWOPER annual refresher for 4 workers, fall protection competent person annual designation, lien preliminary notice tracking for 14 active projects with state-specific deadlines, monthly AIA G702 application for payment submissions for 6 ongoing projects, annual subcontractor insurance certificate renewal tracking for 38 active subs, equipment Section 179 documentation before December 31, and annual BPP tax schedule update — simultaneously across 2 states. Momenties mapped every deadline.",
  name: "Emeka C.",
  title: "President, General Contracting & Construction Management Firm ($18M annual revenue)",
}

export default function ConstructionCompanyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Construction Companies"
        title="Contractor License. OSHA Training. Lien Deadlines. One Calendar."
        subtitle="Momenties tracks state contractor license renewals across all trade classifications, surety bond annual renewal with 30-day COI distribution to project owners, OSHA training certification cycles (fall protection, silica, confined space, first aid, HAZWOPER), preliminary lien notice filing deadlines per project, annual SAM.gov federal registration renewal, monthly AIA payment application submissions, 1099-NEC subcontractor deadline tracking, and equipment Section 179 documentation so construction companies stay compliant and never miss a bid qualification deadline."
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
            Four Calendar Pillars Momenties Manages for You
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
            Your Construction Compliance Year, Month by Month
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.tasks.map((task) => (
                    <li key={task} style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.55, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>›</span>
                      {task}
                    </li>
                  ))}
                </ul>
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
            What Momenties Tracks for Construction Companies
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div
                key={k.label}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "#c5a35c", fontSize: "1.8rem", fontWeight: 700, marginBottom: 6 }}>{k.value}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>{k.label}</p>
                <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.82rem" }}>{k.note}</p>
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
