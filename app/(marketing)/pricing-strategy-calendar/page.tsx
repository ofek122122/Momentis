import type { Metadata } from "next"
import { DollarSign, BarChart3, RefreshCw, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pricing Strategy Calendar | Momenties",
  description: "Build a pricing strategy calendar with price testing schedules, value metric reviews, competitive pricing audits, willingness-to-pay research cadences, and annual packaging reviews that compound into higher ARR without more customers.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "Pricing Model Review & Value Metric Engineering",
    body: "Your value metric is the single most important pricing decision — it determines how revenue scales with customer value. Value metric audit quarterly: is your pricing metric (seats, usage, revenue, API calls, contacts) actually correlated with the value customers receive? Signs of wrong value metric: top customers complain about price, expansion is rare, churn spikes at usage limits. Value metric candidates in order of preference: outcome-based (% of revenue generated CE), usage-based (API calls, events, records processed), capability-based (feature tiers — only use if features have meaningful WTP differentiation), seat-based (last resort — does not scale). Annual pricing model review: evaluate model against retention data — usage-based pricing typically produces 30-50% higher NRR than seat-based at same ACV. Pricing page architecture review semi-annually: three tiers maximum (choice paradox beyond 3 tiers CE), middle tier anchor CE (anchoring effect — most customers choose middle), CTA contrast CE (highest-margin tier gets strongest CTA), annual discount display CE (show monthly price with annual billing savings prominently). Competitive pricing audit: quarterly — track competitor pricing changes within 72 hours of announcement. Momenties schedules value metric reviews, model audits, and competitive pricing checks.",
  },
  {
    icon: BarChart3,
    title: "Willingness-to-Pay Research & Price Testing Cadence",
    body: "Willingness-to-pay (WTP) research is the only way to set prices scientifically rather than by intuition. WTP research cadence: twice per year — Van Westendorp Price Sensitivity Meter survey (4 questions: too cheap, cheap, expensive, too expensive — draw PMC and PAC curves). Gabor-Granger A/B price testing for major plan changes: test 3-5 price points, 1,000 visitors minimum per variant, 95% confidence before calling winner. WTP segmentation: segment WTP by company size, industry, geography, use case — enterprise segment WTP is often 3-7× SMB WTP for same product. Annual conjoint analysis: discrete choice experiment to measure feature vs price trade-offs — identifies which features justify premium tier price. Price elasticity calculation: A/B test 10% price increase — conversion rate change ÷ price change = elasticity. If elasticity <-1: price-elastic market (lower price increases revenue). If elasticity >-1: price-inelastic market (raise price — revenue increases). Price increase execution calendar: annual price increase (4-8% for inflation adjustment), price increase notification 60 days before effective date, grandfathering policy CE (existing customers 12-month grace period), price increase messaging CE (value-led — 'we added X, Y, Z this year'). Momenties schedules WTP research, A/B test launches, and price increase notification deadlines.",
  },
  {
    icon: RefreshCw,
    title: "Packaging Review, Freemium Limit Design & Discount Policy",
    body: "Packaging is where most SaaS companies leave money on the table. Annual packaging review: map which features are in which tier against usage data — features used by <10% of customers are package-differentiators not value-adds. Freemium limit design review: twice per year — are free limits creating urgency or frustration? The free tier should give users enough to build habit but block at the natural expansion trigger. Packaging expansion trigger engineering: identify which feature gate most often precedes upgrade — make that gate more prominent. Bundle vs unbundle analysis: quarterly — are customers asking to buy features individually (bundled too much)? Are customers overwhelmed by choices (unbundled too much)? Add-on pricing calendar: define and price 2-3 add-ons annually (high-value features with clear WTP). Add-ons that frequently convert: SSO, advanced analytics, priority support, additional users, compliance exports. Discount policy review: quarterly — list discount levels authorized at each rep/deal level, audit whether discounts are correlated with churn (heavily discounted deals churn at 2-3× rate), set hard floor (never go below contribution margin). Competitive displacement pricing: define a competitive displacement offer reviewed quarterly — when to offer migration credits vs when to hold price. Momenties tracks packaging reviews, discount policy updates, and add-on launch schedule.",
  },
  {
    icon: TrendingUp,
    title: "Pricing Performance Reviews & Revenue Yield Optimization",
    body: "Monthly pricing review: ACV trend by tier (is mix shifting toward lower tiers?), new customer ACV vs 12-month cohort ACV (expansion or contraction?), discount rate trend (% of deals with discount, average discount depth), conversion rate by pricing page variant, annual vs monthly mix (annual billing reduces churn 30-40%). Quarterly pricing retrospective: revenue yield (ARR ÷ active customers), expansion MRR contribution, price realization rate (% of list price actually collected after discounts), win/loss analysis by price objection. Annual pricing audit: compare your pricing to industry benchmarks (similar ACV companies at your stage — SaaStr/OpenView pricing benchmarks), calculate pricing power score (can you raise price 10% without meaningful churn?), identify the pricing ceiling (maximum WTP in your top ICP segment). Pricing ROI calculation: 1% improvement in price = 3.3× the EBIT impact of 1% volume increase (McKinsey pricing research CE). Annual price increase math: raising price 5% with <3% volume loss = revenue growth without adding a customer. Monetization efficiency: revenue per employee CE, revenue per CAC dollar CE. Momenties generates monthly pricing performance dashboards automatically from your billing data.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Baseline & WTP Research", description: "Run Van Westendorp survey on current customers and churned accounts, calculate price elasticity from historical data, audit current packaging against usage data." },
  { phase: "Month 3–4", label: "Value Metric Review", description: "Validate that current value metric correlates with customer value/retention, identify top expansion triggers, competitive pricing audit of 5 closest competitors." },
  { phase: "Month 5–6", label: "Packaging Refresh", description: "Annual packaging review complete — feature-to-tier reallocation based on WTP research and usage data. Freemium limits redesigned. Add-ons defined and priced." },
  { phase: "Month 7–8", label: "Price Testing Cycle", description: "A/B test launched for major plan change (1,000 visitors minimum per variant). Discount policy reviewed and hard floors set. Price increase planning begins." },
  { phase: "Month 9–10", label: "Annual Price Increase", description: "Annual price increase announced (60-day notice), grandfathering policy published, value-led messaging prepared. Competitive displacement offer reviewed." },
  { phase: "Month 11–12", label: "Annual Review & Reset", description: "Full pricing audit: revenue yield YoY, price realization rate, discount rate trend, packaging mix vs industry benchmark. WTP research for next year planned. Pricing power score calculated." },
]

const metrics = [
  { label: "Price realization rate (list price collected)", benchmark: "Target ≥80% (heavy discounting = <70%)" },
  { label: "Annual vs monthly billing mix", benchmark: "Target ≥50% annual (reduces churn 30-40%)" },
  { label: "Average discount depth per deal", benchmark: "Target <15% (>25% discount = churn risk signal)" },
  { label: "Revenue yield (ARR per active customer)", benchmark: "Track YoY — should grow with expansion motion" },
  { label: "Price increase retention (customers retained after annual increase)", benchmark: "Target ≥97% (healthy pricing power)" },
  { label: "Expansion MRR from packaging/add-on triggers", benchmark: "Target ≥25% of total MRR growth" },
]

export default function PricingStrategyCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing Strategy Calendar"
        title="A Pricing Strategy Calendar That Compounds ARR Without More Customers"
        subtitle="From willingness-to-pay research schedules to annual price increase timelines — Momenties keeps every pricing test, packaging review, and competitive audit on one calendar so your monetization improves predictably."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Pricing System, One Calendar
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
              12-Month Pricing Strategy Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from WTP research to compounding revenue yield improvement.
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
              Pricing KPIs Worth Tracking
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
              &ldquo;We hadn&apos;t touched our pricing in 3 years. No WTP research, no packaging review, no competitive audit. One year of a Momenties pricing calendar — two WTP surveys, a packaging restructure, and one 8% price increase — added $680K ARR without a single new customer. Pricing is the highest-leverage growth lever nobody manages systematically.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Riya P.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Product, B2B SaaS — $8M ARR
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your pricing strategy calendar and start optimizing revenue yield this quarter"
        subtitle="Momenties keeps every WTP research sprint, packaging review, price test, and annual increase notification on one calendar so pricing compounds systematically."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
