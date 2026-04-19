import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Demand Generation Calendar | Momenties",
  description: "Plan your demand generation calendar with campaign sequencing, MQL pipeline reviews, channel mix optimization, and revenue attribution. Build a predictable pipeline machine.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Campaign Sequencing & Program Calendar",
    body: "Demand gen calendar centers on program sequencing — campaigns should build on each other, not run in isolation. Quarterly program calendar: 1 major integrated campaign (digital ads + email + content + webinar + social) per quarter, with 2–3 always-on nurture programs running in the background. Campaign lead time: major integrated campaigns need 8–10 weeks from brief to launch (creative, copy, landing pages, email sequences, ad creative, tracking setup). Always-on programs: SEO + content (evergreen), retargeting (audience-based), and lifecycle nurture (triggered by behavior). Monthly program review: pipeline contribution by program, MQL velocity, and cost-per-MQL trend.",
  },
  {
    icon: Clock,
    title: "MQL Pipeline & SLA Calendar",
    body: "MQL-to-SQL SLA: marketing-qualified leads must be followed up by sales within 24 hours (benchmark: every hour of delay reduces conversion rate by ~10%). Monthly MQL volume review: track MQL trend by source (organic, paid, event, referral, direct). Lead quality audit quarterly: compare MQL-to-SQL conversion by source — defund sources below 15% MQL-to-SQL. MQL definition review semi-annually: update ICP scoring model as company evolves (title, company size, behavior signals). Funnel velocity review monthly: average days from MQL to Closed-Won — identify stage where deals stall. Quarterly pipeline health meeting with CRO: marketing pipeline vs quota coverage (benchmark: 3–4× coverage at beginning of quarter).",
  },
  {
    icon: BarChart3,
    title: "Channel Mix & Budget Allocation Calendar",
    body: "Demand gen channel mix benchmarks for B2B SaaS: 30–40% paid search (highest intent), 20–30% content + SEO (compounding), 15–20% paid social (LinkedIn for enterprise, Meta for SMB), 10–15% events (field, virtual, third-party). Monthly channel efficiency review: CAC by channel, pipeline-to-spend ratio, payback period. Quarterly channel rebalance: shift 10–20% of budget from lowest-performing to highest-marginal-ROAS channels. Annual channel strategy: add one new channel per year (podcast advertising, co-marketing, community, etc.) — pilot with $5K–$10K before scaling. Budget calendar: Q4 is both the highest-spend quarter for most B2B companies and the time to plan next year&apos;s budget — start annual budget narrative in September.",
  },
  {
    icon: Users,
    title: "ABM, Account Targeting & Intent Signal Calendar",
    body: "ABM calendar: define tier-1 target accounts (50–100 accounts, enterprise deal size) monthly with sales. Weekly intent signal review: G2 Buyer Intent, Bombora, or 6sense — accounts spiking on relevant topics get added to targeted campaign sequences within 48 hours. Tier-1 account sequence: 8-touch multi-channel sequence over 6 weeks (direct mail, personal email, LinkedIn outreach, retargeting, phone — in that order). Quarterly ABM review with sales: accounts engaged, meetings booked, pipeline created, and accounts to add or remove. ICP refinement semi-annually: update account scoring model with closed-won data from prior 12 months — which firmographic and technographic attributes predicted revenue?",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Infrastructure & Baseline",
    description:
      "Audit full-funnel tracking (confirm source attribution at every conversion point), define MQL scoring model, establish pipeline-to-spend baseline by channel, build campaign brief template, and schedule first quarterly program review with sales leadership.",
  },
  {
    phase: "Month 2–3",
    label: "First Integrated Campaign",
    description:
      "Launch first major integrated campaign (8-week build: brief → creative → landing page → email sequence → paid → launch). Activate always-on retargeting and lifecycle nurture. Run first MQL quality audit. Establish 24-hour MQL follow-up SLA with sales.",
  },
  {
    phase: "Month 4–6",
    label: "Optimization & ABM Launch",
    description:
      "Review Q1 pipeline attribution. Identify top 2 channels by pipeline-per-dollar. Define tier-1 ABM target account list with sales. Launch first ABM sequence. Adjust budget allocation based on Q1 ROAS data. Run second integrated campaign.",
  },
  {
    phase: "Month 7–12",
    label: "Compound & Scale",
    description:
      "Quarterly channel rebalance. Semi-annual ICP and MQL scoring review. Q4 budget planning. Second ABM list refresh. Annual demand gen retrospective and next-year program calendar with sales and finance. Scale top-performing channels.",
  },
]

const metrics = [
  { label: "Marketing-sourced pipeline", benchmark: "40–60% of total pipeline for mature demand gen functions" },
  { label: "Cost-per-MQL by channel", benchmark: "Track trend — goal is declining or stable as volume scales" },
  { label: "MQL-to-SQL conversion rate", benchmark: "15–25% MQL-to-SQL by source; defund below 10%" },
  { label: "Pipeline-to-quota coverage", benchmark: "3–4× at beginning of quarter for comfortable coverage" },
  { label: "Marketing CAC payback", benchmark: "≤18 months for SMB, ≤24 months for enterprise" },
  { label: "Funnel velocity (MQL to Closed-Won)", benchmark: "Track trend — goal is shortening or stable days" },
]

export default function DemandGenerationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Demand Generation Calendar"
        title="Build a Predictable Pipeline Machine with Structured Demand Gen Programs"
        subtitle="Campaign sequencing, MQL pipeline reviews, channel mix optimization, and ABM targeting — all on one calendar that turns marketing spend into predictable revenue."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Demand Generation Calendar
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
              12-Month Demand Generation Launch Plan
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
              Demand Generation Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to confirm your demand gen engine converts spend into pipeline predictably.
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
              &ldquo;We went from unpredictable pipeline to 4.2× quarterly coverage in six months. The key was treating demand gen like an engineering function — structured programs, defined SLAs, monthly data reviews. Momenties made the calendar side trivial.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Yemi A.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Demand Generation, B2B SaaS ($28M ARR, Series B)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your demand generation programs in minutes"
        subtitle="Momenties keeps every campaign, MQL review, and pipeline meeting in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
