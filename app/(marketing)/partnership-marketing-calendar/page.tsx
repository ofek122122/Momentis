import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Partnership Marketing Calendar | Momenties",
  description: "Plan your partnership marketing calendar with partner development, joint campaign execution, revenue tracking, and relationship maintenance. Turn partnerships into a predictable revenue channel.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Partner Development Pipeline Calendar",
    body: "Partnership marketing calendar starts with a systematic partner development pipeline — not opportunistic partnerships that emerge when someone sends a cold email. Partner identification criteria: complementary product (not competitive — your product solves step 2, their product solves step 1 for the same customer), shared ideal customer profile (same company size, industry, and buying persona), comparable credibility (logos, case studies, domain authority), and measurable mutual benefit hypothesis (what revenue or audience growth does each party gain?). Monthly pipeline calendar: identify 10-15 new partner candidates per month, qualify by ICP overlap (5-7 vetted), outreach to 5 per month (personalized — reference their product in the context of your customer journey), close 1-2 new partner agreements per quarter. Partner tiering: Tier 1 (deep integration, joint go-to-market, revenue share — 2-4 partners per year), Tier 2 (co-marketing only — content, events, email — 4-8 active per quarter), Tier 3 (referral only — informal mention in sales calls). Momenties tracks pipeline stages, outreach cadence, and partner agreement dates as calendar events.",
  },
  {
    icon: Clock,
    title: "Joint Campaign Execution Calendar",
    body: "Partnership marketing campaigns require 8-12 weeks from agreement to launch for Tier 1 (joint webinar, co-authored report, integration announcement), and 4-6 weeks for Tier 2 (newsletter cross-promotion, social co-post, partner blog post). Joint campaign calendar: week 1 — campaign brief shared (audience split, content ownership, promotion responsibilities, tracking setup, success metrics). Week 2-4 — content development (both teams review and approve each other&apos;s sections). Week 5-6 — landing page, tracking links, email copy reviewed by both legal teams. Week 7-8 — test promotion (email seed to internal lists, social preview posts). Launch week — simultaneous distribution on agreed date. Post-launch — 7-day and 30-day performance debrief. The campaign calendar is owned by one team but both teams must have visibility. Approval windows: build 5-day legal/brand approval buffer for each team — campaigns that skip this step produce post-launch corrections that undermine partner trust.",
  },
  {
    icon: BarChart3,
    title: "Revenue Attribution & Performance Tracking Calendar",
    body: "Partnership revenue attribution is notoriously difficult without systems set up before the campaign launches. Attribution calendar: at brief stage — agree on tracking methodology (UTM parameters, unique promo codes, pixel events, or CRM deal source tagging). Co-sell tracking: when both sales teams are jointly closing deals, CRM tagging at opportunity creation is required (not retroactively). Monthly partner revenue review: partner-sourced pipeline (opportunities where partner introduced or influenced), partner-attributed closed revenue (won deals with partner source tag), partner activation rate (percentage of partner contacts who became active customers), and CAC comparison (partner CAC versus owned channels). Quarterly partner revenue report: share with partner for mutual transparency — this is what keeps Tier 1 partners engaged. Annual revenue attribution audit: verify that CRM deal source tagging is consistently applied, identify attribution blind spots (deals that both sales teams touched — double-count risk), and recalibrate revenue share calculations if applicable.",
  },
  {
    icon: Users,
    title: "Partner Enablement & Relationship Maintenance Calendar",
    body: "Partnership marketing fails most often not during launch campaigns but between campaigns — when the partner goes quiet, the partner sales team forgets your product exists, and the integration collects dust. Partner enablement calendar: monthly partner newsletter (new product updates, battle cards, win stories — delivered by email to all partner-side sales and CS contacts), quarterly partner training (60-minute webinar for partner sales team — new features, objection handling, mutual customer success stories), and annual partner summit (in-person or virtual — relationship investment, roadmap preview, joint planning session). Non-campaign touchpoints: bi-monthly check-in call with partner marketing counterpart (relationship maintenance, pipeline review, early identification of friction), shared Slack channel for async collaboration (reduces 3-day email turnaround for asset approvals). Partner health score: quarterly assessment — active pipeline referrals (is the partner actively sending opportunities?), co-marketing participation (is the partner showing up to joint campaigns?), product adoption (is the partner actually using your product?). Partners scoring below threshold get a re-activation conversation before offboarding.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Partner Pipeline & First Agreement",
    description:
      "Define partner ICP (ideal partner profile) before outreach begins. Build initial pipeline of 20-30 potential partners. Outreach to 10 most qualified. Aim for first Tier 2 partnership agreement by end of month 1 — newsletter swap or social co-post as a low-commitment pilot. Set up UTM parameter system and CRM partner source tagging.",
  },
  {
    phase: "Month 2–3",
    label: "First Campaign & Revenue Attribution",
    description:
      "Execute first joint campaign (Tier 2 or Tier 1 depending on agreement pace). Establish post-campaign review cadence with partner. Set up monthly partner revenue review in your CRM. Onboard partner to shared communication channel. Aim for one Tier 1 partnership agreement signed by end of month 3.",
  },
  {
    phase: "Month 4–6",
    label: "Scale to Quarterly Cadence",
    description:
      "Run one Tier 1 campaign per quarter, maintain 2-3 active Tier 2 partners per month. Launch monthly partner newsletter to all active partners. Start quarterly partner training cadence. First quarterly partner revenue report shared externally. Identify which partner profiles are generating most revenue and adjust pipeline sourcing criteria.",
  },
  {
    phase: "Month 7–12",
    label: "Systematize & Partner Program Launch",
    description:
      "Build partner playbook from first three campaigns — brief templates, approval checklists, campaign timelines. Launch formal partner program (tiering criteria, benefits by tier, onboarding process). Annual partner summit planning. Revenue attribution audit. Identify 2-3 Tier 1 partners for next year&apos;s deep integration investment. Evaluate partner portal or PRM (partner relationship management) tool if partner count exceeds 15.",
  },
]

const metrics = [
  { label: "Partner-sourced pipeline as % of total", benchmark: "Target 15-25% of total pipeline from partnerships at scale; track monthly by partner" },
  { label: "Partner CAC vs owned-channel CAC", benchmark: "Partnership CAC should be 20-40% lower than comparable outbound channels — measure by cohort" },
  { label: "Partner activation rate", benchmark: "≥40% of partner referral contacts should convert to active trial or demo within 30 days" },
  { label: "Co-marketing campaign close rate", benchmark: "Inbound leads from joint campaigns should close at 1.5-2× the rate of cold inbound — measure separately" },
  { label: "Partner retention rate", benchmark: "≥70% of Tier 1 partners should run a second campaign within 12 months — below 50% signals enablement failure" },
  { label: "Partner NPS", benchmark: "Quarterly partner satisfaction score ≥8 — partners who score <7 are at offboarding risk; conduct retention conversation immediately" },
]

export default function PartnershipMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership Marketing Calendar"
        title="Turn Partnerships Into a Predictable Revenue Channel with a Structured Calendar"
        subtitle="Partner development, joint campaign execution, revenue attribution, and relationship maintenance — all on one calendar that makes partnerships compound rather than stagnate."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Partnership Marketing Calendar
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
              12-Month Partnership Marketing Calendar
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
              Partnership Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics per partnership to identify which relationships are worth deepening and which need re-activation.
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
              &ldquo;Partnership marketing was our highest-ROI channel — 22% of our closed revenue came from partners — but it only worked because we treated it like a channel with a calendar, not a relationship that would magically produce results. The partner enablement calendar was the piece we almost skipped. When we started the monthly partner newsletter and quarterly training, our partners&apos; referral rates doubled within two quarters. They had just forgotten we existed between campaigns.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Maya B.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Partnerships, B2B SaaS ($8M ARR, 22% of revenue from partner channel)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your partnership marketing calendar in minutes"
        subtitle="Momenties keeps every partner campaign deadline, enablement touchpoint, and revenue review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
