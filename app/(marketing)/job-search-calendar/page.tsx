import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Job Search Calendar — how to structure your job search so it moves forward every week',
  description:
    'A job search without a calendar structure becomes reactive — you apply when you remember and follow up when you feel anxious. This guide covers weekly job search time blocks, pipeline stage tracking on a calendar, follow-up timing, networking cadence, and how to run parallel tracks without losing momentum.',
  alternates: { canonical: '/job-search-calendar' },
  openGraph: {
    title: 'Job Search Calendar',
    description: 'Structure your job search so it moves forward every week.',
    url: '/job-search-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Job search is a pipeline — manage it like one, not like a to-do list',
    desc: 'A job search to-do list has no velocity. A pipeline has stages, conversion rates, and weekly throughput. Your calendar should reflect the pipeline: a weekly new-application block (top of funnel), a weekly follow-up block (mid-funnel), and a weekly networking block (referral generation). Each stage has a weekly calendar commitment before the week starts. Reacting to job postings as they appear — applying when you find them, following up when you remember — produces inconsistent throughput. Consistent weekly blocks produce consistent pipeline movement.',
  },
  {
    icon: Clock,
    title: 'Follow-up timing is a calendar event, not a feeling',
    desc: 'The most common job search mistake is following up based on anxiety level rather than timing strategy. Standard follow-up timing: first follow-up 5 business days after application (if no acknowledgment), second follow-up 7 business days after first (if still no response), interview thank-you within 24 hours, post-interview follow-up 5 business days after stated decision timeline. These are calendar events set at the moment of application or interview, not reactive decisions. Calendar-based follow-up removes the psychological burden of deciding whether to follow up.',
  },
  {
    icon: BarChart3,
    title: 'Separate application research from application writing — they require different blocks',
    desc: 'Job research (identifying target companies, reading job descriptions, checking employee profiles, understanding the role) and application writing (resume tailoring, cover letter, referral outreach) are cognitively different tasks. Research is additive and can be done in scattered time. Writing requires concentrated focus. Schedule a 30-minute weekly research block for pipeline building and a 90-minute weekly writing block for application production. Research done in the writing block produces mediocre applications. Applications written without adequate research produce generic submissions.',
  },
  {
    icon: Users,
    title: 'Networking is a weekly calendar event, not something you do when you need it',
    desc: 'Networking initiated when you need a job produces transactional interactions that rarely result in referrals. Networking as a weekly calendar practice produces genuine relationships that produce referrals when you need them. Weekly networking block (30 minutes): reconnect with one person from a previous role, reach out to one person at a target company, attend one virtual event or comment substantively on one industry post. The weekly networking block is not optional. Referral-sourced applications convert to interviews at 2–4x the rate of direct applications.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Weekly blocks', action: 'Four standing weekly blocks set before the job search begins: (1) Monday 9–9:30 AM — pipeline review: which applications are in which stage, which follow-ups are due this week, which interviews are scheduled. (2) Tuesday 9–10:30 AM — application writing: resume tailoring, cover letters, referral outreach for this week\'s target roles. (3) Wednesday 9–9:30 AM — networking: reconnection messages, target company outreach, event attendance. (4) Friday 9–9:30 AM — research: identify next week\'s target roles, add to pipeline tracker, schedule next week\'s application blocks.' },
  { time: 'Application log', action: 'At the moment of each application: create a calendar event for 5 business days later — "Follow-up: [Company] [Role]." This removes the decision of whether to follow up and when. If a response arrives before the follow-up date, cancel the event. If no response, the follow-up prompt is already on the calendar. Standard message for first follow-up: brief, professional, forward-looking ("Following up on my application for X — wanted to confirm receipt and reiterate my interest"). 80 words maximum.' },
  { time: 'Interview prep', action: 'Upon receiving an interview invitation: block 90 minutes of company research and interview prep the day before. Block 30 minutes immediately after the interview for notes — while the conversation is fresh. Block a 24-hour deadline event for the thank-you message. Block the stated decision timeline + 5 business days for the post-decision follow-up. All four events created the moment the interview is confirmed, not the night before the interview.' },
  { time: 'Pipeline review', action: 'Monday morning 30-minute pipeline review: applications submitted this week, applications awaiting response (with follow-up dates), active interview stages, offers pending, and positions to remove from pipeline (no response after second follow-up, or role filled). This is operational — no new research, no writing. Pipeline review answers: what is due this week, what should be deprioritized. Five minutes maximum per application status update.' },
  { time: 'Offer stage', action: 'Upon receiving an offer: (1) verbal acknowledgment and request for written offer — "Thank you, I\'ll review the written offer carefully." Do not negotiate verbally in the first conversation. (2) 48-hour block to read the full offer including benefits, equity, and non-compete. (3) Negotiation call scheduled within 72 hours of receiving written offer. (4) Decision deadline set by employer placed in calendar with a 48-hour buffer — negotiate before the deadline, decide before the buffer. (5) Declination calls to all other active interviewers within 24 hours of accepting.' },
  { time: 'Weekly metrics', action: 'Track weekly: applications submitted, response rate (responses ÷ applications), phone screen rate (phone screens ÷ responses), first interview rate (first interviews ÷ phone screens), and offer rate (offers ÷ first interviews). Review metrics monthly, not weekly — weekly variance is noise. Monthly trends reveal whether the issue is top-of-funnel (not enough applications or wrong targets), mid-funnel (phone screen conversion), or late funnel (interview conversion). Each problem has a different fix.' },
  { time: 'Monthly audit', action: 'End-of-month 30-minute audit: which companies are in pipeline versus which companies were researched but never applied to (and why). Which application types are converting (referral, direct, recruiter-sourced). Which roles are advancing versus which are consistently going dark. Adjust for the next month: add more referral-sourced applications if direct is under-converting, narrow target company list if pipeline is too broad to research deeply, or expand if pipeline is too narrow to produce interview velocity.' },
]

export default function JobSearchCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Job Search Calendar"
        title={
          <>
            Pipeline thinking for a job search.
            <br />
            <em className="not-italic text-gold">Weekly blocks set before the search begins. Follow-up on the calendar, not in your head.</em>
          </>
        }
        lede="A job search to-do list has no velocity. A job search calendar has four weekly standing blocks — pipeline review, application writing, networking, and research — set before the first application is submitted. Every application generates a calendar event for the follow-up date. Every interview generates four follow-on calendar events. The pipeline moves forward every week because the calendar makes it move, not because you remember to push it. Momenties structures the full job search calendar."
        crumbs={[{ label: 'Job Search Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/interview-prep-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Interview prep
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Job search calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a job search calendar that produces consistent forward movement.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Job search calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The complete job search calendar from weekly standing blocks through offer stage and monthly pipeline audit.</h2>
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
                &ldquo;I had applied to 40 jobs over two months with no structure — I applied when I saw something interesting, followed up when I felt anxious, and networked when I felt guilty about not networking. My response rate was under 5%. When I set up four weekly standing blocks and started creating follow-up calendar events at the moment of application, two things changed immediately: I stopped applying to roles I hadn&apos;t researched properly because the writing block forced me to have something real to say, and I stopped forgetting to follow up because the follow-up was already on the calendar. My response rate went to 18% in the next month. The pipeline thinking was the unlock — I could see which stage had the problem.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">James W.</div>
                  <div className="text-xs text-muted-foreground">Product manager, 3-month active job search</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the job search calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every standing block and event in a structured job search pipeline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Weekly pipeline review — Monday, 30 min, standing block',
                'Weekly application writing — Tuesday, 90 min, standing block',
                'Weekly networking — Wednesday, 30 min, standing block',
                'Weekly research — Friday, 30 min, standing block',
                'Follow-up event created at moment of application — 5 business days',
                'Interview prep block — 90 min the day before each interview',
                'Post-interview notes — 30 min immediately after each interview',
                'Monthly pipeline audit — conversion rates by stage and application source',
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
        title="Job search pipeline. Weekly momentum. Follow-up on the calendar."
        subtitle="Four standing weekly blocks, application follow-up timing as calendar events, interview prep structure, and monthly pipeline audit. Pipeline thinking for a job search. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Interview prep calendar', href: '/interview-prep-calendar' }}
      />
    </>
  )
}
