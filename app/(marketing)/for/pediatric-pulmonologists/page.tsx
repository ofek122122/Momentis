import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Pulmonologists — ABP MOC CME renewal, pediatric pulmonology credential management',
  description:
    'Pediatric pulmonologists manage ABP general pediatrics MOC continuous CME with pediatric pulmonology subspecialty content, ABP pediatric pulmonology subspecialty certification on an independent cycle, CF program annual accreditation requirements, ACLS and PALS 2-year renewals, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric pulmonologist credential calendar.',
  alternates: { canonical: '/for/pediatric-pulmonologists' },
  openGraph: {
    title: 'Momenties for Pediatric Pulmonologists',
    description: 'ABP MOC CME renewal, pediatric pulmonology credential management.',
    url: '/for/pediatric-pulmonologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric pulmonology subspecialty independently',
    desc: 'Pediatric pulmonologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric pulmonology subspecialty certification on a separate cycle — two ABP credentials with different CME content requirements. ABP pediatric pulmonology subspecialty requires pulmonology-specific content including asthma, cystic fibrosis, bronchopulmonary dysplasia, chronic lung disease, obstructive sleep apnea, and interventional bronchoscopy. State medical license biennial CME runs on a third independent cycle. Pediatric pulmonologists at CFFCARE-certified CF programs must satisfy CF Foundation program accreditation requirements separate from ABP MOC.',
  },
  {
    icon: Clock,
    title: 'Pediatric pulmonologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric pulmonology subspecialty — pulmonology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual CF program accreditation CE (if CFFCARE-certified center)." "ATS membership — annual." "APSR membership — annual." All pediatric pulmonologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'CFTR modulator therapy CE and CF program accreditation requirements analytics',
    desc: 'Pediatric pulmonologists managing cystic fibrosis patients with CFTR modulators (elexacaftor/tezacaftor/ivacaftor and ivacaftor monotherapy) must maintain CE on modulator eligibility, initiation protocols, drug interactions, and monitoring for liver function and cataract formation. CFTR modulator CE is a practice requirement as eligibility criteria expand to younger age groups — most recently approved for patients aged 2 years and older. CFFCARE-accredited CF programs require documented annual staff education meeting CF Foundation education standards, which are separate from ABP MOC requirements.',
  },
  {
    icon: Users,
    title: 'ATS, ACCP, and pediatric pulmonology professional involvement',
    desc: '"ATS International Conference — may." "ACCP CHEST Annual Meeting — october." "APSR Annual Congress." "North American CF Conference — october." "Asthma biologics CE — dupilumab and tezepelumab in severe pediatric asthma." "CFTR modulator therapy CE — elexacaftor/tezacaftor/ivacaftor eligibility and monitoring." "Pediatric OSA and sleep-disordered breathing CE — adenotonsillectomy outcomes, PAP therapy adherence." "Bronchopulmonary dysplasia CE — NICU to outpatient transition management." All pediatric pulmonology professional development on calendar. ATS and ACCP conference CME tagged by ABP general and subspecialty applicability.',
  },
]

const PEDPULM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (pulmonology content weighted), ABP pediatric pulmonology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual CF program accreditation CE (if CFFCARE-certified), ATS International Conference, NACFC, and ATS and ACCP memberships all loaded in January. ABP primary counter, pulmonology subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"ATS-approved — elexacaftor/tezacaftor/ivacaftor in children 2–5 years: expanded eligibility criteria, weight-based dosing adjustment, and monitoring for aminotransferase elevation and lens opacities in the preschool population, 2 CME, AMA PRA Category 1, ABP MOC applicable, pediatric pulmonology subspecialty applicable — cystic fibrosis domain." ABP primary counter updates. Pulmonology subspecialty counter updates. State licensure CME updates.' },
  { time: 'CF program CE', action: '"Annual CF program staff education — CF Foundation accreditation standard: CFTR modulator therapy protocol for eligible patients, nutritional assessment and enzyme dosing, and psychosocial screening with validated CF-specific tools, 2 CE, Q1." Annual CF program CE placed as CFFCARE accreditation requirement. CF Foundation program standards require documented annual multidisciplinary team education meeting CF care model standards. CE placed Q1 before the spring CF Foundation site visit cycle.' },
  { time: 'Sleep CE', action: '"Annual pediatric sleep medicine CE — OSA management in pediatric patients with trisomy 21 and craniofacial conditions: adenotonsillectomy outcomes in high-risk populations, PAP therapy adherence strategies, and hypoglossal nerve stimulation criteria in pediatric OSA, 2 CME, Q2." Annual sleep CE placed for pediatric pulmonologists with sleep program responsibilities. Pediatric OSA management guidelines updated with new population-specific evidence for Down syndrome and craniofacial conditions — annual CE placed mid-year to capture prior-year evidence.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric pulmonology subspecialty content requirements satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Annual CF program accreditation CE documented? ATS membership active? Complete pediatric pulmonologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricPulmonologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Pulmonologists"
        title={
          <>
            ABP MOC and pediatric pulmonology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">CF program CE documented. CFTR modulator updates tracked.</em>
          </>
        }
        lede="Pediatric pulmonologists manage ABP general pediatrics continuous MOC with pediatric pulmonology subspecialty content, ABP pulmonology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals, annual CF Foundation program accreditation CE at CFFCARE-certified centers, CFTR modulator therapy CE as eligibility expands to younger age groups, and professional development at ATS and NACFC simultaneously. Momenties tracks CME by pediatric pulmonologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Pediatric Pulmonologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric pulmonologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric pulmonologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric pulmonologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABP MOC cycle, pediatric pulmonology subspecialty window, and CF program accreditation annual requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDPULM_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my pediatric pulmonology subspecialty on separate cycles with different content requirements. I direct a CFFCARE-accredited CF center, which has its own annual staff education requirements from the CF Foundation — completely separate from ABP. The CFTR modulator space has changed completely in the last 4 years and the eligibility is expanding to younger and younger patients, so I do annual CE just to stay current with prescribing and monitoring, even when it&apos;s not board-required. I have sleep program responsibilities so I track sleep CE separately. ACLS and PALS both at 2-year renewals, state license biennial, DEA 3-year. I was using three different logs before Momenties. The CF Foundation program education requirement is the one that surprises people because it doesn&apos;t show up in any of the standard board reminder systems.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Hannah O., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric pulmonologist and CF center director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric pulmonologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, pulmonology content weighted',
                'ABP pediatric pulmonology subspecialty — asthma, CF, BPD, sleep domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'PALS certification — 2-year renewal',
                'Annual CF program accreditation CE — CF Foundation CFFCARE standard',
                'ATS and NACFC conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric pulmonology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, CF Foundation program CE, CFTR modulator updates, and pediatric pulmonology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
