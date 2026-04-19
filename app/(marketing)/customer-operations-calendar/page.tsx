import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Operations Calendar | Momenties",
  description: "Momenties helps VP Customer Success and customer operations leaders track QBR cadences, health score review cycles, renewal pipeline management, onboarding milestone governance, and CS team development in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "QBR Cadences, Executive Business Reviews & CS Meeting Governance",
    description:
      "Customer success operating rhythms require structured meeting governance — QBRs scheduled without 6-week preparation windows produce reactive conversations instead of strategic partnerships. QBR preparation calendar: account data pull (T-30), executive summary draft (T-21), internal CSM review (T-14), customer agenda alignment (T-7), and post-QBR action item follow-up (T+7). Executive Business Reviews (EBRs) for strategic accounts require 8-10 week preparation including executive sponsor alignment, ROI quantification, and roadmap preview coordination with product. Monthly CSM-customer check-in cadence (weekly for at-risk accounts, biweekly for growth accounts, monthly for stable accounts) requires documentation standards. CS leadership team weekly pipeline review, monthly health score review, and quarterly board-level reporting. Momenties manages the full QBR and CS meeting calendar.",
  },
  {
    icon: RefreshCw,
    title: "Customer Health Score Reviews, At-Risk Intervention & Churn Prevention Calendar",
    description:
      "Health score models without scheduled review cadences drift — static health scores calculated at onboarding become meaningless within 90 days as usage patterns shift. Weekly automated health score monitoring: red account identification (health score drop >15 points in 30 days), CSM alert triggers, and at-risk intervention workflow activation. Monthly health score model calibration: comparing health score predictions against actual churn and expansion outcomes, reweighting signals that correlate with churn versus expansion. Quarterly churn analysis: cohort-level churn drivers, CSM-level churn rate variance, and product gap documentation for product roadmap. Annual health score model rebuild: incorporating new behavioral signals, updating product adoption scoring rubrics, and recalibrating segment-specific benchmarks. Save-play playbook reviews (semi-annual): updating intervention scripts based on win/loss data from at-risk accounts. Momenties tracks every health score and intervention cycle.",
  },
  {
    icon: TrendingUp,
    title: "Renewal Pipeline Management, Expansion Playbooks & NRR Calendar",
    description:
      "Net revenue retention above 110% requires systematic pipeline management — renewals caught within 90 days of expiration have 60% lower discount rates than those caught at 30 days. Renewal pipeline calendar: 180-day renewal report distribution, 120-day renewal kickoff meeting with CSM and account executive, 90-day negotiation strategy review, 60-day contract draft, 30-day procurement engagement. Expansion pipeline: quarterly expansion opportunity identification from health score signals (high-adoption accounts, team growth indicators, feature utilization ceiling), monthly upsell/cross-sell playbook execution with AE collaboration. Multi-year renewal incentive modeling (annual): analyzing discount-to-retention correlation and building multi-year offer frameworks. CSM capacity planning aligned to ARR segments: ensuring CSM-to-ARR ratios support QBR frequency commitments. Momenties schedules every renewal and expansion milestone.",
  },
  {
    icon: BarChart3,
    title: "Onboarding Milestone Governance, CS Team Development & Reporting Calendar",
    description:
      "Customer onboarding programs without milestone governance produce delayed time-to-value — and each week of delayed activation correlates with increased churn probability. Onboarding milestone calendar: kickoff (Day 1), technical setup complete (Day 7), first value event (Day 14), core use case adoption (Day 30), full team activation (Day 60), success plan review (Day 90). CS team development cadence: weekly 1:1s with CSMs (30-min), monthly CSM skill assessments (CSQL pipeline management, executive presence, ROI storytelling), quarterly CS certification renewals (Gainsight, Totango, or ChurnZero platform certifications), and annual CS team retreat. CS metrics reporting: monthly NRR, GRR, TTV, CSAT, NPS, and CSM efficiency metrics (ARR per CSM) for leadership and board reporting. Voice of Customer (VoC) program: quarterly customer advisory board, annual customer conference coordination. Momenties consolidates the full CS operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual CS Strategy & Onboarding Program Review",
    description: "Complete annual CS strategy review and set NRR/GRR targets. Rebuild health score model with prior year churn data. Audit onboarding program completion rates and TTV by cohort. Set annual CSM OKRs and capacity targets. Distribute January renewal pipeline to CSM team.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 QBR Season & Expansion Pipeline Launch",
    description: "Execute Q1 QBR season for all enterprise accounts. Identify Q1 expansion opportunities from health score signals. Complete Q1 at-risk account review and activate save plays. Run Q1 CSAT survey and close the loop with detractors. Review onboarding milestone completion rates for Q1 cohort.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "H1 Renewal Review & CS Team Development",
    description: "Conduct H1 renewal outcome analysis — win rates, discount rates, and churn drivers. Run semi-annual CS team skill assessment. Complete customer advisory board (H1). Review CSM platform certification statuses and schedule renewals. Identify H2 strategic account QBR themes.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 QBR Season & Health Score Calibration",
    description: "Execute Q2 QBR season. Run semi-annual health score model calibration against H1 churn outcomes. Conduct Q2 expansion pipeline review with AE team. Complete mid-year NRR analysis and forecast H2. Review CS headcount plan against ARR growth trajectory.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 QBR Season & Annual Conference Planning",
    description: "Execute Q3 QBR season. Begin annual customer conference planning (6-month lead time). Complete Q3 at-risk intervention review and save-play win rate analysis. Start Q4 renewal pipeline review — 90-day window for largest accounts. Run quarterly VoC analysis and product feedback synthesis.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Q4 Renewal Push & Next-Year CS Planning",
    description: "Execute Q4 renewal push — highest ARR renewal month for most SaaS businesses. Complete annual save-play playbook refresh. Run Q4 NPS survey. Finalize next-year CS team headcount and toolstack budget. Deliver annual CS program performance review to board.",
  },
]

const kpis = [
  {
    metric: "Net Revenue Retention ≥ 110%",
    description: "Combined renewal + expansion minus churn and contraction, measured monthly on trailing 12-month cohorts",
  },
  {
    metric: "Gross Revenue Retention ≥ 90%",
    description: "Renewal ARR as a percentage of ARR up for renewal; below 85% signals systemic product or CS issue",
  },
  {
    metric: "Time-to-Value ≤ 30 Days",
    description: "Days from contract signature to first documented value event, measured by onboarding cohort",
  },
  {
    metric: "QBR Completion Rate ≥ 90%",
    description: "Percentage of eligible accounts with completed QBR in the trailing 90 days; below 80% signals CSM capacity issue",
  },
  {
    metric: "CSAT ≥ 4.5 / NPS ≥ 45",
    description: "Post-QBR CSAT and quarterly relationship NPS; NPS below 30 correlates with elevated churn risk",
  },
  {
    metric: "At-Risk Recovery Rate ≥ 60%",
    description: "Percentage of red-flag accounts returning to healthy status within 90 days of save-play activation",
  },
]

const testimonial = {
  quote:
    "180-day renewal pipeline management across 340 accounts, quarterly QBR preparation for 80 enterprise accounts, monthly health score calibration cycles, at-risk intervention tracking for 30+ accounts simultaneously, quarterly expansion pipeline reviews with the AE team, semi-annual save-play playbook updates, CSM certification renewals, and annual customer advisory board coordination — all in spreadsheets and Gainsight tasks. Momenties organized everything. We hit 118% NRR for the first time in three years.",
  name: "Adaeze K.",
  title: "VP Customer Success, Series C Enterprise SaaS",
}

export default function CustomerOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Customer Operations Calendar"
        title="QBR Cadences. Renewal Pipeline. Health Scores. One Calendar."
        subtitle="Momenties tracks QBR preparation timelines, customer health score review cycles, renewal pipeline milestones at 180/120/90/60/30-day intervals, expansion playbook execution, onboarding milestone governance, and CS team development so customer success leaders drive 110%+ NRR without operational gaps."
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
            Four Customer Operations Pillars Momenties Tracks
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
            12-Month Customer Operations Calendar
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
            Customer Operations KPIs Momenties Keeps on Track
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
