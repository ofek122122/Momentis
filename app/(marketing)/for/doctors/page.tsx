import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Lock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Doctors — Clinical scheduling, CME tracking, and protected personal time',
  description:
    'Physicians manage complex clinical schedules, mandatory CME requirements, hospital committees, and personal time — often in separate systems. Momenties consolidates scheduling with privacy-first design.',
  alternates: { canonical: '/for/doctors' },
  openGraph: {
    title: 'Momenties for Doctors',
    description: 'Clinical scheduling with CME tracking and patient privacy.',
    url: '/for/doctors',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Lock,
    title: 'Patient-opaque scheduling',
    desc: 'Schedule with case codes or patient initials — AI parses the time and duration, not patient identity. "Clinic PT-44 tuesday 2pm 30 mins." Calendar created, patient privacy maintained.',
  },
  {
    icon: BarChart3,
    title: 'CME credit tracking by category',
    desc: 'Tag every CME activity (AMA Category 1A, ethics, patient safety). Analytics shows hours by category. Know your license renewal standing at a glance, not the night before renewal.',
  },
  {
    icon: Clock,
    title: 'Call schedule and recovery blocking',
    desc: '"On call thursday night." Logged instantly. Post-call recovery blocked automatically as a follow-on event. The system knows on-call means recovery afterward.',
  },
  {
    icon: Shield,
    title: 'Personal time that survives the week',
    desc: 'Family dinner, exercise, personal appointments — blocked, tagged "personal," and protected by Focus mode. The physician who protects personal time is more sustainable than the one who doesn\'t.',
  },
]

const CLINICAL_WEEK = [
  { time: 'Monday', action: 'AM clinic 8am-12pm. Recurring, tagged "clinic." Afternoon admin and committee work.' },
  { time: 'Wednesday', action: 'Grand rounds 7:30am. 1 AMA CME credit. Tagged "CME-Category-1A." Running total updates.' },
  { time: 'Thursday', action: 'On-call starts 5pm. Logged. Recovery block auto-created for Friday morning.' },
  { time: 'Friday', action: 'Post-call recovery 7am-12pm. Protected. No meetings. Focus mode active.' },
  { time: 'Monthly', action: 'Analytics: 42 clinic hours, 8 CME credits (2 ethics, 4 Category 1A, 2 patient safety). License renewal check ✓.' },
]

const PRIVACY_NOTES = [
  'Use patient codes, not names — AI never sees identifying patient information',
  'AI parsing uses only the input string, not your full calendar history',
  'No data shared with insurance companies, employers, or healthcare systems',
  'No advertising model — Momenties is subscription software',
  'GDPR-compliant with data processing agreement available',
]

export default function ForDoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Doctors"
        title={
          <>
            Clinical schedule managed.
            <br />
            <em className="not-italic text-gold">CME tracked automatically.</em>
          </>
        }
        lede="Physicians carry one of the most complex scheduling loads in any profession — clinical sessions, on-call, committees, CME obligations, and personal life all competing for a finite calendar. Momenties brings them together with privacy-first design."
        crumbs={[{ label: 'For Doctors' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-privacy"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Privacy details
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · GDPR-compliant · No patient data ever sent to AI</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Built for clinical scheduling realities.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A clinical week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {CLINICAL_WEEK.map((step, i) => (
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

      {/* Privacy */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Patient privacy by design.</h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <div className="space-y-2">
                {PRIVACY_NOTES.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <Link href="/calendar-privacy" className="text-xs text-gold/70 hover:text-gold transition-colors">Privacy details →</Link>
                <Link href="/ai/ethics" className="text-xs text-gold/70 hover:text-gold transition-colors">AI ethics →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Clinical structure. CME compliance. Personal time that holds."
        subtitle="Privacy-first scheduling designed for physicians. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See privacy details', href: '/calendar-privacy' }}
      />
    </>
  )
}
