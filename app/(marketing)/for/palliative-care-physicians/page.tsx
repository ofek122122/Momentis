import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Palliative Care Physicians — ABMS MOC CME renewal, palliative medicine credential management',
  description:
    'Palliative care physicians manage primary board MOC (ABIM, ABFM, ABPN, ABA, or ABP) alongside ABMS Hospice and Palliative Medicine subspecialty certification on a 10-year cycle, annual opioid CE as DEA 8-hour training requirement documentation and buprenorphine prescribing for cancer pain expand, annual advance care planning CE as POLST state form updates and surrogate decision-making law changes require annual documentation, annual symptom CE as olanzapine refractory nausea and low-dose ketamine refractory pain protocols evolve, state medical license biennial CME, DEA 3-year renewal, and AAHPM membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/palliative-care-physicians' },
  openGraph: {
    title: 'Momenties for Palliative Care Physicians',
    description: 'ABMS MOC CME renewal, palliative medicine credential management.',
    url: '/for/palliative-care-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and ABMS Hospice and Palliative Medicine subspecialty independently',
    desc: 'Palliative care physicians hold primary board certification under ABIM (internal medicine, oncology, pulmonary, cardiology), ABFM (family medicine), ABPN (psychiatry, neurology), ABA (anesthesiology), or ABP (pediatrics) under continuous MOC alongside ABMS Hospice and Palliative Medicine (HPM) subspecialty certification on a 10-year examination cycle with a 24-month preparation window. ABMS HPM requires palliative-specific content: pain assessment and management (opioid pharmacology, adjuvants, equianalgesic dosing), non-pain symptom management (dyspnea, nausea, delirium), advance care planning (POLST, advance directives, surrogate decision-making), goals-of-care communication, and hospice benefit and prognosis.',
  },
  {
    icon: Clock,
    title: 'Palliative care physician multi-credential renewal calendar',
    desc: '"Primary board MOC (ABIM/ABFM/ABPN/ABA/ABP) — continuous CME." "ABMS HPM subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal — opioid prescribing critical." "DEA 8-hour training — SUPPORT Act 2023 requirement documented annually." "Annual opioid CE — MEDD conversion table update, buprenorphine cancer pain REMS CE." "Annual symptom CE — olanzapine refractory nausea protocol, low-dose ketamine refractory pain." "Annual ACP CE — state POLST form update, surrogate decision-making capacity tools." "AAHPM membership — annual." All palliative medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual opioid pharmacology CE and advance care planning update analytics',
    desc: 'Palliative care physicians prescribing opioids must maintain CE on evolving regulatory requirements and pharmacology: the SUPPORT Act 2023 established a mandatory 8-hour training requirement for all DEA-registered practitioners who prescribe Schedule II-V controlled substances — CE on completing and documenting this training is required for DEA registration renewal. Buprenorphine for cancer pain has emerged as a distinct CE need: the 2023 DEA rule change eliminating the X-waiver requirement for buprenorphine prescribing has expanded its use in palliative care for refractory cancer pain and opioid-tolerant patients — CE on transdermal and sublingual buprenorphine pharmacokinetics, equianalgesic conversion from full agonist opioids, and ceiling effect in pain management is required before prescribing.',
  },
  {
    icon: Users,
    title: 'AAHPM, NHPCO, ASCO, and palliative medicine professional development',
    desc: '"AAHPM American Academy of Hospice and Palliative Medicine Annual Assembly — february." "NHPCO National Hospice and Palliative Care Organization Clinical Conference — april." "ASCO Annual Meeting — june (integration of oncology palliative care)." "CHEST Annual Meeting — october." "Opioid CE — MEDD morphine milligram equivalent daily dose conversion table 2024 update CE (state-specific MME thresholds for high-dose opioid review — 90 MME versus 120 MME — clinical documentation requirements), buprenorphine cancer pain CE (buprenorphine 5/10/20 mcg/h transdermal versus sublingual pharmacokinetics — ceiling effect in the context of cancer pain, rotation from full agonist opioid to buprenorphine CE), low-dose naltrexone adjuvant CE (LDN 1.5-4.5 mg daily — immune modulation mechanism in cancer cachexia and centralized pain), and methadone rotation CE (MEDD-to-methadone conversion ratios at different opioid doses — variable ratio at low versus high morphine equivalent dose CE)." "Symptom CE — olanzapine refractory chemotherapy-induced nausea and vomiting CE (5 mg oral olanzapine mechanism — D2 and 5-HT2 receptor antagonism, MITO trial comparison versus ondansetron/dexamethasone — multi-drug refractory CINV), low-dose ketamine refractory cancer pain CE (ketamine 0.1-0.5 mg/kg/h NMDA antagonist mechanism, respiratory depression threshold versus morphine equivalent — monitoring protocol, subcutaneous versus IV versus intranasal delivery), delirium in the dying patient CE (palliative sedation versus opioid rotation for refractory delirium — ethical framework CE, midazolam versus haloperidol for terminal delirium), and gabapentinoid tapering in end-of-life CE (gabapentin/pregabalin abrupt discontinuation seizure risk in dying patients — taper protocol)." "ACP CE — state POLST form update CE (2024 state-specific changes — code status terminology, clinician signature requirements), POLST versus advance directive — when each document controls CE (hospital admission CE — POLST portable medical order versus advance directive as guideline), and surrogate decision-making capacity CE (DMC assessment tools in the palliative care setting — Brief Assessment tool versus MacCAT-T)." All palliative medicine professional development on calendar.',
  },
]

const PALL_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC CME pace (palliative medicine content weighted), ABMS HPM subspecialty CE pace (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal (opioid prescribing critical — flag 6 months in advance), DEA 8-hour SUPPORT Act training documented annually, annual opioid pharmacology CE, annual symptom management CE, annual ACP CE, AAHPM Annual Assembly, NHPCO Conference, and AAHPM membership all loaded in January. Primary board counter and ABMS HPM counter tracked independently.' },
  { time: 'CE completion', action: '"AAHPM-approved — AAHPM 2024 Palliative Care Clinical Update: buprenorphine cancer pain CE (post-X-waiver DEA rule change — transdermal and sublingual buprenorphine for opioid-tolerant cancer pain patients, conversion from full agonist CE — MEDD-to-buprenorphine conversion approaches, ceiling effect clinical significance versus theoretical), olanzapine refractory CINV protocol CE (5 mg oral olanzapine — MITO trial 5-drug refractory nausea CE, QTc monitoring in patients with baseline QTc prolongation from prior chemotherapy), and low-dose naltrexone cancer cachexia CE — immune mechanism and evidence base, 4 CME, AMA PRA Category 1, primary board MOC applicable, ABMS HPM applicable." Both counters update.' },
  { time: 'Opioid CE', action: '"Annual opioid pharmacology CE — MEDD and buprenorphine update 2024: MEDD conversion table CE (CDC 2022 clinical practice guideline MME calculation — opioid-specific conversion factors CE for all Schedule II opioids including oxymorphone and tapentadol, state-specific MME thresholds for high-dose review documentation requirements), methadone MEDD conversion CE (variable conversion ratio at less than 30 mg/day versus 30-99 mg/day versus above 100 mg/day morphine equivalent — underconversion risk CE), buprenorphine 20 mcg/h transdermal and 8/16 mg sublingual in opioid-tolerant cancer pain (pharmacokinetic CE — partial agonist ceiling in practice at high cancer pain dose requirements, rotation timing and dose CE), and DEA 8-hour SUPPORT Act documentation CE (one-time requirement completed, annual renewal documentation of completion), 3 CME, ABMS HPM applicable, Q1." Annual opioid CE placed Q1 aligned with AAHPM February Assembly.' },
  { time: 'Symptom CE', action: '"Annual symptom management CE — refractory symptoms 2024: low-dose ketamine protocol CE (0.1-0.3 mg/kg/h continuous subcutaneous infusion for refractory cancer pain — NMDA receptor antagonism in central sensitization, emergence phenomenon monitoring in palliative doses versus anesthetic doses, co-administration with opioid — dose reduction CE as ketamine opioid-sparing), delirium in the dying patient CE (palliative sedation ethical framework — refractory delirium versus terminal agitation, midazolam 1-5 mg subcutaneous versus haloperidol 2-5 mg for terminal delirium, proportionate versus continuous palliative sedation CE), dyspnea in the dying patient CE (opioid dose CE for dyspnea versus pain — dyspnea dose threshold CE, high-flow oxygen versus room air in non-hypoxic dyspnea CE), and gabapentin abrupt discontinuation risk in end-of-life CE (seizure risk threshold dose — taper protocol in patients unable to swallow), 3 CME, ABMS HPM applicable, Q3." Annual symptom CE placed Q3 aligned with NHPCO April Conference.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace? ABMS HPM subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? DEA 8-hour SUPPORT Act training documented this year? Annual opioid CE documented? Annual symptom CE documented? Annual ACP CE documented? AAHPM membership active? Complete palliative medicine credential audit 90 days before earliest renewal.' },
]

export default function ForPalliativeCarePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Palliative Care Physicians"
        title={
          <>
            Primary board MOC and ABMS Hospice and Palliative Medicine subspecialty maintained.
            <br />
            <em className="not-italic text-gold">DEA 8-hour training documented. Opioid pharmacology CE current.</em>
          </>
        }
        lede="Palliative care physicians manage primary board MOC (ABIM, ABFM, ABPN, ABA, or ABP) and ABMS Hospice and Palliative Medicine subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts. DEA 8-hour SUPPORT Act training required annually and documented separately. Annual opioid CE as buprenorphine cancer pain prescribing expands post-X-waiver and MEDD conversion updates continue, annual symptom CE as ketamine and olanzapine refractory protocols evolve, annual advance care planning CE as POLST forms update by state. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Palliative Care Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How palliative care physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for palliative care physician credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Palliative care physician credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through primary board MOC, ABMS HPM 10-year subspecialty examination, DEA requirements, and annual opioid, symptom, and advance care planning CE.</h2>
          </Reveal>
          <div className="space-y-3">
            {PALL_WORKFLOW.map((step, i) => (
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
                &ldquo;Primary board continuous MOC and ABMS HPM on a 10-year cycle — tracked separately. The DEA 8-hour training CE is the one that surprised me: it is a separate annual documentation requirement that is easy to miss because it does not appear on any board maintenance tracker. The buprenorphine cancer pain CE was urgent: after the X-waiver was eliminated, I started getting referrals for opioid-tolerant cancer pain patients where buprenorphine made clinical sense, and I needed documented CE on the MEDD conversion and ceiling effect before my first case. The methadone rotation CE is the highest-risk pharmacology CE I do — the variable MEDD conversion ratio is where the overdose errors happen, and I need current CE on the conversion table before I rotate any patient to methadone. The POLST CE is annual by necessity: our state updates the form and the legal requirements change, so the CE is not optional.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nadia B., MD</div>
                  <div className="text-xs text-muted-foreground">Palliative care physician and hospice medical director, academic cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All palliative care physician credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary board MOC CME (ABIM/ABFM/ABPN/ABA/ABP) — continuous, HPM content weighted',
                'ABMS HPM subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year, high-priority for opioid prescribers',
                'DEA 8-hour SUPPORT Act training — annual documentation requirement',
                'Annual opioid CE — MEDD update, buprenorphine cancer pain, methadone rotation',
                'Annual symptom CE — ketamine refractory pain, olanzapine nausea, terminal delirium',
                'Annual ACP CE — state POLST form update, surrogate decision-making capacity tools',
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
        title="Primary board MOC and ABMS HPM subspecialty maintained."
        subtitle="CME tracking for primary board MOC, ABMS HPM 10-year exam prep window, DEA 8-hour training, annual opioid CE, symptom CE, and palliative medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
