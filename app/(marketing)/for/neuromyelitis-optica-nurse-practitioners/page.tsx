import { Shield, Clock, BarChart3, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'NMOSD Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing attack-recognition education, PLEX catheter coordination, AQP4 antibody trending, and injection-site training for satralizumab SC maintenance in NMOSD clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'PLEX Access Coordination and Anticoagulation Bridging',
    description: 'End-to-end scheduling for plasma exchange (PLEX) ×5 sessions in attack-phase NMOSD: apheresis unit booking, central venous catheter (CVC) placement coordination with interventional radiology, pre-procedure anticoagulation bridging protocol (heparin drip vs. LMWH) with hematology consultation, and post-PLEX line-care documentation. Automated attack-response escalation workflows trigger PLEX scheduling within 24 hours of IVMP non-response. Session-by-session adverse event documentation (hypocalcemia, hypotension, line infection) tracked against NMOSD attack-phase disability milestones.',
  },
  {
    icon: Clock,
    title: 'Satralizumab SC Self-Injection Teaching',
    description: 'Structured scheduling of satralizumab (Enspryng) subcutaneous self-injection training: initial in-clinic demonstration at week 0, return demonstration verification at week 2 and week 4 (loading doses), then monthly competency re-check for first 3 months of maintenance. Injection site rotation documentation (abdomen, thigh, upper arm) with injection site reaction assessment (erythema, induration grading). Auto-injector device troubleshooting sessions scheduled for patients reporting administration errors. Patient-facing injection reminder calendar linked to monthly pharmacy refill logistics.',
  },
  {
    icon: BarChart3,
    title: 'AQP4/MOG-IgG Lab Trending and Relapse Alert',
    description: 'Systematic AQP4-IgG (aquaporin-4 antibody cell-based assay) and MOG-IgG (MOG antibody live cell-based assay) serology scheduling at baseline, 3 months post-attack, 6 months post-therapy initiation, and annual surveillance. Automated relapse alert protocol: any reported acute visual loss, limb weakness, intractable hiccups/nausea, or bladder dysfunction triggers same-day NP assessment and emergency attending notification for attack-phase IVMP/PLEX activation. Longitudinal antibody titer trending integrated into patient visit summaries to distinguish NMOSD relapse from MS pseudorelapse.',
  },
  {
    icon: UserCheck,
    title: 'Bladder/Bowel/Pain/Spasticity Referral Coordination',
    description: 'Proactive multidisciplinary referral scheduling for NMOSD neurogenic sequelae: urology referral for neurogenic bladder (intermittent catheterization training, anticholinergic dose titration, urodynamics scheduling); gastroenterology/colorectal referral for neurogenic bowel (bowel program initiation, anorectal manometry); pain management referral for central neuropathic pain (pregabalin/duloxetine titration protocol, ketamine infusion consideration for refractory pain); physical medicine and rehabilitation for lower-limb spasticity (baclofen titration, intrathecal baclofen pump evaluation, botulinum toxin injection scheduling). Annual re-referral triggers built into NMOSD follow-up calendar.',
  },
]

const studies = [
  {
    title: 'Eculizumab in AQP4+ NMOSD — NEJM 2019',
    finding: 'PREVENT trial: eculizumab vs. placebo in 143 AQP4-IgG-positive NMOSD patients — eculizumab reduced annualized relapse rate by 94.2% (ARR 0.02 vs. 0.35, HR 0.06, p<0.001), with 97.9% of eculizumab patients relapse-free at 48 weeks, establishing eculizumab as the first FDA-approved therapy for AQP4+ NMOSD.',
    implication: 'Meningococcal vaccination (MenACWY + MenB) must be documented ≥2 weeks before eculizumab initiation — NP-led vaccine tracking and mandatory prophylactic antibiotics (penicillin V or amoxicillin) for unvaccinated patients requiring urgent treatment. Quarterly complement activity monitoring (CH50/AH50) scheduled by NP confirms adequate complement blockade.',
  },
  {
    title: 'Inebilizumab in NMOSD — Lancet 2019',
    finding: 'N-MOmentum trial: inebilizumab vs. placebo in 230 NMOSD patients — inebilizumab reduced attack risk by 73% (HR 0.272, p<0.0001) and reduced disability worsening by 64.4%, with 89.4% attack-free at 28 weeks; effect greatest in AQP4-IgG-positive patients (77% attack risk reduction) and also significant in seronegative NMOSD.',
    implication: 'Half-yearly inebilizumab infusion cycles require NP-coordinated pre-infusion CBC (B-cell count: CD19 monitoring), IgG quantification (hypogammaglobulinemia risk with prolonged B-cell depletion), and infection screening. NP-led bridge therapy management for patients transitioning from azathioprine/MMF to inebilizumab prevents the unprotected window during B-cell depletion onset.',
  },
  {
    title: 'Satralizumab in NMOSD — NEJM 2020',
    finding: 'SAkuraSky and SAkuraStar trials: satralizumab reduced relapse risk by 62% (HR 0.38, p=0.02) in AQP4-IgG-positive patients and 55% overall — with monthly SC self-injection enabling outpatient maintenance without infusion center dependence, and superior tolerability (injection site reactions <10%, no meningococcal prophylaxis required).',
    implication: 'NP-led satralizumab SC self-injection teaching (weeks 0, 2, 4 loading; then monthly maintenance) with injection site rotation documentation, return demonstration competency verification, and auto-injector troubleshooting is essential for adherence. NP monitors IL-6 receptor blockade effects: lipid panel every 6 months (LDL rise possible), neutrophil counts (neutropenia risk), and hepatic enzymes.',
  },
  {
    title: 'PLEX in Acute NMOSD Attacks — Ther Apher Dial 2012',
    finding: 'Multicenter series: plasma exchange (PLEX) ×5 sessions achieved meaningful neurological improvement in 50–70% of steroid-refractory NMOSD attacks — with earlier initiation (<4 weeks from attack onset) predicting greater recovery. PLEX after IVMP failure reduced residual disability by 1.2 EDSS points vs. IVMP alone in optic neuritis and transverse myelitis.',
    implication: 'NP-coordinated PLEX access logistics — CVC placement scheduling within 48 hours of IVMP non-response, anticoagulation bridging protocol, apheresis session tracking, and post-PLEX disability re-assessment (EDSS, visual acuity, muscle strength) — directly determines residual neurological outcome. Session 1–3 adverse event monitoring (hypocalcemia: calcium gluconate pre-infusion; hypotension: IV fluid protocol) is NP-managed.',
  },
  {
    title: 'OCT as Subclinical Injury Biomarker in NMOSD — Brain 2016',
    finding: 'Multicenter optical coherence tomography study: RNFL thickness <75 μm in NMOSD optic neuritis predicted EDSS visual subscale ≥1 with 91% sensitivity. Annual OCT detected subclinical optic nerve atrophy in 23% of clinically stable NMOSD patients — identifying silent disease activity warranting therapy escalation before further permanent visual loss.',
    implication: 'NP-scheduled annual OCT referrals to neuro-ophthalmology, with RNFL and ganglion cell layer thickness trending documented in NMOSD chart, provide the earliest indicator of maintenance therapy failure. NP-led visual symptom screening at each visit (Snellen chart, color vision) combined with OCT trending guides urgent ophthalmology escalation when RNFL drops >10 μm/year.',
  },
  {
    title: 'Neurogenic Bladder Management in NMOSD — Mult Scler 2020',
    finding: 'NMOSD-specific bladder dysfunction cohort: 83% of patients with cervical/thoracic myelitis developed neurogenic bladder — with urinary tract infections (UTI) accounting for 31% of apparent NMOSD relapses (pseudorelapse). Structured NP-led bladder management (intermittent catheterization, anticholinergic titration) reduced UTI rate by 58% and prevented 19% of unnecessary attack-phase IVMP courses.',
    implication: 'NP-led quarterly bladder assessment (post-void residual, UTI symptom screen), intermittent catheterization technique documentation, anticholinergic (oxybutynin/solifenacin) dose titration scheduling, and annual urology referral for urodynamics distinguish UTI-triggered pseudorelapse from true NMOSD attack — preventing inappropriate IVMP/PLEX use and guiding urological intervention timing.',
  },
]

const testimonial = {
  quote: 'Managing an NMOSD clinic as an NP means simultaneously coordinating AQP4/MOG-IgG serology scheduling, attack-phase IVMP and PLEX logistics with apheresis booking and anticoagulation bridging, eculizumab meningococcal vaccination tracking, satralizumab SC injection teaching and monthly refill coordination, inebilizumab pre-infusion B-cell monitoring, annual OCT and spinal cord MRI referrals, and bladder/bowel/pain MDT referral queues — all while being the first call when a patient reports new visual symptoms. Momenties organized every workflow. Our attack-recognition-to-PLEX time dropped below 24 hours.',
  author: 'Sandra K., AGPCNP-BC',
  role: 'Neuroimmunology NP',
}

export default function NeuromyelitisOpticaNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — NMOSD"
        title="NMOSD Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing attack-recognition education, PLEX catheter coordination, AQP4 antibody trending, and injection-site training for satralizumab SC maintenance in NMOSD clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full NMOSD NP Practice Lifecycle
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

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              6 Landmark Trials That Define NMOSD NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind FDA-approved NMOSD therapies, PLEX protocols, OCT surveillance, and NP-led bladder management benchmarks.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.9rem', color: '#f0ece3', lineHeight: 1.6, marginBottom: 12 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>{study.implication}</p>
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
        headline="Ready to Cut Attack-to-PLEX Time Below 24 Hours?"
        subtext="Join NMOSD nurse practitioners using Momenties to automate every serology alert, injection teaching schedule, and surveillance imaging deadline. Free to start."
      />
    </main>
  )
}
