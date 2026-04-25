import { ClipboardList, Shield, Search, Heart } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Lambert-Eaton Syndrome Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs coordinating amifampridine dose logs, QTc monitoring, IVIG pre-medication protocols, and SCLC CT surveillance scheduling in Lambert-Eaton myasthenic syndrome clinics.',
}

const pillars = [
  {
    icon: ClipboardList,
    title: 'Amifampridine Titration Teaching & QTc-Alert Protocols',
    description: 'Patient and caregiver education on amifampridine phosphate (Firdapse) titration schedule — starting at 15 mg/day in three divided doses and increasing by 5 mg every 3–4 days to target response dose (maximum 80 mg/day); NP-driven ECG ordering at baseline, after each dose increment, and every 3 months at stable dose with immediate QTc-alert protocol for QTc >500 ms or ≥60 ms increase (hold dose and notify supervising neurologist within 24 hours); seizure precaution counseling documentation — written acknowledgment required before initiation in patients with prior seizure history or active epilepsy workup; monthly neurological functional assessment using the Lambert-Eaton Myasthenic Syndrome Clinical Score (LCS) and manual muscle testing (proximal leg strength is the primary clinical endpoint); quarterly CMP documentation for renal and hepatic safety; and structured LEMS symptom diary teaching with patients (proximal weakness, autonomic symptoms — dry mouth, constipation, erectile dysfunction — and ptosis tracking between visits).',
  },
  {
    icon: Shield,
    title: 'IVIG Infusion Pre-Checks & Reaction Monitoring',
    description: 'Pre-infusion IVIG safety checklist administered by NP — IgA level confirmation (IgA deficiency contraindicates standard IVIG; substitute IgA-depleted product if IgA <7 mg/dL), CBC with differential, comprehensive metabolic panel, serum creatinine (eGFR >30 mL/min/1.73m² required), and D-dimer for VTE baseline risk stratification; pre-medication protocol documentation — oral hydration (500–1000 mL the morning of infusion), acetaminophen 650 mg PO, and diphenhydramine 25 mg PO 30 minutes prior; NP monitoring during infusion for headache (aseptic meningitis precursor), flushing, blood pressure changes, and anaphylaxis with infusion rate reduction protocol triggered by any grade ≥2 adverse event; post-infusion Timed Up and Go (TUG) test and 30-second chair stand documented to quantify functional response; VTE prophylaxis protocol (compression stockings or LMWH for high-risk patients per scoring) signed and documented for each IVIG cycle; and SPEP IgG trough level ordering 2–4 weeks post-infusion to confirm adequate immunoglobulin levels between Q3–4 month maintenance cycles.',
  },
  {
    icon: Search,
    title: 'CT Chest SCLC Surveillance Coordination',
    description: 'NP-coordinated CT chest with contrast scheduling — every 3 months for the first 2 years post-LEMS diagnosis in all patients without confirmed non-paraneoplastic etiology; structured radiology order set specifying paraneoplastic SCLC surveillance protocol with mediastinal window reconstruction; SOX1 antibody result review at each surveillance visit — new positivity triggers same-day PET-CT order and same-week oncology referral per established LEMS center protocol; patient communication workflow for CT results within 48 hours with a standardized no-finding reassurance letter and next-scan scheduling confirmation; transition documentation at the 2-year mark from Q3m to Q6m surveillance with patient education letter explaining the reduced frequency rationale; smoking cessation counseling and pack-year documentation at every CT scheduling visit; and multidisciplinary coordination template for tumor board notification when CT reveals nodules ≥6 mm or new mediastinal lymphadenopathy.',
  },
  {
    icon: Heart,
    title: 'Autonomic Symptom & Fall-Risk Assessment',
    description: 'Structured autonomic symptom questionnaire at every LEMS clinic visit — orthostatic hypotension screening (blood pressure supine vs. standing with ≥20 mmHg systolic drop defined as positive), dry mouth (xerostomia) severity grading, constipation assessment (Bristol Stool Scale), erectile dysfunction NP inquiry protocol, and urinary hesitancy screening; fall-risk assessment using the Morse Fall Scale or STEADI toolkit at every visit given prominent proximal leg weakness in LEMS (hip flexor and quadriceps preferentially affected); physical therapy referral protocol for patients with TUG ≥12 seconds or chair stand <8 repetitions in 30 seconds; assistive device prescription coordination (cane, rolling walker) and home safety checklist; pyridostigmine 30–60 mg QID symptom-log review for patients on combination therapy — document reduction in autonomic and motor symptoms as secondary endpoints; and patient-reported outcome measure (PROMIS-Physical Function short form) administration every 6 months to track functional trajectory beyond clinical exam.',
  },
]

const studies = [
  {
    title: 'DAPPER Trial (Amifampridine Phosphate in LEMS) — Muscle & Nerve 2018',
    finding: 'Randomized withdrawal trial of 32 LEMS patients showed that withdrawal of amifampridine phosphate significantly worsened QMG score (+2.6 points vs. -0.8 with continued treatment, P=0.0005) and patient global impression over 4 weeks, confirming amifampridine as the standard of care for symptomatic LEMS treatment.',
    implication: 'NPs must document QMG and LCS scores at every visit as the primary outcome measures for amifampridine continuation decisions. Any 2-point QMG worsening should trigger urgent re-evaluation and dose optimization. The DAPPER trial also confirmed that most LEMS patients experience measurable functional decline within weeks of amifampridine discontinuation — compliance counseling must emphasize this risk.',
  },
  {
    title: 'LEMS Epidemiology & Paraneoplastic Risk (Titulaer et al., NEJM 2011)',
    finding: 'Landmark cohort study of 227 LEMS patients showed that 50–60% had underlying SCLC, with tumor discovery within 3 months of LEMS onset in 95% of paraneoplastic cases. SOX1 antibody had 65% sensitivity and 95% specificity for SCLC-associated LEMS. VGCC antibodies were positive in >90% of LEMS cases regardless of paraneoplastic etiology.',
    implication: 'NPs must prioritize CT chest Q3m surveillance as non-negotiable for all SCLC-risk patients in the first 2 years — this is the highest-yield window for SCLC detection. SOX1 antibody positivity should trigger same-visit PET-CT ordering. VGCC antibody seronegative patients warrant additional neuromuscular workup to exclude mimics (e.g., myasthenia gravis with thymoma).',
  },
  {
    title: '3,4-DAP vs. Placebo in LEMS (Sanders et al., Neurology 2000)',
    finding: 'Crossover placebo-controlled trial of 26 LEMS patients showed 3,4-diaminopyridine significantly improved compound muscle action potential (CMAP) amplitude (P<0.001) and proximal muscle strength on the Medical Research Council (MRC) scale. Adverse events were primarily perioral and acral paresthesias (dose-dependent, resolving with dose reduction).',
    implication: 'NPs counseling patients on amifampridine (the phosphate salt of 3,4-DAP) should explain that perioral tingling and paresthesias are expected and benign — dose-limiting only if accompanied by seizure activity or QTc prolongation. Document paresthesia severity at each titration visit using a 0–10 numeric scale to distinguish expected from concerning adverse events.',
  },
  {
    title: 'IVIG in LEMS — Cochrane Review (Maddison & Gozzard, 2015)',
    finding: 'Systematic review including the landmark randomized crossover trial of 9 LEMS patients (McEvoy et al., 1989) confirmed that IVIG 2 g/kg significantly improved isometric muscle strength and CMAP amplitude versus placebo within 2–4 weeks. Clinical benefit was transient (peak at 2–4 weeks, waning by 8 weeks), supporting the Q3–4 month maintenance schedule used in clinical practice.',
    implication: 'NPs scheduling IVIG maintenance must time functional assessments (TUG, chair stand, QMG) at 2–4 weeks post-infusion to capture peak response. Scheduling follow-up too late (>6 weeks post-IVIG) may underestimate clinical benefit and prematurely trigger treatment escalation. Document the infusion-to-assessment interval consistently across cycles to enable meaningful intra-patient response trending.',
  },
  {
    title: 'Pyridostigmine Augmentation in LEMS (Oh et al., Neurology 1997)',
    finding: 'Observational data and clinical series confirm pyridostigmine 60 mg QID provides modest symptomatic benefit in LEMS through cholinesterase inhibition at the neuromuscular junction, augmenting the effect of amifampridine by prolonging acetylcholine availability. Benefit is typically seen in oculobulbar symptoms and autonomic features rather than proximal limb strength.',
    implication: 'NPs co-managing patients on amifampridine plus pyridostigmine combination therapy should document each drug\'s contribution separately using targeted symptom domains — proximal limb strength (primarily amifampridine), ptosis and diplopia, and dry mouth/constipation (primarily pyridostigmine augmentation). This supports evidence-based prescribing documentation and justifies combination therapy continuation.',
  },
]

const schedule = [
  {
    frequency: 'Every 3–4 Days (Titration)',
    item: 'Amifampridine Dose Increment',
    details: 'Increase amifampridine by 5 mg per divided dose every 3–4 days until target response or maximum 80 mg/day. Obtain ECG with QTc at each increment — hold if QTc >500 ms or ≥60 ms rise from baseline.',
  },
  {
    frequency: 'Every 3 Months (Year 1–2)',
    item: 'CT Chest SCLC Surveillance',
    details: 'CT chest with contrast Q3m for all LEMS patients without confirmed non-paraneoplastic etiology during the first 2 years — the highest-yield window for SCLC detection per Titulaer et al. 2011.',
  },
  {
    frequency: 'Every 3–4 Months',
    item: 'IVIG 2 g/kg Maintenance Infusion',
    details: 'Pre-infusion IgA screen, CBC, CMP, creatinine, D-dimer. Pre-medicate with hydration, acetaminophen, diphenhydramine. TUG test and chair stand at 2–4 weeks post-infusion to capture peak functional response.',
  },
  {
    frequency: 'Every 3 Months (Stable Dose)',
    item: 'QTc ECG Monitoring',
    details: 'Mandatory QTc interval check every 3 months on stable amifampridine dose. Also required after any dose change within 48–72 hours. Document in structured ECG log with comparison to baseline.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'VGCC Antibody Serology',
    details: 'Quantitative VGCC antibody titer every 6 months to track immunological response to IVIG. Annual paraneoplastic panel (anti-Hu, anti-Ri, SOX1, anti-CV2/CRMP5) to detect evolving etiology.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'PROMIS-Physical Function Assessment',
    details: 'PROMIS-Physical Function short form (SF-10a) administered every 6 months to track patient-reported functional trajectory. Supplement with QMG and LCS at every visit.',
  },
  {
    frequency: 'Every Visit',
    item: 'Autonomic Symptom & Fall-Risk Screen',
    details: 'Orthostatic blood pressure, dry mouth and constipation grading, Morse Fall Scale, proximal leg strength assessment. Refer to physical therapy for TUG ≥12 seconds or chair stand <8 reps/30 sec.',
  },
  {
    frequency: 'Every 6 Months (Year 3–5)',
    item: 'CT Chest Transition Surveillance',
    details: 'After 2 years SCLC-negative, transition to CT chest Q6m for years 3–5. Document transition decision and patient education letter at the 2-year mark with updated surveillance schedule.',
  },
  {
    frequency: 'Annual',
    item: 'EMG with Repetitive Nerve Stimulation',
    details: 'Annual EMG/RNS with 3 Hz decrement (≥10% = positive) and post-exercise 50 Hz facilitation (≥100% increment = positive). Compare to baseline — guides amifampridine and IVIG dose decisions.',
  },
  {
    frequency: 'Quarterly',
    item: 'CMP & Renal/Hepatic Safety Panel',
    details: 'Quarterly comprehensive metabolic panel for all LEMS patients on amifampridine to monitor hepatic and renal function. eGFR <30 triggers IVIG dose review. ALT >3x ULN requires amifampridine dose hold.',
  },
]

export default function LambertEatonSyndromeNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Lambert-Eaton Syndrome"
        title="Lambert-Eaton Syndrome Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs coordinating amifampridine dose logs, QTc monitoring, IVIG pre-medication protocols, and SCLC CT surveillance scheduling in Lambert-Eaton myasthenic syndrome clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full LEMS NP Practice
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
              The Evidence Base Driving LEMS NP Compliance
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
              LEMS NP Monitoring & Scheduling Cadence
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
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
              LEMS NP practice means tracking amifampridine titration logs, QTc ECGs at every dose change, IVIG pre-infusion checklists every 3–4 months, CT chest SCLC surveillance every quarter for 2 years, VGCC antibody serologies, autonomic symptom reviews, fall-risk assessments, and functional outcome scores — all simultaneously across a small but highly complex patient population. Momenties turned every protocol interval into an automated prompt. We haven&apos;t missed a surveillance CT or QTc check since we started using it.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Carol T., AGPCNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Neuromuscular NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Run a Zero-Miss LEMS Surveillance Program?"
        subtext="Momenties consolidates amifampridine QTc logs, IVIG pre-infusion checklists, CT chest SCLC scheduling, VGCC antibody intervals, and fall-risk assessments into one accountable calendar — so every protocol deadline is on time, every cycle."
      />
    </main>
  )
}
