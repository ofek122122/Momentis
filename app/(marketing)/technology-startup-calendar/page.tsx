import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Technology Startup Calendar | Momenties",
  description: "Momenties helps technology startups track fundraising cycles, board reporting deadlines, SOC 2 audit windows, employment compliance, investor relations, and regulatory filing timelines in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Fundraising Cycle Calendar, Investor Reporting & Cap Table Management",
    description:
      "Technology startups without structured fundraising calendars miss the narrow institutional windows that govern Series A, B, and C raising — most institutional VCs have distinct evaluation cycles (January-March and September-November are peak evaluation windows), and founders who approach investors outside these windows face 30-45 day delays while partners reassemble investment committees. Fundraising calendar: seed/pre-seed angel outreach (rolling — no seasonal constraint, but avoid August and late December), Series A process (12-16 week process — launch in January or September for best partner availability), Series B/C growth-stage process (10-12 weeks — Q1 or Q3 launch), and SAFE/convertible note close (30-60 days for closing mechanics). Investor reporting obligations: monthly investor update (required by most term sheets — first business day of following month), quarterly board package (financial statements, KPI dashboard, risk items — 10 business days before board meeting), annual audited financials (required by most Series A+ term sheets — 90-120 days after fiscal year-end), and annual cap table audit (stock ledger reconciliation). 409A valuation calendar: annual 409A update (required before each option grant and annually for fair market value — engage valuation firm 4-6 weeks before options needed), post-financing 409A update (within 90 days of new financing round), and option grant approval board consent (before grant effective date — backdating creates tax liability). Secondary transactions: tender offer process (20-30 business days minimum — SEC Regulation 14D-9 applies to some transactions), and ROFR (right of first refusal) exercise windows (10-30 days per investor agreements). Momenties manages every fundraising milestone.",
  },
  {
    icon: RefreshCw,
    title: "Board Meeting Calendar, Corporate Governance & Delaware Compliance",
    description:
      "Startups without structured board meeting calendars generate governance violations — most Series A+ term sheets require quarterly board meetings with specific notice periods (typically 5-10 days advance notice), and missed notice requirements create board action voidability risk. Board meeting calendar: quarterly board meetings (Q1 in February, Q2 in May, Q3 in August, Q4 in November — advance scheduling 12 months out), board package delivery (10 business days before meeting), board consent resolutions (as-needed — typically monthly for option grants), and annual meeting of stockholders (Delaware requirement — most startups fulfill via written consent annually). Delaware corporate compliance: Delaware franchise tax (March 1 — calculated on authorized shares method or assumed par value capital method; can reach $200,000+ for authorized-share method — use assumed par value to minimize), registered agent annual renewal (December-January per agent), statement of information filing, and annual consent to corporate record. Series A governance obligations: audit committee formation (required for most Series A+), annual auditor engagement (begin process September-October for December fiscal year — Big 4 or regional firm), stock option plan annual review (board approval required for ESOP pool increases), and insider trading policy annual acknowledgment. Corporate housekeeping calendar: annual IP assignment agreements for new employees (at hire + annual audit), non-compete and confidentiality agreement annual audit for key employees, and patent filing deadline management (12-month provisional patent conversion window — track per filing). Momenties schedules every governance deadline.",
  },
  {
    icon: TrendingUp,
    title: "SOC 2 Audit Cycle, Security Compliance & Technical Certification Calendar",
    description:
      "Technology startups without structured security compliance calendars lose enterprise sales opportunities — 73% of enterprise procurement teams require SOC 2 Type II reports before contract execution, and the SOC 2 Type II observation period requires 6-12 months of continuous control operation, making compliance calendar management a revenue-critical activity. SOC 2 calendar: SOC 2 Type I readiness assessment (3-4 months before Type I target), SOC 2 Type I audit (2-4 weeks — point-in-time), SOC 2 Type II observation period (6-12 months of continuous control operation), SOC 2 Type II annual renewal (complete observation period before prior report expires), and penetration test annual (required for SOC 2 — schedule 4-6 weeks before audit window). Security compliance calendar: annual security risk assessment (NIST CSF framework — Q1), annual vendor security assessment for critical vendors (Q2), annual employee security awareness training (Q1 — phishing simulation included), SOC 2 evidence collection quarterly (access reviews, backup testing, incident response tabletop), and GDPR/CCPA annual privacy impact assessment update. Technical certifications: ISO 27001 (if pursuing — 3-stage process: gap assessment, Stage 1 audit, Stage 2 audit — 12-18 month process), annual ISO 27001 surveillance audit, and FedRAMP authorization (for government sales — 12-18 month process). Bug bounty program: annual program scope review, quarterly payout review, and annual penetration test program coordination. Momenties tracks all security and compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Employment Law Compliance, Benefits Renewal & Startup Operations Calendar",
    description:
      "Technology startups without structured employment compliance calendars accumulate silent liability — California, New York, and other high-tech states impose specific pay equity, non-discrimination, and benefit mandate compliance that requires systematic annual documentation for startups with 15+ employees. Employment compliance calendar: annual EEO-1 report filing (for employers with 100+ employees — due March 31), pay equity audit annual (California SB 1162 — employers with 100+ employees must file pay data report by May 10), California DFEH annual sexual harassment prevention training (SB 1343 — 2 hours for supervisors, 1 hour for non-supervisors, due January 1 of following year), OSHA 300 log annual posting (February 1 — March 1 posting period), and I-9 annual audit (employee work authorization verification). Benefits renewal calendar: health insurance broker review (open enrollment — 60-90 days before renewal date — most small group policies renew January 1), 401(k) plan annual compliance testing (ADP/ACP discrimination testing — March 15 deadline for prior year corrections), ERISA Form 5500 (due July 31 for calendar-year plans — or October 15 with extension), COBRA notice compliance audit (quarterly), and FSA/HSA annual reset notification. Startup R&D and grants: R&D tax credit documentation (quarterly expense tracking for annual claim — Section 41), SBIR/STTR phase application windows (bi-annual solicitations per agency), and state R&D tax credit annual filings. Equity management: annual ISO/NSO option exercise and reporting (Form 3921 January 31 for ISO exercises, Form 3922 for ESPP), and W-2 supplemental equity reporting for RSU vesting. Momenties consolidates the full startup operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Investor Reporting, Delaware Filing & Q1 Board Meeting",
    description: "File Delaware franchise tax (March 1 deadline — begin January with assumed par value calculation). Send annual investor update with audited financials preparation timeline. Renew registered agent. Begin 409A valuation if option grants planned for Q1. Schedule Q1 board meeting (February) and distribute board package 10 days in advance. Post OSHA 300 log (February 1). Renew state business registrations. Complete annual IP assignment audit for employees hired in prior year.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Fundraising Window & Annual Compliance Filing Season",
    description: "Launch Series A/B fundraising if pursuing Q1 window (January-March is peak VC evaluation). File EEO-1 report (March 31 for 100+ employee companies). Begin SOC 2 Type II evidence collection for Q1 observation period. Complete annual security risk assessment. Engage auditors for prior-year annual audit (March-April engagement for December fiscal year). File prior-year R&D tax credit documentation. Complete annual sexual harassment prevention training deadline (California SB 1343).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Annual Audit Completion & Q2 Board Meeting",
    description: "Complete prior-year annual audited financials and distribute to investors (90-120 days after fiscal year-end). Hold Q2 board meeting (May). File California pay data report (May 10 for 100+ employees). Conduct annual vendor security assessment for critical vendors. Run annual stock option plan review — assess if ESOP pool expansion needed. Review Series A/B board composition and committee charters. Begin SOC 2 penetration test scheduling (4-6 weeks lead time).",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "ERISA Filings, Benefits Renewal Prep & Q3 Board Meeting",
    description: "File ERISA Form 5500 for calendar-year benefit plans (July 31 — or extend to October 15). Hold Q3 board meeting (August). Begin health insurance broker review (60-90 days before January 1 renewal). Conduct 401(k) discrimination testing review. Run annual pen test (if SOC 2 audit scheduled for fall). Launch Q3 fundraising window if pursuing (September-November is second peak VC window). Begin SOC 2 Type II audit preparation if observation period complete.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Fall Fundraising Launch & Annual Security Audit",
    description: "Launch fall fundraising process if pursuing (September-October start targets November-December close). Complete SOC 2 Type II audit (if scheduled). Complete annual penetration test and remediation. Run annual employee security awareness training and phishing simulation. Complete health insurance open enrollment. Conduct annual 409A update if not done since last financing round. Begin annual auditor engagement for current-year audit (October for December fiscal year-end clients).",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Q4 Board Meeting, Option Grants & Year-End Compliance Close",
    description: "Hold Q4 board meeting (November). Issue year-end option grants with board consent (before December 31 — 409A must be current). Complete ERISA Form 5500 extension (October 15 passed — verify filed). File Form 3921 for ISO exercises (January 31 deadline — begin tracking December). Complete annual stockholder meeting consent. Lock next-year board calendar and investor reporting schedule. Complete annual harassment prevention training for California employees by December 31. Renew Delaware registered agent.",
  },
]

const kpis = [
  {
    metric: "Investor Reporting On-Time Rate 100%",
    description: "Monthly investor updates and quarterly board packages delivered on schedule; missed investor reporting triggers covenant violations in Series A+ term sheets and erodes investor confidence",
  },
  {
    metric: "SOC 2 Report Renewal ≤ 0 Days Lapsed",
    description: "Continuous SOC 2 Type II coverage with no lapse between report periods; a lapsed SOC 2 report blocks enterprise sales cycles until a new report is issued — typically 6+ month delay",
  },
  {
    metric: "409A Valuation Current 100%",
    description: "All option grants issued with a current 409A valuation; backdated or stale 409A valuations create IRS Section 409A tax liability of 20% additional tax plus penalties on employees",
  },
  {
    metric: "Delaware Franchise Tax On-Time 100%",
    description: "Delaware franchise tax filed and paid by March 1; late payment generates 1.5% monthly interest and potential dissolution of the corporate entity",
  },
  {
    metric: "Annual Audit Delivery ≤ 120 Days",
    description: "Audited financial statements delivered to investors within 120 days of fiscal year-end; delays beyond 120 days trigger reporting default notices from Series A+ preferred stockholders",
  },
  {
    metric: "Employment Law Compliance Rate 100%",
    description: "Zero violations of mandatory employment filings (EEO-1, pay data, OSHA 300 posting, ERISA); employment compliance violations generate regulatory investigations and class action exposure",
  },
]

const testimonial = {
  quote:
    "Monthly investor updates for 28 investors, quarterly board packages for 3-person board with 10-day advance delivery, Delaware franchise tax March 1 with assumed par value calculation, annual 409A valuation before every option grant batch (6 grant cycles per year), annual stockholder consent, SOC 2 Type II annual renewal with 12-month observation period and annual pen test, quarterly SOC 2 evidence collection (access reviews, backup tests, incident response), annual security risk assessment, annual employee security training for 45 staff, California harassment prevention training December 31 deadline for 12 supervisors, EEO-1 filing March 31, pay data report May 10, OSHA 300 log February 1 posting, Form 5500 July 31, health insurance open enrollment 60-day advance, 401(k) discrimination testing, Form 3921 January 31 for 8 ISO exercises, R&D tax credit quarterly expense tracking, SBIR solicitation windows, Series B preparation 12-week process calendar, and registered agent annual renewal — all in spreadsheets. Momenties organized everything. We closed our Series B on time.",
  name: "Chidinma T.",
  title: "CEO & Co-Founder, Series B SaaS Company",
}

export default function TechnologyStartupCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Technology Startup Calendar"
        title="Fundraising Cycles. SOC 2 Renewal. Board Governance. One Calendar."
        subtitle="Momenties tracks fundraising process windows aligned to VC evaluation cycles, quarterly board meeting scheduling with advance package delivery, 409A valuation currency before every option grant, Delaware franchise tax March 1 deadlines, SOC 2 Type II 12-month observation periods and annual renewal, employment compliance filings across EEO-1/pay data/OSHA/ERISA, investor reporting obligations, annual audit delivery timelines, and equity reporting so technology startups never miss a governance deadline or compliance obligation."
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
            Four Startup Operations Pillars Momenties Tracks
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
            12-Month Technology Startup Calendar
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
            Startup Operations KPIs Momenties Keeps on Track
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
