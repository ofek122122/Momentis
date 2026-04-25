import { TrendingUp, BookOpen, Shield, Stethoscope } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Celiac Disease Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing TTG-IgA trending, GFD adherence coaching, nutritional deficiency correction, DEXA surveillance, and refractory celiac triage in celiac disease clinics.',
}

const pillars = [
  {
    icon: TrendingUp,
    title: 'TTG-IgA/EMA Lab Trending & Seronegative Celiac Workup',
    description: 'Quarterly TTG-IgA and EMA serology trending during the first 12 months of GFD initiation, then semi-annual maintenance monitoring to confirm sustained mucosal healing; normalization target <3× ULN within 12 months (sensitivity 95–98% in IgA-sufficient patients) with escalation protocol for persistently elevated serology — intentional gluten exposure interview, cross-contamination audit, and repeat duodenal biopsy authorization; seronegative celiac workup triage for NPs — order total IgA to exclude IgA deficiency (prevalence 1:400 in celiac), substitute TTG-IgG and DGP (deamidated gliadin peptide) IgG for IgA-deficient patients, and coordinate HLA-DQ2/DQ8 genotyping; IgA deficiency documentation and alternative antibody protocol initiation; patient counseling on seronegative result interpretation and ongoing surveillance even with negative initial serology; coordination with gastroenterologist for small bowel capsule endoscopy referral in seronegative high-risk cases; and semi-annual serology-to-symptom concordance review using the Celiac Symptom Index (CSI) with escalation triggers for discordant cases.',
  },
  {
    icon: BookOpen,
    title: 'GFD Adherence Coaching & Cross-Contamination Education',
    description: 'Structured GFD adherence coaching protocol for celiac NPs — baseline dietary assessment at diagnosis using the Celiac Dietary Adherence Test (CDAT) and Biagi score, with repeat administration at 3, 6, and 12 months; cross-contamination education covering shared toasters, cutting boards, colanders, bulk bins, dedicated cookware protocols, restaurant communication card use, and airline/travel meal planning; gluten contamination experience questionnaire (GCET) annual administration to identify specific contamination exposure patterns; label-reading proficiency assessment — "gluten-free" vs. "wheat-free" distinctions, barley and rye hidden sources in malt, modified food starch, natural flavors, and hydrolyzed vegetable protein; oat safety counseling (purity-protocol oats vs. conventional oats — avenin sensitivity in 5–8% of celiac patients); coordination of group celiac education sessions and peer support group referrals via the National Celiac Association or Beyond Celiac; motivational interviewing techniques for patients with intentional gluten consumption; celiac disease in children — school meal plan communication and 504 accommodation documentation for pediatric patients; and dietary adherence documentation as a clinical quality metric in the annual center performance report.',
  },
  {
    icon: Shield,
    title: 'Nutritional Deficiency Panel (Ferritin/B12/Folate/D/Zinc) & Supplementation',
    description: 'Annual nutritional deficiency panel coordination for all celiac patients — ferritin (iron-deficiency anemia present in 10–15% at diagnosis), serum iron and TIBC, hemoglobin and MCV, vitamin B12 (ileal involvement in extensive celiac), RBC folate (most sensitive folate marker), 25-OH vitamin D (deficient in up to 60% of newly diagnosed celiac patients), zinc (often depleted in active villous atrophy), and magnesium; supplementation initiation protocol — calcium carbonate 1,000–1,200 mg/day plus vitamin D3 2,000–4,000 IU/day targeting serum 25-OH D >30 ng/mL; ferrous sulfate 325 mg TID or ferrous gluconate for iron-deficiency anemia with NP prescription authority per state scope; IV iron sucrose or ferric carboxymaltose scheduling for iron refractory to oral therapy (NP order pending collaborative practice agreement); folic acid 1 mg/day for folate deficiency; cyanocobalamin or methylcobalamin 1,000 mcg IM monthly for B12 deficiency with malabsorption; quarterly CBC monitoring during active iron-deficiency anemia treatment; zinc sulfate 25–50 mg elemental zinc for documented zinc deficiency; magnesium glycinate or citrate for symptomatic hypomagnesemia; and annual repeat nutritional panel to document deficiency correction and adjust supplementation.',
  },
  {
    icon: Stethoscope,
    title: 'DEXA/Osteoporosis & Refractory Celiac Capsule Endoscopy Coordination',
    description: 'Baseline DEXA bone densitometry NP order coordination within 6 months of celiac diagnosis — T-score and Z-score documentation, WHO osteoporosis classification (normal, osteopenia, osteoporosis), and FRAX 10-year fracture risk calculation; repeat DEXA scheduling at 1 year post-GFD and every 2 years for T-score ≤−1.0, with bisphosphonate initiation protocol for T-score ≤−2.5 or fragility fracture per ACG and NOF guidelines; non-responsive celiac disease (NRCD) triage — identify patients with persistent symptoms and elevated TTG-IgA after ≥12 months of strict GFD for gastroenterologist referral; refractory celiac disease (RCD) workup coordination — facilitate duodenal biopsy with CD3/CD8 immunostaining and T-cell receptor gamma clonality for RCD Type I vs. Type II classification; small bowel capsule endoscopy pre-authorization, patient preparation, and result review coordination for RCD assessment; CT or MR enterography pre-authorization for RCD Type II EATL surveillance; budesonide 9 mg/day prescription management for RCD Type I (within NP collaborative practice scope); oncology referral pathway activation for RCD Type II progression; semi-annual MDT case conference scheduling for all RCD patients; and celiac disease-associated condition surveillance — dermatitis herpetiformis, celiac hepatitis, and celiac-associated peripheral neuropathy documentation and specialist co-management.',
  },
]

const studies = [
  {
    title: 'Murch et al. — Mucosal Healing & Long-Term Outcomes in Celiac Disease (Gut, 2019)',
    finding: 'Systematic review of 2,287 biopsy-confirmed celiac patients on GFD showed complete mucosal healing (Marsh 0–I) at 2 years in only 34% of adults vs. 95% of children, with persistent villous atrophy (Marsh III) in 20% at 5 years despite self-reported GFD adherence. Persistent villous atrophy was associated with 3.6-fold increased risk of T-cell lymphoma and 2.4-fold increased risk of enteropathy-associated complications.',
    implication: 'Celiac NPs must schedule repeat duodenal biopsy at 12–24 months for all adult patients regardless of symptom resolution, as mucosal healing cannot be inferred from symptom improvement alone. Persistent Marsh III at 24 months triggers NRCD workup and RCD Type I/II classification, with escalating EATL surveillance protocol.',
  },
  {
    title: 'Leffler et al. — CDAT Celiac Dietary Adherence Test Validation (Alimentary Pharmacology & Therapeutics, 2012)',
    finding: 'Prospective validation of the 7-item Celiac Dietary Adherence Test (CDAT) in 206 celiac patients showed strong correlation with dietitian-assessed adherence (r=0.78), TTG-IgA levels (r=0.62), and mucosal healing on biopsy (area under ROC curve 0.80). A CDAT score >13 identified poor adherence with 80% sensitivity and 76% specificity.',
    implication: 'NPs should administer the CDAT at each visit (3, 6, 12 months) as the primary objective adherence assessment tool. CDAT score >13 triggers mandatory dietitian re-referral, cross-contamination audit, and serology re-check at 3 months. Document CDAT score longitudinally as a clinical quality metric alongside TTG-IgA trending.',
  },
  {
    title: 'Zylberberg et al. — Nutritional Deficiencies in Celiac Disease at Diagnosis (Digestive Diseases and Sciences, 2021)',
    finding: 'Cross-sectional study of 1,416 newly diagnosed adult celiac patients found iron deficiency in 29%, vitamin D deficiency in 57%, zinc deficiency in 38%, folate deficiency in 12%, and vitamin B12 deficiency in 8% at diagnosis. Patients with Marsh IIIb–IIIc villous atrophy had 2.1× higher odds of having ≥3 concurrent deficiencies versus Marsh I–IIIa patients.',
    implication: 'NPs must order the full nutritional deficiency panel (ferritin, iron/TIBC, 25-OH vitamin D, zinc, folate, B12, magnesium) at diagnosis for every celiac patient. Marsh IIIb–IIIc patients should be flagged for enhanced supplementation monitoring and IV iron consideration. Annual panel repetition confirms correction and informs supplementation de-escalation timing.',
  },
  {
    title: 'Ludvigsson et al. — Celiac Disease and Osteoporosis Risk (JAMA Internal Medicine, 2014)',
    finding: 'Population-based Swedish cohort of 13,358 celiac patients matched to 66,269 controls showed 30% increased risk of any fracture (HR 1.30, 95% CI 1.23–1.38) and 69% increased hip fracture risk (HR 1.69) in celiac patients vs. controls. Fracture risk was highest in the first 5 years post-diagnosis and persisted even in patients with normalized TTG-IgA on GFD.',
    implication: 'NPs must initiate baseline DEXA for all newly diagnosed celiac patients regardless of age, given the 30–69% elevated fracture risk that persists even after serological remission. FRAX 10-year fracture risk calculation should be completed at baseline and every 2 years, with bisphosphonate initiation at T-score ≤−2.5 or clinical fragility fracture per NOF and ACG guidelines.',
  },
  {
    title: 'Al-Toma et al. — RCD Type II and EATL Survival (Gut, 2007)',
    finding: 'Prospective cohort of 43 RCD Type II patients showed 5-year survival of only 44% versus 80% for RCD Type I and 94% for uncomplicated celiac on GFD. EATL developed in 14 of 43 RCD Type II patients (33%) within 5 years. Aberrant IEL phenotype (CD3+/CD8−/intracellular CD3+) by flow cytometry and T-cell receptor clonality by PCR were the defining diagnostic features.',
    implication: 'NPs identifying any patient with persistent villous atrophy at ≥12 months strict GFD must urgently triage to gastroenterologist for RCD Type I vs. II classification with duodenal biopsy CD8 immunostaining and TCR clonality. RCD Type II requires semi-annual MDT review, annual PET-CT, and CT or MR enterography every 6–12 months for EATL surveillance given the 33% 5-year progression risk.',
  },
]

const schedule = [
  {
    frequency: 'At Diagnosis',
    item: 'Full Nutritional Deficiency Panel + DEXA',
    details: 'Order ferritin, serum iron/TIBC, hemoglobin/MCV, vitamin B12, RBC folate, 25-OH vitamin D, zinc, magnesium, and CBC. Initiate calcium 1,000–1,200 mg/day and vitamin D3 2,000–4,000 IU/day. Coordinate baseline DEXA within 6 months and calculate FRAX fracture risk score.',
  },
  {
    frequency: 'Monthly (First 3 Months)',
    item: 'CBC Monitoring — Active Anemia',
    details: 'Monthly CBC with differential for patients with iron-deficiency anemia at diagnosis. Track hemoglobin response to oral iron (ferrous sulfate 325 mg TID). Escalate to IV iron (iron sucrose or ferric carboxymaltose) if hemoglobin fails to rise ≥1 g/dL after 4 weeks of oral therapy or GI intolerance is documented.',
  },
  {
    frequency: 'Every 3 Months (Year 1)',
    item: 'TTG-IgA/EMA Serology & GFD CDAT Score',
    details: 'Quarterly TTG-IgA and EMA serology during the first 12 months on GFD with concurrent CDAT dietary adherence score. CDAT >13 triggers dietitian re-referral and cross-contamination audit. TTG-IgA >3× ULN at 6 months triggers intentional gluten exposure review.',
  },
  {
    frequency: 'Every 6 Months (Year 1)',
    item: 'Celiac Symptom Index (CSI) + Dietitian Review',
    details: 'Administer Celiac Symptom Index at 6 and 12 months to assess symptom burden independent of serology. Persistent high CSI with normalizing TTG-IgA suggests functional GI overlap (IBS-like symptoms in 30–40% of celiac patients on strict GFD) — refer for low-FODMAP dietary counseling.',
  },
  {
    frequency: 'Annual',
    item: 'Nutritional Deficiency Panel Repeat',
    details: 'Annual ferritin, iron/TIBC, vitamin B12, RBC folate, 25-OH vitamin D, zinc, magnesium, and CBC. Adjust supplementation based on results. Document deficiency resolution as primary GFD efficacy endpoint alongside serology normalization.',
  },
  {
    frequency: 'Annual',
    item: 'GCET Gluten Contamination Questionnaire',
    details: 'Administer annual Gluten Contamination Experience Tool (GCET) to identify specific cross-contamination sources — eating out, shared kitchen, travel, packaged food exposures. Use results to individualize dietary coaching focus areas and set adherence improvement targets.',
  },
  {
    frequency: '12–24 Months',
    item: 'Repeat Duodenal Biopsy Coordination',
    details: 'Coordinate repeat esophagogastroduodenoscopy (EGD) with duodenal biopsy (≥4 biopsies from D2, ≥2 from D1 per ACG guidelines) at 12 months for adults with Marsh IIIb–IIIc at diagnosis, and at 24 months for all adults on strict GFD. Document Marsh grade trajectory. Persistent Marsh IIIa–IIIc at 24 months initiates NRCD protocol.',
  },
  {
    frequency: 'Every 1–2 Years',
    item: 'DEXA Bone Densitometry',
    details: 'Annual DEXA for patients with T-score ≤−2.0 or active bisphosphonate/denosumab therapy. Every 2 years for T-score −1.0 to −2.0. FRAX recalculation at each DEXA. Bisphosphonate initiation (alendronate 70 mg weekly or zoledronic acid 5 mg IV annually) for T-score ≤−2.5 or fragility fracture per NOF/ACG guidelines.',
  },
  {
    frequency: 'Semi-Annual',
    item: 'MDT Conference — RCD Type I/II Patients',
    details: 'Semi-annual multidisciplinary team case conference for all refractory celiac patients. Review CD8 immunostaining, TCR clonality, flow cytometry, CT/MR enterography, and PET-CT results. Assess RCD Type II EATL progression risk. Coordinate budesonide or azathioprine/cladribine treatment cycle documentation.',
  },
  {
    frequency: 'Annual (RCD Type II)',
    item: 'PET-CT & CT/MR Enterography for EATL',
    details: 'Annual PET-CT for all established RCD Type II patients for EATL (enteropathy-associated T-cell lymphoma) surveillance. CT or MR enterography every 6–12 months for RCD Type II to assess ulcerative jejunitis extent and mass lesion detection. Oncology co-management activation for any new suspicious finding.',
  },
]

export default function CeliacDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Celiac Disease"
        title="Celiac Disease Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing TTG-IgA trending, GFD adherence coaching, nutritional deficiency correction, DEXA surveillance, and refractory celiac triage in celiac disease clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Celiac Disease NP Practice
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
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              The Evidence Base Driving Celiac Disease NP Compliance
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

      {/* CE & Monitoring Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              Celiac Disease NP Monitoring & Intervention Schedule
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
              Managing a celiac disease panel means tracking TTG-IgA serology every 3 months for first-year patients, annual nutritional deficiency panels across six biomarkers, repeat biopsies at 12 and 24 months, DEXA every 1–2 years, annual gluten contamination questionnaires, CDAT adherence scores at every visit, and refractory celiac triage with RCD Type I/II workup and EATL surveillance — all while coaching every patient on cross-contamination and label reading. Momenties gave me one place to see every overdue interval and upcoming deadline across my entire panel. My TTG-IgA normalization rates improved by 18% in one year.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Karen B., FNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Gastroenterology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Improve TTG-IgA Normalization Rates Across Your Celiac Panel?"
        subtext="Momenties consolidates quarterly serology intervals, CDAT adherence scores, annual nutritional panels, DEXA scheduling, repeat biopsy coordination, and RCD surveillance into one accountable calendar — so every celiac patient hits every milestone, on time."
      />
    </main>
  )
}
