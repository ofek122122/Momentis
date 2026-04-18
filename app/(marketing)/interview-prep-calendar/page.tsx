import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Briefcase, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interview Prep Calendar — How to schedule preparation that builds confidence before interviews',
  description:
    'An interview prep calendar schedules research sessions, mock interviews, and follow-up windows in the days before each interview — building systematically rather than cramming the night before. Most poor interview performances are not caused by lack of ability — they are caused by arriving unprepared at a preparation problem that was visible on the calendar weeks earlier.',
  alternates: { canonical: '/interview-prep-calendar' },
  openGraph: {
    title: 'Interview Prep Calendar — Momenties',
    description: 'Schedule preparation that builds confidence before every interview.',
    url: '/interview-prep-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Briefcase,
    title: 'Company research scheduled immediately after confirmation',
    desc: '"Company research block — 90 minutes, 5 days before interview." "Role and JD analysis — 30 minutes, 4 days before." "Competitor and market context — 45 minutes, 3 days before." Research blocks placed when interview is confirmed — not the night before. Candidates who research in advance ask substantive questions. Candidates who research the morning of ask questions the interviewer hears every day.',
  },
  {
    icon: Clock,
    title: 'Mock interview windows placed 48 hours before each interview',
    desc: '"Mock interview — 60 minutes with a peer, 2 days before interview." "Technical mock — coding/case/technical dry run, 48 hours before." Mock interviews placed as calendar events when the real interview is confirmed. Practice that happens 48 hours before produces better performance than practice that happens 10 minutes before. The calendar forces the preparation into the right window.',
  },
  {
    icon: BarChart3,
    title: 'STAR story bank built in advance, not on demand',
    desc: '"STAR story review and drafting — 2 hours, 1 week before interview." "Story selection for role — 30 minutes, 2 days before." Behavioral interview preparation placed as standing blocks, not last-minute tasks. A STAR story bank built over a week produces specific, polished answers. A STAR story assembled in the parking lot produces generic, forgettable ones.',
  },
  {
    icon: Shield,
    title: 'Follow-up windows placed before the interview ends',
    desc: '"Thank-you note draft — 30 minutes, same evening as interview." "Follow-up email — 24 hours after if no response in 5 days." "Reflect and debrief — 15 minutes, same day." Follow-up windows placed before the interview happens — not as reactive tasks when it ends. Candidates who draft a thank-you note within 2 hours of leaving the building are a small minority. The calendar makes it a standing obligation.',
  },
]

const PREP_STEPS = [
  {
    step: 'Build a standing weekly prep block before the search begins',
    detail: '"Interview prep — standing, 2 hours, wednesday evening." A standing weekly prep block placed at the start of the job search. Practice problems, behavioral stories, industry reading, and network outreach placed in this block before specific interviews are scheduled. Candidates with 8 weeks of standing prep blocks arrive at first-round interviews significantly better prepared than those who started prep when the interview was confirmed.',
  },
  {
    step: 'Place a preparation sequence the day an interview is confirmed',
    detail: '"Company research — 5 days before." "JD and role analysis — 4 days before." "STAR story selection — 3 days before." "Mock interview — 2 days before." "Logistics and Q&A review — day before." Prep sequence placed immediately when the interview is confirmed. The sequence becomes a calendar commitment, not a mental checklist. Total prep time: 4-5 hours distributed over 5 days — not 4-5 hours the night before.',
  },
  {
    step: 'Place technical or case preparation for specialized interviews',
    detail: '"Technical prep block — LeetCode medium, 90 minutes, daily." "Case prep block — framework review and practice case, 75 minutes." "System design review — 60 minutes." "Domain knowledge review — industry-specific." Technical preparation placed as recurring daily blocks during active interview search. A candidate who completes 20 coding problems before a technical interview performs differently than one who reviews notes.',
  },
  {
    step: 'Schedule the debrief immediately after the interview',
    detail: '"Interview debrief — 20 minutes, same day, within 2 hours of interview." Debrief placed before the interview happens. Questions asked, answers given, reactions observed, follow-up research needed. Debrief notes inform the thank-you note, inform follow-up questions, and build institutional knowledge across a multi-stage process. A debrief written 6 hours later omits details a debrief written 90 minutes later captures.',
  },
  {
    step: 'Place offer decision windows before deadlines, not after',
    detail: '"Offer decision block — 2 hours, 3 days before deadline." "Compensation research — 4 hours, 1 week before offer deadline." "Reference check window — confirm referees available, immediately on offer." Offer decision preparation placed when the offer is received. Candidates who evaluate offers the day before the deadline make worse decisions than those who scheduled deliberate time to research comparables, consult advisors, and negotiate.',
  },
  {
    step: 'Conduct a search retrospective after each closed process',
    detail: '"Search retrospective — 45 minutes, after each offer or rejection." What interview questions were hard? What preparation worked? What research was missing? Which STAR stories landed? The retrospective informs the next preparation cycle. Candidates who improve across a search do so because they identified patterns. Candidates who repeat the same process get the same results.',
  },
]

const PREP_FAILURES = [
  { failure: 'Preparation scheduled the night before', consequence: 'Company research, STAR story review, and logistics confirmed the night before the interview produces surface-level familiarity that experienced interviewers can distinguish from substantive preparation. The 5-day prep sequence distributes the work into windows where it can actually be absorbed. Cramming is a memory task. Interviewing is a performance task.' },
  { failure: 'Mock interview skipped because preparation feels good', consequence: 'Preparation that has not been tested under pressure is not the same as preparation that has. A candidate who can explain their background in conversation with a peer can do it in an interview. A candidate who has only reviewed notes in private often cannot. The mock interview is the test, not the preparation.' },
  { failure: 'Thank-you note sent three days after the interview', consequence: 'A thank-you note sent within two hours of an interview is a different communication than one sent three days later. Two-hour notes reference specific conversation details. Three-day notes are generic. Interviewers notice the difference. The calendar must place the thank-you window the evening of the interview — not when the candidate remembers to send it.' },
  { failure: 'No debrief after rejection', consequence: 'Interview debriefs written after rejections identify the preparation gap — the question that was hard, the story that fell flat, the research that was missing. Candidates who do not debrief after rejection repeat the same preparation failures. A 20-minute debrief placed on the calendar immediately after the interview captures the information before it fades.' },
]

export default function InterviewPrepCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Interview Prep Calendar"
        title={
          <>
            Preparation distributed. Confidence built.
            <br />
            <em className="not-italic text-gold">No interview arrives without a prep sequence.</em>
          </>
        }
        lede="Most poor interview performances are not caused by lack of ability — they are caused by cramming the night before a preparation problem that was visible on the calendar for five days. An interview prep calendar places a research-to-mock-interview sequence 5 days before every confirmed interview, builds a standing weekly prep block before the search begins, and schedules the debrief before the interview ends — so every interview is preceded by systematic preparation."
        crumbs={[{ label: 'Interview Prep Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/personal-development-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Personal development calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties builds systematic interview preparation.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build an interview prep calendar that produces systematic preparation.</h2>
          </Reveal>
          <div className="space-y-3">
            {PREP_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four preparation patterns that produce preventable poor interviews.</h2>
          </Reveal>
          <div className="space-y-3">
            {PREP_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Prep analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for interview preparation discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Prep sequence completion rate per interview',
                'Days of lead time before each interview',
                'Mock interview completion rate',
                'Company research hours per interview',
                'Thank-you note turnaround time',
                'Debrief completion rate after each interview',
                'STAR story library size and review frequency',
                'Offer decision lead time before deadline',
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
        title="Preparation distributed. Confidence built."
        subtitle="5-day prep sequences, mock interview windows, debrief calendar, and standing weekly preparation blocks. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Personal development calendar', href: '/personal-development-calendar' }}
      />
    </>
  )
}
