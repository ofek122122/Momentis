import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Users, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Physical Education Teachers — Class scheduling, CPE credits, and coaching coordination',
  description:
    'Physical education teachers manage class schedules, athletic event coordination, coaching duties, CPE requirements, and certification renewals. Momenties templates the academic year, tracks CPE by category, and surfaces license renewal deadlines early.',
  alternates: { canonical: '/for/physical-education-teachers' },
  openGraph: {
    title: 'Momenties for Physical Education Teachers',
    description: 'Class scheduling, CPE tracking, and coaching coordination for PE teachers.',
    url: '/for/physical-education-teachers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Academic year and athletic schedule',
    desc: 'Template: fall semester units, state fitness testing windows, sports season transitions, spring field day. Apply to each school year. All recurring PE milestones on calendar before September begins.',
  },
  {
    icon: Shield,
    title: 'CPE and certification tracking',
    desc: 'Tag professional development by category: health education, adapted PE, assessment, coaching. Analytics shows CPE hours per category. State license renewal and first aid/CPR recertification visible 90 days before deadline.',
  },
  {
    icon: Users,
    title: 'Coaching and activity coordination',
    desc: '"JV basketball practice — tuesday thursday 3:30pm." "Track meet — westside invitational, saturday april 12." "Coaching staff meeting, monday 7am." All athletic commitments tagged separately from teaching hours.',
  },
  {
    icon: Clock,
    title: 'Certification and renewal deadlines',
    desc: '"Teaching license renewal — june 30." "CPR recertification — expires august." "First aid renewal — september." "AED training — december." All health and safety credentials on calendar before they lapse.',
  },
]

const PE_WORKFLOW = [
  { time: 'August planning', action: 'Apply academic year template. Block all semester unit transitions, state fitness testing windows, and field day dates. Add all coaching season start/end dates.' },
  { time: 'Professional dev', action: '"NASPE conference, november 6-8." "Adapted PE workshop, saturday feb 15, 6 hours, adapted PE CPE." Tagged and added. Professional learning calendar builds automatically.' },
  { time: 'Athletic season', action: 'All practices, games, and meets templated for the season. Coaches see the full schedule from day one. No game conflicts with exam week.' },
  { time: 'CPE audit', action: 'Analytics: CPE hours by category this year. License renewal in 8 months — on pace? Which categories need more hours? Time to register for spring workshops.' },
  { time: 'Renewal prep', action: 'Daily Brief surfaces teaching license 90 days before renewal. CPR and first aid dates visible on the calendar. Never let a safety certification lapse.' },
]

export default function ForPhysicalEducationTeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Physical Education Teachers"
        title={
          <>
            Every class scheduled.
            <br />
            <em className="not-italic text-gold">Every cert current.</em>
          </>
        }
        lede="Physical education teachers manage class schedules, athletic seasons, coaching duties, professional development requirements, and certification renewals simultaneously. Momenties templates the academic year, tracks CPE by category, and ensures no license or safety certification lapses unnoticed."
        crumbs={[{ label: 'For Physical Education Teachers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/teachers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            For all teachers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No student data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How PE teachers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for PE practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Academic year rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A PE teacher&apos;s year with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {PE_WORKFLOW.map((step, i) => (
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
                &ldquo;I teach 5 classes and coach two sports. For years I had a class calendar, a coaching calendar, and my professional development log all in different places. Momenties let me bring everything into one calendar — teaching, coaching, and CE — and now I actually know where I stand on my license renewal at any given point.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Derek W.</div>
                  <div className="text-xs text-muted-foreground">PE teacher and athletic coach, high school</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What PE teachers track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your teaching and coaching calendar in analytics.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CPE hours by professional development category',
                'Teaching license renewal deadline',
                'CPR/First aid/AED certification dates',
                'Athletic season timeline and events',
                'Teaching vs. coaching time ratio',
                'State fitness testing windows',
                'Professional development completion rate',
                'Annual renewal calendar all in one view',
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
        title="Classes scheduled. Certs current. Coaching coordinated."
        subtitle="Academic year templates, CPE tracking, and certification renewal management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'For all teachers', href: '/for/teachers' }}
      />
    </>
  )
}
