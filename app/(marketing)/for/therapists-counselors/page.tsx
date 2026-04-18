import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Therapists and Counselors — CEU tracking, license renewals, and practice calendar',
  description:
    'Licensed therapists and counselors manage CEU requirements, state license renewals, supervision hours, continuing education category requirements, and private practice scheduling simultaneously. Momenties tracks CEUs by category, surfaces renewal deadlines early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/therapists-counselors' },
  openGraph: {
    title: 'Momenties for Therapists and Counselors',
    description: 'CEU tracking, license renewals, and practice management for licensed therapists and counselors.',
    url: '/for/therapists-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking by license category',
    desc: 'Tag every continuing education activity by license type and category. LCSW: clinical practice, supervision, ethics. LPC: professional practice, ethics hours. LMFT: marriage and family therapy topics, ethics. Each state\'s specific category requirements tracked separately. Renewal cycle progress visible at any point.',
  },
  {
    icon: Clock,
    title: 'License renewal deadline calendar',
    desc: '"LCSW license renewal — state board, october 31." "LPC license — june 30." "Liability insurance renewal — january 15." "NPI renewal — every 5 years." "NASW membership renewal — december." All therapist credentials and professional memberships with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CEU events, supervision sessions, consultation groups, documentation time, and administrative work separately from clinical hours. Analytics shows how non-clinical hours distribute. Protect professional development and supervision time that license renewal and practice quality require.',
  },
  {
    icon: Users,
    title: 'Supervision and consultation calendar',
    desc: '"Clinical supervision — weekly, thursdays 4pm." "Peer consultation group — bi-weekly, tuesday noon." "Case consultation — by referral." "Training and workshop — quarterly." All professional support and development commitments on calendar. Supervision requirements never neglected.',
  },
]

const THERAPIST_WORKFLOW = [
  { time: 'Annual planning', action: 'All license renewal dates, CEU requirements per license category, supervision commitments, and professional association deadlines on calendar at year start. State-specific requirements confirmed per license. Non-clinical calendar visible before the practice fills every slot.' },
  { time: 'CEU events', action: '"NASW approved ethics training — 6 hours, tuesday 9am-3pm, ethics CEU." Tagged and added. Category counter updates. Ethics requirement tracked separately from general CEUs. State minimum verified against progress throughout the year.' },
  { time: 'Supervision', action: '"Weekly supervision — Dr. Martinez, thursdays 4pm, 1 hour." Recurring session added. Supervision hours logged if counted toward licensure or credentialing. Consultation group separately tagged. Supervision never becomes the thing that keeps getting moved.' },
  { time: 'Conference', action: '"NASW national conference — june 19-22." CEU sessions pre-tagged by category. Category requirements prioritized when selecting sessions. Travel and coverage for practice confirmed before committing to the full week.' },
  { time: 'License audit', action: 'Analytics: CEU progress by license category. Ethics requirement met? Total hours vs. state minimum? Time to register for fall continuing education events to close any category gaps before the license renewal deadline.' },
]

export default function ForTherapistsCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Therapists & Counselors"
        title={
          <>
            License always current.
            <br />
            <em className="not-italic text-gold">Practice growing.</em>
          </>
        }
        lede="Licensed therapists and counselors manage CEU requirements across multiple category types, state license renewals, supervision commitments, professional memberships, and private practice scheduling simultaneously. Momenties tracks CEUs by license category, surfaces renewal deadlines 90 days early, and manages the non-clinical calendar in one view."
        crumbs={[{ label: 'For Therapists & Counselors' }]}
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
            Practice analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for therapy practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Non-clinical calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEU and license renewal managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {THERAPIST_WORKFLOW.map((step, i) => (
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
                &ldquo;My state requires 40 CEUs per 2-year cycle with specific category minimums — ethics, supervision, and specialty areas. Every year I&apos;d finish the cycle and scramble to find out if I&apos;d met all the category requirements. Momenties solved this completely — I tag every training by category and I can see exactly where I stand at any point in the cycle. No more end-of-cycle surprises.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rachel H., LCSW</div>
                  <div className="text-xs text-muted-foreground">Licensed clinical social worker, private practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All therapist credentials and continuing education on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State license renewal (LCSW, LPC, LMFT, MFT)',
                'CEU credits by category — ethics, clinical, specialty',
                'Liability insurance renewal',
                'NPI — 5-year renewal',
                'Professional association memberships',
                'Clinical supervision schedule',
                'Consultation group calendar',
                'Specialty certification renewals (EMDR, trauma, etc.)',
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
        title="License current. CEUs tracked. Practice sustainable."
        subtitle="CEU tracking by license category, renewal deadline management, and practice analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Practice analytics', href: '/features/analytics' }}
      />
    </>
  )
}
