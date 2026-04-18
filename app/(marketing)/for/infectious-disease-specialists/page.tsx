import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Infectious Disease Specialists — ABIM ID MOC, CME tracking, and infectious disease credential management',
  description:
    'Infectious disease specialists manage ABIM dual MOC (Internal Medicine + Infectious Disease subspecialty), state medical license biennial CME, antimicrobial stewardship certifications, HIV specialist credential (AAHIVS), DEA registration, and professional development simultaneously. Momenties tracks CME by credential, surfaces renewal deadlines 90 days early, and manages the full ID credential calendar.',
  alternates: { canonical: '/for/infectious-disease-specialists' },
  openGraph: {
    title: 'Momenties for Infectious Disease Specialists',
    description: 'ABIM ID MOC, CME tracking, and infectious disease credential management.',
    url: '/for/infectious-disease-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM Internal Medicine and ID MOC',
    desc: 'ABIM Internal Medicine MOC requires ongoing CME and periodic assessment. ABIM Infectious Disease subspecialty MOC requires subspecialty CME and separate knowledge check-ins. Both board tracks run concurrently with different CME requirements. Tag every CME by applicable ABIM board track. IM and ID counters tracked independently — ID subspecialty CME may or may not satisfy IM general MOC requirements.',
  },
  {
    icon: Clock,
    title: 'ID specialist multi-credential renewal calendar',
    desc: '"ABIM IM MOC — continuous, annual attestation." "ABIM ID subspecialty MOC — continuous, knowledge check-in cycle." "State medical license — biennial CME, varies." "AAHIVS HIV specialist — 2-year, if credentialed." "DEA registration — 3-year." "IDSA membership — annual." All infectious disease credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'AAHIVS and antimicrobial stewardship CE analytics',
    desc: 'ID specialists who hold the AAHIVS HIV Specialist credential require HIV-specific CE for 2-year renewal independent of ABIM MOC. Antimicrobial stewardship program CE tracked separately for hospital credentialing and institutional requirements. AAHIVS CE tagged independently from ABIM CME. Analytics confirms AAHIVS renewal CE satisfied on its own 2-year cycle without conflation with ABIM requirements.',
  },
  {
    icon: Users,
    title: 'IDSA, HIV Medicine Association, and ID professional involvement',
    desc: '"IDWeek — IDSA/SHEA joint annual conference, october." "HIV Medicine Association Annual Meeting — may." "ASM Microbe — annual." "Hospital infection prevention grand rounds." "Antimicrobial stewardship program education." All infectious disease professional development on calendar. IDWeek CME planned by ABIM board track in advance for maximum MOC credit.',
  },
]

const ID_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC annual attestation, ABIM ID Knowledge Check-In cycle, state medical license biennial renewal, AAHIVS 2-year renewal (if applicable), DEA 3-year renewal, IDWeek, and IDSA membership all loaded in January. CME pace calculated per ABIM board requirement independently.' },
  { time: 'CME completion', action: '"ABIM-MOC approved — antimicrobial stewardship in the era of carbapenem resistance, 3 CME, ID subspecialty." Tagged by ABIM board track. ABIM ID MOC CME counter updates. If IM MOC also accepts the CME, ABIM IM counter updates. AAHIVS CE counter updates if HIV-relevant CE is AAHIVS-approved. Each credential tracked independently.' },
  { time: 'AAHIVS credential', action: '"AAHIVS HIV Specialist renewal — 2-year, september." AAHIVS requires CME in HIV medicine plus patient volume documentation. AAHIVS renewal tracked on 2-year cycle independent of ABIM 10-year recertification or annual MOC. HIV medicine CE tagged with AAHIVS applicability at completion.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year, june." DEA tracked on 3-year cycle separate from biennial state license and board MOC. ID specialists who prescribe antiretrovirals or controlled substances for pain management must maintain DEA registration. DEA renewal placed on calendar when current registration is confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC annual attestation current? ABIM ID CME on pace? Knowledge Check-In cycle current? AAHIVS CE satisfied? State medical license CME complete? DEA registration valid? IDSA membership active? Complete ID credential audit 90 days before earliest renewal. Separate documentation per board and credentialing organization.' },
]

export default function ForInfectiousDiseaseSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Infectious Disease Specialists"
        title={
          <>
            ABIM IM and ID MOC maintained.
            <br />
            <em className="not-italic text-gold">AAHIVS and DEA never lapsed.</em>
          </>
        }
        lede="Infectious disease specialists manage ABIM dual board MOC (Internal Medicine and ID subspecialty), AAHIVS HIV Specialist credential with 2-year renewal, DEA 3-year registration, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by ABIM board track, surfaces renewal deadlines 90 days early, and manages the full infectious disease credential calendar in one view."
        crumbs={[{ label: 'For Infectious Disease Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How infectious disease specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for ID credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Infectious disease credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {ID_WORKFLOW.map((step, i) => (
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
                &ldquo;I manage ABIM IM MOC, ABIM ID subspecialty MOC, AAHIVS renewal, a state medical license, and DEA registration. The AAHIVS 2-year cycle is what I nearly missed — it doesn&apos;t align with anything else and it has its own CME category requirement in HIV medicine. I also discovered that my ID subspecialty CME from IDWeek only partially counted toward my IM MOC. Momenties separated all five tracks and I can see each one independently without confusion.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nadia R., MD, FACP, AAHIVS</div>
                  <div className="text-xs text-muted-foreground">Infectious disease specialist, academic HIV program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All infectious disease credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM IM MOC CME — annual attestation',
                'ABIM ID subspecialty MOC — knowledge check-in cycle',
                'AAHIVS HIV Specialist — 2-year renewal',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Antimicrobial stewardship CE documentation',
                'IDSA membership renewal — annual',
                'IDWeek and HIVMA conference CME planning',
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
        title="ABIM IM and ID MOC maintained."
        subtitle="CME tracking by board track, AAHIVS and DEA renewal calendar, and ID professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
