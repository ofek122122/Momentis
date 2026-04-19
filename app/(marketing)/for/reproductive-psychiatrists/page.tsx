import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Reproductive Psychiatrists — ABPN MOC CME renewal, reproductive psychiatry credential management',
  description:
    'Reproductive psychiatrists manage ABPN general psychiatry primary MOC alongside the MGH Center for Women\'s Mental Health certification and annual perinatal psychiatry CE as zuranolone FDA approval and brexanolone data update postpartum depression treatment, annual reproductive safety CE as new teratogenicity data emerges for antidepressants and mood stabilizers, state medical license biennial CME, DEA 3-year renewal, and professional development at Marcé Society and Postpartum Support International. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/reproductive-psychiatrists' },
  openGraph: {
    title: 'Momenties for Reproductive Psychiatrists',
    description: 'ABPN MOC CME renewal, reproductive psychiatry credential management.',
    url: '/for/reproductive-psychiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN psychiatry MOC and reproductive psychiatry credential independently',
    desc: 'Reproductive psychiatrists hold ABPN general psychiatry primary certification under continuous MOC. Specialized reproductive psychiatry credentialing occurs through the MGH Center for Women\'s Mental Health Reproductive Psychiatry Certificate Program (RPC) and PSI Postpartum Support International certification, both requiring reproductive psychiatry-specific CE distinct from general psychiatry MOC: perinatal pharmacology (placental drug transfer, fetal risk, neonatal adaptation syndrome), postpartum depression (PPD) diagnosis and treatment, bipolar disorder in pregnancy and the postpartum period, perinatal anxiety and OCD, reproductive loss and perinatal bereavement, and breastfeeding pharmacokinetics.',
  },
  {
    icon: Clock,
    title: 'Reproductive psychiatrist multi-credential renewal calendar',
    desc: '"ABPN general psychiatry MOC — continuous CME." "MGH RPC / PSI certification — renewal requirements, reproductive psychiatry-specific CE." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual perinatal pharmacology CE — zuranolone Zurzuvae FDA 2023 approval for PPD, brexanolone Zulresso post-market data, new antidepressant teratogenicity cohort data." "Annual reproductive safety CE — mood stabilizer reproductive toxicology updates (lamotrigine, valproate, lithium new data), antipsychotic gestational diabetes risk update." "Annual lactation CE — LactMed update: antidepressant breast milk concentration and infant exposure data." "PSI membership — annual." All reproductive psychiatry credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual perinatal pharmacology CE and reproductive safety update analytics',
    desc: 'Reproductive psychiatrists managing perinatal patients must maintain CE on a rapidly evolving pharmacology landscape: zuranolone (Zurzuvae) received FDA approval August 2023 as an oral neurosteroid for PPD — distinct from IV brexanolone, 14-day course, oral administration. CE on zuranolone versus brexanolone patient selection, prescribing requirements (REMS), and comparison with SSRIs for PPD severity tiers is required before prescribing. Annual reproductive safety CE: new SSRI teratogenicity cohort data continues to emerge — the PREG-OUT Danish cohort sertraline first-trimester data (2023) changed the NNH calculation used in risk counseling. Lithium cardiac teratogenicity risk recalibration requires annual CE update.',
  },
  {
    icon: Users,
    title: 'Marcé Society, PSI, MGH, and reproductive psychiatry professional development',
    desc: '"Marcé Society World Congress — biennial." "PSI Annual Conference — june." "MGH Postpartum Depression Update Conference — annual." "APA Annual Meeting — may (reproductive psychiatry section)." "WPMH World Congress on Women\'s Mental Health — biennial." "Perinatal pharmacology CE — zuranolone ROBIN and SKYLARK trial data (PPD and MDD), brexanolone SAGE-547 5-year post-market data, escitalopram versus sertraline comparative neonatal adaptation syndrome severity by dosing, and lamotrigine dose adjustment in pregnancy — pharmacokinetic monitoring protocol and postpartum dose adjustment timing." "Reproductive safety CE — PREG-OUT cohort antidepressant first-trimester cardiac malformation risk updated NNH/NNT calculations, International Registry of Lithium Babies updated cardiac risk estimate (revised from 2022: Ebstein anomaly risk 1-2% versus prior 3-8% estimate), and antipsychotic-associated gestational diabetes and metabolic syndrome risk by agent — clozapine versus olanzapine versus quetiapine in women of reproductive age." "Lactation CE — LactMed 2024 vortioxetine breast milk/plasma ratio data, bupropion M/P ratio and seizure risk in infants under 3 months, and escitalopram versus citalopram infant sedation reports." All reproductive psychiatry professional development on calendar.',
  },
]

const REPRO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN general psychiatry MOC CME pace (reproductive psychiatry and perinatal content weighted), MGH RPC / PSI certification renewal requirements, state medical license biennial CME, DEA 3-year renewal, annual perinatal pharmacology CE, annual reproductive safety CE, annual lactation pharmacokinetics CE, PSI Annual Conference, MGH Postpartum Update Conference, and PSI membership all loaded in January. ABPN counter and reproductive psychiatry credential requirements tracked independently.' },
  { time: 'CE completion', action: '"MGH-approved — MGH Center for Women\'s Mental Health 2024 Postpartum Depression Update: zuranolone REMS prescribing requirements and SKYLARK trial 45-day durability data, brexanolone versus zuranolone patient selection criteria (PPD severity, EPDS score threshold, prior SSRI non-response), pharmacokinetics of neurosteroid mechanisms in PPD versus MDD, and zuranolone use in bipolar depression postpartum — preliminary safety data and monitoring requirements, 4 CME, AMA PRA Category 1, ABPN MOC applicable, reproductive psychiatry CE applicable." Both ABPN and credential counters update.' },
  { time: 'Perinatal CE', action: '"Annual perinatal pharmacology CE — antidepressant safety in pregnancy 2024: PREG-OUT Danish registry sertraline first-trimester data (cardiac malformation NNH 5000 versus prior NNH 800 estimate — recalibrated risk counseling), neonatal adaptation syndrome (NAS) incidence by SSRI versus SNRI at therapeutic doses (prospective cohort 2023), folic acid supplementation timing and neural tube defect risk reduction with valproate — revised protocol for women of reproductive age on valproate, 3 CME, ABPN applicable, reproductive psychiatry CE applicable, Q1." Annual perinatal CE placed Q1 aligned with PSI June conference.' },
  { time: 'Safety CE', action: '"Annual reproductive safety and lactation CE — LactMed 2024 update: vortioxetine breast milk concentration data (M/P ratio 2.4, relative infant dose 8.4% — clinical implications for choice between escitalopram and vortioxetine in nursing mothers), bupropion hydroxybupropion metabolite infant plasma levels and seizure risk under 3 months — contraindication update, and International Registry of Lithium Babies cardiac risk revision (Ebstein anomaly recalibrated prevalence 1-2%) — counseling script revision for lithium in first trimester, 3 CME, ABPN applicable, reproductive psychiatry CE applicable, Q3." Annual safety CE placed Q3 aligned with Marcé and WPMH conferences.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN general psychiatry MOC CME on pace? MGH RPC / PSI certification CE requirements met? State medical license CME complete? DEA valid? Annual perinatal pharmacology CE documented? Annual reproductive safety CE documented? Annual lactation CE documented? PSI membership active? Complete reproductive psychiatrist credential audit 90 days before earliest renewal.' },
]

export default function ForReproductivePsychiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Reproductive Psychiatrists"
        title={
          <>
            ABPN psychiatry MOC and reproductive psychiatry credential maintained.
            <br />
            <em className="not-italic text-gold">Perinatal pharmacology CE current. Reproductive safety data tracked.</em>
          </>
        }
        lede="Reproductive psychiatrists manage ABPN general psychiatry continuous MOC alongside MGH RPC or PSI reproductive psychiatry certification renewal requirements — tracked separately. Annual perinatal pharmacology CE as zuranolone FDA approval and new SSRI teratogenicity cohort data change prescribing decisions, annual reproductive safety CE as lithium cardiac risk estimates and antipsychotic gestational diabetes data update, annual lactation pharmacokinetics CE as LactMed updates infant exposure calculations, state medical license biennial CME, DEA 3-year registration, and professional development at PSI and Marcé Society. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Reproductive Psychiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How reproductive psychiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for reproductive psychiatrist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Reproductive psychiatrist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC, reproductive psychiatry certification, and annual perinatal pharmacology, reproductive safety, and lactation CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {REPRO_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPN continuous MOC and the MGH RPC credential are separate tracks. The reproductive safety data is where the clinical urgency is highest: the lithium cardiac risk recalibration in 2022 changed the NNH I use in shared decision-making conversations with patients planning pregnancy — I needed CE on the updated estimates before I could counsel accurately. Zuranolone FDA approval in 2023 required CE on the REMS prescribing requirements before I could write a single prescription — that was not on my board renewal calendar, it was a new drug approval requiring immediate CE. The lactation CE is annual because LactMed updates continuously and my patients ask about breastfeeding safety with specific medications that may have new data. The teratogenicity cohort data changes year by year in ways that matter for the specific numbers I use in risk conversations.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nadia F., MD</div>
                  <div className="text-xs text-muted-foreground">Reproductive psychiatrist and perinatal mental health program director, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All reproductive psychiatrist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN general psychiatry MOC CME — continuous, perinatal content weighted',
                'MGH RPC / PSI reproductive psychiatry certification — renewal requirements',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual perinatal pharmacology CE — zuranolone REMS, SSRI teratogenicity cohort data',
                'Annual reproductive safety CE — lithium and mood stabilizer risk recalibration',
                'Annual lactation CE — LactMed updates, infant exposure calculations',
                'PSI and Marcé conference CME planning by ABPN and credential applicability',
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
        title="ABPN psychiatry MOC and reproductive psychiatry credential maintained."
        subtitle="CME tracking for ABPN MOC and reproductive psychiatry certification, annual perinatal pharmacology CE, reproductive safety CE, lactation CE, and perinatal professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
