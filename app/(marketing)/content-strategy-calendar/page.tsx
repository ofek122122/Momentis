import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Strategy Calendar — How to plan content so it compounds instead of starting from zero each month',
  description:
    'A content strategy calendar places the quarterly content pillar review before content production begins, builds the monthly publishing schedule as a standing commitment rather than a variable target, places distribution windows 24 hours after publish rather than left to when time permits, and schedules the content performance review before the next quarter\'s planning begins. Most content programs produce more content than they compound because the strategy calendar was never built.',
  alternates: { canonical: '/content-strategy-calendar' },
  openGraph: {
    title: 'Content Strategy Calendar — Momenties',
    description: 'Plan content so it compounds instead of starting from zero each month.',
    url: '/content-strategy-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Quarterly content pillar review placed before production begins, not during it',
    desc: '"Q3 content pillar review — June 15, before Q3 production begins." Content pillar review placed 2 weeks before the start of each quarter — not on the first day of production. 2-week lead time allows pillar adjustments to inform the production schedule. Pillar review during production changes briefs that are already being written. Pillar review before production changes the direction, not the document. Content programs without a quarterly pillar review drift toward producing content that was relevant when the strategy was written, not when it is being read.',
  },
  {
    icon: Clock,
    title: 'Monthly publishing commitment placed as a standing target, not a variable goal',
    desc: '"Monthly publishing target: 8 pieces, week 1-2 long form, week 3-4 short form." Monthly publishing target placed as a fixed commitment — not "we will publish what we can complete this month." Fixed monthly targets create production discipline and audience expectation. Variable monthly targets produce variable output that makes audience building difficult. Fixed target with consistent rhythm builds the trust-through-reliability that is the foundation of audience growth. Fixed target missed by 2 pieces is still more consistent than a variable target hit perfectly.',
  },
  {
    icon: BarChart3,
    title: 'Distribution window placed 24 hours after publish, not left open-ended',
    desc: '"Distribution — within 24 hours of publish." Distribution window placed as a calendar event within 24 hours of each publish date. Distribution includes: email newsletter inclusion, social distribution sequence, newsletter partner outreach, republication to relevant communities. Content distributed within 24 hours of publish enters the audience conversation while the piece is current. Content distributed after the week\'s newsletter is already sent misses the highest-reach distribution window of the publish cycle.',
  },
  {
    icon: Shield,
    title: 'Quarterly content performance review placed before the next planning cycle begins',
    desc: '"Q2 content performance review — June 1, before Q3 pillar review." Quarterly performance review placed 2 weeks before the quarterly pillar review — not after it. Performance data from Q2 informs Q3 pillar decisions. Pillar reviews conducted without performance data produce directional opinions. Pillar reviews conducted with performance data produce directional evidence. Q2 performance review placed at June 1, Q3 pillar review at June 15 — performance informs the review, not the other way around.',
  },
]

const CONTENT_STEPS = [
  {
    step: 'Place the annual content strategy review in January before any production planning',
    detail: '"January: annual content strategy review — audience, pillar refresh, format audit." Annual strategy review placed before January production planning. Annual review: audience definition update (who are we writing for and has that changed?), content pillar refresh (are the pillars still the topics the audience cares about?), format audit (which formats compounded and which didn\'t?). Annual review completed before the first quarterly production schedule is built. Strategy built from last year\'s performance and this year\'s audience.',
  },
  {
    step: 'Place quarterly pillar reviews 2 weeks before each quarter begins',
    detail: '"Q2 pillar review — March 15. Q3 pillar review — June 15. Q4 pillar review — September 15." Pillar review placed 2 weeks before the start of each production quarter. Pillar review: which pillars are performing (search volume, engagement, compounding traffic)? Which have been exhausted (covered the topic thoroughly)? Which should be added based on Q1 performance and audience signals? Pillar changes made at the review inform the production briefs for the quarter. Pillar changes made during production create rework.',
  },
  {
    step: 'Build the monthly production schedule with specific titles and owners',
    detail: '"Month 1: piece 1 — [title], brief by [date], draft by [date], publish [date], owner [name]." Monthly production schedule built with specific titles, briefs, draft deadlines, and publish dates — not "8 long-form pieces this month." Specific titles committed in advance allow brief development before the production window. Brief-first production produces better content because the brief captures the pillar alignment, audience intent, and SEO target before a word is written.',
  },
  {
    step: 'Place distribution events as calendar events within 24 hours of each publish date',
    detail: '"Publish [date]: distribution checklist due [date + 1 day]." Distribution placed as a separate calendar event 24 hours after each publish date. Distribution checklist: email newsletter inclusion date confirmed, social sequence scheduled (day 0, day 3, day 7 repurpose), relevant community sharing, partner outreach for republication, internal team share. Distribution placed before publish — the distribution plan exists before the content is live, not assembled after.',
  },
  {
    step: 'Place the quarterly performance review before the next pillar review',
    detail: '"Q1 performance review: March 1. Q2 pillar review: March 15." Performance review placed 2 weeks before the pillar review. Performance review covers: which pieces drove the most search traffic, which pieces drove the most email signups, which pieces were shared most, which topics had the highest engagement per publish. Performance data assembled at the review meeting, not in advance — performance review meeting is an analysis session with data already collected.',
  },
  {
    step: 'Place the annual content audit in Q4 before the January strategy review',
    detail: '"Annual content audit — November, before January strategy review." Annual content audit placed in November. Audit: identify the top 20% of pieces by search traffic (update and republish), identify the bottom 20% of pieces by traffic and engagement (archive or consolidate), map content gaps where the audience has questions the content program hasn\'t answered. Audit completed in November informs the January strategy review. January strategy built from an audit of what exists, not an aspirational plan for what should exist.',
  },
]

const CONTENT_FAILURES = [
  { failure: 'Content pillar review happens annually rather than quarterly', consequence: 'Annual pillar reviews allow a content program to spend 9 months producing content on topics that audience signals indicated were shifting 3 months into the year. Quarterly pillar reviews catch these signals at 3 months, when redirecting the production schedule costs 1 month of adjustment rather than 9 months of wrong-direction content. Content programs with annual pillar reviews produce consistently; content programs with quarterly pillar reviews compound consistently. The difference is whether the production effort is directed at the topics the audience currently cares about.' },
  { failure: 'Distribution left as an open-ended post-publish task rather than a scheduled event', consequence: 'Content distribution intended for "after publish" competes with the production pressure for the next piece. The highest-traffic window for new content is the first 24-48 hours when newsletter inclusion, social distribution, and community sharing happen simultaneously. Content distributed in the first 24 hours reaches active audience members at peak attention. Content distributed 3 days later, after the newsletter has already gone, missed the email amplification window that drives the largest single distribution event in most content programs.' },
  { failure: 'Monthly publishing target variable rather than standing commitment', consequence: 'Variable monthly publishing targets make audience building difficult because audience trust is built on consistency as much as quality. A content program that publishes 8 pieces one month, 3 the next, and 11 the third produces unpredictable audience expectations. Fixed monthly commitments with occasional misses produce better audience expectation management than variable targets met precisely. Audiences subscribe to consistent programs. Content programs without a standing monthly commitment default to producing what the production team can complete, which is determined by competing priorities rather than audience need.' },
  { failure: 'Quarterly performance review happens after the next quarter\'s production has begun', consequence: 'Performance reviews conducted after next quarter\'s production has started cannot change the production schedule — the briefs are already written, the drafts are in progress, and changing direction costs rework rather than time. Performance reviews conducted 2 weeks before the quarterly pillar review can change the direction of the quarter\'s production before any brief is written. The 2-week gap between performance review and pillar review is not a scheduling preference — it is the window in which performance data converts to directional change rather than historical observation.' },
]

export default function ContentStrategyCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Strategy Calendar"
        title={
          <>
            Pillars reviewed before production begins.
            <br />
            <em className="not-italic text-gold">Content distributed within 24 hours. Performance informing strategy.</em>
          </>
        }
        lede="Most content programs produce more content than they compound because the strategy calendar was never built. A content strategy calendar places quarterly pillar reviews before production begins, fixes monthly publishing targets as standing commitments, places distribution within 24 hours of each publish date, and ensures the quarterly performance review happens before the next pillar review — so each quarter's content is informed by what worked in the last, not by what was assumed to work at the start of the year."
        crumbs={[{ label: 'Content Strategy Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/marketing-managers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for marketing managers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures content planning so strategy informs production and production informs strategy.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a content strategy calendar where quarterly performance informs the next quarter&apos;s direction.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONTENT_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four content strategy patterns that produce output without compounding.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONTENT_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Content analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for content strategy discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly publishing target completion rate',
                'Distribution completion within 24-hour window post-publish',
                'Quarterly pillar review completion before production start',
                'Performance review completion before next pillar review',
                'Brief-to-publish cycle time (days)',
                'Annual content audit completion in Q4',
                'Content gap coverage rate from audit to production',
                'Email distribution rate by publish date vs. newsletter cycle',
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
        title="Pillars reviewed before production begins."
        subtitle="Quarterly pillar reviews, fixed monthly publishing targets, 24-hour distribution windows, and performance-informed strategy. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for marketing managers', href: '/for/marketing-managers' }}
      />
    </>
  )
}
