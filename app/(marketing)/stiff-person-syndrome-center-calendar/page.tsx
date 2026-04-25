import { Stethoscope, ClipboardList, Shield, Calendar, Bell, UserCheck, BarChart3, FileText } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Stiff Person Syndrome Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for autoimmune neurology centers managing GAD65-antibody testing, diazepam/baclofen titration, IVIG infusion series, and rituximab treatment cycles — with integrated reflex-exam and fall-risk follow-up cadences.',
}

const pillars = [
  {
    icon: ClipboardList,
    title: 'GAD65/Amphiphysin Antibody Surveillance',
    description: 'Systematic scheduling of GAD65 antibody titer checks (ELISA and RIA methodologies) at baseline, 3 months, 6 months, and annually to monitor immunological activity; amphiphysin, gephyrin, and GABA-A receptor antibody panels for paraneoplastic SPS variant surveillance; CSF oligoclonal band studies and IgG index reassessment at 12-month intervals; quarterly neurophysiology documentation (continuous motor unit activity on EMG) to correlate serological trends with clinical disease burden; and automated alerts for titer thresholds that trigger escalation review by the neuroimmunology attending.',
  },
  {
    icon: Stethoscope,
    title: 'Baclofen/Diazepam/Clonazepam Titration Tracking',
    description: 'Structured titration cadences for first-line GABA-ergic therapy — diazepam 5–10 mg TID slow-titration protocols with weekly dose-escalation checkpoints; baclofen 5 mg TID titrated to 80–120 mg/day in divided doses with monthly functional-assessment visits; clonazepam 0.5–2 mg BID as adjunct with sedation and fall-risk scoring at every visit; tizanidine and dantrolene secondary-agent scheduling for spasm-refractory patients; monthly Oswestry Disability Index and stiffness numeric rating scale documentation; quarterly liver function and renal panel for patients on chronic benzodiazepine and baclofen regimens; and reflex-examination calendaring at 3-month intervals to track rigidity and startle-response progression.',
  },
  {
    icon: Shield,
    title: 'IVIG 2 g/kg Monthly Infusion Series',
    description: 'Full scheduling lifecycle for IVIG 2 g/kg administered over 2–5 consecutive days every 4–6 weeks — pre-infusion IgA level screening, serum protein electrophoresis, and renal function panel; infusion-suite capacity blocking with nursing pre-medication checklists (acetaminophen, diphenhydramine, IV hydration); post-infusion headache and aseptic meningitis surveillance at 24-hour and 72-hour intervals; monthly trough IgG level monitoring with target >700 mg/dL; 3-month Rankin Scale and 10-meter walk test outcomes documentation; quarterly insurance prior-authorization renewal tracking with clinical-response documentation packages; and automated scheduling of catch-up infusions when cycles are delayed more than 7 days.',
  },
  {
    icon: Calendar,
    title: 'Rituximab 375 mg/m² ×4 + Re-dosing Cycles',
    description: 'Rituximab induction scheduling at 375 mg/m² IV weekly ×4 doses with pre-infusion methylprednisolone, acetaminophen, and diphenhydramine checklist; CBC with differential and CD19/CD20 B-cell depletion flow cytometry at baseline, cycle 2, cycle 4, and monthly thereafter until B-cell nadir confirmation; 6-month re-dosing decision appointments keyed to B-cell reconstitution thresholds (CD19 >1% of lymphocytes); hepatitis B surface antigen and core antibody screening before every course with lamivudine prophylaxis scheduling for HBsAg-positive patients; live-vaccine avoidance windows (12 months post-rituximab); quarterly GAD65 titer re-check to assess immunological response; JC-virus antibody index monitoring every 6 months for patients receiving concurrent immunosuppression; and PCP prophylaxis prescription cadence for combination immunotherapy protocols.',
  },
]

const timeline = [
  {
    phase: 'Month 1–2',
    title: 'Baseline Workup & First-Line GABA-ergic Initiation',
    tasks: 'Complete baseline GAD65 (ELISA + RIA), amphiphysin, glycine-receptor, gephyrin, and GABA-A antibody panel. Obtain lumbar puncture for CSF oligoclonal bands and IgG index. Initiate diazepam slow-titration protocol and log first baclofen dose-escalation checkpoint. Schedule pre-IVIG screening (IgA level, renal function, serum protein electrophoresis). Establish fall-risk baseline with Timed Up and Go test and Berg Balance Scale. Input reflex-exam calendar for 3-month intervals.',
  },
  {
    phase: 'Month 3–4',
    title: 'IVIG Induction & Titration Stabilization',
    tasks: 'Administer IVIG 2 g/kg first cycle over 2–5 days. Perform 3-month stiffness rating scale and Oswestry Disability Index reassessment. Complete first quarterly liver function and renal panel for benzodiazepine/baclofen monitoring. Schedule post-infusion 72-hour adverse-event surveillance. Review sedation and fall-risk scoring. Obtain repeat GAD65 titer to establish early immunological trajectory. Log IVIG trough IgG level (target >700 mg/dL).',
  },
  {
    phase: 'Month 5–6',
    title: 'Rituximab Induction Consideration & 6-Month Review',
    tasks: 'Evaluate rituximab candidacy for IVIG-insufficient responders — obtain hepatitis B sAg/cAb, IgG subclasses, CD19/CD20 baseline, and JC-virus antibody index. Administer rituximab induction Weeks 1–4 if indicated. Complete 6-month GAD65 titer, CSF re-analysis if clinically warranted. Conduct 10-meter walk test and video-recorded reflex-exam. Review IVIG prior-authorization renewal with 6-month clinical-response package. Adjust diazepam/baclofen doses at monthly escalation visit.',
  },
  {
    phase: 'Month 7–8',
    title: 'Post-Rituximab B-Cell Monitoring & IVIG Continuation',
    tasks: 'Obtain CD19/CD20 flow cytometry to confirm B-cell depletion nadir post-rituximab cycle 4. Administer IVIG monthly cycle with pre-infusion checklist. Schedule PCP prophylaxis prescription renewal. Monitor JC-virus antibody index for patients on concurrent immunosuppression. Complete quarterly GAD65 panel. Audit benzodiazepine and baclofen compliance with pharmacy refill records. Perform fall-risk re-assessment with Berg Balance Scale.',
  },
  {
    phase: 'Month 9–10',
    title: 'Re-dosing Decision & Functional Outcomes Audit',
    tasks: 'Assess B-cell reconstitution (CD19 threshold >1% of lymphocytes) to schedule rituximab re-dosing at 6 months if reconstitution confirmed. Complete 10-month stiffness NRS and Rankin Scale. Audit IVIG insurance prior-authorization renewal. Schedule annual malignancy screening (CT chest/abdomen/pelvis) for paraneoplastic workup in amphiphysin-positive patients. Review clonazepam adjunct response and dose-adjust if sedation score elevated.',
  },
  {
    phase: 'Month 11–12',
    title: 'Annual Review, Titer Panel & Care-Plan Renewal',
    tasks: 'Complete annual GAD65 and comprehensive autoimmune panel. Obtain annual neurophysiology EMG (continuous motor unit activity). Conduct annual DEXA scan for osteoporosis surveillance in patients on chronic corticosteroids or benzodiazepines. Renew baclofen/diazepam prescription and collaborative-care agreement. Compile annual clinical summary: stiffness trajectory, IVIG response, rituximab B-cell data, fall-risk events. Schedule Year 2 rituximab re-dosing cycle and IVIG series. Submit patient outcomes to academic SPS registry if enrolled.',
  },
]

const kpis = [
  { metric: '≥70%', label: 'Stiffness Score Improvement at 6 Months (IVIG)' },
  { metric: '100%', label: 'Pre-Rituximab Hepatitis B Screening Completion' },
  { metric: 'Monthly', label: 'IVIG Trough IgG Monitoring Cadence' },
  { metric: '≥50%', label: 'GAD65 Titer Reduction at 12 Months' },
  { metric: 'Quarterly', label: 'Fall-Risk & Reflex-Exam Assessment Interval' },
  { metric: '<72 hrs', label: 'Post-Infusion Adverse-Event Surveillance Window' },
]

const testimonial = {
  quote: 'Managing stiff person syndrome at a center level means holding monthly IVIG cycles, quarterly GAD65 titer checks, rituximab induction and re-dosing schedules, baclofen titration visits, reflex-exam cadences, and fall-risk assessments across a fragile patient population — simultaneously. Momenties gave us a single calendar view that surfaced every upcoming infusion, lab check, and re-dosing decision before it became a crisis. Our IVIG prior-authorization lapse rate dropped to zero in the first quarter.',
  author: 'Dr. S. Newsom-Davis',
  role: 'Neuroimmunology Division, Stiff Person Syndrome Center',
}

export default function StiffPersonSyndromeCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Stiff Person Syndrome Center"
        title="Stiff Person Syndrome Center Calendar Management"
        subtitle="AI-powered scheduling for autoimmune neurology centers managing GAD65-antibody testing, diazepam/baclofen titration, IVIG infusion series, and rituximab treatment cycles — with integrated reflex-exam and fall-risk follow-up cadences."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full SPS Center Compliance Lifecycle
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
              The SPS Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every IVIG cycle, rituximab dose, antibody titer check, titration visit, and fall-risk assessment — sequenced across 12 months.
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
              The 6 KPIs That Define SPS Program Excellence
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
        headline="Ready to Eliminate IVIG Scheduling Gaps in Your SPS Center?"
        subtext="Join neuroimmunology centers using Momenties to automate every GAD65 titer, IVIG cycle, rituximab re-dosing window, and fall-risk follow-up — so no interval slips. Free to start."
      />
    </main>
  )
}
