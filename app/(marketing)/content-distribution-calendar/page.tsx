import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Content Distribution Calendar | Momenties",
  description: "Plan your content distribution calendar with channel mix strategy, syndication scheduling, repurposing pipelines, and performance reviews. Get every piece of content in front of the right audience.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Distribution Channel Mix & Priority Calendar",
    body: "Channel mix framework: owned channels (email, blog, social profiles) always first — zero incremental cost and highest audience trust. Earned channels (press, community shares, organic social amplification) second — no direct control, build through quality. Paid distribution (promoted posts, content discovery networks) third — only amplify content that already performs on owned. Channel prioritization matrix: score each channel by audience fit (0-10), distribution cost per qualified reader, and content format compatibility. Run distribution calendar by content tier: Tier-1 (flagship reports, original research) gets full-stack distribution across all channels; Tier-2 (long-form guides) gets owned + 2 earned; Tier-3 (short-form posts) owned only. Recalibrate channel mix quarterly based on traffic attribution.",
  },
  {
    icon: Clock,
    title: "Syndication & Cross-Publishing Calendar",
    body: "Syndication sequencing: publish on owned domain first — wait minimum 3–7 days before syndicating to prevent canonical issues (Google indexes original first, then syndicated with canonical tag). Syndication targets by content type: LinkedIn Articles (thought leadership, 800–1500 words — same week as publish, canonical tag in footer), Medium Partner Program (evergreen how-tos — 1 week post-publish), industry newsletters (contributed column slot — 2–4 weeks post-publish for editorial lead time), Substack Notes or Beehiiv Boosts (short excerpts only — no canonical risk). Newsletter placements: build editorial calendar for 2–3 contributed newsletter spots per month — 4–6 week lead time for newsletter editors. Podcast guesting: book 6–8 weeks out, repurpose each episode into 3 written assets within 48 hours of air date.",
  },
  {
    icon: BarChart3,
    title: "Content Repurposing Pipeline Calendar",
    body: "Repurposing ratio target: 1 long-form piece → 6–8 derivative assets within 2 weeks of publish. Pipeline: long-form guide → LinkedIn carousel (7 slides, key takeaways) → Twitter/X thread (10 tweets, stat-lead hook) → short-form video script (60-90 seconds for Reels/TikTok/Shorts) → email nurture sequence (3-email series, one concept per email) → infographic (top 5 stats, shareable format) → webinar slide deck (for live or on-demand). Repurposing calendar: assign one team member per long-form piece as derivative owner — 5-day turnaround from publish to derivative batch complete. Atomization rule: never publish the same paragraph verbatim across formats — rewrite for medium and audience intent. Track which derivatives drive the most email signups monthly and double production in that format next quarter.",
  },
  {
    icon: Users,
    title: "Performance Reviews & Distribution Optimization Calendar",
    body: "Weekly distribution review (30 minutes): check top-5 performing pieces by traffic source this week, identify any unexpected referral spikes (investigate and replicate), and flag any content stuck below 100 views at 7 days post-publish for redistribution. Monthly distribution audit: full-funnel attribution by channel — which distribution source drives the highest conversion to email subscriber, trial, or purchase. Quarterly channel review: drop any distribution channel with <5% of total qualified traffic over 3 months. A/B test distribution timing: split first 20% of email list for send time testing (Tuesday 10am vs Thursday 2pm vs Sunday evening) — run 4-week test before declaring winner. Annual distribution strategy review: reallocate budget across channels based on 12-month attribution data — owned channel growth rate vs paid dependency ratio.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Audit & Channel Mapping",
    description:
      "Audit all existing content for distribution gaps — identify top 10 pieces that were underdistributed. Map available distribution channels (owned, earned, paid). Set up UTM parameter system for all distribution links. Establish baseline metrics for each channel. Identify 2–3 syndication targets and pitch first contributed placement.",
  },
  {
    phase: "Month 2–3",
    label: "Pipeline Build & First Repurposing Sprint",
    description:
      "Build repurposing pipeline for all new Tier-1 content — assign derivative owners, set 5-day turnaround SLA. Redistribute top 10 underdistributed pieces across channels. Secure first newsletter syndication placement. Launch content distribution calendar in Momenties — schedule all distribution touchpoints at publish time, not retroactively.",
  },
  {
    phase: "Month 4–6",
    label: "Scale & Attribution Optimization",
    description:
      "Scale to full repurposing ratio (1:6 long-form to derivatives). Add 2 new syndication partnerships. Run first distribution channel A/B test (email timing or LinkedIn vs Twitter). Conduct first monthly distribution audit with full attribution modeling. Begin retiring lowest-performing distribution channels based on 90-day data.",
  },
  {
    phase: "Month 7–12",
    label: "Systematize & Compound",
    description:
      "Build distribution playbook from first 6 months — format-specific templates, syndication contact list, repurposing checklists. Identify content evergreen candidates for redistribution campaigns (quarterly re-promotion of top performers). Establish paid amplification budget for Tier-1 content. Run annual distribution strategy review and reallocate channel budget based on attribution data.",
  },
]

const metrics = [
  { label: "Distribution reach per piece", benchmark: "Track unique readers by channel — Tier-1 target: 5,000+ qualified readers in 30 days" },
  { label: "Repurposing ratio", benchmark: "Target 1:6 (one long-form → 6 derivatives); track actuals monthly and close gaps" },
  { label: "Syndication contribution to traffic", benchmark: "Syndicated content should contribute 15–25% of total content traffic at scale" },
  { label: "Email subscriber conversion by channel", benchmark: "Owned channel content: ≥3% email conversion; syndicated: ≥1% (lower intent, wider reach)" },
  { label: "Content distribution CAC", benchmark: "Compare cost per email subscriber by channel — owned should be 5–10× cheaper than paid distribution" },
  { label: "Evergreen redistribution lift", benchmark: "Quarterly re-promotion of top performers should recover 30–50% of original launch traffic" },
]

export default function ContentDistributionCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Distribution Calendar"
        title="Get Every Piece of Content in Front of the Right Audience with a Distribution Calendar"
        subtitle="Channel mix strategy, syndication scheduling, repurposing pipelines, and performance reviews — all on one calendar that turns content creation into compounding reach."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Content Distribution Calendar
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
              12-Month Content Distribution Calendar
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
              Content Distribution Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics per distribution channel to identify where to invest and where to cut.
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
              &ldquo;We were publishing great content and getting mediocre results — the problem was distribution, not quality. Once we built a proper distribution calendar, the same content started generating 4× the traffic. The repurposing pipeline alone tripled our social reach without any additional writing.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Clara M.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head of Content, B2B SaaS (grew organic from 8K to 90K monthly readers in 14 months)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your content distribution calendar in minutes"
        subtitle="Momenties keeps every syndication deadline, repurposing task, and channel review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
