import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Geriatric Psychiatrists — ABPN MOC CME renewal, geriatric psychiatry credential management',
  description:
    'Geriatric psychiatrists manage ABPN psychiatry primary MOC and ABPN geriatric psychiatry subspecialty certification on a 10-year cycle, annual dementia CE as lecanemab Leqembi and donanemab Kisunla FDA approvals update Alzheimer disease treatment selection and ARIA monitoring, annual late-life depression CE as ketamine and esketamine protocols in geriatric patients with cardiovascular comorbidities evolve, annual delirium CE as IQCODE and 4AT delirium assessment tools update inpatient protocols, state medical license biennial CME, DEA 3-year renewal, and AAGP membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/geriatric-psychiatrists' },
  openGraph: {
    title: 'Momenties for Geriatric Psychiatrists',
    description: 'ABPN MOC CME renewal, geriatric psychiatry credential management.',
    url: '/for/geriatric-psychiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN psychiatry MOC and ABPN geriatric psychiatry subspecialty independently',
    desc: 'Geriatric psychiatrists hold ABPN psychiatry primary certification under continuous MOC and ABPN geriatric psychiatry subspecialty certification on a 10-year examination cycle with a 24-month preparation window. ABPN geriatric psychiatry requires geriatric-specific content: dementia evaluation and management (Alzheimer disease, Lewy body dementia, frontotemporal dementia, vascular dementia — diagnostic criteria and behavioral symptom management), late-life depression (pharmacokinetic changes with aging, ECT in geriatric patients), late-life anxiety and psychosis, delirium assessment and management (CAM, 4AT, IQCODE tools), and psychopharmacology in the context of polypharmacy and reduced renal/hepatic clearance.',
  },
  {
    icon: Clock,
    title: 'Geriatric psychiatrist multi-credential renewal calendar',
    desc: '"ABPN psychiatry MOC — continuous CME." "ABPN geriatric psychiatry subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual dementia CE — lecanemab Leqembi FDA 2023 traditional approval (CLARITY AD 18-month CDR-SB data), donanemab Kisunla FDA 2024 approval (TRAILBLAZER-ALZ 2), ARIA-E and ARIA-H monitoring protocol and MRI surveillance schedule." "Annual depression CE — esketamine Spravato geriatric safety data, ketamine IV protocol in cardiovascular-comorbid geriatric patients." "Annual delirium CE — 4AT delirium assessment tool validation, non-pharmacological delirium prevention bundle update." "AAGP membership — annual." All geriatric psychiatry credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual dementia CE and anti-amyloid therapy monitoring update analytics',
    desc: 'Geriatric psychiatrists prescribing anti-amyloid therapies must maintain CE on rapidly evolving protocols: lecanemab (Leqembi) received FDA traditional approval in July 2023 based on CLARITY AD 18-month data showing CDR-SB slowing of 0.45 points versus placebo, with ARIA-E in 12.6% and ARIA-H microhemorrhages in 17.3% requiring pre-treatment MRI and serial MRI surveillance (weeks 4, 12, and 24 after treatment initiation). Donanemab (Kisunla) received FDA approval in July 2024 based on TRAILBLAZER-ALZ 2 — ARIA-H cerebral microhemorrhages in 31.4% at 76 weeks. CE on ARIA risk stratification (APOE4 carrier status, prior microhemorrhages, anticoagulation use) and MRI surveillance scheduling is required before prescribing either agent.',
  },
  {
    icon: Users,
    title: 'AAGP, AAIC, and geriatric psychiatry professional development',
    desc: '"AAGP American Association for Geriatric Psychiatry Annual Meeting — march." "AAIC Alzheimer\'s Association International Conference — july." "APA Annual Meeting — may." "GPS Geriatric Psychiatry Summit." "Dementia CE — lecanemab CLARITY AD 18-month CDR-SB data CE (prescribing criteria: confirmed amyloid by PET or CSF, MCI or mild dementia stage, APOE4 carrier versus non-carrier ARIA risk stratification), donanemab TRAILBLAZER-ALZ 2 CE (low/medium versus high tau PET stratification, dosing discontinuation at amyloid clearance threshold), ARIA management protocol CE (asymptomatic ARIA-E — continue versus pause versus discontinue decision tree, MRI surveillance schedule weeks 4/12/24), and lewy body dementia 2023 DLB Consortium criteria update (biomarker stratification — amyloid PET, dopamine transporter SPECT, polysomnography as indicative biomarkers)." "Late-life depression CE — esketamine Spravato geriatric safety data (cardiovascular monitoring requirements in patients above 65, dissociation monitoring parameters), ECT optimization in late-life depression with cognitive comorbidity (brief pulse versus ultra-brief pulse parameters in patients with baseline cognitive impairment), late-life treatment-resistant depression — augmentation with lithium, aripiprazole, or brexpiprazole — renal monitoring in elderly patients, and pharmacokinetic CE for geriatric psychopharmacology (renal function dose adjustment — citalopram 20 mg ceiling, lithium target level reduction, mirtazapine sedation risk at higher doses in elderly)." "Delirium CE — 4AT tool validation in hospitalized elderly versus CAM — sensitivity and specificity comparison in emergency department and inpatient settings, non-pharmacological delirium prevention bundle (HELP Hospital Elder Life Program components — cognitive stimulation, early mobility, sleep hygiene), and haloperidol versus quetiapine for delirium-related agitation — pharmacokinetic comparison in elderly patients with polypharmacy." All geriatric psychiatry professional development on calendar.',
  },
]

const GERI_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN psychiatry MOC CME pace (geriatric psychiatry content weighted), ABPN geriatric psychiatry subspecialty CE pace (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal, annual dementia CE (anti-amyloid therapy protocol CE critical), annual late-life depression CE, annual delirium CE, AAGP Annual Meeting, AAIC Conference, APA Annual Meeting, and AAGP membership all loaded in January. ABPN psychiatry counter and ABPN geriatric psychiatry counter tracked independently.' },
  { time: 'CE completion', action: '"AAGP-approved — AAGP 2024 Anti-Amyloid Therapy update: lecanemab CLARITY AD 18-month data CE (CDR-SB 0.45-point slowing — clinical meaningfulness threshold discussion), donanemab TRAILBLAZER-ALZ 2 CE (tau PET stratification — low/medium versus high baseline tau responder analysis), ARIA monitoring protocol CE (ARIA-E versus ARIA-H differentiation — clinical symptoms versus MRI finding management, APOE4 homozygous carrier contraindication), and insurance prior authorization requirements for anti-amyloid therapies — CMS coverage decision documentation requirements, 4 CME, AMA PRA Category 1, ABPN psychiatry MOC applicable, ABPN geriatric psychiatry applicable." Both counters update.' },
  { time: 'Dementia CE', action: '"Annual dementia CE — anti-amyloid prescribing protocol 2024: lecanemab ARIA risk stratification (APOE4 homozygous — ARIA-E 32.6% versus APOE4 heterozygous 9.9% versus non-carrier 5.4% — contraindication threshold CE), donanemab treatment discontinuation criteria (amyloid PET clearance threshold — when to stop active dosing), post-ARIA retreatment criteria CE (asymptomatic ARIA-E — 12-week MRI resolution criterion for retreatment), and late-onset Alzheimer disease differential — LBD/DLB versus AD — DaTscan timing for differential diagnosis before anti-amyloid eligibility determination, 3 CME, ABPN geriatric psychiatry applicable, Q1." Annual dementia CE placed Q1 aligned with AAGP March meeting.' },
  { time: 'Depression CE', action: '"Annual late-life depression and geriatric psychopharmacology CE — esketamine Spravato geriatric safety 2024: cardiovascular monitoring protocol for geriatric patients on esketamine (blood pressure monitoring — pre-dose, 40 minutes, 60 minutes post-dose, sitting and standing in patients on antihypertensives), dissociation monitoring in patients with baseline cognitive impairment — CADSS score interpretation, ECT ultra-brief pulse parameters in late-life depression with cognitive comorbidity (1.0 ms versus 0.5 ms pulse width — cognitive side effect comparison in patients with baseline mild cognitive impairment), and pharmacokinetic CE — citalopram/escitalopram cardiac QTc prolongation risk in elderly (citalopram 20 mg ceiling in patients above 60, QTc monitoring interval), 3 CME, ABPN geriatric psychiatry applicable, Q3." Annual depression CE placed Q3 aligned with AAIC July Conference.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN psychiatry MOC CME on pace? ABPN geriatric psychiatry subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid? Annual dementia CE documented? Annual late-life depression CE documented? Annual delirium CE documented? AAGP membership active? Complete geriatric psychiatry credential audit 90 days before earliest renewal.' },
]

export default function ForGeriatricPsychiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Geriatric Psychiatrists"
        title={
          <>
            ABPN psychiatry MOC and ABPN geriatric psychiatry subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Anti-amyloid therapy ARIA monitoring CE current. Late-life depression protocols tracked.</em>
          </>
        }
        lede="Geriatric psychiatrists manage ABPN psychiatry continuous MOC and ABPN geriatric psychiatry subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts. Annual dementia CE as lecanemab and donanemab prescribing criteria and ARIA monitoring protocols require documentation before anti-amyloid therapy initiation, annual late-life depression CE as esketamine geriatric safety data and ECT parameters evolve, annual delirium CE, state medical license biennial CME, DEA 3-year registration, and professional development at AAGP and AAIC. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Geriatric Psychiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How geriatric psychiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for geriatric psychiatrist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Geriatric psychiatrist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC, ABPN 10-year geriatric psychiatry examination, and annual dementia, late-life depression, and delirium CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {GERI_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN psychiatry continuous MOC and ABPN geriatric psychiatry on a 10-year cycle — tracked separately because the geriatric content requirements are different. The anti-amyloid therapy CE is where the clinical urgency is highest right now: lecanemab and donanemab both require documented CE on ARIA risk stratification and the MRI surveillance schedule before I can prescribe. My hospital credentialing committee requires documented CE before approval to prescribe anti-amyloid therapies. The APOE4 homozygous contraindication CE was urgent: I had a family pushing for lecanemab for their mother and I needed documented CE on the ARIA-E risk in APOE4 homozygous carriers before that conversation. The esketamine cardiovascular monitoring CE was the same: different monitoring protocol for patients above 65, and I needed that documented before my first geriatric Spravato patient. The 10-year board prep window and the annual clinical CE are on completely different timelines.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Harriet C., MD</div>
                  <div className="text-xs text-muted-foreground">Geriatric psychiatrist and memory disorders program director, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All geriatric psychiatrist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN psychiatry MOC CME — continuous, geriatric psychiatry content weighted',
                'ABPN geriatric psychiatry subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual dementia CE — anti-amyloid ARIA protocol, lecanemab/donanemab prescribing criteria',
                'Annual late-life depression CE — esketamine geriatric monitoring, ECT ultra-brief pulse',
                'Annual delirium CE — 4AT tool, non-pharmacological prevention bundle, haloperidol/quetiapine',
                'AAGP and AAIC conference CME planning by ABPN applicability',
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
        title="ABPN psychiatry MOC and ABPN geriatric psychiatry subspecialty maintained."
        subtitle="CME tracking for ABPN MOC and ABPN 10-year exam prep window, annual anti-amyloid therapy CE, late-life depression CE, delirium CE, and geriatric psychiatry professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
