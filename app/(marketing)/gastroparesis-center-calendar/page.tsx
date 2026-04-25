import { Activity, ClipboardList, Stethoscope, Heart } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Gastroparesis Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for gastroparesis centers coordinating gastric emptying scintigraphy, metoclopramide/domperidone/erythromycin dosing and tardive-dyskinesia monitoring, pyloric botulinum toxin injection series, gastric peroral endoscopic myotomy (G-POEM) scheduling, and enteral nutrition support coordination.',
}

const pillars = [
  {
    icon: Activity,
    title: 'Gastric Emptying Scintigraphy & GCSI Symptom Score Trending',
    description: 'Standardized 4-hour gastric emptying scintigraphy (GES) scheduling per Tougas/SNMMI protocol — 99mTc-sulfur colloid egg meal with 1-hour, 2-hour, and 4-hour imaging; normal threshold <10% retention at 4 hours with delayed defined as ≥10%; biannual repeat GES for treatment response monitoring with GCSI (Gastroparesis Cardinal Symptom Index) nausea, vomiting, early satiety, postprandial fullness, bloating, and upper abdominal pain subscale trending at each visit; GCSI total score target reduction ≥1.0 point for clinically meaningful response; weekly SmartPill wireless motility capsule scheduling for ambulatory whole-gut transit supplemental assessment; and quarterly antroduodenal manometry for refractory cases evaluating myopathic versus neuropathic motor patterns prior to surgical or endoscopic escalation.',
  },
  {
    icon: ClipboardList,
    title: 'Metoclopramide/Domperidone/Erythromycin Dosing & Tardive-Dyskinesia/QTc Monitoring',
    description: 'Metoclopramide REMS (Risk Evaluation and Mitigation Strategy) compliance — mandatory tardive dyskinesia (TD) counseling at initiation and every 12 weeks thereafter; FDA black box warning limiting use to ≤12 weeks continuously with AIMS (Abnormal Involuntary Movement Scale) screening at 6 and 12 weeks; domperidone IND protocol maintenance with quarterly QTc interval monitoring (threshold <450 ms women, <430 ms men) and potassium/magnesium electrolyte panel; erythromycin 50 mg IV/PO q6–8h motilin receptor agonist dosing with biweekly LFT and QTc surveillance; quarterly drug-drug interaction review for QT-prolonging co-medications (ondansetron, haloperidol, azithromycin); and annual AIMS examination for all patients on chronic prokinetic therapy with neurologist referral triggers for oro-facial dyskinesia or involuntary limb movements.',
  },
  {
    icon: Stethoscope,
    title: 'Pyloric Botulinum Toxin Injection & G-POEM Surgical Referral Coordination',
    description: 'Pyloric botulinum toxin injection series scheduling — 100–200 units onabotulinumtoxinA endoscopic injection into pylorus with 4-week post-procedure GES response assessment and symptom score trending; repeat injection eligibility evaluation at 3 months based on ≥1.5-point GCSI improvement; gastric peroral endoscopic myotomy (G-POEM) referral pathway coordination for patients failing ≥2 prokinetic agents and ≥1 botulinum toxin injection — pre-procedure impedance planimetry (EndoFLIP) for pyloric distensibility index (<10 mm²/mmHg threshold for G-POEM candidacy); multi-disciplinary team meeting scheduling for surgical gastric electrical stimulation (Enterra therapy) consideration; post-G-POEM 3-month and 6-month GES and GCSI follow-up; and annual long-term outcomes tracking for all endoscopic and surgical gastroparesis interventions.',
  },
  {
    icon: Heart,
    title: 'Enteral/Parenteral Nutrition Support & Dietitian Co-Management',
    description: 'Registered dietitian (RD) co-management visit scheduling at initiation and every 6–8 weeks for dietary modification counseling — small-particle, low-fat, low-fiber diet education; nasojejunal (NJ) or jejunostomy tube (J-tube) enteral nutrition initiation teaching with formula selection (peptide-based vs. polymeric), infusion rate titration, and aspiration precaution documentation; parenteral nutrition (PN) initiation for gastroparesis patients with >10% unintentional weight loss or BMI <18.5 kg/m² — weekly metabolic panel (glucose, phosphorus, triglycerides, electrolytes) and monthly LFT panel for PN-associated liver disease surveillance; quarterly anthropometric reassessment (weight, BMI, mid-arm circumference) with dietitian and gastroenterologist co-signature; monthly enteral tube site care and patency documentation; and quarterly reassessment for oral feeding advancement or tube feeding weaning based on GES, GCSI, and nutritional status.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Gastroparesis Program Audit & GES Baseline',
    tasks: 'Complete annual program audit — review all active gastroparesis patients for GES results, GCSI trending, prokinetic compliance, and nutrition status. Schedule baseline 4-hour gastric emptying scintigraphy for newly enrolled patients per SNMMI protocol. Verify metoclopramide REMS enrollment and tardive dyskinesia counseling documentation. Update domperidone IND protocol patient registry.',
  },
  {
    phase: 'February',
    title: 'Q1 QTc Monitoring & Drug-Holiday Assessments',
    tasks: 'Complete Q1 QTc interval monitoring for all domperidone IND and erythromycin patients — threshold review (<450 ms women, <430 ms men) with cardiology referral for borderline results. Conduct metoclopramide 12-week AIMS screening for patients approaching continuous-use limit. Schedule drug-holiday planning for patients at 12-week metoclopramide boundary. Review Q1 GCSI nausea/vomiting/bloating subscale trends.',
  },
  {
    phase: 'March',
    title: 'Pyloric Botulinum Toxin Response Assessment',
    tasks: 'Evaluate 4-week post-procedure GES and GCSI response for patients receiving pyloric botulinum toxin injections in November/December. Identify candidates for repeat injection (≥1.5-point GCSI improvement sustained at 3 months). Schedule EndoFLIP impedance planimetry for patients failing botulinum toxin series to assess G-POEM candidacy. Initiate multi-disciplinary team scheduling for surgical escalation candidates.',
  },
  {
    phase: 'April',
    title: 'Dietitian Co-Management Visits & Nutrition Reassessment',
    tasks: 'Complete Q2 registered dietitian co-management visits for all enteral and parenteral nutrition patients. Review 6-month anthropometric data (weight, BMI, mid-arm circumference). Assess oral feeding advancement or tube-feeding weaning readiness based on GES, GCSI, and nutritional status. Update PN metabolic panel documentation — glucose, phosphorus, triglycerides, electrolytes, and monthly LFT for PN-associated liver disease surveillance.',
  },
  {
    phase: 'May',
    title: 'G-POEM Pre-Procedure Coordination',
    tasks: 'Coordinate pre-G-POEM workup for approved surgical candidates — EndoFLIP pyloric distensibility index documentation, pre-procedure GES, and anesthesia risk stratification. Schedule multi-disciplinary gastroparesis conference for gastric electrical stimulation (Enterra) discussion. Complete biannual repeat GES for treatment response monitoring in patients on stable prokinetic therapy. Review Q2 erythromycin LFT panels.',
  },
  {
    phase: 'June',
    title: 'Q2 AIMS Screening & Prokinetic Compliance Audit',
    tasks: 'Complete semi-annual AIMS (Abnormal Involuntary Movement Scale) examination for all patients on chronic prokinetic therapy. Document oro-facial dyskinesia, lip smacking, tongue movements, and involuntary limb movements. Trigger neurology referral for AIMS score ≥2. Conduct Q2 metoclopramide REMS counseling and tardive dyskinesia education for all active patients. Audit domperidone IND compliance and quarterly electrolyte panels.',
  },
  {
    phase: 'July',
    title: 'Post-G-POEM 3-Month Follow-Up',
    tasks: 'Complete 3-month post-G-POEM GES and GCSI outcome assessment for spring procedure cohort. Document pyloric distensibility improvement and symptom burden reduction. Schedule 6-month follow-up GES. Review prokinetic medication adjustments post-G-POEM. Update nutrition support plans for patients achieving improved gastric emptying — transition enteral to oral feeding where appropriate.',
  },
  {
    phase: 'August',
    title: 'SmartPill Ambulatory Motility & Antroduodenal Manometry',
    tasks: 'Schedule SmartPill wireless motility capsule studies for refractory gastroparesis patients requiring whole-gut transit characterization. Complete antroduodenal manometry for patients being evaluated for myopathic versus neuropathic motor patterns prior to surgical escalation. Review Q3 GCSI symptom score trending for all active patients. Coordinate quarterly drug-drug interaction review for QT-prolonging co-medications.',
  },
  {
    phase: 'September',
    title: 'Annual GES Treatment Response & GCSI Benchmarking',
    tasks: 'Complete annual 4-hour GES for all established gastroparesis patients on prokinetic therapy. Benchmark year-over-year GCSI total score changes — target ≥1.0-point reduction for responders. Identify non-responders for endoscopic or surgical escalation. Review pyloric botulinum toxin injection cohort outcomes. Update annual Gastroparesis Center quality metrics report.',
  },
  {
    phase: 'October',
    title: 'Enteral Tube Site Care Audit & PN Reassessment',
    tasks: 'Complete quarterly enteral tube site care documentation audit — J-tube and NJ-tube patency, site infection assessment, and formula tolerance review. Reassess parenteral nutrition candidates for transition to enteral feeding based on GES improvement. Complete Q4 PN metabolic panel (glucose, phosphorus, triglycerides, electrolytes) and LFT panel. Schedule Q4 registered dietitian co-management visits.',
  },
  {
    phase: 'November',
    title: 'Q4 QTc Review & Domperidone IND Renewal',
    tasks: 'Complete Q4 QTc interval monitoring and electrolyte panels for all domperidone and erythromycin patients. Renew domperidone IND protocol registrations due December 31. Review annual AIMS examinations for all chronic prokinetic therapy patients. Schedule pyloric botulinum toxin injections for Q1 cohort. Audit metoclopramide REMS counseling documentation completeness.',
  },
  {
    phase: 'December',
    title: 'Annual Program Report & MDT Planning',
    tasks: 'Compile annual Gastroparesis Center outcomes report — GES normalization rates, GCSI responder rates, G-POEM outcomes, botulinum toxin response rates, nutrition support transition rates, and prokinetic adverse event log. Finalize domperidone IND renewals. Schedule January multi-disciplinary team meeting for complex cases. Plan next-year GES and GCSI assessment calendar for all active patients.',
  },
]

const kpis = [
  { metric: '≥60%', label: 'Symptom Responders (GCSI ≥1.0-point Reduction)' },
  { metric: '<10%', label: 'Metoclopramide Tardive Dyskinesia Rate' },
  { metric: '≥70%', label: 'G-POEM Clinical Success at 12 Months' },
  { metric: '100%', label: 'REMS Counseling Documentation Compliance' },
  { metric: 'Quarterly', label: 'QTc & Electrolyte Monitoring Frequency' },
  { metric: '≥80%', label: 'Enteral Nutrition Transition from PN' },
]

const testimonial = {
  quote: 'Managing a gastroparesis center means tracking GES every 6–12 months, GCSI at every visit, metoclopramide REMS counseling every 12 weeks, AIMS screening at 6 and 12 weeks, quarterly QTc for domperidone IND patients, botulinum toxin injection series, G-POEM pre- and post-procedure workup, and monthly PN metabolic panels — all simultaneously across a diverse patient population. Momenties put every single deadline on one calendar. Our program achieved 100% REMS documentation compliance and cut missed surveillance intervals by over 90%.',
  author: 'Dr. H. Parkman',
  role: 'Gastroparesis Research Program',
}

export default function GastropareasisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Gastroparesis Treatment Center"
        title="Gastroparesis Center Calendar Management"
        subtitle="AI-powered scheduling for gastroparesis centers coordinating gastric emptying scintigraphy, metoclopramide/domperidone/erythromycin dosing and tardive-dyskinesia monitoring, pyloric botulinum toxin injection series, gastric peroral endoscopic myotomy (G-POEM) scheduling, and enteral nutrition support coordination."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Gastroparesis Center Compliance Lifecycle
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              The Gastroparesis Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every GES study, GCSI assessment, REMS counseling deadline, QTc monitoring interval, botulinum toxin follow-up, and nutrition support milestone — sequenced across 12 months.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.phase} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.phase}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.97rem', lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              The 6 KPIs That Define Gastroparesis Program Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>{kpi.label}</div>
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
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve 100% REMS Documentation Compliance in Your Gastroparesis Center?"
        subtext="Join gastroparesis centers using Momenties to automate every GES, GCSI, AIMS, QTc, botulinum toxin, G-POEM, and nutrition support deadline. Free to start."
      />
    </main>
  )
}
