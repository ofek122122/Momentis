import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Anesthesiologists — CME tracking, ABA MOC, and credential renewals',
  description:
    'Anesthesiologists manage ABA Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, BLS/ACLS/PALS certifications, and hospital privileges simultaneously. Momenties tracks CME by ABA requirement, surfaces renewal deadlines 90 days early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/anesthesiologists' },
  openGraph: {
    title: 'Momenties for Anesthesiologists',
    description: 'CME tracking, ABA MOC, and credential renewal management for anesthesiologists.',
    url: '/for/anesthesiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'ABA Maintenance of Certification',
    desc: 'Tag every CME activity toward ABA MOC requirements. Track Continuous Certification activities including Patient Safety and Professional Wellbeing components. Sub-specialty certifications in critical care, pain medicine, or pediatric anesthesia tracked separately per their own MOC cycles.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal calendar',
    desc: '"ABA MOC — continuous cycle, december deadline." "Medical license — state A, june 30." "DEA registration — 3-year, september." "BLS — 2-year, april." "ACLS — 2-year, october." "PALS — 2-year, may." "Hospital credentials — annual, november." All on one calendar.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CME events, quality improvement activities, administrative committee work, and research separately from clinical time. Analytics shows how non-clinical hours distribute across the schedule. Protect continuing education and research time that supports ABA certification.',
  },
  {
    icon: Users,
    title: 'Professional meetings and education',
    desc: '"ASA Annual Meeting — october 18-22." "SOAP meeting — may." "Pain medicine society — annual." "Department M&M conference — monthly." "Quality committee — quarterly." All professional commitments on calendar from the year\'s start.',
  },
]

const ANES_WORKFLOW = [
  { time: 'Annual planning', action: 'All medical license renewals, DEA registration, BLS/ACLS/PALS recertification dates, hospital privileges, and ABA MOC requirements on calendar. Sub-specialty certifications tracked separately. 90-day alerts on every deadline.' },
  { time: 'CME events', action: '"ASA refresher course — patient safety topic, tuesday 7pm, 2 hours, ABA MOC." Tagged and added. MOC activity type recorded. Annual CME requirements tracked cumulatively — not just at year-end review.' },
  { time: 'Conference', action: '"ASA Annual Meeting — october 18-22." CME sessions pre-tagged. MOCA-Minute and other ABA-approved activities completed during the meeting and logged. Travel and coverage for OR schedule confirmed before committing.' },
  { time: 'Cert renewal', action: '"ACLS recertification — tuesday evening, 4 hours." Tagged and added. Expiration date updated. All life support certifications current and visible on one calendar. No more discovering an expired cert on credentialing renewal.' },
  { time: 'MOC audit', action: 'Analytics: ABA MOC activity progress. Patient safety requirement met? MOCA requirements on track? Sub-specialty MOC current? Time to complete targeted CME activities to close gaps before the next ABA deadline.' },
]

export default function ForAnesthesiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Anesthesiologists"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">ABA certification on track.</em>
          </>
        }
        lede="Anesthesiologists manage ABA Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, BLS/ACLS/PALS recertifications, hospital privileges, and sub-specialty certifications simultaneously. Momenties tracks CME by ABA requirement, surfaces all renewal deadlines 90 days early, and manages the non-clinical calendar."
        crumbs={[{ label: 'For Anesthesiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How anesthesiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for anesthesiology practice management.</h2>
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
            {ANES_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ABA certification in anesthesiology and critical care, plus DEA in two states, BLS, ACLS, PALS, and hospital privileges at three facilities. Before Momenties, this was a spreadsheet that I forgot to update. Now it&apos;s a live calendar with 90-day alerts on everything. Credentialing has become routine instead of stressful.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. David K., MD</div>
                  <div className="text-xs text-muted-foreground">Anesthesiologist, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All anesthesiologist credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABA MOC — continuous certification activities',
                'Sub-specialty MOC (critical care, pain, pediatric)',
                'Medical license renewal (all states)',
                'DEA registration — 3-year renewal',
                'BLS — 2-year recertification',
                'ACLS — 2-year recertification',
                'PALS — 2-year recertification',
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
        title="Every credential current. ABA certification on track."
        subtitle="ABA MOC tracking, multi-credential renewals, and non-clinical calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
