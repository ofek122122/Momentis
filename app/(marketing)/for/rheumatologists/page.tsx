import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Rheumatologists — ABIM IM and Rheumatology MOC, CME tracking, and rheumatology credential management',
  description:
    'Rheumatologists manage ABIM dual MOC (Internal Medicine + Rheumatology subspecialty), state medical license biennial CME, biologics and REMS certifications, DEA registration, and professional development simultaneously. Momenties tracks CME by ABIM board track, surfaces renewal deadlines 90 days early, and manages the full rheumatology credential calendar.',
  alternates: { canonical: '/for/rheumatologists' },
  openGraph: {
    title: 'Momenties for Rheumatologists',
    description: 'ABIM IM and Rheumatology MOC, CME tracking, and rheumatology credential management.',
    url: '/for/rheumatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM Internal Medicine and Rheumatology MOC',
    desc: 'ABIM Internal Medicine MOC requires ongoing CME and periodic assessment. ABIM Rheumatology subspecialty MOC requires subspecialty CME and separate knowledge check-ins. Both board tracks run concurrently with different CME requirements. Tag every CME by applicable ABIM board track. IM and Rheumatology counters tracked independently — subspecialty CME may partially or fully satisfy IM general MOC requirements depending on content.',
  },
  {
    icon: Clock,
    title: 'Rheumatologist multi-credential renewal calendar',
    desc: '"ABIM IM MOC — continuous, annual attestation." "ABIM Rheumatology subspecialty MOC — continuous, knowledge check-in cycle." "State medical license — biennial CME, varies by state." "DEA registration — 3-year." "REMS program CE (e.g., Risk MAP for biologics) — ongoing." "ACR membership — annual." All rheumatology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Biologics REMS and prescribing CE analytics',
    desc: 'Rheumatologists who prescribe high-risk biologics (TNF inhibitors, JAK inhibitors, rituximab) may be enrolled in REMS programs with required prescriber education. REMS CE tracked separately from ABIM CME — REMS completion is a regulatory requirement, not an optional credit. Analytics confirms REMS prescriber requirements satisfied on schedule independent of board MOC CME totals.',
  },
  {
    icon: Users,
    title: 'ACR, EULAR, and rheumatology professional involvement',
    desc: '"ACR Convergence — annual, november." "EULAR Annual Meeting — june." "ARHP Annual Meeting — fall." "Hospital grand rounds — rheumatology." "State rheumatology society conference." All rheumatology professional development on calendar. ACR Convergence CME tagged by ABIM board track in advance — IM and Rheumatology MOC credit planned before the conference.',
  },
]

const RHEUM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC annual attestation, ABIM Rheumatology Knowledge Check-In cycle, state medical license biennial renewal, DEA 3-year renewal, REMS program requirements, ACR Convergence, and ACR membership all loaded in January. CME pace calculated per ABIM board requirement independently.' },
  { time: 'CME completion', action: '"ABIM-MOC approved — management of refractory rheumatoid arthritis: JAK inhibitors and biologics, 3 CME, rheumatology subspecialty." Tagged by ABIM board track. ABIM Rheumatology MOC counter updates. If IM MOC accepts the content, ABIM IM counter also updates. Each board tracked independently.' },
  { time: 'REMS compliance', action: '"Biologics REMS prescriber education — TNF inhibitor risk mitigation, 1 CE, REMS required." REMS education tracked as mandatory regulatory compliance, not discretionary CME. REMS program requirements satisfied before prescribing authorization lapses. REMS CE logged independently of ABIM MOC counters.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year, august." DEA tracked on 3-year cycle separate from biennial state license and annual ABIM MOC attestation. Rheumatologists who prescribe controlled substances for pain management in inflammatory conditions must maintain DEA registration. DEA renewal placed on calendar when current registration is confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC annual attestation current? ABIM Rheumatology CME on pace? Knowledge Check-In cycle current? State medical license CME complete? DEA registration valid? REMS prescriber requirements satisfied? ACR membership active? Complete rheumatology credential audit 90 days before earliest renewal. Separate documentation per board and program.' },
]

export default function ForRheumatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Rheumatologists"
        title={
          <>
            ABIM IM and Rheumatology MOC maintained.
            <br />
            <em className="not-italic text-gold">REMS and DEA never lapsed.</em>
          </>
        }
        lede="Rheumatologists manage ABIM dual board MOC (Internal Medicine and Rheumatology subspecialty) on independent cycles, biologics REMS prescriber education requirements, DEA 3-year registration renewal, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by ABIM board track, surfaces renewal deadlines 90 days early, and manages the full rheumatology credential calendar in one view."
        crumbs={[{ label: 'For Rheumatologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How rheumatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for rheumatology credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Rheumatology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board and regulatory cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {RHEUM_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABIM IM MOC, ABIM Rheumatology MOC, a state medical license, DEA registration, and REMS prescriber education requirements for the biologics I prescribe. The biologics REMS requirements are the ones I was managing by email reminders — every drug has a different REMS program on its own schedule. Momenties put all of them on one calendar with 90-day alerts. Now I can see which REMS is due and which board CME is on pace, without switching between five different tracking systems.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sunita P., MD, FACP, FACR</div>
                  <div className="text-xs text-muted-foreground">Rheumatologist, academic inflammatory arthritis program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All rheumatology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM IM MOC CME — annual attestation',
                'ABIM Rheumatology subspecialty MOC — knowledge check-in',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Biologics REMS prescriber education — per drug',
                'ACR membership renewal — annual',
                'ACR Convergence CME planning by board track',
                'Ultrasound or procedural credentialing (where applicable)',
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
        title="ABIM IM and Rheumatology MOC maintained."
        subtitle="CME tracking by board track, REMS and DEA renewal calendar, and rheumatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
