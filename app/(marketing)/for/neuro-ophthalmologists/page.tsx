import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neuro-Ophthalmologists — ABPN or AAO MOC CME renewal, neuro-ophthalmology credential management',
  description:
    'Neuro-ophthalmologists manage ABPN neurology MOC or AAO ophthalmology MOC depending on training pathway alongside the NANOS neuro-ophthalmology fellowship credential, annual optic neuritis CE as ocrelizumab and ublituximab MS data update treatment decisions, annual IIH management CE as topiramate versus acetazolamide evidence and weight management targets evolve, state medical license biennial CME, and professional development at NANOS and AAN. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/neuro-ophthalmologists' },
  openGraph: {
    title: 'Momenties for Neuro-Ophthalmologists',
    description: 'ABPN or AAO MOC CME renewal, neuro-ophthalmology credential management.',
    url: '/for/neuro-ophthalmologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology or AAO ophthalmology MOC and NANOS credential independently',
    desc: 'Neuro-ophthalmologists trained through neurology hold ABPN neurology primary certification under continuous MOC. Those trained through ophthalmology hold AAO/ABOph ophthalmology certification under MOC. A minority hold both. The NANOS (North American Neuro-Ophthalmology Society) fellowship credential requires neuro-ophthalmology-specific content: optic neuritis (MS-associated, NMOSD, MOG-IgG antibody), papilledema and idiopathic intracranial hypertension, ocular motor cranial neuropathies (CN III, IV, VI), chiasmal and retrochiasmal visual field defects, and functional visual loss assessment.',
  },
  {
    icon: Clock,
    title: 'Neuro-ophthalmologist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC or AAO ophthalmology MOC — continuous CME (pathway-dependent)." "NANOS fellowship credential — renewal requirements." "State medical license — biennial CME." "Annual optic neuritis CE — MS DMT impact on ON recurrence, NMOSD aquaporin-4 antibody versus MOG-IgG antibody ON clinical differentiation." "Annual IIH management CE — acetazolamide versus topiramate head-to-head data, IIH Treatment Trial 10-year follow-up, bariatric surgery weight loss and papilledema resolution." "Annual neuro-optic CE — giant cell arteritis ischemic optic neuropathy — tocilizumab GiACTA trial 52-week extension." "NANOS membership — annual." "AAN membership (if neurology-trained) — annual." All neuro-ophthalmology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual optic neuritis CE and IIH management update analytics',
    desc: 'Neuro-ophthalmologists managing optic neuritis must maintain CE on evolving MS disease-modifying therapy data: the ONTT (Optic Neuritis Treatment Trial) established IV methylprednisolone for acute ON, but the impact of high-efficacy MS DMTs (ocrelizumab, ofatumumab, natalizumab) on ON recurrence risk changes the long-term management conversation — CE on DMT selection in ON as presenting CIS is required before counseling patients. Annual IIH CE: the IIH Treatment Trial 2024 10-year follow-up changed the acetazolamide versus topiramate evidence base. Weight management targets — 6% body weight loss as the functional IIH threshold — requires annual CE on structured weight management program integration into the neuro-ophthalmology IIH protocol.',
  },
  {
    icon: Users,
    title: 'NANOS, AAN, AAO, and neuro-ophthalmology professional development',
    desc: '"NANOS Annual Meeting — march." "AAN Annual Meeting — april." "AAO Annual Meeting — october." "ECTRIMS European Committee for Treatment and Research in Multiple Sclerosis." "ON CE — RNFL OCT thickness normative data in acute ON recovery phase (OCT as biomarker of axonal loss), seronegative NMOSD — MOG-IgG testing protocol in aquaporin-4 negative patients with atypical ON features, MOGAD (myelin oligodendrocyte glycoprotein antibody disease) treatment — steroids versus rituximab versus inebilizumab emerging data, and pediatric optic neuritis — MS versus ADEM versus MOGAD differentiation by MRI pattern and antibody testing." "IIH CE — IIH Treatment Trial 2024: acetazolamide 4g/day versus placebo perimetric mean deviation at 6 months (re-analysis), carbonic anhydrase inhibitor intolerance and topiramate substitution evidence, CSF diversion versus optic nerve sheath fenestration in vision-threatening IIH — comparative outcomes update." "GCA CE — tocilizumab GiACTA 52-week extension: relapse-free remission at 1 year (56% tocilizumab versus 14% placebo), tapering protocol and treatment duration, and JAK inhibitors baricitinib Phase 3 (SELECT-GCA) versus tocilizumab comparative data." All neuro-ophthalmology professional development on calendar.',
  },
]

const NEUROOPH_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (ABPN neurology or AAO ophthalmology — neuro-ophthalmology content weighted), NANOS fellowship credential renewal requirements, state medical license biennial CME, annual optic neuritis and MS CE, annual IIH management CE, annual GCA ischemic optic neuropathy CE, NANOS Annual Meeting, AAN or AAO Annual Meeting (pathway-dependent), and NANOS membership all loaded in January. Primary board counter and NANOS credential requirements tracked independently.' },
  { time: 'CE completion', action: '"NANOS-approved — NANOS 2024 MOGAD Diagnostic Criteria update: MOG-IgG antibody testing indications in aquaporin-4 seronegative ON (clinical and MRI atypical features for MS requiring MOGAD testing protocol), MOGAD treatment escalation — steroids versus rituximab versus inebilizumab based on relapse frequency and disability, OCT RNFL segmentation in MOGAD versus NMOSD versus MS optic neuropathy recovery pattern differences, 3 CME, AMA PRA Category 1, ABPN MOC applicable, NANOS CE applicable." Both primary board and NANOS counters update.' },
  { time: 'ON CE', action: '"Annual optic neuritis CE — MS high-efficacy DMT impact on ON: ocrelizumab B-cell depletion and ON recurrence risk reduction in PPMS (ORATORIO trial extension), ofatumumab ON recurrence versus teriflunomide (ASCLEPIOS 1+2 subgroup), risk stratification for MS conversion after isolated ON (MRI, OCT RNFL, VEP, antibody status), and retinal OCT peripapillary RNFL and macular ganglion cell layer thickness as biomarkers of irreversible axonal loss in clinical trial design, 3 CME, ABPN applicable, NANOS CE applicable, Q1." Annual ON CE placed Q1 aligned with NANOS March meeting.' },
  { time: 'IIH CE', action: '"Annual IIH management CE — IIH Treatment Trial 10-year data: acetazolamide 4g/day versus structured weight management — perimetric mean deviation trajectory at 5 and 10 years, weight recidivism and papilledema recurrence rate, and GLP-1 receptor agonist (semaglutide) in IIH — IIHWT trial (IIH Weight Trial) — intracranial pressure reduction independent of weight loss as mechanism, bariatric surgery referral criteria in IIH with BMI >35 and vision loss, 3 CME, ABPN applicable, NANOS CE applicable, Q3." Annual IIH CE placed Q3 aligned with AAN April and AAO October meetings.' },
  { time: 'Renewal audit', action: 'Analytics: primary board MOC CME on pace (ABPN neurology or AAO ophthalmology — neuro-ophthalmology content weighted)? NANOS fellowship credential renewal requirements met? State medical license CME complete? Annual optic neuritis and MS DMT CE documented? Annual IIH management CE documented? Annual GCA ischemic optic neuropathy CE documented? NANOS membership active? Complete neuro-ophthalmologist credential audit 90 days before earliest renewal.' },
]

export default function ForNeuroOphthalmologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neuro-Ophthalmologists"
        title={
          <>
            Primary board MOC and NANOS credential maintained.
            <br />
            <em className="not-italic text-gold">Optic neuritis CE current. IIH management protocols tracked.</em>
          </>
        }
        lede="Neuro-ophthalmologists manage ABPN neurology or AAO ophthalmology primary board continuous MOC (depending on training pathway) alongside NANOS fellowship credential renewal requirements. Annual optic neuritis CE as MOGAD diagnostic criteria and MS high-efficacy DMT data change management decisions, annual IIH CE as IIH Treatment Trial long-term data and GLP-1 agonist mechanisms emerge, annual GCA ischemic optic neuropathy CE as tocilizumab extension data updates treatment duration, state medical license biennial CME, and NANOS professional development. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Neuro-Ophthalmologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neuro-ophthalmologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neuro-ophthalmologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neuro-ophthalmologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, NANOS credential, and annual optic neuritis, IIH, and GCA CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {NEUROOPH_WORKFLOW.map((step, i) => (
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
                &ldquo;Trained through neurology so ABPN neurology MOC is my primary board — tracked separately from the NANOS fellowship credential which has its own CE requirements. The MOGAD diagnostic criteria update was clinically critical: I had patients with aquaporin-4 seronegative atypical ON who needed MOG-IgG testing before MOGAD treatment decisions, and I needed current CE on the NANOS 2024 criteria before I could apply them confidently. The IIH work is where the weight management CE matters most — GLP-1 agonist data in IIH changes how I talk to patients about semaglutide as an adjunct to acetazolamide, and I need current CE before that conversation. GCA is the time-sensitive diagnosis in my practice — tocilizumab treatment duration data changes every year and I need that CE before I counsel patients on when to stop. All on one calendar now with 90-day alerts.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">I</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Isabelle W., MD</div>
                  <div className="text-xs text-muted-foreground">Neuro-ophthalmologist and IIH program co-director, academic neurology and ophthalmology division</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neuro-ophthalmologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology or AAO ophthalmology MOC — continuous (pathway-dependent)',
                'NANOS fellowship credential — renewal requirements, neuro-ophthalmology CE',
                'State medical license CME — biennial',
                'Annual optic neuritis CE — MOGAD criteria, MS DMT impact on ON recurrence',
                'Annual IIH management CE — IIH Treatment Trial data, GLP-1 agonist mechanism',
                'Annual GCA CE — tocilizumab GiACTA extension, treatment duration guidance',
                'NANOS membership renewal — annual',
                'NANOS and AAN/AAO conference CME planning by primary board applicability',
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
        title="Primary board MOC and NANOS credential maintained."
        subtitle="CME tracking for ABPN or AAO primary board MOC and NANOS credential, annual optic neuritis CE, IIH management CE, GCA CE, and neuro-ophthalmology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
