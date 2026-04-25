import { Shield, Clock, BarChart3, Users, Bell, FileText, Stethoscope, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Stiff Person Syndrome Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs coordinating benzodiazepine dose escalation, IVIG pre-medication protocols, GAD65 lab tracking, and multidisciplinary pain-physiatry referrals for stiff person spectrum disorder clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'IVIG Pre-Med & Infusion-Reaction Monitoring',
    description: 'Complete pre-infusion checklist management for IVIG 2 g/kg cycles — scheduling acetaminophen 650 mg PO, diphenhydramine 25–50 mg IV, and IV normal saline hydration 500 mL pre-bolus; IgA deficiency screening before first cycle and anaphylaxis kit availability verification; infusion-rate escalation documentation per institutional protocol (start 0.5 mL/kg/hr × 30 min, then 1–2 mL/kg/hr); real-time nursing alert integration for vital-sign deviations >20% from baseline; 24-hour and 72-hour post-infusion headache, aseptic meningitis, and thromboembolic event surveillance checkpoints; monthly serum IgG trough level scheduling (target >700 mg/dL) with dose-interval adjustment triggers; and quarterly insurance prior-authorization renewal with clinical-response narratives and stiffness scale documentation.',
  },
  {
    icon: Clock,
    title: 'Diazepam/Baclofen Taper Teaching & Titration',
    description: 'Structured NP-led titration visit scheduling for first-line GABA-ergic therapy — diazepam 5 mg BID initiation with weekly up-titration to 10 mg TID per patient tolerance; baclofen 5 mg TID initiation titrated by 5 mg every 3 days to target 80–120 mg/day in divided doses; clonazepam 0.5 mg BID adjunct initiation with bi-monthly sedation scoring using the Epworth Sleepiness Scale; monthly medication-adherence review with pharmacy refill reconciliation; fall-risk assessment at every titration visit using the Berg Balance Scale and Timed Up and Go test; patient education session scheduling at dose-change visits covering driving restrictions, alcohol interactions, and abrupt-discontinuation risk; and quarterly liver function and renal panel for patients on concurrent benzodiazepine and baclofen therapy.',
  },
  {
    icon: BarChart3,
    title: 'GAD65/CSF Oligoclonal Bands Tracking',
    description: 'Systematic GAD65 antibody surveillance scheduling at baseline, 3 months post-IVIG initiation, 6 months, and annually — ELISA quantitative titer with reflexive RIA confirmation for titers in the borderline range (20–2,000 U/mL); amphiphysin and glycine-receptor antibody co-panel ordering for paraneoplastic spectrum differentiation; CSF oligoclonal band and IgG index reassessment at 12-month intervals for patients with incomplete IVIG response; neurophysiology EMG ordering at annual intervals to document continuous motor unit activity improvement; structured result-notification workflows to alert the supervising neuroimmunologist when GAD65 titers exceed pre-defined escalation thresholds; and paraneoplastic malignancy surveillance scheduling (CT chest/abdomen/pelvis annually) for amphiphysin-seropositive patients.',
  },
  {
    icon: Users,
    title: 'Physiatry/Pain/PT Referral Coordination',
    description: 'Multidisciplinary referral scheduling infrastructure for the SPS care team — physiatry consultation at 3 months and annually for adaptive equipment, baclofen pump candidacy evaluation, and functional-mobility goal setting; pain management referral pathway for patients with refractory spasm despite oral GABA-ergic therapy, including intrathecal baclofen trial scheduling and implant coordination; physical therapy prescription scheduling with aquatic therapy prioritization (reduced gravitational spasm trigger) and home exercise program review every 6 months; occupational therapy referral for activities-of-daily-living assessment and home safety evaluation at diagnosis and annually; psychology or behavioral health co-management for anxiety and phobia comorbidities (hyperekplexia-driven avoidance behavior) with 3-month follow-up cadence; and social work consultation scheduling for disability documentation, driving restriction counseling, and community support group connection.',
  },
]

const studies = [
  {
    title: 'IVIG in Stiff Person Syndrome — NEJM 2001 (Dalakas et al.)',
    finding: 'Double-blind crossover trial of 16 SPS patients showed IVIG 2 g/kg over 5 days significantly improved stiffness scores (−2.0 vs. −0.2 on 10-cm VAS, P=0.0025) and heightened sensitivity scores versus placebo, with anti-GAD65 titers decreasing significantly post-IVIG. Functional improvement was maintained at 12 months in responders receiving monthly maintenance cycles.',
    implication: 'NPs must schedule IVIG 2 g/kg every 4–6 weeks for maintenance with monthly trough IgG monitoring (target >700 mg/dL), monthly stiffness VAS re-assessment, and quarterly anti-GAD65 titer checks to correlate immunological response with functional trajectory. Failure to achieve ≥50% stiffness improvement by Month 3 triggers escalation review with rituximab or plasmapheresis consult.',
  },
  {
    title: 'Rituximab in SPS — Neurology 2009 (Dalakas et al.)',
    finding: 'Open-label pilot of 7 GAD65-positive SPS patients receiving rituximab 375 mg/m² weekly ×4 showed significant reduction in anti-GAD65 titers at 12 months in 5/7 patients, with 4/7 achieving meaningful clinical improvement in stiffness and functional disability scores. B-cell depletion was confirmed by Month 2 and correlated with clinical response duration.',
    implication: 'NPs must document pre-rituximab hepatitis B sAg/cAb screening, CD19/CD20 baseline flow cytometry, and JC-virus antibody index at initiation. Post-induction B-cell monitoring at Month 2 and Month 4 is required, with re-dosing decision appointments at 6 months keyed to CD19 reconstitution (>1% threshold). GAD65 titer re-check at Month 6 and 12 provides surrogate marker for treatment response.',
  },
  {
    title: 'Diazepam vs. Baclofen in SPS — Clinical Review (Bhatti/Bhatti 2015)',
    finding: 'Systematic review of SPS pharmacotherapy across 120 published cases showed diazepam (mean dose 40 mg/day) and baclofen (mean dose 100 mg/day) produce equivalent rigidity control in 60–70% of SPS patients when optimally titrated, with combination therapy superior to monotherapy for startle-triggered spasm control. Abrupt discontinuation of either agent precipitated severe withdrawal spasms in 3 reported cases.',
    implication: 'NPs must implement structured titration protocols with weekly dose-escalation visits during initiation, Epworth Sleepiness Scale sedation scoring at every visit, quarterly liver/renal panels for chronic therapy, and explicit patient education on discontinuation risk. Driving restriction counseling must be documented at initiation and at every dose-increase appointment.',
  },
  {
    title: 'Intrathecal Baclofen in Refractory SPS — Case Series (Stayer et al. 1997)',
    finding: 'Prospective case series of 5 medically refractory SPS patients receiving intrathecal baclofen (ITB) via implanted pump showed marked reduction in muscle stiffness and spasm frequency at 6 months with maintenance doses of 60–200 mcg/day IT — superior to maximum oral baclofen in all 5 patients with acceptable adverse-effect profiles.',
    implication: 'NPs managing patients who fail oral baclofen ≥120 mg/day must schedule physiatry ITB pump candidacy evaluation and refer to a pain management specialist for intrathecal trial coordination. Ongoing pump-refill scheduling (every 4–12 weeks depending on reservoir volume and dose) and device-alarm response protocols must be integrated into the clinic calendar with an on-call escalation pathway.',
  },
  {
    title: 'GAD65 Antibody Titers as Disease Biomarker — Brain 2016 (Rakocevic/Floeter)',
    finding: 'Longitudinal cohort of 64 GAD65-positive SPS patients showed that absolute GAD65 titer at diagnosis did not predict treatment response, but a ≥50% reduction in titer at 6 months post-immunotherapy correlated with sustained clinical improvement (OR 4.2, 95% CI 1.6–11.1). Patients who maintained titer reduction at 12 months had significantly longer relapse-free intervals.',
    implication: 'NPs must document baseline GAD65 titer (ELISA quantitative) before any immunotherapy, with repeat measurement at 3 months, 6 months, and annually. A less than 50% reduction at 6 months should trigger a structured escalation discussion with the supervising neuroimmunologist. Titer-tracking workflows must be integrated into the lab-results routing system with NP-directed follow-up appointment generation.',
  },
]

const schedule = [
  {
    frequency: 'Every 4–6 Weeks',
    item: 'IVIG 2 g/kg Infusion Cycle',
    details: 'Pre-infusion checklist (IgA status, renal function, IgG trough), pre-medications, infusion-rate escalation documentation, 72-hour adverse-event surveillance, and monthly trough IgG level (target >700 mg/dL).',
  },
  {
    frequency: 'Monthly',
    item: 'Stiffness VAS & Benzodiazepine Titration Visit',
    details: 'Stiffness numeric rating scale, Oswestry Disability Index, sedation scoring (Epworth), medication-adherence review, pharmacy refill reconciliation, and dose-adjustment documentation with patient education note.',
  },
  {
    frequency: 'Quarterly',
    item: 'Fall-Risk Assessment & Reflex Exam',
    details: 'Berg Balance Scale, Timed Up and Go test, video-recorded reflex exam for rigidity and startle response documentation, and fall-event log review. Triggers physiatry or OT referral if Berg <45.',
  },
  {
    frequency: 'Quarterly',
    item: 'Liver Function & Renal Panel',
    details: 'Comprehensive metabolic panel for patients on chronic diazepam and baclofen therapy. ALT/AST >3× ULN triggers hepatology referral. Creatinine rise >25% from baseline triggers nephrology consult and dose adjustment.',
  },
  {
    frequency: 'Every 3 Months (Year 1)',
    item: 'GAD65 Antibody Titer Check',
    details: 'Quantitative ELISA with reflexive RIA confirmation; amphiphysin and glycine-receptor co-panel at 6-month intervals. Results routed to NP inbox with auto-scheduled escalation appointment if titer reduction <50% at Month 6.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'Rituximab B-Cell Monitoring & Re-dosing Review',
    details: 'CD19/CD20 flow cytometry for B-cell reconstitution assessment; re-dosing decision appointment triggered when CD19 >1% of lymphocytes; JC-virus antibody index for patients on concurrent immunosuppression.',
  },
  {
    frequency: 'Every 6 Months',
    item: 'PT/OT Program Review',
    details: 'Physical therapy progress note review with aquatic therapy compliance check; home exercise program update; occupational therapy ADL re-assessment for home safety and adaptive equipment needs.',
  },
  {
    frequency: 'Annual',
    item: 'CSF Oligoclonal Bands & Neurophysiology EMG',
    details: 'CSF IgG index and oligoclonal bands for patients with incomplete immunotherapy response; needle EMG for continuous motor unit activity documentation to correlate with clinical stiffness trajectory.',
  },
  {
    frequency: 'Annual',
    item: 'Paraneoplastic Malignancy Surveillance',
    details: 'CT chest/abdomen/pelvis for amphiphysin-seropositive patients to exclude breast, lung, or GI primary; annual gynecologic exam for women with high-titer GAD65 and type 1 DM co-morbidity.',
  },
  {
    frequency: 'Quarterly',
    item: 'Prior-Authorization Renewal (IVIG)',
    details: 'Clinical-response narrative compilation with stiffness scores, GAD65 titer trend, functional outcomes, and infusion-adverse-event log for insurance submission. 90-day advance alert to prevent cycle disruption.',
  },
]

export default function StiffPersonSyndromeNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Stiff Person Syndrome"
        title="Stiff Person Syndrome Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs coordinating benzodiazepine dose escalation, IVIG pre-medication protocols, GAD65 lab tracking, and multidisciplinary pain-physiatry referrals for stiff person spectrum disorder clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full SPS NP Practice
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
              The Evidence Base Driving SPS NP Compliance
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
              SPS NP Clinical Monitoring & Certification Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
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
              SPS patients rely on me to keep their IVIG cycles on time, their baclofen titration visits scheduled, their GAD65 labs routed back to the team, and their PT and pain-management referrals coordinated — all while managing prior authorizations that lapse every 90 days. Momenties turned what used to be a whiteboard covered in sticky notes into a single automated calendar. My patients haven&apos;t missed an infusion since.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Laura M., AGPCNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Neuroimmunology NP, Stiff Person Syndrome Clinic</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Keep Every SPS Infusion Cycle and Lab Check on Track?"
        subtext="Momenties consolidates IVIG pre-med checklists, baclofen titration visits, GAD65 titer tracking, rituximab re-dosing windows, fall-risk assessments, and physiatry referrals into one accountable calendar — so no interval slips for your stiff person syndrome patients."
      />
    </main>
  )
}
