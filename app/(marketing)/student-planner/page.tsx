import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Camera, Clock, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Planner App — Timetables, deadlines, and study blocks in one place',
  description:
    'The best student planner app snaps your timetable from a photo, captures assignment deadlines in seconds, and protects study blocks. Momenties is free for students and syncs with Google Calendar.',
  alternates: { canonical: '/student-planner' },
  openGraph: {
    title: 'Student Planner App — Momenties',
    description: 'Snap timetable. Capture deadlines. Protect study blocks.',
    url: '/student-planner',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Camera,
    title: 'Snap your timetable',
    desc: 'Photograph your class timetable at the start of semester. AI extracts every class, lab, and tutorial — all added to your calendar in 30 seconds. Never manually enter a class again.',
  },
  {
    icon: Zap,
    title: 'Deadline capture as fast as professors speak',
    desc: '"Essay due friday 5pm." "Mid-term exam wednesday 9am." Voice-add during lecture. On calendar before the professor moves on. Zero deadlines missed.',
  },
  {
    icon: Shield,
    title: 'Study blocks that survive the week',
    desc: 'Block study time for every subject. Focus mode silences social apps and notifications. The blocks survive the week\'s social pressure because the calendar defends them.',
  },
  {
    icon: Clock,
    title: 'Exam season schedule',
    desc: 'Photo of the exam schedule PDF → all exams added instantly. Study block schedule built around them. Exam season structured before revision panic sets in.',
  },
]

const SEMESTER_SETUP = [
  { time: 'Week 1', steps: ['Photo of timetable → all classes added', 'Recurring study blocks set for each subject', 'Exam dates from course outline added by voice'] },
  { time: 'Ongoing', steps: ['Assignment deadlines added as they\'re announced', 'Study blocks adjusted before busy social weeks', 'Daily Brief shows the full day before first class'] },
  { time: 'Exam season', steps: ['Photo of exam schedule → all exams added', 'Revision blocks structured around exam dates', 'Analytics shows study hours per subject — balance it'] },
]

const FREE_FOR_STUDENTS = [
  'Unlimited events and classes',
  'Photo timetable import',
  'Voice deadline capture',
  'Natural language input',
  'Recurring study blocks',
  'Daily Brief',
  'Google Calendar sync',
  'Mobile web app',
]

export default function StudentPlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Planner"
        title={
          <>
            Semester structured.
            <br />
            <em className="not-italic text-gold">No deadline missed.</em>
          </>
        }
        lede="Students need to get their timetable into a calendar in 30 seconds, capture every assignment deadline as fast as professors announce them, and protect study time that actually survives the week. Momenties does all three — free."
        crumbs={[{ label: 'Student Planner' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card · Works on your phone</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Built for how students actually work.</h2>
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

      {/* Semester setup guide */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Setup guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Semester setup in 10 minutes.</h2>
          </Reveal>
          <div className="space-y-4">
            {SEMESTER_SETUP.map((phase, i) => (
              <Reveal key={phase.time} delay={i * 60}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-3">{phase.time}</p>
                  <div className="space-y-1.5">
                    {phase.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free plan callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-1.5">Everything students need. Free forever.</h3>
              <p className="text-xs text-muted-foreground mb-4">No credit card. No trial countdown. No features stripped away after 14 days.</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {FREE_FOR_STUDENTS.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Set up the semester before the first lecture ends."
        subtitle="Snap timetable, voice deadlines, study blocks. Free forever, no card needed."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'For students', href: '/for/students' }}
      />
    </>
  )
}
