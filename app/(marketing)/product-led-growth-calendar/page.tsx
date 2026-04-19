import type { Metadata } from "next"
import { Zap, TrendingUp, BarChart3, RefreshCw } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product-Led Growth Calendar | Momenties",
  description: "Build a product-led growth calendar with activation milestone schedules, freemium upgrade triggers, PQL scoring reviews, viral loop testing cadences, and monthly PLG performance reviews that compound into self-serve ARR.",
}

const pillars = [
  {
    icon: Zap,
    title: "Activation Milestone & Aha-Moment Engineering",
    body: "Product-led growth lives or dies on activation — getting users to the aha moment before they churn. Define your single activation event (the one action that predicts 90-day retention) and make hitting it ≤10 minutes for a motivated first-time user. Activation engineering calendar: monthly activation funnel review (step-by-step, sign-up → aha moment — identify highest drop-off step), quarterly user interview sprint (5 interviews with users who activated + 5 who didn't — find the divergence), weekly activation metric in PLG dashboard (% of sign-ups who hit activation event within 24 hours — benchmark: ≥30%). Onboarding optimization cadence: one onboarding A/B test per month (tooltip vs modal, empty state vs template, step count reduction), progressive disclosure review quarterly (remove friction — eliminate onboarding steps that do not increase activation rate). Milestone notification calendar: day 1 (activation prompt), day 3 (second value delivery), day 7 (team invite prompt or integration suggestion), day 14 (upgrade nudge if activation achieved), day 30 (either upgrade push or re-activation campaign). Empty state design review every 90 days — empty states convert 25-40% better when they show product value rather than blank screens. Momenties schedules every activation experiment, interview sprint, and funnel review date.",
  },
  {
    icon: TrendingUp,
    title: "Freemium Limits, PQL Scoring & Upgrade Trigger Engineering",
    body: "Freemium limit design is the highest-leverage PLG decision. Limit review cadence: quarterly free tier limit analysis — are limits creating upgrade urgency or just frustration? The right free tier shows enough value to build habit but blocks enough to create upgrade reason. PQL (Product Qualified Lead) scoring review: monthly PQL model review — validate that PQL criteria (usage depth, breadth, frequency, team size) actually correlate with conversion. PQL threshold recalibration every 6 months using conversion data (target: PQL-to-paid conversion ≥25%). Upgrade trigger engineering calendar: define 3-5 upgrade moments (storage limit hit, team invite limit, export limit, advanced feature use) — each trigger gets its own messaging A/B test on a quarterly rotation. In-app upgrade prompt cadence: upgrade prompt at limit hit (urgency), usage-based prompt at 80% of limit (anticipatory), feature gate prompt at advanced feature attempt (value-based). Sales-assist queue: PQLs above threshold routed to sales within 2 hours during business hours — PLG to sales handoff SLA. TOFU expansion: expansion revenue triggers (seat-based expansion, usage-based expansion) — flag accounts at 70% of plan limit for expansion outreach. Momenties tracks limit hit events, PQL scores, and upgrade trigger test rotation.",
  },
  {
    icon: RefreshCw,
    title: "Viral Loop Testing & PLG Channel Engineering",
    body: "PLG viral loops are engineered, not organic. Viral loop types: collaboration invite (share/invite to unlock value — Dropbox model), product-branded output (artifact shared externally carries product branding — Loom, Figma), network effect (product improves as more users join — Slack), referral program (explicit incentive to invite). Viral loop audit every quarter: measure k-factor (average invites sent per user × acceptance rate — k>1 means organic growth). Loop optimization cadence: one viral loop A/B test per quarter (invite copy, incentive structure, timing, delivery channel). Referral program calendar: launch or review referral program quarterly — incentive reset annually (financial incentive erosion over time). In-product sharing calendar: review sharing prompts monthly — prompts shown at celebration moments (milestone achieved, output created) convert 3-5× better than generic prompts. Branded output review: audit every export/share touchpoint for branding visibility semi-annually. Integration marketplace CE: quarterly integration launch (each integration is a distribution channel — Slack/Zapier/API integrations reduce churn 25-40% and increase referral probability). PLG SEO calendar: product feature pages (long-tail SEO from specific use case pages) — one new feature SEO page per month. Momenties tracks k-factor, viral loop test rotation, and integration launch schedule.",
  },
  {
    icon: BarChart3,
    title: "PLG Metrics Reviews & Compounding Flywheel",
    body: "Weekly PLG pulse: sign-ups, activation rate (% hitting aha moment within 24h), day-7 retention, PQL count, self-serve MRR. Monthly PLG review: expansion MRR vs new MRR ratio (healthy PLG: expansion ≥30% of total MRR growth), viral coefficient k-factor, time-to-value median (how long between sign-up and first activation), free-to-paid conversion rate (benchmark: 2-5% freemium, 15-25% free trial). Quarterly PLG retrospective: which activation experiment won, what PQL threshold changes drove conversion improvement, which integrations reduced churn most, what viral loop change moved k-factor. Annual PLG compounding math: 12 months × 4 activation tests × 15% average win rate = 7-8 wins × 5% lift each = 40%+ activation rate improvement. Self-serve ARR as % of total: PLG-first companies target ≥60% of new ARR self-serve within 24 months. North Star Metric: define one PLG north star (often: weekly active accounts or activated users this month) — review weekly, never miss a week. PLG CAC payback: self-serve CAC payback target <6 months (PLG benchmark) vs sales-led 12-24 months. Momenties generates weekly PLG dashboards automatically from your activation event log.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Baseline & Activation", description: "Define activation event, instrument funnel, measure activation rate baseline, run 5 user interviews (activated vs churned), launch first onboarding A/B test." },
  { phase: "Month 3–4", label: "PQL Model Launch", description: "Define PQL scoring criteria, validate against historical conversion data, route first PQLs to sales, establish PLG-to-sales SLA, set up expansion MRR tracking." },
  { phase: "Month 5–6", label: "Viral Loop Engineering", description: "Audit existing viral loops, measure k-factor, launch first viral loop A/B test, review referral program, add integration (Slack or Zapier or API)." },
  { phase: "Month 7–8", label: "Upgrade Trigger Pipeline", description: "Define 3-5 upgrade triggers, A/B test in-app upgrade prompt copy, launch usage-based expansion outreach at 70% plan limit, refine PQL threshold from conversion data." },
  { phase: "Month 9–10", label: "PLG SEO & Distribution", description: "Launch monthly product feature SEO pages, audit branded output touchpoints, add second integration, review freemium limit design against upgrade conversion data." },
  { phase: "Month 11–12", label: "Compound & Scale", description: "Annual PLG audit: activation rate YoY, self-serve ARR %, CAC payback improvement, k-factor trend. Rebuild test backlog for next year. Set North Star Metric for next year." },
]

const metrics = [
  { label: "Activation rate (aha moment within 24h)", benchmark: "Target ≥30% (top PLG companies ≥50%)" },
  { label: "Free-to-paid conversion rate", benchmark: "Freemium: 2-5% | Free trial: 15-25%" },
  { label: "Viral coefficient k-factor", benchmark: "Target ≥0.5 (k>1 = organic growth)" },
  { label: "PQL-to-paid conversion rate", benchmark: "Target ≥25% (vs 2-5% blended free tier)" },
  { label: "Expansion MRR as % of total MRR growth", benchmark: "Target ≥30% in PLG-mature companies" },
  { label: "Self-serve CAC payback", benchmark: "Target <6 months (PLG benchmark vs 12-24 sales-led)" },
]

export default function ProductLedGrowthCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Product-Led Growth Calendar"
        title="A Product-Led Growth Calendar That Compounds Self-Serve ARR Every Month"
        subtitle="From activation experiment schedules to PQL scoring reviews — Momenties keeps every PLG test, viral loop audit, and upgrade trigger on one calendar so self-serve revenue grows on a predictable schedule."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every PLG System, One Calendar
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
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              12-Month PLG Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from activation baseline to fully compounding self-serve growth.
            </p>
          </Reveal>
          <div className="space-y-4">
            {timeline.map(({ phase, label, description }) => (
              <Reveal key={phase}>
                <div
                  className="rounded-xl p-6 flex gap-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="shrink-0 w-28">
                    <p className="text-xs font-semibold" style={{ color: "#c5a35c" }}>{phase}</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "#f0ece3" }}>{label}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-12" style={{ color: "#f0ece3" }}>
              PLG KPIs Worth Tracking
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map(({ label, benchmark }) => (
              <Reveal key={label}>
                <div
                  className="rounded-xl p-5"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: "#f0ece3" }}>{label}</p>
                  <p className="text-xs" style={{ color: "#8b8b8b" }}>{benchmark}</p>
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
              &ldquo;Our activation rate was 18% for two years because we ran tests randomly, never systematically. Once we put every experiment, PQL review, and viral loop audit on a Momenties calendar with specific dates, we ran 3× more tests per quarter. Twelve months later, activation hit 41% and self-serve went from 22% to 58% of new ARR.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Amir T.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of PLG, Developer Tools SaaS — $12M ARR
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your PLG calendar and start compounding self-serve ARR this quarter"
        subtitle="Momenties keeps every activation experiment, PQL review, viral loop test, and upgrade trigger on one calendar so product-led growth compounds predictably."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
