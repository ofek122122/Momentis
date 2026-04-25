import { Stethoscope, Shield, Clock, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'NMOSD Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for NMOSD centers coordinating AQP4/MOG-IgG serology, attack-phase IVMP/PLEX protocols, eculizumab/inebilizumab/satralizumab maintenance dosing, and annual ophthalmology and spinal cord MRI surveillance.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'AQP4/MOG-IgG Serology and Relapse Monitoring',
    description: 'Systematic scheduling of AQP4-IgG (aquaporin-4 antibody) and MOG-IgG (myelin oligodendrocyte glycoprotein antibody) serology at baseline, post-attack, and annual surveillance intervals. Automated relapse alert workflows trigger same-day scheduling for emergency IVMP or PLEX when attack-defining symptoms — acute optic neuritis, transverse myelitis, area postrema syndrome — are reported. Longitudinal antibody titer trending informs maintenance therapy escalation decisions and distinguishes NMOSD from MS and MOGAD.',
  },
  {
    icon: Shield,
    title: 'Attack-Phase IVMP 1 g×5 and PLEX ×5',
    description: 'Coordinated scheduling for acute attack treatment: intravenous methylprednisolone (IVMP) 1 g/day for 5 days with infusion suite booking, nursing availability, and glucose monitoring protocols; plasma exchange (PLEX) ×5 sessions with apheresis unit scheduling, central venous access coordination, and anticoagulation bridging logistics. Post-attack taper and steroid-sparing initiation timelines tracked against disability milestones. Concurrent physical medicine referrals coordinated for bladder, bowel, and spasticity management initiated within the attack admission window.',
  },
  {
    icon: Clock,
    title: 'Eculizumab Q2w / Inebilizumab H-Y / Satralizumab SC Maintenance',
    description: 'Precision dosing calendars for all three FDA-approved NMOSD preventive therapies: eculizumab (Soliris) every-2-week infusion scheduling with meningococcal vaccination confirmation (MenACWY + MenB ≥2 weeks pre-treatment), CBC and complement activity monitoring; inebilizumab (Uplizna) half-yearly (H-Y) infusion cycles with CD19 B-cell depletion monitoring and infection surveillance; satralizumab (Enspryng) subcutaneous injection scheduling at weeks 0, 2, 4, then monthly with injection-site reaction documentation and IL-6 receptor blockade safety monitoring including lipid panel and neutrophil counts.',
  },
  {
    icon: BarChart3,
    title: 'Annual Optic Coherence Tomography and Spinal Cord MRI',
    description: 'Structured annual surveillance imaging coordinated across neuro-ophthalmology and neuroradiology: optical coherence tomography (OCT) with retinal nerve fiber layer (RNFL) and ganglion cell layer (GCL) thickness trending to quantify cumulative optic nerve injury; high-field spinal cord MRI (3T with fat suppression) assessing longitudinally extensive transverse myelitis lesion evolution, cord atrophy, and new T2 lesions indicating subclinical activity. Baseline and annual brain MRI (FLAIR/T2/T1+Gd) scheduled for MS differentiation and area postrema/hypothalamic lesion surveillance.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Surveillance Imaging Launch',
    tasks: 'Schedule annual spinal cord MRI (3T, fat suppression) for all NMOSD patients on maintenance therapy. Initiate annual optic coherence tomography referrals to neuro-ophthalmology. Review AQP4/MOG-IgG antibody titers from prior year. Update eculizumab meningococcal vaccination records and confirm booster eligibility.',
  },
  {
    phase: 'February',
    title: 'Maintenance Therapy Safety Review',
    tasks: 'Complete quarterly eculizumab complement activity monitoring (CH50/AH50) and CBC review. Document inebilizumab cycle 1 infusion completion and CD19 B-cell count (target: <5 cells/μL post-depletion). Review satralizumab lipid panel and neutrophil counts. Confirm all patients on eculizumab have valid meningococcal prophylaxis documentation.',
  },
  {
    phase: 'March',
    title: 'Attack-Response Protocol Drill and Serology',
    tasks: 'Conduct quarterly NMOSD attack-recognition education session for nursing and clinical staff. Review IVMP 1 g×5 rapid-initiation protocol (<24 hours from attack identification). Review PLEX catheter placement logistics and apheresis unit capacity. Submit Q1 AQP4/MOG-IgG serology orders for all seronegative patients under relapse monitoring.',
  },
  {
    phase: 'April',
    title: 'OCT Results Review and Disability Benchmarking',
    tasks: 'Complete neuro-ophthalmology OCT review visits — compare RNFL and GCL thickness vs. baseline and prior year. Document monocular/binocular visual acuity trends. Reassess EDSS (Expanded Disability Status Scale) and timed 25-foot walk. Identify patients with progressive visual loss for treatment escalation MDT discussion.',
  },
  {
    phase: 'May',
    title: 'Inebilizumab Cycle 2 Scheduling',
    tasks: 'Schedule inebilizumab half-yearly cycle 2 infusions (months 5–6 window). Confirm pre-infusion CBC, IgG levels, and infection screen. Document CD19 B-cell repletion rate and relapse-free interval since cycle 1. Review concurrent immunosuppression (azathioprine/MMF) for patients bridging to inebilizumab.',
  },
  {
    phase: 'June',
    title: 'Midyear Quality Audit and Bladder/Bowel Review',
    tasks: 'Complete midyear NMOSD program quality audit — attack rate per patient-year, time to PLEX initiation, maintenance therapy adherence. Coordinate urology and colorectal referrals for neurogenic bladder and bowel management. Review pain and spasticity management for patients with cervical myelitis lesions. Document MDT multidisciplinary review completion rate.',
  },
  {
    phase: 'July',
    title: 'Eculizumab Q2w Cycle Review',
    tasks: 'Audit eculizumab Q2w infusion adherence (target: ≤0 missed infusions — breakthrough attacks risk). Review complement blockade laboratory confirmations. Schedule annual pharmacist-led NMOSD medication reconciliation review. Confirm satralizumab injection-site training has been completed for all self-injecting patients.',
  },
  {
    phase: 'August',
    title: 'Spinal Cord MRI Results and Attack-Free Interval Review',
    tasks: 'Review completed annual spinal cord MRI results with neuroradiology — new T2 lesion detection, cord atrophy measurement. Identify patients with silent radiographic activity for therapy reassessment. Document cumulative lesion burden vs. prior year. Schedule brain MRI for patients with new area postrema syndrome symptoms.',
  },
  {
    phase: 'September',
    title: 'Satralizumab SC Maintenance Reassessment',
    tasks: 'Complete quarterly satralizumab safety review — injection-site reactions, IL-6-related lipid changes, hepatic enzyme monitoring. Reassess injection technique for self-injecting patients. Document relapse-free interval and disability stability on satralizumab. Coordinate auto-injector device training for newly initiated patients.',
  },
  {
    phase: 'October',
    title: 'Attack Emergency Protocol Update',
    tasks: 'Update NMOSD attack protocol (IVMP/PLEX) following annual ECTRIMS/ACTRIMS guideline review. Confirm infusion suite priority scheduling capacity for attack-phase admissions. Review PLEX ×5 anticoagulation bridging protocol with hematology. Document patient attack-recognition education completion and emergency contact protocols.',
  },
  {
    phase: 'November',
    title: 'Inebilizumab Annual Reauthorization and B-cell Review',
    tasks: 'Initiate prior authorization renewals for eculizumab, inebilizumab, and satralizumab. Review CD19 B-cell depletion durability at 12 months. Document relapse rates, EDSS stability, and MRI activity for payer reauthorization submissions. Confirm meningococcal booster timing for eculizumab patients (revaccinate q3–5 years).',
  },
  {
    phase: 'December',
    title: 'Annual Program Report and Surveillance Reset',
    tasks: 'Compile annual NMOSD center report — annualized relapse rate (ARR) per therapy, OCT progression rates, spinal cord MRI lesion burden, time-to-PLEX metrics, therapy adherence. Reset next-year surveillance imaging calendar. Review differential diagnosis workflow for AQP4-seronegative and MOG-IgG-positive cases. Plan MDT composition review for multidisciplinary accreditation.',
  },
]

const kpis = [
  { metric: 'ARR < 0.1', label: 'Annualized Relapse Rate on Maintenance', description: 'Target on eculizumab/inebilizumab per pivotal trial data' },
  { metric: '100%', label: 'Meningococcal Vaccination Before Eculizumab', description: 'MenACWY + MenB ≥2 weeks pre-first dose — mandatory' },
  { metric: '≤24 hrs', label: 'Time to IVMP Initiation from Attack ID', description: 'Attack-phase benchmark for visual/motor recovery outcomes' },
  { metric: 'Annual', label: 'OCT + Spinal Cord MRI Surveillance Rate', description: 'Optic nerve and cord atrophy monitoring every 12 months' },
  { metric: '0', label: 'Missed Eculizumab Q2w Infusions', description: 'No infusion gaps — breakthrough attacks risk on missed doses' },
  { metric: '≥95%', label: 'Maintenance Therapy Adherence Rate', description: 'Across all three approved NMOSD preventive agents' },
]

const testimonial = {
  quote: 'NMOSD center management demands simultaneous coordination of AQP4/MOG-IgG serology scheduling, same-day attack-phase IVMP and PLEX logistics, every-two-week eculizumab infusions with meningococcal vaccination documentation, half-yearly inebilizumab cycles, monthly satralizumab injection tracking, annual OCT with RNFL trending, and 3T spinal cord MRI surveillance — all while managing acute relapses. Momenties eliminated every scheduling gap. Our annualized relapse rate dropped below 0.1 across the entire treated cohort.',
  author: 'Dr. B. Weinshenker',
  role: 'Neuroimmunology Division',
}

export default function NeuromyelitisOpticaCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Neuromyelitis Optica Spectrum Disorder Center"
        title="NMOSD Center Calendar Management"
        subtitle="AI-powered scheduling for NMOSD centers coordinating AQP4/MOG-IgG serology, attack-phase IVMP/PLEX protocols, eculizumab/inebilizumab/satralizumab maintenance dosing, and annual ophthalmology and spinal cord MRI surveillance."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full NMOSD Center Compliance Lifecycle
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
              The NMOSD Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every serology deadline, maintenance dosing window, attack protocol drill, surveillance imaging, and payer reauthorization milestone — sequenced across 12 months.
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
              The 6 KPIs That Define NMOSD Center Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
              {kpis.map((k) => (
                <div key={k.metric} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{k.metric}</div>
                  <div style={{ fontSize: '0.88rem', color: '#f0ece3', fontWeight: 600, marginBottom: 6 }}>{k.label}</div>
                  <div style={{ fontSize: '0.82rem', color: '#a0998e', lineHeight: 1.4 }}>{k.description}</div>
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
        headline="Ready to Achieve ARR Below 0.1 Across Your NMOSD Cohort?"
        subtext="Join NMOSD centers using Momenties to automate every serology, maintenance dosing, attack-protocol, and surveillance imaging deadline. Free to start."
      />
    </main>
  )
}
