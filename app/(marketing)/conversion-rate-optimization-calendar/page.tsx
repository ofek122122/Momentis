import type { Metadata } from "next"
import { TrendingUp, FlaskConical, BarChart3, Target } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Calendar | Momenties",
  description: "Build a repeatable CRO calendar with landing page testing schedules, funnel audit cadences, A/B test pipelines, and monthly optimization reviews that compound into higher revenue without more ad spend.",
}

const pillars = [
  {
    icon: FlaskConical,
    title: "Landing Page Testing Cadence",
    body: "Run one primary A/B test per landing page per month — more dilutes statistical significance. Minimum sample: 1,000 unique visitors per variant before calling a winner at 95% confidence. Test hierarchy: headline first (highest leverage — 5-10× impact of color tests), then hero image/video, then primary CTA copy, then form length, then social proof placement. Never test two elements simultaneously on the same page. Document hypothesis before launching: 'We believe changing [element] from [A] to [B] will increase [metric] because [rationale].' Reserve 20% of test slots for big swing experiments (completely different page concept) — incremental wins plateau after 12-18 months. Rotate test priority quarterly: Q1 acquisition pages, Q2 trial/demo pages, Q3 pricing pages, Q4 retention/upgrade pages. Momenties schedules each test's launch date, minimum runtime, and review date so nothing runs past significance.",
  },
  {
    icon: Target,
    title: "Funnel Audit & Drop-Off Analysis",
    body: "Audit the full conversion funnel monthly: traffic → lead → trial → activation → paid → expansion. Flag any step where drop-off exceeds 60% — that is your highest-leverage CRO opportunity. Weekly micro-audits: check session recordings (Hotjar/FullStory) for rage clicks, form abandonment, and scroll depth anomalies. Monthly macro-audit: rebuild the funnel in your analytics tool from scratch — cached dashboards hide data pipeline bugs. Quarterly cohort analysis: compare conversion rates by traffic source, device type, and campaign — a 3% blended rate may hide an 8% mobile rate and a 1.5% organic rate that need different fixes. Form audit every 90 days: remove every field that is not used in lead scoring or segmentation. Each removed field increases form completion 5-8%. Heatmap review before any major redesign — confirm where users actually click versus where you assumed they click. Momenties logs each audit date and flags overdue reviews.",
  },
  {
    icon: TrendingUp,
    title: "A/B Test Pipeline & Experiment Backlog",
    body: "Maintain a prioritized experiment backlog scored by ICE (Impact × Confidence × Ease, 1-10 each). Run top-scored experiments first. Minimum backlog depth: 8-12 experiments always queued so idle test slots are never wasted. Pre-mortems required before top-10 experiments: what could go wrong, and how will we interpret ambiguous results? Define primary metric (conversion rate), secondary metric (revenue per visitor), and guardrail metric (bounce rate) before launch — never add metrics after results are in. Significance calculator locked to 95% confidence, 80% power, minimum detectable effect 5% relative lift — lower standards produce false positives. Loser analysis: document why losing variants lost; 40% of CRO knowledge comes from failures. Segment winners before shipping: a winning variant for mobile users may be a loser for desktop — check before global rollout. Patch velocity: ship winning variants within 5 business days of calling significance — delayed shipping wastes learnings. Momenties tracks each experiment from hypothesis to ship date.",
  },
  {
    icon: BarChart3,
    title: "CRO Performance Reviews & Compounding",
    body: "Monthly CRO review: current overall CVR vs. 30/60/90-day rolling average, tests launched vs. tests won, revenue impact of shipped winners (A × ΔCR × AOV), experiment velocity (tests per month — target ≥4). Quarterly CRO retrospective: which page types delivered the most CVR lift, which test categories (copy, design, offer, social proof) won most often, what is the next 90-day testing roadmap. Annual compounding math: 12 months × 4 tests/month × 15% average win rate = 7-8 compounding wins per year. At 5% lift per win compounding: 1.05^7 = 41% annual CVR improvement. Benchmark your CVR against industry medians: SaaS trial-to-paid 18-25%, landing page lead 2.5-5.5%, demo request 4-8%, pricing page trial 6-12%. CRO ROI calculation: (additional revenue from lift) / (team cost + tool cost) — typical CRO programs return 5-10× within 12 months. Momenties generates your monthly CRO performance dashboard automatically from your test log.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Baseline & Audit", description: "Install session recording, set up analytics funnel, run full drop-off audit, score experiment backlog with ICE framework, launch first 2 A/B tests." },
  { phase: "Month 3–4", label: "Headline & Hero Testing", description: "Test headlines on top 3 landing pages, hero image/video variants, primary CTA copy. Ship first winners. Document learnings." },
  { phase: "Month 5–6", label: "Form & Friction Reduction", description: "Audit all forms, remove unused fields, test form length variants. Mobile funnel deep-dive — separate mobile vs desktop optimization tracks." },
  { phase: "Month 7–8", label: "Social Proof & Trust", description: "Test testimonial placement, logo walls, case study formats, review widget variants. Pricing page CRO sprint — test anchoring, plan structure, CTA copy." },
  { phase: "Month 9–10", label: "Offer & Incentive Testing", description: "Test trial length, free tier limits, demo vs. trial CTA, risk-reversal copy (money-back guarantee framing). Segment winners by traffic source." },
  { phase: "Month 11–12", label: "Compounding & Scale", description: "Implement all winning variants globally. Run annual CRO audit, calculate compounding lift, rebuild ICE backlog for next year. Benchmark vs. industry." },
]

const metrics = [
  { label: "Primary CVR (landing → trial)", benchmark: "Target ≥3.5% (SaaS median 2.5%)" },
  { label: "Trial → paid conversion rate", benchmark: "Target ≥18% (top quartile 25%+)" },
  { label: "Experiment velocity", benchmark: "≥4 tests launched per month" },
  { label: "Test win rate", benchmark: "Target 20-30% (random baseline 10%)" },
  { label: "Time to ship winning variant", benchmark: "≤5 business days after significance" },
  { label: "Annual CVR compounding lift", benchmark: "Target ≥30% YoY (7-8 wins × ~4% avg lift)" },
]

export default function ConversionRateOptimizationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="CRO Calendar"
        title="A Conversion Rate Optimization Calendar That Compounds Every Month"
        subtitle="From landing page A/B tests to quarterly funnel audits — Momenties schedules every experiment, review, and ship date so your CVR improves predictably without burning your team on ad-hoc testing."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every CRO System, One Calendar
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
              12-Month CRO Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from baseline audit to compounding conversion gains.
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
              CRO KPIs Worth Tracking
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
              &ldquo;We went from running 1-2 tests per quarter — mostly stalling mid-experiment — to 4 tests per month with consistent ship dates. Twelve months in, our trial CVR compounded from 2.1% to 3.8%. Same traffic, 81% more trials. Momenties made experiment velocity a scheduled habit instead of a heroic effort.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Leila N.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Growth, B2B SaaS — $4M ARR
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your CRO calendar and start compounding conversion gains this month"
        subtitle="Momenties keeps every A/B test, funnel audit, and ship deadline on one calendar so your CVR improves on a predictable schedule."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
