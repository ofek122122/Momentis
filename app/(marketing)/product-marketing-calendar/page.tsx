import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Product Marketing Calendar | Momenties",
  description: "Plan your product marketing calendar with launch sequencing, messaging refresh cycles, competitive intelligence reviews, and sales enablement sprints. Align product and go-to-market.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Launch Sequencing & GTM Calendar",
    body: "Product launches follow a predictable sequencing problem: announce too early and lose momentum; announce too late and miss the market window. GTM calendar for major launches: 12 weeks ahead — messaging brief, positioning workshop, competitive analysis. 8 weeks — launch plan finalized, sales enablement kickoff, beta customer identification. 6 weeks — external messaging and copy locked, press and analyst embargo outreach. 4 weeks — landing pages live, sales training complete, customer reference letters gathered. 2 weeks — preview customer webinar, partner notifications. Launch week — press release, blog, social, email, paid activation. Week 2 post-launch — pipeline review, message resonance check with sales, objection analysis.",
  },
  {
    icon: Clock,
    title: "Messaging Refresh & Positioning Calendar",
    body: "Positioning review semi-annually: is the category definition still accurate? Has competition shifted the frame? Are win rates by segment trending down (signal: messaging no longer resonating)? Messaging audit quarterly: review homepage headline, one-liner, email subject lines, ad copy — check for drift from positioning brief. New persona CE: whenever ICP expands to a new title or vertical, run a 5-customer interview sprint before updating messaging. Win/loss review monthly: PMM should read every closed-lost note from sales (filter by competitor mentioned) and every closed-won note (filter by deal-defining feature). Annual narrative update: company story and product narrative review aligned with fiscal-year objectives.",
  },
  {
    icon: BarChart3,
    title: "Competitive Intelligence Calendar",
    body: "Weekly competitive monitoring: set Google Alerts and G2 review alerts for 5–10 competitor names, subscribe to competitors&apos; product update emails and changelog pages, monitor LinkedIn job postings (a surge in data science hires signals an AI product is coming). Monthly competitive brief: 1-page update on competitive moves, pricing changes, new feature announcements, and customer wins to distribute to sales. Quarterly competitive battlecard refresh: update win/loss rates per competitor, update feature comparison table, update objection-handling scripts. Semi-annual pricing audit: benchmark pricing page against competitors — are you positioned correctly at your price point? Annual competitive landscape map: add emerging players, remove defunct competitors.",
  },
  {
    icon: Users,
    title: "Sales Enablement & Feedback Loop Calendar",
    body: "Sales enablement sprint: every major release requires a 2-week enablement sprint (demo environment update, talk track refresh, objection-handling update, 1-page sell sheet). Monthly PMM–sales sync: 30-minute standing meeting — top objections heard this month, competitor mentions, feature requests from prospects, deals lost due to product gap. Quarterly sales skills workshop: 1 deep-dive on positioning for a new segment, new persona, or competitive displacement (1-hour session, recorded). Customer evidence calendar: 3 case studies per quarter — PMM owns pipeline (identify candidate at Closed-Won + 45 days, kickoff story brief), content team writes, customer approves within 30 days of kickoff.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Alignment & Foundation",
    description:
      "Audit existing positioning and messaging, run 5 win/loss customer interviews, map competitive landscape, establish win/loss review process with sales, and build 12-month launch calendar from product roadmap.",
  },
  {
    phase: "Month 2–3",
    label: "First Launch Cycle",
    description:
      "Execute first major launch with full GTM framework. Run sales enablement sprint. Ship first competitive battlecard. Establish monthly PMM–sales sync. Begin case study pipeline for current quarter.",
  },
  {
    phase: "Month 4–6",
    label: "Messaging Optimization",
    description:
      "First quarterly messaging audit. Win/loss analysis from first 3 months. ICP persona review. Competitive battlecard refresh. Sales win-rate by message theme analysis. Begin positioning semi-annual review.",
  },
  {
    phase: "Month 7–12",
    label: "Scale & Systematize',",
    description:
      "Quarterly launch cadence established. Monthly competitive brief distributed to sales. Case study library at 6+ stories. Annual narrative and positioning review. Next-year GTM calendar built from 2025 roadmap.",
  },
]

const metrics = [
  { label: "Win rate by competitive mention", benchmark: "Track per competitor — declining trend signals battlecard gaps" },
  { label: "Sales-cited PMM asset usage", benchmark: "≥60% of sales reps using PMM materials monthly" },
  { label: "Launch MQL contribution (30-day)", benchmark: "Major launch generates ≥15% MQL spike in launch week" },
  { label: "Case study production rate", benchmark: "3 new case studies per quarter in steady state" },
  { label: "Message resonance score", benchmark: "Track in win/loss interviews — core message understood by ≥80% of buyers" },
  { label: "Competitive win rate", benchmark: "Track trend — target ≥50% win rate in key competitive deals" },
]

export default function ProductMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Marketing Calendar"
        title="Align Product and Go-to-Market with a Structured Launch and Messaging Calendar"
        subtitle="Launch sequencing, messaging refresh cycles, competitive intelligence, and sales enablement sprints — all on one calendar so product and marketing move in sync."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Product Marketing Calendar
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
              12-Month Product Marketing Calendar
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
              Product Marketing Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics quarterly to confirm product marketing drives revenue, not just awareness.
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
              &ldquo;PMM was the bottleneck for every launch. We had no calendar, no lead times, and sales kept getting surprised by features they&apos;d never heard of. Once we built a structured GTM calendar, we ran 3 major launches in one quarter without a single enablement fire.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Nina P.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Director of Product Marketing, B2B SaaS (Series C, $65M ARR)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your product marketing calendar in minutes"
        subtitle="Momenties keeps every launch deadline, messaging review, and sales enablement sprint in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
