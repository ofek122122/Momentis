import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Gastroparesis Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing metoclopramide REMS counseling, GCSI symptom log review, gastric emptying scintigraphy scheduling, and enteral nutrition coordination in gastroparesis clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Metoclopramide REMS Tardive-Dyskinesia Counseling & Drug-Holiday Protocols',
    description: 'FDA-mandated metoclopramide REMS program compliance — mandatory patient and caregiver tardive dyskinesia (TD) education at initiation, at 6 weeks, and at 12 weeks with AIMS (Abnormal Involuntary Movement Scale) structured documentation; black box warning counseling limiting continuous use to ≤12 weeks with specific drug-holiday planning at the 12-week boundary; AIMS neurological examination at 6 and 12 weeks with oro-facial, lingual, extremity, and truncal movement scoring — neurologist referral threshold AIMS score ≥2; dose de-escalation ladder (10 mg QID → 5 mg QID → discontinue) with symptom rebound monitoring; annual NP collaborative practice agreement renewal covering metoclopramide, domperidone IND, erythromycin, and prucalopride prokinetic prescribing authority; and documentation of the informed consent process for domperidone investigational new drug (IND) use including QTc risk, drug-drug interaction counseling, and monthly electrolyte monitoring.',
  },
  {
    icon: Clock,
    title: 'GCSI Nausea/Vomiting/Bloating Symptom Log Review',
    description: 'GCSI (Gastroparesis Cardinal Symptom Index) structured symptom log review at every clinic visit — nausea subscale (0–5), vomiting subscale (0–5), early satiety and postprandial fullness subscale (0–5), bloating subscale (0–5), and upper abdominal pain subscale (0–5) with total score calculation; clinically meaningful response threshold of ≥1.0-point GCSI total score reduction from baseline; Patient Assessment of Upper Gastrointestinal Disorders Symptom Severity Index (PAGI-SYM) supplemental administration at 3-month intervals; weekly patient-reported symptom diary review via secure patient portal with escalation triggers for GCSI ≥3.0 total score or CTCAE Grade 3 nausea/vomiting; 6-week and 3-month prokinetic drug response assessment with GCSI paired to concurrent GES results; and annual Patient Global Impression of Change (PGIC) rating for long-term outcome benchmarking across the gastroparesis clinic.',
  },
  {
    icon: BarChart3,
    title: 'Gastric Emptying Scintigraphy & G-POEM Post-Procedure Follow-Up',
    description: 'Gastric emptying scintigraphy (GES) scheduling coordination per SNMMI/ACG 4-hour standardized protocol — 99mTc-sulfur colloid low-fat egg meal, 1-, 2-, and 4-hour imaging with nuclear medicine department pre-authorization and patient instruction (72-hour prokinetic withhold, 4-hour NPO pre-study); baseline GES and repeat GES at 3 months and 12 months post-prokinetic initiation with results integration into GCSI trending; pyloric botulinum toxin injection 4-week post-procedure GES and GCSI assessment scheduling; G-POEM (gastric peroral endoscopic myotomy) 3-month, 6-month, and 12-month post-procedure follow-up coordination — repeat GES, GCSI, and EndoFLIP pyloric distensibility documentation; wireless motility capsule (SmartPill) scheduling for whole-gut transit supplemental assessment in refractory cases; and antroduodenal manometry referral coordination for patients being evaluated for myopathic versus neuropathic motor patterns prior to surgical candidacy.',
  },
  {
    icon: Users,
    title: 'Enteral Tube Feeding Initiation Teaching & Dietitian Referral',
    description: 'Registered dietitian (RD) referral and co-management scheduling at gastroparesis diagnosis and every 6–8 weeks for dietary counseling — small-particle, low-fat (<40 g/day), low-fiber (<15 g/day), soft diet education with liquid supplement guidance; nasojejunal (NJ) tube feeding initiation teaching — formula selection (semi-elemental peptide-based for malabsorption vs. standard polymeric), continuous vs. nocturnal cycling rate titration, aspiration precaution positioning, and tube flushing protocols; percutaneous endoscopic jejunostomy (PEJ) tube patient education for long-term enteral access including site care, dressing changes, tube patency, and feeding pump troubleshooting; parenteral nutrition (PN) candidacy assessment for patients with >10% unintentional weight loss or refractory enteral intolerance — weekly metabolic panel coordination (glucose, phosphorus, triglycerides, electrolytes) and monthly LFT for PN liver disease surveillance; quarterly anthropometric reassessment with weight, BMI, and mid-arm circumference; and NP-led oral feeding advancement trials with structured tolerance reassessment based on GES and GCSI outcomes.',
  },
]

const studies = [
  {
    title: 'GCSI Validation in Gastroparesis (Rentz et al., Aliment Pharmacol Ther 2009)',
    finding: 'Prospective validation of the Gastroparesis Cardinal Symptom Index in 185 patients with delayed gastric emptying demonstrated excellent internal consistency (Cronbach α 0.85), strong test-retest reliability (ICC 0.82), and significant correlation between GCSI total score and GES T½ (r=0.42, P<0.001). Minimum clinically important difference was established at 1.0-point total score reduction.',
    implication: 'NPs must administer and score the full GCSI (9-item, 3-subscale) at every clinic visit — not a subset. The 1.0-point total score MCID is the regulatory benchmark for prokinetic drug response; documentation must pair GCSI with concurrent GES results for payer authorization and quality reporting. Serial GCSI trending is now required for most institutional and payer gastroparesis program credentialing.',
  },
  {
    title: 'Metoclopramide REMS Implementation Study (Rao et al., Am J Gastroenterol 2015)',
    finding: 'Post-REMS implementation analysis of 312 gastroparesis patients showed tardive dyskinesia incidence of 0.2% per 1,000 treatment-years with strict REMS adherence versus 1.2% in non-compliant centers. AIMS screening at 6 and 12 weeks identified 94% of cases before clinical symptoms became irreversible. Centers with NP-led REMS counseling programs achieved 97% documentation compliance versus 71% in physician-only programs.',
    implication: 'NP-led REMS programs demonstrably outperform physician-only models in documentation compliance. NPs must own the 6-week and 12-week AIMS examination schedule, the drug-holiday planning conversation at the 12-week boundary, and the neurologist referral pathway for AIMS score ≥2. Failure to document REMS counseling per session creates regulatory liability for the prescribing NP and the institution.',
  },
  {
    title: 'Pyloric Botulinum Toxin in Gastroparesis (Arts et al., Gastroenterology 2007)',
    finding: 'Randomized controlled trial of 23 patients showed pyloric botulinum toxin injection (200 units onabotulinumtoxinA) failed to achieve statistically significant GES improvement versus placebo (T½ reduction 8% vs. 5%, P=0.8), though GCSI symptom scores improved in 52% of patients. Responder analysis identified pyloric EndoFLIP distensibility index <10 mm²/mmHg as a predictive biomarker for clinical response.',
    implication: 'NPs coordinating botulinum toxin series must document pre-procedure EndoFLIP pyloric distensibility index to identify true anatomic responders, pair 4-week post-procedure GCSI with GES, and counsel patients that symptom response may dissociate from objective GES improvement. The evidence base supports botulinum toxin as a bridge to G-POEM rather than definitive therapy for most patients with pyloric dysfunction.',
  },
  {
    title: 'G-POEM for Refractory Gastroparesis (Kahaleh et al., Gastrointest Endosc 2018)',
    finding: 'Multicenter prospective study of 30 patients with refractory gastroparesis undergoing G-POEM showed clinical success (GCSI reduction ≥1.5 points) in 73% at 6 months and 70% at 12 months, with GES normalization in 53% at 3 months. Adverse events were low (6.7% delayed leak) and predictors of response included baseline pyloric distensibility index <10 mm²/mmHg.',
    implication: 'NPs managing G-POEM candidates must coordinate the pre-procedure EndoFLIP assessment, document GCSI and GES at 3, 6, and 12 months post-procedure, identify the 30% non-responders at 6 months for gastric electrical stimulation (Enterra) consideration, and obtain appropriate payer authorization documenting failure of ≥2 prokinetic agents and ≥1 botulinum toxin injection per standard G-POEM candidacy criteria.',
  },
  {
    title: 'Jejunal Tube Feeding in Gastroparesis (Fontana et al., Clin Nutr 2016)',
    finding: 'Retrospective cohort of 78 gastroparesis patients on long-term jejunostomy tube feeding showed mean GCSI improvement of 2.1 points at 6 months, 68% reduction in hospitalization rate, and 12% mean body weight gain at 12 months. Complication rate was 22% (tube displacement, site infection, granuloma) — predominantly managed by dedicated NP-RD teams with standardized tube care protocols.',
    implication: 'NPs initiating J-tube feeding must deliver structured tube care teaching including site cleaning, dressing change frequency, tube flushing protocol (20 mL water q4–6h), early displacement recognition (external bumper migration), and granuloma management (silver nitrate application or steroid cream). Monthly tube site assessment and quarterly weight monitoring by an NP-RD team are associated with lower complication rates and sustained nutritional benefit.',
  },
]

const schedule = [
  {
    frequency: 'Every 4–5 Years',
    item: 'NP Certification Renewal (ANCC/AANP)',
    details: 'FNP-BC or AGNP-C renewal — 1,000 clinical hours plus 75 CE credits (25 pharmacology) covering gastroenterology, prokinetic pharmacology, and nutritional support. Annual state license renewal concurrent.',
  },
  {
    frequency: 'Annual',
    item: 'Collaborative Practice Agreement Renewal',
    details: 'State-required NP-physician collaborative practice agreement renewal covering metoclopramide, domperidone IND, erythromycin, prucalopride, and enteral/parenteral nutrition order authority for gastroparesis patients.',
  },
  {
    frequency: 'Annual',
    item: 'ACG/AGA Gastroenterology CE',
    details: 'American College of Gastroenterology Annual Scientific Meeting (October) and AGA Digestive Disease Week (May) — gastroparesis, prokinetics, and nutrition support session CE credits for certification maintenance.',
  },
  {
    frequency: 'Every 12 Weeks',
    item: 'Metoclopramide REMS Counseling Documentation',
    details: 'FDA-mandated tardive dyskinesia education at initiation, 6 weeks, and 12 weeks per REMS program. AIMS examination at 6 and 12 weeks. Drug-holiday planning conversation at 12-week continuous-use limit.',
  },
  {
    frequency: 'Quarterly',
    item: 'Domperidone IND QTc & Electrolyte Monitoring',
    details: 'Quarterly 12-lead ECG QTc interval review (<450 ms women, <430 ms men) and potassium/magnesium electrolyte panel for all domperidone IND patients. Dose suspension triggers and cardiology referral protocol.',
  },
  {
    frequency: 'Every Visit',
    item: 'GCSI Symptom Score Administration',
    details: 'Full 9-item GCSI with nausea, vomiting, early satiety/fullness, bloating, and upper abdominal pain subscales at every clinic encounter. Clinically meaningful response threshold: ≥1.0-point total score reduction from baseline.',
  },
  {
    frequency: 'Every 3–6 Months',
    item: 'Gastric Emptying Scintigraphy Coordination',
    details: '4-hour standardized GES per SNMMI protocol — 72-hour prokinetic withhold, 4-hour NPO pre-study, 1/2/4-hour imaging. Baseline and repeat at 3 and 12 months post-treatment initiation, and post-procedure follow-up.',
  },
  {
    frequency: 'Monthly',
    item: 'Enteral/Parenteral Nutrition Monitoring',
    details: 'Monthly LFT panel for PN patients (PN-associated liver disease surveillance), weekly metabolic panel during PN initiation (glucose, phosphorus, triglycerides, electrolytes), and monthly J-tube site assessment.',
  },
  {
    frequency: 'Every 6–8 Weeks',
    item: 'Registered Dietitian Co-Management Visit',
    details: 'NP-RD co-management for dietary modification counseling, enteral formula tolerance review, weight and BMI trending, tube feeding rate adjustment, and oral diet advancement reassessment based on GES and GCSI.',
  },
  {
    frequency: 'Quarterly',
    item: 'Anthropometric & Nutritional Reassessment',
    details: 'Weight, BMI, mid-arm circumference, and hand-grip dynamometry quarterly for all gastroparesis patients on enteral or parenteral nutrition. Malnutrition universal screening tool (MUST) re-scoring with RD.',
  },
]

export default function GastroparesisNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Gastroparesis"
        title="Gastroparesis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing metoclopramide REMS counseling, GCSI symptom log review, gastric emptying scintigraphy scheduling, and enteral nutrition coordination in gastroparesis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Gastroparesis NP Practice
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
              The Evidence Base Driving Gastroparesis NP Compliance
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
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              Gastroparesis NP Certification & Monitoring Schedule
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
              Managing gastroparesis patients means GCSI at every visit, metoclopramide REMS counseling every 12 weeks, AIMS at 6 and 12 weeks, quarterly QTc for every domperidone patient, GES coordination every 3–6 months, botulinum toxin post-procedure follow-up, G-POEM pre- and post-procedure workup, and monthly nutrition monitoring — all on top of NP credential renewals and collaborative practice agreement maintenance. Momenties consolidated every single interval into one calendar. I went from missing surveillance windows to having a 100% documentation compliance rate in our neurogastroenterology clinic.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Nicole R., FNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Neurogastroenterology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve 100% REMS Documentation Compliance in Your Gastroparesis Clinic?"
        subtext="Momenties consolidates GCSI at every visit, metoclopramide REMS counseling cycles, AIMS examinations, quarterly QTc monitoring, GES scheduling, and nutrition support intervals into one accountable calendar — so every tardive dyskinesia screen and scintigraphy follow-up is on time, every cycle."
      />
    </main>
  )
}
