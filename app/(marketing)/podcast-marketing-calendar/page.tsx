import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Podcast Marketing Calendar — how to structure a podcast marketing program so episode production, guest outreach, and distribution happen on a predictable schedule',
  description:
    'A podcast without a production calendar produces inconsistent publishing cadence, guest scheduling conflicts, last-minute episode edits, and no systematic distribution strategy that converts listeners into leads or customers. This guide covers how to build a podcast marketing calendar that separates production lead time from distribution, how to schedule guest outreach 6-8 weeks ahead of recording, how to build the episode backlog that ensures a consistent publishing schedule even during high-demand periods, and how to run the quarterly podcast performance review that updates the topic mix and distribution strategy.',
  alternates: { canonical: '/podcast-marketing-calendar' },
  openGraph: {
    title: 'Podcast Marketing Calendar',
    description: 'Structure a podcast program so production, guest outreach, and distribution happen on a predictable schedule.',
    url: '/podcast-marketing-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Separate production calendar from publishing calendar — 4-episode backlog minimum before launch and maintained throughout',
    desc: 'A podcast calendar where production and publishing happen in the same week produces a program where any disruption — guest cancellation, editor delay, holiday schedule — breaks the publishing cadence. The podcast calendar separates two tracks: production (recording schedule, editing, show notes, thumbnail — 3-4 weeks ahead of publishing), and publishing (distribution, social assets, newsletter, community post — on a fixed weekly or biweekly schedule). Backlog minimum: 4 episodes completed before launch, 2 episodes backlogged at all times thereafter. If backlog drops to 1 episode, the following week is scheduled as a production week (two episodes recorded or an archive episode published). Publishing cadence: weekly or biweekly — set once and not changed without a 4-week listener communication period. Cadence inconsistency is the top reason podcasts lose subscribers in the first 6 months.',
  },
  {
    icon: Clock,
    title: 'Guest outreach 6-8 weeks ahead of recording — pre-interview prep 1 week before, follow-up email within 24 hours of episode air',
    desc: 'A podcast calendar that schedules guest outreach 2-3 weeks before recording produces a guest roster of people who happen to be available on short notice rather than people who are worth scheduling around. Guest outreach timeline: 6-8 weeks before target recording date — initial outreach (personalized, research visible in message, specific hook for why this guest for this episode). 4-6 weeks before — confirmation and scheduling (recording link, podcast guest prep guide sent). 1 week before — pre-interview prep (specific questions sent to guest, confirm recording setup, check equipment and platform). Day of recording — technical check 15 minutes before. 24 hours after episode airs — follow-up email to guest (episode link, social assets for sharing, thank you). Guest pipeline: maintain a 12-16 person shortlist updated monthly (3-4 tiers: dream guests, reachable through warm intro, cold outreach). Warm intro rate: 60-70% of guests respond to warm intros versus 10-15% for cold outreach — invest in the network before the calendar.',
  },
  {
    icon: BarChart3,
    title: 'Episode topic calendar 12 weeks ahead — topic mix by listener intent: 60% educate, 25% inspire, 15% convert',
    desc: 'A podcast episode calendar where topics are chosen based on what the host wants to discuss rather than listener demand produces a show where engagement rate declines over time as the audience diverges from the content. Episode topic calendar is built 12 weeks ahead from four inputs: listener questions (survey, social DMs, email replies — 20-25% of topics), trending industry search data (Exploding Topics, Google Trends, podcast chart analysis — 20-25%), guest expertise (40-50%), and evergreen foundational content (10-15%). Topic mix by listener intent: 60% education (tactical, actionable, immediately applicable — drives subscribe and share), 25% inspiration (founder stories, transformation stories — drives emotional connection), 15% convert (case studies with your product/service as context — drives trials or consultations). Conversion episodes not labeled as promotional — labeled by topic. Monthly topic audit: 3 top-performing episode topics by completion rate, 3 by download-to-subscriber conversion — pattern drives next 12 weeks.',
  },
  {
    icon: Users,
    title: 'Distribution calendar — episode repurposing into 5 assets per episode, newsletter integration, and cross-platform scheduling',
    desc: 'A podcast with no distribution calendar produces a program where the full production investment yields only podcast app listeners. Each episode generates 5 distribution assets on a fixed calendar: audiogram (60-second clip with waveform — posted to Instagram, LinkedIn, Twitter/X day of publishing), quote graphic (key insight from episode — posted 2 days after publishing), short-form video clip (2-3 minute video clip for YouTube Shorts/TikTok/Reels — posted 3 days after publishing), long-form article (episode show notes expanded to 800-1200 words — published to blog and submitted to Medium or LinkedIn newsletter — posted 5 days after publishing), and email newsletter (episode summary with key takeaways — sent to list day of publishing or Tuesday if Monday publishing). Cross-platform distribution calendar: set distribution schedule for each platform on a recurring basis, not episode-by-episode. Guest reposts: social asset sent to guest 1 day before publishing — track guest repost rate (benchmark 60% for guests who received personalized assets versus 25% for generic link sharing).',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Calendar setup', action: 'Podcast production calendar structure: recording schedule (fixed recording days — Tuesday and Wednesday as default for weekly podcast, 2 recording sessions per month for biweekly), editing turnaround (3-5 business days for external editor, 1-2 days for in-house), publishing day (Thursday 6am ET for B2B podcast — highest podcast app download day — adjusted from account-specific data after 90 days). Episode backlog at setup: 4 episodes complete before launch. Guest pipeline initialized: 12-16 person shortlist, 3 tiers, warm intro mapping complete. Distribution calendar: 5-asset production workflow documented, social scheduling tool configured, newsletter integration live. Podcast hosting platform configured: ID3 tags, episode description SEO structure, show notes template.' },
  { time: 'Guest outreach', action: 'Guest outreach calendar: 6-8 weeks before recording — personalized outreach (reference specific work, specific hook for this episode, proposed recording window with 3 dates). 4 weeks before — confirmation and logistics (Calendly or scheduling link, podcast guest prep guide: equipment check, recording environment CE, what to expect). 1 week before — pre-interview prep (3-5 specific questions sent, confirm recording setup, Riverside or SquadCast link tested). Day before — reminder with recording link and 5-minute technical check request. Post-interview (within 24 hours of recording) — thank you email, episode air date, social assets delivery 48 hours before publishing. Guest pipeline monthly update: 2-3 new additions to shortlist, 1-2 outreach cadences initiated. Guest acceptance rate tracked: target 40-50% of outreach resulting in scheduled recording.' },
  { time: 'Production', action: 'Episode production calendar: recording day — 15-minute pre-check, 45-75 minute interview, 5-minute post-interview notes (key quotes, timestamps for audiogram, show notes outline). Recording to editor: raw files uploaded within 2 hours of recording. Editor turnaround: 3-5 business days. Edited episode review: 24-hour turnaround for host approval. Show notes: 500-800 word SEO-optimized show notes with key takeaways, guest bio, resources mentioned, and CTA. Thumbnail: episode cover art with guest photo, episode number, and hook headline. Audiogram: 60-second clip identified during review, waveform generated. Episode backlog check: if backlog drops below 2 episodes, next available slot scheduled as double recording week.' },
  { time: 'Distribution', action: 'Episode distribution calendar: day of publishing — podcast hosting platform pushes to Apple, Spotify, Google. Newsletter sent (B2B: Tuesday 9am ET optimal). Audiogram to Instagram and LinkedIn with episode link in comments or bio. Quote graphic to Twitter/X. YouTube Shorts/TikTok/Reels clip published (3 days after episode air). Long-form article to blog and secondary platform (5 days after). Guest asset delivery: 1 day before publishing — social asset package to guest (audiogram, quote graphic, link). Guest social amplification monitoring (24-48 hours after publishing). Cross-promotion: podcast episode featured in product newsletter, email signature, and community post within 1 week of publishing.' },
  { time: 'Monthly review', action: 'Monthly podcast performance review (45 minutes, first Monday): top 3 episodes by download count (what topic, what guest category, what episode format — solo versus guest versus roundtable), top 3 by completion rate (what episodes listeners finish — completion rate benchmark 60-75% for B2B podcast), top 3 by subscriber conversion (what episodes drove the most new subscribers — episode topic type). Distribution performance: audiogram impressions and click-through rate by platform, article organic traffic by episode, newsletter open rate on podcast send day versus average. Guest pipeline health: outreach sent versus responses received, acceptance rate trend. Episode backlog count. Monthly output: one topic direction adjustment, one distribution channel optimization, one guest tier rebalancing.' },
  { time: 'Quarterly reset', action: 'Quarterly podcast calendar reset (60 minutes, first Monday of each quarter): full-quarter performance analysis. Show analytics: total downloads per quarter versus prior quarter (growth rate), subscriber growth versus churn, completion rate trend, episode length optimization CE (is 45-minute average performing versus 30-minute CE). Topic mix review: actual topic mix versus 60/25/15 target — conversion episode performance review (does conversion episode format drive listener action or repel engagement). Guest mix review: solo versus guest ratio performance, guest tier mix (did mid-tier guests outperform high-tier in downloads — common finding). Distribution ROI: which of the 5 assets drives highest listener acquisition, which drives highest conversion to email list. Season structure consideration: if continuous publishing, consider 10-12 episode season format for narrative coherence and re-launch marketing opportunity each season.' },
]

export default function PodcastMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Podcast Marketing Calendar"
        title={
          <>
            4-episode backlog before launch. Guest outreach 6-8 weeks out.
            <br />
            <em className="not-italic text-gold">5 distribution assets per episode. Monthly performance review updates topic mix and guest tier.</em>
          </>
        }
        lede="A podcast without a production calendar produces inconsistent publishing, guest scheduling chaos, and no distribution strategy that converts listeners. The podcast marketing calendar separates production (recording, editing, backlog — 3-4 weeks ahead) from publishing (fixed Thursday schedule, 5 distribution assets per episode). Guest outreach runs 6-8 weeks ahead. The monthly review updates topic mix from completion rate and subscription conversion data. Momenties structures the full podcast marketing calendar."
        crumbs={[{ label: 'Podcast Marketing Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/content-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Content calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Podcast marketing calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a podcast calendar where production backlog, guest pipeline, topic mix, and distribution run on a predictable schedule.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Podcast marketing calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From calendar setup through the quarterly reset that updates topic mix, guest tier strategy, and distribution channel allocation.</h2>
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
                &ldquo;We launched our podcast without a production calendar and missed our publishing schedule 4 times in the first 8 weeks — twice because guests canceled late, once because the editor was delayed, once because I was traveling. After the fourth miss we did not publish for 3 weeks and lost 22% of our early subscribers. When we rebuilt with a proper calendar — 4-episode backlog, 6-week guest outreach lead time, fixed Thursday publishing — we went 14 consecutive months without a missed week. The guest pipeline change was the most impactful: moving outreach to 6-8 weeks ahead meant we could approach the guests we actually wanted instead of booking whoever was available on short notice. Our average guest quality score (based on engagement per episode) went up by about 40% in the first quarter after the change. The 5-asset distribution calendar was the thing we had been doing ad hoc — now each episode generates an audiogram, a quote graphic, a short-form clip, an article, and a newsletter feature on a fixed schedule. Our email list grew 3x in the 6 months after we systematized the distribution, even though download growth was moderate. The podcast became our top email acquisition channel.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ben A.</div>
                  <div className="text-xs text-muted-foreground">Podcast Host and Head of Content, B2B software company, 18,000 monthly downloads</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the podcast marketing calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every production deadline, guest outreach touchpoint, distribution asset, and performance review in a structured podcast marketing program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Production calendar — recording days, editing turnaround, 4-episode backlog minimum',
                'Guest pipeline — 12-16 person shortlist, 3 tiers, 6-8 week outreach lead time',
                'Episode topic calendar — 12 weeks ahead, 60% educate / 25% inspire / 15% convert',
                'Distribution assets — 5 per episode: audiogram, quote graphic, short-form clip, article, newsletter',
                'Guest asset package — social assets to guest 1 day before publishing, repost rate tracked',
                'Monthly performance review — top episodes by completion rate, subscriber conversion, distribution ROI',
                'Publishing cadence — fixed weekly or biweekly, never broken without 4-week listener notice',
                'Quarterly reset — topic mix audit, guest tier review, season structure consideration',
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
        title="4-episode backlog before launch. Guest pipeline 6-8 weeks ahead. 5 distribution assets per episode."
        subtitle="Podcast marketing calendar: production backlog, guest outreach timeline, topic mix by intent, 5-asset distribution workflow, and monthly performance review. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Content calendar', href: '/content-calendar' }}
      />
    </>
  )
}
