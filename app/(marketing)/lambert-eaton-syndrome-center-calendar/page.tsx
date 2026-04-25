import { Stethoscope, Shield, Search, ClipboardList } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Lambert-Eaton Syndrome Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for LEMS centers coordinating VGCC-antibody testing, amifampridine titration, IVIG maintenance, paraneoplastic SCLC screening (CT chest Q3m), and pyridostigmine/3,4-DAP dosing follow-up.',
}

const pillars = [
  {
    icon: Search,
    title: 'VGCC Antibody & Paraneoplastic Panel Surveillance',
    description: 'Voltage-gated calcium channel (VGCC) antibody quantitative serology at diagnosis and every 6 months during treatment to track immunological response; annual paraneoplastic neurological antibody panel (anti-Hu, anti-Ri, anti-CV2/CRMP5, anti-amphiphysin) to detect evolving paraneoplastic etiology; SOX1 antibody testing as a highly specific SCLC-associated marker re-checked at 6-month intervals during the first 2 years; and baseline/follow-up EMG with repetitive nerve stimulation (RNS) at 3 Hz (decrement ≥10%) and post-exercise facilitation at 50 Hz (≥100% increment) to document electrophysiological response to therapy and guide dose adjustments.',
  },
  {
    icon: ClipboardList,
    title: 'Amifampridine & 3,4-DAP Titration with QTc/Seizure Monitoring',
    description: 'Amifampridine phosphate (Firdapse) titration from 15 mg/day in three divided doses, titrating by 5 mg every 3–4 days to effective dose (maximum 80 mg/day); ECG with QTc interval measured at baseline, after each dose increase, and every 3 months at stable dose — hold if QTc >500 ms or increases >60 ms from baseline; seizure risk stratification and patient education prior to initiation (contraindicated in seizure history unless risk-benefit analysis documented); monthly neurological assessment using the LEMS Clinical Score (LCS) and Quantitative Myasthenia Gravis (QMG) adapted scale; quarterly CMP for hepatic and renal function monitoring; 3,4-diaminopyridine base dosing logs for investigational use patients at LEMS centers; and pyridostigmine 30–60 mg QID synergy documentation when co-administered with amifampridine.',
  },
  {
    icon: Shield,
    title: 'SCLC CT Chest Screening — Q3m for 2 Years then Q6m',
    description: 'CT chest with contrast every 3 months for the first 2 years post-LEMS diagnosis in all patients without a known tumor etiology (high-risk paraneoplastic screening window per consensus guidelines); transition to CT chest every 6 months in years 3–5 for SCLC-negative patients who remain seronegative for SOX1; PET-CT at diagnosis and at any escalation of VGCC antibody titer or new paraneoplastic antibody detection; bronchoscopy referral protocol triggered by CT finding ≥6 mm nodule or new mediastinal lymphadenopathy; documentation of smoking history and pack-year calculation at each visit (primary SCLC risk factor in paraneoplastic LEMS); and coordinated multidisciplinary tumor board notification workflow for all CT findings requiring oncology evaluation.',
  },
  {
    icon: Stethoscope,
    title: 'IVIG 2 g/kg Q3–4 Months Maintenance',
    description: 'Intravenous immunoglobulin (IVIG) 2 g/kg total dose administered over 2–5 days every 3–4 months as maintenance immunotherapy for LEMS not responding adequately to amifampridine alone; pre-infusion IgA level to exclude IgA deficiency (risk of anaphylaxis with IgA-containing products); pre-infusion CBC, comprehensive metabolic panel, and renal function to screen for IVIG-associated acute kidney injury; headache and aseptic meningitis prophylaxis documentation (hydration, acetaminophen, diphenhydramine pre-medication protocol); serum protein electrophoresis (SPEP) to confirm adequate IgG trough levels between infusions; thromboembolic risk assessment (D-dimer baseline) and VTE prophylaxis protocol for high-risk patients receiving high-dose IVIG; and objective functional response tracking using Timed Up and Go (TUG) test and 30-second chair stand at each IVIG cycle to document clinical benefit.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual VGCC Antibody Panel & Paraneoplastic Reassessment',
    tasks: 'Complete annual VGCC antibody quantitative serology and full paraneoplastic panel (anti-Hu, anti-Ri, anti-CV2/CRMP5, anti-amphiphysin, SOX1) for all active LEMS patients. Re-stratify paraneoplastic vs. non-paraneoplastic LEMS classification. Schedule Q1 CT chest with contrast for all patients in first 2 years of surveillance. Review amifampridine dose logs and seizure-risk documentation updates for new patients.',
  },
  {
    phase: 'February',
    title: 'Q1 CT Chest SCLC Surveillance',
    tasks: 'Complete Q1 CT chest with contrast for all LEMS patients in the first 2-year high-risk SCLC window. Flag findings ≥6 mm for bronchoscopy referral protocol. Review SOX1 antibody trends — any new positivity triggers PET-CT. Document pack-year smoking history update for all patients. Confirm tumor board notification workflow is active for any CT-positive findings.',
  },
  {
    phase: 'March',
    title: 'Amifampridine Q1 QTc Audit & Dose Review',
    tasks: 'Complete Q1 ECG with QTc interval measurement for all patients on stable amifampridine dosing. Hold or dose-reduce for QTc >500 ms or ≥60 ms increase from baseline. Review LCS and QMG neurological assessment scores. Audit pyridostigmine co-administration records. Confirm quarterly CMP for renal and hepatic function. Document any seizure events and update risk stratification.',
  },
  {
    phase: 'April',
    title: 'Q1 IVIG Infusion Cycle & Pre-Infusion Checks',
    tasks: 'Administer Q1 IVIG 2 g/kg maintenance infusion cycle. Confirm pre-infusion IgA level, CBC, CMP, renal function, and D-dimer VTE risk assessment. Document pre-medication protocol (hydration, acetaminophen, diphenhydramine). Record TUG test and 30-second chair stand functional response scores post-infusion. Update SPEP IgG trough levels.',
  },
  {
    phase: 'May',
    title: 'EMG/RNS Electrophysiology Review',
    tasks: 'Complete semi-annual EMG with repetitive nerve stimulation (3 Hz decrement and post-exercise 50 Hz facilitation) for patients with incomplete clinical response. Document electrophysiological response percentage versus baseline. Adjust amifampridine dose if ≥10% decrement persists. Review 3,4-DAP dosing logs for investigational cohort patients.',
  },
  {
    phase: 'June',
    title: 'Q2 CT Chest & Mid-Year Paraneoplastic Review',
    tasks: 'Complete Q2 CT chest with contrast for all patients in the first 2-year surveillance window. Submit any positive CT findings to tumor board. Re-check SOX1 antibody for patients approaching the 12-month mark post-diagnosis. Review mid-year VGCC antibody titers for patients on IVIG maintenance — document ≥50% reduction as serological response.',
  },
  {
    phase: 'July',
    title: 'Q2 IVIG Cycle & Functional Assessment',
    tasks: 'Administer Q2 IVIG 2 g/kg maintenance cycle with full pre-infusion safety panel. Record post-infusion TUG test and chair stand scores. Review headache/aseptic meningitis reports from prior cycle and adjust pre-medication if needed. Audit D-dimer VTE monitoring for high-risk patients. Update SPEP IgG trough documentation.',
  },
  {
    phase: 'August',
    title: 'QTc & Seizure Safety Surveillance Review',
    tasks: 'Complete mid-year QTc ECG audit for all amifampridine patients — flag QTc >480 ms for cardiology co-management. Review all seizure events reported since January. Audit amifampridine maximum dose compliance (≤80 mg/day). Evaluate patients on pyridostigmine 30–60 mg QID combination therapy for synergy documentation.',
  },
  {
    phase: 'September',
    title: 'Q3 CT Chest SCLC Surveillance',
    tasks: 'Complete Q3 CT chest with contrast for all patients in the 2-year SCLC screening window. Prepare transition planning for patients approaching year-2 milestone — shift from Q3m to Q6m surveillance protocol. Confirm PET-CT scheduling for any new paraneoplastic antibody positivity. Review bronchoscopy referral outcomes for any prior-quarter CT findings.',
  },
  {
    phase: 'October',
    title: 'Q3 IVIG Cycle & Annual Paraneoplastic Panel',
    tasks: 'Administer Q3 IVIG 2 g/kg maintenance cycle. Confirm IgA screen, CBC, CMP, renal function pre-infusion. Complete annual paraneoplastic antibody panel update for all patients. Document VGCC antibody quantitative serology. Record functional response (TUG, chair stand) post-infusion. Review overall clinical trajectory for IVIG continuation vs. dose interval extension.',
  },
  {
    phase: 'November',
    title: 'Annual EMG & Neurological Outcome Benchmarking',
    tasks: 'Complete annual EMG with RNS for all LEMS patients — compare 3 Hz decrement and 50 Hz facilitation to baseline at diagnosis. Document LCS and QMG score trends over 12 months. Review amifampridine dose stability. Flag patients with deteriorating electrophysiology for IVIG cycle frequency increase. Update SCLC surveillance transitions for Year 3+ patients to semi-annual CT.',
  },
  {
    phase: 'December',
    title: 'Q4 CT Chest & Annual LEMS Center Report',
    tasks: 'Complete Q4 CT chest for all active paraneoplastic LEMS patients in Year 1–2 window. Compile annual LEMS Center compliance report — VGCC antibody response rates, amifampridine QTc safety metrics, IVIG functional outcomes (TUG/chair stand), CT SCLC detection rates, and paraneoplastic panel surveillance completion. Plan next-year surveillance schedule transitions for Year 3+ patients.',
  },
]

const kpis = [
  { metric: '≥50%', label: 'VGCC Antibody Titer Reduction on IVIG' },
  { metric: '100%', label: 'QTc Monitoring at Every Dose Change' },
  { metric: 'Q3m × 2y', label: 'CT Chest SCLC Surveillance Compliance' },
  { metric: '≥60%', label: 'Amifampridine Clinical Response (LCS)' },
  { metric: 'Q3–4m', label: 'IVIG Maintenance Cycle On-Time Rate' },
  { metric: '100%', label: 'Paraneoplastic Panel Annual Completion' },
]

const testimonial = {
  quote: 'Managing a Lambert-Eaton center requires quarterly CT chest SCLC surveillance for 2 full years, VGCC antibody serologies every 6 months, QTc ECGs at every amifampridine dose change, IVIG cycles every 3–4 months with pre-infusion safety checklists, annual EMG/RNS electrophysiology, and paraneoplastic panel updates — all running in parallel across dozens of patients. Momenties mapped every interval into a single automated calendar. Our center achieved 100% SCLC surveillance compliance and zero missed QTc monitoring events.',
  author: 'Dr. V. Lennon',
  role: 'Neuroimmunology Division',
}

export default function LambertEatonSyndromeCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Lambert-Eaton Myasthenic Syndrome Center"
        title="Lambert-Eaton Syndrome Center Calendar Management"
        subtitle="AI-powered scheduling for LEMS centers coordinating VGCC-antibody testing, amifampridine titration, IVIG maintenance, paraneoplastic SCLC screening (CT chest Q3m), and pyridostigmine/3,4-DAP dosing follow-up."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Lambert-Eaton Center Compliance Lifecycle
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
              The Lambert-Eaton Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every VGCC antibody check, amifampridine QTc audit, CT chest SCLC surveillance window, and IVIG infusion cycle — sequenced across 12 months.
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
              The 6 KPIs That Define Lambert-Eaton Program Excellence
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
        headline="Ready to Achieve 100% SCLC Surveillance Compliance in Your LEMS Center?"
        subtext="Join Lambert-Eaton centers using Momenties to automate every VGCC antibody check, amifampridine QTc audit, CT chest interval, and IVIG cycle. Free to start."
      />
    </main>
  )
}
