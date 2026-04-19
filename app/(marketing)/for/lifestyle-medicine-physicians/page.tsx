import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Lifestyle Medicine Physicians — ABLM DipABLM CME renewal, lifestyle medicine credential management',
  description:
    'Lifestyle medicine physicians manage their primary board MOC and ABLM DipABLM certification with annual CME requirements across six lifestyle medicine pillars, annual plant-based nutrition CE as whole-food plant-based diet evidence in cardiometabolic disease expands, annual sleep medicine CE as AASM guidelines update insomnia and OSA behavioral intervention protocols, state medical license biennial CME, and ACLM membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/lifestyle-medicine-physicians' },
  openGraph: {
    title: 'Momenties for Lifestyle Medicine Physicians',
    description: 'ABLM DipABLM CME renewal, lifestyle medicine credential management.',
    url: '/for/lifestyle-medicine-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and ABLM DipABLM certification independently',
    desc: 'Lifestyle medicine physicians hold their primary board certification (ABIM, ABFM, ABPN, ABP, or other) under continuous or cycle-based MOC and ABLM (American Board of Lifestyle Medicine) DipABLM certification — requiring 30 lifestyle medicine-specific CME every 3 years with a structured recertification examination. ABLM requires CME specifically across the six lifestyle medicine pillars: nutrition (predominantly whole-food plant-based), physical activity, restorative sleep, stress management, avoidance of risky substances, and positive social connection. General CME does not satisfy ABLM pillar requirements — content must be specifically tagged to lifestyle medicine domains.',
  },
  {
    icon: Clock,
    title: 'Lifestyle medicine physician multi-credential renewal calendar',
    desc: '"Primary board MOC (ABIM/ABFM/etc.) — continuous or cycle-based CME." "ABLM DipABLM — 3-year recertification, 30 lifestyle medicine-specific CME, six-pillar coverage required." "State medical license — biennial CME." "Annual plant-based nutrition CE — WFPB diet in T2DM remission (BROAD trial update), PREDIMED-Plus Mediterranean diet 5-year data, AHA 2023 Dietary Guidance Advisory Committee update." "Annual physical activity CE — Exercise is Medicine updated prescription protocol, resistance training in insulin resistance, sedentary behavior independent of exercise — standing desk and NEAT evidence." "Annual sleep CE — AASM CBT-I digital delivery (Sleepio validation), OSA CPAP alternatives — positional therapy, mandibular advancement device." "ACLM membership — annual." All lifestyle medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual plant-based nutrition CE and behavioral intervention update analytics',
    desc: 'Lifestyle medicine physicians prescribing dietary interventions must maintain CE on expanding evidence: the BROAD trial (whole-food plant-based diet versus standard care in obesity and T2DM — 6-month and 12-month data) and PREDIMED-Plus (Mediterranean diet plus physical activity — 5-year CVD event reduction) provide the current evidence base for dietary prescriptions. ABLM pillar CE requirements mean nutrition CE must be specifically in plant-based or whole-food dietary approaches, not general nutrition CME. Annual sleep CE: AASM updated the CBT-I digital delivery validation in 2023 (Sleepio RCT in insomnia disorder) — CE before recommending digital CBT-I platforms to patients is required for current evidence-based practice.',
  },
  {
    icon: Users,
    title: 'ACLM, ACPM, and lifestyle medicine professional development',
    desc: '"ACLM Annual Conference — october." "ACPM American College of Preventive Medicine Annual Meeting — march." "AHA Scientific Sessions (lifestyle medicine content) — november." "Plant-based nutrition CE — BROAD trial whole-food plant-based diet T2DM remission mechanism (insulin sensitivity versus beta cell recovery), PREDIMED-Plus Mediterranean diet adherence score and 5-year MACE reduction, AHA 2021 Dietary Guidance and dietary patterns for CVD prevention — practical prescribing, and whole-food plant-based diet in stage 3-4 CKD — protein restriction versus plant protein renoprotection." "Physical activity CE — AHA/ACSM 2023 Physical Activity Guidelines implementation: resistance training frequency in T2DM (DOSE-EX trial), high-intensity interval training (HIIT) versus moderate-intensity continuous training (MICT) in cardiometabolic disease, NEAT non-exercise activity thermogenesis quantification tools and prescribing." "Stress CE — MBSR mindfulness-based stress reduction 8-week protocol CE before implementation, HPA axis and chronic stress biomarkers — cortisol awakening response measurement in clinical practice, and HeartMath coherence biofeedback — evidence base and implementation." "Sleep CE — AASM 2023 CBT-I digital platform comparison — Sleepio, Somryst, Shuti efficacy versus in-person CBT-I, OSA phenotyping — positional OSA versus REM-predominant OSA behavioral management." All lifestyle medicine professional development on calendar.',
  },
]

const LIFESTYLE_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (lifestyle medicine and preventive health content weighted), ABLM DipABLM certification CME pace (30 CME per 3-year cycle — annual pillar coverage tracked: nutrition, physical activity, sleep, stress, substances, social connection), state medical license biennial CME, annual plant-based nutrition CE, annual physical activity prescription CE, annual sleep CE, annual stress management CE, ACLM Annual Conference, and ACLM membership all loaded in January. Primary board counter and ABLM pillar-specific counter tracked independently. ABLM requires demonstrated coverage across all six pillars — pillar balance checked quarterly.' },
  { time: 'CE completion', action: '"ACLM-approved — ACLM 2023 Annual Conference: whole-food plant-based diet in type 2 diabetes remission — BROAD trial 24-month data (T2DM remission rate 57% versus 16% standard care), practical WFPB prescribing framework using plate model and food shopping guide, WFPB diet in heart failure — LVEF improvement data and statin deprescription outcomes, and Ornish Lifestyle Medicine Program Medicare reimbursement criteria and intensive cardiac rehabilitation coding, 4 CME, AMA PRA Category 1, primary board MOC applicable, ABLM applicable — nutrition pillar." Both counters update, ABLM nutrition pillar marked.' },
  { time: 'Nutrition CE', action: '"Annual plant-based nutrition CE — PREDIMED-Plus 2024 5-year data: Mediterranean diet plus caloric restriction versus Mediterranean diet alone — additional 15% MACE reduction, polyphenol bioavailability and gut microbiome changes as mechanism, Mediterranean diet adherence tool (MEDAS-14) use in clinical practice for dietary counseling documentation, and ultra-processed food consumption and T2DM incidence — NOVA classification system use in dietary assessment and counseling, 3 CME, ABLM applicable — nutrition pillar, Q1." Annual nutrition CE placed Q1 aligned with ACLM October conference preparation.' },
  { time: 'Sleep CE', action: '"Annual sleep and stress management CE — CBT-I digital implementation: AASM 2023 digital CBT-I platform review (Sleepio — OASIS RCT 6-week insomnia disorder outcomes, Somryst FDA authorized De Novo pathway), sleep restriction therapy protocol for clinical use — total sleep time reduction schedule and adherence monitoring, and mindfulness-based stress reduction (MBSR) 8-week protocol CE — Kabat-Zinn protocol fidelity requirements for clinical delivery, HRV biofeedback in stress management — HeartMath clinical protocol and 12-week coherence training outcomes, 3 CME, ABLM applicable — sleep and stress pillars, Q3." Annual sleep/stress CE placed Q3.' },
  { time: 'Renewal audit', action: 'Analytics: primary board MOC CME on pace? ABLM DipABLM 3-year CME pace on track — all six lifestyle medicine pillars covered? (Pillar balance check: nutrition, physical activity, sleep, stress management, risky substances, social connection) State medical license CME complete? Annual plant-based nutrition CE documented? Annual physical activity CE documented? Annual sleep CE documented? ACLM membership active? Complete lifestyle medicine physician credential audit 90 days before ABLM recertification deadline.' },
]

export default function ForLifestyleMedicinePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Lifestyle Medicine Physicians"
        title={
          <>
            Primary board MOC and ABLM DipABLM certification maintained.
            <br />
            <em className="not-italic text-gold">All six lifestyle medicine pillars tracked. Pillar balance audited quarterly.</em>
          </>
        }
        lede="Lifestyle medicine physicians manage their primary board MOC alongside ABLM DipABLM certification requiring 30 lifestyle medicine-specific CME per 3-year cycle with coverage across all six pillars — nutrition, physical activity, sleep, stress management, substances, and social connection. Annual plant-based nutrition CE as WFPB and Mediterranean diet evidence expands, annual sleep CE as digital CBT-I platforms gain AASM validation, annual physical activity prescription CE, state medical license biennial CME, and ACLM professional development. Momenties tracks CME by credential and pillar and manages the full calendar."
        crumbs={[{ label: 'For Lifestyle Medicine Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How lifestyle medicine physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for lifestyle medicine physician credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Lifestyle medicine physician credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, ABLM 3-year certification cycle with six-pillar coverage, and annual domain-specific CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {LIFESTYLE_WORKFLOW.map((step, i) => (
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
                &ldquo;Primary board MOC continuous and ABLM DipABLM on a 3-year cycle — tracked separately because ABLM requires specific pillar coverage that general CME does not satisfy. The pillar balance problem is real: I would accumulate 20 credits in nutrition and find at recertification that I had three credits in social connection and two in stress management. The ABLM requirement is not just a total CME count, it is six-domain coverage. Now I track pillar balance quarterly and schedule CE in underrepresented pillars proactively. The digital CBT-I CE was clinically urgent — my patients were asking me about Sleepio and I needed to know whether the AASM validation was sufficient to recommend it before I did. The plant-based nutrition evidence changes year by year in ways that matter for the specific recommendations I make. All of these on one calendar with pillar-level tracking.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Fatima A., MD, DipABLM</div>
                  <div className="text-xs text-muted-foreground">Lifestyle medicine physician and cardiometabolic wellness program director, community health system</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All lifestyle medicine physician credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary board MOC — continuous (ABIM/ABFM/ABPN/ABP)',
                'ABLM DipABLM — 3-year recertification, 30 CME with six-pillar coverage',
                'ABLM pillar balance — nutrition, physical activity, sleep, stress, substances, social connection',
                'State medical license CME — biennial',
                'Annual plant-based nutrition CE — WFPB and Mediterranean diet evidence',
                'Annual sleep CE — digital CBT-I, OSA behavioral management',
                'Annual physical activity CE — Exercise is Medicine prescription updates',
                'ACLM membership and conference CME planning by pillar domain',
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
        title="Primary board MOC and ABLM DipABLM maintained."
        subtitle="CME tracking for primary board MOC and ABLM certification with six-pillar balance analytics, annual domain CE, and lifestyle medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
