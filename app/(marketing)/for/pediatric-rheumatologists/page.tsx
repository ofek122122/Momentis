import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Rheumatologists — ABP MOC CME renewal, pediatric rheumatology credential management',
  description:
    'Pediatric rheumatologists manage ABP general pediatrics primary MOC with pediatric rheumatology subspecialty content, ABP pediatric rheumatology subspecialty certification on a separate cycle, annual biologic therapy CE for pediatric JIA and systemic lupus, ACLS and PALS 2-year renewals, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric rheumatologist credential calendar.',
  alternates: { canonical: '/for/pediatric-rheumatologists' },
  openGraph: {
    title: 'Momenties for Pediatric Rheumatologists',
    description: 'ABP MOC CME renewal, pediatric rheumatology credential management.',
    url: '/for/pediatric-rheumatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric rheumatology subspecialty independently',
    desc: 'Pediatric rheumatologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric rheumatology subspecialty certification on a separate cycle — two ABP credentials with different content requirements. ABP pediatric rheumatology subspecialty requires rheumatology-specific content including juvenile idiopathic arthritis classification and biologic treatment algorithms, pediatric systemic lupus erythematosus, juvenile dermatomyositis, pediatric vasculitis syndromes, autoinflammatory disorders (PFAPA, CAPS, sJIA with MAS), and musculoskeletal ultrasound. ABP general pediatrics MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Pediatric rheumatologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric rheumatology subspecialty — rheumatology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual biologic therapy prescribing CE — JIA and pSLE treatments." "Annual musculoskeletal ultrasound CE (if MSUS program)." "ACR/PRSYM membership — annual." All pediatric rheumatologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual JIA biologic CE and pediatric SLE treatment update analytics',
    desc: 'Pediatric rheumatologists managing juvenile idiopathic arthritis must maintain CE on biologic and JAK inhibitor therapy — the landscape has changed dramatically with approvals of abatacept, tocilizumab, secukinumab, ixekizumab, and tofacitinib across JIA categories with pediatric indications. Annual biologic CE ensures current knowledge of treatment sequencing, contraindication screening (TB and hepatitis B before TNF inhibitors), and monitoring protocols. Pediatric SLE management CE: belimumab and voclosporin approvals in adult lupus nephritis have driven updated practice guidelines for pediatric application — annual CE on pSLE management is essential as adult approvals create off-label pediatric prescribing questions.',
  },
  {
    icon: Users,
    title: 'ACR, PRSYM, and pediatric rheumatology professional involvement',
    desc: '"ACR Annual Meeting — november." "PRSYM Annual Scientific Meeting — march (Pediatric Rheumatology Symposium)." "EULAR Annual Congress — june." "JIA biologic CE — TNF inhibitor versus IL-6 inhibitor versus IL-17 inhibitor in polyarticular JIA, JAK inhibitor approval in JIA categories." "Pediatric lupus CE — belimumab evidence in pSLE, lupus nephritis class III/IV biopsy guidance, hydroxychloroquine dosing and retinal toxicity monitoring." "Autoinflammatory CE — Anakinra and canakinumab in sJIA with MAS, NLRP3 inhibitor therapy in CAPS." "Musculoskeletal ultrasound CE — power Doppler synovitis scoring, OMERACT pediatric MSUS definitions." All pediatric rheumatology professional development on calendar. ACR and PRSYM conference CME tagged by ABP primary and subspecialty applicability.',
  },
]

const PEDRHEUM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (rheumatology content weighted), ABP pediatric rheumatology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual JIA biologic CE, annual pSLE CE, musculoskeletal ultrasound CE (if applicable), ACR Annual Meeting, PRSYM, and ACR membership all loaded in January. ABP primary counter, rheumatology subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"ACR-approved — tofacitinib in polyarticular JIA: 2-year extension data from phase III trial, safety signals in adult RA versus pediatric JIA populations, contraindications in adolescent patients with history of malignancy, and monitoring for opportunistic infections and herpes zoster, 2 CME, AMA PRA Category 1, ABP MOC applicable, ABP pediatric rheumatology applicable — biologic therapy domain." ABP primary counter updates. Rheumatology subspecialty counter updates. State licensure CME updates.' },
  { time: 'Biologic CE', action: '"Annual JIA biologic prescribing CE — ACR JIA treatment guideline 2021 update review with 2023 supplement: abatacept versus adalimumab in RF-negative polyarticular JIA, secukinumab in enthesitis-related arthritis and psoriatic JIA, IL-18 and IL-6 in sJIA with MAS risk stratification, 3 CME, ABP pediatric rheumatology applicable — treatment domain, Q2." Annual biologic CE placed Q2 after ACR supplement guidance updates. JAK inhibitor approvals in JIA categories are expanding — annual CE placed before late-summer starting school year when patients are seen for annual assessments.' },
  { time: 'MSUS CE', action: '"Annual musculoskeletal ultrasound CE — OMERACT pediatric MSUS scoring module: synovial hypertrophy versus synovial effusion differentiation, power Doppler grade 2 versus 3 significance in JIA treatment decisions, and tenosynovitis assessment in polyarticular JIA, 2 CME, ABP pediatric rheumatology applicable — diagnostics domain, Q3." Annual MSUS CE placed for pediatric rheumatologists with active musculoskeletal ultrasound programs. OMERACT pediatric ultrasound scoring definitions are updated as evidence matures — annual CE placed Q3 before the academic year lupus and JIA follow-up season.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric rheumatology subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Annual JIA biologic CE documented? MSUS CE current (if applicable)? ACR membership active? Complete pediatric rheumatologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricRheumatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Rheumatologists"
        title={
          <>
            ABP MOC and pediatric rheumatology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">JIA biologic CE current. PALS and ACLS tracked.</em>
          </>
        }
        lede="Pediatric rheumatologists manage ABP general pediatrics continuous MOC with pediatric rheumatology subspecialty content, ABP rheumatology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals on potentially independent expiration dates, annual JIA biologic and JAK inhibitor CE as approvals expand into new pediatric categories, musculoskeletal ultrasound CE for OMERACT-trained programs, and professional development at ACR and PRSYM simultaneously. Momenties tracks CME by credential, surfaces renewal deadlines 90 days early, and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Rheumatologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric rheumatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric rheumatologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric rheumatologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, pediatric rheumatology subspecialty, and annual JIA biologic and pSLE treatment CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDRHEUM_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my pediatric rheumatology subspecialty separately — different content requirements, different counters. In pediatric rheumatology the biologic and JAK inhibitor treatment landscape changes every year. When tofacitinib got a JIA indication I needed CE before I started prescribing it in my patients — that CE is a practice requirement regardless of board timing. I do musculoskeletal ultrasound in my practice, and staying current with OMERACT pediatric scoring definitions requires annual CE. ACLS and PALS are both at 2 years — they expired 11 months apart because I got PALS during residency and then ACLS as an attending. DEA 3-year. State license biennial. The JIA biologic CE is the one that has a de facto seasonal deadline for me because I use the summer to update treatment plans before the school year — I need it current before the fall patient surge.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Grace Y., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric rheumatologist and JIA program director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric rheumatologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, rheumatology content weighted',
                'ABP pediatric rheumatology subspecialty — JIA, pSLE, vasculitis, autoinflammatory domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal (independent expiration tracking)',
                'PALS certification — 2-year renewal (independent expiration tracking)',
                'Annual JIA biologic CE — ACR guideline updates, new approval monitoring',
                'ACR and PRSYM conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric rheumatology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, annual JIA biologic CE, ACLS and PALS independent renewal tracking, and pediatric rheumatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
