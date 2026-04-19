import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Headache Medicine Specialists — ABPN MOC CME renewal, headache medicine credential management',
  description:
    'Headache medicine specialists manage ABPN neurology primary MOC and UCNS headache medicine subspecialty certification on a 10-year cycle, annual CGRP monoclonal antibody CE as atogepant and rimegepant preventive indications expand and new gepant data emerge, annual OnabotulinumtoxinA CE as chronic migraine dosing protocols and site injection updates evolve, state medical license biennial CME, DEA 3-year renewal, and AHS membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/headache-medicine-specialists' },
  openGraph: {
    title: 'Momenties for Headache Medicine Specialists',
    description: 'ABPN MOC CME renewal, headache medicine credential management.',
    url: '/for/headache-medicine-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and UCNS headache medicine subspecialty independently',
    desc: 'Headache medicine specialists hold ABPN neurology primary certification under continuous MOC and UCNS (United Council for Neurologic Subspecialties) headache medicine subspecialty certification on a 10-year examination cycle — two credentials with different content requirements and a 24-month preparation window for the UCNS examination. UCNS headache medicine requires headache-specific content: migraine diagnosis and treatment (episodic and chronic), trigeminal autonomic cephalalgias (cluster headache, SUNCT, SUNA, paroxysmal hemicrania), new daily persistent headache (NDPH), medication overuse headache (MOH), secondary headache evaluation (red flags — thunderclap, positional, new-onset in older patients), and headache in special populations (pregnancy, children, elderly).',
  },
  {
    icon: Clock,
    title: 'Headache medicine specialist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME." "UCNS headache medicine subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual CGRP CE — atogepant (Qulipta) preventive data in episodic and chronic migraine, rimegepant (Nurtec) preventive FDA approval expansion, ubrogepant acute versus preventive comparison." "Annual onabotulinumtoxinA CE — PREEMPT protocol updates, injection site optimization, real-world effectiveness data." "Annual neuromodulation CE — CEFALY supraorbital stimulation, gammaCore vagus nerve stimulation for cluster headache." "AHS membership — annual." All headache medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual CGRP pathway CE and preventive treatment update analytics',
    desc: 'Headache medicine specialists managing CGRP therapies must maintain CE on a landscape that has expanded from monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) to oral gepants with dual acute/preventive indications: atogepant (Qulipta) received FDA approval for both episodic (2021) and chronic migraine (2023) prevention. Rimegepant (Nurtec) received FDA approval for acute treatment and episodic migraine prevention on an every-other-day dosing schedule — the first acute migraine treatment with a preventive indication. Annual CE on gepant patient selection (prior CGRP mAb failure, cardiovascular contraindications to triptans, medication overuse headache) is required for current prescribing practice.',
  },
  {
    icon: Users,
    title: 'AHS, NHF, and headache medicine professional development',
    desc: '"AHS American Headache Society Annual Scientific Meeting — june." "AAN Annual Meeting — april." "IHC International Headache Congress — biennial." "EHF European Headache Federation — biennial." "CGRP mAb CE — erenumab CGRP receptor antibody versus fremanezumab/galcanezumab/eptinezumab ligand antibody — switch strategy when first CGRP mAb fails (same class versus different mechanism), erenumab constipation side effect management and discontinuation criteria, and CGRP mAb in medication overuse headache — prescribing before versus after MOH washout period evidence." "Gepant CE — atogepant 60mg daily versus 30mg every other day chronic migraine comparison (PROGRESS trial), rimegepant preventive mechanism — CGRP receptor partial agonism during non-headache days, and oral gepant versus CGRP mAb as first-line preventive — head-to-head patient preference and adherence data (ELEVATE trial)." "OnabotulinumtoxinA CE — PREEMPT injection site protocol adherence in real-world chronic migraine, frontalis dose titration for diplopia prevention, and sphenopalatine ganglion block comparison in refractory chronic migraine." "Cluster headache CE — emgality (galcanezumab) cluster headache dosing protocol — 300mg loading dose monthly during cluster period, verapamil versus galcanezumab primary prevention head-to-head." All headache medicine professional development on calendar.',
  },
]

const HEADACHE_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (headache medicine content weighted), UCNS headache medicine subspecialty CE pace (10-year cycle — 24-month prep window alert calculated from examination date), state medical license biennial CME, DEA 3-year renewal, annual CGRP pathway CE, annual onabotulinumtoxinA CE, annual neuromodulation CE, AHS Annual Scientific Meeting, AAN Annual Meeting, and AHS membership all loaded in January. ABPN counter and UCNS headache medicine counter tracked independently.' },
  { time: 'CE completion', action: '"AHS-approved — AHS 2024 Guidelines for the Acute Treatment of Migraine: gepant versus triptan selection framework for cardiovascular-risk patients, rimegepant every-other-day preventive dosing evidence for episodic migraine (CGRP receptor partial agonist mechanism during non-headache days), combination acute plus preventive in single gepant agent — patient selection criteria, and acute medication overuse thresholds for gepants versus triptans versus analgesics, 4 CME, AMA PRA Category 1, ABPN MOC applicable, UCNS headache medicine applicable." Both counters update.' },
  { time: 'CGRP CE', action: '"Annual CGRP monoclonal antibody and gepant CE — 2024 real-world effectiveness data: erenumab 5-year persistence and effectiveness by migraine day reduction tier (>50%, >75%, >90% responders), fremanezumab quarterly versus monthly dosing convenience preference — refill adherence comparison at 12 months, atogepant versus topiramate first-line preventive — adverse effect profile and discontinuation rate comparison (ELEVATE trial extension), and lasmiditan 5-HT1F agonist — role in gepant non-responders and cardiovascular-risk patients, 3 CME, UCNS headache medicine applicable, Q1." Annual CGRP CE placed Q1 aligned with AHS June meeting.' },
  { time: 'Botulinum CE', action: '"Annual onabotulinumtoxinA CE — PREEMPT protocol update and site optimization: frontalis injection dose reduction from 20 to 10 units in patients with diplopia history, combined PREEMPT plus CGRP mAb versus PREEMPT alone in refractory chronic migraine (COMPEL trial 2-year extension), trigger point injection sites beyond PREEMPT — temporalis, masseter, sternocleidomastoid addition in refractory cases, and onabotulinumtoxinA in medication overuse headache — timing relative to MOH washout and CGRP mAb initiation, 3 CME, UCNS headache medicine applicable, Q3." Annual botulinum CE placed Q3 aligned with AAN April and IHC biennial.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace? UCNS headache medicine subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? Annual CGRP pathway CE documented? Annual onabotulinumtoxinA CE documented? Annual neuromodulation CE documented? AHS membership active? Complete headache medicine specialist credential audit 90 days before earliest renewal.' },
]

export default function ForHeadacheMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Headache Medicine Specialists"
        title={
          <>
            ABPN neurology MOC and UCNS headache medicine subspecialty maintained.
            <br />
            <em className="not-italic text-gold">CGRP gepant CE current. OnabotulinumtoxinA protocols tracked.</em>
          </>
        }
        lede="Headache medicine specialists manage ABPN neurology continuous MOC and UCNS headache medicine subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts. Annual CGRP CE as atogepant and rimegepant dual acute/preventive indications expand the gepant landscape, annual onabotulinumtoxinA CE as PREEMPT protocol updates and real-world combination data emerge, annual neuromodulation CE, state medical license biennial CME, DEA 3-year registration, and professional development at AHS and AAN. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Headache Medicine Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How headache medicine specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for headache medicine specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Headache medicine specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC, UCNS 10-year subspecialty examination, and annual CGRP, botulinum, and neuromodulation CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {HEADACHE_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN neurology continuous MOC and UCNS headache medicine on a 10-year cycle — tracked separately. The CGRP landscape has changed so rapidly that I need annual CE just to know what I can prescribe: rimegepant preventive approval came after the acute approval, and the gepant versus mAb decision framework for first-line preventive changed again when the ELEVATE trial data came out. That CE was clinically urgent and had nothing to do with my board calendar. The botulinum CE matters because the PREEMPT protocol updates include site optimization that changes injection technique — I need documented CE before I update my injection protocol. The 10-year UCNS exam cycle means a 24-month prep window that I track independently from my annual clinical CME. All of these are on different calendars that I now manage in one place.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Gabrielle T., MD</div>
                  <div className="text-xs text-muted-foreground">Headache medicine specialist and migraine program director, academic neurology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All headache medicine specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, headache medicine content weighted',
                'UCNS headache medicine subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual CGRP CE — gepant dual acute/preventive indications, mAb vs gepant selection',
                'Annual onabotulinumtoxinA CE — PREEMPT protocol updates, combination therapy',
                'Annual neuromodulation CE — CEFALY, gammaCore, sphenopalatine ganglion',
                'AHS and AAN conference CME planning by UCNS and ABPN applicability',
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
        title="ABPN neurology MOC and UCNS headache medicine subspecialty maintained."
        subtitle="CME tracking for ABPN MOC and UCNS 10-year exam prep window, annual CGRP gepant CE, onabotulinumtoxinA protocol CE, and headache medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
