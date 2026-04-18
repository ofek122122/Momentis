import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for EMTs and Paramedics — NREMT recertification, CE tracking, and EMS credential management',
  description:
    'EMTs and paramedics manage NREMT recertification with 36-72 CE hours per 2-3 year cycle, state EMS license renewals, ACLS and PALS recertification, specialty certifications in tactical EMS or critical care transport, and continuing competency requirements simultaneously. Momenties tracks CE by EMS category, surfaces renewal deadlines 90 days early, and manages the full EMS credential calendar.',
  alternates: { canonical: '/for/emts-paramedics' },
  openGraph: {
    title: 'Momenties for EMTs and Paramedics',
    description: 'NREMT recertification, CE tracking, and EMS credential management.',
    url: '/for/emts-paramedics',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NREMT recertification',
    desc: 'EMT-Basic NREMT recertification requires 36 CE hours per 3 years. Paramedic NREMT recertification requires 72 CE hours per 3 years with specific content requirements in trauma, medical emergencies, and patient care. Tag every CE by EMS content area. Both EMT and paramedic NREMT requirements tracked — dual-certified providers see both cycles independently.',
  },
  {
    icon: Clock,
    title: 'EMS multi-credential renewal calendar',
    desc: '"NREMT paramedic — 3-year, june." "State EMS license — renewal, october." "ACLS — 2-year, march." "PALS — 2-year, november." "ITLS or PHTLS trauma certification — 4-year." "CPR — 2-year." All EMS credentials with 90-day advance alerts. No credential lapse between shifts at any agency or hospital.',
  },
  {
    icon: BarChart3,
    title: 'Specialty EMS credential analytics',
    desc: 'Paramedics working in critical care transport (FP-C, CCP-C), tactical EMS, or flight medicine hold specialty credentials with independent renewal requirements. Tag CE by credential applicability: NREMT general, FP-C specialty, tactical EMS. Analytics shows each credential\'s progress independently. Multi-credentialed paramedics manage all requirements without confusion.',
  },
  {
    icon: Users,
    title: 'NAEMSE and EMS professional development',
    desc: '"NAEMSE annual symposium." "State EMS conference — annual." "Trauma updates and mass casualty training — agency-required annual." "Critical care transport symposium." All EMS professional development on calendar. Agency-required continuing competency training tracked alongside NREMT recertification CE.',
  },
]

const EMS_WORKFLOW = [
  { time: 'Annual planning', action: 'NREMT recertification date, state EMS license deadline, ACLS and PALS recertification dates, ITLS/PHTLS renewal, and any agency-required annual training all loaded in January. 90-day alerts on every credential. CE completion pace calculated — 24 hours per year for paramedic NREMT satisfies the 3-year requirement.' },
  { time: 'CE completion', action: '"NREMT-approved online module — respiratory emergencies, tuesday 8pm, 2 hours, medical CE." Tagged by NREMT content category. Paramedic CE counter updates. If also applicable to FP-C specialty credential, tagged to both. No category gap at 3-year recertification audit.' },
  { time: 'ACLS renewal', action: '"ACLS recertification — saturday, 8 hours, march." Required for ALS providers at most agencies and hospitals. 2-year certification tracked. Hospital work often requires current ACLS independently of agency credential. Both timelines maintained on the same calendar.' },
  { time: 'PALS renewal', action: '"PALS recertification — saturday, 8 hours, november." Pediatric advanced life support certification required for pediatric transport and most ALS systems. 2-year cycle managed alongside ACLS — both on calendar, neither discovered expired at shift start.' },
  { time: 'NREMT audit', action: 'Analytics: CE hours by NREMT content category. 72-hour 3-year requirement on pace? Trauma content complete? Medical emergencies covered? State license CE satisfied? ACLS current? PALS valid? ITLS/PHTLS renewal on track? Complete EMS credential audit 90 days before the NREMT recertification window.' },
]

export default function ForEmtsParamedicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for EMTs and Paramedics"
        title={
          <>
            NREMT certified. Every credential current.
            <br />
            <em className="not-italic text-gold">CE never discovered expired.</em>
          </>
        }
        lede="EMTs and paramedics manage NREMT recertification with content-specific CE requirements across 2-3 year cycles, state EMS license renewals, ACLS and PALS recertification, specialty credentials in critical care transport, and agency-required annual training simultaneously. Momenties tracks CE by EMS content category, surfaces renewal deadlines 90 days early, and manages the full EMS credential calendar in one view."
        crumbs={[{ label: 'For EMTs & Paramedics' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How EMTs and paramedics use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for EMS credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">EMS credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every recertification cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {EMS_WORKFLOW.map((step, i) => (
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
                &ldquo;I work full-time EMS and part-time hospital ED tech. The hospital requires current ACLS and PALS on my end date, but EMS requires NREMT and the state license. I had four different renewal cycles running on completely different calendars. When I missed my PALS recertification by 3 weeks the hospital suspended my ED privileges. Momenties keeps all four on one calendar now. I haven&apos;t had a credential issue since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tyler G., NRP</div>
                  <div className="text-xs text-muted-foreground">Paramedic, urban EMS and hospital emergency department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All EMS credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE by category — NREMT 2-3 year recertification',
                'State EMS license renewal deadline',
                'ACLS recertification — 2-year',
                'PALS recertification — 2-year',
                'CPR/BLS recertification — 2-year',
                'ITLS or PHTLS trauma certification — 4-year',
                'FP-C or CCP-C specialty credential renewal',
                'Agency-required annual competency training',
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
        title="NREMT certified. Every credential current."
        subtitle="CE tracking by EMS category, multi-credential renewal calendar, and EMS professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
