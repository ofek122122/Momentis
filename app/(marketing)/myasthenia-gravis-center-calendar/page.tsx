import { Stethoscope, ClipboardList, Shield, Calendar } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Myasthenia Gravis Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for MG centers coordinating AChR/MuSK/LRP4 antibody monitoring, pyridostigmine titration, IVIG/PLEX crisis management, thymectomy planning, and efgartigimod/ravulizumab biologic dosing cycles.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'AChR/MuSK Serology and QMG/MG-ADL Scoring',
    description: 'Systematic tracking of AChR (acetylcholine receptor), MuSK (muscle-specific kinase), and LRP4 (low-density lipoprotein receptor-related protein 4) antibody titers at baseline and every 3–6 months to monitor immunological response; Quantitative Myasthenia Gravis (QMG) score and MG-Activities of Daily Living (MG-ADL) scale assessments at each clinic visit to quantify disease severity and functional status; Repetitive nerve stimulation (RNS) and single-fiber EMG (SFEMG) coordination for diagnostic confirmation and therapeutic response tracking; seronegative MG repeat antibody panel scheduling including anti-titin, anti-RyR, and anti-Kv1.4 antibodies for thymoma-associated surveillance; and CT chest annual surveillance scheduling for thymoma screening in all AChR-positive patients.',
  },
  {
    icon: ClipboardList,
    title: 'Pyridostigmine Dose Optimization and Cholinergic Toxicity Monitoring',
    description: 'Pyridostigmine bromide (Mestinon) titration scheduling from 30 mg every 6 hours to maximum 120 mg every 3 hours based on QMG and MG-ADL response; cholinergic toxicity surveillance at each dose escalation — DUMBBELS symptom checklist (diarrhea, urination, miosis, bradycardia, bronchospasm, emesis, lacrimation, salivation) with dose reduction protocols when muscarinic side effects exceed Grade 2 CTCAE; pyridostigmine time-to-peak effect documentation (30–60 minutes post-dose) and functional diary review for dose timing optimization; edrophonium (Tensilon) test scheduling for acute diagnostic assessment; and immunosuppressant co-management tracking — prednisone taper schedules, azathioprine CBC/LFT monthly monitoring, mycophenolate mofetil (MMF) biweekly then monthly labs, and cyclosporine/tacrolimus quarterly trough levels with renal function panels.',
  },
  {
    icon: Shield,
    title: 'Efgartigimod IV Q-Week Cycles / Ravulizumab Q8w Infusions',
    description: 'Efgartigimod alfa (Vyvgart) IV infusion cycle scheduling — 10 mg/kg IV once weekly for 4 consecutive weeks, repeat cycle based on MG-ADL response with ≥2-point improvement threshold; IgG level monitoring before each cycle initiation (hold if total IgG <4 g/L); ravulizumab (Ultomiris) anti-C5 complement inhibitor scheduling for refractory generalized MG — mandatory meningococcal MenACWY and MenB vaccination ≥14 days before first infusion per FDA REMS, then 3,000–3,600 mg IV loading followed by Q8-week maintenance; efgartigimod subcutaneous (Vyvgart Hytrulo) weekly self-injection adherence tracking for eligible stable patients; rozanolixizumab (Rystiggo) IV cycle documentation (10 mg/kg weekly × 6 weeks); pre-infusion vital signs, weight, and IgG/C5 monitoring across all FcRn antagonist and complement inhibitor classes; and treatment-emergent adverse event reporting per FDA REMS and clinical trial databases.',
  },
  {
    icon: Calendar,
    title: 'Thymectomy Surgical Referral and Post-Op Immunosuppression Bridging',
    description: 'Thymectomy eligibility screening scheduling for AChR-positive generalized MG patients aged 18–65 per MGTX trial criteria — pre-surgical QMG and MG-ADL baseline documentation, PFT (pulmonary function testing) with FVC and DLCO, and cardiothoracic surgery multidisciplinary referral coordination; pre-operative IVIG (2 g/kg over 2–5 days) or PLEX (5–7 exchanges over 10–14 days) crisis prevention bridging for patients with pre-operative QMG >13 or bulbar/respiratory involvement; post-thymectomy immunosuppression bridging — prednisone taper timeline, azathioprine or MMF continuation scheduling, and monthly CBC/LFT monitoring during dose adjustment period; post-op pulmonary function surveillance at 3 months, 6 months, and annually; and 3-year post-thymectomy outcome assessment per MGTX endpoint criteria (minimal manifestation status, prednisone dose reduction ≥50%, sustained remission documentation).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Antibody Panels and QMG Baseline Assessment',
    tasks: 'Complete annual AChR, MuSK, and LRP4 antibody quantitative titers for all active MG patients. Document baseline QMG and MG-ADL scores to establish year-start severity benchmarks. Schedule CT chest surveillance for all AChR-positive patients to screen for thymoma. Audit pyridostigmine dose logs and identify patients approaching cholinergic threshold (>480 mg/day). Review complement inhibitor REMS vaccination compliance — ravulizumab patients require confirmed MenACWY and MenB current status.',
  },
  {
    phase: 'February',
    title: 'Efgartigimod Cycle 1 Planning and IgG Baseline',
    tasks: 'Schedule Q1 efgartigimod IV cycle initiation for eligible patients with persistent MG-ADL ≥5 despite immunosuppression. Obtain pre-cycle total IgG levels (hold if <4 g/L). Coordinate 4-week once-weekly infusion calendar. Audit azathioprine and MMF monthly CBC/LFT labs — ensure no patients are overdue. Review prednisone taper schedules for patients on long-term steroid maintenance and identify candidates for steroid-sparing transition to biologic therapy.',
  },
  {
    phase: 'March',
    title: 'Q1 QMG/MG-ADL Response Assessment and Thymectomy Referrals',
    tasks: 'Complete Q1 QMG and MG-ADL scoring for all active patients on Disease Modifying Therapy. Assess efgartigimod Cycle 1 responders (≥2-point MG-ADL improvement) — document and plan Cycle 2 timing. Initiate thymectomy surgical referrals for newly diagnosed AChR-positive generalized MG patients aged 18–65 identified since last cycle. Submit Q1 myasthenia crisis hospitalization data to MG patient registry. Review IVIG/PLEX crisis management logs from Q1.',
  },
  {
    phase: 'April',
    title: 'Pyridostigmine Titration Audit and DUMBBELS Review',
    tasks: 'Conduct semi-annual pyridostigmine titration audit — review dose logs for all patients, flag those with ≥480 mg/day, and schedule dose optimization visits. Complete cholinergic toxicity DUMBBELS assessment for high-dose pyridostigmine patients. Review azathioprine/MMF dose adjustment records — confirm biweekly CBC during titration is complete for patients in first 3 months. Update collaborative practice agreements for NPs co-managing pyridostigmine and immunosuppressant prescribing.',
  },
  {
    phase: 'May',
    title: 'Pre-Thymectomy Bridging and Pulmonary Function Scheduling',
    tasks: 'Complete pre-operative IVIG or PLEX bridging coordination for all scheduled thymectomy patients. Document PFT results (FVC, FEV1, DLCO) for surgical clearance. Coordinate cardiothoracic surgery multidisciplinary case conferences. Review ravulizumab Q8-week maintenance schedules — confirm all patients have current meningococcal REMS documentation. Audit rozanolixizumab 6-week cycle compliance for applicable patients.',
  },
  {
    phase: 'June',
    title: 'Mid-Year AChR/MuSK Titer Recheck and Anti-C5 Monitoring',
    tasks: 'Complete mid-year AChR and MuSK antibody recheck for patients with significant disease activity changes. Assess ravulizumab complement inhibitor response — C5 activity assay, total complement (CH50), and LDH levels. Document Q2 MG-ADL scores across all biologic-treated patients. Review post-thymectomy Q1 outcomes (3-month pulmonary function, QMG improvement, immunosuppressant dose reduction progress). Schedule efgartigimod Cycle 2 for eligible re-treatment patients.',
  },
  {
    phase: 'July',
    title: 'Crisis Protocol Drill and IVIG/PLEX Inventory Audit',
    tasks: 'Conduct annual myasthenic crisis protocol education session for center staff and NPs — ventilatory threshold criteria (FVC <15 mL/kg or <1 L), IVIG 2 g/kg vs. PLEX decision algorithm, ICU transfer criteria. Complete IVIG and PLEX resource availability audit. Review all IVIG lot documentation and infusion reaction logs from H1. Identify patients with ≥2 crisis hospitalizations in past 12 months for biologic therapy escalation evaluation.',
  },
  {
    phase: 'August',
    title: 'Post-Thymectomy 6-Month Assessment and Immunosuppression Adjustment',
    tasks: 'Complete 6-month post-thymectomy outcomes assessment — QMG, MG-ADL, prednisone dose, and remission status documentation per MGTX trial criteria. Initiate immunosuppressant de-escalation planning for surgical responders achieving minimal manifestation status. Review azathioprine and MMF long-term tolerability — CBC and LFT trends, dose adjustments. Audit pyridostigmine reduction in post-thymectomy responders.',
  },
  {
    phase: 'September',
    title: 'Q3 Biologic Cycle Audit and REMS Documentation',
    tasks: 'Conduct Q3 efgartigimod, ravulizumab, and rozanolixizumab cycle audit — confirm all scheduled infusion dates are booked, REMS documentation current, and IgG/C5 monitoring labs ordered. Review all MG-ADL trajectories over 9 months. Flag patients with inadequate biologic response (MG-ADL not improving ≥2 points) for multidisciplinary re-evaluation and alternative agent consideration. Submit Q3 crisis hospitalization and treatment data to national MG registry.',
  },
  {
    phase: 'October',
    title: 'Cyclosporine/Tacrolimus Quarterly Trough and Renal Review',
    tasks: 'Complete Q3/Q4 cyclosporine and tacrolimus trough level reviews with renal function panels (creatinine, eGFR, magnesium, potassium). Audit MMF dose compliance and GI tolerability — switch to enteric-coated formulation for patients with persistent GI adverse effects. Complete CT chest review for annual thymoma surveillance in AChR-positive patients. Review titin and RyR antibody status in late-onset AChR-positive MG patients ≥50 years for thymoma risk stratification.',
  },
  {
    phase: 'November',
    title: 'Annual Thymectomy Outcome Review and MGTX Endpoint Documentation',
    tasks: 'Complete annual post-thymectomy outcome documentation per MGTX endpoint criteria — minimal manifestation status, sustained remission (no symptoms, no treatment), and prednisone dose reduction ≥50%. Submit annual thymectomy outcome data to MG Foundation of America registry. Schedule 3-year anniversary MGTX endpoint assessments for eligible cohort. Review 1-year biologic therapy outcomes across efgartigimod, ravulizumab, and rozanolixizumab cohorts.',
  },
  {
    phase: 'December',
    title: 'Year-End QMG Benchmarking and 2025 Protocol Planning',
    tasks: 'Complete annual QMG and MG-ADL benchmarking across full patient population — calculate proportion achieving minimal manifestation status, treatment response rates by antibody subtype and therapeutic class. Update pyridostigmine dosing protocols and cholinergic toxicity thresholds. Review efgartigimod and ravulizumab REMS compliance rates for center quality reporting. Plan Q1 cycle initiations and antibody panel scheduling for the coming year.',
  },
]

const kpis = [
  { metric: '≥70%', label: 'Minimal Manifestation Status at 12 Months (Biologic-Treated MG)' },
  { metric: '<2.5×', label: 'Pyridostigmine Cholinergic Toxicity Threshold (DUMBBELS Score)' },
  { metric: '≥80%', label: 'Thymectomy 3-Year Prednisone Dose Reduction ≥50% (Post-MGTX)' },
  { metric: '100%', label: 'Ravulizumab REMS Meningococcal Vaccine Compliance' },
  { metric: 'Quarterly', label: 'QMG/MG-ADL Scoring Frequency for All Active Patients' },
  { metric: '<24 hrs', label: 'IVIG/PLEX Crisis Protocol Initiation Time from FVC Threshold' },
]

const testimonial = {
  quote: 'Myasthenia gravis center management requires simultaneous tracking of AChR/MuSK/LRP4 antibody titers, monthly pyridostigmine dose logs with cholinergic toxicity surveillance, weekly efgartigimod infusion cycles, every-8-week ravulizumab maintenance with REMS meningococcal documentation, IVIG and PLEX crisis protocols, pre-thymectomy bridging, and 3-year MGTX outcome follow-up. Momenties consolidated every protocol cycle, lab interval, and surgical milestone into one calendar. Our center achieved 74% minimal manifestation status at 12 months in our biologic-treated cohort and 100% REMS compliance across all complement inhibitor patients.',
  author: 'Dr. H. Kaminski',
  role: 'Neuromuscular Division',
}

export default function MyastheniaGravisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Myasthenia Gravis Center"
        title="Myasthenia Gravis Center Calendar Management"
        subtitle="AI-powered scheduling for MG centers coordinating AChR/MuSK/LRP4 antibody monitoring, pyridostigmine titration, IVIG/PLEX crisis management, thymectomy planning, and efgartigimod/ravulizumab biologic dosing cycles."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Myasthenia Gravis Center Compliance Lifecycle
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
              The Myasthenia Gravis Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every antibody titer, pyridostigmine titration checkpoint, biologic infusion cycle, crisis protocol drill, and thymectomy outcome milestone — sequenced across 12 months.
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
              The 6 KPIs That Define Myasthenia Gravis Program Excellence
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
        headline="Ready to Achieve ≥70% Minimal Manifestation Status in Your MG Biologic Cohort?"
        subtext="Join myasthenia gravis centers using Momenties to automate every antibody titer, pyridostigmine log, biologic infusion cycle, REMS compliance check, and thymectomy outcome milestone. Free to start."
      />
    </main>
  )
}
