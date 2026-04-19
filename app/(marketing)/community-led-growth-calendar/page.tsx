import type { Metadata } from "next"
import { Users, Heart, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Community-Led Growth Calendar | Momenties",
  description: "Build a community-led growth calendar with champion activation schedules, community health reviews, user-generated content pipelines, and monthly CLG performance reviews that turn your users into your best growth channel.",
}

const pillars = [
  {
    icon: Users,
    title: "Community Platform & Champion Activation Cadence",
    body: "Community-led growth starts with identifying and activating power users before building infrastructure. Champion identification: tag your top 10% by product usage in your CRM every month — these are champion candidates. Champion activation sequence: personal outreach within 48 hours of hitting usage threshold, exclusive beta access offer, private Slack channel invitation, monthly 30-min champion call (rotating, 5-10 participants). Platform selection calendar: don't build community everywhere — pick one primary platform (Slack for B2B, Discord for developer/prosumer, Circle for knowledge-intensive) and one secondary (LinkedIn group for discovery, Reddit for organic). Platform review every 6 months: DAU/MAU, posts per active member per week, proportion of peer-to-peer help vs company-to-member. Welcome sequence cadence: new member welcome within 1 hour (automated), week 1 call-to-action (post an intro), week 2 connection (tag in relevant thread), week 4 achievement recognition. Onboarding completion ≥60% by day 14 indicates healthy welcome sequence. Momenties schedules champion outreach queues, platform reviews, and new member activation timers.",
  },
  {
    icon: Heart,
    title: "User-Generated Content & Peer-to-Peer Help Pipeline",
    body: "Community-led growth compounds when users help other users — that is the core flywheel. UGC content pipeline: monthly UGC prompt (specific enough to generate a response — 'How do you use [feature] for [use case]?' beats 'Share a tip'). Curate 2-3 best responses into a featured post monthly — contributors get recognition and new members see immediate value. Peer-to-peer support ratio: track what % of questions are answered by community members vs company staff — target ≥60% peer answers by month 6. Support response time SLA: first community response within 2 hours during business hours — company staff backup within 24 hours for unanswered questions. Knowledge base contribution CE: quarterly community knowledge sprint (identify top 10 repeated questions → convert to evergreen docs). Case study pipeline: surface 1-2 community member success stories per month — interview within 72 hours of spotting a win. Testimonial capture: send review request within 7 days of public community win. UGC amplification calendar: every piece of community-generated content gets amplified to 3 channels (email newsletter, social media, in-app). Momenties tracks UGC prompt schedule, peer/company response ratio, and case study pipeline.",
  },
  {
    icon: TrendingUp,
    title: "Community Health Reviews & Engagement Cadence",
    body: "Monthly community health review: total members, DAU/MAU ratio (target ≥15% DAU/MAU for healthy community), posts per week, peer answer rate, top contributors by post count, new member 30-day retention (target ≥50% post in week 1). Quarterly community audit: remove inactive members (90-day no-activity), identify lurker-to-contributor paths, run community NPS survey (5-question max), surface content gaps from search query analysis. Engagement programming calendar: weekly community roundup email (5 best posts from the week), biweekly office hours (rotating topics — 30 min live Q&A), monthly community spotlight (champion feature — 500-word written story + 5-min video), quarterly virtual summit (community-only — speakers from member base, not just company). Seasonal programs: annual community awards (top contributor, best case study, most helpful member), annual in-person meetup (co-located with industry conference if budget limited). Moderation calendar: review community guidelines quarterly, update trigger words monthly, audit banned terms annually. Dead thread resurrection: tag unanswered threads at 72 hours and 7 days — never let a question go permanently unanswered. Momenties generates weekly community health dashboards from your post log.",
  },
  {
    icon: BarChart3,
    title: "CLG Attribution, Revenue Impact & Program Reviews",
    body: "Community-led growth attribution: tag every closed deal with community touchpoints — was the buyer a community member before signing? Community member conversion rate vs non-community baseline (industry benchmark: community members convert 2-4× better). Community-influenced pipeline: track deals where a community touchpoint appeared in the pre-sale journey — tag in CRM at deal creation. Monthly CLG review: new community members added, trial starts attributed to community referral, community-sourced pipeline value, peer answer rate, DAU/MAU. Quarterly CLG retrospective: which content type drove most new member sign-ups, which community program drove most trial starts, champion-to-customer conversion rate (target ≥30% of champions trial paid tier within 12 months). CLG ROI calculation: (community-attributed ARR) / (community manager cost + platform cost + program budget). Industry benchmark: successful CLG programs drive 20-35% of new ARR within 24 months. Churn reduction metric: community members churn at 30-50% lower rate than non-members — calculate annual retention revenue saved. NPS lift: community members show 15-25 point NPS premium — quantify word-of-mouth referral value. Momenties generates monthly CLG attribution reports from your CRM integration.",
  },
]

const timeline = [
  { phase: "Month 1–2", label: "Foundation & Platform", description: "Choose primary platform, set up community infrastructure, identify first 20-50 champion candidates from top product usage tier, activate welcome sequence, launch first UGC prompt." },
  { phase: "Month 3–4", label: "Champion Program Launch", description: "Formal champion program live: private channel, monthly call cadence, beta access pipeline. First 10 champions activated. Peer-to-peer support ratio baseline established." },
  { phase: "Month 5–6", label: "Content Flywheel", description: "UGC pipeline running monthly. First case studies captured and published. Weekly community roundup email live. Biweekly office hours launched. Peer answer rate ≥40%." },
  { phase: "Month 7–8", label: "Attribution & Pipeline", description: "Community-to-trial attribution tagged in CRM. Community-influenced pipeline reported monthly. First CLG ROI calculation. Champion-to-customer conversion rate baseline." },
  { phase: "Month 9–10", label: "Scale & Programming", description: "Quarterly virtual summit launched. Community spotlight program running monthly. First annual community awards planned. Inactive member cleanup cycle established." },
  { phase: "Month 11–12", label: "Compound & Review", description: "Annual community health audit. Calculate YoY CLG attribution growth. Run annual community NPS survey. Rebuild programming calendar for next year. Benchmark vs industry CLG metrics." },
]

const metrics = [
  { label: "DAU/MAU ratio", benchmark: "Target ≥15% (healthy community benchmark)" },
  { label: "Peer-to-peer answer rate", benchmark: "Target ≥60% by month 6 (vs company-staff answers)" },
  { label: "New member 30-day retention (posted at least once)", benchmark: "Target ≥50%" },
  { label: "Community member trial conversion premium", benchmark: "Expect 2-4× vs non-community baseline" },
  { label: "Champion-to-customer conversion (12 months)", benchmark: "Target ≥30% of active champions" },
  { label: "Community-attributed ARR as % of total new ARR", benchmark: "Target 20-35% by month 24" },
]

export default function CommunityLedGrowthCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Community-Led Growth Calendar"
        title="A Community-Led Growth Calendar That Turns Users Into Your Best Growth Channel"
        subtitle="From champion activation schedules to monthly UGC prompts — Momenties keeps every community program, health review, and attribution report on one calendar so CLG compounds predictably."
        cta="Start free — no credit card"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Community System, One Calendar
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
              12-Month CLG Roadmap
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              A structured progression from community foundation to compounding community-led pipeline.
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
              CLG KPIs Worth Tracking
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
              &ldquo;We launched our community and just watched it — no programming calendar, no champion activation sequence, nothing scheduled. Dead within four months. Second time, we used Momenties to schedule every UGC prompt, champion call, and health review in advance. Eighteen months later, 31% of new ARR is community-attributed. The only difference was the calendar.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Fiona C.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Community, B2B SaaS — 6,000-member community
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your community-led growth calendar and start building your member flywheel this month"
        subtitle="Momenties keeps every champion activation, UGC prompt, health review, and CLG attribution window on one calendar so community compounds on a predictable schedule."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
