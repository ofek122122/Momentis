import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Music, Calendar, BarChart3, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Musicians — Gig scheduling, rehearsal tracking, and practice time protection',
  description:
    'Musicians juggle gig bookings, rehearsals, practice sessions, studio dates, and lessons. Momenties makes every appointment instant to schedule, protects practice blocks, and tracks gigging hours across venues.',
  alternates: { canonical: '/for/musicians' },
  openGraph: {
    title: 'Momenties for Musicians',
    description: 'Gig scheduling and practice time protection for working musicians.',
    url: '/for/musicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Gig booking in seconds',
    desc: '"Gig at The Blue Room saturday 9pm, 3 hours." Done. Tagged "gig," linked to venue name. Full month of gigs visible in one calendar view without scrolling through notes or texts.',
  },
  {
    icon: Shield,
    title: 'Protected practice blocks',
    desc: '"Practice block every morning 10am-12pm." Recurring, protected. Focus mode silences the phone. Your craft time survives the week\'s chaos because the calendar defends it.',
  },
  {
    icon: BarChart3,
    title: 'Practice vs. performance analytics',
    desc: 'Tag practice, rehearsal, gigging, teaching. Analytics shows the breakdown by week. Most working musicians discover they\'re spending far more time on logistics than on music.',
  },
  {
    icon: Music,
    title: 'Rehearsal and studio coordination',
    desc: '"Band rehearsal wednesday 7pm, 3 hours, all 4 members." Team overlay shows everyone\'s availability. Find the slot that works for the whole band without five texts back and forth.',
  },
]

const MUSICIAN_WEEK = [
  { time: 'Daily', action: 'Practice block 10am-12pm. Protected. Recurs every weekday. Notifications paused. Non-negotiable.' },
  { time: 'Wednesday', action: 'Band rehearsal 7-10pm. Confirmed via group availability overlay. No back-and-forth.' },
  { time: 'Thursday', action: 'Studio session 2-6pm. Voice-added when booking confirmed: "studio session thursday 2pm, 4 hours."' },
  { time: 'Saturday', action: 'Gig at The Blue Room 9pm. Soundcheck 7:30pm. Both on calendar, both tagged "gig."' },
  { time: 'Monthly', action: 'Analytics: 40 practice hours, 12 rehearsal hours, 8 gigging hours, 6 teaching hours. Is the ratio right?' },
]

export default function ForMusiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Musicians"
        title={
          <>
            Every gig scheduled.
            <br />
            <em className="not-italic text-gold">Practice time protected.</em>
          </>
        }
        lede="Working musicians live in a chaotic calendar — gig bookings in texts, rehearsals in group chats, studio sessions in emails. Momenties consolidates everything into one calendar with AI input fast enough to capture every booking the moment it's confirmed."
        crumbs={[{ label: 'For Musicians' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-mode"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus mode
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Voice input included · Works on mobile</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How musicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for working musicians.</h2>
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

      {/* Week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A musician's week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {MUSICIAN_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
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
                &ldquo;I used to double-book gigs at least once a month because everything was in different places. Now I voice-add every booking when it comes in. I haven't double-booked in eight months.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nina B.</div>
                  <div className="text-xs text-muted-foreground">Touring bassist, music teacher</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every gig. Every rehearsal. Every practice hour."
        subtitle="All in one calendar, added in seconds. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
