import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Camera, Clock, Zap, BookOpen, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Teachers — Class schedules, deadlines, and marking time, organized',
  description:
    'Teachers manage class schedules, assessment deadlines, parent meetings, and marking time across multiple classes. Momenties adds photo-to-calendar for timetables, AI event input, and analytics for workload visibility.',
  alternates: { canonical: '/for/teachers' },
  openGraph: {
    title: 'Momenties for Teachers',
    description: 'Class schedules, deadlines, and marking time — organized.',
    url: '/for/teachers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Camera,
    title: 'Snap the school timetable',
    desc: 'Photograph the term timetable from the staffroom noticeboard or school portal. Every class, every room, every period added automatically. Setup in 2 minutes.',
  },
  {
    icon: BookOpen,
    title: 'Track marking and assessment deadlines',
    desc: 'Type "Year 10 essays due Friday" or "mark Year 12 mock exams by Thursday." Deadlines on your calendar before you forget them.',
  },
  {
    icon: Clock,
    title: 'Block marking and prep time',
    desc: '"Marking block every wednesday 4–6pm." Recurring block created in one sentence. Protected from the inevitable "quick chat" requests.',
  },
  {
    icon: Zap,
    title: 'Log parent meeting times fast',
    desc: 'Parent evening booking: "parent meetings Thursday 4–8pm every 10 minutes." Recurring template for the whole evening, set in 5 seconds.',
  },
]

const TERM_WORKFLOW = [
  { time: 'Start of term', action: 'Snap timetable photo. All classes added as recurring events for the term. Takes 2 minutes.' },
  { time: 'When deadlines announced', action: 'Type or voice-add the deadline immediately: "Year 11 coursework submission March 15." On calendar before you leave the meeting.' },
  { time: 'Weekly', action: 'Block marking time Sunday evening before the week fills. "3 hours marking Sunday 5pm" — done.' },
  { time: 'Parent evening', action: 'Create recurring 10-minute slots for the full evening. Print or share the booking link (scheduling links Q3 2026).' },
  { time: 'End of term', action: 'Analytics shows how much marking and prep time was actually used vs. scheduled. Useful for planning next term.' },
]

export default function ForTeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Teachers"
        title={
          <>
            Class schedules, marking,
            <br />
            <em className="not-italic text-gold">all organized in minutes.</em>
          </>
        }
        lede="Teachers manage more calendar complexity than most — multiple classes, assessment cycles, marking deadlines, and parent communications across the week. Momenties reduces the admin so you can focus on teaching."
        crumbs={[{ label: 'For Teachers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/education"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Education plan
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Education discount available</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How teachers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four teaching calendar problems solved.</h2>
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

      {/* Term workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Term workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A teaching term with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {TERM_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I snapped our school's timetable on the first day of term. Every class was in my calendar in 3 minutes. I used to spend an hour doing that manually. And I actually stuck to the marking blocks this time because they were visible.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tom R.</div>
                  <div className="text-xs text-muted-foreground">Secondary school English teacher, 7 years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Spend less time managing your schedule. Spend more time teaching."
        subtitle="Photo-to-calendar, fast input, and marking blocks. Free forever."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Education plan', href: '/education' }}
      />
    </>
  )
}
