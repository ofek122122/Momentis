import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Obesity Medicine Specialists — ABOM certification CME renewal, obesity medicine credential management',
  description:
    'Obesity medicine specialists manage ABOM certification with annual MOC requirements alongside their primary board MOC, DEA 3-year renewal for Schedule IV anti-obesity medications, annual GLP-1 receptor agonist CE as semaglutide and tirzepatide indications expand and new approvals arrive, annual metabolic surgery co-management CE as post-bariatric nutritional management protocols evolve, state medical license biennial CME, and OMA membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/obesity-medicine-specialists' },
  openGraph: {
    title: 'Momenties for Obesity Medicine Specialists',
    description: 'ABOM certification CME renewal, obesity medicine credential management.',
    url: '/for/obesity-medicine-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and ABOM certification independently',
    desc: 'Obesity medicine specialists hold their primary board certification (ABIM, ABFM, ABPN, ABP, or AOBFP) under continuous MOC and ABOM (American Board of Obesity Medicine) certification with annual MOC requirements — two credentials with different content requirements and different renewal timelines. ABOM requires obesity-specific content: adiposity-based chronic disease (ABCD) model, energy balance physiology, anti-obesity medication mechanisms and side effects, behavioral intervention evidence, and bariatric surgery pre- and post-operative co-management. ABOM recertification requires 60 CME in obesity medicine over 5 years with an annual minimum requirement distinct from primary board MOC.',
  },
  {
    icon: Clock,
    title: 'Obesity medicine specialist multi-credential renewal calendar',
    desc: '"Primary board MOC (ABIM/ABFM/etc.) — continuous or cycle-based CME." "ABOM certification — 5-year recertification, 60 obesity-specific CME with annual minimum." "State medical license — biennial CME." "DEA registration — 3-year renewal (required for phentermine Schedule IV, diethylpropion, benzphetamine, phendimetrazine)." "Annual GLP-1 agonist CE — semaglutide Wegovy cardiovascular outcome data, tirzepatide Zepbound FDA approval, retatrutide and CagriSema Phase 3 pipeline." "Annual bariatric surgery co-management CE — post-sleeve nutritional deficiency protocol, RYGB medication absorption changes." "OMA membership — annual." All obesity medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual anti-obesity medication CE and metabolic surgery update analytics',
    desc: 'Obesity medicine specialists managing pharmacotherapy must maintain CE on a rapidly expanding medication landscape: semaglutide 2.4mg (Wegovy) SELECT cardiovascular outcomes trial (20% MACE reduction in obesity without diabetes — 2023) expanded the indication beyond weight loss; tirzepatide (Zepbound) FDA approved November 2023 for obesity with SURMOUNT-1 data showing 22.5% mean body weight reduction. Annual AOM CE ensures current practice on dual GIP/GLP-1 mechanism, injection site management, and GI side effect titration. Retatrutide (triple agonist) and CagriSema (amylin/GLP-1) Phase 3 data anticipated 2024-2025 requires prospective CE planning.',
  },
  {
    icon: Users,
    title: 'OMA, TOS, and obesity medicine professional development',
    desc: '"OMA Annual Obesity Medicine Conference — april." "TOS The Obesity Society Annual Scientific Meeting — november." "ASBP American Society of Bariatric Physicians Annual Conference — november." "ASMBS American Society for Metabolic and Bariatric Surgery Annual Meeting — june." "GLP-1 CE — STEP, SURMOUNT, and SELECT trial updates, orforglipron oral GLP-1 Phase 3 data, injection site technique and rotation protocol, semaglutide pancreatitis risk communication update (FAERS pharmacovigilance 2024), and insurance prior authorization navigation for AOMs." "Bariatric surgery co-management CE — post-RYGB hyperinsulinemic hypoglycemia (dumping syndrome versus nesidioblastosis), micronutrient deficiency surveillance (thiamine, B12, iron, zinc, copper) with supplementation dosing, and sleeve gastrectomy GERD exacerbation and conversion criteria." "Pediatric obesity CE — AAP 2023 Clinical Practice Guideline for Evaluation and Treatment of Children and Adolescents with Obesity — intensive health behavior lifestyle treatment (IHBLT) and pharmacotherapy in adolescents." All obesity medicine professional development on calendar.',
  },
]

const OBESITY_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (obesity-applicable content weighted), ABOM certification CME pace (60 obesity-specific CME over 5 years — annual minimum calculated), state medical license biennial CME, DEA 3-year renewal, annual GLP-1 agonist CE, annual bariatric surgery co-management CE, OMA Annual Conference, and OMA membership all loaded in January. Primary board counter and ABOM counter tracked independently. ABOM annual minimum tracked separately from primary board requirements — ABOM has an annual floor, not just a 5-year aggregate.' },
  { time: 'CE completion', action: '"ABOM-approved — ABOM 2024 Core Competencies update: adiposity-based chronic disease (ABCD) staging using Edmonton Obesity Staging System (EOSS) versus BMI-based staging for treatment intensity decisions, GLP-1/GIP receptor agonist prescribing framework for patients with prior history of pancreatitis (risk-benefit documentation), and behavioral intervention intensity matching to ABCD stage, 3 CME, AMA PRA Category 1, primary board MOC applicable, ABOM applicable — pharmacotherapy and behavioral domains." Both counters update.' },
  { time: 'AOM CE', action: '"Annual anti-obesity medication CE — tirzepatide and next-generation agents: SURMOUNT-1 52-week data (tirzepatide 15mg: 22.5% mean body weight reduction), SURMOUNT-2 in T2DM (16% body weight reduction with HbA1c reduction), SURMOUNT-5 head-to-head semaglutide versus tirzepatide (anticipated 2024 data), retatrutide (GLP-1/GIP/glucagon triple agonist) Phase 3 enrollment and mechanism-of-action CE, and oral semaglutide (Rybelsus) for obesity — off-label evidence and bioavailability variability, 4 CME, ABOM applicable, Q1." Annual AOM CE placed Q1 aligned with OMA April conference.' },
  { time: 'Bariatric CE', action: '"Annual bariatric surgery co-management CE — post-bariatric nutritional management 2024 ASMBS/SAGES update: thiamine supplementation protocol in patients with excessive vomiting post-sleeve (Wernicke encephalopathy prevention), copper deficiency neuropathy incidence in long-limb RYGB at 5 years, anti-obesity medication use after bariatric surgery (GLP-1 agonist post-sleeve for weight recidivism), and semaglutide versus revision surgery for post-bariatric weight regain decision framework, 3 CME, ABOM applicable, Q3." Annual bariatric co-management CE placed Q3 aligned with ASMBS June meeting data.' },
  { time: 'Renewal audit', action: 'Analytics: primary board MOC CME on pace? ABOM certification annual minimum met? (5-year aggregate tracking — annual floor documented?) State medical license CME complete? DEA valid (required for Schedule IV phentermine, diethylpropion)? Annual GLP-1 agonist CE documented? Annual bariatric surgery co-management CE documented? OMA membership active? Complete obesity medicine specialist credential audit 90 days before earliest renewal.' },
]

export default function ForObesityMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Obesity Medicine Specialists"
        title={
          <>
            Primary board MOC and ABOM certification maintained.
            <br />
            <em className="not-italic text-gold">GLP-1 agonist CE current. Bariatric co-management tracked.</em>
          </>
        }
        lede="Obesity medicine specialists manage their primary board MOC alongside ABOM certification with annual minimum CME requirements on a 5-year recertification cycle, DEA 3-year registration for Schedule IV anti-obesity medications, annual GLP-1 receptor agonist CE as tirzepatide approval and next-generation agents expand the pharmacotherapy landscape, annual bariatric surgery co-management CE as post-operative nutritional management protocols evolve, state medical license biennial CME, and professional development at OMA and TOS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Obesity Medicine Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How obesity medicine specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for obesity medicine specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Obesity medicine specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, ABOM 5-year certification cycle, DEA registration, and annual GLP-1 and bariatric CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {OBESITY_WORKFLOW.map((step, i) => (
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
                &ldquo;Primary board MOC continuous and ABOM certification on a 5-year cycle with an annual minimum CME requirement — the annual floor is what catches people, not the 5-year aggregate. When tirzepatide came through FDA approval in late 2023, I needed CE on the SURMOUNT trial data and the GIP mechanism before I started prescribing it at scale. That CE was not on my board renewal calendar — it was clinically urgent and it was its own documentation category. The bariatric co-management CE matters because my post-bariatric patients have medication absorption changes that affect nearly every drug they take, and the ASMBS guidelines update my protocols. DEA is operational: phentermine is Schedule IV and I prescribe it daily. One lapsed DEA renewal touches every patient on a controlled substance. All of these on one calendar with 90-day alerts changed how I think about credentialing.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Valentina S., MD</div>
                  <div className="text-xs text-muted-foreground">Obesity medicine specialist and medical director, integrated weight management program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All obesity medicine specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary board MOC — continuous (ABIM/ABFM/ABPN/ABP)',
                'ABOM certification — 5-year recertification, annual minimum CME floor',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year (Schedule IV anti-obesity medications)',
                'Annual GLP-1 agonist CE — semaglutide, tirzepatide, pipeline agents',
                'Annual bariatric surgery co-management CE — ASMBS nutritional protocol updates',
                'OMA membership renewal — annual',
                'OMA and TOS conference CME planning by ABOM applicability',
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
        title="Primary board MOC and ABOM certification maintained."
        subtitle="CME tracking for dual board certification, ABOM annual minimum floor, DEA registration for Schedule IV medications, annual GLP-1 agonist CE, and obesity medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
