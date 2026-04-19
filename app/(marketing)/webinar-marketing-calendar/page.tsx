import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webinar Marketing Calendar — how to structure a webinar program so promotion, speaker prep, and post-webinar follow-up happen on a predictable schedule that drives pipeline',
  description:
    'A webinar program without a calendar produces under-promoted events, speakers who are underprepared, and post-webinar leads that go unworked because follow-up happens days after intent has cooled. This guide covers how to build a webinar marketing calendar that structures promotion 4-6 weeks ahead of each event, how to run speaker prep 2 weeks before, how to build the post-webinar nurture sequence that converts attendees and registrants within 72 hours, and how to run the quarterly webinar performance review that updates topic selection and promotion mix.',
  alternates: { canonical: '/webinar-marketing-calendar' },
  openGraph: {
    title: 'Webinar Marketing Calendar',
    description: 'Structure a webinar program so promotion, speaker prep, and post-webinar follow-up drive pipeline on a predictable schedule.',
    url: '/webinar-marketing-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Webinar promotion starts 4-6 weeks before the event — promotion is the program, not an afterthought to the content',
    desc: 'A webinar calendar where promotion begins 1-2 weeks before the event produces low registration rates and an audience of mostly existing customers rather than pipeline opportunities. Webinar promotion is structured over a 4-6 week window: 4-6 weeks before — save the date email to owned list and social announcement. 3-4 weeks before — primary promotional email to full segmented list, social ads campaign launched, partner co-promotion activated (if applicable). 2-3 weeks before — reminder email to non-registrants, LinkedIn event page active, speaker social amplification (speakers post to their networks). 1 week before — last-chance email to non-registrants, event reminder to registrants. 48 hours before — event reminder email with agenda preview. Day before — final reminder with logistics (link, dial-in, calendar invite). Day of — 1 hour before reminder. Registration benchmark: 200-400 registrants per webinar for a B2B SaaS company with 10,000-person email list — below 150 registrants, promotion strategy changes for the event.',
  },
  {
    icon: Clock,
    title: 'Speaker preparation calendar: brief 4 weeks out, dry run 1 week out, slide review 5 days out',
    desc: 'A webinar with an underprepared speaker — one who has not reviewed the audience profile, has not timed their content, and has not practiced the slide transitions — produces a poor attendee experience regardless of topic quality. Speaker preparation is structured on the webinar calendar: 4 weeks before — speaker brief sent (audience profile, registrant persona, key takeaways expected, format CE: 30-min talk plus 15-min Q&A versus panel versus workshop, and promotional asks — LinkedIn post, email to their list). 2 weeks before — slide deck due for review. 1 week before — dry run (30-45 minutes, full run-through with timing, Q&A practice, platform orientation). 5 days before — final slide review and copy edits. Day before — speaker confirmation call or email (logistics, login, contingency for technical issues). Speaker brief template: audience profile CE (industry, company size, role), one key insight expectation, three questions the audience will want answered, and post-event follow-up expectations (will the speaker follow up with attendees who ask questions?).',
  },
  {
    icon: BarChart3,
    title: 'Post-webinar follow-up within 72 hours — attendee sequence, no-show sequence, and on-demand access all on the same-day schedule',
    desc: 'A post-webinar follow-up sent 5 days after the event reaches an audience whose intent signal has cooled from a 9 to a 3. Post-webinar follow-up is structured on the calendar on a same-day schedule: day of event — recording processed and uploaded within 4 hours of event end. 24 hours after — attendee email: thank you, recording link, key takeaways, and one CTA (demo, trial, next webinar). 24 hours after — no-show email: recording link, you missed it, key takeaways, same CTA. 48 hours after — sales handoff: attendees who stayed 80%+ of duration and registered as ICP sent to sales for same-day outreach. 72 hours after — nurture email 2 (related resource, deeper content on the topic). Day 7 — sales follow-up attempt 2 for high-engagement attendees not yet responded. Day 14 — final email CE for attendees who did not convert: on-demand version with new CTA. Registrant-to-attendee rate benchmark: 40-60% for B2B webinar — below 35%, reminder sequence frequency increased for following webinar.',
  },
  {
    icon: Users,
    title: 'Quarterly webinar calendar — 6-10 webinars per quarter by intent: 50% education, 30% product demo, 20% customer story or panel',
    desc: 'A webinar program that runs ad hoc events produces no flywheel effect — no attendees from one webinar becoming promoters for the next, no data on which topics drive pipeline versus drop-off. The quarterly webinar calendar structures 6-10 events per quarter by intent: 50% educational (problem-focused, no product pitch — largest registration and attend rates, best for audience building), 30% product-focused (demo, comparison, how-to — lower attend rates but higher pipeline conversion), 20% social proof (customer story, panel, case study — lower registration but highest close rate from attendees). Monthly topic selection: topic chosen from top-performing content (which blog posts, emails, or social content drove the most engagement in the prior 30 days — webinar topic extends the best-performing content into an interactive format). Annual anchor webinars: 4 flagship webinars per year (larger speaker, longer promotion window, higher production value — quarterly industry report, annual trend report).',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Calendar setup', action: 'Webinar marketing calendar structure for the quarter: event dates (6-10 per quarter, 1-2 per month minimum cadence), promotion calendar for each event (promotion start date, email send dates, social campaign dates, partner co-promotion dates), speaker prep calendar (brief date, slide review date, dry run date), and post-webinar sequence calendar (recording upload, follow-up email dates, sales handoff date). Webinar platform configured: Zoom Webinar, Demio, or Hopin — registration page template, confirmation email, reminder sequence. Analytics tracking: UTM parameters for each registration source, CRM integration for lead routing, pipeline attribution setup. Quarterly topic plan: 6-10 topics approved, speakers identified, intent category assigned (50/30/20 mix).' },
  { time: 'Promotion', action: 'Promotion calendar per webinar: 4-6 weeks before — save the date email (one-third of registrants who convert do so in the first week of promotion). 3-4 weeks before — primary promotional email (A/B test subject line — question versus statement format, value proposition versus outcome-focused). Social: LinkedIn event page live, organic posts on company and speaker pages, LinkedIn ads campaign launched (target ICP by role and company size, $500-$2,000 per webinar budget CE). Partner co-promotion: partner email to their list, partner social post, co-branded registration page if applicable. 2 weeks before — reminder to non-registrants (re-engage non-openers with new subject line). 1 week before — final push email. 48 hours and 24 hours before — logistics reminders to registrants. Benchmark tracking: registration rate by promotion channel (email conversion rate, LinkedIn ad CPR, organic social CE).' },
  { time: 'Speaker prep', action: 'Speaker preparation calendar: 4 weeks before — speaker brief sent (audience profile, format, promotional asks, key takeaway expectations). Speaker LinkedIn post template provided — expected to post 2-3 weeks before event. 2 weeks before — slide deck due for review. Host reviews for: brand consistency, claim accuracy, timing (each section within allotted time), Q&A prompts built into slides. 1 week before — dry run (30-45 min): full run-through, timing verification (60-minute webinar: 30-35 min content, 15-20 min Q&A, 5-min housekeeping), Q&A practice, platform orientation, contingency for tech failure. 5 days before — final slide feedback, copy edits, CTA slide reviewed. Day before — confirmation: logistics email, backup dial-in number, host contact for day-of issues.' },
  { time: 'Post-webinar', action: 'Post-webinar follow-up calendar: day of event — recording uploaded within 4 hours, chat transcript reviewed for high-intent questions, attendee list exported with engagement data (% duration, questions asked, poll responses). 24 hours — attendee email (recording link, key takeaways, one CTA — demo, trial, or next event registration). 24 hours — no-show email (recording link, you missed it, same CTA — no-show open rate 30-40% on a well-crafted subject line). 48 hours — sales handoff: attendees with 80%+ duration + ICP criteria exported to sales queue. Sales outreach same day as handoff. 72 hours — attendee nurture email 2 (deeper resource — ebook, case study, or article on the session topic). Day 7 — sales follow-up attempt 2 for non-responded ICP attendees. Day 14 — final conversion email for non-converted attendees: on-demand version with CTA.' },
  { time: 'Monthly review', action: 'Monthly webinar performance review (45 minutes, first Monday): registrant count versus benchmark (200-400 target), registrant-to-attendee rate (40-60% benchmark), attendee-to-pipeline conversion rate (2-5% for product-focused webinars, 0.5-1% for educational CE), speaker performance (attendee satisfaction score, duration completion rate), and promotion channel performance (email registration conversion rate, LinkedIn CPR, organic social CE). Topic performance: which topics drove above-benchmark registration and above-benchmark pipeline. Post-webinar sequence performance: attendee email open rate, no-show email click rate, sales handoff conversion rate. Monthly output: one topic adjustment for following month, one promotion channel optimization, one post-webinar sequence refinement.' },
  { time: 'Quarterly reset', action: 'Quarterly webinar calendar reset (60 minutes, first Monday of each quarter): full-quarter performance analysis. Webinar pipeline contribution: total pipeline attributed to webinar program versus target, cost per pipeline opportunity (total webinar program cost divided by pipeline opportunities generated). Topic mix review: actual 50/30/20 versus target — which intent category drove highest pipeline conversion CE. Speaker mix review: internal versus external versus customer — conversion rate by speaker type. Platform performance: registration completion rate (drop-off at registration form), email deliverability to registrants, on-demand view rate (what percentage of no-shows watch recording). Annual anchor webinar planning: Q4 annual industry report webinar, Q1 trend report — longer lead time, higher production value, larger speaker CE. Webinar repurposing CE: which webinar recordings become evergreen content (replay email, on-demand landing page, blog post).' },
]

export default function WebinarMarketingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Webinar Marketing Calendar"
        title={
          <>
            Promotion starts 4-6 weeks out. Speaker dry run 1 week before.
            <br />
            <em className="not-italic text-gold">Post-webinar follow-up within 24 hours. Sales handoff at 48 hours. Monthly review updates topic mix.</em>
          </>
        }
        lede="A webinar program without a calendar produces under-promoted events, underprepared speakers, and post-event leads worked days too late. The webinar marketing calendar structures promotion over a 4-6 week window, speaker prep on a brief-dry run-slide review schedule, and post-webinar follow-up on a same-day schedule: recording within 4 hours, attendee email at 24 hours, sales handoff at 48 hours. The monthly review updates topic selection and promotion mix from registration and pipeline data. Momenties structures the full webinar marketing calendar."
        crumbs={[{ label: 'Webinar Marketing Calendar' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Webinar marketing calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a webinar calendar where promotion, speaker preparation, post-event follow-up, and pipeline attribution run on a predictable schedule.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Webinar marketing calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From calendar setup through the quarterly reset that updates topic mix, speaker strategy, and post-webinar pipeline attribution.</h2>
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
                &ldquo;Our webinar program was generating 120-160 registrants per event and we thought that was our ceiling. When we moved promotion start to 4-6 weeks ahead and added the partner co-promotion step, our average jumped to 290 registrants in the first quarter. The change was not the content — it was the lead time. The 48-hour post-webinar sales handoff was the change that moved pipeline numbers. We had been sending the attendee list to sales on Friday afternoons. Moving to 48-hour automated handoff, same day every time, meant sales was reaching out while people still remembered the webinar. Our webinar-to-pipeline conversion rate went from 0.8% to 3.1% in one quarter. The speaker dry run requirement was the thing speakers pushed back on the most and the thing that made the most visible difference on event quality. Three of our last four external speakers had never done a webinar for a software company audience before — the dry run caught that two of them had 45 minutes of content for a 30-minute slot, and we caught it a week before the event, not during it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Z</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Zoe M.</div>
                  <div className="text-xs text-muted-foreground">Demand Generation Manager, B2B SaaS company, 50-person GTM team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the webinar marketing calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every promotion deadline, speaker prep milestone, post-webinar follow-up, and pipeline review in a structured quarterly webinar program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Promotion calendar — 4-6 week window, save the date, primary email, social campaign, partner co-promotion',
                'Speaker brief — 4 weeks out, audience profile, format, promotional asks, key takeaway expectations',
                'Slide review and dry run — 2 weeks slide due, 1 week dry run, 5 days final review',
                'Post-webinar sequence — recording within 4 hours, email at 24 hours, sales handoff at 48 hours',
                'No-show sequence — recording link email at 24 hours, 7-day follow-up, 14-day final',
                'Topic mix — 50% educational, 30% product-focused, 20% customer story or panel',
                'Registration benchmarks — 200-400 per event, 40-60% registrant-to-attendee rate',
                'Monthly review — registrant count, pipeline conversion, speaker performance, channel attribution',
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
        title="Promotion 4-6 weeks out. Speaker dry run 1 week before. Post-webinar follow-up at 24 hours."
        subtitle="Webinar marketing calendar: 4-6 week promotion window, speaker prep schedule, 24-hour post-event follow-up sequence, 48-hour sales handoff, and monthly pipeline review. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Content calendar', href: '/content-calendar' }}
      />
    </>
  )
}
