import { Stethoscope, Shield, BarChart3, Heart } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Sarcoidosis Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for sarcoidosis centers coordinating prednisone taper protocols, methotrexate/azathioprine steroid-sparing monitoring, infliximab infusion series, annual PFT/chest CT surveillance, ophthalmology slit-lamp exams, and cardiac MRI for cardiac sarcoidosis.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'Prednisone Taper & Steroid-Sparing Agent Monitoring',
    description: 'Sarcoidosis prednisone taper protocol management — initial dose 20–40 mg/day with 5 mg monthly reduction based on disease response, targeting <10 mg/day maintenance; monthly CBC, BMP, HbA1c, and weight monitoring for corticosteroid side effects including hyperglycemia, hypertension, and osteoporosis; monthly methotrexate (MTX) 10–15 mg/week CBC and hepatic function panel (ALT/AST <3x ULN threshold) with daily folic acid 1 mg supplementation; biannual MTX cumulative dose assessment for hepatic fibrosis risk with FIB-4 index calculation; monthly azathioprine (AZA) 2 mg/kg/day CBC with differential for leukopenia (WBC >3,000/μL threshold) and annual TPMT/NUDT15 genotyping; monthly hydroxychloroquine (HCQ) 200–400 mg/day CBC and annual ophthalmology baseline screening; quarterly disease activity index scoring with physician global assessment; and DXA bone density scan at baseline and every 2 years during corticosteroid therapy with calcium/vitamin D supplementation tracking.',
  },
  {
    icon: Shield,
    title: 'Infliximab Infusion Scheduling & TB/Hepatitis Screening',
    description: 'Infliximab 5 mg/kg IV infusion series scheduling for refractory pulmonary and extrapulmonary sarcoidosis — induction at Weeks 0, 2, and 6 followed by every-8-week maintenance; mandatory pre-infliximab QuantiFERON-TB Gold (QFT-Plus) tuberculosis screening with chest X-ray and IGRA interpretation, 9-month isoniazid prophylaxis initiation for latent TB before first infliximab dose; hepatitis B surface antigen, hepatitis B core antibody, and hepatitis B surface antibody panel before initiation with antiviral prophylaxis (entecavir or tenofovir) for HBsAg-positive patients; CBC, CMP, and CRP before each infusion to assess infusion eligibility and disease response; biannual chest X-ray during infliximab maintenance for opportunistic infection screening; annual skin cancer screening and annual influenza and pneumococcal vaccination documentation; REMS monitoring for infusion reactions (pre-medication with acetaminophen and antihistamine) and post-infusion 1-hour observation; and quarterly ACE level and CRP trending to correlate with infliximab response.',
  },
  {
    icon: BarChart3,
    title: 'Annual PFT/HRCT/Echo & Surveillance Lab Panel',
    description: 'Annual pulmonary function testing (PFT) with DLCO, FVC, FEV1, and TLC — tracking ≥10% decline as trigger for treatment escalation per ATS/ERS sarcoidosis guidelines; annual high-resolution chest CT (HRCT) with Scadding stage documentation (I: bilateral hilar adenopathy, II: BHL + parenchymal infiltrates, III: parenchymal only, IV: fibrosis) and radiologic scoring; annual transthoracic echocardiogram for pulmonary hypertension screening (RVSP >40 mmHg triggers right heart catheterization) and right ventricular function assessment; annual serum ACE level (elevated in 60% of active sarcoidosis, normal range 18–67 U/L), sIL-2R (soluble IL-2 receptor), calcium, and 24-hour urine calcium (hypercalciuria >300 mg/day in 10–15% of patients triggering hydration and dose increase); quarterly CRP and ESR for inflammatory activity; annual complete metabolic panel including LFTs for hepatic sarcoidosis surveillance; annual CBC for hematologic sarcoidosis (cytopenias); and annual 24-hour urine protein for renal sarcoidosis.',
  },
  {
    icon: Heart,
    title: 'Cardiac MRI & Holter Monitoring for Cardiac Sarcoidosis',
    description: 'Cardiac sarcoidosis surveillance and management — annual cardiac MRI with late gadolinium enhancement (LGE) for granulomatous infiltration detection and ejection fraction assessment (EF <50% triggers cardiologist co-management); annual 48-hour Holter monitor for arrhythmia surveillance including complete heart block, ventricular tachycardia, and atrial fibrillation (leading cause of cardiac sarcoidosis mortality); annual 12-lead ECG at clinic visit with interval PR, QRS, and QTc monitoring; annual FDG-PET/CT for active cardiac inflammation assessment and treatment response evaluation; 6-monthly BNP/NT-proBNP monitoring for cardiac sarcoidosis with heart failure symptoms; electrophysiology consultation scheduling for ventricular arrhythmia burden >1,000 PVCs/24 hours; ICD/pacemaker follow-up scheduling for implanted devices in cardiac sarcoidosis; and annual cardiac biomarker panel (troponin I, BNP) for subclinical myocardial injury detection.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual PFT & Baseline Surveillance Labs',
    tasks: 'Schedule annual pulmonary function testing (DLCO, FVC, FEV1, TLC) for all active pulmonary sarcoidosis patients. Obtain annual serum ACE, sIL-2R, calcium, and 24-hour urine calcium panel. Review prednisone taper progress and document steroid-related side-effect monitoring (HbA1c, BP, DXA if due). Verify folic acid supplementation compliance for all MTX patients.',
  },
  {
    phase: 'February',
    title: 'Infliximab Induction Scheduling & TB Screening',
    tasks: 'Initiate QuantiFERON-TB Gold and hepatitis B panel for all patients being considered for infliximab. Schedule isoniazid prophylaxis initiation for latent TB-positive patients (9-month course before Week 0 infliximab). Complete pre-infliximab CBC, CMP, and CRP baseline documentation. Confirm MenACWY/pneumococcal/influenza vaccination status prior to biologic initiation.',
  },
  {
    phase: 'March',
    title: 'Q1 ACE/CRP Trending & Steroid-Sparing Audit',
    tasks: 'Complete Q1 ACE level and CRP trending for all active patients. Audit MTX hepatic function panels (ALT/AST) — escalate FIB-4 index calculation for patients with elevated LFTs or cumulative MTX >1.5 g. Review AZA CBC results for leukopenia (<3,000 WBC). Document HCQ ophthalmology baseline if not obtained within 12 months of initiation.',
  },
  {
    phase: 'April',
    title: 'Annual HRCT Chest & Scadding Stage Documentation',
    tasks: 'Schedule annual high-resolution chest CT for all pulmonary sarcoidosis patients. Document Scadding stage and compare to prior year for disease progression. Refer patients with Stage IV fibrosis or FVC <50% predicted for lung transplant evaluation. Complete annual transthoracic echocardiogram for pulmonary hypertension screening (RVSP measurement).',
  },
  {
    phase: 'May',
    title: 'Cardiac MRI & Holter Monitor Scheduling',
    tasks: 'Schedule annual cardiac MRI with late gadolinium enhancement for all cardiac sarcoidosis patients. Arrange 48-hour Holter monitor for arrhythmia surveillance. Review 12-lead ECG PR/QRS/QTc intervals at annual clinic visit. Refer patients with EF <50% on cardiac MRI to cardiology/electrophysiology co-management.',
  },
  {
    phase: 'June',
    title: 'Q2 Infliximab Maintenance Audit & Response Assessment',
    tasks: 'Review Q2 infliximab 8-weekly maintenance dosing compliance and pre-infusion eligibility checks (CBC, CMP, CRP). Assess ACE level and HRCT response to infliximab at 6 months. Document biannual chest X-ray for opportunistic infection screening during infliximab maintenance. Audit skin cancer screening completion for all biologic-treated patients.',
  },
  {
    phase: 'July',
    title: 'Ophthalmology Slit-Lamp & HCQ Screening',
    tasks: 'Schedule annual ophthalmology slit-lamp examinations for all sarcoidosis patients with ocular involvement (uveitis, optic neuritis). Complete annual HCQ retinal toxicity screening for all hydroxychloroquine patients per AAO guidelines (10-2 visual field + SD-OCT). Document ocular sarcoidosis flare activity and topical/systemic steroid response. Coordinate uveitis subspecialist referral for steroid-refractory cases.',
  },
  {
    phase: 'August',
    title: 'DXA Bone Density & Osteoporosis Management',
    tasks: 'Complete biennial DXA bone mineral density scan for all patients on chronic corticosteroid therapy (>3 months). Initiate bisphosphonate therapy (alendronate/risedronate) for T-score ≤ -2.5 or prior fragility fracture. Verify calcium (1,200 mg/day) and vitamin D (800–1,000 IU/day) supplementation compliance. Document FRAX 10-year fracture risk calculation.',
  },
  {
    phase: 'September',
    title: 'Q3 Lab Panel & Renal/Hepatic Sarcoidosis Audit',
    tasks: 'Complete Q3 ACE/CRP/ESR inflammatory panel. Review annual CMP for hepatic sarcoidosis (elevated ALP/GGT pattern) and renal sarcoidosis (creatinine, urinalysis with 24-hour urine protein). Audit 24-hour urine calcium for hypercalciuria (>300 mg/day) — adjust prednisone dose and hydration accordingly. Document hematologic sarcoidosis CBC findings (cytopenias).',
  },
  {
    phase: 'October',
    title: 'FDG-PET/CT & Cardiac Biomarker Review',
    tasks: 'Schedule annual FDG-PET/CT for cardiac sarcoidosis patients to assess active inflammation and infliximab/prednisone treatment response. Review 6-monthly BNP/NT-proBNP trends for cardiac sarcoidosis with heart failure symptoms. Complete annual troponin I and BNP panel for subclinical myocardial injury detection. Coordinate ICD/pacemaker device clinic follow-up for cardiac sarcoidosis patients with implanted devices.',
  },
  {
    phase: 'November',
    title: 'Annual Vaccination & Infection Prophylaxis Review',
    tasks: 'Complete annual influenza vaccination documentation for all immunosuppressed sarcoidosis patients. Verify pneumococcal PCV20 and PPSV23 vaccination sequence. Review hepatitis B prophylaxis compliance for HBsAg-positive infliximab patients (entecavir/tenofovir). Confirm shingles (recombinant zoster vaccine, RZV) completion for patients ≥50 on immunosuppression. Document COVID-19 booster status.',
  },
  {
    phase: 'December',
    title: 'Annual Program Review & Treatment Plan Update',
    tasks: 'Compile annual sarcoidosis center outcomes report — PFT stability rates, HRCT Scadding stage distribution, cardiac sarcoidosis EF trends, steroid-sparing agent compliance, and infliximab response rates. Update treatment plans for next year: prednisone taper targets, MTX/AZA/HCQ dose adjustments, infliximab continuation vs. discontinuation decisions. Schedule Q1 PFT and labs for all active patients.',
  },
]

const kpis = [
  { metric: '≥70%', label: 'Pulmonary Function Stability (FVC decline <10%/year)' },
  { metric: '<10 mg/day', label: 'Prednisone Maintenance Target (steroid-sparing success)' },
  { metric: '100%', label: 'Pre-Infliximab TB/Hepatitis B Screening Completion' },
  { metric: 'Annual', label: 'Cardiac MRI & Holter for Cardiac Sarcoidosis' },
  { metric: '≥85%', label: 'Annual Ophthalmology Slit-Lamp Exam Completion' },
  { metric: 'Quarterly', label: 'ACE/CRP/24h Urine Calcium Trending' },
]

const testimonial = {
  quote: 'Sarcoidosis center management demands simultaneous coordination of prednisone taper protocols, monthly MTX/AZA CBCs, infliximab infusion series with mandatory TB screening, annual PFT/HRCT/echo surveillance, quarterly ACE and 24-hour urine calcium trending, ophthalmology slit-lamp scheduling, and cardiac MRI/Holter monitoring for cardiac sarcoidosis — all for a heterogeneous patient population with multiorgan disease. Momenties consolidated every deadline into a single calendar. Our center achieved 73% steroid-sparing success and zero missed pre-infliximab TB screening across 200+ patients.',
  author: 'Dr. D. Moller',
  role: 'Sarcoidosis Research Program',
}

export default function SarcoidosisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Sarcoidosis Treatment Center"
        title="Sarcoidosis Center Calendar Management"
        subtitle="AI-powered scheduling for sarcoidosis centers coordinating prednisone taper protocols, methotrexate/azathioprine steroid-sparing monitoring, infliximab infusion series, annual PFT/chest CT surveillance, ophthalmology slit-lamp exams, and cardiac MRI for cardiac sarcoidosis."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Sarcoidosis Center Compliance Lifecycle
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
              The Sarcoidosis Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every prednisone taper checkpoint, infliximab infusion, PFT/HRCT deadline, cardiac MRI, and ophthalmology exam — sequenced across 12 months.
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
              The 6 KPIs That Define Sarcoidosis Program Excellence
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
        headline="Ready to Achieve ≥70% Pulmonary Stability Across Your Sarcoidosis Population?"
        subtext="Join sarcoidosis centers using Momenties to automate every prednisone taper checkpoint, infliximab infusion, PFT/HRCT deadline, and cardiac surveillance interval. Free to start."
      />
    </main>
  )
}
