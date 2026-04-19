import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neuro-Intensivists — primary board MOC CME renewal, neurocritical care credential management',
  description:
    'Neuro-intensivists manage ABPN neurology or ABA anesthesiology primary MOC and UCNS neurocritical care subspecialty certification on a 10-year cycle, annual ICP monitoring CE as autoregulation-guided CPP targeting and non-invasive ONSD protocols evolve, annual status epilepticus CE as brivaracetam IV and NORSE immunotherapy protocols update refractory SE management, annual post-cardiac arrest CE as TTM2 normothermia data reshapes temperature management, state medical license biennial CME, DEA 3-year renewal, and NCS membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/neuro-intensivists' },
  openGraph: {
    title: 'Momenties for Neuro-Intensivists',
    description: 'Primary board MOC CME renewal, neurocritical care credential management.',
    url: '/for/neuro-intensivists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and UCNS neurocritical care subspecialty independently',
    desc: 'Neuro-intensivists hold ABPN neurology, ABA anesthesiology, or ABIM internal medicine primary board certification under continuous MOC alongside UCNS neurocritical care subspecialty certification on a 10-year examination cycle with a 24-month preparation window. UCNS neurocritical care requires ICU-specific content: intracranial pressure monitoring and management, mechanical ventilation in neurologic patients (goals by diagnosis — TBI, SAH, ICH, stroke), seizure management and continuous EEG monitoring, post-cardiac arrest care including prognostication, and multiorgan failure in the neurologic patient.',
  },
  {
    icon: Clock,
    title: 'Neuro-intensivist multi-credential renewal calendar',
    desc: '"Primary board MOC (ABPN/ABA/ABIM) — continuous CME." "UCNS neurocritical care subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual ICP CE — CPPopt autoregulation-guided targeting using PRx, optic nerve sheath diameter non-invasive ICP screening." "Annual status epilepticus CE — brivaracetam IV FDA 2024 approval for SE, NORSE anakinra immunotherapy protocol." "Annual post-cardiac arrest CE — TTM2 normothermia protocol update, GRADE multimodal prognostication." "NCS membership — annual." All neurocritical care credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual ICP management CE and post-cardiac arrest update analytics',
    desc: 'Neuro-intensivists must maintain CE on evolving monitoring and intervention protocols: the TTM2 trial demonstrated that targeted normothermia (36°C) was non-inferior to hypothermia (33°C) for comatose survivors of cardiac arrest — CE on post-TTM2 protocol updates is required for ICU directors implementing new temperature management policies. Non-invasive ICP monitoring CE has become relevant as optic nerve sheath diameter (ONSD) ultrasound has been validated in TBI and SAH with 93% sensitivity at 5 mm threshold — CE on ONSD technique, limitations, and integration with invasive monitoring decisions is now embedded in neurocritical care fellowship curricula.',
  },
  {
    icon: Users,
    title: 'NCS, SCCM, and neurocritical care professional development',
    desc: '"NCS Neurocritical Care Annual Meeting — october." "SCCM Critical Care Congress — february." "AAN Annual Meeting — april." "ICP CE — CPPopt methodology using PRx pressure reactivity index in TBI (BEST TRIP reanalysis identifying autoregulation-intact subgroup), ONSD 5 mm ICP screening (technique CE: probe placement, angle correction, inter-rater reliability), continuous pupillometry NPi-300 alarm threshold validation versus manual pupil exam, and lumbar drain protocol in aneurysmal SAH (TARGET-SAH) — drainage volume versus standard EVD." "Status epilepticus CE — brivaracetam IV FDA approval 2024 for SE (loading 200 mg IV, mechanism CE — synaptic vesicle protein 2A with less drug-drug interaction versus phenytoin), NORSE and FIRES immune-mediated SE — anakinra IL-1 receptor antagonist dosing protocol, ketamine anesthetic SE — KETASER trial continuous IV ketamine in RSE, and pentobarbital coma depth — burst-suppression target versus electrographic seizure elimination in SRSE." "Post-cardiac arrest CE — TTM2 normothermia 36°C protocol CE (fever prevention threshold, neuromuscular blockade duration), multimodal neuroprognostication GRADE score validation (EEG reactivity, N20 SSEP, NSE, CT/MRI, pupillometry), and coronary angiography timing post-OHCA — COACT and TOMAHAWK trial implication for ICU pathway." All neurocritical care professional development on calendar.',
  },
]

const NCC_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (neurocritical care content weighted), UCNS neurocritical care subspecialty CE pace (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal, annual ICP management CE, annual status epilepticus CE, annual post-cardiac arrest CE, NCS Annual Meeting, SCCM Critical Care Congress, AAN Annual Meeting, and NCS membership all loaded in January. Primary board counter and UCNS neurocritical care counter tracked independently.' },
  { time: 'CE completion', action: '"NCS-approved — NCS 2024 Neurocritical Care Guidelines update: post-cardiac arrest targeted normothermia implementation (TTM2 fever prevention protocol versus 33°C hypothermia — evidence-based 36°C institutional protocol adoption), continuous EEG monitoring indications after cardiac arrest (burst-suppression versus seizure detection endpoint), and brivaracetam IV third-line RSE recommendation with loading dose protocol, 4 CME, AMA PRA Category 1, primary board MOC applicable, UCNS neurocritical care applicable." Both counters update.' },
  { time: 'ICP CE', action: '"Annual ICP and monitoring CE — cerebral autoregulation update 2024: CPPopt methodology — ICM+ software optimal CPP targeting using pressure reactivity index (PRx) in TBI (BEST TRIP reanalysis identifying autoregulation-intact subgroup with improved outcomes), optic nerve sheath diameter ultrasound ICP screening — ONSD 5 mm sensitivity 93% in TBI and SAH (technique CE: probe placement, angle correction, inter-rater reliability), continuous pupillometry NPi-300 — NPi below 3.0 herniation alarm threshold validation versus manual pupil exam, and lumbar drain protocol in aneurysmal SAH (TARGET-SAH) — drainage volume versus standard EVD, 3 CME, UCNS neurocritical care applicable, Q1." Annual ICP CE placed Q1 aligned with SCCM February.' },
  { time: 'SE CE', action: '"Annual status epilepticus CE — refractory and super-refractory SE update: brivaracetam IV FDA approval 2024 for treatment of SE — phase 3 trial data versus second-line levetiracetam (loading 200 mg IV, mechanism CE — synaptic vesicle protein 2A with less drug-drug interaction versus phenytoin), NORSE and FIRES immune-mediated SE — anakinra IL-1 receptor antagonist in febrile infection-related epilepsy syndrome dosing protocol, ketamine anesthetic SE — KETASER trial continuous IV ketamine as NMDA antagonist in RSE, and pentobarbital coma depth CE — burst-suppression target versus electrographic seizure elimination in SRSE, 3 CME, UCNS neurocritical care applicable, Q3." Annual SE CE placed Q3 aligned with NCS October meeting.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace? UCNS neurocritical care subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? Annual ICP monitoring CE documented? Annual status epilepticus CE documented? Annual post-cardiac arrest CE documented? NCS membership active? Complete neurocritical care credential audit 90 days before earliest renewal.' },
]

export default function ForNeuroIntensivistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neuro-Intensivists"
        title={
          <>
            Primary board MOC and UCNS neurocritical care subspecialty maintained.
            <br />
            <em className="not-italic text-gold">ICP monitoring CE current. Status epilepticus protocols tracked.</em>
          </>
        }
        lede="Neuro-intensivists manage primary board MOC (ABPN, ABA, or ABIM) and UCNS neurocritical care subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts. Annual ICP CE as non-invasive monitoring and autoregulation-guided CPP targeting evolve, annual status epilepticus CE as brivaracetam IV and NORSE immunotherapy protocols update refractory SE management, annual post-cardiac arrest CE as TTM2 normothermia data reshapes temperature management, state medical license biennial CME, DEA 3-year registration, and professional development at NCS and SCCM. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Neuro-Intensivists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neuro-intensivists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neuro-intensivist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neuro-intensivist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, UCNS 10-year subspecialty examination, and annual ICP, status epilepticus, and post-cardiac arrest CE requirements.</h2>
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
                &ldquo;Primary board continuous MOC and UCNS neurocritical care on a 10-year cycle — tracked separately because the ICU-specific content requirements are different from general neurology CME. The TTM2 CE was urgent: when our NICU adopted the normothermia protocol, I needed documented CE on the updated post-cardiac arrest pathway before implementing it. The brivaracetam IV CE was the same situation — FDA approval came and I needed documented CE on mechanism, loading dose, and indication before my first RSE case. The NORSE immunotherapy CE is where the pressure is highest now: the anakinra protocol timing in FIRES is still evolving and I need current CE before I can enroll families in the treatment decision. All of it on one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tariq O., MD</div>
                  <div className="text-xs text-muted-foreground">Neuro-intensivist and neurocritical care fellowship director, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neuro-intensivist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary board MOC CME (ABPN/ABA/ABIM) — continuous, neurocritical care content weighted',
                'UCNS neurocritical care subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual ICP CE — autoregulation-guided CPP, non-invasive ONSD, continuous pupillometry',
                'Annual status epilepticus CE — brivaracetam IV, NORSE immunotherapy, pentobarbital coma',
                'Annual post-cardiac arrest CE — TTM2 normothermia, GRADE prognostication, coronary angiography',
                'NCS and SCCM conference CME planning by UCNS and primary board applicability',
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
        title="Primary board MOC and UCNS neurocritical care subspecialty maintained."
        subtitle="CME tracking for primary board MOC and UCNS 10-year exam prep window, annual ICP monitoring CE, status epilepticus CE, and neurocritical care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
