import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Surgeons — CME tracking, ABS or specialty board MOC, and credential renewals',
  description:
    'Surgeons manage surgical board Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, ATLS and BLS certifications, and hospital privileges simultaneously. Momenties tracks CME by board requirement, surfaces renewal deadlines early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/surgeons' },
  openGraph: {
    title: 'Momenties for Surgeons',
    description: 'CME tracking, surgical board MOC, and credential renewal management for surgeons.',
    url: '/for/surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Surgical board MOC tracking',
    desc: 'Tag every CME activity toward ABS or specialty board MOC requirements. Track Self-Assessment Modules (SAMs), surgical skills assessments, and Practice Quality Improvement requirements. Sub-specialty certifications in vascular, colorectal, thoracic, or surgical oncology tracked separately per their own cycles.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal calendar',
    desc: '"ABS or specialty MOC — 10-year exam, annual CME." "Medical license — state A, june 30." "DEA registration — 3-year, september." "ATLS — 4-year renewal, may." "BLS — 2-year, march." "Hospital privileges — annual." All credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CME events, M&M conferences, quality improvement activities, research, and administrative committee work separately from surgical and clinic time. Analytics shows how non-clinical hours distribute. Protect continuing education and research time that surgical boards require.',
  },
  {
    icon: Users,
    title: 'Professional meetings and societies',
    desc: '"ACS Annual Clinical Congress — october." "Specialty society annual meeting — varies." "Department M&M — monthly." "Surgical QI committee — quarterly." "Grand rounds — weekly." All professional commitments on calendar from the year\'s start.',
  },
]

const SURG_WORKFLOW = [
  { time: 'Annual planning', action: 'All medical license renewals, DEA registration, ATLS/BLS recertifications, hospital privileges, and surgical board MOC requirements on calendar. Sub-specialty certifications with their own cycles added separately. 90-day alerts on every deadline.' },
  { time: 'CME events', action: '"ACS or society online module — patient safety, thursday 8pm, 2 hours, SAM credit." Tagged and added. Board CME requirement tracked cumulatively. Annual requirement monitored through the year, not discovered in December.' },
  { time: 'Conference', action: '"ACS Annual Clinical Congress — october 15-19." CME sessions pre-tagged by board requirement type. SAMs and PQI credits identified. Hotel and travel blocked. OR coverage arranged before committing to the full week.' },
  { time: 'ATLS renewal', action: '"ATLS recertification — saturday, 8 hours." Tagged and added. 4-year expiration updated in calendar. Hospital privileges renewal requiring current ATLS will not catch you without it.' },
  { time: 'MOC audit', action: 'Analytics: surgical board MOC progress. CME requirements met? SAMs complete? PQI activity on track? Sub-specialty certification current? Time to plan targeted CME to close gaps before board deadlines.' },
]

export default function ForSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Surgeons"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">Board certification on track.</em>
          </>
        }
        lede="Surgeons manage surgical board Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, ATLS and BLS certifications, hospital privileges, and sub-specialty certifications simultaneously. Momenties tracks CME by board requirement, surfaces all renewal deadlines 90 days early, and manages the non-clinical calendar in one view."
        crumbs={[{ label: 'For Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for surgical practice management.</h2>
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
            {SURG_WORKFLOW.map((step, i) => (
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
                &ldquo;ATLS renewal snuck up on me twice before I started using Momenties. It&apos;s a half-day course and it always seemed fine to schedule later — until it suddenly wasn&apos;t. Now ATLS, BLS, my state license, DEA, and board CME all have 90-day alerts. I&apos;ve never scrambled on a renewal since, and credentialing renewals stopped being a source of stress.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Christopher B., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">General surgeon, community hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All surgeon credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Surgical board MOC — CME, SAMs, PQI',
                'Sub-specialty board certifications',
                'Medical license renewal (all states)',
                'DEA registration — 3-year renewal',
                'ATLS — 4-year recertification',
                'BLS — 2-year recertification',
                'Hospital privileges and credentialing',
                'ACS and specialty society membership',
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
        title="Every credential current. Board certification on track."
        subtitle="Surgical board MOC tracking, multi-credential renewals, and professional calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
