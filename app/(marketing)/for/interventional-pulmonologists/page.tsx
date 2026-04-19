import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interventional Pulmonologist CME Calendar — ABIM pulmonary + AABIP MOC, bronchoscopy CE, EBUS CE, endobronchial valve CE',
  description:
    'Interventional pulmonologists managing ABIM pulmonary disease MOC alongside AABIP Diplomate credential renewal track annual bronchoscopy CE (robotic bronchoscopy Ion/Monarch outcomes CE, r-EBUS for peripheral lesions, cryobiopsy versus forceps for ILD), annual EBUS CE (EUS-B-FNA technique CE, EBUS-TBNA lymph node staging update, rapid on-site evaluation), endobronchial valve CE (LIBERATE trial 12-month outcomes, IBV versus Zephyr valve, hyperinflation patient selection PROSPECT criteria), and bronchial thermoplasty CE (BT10+ registry 10-year outcomes, patient selection CE for severe asthma). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/interventional-pulmonologists' },
  openGraph: {
    title: 'Interventional Pulmonologist CME Calendar',
    description: 'ABIM pulmonary MOC, AABIP credential renewal, robotic bronchoscopy CE, EBUS CE, and endobronchial valve CE — one structured calendar.',
    url: '/for/interventional-pulmonologists',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABIM pulmonary disease MOC (continuous) + AABIP Diplomate credential renewal tracked in parallel',
    desc: 'Interventional pulmonologists maintain ABIM pulmonary disease certification on a continuous 5-year cycle requiring 100 MOC points — 40 medical knowledge (ABIM longitudinal knowledge assessment or traditional MOC exam), 20 practice improvement (quality module or patient safety), and 40 medical knowledge activities. Simultaneously, the American Association for Bronchology and Interventional Pulmonology Diplomate credential requires 50 Category 1 CME credits per 5-year renewal cycle with a minimum of 20 IP-specific credits. The AABIP Diplomate also requires attestation of current procedural competency (minimum case volumes for bronchoscopy, EBUS, and at least one advanced procedure). A CME calendar that ignores the AABIP procedural attestation requirement fails to capture the most distinctive renewal obligation in IP. Momenties tracks both cycles simultaneously with procedural log alerts.',
  },
  {
    icon: Clock,
    title: 'Annual robotic bronchoscopy CE — Ion, Monarch, and SpyGlass peripheral lesion outcomes with updated diagnostic yield data',
    desc: 'Robotic bronchoscopy platforms are generating rapid outcome data requiring annual CE review. Ion system CE: PRECISION-1 registry 2-year diagnostic yield (73.9% for peripheral pulmonary lesions ≤2cm), NAVIGATE trial update (navigation bronchoscopy yield 73% — Ion versus Monarch comparison CE), pneumothorax rate CE (1.8% Ion versus 2.6% conventional r-EBUS). Monarch system CE: BENEFIT trial 12-month outcomes, operator learning curve CE (plateau at 30 cases for comparable yield). Annual CE also includes shape-sensing bronchoscopy CE (Ion electromagnetic shape-sensing versus traditional ENB comparison), cryobiopsy CE for peripheral lesions (yield versus transbronchial forceps biopsy in lesions under 2cm — META-IP pooled analysis), and combined approach CE (robotic navigation + EBUS for mediastinal staging in same session). CME calendar alert: CHEST annual meeting (October) — IP plenary session, largest IP CE block.',
  },
  {
    icon: BarChart3,
    title: 'Annual EBUS CE — EUS-B-FNA technique, lymph node station mapping updates, and ROSE integration data',
    desc: 'Endobronchial ultrasound CE requires annual updates as EUS-B expands EBUS scope and ROSE integration data accumulates. EUS-B-FNA CE: combined EBUS-TBNA plus EUS-B-FNA sensitivity for N2/N3 staging (ASTER 2 trial 93% versus EBUS alone 81% — CE on combined approach indications). Annual lymph node station CE: IASLC lymph node map 2023 update — station 4L versus 10L disambiguation, subcarinal 7 approach optimization. ROSE CE: rapid on-site evaluation impact on diagnostic adequacy (ROSE versus no-ROSE in EBUS: ROSE reduces passes 4.1 versus 5.8, no difference in final diagnostic yield — CE on ROSE resource allocation). Elastography CE: EBUS elastography for lymph node malignancy prediction (sensitivity 84%, specificity 76% — CE on integration into staging protocol). Confocal laser endomicroscopy CE: probe-based CLE for airway lesion characterization (CELLVIZIO CE for central airway tumors).',
  },
  {
    icon: Users,
    title: 'Annual endobronchial valve and bronchial thermoplasty CE — LIBERATE 12-month outcomes, IBV versus Zephyr selection, and BT10+ registry',
    desc: 'Bronchoscopic lung volume reduction CE tracks the mature LIBERATE trial data alongside emerging patient selection evidence. Endobronchial valve CE: LIBERATE 12-month RV reduction data (Zephyr: 430mL RV reduction versus 55mL sham, ΔFEV1 +0.1L), IBV Spiration valve EMPROVE trial update, collateral ventilation assessment CE (Chartis system — complete fissure versus incomplete fissure selection, Chartis positive CV exclusion rate 35%). Patient selection CE: PROSPECT criteria (GOLD 3-4, RV/TLC >0.58, heterogeneous emphysema, no active infection, no major CV disease). Bronchial thermoplasty CE: BT10+ registry 10-year outcomes (sustained Alair system benefit, severe exacerbation reduction 44%), patient selection CE (severe persistent asthma FEV1 60-85% predicted, thermoplasty versus biologics positioning CE — dupilumab head-to-head CE). Momenties flags the AABIP annual meeting (spring) and CHEST annual meeting (October) for procedural CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABIM MOC points audit: verify 5-year cycle running total. Longitudinal knowledge assessment completion verified (LKA questions due by December 31 each cycle year — if missed, traditional MOC exam required). AABIP Diplomate renewal audit: CE credits logged, procedural attestation case log current (minimum 50 bronchoscopies, 25 EBUS-TBNA, 10 advanced procedures per renewal cycle — verify vs actual case volume). Quality module completion if PII component pending.' },
  { phase: 'Mar–Apr', task: 'AABIP annual meeting (spring — April/May): 15-20 IP-specific Category 1 CE credits. Endobronchial valve session CE: collateral ventilation assessment update, new valve data. Robotic bronchoscopy workshop CE (hands-on simulation if available — procedural attestation hours). Central airway obstruction CE: laser bronchoscopy versus APC versus cryotherapy for central tumor — comparative outcomes. Rigid bronchoscopy CE: foreign body extraction technique CE, silicone stent placement CE.' },
  { phase: 'May–Jun', task: 'EBUS CE: annual literature review (EUS-B-FNA combined approach publications, ROSE integration data). Cryobiopsy CE for ILD: TransBronchial Cryobiopsy in ILD — COLDICE trial 2-year outcomes, multidisciplinary ILD team diagnostic yield CE versus surgical lung biopsy. Bronchial thermoplasty CE: BT10+ registry annual update review. Pleural disease CE: thoracoscopy CE (semi-rigid versus rigid thoracoscopy comparison, talc poudrage versus talc slurry for MPE). Indwelling pleural catheter CE: AMPLE trial ambulatory management MPE.' },
  { phase: 'Jul–Aug', task: 'Robotic bronchoscopy CE: Ion and Monarch annual outcomes data review (CHEST and AABIP registry publications Q2-Q3). Shape-sensing bronchoscopy update CE. Airway stenting CE: AERO stent versus Bonastent comparative data, migration rate CE, removal CE for benign tracheobronchial stenosis. Tracheobronchial malacia CE: dynamic airway collapse classification update, stent versus CPAP CE for expiratory central airway collapse. Annual procedural log self-audit: AABIP attestation case counts reviewed mid-year.' },
  { phase: 'Sep–Oct', task: 'CHEST annual meeting (October) — IP plenary session and IP workshop: 8-12 Category 1 IP CE credits. Annual robotic bronchoscopy workshop CE (largest IP simulation workshop of the year at CHEST). Endobronchial valve patient selection CE: updated Chartis CV assessment protocol, emphysema morphology CE. Lung cancer staging CE: updated IASLC N2/N3 EBUS staging protocol, ctDNA versus EBUS for mediastinal restaging after neoadjuvant CE. ABIM longitudinal knowledge assessment window check: Q4 completion deadline.' },
  { phase: 'Nov–Dec', task: 'ABIM MOC cycle documentation: verify all activities logged in ABIM portfolio before December 31. AABIP Diplomate renewal check: if renewal due within 12 months, schedule remaining IP-specific CE and procedural attestation completion. Hospital privileging renewal: bronchoscopy, EBUS, endobronchial valve, bronchial thermoplasty privileging CE requirements — separate privileging in many systems (minimum case volumes per year required). Year-end IP case log review: procedural volume for credentialing meets minimum thresholds.' },
]

export default function InterventionalPulmonologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Interventional Pulmonologists"
        title={
          <>
            ABIM MOC and AABIP Diplomate renewal tracked in parallel.
            <br />
            <em className="not-italic text-gold">Robotic bronchoscopy CE, EBUS staging CE, endobronchial valve outcomes — scheduled before deadlines close.</em>
          </>
        }
        lede="Interventional pulmonologists carry two parallel obligations: ABIM pulmonary disease continuous MOC and AABIP Diplomate credential renewal with procedural attestation. Annual CE priorities include robotic bronchoscopy outcomes (Ion PRECISION-1, Monarch BENEFIT), EUS-B-FNA combined staging CE (ASTER 2 trial), endobronchial valve selection CE (LIBERATE 12-month data, Chartis CV assessment), and bronchial thermoplasty BT10+ registry. A CME calendar that misses the AABIP procedural case volume requirement fails the most distinctive renewal obligation. Momenties structures the full IP CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Interventional Pulmonologists' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for interventional pulmonologists: ABIM/AABIP dual credential, robotic bronchoscopy CE, EBUS staging CE, and endobronchial valve outcomes CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month IP CME schedule from AABIP spring meeting through CHEST annual session and year-end ABIM documentation.</h2>
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
                &ldquo;The AABIP procedural attestation was the thing I kept putting off. I had the CE credits logged but I had not done a formal case count audit since my initial credentialing. When I set up the IP CME calendar with a mid-year procedural log review in July, I discovered I was at 18 EBUS cases that cycle versus the 25 minimum — I still had time to schedule the cases before the renewal window. The robotic bronchoscopy CE reminders were the other change that made a real difference: I was ordering Ion and Monarch cases but the outcomes literature was moving faster than my reading. The annual October review block before CHEST tied the literature to the conference, so I walked into the plenary session already current rather than learning everything there for the first time. The endobronchial valve Chartis CE block in March became my standard pre-procedure review anchor — I review the LIBERATE selection criteria every year before the spring volume increase.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Darius K., MD, FCCP, DAABIP</div>
                  <div className="text-xs text-muted-foreground">Interventional Pulmonologist, academic medical center IP program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and procedural competency review for interventional pulmonologists in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM pulmonary MOC — continuous 5-year cycle, 100 points, LKA completion deadline tracked',
                'AABIP Diplomate renewal — 50 CE credits per 5 years, 20 IP-specific, procedural attestation case log',
                'Robotic bronchoscopy CE — Ion PRECISION-1, Monarch BENEFIT, shape-sensing outcomes annual review',
                'EBUS CE — EUS-B-FNA ASTER 2 CE, ROSE integration data, IASLC lymph node map update',
                'Endobronchial valve CE — LIBERATE 12-month, Chartis CV assessment, PROSPECT selection criteria',
                'Bronchial thermoplasty CE — BT10+ registry 10-year outcomes, biologic versus BT positioning CE',
                'AABIP annual meeting CE — spring, 15-20 IP-specific credits, largest IP procedural workshop',
                'CHEST annual meeting CE — October, IP plenary + workshop, 8-12 IP Category 1 credits',
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
        title="ABIM MOC and AABIP Diplomate tracked in parallel. Procedural attestation audited mid-year."
        subtitle="Interventional pulmonology CME calendar: dual credential tracking, robotic bronchoscopy CE, EBUS staging CE, endobronchial valve outcomes, and CHEST annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All physicians', href: '/for/doctors' }}
      />
    </>
  )
}
