import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Dermatology Nurse Practitioners — DCNP CE renewal, dermatology NP credential management',
  description:
    'Dermatology nurse practitioners manage ANCC FNP or AANP FNP certification biennial CE, DCNP specialty certification from DERNCC if held independently, state APRN licensure CE, DEA 3-year renewal for prescribing, laser safety officer certification, annual dermatology procedural competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full dermatology NP credential calendar.',
  alternates: { canonical: '/for/dermatology-nurse-practitioners' },
  openGraph: {
    title: 'Momenties for Dermatology Nurse Practitioners',
    description: 'DCNP CE renewal, dermatology NP credential management.',
    url: '/for/dermatology-nurse-practitioners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for primary NP certification and DCNP specialty credential independently',
    desc: 'Dermatology NPs hold primary NP certification through ANCC (Family NP, Adult-Gerontology NP) or AANP (Family NP) — biennial renewal with 100 CE hours. The Dermatology Certified Nurse Practitioner (DCNP) credential from DERNCC is a separate specialty certification requiring independent CE with dermatology-specific content. State APRN licensure biennial CE runs on a third independent cycle. DEA registration 3-year cycle for prescribing topical medications, oral antibiotics, retinoids, and immunosuppressants. Each tracked separately.',
  },
  {
    icon: Clock,
    title: 'Dermatology NP multi-credential renewal calendar',
    desc: '"Primary NP certification (ANCC/AANP) — biennial 100 CE." "DCNP — DERNCC specialty renewal, dermatology content." "State APRN licensure — biennial CE." "DEA registration — 3-year renewal." "Laser safety officer certification — institutional renewal." "Annual dermatology procedural competency." "SDNP or DNAP membership — annual." All dermatology NP credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Laser safety certification and dermatology procedural competency analytics',
    desc: 'Dermatology NPs operating laser and energy-based devices require Laser Safety Officer (LSO) certification — typically renewed every 2-3 years through ASLMS or institutional programs — separate from NP or DCNP CE. Annual dermatology procedural competency assessments cover device-specific training for new laser platforms, injectables training for new filler or botulinum toxin products, and biopsy technique updates. Mohs surgery assisting CE tracked separately from cosmetic procedural CE. Each tracked with device and procedure specificity.',
  },
  {
    icon: Users,
    title: 'SDNP, AAD, and dermatology professional involvement',
    desc: '"AAD Annual Meeting — march." "SDNP Annual Conference." "DNAP Annual Meeting." "ASLMS Annual Conference (laser and energy devices)." "ASDS Annual Meeting (dermatologic surgery)." "Skin cancer surveillance and dermoscopy CE." "Biologics for atopic dermatitis and psoriasis updates." "Cosmetic injectables technique CE — botulinum toxin and fillers." All dermatology NP professional development on calendar. AAD and SDNP conference CE tagged by ANCC/AANP and DCNP applicability.',
  },
]

const DNP_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary NP certification biennial CE pace (100 CE/2yr, annualized to 50/year), DCNP specialty CE pace with dermatology content, state APRN biennial CE, DEA 3-year renewal, laser safety officer certification renewal, annual procedural competency, AAD Annual Meeting, and membership all loaded in January. Primary NP CE counter, DCNP CE counter, and state APRN CE tracked independently.' },
  { time: 'CE completion', action: '"AAD-approved — biologic therapy management in moderate-to-severe atopic dermatitis: IL-4/IL-13 inhibitor mechanisms, dupilumab and tralokinumab dosing protocols, and monitoring for conjunctivitis and injection site reactions, 1.5 CE, ANCC-approved provider, DCNP applicable — dermatology specialty domain." Primary NP CE counter updates. DCNP counter updates. State APRN CE updates if provider approved by state board. Dermatology-specific content confirmed.' },
  { time: 'Laser safety', action: '"Laser Safety Officer recertification — ASLMS laser safety course, Q-switched Nd:YAG and fractional CO2 device updates, 2 CE, Q2." Laser safety officer certification tracked separately from NP board CE. LSO certification required for operating or supervising laser procedures — regulatory requirement under OSHA and state radiation safety programs for class 3B and class 4 lasers. Annual practice log for laser procedures maintained alongside LSO certification for institutional credentialing.' },
  { time: 'Procedural CE', action: '"Injectable CE — hyaluronic acid filler advanced techniques: cannula placement, vascular anatomy review, and vascular occlusion emergency management, 2 CE, dermatology procedural domain." Procedural CE tracked as a practice competency category separate from diagnostic dermatology CE. Filler and botulinum toxin technique updates tracked with product and technique specificity. Vascular complication management CE logged for risk management documentation alongside procedural CE.' },
  { time: 'Renewal audit', action: 'Analytics: Primary NP CE on pace (100/2yr)? DCNP dermatology content adequate? State APRN CE complete? LSO certification current? DEA valid? Annual procedural competency documented? SDNP membership active? Complete dermatology NP credential audit 90 days before earliest renewal. ANCC/AANP, DERNCC, state board, and institutional documentation maintained separately.' },
]

export default function ForDermatologyNursePractitionersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Dermatology Nurse Practitioners"
        title={
          <>
            Primary NP certification and DCNP maintained.
            <br />
            <em className="not-italic text-gold">Laser safety current. Procedural competencies documented.</em>
          </>
        }
        lede="Dermatology nurse practitioners manage primary ANCC or AANP NP certification biennial CE with 100 hours, DCNP specialty certification CE on an independent cycle with dermatology-specific content, state APRN licensure biennial CE, DEA 3-year registration for prescribing, Laser Safety Officer certification for device operation, annual procedural competency assessments for injectables and laser platforms, and professional development at AAD and SDNP simultaneously. Momenties tracks CE by dermatology NP credential, surfaces renewal deadlines 90 days early, and manages the full dermatology NP credential calendar in one view."
        crumbs={[{ label: 'For Dermatology Nurse Practitioners' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dermatology nurse practitioners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for dermatology NP credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Dermatology NP credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every ANCC renewal cycle, DCNP requirement, and laser safety obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {DNP_WORKFLOW.map((step, i) => (
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
                &ldquo;I have my ANCC FNP, my DCNP through DERNCC, and my state APRN license — three separate renewals on completely different schedules. DCNP is newer so it came up mid-cycle of my FNP renewal. My practice has multiple laser platforms so I maintain LSO certification. I also need DEA because I prescribe. Then there&apos;s the practice-level annual training on new devices and new injectable products. At any point I have six credential items active across different organizations. I had everything in my email and a paper calendar. Momenties was the first time I saw the full picture — including which CE credits counted for DCNP versus just FNP.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Karen W., FNP-BC, DCNP</div>
                  <div className="text-xs text-muted-foreground">Dermatology nurse practitioner, medical and cosmetic dermatology group practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All dermatology NP credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary NP certification CE — ANCC/AANP biennial 100 CE',
                'DCNP specialty certification — DERNCC renewal, dermatology content',
                'State APRN licensure CE — biennial, state-specific requirements',
                'DEA registration renewal — 3-year',
                'Laser Safety Officer certification — institutional/ASLMS renewal',
                'Annual dermatology procedural competency — injectables and laser platforms',
                'SDNP or DNAP membership renewal — annual',
                'AAD and SDNP conference CE planning by ANCC and DCNP applicability',
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
        title="Primary NP certification and DCNP maintained."
        subtitle="CE tracking by specialty domain, laser safety renewal, procedural competency calendar, and dermatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
