import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Glaucoma Specialist CME Calendar — ABO MOC, GSA CE, MIGS CE, optic nerve imaging CE, neuroprotection CE',
  description:
    'Glaucoma specialists managing American Board of Ophthalmology MOC and Glaucoma Research Foundation CE priorities track annual MIGS CE (iStent Infinite FDA 2022 outcomes CE, Hydrus Microstent 5-year HORIZON data CE, trabecular bypass versus suprachoroidal versus subconjunctival device positioning CE), optic nerve imaging CE (OCT-A CE for early glaucoma detection, RNFL thinning rate calculation CE, structure-function correlation update), neuroprotection CE (brimonidine LOW-pressure glaucoma CE, stem cell and gene therapy CE for optic neuropathy), and glaucoma genetics CE (MYOC, OPTN, WDR36 CE, polygenic risk score CE for OHT conversion risk). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/glaucoma-specialists' },
  openGraph: {
    title: 'Glaucoma Specialist CME Calendar',
    description: 'ABO MOC, MIGS CE, OCT-A optic nerve imaging CE, neuroprotection CE, and glaucoma genetics CE — one structured calendar.',
    url: '/for/glaucoma-specialists',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABO general ophthalmology MOC (10-year cycle) + subspecialty CE through AGS and GSA — two CE tracks with different credit requirements',
    desc: 'Glaucoma specialists hold ABO (American Board of Ophthalmology) certification on a 10-year MOC cycle requiring 40 Category 1 CME credits per year (400 total per 10-year cycle), with ophthalmology-specific content and self-assessment modules. Glaucoma subspecialists benefit from CE through the American Glaucoma Society (AGS) annual meeting and the Glaucoma Symposium at ARVO, which provide specialized CE not fully captured by the general ophthalmology CME category. AAO Fellowship requires 90 CE credits per 3-year cycle for Fellows. The glaucoma subspecialty is unique in the rate of MIGS device evolution — FDA clearances and trial data emerge annually, requiring structured CE to track procedural indications. A CME calendar that tracks only ABO 10-year cycle credits misses the AAO 3-year Fellowship cycle requirement. Momenties tracks both cycles simultaneously with annual MIGS CE built in.',
  },
  {
    icon: Clock,
    title: 'Annual MIGS CE — iStent Infinite outcomes, Hydrus HORIZON 5-year data, trabecular versus suprachoroidal versus subconjunctival positioning',
    desc: 'MIGS CE requires annual updates as device portfolio expands and long-term outcomes data accumulates. iStent Infinite CE: FDA clearance 2022, 3-stent system — outcomes CE (COMPASS XT registry 2-year: IOP reduction 30% from baseline, medication reduction 1.8 drugs, safety CE for phakic versus pseudophakic), CE on position 3 stent for nasal quadrant TM. Hydrus Microstent CE: HORIZON trial 5-year outcomes (IOP ≤18mmHg without medication 36% Hydrus versus 24% phaco alone, CE on HORIZON 5-year compared with iStent Inject COMPARE trial). Suprachoroidal MIGS CE: CyPass explantation CE (endothelial cell loss — all devices require patient education on long-term endothelial risk), iStent Supra CE, Omni system CE. Subconjunctival MIGS CE: XEN gel stent CE (5-year outcomes, needling rate CE for bleb failure, adjunctive MMC CE), PreserFlo MicroShunt CE (MERIT trial versus trabeculectomy — comparable 2-year IOP control). Annual CE alert: AAO Preferred Practice Pattern Glaucoma update review (PPP published every 5 years — interim update sections published annually).',
  },
  {
    icon: BarChart3,
    title: 'Annual optic nerve imaging CE — OCT-A CE for early detection, RNFL thinning rate CE, structure-function correlation updates',
    desc: 'Optic nerve imaging CE updates annually as OCT-A evidence accumulates and structure-function algorithms are refined. OCT-A CE: peripapillary capillary density CE for early glaucoma detection — OHTS sub-study OCT-A data (radial peripapillary capillary density CE: loss precedes RNFL thinning in some eyes by 1-2 years), FAZ area CE for macular ganglion cell layer assessment. RNFL thinning rate CE: Guided Progression Analysis (GPA) update CE — faster than 2 microns per year progression CE for treatment adjustment, artifact CE (media opacity, pupil dilation CE for reproducibility). Structure-function correlation CE: Hood Glaucoma Report CE for combining OCT and VF data, pattern deviation map CE for correspondence. Wide-field OCT CE: 12mm scan CE for peripheral RNFL assessment, OCT-A whole-eye scanning CE. Annual AI CE: machine learning for glaucoma detection CE — Google Health DeepMind optic disc CE, Topcon DRI OCT AI CE, FDA Class II AI/ML device CE for glaucoma screening.',
  },
  {
    icon: Users,
    title: 'Annual neuroprotection and genetics CE — brimonidine LTG trial, gene therapy CE for optic neuropathy, polygenic risk score CE for OHT conversion',
    desc: 'Neuroprotection CE is entering a new era as gene therapy trials progress and polygenic risk scoring enters clinical practice. Neuroprotection CE: Low-pressure glaucoma treatment CE — LiGHT trial (SLT superior to medication for newly diagnosed POAG at 36 months, CE on LiGHT applicability to normal tension glaucoma). Brimonidine neuroprotection CE: LOW trial — low-pressure glaucoma, brimonidine versus timolol, VF loss superior in timolol arm — CE on mechanism (alpha-2 agonist neuroprotection versus pressure-independent CE). Gene therapy CE: AAV2-CNTF CE for optic nerve protection in LHON, CPCB-RPE1 CE, REGENXBIO RGX-314 (wet AMD CE but optic nerve gene therapy pipeline CE). Glaucoma genetics CE: MYOC CE for juvenile open-angle glaucoma (confirmed pathogenic variant — IOP elevation CE at 20-35 years), polygenic risk score CE (PRS for POAG development in OHT — OHTS PRS validation CE, clinical implementation CE for IOP-lowering treatment decision in borderline OHT). Mitochondrial CE: mitochondrial dysfunction CE in normal tension glaucoma, CoQ10 CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABO MOC cycle audit: 10-year cycle running total (400 credits total, 40/year pace), self-assessment module completion verified. AAO Fellowship CE audit: 3-year cycle running total (90 credits required). MIGS device log review: annual case volume for iStent, Hydrus, XEN — hospital privileging case volume minimums met. Annual outcomes audit: post-MIGS IOP target achievement rate, needling rate for XEN, conversion to trabeculectomy rate — benchmark versus AGS registry data. IOP target review: PPP-based IOP targets for each severity stage verified in EHR protocol.' },
  { phase: 'Mar–Apr', task: 'AGS annual meeting (spring): 15-20 glaucoma-specific CME credits. MIGS session CE: annual device outcomes update, new FDA clearances. OCT-A CE session: early detection algorithm update. Neuroprotection session CE: latest trial data. AAO Subspecialty Day (Glaucoma — spring if held): subspecialty-specific CE credits. Selective laser trabeculoplasty CE: SLT repeat CE (LiGHT trial applicability, 360-degree versus 180-degree SLT CE, SLT as first-line CE — updated evidence). Angle closure CE: phakic narrow angle CE, lens extraction versus LPI CE (EAGLE trial 3-year CE update).' },
  { phase: 'May–Jun', task: 'ARVO annual meeting (May): optic nerve imaging CE, genetics CE, neuroprotection CE (basic science and clinical translation). OCT-A CE literature review: annual peripapillary capillary density data update. RNFL thinning rate CE: updated GPA algorithm publication review. Structure-function correlation CE update. Genetics CE: MYOC variant classification update, polygenic risk score CE — implementation in clinical practice CE. Glaucoma surgery CE: trabeculectomy versus MIGS comparative data update (AGS outcomes study annual publication). Pediatric glaucoma CE: CGRN registry annual data, trabeculotomy CE.' },
  { phase: 'Jul–Aug', task: 'MIGS CE literature review (Ophthalmology, JGLAUCOMA — summer publications): iStent Infinite 2-year data review, Hydrus HORIZON update. SubConjunctival device CE: XEN 5-year data review, PreserFlo MERIT trial update. AI glaucoma screening CE: FDA-cleared AI/ML device updates (Topcon, IDx, Google Health). Annual glaucoma medication CE: fixed combination therapy CE (netarsudil/latanoprost Rocklatan CE, bimatoprost sustained-release Durysta CE), preservative-free formulations CE for corneal toxicity. Optic nerve head imaging CE: OCT-A whole-eye scan platform update (Zeiss Plex Elite 9000 CE, Optovue AngioVue CE).' },
  { phase: 'Sep–Oct', task: 'AAO annual meeting (October): AAO Subspecialty Day Glaucoma (largest glaucoma CE event — 8-12 Category 1 credits). MIGS hands-on workshop CE. OCT imaging workshop CE. Neuroprotection symposium CE. Glaucoma genetics symposium CE. Annual IOP monitoring technology CE: home IOP monitoring device CE (Triggerfish CE for diurnal IOP fluctuation, Icare HOME CE, Sensimed Triggerfish update). Visual field CE: Esterman visual field CE for driving CE, FDT Matrix perimetry CE for portable screening. SLT CE: selective laser trabeculoplasty parameter CE (energy CE, spot size CE) — annual technique review.' },
  { phase: 'Nov–Dec', task: 'ABO MOC documentation: verify all credits logged before cycle year end. AAO Fellowship documentation: 3-year cycle check. Hospital privileging renewal: MIGS surgical volume, trabeculectomy volume, tube shunt volume — credentialing documentation. Annual glaucoma medication protocol review: first-line agent updated to current PPP, fixed combination CE current. Neuroprotection protocol: brimonidine dosing CE for NTG — updated based on LOW trial current evidence. Annual patient outcome data compilation: conversion to trabeculectomy rate post-MIGS, VF progression rate by IOP target achievement — submitted to AGS registry.' },
]

export default function GlaucomaSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Glaucoma Specialists"
        title={
          <>
            ABO MOC and AAO Fellowship CE tracked in parallel.
            <br />
            <em className="not-italic text-gold">MIGS outcomes CE annual, OCT-A early detection CE, brimonidine neuroprotection CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Glaucoma specialists carry two parallel CE obligations: ABO 10-year MOC with 40 credits per year and AAO Fellowship 3-year cycle. Annual CE priorities include iStent Infinite 2-year outcomes, Hydrus HORIZON 5-year data, XEN and PreserFlo comparative CE, OCT-A peripapillary capillary density for early detection, brimonidine LOW-pressure glaucoma neuroprotection CE, and polygenic risk score CE for OHT conversion decisions. A CME calendar that tracks only the ABO 10-year cycle misses the AAO 3-year Fellowship requirement. Momenties structures the full glaucoma CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Glaucoma Specialists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/doctors"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All physicians
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">HIPAA-aware · No PHI stored · Free to start</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CME calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for glaucoma specialists: ABO/AAO dual cycle tracking, MIGS outcomes CE, optic nerve imaging CE, and neuroprotection and genetics CE.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <c.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual CME calendar</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month glaucoma CME schedule from AGS annual meeting through AAO annual meeting Subspecialty Day and year-end ABO documentation.</h2>
          </Reveal>
          <div className="space-y-3">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.phase} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{item.phase}</span>
                  <p className="text-sm text-foreground/90">{item.task}</p>
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
                &ldquo;The AAO 3-year Fellowship cycle was the one I kept forgetting about because I was focused on the ABO 10-year tracking. They are on different cycle end dates and the 3-year cycle requires fewer total credits but has a hard deadline every 36 months. I discovered a 14-credit gap in June of my third Fellowship year — I had time to complete it, but the calendar audit is the only reason I caught it. The MIGS CE calendar changed how I structure device selection conversations with patients. I had been using Hydrus and iStent relatively interchangeably for combined procedures, but the HORIZON 5-year data and the COMPASS XT iStent Infinite comparison gave me a more defensible positioning for each device type. I updated my MIGS consent protocol in May after the AGS CE session. The OCT-A CE was the most forward-looking addition — we are not yet using peripapillary capillary density as a primary clinical decision trigger, but having the annual CE block means I understand where the field is going before it becomes standard of care. When the next PPP update includes OCT-A criteria, I will not be learning the evidence for the first time at a conference.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Fatima J., MD</div>
                  <div className="text-xs text-muted-foreground">Glaucoma Specialist, academic ophthalmology department</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the CME calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and clinical evidence review for glaucoma specialists in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABO ophthalmology MOC — 10-year cycle, 400 credits total, 40/year, self-assessment modules',
                'AAO Fellowship CE — 90 credits per 3-year cycle, tracked independently from ABO',
                'MIGS CE — iStent Infinite COMPASS XT, Hydrus HORIZON 5-year, XEN and PreserFlo comparative',
                'OCT-A CE — peripapillary capillary density early detection, RNFL thinning rate GPA update',
                'Neuroprotection CE — brimonidine LOW trial NTG, gene therapy pipeline CE for optic neuropathy',
                'Glaucoma genetics CE — MYOC juvenile OAG, polygenic risk score OHT conversion CE',
                'AGS annual meeting CE — spring, 15-20 glaucoma-specific credits, MIGS and imaging sessions',
                'AAO Subspecialty Day Glaucoma — October, largest glaucoma CE event, 8-12 Category 1 credits',
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
        title="ABO MOC and AAO Fellowship tracked in parallel. MIGS CE and OCT-A imaging CE scheduled annually."
        subtitle="Glaucoma CME calendar: dual credit cycle tracking, iStent/Hydrus/XEN outcomes CE, OCT-A early detection CE, brimonidine neuroprotection CE, and AGS/AAO annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All physicians', href: '/for/doctors' }}
      />
    </>
  )
}
