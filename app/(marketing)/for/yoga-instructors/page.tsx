import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Yoga Instructors — CE tracking, class scheduling, and teaching analytics',
  description:
    'Yoga instructors manage Yoga Alliance CE requirements, class schedules, teacher training programs, and continuing education. Momenties tracks CE hours, keeps renewal deadlines visible, and organizes teaching time by venue or style.',
  alternates: { canonical: '/for/yoga-instructors' },
  openGraph: {
    title: 'Momenties for Yoga Instructors',
    description: 'Yoga Alliance CE tracking and teaching calendar management.',
    url: '/for/yoga-instructors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Yoga Alliance CE hours by category',
    desc: 'Tag every CE event by Yoga Alliance category: techniques, methodology, anatomy, yoga philosophy, ethics, professional development. Analytics shows hours per category against your RYT renewal requirement.',
  },
  {
    icon: Clock,
    title: 'RYT renewal and teacher training deadlines',
    desc: '"Yoga Alliance renewal march 31." "200-hour training completion deadline." "Advanced certification expiry." All compliance deadlines on calendar. Visible 60 days out.',
  },
  {
    icon: Users,
    title: 'Class schedule organization',
    desc: 'Tag classes by venue, style, or student group. Analytics shows teaching hours by type: studio vs. private, vinyasa vs. restorative, corporate vs. community. See where your time actually goes.',
  },
  {
    icon: BarChart3,
    title: 'Teaching and training analytics',
    desc: 'Track CE workshops, immersions, and self-practice time separately from teaching. See the ratio of teaching to professional development. Know if you\'re investing enough in your own practice.',
  },
]

const YOGA_WORKFLOW = [
  { time: 'Year start', action: 'Yoga Alliance CE audit: hours per category, identify gaps, add immersions and trainings to calendar for the year.' },
  { time: 'Monthly', action: 'Self-practice block (recurring). Mentorship or peer supervision meeting (templated monthly). Both on calendar for the year.' },
  { time: 'CE event', action: '"Anatomy for yoga workshop, saturday april 19, 6 hours, anatomy category." Tagged and added. CE counter updates.' },
  { time: 'Mid-cycle', action: 'Analytics: 30 of 45 required CE hours, philosophy and ethics categories still need hours. Plan fall immersion accordingly.' },
  { time: 'Renewal', action: 'YA renewal visible in Daily Brief for 60 days prior. Application deadline blocked. CE documentation checklist on calendar.' },
]

export default function ForYogaInstructorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Yoga Instructors"
        title={
          <>
            Every CE hour tracked.
            <br />
            <em className="not-italic text-gold">RYT maintained.</em>
          </>
        }
        lede="Yoga instructors manage Yoga Alliance CE requirements across multiple categories, teaching schedules across venues, teacher training programs, and personal practice. Momenties tracks CE by category, keeps renewal deadlines visible, and analyzes teaching time by style and context."
        crumbs={[{ label: 'For Yoga Instructors' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How yoga instructors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for yoga teaching practice.</h2>
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

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Teaching calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and renewal management through the cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {YOGA_WORKFLOW.map((step, i) => (
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
                &ldquo;Teaching 14 classes a week at 3 studios, I had no idea how much of my time was going to commute and admin vs. actual teaching. The analytics showed me a pattern I needed to see. I restructured my schedule and gained 6 hours back.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sofia M., E-RYT 500</div>
                  <div className="text-xs text-muted-foreground">Yoga instructor, 3 studios, 14 classes/week</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CE tracked. RYT maintained. Teaching time optimized."
        subtitle="CE category analytics, Yoga Alliance renewal reminders, and class schedule management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
