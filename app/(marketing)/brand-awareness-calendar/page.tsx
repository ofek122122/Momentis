import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Brand Awareness Calendar | Momenties",
  description: "Plan your brand awareness calendar with thought leadership cadences, press and media touchpoints, sponsorship schedules, and brand health reviews. Build a brand that compounds trust.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Thought Leadership & Content Authority Calendar",
    body: "Brand awareness compounds through consistent thought leadership — one piece of high-quality, original-perspective content per week outperforms five pieces of commodity content every time. Thought leadership calendar: 2–3 long-form perspectives (LinkedIn article, industry newsletter, or podcast appearance) per month from the founder or C-suite. Monthly op-ed or commentary on a timely industry development — pitch 3 weeks before the publication window closes. Speaker application calendar: major industry conference CFPs (Call for Papers) open 3–6 months before the event — schedule submission deadlines in reverse from conference date. Quarterly awards and recognition calendar: apply for 2–4 industry awards per year (selection criteria, deadline, and submission package deadlines all tracked).",
  },
  {
    icon: Clock,
    title: "Press, Media & Analyst Relations Calendar",
    body: "Journalist relationship touchpoints: one non-pitch outreach per quarter per key journalist (share a relevant data point or make an introduction — build before you need). Monthly news hooks calendar: identify 2–3 moments where your brand can offer a reactive expert quote (regulatory updates, competitor announcements, market reports). Analyst briefing calendar: Gartner, Forrester, and IDC briefing cycles — brief key analysts 2× per year with new company data, customer win stories, and product roadmap. Press release schedule: tie releases to genuine milestones — funding, product launch, partnership, customer wins (milestone-driven, not calendar-driven). Media monitoring: weekly brand mention digest for reactive opportunities and coverage tracking.",
  },
  {
    icon: BarChart3,
    title: "Sponsorship & Event Presence Calendar",
    body: "Conference sponsorship calendar: build an 18-month forward view of all conferences, trade shows, and community events. Decision timeline: sponsor commitment 6–8 months ahead for tier-1 shows, 3–4 months for tier-2. Maximize sponsored events with pre-event outreach (schedule meetings with targets before the show floor opens), on-site activation (session, booth, dinner, or reception — pick one per event and do it well), and post-event follow-up sequence (personalized within 72 hours of meeting). Community sponsorships: newsletters, podcasts, and online communities reach niche audiences — schedule 3-month pilots with 3 new community channels per quarter. ROI review quarterly: sponsorship pipeline-attributed revenue.",
  },
  {
    icon: Users,
    title: "Brand Health Measurement & Share-of-Voice Calendar",
    body: "Brand health KPIs: unaided brand recall, share of voice (SOV) vs competitors, branded search volume, direct traffic growth, NPS as a proxy for brand strength. Monthly SOV report: track branded keyword search volume growth, press mention volume vs competitors, LinkedIn follower growth rate vs category benchmark. Quarterly brand survey: 5-question brand perception survey to a panel of 200–500 target-market respondents — track awareness %, consideration %, and Net Promoter Score trend. Annual brand audit: message house review, visual identity consistency check, brand positioning vs competitive landscape. Competitive positioning review semi-annually — update messaging if a competitor repositions.",
  },
]

const timeline = [
  {
    phase: "Month 1–2",
    label: "Foundation & Baseline",
    description:
      "Conduct brand audit, define target audience segments, set brand health baselines (branded search volume, share of voice, NPS), build thought leadership content pipeline for first 90 days, identify 3 key journalists and 2 analysts to cultivate, and schedule first quarterly brand perception survey.",
  },
  {
    phase: "Month 3–5",
    label: "Activation Sprint",
    description:
      "Launch thought leadership cadence (2 long-form pieces per month), secure first 2 media placements, submit CFPs for 2–3 upcoming conferences, run first community sponsorship pilot, and publish first brand health report from baseline survey.",
  },
  {
    phase: "Month 6–9",
    label: "Scale & Measure",
    description:
      "Expand speaking appearances (target 1 conference appearance per month by month 9), run second quarterly brand survey and measure change from baseline, add analyst briefing cycle, evaluate sponsorship pilots for ROI and renew top performers.",
  },
  {
    phase: "Month 10–12",
    label: "Compound & Reposition',",
    description:
      "Annual brand audit and message house review, year-in-review thought leadership content, plan next year&apos;s conference calendar, evaluate brand positioning vs competitive landscape shifts, and publish annual brand awareness report externally.",
  },
]

const metrics = [
  { label: "Branded search volume growth", benchmark: "10–20% YoY growth in branded keyword impressions" },
  { label: "Share of voice vs top 3 competitors", benchmark: "Track monthly — target increasing trend" },
  { label: "Unaided brand recall (quarterly survey)", benchmark: "Benchmark your starting point; track trend, not absolute number" },
  { label: "Media mention volume", benchmark: "Consistent monthly media mentions in target publications" },
  { label: "Analyst coverage", benchmark: "Featured in ≥1 relevant analyst report per year" },
  { label: "Direct traffic MoM growth", benchmark: "5–10% MoM — proxy for brand pull in the market" },
]

export default function BrandAwarenessCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Awareness Calendar"
        title="Build a Brand That Compounds Trust with Structured Thought Leadership"
        subtitle="Thought leadership cadences, press touchpoints, sponsorship schedules, and brand health reviews — all on one calendar so your brand grows recognition while your team focuses on execution."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Brand Awareness Calendar
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
              12-Month Brand Awareness Calendar
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
              Brand Awareness Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics quarterly to confirm brand equity compounds over time.
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
              &ldquo;Our branded search volume tripled in 18 months without a single dollar of brand advertising. We just showed up consistently — thought leadership, analyst briefings, conference speaking, every single month without skipping. The calendar made that possible.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Soren M.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              VP Marketing, B2B Enterprise SaaS (Series B, $45M ARR)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your brand awareness program in minutes"
        subtitle="Momenties keeps every thought leadership piece, press pitch, and sponsorship deadline in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
