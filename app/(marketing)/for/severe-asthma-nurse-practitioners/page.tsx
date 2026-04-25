import { Shield, Clock, BarChart3, Users2 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Severe Asthma Nurse Practitioners — Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing biologic injection training, FeNO/eosinophil trending, OCS taper counseling, and spirometry/ACQ scheduling in severe asthma specialty clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Biologic SC Injection Training and ISR/Anaphylaxis Protocol',
    description: 'Initial biologic subcutaneous injection training visit documentation for all new mepolizumab (Nucala), dupilumab (Dupixent), tezepelumab (Tezspire), and benralizumab (Fasenra) patients — site rotation education (anterior thigh, abdomen, upper arm), injection technique return demonstration, and cold-chain storage instruction (2–8°C refrigeration); injection site reaction (ISR) grading using CTCAE v5.0 at each encounter (Grade 1: erythema/pruritus; Grade 2: extensive; Grade 3: requiring systemic treatment) with dupilumab ISR documentation including conjunctivitis (15% incidence in asthma trials) distinct from eczema-indication ISR frequency; anaphylaxis observation protocol — 30-minute post-injection observation for new patients per first-dose clinic standing order; quarterly EpiPen / Auvi-Q prescription verification for patients with prior biologic hypersensitivity or mast cell co-diagnosis; biennial ANCC or AANP-recognized allergen immunotherapy and anaphylaxis management CE for severe asthma NPs with biologic injection privileges; benralizumab first-dose hypersensitivity risk documentation (anaphylaxis <0.3% in CALIMA/SIROCCO trials); and annual omalizumab hypersensitivity protocol review — 2-hour post-injection observation maintained for all omalizumab doses per FDA REMS update.',
  },
  {
    icon: Clock,
    title: 'FeNO/Blood Eosinophil Trending and Biologic Response Assessment',
    description: 'Quarterly fractional exhaled nitric oxide (FeNO) measurement with portable NIOX VERO device — pre-biologic baseline (FeNO ≥25 ppb = T2-positive threshold; ≥50 ppb = high T2 burden per ATS) and quarterly on-therapy trending targeting ≥30% FeNO reduction from baseline with dupilumab; quarterly blood eosinophil count (BEC) draw with pre-biologic phenotyping (BEC ≥300 cells/μL = eosinophilic; 150–299 cells/μL = borderline T2-high) and on-treatment near-suppression verification (<100 cells/μL on mepolizumab 100 mg Q4W and benralizumab 30 mg Q8W per MENSA/CALIMA endpoints); 6-month biologic response assessment per trial-aligned benchmarks — annualized exacerbation rate (AER) reduction ≥50% (mepolizumab MENSA), OCS dose reduction ≥50% (mepolizumab SIRIUS; benralizumab PONENTE; tezepelumab SOURCE), and FEV1 improvement ≥100 mL (dupilumab LIBERTY ASTHMA QUEST); total IgE level documentation at omalizumab dosing table update visits (annual reassessment of weight/IgE-adjusted dosing schedule); serum periostin documentation for T2-pathway activity tracking in dupilumab-treated patients (periostin ≥50 ng/mL enhanced-response subgroup); and GINA 2024-aligned inadequate biologic response documentation trigger — AER reduction <25% at 6 months initiates formal switching protocol consultation.',
  },
  {
    icon: BarChart3,
    title: 'OCS Taper Education and Adrenal-Function Testing',
    description: 'Structured OCS taper education protocol for chronic prednisolone/prednisone-dependent severe asthma patients initiating biologic therapy — PONENTE/ZONDA trial-based tapering schedule (10% dose reduction every 4 weeks after biologic Month 2); monthly prednisolone dose documentation with target OCS elimination or ≤5 mg/day prednisolone-equivalent per GINA 2024 Step 5 optimization goal; Adrenal Insufficiency Risk Score (AIRS) calculation at 6-month biologic intervals for patients on cumulative OCS ≥7.5 mg/day × >3 months; morning cortisol baseline and low-dose ACTH stimulation test (LDST) ordering for patients with AIRS ≥2 risk factors (BMI >30, OCS duration >12 months, high-dose ICS ≥1,000 μg fluticasone-equivalent/day, prior adrenal crisis history); sick-day rule counseling — hydrocortisone stress dosing education (20 mg at illness onset, 10 mg q6h for fever/vomiting) and medical alert documentation for adrenal-suppressed patients; quarterly hypertension, hyperglycemia, mood change, and skin fragility OCS-comorbidity screening with appropriate referral coordination; annual DEXA bone densitometry for ACR GIOP prevention threshold patients (prednisolone ≥7.5 mg/day × ≥3 months) with bisphosphonate/calcium/vitamin D initiation per ACR 2022 guidelines; and ACQ-7 (Asthma Control Questionnaire) administration at each encounter to quantify symptom burden and OCS-dependence impact on daily activities.',
  },
  {
    icon: Users2,
    title: 'Spirometry/ACQ-7/AQLQ Symptom Score Trending and Exacerbation Action Plan',
    description: 'Pre-bronchodilator and post-bronchodilator spirometry (FEV1, FVC, FEV1/FVC) per ATS/ERS 2019 technical standards at biologic initiation, Month 4, and every 6 months thereafter — NP-performed or supervised with quality grading A–F; FEV1 % predicted tracking on biologic therapy with electronic trending in Momenties for ≥100 mL improvement benchmarking; impulse oscillometry (IOS) co-measurement at Q6-month intervals in centers with R5, R20, X5, AX peripheral airway resistance trending capability; ACQ-7 asthma control score at every encounter (0 = well controlled; ≥1.5 = poorly controlled per validated threshold) with ACQ-7 trajectory integrated into biologic response documentation; AQLQ (Asthma Quality of Life Questionnaire) administered quarterly (MCID ≥0.5 point improvement defines meaningful benefit); written asthma action plan (AAP) review and update annually — peak flow green/yellow/red zone thresholds, rescue inhaler step-up, OCS burst criteria (prednisolone 40–50 mg × 5–7 days), and emergency department trigger criteria; exacerbation event log (OCS burst, ED visit, hospitalisation) maintained in Momenties for AER calculation — AER primary biologic response endpoint at 6 and 12 months; annual influenza and pneumococcal (PPSV23/PCV20) vaccination documentation; and biennial AANP or ANCC severe asthma/pulmonary NP CE renewal with GINA guideline update, biologic-switching protocol training, and spirometry quality certification.',
  },
]

const studies = [
  {
    title: 'MENSA (Mepolizumab in Severe Eosinophilic Asthma) — NEJM 2014',
    finding: 'Phase III trial of 576 patients with severe eosinophilic asthma (BEC ≥150 cells/μL on OCS or ≥300 cells/μL off OCS) treated with mepolizumab 100 mg SC Q4W showed AER reduction of 53% vs. placebo (P<0.001), FEV1 improvement of 98 mL (P=0.04), and median BEC reduction from 260 to 20 cells/μL. The MUSCA extension confirmed sustained 61% AER reduction at 32 weeks.',
    implication: 'NPs co-managing severe eosinophilic asthma must document baseline BEC ≥150 cells/μL for mepolizumab eligibility, perform monthly Q4W SC injection compliance tracking, verify on-treatment BEC <100 cells/μL as pharmacodynamic endpoint at 3 months, and document AER reduction ≥50% at the 6-month response assessment per GINA 2024 biologic continuation criteria.',
  },
  {
    title: 'LIBERTY ASTHMA QUEST (Dupilumab in Uncontrolled Moderate-to-Severe Asthma) — NEJM 2018',
    finding: 'Phase III trial of 1,902 patients randomised to dupilumab 200 mg or 300 mg Q2W vs. placebo showed AER reduction of 47.7% (300 mg; P<0.001) in the overall population, 65.8% in the BEC ≥300 cells/μL subgroup, and 69.9% in FeNO ≥25 ppb subgroup. Pre-bronchodilator FEV1 improved by 130 mL in the T2-high subgroup.',
    implication: 'NPs must document dupilumab 300 mg Q2W injection compliance, grade ISR and conjunctivitis at each visit using CTCAE v5.0, track Q2W injection scheduling in Momenties, and perform quarterly FeNO and BEC response trending. Patients with FeNO ≥25 ppb or BEC ≥300 cells/μL represent the highest-response subgroup — enhanced monitoring documentation supports continued biologic authorization.',
  },
  {
    title: 'NAVIGATOR (Tezepelumab in Severe Uncontrolled Asthma) — NEJM 2021',
    finding: 'Phase III trial of 1,061 patients treated with tezepelumab 210 mg SC Q4W vs. placebo showed AER reduction of 70% in the overall population (P<0.001), including 41% reduction in the low-eosinophil subgroup (BEC <300 cells/μL) and 70% in the FeNO <25 ppb subgroup, establishing efficacy across T2-high and T2-low phenotypes. FEV1 improved by 130 mL and ACQ-6 improved by 0.36 points vs. placebo.',
    implication: 'NPs managing severe non-T2 asthma (low BEC, low FeNO, non-atopic) who were previously biologic-ineligible now have an evidence-based treatment pathway. Tezepelumab Q4W injection scheduling, quarterly BEC/FeNO trending (even in T2-low patients), and ACQ-7 response documentation at 6 months must be tracked. GINA 2024 positions tezepelumab as the preferred add-on biologic for non-T2 severe asthma.',
  },
  {
    title: 'SIRIUS (Mepolizumab OCS-Sparing in Severe Asthma) — NEJM 2014',
    finding: 'Phase III randomised trial of 135 OCS-dependent severe eosinophilic asthma patients showed mepolizumab 100 mg SC Q4W achieved ≥50% OCS reduction in 54% vs. 33% placebo (P=0.007), OCS elimination in 23% vs. 10%, and 32% reduction in median OCS dose. Simultaneously, AER was reduced by 32% and no loss of asthma control occurred during OCS tapering.',
    implication: 'NPs co-managing OCS-dependent severe asthma on mepolizumab must implement a structured 10% OCS reduction every 4 weeks beginning at biologic Month 2, document monthly prednisolone dose, calculate AIRS at each 6-month interval, and order morning cortisol/LDST for adrenal insufficiency screening in high-risk patients (OCS duration >12 months, high-dose ICS, BMI >30).',
  },
  {
    title: 'SOURCE (Tezepelumab OCS-Sparing) — J Allergy Clin Immunol 2022',
    finding: 'Phase III trial of 150 OCS-dependent patients with tezepelumab 210 mg SC Q4W showed OCS dose reduction ≥90% in 48% (vs. 4% placebo) and OCS elimination in 39% (vs. 35% placebo; P=0.53 for primary endpoint in this underpowered COVID-impacted trial). Exploratory analysis confirmed 70% AER reduction consistent with NAVIGATOR, establishing tezepelumab as an effective OCS-sparing agent in patients who did not meet high-T2 thresholds for approved biologics.',
    implication: 'NPs must document tezepelumab candidacy in non-T2 OCS-dependent patients who did not qualify for eosinophil-targeted biologics, implement the same structured PONENTE/ZONDA-aligned taper schedule (10% every 4 weeks), monitor monthly OCS dose in Momenties, and perform adrenal-suppression screening per AIRS criteria regardless of biologic choice.',
  },
]

const schedule = [
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP Certification Renewal',
    details: 'Advanced Oncology Certified Nurse Practitioner — 45 CE credits required, with pulmonary/allergy-specific CE allocation for biologic-treated severe asthma management. ONCC tracks via Online CE Tracker.',
  },
  {
    frequency: 'Every 5 Years',
    item: 'AANP or ANCC Primary NP Credential Renewal',
    details: 'FNP-C (AANP) or AGACNP-BC (ANCC) — 100 CE credits including 25 pharmacology credits for severe asthma biologic management, spirometry quality certification, and OCS steroid-sparing protocol competency.',
  },
  {
    frequency: 'Annual',
    item: 'GINA 2024 Severe Asthma Guideline CE Update',
    details: 'Annual review of GINA Global Initiative for Asthma severe asthma management report — Step 5 biologic selection algorithm, T2 phenotyping updates, tezepelumab non-T2 indication, and OCS steroid-sparing targets. ATS/ERS severe asthma guidelines CE.',
  },
  {
    frequency: 'Every 2 Weeks',
    item: 'Dupilumab (Dupixent) Q2W Injection Documentation',
    details: '300 mg SC Q2W; alternate injection sites (thigh/abdomen/upper arm); ISR grading CTCAE v5.0 at each visit; conjunctivitis monitoring; 30-minute post-first-dose observation; FeNO and BEC trending every 3 months.',
  },
  {
    frequency: 'Every 4 Weeks',
    item: 'Mepolizumab/Tezepelumab Q4W Injection Compliance',
    details: 'Mepolizumab 100 mg SC Q4W (BEC ≥150 cells/μL) and tezepelumab 210 mg SC Q4W. Document injection compliance, ISR, and on-treatment BEC <100 cells/μL at Q3-month draw. Schedule Q4W appointments in Momenties for the annual dosing cycle.',
  },
  {
    frequency: 'Every 8 Weeks',
    item: 'Benralizumab (Fasenra) Q8W Maintenance Injection',
    details: 'After 3 loading doses at Q4W, transition to Q8W maintenance. Verify near-complete eosinophil depletion (<10 cells/μL) at first Q8W visit. Schedule Momenties Q8W recurring reminders for the 12-month maintenance calendar.',
  },
  {
    frequency: 'Monthly',
    item: 'OCS Dose Documentation and Taper Tracking',
    details: 'Monthly prednisolone/prednisone dose recording with PONENTE/ZONDA-aligned 10% reduction every 4 weeks. Target OCS ≤5 mg/day or elimination at 12-month biologic review. Document AIRS score every 6 months.',
  },
  {
    frequency: 'Quarterly',
    item: 'FeNO / Blood Eosinophil Count Trending',
    details: 'NIOX VERO FeNO measurement (target ≥30% reduction on dupilumab) and blood eosinophil count (target <100 cells/μL on mepolizumab/benralizumab). Quarterly biomarker trending drives GINA 2024 biologic continuation and switching decisions.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'Spirometry and IOS Lung Function Assessment',
    details: 'Post-bronchodilator FEV1, FVC, FEV1/FVC per ATS/ERS 2019 standards with quality grading. Impulse oscillometry (R5, R20, X5, AX) for peripheral airway resistance. Target FEV1 improvement ≥100 mL from biologic baseline at 12 months.',
  },
  {
    frequency: 'Annual',
    item: 'ACQ-7/AQLQ Outcome Trending and Exacerbation Audit',
    details: 'ACQ-7 at every encounter (threshold ≥1.5 = poorly controlled); AQLQ quarterly (MCID ≥0.5); annual exacerbation log review for AER calculation. Annual written asthma action plan update and influenza/pneumococcal vaccination documentation.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Severe Asthma"
        title="Severe Asthma Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing biologic injection training, FeNO/eosinophil trending, OCS taper counseling, and spirometry/ACQ scheduling in severe asthma specialty clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Severe Asthma NP Practice
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
              The Evidence Base Driving Severe Asthma NP Compliance
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
              Severe Asthma NP Certification &amp; CE Schedule
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

      <CTA
        headline="Ready to Achieve ≥50% Annualized Exacerbation Rate Reduction in Your Severe Asthma Clinic?"
        subtext="Momenties consolidates AANP/ANCC renewals, Q2W dupilumab and Q4W mepolizumab/tezepelumab injection scheduling, quarterly FeNO/BEC biomarker trending, monthly OCS taper documentation, semi-annual spirometry/IOS intervals, and annual adrenal-suppression screening into one accountable calendar — so every GINA 2024 response checkpoint and biologic continuation decision is on time, every cycle."
      />
    </main>
  )
}
