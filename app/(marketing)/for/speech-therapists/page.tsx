import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Speech-Language Pathologists — CE tracking, supervision, and caseload management',
  description:
    'Speech-language pathologists manage ASHA CE requirements, clinical supervision hours, caseload meetings, and license renewals. Momenties tracks CE by ASHA category, supervision hours, and keeps every renewal deadline visible.',
  alternates: { canonical: '/for/speech-therapists' },
  openGraph: {
    title: 'Momenties for Speech-Language Pathologists',
    description: 'ASHA CE tracking and SLP practice calendar management.',
    url: '/for/speech-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'ASHA CE hours by content area',
    desc: 'Tag every CE event by ASHA content area: speech, language, swallowing, hearing, ethics. Analytics shows hours per category against your CCC renewal requirement. No spreadsheet needed.',
  },
  {
    icon: Users,
    title: 'Supervision hours tracking',
    desc: 'Block every supervision session and tag it as supervision time. Analytics shows accumulated hours over the CFY or clinical fellowship. Know exactly where you stand at any point.',
  },
  {
    icon: Clock,
    title: 'ASHA CCC and state license renewals',
    desc: '"ASHA CCC renewal december 31." "State SLP license renewal june." "CCCs continuing education deadline." All renewal deadlines on calendar, visible 60 days out.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Track ASHA convention, study groups, and webinars separately from direct service. See CE hours accumulating in real time. Calibrate your pace against the renewal cycle.',
  },
]

const SLP_WORKFLOW = [
  { time: 'January', action: 'ASHA CE audit: check hours by content area, identify gaps, add ASHA convention and state conference to calendar for the year.' },
  { time: 'Monthly', action: 'Caseload review meeting (templated, 60 mins). Supervision sessions (recurring, 1 hour weekly for CFY). Both structured for the year.' },
  { time: 'CE event', action: '"AAC webinar, thursday june 12, 1.5 hours, language content area." Tagged and added. CE counter updates. Certificate reminder set.' },
  { time: 'Q3 check', action: 'CE analytics: 12/30 ASHA CEUs needed, ethics satisfied, swallowing still needs 4 CEUs. ASHA convention in November covers the gap.' },
  { time: 'Renewal', action: 'CCC renewal visible in Daily Brief for 60 days prior. Application and CE submission deadline blocked. Documentation checklist on calendar.' },
]

export default function ForSpeechTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Speech-Language Pathologists"
        title={
          <>
            ASHA CE tracked.
            <br />
            <em className="not-italic text-gold">CCCs renewed on time.</em>
          </>
        }
        lede="SLPs manage ASHA CE requirements across content areas, clinical supervision hours, state license renewals, and professional development alongside direct service caseloads. Momenties tracks CE by content area, supervision hours, and keeps every deadline visible before it's urgent."
        crumbs={[{ label: 'For Speech-Language Pathologists' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How SLPs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for SLP practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and licensing management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {SLP_WORKFLOW.map((step, i) => (
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
                &ldquo;Tracking ASHA CEUs by content area used to mean updating a spreadsheet after every course. Now I tag them as I add the event to my calendar, and the analytics shows my progress automatically. It takes zero extra effort.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lauren M., CCC-SLP</div>
                  <div className="text-xs text-muted-foreground">Speech-language pathologist, pediatric outpatient</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="ASHA CE tracked. CCCs maintained. Supervision logged."
        subtitle="CE content area analytics, renewal deadline reminders, and supervision tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
