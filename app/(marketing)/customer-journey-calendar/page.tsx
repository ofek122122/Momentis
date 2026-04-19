import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Journey Calendar | Momenties",
  description: "Plan your customer journey calendar with stage-specific touchpoints, lifecycle marketing sequences, churn prevention triggers, and expansion campaigns. Turn every stage of the journey into a scheduled system.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Awareness & Acquisition Stage Calendar",
    body: "Awareness stage calendar: SEO content publishing cadence (2-3 problem-aware articles per week targeting TOFU keywords), paid acquisition calendar (monthly ad creative refresh, weekly bid optimization review), and brand content calendar (LinkedIn, newsletter, podcast — 3-5× per week for consistent brand impression building). Acquisition optimization calendar: monthly landing page A/B test (one test per month — headline, CTA, or form length — never test multiple variables simultaneously), quarterly lead magnet audit (which gated assets are converting — score by email subscriber quality, not just volume), and weekly lead source attribution review (which channels are producing highest-intent leads — adjust budget accordingly within 2 weeks of signal). The awareness-to-acquisition calendar bridges these: set the monthly acquisition target, reverse-engineer required traffic by conversion rate, and schedule content and paid campaigns to hit traffic targets before month end — not reactively at month end.",
  },
  {
    icon: Clock,
    title: "Onboarding & Activation Stage Calendar",
    body: "Onboarding is the highest-leverage stage of the customer journey — first 30 days behavior predicts churn more than any other variable. Onboarding calendar: day 1 — welcome email + quick-win task (achievable in <10 minutes, demonstrates core value). Day 3 — check-in email (did they complete quick-win? if yes, next step; if no, re-send with simplified instructions). Day 7 — success manager outreach for paid accounts (review onboarding checklist completion, identify blockers). Day 14 — activation milestone email (celebrate first meaningful action — first project created, first team member invited, first integration connected). Day 30 — 30-day success email (what have they accomplished, what&apos;s next). Activation tracking: define activation event (the action that correlates most strongly with 90-day retention) and track weekly — accounts that have not hit activation by day 14 enter a rescue sequence (simplified onboarding, offer a call, identify barrier).",
  },
  {
    icon: BarChart3,
    title: "Retention & Expansion Stage Calendar",
    body: "Retention calendar: monthly health score review (product usage, support tickets, NPS score, feature adoption — accounts declining in 2+ dimensions enter churn risk queue), quarterly QBR schedule for high-ACV accounts (business review: ROI documented, expansion opportunity identified, renewal timeline discussed), and annual renewal campaign (90 days before renewal — customer success playbook, reference call scheduled, expansion proposal prepared). Churn prevention triggers: 30-day no-login → automated check-in email from CSM, 2 consecutive low NPS scores → immediate human outreach, support tickets above baseline → proactive escalation before customer complains. Expansion calendar: quarterly expansion campaign (upsell to higher tier for accounts at usage limits — usage-based trigger is the most effective expansion signal), monthly cross-sell sequence (introduce complementary products to customers with proven ROI from first product), and annual account review (full expansion opportunity mapping — new departments, new use cases, new team growth).",
  },
  {
    icon: Users,
    title: "Advocacy & Win-Back Stage Calendar",
    body: "Advocacy calendar: monthly NPS review — promoters (9-10) receive an immediate ask for review (G2, Capterra, Trustpilot — automated 3 days post-NPS), reference request (5 promoters per quarter targeted for customer reference calls), and case study pipeline (1 detailed case study per month — requires customer approval, CSM coordination, 3-4 week production timeline). Referral program calendar: quarterly referral campaign — email to all promoters, in-app prompt, dedicated referral landing page. Win-back calendar: churned accounts enter a 90-day silence period, then a 4-email win-back sequence (month 3, 6, 9, 12 post-churn) — highest reactivation rates occur at month 6 (product has improved, budget cycle resets, pain has returned). Win-back offer calendar: month 3 (educational content only — no offer), month 6 (product improvement highlight + 30% discount), month 12 (new feature announcement + migration offer). Win-back tracking: cohort analysis by churn reason — win-back effectiveness varies dramatically by exit reason.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Journey Mapping & Sequence Build",
    description:
      "Map current customer journey — identify all touchpoints from first awareness to renewal. Audit existing sequences for gaps (common gap: nothing between day 30 onboarding and next renewal touchpoint). Define activation event. Build onboarding email sequence. Set up health score dashboard. Identify top 10 churned accounts from last 12 months — analyze exit reasons.",
  },
  {
    phase: "Month 2–3",
    label: "Activation & Retention Infrastructure",
    description:
      "Launch new onboarding sequence. Set up churn trigger monitoring (30-day no-login, NPS drop alerts). Implement monthly health score review process. Build win-back sequence for churned accounts. First quarterly expansion campaign. Measure activation rate change from new onboarding sequence — benchmark against prior 90 days.",
  },
  {
    phase: "Month 4–6",
    label: "Advocacy & Expansion Scale",
    description:
      "Launch referral program. Start quarterly QBR cadence for top 20% ACV accounts. Monthly case study pipeline established. Expansion campaign results measurable — compare expansion revenue from calendar-driven outreach versus passive expansion. First win-back campaign for 6-month churned cohort.",
  },
  {
    phase: "Month 7–12",
    label: "Full Lifecycle Optimization",
    description:
      "Annual customer journey audit: measure each stage conversion rate and identify the biggest drop-off point. Prioritize optimization investment at the leakiest stage. Cohort analysis: do customers who complete full onboarding by day 14 have better 12-month retention? (They do — this is the data that justifies onboarding investment.) Annual win-back analysis by cohort.",
  },
]

const metrics = [
  { label: "Activation rate by day 14", benchmark: "Target ≥60% of new accounts complete activation event by day 14 — below 40% requires onboarding redesign" },
  { label: "30-day retention rate", benchmark: "Accounts that complete onboarding: 30-day retention ≥85%. Accounts that do not complete: 30-day retention <40%" },
  { label: "Net Revenue Retention (NRR)", benchmark: "Best-in-class SaaS: NRR ≥120%. Below 100% means churn exceeds expansion — a structural problem, not a campaign problem" },
  { label: "NPS promoter conversion to review", benchmark: "≥30% of NPS promoters should leave a public review within 7 days of automated ask — below 20% requires friction reduction" },
  { label: "Churn trigger response time", benchmark: "30-day no-login trigger → CSM outreach within 24 hours. Accounts reached within 24 hours have 3× higher reactivation rate" },
  { label: "Win-back rate at month 6", benchmark: "Month 6 win-back sequence: ≥8% reactivation rate for churned accounts (industry benchmark 5-12% depending on exit reason)" },
]

export default function CustomerJourneyCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Journey Calendar"
        title="Turn Every Stage of the Customer Journey Into a Scheduled System"
        subtitle="Onboarding sequences, retention triggers, expansion campaigns, and win-back cadences — all on one calendar that makes the customer lifecycle predictable and measurable."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Customer Journey Calendar
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
              12-Month Customer Journey Calendar
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
              Customer Journey Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics by lifecycle stage to identify where the journey is leaking and where investment has the highest retention and expansion ROI.
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
              &ldquo;Our churn rate dropped from 2.8% monthly to 1.1% monthly in 6 months — not because we changed the product, but because we built a customer journey calendar. The 30-day no-login trigger alone recovered 18% of at-risk accounts in the first quarter. The win-back campaign at month 6 post-churn reactivated 11% of churned accounts. The data was sitting in our CRM — the calendar was the system that made us act on it.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Sofia H.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Customer Success, B2B SaaS (reduced monthly churn from 2.8% to 1.1% in 6 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your customer journey calendar in minutes"
        subtitle="Momenties keeps every onboarding touchpoint, churn trigger, expansion campaign, and win-back sequence in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
