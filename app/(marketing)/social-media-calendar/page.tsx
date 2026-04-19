import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media Calendar — how to structure social media publishing so posting happens on a consistent schedule driven by audience data, not by inspiration',
  description:
    'A social media strategy without a calendar produces inconsistent posting, reactive content that chases trends rather than building audience, and no connection between social media activity and business outcomes. This guide covers how to build a platform-specific posting schedule based on measured audience timing, how to batch social media content creation so the week is not spent creating posts the day they publish, how to structure the monthly content mix by post type and topic, and how to connect social media activity to conversion metrics through a 30-day performance audit.',
  alternates: { canonical: '/social-media-calendar' },
  openGraph: {
    title: 'Social Media Calendar',
    description: 'Structure social media publishing so posting happens on a consistent schedule driven by audience data, not by inspiration.',
    url: '/social-media-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Platform-specific schedule set by audience timing data — not by generic best-practices guides',
    desc: 'A social media calendar built on generic "post at 9am Tuesday" advice produces a schedule optimized for averages rather than for the specific audience of a specific account. Platform-specific posting times are determined by the account\'s own analytics data: when the account\'s existing followers are active (not when the platform\'s global audience is active). For accounts with fewer than 6 months of posting history, platform analytics defaults are used as a starting point and adjusted quarterly. The social media calendar separates the posting schedule (platform-specific, day and time) from the content mix (topic distribution by platform) from the creation schedule (batched once per week or twice per month).',
  },
  {
    icon: Clock,
    title: 'Weekly batch creation: one 2-hour session produces the next 7 days of content across all platforms',
    desc: 'A social media team that creates content the day it publishes is a team with no buffer and no ability to optimize. The weekly batch creation session — 2 hours on Monday morning — produces all content for the following 7 days across all platforms. Content created in the batch is loaded into the scheduling tool (Buffer, Hootsuite, Later, or native scheduling) and reviewed once before the week begins. Content not published in the current week goes into the buffer library for use when batch production is below the weekly quota. A consistent 2-hour Monday batch produces a team that is never creating under deadline pressure and always has 7 days of buffer to respond to breaking news or platform algorithm changes.',
  },
  {
    icon: BarChart3,
    title: 'Content mix by platform: each platform requires a different content type distribution',
    desc: 'A social media calendar that publishes identical content across all platforms treats distribution as a broadcast medium rather than as a channel with specific audience behavior and algorithm requirements. Platform-specific content mix targets: LinkedIn (70% original professional insights and data, 20% repurposed long-form content, 10% engagement content — questions and polls), Twitter/X (50% original short-form takes, 30% thread format deep-dives, 20% engagement and replies), Instagram (60% visual content — carousels and single images, 30% Reels, 10% Stories), TikTok (80% native short-form video — trending format adaptation, 20% educational series). Content mix targets are set quarterly based on platform-specific performance data — not by personal preference.',
  },
  {
    icon: Users,
    title: 'Monthly performance audit: engagement rate by post type determines the mix for the following month',
    desc: 'A social media calendar that runs without a monthly performance audit is a calendar where the mix stays fixed by habit rather than updating based on what is driving follower growth, engagement, and conversions. The monthly performance audit (30 minutes on the first Monday of the month, before the content ideation session): top 5 posts by engagement rate by platform, top 5 posts by click-through or profile visits by platform, bottom 5 posts by both metrics (candidates for elimination from the mix), and one insight per platform — what changed in algorithm or audience behavior in the past 30 days. Audit output: one adjustment to the content mix per platform for the following month, based on performance data, not assumption.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Platform setup', action: 'Platform-specific schedule determined from account analytics (90-day posting history minimum). For each active platform: audience active hours (platform analytics — follower activity by day and hour), posting frequency (follower-to-frequency ratio benchmark: under 1,000 followers — 3-4x per week on primary platforms; 1,000-10,000 — 5-7x per week; above 10,000 — daily on primary, 3-4x per week on secondary). Content mix targets set by platform (LinkedIn, Twitter/X, Instagram, TikTok — different targets). Scheduling tool configured with approved posting windows. Calendar template built with platform-specific content type slots for each posting day.' },
  { time: 'Weekly batch', action: 'Monday 2-hour batch creation session: all content for the following 7 days produced. Session structure: 30 minutes — performance review of prior week (what performed above or below average, why), 60 minutes — content creation (posts written, images designed, captions finalized), 30 minutes — scheduling (content loaded into scheduling tool with confirmed posting times, hashtags finalized, UTM tracking parameters added to links). Content created in batch but not scheduled for current week goes into buffer library. Buffer library target: minimum 14 days of additional content at current posting cadence — so a 1-week batch miss does not produce a posting gap.' },
  { time: 'Monthly audit', action: 'Monthly performance audit (30 minutes, first Monday): top 5 posts by engagement rate per platform (what format, topic, and length drove the highest engagement), top 5 posts by click-through or profile visit per platform (what drove traffic beyond the platform), bottom 5 posts by both metrics (format or topic candidates for elimination), and one platform-specific observation — algorithm change, audience shift, or format performance trend. Audit output: one content mix adjustment per platform for the following month. Adjustment documented in the calendar so the rationale is visible at next month\'s audit.' },
  { time: 'Quarterly reset', action: 'Quarterly calendar reset (60 minutes, first Monday of each quarter): full-quarter performance analysis. Content mix review: which post types drove the highest engagement rate — adjust platform-specific mix targets. Posting frequency review: did the frequency produce audience growth or did engagement rate decline (sign of frequency too high for audience size). Posting time review: has audience activity shifted — re-pull platform analytics and update scheduled posting windows if needed. New content formats to test in the next quarter (one new format per platform, limited to 20% of the mix to preserve stability). Quarterly reset output: updated content calendar template for the next quarter.' },
  { time: 'Hashtag strategy', action: 'Hashtag strategy is built at the calendar level, not at the individual post level. Per platform: LinkedIn (3-5 hashtags per post — research-backed professional hashtags, not trending general hashtags), Instagram (20-30 hashtags per post — mix of niche-specific, medium-competition, and brand hashtags), Twitter/X (1-2 hashtags — trending only when directly relevant), TikTok (3-5 hashtags — one trending sound-related hashtag, 2-3 niche hashtags, one brand hashtag). Hashtag library built in a shared document and reviewed monthly — remove low-performing hashtags, add new niche hashtags based on monthly audit. Hashtag performance tracked: posts with hashtag set A versus B comparison run quarterly.' },
  { time: 'Content types', action: 'Content type definitions built into the calendar template ensure the weekly batch session does not default to the same format every week. Content type library: original insight post (opinion or data-backed claim under 280 characters), thread or carousel (5-10 point deep dive on a single topic), social proof (customer quote, user story, or result), behind-the-scenes (team, process, or product in progress), educational (how-to, explainer, or framework), and engagement (question, poll, or debate prompt). Each platform has a weekly content type rotation schedule — no platform defaults to the same content type more than 2 consecutive days. Content type rotation documented in the calendar so the batch session starts with a brief.' },
  { time: 'Repurposing', action: 'Social media calendar includes a repurposing layer: long-form content from the content calendar is systematically repurposed for social media distribution. Repurposing pipeline: one long-form piece generates 5-8 social media posts — 3-5 key statistics as standalone posts, 1-2 quotes extracted for image or carousel format, 1 thread summarizing the main argument, and 1 short-form video (Reels or TikTok) based on the strongest single point. Repurposing calendar: each week, one long-form piece is assigned for repurposing — producing 5-8 social posts with no net new ideation. Repurposing posts are labeled in the calendar so the audit can separate original versus repurposed post performance.' },
]

export default function SocialMediaCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Media Calendar"
        title={
          <>
            Posting schedule from audience data. Weekly batch on Monday.
            <br />
            <em className="not-italic text-gold">Platform-specific content mix. Monthly audit adjusts the schedule.</em>
          </>
        }
        lede="A social media strategy without a calendar produces inconsistent posting and reactive content. The social media calendar builds platform-specific posting schedules from audience timing data, batches all content creation in a weekly 2-hour Monday session, maintains a 14-day buffer library so a missed batch does not create a posting gap, and runs a monthly performance audit that adjusts content mix by platform based on engagement data. Momenties structures the full social media calendar so posting happens on schedule without daily creation pressure."
        crumbs={[{ label: 'Social Media Calendar' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Social media calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a social media calendar where posting is consistent, creation is batched, and the mix updates from performance data.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Social media calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From platform setup through the quarterly reset that updates posting windows and content mix from 90 days of performance data.</h2>
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
                &ldquo;We were posting when we had time, which meant we were posting reactively and inconsistently. Some weeks we would post 10 times and other weeks we would go dark for two weeks. The Monday batch session changed everything: two hours on Monday morning and the entire week was done. We built a 3-week buffer in the first month and I have not created a post the day it published in over a year. The monthly audit was the most valuable part — we discovered that carousel posts on LinkedIn drove 6x the engagement of single-image posts, and within one quarter we shifted the LinkedIn mix to 60% carousels. The platform-specific schedule from our own audience timing data rather than generic best-practices guides added about 30% to our average reach per post. The calendar does not make the content better — it makes the system reliable enough that you can actually measure what is working.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jordan L.</div>
                  <div className="text-xs text-muted-foreground">Head of Content, B2B SaaS company, 40,000 LinkedIn followers</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the social media calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every posting window, creation session, and performance review in a structured weekly and monthly social media cycle.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Platform-specific posting schedule — audience timing data, not generic advice',
                'Weekly Monday batch session — 2 hours produces 7 days across all platforms',
                '14-day buffer library — no posting gap when a week is missed',
                'Content type rotation — no platform defaults to the same format 2 days in a row',
                'Monthly performance audit — top and bottom performers by engagement rate per platform',
                'Quarterly reset — posting windows, frequency, and content mix updated from 90-day data',
                'Hashtag library — platform-specific, reviewed monthly, performance tracked quarterly',
                'Repurposing pipeline — one long-form piece generates 5-8 social posts per week',
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
        title="Posting schedule from audience data. Creation batched Monday. Mix updated monthly."
        subtitle="Platform-specific social media calendar: weekly Monday batch session, 14-day buffer library, monthly audit adjusts mix by engagement rate. Consistent posting without daily creation pressure. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Content calendar', href: '/content-calendar' }}
      />
    </>
  )
}
