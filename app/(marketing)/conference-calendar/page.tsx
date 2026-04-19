import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conference Calendar — How to make professional conferences produce outcomes instead of highlights reels',
  description:
    'A conference calendar places the pre-conference preparation window before travel, structures the on-site days with scheduled follow-up capture, places the post-conference debrief before the action items expire, and books the follow-up calls within 5 business days of return — so conferences produce outcomes instead of business cards that stay in a coat pocket.',
  alternates: { canonical: '/conference-calendar' },
  openGraph: {
    title: 'Conference Calendar — Momenties',
    description: 'Make professional conferences produce outcomes instead of highlights reels.',
    url: '/conference-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Pre-conference preparation window placed 2 weeks before travel',
    desc: '"Pre-conference prep: [travel - 14 days] to [travel - 1 day]." Pre-conference preparation placed as a dedicated window 2 weeks before the conference begins. Prep window: identify the 3-5 must-attend sessions with registered outcomes, identify 5-10 specific people to connect with (names, company, what to discuss), and book any dinner or coffee slots before the conference schedule fills. Conferences attended without a preparation window produce reactive scheduling — sessions chosen by proximity rather than relevance, connections made by seating rather than intention.',
  },
  {
    icon: Clock,
    title: 'Follow-up capture window placed each evening during the conference',
    desc: '"Evening capture: [each conference day] at 9 PM." 30-minute follow-up capture placed each evening during the conference. Capture window: who did I meet today that I want to follow up with, what was the key insight from each session I attended, and what are the 3 actions I want to take based on today. Conference follow-up captured the evening of the interaction has a 70% conversion rate to actual follow-up. Conference follow-up captured on the flight home has a 20% conversion rate. Conference follow-up captured the week after return has a 5% conversion rate.',
  },
  {
    icon: BarChart3,
    title: 'Post-conference debrief placed within 48 hours of return',
    desc: '"Post-conference debrief: [return + 48 hours]." Structured debrief placed within 48 hours of return — not the following week when the conference energy has dissipated. Debrief agenda: top 3 strategic insights, top 5 follow-up actions with owners and due dates, and one thing that changed how I think about the business. Post-conference debrief placed 48 hours after return converts conference energy into strategic action before it becomes a fond memory. Debriefs scheduled for "the week after" happen in week 3, when the conference is history.',
  },
  {
    icon: Shield,
    title: 'Follow-up calls booked within 5 business days of return',
    desc: '"Follow-up call — [name], [company]: [return + 5 business days]." Follow-up calls booked within 5 business days of return. People you met at a conference remember the conversation most vividly in the 5 days after the conference ends — follow-up calls in that window have context that follow-up calls in week 3 have to rebuild. Booked within 5 days means the follow-up is placed before the recipient forgets who you are. Follow-up emails sent without a booked call create threads. Follow-up calls booked within 5 days create relationships.',
  },
]

const CONF_STEPS = [
  {
    step: 'Place the pre-conference preparation window 2 weeks before travel',
    detail: '"Pre-conference prep: [travel - 14 days]." Prep window includes 3 outputs: (1) session list with registered outcomes — not "attend keynote" but "identify the 3 pricing model innovations I can bring back for Q3 planning"; (2) connection target list — 5-10 specific people with their name, company, what you want to discuss, and how you will find them; (3) social commitments booked — dinners, coffee, side events filled before the conference networking calendar fills with reactive invitations. Preparation window converts a reactive conference experience into a structured outcome-generation exercise.',
  },
  {
    step: 'Place the outreach-before-arrival window 1 week before the conference',
    detail: '"Pre-arrival outreach: [travel - 7 days]." Outreach to connection targets 1 week before arrival. "I\'ll be at [conference] next week and wanted to connect — are you available for coffee on [day] morning?" People who have confirmed a meeting before the conference begins are 3x more likely to produce a valuable conversation than unplanned hallway introductions. LinkedIn message sent 1 week before is read in context of an upcoming shared experience. LinkedIn message sent 3 weeks before arrives too early. Message sent at the conference is noise.',
  },
  {
    step: 'Place the evening capture window each day of the conference',
    detail: '"Evening capture: [each conference day] at 9 PM, 30 minutes." Evening capture is 3 questions: who did I meet today that I want to follow up with (name, company, what we discussed, what I said I would do), what was the highest-value insight from today, and what would I do differently tomorrow. Capture at 9 PM while the day is current. Capture at midnight when tired produces incomplete notes. Capture on the flight home produces names without context. Names captured the evening of introduction with context attached convert to relationships. Names captured without context convert to LinkedIn connections that neither party acts on.',
  },
  {
    step: 'Place the post-conference debrief within 48 hours of return',
    detail: '"Post-conference debrief: [return + 48 hours]." 45-minute structured debrief: (1) What are the top 3 strategic insights from this conference — things that change how I think about the business, the market, or my role? (2) What are the top 5 follow-up actions with owners and due dates? (3) Should I attend next year — what would need to be true for this conference to produce ROI? Debrief placed within 48 hours before the conference becomes nostalgia. Action items with owners and due dates placed during the debrief — not as a follow-up to the debrief.',
  },
  {
    step: 'Place follow-up calls within 5 business days of return',
    detail: '"Follow-up call — [name]: [return + 5 business days]." Follow-up calls to the top 3-5 connections placed within 5 business days. Call placed within 5 days of return lands when: (a) the recipient still remembers the conversation, (b) the recipient is back in their routine and has time, (c) the context of the conference is shared and recent. "Great meeting you at [conference] — I wanted to follow up on what we discussed about [specific topic]" is a warm call within 5 days. The same call at week 3 is a cold call with context the recipient may not remember. Calendar the call, not just the email.',
  },
  {
    step: 'Place the conference ROI review 30 days after return',
    detail: '"Conference ROI review: [return + 30 days]." 30-day review: which follow-up calls happened and produced outcomes, which action items from the debrief were completed, which strategic insights were applied to actual decisions, and was the time and cost justified? ROI review placed 30 days after return converts conference attendance from an expense to a measurable investment. Conferences reviewed at 30 days produce a go/no-go decision for next year based on outcomes. Conferences never reviewed produce attendance driven by habit or FOMO rather than ROI.',
  },
]

const CONF_FAILURES = [
  { failure: 'No pre-conference preparation — sessions chosen by schedule, connections made by seating', consequence: 'Conferences attended without preparation produce reactive experiences. Sessions are chosen from the printed schedule in the morning. Connections are made with whoever is seated at the same lunch table. The conference produces an enriching experience and a stack of business cards from people who were geographically proximate. Pre-conference preparation converts the conference from a passive experience into a structured exercise with identified targets and measurable outcomes. The preparation window is not about efficiency — it is about converting a 3-day investment of time and travel budget into outcomes rather than highlights.' },
  { failure: 'Follow-up notes captured on the flight home — names without context', consequence: 'Business cards collected during a 3-day conference produce names without context on the flight home. "Talk to Sarah about partnerships" written on a napkin on the flight home produces a LinkedIn search for Sarah, a discovery that there are 47 Sarah [Lastname]s in the industry, and an abandoned follow-up. Evening capture during the conference produces: "Sarah Chen, VP Partnerships, [Company] — we discussed their integration approach for enterprise clients; she wants to see our API docs; I said I would send them by Friday." Context captured the evening of the conversation converts to a follow-up action. Context captured on the flight home converts to a business card in a coat pocket.' },
  { failure: 'Post-conference debrief scheduled for "next week" — happens in week 3 at earliest', consequence: 'Post-conference debriefs scheduled for "next week" happen in week 3, when the action items from the conference are either completed by default or expired by neglect. Week 3 debrief produces a retrospective of what happened rather than a decision about what to do. Post-conference debrief placed within 48 hours of return captures the conference energy at its peak and converts it into structured action before the daily work reabsorbs the returning attendee. 48-hour placement is not arbitrary — it is the window between return (when the conference is recent) and the first full work day (when the calendar fills with accumulated work).' },
  { failure: 'Follow-up calls delayed to "when I have a quiet week" — never made', consequence: 'Follow-up calls deferred to "when I have a quiet week" are never made. There is no quiet week. The conference connection that seemed like a high-value relationship at the conference becomes a LinkedIn connection request accepted 3 weeks later by someone who has forgotten the conversation. Follow-up calls placed within 5 business days of return land in the window where both parties share context, remember the conversation, and have a specific reason for the call. Calls placed in week 3 require rebuilding context that week 1 calls already have. The 5-business-day placement is a forcing function — it creates urgency before the conference connection becomes a cold lead.' },
]

export default function ConferenceCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Conference Calendar"
        title={
          <>
            Prepared before arrival. Followed up within 5 days.
            <br />
            <em className="not-italic text-gold">Debrief within 48 hours. ROI reviewed at 30 days.</em>
          </>
        }
        lede="Most conferences produce interesting conversations and expired follow-up intentions — not because the conference was wrong but because the preparation, capture, and follow-up were never calendared. A conference calendar places the preparation window 2 weeks before travel, structures a 30-minute evening capture each conference day, schedules the post-conference debrief within 48 hours of return, and books follow-up calls within 5 business days — so conferences produce outcomes instead of business cards that stay in a coat pocket."
        crumbs={[{ label: 'Conference Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/networking-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Networking calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures conference attendance so preparation is intentional and follow-through is inevitable.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a conference calendar where every session has an intended outcome and every connection has a follow-up date.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONF_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four conference patterns that produce enriching experiences and no measurable outcomes.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONF_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Conference analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for conference ROI discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Pre-conference preparation window completion (14 days before travel)',
                'Connection target list size and pre-arrival outreach completion rate',
                'Evening capture completion rate (sessions attended per conference day)',
                'Post-conference debrief completion within 48 hours of return',
                'Follow-up call completion rate within 5 business days',
                'Follow-up calls that produced a next step vs. total follow-up calls',
                'Action items from debrief completed within 30 days',
                '30-day ROI review completion and go/no-go decision documented',
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
        title="Prepared before arrival. Followed up within 5 days."
        subtitle="Pre-conference preparation window, evening capture, 48-hour debrief, and 5-day follow-up calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Networking calendar', href: '/networking-calendar' }}
      />
    </>
  )
}
