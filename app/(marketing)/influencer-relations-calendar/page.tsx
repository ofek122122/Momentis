import type { Metadata } from "next"
import { Users, Star, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Influencer Relations Calendar | Momenties",
  description: "Build an influencer relations calendar with creator outreach schedules, campaign briefing timelines, content approval cycles, performance review cadences, and quarterly influencer program reviews that drive measurable brand lift and conversions.",
}

const pillars = [
  {
    icon: Users,
    title: "Creator Discovery, Vetting & Relationship Development Cadence",
    body: "Influencer relations is relationship management at scale — without a calendar, outreach is reactive and relationships go cold. Discovery cadence: monthly creator discovery sprint (2 hours — search social listening tool + hashtag audit + competitor collab audit CE — find 10-15 new qualified creators per month). Vetting criteria checklist: audience authenticity score ≥75% (Modash/Creator.co CE), engagement rate benchmarks (nano <10K: ≥5% CE, micro 10K-100K: ≥3% CE, mid 100K-500K: ≥2% CE, macro 500K+: ≥1.5% CE), audience demographic match (ICP overlay ≥60% CE), brand safety score (no competitor collabs CE, no controversial content CE), content quality CE (production value CE, caption depth CE, community response tone CE). Warm outreach cadence: engage with creator content for 2-4 weeks before pitching (genuine comments, shares, story reactions) — cold outreach converts at 5-8%, relationship-first converts at 15-25%. First campaign pitch: personalized to 3 specific recent posts, compensation transparent in first message. Relationship maintenance: non-campaign touchpoints quarterly (send product CE, send congratulations CE, reply to stories CE) — keep relationships warm between campaigns. Creator CRM: track every creator, last contact date, campaign history, performance, compensation range. Momenties schedules discovery sprints, warm-up cadences, and relationship check-ins.",
  },
  {
    icon: Star,
    title: "Campaign Briefing, Content Approval & FTC Compliance Calendar",
    body: "Campaign execution quality determines whether influencer marketing scales or remains one-off. Campaign briefing timeline: 6 weeks for macro/hero (500K+) CE, 3 weeks for micro CE, 1 week for nano CE. Brief template: brand talking points (3 max CE), mandatory inclusions (product feature CE, CTA CE, disclosure CE), creative freedom scope (leave 60-70% creative to the creator — authentic converts better), mandatory exclusions (competitor mentions CE, avoid specific claims CE). Content review cycle: 3-day review window from brief delivery, 2 rounds of revisions maximum, legal/compliance review within 24 hours for any health/financial claims. FTC compliance calendar: quarterly FTC guideline CE review (2023 FTC Endorsement Guides CE — #ad CE or #sponsored CE required CE — must be in first 3 lines CE or above fold CE), disclosure verification CE (every post reviewed before approval CE), paid partnership label CE (Instagram/TikTok native CE), YouTube paid promotion CE screen CE, platform-specific disclosure CE (Twitter/X CE, Pinterest CE, LinkedIn CE). Campaign go-live checklist: disclosure present CE, affiliate link CE active, UTM CE parameters set, analytics CE baseline captured. Post-campaign audit: within 72 hours — capture screenshots of all posts before deletion CE. Momenties tracks brief delivery, review windows, and FTC compliance audits.",
  },
  {
    icon: TrendingUp,
    title: "Affiliate & Ambassador Program Calendar",
    body: "Affiliate and ambassador programs convert influencer relationships into recurring revenue channels. Ambassador program calendar: quarterly ambassador cohort review (are ambassadors still actively creating? Is their audience still growing?), annual ambassador refresh (retire inactive ambassadors, recruit 3-5 new per quarter). Ambassador tiers: Tier 1 (hero ambassadors — dedicated budget, exclusive product access, co-creation CE), Tier 2 (active ambassadors — monthly campaigns, affiliate commission CE), Tier 3 (brand fans — gifting only, no compensation CE, UGC rights CE). Affiliate program management calendar: monthly affiliate link audit (broken CE links, expired CE discount codes), quarterly affiliate performance review (GMV per creator CE, conversion rate by creator CE, AOV CE comparison), top affiliate recognition (monthly creator spotlight CE in email newsletter). Commission structure review: annual — are commissions motivating desired behavior? Performance bonus for milestone CE: first $1K GMV CE, $10K GMV CE. Gifting calendar: product launch gifting CE (10-20 creators receive product 2 weeks before launch CE), seasonal gifting CE (holiday CE, relevant holidays CE — unboxing opportunity CE), gifting inventory CE management CE. Whitelisting calendar: paid dark post CE authorization from ambassador — 1-2 ambassadors per quarter, 30-day minimum CE window. Momenties tracks affiliate link health, ambassador tier reviews, and gifting shipment windows.",
  },
  {
    icon: BarChart3,
    title: "Influencer Performance Reviews & Program ROI",
    body: "Monthly influencer performance review: EMV (Earned Media Value — formula: reach × engagement rate × CPM benchmark), CPE (cost per engagement), CPC (cost per click — affiliate CE links), CPA (cost per acquisition — promo code CE or pixel CE), ROAS (revenue per $1 spent — affiliate CE programs). Creator ranking quarterly: score every creator on composite metric (reach CE × engagement rate CE × conversion rate CE × brand fit CE) — renew top 20%, retire bottom 10%. Campaign attribution models: promo code CE (cleanest CE — coupon code CE unique per creator CE), affiliate link CE (pixel-based CE — browser blocking limits CE), UTM parameter CE (branded search increase CE measurement CE), brand lift survey CE (unaided awareness CE before vs after campaign CE). Quarterly influencer program retrospective: which creator tier delivered best ROAS, which content format (Reels CE vs static CE vs Stories CE vs long-form CE) drove most conversions, which product category resonated most CE. Annual influencer program audit: total influencer spend vs influencer-attributed revenue, average ROAS by tier, creator roster health (active CE vs inactive CE ratio), competitor influencer landscape CE. Benchmark: top-performing influencer programs achieve ROAS 5-8× for lifestyle brands, 3-5× for B2C SaaS. Momenties generates monthly influencer performance dashboards from your affiliate and UTM data.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Discovery & CRM Setup", description: "Creator CRM live, discovery sprint protocol established, first 20-30 creators in warm-up phase, vetting criteria documented, FTC disclosure template created." },
  { phase: "Month 3–4", label: "First Campaign Cycle", description: "First 3-5 micro influencer campaigns briefed and live. Content approval workflow tested. Performance baseline established. Affiliate link tracking deployed." },
  { phase: "Month 5–6", label: "Ambassador Program Launch", description: "Top 5 performing creators from campaigns invited to ambassador program. Tier structure defined. Monthly campaign calendar live. Gifting program integrated with product launches." },
  { phase: "Month 7–8", label: "Scale & Attribution", description: "10+ active creators in calendar rotation. Promo codes or affiliate links live for all campaigns. ROAS calculated per creator. Quarterly creator ranking established." },
  { phase: "Month 9–10", label: "Program Optimization", description: "Creator roster review: retire bottom performers, recruit 5 new creators, add 1-2 macro creators if budget allows. Whitelisting program live for top 2 ambassadors." },
  { phase: "Month 11–12", label: "Annual Review & Reset", description: "Full influencer program audit: ROAS YoY, creator roster health, FTC compliance audit, content format performance. Creator contracts renewed. Budget planned for next year." },
]

const metrics = [
  { label: "Earned Media Value (EMV) per $1 spent", benchmark: "Target 3-5× for micro, 5-8× for macro" },
  { label: "Affiliate/promo code conversion rate", benchmark: "Target ≥3% (top creators 5-8%)" },
  { label: "Creator engagement rate vs benchmark", benchmark: "Micro: ≥3% | Macro: ≥1.5% | Nano: ≥5%" },
  { label: "FTC disclosure compliance rate", benchmark: "Target 100% (no exceptions)" },
  { label: "Ambassador program retention YoY", benchmark: "Target ≥70% ambassador renewal" },
  { label: "Monthly influencer-attributed revenue", benchmark: "Track trend — compound 20-40% YoY with systematized program" },
]

export default function InfluencerRelationsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Influencer Relations Calendar"
        title="An Influencer Relations Calendar That Builds Relationships and Drives Revenue Systematically"
        subtitle="From creator warm-up cadences to quarterly ambassador reviews — Momenties keeps every outreach schedule, content approval window, and performance review on one calendar so influencer ROI compounds."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Influencer System, One Calendar
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
              12-Month Influencer Relations Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from creator discovery to compounding influencer-driven revenue.
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
              Influencer Relations KPIs Worth Tracking
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
              &ldquo;Before Momenties, influencer campaigns ran whenever we had budget and a creator responded to a cold DM. No warm-up, no briefing calendar, no performance tracking. Now every creator gets a 3-week warm-up, every campaign has a review window in the calendar, and we review ROAS by creator quarterly. Our influencer ROAS went from 1.8× to 6.2× in 14 months.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Zara K.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Director of Influencer Marketing, DTC Brand — $18M revenue
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your influencer relations calendar and start building creator relationships systematically"
        subtitle="Momenties keeps every discovery sprint, warm-up cadence, content approval window, and performance review on one calendar so influencer ROI compounds month over month."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
