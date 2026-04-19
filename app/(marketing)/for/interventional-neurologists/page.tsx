import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Interventional Neurologists — ABPN MOC CME renewal, neurointerventional credential management',
  description:
    'Interventional neurologists manage ABPN neurology primary MOC, ABPN vascular neurology or endovascular surgical neuroradiology subspecialty certification, annual mechanical thrombectomy CE as device approvals expand, annual radiation safety and fluoroscopy CE, ACLS 2-year renewal, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/interventional-neurologists' },
  openGraph: {
    title: 'Momenties for Interventional Neurologists',
    description: 'ABPN MOC CME renewal, neurointerventional credential management.',
    url: '/for/interventional-neurologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and neurointerventional subspecialty independently',
    desc: 'Interventional neurologists hold ABPN neurology primary certification under continuous MOC and either ABPN vascular neurology subspecialty certification or CAST/ESNR endovascular surgical neuroradiology (ESNR) subspecialty certification — credentials that come from different certifying organizations depending on training pathway. ABPN vascular neurology covers ischemic stroke mechanisms, endovascular therapy, and cerebrovascular imaging. CAST ESNR certification (issued jointly by ABPN, ABR, and ABNS) covers neurointerventional procedures: cerebral angiography, mechanical thrombectomy, aneurysm coiling, AVM embolization, carotid/vertebral stenting, and spinal cord AVM embolization. Each credential tracks CE independently.',
  },
  {
    icon: Clock,
    title: 'Interventional neurologist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME." "ABPN vascular neurology or CAST ESNR subspecialty." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual fluoroscopy radiation safety CE — state regulatory requirement." "Annual mechanical thrombectomy CE — device and technique updates." "Annual aneurysm treatment CE — flow diversion versus coiling evidence updates." "SNIS membership — annual." "AANS/CNS membership — annual." All interventional neurologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual fluoroscopy radiation CE and mechanical thrombectomy procedural analytics',
    desc: 'Interventional neurologists performing cerebral angiography, thrombectomy, coiling, and stenting accumulate significant fluoroscopy exposure — annual radiation safety CE is a state regulatory requirement in most states for physicians using fluoroscopy, separate from ABPN MOC. Annual fluoroscopy CE: radiation protection principles, dose reduction techniques, occupational exposure monitoring, and patient dose optimization for neurointerventional procedures. Annual thrombectomy CE: Penumbra THUNDER, Philips EmboTrap, and Stryker Trevo device generation updates require operator CE for privileging at most comprehensive stroke centers. Procedural volume documentation for institutional neurointerventional privileges is an annual requirement.',
  },
  {
    icon: Users,
    title: 'SNIS, WFITN, and neurointerventional professional involvement',
    desc: '"SNIS Annual Meeting — july." "Society of NeuroInterventional Surgery Annual Meeting." "WFITN World Congress — biennial." "ESMINT Annual Meeting." "Thrombectomy CE — contact aspiration versus stent retriever first-pass technique, distal access catheter navigation in M2/M3 occlusions, tandem occlusion management (carotid plus intracranial LVO)." "Aneurysm CE — pipeline flex device updates, Woven EndoBridge (WEB) in wide-neck bifurcation aneurysms, DELTA trial unruptured aneurysm treatment decision criteria." "AVM CE — Onyx liquid embolic selection, ARUBA trial 10-year follow-up data." "Carotid CE — CREST-2 trial carotid artery stenting versus endarterectomy asymptomatic stenosis data." All neurointerventional professional development on calendar. SNIS and ESMINT conference CME tagged by ABPN neurology and subspecialty applicability.',
  },
]

const INTNEURO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (stroke/neurointerventional content weighted), ABPN vascular neurology or CAST ESNR subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual fluoroscopy radiation safety CE, annual mechanical thrombectomy device CE, annual aneurysm treatment CE, SNIS Annual Meeting, and SNIS membership all loaded in January. ABPN neurology counter and neurointerventional subspecialty counter tracked independently. Fluoroscopy CE placed as state-required regulatory deadline.' },
  { time: 'CE completion', action: '"SNIS-approved — pipeline embolization device for large vessel aneurysms: Pipeline Flex versus Pipeline Shield surface modification in reducing thromboembolic events, antiplatelet regimen duration (DAPT 6 months versus extended), flow diverter in posterior circulation aneurysms (BA tip, PICA origin) versus coiling outcomes from multinational registry data, and pediatric aneurysm flow diversion case series, 2 CME, AMA PRA Category 1, ABPN MOC applicable, ABPN vascular neurology / CAST ESNR applicable — aneurysm treatment domain." Both ABPN counters update.' },
  { time: 'Radiation CE', action: '"Annual fluoroscopy radiation safety CE — neurointerventional dose optimization: reference air kerma and kerma area product reporting in cerebral angiography, fluoroscopy time reduction techniques in diagnostic DSA versus therapeutic procedures, lead shielding equivalence for neurointerventional positioning, and radiation monitoring badge placement for physicians operating biplane angiography suites, 2 CME, state regulatory applicable, Q1." Annual fluoroscopy CE placed Q1. State radiation regulatory CE deadline varies by state (California: annual; Texas: biennial) — deadline tracked by state license expiration.' },
  { time: 'Procedural CE', action: '"Annual mechanical thrombectomy device CE — Penumbra ACE 68 aspiration catheter in M1 LVO versus Trevo ProVue comparison trial outcomes, EmboTrap II mechanical properties in cervical ICA tandem occlusion, combined first-line aspiration plus stent retriever (COMPASS trial 5-year follow-up), and direct aspiration first-pass technique (ADAPT) in posterior circulation basilar artery occlusion, 3 CME, ABPN vascular neurology / CAST ESNR applicable, Q2." Annual thrombectomy device CE placed Q2 aligned with SNIS meeting data presentations.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace? Neurointerventional subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? Annual fluoroscopy radiation CE documented? Annual thrombectomy device CE documented? Annual aneurysm CE documented? Procedural volume documentation for institutional privileges complete? SNIS membership active? Complete interventional neurologist credential audit 90 days before earliest renewal.' },
]

export default function ForInterventionalNeurologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Interventional Neurologists"
        title={
          <>
            ABPN neurology MOC and neurointerventional subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Fluoroscopy radiation CE current. Thrombectomy device CE tracked.</em>
          </>
        }
        lede="Interventional neurologists manage ABPN neurology continuous MOC with neurointerventional content, ABPN vascular neurology or CAST ESNR subspecialty certification on independent cycles, state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, annual state-required fluoroscopy radiation safety CE, annual mechanical thrombectomy device CE as Penumbra, Stryker, and Philips update device generations, annual aneurysm treatment CE on flow diversion evidence, and professional development at SNIS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Interventional Neurologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How interventional neurologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for interventional neurologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Interventional neurologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC cycles, neurointerventional subspecialty, and annual fluoroscopy radiation, thrombectomy device, and aneurysm treatment CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {INTNEURO_WORKFLOW.map((step, i) => (
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
                &ldquo;I trained in neurology, did a vascular neurology fellowship, then a neurointerventional fellowship — so I have ABPN neurology MOC, ABPN vascular neurology subspecialty certification, and CAST ESNR certification from three different certifying bodies. The radiation CE is separate from everything — it&apos;s a state regulatory requirement tied to my license, not to ABPN, and it has a different renewal cycle. Device CE for thrombectomy is procedural privileging — my institution requires current device training for my catheter privileges, which is a Joint Commission and stroke center certification requirement that has nothing to do with ABPN. Flow diversion evidence for aneurysms changes every two years with new device generations and registry data. I was managing five separate tracking systems. The thing I could not do was see all the deadlines on one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Victor L., MD</div>
                  <div className="text-xs text-muted-foreground">Interventional neurologist, comprehensive stroke center neurointerventional program director</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All interventional neurologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, neurointerventional and stroke content weighted',
                'ABPN vascular neurology or CAST ESNR subspecialty — independent certification cycle',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual fluoroscopy radiation safety CE — state regulatory requirement',
                'Annual mechanical thrombectomy device CE — institutional procedural privileges',
                'SNIS conference CME planning by ABPN neurology and neurointerventional subspecialty applicability',
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
        title="ABPN neurology MOC and neurointerventional subspecialty maintained."
        subtitle="CME tracking for ABPN dual certification, annual fluoroscopy radiation CE, thrombectomy device privileges CE, aneurysm treatment CE, and neurointerventional professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
