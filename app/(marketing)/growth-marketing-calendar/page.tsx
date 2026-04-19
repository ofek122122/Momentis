import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Growth Marketing Calendar | Momenties",
  description: "Plan your growth marketing calendar with experiment sprints, funnel optimization reviews, channel expansion, and retention campaigns. Build a compounding growth engine.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Experiment Sprints & Growth Velocity",
    body: "Growth marketing operates on experiment velocity — teams running 2–4 experiments per week consistently outperform those running 1 per month by 3–5× on annual growth rate. Structure experiments in 2-week sprints: hypothesis → experiment design → build → launch → read → decision (ship, iterate, or kill). Pre-mortem every experiment: define success criteria before launch, not after results. Minimum viable test: 200 conversions or 95% statistical confidence before declaring a winner. Log all experiments in a shared growth backlog with hypothesis, result, and learnings — context compounds. Monthly velocity review: experiments run, win rate (benchmark: 20–30% of experiments yield positive lift), and impact weighted by reach.",
  },
  {
    icon: Clock,
    title: "Funnel Optimization Calendar",
    body: "Quarterly full-funnel audit: map conversion rates at every stage (impression → click → signup → activation → retention → expansion). Identify the biggest leaky bucket — fix the constraint before optimizing other stages. Monthly focus rotation: one funnel stage per month in a 4-month rotation (acquisition, activation, retention, revenue). Activation CE calendar: schedule user research sessions monthly (5–8 user interviews, 2 usability tests) to inform optimization. Onboarding A/B test: 1 test per 4-week sprint. Email sequence optimization: review open rate, click rate, and conversion for each email in onboarding sequence quarterly. Notification optimization: push, in-app, and email timing tests semi-annually.",
  },
  {
    icon: BarChart3,
    title: "Channel Expansion & Portfolio Management",
    body: "Channel portfolio calendar: at any given time, have 1–2 scaled channels (proven ROI), 1–2 growth channels (scaling tests), and 1 experimental channel (exploring). Quarterly channel review: rank active channels by CAC, LTV:CAC ratio, and payback period — defund channels below 3× LTV:CAC. New channel test: budget minimum for meaningful signal (rule: $5,000 or 500 conversions — whichever comes first). Seasonal channel calendar: organic peaks in Q1 and Q4 — front-load SEO content. Paid social peaks in Q4 — build creative inventory in Q3. LinkedIn peaks Tue–Thu Q1-Q3 — dedicate content budget accordingly. Annual channel strategy reset: benchmark against competitor acquisition mix semi-annually.",
  },
  {
    icon: Users,
    title: "Retention, Referral & Virality Calendar",
    body: "Retention campaign calendar: cohort health check monthly (7-day, 30-day, 90-day retention curves). Trigger-based re-engagement: dormant users (30-day no-login) → win-back sequence (3 emails: value reminder, new features, final offer). Referral program calendar: quarterly referral program A/B test (incentive type, placement, timing). Benchmark: viral coefficient k > 0.3 is meaningful, k > 1 is viral. NPS survey cadence: quarterly for engaged users, post-churn exit survey always. NPS driver analysis: quantify what drives Detractors vs Promoters — feed back to product and CS teams monthly. Annual lifecycle map review: ensure every automation sequence reflects current product and pricing.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Baseline & Experiment Infrastructure",
    description:
      "Instrument all funnel stages with event tracking, establish experiment logging system, run full-funnel conversion rate audit, identify top 3 leaky buckets, design first 3 experiments for sprint queue, and set velocity target (experiments per week).",
  },
  {
    phase: "Month 2–3",
    label: "First Growth Sprint",
    description:
      "Run 6–8 experiments across funnel. Activate new channel test (1 new channel with minimum viable budget). Review activation sequence and onboarding flow with user research. Publish first experiment retrospective. Establish weekly growth meeting cadence.",
  },
  {
    phase: "Month 4–6",
    label: "Optimization Compounding",
    description:
      "Scale 2–3 winning experiments from sprints 1–2. Launch referral program if k-factor analysis supports. Run first retention cohort analysis and design re-engagement campaign. Begin Q4 creative inventory build for paid channels. Monthly channel portfolio rebalance.",
  },
  {
    phase: "Month 7–12",
    label: "Scale & Systematize",
    description:
      "Quarterly full-funnel reviews. Annual channel strategy reset. Document all winning experiments in playbook. Hire or develop growth talent based on highest-leverage channels. Expand experiment velocity target as team grows. Annual growth marketing retrospective.",
  },
]

const metrics = [
  { label: "Experiment velocity", benchmark: "≥2 experiments/week per growth PM or marketer" },
  { label: "Experiment win rate", benchmark: "20–30% of experiments yield positive lift — higher may signal insufficiently ambitious tests" },
  { label: "Activation rate", benchmark: "≥40% of signups complete core activation event within 7 days" },
  { label: "D30 retention", benchmark: "≥30% for consumer apps, ≥60% for B2B SaaS" },
  { label: "LTV:CAC ratio", benchmark: "≥3× on a per-channel basis; defund below this threshold" },
  { label: "Viral coefficient (k-factor)", benchmark: "k > 0.3 provides meaningful organic multiplier on paid acquisition" },
]

export default function GrowthMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Growth Marketing Calendar"
        title="Build a Compounding Growth Engine with Structured Experiment Sprints"
        subtitle="Experiment velocity, funnel optimization reviews, channel expansion, and retention campaigns — all scheduled so growth compounds quarter over quarter instead of stalling."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Growth Marketing Calendar
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
              12-Month Growth Engine Launch Plan
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
              Growth Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to confirm your growth engine compounds rather than plateaus.
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
              &ldquo;We went from 4% to 22% MoM growth by doing one thing differently: running experiments on a calendar instead of when inspiration struck. Structure killed our randomness and built a compounding loop instead.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Adrian C.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Growth, Consumer SaaS (0 to 120K MAU in 18 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your growth marketing experiments in minutes"
        subtitle="Momenties keeps every sprint, funnel review, and retention campaign in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
