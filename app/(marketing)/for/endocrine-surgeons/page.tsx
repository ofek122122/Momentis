import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Endocrine Surgeon CME Calendar — ABS MOC, AAES CE, thyroid cancer CE, parathyroid CE, adrenal CE, intraoperative neuromonitoring CE',
  description:
    'Endocrine surgeons managing ABS general surgery MOC alongside AAES (American Association of Endocrine Surgeons) CE track annual thyroid cancer CE (ATA 2024 guidelines differentiated thyroid cancer CE, active surveillance CE for low-risk PTC, RAI selective use CE), parathyroid CE (four-dimensional CT CE versus sestamibi, robotic transaxillary parathyroidectomy CE, parathyroid autofluorescence CE), adrenal CE (unilateral cortical-sparing adrenalectomy CE for bilateral pheochromocytoma, adrenocortical carcinoma CE, posterior retroperitoneoscopic adrenalectomy CE), and intraoperative neuromonitoring CE (IONM for recurrent laryngeal nerve, continuous IONM CE, IONM alert criteria CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/endocrine-surgeons' },
  openGraph: {
    title: 'Endocrine Surgeon CME Calendar',
    description: 'ABS MOC, AAES CE, thyroid cancer ATA guidelines CE, parathyroid 4D-CT CE, adrenal CE, and IONM CE — one structured calendar.',
    url: '/for/endocrine-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABS general surgery MOC (10-year) + AAES Endocrine Surgery Fellowship CE requirements — two tracks with an annual thyroid cancer guideline CE obligation',
    desc: 'Endocrine surgeons maintain ABS general surgery certification (10-year MOC cycle, 90 CME credits, 30 SA-CME required) and typically pursue AAES Fellowship credential requirements. The ATA (American Thyroid Association) publishes major guideline updates on a 5-year cycle, with interim updates for high-impact evidence — each publication requires systematic CE review to update active surveillance criteria, RAI use thresholds, and molecular testing algorithms. The American Association of Endocrine Surgeons annual meeting (AAES) and the Endocrine Society annual meeting (ENDO) provide the primary subspecialty CE. Hospital privileging for endocrine surgery requires documentation of minimally invasive parathyroid and adrenal case volumes. A CME calendar that misses the ATA interim guideline update CE risks using outdated active surveillance or RAI criteria. Momenties tracks both credit cycles and guideline CE simultaneously.',
  },
  {
    icon: Clock,
    title: 'Annual thyroid cancer CE — ATA 2024 differentiated thyroid cancer guidelines CE, active surveillance CE for PTMC, molecular testing CE',
    desc: 'Thyroid cancer CE requires annual review as ATA guidelines are updated and active surveillance evidence matures. ATA 2024 DTC guidelines CE: low-risk DTC active surveillance CE (PTMC ≤1cm, no extrathyroidal extension, no clinical lymph node metastasis — active surveillance versus hemithyroidectomy CE, Miyakami cohort CE, risk stratification CE). RAI use CE: intermediate-risk DTC RAI selective use CE (RAI avoidance in T2N0M0 differentiated CE — ESTIMABL2 trial CE, IoN trial CE). Molecular testing CE: Afirma GSC CE for indeterminate nodules (BRAF/RAS CE, RET/PTC fusion CE), ThyroSeq v3 CE, Rosetta CE. BRAF V600E CE: BRAF mutation CE for extent of surgery decision (prophylactic central neck dissection CE in BRAF+ PTC CE). RAI refractory CE: lenvatinib CE, sorafenib CE, cabozantinib CE for RAI-refractory DTC. Anaplastic thyroid cancer CE: BRAF+ ATC — dabrafenib plus trametinib CE (FDA 2018, real-world CE update).',
  },
  {
    icon: BarChart3,
    title: 'Annual parathyroid CE — 4D-CT versus sestamibi CE, parathyroid autofluorescence CE, robotic parathyroidectomy CE, multigland disease CE',
    desc: 'Parathyroid CE updates annually as autofluorescence technology and less-invasive localization mature. 4D-CT CE: 4-dimensional CT for parathyroid localization — sensitivity 82-88% versus sestamibi 70-79% CE, radiation dose CE (1.6-3.2 mSv CE), cost CE. 4D-CT versus sestamibi CE: AAES current recommendation CE — 4D-CT superior for multigland disease detection, sestamibi CE for single-gland disease with ectopic location CE. Parathyroid autofluorescence CE: near-infrared autofluorescence CE for parathyroid identification intraoperatively (PTeye CE, AdamsHand CE) — CE on sensitivity for intraoperative identification, CE on distinguishing parathyroid from fat/lymph node. Robotic parathyroidectomy CE: AAES robotic transaxillary CE — approach CE for cosmetic preference, CE on eligibility (BMI, chest circumference CE). Multigland disease CE: normocalcemic primary hyperparathyroidism CE, 4-gland exploration CE indications, parathyroid cryopreservation CE. Annual intraoperative PTH CE: Miami criterion CE (50% decline), Miami 2.0 CE, PTH plateau CE for multigland disease.',
  },
  {
    icon: Users,
    title: 'Annual adrenal CE — posterior retroperitoneoscopic adrenalectomy CE, bilateral pheochromocytoma cortical-sparing CE, adrenocortical carcinoma CE',
    desc: 'Adrenal surgery CE covers both approach selection and oncologic management updates. Posterior retroperitoneoscopic adrenalectomy CE: PRA versus transperitoneal laparoscopic CE — PRA superior operative time (CE: 60 versus 90 min), less adhesion formation, preferred approach for bilateral CE. Cortical-sparing adrenalectomy CE: bilateral pheochromocytoma CE — cortex-sparing approach for hereditary bilateral pheo (VHL, MEN2a, SDHx CE) to avoid lifelong steroid dependence, outcomes CE (adrenal insufficiency rate 28% cortex-sparing versus 100% bilateral total adrenalectomy). Adrenocortical carcinoma CE: FIRM-ACT trial CE (mitotane plus EDP versus streptozotocin CE), retroperitoneal lymph node dissection CE for ACC, minimally invasive versus open ACC CE (morcellation CE — open preferred for suspected ACC). Adrenal incidentaloma CE: ACE 2023 management guidelines CE, malignancy risk CE (HU threshold CE, size threshold CE), subclinical Cushing CE — autonomous cortisol secretion CE, bilateral adrenal hyperplasia CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS MOC audit: 10-year cycle credits (90 total, 30 SA-CME). ATA guideline review: DTC 2024 guideline publication alert — if published in Q4 prior year, January CE review block. Active surveillance protocol review: current eligibility criteria updated in EHR. Molecular testing algorithm review: Afirma GSC and ThyroSeq v3 thresholds updated. Annual parathyroid localization protocol: 4D-CT versus sestamibi algorithm reviewed. IONM protocol: continuous IONM alert criteria updated. Annual adrenal incidentaloma protocol: ACE 2023 guideline CE implementation reviewed.' },
  { phase: 'Mar–Apr', task: 'AAES annual meeting (spring): 15-20 endocrine surgery-specific CME credits. Thyroid cancer session CE: ATA guideline update CE. Parathyroid session CE: 4D-CT outcomes, autofluorescence CE. Adrenal session CE: PRA versus transperitoneal CE, ACC CE. IONM session CE: continuous IONM alert criteria update. Thyroid nodule CE: ACR TIRADS update CE, Bethesda classification CE (molecular testing CE for Bethesda 3-4 indeterminate). Thyroid lymphoma CE: primary thyroid lymphoma CE, FNAB CE for diagnosis.' },
  { phase: 'May–Jun', task: 'ENDO annual meeting (May-June): Endocrine Society CE credits for endocrine conditions. MEN syndromes CE: MEN1 CE (pancreatic neuroendocrine tumor surveillance CE, parathyroid CE for MEN1), MEN2 CE (medullary thyroid cancer CE, pheochromocytoma timing CE), VHL CE, SDHx CE. Annual IONM CE: literature review (Laryngoscope, World Journal of Surgery IONM publications). Parathyroid autofluorescence CE: PTeye annual outcomes data review. Active surveillance CE for PTMC: annual Miyakami and Ito cohort update review. Robotic thyroidectomy CE: literature review for robotic transaxillary CE.' },
  { phase: 'Jul–Aug', task: 'Thyroid cancer CE: RAI selective use literature review (ESTIMABL2 trial update CE, IoN trial CE). BRAF+ DTC CE: BRAF mutation management CE update. Anaplastic thyroid cancer CE: dabrafenib plus trametinib outcomes update. Parathyroid CE: 4D-CT versus sestamibi systematic review update CE. Cortex-sparing adrenalectomy CE: bilateral pheo outcomes update. ACC CE: FIRM-ACT long-term data review. Annual IONM CE: intraoperative alert criteria review, loss of signal management CE. Annual neck dissection CE: central compartment lymph node dissection CE for DTC, lateral neck CE.' },
  { phase: 'Sep–Oct', task: 'Annual endocrine surgery CE: AHNS (American Head and Neck Society) meeting if attending (thyroid and parathyroid CE). Thyroid cancer staging CE: AJCC 8th edition CE — staging for DTC CE (age 55 cutoff CE, N category change CE). Molecular oncology CE: RET inhibitor CE for advanced MTC (selpercatinib LIBRETTO-001 CE, pralsetinib CE for RET-mutant MTC). Thyroid USG-guided FNA CE: self-assessment CE for FNA technique, cytology correlation CE. Annual voice and swallowing CE: recurrent laryngeal nerve injury CE, dysphagia CE post-thyroidectomy, external laryngeal nerve CE.' },
  { phase: 'Nov–Dec', task: 'ABS documentation: verify all credits logged. AAES Fellowship documentation if applicable. Hospital privileging renewal: thyroidectomy (total, hemithyroidectomy), parathyroidectomy (minimally invasive, 4-gland exploration), adrenalectomy (laparoscopic, PRA, open) — annual case volume documentation. IONM credentialing: hospital IONM use CE documentation. ATA guideline alert: Q4 publications review — any DTC or MTC guideline updates published November-December CE review scheduled for January. Annual quality review: hypoparathyroidism rate post-thyroidectomy, RLN injury rate, parathyroid cure rate — benchmark versus AAES registry.' },
]

export default function EndocrineSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Endocrine Surgeons"
        title={
          <>
            ABS MOC and ATA guideline CE tracked in parallel.
            <br />
            <em className="not-italic text-gold">Active surveillance PTMC CE, parathyroid autofluorescence CE, bilateral pheo cortical-sparing CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Endocrine surgeons carry ABS general surgery 10-year MOC alongside annual ATA guideline CE obligation that requires systematic protocol updates after each publication. Annual CE priorities include ATA 2024 DTC active surveillance CE for PTMC, ESTIMABL2 RAI selective use CE, 4D-CT versus sestamibi parathyroid localization CE, parathyroid autofluorescence intraoperative CE, cortical-sparing bilateral pheochromocytoma CE, and continuous IONM alert criteria. Momenties structures the full endocrine surgery CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Endocrine Surgeons' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/surgeons"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All surgeons
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">HIPAA-aware · No PHI stored · Free to start</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CME calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for endocrine surgeons: ABS MOC with annual guideline CE, thyroid cancer CE, parathyroid CE, and adrenal surgery CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month endocrine surgery CME schedule from AAES annual meeting through ENDO and year-end ABS documentation.</h2>
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
                &ldquo;The ATA guideline alert system was the change that had the most direct patient care impact. I had been waiting until the AAES annual meeting to learn about guideline updates, which meant I was using the 2015 ATA criteria in 2024 for active surveillance eligibility in some cases. The January CE block for ATA publication review means I update my eligibility criteria within 6 weeks of any major guideline change rather than at the next conference. The parathyroid autofluorescence CE was the addition I had been meaning to complete for 18 months. I attended a single session on PTeye at AAES but had not done a systematic review of the sensitivity data. When I reviewed the current evidence in May, I found the false-positive rate for fat versus parathyroid was higher than the conference session had suggested — I updated my intraoperative confirmation protocol to require PTH level confirmation before any autofluorescence-only identification. The cortical-sparing adrenalectomy CE changed one case last year — a bilateral pheo patient with VHL where I had been planning bilateral total adrenalectomy. The outcomes data CE review I completed in July made the cortex-sparing approach the right conversation to have with the patient and the endocrinology team.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Valentina K., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Endocrine Surgeon, academic endocrine surgery program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical evidence review for endocrine surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC — 10-year cycle, 90 credits, 30 SA-CME, quality module',
                'ATA guideline CE — annual publication alert, active surveillance and RAI criteria update',
                'Thyroid cancer CE — ATA 2024 DTC CE, ESTIMABL2 RAI CE, molecular testing algorithm',
                'Parathyroid CE — 4D-CT vs sestamibi CE, autofluorescence PTeye CE, multigland disease CE',
                'Adrenal CE — PRA versus transperitoneal CE, cortical-sparing bilateral pheo CE, ACC CE',
                'IONM CE — continuous IONM alert criteria, loss of signal management CE annual review',
                'AAES annual meeting CE — spring, 15-20 endocrine surgery-specific credits',
                'ENDO annual meeting CE — May-June, endocrine society CE, MEN syndrome CE',
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
        title="ABS MOC and ATA guideline CE tracked in parallel. Thyroid, parathyroid, and adrenal CE scheduled annually."
        subtitle="Endocrine surgery CME calendar: ATA guideline update CE, PTMC active surveillance CE, parathyroid 4D-CT CE, cortical-sparing adrenalectomy CE, IONM alert criteria CE, and AAES annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
