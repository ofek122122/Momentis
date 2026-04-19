import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Video Marketing Calendar | Momenties",
  description: "Plan your video marketing calendar with production sprints, platform-specific cadences, repurposing pipelines, and performance reviews. Build a consistent video presence that compounds.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Video Content Mix & Production Planning",
    body: "Video marketing mix by objective: 40% educational (how-to, explainers, tutorials), 30% brand/culture (team story, behind the scenes, founder content), 20% product (demos, feature walkthroughs, customer walkthroughs), 10% conversion (case studies, testimonials, comparison videos). Plan production in sprints: batch-record 4–8 short-form videos per session, 2 long-form videos per session. Pre-production calendar items: script approval 10 days before shoot, B-roll shot list 5 days before, asset review (slides, screen recordings, graphics) 3 days before, final approval 1 day before. Publish to a 6-week content buffer — never produce week-to-week.",
  },
  {
    icon: Clock,
    title: "Platform Cadence & Distribution Schedule",
    body: "YouTube: 1–2 videos/week (Tuesday and Thursday at 2pm ET benchmark). Optimal video length: 8–15 minutes for educational, 3–5 minutes for product demos, 45–90 seconds for shorts repurposed from long-form. LinkedIn: 2–3 native videos/week (short-form 60–90 seconds), organic reach peaks Tuesday–Thursday 8–10am. Instagram Reels: daily or 5×/week (15–30 seconds), repurposed from YouTube Shorts. TikTok: 1–2×/day if vertical video resources exist. X/Twitter native video: 30–60 second clips with captions always on. Pre-schedule all uploads 2 weeks ahead — platform algorithm rewards consistency above all else.",
  },
  {
    icon: BarChart3,
    title: "Repurposing & Asset Extraction Calendar",
    body: "Every long-form video (8+ minutes) yields 5–8 assets: 3–4 short-form clips (60–90 seconds each), 1 audiogram for podcast distribution, 1 blog post from transcript with SEO optimization, 1 email newsletter section, and a quote graphic. Repurposing sprint: schedule weekly (Friday afternoon) to extract assets from that week&apos;s long-form content. Thumbnail A/B test: run two thumbnail variants for the first 48 hours, switch to winner at the 48-hour mark. Caption and subtitle review: all videos captioned within 24 hours of publish (accessibility + 85% of video watched without sound on mobile).",
  },
  {
    icon: Users,
    title: "Performance Review & Optimization Cadence",
    body: "Weekly analytics review (15 minutes, Tuesday): views, watch time, average view duration, click-through rate on thumbnail. Monthly deep review: audience retention curve per video (identify drop-off point — most content loses 30% of viewers in first 30 seconds), subscriber conversion rate per video, top-performing titles/formats. Quarterly strategy reset: identify 3 content formats or topics driving 80% of watch time, double down. A/B test new format quarterly (documentary style, whiteboard, talking head, screen recording, animation). Annual channel audit: purge or update low-performing evergreen content, refresh thumbnails on top-performing older videos.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Foundation: Backlog & Batch",
    description:
      "Build a 6-week content buffer before launch: produce 12–16 short-form and 4–6 long-form videos. Establish brand template (intro bumper, lower thirds, outro CTA card). Set up upload automation (TubeBuddy, Hootsuite, or Buffer) and analytics dashboard. Define success metrics baseline.",
  },
  {
    phase: "Month 2–3",
    label: "Consistency Phase",
    description:
      "Publish on fixed schedule without exception. Weekly production sprint: Monday script, Wednesday shoot, Thursday edit, Friday review, Tuesday publish. Extract repurposed assets every Friday. Begin tracking watch time and CTR weekly. Run first thumbnail A/B test at week 8.",
  },
  {
    phase: "Month 4–6",
    label: "Optimization & Audience Building",
    description:
      "Identify top-performing formats from first 90 days of data. Adjust content mix to weight toward what retains best. Begin keyword-optimized YouTube SEO for educational content. Launch YouTube end screen + card strategy. Test long-form to short-form ratio.",
  },
  {
    phase: "Month 7–12",
    label: "Scale & Distribution Expansion",
    description:
      "Expand to secondary platforms (Reels, TikTok, LinkedIn video). Add one new video format per quarter. Run sponsored content or creator collaboration. Monthly video revenue attribution review (if product demo or testimonial content). Annual channel strategy reset with team.",
  },
]

const metrics = [
  { label: "Average view duration", benchmark: "≥40% for short-form, ≥35% for long-form" },
  { label: "Click-through rate (thumbnail)", benchmark: "4–10% CTR on YouTube is strong for established channels" },
  { label: "Subscriber conversion rate", benchmark: "≥1 new subscriber per 100 views as a starting benchmark" },
  { label: "Repurposed asset production", benchmark: "≥5 assets extracted per long-form video per week" },
  { label: "Content buffer", benchmark: "Maintain ≥4-week backlog at all times" },
  { label: "Watch time MoM growth", benchmark: "10–20% MoM in months 1–6 for early channels" },
]

export default function VideoMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Video Marketing Calendar"
        title="Build a Consistent Video Presence with a Structured Production Calendar"
        subtitle="Production sprints, platform cadences, repurposing pipelines, and monthly performance reviews — all scheduled so your video marketing compounds without burning out your team."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Video Marketing Calendar
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

      {/* 12-month timeline */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              12-Month Video Marketing Launch Plan
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
              Video Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to confirm your video calendar is compounding reach and watch time.
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
              &ldquo;We grew from 1,200 to 94,000 YouTube subscribers in 11 months. Consistency was everything — same upload day, every week, for 52 consecutive weeks. Momenties made that feel easy instead of heroic.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Eliot R.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Video, B2B software company (94K subscribers, 2.4M annual views)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your video production calendar in minutes"
        subtitle="Momenties keeps every shoot day, publish date, and repurposing sprint in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
