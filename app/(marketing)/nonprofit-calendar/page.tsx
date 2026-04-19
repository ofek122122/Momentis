import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Nonprofit Organization Calendar | Momenties",
  description: "Momenties helps nonprofit organizations manage IRS Form 990 deadlines, grant reporting cycles, board governance calendars, donor stewardship campaigns, and state charitable registration renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "IRS 990 Filing, State Charitable Registration & Compliance Calendar",
    description:
      "Nonprofits holding 501(c)(3) status file IRS Form 990 (or 990-EZ for organizations with gross receipts under $200K) by the 15th day of the 5th month after fiscal year end — typically May 15 for calendar-year organizations, with automatic 6-month extension available (Form 8868, extending to November 15). Form 990-N (e-Postcard) organizations with gross receipts ≤$50K file annually by the same deadline. Form 990-T (Unrelated Business Income Tax) is due the same date as Form 990 when the organization has $1,000 or more in gross unrelated business income. State charitable registration renewals are an underappreciated compliance burden — 41 states plus DC require annual or biennial charitable solicitation registration, with deadlines tied to fiscal year end or calendar year (California: RRF-1 due 4.5 months after fiscal year end; New York: CHAR500 due 4.5 months after fiscal year end; Pennsylvania: BCO-10 due 135 days after fiscal year end). Multi-state registrations require Uniform Registration Statement (URS) coordination. State attorney general reporting: some states require separate annual reports to AG charities bureau. FBAR filing: nonprofits with foreign financial accounts exceeding $10,000 file FinCEN 114 by April 15 (10-day automatic extension to October 15). Lobbying activity disclosure: Form 990 Schedule C lobbying hour tracking and any state lobbying registration renewals. Momenties tracks every regulatory filing cycle.",
  },
  {
    icon: RefreshCw,
    title: "Grant Reporting, Foundation Deadline & Fundraising Campaign Calendar",
    description:
      "Grant compliance is the operational heartbeat of most nonprofits — federal grants through Grants.gov, state government grants, and private foundation grants each carry distinct reporting obligations with hard deadlines affecting future funding eligibility. Federal grant reporting calendar: SF-425 Federal Financial Report (FFR) quarterly and annually per award terms (typically 30-90 days post-period end), programmatic progress reports per award schedule, single audit (Uniform Guidance — 2 CFR 200) required for organizations expending ≥$750,000 in federal awards in a year (due 9 months after fiscal year end). Private foundation grant calendar: foundation-specific interim reports (typically 6 months post-award) and final reports (typically 90 days post-grant period end), LOI windows for renewal grants (typically 90-120 days before deadline), and new grant application deadlines tracked per funder. Community foundation grants: local community foundation grant deadlines (typically spring and fall cycles). United Way reporting: annual United Way agency report submission (typically October-December for following year funding cycle). Fundraising campaign calendar: GivingTuesday (first Tuesday after Thanksgiving — October-November preparation), year-end fundraising (October 1 through December 31 — peak season for 30% of annual giving), spring campaign (April-May — Earth Day, Mother&apos;s Day, awareness month alignment), and peer-to-peer fundraising program launch cycles. Annual gala or signature event 12-month production timeline. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Board Governance, Audit Cycle & Organizational Compliance Calendar",
    description:
      "Nonprofit boards carry fiduciary responsibilities that generate a predictable calendar of governance deadlines — annual meeting requirements, committee reporting cycles, policy review obligations, and executive review timelines that must be documented to maintain governance best practices and satisfy major donors and accreditors. Board governance calendar: annual board meeting (state law minimum — most states require at least one annual meeting, with advance notice per bylaws), quarterly board meetings (best practice — package distribution 7-10 days in advance), annual board self-assessment (BoardSource recommended — January-February), executive director annual performance review (typically January-February for calendar-year organizations), and annual conflict of interest disclosure update (IRS Form 990 Schedule L disclosure requirement). Financial oversight calendar: annual independent audit (typically 3-6 months after fiscal year end), annual management letter response and remediation plan, quarterly financial statement review by finance committee, annual budget approval (typically October-November for following fiscal year), and annual Form 990 board review before filing (IRS best practice documentation). Policy review calendar: annual whistleblower policy review and reaffirmation, annual document retention policy review, annual gift acceptance policy review, annual investment policy review, and annual executive compensation review and documentation (IRS rebuttable presumption process — comparability data required). Accreditation calendar: BBB Wise Giving Alliance (biennial), GuideStar/Candid Platinum Seal (annual profile update), and program-specific accreditations. Momenties tracks every governance cycle.",
  },
  {
    icon: BarChart3,
    title: "Donor Stewardship, Membership Renewal & Impact Reporting Calendar",
    description:
      "Donor stewardship is a year-round systematic process — the Association of Fundraising Professionals (AFP) recommends contact touchpoints within 48 hours of gift receipt, 30 days, 90 days, and annual anniversary — creating a continuous personalized calendar across all donor segments. Donor acknowledgment compliance: IRS requires written acknowledgment for all gifts ≥$250 (must be provided before donor files tax return — practically, within 30 days), and quid pro quo disclosure for gifts over $75 where goods or services were provided (fair market value must be stated). Annual donor impact report: major donor (typically top 20% of donors by giving level) annual report production timeline — content deadline typically January, print/distribution February-March. Monthly donor program: annual upgrade ask cycle, lapsed monthly donor reactivation campaign (quarterly), and monthly donor anniversary touchpoints. Membership organization calendar: renewal cycle management (12-month rolling renewals plus annual lapse campaign), new member onboarding sequence, and annual member survey. Planned giving calendar: annual bequest society event, annual planned giving acknowledgment letters, and estate notification follow-up protocol. Grant stewardship: grant acknowledgment within 30 days, interim funder site visit preparation, and relationship cultivation between grant cycles. Capital campaign reporting: quarterly progress reports to campaign leadership, annual campaign report to board, and donor recognition installation milestones. Momenties maps every stewardship touchpoint.",
  },
]

const timeline = [
  {
    phase: "Jan – Feb",
    title: "Governance & Audit Prep",
    tasks: [
      "Annual board retreat and self-assessment",
      "Executive director annual performance review",
      "Annual conflict of interest disclosure update",
      "Fiscal year-end financial statements to auditor",
      "Annual budget vs. actual variance analysis",
      "Board officer elections if required by bylaws",
    ],
  },
  {
    phase: "Mar – Apr",
    title: "990 Filing & Spring Campaign",
    tasks: [
      "IRS Form 990 filing (calendar-year orgs due May 15)",
      "State charitable registration renewal filings",
      "Single audit submission if ≥$750K federal awards",
      "Spring fundraising campaign launch",
      "Annual donor impact report distribution",
      "Grant LOI submissions for fall funding cycles",
    ],
  },
  {
    phase: "May – Jun",
    title: "Audit Completion & Program Reviews",
    tasks: [
      "Independent audit finalized and presented to board",
      "Management letter remediation plan implementation",
      "Program evaluation mid-year reporting to funders",
      "Staff performance reviews",
      "Summer internship or volunteer program onboarding",
      "Event planning for fall signature gala",
    ],
  },
  {
    phase: "Jul – Aug",
    title: "Budget Cycle & Renewal Campaigns",
    tasks: [
      "Annual budget development process begins",
      "Major donor mid-year cultivation events",
      "Membership renewal lapse campaign for 6-month lapsed members",
      "Annual insurance policy renewal review",
      "IRS Form 990-T filing if fiscal year ended March 31",
      "Foundation grant applications for spring deadlines",
    ],
  },
  {
    phase: "Sep – Oct",
    title: "Board Renewal & Year-End Preparation",
    tasks: [
      "Annual budget presentation to board",
      "Board recruitment and nomination cycle",
      "GivingTuesday campaign preparation (8-week runway)",
      "Year-end campaign copy and asset production",
      "Annual employee benefit plan open enrollment",
      "Q3 federal grant progress reports due",
    ],
  },
  {
    phase: "Nov – Dec",
    title: "Year-End Fundraising & Compliance Close",
    tasks: [
      "GivingTuesday campaign execution",
      "Year-end fundraising campaign peak execution",
      "Annual donor acknowledgment letters for tax year",
      "Board annual meeting",
      "Annual policy review cycle (whistleblower, gift acceptance, retention)",
      "Year-end grant compliance documentation",
    ],
  },
]

const kpis = [
  { label: "990 Filing Deadlines Tracked", value: "12+", note: "Federal + multi-state" },
  { label: "Grant Report Deadlines", value: "Zero missed", note: "Automated reminders 30/14/7 days" },
  { label: "Donor Acknowledgment Window", value: "48 hrs", note: "IRS best-practice compliance" },
  { label: "State Charitable Registrations", value: "41 states + DC", note: "Per-state renewal cycles" },
  { label: "Board Meeting Prep Lead Time", value: "10 days", note: "Package distribution standard" },
  { label: "Year-End Campaign Window", value: "Oct 1 – Dec 31", note: "30% of annual giving season" },
]

const testimonial = {
  quote:
    "IRS Form 990 May 15 deadline with board review documentation, Form 990-T for unrelated business income, charitable solicitation registration renewals in 14 states with different deadlines, single audit September 30 submission for $2.1M in federal awards, quarterly SF-425 federal financial reports for 3 active federal grants, private foundation interim reports for 8 grants, final reports for 6 expired grants, LOI submissions for 12 foundation deadlines in Q1, GivingTuesday campaign 8-week preparation, year-end campaign from October through December 31, annual major donor impact report production, monthly donor anniversary touchpoints for 240 recurring donors, membership renewal lapse campaign quarterly, annual board self-assessment January, executive director annual review January, annual conflict of interest disclosures, annual audit management letter remediation, quarterly board meeting package distribution 10 days advance, annual budget board presentation October, annual insurance renewal, and five staff annual benefit enrollments — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi F.",
  title: "Executive Director, Community Development Nonprofit ($4.2M annual budget)",
}

export default function NonprofitCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Nonprofit Organizations"
        title="IRS 990 Filing. Grant Reporting. Board Governance. One Calendar."
        subtitle="Momenties tracks IRS Form 990 annual filing with board review documentation, multi-state charitable registration renewals across 41 states, single audit Uniform Guidance submissions, quarterly federal grant SF-425 reports, private foundation interim and final report deadlines, GivingTuesday 8-week preparation, year-end fundraising campaign, annual board self-assessment, executive director annual review, conflict of interest disclosures, and audit management letter remediation so nonprofits never miss a compliance deadline."
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
            Your Nonprofit Compliance Year, Month by Month
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
            What Momenties Tracks for Nonprofits
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
