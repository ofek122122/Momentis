import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Talent Acquisition Calendar | Momenties",
  description: "Momenties helps talent acquisition leaders track headcount planning cycles, sourcing channel reviews, interviewer calibration cadences, offer acceptance analysis, and recruiting metrics reporting in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Headcount Planning Cycles & Workforce Forecasting Calendar",
    description:
      "Talent acquisition programs run on headcount, not relationships — and headcount plans that arrive late cascade into missed hiring windows and delayed product launches. Annual headcount planning cycle: Q3 department manager HC submissions, Q3 TA team capacity modeling (recruiter-to-requisition ratios, time-to-fill by role family), Q4 finance approval and leveling sign-offs, and January HC freeze lift for recruiting to begin. Mid-year headcount reviews (Q2) and backfill approval workflows require standing governance cadences. Job description library refresh (annual) — updating JDs to reflect current market language, removing outdated requirements, and integrating inclusive language audits — requires 6-8 weeks of cross-functional review. Momenties tracks every headcount milestone.",
  },
  {
    icon: RefreshCw,
    title: "Sourcing Channel Reviews & Employer Brand Campaign Calendar",
    description:
      "Sourcing effectiveness without structured review becomes invisible spend — LinkedIn, Indeed, Glassdoor, Handshake, referral programs, and niche job boards require quarterly cost-per-hire and quality-of-hire analysis by channel. Employer brand campaign calendar: Q1 thought leadership content (employee stories, engineering blog, Glassdoor response program), Q2 campus and conference recruiting presence (intern offer deadlines 8 months before start), Q3 fall campus recruiting (FT offer deadlines 9 months before graduation), Q4 year-in-review employer brand content. LinkedIn Talent Solutions contract renewal (annual) requires 3-month advance negotiation with usage data prepared. ATS vendor review (annual) — benchmarking implementation quality, integration health, and sourcing attribution data — requires 8-week evaluation process. Momenties schedules every channel review and campaign deadline.",
  },
  {
    icon: TrendingUp,
    title: "Interviewer Certification, Calibration Cadence & Hiring Manager Training",
    description:
      "Structured interviewing programs require continuous recruiter and interviewer maintenance — annual interviewer certification refreshes (structured behavioral interview technique, inclusive interview practices, legal compliance) prevent drift in question consistency and legal risk accumulation. Hiring manager training for new managers (within 30 days of first requisition) adds a parallel completion tracking stream. Quarterly debrief calibration sessions (scoring consistency analysis across interviewers, offer-to-hire conversion rates by interviewer) identify bias patterns in the funnel. Interview panel diversity audits — ensuring diverse interviewers in final rounds for senior roles — require monthly tracking against a sourcing scorecard. Compensation benchmarking refresh (bi-annual) aligns offer bands with current market data before active recruiting windows open. Momenties manages every training and calibration cycle.",
  },
  {
    icon: BarChart3,
    title: "Recruiting Metrics Reporting, Compliance Audits & TA Strategy Reviews",
    description:
      "Recruiting analytics reporting — time-to-fill, time-to-offer, offer acceptance rate, source-of-hire, diversity representation at each funnel stage, and cost-per-hire — requires weekly automated dashboards and monthly executive reporting. OFCCP compliance (for federal contractors) requires annual Affirmative Action Plan (AAP) preparation — data collection begins 90 days before AAP year-end, with written plan due within 120 days of AAP year-start. EEOC EEO-1 Component 1 reporting (annual, March-June filing window) requires HR data compilation starting 60 days before filing opens. GDPR and California CCPA candidate data retention compliance requires quarterly candidate record purge cycles for candidates not hired beyond the required retention period. Annual TA strategy review with C-suite benchmarks program maturity against growth stage and talent market conditions. Momenties consolidates the full TA operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Headcount Activation & Annual Sourcing Strategy Launch",
    description: "Lift hiring freeze and activate approved headcount. Launch Q1 sourcing campaigns for priority roles. Run annual interviewer certification program. Refresh JD library for Q1 requisitions. Set quarterly TA metrics baselines and reporting cadence.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Metrics Review & Campus Recruiting Preparation",
    description: "Review Q1 sourcing channel effectiveness and adjust spend. Begin campus recruiting planning for fall internship cohort (offer deadlines 8 months out). Run Q1 hiring manager satisfaction survey. Complete EEOC EEO-1 filing. Begin mid-year headcount review preparation.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year HC Review & Employer Brand Content Push",
    description: "Complete mid-year headcount review and adjust recruiting capacity. Launch summer employer brand campaign. Run interviewer calibration session for senior role debrief consistency. Complete bi-annual compensation benchmarking refresh. Review ATS data quality and integration health.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Fall Campus Recruiting Launch & Q2 Metrics Review",
    description: "Launch fall campus recruiting program for FT and intern pipelines. Run Q2 sourcing channel review and budget reallocation. Complete quarterly diversity funnel audit. Prepare for LinkedIn contract renewal negotiation (if Q4 renewal). Review offer acceptance rates by role family.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 HC Planning Launch & Interviewer Program Refresh",
    description: "Open Q3 headcount submission process for next fiscal year. Run annual interviewer certification refresh program. Complete OFCCP AAP data collection if Q4 AAP year-end. Run candidate data retention compliance purge. Benchmark TA program against industry peers.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Annual TA Review & Next-Year Capacity Planning",
    description: "Complete annual talent acquisition strategy review with C-suite. Finalize next-year recruiter headcount and tooling budget. Lock HC plan and recruiting calendar for Q1. Run annual employer brand perception survey. Complete ATS and sourcing vendor renewal negotiations.",
  },
]

const kpis = [
  {
    metric: "Time-to-Fill ≤ 45 Days (Engineering), ≤ 30 Days (Non-Eng)",
    description: "Median days from requisition approval to offer acceptance, tracked by role family monthly",
  },
  {
    metric: "Offer Acceptance Rate ≥ 85%",
    description: "Percentage of verbal and written offers accepted; below 75% signals compensation band or process issues",
  },
  {
    metric: "Diverse Slate Compliance ≥ 90% for Senior Roles",
    description: "Percentage of VP+ and director requisitions with at least one underrepresented candidate in final round",
  },
  {
    metric: "Interviewer Certification Currency 100%",
    description: "All interviewers completing structured interview training within required refresh windows",
  },
  {
    metric: "Quality-of-Hire Score ≥ 4.0/5 at 6 Months",
    description: "Manager rating of new hire performance and culture fit at 6-month check-in, tracked by recruiter and source",
  },
  {
    metric: "Cost-per-Hire Flat or Declining YoY",
    description: "Total recruiting spend divided by hires, benchmarked against prior year and industry medians",
  },
]

const testimonial = {
  quote:
    "Annual headcount planning, quarterly sourcing channel reviews, campus recruiting timelines 8-9 months in advance, annual interviewer certification, bi-annual comp benchmarking, OFCCP AAP preparation, EEOC EEO-1 filing, LinkedIn and ATS contract renewals, and monthly metrics for four executives — all managed in email and spreadsheets. Momenties organized everything. We reduced time-to-fill for engineering by 12 days in the first six months.",
  name: "Taiwo O.",
  title: "VP, Talent Acquisition, Series C Technology Company",
}

export default function TalentAcquisitionCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Talent Acquisition Calendar"
        title="Headcount Planning. Campus Recruiting. Metrics Reporting. One Calendar."
        subtitle="Momenties tracks annual headcount planning cycles, sourcing channel review cadences, campus recruiting timelines, interviewer certification programs, bi-annual compensation benchmarking, OFCCP and EEOC compliance deadlines, and TA metrics reporting so talent acquisition leaders hire at scale without administrative gaps."
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
            Four Talent Acquisition Pillars Momenties Tracks
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
            12-Month Talent Acquisition Calendar
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
            Talent Acquisition KPIs Momenties Keeps on Track
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
