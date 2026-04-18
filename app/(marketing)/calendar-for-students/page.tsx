import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Shield, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for Students — How to use a calendar to actually stay on top of school',
  description:
    'Most students use a calendar for classes and forget about it. The students who don\'t fall behind use their calendar for assignment deadlines, study blocks, and exam prep windows. Here\'s how.',
  alternates: { canonical: '/calendar-for-students' },
  openGraph: {
    title: 'Calendar for Students — Momenties',
    description: 'Assignment deadlines, study blocks, and exam prep on the student calendar.',
    url: '/calendar-for-students',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Assignment deadlines on the calendar',
    desc: 'Every assignment due date on the calendar the day the syllabus drops. Not in a to-do list. Not in your head. On the calendar — visible alongside everything else. No assignment disappears into an email thread.',
  },
  {
    icon: Shield,
    title: 'Study blocks before exams, not the night before',
    desc: 'Block study sessions 2 weeks before each exam. "Chem midterm — study block, monday tuesday wednesday 7-9pm." The study sessions are on the calendar before the semester gets busy. You don\'t find time — you made it.',
  },
  {
    icon: Zap,
    title: 'Voice capture from anywhere',
    desc: '"Research paper due friday at 5pm." Voice-captured walking out of class. "Study session tuesday 8pm 90 mins." Added in 10 seconds. Never add an assignment while standing at the whiteboard.',
  },
  {
    icon: BarChart3,
    title: 'Study time analytics',
    desc: 'Tag every study session. Analytics shows study hours per subject per week. Balanced? Or are you spending 80% of study time on the class you like and neglecting the one you need to pass?',
  },
]

const STUDENT_PATTERNS = [
  {
    pattern: 'Syllabus day — add everything',
    detail: 'Day one of each class: add every exam, every paper deadline, every quiz date. 15 minutes per syllabus, all semester visible. The students who don\'t fall behind do this.',
  },
  {
    pattern: 'Study blocks two weeks before exams',
    detail: 'Exam in 14 days? Block 6–8 study sessions now — before the week fills with other obligations. The sessions are on the calendar. They happen. Last-minute cramming optional.',
  },
  {
    pattern: 'Assignment windows, not just deadlines',
    detail: 'A deadline is when it\'s due. An assignment window is when you\'ll do it. "Paper due friday" + "paper writing — tuesday wednesday 7-9pm" = the paper gets written, not scrambled Thursday night.',
  },
  {
    pattern: 'Weekly review of upcoming deadlines',
    detail: 'Every Sunday: look at the next two weeks. What\'s due? What needs a study block? What got added to the calendar since last Sunday? 10 minutes, no surprises next week.',
  },
  {
    pattern: 'Balance the semester, not just this week',
    detail: 'Two exams on the same day is visible 6 weeks out. A paper and a presentation due the same week is a calendar problem — surfaced early enough to get an extension or adjust the workload.',
  },
]

const SEMESTER_CALENDAR = [
  { time: 'Week 1', action: 'All syllabi loaded. Every exam, deadline, and quiz on the calendar for the full semester. Study blocks pre-placed before the semester gets busy.' },
  { time: 'Each Monday', action: 'Weekly review: what\'s due this week and next? Study blocks confirmed. Any new assignments added from last week\'s classes.' },
  { time: '2 weeks before exams', action: 'Study session blocks placed for 10–14 days of distributed practice. Not cramming. Distributed. The calendar enforces the spacing.' },
  { time: 'Finals week', action: 'All exam times and locations confirmed on calendar. Study blocks in place. Library reservations and group study sessions already scheduled.' },
]

export default function CalendarForStudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for Students"
        title={
          <>
            Deadlines visible.
            <br />
            <em className="not-italic text-gold">Study blocks protected.</em>
          </>
        }
        lede="Most students use a calendar for class times and ignore it for everything else. The students who stay on top of school use their calendar for every deadline, every study block, and every exam prep window — making the whole semester visible before it gets overwhelming."
        crumbs={[{ label: 'Calendar for Students' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/students"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for students
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card · Student discount available</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How students use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four calendar habits that keep students ahead.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five patterns</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five calendar habits of students who don&apos;t fall behind.</h2>
          </Reveal>
          <div className="space-y-3">
            {STUDENT_PATTERNS.map((item, i) => (
              <Reveal key={item.pattern} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.pattern}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Semester calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From syllabus day to finals with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {SEMESTER_CALENDAR.map((step, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What students track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">A student&apos;s semester in analytics.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Study hours per subject per week',
                'Assignment deadlines visible weeks ahead',
                'Exam prep blocks placed and completed',
                'Deadline hit rate across the semester',
                'Study time vs. leisure time balance',
                'Weekly workload trend over the semester',
                'Upcoming exam and deadline density',
                'Voice capture from class — no typing required',
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
        title="The whole semester visible. Every deadline met."
        subtitle="Assignment tracking, study block scheduling, and semester analytics. Free for students."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Student planner guide', href: '/for/students' }}
      />
    </>
  )
}
