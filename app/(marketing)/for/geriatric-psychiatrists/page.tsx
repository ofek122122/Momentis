import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Geriatric Psychiatrists — ABPN MOC CME renewal, geriatric psychiatry credential management',
  description:
    'Geriatric psychiatrists manage ABPN psychiatry board MOC continuous CME with geriatric psychiatry subspecialty content, ABPN geriatric psychiatry subspecialty certification on an independent 10-year cycle, state medical license biennial CME, DEA 3-year renewal for psychotropic prescribing, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full geriatric psychiatrist credential calendar.',
  alternates: { canonical: '/for/geriatric-psychiatrists' },
  openGraph: {
    title: 'Momenties for Geriatric Psychiatrists',
    description: 'ABPN MOC CME renewal, geriatric psychiatry credential management.',
    url: '/for/geriatric-psychiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN psychiatry MOC and geriatric psychiatry subspecialty independently',
    desc: 'Geriatric psychiatrists hold ABPN psychiatry board certification under continuous MOC and ABPN geriatric psychiatry subspecialty certification on a 10-year examination cycle — two separate ABPN credentials with different renewal structures. ABPN geriatric psychiatry subspecialty certification requires an examination every 10 years and CME with geriatric psychiatry-specific content between examination cycles. State medical license biennial CME runs on a third independent cycle. DEA registration 3-year cycle critical for psychotropic and behavioral medication prescribing in older adults.',
  },
  {
    icon: Clock,
    title: 'Geriatric psychiatrist multi-credential renewal calendar',
    desc: '"ABPN psychiatry MOC — continuous CME." "ABPN geriatric psychiatry subspecialty — 10-year examination cycle, CE between exams." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual dementia and behavioral health competency." "AAGP membership — annual." "APA membership — annual." All geriatric psychiatrist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABPN geriatric subspecialty examination preparation and CME content analytics',
    desc: 'ABPN geriatric psychiatry subspecialty certification requires examination every 10 years — the 10-year cycle is long enough that the examination deadline can move from active awareness to background planning risk. CME between examination cycles should map to geriatric psychiatry content domains: late-life depression and anxiety, dementia behavioral symptoms management, psychopharmacology in older adults (polypharmacy, anticholinergic burden), and delirium assessment and management. Content tracking between examinations prevents end-of-decade scramble for geriatric-specific CE.',
  },
  {
    icon: Users,
    title: 'AAGP, APA, and geriatric psychiatry professional involvement',
    desc: '"AAGP Annual Meeting — march." "APA Annual Meeting — may." "Alzheimer\'s Association International Conference." "American Geriatrics Society Annual Meeting." "Dementia behavioral symptom management CE." "Late-life bipolar disorder management CE." "Psychopharmacology in frail older adults — polypharmacy and CYP interactions." "Capacity assessment and guardianship documentation CE." All geriatric psychiatry professional development on calendar. AAGP conference CME tagged by ABPN primary and geriatric subspecialty domain applicability.',
  },
]

const GP_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN psychiatry MOC CME pace (geriatric content weighted), ABPN geriatric subspecialty CE pace with 10-year examination target date tracked, state medical license biennial CME, DEA 3-year renewal, AAGP Annual Meeting, APA Annual Meeting, and AAGP membership all loaded in January. ABPN MOC counter, geriatric subspecialty CE counter, and state licensure CME tracked independently. 10-year examination countdown displayed in credential dashboard.' },
  { time: 'CME completion', action: '"AAGP-approved — behavioral and psychological symptoms of dementia: non-pharmacologic intervention hierarchy, antipsychotic prescribing in dementia (black box warning framework), and caregiver-mediated behavioral strategies, 2 CME, AMA PRA Category 1, ABPN MOC applicable, geriatric subspecialty applicable." ABPN MOC counter updates. Geriatric subspecialty CE counter updates. State licensure CME updates. Geriatric-specific content confirmed.' },
  { time: 'Subspecialty exam', action: '"ABPN geriatric psychiatry subspecialty examination — 10-year cycle countdown." 10-year examination cycle placed with 24-month advance alert for preparation. ABPN geriatric psychiatry subspecialty examination requires preparation: geriatric psychiatry board review, content domain study, and examination registration. 24-month alert is the preparation window — not the exam date. Subspecialty examinations approached without preparation windows are approached with compressed study time that could have been distributed over 24 months of clinical CE.' },
  { time: 'Dementia CE', action: '"Annual dementia management CE update — new Alzheimer\'s disease disease-modifying therapy monitoring protocols, lecanemab and donanemab safety surveillance, and amyloid-related imaging abnormalities (ARIA) assessment, 1 CE, Q1." Annual dementia treatment update placed as a practice requirement for geriatric psychiatrists managing patients with Alzheimer\'s disease and related dementias. New disease-modifying therapies change monitoring requirements annually. CE placed at Q1 to align with FDA approval and guideline update cycles.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN psychiatry MOC CME on pace? Geriatric subspecialty CE current and content-appropriate? State medical license CME complete? DEA valid? ABPN geriatric examination date tracked? AAGP membership active? Complete geriatric psychiatrist credential audit 90 days before earliest renewal. ABPN, state board, and DEA documentation maintained separately.' },
]

export default function ForGeriatricPsychiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Geriatric Psychiatrists"
        title={
          <>
            ABPN MOC and geriatric subspecialty maintained.
            <br />
            <em className="not-italic text-gold">10-year examination tracked. Dementia CE documented.</em>
          </>
        }
        lede="Geriatric psychiatrists manage ABPN psychiatry continuous MOC with geriatric psychiatry-specific content, ABPN geriatric psychiatry subspecialty certification on a 10-year examination cycle with content-specific CE between exams, state medical license biennial CME, DEA 3-year registration for psychotropic and behavioral medication prescribing in older adults, annual dementia treatment updates as a practice requirement for disease-modifying therapy monitoring, and professional development at AAGP and APA simultaneously. Momenties tracks CME by geriatric psychiatrist credential, surfaces renewal deadlines 90 days early, and manages the full geriatric psychiatrist credential calendar in one view."
        crumbs={[{ label: 'For Geriatric Psychiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How geriatric psychiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for geriatric psychiatrist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Geriatric psychiatrist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABPN MOC cycle, geriatric subspecialty window, and 10-year examination preparation timeline.</h2>
          </Reveal>
          <div className="space-y-3">
            {GP_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN has my general psychiatry certification under continuous MOC and my geriatric psychiatry subspecialty on a 10-year examination cycle. The 10-year cycle is the one that catches people. It&apos;s long enough that you stop actively tracking it, and then suddenly you&apos;re 18 months from the exam with no preparation window. Between examinations I should be doing CME with geriatric psychiatry content — dementia, late-life depression, psychopharmacology in older adults — but that&apos;s not explicitly tracked by most CME logging systems. My state license is biennial. DEA is 3 years. The Alzheimer&apos;s disease space is moving fast right now so I do annual updates even when they aren&apos;t required. Momenties is the first system where the 10-year examination countdown is a real calendar item.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Eleanor F., MD</div>
                  <div className="text-xs text-muted-foreground">Geriatric psychiatrist, academic memory disorders and late-life psychiatry program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All geriatric psychiatrist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN psychiatry board MOC CME — continuous, geriatric content weighted',
                'ABPN geriatric psychiatry subspecialty — 10-year examination cycle countdown',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual dementia treatment update CE — disease-modifying therapy monitoring',
                'Annual capacity assessment and legal/ethical CE — geriatric practice requirement',
                'AAGP membership renewal — annual',
                'AAGP and APA conference CME planning by ABPN primary and geriatric subspecialty applicability',
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
        title="ABPN MOC and geriatric subspecialty maintained."
        subtitle="CME tracking with geriatric content requirements, 10-year examination countdown, dementia CE calendar, and geriatric psychiatry professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
