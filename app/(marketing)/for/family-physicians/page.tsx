import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Family Physicians — CME tracking, ABFM MOC, and license renewals',
  description:
    'Family physicians manage ABFM Continuous Certification requirements, multi-state medical licenses, DEA registrations, BLS/ACLS certifications, and hospital privileges simultaneously. Momenties tracks CME by ABFM activity type, surfaces renewal deadlines 90 days early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/family-physicians' },
  openGraph: {
    title: 'Momenties for Family Physicians',
    description: 'CME tracking, ABFM MOC, and credential renewal management for family physicians.',
    url: '/for/family-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'ABFM Continuous Certification tracking',
    desc: 'Tag every CME activity by ABFM activity type: Self-Assessment Activities (SAAs), Performance Improvement Activities (PIAs), and Continuing Medical Education. Track credits toward the 300-credit requirement per 3-year cycle. Annual requirements tracked separately from the 3-year cycle total.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal calendar',
    desc: '"Medical license — state A, june 30." "DEA registration — 3-year renewal, october." "BLS recertification — 2-year, march." "ACLS — expires september." "Hospital privileges renewal — annual, december." Every credential with a 90-day advance alert. Nothing lapses.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CME events, quality improvement projects, administrative time, and professional development separately from patient care. Analytics shows how non-clinical hours distribute across the week. Protect continuing education time that supports board certification.',
  },
  {
    icon: Users,
    title: 'Professional meetings and conferences',
    desc: '"AAFP Family Medicine Experience — october." "State medical society annual meeting — may." "Hospital QI committee — second tuesday monthly." "Medical staff meeting — first thursday." All professional commitments on calendar from the year\'s start.',
  },
]

const FP_WORKFLOW = [
  { time: 'Annual planning', action: 'All medical license renewals, DEA registration, BLS/ACLS recertification dates on calendar. ABFM Continuous Certification requirements calculated: SAAs needed, PIAs due, CME credits per year to stay on pace for the 3-year cycle.' },
  { time: 'CME events', action: '"AAFP online module — chronic disease management, tuesday 7pm, 2 hours, CME." Tagged and added. Annual CME counter updates. Credit type tracked — SAA vs. regular CME — so the annual self-assessment requirement doesn\'t sneak up.' },
  { time: 'QI project', action: '"Practice quality improvement — hypertension control rates, Q2 PIA." ABFM Performance Improvement Activity documented and tagged. PIA credit logged. 3-year cycle tracker updated.' },
  { time: 'Conference', action: '"AAFP FMX — october 23-27." CME sessions pre-tagged by credit type. Hotel and travel blocked. Coverage for patient panel confirmed before committing to the full week.' },
  { time: 'MOC audit', action: 'Analytics: ABFM credit progress by type. Annual SAA complete? PIAs on track? Total CME vs. 3-year requirement. Time to plan targeted CME events to close any gaps before the next ABFM deadline.' },
]

export default function ForFamilyPhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Family Physicians"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">ABFM certification on track.</em>
          </>
        }
        lede="Family physicians manage ABFM Continuous Certification requirements, multi-state medical licenses, DEA registrations, BLS/ACLS recertifications, and hospital privileges simultaneously. Momenties tracks CME by ABFM activity type, surfaces all renewal deadlines 90 days early, and manages the non-clinical calendar in one view."
        crumbs={[{ label: 'For Family Physicians' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How family physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for family medicine practice management.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {FP_WORKFLOW.map((step, i) => (
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
                &ldquo;I practice in two states and have separate DEA registrations for each. Add BLS, ACLS, hospital privileges at three facilities, and ABFM certification — every single credential has a different renewal date. Momenties turned this chaos into a single calendar with 90-day alerts. I haven&apos;t missed a renewal since I started using it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Sandra L., MD</div>
                  <div className="text-xs text-muted-foreground">Family physician, multi-state group practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All family physician credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABFM Continuous Certification — SAA, PIA, CME credits',
                'Medical license renewal (all states)',
                'DEA registration — 3-year renewal',
                'BLS — 2-year recertification',
                'ACLS — 2-year recertification',
                'Hospital privileges and credentialing',
                'AAFP membership renewal',
                'State medical society membership',
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
        title="Every credential current. ABFM certification on track."
        subtitle="ABFM CME tracking, multi-credential renewals, and professional calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
