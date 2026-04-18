import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neurologists — ABPN MOC, UCNS certifications, and neurology CME tracking',
  description:
    'Neurologists manage ABPN Maintenance of Certification with 300 CME hours per 10-year cycle, UCNS subspecialty certifications in clinical neurophysiology or neurocritical care, state license renewals, DEA registration, and EEG/EMG procedure privileges simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full neurology credential calendar.',
  alternates: { canonical: '/for/neurologists' },
  openGraph: {
    title: 'Momenties for Neurologists',
    description: 'ABPN MOC, UCNS subspecialty certifications, and neurology CME management.',
    url: '/for/neurologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN and UCNS certifications',
    desc: 'ABPN MOC requires 300 CME hours over 10 years with annual check-ins. UCNS subspecialty certifications in clinical neurophysiology, epilepsy, neurocritical care, or headache medicine each have independent maintenance requirements. Tag every CME event by applicable certification. ABPN and UCNS requirements tracked independently without double-counting.',
  },
  {
    icon: Clock,
    title: 'Neurology multi-credential renewal calendar',
    desc: '"ABPN neurology — MOC annual check-in." "UCNS clinical neurophysiology — 5-year renewal, march." "State medical license — october." "DEA registration — 3-year." "EEG lab credentialing — hospital annual." "ACLS — 2-year." All neurology credentials with 90-day advance alerts. Procedure privileges never interrupted between credentialing cycles.',
  },
  {
    icon: BarChart3,
    title: 'Subspecialty CME analytics',
    desc: 'Neurologists often hold ABPN general neurology alongside UCNS subspecialty certification in clinical neurophysiology or epilepsy. CME from the AAN Annual Meeting or clinical neurophysiology conferences may apply to one or both certifications. Analytics shows each certification\'s progress separately so dual-track requirements are met without confusion.',
  },
  {
    icon: Users,
    title: 'AAN and subspecialty society involvement',
    desc: '"AAN Annual Meeting — april." "ACNS annual symposium — clinical neurophysiology, january." "AES Annual Meeting — epilepsy, december." "NCS neuromonitoring conference." All major neurology meetings planned at year start with CME sessions pre-identified for applicable certification credit.',
  },
]

const NEURO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN annual check-in schedule, UCNS subspecialty renewal dates, state medical license deadline, DEA expiration, EEG/EMG lab credentialing, and AAN Annual Meeting all loaded in January. CME pace calculated: 30 hours per year satisfies the 10-year ABPN cycle and leaves capacity for UCNS subspecialty requirements.' },
  { time: 'CME completion', action: '"AAN Annual Meeting — 22 CME hours, neurology content." Tagged by ABPN and UCNS applicability. If attending ACNS clinical neurophysiology symposium, those hours tagged specifically to UCNS certification. Each certification\'s running total accurate and independent.' },
  { time: 'ABPN check-in', action: '"ABPN annual Knowledge Check-In — scheduled october, 2-hour assessment block." Preparation time placed on calendar 4 weeks before. Assessment completed and logged. Annual check-in streak maintained. No missed annual requirement discovered at 10-year renewal.' },
  { time: 'UCNS renewal', action: '"UCNS clinical neurophysiology renewal — 5-year, march." Subspecialty renewal requirements reviewed 6 months before deadline. Specific CME in clinical neurophysiology and neurophysiology procedure competency documented. Renewal application prepared before deadline window opens.' },
  { time: 'MOC audit', action: 'Analytics: ABPN MOC hours on pace? Annual check-in completed? UCNS subspecialty requirements current? State license CE complete? DEA valid? EEG lab privileges renewal documentation ready? Complete neurology credential audit in one view.' },
]

export default function ForNeurologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neurologists"
        title={
          <>
            Board certified. Subspecialties maintained.
            <br />
            <em className="not-italic text-gold">MOC never scrambled.</em>
          </>
        }
        lede="Neurologists manage ABPN Maintenance of Certification across 10-year cycles with annual check-ins, UCNS subspecialty certifications in clinical neurophysiology or epilepsy, state license renewals, DEA registration, and procedure privileges simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full neurology credential calendar in one view."
        crumbs={[{ label: 'For Neurologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neurologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neurology CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neurology MOC rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every annual and multi-year cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {NEURO_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABPN neurology and UCNS clinical neurophysiology certifications. The ABPN needs annual check-ins and the UCNS renews every 5 years — different rhythms, different CME requirements. I was handling this with calendar reminders in three different apps. Momenties put everything in one place. AAN Annual Meeting CME gets tagged to both certifications where it applies and to just UCNS for neurophysiology-specific sessions. No more guessing.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lynn H., MD, PhD, FAAN</div>
                  <div className="text-xs text-muted-foreground">Clinical neurophysiologist, academic neurology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neurology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN MOC CME — 300 hours over 10-year cycle',
                'Annual ABPN Knowledge Check-In',
                'UCNS subspecialty certification renewal',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'EEG/EMG lab hospital credentialing',
                'ACLS recertification — 2-year',
                'AAN Annual Meeting and subspecialty conferences',
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
        title="Board certified. Subspecialties maintained."
        subtitle="CME tracking by certification, multi-cycle renewal calendar, and neurology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
