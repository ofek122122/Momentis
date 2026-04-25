import { Stethoscope, ClipboardList, Shield, Calendar } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'CIDP Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for CIDP centers coordinating nerve conduction studies, IVIG 2 g/kg induction and 1 g/kg Q3-week maintenance, subcutaneous immunoglobulin hyaluronidase-facilitated (fSCIG) transitions, and prednisone/azathioprine monitoring with annual electrophysiology reassessment.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'NCS/EMG Baseline and Q6-Month Reassessment',
    description: 'Systematic nerve conduction study (NCS) and electromyography (EMG) scheduling at diagnosis to document baseline conduction velocities, distal motor latencies, F-wave latencies, and CMAP/SNAP amplitudes across median, ulnar, peroneal, tibial, and sural nerves; standardized Q6-month electrophysiology reassessment panels to quantify treatment response — demyelination reversal (conduction velocity improvement ≥10 m/s), remyelination tracking, and residual axonal loss quantification; sural nerve biopsy coordination for diagnostically ambiguous cases with onion-bulb formation, inflammatory infiltrate, and focal myelin thickening pathology review; multidisciplinary neurodiagnostics scheduling integrating NCS, skin punch biopsy for intraepidermal nerve fiber density, MRI neurography of brachial or lumbosacral plexus, and CSF protein analysis (typically >45 mg/dL in CIDP); and annual electrophysiology reassessment milestone documentation for infusion authorization and disability scoring (INCAT, I-RODS) correlation.',
  },
  {
    icon: ClipboardList,
    title: 'IVIG Induction 2 g/kg Then Maintenance 1 g/kg Q3w',
    description: 'IVIG induction infusion scheduling at 2 g/kg total dose divided over 2–5 days (0.4 g/kg/day × 5 days or 1 g/kg/day × 2 days) with pre-infusion serum IgA screening to exclude IgA deficiency and anaphylaxis risk; monthly maintenance IVIG dosing at 1 g/kg over 1–2 days every 3 weeks per EFNS/PNS 2023 guidelines with interval adjustment based on INCAT disability score response (≥1-point improvement threshold); pre-infusion vital signs, renal function (creatinine, eGFR), and hemoglobin monitoring to screen for sucrose-induced nephropathy and hemolytic anemia in high-dose sucrose-free IgG preparations; infusion rate escalation protocol documentation — starting at 0.5 mL/kg/hr and advancing per tolerance; quarterly IgG trough level monitoring (target pre-infusion IgG >7–8 g/L) to individualize dosing intervals; and 6-month IVIG response assessment with objective INCAT scoring to document clinical justification for authorization renewal and transition eligibility planning.',
  },
  {
    icon: Shield,
    title: 'fSCIG 10–20% SC Hyaluronidase-Facilitated Weekly Transitions',
    description: 'Facilitated subcutaneous immunoglobulin (fSCIG, Hyqvia 10% IgG + recombinant human hyaluronidase rHuPH20) transition scheduling for stable IVIG responders — dose equivalence calculation (monthly IVIG dose divided into weekly or biweekly SC doses) and infusion volume per-site tolerance assessment (up to 600 mL per abdominal site per infusion with hyaluronidase co-injection); home-training coordination — first 3 infusions administered in clinic with NP supervision, site rotation education (abdomen, thighs, upper arms), and self-administration competency sign-off before home transition; weekly fSCIG infusion calendar with site rotation tracking, infusion log documentation, and pump rate titration (initial 30 mL/hr advancing to 300 mL/hr max); pre-dose IgA re-screening if patient history incomplete; quarterly serum IgG trough and infusion volume-per-site review; and annual fSCIG tolerability reassessment with INCAT/I-RODS trending to confirm non-inferiority to IV maintenance.',
  },
  {
    icon: Calendar,
    title: 'Prednisone Taper and Azathioprine/MMF Maintenance Monitoring',
    description: 'Prednisone induction and taper scheduling for immunoglobulin-refractory or steroid-responsive CIDP — initial 60 mg/day PO for 4 weeks with monthly 10 mg taper per response, targeting minimum effective dose with INCAT reassessment at each taper step; azathioprine co-treatment monitoring — CBC with differential and LFT every 2 weeks for first 3 months, then monthly; TPMT (thiopurine methyltransferase) enzyme activity or genotype testing before initiation; azathioprine dose titration 50–150 mg/day per CBC response (target lymphopenia without cytopenias); mycophenolate mofetil (MMF) 1,500–3,000 mg/day divided BID as steroid-sparing alternative with monthly CBC and quarterly renal function; rituximab (375 mg/m² weekly × 4) B-cell depletion scheduling for refractory CIDP with CD19/CD20 B-cell count monitoring at 3 and 6 months; annual electrophysiology reassessment correlation with immunosuppressant dose to inform continued therapy versus supervised discontinuation planning.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Electrophysiology Reassessment and IVIG Authorization Renewal',
    tasks: 'Schedule annual NCS/EMG reassessment panels for all active CIDP patients — document conduction velocity, CMAP/SNAP amplitude, and distal latency changes versus baseline. Complete INCAT and I-RODS disability scoring to support IVIG authorization renewals. Audit TPMT enzyme activity documentation for all azathioprine patients initiated in the prior year. Review prednisone taper schedules — identify patients at minimum effective dose for supervised discontinuation planning. Confirm IgA pre-screening is current for all patients on IVIG or fSCIG.',
  },
  {
    phase: 'February',
    title: 'IVIG Maintenance Cycle Audit and IgG Trough Review',
    tasks: 'Conduct Q1 pre-infusion serum IgG trough review for all maintenance IVIG patients — flag those below 7–8 g/L target for dosing interval shortening. Complete Q1 INCAT disability score reassessment and document versus prior quarter. Identify stable IVIG responders who meet fSCIG transition eligibility criteria (INCAT stable ≥6 months, tolerating IVIG without systemic reactions). Confirm azathioprine CBC and LFT monitoring is current for all patients within first 3 months of initiation. Review sucrose-free IgG preparation compliance for patients with elevated creatinine.',
  },
  {
    phase: 'March',
    title: 'fSCIG Transition Assessments and Home-Training Coordination',
    tasks: 'Complete fSCIG transition eligibility review for stable IVIG maintenance patients. Coordinate first 3 supervised fSCIG infusions in clinic — dose equivalence calculation, site rotation education, and competency sign-off. Audit azathioprine and MMF dose titration records for Q1 patients. Review Q1 prednisone taper documentation — confirm INCAT response is captured at each 10 mg taper step. Schedule Q2 NCS/EMG for patients completing 6-month treatment cycles. Submit Q1 infusion authorization letters to payers with INCAT documentation.',
  },
  {
    phase: 'April',
    title: 'Azathioprine/MMF Lab Monitoring and Renal Review',
    tasks: 'Complete Q1/Q2 azathioprine and MMF laboratory monitoring — CBC with differential, LFT, and creatinine for all patients. Flag cytopenias or hepatotoxicity (ALT >2x ULN triggers azathioprine dose reduction). Complete MMF quarterly renal function panels. Review rituximab B-cell depletion status for refractory CIDP patients — CD19/CD20 count at 3 months post-infusion. Audit IVIG infusion rate escalation documentation for all new patients initiated in Q1. Confirm home fSCIG pump rate titration logs are complete for patients who transitioned to home therapy.',
  },
  {
    phase: 'May',
    title: 'Pre-Infusion Hemolysis and Nephropathy Screening',
    tasks: 'Complete semi-annual pre-infusion hemolysis and nephropathy screening for all IVIG patients — hemoglobin, haptoglobin, LDH, reticulocyte count, and creatinine. Identify patients receiving sucrose-containing IVIG formulations with eGFR <30 mL/min for product switch. Review weekly fSCIG infusion logs for home patients — confirm site rotation compliance and absence of nodule formation. Update collaborative practice agreements for NP co-management of prednisone and azathioprine prescribing. Confirm IgG pre-infusion trough documentation for Q2 maintenance patients.',
  },
  {
    phase: 'June',
    title: 'Mid-Year INCAT/I-RODS Benchmarking and Response Assessment',
    tasks: 'Complete mid-year INCAT (Inflammatory Neuropathy Cause and Treatment) and I-RODS (Inflammatory Rasch-Built Overall Disability Scale) scoring across all active CIDP patients. Calculate proportion achieving ≥1-point INCAT improvement versus year-start baseline. Identify non-responders to current treatment for therapy escalation review — azathioprine to MMF switch, rituximab consideration, or fSCIG dose increase. Review mid-year NCS/EMG for patients completing 6-month reassessment cycle. Document treatment response justification for H2 IVIG authorization renewals.',
  },
  {
    phase: 'July',
    title: 'Rituximab Refractory CIDP Evaluation and B-Cell Monitoring',
    tasks: 'Complete 6-month CD19/CD20 B-cell depletion assessment for all rituximab-treated CIDP patients. Flag patients with B-cell reconstitution (CD19 >1% of lymphocytes) for re-dosing evaluation. Audit Q2 azathioprine and MMF CBC/LFT compliance. Review prednisone cumulative dose logs — identify patients with >3 months cumulative exposure ≥20 mg/day for bone density counseling and DEXA referral. Confirm fSCIG home training sign-off documentation is complete for all patients who transitioned in H1.',
  },
  {
    phase: 'August',
    title: 'IVIG-to-fSCIG Transition Outcomes Review',
    tasks: 'Complete 6-month post-transition outcomes review for patients who switched from IVIG to fSCIG — INCAT stability confirmation, serum IgG trough equivalence, and patient-reported infusion tolerance. Document non-inferiority to prior IV maintenance for payer authorization. Review Q3 pre-infusion IgG troughs for all maintenance patients — adjust dosing intervals for patients falling below 7 g/L. Audit fSCIG weekly infusion logs for adherence gaps. Complete annual bone density review for patients on long-term prednisone co-therapy.',
  },
  {
    phase: 'September',
    title: 'Q3 Electrophysiology and Disability Score Documentation',
    tasks: 'Schedule Q3 NCS/EMG for patients completing 6-month reassessment cycles. Complete Q3 INCAT and I-RODS scoring for all active patients. Audit rituximab response documentation — confirm CD20 depletion is maintained and INCAT response is captured for all treated patients. Review azathioprine and MMF 9-month cumulative CBC/LFT data — identify trends indicating toxicity before annual lab review. Update prednisone taper schedules for patients achieving sustained INCAT improvement.',
  },
  {
    phase: 'October',
    title: 'Annual IVIG Authorization Preparation and Trough Audit',
    tasks: 'Compile annual IVIG authorization renewal documentation — NCS/EMG comparison versus baseline, INCAT/I-RODS trend data, IgG trough levels, and clinical response narrative. Audit all Q4 pre-infusion IgG troughs to ensure current documentation for upcoming authorization submissions. Review fSCIG home patients for annual tolerability and adherence assessment. Complete azathioprine/MMF annual lab review — CBC, LFT, renal function panel. Identify candidates for supervised IVIG or fSCIG discontinuation based on 12-month remission status.',
  },
  {
    phase: 'November',
    title: 'Annual Electrophysiology Scheduling and Remission Planning',
    tasks: 'Schedule annual NCS/EMG panels for all active patients to complete Q4 electrophysiology cycle. Document conduction velocity and amplitude trends versus prior year. Identify patients with ≥12 months INCAT stability and improving NCS parameters for supervised treatment discontinuation planning — prednisone taper to zero, IVIG interval extension, or fSCIG dose reduction protocol initiation. Review rituximab re-treatment calendar — patients with B-cell reconstitution and INCAT worsening to be scheduled for Q1 re-dosing.',
  },
  {
    phase: 'December',
    title: 'Year-End CIDP Program Benchmarking and 2026 Protocol Planning',
    tasks: 'Complete annual CIDP program outcomes benchmarking — proportion of patients achieving ≥1-point INCAT improvement, average NCS conduction velocity change from baseline, IVIG authorization renewal success rate, and fSCIG transition completion rate. Update prednisone taper, azathioprine titration, and IVIG/fSCIG dose protocols per updated EFNS/PNS guideline review. Plan Q1 infusion schedule, electrophysiology panel calendar, and azathioprine/MMF monitoring cycle for the coming year.',
  },
]

const kpis = [
  { metric: '≥70%', label: 'INCAT ≥1-Point Improvement at 12 Months', description: 'Primary CIDP treatment response benchmark for IVIG and fSCIG maintenance cohorts.' },
  { metric: 'Q6 Months', label: 'NCS/EMG Reassessment Frequency', description: 'Electrophysiology reassessment interval for conduction velocity and CMAP tracking.' },
  { metric: '100%', label: 'IgA Pre-Screening Before IVIG/fSCIG Initiation', description: 'IgA deficiency screen compliance to prevent anaphylaxis at first infusion.' },
  { metric: '>7 g/L', label: 'Pre-Infusion IgG Trough Target', description: 'Serum IgG trough threshold guiding IVIG dosing interval individualization.' },
  { metric: '≥80%', label: 'fSCIG Home-Training Competency Sign-Off Rate', description: 'Proportion of fSCIG-transitioned patients completing clinic-supervised self-administration training.' },
  { metric: 'Monthly', label: 'Azathioprine/MMF CBC and LFT Monitoring', description: 'Laboratory monitoring frequency for immunosuppressant safety during CIDP maintenance.' },
]

const testimonial = {
  quote: 'Managing a CIDP center means orchestrating NCS/EMG panels every six months, IVIG induction at 2 g/kg and Q3-week maintenance cycles, fSCIG home-training transitions with per-site volume titration, prednisone tapers correlated to INCAT scores, and monthly azathioprine CBCs — all simultaneously across a large patient panel. Momenties mapped every protocol interval, infusion cycle, electrophysiology milestone, and lab checkpoint into one automated calendar. Our center achieved 73% INCAT response rates at 12 months and near-perfect payer authorization renewal rates.',
  author: 'Dr. R. Lewis',
  role: 'Neuromuscular Division',
}

export default function CIDPCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="CIDP Treatment Center"
        title="CIDP Center Calendar Management"
        subtitle="AI-powered scheduling for CIDP centers coordinating nerve conduction studies, IVIG 2 g/kg induction and 1 g/kg Q3-week maintenance, subcutaneous immunoglobulin hyaluronidase-facilitated (fSCIG) transitions, and prednisone/azathioprine monitoring with annual electrophysiology reassessment."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full CIDP Center Compliance Lifecycle
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
              The CIDP Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every NCS/EMG panel, IVIG and fSCIG infusion cycle, prednisone taper checkpoint, and azathioprine monitoring interval — sequenced across 12 months.
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
              The 6 KPIs That Define CIDP Center Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.metric + kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.85rem', color: '#f0ece3', fontWeight: 600, marginBottom: 6 }}>{kpi.label}</div>
                  <div style={{ fontSize: '0.82rem', color: '#a0998e', lineHeight: 1.4 }}>{kpi.description}</div>
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
        headline="Ready to Achieve ≥70% INCAT Response Rates in Your CIDP Center?"
        subtext="Join CIDP centers using Momenties to automate every NCS/EMG panel, IVIG induction and Q3-week maintenance cycle, fSCIG home-training transition, prednisone taper checkpoint, and azathioprine CBC interval. Free to start."
      />
    </main>
  )
}
