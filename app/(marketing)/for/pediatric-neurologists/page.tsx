import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Neurologists — ABP MOC CME renewal, pediatric neurology credential management',
  description:
    'Pediatric neurologists manage ABP pediatrics board MOC continuous CME with pediatric neurology subspecialty content, ABPN neurology primary certification independent cycle (if dual-trained), state medical license biennial CME, DEA 3-year renewal, annual epilepsy monitoring unit competency, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric neurologist credential calendar.',
  alternates: { canonical: '/for/pediatric-neurologists' },
  openGraph: {
    title: 'Momenties for Pediatric Neurologists',
    description: 'ABP MOC CME renewal, pediatric neurology credential management.',
    url: '/for/pediatric-neurologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and ABPN neurology independently',
    desc: 'Pediatric neurologists certified through the ABP hold ABP general pediatrics primary certification and ABP pediatric neurology subspecialty certification — two ABP credentials with different CME content requirements. ABP general pediatrics MOC requires general pediatric CME; ABP pediatric neurology subspecialty requires pediatric neurology content including epilepsy and EEG interpretation, pediatric headache, neuromuscular disorders, neonatal neurology, and pediatric stroke. Pediatric neurologists who trained through adult neurology (ABPN pathway) hold ABPN neurology certification and ABP pediatric neurology on different cycles. State medical license biennial CME runs independently.',
  },
  {
    icon: Clock,
    title: 'Pediatric neurologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric neurology subspecialty — pediatric neurology content." "ABPN neurology (if dual-trained) — independent cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual epilepsy monitoring unit (EMU) competency (if applicable)." "CNS membership — annual." "AES membership — annual." All pediatric neurologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Epilepsy monitoring unit competency and anti-seizure medication update CE analytics',
    desc: 'Pediatric neurologists directing or working in an epilepsy monitoring unit (EMU) must maintain documented competency in EEG interpretation, seizure classification (ILAE criteria), and ictal-interictal continuum management. EMU credentialing at academic centers often requires annual competency documentation separate from ABP MOC CME. Anti-seizure medication (ASM) approvals have accelerated — five new ASMs approved in the last five years with pediatric indications requiring updated prescribing knowledge. Annual ASM update CE is a practice requirement for pediatric epileptologists managing medically refractory epilepsy.',
  },
  {
    icon: Users,
    title: 'CNS, AES, and pediatric neurology professional involvement',
    desc: '"CNS Annual Meeting — october." "AES Annual Meeting — december." "Child Neurology Society Annual Meeting — october." "AANP Annual Meeting." "Pediatric epilepsy — ILAE seizure classification and precision medicine targets CE." "Pediatric stroke — acute management and secondary prevention CE." "Neonatal seizure — recognition and phenobarbital vs. levetiracetam evidence CE." "Pediatric headache — CGRP pathway treatment CE." All pediatric neurology professional development on calendar. CNS and AES conference CME tagged by ABP general and subspecialty applicability.',
  },
]

const PNEUROL_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (pediatric neurology content weighted), ABP pediatric neurology subspecialty CE pace, ABPN neurology CME (if dual-trained, independent cycle), state medical license biennial CME, DEA 3-year renewal, annual EMU competency documentation (if applicable), CNS Annual Meeting, AES Annual Meeting, Child Neurology Society meeting, and CNS and AES memberships all loaded in January. ABP primary counter, ABP subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"AES-approved — pediatric absence epilepsy: EEG hallmarks and differential from attention deficit, ethosuximide vs. valproate vs. lamotrigine efficacy comparison, and cognitive outcomes in medically managed vs. uncontrolled absence, 2 CME, AMA PRA Category 1, ABP MOC applicable, pediatric neurology subspecialty applicable — epilepsy domain." ABP primary counter updates. Pediatric neurology subspecialty counter updates. State licensure CME updates. Epilepsy content confirmed.' },
  { time: 'EMU competency', action: '"Annual EMU competency documentation — ILAE seizure classification update, ictal-interictal continuum criteria, and critical EEG pattern recognition: NCSE, BIRDS, and GPD interpretation, 3 CME, Q1." Annual EMU competency placed as an institutional credentialing requirement for pediatric neurologists with EMU privileges. EMU competency CE separate from ABP MOC — institutional requirement that may or may not be tracked by ABP. Competency documentation maintained for Joint Commission and NAEC accreditation.' },
  { time: 'ASM update', action: '"Annual anti-seizure medication CE — cenobamate mechanism and drug interaction profile in pediatric patients with CYP2C19 polymorphism, fenfluramine dosing in Dravet syndrome, and ganaxolone for CDKL5 deficiency disorder, 2 CME, pediatric neurology subspecialty applicable — epilepsy pharmacotherapy domain, Q2." Annual ASM update placed for pediatric neurologists managing refractory epilepsy. New ASMs with pediatric indications change prescribing practice — CE placed mid-year to capture approvals from the prior FDA approval cycle.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric neurology subspecialty content requirements satisfied? ABPN neurology MOC current (if dual-trained)? State medical license CME complete? DEA valid? EMU competency documented? CNS and AES memberships active? Complete pediatric neurologist credential audit 90 days before earliest renewal. ABP, ABPN, state board, DEA, and institutional documentation maintained separately.' },
]

export default function ForPediatricNeurologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Neurologists"
        title={
          <>
            ABP MOC and pediatric neurology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">EMU competency documented. ASM updates tracked.</em>
          </>
        }
        lede="Pediatric neurologists manage ABP general pediatrics continuous MOC with pediatric neurology subspecialty content requirements, ABPN neurology certification on a separate cycle for dual-trained physicians, state medical license biennial CME, DEA 3-year registration, annual epilepsy monitoring unit competency documentation for EMU-credentialed neurologists, annual anti-seizure medication updates as pediatric epilepsy pharmacotherapy expands, and professional development at CNS and AES simultaneously. Momenties tracks CME by pediatric neurologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Pediatric Neurologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric neurologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric neurologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric neurologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABP MOC cycle, pediatric neurology subspecialty window, and annual EMU competency requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {PNEUROL_WORKFLOW.map((step, i) => (
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
                &ldquo;I trained through pediatrics so my primary board is ABP with a pediatric neurology subspecialty. My colleague trained through adult neurology so they have ABPN as their primary. We have different boards and different renewal cycles but we work in the same epilepsy program. The EMU competency documentation is an institutional requirement that neither of our boards tracks — it exists because our NAEC accreditation requires it. Anti-seizure medications are moving fast: three new approvals with pediatric indications in the past 24 months. I need annual CE just to maintain prescribing currency. My state license is biennial. DEA is 3 years. Momenties is the first system where I could set up my ABP primary and my ABP pediatric neurology subspecialty as two separate credential tracks with separate CE counters.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sarah N., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric neurologist and epileptologist, academic pediatric epilepsy and EMU program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric neurologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, pediatric neurology content weighted',
                'ABP pediatric neurology subspecialty — epilepsy, stroke, neuromuscular domains',
                'ABPN neurology MOC — independent cycle (if dual-trained)',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual EMU competency documentation — NAEC/Joint Commission requirement',
                'Annual anti-seizure medication update CE — new ASM prescribing currency',
                'CNS and AES conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric neurology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, EMU competency documentation, annual ASM updates, and pediatric neurology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
