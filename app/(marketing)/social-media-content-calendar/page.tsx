import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Social Media Content Calendar | Momenties",
  description: "Plan your social media content calendar with platform-specific schedules, content mix ratios, engagement reviews, and campaign coordination. Build a consistent presence that grows.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Platform-Specific Posting Schedules",
    body: "Each platform has a distinct optimal cadence — posting the same content at the same frequency on all platforms dilutes performance on all of them. LinkedIn: 4–5 posts/week (Tuesday–Thursday, 8–10am and 12pm), organic reach peaks on Tuesday; native documents and carousels outperform links 3× on impressions. Instagram: 4–6 feed posts/week + 2–3 Reels; Stories daily. TikTok: 1–3 short-form videos/day; consistency beats quality for early algorithmic growth. X/Twitter: 3–5 posts/day; conversation and reply velocity matter more than original posts. YouTube: 2 uploads/week (Tuesday and Thursday 2pm). Pre-schedule 2 weeks ahead to maintain consistency through holidays and team absences.",
  },
  {
    icon: Clock,
    title: "Content Mix & Topic Calendar",
    body: "Proven content mix for brand accounts: 40% educational (how-to, insights, frameworks), 25% social proof (case studies, testimonials, metrics), 20% brand/culture (team, behind-the-scenes, values), 15% product (features, demos, announcements). Plan topic calendar 4 weeks ahead: anchor around 3–5 content themes per month, align with product launches, seasonal moments, and campaign windows. Evergreen ratio: 60% evergreen content, 40% timely. Topical posts get short-burst impressions; evergreen compounds over months. Monthly content audit: identify top-performing posts — repurpose format and topic into future planned content.",
  },
  {
    icon: BarChart3,
    title: "Engagement & Community Calendar",
    body: "Engagement hour: dedicate 30–45 minutes daily (or twice daily for growing accounts) to reply to comments, respond in DMs, and engage with relevant posts from target audience accounts. Monday engagement sprint: review weekend comments and messages — respond to all within 24 hours. Weekly community moment: feature a follower, reshare user-generated content, or host a poll/question. Monthly creator or collab post: partner with one aligned account for cross-audience content. Comment-to-follower ratio benchmark: 1 comment per 50 followers per post is strong engagement on LinkedIn; Instagram 1:100 is healthy. Track engagement rate (not just follower count) weekly.",
  },
  {
    icon: Users,
    title: "Campaign Integration & Analytics Cadence",
    body: "Social calendar must integrate with product launch calendar (6 weeks ahead), email calendar (coordinate messaging so social and email reinforce, not repeat), and paid media calendar (organic content informs paid creative — top organic posts become ad creative within 48 hours of proving engagement). Monthly analytics review: impressions, reach, engagement rate, follower growth, profile visits, and link clicks per platform. Quarterly platform strategy review: re-evaluate platform mix based on audience growth rate and content ROI. Annual social media audit: archive underperforming accounts, refresh bio and profile assets, update link-in-bio destinations.",
  },
]

const timeline = [
  {
    phase: "Week 1–2",
    label: "Strategy & Setup",
    description:
      "Audit all existing social accounts, define audience personas per platform, establish content mix ratios, build 4-week content buffer, set up scheduling tool (Buffer, Hootsuite, Sprout, or native schedulers), and define KPIs and reporting cadence.",
  },
  {
    phase: "Month 1",
    label: "Rhythm Establishment",
    description:
      "Publish on defined schedule every day. Run engagement hour daily. Track engagement rates weekly. Experiment with 2–3 formats per platform to identify top performers. Document what resonates — type, length, time of day, topic.",
  },
  {
    phase: "Month 2–3",
    label: "Optimization & Repurposing",
    description:
      "Identify top 20% of posts by engagement rate and replicate format/topic. Build content repurposing workflow (one LinkedIn post → Twitter thread → Instagram carousel → newsletter excerpt). Begin monthly analytics review. Run first cross-platform campaign.",
  },
  {
    phase: "Month 4–12",
    label: "Scale & Compound",
    description:
      "Expand top-performing platform with increased frequency. Add one new platform or format per quarter. Monthly creator collab or co-post. Quarterly platform strategy review. Annual content audit and strategy reset. Document all learnings in content playbook.",
  },
]

const metrics = [
  { label: "Engagement rate", benchmark: "LinkedIn ≥2%, Instagram ≥3%, TikTok ≥5% is strong" },
  { label: "Post consistency rate", benchmark: "≥90% of planned posts published on schedule" },
  { label: "Organic reach MoM growth", benchmark: "5–15% MoM for growing accounts" },
  { label: "Follower growth from content", benchmark: "Track content-attributed follows vs paid vs viral" },
  { label: "Link-in-bio click rate", benchmark: "≥3% of profile visitors click through to website" },
  { label: "Top-post repurposing rate", benchmark: "≥50% of top-10 posts repurposed across ≥2 formats" },
]

export default function SocialMediaContentCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Media Content Calendar"
        title="Build a Consistent Social Presence with Platform-Specific Schedules"
        subtitle="Platform cadences, content mix ratios, engagement rhythms, and analytics reviews — all on one calendar so your social media presence compounds followers and engagement month over month."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Social Media Content Calendar
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
              12-Month Social Media Calendar Launch Plan
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
              Social Media Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to confirm your content calendar is building real audience — not just impressions.
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
              &ldquo;We grew our LinkedIn from 800 to 48,000 followers in 14 months. The tactic was boring: a content calendar with fixed posting days, a daily engagement block, and monthly audits. Consistency beat creativity every single month.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Layla B.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Social Media Lead, B2B SaaS brand (800 to 48K LinkedIn followers in 14 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your social media content calendar in minutes"
        subtitle="Momenties keeps every platform schedule, engagement block, and campaign window in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
