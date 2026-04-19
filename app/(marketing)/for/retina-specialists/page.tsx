import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retina Specialist CME Calendar — ABO MOC, anti-VEGF CE, faricimab CE, gene therapy CE, retinal detachment CE',
  description:
    'Retina specialists managing ABO ophthalmology MOC track annual anti-VEGF CE (faricimab Vabysmo 2-year TENAYA/LUCERNE data CE, high-dose aflibercept 8mg PULSAR/PHOTON CE, port delivery system Susvimo CE for neovascular AMD), gene therapy CE (Luxturna RPE65 follow-up CE, gene agnostic CPCB-RPE1 CE, REGENXBIO RGX-314 phase III CE for wet AMD), and retinal detachment CE (pneumatic retinopexy versus PPV PIVOT trial CE, scleral buckle CE for pseudophakic RD, proliferative vitreoretinopathy CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/retina-specialists' },
  openGraph: {
    title: 'Retina Specialist CME Calendar',
    description: 'ABO MOC, faricimab Vabysmo CE, high-dose aflibercept 8mg CE, gene therapy CE, and retinal detachment CE — one structured calendar.',
    url: '/for/retina-specialists',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABO ophthalmology MOC (10-year, 400 credits) + AAO Fellowship 3-year CE — two cycles with different durations and different subspecialty content requirements',
    desc: 'Retina specialists maintain ABO certification (10-year MOC, 40 Category 1 CME credits per year) and AAO Fellowship (90 credits per 3-year cycle). Retina subspecialty CE is concentrated at ASRS (American Society of Retina Specialists) annual meeting and AAO Subspecialty Day Retina. The pace of anti-VEGF therapeutic development — with multiple new agents and dosing protocols published annually — creates a higher CE burden than most ophthalmology subspecialties. A CME calendar that tracks only ABO 10-year cycle credits misses the AAO 3-year Fellowship cycle deadline. Additionally, retina specialists who perform gene therapy or sustained-release procedures need credentialing CE for specific delivery systems. Momenties tracks both credit cycles and subspecialty CE simultaneously with annual anti-VEGF protocol CE built in as a standing review.',
  },
  {
    icon: Clock,
    title: 'Annual anti-VEGF CE — faricimab 2-year TENAYA/LUCERNE data, high-dose aflibercept 8mg PULSAR/PHOTON, port delivery system Susvimo CE',
    desc: 'Anti-VEGF CE requires annual review as dosing intervals are extended and new agents receive FDA approval. Faricimab CE: TENAYA/LUCERNE 2-year outcomes CE (faricimab Vabysmo — 45-46% of patients on 16-week intervals at year 2, 0.4 letters superior to aflibercept, real-world Susvimo comparison CE). High-dose aflibercept CE: PULSAR (nAMD) and PHOTON (DME) 2-year data — aflibercept 8mg FDA approval August 2023, CE on 8mg versus 2mg dosing interval (8mg achieves 16-week interval in 77% of patients at year 2 versus 2mg 44%), PULSAR versus faricimab direct comparison CE. Brolucizumab CE: HAWK/HARRIER retinal vasculitis CE, patient selection CE for brolucizumab versus faricimab (vasculitis risk CE, re-treatment decision CE). Port delivery system CE: Susvimo FDA approval 2021, refill CE, occlusion CE, implant surgical technique CE, ARCHWAY trial 96-week outcomes. Annual injection technique CE: IVT injection best practices update (betadine CE, glove CE, instrument CE — ASRS infection committee 2024 CE).',
  },
  {
    icon: BarChart3,
    title: 'Annual gene therapy CE — Luxturna RPE65 long-term follow-up, REGENXBIO RGX-314 phase III, gene agnostic approaches CE',
    desc: 'Retinal gene therapy CE is required annually as the pipeline expands from rare monogenic conditions to common retinal diseases. Luxturna CE: voretigene neparvovec-rzyl RPE65 CE — long-term follow-up (7-year durability data, remaining light sensitivity CE, bilateral treatment CE timing, pediatric versus adult CE). REGENXBIO RGX-314 CE: FDA phase III ATMOSPHERE and ASCENT trials CE for neovascular AMD (subretinal versus suprachoroidal delivery CE, anti-VEGF gene therapy versus monthly injection comparison CE). 4D Molecular Therapeutics 4D-125 CE: XLRP phase I/II CE. Beacon Therapeutics AGTC-501 CE: XLRP. Gene agnostic CE: CPCB-RPE1 (human embryonic stem cell-derived RPE patch CE), NTSR2 neuroprotection CE for dry AMD. Dry AMD treatment CE: pegcetacoplan (Syfovre) C3 inhibitor FDA approval 2023 CE, avacincaptad pegol (Izervay) C5 inhibitor FDA approval 2023 CE — head-to-head CE (GATHER2 versus OAKS/DERBY), GA treatment combination CE.',
  },
  {
    icon: Users,
    title: 'Annual retinal detachment CE — PIVOT pneumatic retinopexy versus PPV, scleral buckle for pseudophakic RD, PVR CE',
    desc: 'Retinal detachment CE updates annually as PIVOT trial follow-up data matures and PVR management evolves. Pneumatic retinopexy CE: PIVOT trial 1-year outcomes (PR versus PPV for primary rhegmatogenous RD — PR success rate 80.8% versus PPV 93.3%, but PIVOT: PR non-inferior for anatomic and visual outcomes at 1 year in selected cases, CE on patient selection criteria: superior breaks, phakic, attached macula CE). Scleral buckle CE: SB versus PPV for pseudophakic RD (360-degree SB versus vitrectomy — BAVRD trial CE, pseudophakic superior detachment CE, CE on SB technique preservation for vitreoretinal training). PVR CE: PVR prevention CE (tamponade selection CE for PVR risk — C3F8 versus silicone oil CE, intraoperative bevacizumab CE for PVR prevention, 5-FU CE). Giant retinal tear CE: scleral buckle versus vitrectomy for GRT CE, PFO-assisted reattachment CE. Suprachoroidal hemorrhage CE: intraoperative management CE, delayed drainage CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABO MOC cycle audit: 10-year running total (400 total, 40/year pace). AAO Fellowship audit: 3-year cycle running total (90 credits). Anti-VEGF protocol review: current dosing protocol updated to reflect faricimab and aflibercept 8mg 2023 approvals — EHR order set CE. Gene therapy referral protocol: Luxturna RPE65 eligibility criteria updated (confirmed biallelic RPE65 mutation, residual retinal cells CE). Dry AMD treatment protocol: Syfovre and Izervay initiation criteria updated, patient selection CE. IVT injection volume: 2,000+ injection audit for billing accuracy and complication rate.' },
  { phase: 'Mar–Apr', task: 'ASRS annual meeting preview CE (some ASRS content available spring). AAO Subspecialty Day Retina CE if spring (some years held separately from October AAO). Faricimab CE: 2-year TENAYA/LUCERNE data literature review (NEJM publication update, real-world data CE). High-dose aflibercept CE: PULSAR/PHOTON 2-year literature review. Retinal detachment CE: PIVOT trial follow-up CE (2-year data if published). Surgical vitreoretinal CE: macular hole CE — inverted ILM flap versus standard peel CE (large MH >400 microns CE), tamponade CE for large MH. Diabetic retinopathy CE: Protocol W CE (DRCR.net — early treatment versus deferred for MDR CE).' },
  { phase: 'May–Jun', task: 'ARVO annual meeting (May): retinal basic science CE, gene therapy pipeline CE, OCT-A CE, AI retinal imaging CE. Gene therapy CE: REGENXBIO RGX-314 phase III update CE, 4D-125 XLRP CE. Anti-VEGF CE: resistance mechanism CE, tachyphylaxis CE, anti-VEGF naive patient treatment algorithm CE. Dry AMD CE: Syfovre versus Izervay 12-month GA growth rate comparison CE. Telemedicine retinal screening CE: diabetic retinopathy AI screening CE (IDx-DR FDA CE, EyeArt CE), teleretinal program implementation CE. OCT-A CE: flow void CE for DR, non-perfusion CE quantification CE.' },
  { phase: 'Jul–Aug', task: 'ASRS annual meeting (August): largest retina-specific CME event (20-25 retina CE credits). Anti-VEGF plenary CE: faricimab versus high-dose aflibercept real-world comparison CE. Gene therapy symposium CE. Surgical retina CE: macular surgery, retinal detachment CE. PVR symposium CE. Dry AMD treatment symposium CE: Syfovre and Izervay combined CE. Port delivery system CE: Susvimo refill CE, suprachoroidal delivery CE. Annual injection technique CE: ASRS injection best practices update CE. Pediatric retina CE: retinoblastoma CE, FEVR CE, Stickler syndrome CE.' },
  { phase: 'Sep–Oct', task: 'AAO annual meeting (October): AAO Subspecialty Day Retina — 8-12 Category 1 CE credits. Anti-VEGF CE session. Gene therapy CE session. Retinal detachment CE session. Dry AMD treatment CE session. Annual retinal imaging CE: OCT-A deep learning CE, fundus photo AI screening CE, adaptive optics CE. Laser CE: retinal laser for threshold CE (focal laser for DME Protocol B CE), photodynamic therapy CE for polypoidal choroidal vasculopathy CE (PDT + anti-VEGF CE). Annual telehealth CE: teleretinal interpretation CE for diabetic screening programs, telemedicine billing CE.' },
  { phase: 'Nov–Dec', task: 'ABO documentation: verify all credits logged. AAO Fellowship documentation: 3-year cycle check. Hospital privileging renewal: intravitreal injection, vitrectomy, scleral buckle annual case volume documentation. Gene therapy credentialing: Luxturna surgical technique CE for subretinal delivery (PRE-TREAT CE for approved centers). Anti-VEGF protocol year-end update: dosing intervals updated based on Q4 evidence. Dry AMD injection protocol: Syfovre and Izervay protocol updated. IVT injection complication rate review: endophthalmitis rate, RD rate, IOP spike rate — benchmark versus ASRS registry CE.' },
]

export default function RetinaSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Retina Specialists"
        title={
          <>
            ABO MOC and AAO Fellowship tracked in parallel.
            <br />
            <em className="not-italic text-gold">Faricimab 2-year CE, aflibercept 8mg PULSAR CE, REGENXBIO gene therapy CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Retina specialists carry two parallel CE obligations: ABO 10-year MOC with 40 credits per year and AAO Fellowship 3-year cycle. Annual CE priorities include faricimab Vabysmo 2-year TENAYA/LUCERNE dosing interval data, aflibercept 8mg PULSAR/PHOTON FDA 2023 CE, Susvimo port delivery system refill CE, PIVOT pneumatic retinopexy versus PPV retinal detachment CE, REGENXBIO RGX-314 phase III wet AMD CE, and Syfovre versus Izervay dry AMD treatment CE. Momenties structures the full retina CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Retina Specialists' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for retina specialists: ABO/AAO dual cycle, anti-VEGF dosing CE, gene therapy pipeline CE, and retinal detachment surgical CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month retina CME schedule from ARVO through ASRS August meeting, AAO Subspecialty Day Retina, and year-end ABO documentation.</h2>
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
                &ldquo;The anti-VEGF landscape moved faster in 2023 than any prior year — faricimab and high-dose aflibercept 8mg both got FDA approval within 7 months of each other, and then the dry AMD treatments Syfovre and Izervay followed. I had four new injection protocols to implement and no systematic way to update my dosing decision framework. The January anti-VEGF protocol review CE block became the most important standing event on my calendar — I use it to update my EHR order sets and patient communication templates before new-patient volume picks up in February. The AAO Fellowship 3-year cycle was the one I had been tracking loosely and almost missed. The calendar gives me both the ABO 10-year running total and the Fellowship 3-year running total on separate lines, so I can see at a glance if one is behind pace. The ASRS August meeting CE is now my anchor event — 20-25 retina-specific credits in 4 days. When I schedule travel for August, I plan ASRS first and work other travel around it rather than the reverse.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">O</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Olumide A., MD</div>
                  <div className="text-xs text-muted-foreground">Retina Specialist, academic retina program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and clinical evidence review for retina specialists in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABO ophthalmology MOC — 10-year cycle, 400 credits, 40/year, self-assessment modules',
                'AAO Fellowship CE — 90 credits per 3-year cycle, tracked independently from ABO',
                'Anti-VEGF CE — faricimab TENAYA/LUCERNE 2-year, aflibercept 8mg PULSAR, Susvimo refill CE',
                'Dry AMD CE — Syfovre C3 inhibitor vs Izervay C5 inhibitor 12-month GA growth CE',
                'Gene therapy CE — Luxturna 7-year follow-up, REGENXBIO RGX-314 phase III CE',
                'Retinal detachment CE — PIVOT pneumatic retinopexy vs PPV, SB for pseudophakic RD CE',
                'ASRS annual meeting CE — August, largest retina CE event, 20-25 retina-specific credits',
                'AAO Subspecialty Day Retina — October, 8-12 Category 1 credits, anti-VEGF and gene therapy CE',
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
        title="ABO MOC and AAO Fellowship tracked in parallel. Anti-VEGF protocol CE scheduled annually."
        subtitle="Retina CME calendar: dual credit cycle tracking, faricimab and aflibercept 8mg CE, Susvimo port delivery CE, gene therapy pipeline CE, PIVOT RD CE, and ASRS/AAO annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All physicians', href: '/for/doctors' }}
      />
    </>
  )
}
