import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sleep Medicine Physicians — ABMS Sleep Medicine MOC, CME tracking, and credential management',
  description:
    'Sleep medicine physicians manage ABMS Sleep Medicine subspecialty MOC alongside their primary specialty board MOC (IM, Neurology, Psychiatry, Pulmonology, Pediatrics, etc.), state medical license biennial CME, DEA registration, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full sleep medicine credential calendar.',
  alternates: { canonical: '/for/sleep-medicine-physicians' },
  openGraph: {
    title: 'Momenties for Sleep Medicine Physicians',
    description: 'ABMS Sleep Medicine MOC, CME tracking, and credential management.',
    url: '/for/sleep-medicine-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for Sleep Medicine subspecialty MOC and primary board',
    desc: 'ABMS Sleep Medicine is a subspecialty certification offered by multiple ABMS boards (ABIM, ABN, ABPN, ABFM, ABP, ABA, ABOHNS). Sleep Medicine MOC runs concurrently with primary specialty board MOC. CME must satisfy both tracks. Sleep medicine CME often qualifies for both; primary specialty CME may not satisfy Sleep Medicine MOC requirements. Each board tracked independently.',
  },
  {
    icon: Clock,
    title: 'Sleep physician multi-credential renewal calendar',
    desc: '"Primary board MOC — continuous, board-specific cycle." "ABMS Sleep Medicine MOC — 10-year certification, continuous activity." "State medical license — biennial CME, varies." "DEA registration — 3-year." "Sleep lab AASM accreditation CE — periodic." "AASM membership — annual." All sleep medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Sleep lab credentialing and AASM compliance analytics',
    desc: 'Sleep medicine physicians affiliated with AASM-accredited sleep centers may have periodic CME requirements for accreditation maintenance and quality assurance programs. AASM-required education tracked separately from ABMS MOC CME — accreditation compliance is an institutional requirement. Analytics confirms AASM and institutional sleep lab requirements satisfied independent of board MOC CME totals.',
  },
  {
    icon: Users,
    title: 'SLEEP, ATS, and sleep medicine professional involvement',
    desc: '"SLEEP Annual Meeting — AASM/APSS, june." "ATS International Conference — may (pulmonary-trained sleep physicians)." "AAN Annual Meeting — april (neurology-trained)." "APA Annual Meeting — may (psychiatry-trained)." "State sleep society conference." All sleep medicine professional development on calendar. SLEEP conference CME tagged by applicable ABMS board in advance.',
  },
]

const SLEEP_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC annual requirements, ABMS Sleep Medicine MOC continuous activity, state medical license biennial renewal, DEA 3-year renewal, AASM accreditation CE requirements, SLEEP Annual Meeting, and AASM membership all loaded in January. CME pace calculated per board track independently.' },
  { time: 'CME completion', action: '"AASM-approved — management of central sleep apnea syndromes: adaptive servo-ventilation titration, 3 CME, Sleep Medicine subspecialty." Tagged by applicable board. ABMS Sleep Medicine counter updates. If primary board (e.g., ABIM IM or ABN Neurology) also accepts the content, primary board counter also updates. Each board tracked independently.' },
  { time: 'Sleep lab CE', action: '"AASM quality assurance education — Q2, 1 CE, AASM accreditation requirement." Sleep lab accreditation CE logged as an institutional compliance requirement, separate from ABMS MOC CE. AASM-required physician education for accredited sleep center participation confirmed before accreditation review window. Compliance CE logged independently from board MOC totals.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year, september." DEA tracked on 3-year cycle separate from biennial state license and board MOC cycles. Sleep medicine physicians who prescribe controlled substances for hypersomnia, RLS, narcolepsy, or related conditions must maintain DEA registration. DEA renewal placed on calendar when current registration dates are confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC annual requirements current? ABMS Sleep Medicine CME on pace? State medical license CME complete? DEA registration valid? AASM accreditation CE satisfied? AASM membership active? Complete sleep medicine credential audit 90 days before earliest renewal. Primary board and ABMS Sleep Medicine documentation maintained separately.' },
]

export default function ForSleepMedicinePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sleep Medicine Physicians"
        title={
          <>
            Sleep Medicine and primary board MOC maintained.
            <br />
            <em className="not-italic text-gold">AASM accreditation CE never missed.</em>
          </>
        }
        lede="Sleep medicine physicians manage ABMS Sleep Medicine subspecialty MOC alongside their primary specialty board MOC on independent cycles, AASM sleep lab accreditation CE requirements, DEA 3-year registration renewal, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full sleep medicine credential calendar in one view."
        crumbs={[{ label: 'For Sleep Medicine Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sleep medicine physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for sleep medicine credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sleep medicine credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board and accreditation cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {SLEEP_WORKFLOW.map((step, i) => (
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
                &ldquo;Sleep medicine is a subspecialty added on top of pulmonology training, which means I have ABIM IM MOC, ABIM Pulmonary MOC, and ABMS Sleep Medicine MOC — three board tracks running simultaneously. Each requires CME that may or may not count for the others. Then the AASM accreditation requires its own physician education that doesn&apos;t count toward any of the three boards. Momenties separated all four tracks and I can see at a glance whether sleep medicine CME I earned at the SLEEP conference satisfies all three ABMS tracks or just one.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patricia H., MD, FCCP, FAASM</div>
                  <div className="text-xs text-muted-foreground">Pulmonologist and sleep medicine physician, academic sleep center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sleep medicine credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary specialty board MOC CME — board-specific cycle',
                'ABMS Sleep Medicine subspecialty MOC — continuous',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'AASM sleep lab accreditation CE — periodic',
                'AASM membership renewal — annual',
                'SLEEP conference CME planning by board track',
                'Polysomnography interpretation competency (institutional)',
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
        title="Sleep Medicine and primary board MOC maintained."
        subtitle="CME tracking by board credential, AASM accreditation CE calendar, and sleep medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
