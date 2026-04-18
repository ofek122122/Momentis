import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pain Management Specialists — ABPM/ABA MOC, CME tracking, and pain medicine credential management',
  description:
    'Pain management specialists manage ABPM Pain Medicine MOC with ABA anesthesiology base board MOC, DEA registration renewal, state medical license CME, controlled substance prescribing CE requirements, and professional development simultaneously. Momenties tracks CME by credential, surfaces renewal deadlines 90 days early, and manages the full pain medicine credential calendar.',
  alternates: { canonical: '/for/pain-management-specialists' },
  openGraph: {
    title: 'Momenties for Pain Management Specialists',
    description: 'ABPM/ABA MOC, CME tracking, and pain medicine credential management.',
    url: '/for/pain-management-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPM Pain Medicine and ABA MOC',
    desc: 'ABPM Pain Medicine subspecialty certification requires MOC with ABPM-approved CME. ABA anesthesiology base board MOC requires ABA MOCA-2 continuous assessment or periodic exam plus CME. Both boards track independently. Pain medicine CME often qualifies for both; specialty interventional CME may be ABPM-specific. Tag CME by applicable board. ABPM and ABA counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Pain specialist multi-credential renewal calendar',
    desc: '"ABA MOCA — ABA, continuous assessment, 2-year cycles." "ABPM Pain Medicine MOC — 10-year cert, continuous activity." "State medical license CME — biennial, varies." "DEA registration — 3-year." "Controlled substance prescribing CE — state required, varies." "ACLS — 2-year." All pain medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'DEA and controlled substance regulatory analytics',
    desc: 'Pain management specialists face annual DEA registration renewal plus state-mandated controlled substance prescribing CE requirements that vary by state. Controlled substance CME tagged separately from general pain medicine CME. DEA registration dates tracked on separate 3-year cycles from medical license. Analytics confirms DEA and state CS prescribing requirements satisfied independently from board MOC.',
  },
  {
    icon: Users,
    title: 'ASRA, AAPM, and pain medicine professional involvement',
    desc: '"ASRA Pain Medicine Annual Meeting — spring." "AAPM Annual Meeting — march." "APS Annual Meeting — may." "Interventional pain procedures workshop — annual." "State pain medicine society conference." All pain medicine professional development on calendar. Conference CME tagged by applicable board (ABA vs. ABPM) in advance for maximum MOC credit.',
  },
]

const PAIN_WORKFLOW = [
  { time: 'Annual planning', action: 'ABA MOCA 2-year assessment cycles, ABPM Pain MOC activities, state medical license biennial renewal, DEA 3-year renewal, controlled substance prescribing CE (state-required), ASRA Annual Meeting, and state license dates all loaded in January. CME pace calculated per board requirement independently.' },
  { time: 'CME completion', action: '"ABPM-approved CME — interventional approaches to chronic low back pain, 4 CME, pain medicine." Tagged by applicable board. ABPM Pain MOC CME counter updates. If ABA also accepts the CME, ABA MOCA counter updates. State license CME counter updates if state-approved. Each credential tracked independently.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year, may." DEA registration tracked on 3-year cycle separate from biennial state license and board MOC cycles. DEA renewal placed on calendar when registration is current — not when expiration approaches. State DEA-X DATA waiver or equivalent for buprenorphine prescribing tracked separately if applicable.' },
  { time: 'Controlled substance CE', action: '"State-required CS prescribing CE — 3 CE hours, controlled substance regulations." State-mandated controlled substance CE tracked as a required subset of total CME. CS-specific CE from pain medicine content tagged with CS designation. State CS prescribing CE requirement confirmed satisfied independently from CME total.' },
  { time: 'Renewal audit', action: 'Analytics: ABA MOCA on pace? ABPM Pain MOC CME current? State medical license CME complete? DEA registration current? State controlled substance CE satisfied? ACLS valid? Complete pain medicine credential audit 90 days before earliest renewal. ABA, ABPM, and state board documentation prepared separately.' },
]

export default function ForPainManagementSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pain Management Specialists"
        title={
          <>
            ABA and ABPM MOC maintained.
            <br />
            <em className="not-italic text-gold">DEA and CS CE never missed.</em>
          </>
        }
        lede="Pain management specialists manage ABPM Pain Medicine MOC with ABA anesthesiology base board MOC on independent cycles, DEA 3-year registration renewal, state-mandated controlled substance prescribing CE, state medical license CME, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full pain medicine credential calendar in one view."
        crumbs={[{ label: 'For Pain Management Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pain management specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pain medicine credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pain medicine credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board and regulatory cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {PAIN_WORKFLOW.map((step, i) => (
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
                &ldquo;Pain medicine is unique because I have the ABA MOCA, the ABPM Pain Medicine MOC, a state medical license with biennial CME, DEA registration that renews every 3 years, and state-required controlled substance prescribing CE on its own schedule. The DEA was the credential I nearly let lapse — it operates on a 3-year cycle that doesn&apos;t align with anything else I maintain. Momenties puts all five on the same calendar with 90-day lead time. I don&apos;t have to remember cycle lengths anymore.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Andrew K., MD, ABA, ABPM</div>
                  <div className="text-xs text-muted-foreground">Pain management specialist, academic interventional pain program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pain medicine credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPM Pain Medicine MOC CME — continuous',
                'ABA MOCA assessment — 2-year cycles',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'State controlled substance prescribing CE',
                'ACLS certification — 2-year renewal',
                'Fluoroscopy operator permit (where required)',
                'ASRA and AAPM conference CME planning',
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
        title="ABA and ABPM MOC maintained."
        subtitle="CME tracking by board, DEA and controlled substance calendar, and pain medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
