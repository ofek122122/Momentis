import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Radiologists — CME tracking, ABR MOC, and credential renewals',
  description:
    'Radiologists manage ABR Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, sub-specialty certifications, and hospital privileges. Momenties tracks CME by ABR activity type, surfaces renewal deadlines 90 days early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/radiologists' },
  openGraph: {
    title: 'Momenties for Radiologists',
    description: 'CME tracking, ABR MOC, and credential renewal management for radiologists.',
    url: '/for/radiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'ABR Maintenance of Certification',
    desc: 'Tag every CME activity toward ABR MOC requirements. Track Continuous Certification Activities (CCAs) including Patient Safety and Communication topics. Sub-specialty certifications in neuroradiology, interventional radiology, nuclear radiology, or breast imaging tracked separately per their individual renewal cycles.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal calendar',
    desc: '"ABR MOC — annual CCA requirement, december." "Medical license — state A, june 30." "DEA registration — 3-year, october." "BLS — 2-year, march." "Sub-specialty cert renewal — 10-year cycle." "Hospital privileges — annual." All on one calendar with 90-day alerts.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Tag CME events, quality improvement activities, peer review sessions, research, and administrative committee work separately from reading time. Analytics shows non-clinical distribution across the week. Protect education and QI time that ABR MOC requires.',
  },
  {
    icon: Users,
    title: 'Professional meetings and conferences',
    desc: '"RSNA annual meeting — november 30 to december 4." "ARRS — april." "SIR annual scientific meeting — march." "Subspecialty society — annual." "Radiology department QI meeting — monthly." All professional commitments on calendar from the year\'s start.',
  },
]

const RAD_WORKFLOW = [
  { time: 'Annual planning', action: 'All medical license renewals, DEA registration, BLS recertification, hospital privileges, and ABR MOC requirements on calendar. Sub-specialty certifications added with their separate cycles. 90-day alerts on all renewal deadlines.' },
  { time: 'CME events', action: '"ABR-approved online course — patient safety communication, wednesday 7pm, 2 hours, CCA credit." Tagged and added. ABR CCA requirement tracked cumulatively. Annual completion requirement monitored throughout the year.' },
  { time: 'Conference', action: '"RSNA — november 30 to december 4." CME sessions pre-tagged by ABR activity type. CCA-approved sessions identified in advance. Hotel and travel blocked. Coverage for reading schedule confirmed.' },
  { time: 'QI activity', action: '"Peer review session — quarterly." "Quality improvement project — Q3." Non-clinical hours tagged by activity type. QI work logged for ABR requirements. Department participation documented.' },
  { time: 'MOC audit', action: 'Analytics: ABR MOC progress by activity type. Annual CCA requirement met? Patient Safety topic complete? Sub-specialty certification on track? CME needed before the year-end ABR deadline confirmed.' },
]

export default function ForRadiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Radiologists"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">ABR certification on track.</em>
          </>
        }
        lede="Radiologists manage ABR Maintenance of Certification requirements, multi-state medical licenses, DEA registrations, sub-specialty certifications, and hospital privileges simultaneously. Momenties tracks CME by ABR activity type, surfaces all renewal deadlines 90 days early, and manages the non-clinical calendar in one view."
        crumbs={[{ label: 'For Radiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How radiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for radiology practice management.</h2>
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
            {RAD_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ABR certification in both diagnostic radiology and neuroradiology — two separate MOC programs, two separate annual requirements, two separate cycles. Plus DEA, state license, and hospital privileges at two sites. Momenties unified all of this into one calendar. I now know at any point in the year exactly where I stand on every credential requirement.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Natalie P., MD</div>
                  <div className="text-xs text-muted-foreground">Neuroradiologist, academic hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All radiologist credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABR MOC — annual CCA requirements',
                'Sub-specialty MOC (neuroradiology, IR, breast, nuclear)',
                'Medical license renewal (all states)',
                'DEA registration — 3-year renewal',
                'BLS — 2-year recertification',
                'Hospital privileges and credentialing',
                'RSNA and subspecialty society membership',
                'Radiation safety training requirements',
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
        title="Every credential current. ABR certification on track."
        subtitle="ABR MOC tracking, sub-specialty certification management, and non-clinical calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
