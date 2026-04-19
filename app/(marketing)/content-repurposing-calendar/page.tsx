import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Repurposing Calendar — How to structure content repurposing so one piece becomes many',
  description:
    'A content repurposing calendar starts with a pillar piece on a defined cadence, maps each derivative format to a specific delay after the pillar, assigns formats to the channels where each format performs best, and places a quarterly audit to identify the highest-performing pillar content for expanded distribution — so one piece of original content produces systematic multi-channel output without creating new content each time.',
  alternates: { canonical: '/content-repurposing-calendar' },
  openGraph: {
    title: 'Content Repurposing Calendar — Momenties',
    description: 'Structure content repurposing so one piece becomes many.',
    url: '/content-repurposing-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Pillar content created on a defined cadence with repurposing scheduled at creation',
    desc: '"Pillar: [long-form content, weekly/biweekly]. Derivatives: [scheduled at pillar publication date]." Pillar content created on a defined cadence — weekly, biweekly, or monthly — with derivative repurposing scheduled at the moment of creation, not as a separate planning step. Repurposing scheduled after the fact requires a second round of planning effort for each piece. Repurposing scheduled at creation converts the derivative production into a calendar sequence that executes automatically. A weekly long-form post with 4 derivatives produces a 5-piece content sequence without a single planning moment beyond the initial setup.',
  },
  {
    icon: Clock,
    title: 'Derivative formats scheduled at specific delays after the pillar, not simultaneously',
    desc: '"Long-form post → email digest [+2 days] → LinkedIn summary [+3 days] → tweet thread [+5 days] → short video [+7 days]." Derivative formats placed at specific delays after the pillar publication — not published simultaneously. Simultaneous publishing compresses the multi-format distribution window into a single day and eliminates the extended reach period that sequential publishing produces. A 7-day derivative window from a single pillar piece extends the content&apos;s audience reach over an entire week rather than a single hour. Sequential publishing also gives each derivative format standalone context — readers encounter the LinkedIn summary without needing to have read the long-form post.',
  },
  {
    icon: BarChart3,
    title: 'Each format assigned to the channel where that format historically performs best',
    desc: '"Email: long-form digest. LinkedIn: professional framing + data. Twitter/X: opinion + thread. Instagram: visual quote card. YouTube Shorts/TikTok: 60-second explainer." Each derivative format assigned to the channel where format performance is highest — not where the audience is largest. A channel with 10,000 followers and 5% engagement on a specific format outperforms a channel with 100,000 followers and 0.1% engagement on the same format. Format-to-channel assignment evaluated quarterly based on actual engagement data, not assumed by platform size. Formats that underperform on a channel are either removed or replaced with a format that matches the channel&apos;s consumption pattern.',
  },
  {
    icon: Shield,
    title: 'Quarterly audit of top-performing pillar content for expanded distribution',
    desc: '"Quarterly content audit: top 3 pillar pieces by [engagement metric]. Expanded distribution: [additional format or channel]." Quarterly audit identifies the top 3 pillar pieces by the metric that matters most (leads generated, shares, comments, or conversions — not views) and places expanded distribution for each. Evergreen pillar content that performed well 6 months ago can be re-introduced with updated examples or statistics and distributed to a new audience segment without creating new content. Content that performed well in one format often performs well in a new format applied to the same underlying insight — the quarterly audit identifies these re-distribution opportunities before the original content becomes stale.',
  },
]

const REPURPOSING_STEPS = [
  {
    step: 'Identify the pillar format that produces the highest-leverage original content for your domain',
    detail: '"Pillar format selection: [format that requires most original insight — podcast, long article, presentation, research report]." Pillar format selected based on where original insight is most concentrated — not most produced. A 3,000-word original research article is a higher-leverage pillar than a 500-word weekly update because the research article contains more distinct derivative-ready insights. Pillar format selection also considers production capacity — a weekly podcast that records in 45 minutes is more sustainable as a pillar than a weekly video that requires 8 hours of production. The pillar cadence is constrained by the bottleneck in the production chain, not by the desired publishing frequency.',
  },
  {
    step: 'Map all derivative formats before producing the first pillar piece',
    detail: '"Derivative map: [pillar] → [format 1, delay, channel] → [format 2, delay, channel] → [format 3, delay, channel]." Complete derivative map built before the first pillar piece is produced. Derivative mapping before production identifies which elements of the pillar should be produced in a format-ready way — a podcast that knows it will produce a quote card should generate pull quotes during recording, not after. A long-form article that knows it will produce a data visualization should identify the key data point during writing, not retroactively. Pre-production derivative mapping reduces post-production repurposing effort by 40-60% — the pillar is produced with the derivatives in mind.',
  },
  {
    step: 'Place derivative production as recurring calendar blocks, not as project tasks',
    detail: '"Weekly repurposing block: [day, 90 minutes, recurring]. Outputs: email digest, LinkedIn post, tweet thread." Derivative production placed as recurring weekly calendar blocks, not as one-time project tasks. Project tasks are completed and removed from view; recurring calendar blocks are always visible and create a standing commitment to derivative production. A 90-minute weekly repurposing block produces 3-4 derivative pieces from the prior week&apos;s pillar. Creators who treat repurposing as a project task complete it inconsistently — whenever the project task surfaces above other priorities. Creators who treat repurposing as a recurring calendar block complete it with the same consistency as any other recurring meeting.',
  },
  {
    step: 'Create derivative format templates so repurposing takes minutes, not hours',
    detail: '"Format template: [LinkedIn summary template] — hook sentence, 3-5 points, CTA. [Email digest template] — subject line formula, 3-paragraph structure, link." Template created for every recurring derivative format before the first repurposing session. A LinkedIn summary template with a hook-points-CTA structure reduces the time from long-form to LinkedIn from 30 minutes to 8 minutes. An email digest template with a subject line formula reduces the production decision load from each email. Templates do not produce formulaic content — they produce consistent structure with variable content. The insight is always original; the presentation format is consistent.',
  },
  {
    step: 'Track derivative performance by format type, not just by channel',
    detail: '"Format performance log: [format] → [channel] → [engagement rate] → [quarterly average]." Derivative performance tracked by format type across all channels, not just by individual post performance. A format that consistently produces 3% engagement on LinkedIn regardless of the underlying pillar topic is a reliable format. A format that produces 0.5% engagement on email but 4% engagement on LinkedIn for the same content reveals a format-channel mismatch that should inform where that format is distributed. Format-level performance data, accumulated over 3+ months, shows which repurposing investments produce reliable returns and which should be discontinued or replaced.',
  },
  {
    step: 'Identify the 3-month content series opportunity from high-performing pillar themes',
    detail: '"Content series: [pillar theme with consistent high engagement]. Series structure: [3-5 piece series, biweekly, all derivatives]." When a pillar theme produces consistently high engagement across 3+ pieces, a dedicated content series placed on the calendar with all derivatives. Content series produce compounding audience development — readers who engage with piece 1 of a series are more likely to seek out piece 2 than a reader who encounters a one-off piece. Content series also create scheduling predictability — the audience knows that every other Tuesday will bring the next installment of [topic], and email open rates for serialized content are 20-30% higher than for non-serialized content. The quarterly audit identifies which pillar themes have the engagement pattern that supports a series.',
  },
]

const REPURPOSING_FAILURES = [
  { failure: 'Repurposing as a project task — inconsistent, skipped when other work competes', consequence: 'Content repurposing treated as a project task is inconsistent by design. Project tasks compete with other project tasks for priority. A week when a launch is happening, a proposal is due, or a client deliverable is urgent is exactly the week when repurposing is deprioritized. The result is that repurposing occurs in slow weeks and is skipped in high-intensity weeks — which inverts the optimal pattern. High-intensity periods often correspond to high-audience-attention periods (product launches, trend cycles, industry events) when distribution is most valuable. A recurring calendar block for repurposing that is treated as a protected commitment, not a when-I-have-time task, produces consistent distribution regardless of workload intensity.' },
  { failure: 'Simultaneous multi-format publishing — compressed distribution window, each format competes with the others', consequence: 'Publishing all derivatives from a single pillar piece on the same day compresses the distribution window from 7 days to a few hours. A reader who sees the long-form post, the LinkedIn summary, the tweet thread, and the email all in the same day experiences content saturation from a single source. The same reader encountered over 7 days experiences a consistent presence on multiple platforms. Sequential distribution also allows each derivative to stand alone — a LinkedIn reader who never saw the pillar can engage with the LinkedIn summary without feeling they missed context. Simultaneous publishing optimizes for the creator&apos;s efficiency; sequential publishing optimizes for the audience&apos;s experience.' },
  { failure: 'No format-channel assignment — formats distributed to largest channel regardless of fit', consequence: 'Content repurposing without format-channel assignment distributes all derivatives to the largest channel regardless of how well the format performs on that channel. A long email digest sent to a Twitter audience, a visual quote card published on LinkedIn, a professional case study posted to Instagram — all are format-channel mismatches that produce low engagement even with high-quality underlying content. Format-channel mismatch is invisible without engagement tracking by format type. Creators who track total channel performance but not format performance within channels cannot identify which formats should be discontinued. Format-channel assignment requires quarterly performance review; without it, mismatches accumulate indefinitely.' },
  { failure: 'No evergreen repurposing audit — high-performing pillar content not redistributed', consequence: 'Without a quarterly evergreen audit, high-performing pillar content from 6-12 months ago is treated as exhausted rather than re-distributable. A long-form post on a foundational topic that generated strong engagement in Q1 can be re-introduced in Q3 with updated examples and new channel targeting — to an audience that has grown since Q1. Creators who never re-distribute evergreen content produce all their reach from new content rather than from the accumulated value of their best work. A quarterly audit that identifies the top 3 evergreen pieces for updated distribution converts the content archive from a historical record into an active distribution asset.' },
]

export default function ContentRepurposingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Repurposing Calendar"
        title={
          <>
            One pillar piece. Derivatives scheduled at creation. Sequential distribution.
            <br />
            <em className="not-italic text-gold">Recurring repurposing block. Quarterly evergreen audit.</em>
          </>
        }
        lede="Content repurposing failures are mostly scheduling failures. A content repurposing calendar places pillar content on a defined cadence, schedules every derivative format at the moment of pillar creation (not as a separate planning step), distributes derivatives at specific delays after the pillar so the reach window extends over a week, assigns each format to the channel where it performs best, uses templates to reduce repurposing time, and runs a quarterly audit for evergreen redistribution — so one piece of original content produces systematic multi-channel output."
        crumbs={[{ label: 'Content Repurposing Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/content-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Content calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the content repurposing calendar so one piece becomes systematic multi-channel output.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a content repurposing calendar that produces consistent multi-format output from every pillar piece.</h2>
          </Reveal>
          <div className="space-y-3">
            {REPURPOSING_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four content repurposing calendar patterns that produce inconsistent output and compressed reach.</h2>
          </Reveal>
          <div className="space-y-3">
            {REPURPOSING_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Content repurposing analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for content repurposing calendar discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Derivative completion rate per pillar (% of scheduled derivatives produced)',
                'Average delay from pillar to first derivative (days, target ≤3)',
                'Distribution window length per pillar (days from pillar to last derivative)',
                'Format engagement rate by channel (quarterly average per format type)',
                'Evergreen pieces redistributed per quarter (from quarterly audit)',
                'Repurposing block completion rate (% of recurring blocks completed)',
                'Template usage rate (% of derivatives using format template)',
                'Content series completion rate (pieces 2-5 of series relative to piece 1)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="One pillar. Derivatives scheduled at creation. Sequential distribution over 7 days."
        subtitle="Content repurposing calendar, format-channel assignment, recurring repurposing blocks, and quarterly evergreen audit. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Content calendar', href: '/content-calendar' }}
      />
    </>
  )
}
