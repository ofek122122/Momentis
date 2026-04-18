import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Calendar, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pastors — Ministry scheduling, counseling, and sermon prep time',
  description:
    'Pastors balance sermon prep, pastoral care visits, counseling appointments, meetings, and community events. Momenties makes every appointment instant, protects study time, and tracks ministry hours across roles.',
  alternates: { canonical: '/for/pastors' },
  openGraph: {
    title: 'Momenties for Pastors',
    description: 'Ministry scheduling. Sermon prep protected.',
    url: '/for/pastors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Protected sermon prep time',
    desc: '"Sermon prep Tuesday and Thursday 8-11am." Recurring, protected, enforced by Focus mode. The week\'s most important work gets defended against the week\'s most urgent distractions.',
  },
  {
    icon: Users,
    title: 'Pastoral care and counseling',
    desc: '"Pastoral visit Margaret thursday 2pm 60 mins." "Counseling session, Families in Need program, friday 10am." Each appointment tracked and tagged. Privacy-first design.',
  },
  {
    icon: Calendar,
    title: 'Church calendar coordination',
    desc: 'Leadership meetings, elder board, deacon committees, seasonal services — all in one calendar. Team overlay shows staff and volunteer availability. Shared calendar keeps the church on the same page.',
  },
  {
    icon: Clock,
    title: 'Sabbath and rest protection',
    desc: 'Pastors are among the most at-risk for burnout from blurred work/rest boundaries. Block Sabbath. Tag it. Protect it. Analytics confirms rest is actually happening.',
  },
]

const PASTOR_WEEK = [
  { time: 'Sunday', action: 'Morning service, connection time, debrief. All pre-blocked. Focus mode handles notifications during service.' },
  { time: 'Monday', action: 'Rest day — blocked and protected. No meetings scheduled. Phone quiet. The week starts from rest.' },
  { time: 'Tuesday', action: 'Sermon prep 8-11am. Staff meeting 11:30am. Pastoral visit 2pm. Three events, all pre-set.' },
  { time: 'Wednesday', action: 'Prayer meeting 7pm. Voice-add mid-day: "Hospital visit for Tom, thursday 10am." Done.' },
  { time: 'Thursday', action: 'Sermon prep 8-11am. Counseling 2pm. Elder board 7pm. Day pre-structured before the week begins.' },
]

export default function ForPastorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pastors"
        title={
          <>
            Ministry organized.
            <br />
            <em className="not-italic text-gold">Rest protected.</em>
          </>
        }
        lede="Pastors hold one of the most complex scheduling roles in any vocation — sermon prep, pastoral care, administration, community events, and family all compete for the same hours. Momenties creates structure that defends the work that matters most."
        crumbs={[{ label: 'For Pastors' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan for church staff from $9/person/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pastors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for ministry scheduling.</h2>
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

      {/* Ministry week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Ministry week</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A pastor's week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {PASTOR_WEEK.map((step, i) => (
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
                &ldquo;I protect my Monday rest day and my Tuesday-Thursday sermon prep blocks. Since I started doing this, my preaching has improved and I feel less fragmented. The calendar is where the boundaries get defended.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">David C.</div>
                  <div className="text-xs text-muted-foreground">Lead pastor, church of 400</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Structure the ministry. Protect the rest. Do the work."
        subtitle="Natural language scheduling, focus protection, and team calendar for church staff."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Team plan for staff', href: '/teams' }}
      />
    </>
  )
}
