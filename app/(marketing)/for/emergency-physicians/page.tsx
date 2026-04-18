import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Emergency Physicians — CME credits, license renewals, and shift scheduling',
  description:
    'Emergency physicians manage CME requirements across ABEM categories, multiple state medical licenses, DEA registrations, BLS/ACLS/ATLS certifications, and shift schedules simultaneously. Momenties tracks CME by category, surfaces renewal deadlines early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/emergency-physicians' },
  openGraph: {
    title: 'Momenties for Emergency Physicians',
    description: 'CME tracking, license renewals, and non-clinical management for emergency physicians.',
    url: '/for/emergency-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME by ABEM category',
    desc: 'Tag every CME activity by ABEM category: emergency medicine clinical, patient safety, quality improvement, practice management, research. Analytics tracks hours per category against ABEM MOC requirements. Each 5-year cycle tracked separately.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal deadlines',
    desc: '"Medical license — state A, june 30." "DEA registration — october 31." "BLS recertification — expires march." "ACLS renewal — august." "ATLS — every 4 years." All credentials tracked in one calendar. Nothing lapses.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CME events, administrative meetings, research, and professional development separately from clinical shifts. Analytics shows how non-clinical hours distribute. Protect the continuing education and research time that matters to career development.',
  },
  {
    icon: Users,
    title: 'Professional meeting and conference scheduling',
    desc: '"ACEP annual scientific assembly — october 13-16." "CORD academic assembly — march." "Department QI meeting — first monday monthly." All professional commitments on calendar from the year\'s start.',
  },
]

const EP_WORKFLOW = [
  { time: 'Annual planning', action: 'All medical license renewals, DEA registration, BLS/ACLS/ATLS recertification dates on calendar. ABEM MOC requirements calculated for the 5-year cycle. CME needed per year to stay on pace.' },
  { time: 'CME events', action: '"ACEP online CME — patient safety, thursday 7pm 2 hours, patient safety category." Tagged and added. CME counter updates per ABEM category. Hours tracked through the year, not just at renewal.' },
  { time: 'Conference', action: '"ACEP annual — october 13-16." CME from the conference pre-tagged by session attended. Hotel and travel blocked. Department coverage confirmed before committing.' },
  { time: 'Cert renewal', action: '"BLS recertification — tuesday evening 3 hours." Tagged and added. Expiration date updated in calendar. All life support credentials current and visible on one calendar.' },
  { time: 'MOC audit', action: 'Analytics: CME hours per ABEM category. 5-year cycle review: on pace? Which categories short? Time to register for targeted CME events to close gaps before the ABEM deadline.' },
]

export default function ForEmergencyPhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Emergency Physicians"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">CME always on track.</em>
          </>
        }
        lede="Emergency physicians manage CME requirements across ABEM MOC categories, multiple state medical licenses, DEA registrations, BLS/ACLS/ATLS recertifications, and shift schedules simultaneously. Momenties tracks CME by ABEM category, surfaces all renewal deadlines 90 days early, and manages the non-clinical calendar in one view."
        crumbs={[{ label: 'For Emergency Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How emergency physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for emergency medicine practice management.</h2>
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
            {EP_WORKFLOW.map((step, i) => (
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
                &ldquo;I&apos;m licensed in two states and hold DEA, BLS, ACLS, ATLS, and ABEM certification — all with different renewal dates. Before Momenties, I kept this in my head and occasionally panicked when a renewal was due. Now every credential has a calendar entry and a 90-day alert. I haven&apos;t had a close call since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Andrew C., MD</div>
                  <div className="text-xs text-muted-foreground">Emergency physician, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All emergency physician credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABEM MOC — CME by category, 5-year cycle',
                'Medical license renewal (all states)',
                'DEA registration — 3-year renewal',
                'BLS — 2-year recertification',
                'ACLS — 2-year recertification',
                'ATLS — 4-year recertification',
                'ACEP and state ACEP membership',
                'Hospital privileges and credentialing',
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
        title="Every credential current. CME always on track."
        subtitle="ABEM CME tracking, multi-credential renewals, and professional calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
