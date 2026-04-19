import type { Metadata } from "next"
import { Zap, Target, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Go-to-Market Calendar | Momenties",
  description: "Build a go-to-market calendar with ICP review schedules, launch planning timelines, sales-marketing alignment cadences, positioning review cycles, and monthly GTM performance reviews that drive predictable pipeline and revenue.",
}

const pillars = [
  {
    icon: Target,
    title: "ICP Definition, Segmentation & TAM Review Cadence",
    body: "Your ICP is the foundation of every GTM motion — a fuzzy ICP produces expensive CAC, long sales cycles, and high churn. ICP review cadence: quarterly ICP refinement using trailing 90-day cohort analysis (best customers by LTV/CAC, fastest time-to-value, lowest support burden). ICP attributes to track: firmographic (company size, industry, funding stage, tech stack), behavioral (self-serve trial, inbound request, champion title), and outcome (what business problem are they solving). ICP scoring model: deploy in CRM, score every inbound lead — sales only works accounts ≥70/100 ICP score. TAM review: annual total addressable market recalculation (Gartner/IDC CE, bottom-up account universe in CRM), SAM (serviceable addressable market — accounts meeting ICP criteria in CRM), SOM (serviceable obtainable market — your realistic capture in 12 months). ICP whitespace analysis: quarterly — which ICP sub-segments are underrepresented in pipeline vs TAM proportion? Persona depth: for each ICP segment, maintain a persona card (champion title, economic buyer title, technical buyer, pain hierarchy, success metric, top 3 objections, preferred channel). Persona refresh: twice per year — interview 5 champions from recent wins + 5 from recent losses. Momenties schedules ICP reviews, TAM updates, and persona refresh interviews.",
  },
  {
    icon: Zap,
    title: "Launch Planning, Message Testing & Positioning Cadence",
    body: "Every product launch is a mini GTM motion — without a calendar, launches slip, messages don&apos;t get tested, and pipeline doesn&apos;t materialize. Launch planning timeline: major launch (new product or major feature — 12-week calendar), minor launch (feature update — 4-week calendar), patch/fix — no launch motion. 12-week major launch calendar: Week 1-4: draft positioning + message testing (5 customer interviews), Week 5-8: beta customer content + sales training + asset creation, Week 9-11: pre-launch PR + community seeding + email campaign, Week 12: launch day + post-launch pulse (conversion CE — did we get pipeline?). Positioning review: quarterly — is your positioning still differentiated vs competitive set? Use the Positioning Canvas (Geoffrey Moore — category, ICP, key benefit, differentiation, proof). Message testing cadence: A/B test 2 headline variants per landing page per quarter, interview 5 prospects per quarter with message clarity test (cold read — can they describe your value prop back in their own words?). Win/loss message analysis: quarterly — what language appeared in recent wins vs losses? Competitive displacement messaging: review quarterly — what messages work vs each competitor. Momenties tracks every launch phase, message test, and positioning review.",
  },
  {
    icon: Users,
    title: "Sales-Marketing Alignment & Pipeline Sourcing Reviews",
    body: "Sales-marketing misalignment is the single most common reason GTM motions underperform. Alignment cadence: weekly 30-min sales-marketing sync (top 5 deals — what content/collateral was used, what worked), monthly pipeline sourcing review (% of pipeline from marketing-sourced vs sales-sourced vs partnership-sourced), quarterly GTM retrospective (MQL quality score — did MQLs convert to opportunities at target rate?). MQL definition review: quarterly — re-evaluate whether your MQL criteria (score, behavior, firmographics) actually produce SQLs at target rate (target: MQL-to-SQL ≥25%). Pipeline coverage contribution by channel: marketing-sourced vs AE-sourced vs channel — who owns what % of quarterly pipeline. Content-to-pipeline attribution: monthly — which 3 pieces of content were cited in most deals this month? Feed back to content calendar. Sales objection log: sales logs top 3 new objections per week in shared doc — marketing publishes new battle card or FAQ response within 5 business days. Campaign-to-pipeline SLA: every campaign launched has a pipeline target, measurement date, and owner — reviewed at 30/60/90 days. Momenties schedules alignment syncs, MQL quality reviews, and campaign measurement dates.",
  },
  {
    icon: BarChart3,
    title: "GTM Performance Reviews & Channel Efficiency Optimization",
    body: "Monthly GTM review: total pipeline generated (marketing + sales + partner), pipeline by source channel, CAC by channel (paid CE, organic CE, outbound CE, event CE, partner CE), pipeline velocity (average days from MQL to closed-won), win rate by segment, ACV trend. Channel efficiency formula: (pipeline generated) ÷ (spend + team cost) — rank channels by efficiency quarterly and shift budget toward highest-efficiency channels. Quarterly GTM retrospective: which channel delivered the best CAC-to-LTV, which ICP segment closed fastest, which message resonated most in competitive displacement. Annual GTM audit: calculate GTM efficiency ratio (new ARR ÷ total S&M spend — target ≥0.8 at Series A/B, ≥1.0+ at growth stage), benchmark CAC payback (target <12 months — top quartile <9 months), pipeline predictability score (forecast accuracy of pipeline-to-revenue conversion within ±15%). GTM motion expansion calendar: when to add a new channel (current primary channel efficiency declining, new ICP segment identified, partner ecosystem ready). International GTM CE: localization calendar (new market entry — 6-month GTM buildout calendar), language and cultural adaptation CE. Momenties generates monthly GTM performance dashboards from your CRM and marketing automation.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "ICP & Baseline Audit", description: "ICP scoring model in CRM, TAM/SAM/SOM calculation, persona refresh interviews (5 wins + 5 losses), pipeline sourcing baseline established, channel CAC calculated." },
  { phase: "Month 3–4", label: "Positioning Refresh", description: "Quarterly positioning review complete, message A/B tests launched, sales-marketing weekly sync cadence live, MQL criteria reviewed and recalibrated." },
  { phase: "Month 5–6", label: "Launch Machine", description: "First major launch executed with full 12-week calendar. Launch retrospective complete. Win/loss analysis by message completed. Battle card refresh live." },
  { phase: "Month 7–8", label: "Pipeline Source Optimization", description: "90-day channel efficiency comparison, budget reallocation toward top-2 CAC-efficient channels. Campaign-to-pipeline SLA live. Partnership sourcing pilot if applicable." },
  { phase: "Month 9–10", label: "Competitive Displacement Sprint", description: "Competitive displacement messaging updated, win/loss analysis from competitive deals, new battle cards published. ICP whitespace analysis for Q4 targets." },
  { phase: "Month 11–12", label: "Annual Review & Reset", description: "Full GTM audit: GTM efficiency ratio, CAC payback YoY, pipeline predictability score. ICP refresh for next year. Channel budget plan for next year. International GTM assessment." },
]

const metrics = [
  { label: "GTM efficiency ratio (new ARR ÷ total S&M spend)", benchmark: "Target ≥0.8 (Series B), ≥1.0+ (growth stage)" },
  { label: "CAC payback period", benchmark: "Target <12 months (top quartile <9 months)" },
  { label: "MQL-to-SQL conversion rate", benchmark: "Target ≥25% (below 15% = ICP or MQL criteria problem)" },
  { label: "Marketing-sourced pipeline as % of total", benchmark: "Target 30-50% (varies by GTM motion)" },
  { label: "Pipeline coverage ratio at month start", benchmark: "3-4× for enterprise, 5-6× for SMB" },
  { label: "Win rate vs primary competitor", benchmark: "Benchmark quarterly — track trend not just absolute" },
]

export default function GoToMarketCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Go-to-Market Calendar"
        title="A Go-to-Market Calendar That Drives Predictable Pipeline Every Quarter"
        subtitle="From ICP review schedules to launch planning timelines — Momenties keeps every GTM review, alignment cadence, and campaign measurement date on one calendar so revenue compounds predictably."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every GTM System, One Calendar
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
              12-Month GTM Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from ICP audit to compounding GTM efficiency.
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
              GTM KPIs Worth Tracking
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
              &ldquo;We had a GTM strategy — we just didn&apos;t have a GTM calendar. ICP reviews happened never, positioning was reviewed at the annual offsite, and launches ran on spreadsheets nobody updated. One year of a Momenties GTM calendar — quarterly ICP refinements, weekly sales-marketing syncs, 12-week launch cadences — and our CAC payback dropped from 18 months to 9.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Kwame O.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Chief Revenue Officer, B2B SaaS — Series B, $22M ARR
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your GTM calendar and start driving predictable pipeline this quarter"
        subtitle="Momenties keeps every ICP review, launch milestone, alignment cadence, and channel audit on one calendar so your go-to-market motion compounds."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
