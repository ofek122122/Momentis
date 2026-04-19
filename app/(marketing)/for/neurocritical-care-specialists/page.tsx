import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neurocritical Care Specialists — ABPN or ABIM MOC CME renewal, neurocritical care credential management',
  description:
    'Neurocritical care specialists manage ABPN neurology or ABIM primary board MOC with UCNS neurocritical care subspecialty certification on an independent 10-year cycle, continuous EEG monitoring competency, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full neurocritical care specialist credential calendar.',
  alternates: { canonical: '/for/neurocritical-care-specialists' },
  openGraph: {
    title: 'Momenties for Neurocritical Care Specialists',
    description: 'ABPN or ABIM MOC CME renewal, neurocritical care credential management.',
    url: '/for/neurocritical-care-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and UCNS neurocritical care subspecialty independently',
    desc: 'Neurocritical care specialists hold ABPN neurology (or ABIM internal medicine) primary board certification under continuous MOC and UCNS (United Council for Neurologic Subspecialties) neurocritical care subspecialty certification on a 10-year examination cycle — two separate certifications with different renewal structures. UCNS neurocritical care subspecialty requires examination every 10 years and CE with neurocritical care-specific content between examinations: subarachnoid hemorrhage, intracerebral hemorrhage, status epilepticus, acute ischemic stroke intervention, and traumatic brain injury management. Primary ABPN or ABIM MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Neurocritical care specialist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC (or ABIM IM MOC) — continuous CME." "UCNS neurocritical care subspecialty — 10-year examination cycle, NCC content between exams." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual continuous EEG monitoring competency (if NCCU director or EEG reader)." "NCS membership — annual." All neurocritical care specialist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'UCNS 10-year examination countdown and continuous EEG monitoring CE analytics',
    desc: 'UCNS neurocritical care subspecialty certification requires an examination every 10 years — long enough that the cycle disappears from active planning horizons and resurfaces as an urgent deadline. The preparation window for the UCNS NCC examination requires 12-24 months of focused study. Continuous EEG (cEEG) monitoring interpretation is a practice requirement for neurocritical care specialists directing a neurological intensive care unit — ACNS cEEG monitoring guidelines require documented competency for physicians interpreting critical care EEG, separate from ABPN MOC.',
  },
  {
    icon: Users,
    title: 'NCS, AAN, and neurocritical care professional involvement',
    desc: '"NCS Annual Meeting — october." "AAN Annual Meeting — april." "ESICM Neuromonitoring Group Annual Conference." "International Symposium on Intensive Care and Emergency Medicine." "Subarachnoid hemorrhage management CE — aneurysm rebleeding prevention, vasospasm surveillance and intervention." "Status epilepticus CE — benzodiazepine dosing, second-line levetiracetam and valproate protocols." "Acute ischemic stroke CE — thrombectomy patient selection, hemorrhagic transformation management." "TBI CE — intracranial pressure management, decompressive craniectomy criteria." All neurocritical care professional development on calendar. NCS and AAN conference CME tagged by primary board and UCNS applicability.',
  },
]

const NCC_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary ABPN neurology or ABIM IM MOC CME pace (NCC content weighted), UCNS neurocritical care subspecialty CE pace with 10-year examination target tracked, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual cEEG competency (if applicable), NCS Annual Meeting, AAN Annual Meeting, and NCS membership all loaded in January. Primary MOC counter, UCNS NCC CE counter, and state licensure CME tracked independently. 10-year examination countdown displayed in credential dashboard with 24-month alert.' },
  { time: 'CE completion', action: '"NCS-approved — refractory status epilepticus management: pentobarbital vs. propofol vs. ketamine continuous infusion selection criteria, burst suppression pattern monitoring with cEEG, and weaning protocols to reduce post-treatment relapse, 2 CME, AMA PRA Category 1, ABPN MOC applicable, UCNS neurocritical care applicable — status epilepticus domain." Primary MOC counter updates. UCNS NCC CE counter updates. State licensure CME updates. NCC content confirmed.' },
  { time: 'UCNS exam prep', action: '"UCNS neurocritical care examination — 10-year cycle, 24-month preparation window initiated." 24-month UCNS NCC examination preparation window placed as a calendar phase. UCNS examination preparation: neurocritical care board review course (typically 3-day intensive), focused reading in each content domain (stroke, SAH, ICH, TBI, status epilepticus, neuromonitoring), and practice examination modules. 24-month placement gives time to distribute preparation across clinical CE rather than cramming — NCC board reviews placed at 24, 18, 12, and 6 months before examination.' },
  { time: 'EEG competency', action: '"Annual continuous EEG monitoring competency — ACNS critical care EEG terminology: ictal-interictal continuum pattern classification, seizure identification in non-convulsive status epilepticus, and periodic discharge differentiation from artifact, 3 CME, UCNS NCC applicable — neuromonitoring domain, Q1." Annual cEEG competency CE placed as institutional credentialing requirement for NCCU physicians with EEG interpretation responsibilities. ACNS guidelines specify physician competency standards for cEEG monitoring in the ICU — placed as Q1 requirement.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace? UCNS NCC CE current and content-appropriate? State medical license CME complete? DEA valid? ACLS current? UCNS examination date tracked? cEEG competency documented? NCS membership active? Complete neurocritical care specialist credential audit 90 days before earliest renewal. Primary board, UCNS, state board, DEA, and institutional documentation maintained separately.' },
]

export default function ForNeurocriticalCareSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neurocritical Care Specialists"
        title={
          <>
            Primary board MOC and UCNS NCC maintained.
            <br />
            <em className="not-italic text-gold">10-year examination tracked. cEEG competency documented.</em>
          </>
        }
        lede="Neurocritical care specialists manage ABPN neurology or ABIM primary board continuous MOC with NCC-specific content, UCNS neurocritical care subspecialty certification on a 10-year examination cycle with a preparation window that must be placed 24 months in advance, state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, continuous EEG monitoring competency documentation for ACNS guidelines, and professional development at NCS and AAN simultaneously. Momenties tracks CME by neurocritical care specialist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Neurocritical Care Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neurocritical care specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neurocritical care specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neurocritical care specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, UCNS 10-year examination cycle, and annual cEEG competency requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {NCC_WORKFLOW.map((step, i) => (
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
                &ldquo;UCNS neurocritical care subspecialty is a 10-year cycle and the same thing happens to every NCC specialist who holds it — you get certified, you add it to your CV, and then somewhere between years 3 and 7 it stops being in active planning. Then at year 8 someone asks about your UCNS and you realize the examination is 2 years away and you have no preparation window. The NCS annual meeting gives me some NCC CE but my ABPN neurology primary MOC still needs separate content. My institution requires documented cEEG competency because we read continuous EEGs in the NCCU — that&apos;s an ACNS requirement that exists entirely outside of ABPN. State license biennial, DEA 3 years, ACLS 2 years. Momenties is the first system where the UCNS 10-year countdown is an actual visible calendar item with a 24-month alert.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Benjamin R., MD</div>
                  <div className="text-xs text-muted-foreground">Neurocritical care specialist and NCCU medical director, academic neuroscience ICU</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neurocritical care specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology or ABIM IM primary MOC CME — continuous, NCC content weighted',
                'UCNS neurocritical care subspecialty — 10-year examination cycle countdown',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual continuous EEG monitoring competency — ACNS guideline standard',
                'NCS membership renewal — annual',
                'NCS and AAN conference CME planning by primary board and UCNS NCC applicability',
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
        title="Primary board MOC and UCNS NCC maintained."
        subtitle="CME tracking with neurocritical care content, 10-year UCNS examination countdown with 24-month alert, cEEG competency documentation, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
