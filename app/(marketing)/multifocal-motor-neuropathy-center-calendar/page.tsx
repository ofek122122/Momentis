import { Stethoscope, BarChart3, TrendingUp, Home } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'MMN Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for MMN centers coordinating anti-GM1 IgM antibody monitoring, IVIG 2 g/kg induction and Q4-week maintenance dosing, nerve conduction study follow-ups, and grip-strength/MRC sum score progression tracking.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'Anti-GM1 IgM Antibody & Nerve Conduction Study Surveillance',
    description: 'Systematic anti-GM1 IgM antibody titer monitoring at baseline, 6 months, and annually for all MMN patients — high-titer positivity (>1:1000 by ELISA or GM1-IgM index >1.0) supports diagnosis and tracks treatment response; serial nerve conduction study scheduling at 6-month intervals during induction phase and annually once stable — motor conduction block resolution (≥50% CMAP amplitude recovery across a nerve segment) documents objective IVIG response; annual multifocal motor neuropathy diagnostic reassessment using EFNS/PNS 2010 criteria to confirm continued accuracy of MMN diagnosis and differentiate from ALS-spectrum disorders; annual electrodiagnostic re-evaluation for new symptom territories; and quarterly monitoring for unexpected sensory involvement suggesting CIDP overlap or diagnosis revision.',
  },
  {
    icon: BarChart3,
    title: 'IVIG 2 g/kg Induction Then Q4w Maintenance Dosing',
    description: 'Monthly IVIG 2 g/kg induction course documentation (typically split over 2–5 days) with pre-infusion IgA level screening (IgA deficiency contraindication for IgA-containing IVIG products); quarterly IVIG maintenance infusion scheduling at individualized intervals (Q4w standard; Q3w–Q8w per patient response) with dosing recorded per body weight and product lot; annual IVIG product formulary review — sucrose-free formulations preferred for renal-risk patients; annual hemolysis risk documentation (high-dose IVIG DAT and CBC q6 months for patients on extended maintenance); pre-infusion vital signs, thrombotic risk assessment (anti-fibrinolytic prophylaxis for high-risk patients), and migraine/headache pre-medication protocol; and quarterly IgG trough level monitoring (target IgG trough >6 g/L) to guide dosing interval optimization and prevent sub-therapeutic troughs correlating with clinical deterioration.',
  },
  {
    icon: TrendingUp,
    title: 'MRC Sum Score & Grip-Strength Progression Tracking',
    description: 'Biannual MRC sum score (0–60 scale across 12 muscle pairs) standardized assessment documenting upper-limb distal weakness progression — wrist extensors, finger extensors, and intrinsic hand muscles most commonly affected in MMN; quarterly grip-strength dynamometry (Jamar dynamometer, dominant and non-dominant hand) at each IVIG maintenance visit, expressed in kilograms-force with age/sex normative percentile ranking; functional disability scale (FDS 0–6) documentation at each visit alongside ONLS (Overall Neuropathy Limitations Scale) arm and leg domain scores for broader functional impact; annual photography-standardized thenar/hypothenar wasting documentation for irreversible axonal loss staging; Six-Minute Walk Test annually for lower-limb involvement; and quarterly patient-reported outcome measurement using RODS (Rasch-based Overall Disability Scale) for neuromuscular NPs to capture fine-grained functional change between clinical encounters.',
  },
  {
    icon: Home,
    title: 'Subcutaneous Immunoglobulin Home-Therapy Transition Planning',
    description: 'Annual eligibility review for fSCIG (facilitated subcutaneous immunoglobulin) or SCIG transition for stable IVIG-responders — HyQvia (10% Ig + recombinant hyaluronidase) Q3–4w or Hizentra 20% or Gamunex-C SC weekly dosing options; structured 3-session home-training protocol documentation: injection-site mapping (abdomen, thigh, lateral arm), pump programming, needle insertion technique, and site-rotation diary; pre-transition pharmacokinetic equivalence dosing calculation (SCIG dose typically 1.37× previous IV monthly dose divided into weekly or biweekly increments); 3-month post-transition follow-up with IgG trough, grip-strength, and MRC sum score verification to confirm non-inferiority to prior IV regimen; annual home-infusion nursing competency re-verification and emergency epinephrine kit review; and biannual patient satisfaction and adherence survey to detect fSCIG discontinuation risk and re-route to infusion center before clinical deterioration.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Anti-GM1 IgM Antibody Panel & Diagnostic Review',
    tasks: 'Order annual anti-GM1 IgM titer panel (ELISA and immunoblot) for all MMN patients. Reconfirm MMN vs. CIDP vs. ALS differential. Review EFNS/PNS diagnostic criteria compliance for all active patients. Schedule baseline nerve conduction studies for newly diagnosed cases.',
  },
  {
    phase: 'February',
    title: 'IVIG Induction Scheduling & IgA Pre-Screen',
    tasks: 'Complete IgA deficiency pre-screening for all patients initiating or switching IVIG product. Document induction IVIG 2 g/kg split-infusion schedules. Verify renal function for sucrose-containing formulation contraindications. Record body weight for dosing accuracy and lot numbers per infusion.',
  },
  {
    phase: 'March',
    title: 'Q1 Grip-Strength & MRC Sum Score Assessment',
    tasks: 'Complete Q1 Jamar dynamometry for all maintenance-phase patients (dominant and non-dominant). Calculate MRC sum score (0–60) standardized across 12 muscle pairs. Document FDS and ONLS arm/leg domains. Flag patients with ≥10% grip-strength decline for IVIG interval shortening review.',
  },
  {
    phase: 'April',
    title: 'Nerve Conduction Study Induction-Phase Follow-Up',
    tasks: 'Perform 6-month nerve conduction studies for patients who received IVIG induction in Q4 of prior year. Document CMAP amplitude ratios proximal-to-distal for conduction block resolution. Compare to baseline EMG. Review ALS exclusion criteria for any patients with new denervation findings.',
  },
  {
    phase: 'May',
    title: 'IgG Trough Monitoring & Dosing Interval Optimization',
    tasks: 'Draw IgG trough levels (pre-infusion) for patients on Q4–8w maintenance. Compare trough IgG to target >6 g/L. Adjust dosing intervals or dose weight-based for sub-therapeutic troughs. Document hemolysis surveillance CBC and DAT for patients on continuous high-dose IVIG (≥24 months).',
  },
  {
    phase: 'June',
    title: 'Q2 RODS/ONLS Functional Assessment & Registry Update',
    tasks: 'Administer RODS (Rasch-based Overall Disability Scale) to all active MMN patients. Document ONLS arm and leg domain scores. Update the center MMN registry with 6-month clinical data. Review Six-Minute Walk Test results for patients with lower-limb involvement. Submit annual EURO-NMD/TREAT-NMD registry data if applicable.',
  },
  {
    phase: 'July',
    title: 'SCIG/fSCIG Transition Eligibility Review',
    tasks: 'Identify IVIG-stable patients (≥12 months on maintenance, no deterioration) as SCIG/fSCIG transition candidates. Begin 3-session home-training for eligible patients. Calculate pharmacokinetic equivalence dose (1.37× IV monthly dose into SC weekly increments). Document patient preference, vein access challenges, and quality-of-life rationale.',
  },
  {
    phase: 'August',
    title: 'Post-Transition SCIG Follow-Up & Trough Verification',
    tasks: 'Complete 3-month post-SCIG transition IgG trough verification. Repeat grip-strength dynamometry and MRC sum score to confirm non-inferiority versus prior IV regimen. Review injection-site diary for rotation adherence. Document any systemic reactions, local site reactions, or pump failures.',
  },
  {
    phase: 'September',
    title: 'Q3 Grip-Strength Trending & Annual Nerve Conduction Study Block',
    tasks: 'Complete Q3 dynamometry and MRC sum scoring. Schedule annual nerve conduction studies for all stable MMN patients. Document thenar/hypothenar wasting progression photographs (standardized lighting and positioning). Identify patients with new upper-limb territories for expanded EMG/NCS evaluation.',
  },
  {
    phase: 'October',
    title: 'Perioperative IVIG Planning & Thrombosis Risk Review',
    tasks: 'Review surgical schedules for MMN patients requiring anesthesia — document peri-operative IVIG timing (infuse within 2 weeks pre-operatively if possible). Complete annual thrombosis risk stratification for all IVIG patients (personal/family VTE history, immobility, BMI). Update anti-fibrinolytic prophylaxis orders for high-risk patients.',
  },
  {
    phase: 'November',
    title: 'Annual Home-Infusion Nursing Re-Certification',
    tasks: 'Re-verify home-infusion nursing competency for all SCIG patients. Confirm emergency epinephrine kit expiry dates and kit completeness. Review annual anaphylaxis protocol competency for clinic staff. Update patient emergency contact and nearest infusion-center backup documentation for SCIG patients.',
  },
  {
    phase: 'December',
    title: 'Annual Program Quality Report & IVIG Formulary Review',
    tasks: 'Compile annual MMN center quality report — IVIG maintenance adherence rate, grip-strength trajectory, MRC sum score stability, conduction-block resolution rate, SCIG transition rate, anti-GM1 IgM titer trends, and ALS mis-diagnosis rate. Review IVIG formulary for next-year product changes. Set appointment schedules for Q1.',
  },
]

const kpis = [
  { metric: '≥90%', label: 'IVIG Maintenance Dosing Adherence' },
  { metric: 'IgG >6 g/L', label: 'Target Trough IgG Level' },
  { metric: '≥50%', label: 'CMAP Recovery (Conduction Block Resolution)' },
  { metric: 'Quarterly', label: 'Grip-Strength Dynamometry Interval' },
  { metric: '≥30%', label: 'SCIG Transition Rate (Eligible Patients)' },
  { metric: 'Annual', label: 'Anti-GM1 IgM Antibody Titer Review' },
]

const testimonial = {
  quote: 'Managing an MMN center means juggling IVIG 2 g/kg induction scheduling, quarterly Q4w maintenance infusions, anti-GM1 antibody surveillance, serial nerve conduction studies, grip-strength dynamometry every three months, MRC sum scoring, and SCIG home-transition training — simultaneously, for every patient in the practice. Momenties gave us one calendar for all of it. Our IVIG adherence rate is now above 92% and we have zero missed nerve conduction study windows.',
  author: 'Dr. J. van den Berg',
  role: 'Neuromuscular Division',
}

export default function MultifocalMotorNeuropathyCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Multifocal Motor Neuropathy Center"
        title="MMN Center Calendar Management"
        subtitle="AI-powered scheduling for MMN centers coordinating anti-GM1 IgM antibody monitoring, IVIG 2 g/kg induction and Q4-week maintenance dosing, nerve conduction study follow-ups, and grip-strength/MRC sum score progression tracking."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full MMN Center Compliance Lifecycle
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
              The MMN Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every IVIG dosing cycle, antibody surveillance window, nerve conduction study, grip-strength assessment, and SCIG transition milestone — sequenced across 12 months.
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
              The 6 KPIs That Define MMN Center Excellence
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
        headline="Ready to Achieve ≥92% IVIG Maintenance Adherence in Your MMN Center?"
        subtext="Join multifocal motor neuropathy centers using Momenties to automate every IVIG dosing cycle, anti-GM1 antibody titer window, nerve conduction study interval, grip-strength tracking session, and SCIG home-transition milestone. Free to start."
      />
    </main>
  )
}
