import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Retention Marketing Calendar | Momenties",
  description: "Plan your retention marketing calendar with health score monitoring, re-engagement campaigns, loyalty sequences, and churn analysis reviews. Reduce churn before it happens.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Health Score Monitoring & Early Warning Calendar",
    body: "Retention marketing calendar starts with a health score system — the leading indicator that tells you which customers are about to churn 60-90 days before they cancel. Health score framework: product usage (weekly active sessions, feature adoption breadth — weight 40%), support signals (ticket volume trend, CSAT, escalations — weight 20%), relationship signals (NPS score, QBR attendance, champion seniority — weight 20%), and business signals (company funding, headcount change, technology stack change — weight 20%). Weekly health score review (20 minutes every Monday): accounts that dropped ≥10 points in the past 7 days enter the at-risk queue. Monthly health score distribution analysis: what percentage of accounts are in red/yellow/green? If red zone is growing faster than 10% month-over-month, it&apos;s a product or market fit signal — not a retention campaign problem. Health score trigger calendar: red → CSM outreach within 24 hours, 3 consecutive yellow weeks → executive sponsor outreach, green → expansion conversation after next positive interaction.",
  },
  {
    icon: Clock,
    title: "Re-Engagement & Win-Back Campaign Calendar",
    body: "Re-engagement calendar: accounts showing declining usage but still active — 30-day declining usage triggers a re-engagement sequence before churn risk escalates. Re-engagement sequence: email 1 (day 1) — usage insight (what they used to do that they&apos;re no longer doing), email 2 (day 7) — product update (new feature relevant to their use case), email 3 (day 14) — success story from a customer with similar profile, email 4 (day 21) — direct CSM outreach offer (15-minute call — no agenda). Win-back campaign calendar: churned accounts enter a silence period (first 30 days — let the relationship cool), then a 4-touch win-back sequence at 60, 90, 180, and 365 days post-churn. Win-back timing: 180-day win-back has the highest reactivation rate (budget cycle reset, new person in role, pain has returned). Win-back content: milestone-based (what has improved since they left), comparison-based (what they&apos;re likely using instead — acknowledge competition), and ROI-based (what they would have gotten if they had stayed).",
  },
  {
    icon: BarChart3,
    title: "Loyalty Programs & Expansion Campaign Calendar",
    body: "Loyalty program calendar: quarterly loyalty tiers review (what actions qualify accounts for higher tier — usage milestones, tenure, expansion history), monthly loyalty reward delivery (early feature access, dedicated support, exclusive events — non-discount rewards outperform discount rewards in retention impact 2× by LTV), and annual loyalty survey (what do loyal customers value most that they get from you?). Expansion campaign calendar: usage-based triggers (accounts at 80%+ of plan limits → upgrade outreach within 48 hours — these convert at 40-60% versus 5-8% for untriggered expansion outreach), annual contract review (30-day pre-renewal window — expansion proposal with ROI documentation, reference call, renewal with expansion bundled), and cross-sell calendar (introduce complementary products at 90 days post-initial-activation — customers who adopt a second product have 4× lower churn rate). Loyalty versus churn correlation: track 12-month retention rate by loyalty tier — this data justifies loyalty program investment to leadership.",
  },
  {
    icon: Users,
    title: "Churn Analysis Reviews & Retention Program Audits Calendar",
    body: "Monthly churn analysis (60 minutes, first Monday): cohort churn rate by acquisition source (SEO vs paid vs partner vs referral — which cohorts churn fastest?), tenure cohort analysis (are month 3 churners different from month 12 churners?), plan-level churn rate (which tiers churn fastest?), and exit reason distribution (pricing vs product vs competition vs company change — track quarterly). Quarterly retention retrospective (90 minutes): full-funnel retention analysis. What was the 90-day activation rate for new customers? What percentage completed the onboarding checklist? Which health score drops predicted churn at 60-day lag? NPS to churn correlation: do detractors churn within 90 days at a predictable rate? Retention program ROI calculation: compare churn rate before and after retention calendar implementation, calculate revenue retained per dollar invested in CSM and retention campaigns. Annual retention audit: cohort analysis from all 12 months, ICP refinement (are low-churn customers from a specific segment — double-down on that segment in acquisition).",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Health Score & Monitoring Infrastructure",
    description:
      "Build health score model (4-component framework above). Integrate with CRM and product analytics. Set up automated health score weekly report. Define at-risk triggers. Audit last 20 churned accounts — what did their health scores look like 60 days before churn? Use this to calibrate trigger thresholds.",
  },
  {
    phase: "Month 2–3",
    label: "Sequences & Early Warning System",
    description:
      "Launch declining usage re-engagement sequence. Build win-back sequence for churned accounts. Set up CSM alert system for red health scores. First monthly churn analysis. Start tracking exit reasons systematically (exit survey or exit call script). Measure impact of re-engagement sequence on at-risk account recovery.",
  },
  {
    phase: "Month 4–6",
    label: "Loyalty & Expansion Programs",
    description:
      "Launch usage-based expansion campaign (accounts at 80%+ plan limit). Design loyalty tier structure. First quarterly loyalty tier review. Start quarterly retention retrospective. Measure expansion revenue from triggered outreach versus untriggered. Identify which retention program actions have highest ROI per dollar invested.",
  },
  {
    phase: "Month 7–12",
    label: "Attribution & Systematize",
    description:
      "Full retention program attribution: calculate churn rate before and after calendar implementation. Annual churn cohort analysis. ICP refinement from churn data — which customers churn fastest and how can acquisition targeting avoid them? Annual loyalty survey. Publish internal retention dashboard for company-wide visibility. Retention calendar playbook for scaling.",
  },
]

const metrics = [
  { label: "Monthly gross churn rate", benchmark: "Best-in-class B2B SaaS: <1% monthly gross churn. 1-2% is manageable. >2% monthly requires structural intervention" },
  { label: "At-risk account recovery rate", benchmark: "Re-engagement sequence: ≥25% of at-risk accounts should return to green health score within 30 days of intervention" },
  { label: "Win-back reactivation rate", benchmark: "180-day win-back: 8-12% reactivation rate. Below 5% suggests exit reason is product fit, not timing" },
  { label: "Net Revenue Retention (NRR)", benchmark: "Target NRR ≥110% — expansion offsets churn. Below 90% means churn is destroying expansion revenue" },
  { label: "Usage-trigger expansion conversion", benchmark: "Accounts at 80%+ plan limit with triggered upgrade outreach: 40-60% conversion. Cold expansion email: 5-8%" },
  { label: "Health score predictive accuracy", benchmark: "Red health score should predict churn within 60 days with ≥60% accuracy — if lower, recalibrate score weights" },
]

export default function RetentionMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Retention Marketing Calendar"
        title="Reduce Churn Before It Happens with a Structured Retention Marketing Calendar"
        subtitle="Health score monitoring, re-engagement sequences, loyalty programs, and churn analysis reviews — all on one calendar that makes retention a proactive system, not a reactive scramble."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Retention Marketing Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12-month plan */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              12-Month Retention Marketing Calendar
            </h2>
          </Reveal>
          <div className="space-y-6">
            {timeline.map(({ phase, label, description }) => (
              <Reveal key={phase}>
                <div
                  className="rounded-xl p-8"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <span
                        className="inline-block rounded-lg px-3 py-1 text-xs font-semibold"
                        style={{ background: "rgba(197,163,92,0.15)", color: "#c5a35c" }}
                      >
                        {phase}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-lg font-semibold" style={{ color: "#f0ece3" }}>
                        {label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              Retention Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to quantify the impact of your retention program and identify where to invest next.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ label, benchmark }) => (
              <Reveal key={label}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c5a35c" }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {benchmark}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;We cut our monthly churn rate in half in 8 months — from 2.4% to 1.2% — primarily by moving from reactive to proactive. The health score weekly review was the change that mattered: we were calling customers after they submitted a cancellation request. Now we call them 60 days before. The re-engagement sequence alone saved 31 accounts in the first quarter. The calendar made it systematic.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Kiri P.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Director of Customer Success, B2B SaaS (reduced monthly churn from 2.4% to 1.2% in 8 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your retention marketing calendar in minutes"
        subtitle="Momenties keeps every health score review, re-engagement sequence, expansion trigger, and churn analysis in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
