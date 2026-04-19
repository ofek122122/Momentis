import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Email Marketing Calendar — how to structure an email marketing program so sends happen on a consistent schedule driven by audience segmentation and lifecycle stage, not by when content is ready',
  description:
    'An email marketing program without a calendar produces ad hoc sends, no relationship between email timing and the recipient lifecycle stage, and no systematic measurement of what drives open rate versus click rate versus conversion. This guide covers how to build a send calendar that separates broadcast emails from triggered lifecycle emails, how to set send frequency by segment based on engagement data rather than arbitrary weekly cadence, how to structure the email mix by intent (nurture, convert, retain, re-engage), and how to run the monthly performance audit that updates subject line strategy and segmentation criteria.',
  alternates: { canonical: '/email-marketing-calendar' },
  openGraph: {
    title: 'Email Marketing Calendar',
    description: 'Structure an email marketing program so sends happen on a consistent schedule driven by audience segmentation and lifecycle stage.',
    url: '/email-marketing-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Separate broadcast sends from lifecycle triggered emails — they serve different purposes and require different calendars',
    desc: 'An email marketing calendar that treats all emails as broadcast sends produces a program where new subscribers receive the same email as 3-year customers in the same week. The email marketing calendar separates two distinct tracks: broadcast sends (newsletter, product announcements, campaigns — sent to segments on a schedule) and lifecycle triggered emails (welcome sequence, onboarding, re-engagement, win-back — sent to individuals based on behavior or time since action). Broadcast calendar: 1-4 sends per month depending on segment and list size. Lifecycle triggers: always running, invisible to the broadcast calendar, managed separately in automation sequences. The monthly audit reviews both tracks — broadcast performance and lifecycle funnel completion rates.',
  },
  {
    icon: Clock,
    title: 'Send frequency set by engagement data: active subscribers get more emails, disengaged subscribers get fewer',
    desc: 'An email calendar with a uniform weekly send to the entire list produces an increasing unsubscribe rate as disengaged subscribers receive emails at the same frequency as highly engaged subscribers. Send frequency is differentiated by engagement tier: active subscribers (opened in last 30 days) — 2-4 sends per month; engaged subscribers (opened in last 90 days, not last 30) — 1-2 sends per month; at-risk subscribers (not opened in 90-180 days) — re-engagement sequence only (3-4 emails, 2 weeks apart); expired subscribers (not opened in 180+ days) — sunset sequence only (final 2 emails before suppression). Frequency differentiation reduces unsubscribe rates, improves list health, and preserves deliverability for active subscribers who drive the majority of conversions.',
  },
  {
    icon: BarChart3,
    title: 'Email mix by intent: 40% nurture, 30% convert, 20% retain, 10% re-engage — reviewed quarterly',
    desc: 'An email marketing program where every send is a conversion ask produces list fatigue and declining open rates within 3-6 months. The email mix by intent — the ratio of nurture emails to conversion asks to retention content to re-engagement — is set in the quarterly calendar review based on list composition and revenue targets. Default mix for B2B SaaS: 40% nurture (education, insight, product value — no direct ask), 30% convert (free trial to paid, upgrade, expand — direct ask with urgency), 20% retain (feature education, success story, community — for existing customers), 10% re-engage (win-back, re-activation — for disengaged subscribers). Mix shifts when conversion rate drops below benchmark: increase nurture ratio by 10% for 30 days before testing conversion sends.',
  },
  {
    icon: Users,
    title: 'Monthly audit: subject line strategy and segmentation criteria updated from open rate and conversion data',
    desc: 'An email program that runs 12 months on the same subject line formula and segmentation criteria without a performance audit is a program where declining performance is invisible until deliverability is damaged. The monthly email performance audit (45 minutes, first Monday): top 5 sends by open rate (what subject line pattern, send time, and segment drove above-average opens), top 5 sends by click-to-open rate (what email body structure and CTA placement drove above-average clicks), bottom 5 sends by both metrics (candidates for subject line reformulation or segment exclusion), and one list health metric — unsubscribe rate trend, spam complaint rate, and deliverability score. Audit output: one subject line formula adjustment, one segmentation change, and one send time test for the following month.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Calendar setup', action: 'Email marketing calendar structure defined for the quarter: broadcast send calendar (dates, segments, intent category, topic) and lifecycle trigger audit (welcome sequence open rate, onboarding completion rate, re-engagement success rate). Segmentation criteria documented: active (opened in last 30 days), engaged (opened in last 31-90 days), at-risk (not opened in 91-180 days), expired (not opened in 181+ days). Send frequency by tier documented. Sender reputation baseline recorded: overall open rate, unsubscribe rate per send, spam complaint rate. If overall open rate is below 20% for B2B, list cleaning protocol initiated before new broadcast calendar begins.' },
  { time: 'Broadcast sends', action: 'Broadcast send calendar: 1-4 sends per month to active and engaged segments. Send calendar elements: send date and time (Tuesday-Thursday, 10am-2pm in recipient time zone as default — adjusted from account-specific send time analysis after 90 days of data), segment (active, engaged, or both — at-risk receives only re-engagement sequence), intent category (nurture/convert/retain), topic and subject line, and preview text. Broadcast sends scheduled in the email platform calendar 4 weeks in advance — not queued the day before sending. Subject line A/B test: every broadcast send tests two subject line variants — winner determined by 4-hour open rate, remainder of list receives winner.' },
  { time: 'Lifecycle triggers', action: 'Lifecycle trigger audit (monthly — separate from broadcast calendar): welcome sequence (subscriber day 1, day 3, day 7 — open rate and click rate by email, sequence completion rate), onboarding sequence (customer day 0, day 7, day 14, day 30 — feature adoption rate by email, onboarding completion benchmark), re-engagement sequence (at-risk subscriber day 1, day 15, day 30 of inactivity — re-engagement rate, unsubscribe rate in sequence), and sunset sequence (expired subscriber final 2 emails before suppression — confirmation of suppress decision). Lifecycle sequences updated quarterly based on trigger audit data — not modified ad hoc.' },
  { time: 'Monthly audit', action: 'Monthly email performance audit (45 minutes, first Monday): broadcast performance — top 5 by open rate (subject line pattern CE: question versus statement versus number versus urgency), top 5 by click-to-open rate (body structure: single CTA versus multiple CTA, text-heavy versus image-heavy, CTA placement above fold versus below), bottom 5 by both metrics (subject line reformulation candidates and segment exclusion candidates). Deliverability audit: unsubscribe rate per send (above 0.3% — segment review triggered), spam complaint rate (above 0.08% — immediate suppression list expansion), and overall open rate trend (declining 3 consecutive months — send frequency reduction and list cleaning initiated). Audit output: one subject line formula change, one segmentation criterion change, and one send time test scheduled.' },
  { time: 'Quarterly reset', action: 'Quarterly email calendar reset (60 minutes, first Monday of each quarter): full-quarter performance analysis. List health review: list size change (growth minus unsubscribes), engagement tier distribution shift (what percentage moved from active to engaged, engaged to at-risk — trend CE), and deliverability score by inbox placement tool (Google Postmaster Tools, Microsoft SNDS). Mix review: actual email mix versus target mix (40/30/20/10) — adjustment for following quarter. A/B test results review: subject line formula winners consolidated into subject line playbook, send time test results documented. Re-engagement sequence performance: re-activation rate — if below 10%, re-engagement sequence updated or suppression timeline shortened.' },
  { time: 'Subject lines', action: 'Subject line playbook built from monthly audit data: winning formulas documented by intent category. Nurture subject line patterns: curiosity gap (leaving out one key detail — "The reason [outcome] takes 3x longer than it should"), specificity (number-led — "7 [industry] data points from Q3"), and direct value statement ("How to [outcome] without [pain]"). Convert subject line patterns: urgency with specificity ("Your [trial/offer] expires [specific date], not just soon"), social proof ("How [specific company type] achieved [specific result]"), and personalization by segment. Retain subject line patterns: feature education ("You have not tried [specific feature] — here is why it matters"). Re-engagement subject line patterns: honest ("We have not heard from you — should we stop sending?"). Subject line playbook reviewed and updated at each quarterly reset.' },
  { time: 'Deliverability', action: 'Deliverability calendar: monthly DNS record review (SPF, DKIM, DMARC records verified — no changes without IT sign-off), quarterly inbox placement test (seed list test using MailReach, GlockApps, or Litmus — gmail, outlook, yahoo inbox placement percentage), and annual IP warm-up review (if sending volume increased more than 50% in the year — IP reputation warm-up protocol CE). Suppression list management: hard bounces suppressed immediately, soft bounce threshold (3 consecutive soft bounces — suppress), spam complaints suppressed on same day. Suppression list audit quarterly: remove role addresses (info@, support@, admin@), disposable email domains, and duplicate addresses. Clean suppression list documented in the email calendar as a quarterly task.' },
]

export default function EmailMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Email Marketing Calendar"
        title={
          <>
            Broadcast sends scheduled 4 weeks out. Lifecycle triggers always running.
            <br />
            <em className="not-italic text-gold">Frequency by engagement tier. Monthly audit updates subject lines and segmentation.</em>
          </>
        }
        lede="An email marketing program without a calendar produces ad hoc sends and uniform frequency for all subscribers regardless of engagement. The email marketing calendar separates broadcast sends (1-4 per month by segment intent) from lifecycle triggered emails (welcome, onboarding, re-engagement — always running in automation). Send frequency is differentiated by engagement tier so active subscribers receive more emails and at-risk subscribers receive only re-engagement sequences. The monthly audit updates subject line strategy and segmentation criteria from open rate and conversion data. Momenties structures the full email marketing calendar."
        crumbs={[{ label: 'Email Marketing Calendar' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Email marketing calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for an email marketing calendar where frequency matches engagement, intent mix is deliberate, and performance data drives updates.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Email marketing calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From calendar setup through the quarterly reset that updates subject line playbook, segmentation criteria, and deliverability protocol.</h2>
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
                &ldquo;We had a weekly newsletter that went to the entire list. The unsubscribe rate was climbing and open rates were falling. When we moved to engagement-tier frequency — active subscribers got 3 sends per month, engaged got 2, at-risk got only the re-engagement sequence — our overall open rate went from 18% to 31% in 90 days. The monthly audit was the most useful change: we discovered that our convert emails had higher open rates when they had specific customer result data in the subject line rather than generic urgency, and we updated our subject line playbook. The lifecycle trigger audit was the one we had been ignoring: our onboarding sequence had a 43% drop-off at email 3, and fixing that single email increased paid conversion from trial by 12 percentage points. The calendar made the program measurable enough to actually improve.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kiara N.</div>
                  <div className="text-xs text-muted-foreground">Email Marketing Manager, B2B SaaS company, 85,000-subscriber list</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the email marketing calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every broadcast send, lifecycle trigger audit, and deliverability check in a structured monthly and quarterly email program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Broadcast send calendar — 4 weeks ahead, segment and intent category for every send',
                'Subject line A/B test — every broadcast tests two variants, 4-hour winner decision',
                'Engagement tier frequency — active 3-4x/month, engaged 1-2x, at-risk re-engagement only',
                'Lifecycle trigger audit — welcome, onboarding, re-engagement funnel completion monthly',
                'Email mix by intent — 40% nurture, 30% convert, 20% retain, 10% re-engage reviewed quarterly',
                'Monthly performance audit — subject line playbook and segmentation criteria updated',
                'Deliverability calendar — DNS records, inbox placement test, suppression list audit',
                'Quarterly reset — list health, tier distribution, and A/B test results consolidated',
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
        title="Broadcast sends scheduled. Lifecycle triggers running. Frequency by engagement tier."
        subtitle="Email marketing calendar: 4-week send schedule, engagement-tier frequency, monthly subject line audit, lifecycle trigger funnel review, and quarterly deliverability protocol. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Content calendar', href: '/content-calendar' }}
      />
    </>
  )
}
