import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Newsletter Marketing Calendar | Momenties",
  description: "Plan your newsletter marketing calendar with issue cadence, growth campaigns, monetization sequences, and performance reviews. Build a newsletter that compounds in value every month.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Issue Cadence & Content Programming Calendar",
    body: "Newsletter cadence decision: weekly is the minimum for building audience habits (less than weekly = readers forget you exist between issues). Daily is viable only if content is valuable enough to justify inbox space — most newsletters fail at daily by month 3 due to content quality degradation. Issue programming calendar: assign each issue a content type in advance — cornerstone (deep analysis, 1,200+ words, evergreen), community (curated links, short opinions, reader Q&A), and topical (news-driven, 600-900 words). Recommended mix: 2 cornerstone per month, 1 community per month, 1 topical per month for weekly newsletters. Subject line calendar: write subject lines as a batch at the start of each month — A/B test subject lines for 20% of list on send day, send winning version to 80% after 1-hour test window. Preheader text planned alongside subject line — together they determine open rate, which is the most important metric for newsletter health.",
  },
  {
    icon: Clock,
    title: "Newsletter Growth Campaign Calendar",
    body: "Newsletter growth operates on a different calendar than issue production: growth actions need to be scheduled separately or they get crowded out by the content treadmill. Monthly growth calendar: 1 newsletter swap per month (find newsletters within 30% of your size, offer reciprocal issue mention), 1 lead magnet promotion per month (free resource driving email sign-ups — rotate between platforms), 1 referral program push per quarter (Sparkloop, SparkRef, or custom referral incentive — active promotion drives 15-30% subscriber spike). Weekly growth actions: share each issue across all social channels on send day, cross-post the intro paragraph to LinkedIn or Twitter/X as a teaser, reply to every reader email within 24 hours (high reply rate signals trust to inbox providers). Quarterly growth audit: list size, month-over-month growth rate, open rate trend, unsubscribe rate, and source attribution (which channels drive highest-quality subscribers — longest retention, highest click rate).",
  },
  {
    icon: BarChart3,
    title: "Monetization & Sponsor Calendar",
    body: "Newsletter monetization calendar: sponsorships, paid issues, and product promotions each require different lead times and different cadences. Sponsor calendar: book 4-6 weeks ahead for primary slot (below the fold or dedicated section), 2-3 weeks for secondary slot (short mention). Sponsor pipeline: 10-15 qualified sponsor outreach per month (brands that are already advertising in your niche), pitch rate benchmark 25-30% close rate for qualified outreach. Sponsor rate: CPM-based pricing ($30-$80 CPM for B2B newsletters, $15-$40 for consumer) — update rates every 6 months as list grows. Product promotion calendar: limit promotional content to 20% of issues maximum — readers who joined for your content will unsubscribe if more than 1 in 5 issues feels like an ad. Annual sponsorship calendar: sell Q4 placements in Q3 (highest advertiser demand), sell Q1 placements in November, sell Q2-Q3 placements in March. Unsold inventory becomes house ads for your own products or subscriber referral program.",
  },
  {
    icon: Users,
    title: "Deliverability, List Health & Performance Reviews Calendar",
    body: "Weekly deliverability check: open rate (benchmark 35-50% for engaged lists), click rate (benchmark 3-7%), and spam complaint rate (<0.1% — above 0.08% triggers deliverability investigation). Monthly list health audit: remove subscribers who have not opened in 90 days (after a re-engagement sequence — 3-email win-back, then suppress), verify bounce rate (<2% hard bounce), and confirm unsubscribe rate (<0.5% per issue). Quarterly performance review: cohort analysis by subscriber acquisition source (referral program subscribers retain at 2× the rate of cold lead magnet subscribers), engagement score distribution, and revenue per subscriber calculation. Annual newsletter audit: full platform review (Beehiiv, Substack, ConvertKit, Mailchimp — evaluate deliverability data, growth tools, monetization options), reader survey (3-question survey to most engaged 20% of list — what keeps them subscribed, what would make them pay), and editorial calendar planning for next year.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Foundation & First Issues",
    description:
      "Choose platform (Beehiiv or ConvertKit for growth-focused newsletters). Set publishing cadence and commit publicly. Write 4 cornerstone issues in advance as a buffer. Set up automated welcome sequence (3-email series). Define content mix (cornerstone/community/topical ratio). Launch with 50+ founding subscribers from your existing network before promoting broadly.",
  },
  {
    phase: "Month 2–3",
    label: "Growth Infrastructure",
    description:
      "Launch referral program (Sparkloop or built-in). Set up lead magnet opt-in page. Complete first 3 newsletter swaps. Start sponsor outreach for month 4 onwards. Establish weekly growth routine: issue → social teaser → reply to comments → track opens. First monthly list health audit. Benchmark: 200+ subscribers by end of month 3.",
  },
  {
    phase: "Month 4–6",
    label: "Monetization & Compounding",
    description:
      "First paid sponsor placement. Quarterly growth audit: identify highest-converting acquisition sources. First reader survey. Scale what drives best subscriber retention (not just growth). If open rate is declining, prioritize re-engagement sequence over new subscriber acquisition. Benchmark: 500-1,000 subscribers by end of month 6 with 40%+ open rate.",
  },
  {
    phase: "Month 7–12",
    label: "Scale & Systematize",
    description:
      "Annual sponsorship calendar planned (Q4 inventory sold in Q3). Monthly growth actions systematized in calendar. Quarterly editorial planning sessions replace ad hoc issue planning. Annual audience survey. Evaluate platform migration if growth tools are limiting expansion. Benchmark: 2,000+ subscribers with stable open rate and first $500-2,000 monthly sponsor revenue.",
  },
]

const metrics = [
  { label: "Open rate", benchmark: "Healthy engaged list: 35-50%. Below 25% signals deliverability issues or content-audience mismatch" },
  { label: "Click rate", benchmark: "3-7% for curated newsletters; 1-3% for long-form — lower click rate in depth content is normal" },
  { label: "Monthly subscriber growth rate", benchmark: "Target 10-20% MoM in first year; referral program should contribute ≥30% of new subscribers" },
  { label: "90-day subscriber retention", benchmark: "≥70% of new subscribers still active at 90 days — below 60% signals welcome sequence or early content problem" },
  { label: "Revenue per subscriber", benchmark: "Sponsored newsletter: $1-5 per subscriber per month at scale; track by cohort to identify highest-LTV acquisition sources" },
  { label: "Spam complaint rate", benchmark: "Keep below 0.08% per send. Above 0.1% triggers deliverability throttling at major inbox providers" },
]

export default function NewsletterMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter Marketing Calendar"
        title="Build a Newsletter That Compounds in Value Every Month with a Structured Calendar"
        subtitle="Issue cadence, growth campaigns, monetization sequences, and list health reviews — all on one calendar that turns consistent publishing into a compounding owned-audience asset."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of a Newsletter Marketing Calendar
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
              12-Month Newsletter Marketing Calendar
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
              Newsletter Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to identify deliverability issues, content problems, and growth opportunities before they compound.
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
              &ldquo;My newsletter went from 800 to 18,000 subscribers in 18 months — but the first 12 months were slow because I had no calendar. I was writing whenever I had an idea, promoting whenever I remembered, and ignoring deliverability until my open rate hit 19%. The calendar fixed all three: consistent issue cadence, monthly growth campaigns, and a weekly 5-minute deliverability check. The referral program alone drove 6,000 of those subscribers.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Nadia F.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Newsletter Founder, SaaS Growth Niche (18K subscribers, $8K/month in sponsorships)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your newsletter marketing calendar in minutes"
        subtitle="Momenties keeps every issue deadline, growth campaign, sponsor booking, and list health review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
