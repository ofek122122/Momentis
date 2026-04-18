import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BookOpen, Clock, Camera, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Students — Snap your timetable, never miss a deadline',
  description:
    'Students juggle classes, deadlines, part-time jobs, and social life. Momenties lets you snap your timetable from a PDF, add events by voice between lectures, and see your week at a glance.',
  alternates: { canonical: '/for/students' },
  openGraph: {
    title: 'Momenties for Students',
    description: 'Snap your timetable. Never miss a deadline.',
    url: '/for/students',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Camera,
    title: 'Snap your timetable',
    desc: 'Got a PDF timetable? Screenshot from your university portal? Point Momenties at it and every lecture, tutorial, and lab becomes a recurring event in seconds.',
  },
  {
    icon: Zap,
    title: 'Add deadlines mid-lecture',
    desc: '"Essay due next Friday midnight" — type it in 4 seconds. Momenties parses the date, sets it, and you\'re done. No forms, no dropdowns.',
  },
  {
    icon: Clock,
    title: 'See your actual week',
    desc: 'Analytics shows how many hours you\'re in class, how much study time you\'ve actually blocked, and how much is unstructured. Most students are surprised.',
  },
  {
    icon: BookOpen,
    title: 'Block study sessions',
    desc: '"Study for exam every day at 7pm for 2 hours next week" — one sentence creates 7 events. Recurring study blocks that actually hold.',
  },
]

const SEMESTER_WEEK = [
  { time: 'Sunday evening', action: 'Set up next week\'s study blocks. Voice-add: "study session every day 7–9pm this week." Done in 8 seconds.' },
  { time: 'Monday lecture', action: 'Prof says "paper due April 30 at noon." Type it immediately: "paper due April 30 noon." Added.' },
  { time: 'Between classes', action: 'Friend messages about a group project meeting. Voice: "group project meeting Thursday 4pm Library." Done while walking.' },
  { time: 'Wednesday', action: 'Snap photo of the lab schedule pinned to the door. All 8 lab sessions added as recurring events.' },
  { time: 'Friday evening', action: 'Check analytics. How many hours of class this week? How much study time blocked vs. what you meant to do?' },
]

const TESTIMONIALS = [
  {
    quote: 'I have 6 subjects, a part-time job, and three group projects. Momenties is the first calendar app I\'ve actually used for more than a week.',
    name: 'Priya M.',
    role: '3rd year Computer Science',
    avatar: 'P',
  },
  {
    quote: 'Snapped my timetable PDF at the start of semester. Everything was on my calendar in 2 minutes. My old approach took an hour of manual entry.',
    name: 'Leo T.',
    role: 'Masters student, Architecture',
    avatar: 'L',
  },
]

export default function ForStudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Students"
        title={
          <>
            Snap your timetable.
            <br />
            <em className="not-italic text-gold">Never miss a deadline.</em>
          </>
        }
        lede="Between lectures, deadlines, part-time work, and group projects, students have the most complex calendars and the least time to manage them. Momenties gets out of your way."
        crumbs={[{ label: 'For Students' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/education"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Student & edu plans
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card · Student discount on Pro</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features that matter for students</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four ways students use Momenties.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Semester week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Real workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              A student week with Momenties.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {SEMESTER_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo feature callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Semester setup</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Start the semester in 2 minutes, not 2 hours.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most students start each semester by manually entering 40–80 recurring events into their calendar — one lecture at a time. That's an hour of work that adds zero value.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties' photo input reads timetable PDFs, screenshots of student portals, and printed class schedules. It identifies the recurring pattern (e.g. "Monday and Wednesday 10–11am, Weeks 1–13") and creates all events at once.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Most students spend less than 3 minutes on semester setup. The rest of the term, calendar management is measured in seconds per event, not minutes.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/features/photo" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              How photo-to-calendar works <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-7 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[0,1,2,3,4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-base text-foreground/90 leading-snug mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">{t.avatar}</div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free plan callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-gold/20 bg-gold/5 p-7">
              <p className="text-[9px] font-mono uppercase tracking-widest text-gold mb-3">For students</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Momenties Free is built for most students.</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                AI input, natural language parsing, voice add, and photo-to-calendar are all free. No time limit, no credit card. If you want analytics and cross-calendar sync, Pro is available at a student discount.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['AI text parsing', 'Voice add', 'Photo-to-calendar', 'Google Calendar sync', 'Mobile app (Q4)', 'Free forever'].map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
                >
                  Start free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/education" className="inline-flex items-center h-10 px-4 text-sm text-gold/70 hover:text-gold transition-colors">
                  Student discount info →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Semester starts fast. Calendar setup shouldn't slow it down."
        subtitle="Snap your timetable. Add deadlines by voice. Free forever."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Student & edu plans', href: '/education' }}
      />
    </>
  )
}
