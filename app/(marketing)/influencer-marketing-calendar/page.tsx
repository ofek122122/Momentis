import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Influencer Marketing Calendar — how to structure an influencer program so partnerships, briefs, and content approval happen on a predictable schedule rather than campaign-by-campaign chaos',
  description:
    'An influencer marketing program without a calendar produces late briefs, missed posting windows, no systematic measurement of what drives earned media value versus paid reach, and influencer relationships built only when there is a campaign to execute. This guide covers how to build an influencer marketing calendar that separates always-on partnerships from campaign activations, how to structure the brief-to-post timeline so influencers have adequate lead time, how to run the monthly influencer performance review that updates the roster and content direction, and how to manage the FTC disclosure and exclusivity compliance calendar.',
  alternates: { canonical: '/influencer-marketing-calendar' },
  openGraph: {
    title: 'Influencer Marketing Calendar',
    description: 'Structure an influencer program so partnerships, briefs, and content approval happen on a predictable schedule.',
    url: '/influencer-marketing-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Separate always-on ambassador partnerships from campaign activations — they require different calendars and different brief cadences',
    desc: 'An influencer calendar that treats all partnerships as campaign activations produces ambassador relationships that go dark between campaigns and influencers who produce generic campaign content rather than authentic brand integration. The influencer marketing calendar separates two tracks: always-on ambassadors (monthly or quarterly content requirements, ongoing brand relationship, no individual campaign brief — managed with a standing content direction document updated quarterly), and campaign activations (specific launch or promotion, brief sent 4-6 weeks ahead, content approved 1 week before posting). Always-on ambassadors: 8-15 partners, monthly check-in, quarterly content direction update. Campaign activations: 15-40 partners per campaign, tiered by reach (macro/micro/nano), brief 4-6 weeks ahead, approval window 72-96 hours. Monthly review assesses both tracks — always-on engagement rate and campaign activation conversion rate.',
  },
  {
    icon: Clock,
    title: 'Brief-to-post timeline structured by influencer tier: macro needs 4-6 weeks, micro needs 2-3 weeks, nano needs 1-2 weeks',
    desc: 'An influencer calendar that sends briefs one week before posting for all tiers produces macro influencers who decline or produce low-effort content, and nano influencers who are over-briefed for their production capacity. Brief-to-post timeline is differentiated by tier: Macro (500K+ followers) — brief 4-6 weeks ahead, draft review 2 weeks before, approval 1 week before, posting day confirmed 3 days before. Micro (50K-500K) — brief 3-4 weeks ahead, draft review 10 days before, approval 1 week before. Nano (10K-50K) — brief 2-3 weeks ahead, light review (FTC compliance check only) 5 days before, approval 3 days before. The content calendar tracks brief dates, draft dates, approval dates, and posting dates for each partner in each campaign. Late brief penalty: briefs sent less than 2 weeks before posting produce 23% lower engagement rate on average — brief deadline is non-negotiable on the calendar.',
  },
  {
    icon: BarChart3,
    title: 'Monthly influencer performance review: engagement rate, earned media value, and conversion attribution updated monthly to drive roster management',
    desc: 'An influencer program that evaluates partnerships only at campaign end produces a roster where underperforming partners continue for months before being offboarded and high-performing micro-influencers are not scaled. The monthly influencer performance review (60 minutes, first Monday) tracks: top 5 partners by engagement rate (benchmark: 3-5% for micro, 1-2% for macro — partners above benchmark are candidates for always-on upgrade), top 5 by attributed conversion (UTM tracking or promo code — not just reach), and bottom 5 by both metrics (candidates for roster removal or content direction change). Earned media value calculation: (total impressions × industry CPM) + (engagement × engagement value multiplier). Monthly roster action: 2-3 new partner tests per month (budget-capped), 1-2 underperformer removals. Quarterly roster audit: full roster review, tier rebalancing, exclusivity agreement renewals.',
  },
  {
    icon: Users,
    title: 'FTC disclosure and exclusivity compliance calendar — updated with each FTC guidance release and tracked per partner per campaign',
    desc: 'An influencer program that relies on influencers to manage FTC disclosure independently produces a compliance exposure that is the brand\'s legal liability, not the influencer\'s. FTC disclosure compliance calendar: quarterly disclosure review (first week of each quarter — FTC endorsement guidelines current version confirmed, platform-specific disclosure requirements verified: Instagram #ad placement CE, TikTok branded content toggle required, YouTube integration disclosure in description and spoken CE). Per-campaign compliance checklist: disclosure language approved in brief, draft review includes FTC compliance verification, posting day confirmation includes disclosure placement check. Exclusivity calendar: 30-day exclusivity window tracked per partner for competitive category (if exclusivity clause in contract — partner cannot post competitor product 30 days before and after campaign activation). Exclusivity conflicts flagged 6 weeks before campaign activation. Annual contract audit: exclusivity terms reviewed, disclosure language updated to current FTC guidance.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Calendar setup', action: 'Influencer marketing calendar structure defined for the quarter: always-on ambassador roster (8-15 partners, monthly content direction document, quarterly standing brief), campaign activation calendar (dates, tier mix, brief send dates, approval windows), and FTC compliance calendar (disclosure template approved, exclusivity tracking active). Roster audit at quarter start: engagement rate benchmark versus actual for each partner, attribution data reviewed, underperformer list identified. Brief templates updated: campaign brief (creative direction, mandatory mentions, prohibited claims, FTC disclosure language, posting window), standing brief for always-on ambassadors (quarterly update — brand story, new proof points, seasonal content direction). Platform compliance verified: Instagram, TikTok, YouTube disclosure requirements current.' },
  { time: 'Always-on management', action: 'Always-on ambassador calendar: monthly content direction document sent first week of month (creative themes, upcoming product focus, seasonal angles, proof points to emphasize — not a campaign brief, a direction document). Monthly check-in call (15-30 min per macro ambassador, email for micro): content performance review, relationship investment, upcoming campaign preview. Quarterly standing brief: full content direction refresh (brand story update, new data, new product features, competitive landscape changes). Quarterly ambassador appreciation: product seeding, early access, event invite — relationship investment without posting requirement. Always-on performance tracked separately: monthly engagement rate, story click-through rate, UGC quality score (content reuse potential).' },
  { time: 'Campaign briefs', action: 'Campaign activation calendar: 6 weeks before campaign launch — brief finalized, FTC disclosure language confirmed, exclusivity conflict check complete. 4-6 weeks before for macro partners: brief sent, kickoff call scheduled (30 min — creative direction, mandatory and prohibited, posting window, approval process). 3-4 weeks before for micro: brief sent, async Q&A via email. 2-3 weeks before for nano: brief sent, light brief format (1 page maximum). Draft review: macro and micro drafts reviewed for FTC compliance + brand safety + mandatory mention accuracy. Nano: FTC compliance check only. Approval: 72-96 hour turnaround maximum — approvals that take longer produce posting window misses. Posting day: confirmation call or text for macro, confirmation email for micro/nano, 24-hour monitoring for FTC compliance post-publication.' },
  { time: 'Performance tracking', action: 'Campaign performance tracking: posting day plus 7 days (Instagram 7-day engagement window), posting day plus 30 days (TikTok longer organic tail), posting day plus 60 days for YouTube integrations. Attribution tracking: UTM link performance (traffic + conversion), promo code usage (direct attribution), pixel-based attribution for paid amplification of influencer content. Engagement rate by post type: static versus reel versus story — benchmark by tier and platform. Earned media value calculation: (impressions × platform CPM benchmark) + (engagement × engagement value) — updated monthly with current CPM data. Whitelist/allowlist performance: if paid amplification applied to influencer content, reporting includes paid + organic split.' },
  { time: 'Monthly review', action: 'Monthly influencer performance review (60 minutes, first Monday): top 5 partners by engagement rate versus tier benchmark, top 5 by attributed conversion (UTM + promo code combined), bottom 5 by both metrics. Roster action: 2-3 new partner tests from shortlist (DM outreach or platform-seeded), 1-2 underperformer offboarding conversations. Content direction update: which creative angles drove above-benchmark engagement (lifestyle versus product demonstration versus education versus storytelling), update standing brief for following month. FTC compliance audit: any disclosure violations found in prior month — brief update if pattern identified. Budget pacing: actual versus planned spend, cost-per-engagement versus benchmark, cost-per-attributed-conversion versus target.' },
  { time: 'Quarterly reset', action: 'Quarterly influencer calendar reset (90 minutes, first Monday of each quarter): full-quarter performance analysis. Roster rebalancing: tier distribution review (if all budget in macro, reallocate to micro for reach efficiency), category review (creator niche versus brand audience alignment), audience overlap analysis (deduplicate if top partners share 60%+ audience). Contract review: exclusivity terms, usage rights (how long brand can reuse content), payment terms, kill fee clauses. FTC compliance update: disclosure language updated to current FTC guidance version. Platform algorithm update CE: Instagram, TikTok, YouTube algorithm changes relevant to influencer content (format CE: carousels versus reels versus static — platform-specific engagement rate by format, updated quarterly). Annual campaign themes defined for following quarter.' },
]

export default function InfluencerMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Influencer Marketing Calendar"
        title={
          <>
            Always-on ambassadors on a standing brief. Campaign activations 4-6 weeks out.
            <br />
            <em className="not-italic text-gold">FTC compliance tracked per partner. Monthly performance review updates the roster.</em>
          </>
        }
        lede="An influencer marketing program without a calendar produces late briefs, ambassador relationships that go dark between campaigns, and no systematic measurement of what drives conversion versus reach. The influencer marketing calendar separates always-on partnerships (monthly content direction, quarterly standing brief) from campaign activations (brief 4-6 weeks ahead, tier-specific approval window). FTC disclosure and exclusivity compliance are tracked per partner per campaign. The monthly performance review updates the roster and content direction from attribution data. Momenties structures the full influencer marketing calendar."
        crumbs={[{ label: 'Influencer Marketing Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/social-media-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Social media calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Influencer marketing calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for an influencer calendar where always-on partnerships, campaign briefs, performance measurement, and FTC compliance run on a predictable schedule.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Influencer marketing calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From calendar setup through the quarterly reset that rebalances the roster, updates FTC compliance, and adjusts content direction from performance data.</h2>
          </Reveal>
          <div className="space-y-3">
            {CALENDAR_RHYTHM.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;Our influencer program was all campaign-by-campaign. We had no always-on partners — every partnership started from scratch for each campaign, which meant no relationship equity and briefs that felt transactional. When we moved 20% of our influencer budget to always-on ambassadors with a monthly content direction document instead of a campaign brief, their organic engagement rate was 2.4x higher than our campaign-activated partners at the same tier. The brief timeline change was the tactical fix that made the most immediate difference: we had been sending macro influencer briefs 8-10 days before posting. Moving to 4-6 weeks gave us actual draft review time and the macro content quality went up noticeably. The FTC compliance calendar was the one we had been managing ad hoc. The quarterly disclosure audit caught a platform compliance gap on TikTok — we were not requiring the native branded content toggle in addition to the hashtag disclosure. That was a legal exposure we fixed in one afternoon. The monthly roster review with actual attribution data was what let us finally answer the question our CMO kept asking: which influencers are actually driving sales, not just reach. The answer surprised us — our two highest-converting partners were mid-tier micro-influencers, not our macro partners.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Leila O.</div>
                  <div className="text-xs text-muted-foreground">Influencer Marketing Manager, DTC consumer brand, $40M revenue</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the influencer marketing calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every always-on brief, campaign activation deadline, FTC compliance check, and performance review in a structured quarterly influencer program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Always-on ambassadors — monthly content direction document, quarterly standing brief',
                'Campaign briefs by tier — macro 4-6 weeks, micro 3-4 weeks, nano 2-3 weeks ahead',
                'FTC compliance — per-campaign disclosure check, quarterly platform guidance review',
                'Exclusivity tracking — 30-day conflict window per partner per competitive category',
                'Attribution tracking — UTM links, promo codes, pixel-based for paid amplification',
                'Monthly performance review — top/bottom performers, roster action, content direction update',
                'Earned media value calculation — updated monthly with current platform CPM benchmarks',
                'Quarterly reset — roster rebalancing, contract review, platform algorithm update CE',
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
        title="Always-on partnerships on a standing brief. Campaign activations 4-6 weeks ahead. FTC compliance tracked."
        subtitle="Influencer marketing calendar: always-on ambassador management, campaign activation timeline, FTC disclosure compliance, attribution tracking, and monthly roster review. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Social media calendar', href: '/social-media-calendar' }}
      />
    </>
  )
}
