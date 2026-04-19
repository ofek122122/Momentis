import type { Metadata } from "next"
import { Palette, TrendingUp, BarChart3, RefreshCw } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Brand Marketing Calendar | Momenties",
  description: "Build a brand marketing calendar with brand audit schedules, awareness campaign timelines, brand consistency reviews, NPS brand tracking cadences, and quarterly brand equity reviews that compound into durable competitive advantage.",
}

const pillars = [
  {
    icon: Palette,
    title: "Brand Audit, Positioning Review & Visual Identity Calendar",
    body: "Brand equity is built through consistency — and consistency requires a calendar. Annual brand audit: full audit of all customer touchpoints (website, emails, social, sales decks, product UI, support templates, packaging) — flag inconsistencies, outdated brand elements, and misaligned tone. Brand audit template: for each touchpoint, score: visual consistency (1-5), tone of voice consistency (1-5), message alignment (1-5), CTA consistency (1-5). Visual identity review semi-annually: logo usage audit (misuse in partner materials CE, old logo versions CE), color palette compliance audit (hex codes in marketing vs product CE — drift detection CE), typography audit (web font CE vs presentation font CE — inconsistency CE), photography/illustration style audit (stock photo inconsistency CE — avoid). Brand book refresh: annual update — add new approved assets, retire deprecated assets, update examples. Tone of voice calibration: quarterly — review 20 recent customer-facing pieces of content and rate for brand voice alignment. Brand positioning review: twice per year — is our positioning still differentiating vs competitive set? Run brand awareness survey CE (unaided awareness CE, aided awareness CE, consideration CE, preference CE). Momenties schedules brand audits, visual identity reviews, and positioning calibration sessions.",
  },
  {
    icon: TrendingUp,
    title: "Brand Awareness Campaigns & Sponsorship Calendar",
    body: "Brand awareness is a long game — campaigns need to be calendared 6-12 months in advance, not reactive. Annual brand campaign calendar: Q1 (new year — goals/transformation narrative CE), Q2 (spring/summer — growth/momentum narrative CE), Q3 (back-to-business/conference season CE — thought leadership CE), Q4 (end-of-year/look-ahead CE). Brand campaign planning timeline: major campaign (3-month brand push) — 12 weeks planning minimum (week 1-4 strategy CE, week 5-8 creative CE, week 9-12 production CE, launch week). Sponsorship calendar: identify 3-5 tier-1 conferences or events annually (ICP concentrations CE), sponsorship contracts signed 6-12 months in advance, speaker submission deadlines tracked (90 days before conference CE). Podcast sponsorship calendar: audit top 5 industry podcasts semi-annually — outreach 60-90 days before target air date. Out-of-home (OOH) campaign calendar: minimum 8-week booking lead time (digital billboard CE vs printed CE), flight duration review (awareness impact plateaus after 4 weeks CE — creative rotation CE). Brand content series: quarterly brand video series (document culture CE, customer story CE, founder CE story) — series planned 90 days in advance. Brand partnerships (co-branding): annual review — which partners have brand equity to borrow, co-branded asset review CE. Momenties schedules every campaign milestone, sponsorship deadline, and co-brand asset review.",
  },
  {
    icon: RefreshCw,
    title: "Brand Consistency Reviews, Style Guide & Template Management",
    body: "Brand consistency is the most underrated growth lever — companies with consistent brand presentation earn 23% more revenue (Lucidpress 2019 CE). Style guide review calendar: semi-annual style guide update (add new approved colors CE, update fonts CE, add new do/don&apos;t examples CE), quarterly style guide distribution (all new employees, all agency partners CE). Template library management: monthly template audit — which templates are outdated, which are most used, which are missing (common template request log CE). Template types needed: email signature template CE, social media template CE (story CE, feed CE, LinkedIn CE, X/Twitter CE), presentation template CE (sales deck CE, keynote CE, investor CE), press release template CE, case study template CE. Brand consistency scorecard: quarterly — score top 10 touchpoints on brand compliance (1-5). Touchpoints to track: website hero CE, LinkedIn CE banner, email CE footer, sales CE deck cover, support CE email template, product CE onboarding screen. Partner brand management: quarterly — audit all co-marketing materials for brand accuracy. Brand governance process: any external marketing piece requires brand review by a designated brand reviewer (1-hour SLA CE for small pieces, 24-hour SLA for major campaigns). Momenties tracks style guide reviews, template audits, and partner brand compliance checks.",
  },
  {
    icon: BarChart3,
    title: "Brand Health Tracking, NPS CE & Brand Equity Reviews",
    body: "Brand health is measurable — most companies just don&apos;t measure it. Brand awareness survey cadence: twice per year — unaided awareness (what brand comes to mind for X CE?), aided awareness (do you recognize CE?), consideration (would you consider CE?), preference (first choice CE?). Brand NPS CE: quarterly — rate the brand (not the product) on 1-10. Brand NPS is typically 10-15 points lower than product NPS — measures reputation beyond product experience. Share of voice CE: monthly — calculate your brand mentions vs top 3 competitors in media, social, podcasts, reviews (Brandwatch/Mention CE). Brand sentiment analysis: monthly — positive CE vs neutral CE vs negative CE tone in earned media CE. Brand equity financial calculation: annual — brand equity contribution to business value (Interbrand/Brand Finance methodology CE — brand royalty relief method CE). Brand consistency ROI: measure revenue per customer segment (brand-aware vs non-brand-aware CE) — brand-aware customers typically convert 2-4× better and churn 30-50% less. Quarterly brand marketing retrospective: which campaign delivered highest brand lift, which channel drove best unaided awareness improvement, what competitive brand movement happened. Annual brand benchmark: compare brand awareness % vs competitors CE — track trending direction. Momenties generates quarterly brand health reports from your tracking data.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Brand Audit & Baseline", description: "Full brand audit across all touchpoints (score 1-5), brand awareness survey baseline, style guide review, template library audit, brand NPS baseline established." },
  { phase: "Month 3–4", label: "Brand Foundation", description: "Style guide updated and distributed, template library refreshed, tone of voice calibration complete, brand consistency scorecard launched, quarterly touchpoint reviews scheduled." },
  { phase: "Month 5–6", label: "First Campaign", description: "Annual Q3 brand campaign planned and executing (thought leadership season). Sponsorship calendar finalized for next 12 months. Podcast outreach sent for Q4 air dates." },
  { phase: "Month 7–8", label: "Awareness Measurement", description: "Second brand awareness survey (compare vs baseline). Share of voice tracking live. Brand sentiment analysis cadence established. Co-brand partner audit completed." },
  { phase: "Month 9–10", label: "Scale & Partnerships", description: "Brand partnership program formalized. Co-branded asset library created. Q4 brand campaign live. Conference sponsorship CE calendar set for next year." },
  { phase: "Month 11–12", label: "Annual Review & Reset", description: "Full brand equity audit: awareness YoY, brand NPS trend, share of voice trend, brand consistency score trend. Annual campaign calendar planned. Brand book updated." },
]

const metrics = [
  { label: "Unaided brand awareness in ICP segment", benchmark: "Track YoY trend — 5-10% annual growth for active brand programs" },
  { label: "Brand NPS (brand reputation, not product)", benchmark: "Target ≥40 (strong brand equity score)" },
  { label: "Share of voice vs primary competitor", benchmark: "Track trend — top brands exceed 30% SOV in their category" },
  { label: "Brand consistency scorecard average", benchmark: "Target ≥4.0/5.0 across all touchpoints" },
  { label: "Brand-aware customer conversion premium", benchmark: "Expect 2-4× vs non-brand-aware cohort" },
  { label: "Brand-aware customer churn rate vs baseline", benchmark: "Expect 30-50% lower churn in brand-aware cohort" },
]

export default function BrandMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Marketing Calendar"
        title="A Brand Marketing Calendar That Builds Durable Competitive Advantage"
        subtitle="From annual brand audits to quarterly brand health surveys — Momenties keeps every consistency review, campaign milestone, and brand equity measurement on one calendar so brand equity compounds."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Brand System, One Calendar
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
              12-Month Brand Marketing Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from brand audit to compounding brand equity.
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
              Brand Marketing KPIs Worth Tracking
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
              &ldquo;Brand felt too soft to schedule — until we realized our old logo was still on 30% of our partner materials two years after the rebrand. Annual brand audits, quarterly consistency reviews, and awareness tracking twice a year turned brand from a feeling into a measurable system. Our unaided awareness went from 4% to 19% in our ICP segment over three years. That&apos;s compounding.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Valentina M.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Brand, B2B SaaS — $40M ARR
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your brand marketing calendar and start building durable brand equity this quarter"
        subtitle="Momenties keeps every brand audit, consistency review, awareness campaign milestone, and brand health measurement on one calendar so brand equity compounds systematically."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
