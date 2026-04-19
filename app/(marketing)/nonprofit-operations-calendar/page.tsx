import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Nonprofit Operations Calendar | Momenties",
  description: "Momenties helps Executive Directors and nonprofit operations leaders track grant reporting cycles, board governance cadences, IRS Form 990 deadlines, annual audit timelines, and fundraising campaign calendars in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Grant Reporting Cycles, Funder Relations & Program Compliance Calendar",
    description:
      "Grant management without structured reporting calendars is the single largest cause of preventable funder relationship damage — nonprofits that miss grant report deadlines experience 40% lower renewal rates than those with consistent on-time reporting. Grant reporting calendar: federal grant reporting (typically quarterly or semi-annual, with final report within 90 days of grant period end — e.g., HRSA, HHS, DOJ, DOE grants), foundation grant reporting (varies widely: monthly progress, semi-annual narrative, annual comprehensive report), and corporate grant reporting (typically annual, aligned with funder fiscal year). Grant compliance calendar: grant period extension requests (submit 60 days before grant end if needed), budget modification requests (submit per funder guidelines, typically 30-60 days advance), and site visit preparation (2-4 week preparation window). Federal grant compliance: SAM.gov annual registration renewal (required for all federal grant recipients), Uniform Guidance (2 CFR Part 200) annual compliance audit preparation (for organizations receiving ≥$750,000 in federal funding), and FFR (Federal Financial Report) submission deadlines. Momenties manages every grant compliance cycle.",
  },
  {
    icon: RefreshCw,
    title: "Board Governance Cadence, Committee Meetings & Strategic Planning Calendar",
    description:
      "Board governance without structured calendars produces reactive board engagement — boards that meet without advance preparation materials distributed 7+ days before meetings spend 60% of meeting time on updates rather than governance decisions. Board meeting calendar: monthly or bi-monthly board meetings (materials distributed 7-10 days in advance), annual board meeting (December or per bylaws — for officer elections and strategic review), annual board self-assessment (governance effectiveness survey), and board member recruitment and onboarding (30-60 day onboarding process). Committee meeting calendar: executive committee (monthly, between board meetings), finance committee (monthly — budget review, cash flow, investment review), audit committee (quarterly), fundraising/development committee (monthly), and program committee (quarterly). Strategic planning calendar: 3-year strategic plan review (annual progress check against strategic goals), full strategic plan refresh (every 3-5 years, 6-month facilitated process), and annual strategic dashboard presentation to board. Executive director annual performance review (December or per employment agreement). Momenties schedules every governance milestone.",
  },
  {
    icon: TrendingUp,
    title: "IRS Form 990 Filing, Annual Audit & Financial Compliance Calendar",
    description:
      "Nonprofit financial compliance without structured calendars generates late fees, IRS penalties, and loss of tax-exempt status — organizations that miss Form 990 deadlines for 3 consecutive years automatically lose 501(c)(3) status under Pension Protection Act. IRS Form 990 filing calendar: Form 990 due 4.5 months after fiscal year end (May 15 for calendar year nonprofits), with 6-month automatic extension available (Form 8868 filed by original deadline, extends to November 15), and public disclosure requirement (990 must be made available within 30 days of filing). Annual financial audit calendar: audit kickoff meeting (typically 2-3 months before fiscal year end), fieldwork (1-2 months post fiscal year end), draft review (4-6 weeks), management response (2 weeks), and final report distribution (8-12 weeks post fiscal year end). Charitable registration renewal: state charitable solicitation registration (varies by state — 39 states require registration, renewal deadlines vary from 30 days to 6 months after fiscal year end). Nonprofit state annual report filings. Endowment investment policy review (annual). Financial audit committee review of management letter findings (within 30 days of audit completion). Momenties consolidates the full financial compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "Fundraising Campaign Calendar, Donor Stewardship & Impact Reporting",
    description:
      "Fundraising programs without structured calendars miss predictable funding windows — year-end giving (October-December) represents 30% of annual charitable giving, and organizations without 90-day preparation miss the single largest fundraising opportunity of the year. Fundraising calendar: year-end campaign (September strategy, October content production, November launch, December follow-up — 5x typical donation velocity), GivingTuesday (first Tuesday after Thanksgiving — 8-week preparation window), spring campaign (April/May for many cause areas), and major donor stewardship calendar (monthly touchpoints for donors above major gift threshold, annual personal meeting). Grant prospecting calendar: foundation grant calendar (most foundations have annual or semi-annual deadlines — research 6-12 months in advance for letter of inquiry windows), government RFP calendar (subscribe to Grants.gov alerts), and corporate foundation deadline calendar. Donor stewardship: acknowledgment letters within 48 hours of gift, IRS substantiation letter (for gifts over $250, required by January 31 of following year), and annual impact report production (Q1 for prior year). Volunteer management calendar: annual volunteer appreciation event, quarterly volunteer communication, and quarterly volunteer hour reporting for grant compliance. Momenties schedules every fundraising milestone.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Form 990 Preparation & Year-End Fundraising Close-Out",
    description: "Begin Form 990 preparation with accounting team. Send IRS substantiation letters to donors (January 31 deadline). Complete year-end fundraising campaign analysis. Send annual donor impact reports. File state charitable registration renewals due in Q1.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Annual Audit Season & Spring Fundraising",
    description: "Complete annual financial audit (calendar year organizations). Submit Form 990 or file extension. Launch spring fundraising campaign. Run annual board self-assessment. Complete Q1 grant reporting for active grants. Distribute audited financial statements to board.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Strategic Plan Review & Foundation Grant Season",
    description: "Conduct annual strategic plan progress review with board. Submit H1 foundation grant reports. Research and submit letters of inquiry for fall grant deadlines. Complete fiscal year-end close. Audit committee review of management letter findings. Prepare Q2 program outcome data.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "New Fiscal Year Launch & Board Retreat",
    description: "Launch new fiscal year budget and program plans. Conduct annual board retreat (strategic planning and team building). File SAM.gov annual registration renewal if applicable. Complete summer foundation grant submissions. Review Q3-Q4 staffing and volunteer needs.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Year-End Campaign Preparation & GivingTuesday Prep",
    description: "Launch year-end fundraising campaign strategy. Begin GivingTuesday preparation (8-week advance). Submit fall foundation grant applications. Complete Q3 grant reports for active grants. Run annual major donor stewardship meetings. Review board fundraising commitments for year-end.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Campaign Execution & Annual Planning",
    description: "Execute GivingTuesday and year-end campaign. Complete annual board meeting and officer elections. Lock next-year operating budget. Complete Q4 federal grant reports. Run year-end volunteer appreciation event. Begin next-year strategic calendar planning.",
  },
]

const kpis = [
  {
    metric: "Grant Report On-Time Rate 100%",
    description: "Zero late grant reports; one missed deadline can jeopardize renewal and damage multi-year funder relationships",
  },
  {
    metric: "Fundraising Revenue Growth ≥ 10% Annual",
    description: "Year-over-year total revenue growth; flat or declining revenue trajectory signals donor retention, acquisition, or campaign execution issue",
  },
  {
    metric: "Donor Retention Rate ≥ 60%",
    description: "Percentage of prior-year donors giving again; below 45% signals stewardship gap — industry average is 45%, top performers achieve 60-70%",
  },
  {
    metric: "Form 990 Filed On-Time 100%",
    description: "Zero late 990 filings; 3 consecutive years of late filing results in automatic IRS revocation of 501(c)(3) status",
  },
  {
    metric: "Program Expense Ratio ≥ 75%",
    description: "Percentage of total expenses spent on programs versus administration and fundraising; below 65% triggers donor and watchdog concern",
  },
  {
    metric: "Board Meeting Attendance ≥ 80%",
    description: "Average board member meeting attendance rate; below 70% signals governance gap requiring board composition or engagement review",
  },
]

const testimonial = {
  quote:
    "Quarterly progress reports for 14 active grants across 8 funders with different templates and deadlines, federal FFR semi-annual submissions, SAM.gov annual renewal, Form 990 annual preparation, annual financial audit coordination, state charitable registration renewals in 6 states, monthly board and committee meetings with 7-day materials deadlines, annual board retreat planning, year-end campaign 90-day preparation cycle, GivingTuesday 8-week campaign, spring campaign, annual donor impact report, major donor stewardship meetings, volunteer hour tracking, and IRS substantiation letters for 800 donors — all in spreadsheets. Momenties organized everything. We had zero missed grant deadlines for the first time.",
  name: "Chidinma E.",
  title: "Executive Director, National Health Equity Nonprofit",
}

export default function NonprofitOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Nonprofit Operations Calendar"
        title="Grant Reporting. Form 990. Year-End Campaign. One Calendar."
        subtitle="Momenties tracks grant reporting deadlines across all active grants with 30-day advance reminders, IRS Form 990 annual filing calendar, annual financial audit timeline, state charitable registration renewals, board governance meeting cadences, year-end and GivingTuesday campaign preparation windows, major donor stewardship schedules, and foundation grant application deadlines so nonprofit leaders never miss a compliance date or funding opportunity."
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
            Four Nonprofit Operations Pillars Momenties Tracks
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
            12-Month Nonprofit Operations Calendar
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
            Nonprofit Operations KPIs Momenties Keeps on Track
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
