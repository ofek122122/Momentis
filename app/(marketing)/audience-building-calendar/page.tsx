import type { Metadata } from "next"
import { TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Audience Building Calendar | Momenties",
  description: "Plan your audience building calendar with channel-specific growth strategies, content compounding systems, cross-promotion cadences, and audience health reviews. Build an owned audience that compounds over time.",
}

const pillars = [
  {
    icon: TrendingUp,
    title: "Channel Mix & Platform Priority Calendar",
    body: "Audience building calendar starts with a deliberate channel mix decision — not being everywhere, but building depth on two to three platforms before expanding. Primary channel (70% of effort): choose based on where your specific audience is already active and what content format you can produce consistently. Secondary channel (20%): where your primary audience discovers new voices — amplifies primary. Experimental channel (10%): test new platform before committing. Platform-specific growth calendar: for each primary channel, schedule the foundational growth actions as calendar events — not as aspirational to-dos. LinkedIn: weekly long-form post, 3× daily comment strategy, monthly connection audit. Newsletter: weekly issue, monthly referral campaign, quarterly subscriber re-engagement sequence. YouTube: weekly video, bi-weekly community post, monthly subscriber milestone review. The growth calendar makes these actions non-negotiable weekly commitments, not reactive when you have time.",
  },
  {
    icon: Clock,
    title: "Content Compounding System Calendar",
    body: "Compounding audience growth requires content that ranks, gets shared, and earns backlinks long after publish — not just content that performs on day one. Content compounding calendar: 20% of monthly publishing effort on evergreen cornerstone content (search-optimized, deeply valuable, link-worthy — these are the assets that drive audience compounding at 6, 12, and 24 months). 60% on community-building content (opinions, hot takes, questions, behind-the-scenes — drives comments, shares, and follows in the short term). 20% on collaboration content (featuring others' voices — drives audience cross-pollination). Monthly SEO audience review: track which evergreen pieces are ranking in positions 4-20 and schedule targeted improvement sessions. Quarterly content audit: identify the top 10 performing pieces by audience-building outcome (not just traffic — follows, email subscribers, or community joins driven by each piece) and produce sequels or expansions.",
  },
  {
    icon: BarChart3,
    title: "Cross-Promotion & Collaboration Calendar",
    body: "Audience cross-pollination is the fastest compounding mechanism for building audiences — a single well-chosen collaboration introduces your content to a highly aligned audience in a high-trust context. Monthly collaboration calendar: 1 newsletter swap per month (find 3 newsletters within 30% of your subscriber count, pitch 1 per week in rotation), 1 guest post per quarter (prioritize publications where your target audience reads — not just highest traffic), 1 podcast appearance per 6 weeks (10-minute pitch email, submit topic angle relevant to host audience). Weekly cross-promotion actions: reply to 10 posts daily from creators in adjacent niches (not competitors, but complementary voices your audience follows), share 3 pieces of others&apos; content per week with your commentary added (this builds reciprocity and community). Quarterly co-creation: one deep collaboration per quarter (joint guide, joint webinar, or joint research) — these drive the largest single-event audience growth.",
  },
  {
    icon: Users,
    title: "Audience Health Reviews & Growth Audits Calendar",
    body: "Weekly audience review (20 minutes): new followers/subscribers this week versus 4-week average, what content drove above-average growth (replicate the format and topic next week), and engagement rate trend (declining engagement signals content-audience fit degrading). Monthly audience audit (60 minutes): audience composition review — are new followers matching target audience profile? Email list health: unsubscribe rate (benchmark <0.3% per send), open rate trend (benchmark 35-45% for engaged audiences), reply/forward rate (leading indicator of trust). Quarterly audience survey: send a 3-question survey to your most engaged audience members — what do they get from you that they cannot get elsewhere? This informs content strategy for the next quarter. Annual platform review: evaluate channel ROI by audience growth per hour invested — double investment in channels with momentum, wind down channels with flat growth after 12 months of consistent effort.",
  },
]

const timeline = [
  {
    phase: "Month 1",
    label: "Foundation & Channel Decision",
    description:
      "Define target audience specifically (who they are, where they currently spend time, what problem you help them solve). Choose primary channel based on audience fit and content format match. Set up analytics tracking. Establish publishing cadence commitment. Start collaboration outreach — identify 20 potential cross-promotion partners this month.",
  },
  {
    phase: "Month 2–3",
    label: "Consistency & Content Compounding",
    description:
      "Publish consistently at committed cadence — consistency matters more than frequency. Identify first 3 evergreen cornerstone pieces to write. Complete first newsletter swap or guest post. Track which content formats drive follows versus engagement — double what drives follows, use engagement content for retention. Set up email capture from every content platform.",
  },
  {
    phase: "Month 4–6",
    label: "Cross-Promotion Scale",
    description:
      "Scale to 1 collaboration per month. Launch monthly newsletter referral program. Begin building community around content (comments, replies, community tab). Conduct first quarterly content audit — identify top performers and plan sequels. Assess channel performance: is primary channel growing faster than secondary? Reallocate effort accordingly.",
  },
  {
    phase: "Month 7–12",
    label: "Audience Compounding",
    description:
      "Evergreen content should start driving consistent inbound audience growth by month 7-9. Launch quarterly co-creation project. Conduct first annual platform review. Begin audience survey for content strategy input. If primary channel growing faster than 5% monthly, expand content volume. If growth has plateaued, change content angle before changing platform.",
  },
]

const metrics = [
  { label: "Monthly follower/subscriber growth rate", benchmark: "Target 5-15% month-over-month for first year; compounding after 12 months of consistency" },
  { label: "Email list growth as % of total audience", benchmark: "Email subscribers = owned audience; target 20%+ of total social following converted to email" },
  { label: "Content engagement rate", benchmark: "LinkedIn: ≥3%; Newsletter open rate: ≥35%; YouTube: ≥6% view-to-subscriber ratio" },
  { label: "Collaboration-driven subscriber growth", benchmark: "Each newsletter swap or guest post should drive ≥50 net-new subscribers; track per collaboration" },
  { label: "Evergreen content inbound rate", benchmark: "By month 12, ≥30% of new followers should come from evergreen/SEO content, not just latest post" },
  { label: "Audience reply/DM rate", benchmark: "High-trust audiences reply or DM — target ≥2% of email subscribers reply per newsletter issue" },
]

export default function AudienceBuildingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Audience Building Calendar"
        title="Build an Owned Audience That Compounds Over Time with a Structured Calendar"
        subtitle="Channel mix strategy, content compounding systems, cross-promotion cadences, and audience health reviews — all on one calendar that turns consistent effort into compounding growth."
        cta="Start free — forever"
        ctaHref="/sign-up"
      />

      {/* Pillar sections */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              The Four Pillars of an Audience Building Calendar
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
              12-Month Audience Building Calendar
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
              Audience Building Performance Benchmarks
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Track these six metrics monthly to understand whether your audience is growing, engaged, and converting to owned channels.
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
              &ldquo;I spent two years publishing inconsistently and wondering why my audience wasn&apos;t growing. When I moved to a structured calendar — Monday newsletter, Wednesday LinkedIn, Friday evergreen post — and committed to one collaboration per month, my email list went from 400 to 12,000 in 14 months. The calendar was the only change. Same content quality, same topics. Just consistency and compounding.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              James T.
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Independent Creator, B2B SaaS Niche (12K email subscribers, 45K LinkedIn followers)
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule your audience building calendar in minutes"
        subtitle="Momenties keeps every publishing commitment, collaboration deadline, and audience review in one place — free forever."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
