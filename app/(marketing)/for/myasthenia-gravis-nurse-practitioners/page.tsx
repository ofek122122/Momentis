import { Shield, Clock, BarChart3, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Myasthenia Gravis Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing pyridostigmine dose logs, efgartigimod infusion pre-checks, crisis-protocol education, AChR/MuSK lab trending, and respiratory surveillance with FVC-percent alerts in myasthenia gravis clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'IVIG/PLEX Crisis-Protocol Education and Access Coordination',
    description: 'Annual myasthenic crisis protocol competency training scheduling for MG NPs — ventilatory failure threshold criteria (FVC <15 mL/kg or absolute FVC <1 L, NIF <−20 cmH2O), ICU transfer decision algorithm, and IVIG 2 g/kg over 2–5 days vs. plasmapheresis (PLEX) 5–7 exchanges over 10–14 days selection criteria (PLEX preferred for anti-MuSK MG per evidence); crisis trigger recognition education — infection-induced exacerbation, aminoglycoside and fluoroquinolone contraindication counseling, beta-blocker and neuromuscular blocker risk education; IVIG lot documentation training and infusion reaction management protocol review; PLEX access site care and central venous catheter maintenance training; quarterly crisis simulation drills for NP-led outpatient MG clinics with documented FVC measurement competency; and annual update on NIV (non-invasive ventilation) and BiPAP threshold criteria for pre-crisis respiratory support in high-risk patients.',
  },
  {
    icon: Clock,
    title: 'Efgartigimod Pre-Infusion CBC/IgG Check and Reaction Monitoring',
    description: 'Efgartigimod alfa (Vyvgart) pre-cycle CBC with differential and quantitative IgG level documentation — cycle hold threshold total IgG <4 g/L or absolute lymphocyte count <500/μL; weight-based dose verification (10 mg/kg IV) and infusion rate documentation (1 mg/kg/min, over approximately 1 hour); vital signs at baseline, 30 minutes, and end of infusion with infusion reaction grading per CTCAE v5.0 (Grade 1–2 managed with rate reduction, Grade 3–4 requires discontinuation per protocol); post-infusion 30-minute observation documentation; efgartigimod subcutaneous (Vyvgart Hytrulo) training for eligible stable patients — 1,008 mg SC weekly self-injection site rotation, needle safety, and sharps disposal; infusion day MG-ADL assessment to capture acute benefit signal; IgG recheck mid-cycle if lymphopenia develops; and rozanolixizumab (Rystiggo) pre-infusion headache prophylaxis scheduling (acetaminophen + antihistamine) with headache severity CTCAE grading for NPs co-managing second-line FcRn antagonists.',
  },
  {
    icon: BarChart3,
    title: 'FVC and PFT Respiratory Surveillance',
    description: 'FVC (forced vital capacity) percent-predicted monitoring at every clinic visit for bulbar and respiratory MG — automated alert threshold set at FVC <50% predicted (escalate to neuromuscular attending) and <30% predicted (same-day hospital evaluation trigger); NIF (negative inspiratory force) measurement protocol training — NIF <−20 cmH2O at rest correlates with impending respiratory failure requiring ICU-level monitoring; serial PFT (pulmonary function test) scheduling at 3-month intervals for newly diagnosed or recently exacerbated respiratory MG; upright vs. supine FVC comparison (>15% drop in supine FVC indicates diaphragmatic weakness — flag for urgent pulmonology co-management); overnight pulse oximetry scheduling for patients with nocturnal dyspnea and FVC 40–60% predicted; PFT documentation in MG-ADL Item 6 (breathing) and Item 7 (chewing/swallowing) cross-reference for integrated functional assessment; and annual PFT benchmark comparison to prior-year values to detect subclinical respiratory decline in stable patients.',
  },
  {
    icon: UserCheck,
    title: 'Pyridostigmine/Azathioprine/MMF Adherence and Side-Effect Counseling',
    description: 'Pyridostigmine adherence counseling at every visit — dose timing relative to meals (30–45 minutes pre-meal for swallowing improvement), cholinergic side-effect management (loperamide for diarrhea, glycopyrrolate for hypersecretion), and medication diary review; DUMBBELS checklist administration at each visit for patients on ≥180 mg/day pyridostigmine with dose escalation documentation; azathioprine 2–3 mg/kg/day CBC and LFT monitoring schedule — complete blood count with differential monthly for first 3 months then every 3 months, LFTs monthly × 3 then quarterly; azathioprine slow metabolizer (TPMT/NUDT15 variant) pharmacogenomic education and myelosuppression risk counseling; MMF (mycophenolate mofetil) 1,500–3,000 mg/day divided BID adherence tracking — monthly CBC and CMP for first 6 months, then quarterly; MMF GI tolerability counseling and enteric-coated switch (Myfortic) coordination for persistent GI adverse events; combination immunosuppressant interaction monitoring — cyclosporine/tacrolimus trough quarterly with creatinine, magnesium, potassium, glucose; and annual medication reconciliation to screen for contraindicated agents (aminoglycosides, fluoroquinolones, beta-blockers, magnesium salts, chloroquine, quinine) in all MG patients.',
  },
]

const studies = [
  {
    title: 'ADAPT Trial (Efgartigimod in Generalized MG) — Lancet Neurology 2021',
    finding: 'Phase III randomized controlled trial of 167 AChR-positive generalized MG patients showed efgartigimod 10 mg/kg IV weekly × 4 cycles achieved MG-ADL responder rate of 68% vs. 30% placebo (P<0.0001) and QMG responder rate of 63% vs. 14% placebo. Median time to first improvement was 1 week. IgG reduction averaged 75% from baseline by Week 4.',
    implication: 'NPs initiating efgartigimod must obtain baseline IgG (hold if <4 g/L), confirm AChR-antibody positivity, document MG-ADL at each weekly infusion visit, and schedule re-treatment cycle when MG-ADL worsens by ≥2 points from post-cycle nadir. Total IgG recheck before each 4-week cycle is mandatory per prescribing information.',
  },
  {
    title: 'CHAMPION MG (Ravulizumab in Anti-AChR MG) — Lancet Neurology 2023',
    finding: 'Phase III trial of 175 AChR-positive refractory generalized MG patients showed ravulizumab (Ultomiris) achieved MG-ADL responder rate of 56% vs. 34% placebo (P=0.0049) and QMG responder rate of 58% vs. 34% (P=0.0009). Rapid onset with significant MG-ADL improvement at Week 1 maintained through Week 26.',
    implication: 'NPs co-managing ravulizumab must ensure meningococcal MenACWY and MenB vaccination ≥14 days pre-infusion with REMS enrollment (Ultomiris REMS program), document C5 inhibition adequacy via free C5 activity assay quarterly, and educate patients on meningococcal infection warning signs requiring emergency evaluation. Anti-complement prophylactic penicillin V 250 mg BID for non-vaccinated urgent initiations.',
  },
  {
    title: 'MGTX Trial (Thymectomy in Non-Thymomatous MG) — NEJM 2016',
    finding: 'Phase III RCT of 126 AChR-positive MG patients aged 18–65 showed thymectomy plus prednisone achieved time-weighted average QMG of 6.15 vs. 8.99 (prednisone alone, P<0.001) and time-weighted average prednisone dose of 32 mg/day vs. 54 mg/day over 3 years. Minimal manifestation status achieved in 67% thymectomy vs. 47% prednisone-alone at Year 3.',
    implication: 'NPs must document pre-thymectomy PFT (FVC, FEV1, DLCO) for surgical clearance, coordinate pre-operative IVIG or PLEX for patients with QMG >13 or bulbar involvement, and track 3-year post-operative MGTX endpoints (QMG, prednisone dose, minimal manifestation status). Thymectomy benefit accrues over 1–3 years — patient expectation counseling is essential at the 6-month mark.',
  },
  {
    title: 'RAISE (Rozanolixizumab in Generalized MG) — Lancet Neurology 2023',
    finding: 'Phase III trial of 200 AChR- or MuSK-positive generalized MG patients showed rozanolixizumab 10 mg/kg IV weekly × 6 weeks achieved MG-ADL responder rate of 57% vs. 34% placebo (P=0.0009) in AChR-positive patients and 71% vs. 25% in MuSK-positive patients (P=0.0009). Headache was the most common adverse event (51% vs. 17% placebo).',
    implication: 'NPs must pre-medicate rozanolixizumab infusions with acetaminophen 650 mg and diphenhydramine 25 mg 30–60 minutes before infusion, document headache severity per CTCAE v5.0 grading, and maintain prophylactic meningococcal vaccination per REMS. MuSK-positive MG patients represent a high-priority population for rozanolixizumab given superior response rates vs. AChR cohort.',
  },
  {
    title: 'PROMISE-MG (Eculizumab in Refractory MG) — NEJM 2017',
    finding: 'Phase III crossover trial of 62 AChR-positive refractory generalized MG patients showed eculizumab (Soliris) achieved 39.6% MG-ADL responder rate vs. 5.6% placebo (P<0.0001) and QMG improvement of −4.6 vs. −1.5 points. Significant improvement maintained at Week 26 with well-tolerated safety profile.',
    implication: 'NPs co-managing eculizumab must complete FDA REMS enrollment for all new patients, document MenACWY and MenB vaccination ≥14 days pre-treatment, schedule biweekly 900 mg IV q14d maintenance infusions with pre-infusion LDH/haptoglobin/reticulocyte hemolysis panels, and educate patients on emergency meningococcal precautions. Eculizumab is now the established first-in-class anti-complement option for refractory AChR-positive MG.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'FNP-C or AGPCNP-BC Renewal (AANPCB/ANCC)',
    details: 'Family NP or Adult-Gerontology Primary Care NP renewal — 1,000 clinical hours plus 100 CE credits required, including neurology/neuromuscular CE for MG management privileges and collaborative practice agreement renewal.',
  },
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP Certification Renewal (ONCC)',
    details: 'Advanced Oncology Certified NP renewal for NPs in academic neuromuscular clinics with thymoma or paraneoplastic MG overlap — 45 CE credits with hematology/oncology and neurology subspecialty CE allocation.',
  },
  {
    frequency: 'Annual',
    item: 'AANEM Annual Meeting NP Neuromuscular CE',
    details: 'American Association of Neuromuscular and Electrodiagnostic Medicine Annual Meeting — myasthenia gravis, Lambert-Eaton, and neuromuscular junction disorder CE sessions; NMJ pharmacology updates; 15–20 CE credits available for NPs.',
  },
  {
    frequency: 'Weekly × 4 (Per Cycle)',
    item: 'Efgartigimod Pre-Infusion CBC/IgG + Infusion Documentation',
    details: 'Pre-infusion total IgG (hold if <4 g/L), CBC with differential, weight-based dose verification (10 mg/kg), vital signs at baseline/30 min/end of infusion, MG-ADL scoring, and CTCAE infusion reaction grading at each of the 4 weekly doses per cycle.',
  },
  {
    frequency: 'Every 8 Weeks',
    item: 'Ravulizumab Q8w Maintenance and REMS Check',
    details: 'Body weight-based dosing (3,000–3,600 mg IV q8wk); pre-infusion free C5 activity assay, LDH, haptoglobin; REMS meningococcal vaccine status verification (MenACWY and MenB current); breakthrough hemolysis symptom screen.',
  },
  {
    frequency: 'Every Visit',
    item: 'FVC Percent-Predicted Respiratory Surveillance',
    details: 'Spirometry FVC measurement at every clinic visit for bulbar and respiratory MG; NIF for at-risk patients; automated alert if FVC <50% predicted (escalate) or <30% predicted (same-day hospital evaluation); upright vs. supine comparison for diaphragmatic weakness screen.',
  },
  {
    frequency: 'Monthly',
    item: 'Azathioprine CBC/LFT and MMF CBC/CMP Monitoring',
    details: 'CBC with differential and hepatic function panel monthly during first 3 months of azathioprine or MMF; CBC and CMP monthly for MMF first 6 months; then quarterly thereafter. TPMT/NUDT15 pharmacogenomic result documentation for azathioprine myelosuppression risk stratification.',
  },
  {
    frequency: 'Quarterly',
    item: 'AChR/MuSK Antibody Titer Trending',
    details: 'Quantitative AChR binding, blocking, and modulating antibodies plus MuSK IgG4 titers every 3–6 months for active disease monitoring; LRP4 antibody for seronegative MG patients; titer correlation with QMG and MG-ADL trajectory for treatment response documentation.',
  },
  {
    frequency: 'Every Visit',
    item: 'DUMBBELS Cholinergic Toxicity Screen (Pyridostigmine)',
    details: 'DUMBBELS assessment (diarrhea, urination, miosis, bradycardia, bronchospasm, emesis, lacrimation, salivation) at each visit for patients on pyridostigmine ≥180 mg/day; dose reduction trigger documentation when Grade 2+ muscarinic symptoms present; medication diary review for dose timing adherence.',
  },
  {
    frequency: 'Annual',
    item: 'MG Medication Contraindication Reconciliation',
    details: 'Annual medication reconciliation screening for contraindicated agents in all MG patients — aminoglycosides, fluoroquinolones, beta-blockers, magnesium salts, chloroquine, quinine, D-penicillamine; patient education refresh on ER precautions and contraindicated drug list wallet card update.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Myasthenia Gravis"
        title="Myasthenia Gravis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing pyridostigmine dose logs, efgartigimod infusion pre-checks, crisis-protocol education, AChR/MuSK lab trending, and respiratory surveillance with FVC-percent alerts in myasthenia gravis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Myasthenia Gravis NP Practice
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Evidence Base */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              The Evidence Base Driving Myasthenia Gravis NP Compliance
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {studies.map((s) => (
                <div key={s.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 32px' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.9rem', marginBottom: 12 }}>{s.title}</div>
                  <p style={{ color: '#f0ece3', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 10 }}><strong>Finding:</strong> {s.finding}</p>
                  <p style={{ color: '#a0998e', fontSize: '0.92rem', lineHeight: 1.65 }}><strong>NP Implication:</strong> {s.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CE Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              Myasthenia Gravis NP Certification and CE Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.frequency}</div>
                  <div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>{item.item}</div>
                    <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              Juggling weekly efgartigimod pre-infusion IgG checks, every-8-week ravulizumab REMS documentation, FVC surveillance at every visit, monthly azathioprine CBCs, quarterly AChR/MuSK trending, IVIG crisis protocol drills, and annual medication contraindication reconciliation was unsustainable on spreadsheets. Momenties automated every interval and alert. I haven&apos;t missed a single pre-infusion lab or REMS vaccine check since we went live — and my patients with bulbar MG have not had a single preventable crisis hospitalization.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Diane P., AGPCNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Neuromuscular NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Automate Every Efgartigimod Pre-Check, FVC Alert, and REMS Deadline?"
        subtext="Momenties consolidates FNP-C and AGPCNP-BC renewals, weekly efgartigimod IgG checks, Q8w ravulizumab REMS compliance, per-visit FVC alerts, monthly azathioprine and MMF labs, quarterly AChR/MuSK trending, and annual medication contraindication reconciliation into one accountable calendar — so every myasthenic crisis is prevented, every infusion is on time, and every certification is current."
      />
    </main>
  )
}
