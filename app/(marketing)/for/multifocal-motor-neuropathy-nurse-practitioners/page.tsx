import { Shield, Clock, TrendingUp, Home } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'MMN Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs coordinating IVIG infusion logs, IgA-deficiency pre-screening, grip-strength trending, and subcutaneous immunoglobulin home-training in multifocal motor neuropathy clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'IVIG Infusion Pre-Screening: IgA/IgG Levels & Reaction Monitoring',
    description: 'Pre-infusion IgA deficiency screening (serum IgA <0.07 g/L = absolute contraindication for IgA-containing IVIG products) with product substitution to IgA-depleted formulations (Gammagard Liquid, Privigen) and anaphylaxis emergency kit confirmation; pre-infusion IgG trough draw for all patients on Q4w+ maintenance — target trough IgG >6 g/L with dosing adjustment algorithm when trough <5 g/L; real-time infusion reaction documentation protocol — rate reduction steps for headache/flushing/rigors, on-call physician escalation triggers (urticaria, bronchospasm, hypotension), and 30-minute post-infusion observation checklist; annual hemolysis surveillance CBC and DAT for patients on extended high-dose IVIG (≥24 consecutive months at ≥1 g/kg/month); thrombosis risk stratification at each visit (VTE history, immobility, polycythemia) with anti-fibrinolytic prophylaxis order review; and migraine prophylaxis pre-medication documentation (hydration, ibuprofen or acetaminophen, anti-emetic) for patients with recurrent IVIG-related headache.',
  },
  {
    icon: TrendingUp,
    title: 'Grip-Strength & MRC Sum Score Trending at Each Visit',
    description: 'Quarterly Jamar handheld dynamometer grip-strength measurement (three trials each hand, average recorded in kg-force) at every IVIG maintenance visit — dominant and non-dominant hand documented separately against age- and sex-adjusted normative percentiles; standardized MRC sum score evaluation (0–60) targeting wrist extensors, finger extensors, interossei, and elbow flexors/extensors as primary MMN-affected muscle groups; trend charting across ≥4 consecutive visits to identify plateau, improvement, or ≥10% decline — the threshold triggering IVIG interval shortening or dose escalation discussion; ONLS (Overall Neuropathy Limitations Scale) arm domain (0–5) at every visit and leg domain documentation for patients with lower-limb MMN involvement; quarterly patient-reported RODS (Rasch-based Overall Disability Scale) completion to quantify functional change between objective assessments; and annual standardized thenar/hypothenar atrophy photodocumentation to track irreversible axonal loss progression alongside electrodiagnostic data.',
  },
  {
    icon: Home,
    title: 'fSCIG Home Self-Administration Training & Injection-Site Rotation',
    description: 'Structured 3-session home-training curriculum documentation: Session 1 — device assembly, pump priming, and needle insertion on clinical model; Session 2 — patient self-injection with abdomen/thigh sites under NP supervision, site-rotation diary initiation; Session 3 — independent self-injection competency check, emergency kit review, and pump error troubleshooting; pharmacokinetic equivalence dose calculation documented per patient (SCIG dose = 1.37× prior monthly IV dose, divided into weekly or biweekly SC increments for HyQvia or Hizentra/Gamunex-C SC); 3-month post-transition follow-up with IgG trough level, grip-strength dynamometry, and MRC sum score to confirm non-inferiority versus prior IV regimen; quarterly injection-site diary review for rotation adherence (≥4 sites) and site-reaction surveillance (erythema, induration, nodule formation); annual patient satisfaction survey to detect home-therapy burden, adherence decline, and need for supervised infusion center re-route; and emergency escalation protocol documentation (anaphylaxis recognition, IM epinephrine autoinjector, nearest infusion center backup contact).',
  },
  {
    icon: Clock,
    title: 'Anti-GM1 Antibody Trending & Relapse-Alert Protocols',
    description: 'Baseline anti-GM1 IgM antibody titer (ELISA, immunoblot, and/or GM1-IgM index) at MMN diagnosis — high-titer positivity (>1:1000) supports diagnosis and predicts IVIG responsiveness (70–80% of high-titer patients respond); 6-month repeat anti-GM1 titer during IVIG induction to confirm treatment effect; annual anti-GM1 IgM surveillance thereafter — rising titer ≥twofold from nadir on stable therapy triggers relapse-alert protocol with urgent grip-strength reassessment, NCS scheduling, and IVIG interval shortening; relapse-alert protocol: patient self-report of new hand weakness, drop in grip strength >1 kg-force from last stable measure, or new digit extension paresis triggers same-week clinical review and expedited IVIG scheduling (do not wait for next scheduled maintenance window); differential monitoring protocol for seronegative MMN patients (20–25% of cases) — clinical and electrodiagnostic relapse criteria replace antibody titer as primary alert metric; and annual EMG/NCS interpretation CE for MMN NPs to maintain competency in distinguishing conduction block recovery from fixed conduction failure (axonal loss) — the key distinction driving IVIG continuation versus rehabilitation-only decisions.',
  },
]

const studies = [
  {
    title: 'Randomized Trial of IVIG in MMN (van Schaik et al.) — Brain 2006',
    finding: 'Double-blind, randomized, placebo-controlled crossover trial of 44 MMN patients showed IVIG significantly improved grip strength (+2.8 kg-force dominant hand vs. placebo, P<0.001), MRC sum score (+2.4 points), and functional disability scale scores. Improvement was maintained over 12 weeks post-infusion in responders, with 78% of patients showing clinically meaningful response (≥1-point FDS improvement).',
    implication: 'NPs should document baseline grip-strength and MRC sum score before every IVIG course and repeat at Week 4 and Week 12 post-infusion to quantify response. A ≥2 kg-force grip-strength improvement or ≥1-point MRC sum score improvement is the accepted clinical response threshold. Failure to respond after two full IVIG induction courses (2 g/kg × 2) should prompt diagnostic re-evaluation.',
  },
  {
    title: 'SCIG vs. IVIG Equivalence in MMN (Harbo et al.) — JNNP 2009',
    finding: 'Open-label crossover study of 27 stable MMN patients transitioned from IVIG to SCIG (Subcuvia 16%) showed maintained grip strength (+0.1 kg-force), stable MRC sum score, and equivalent IgG trough levels (8.4 vs. 8.7 g/L). Patient satisfaction significantly favored SCIG (85% preferred home administration). Median SCIG dose was 1.37× prior IV dose when converted to weekly SC.',
    implication: 'NPs overseeing SCIG transition must use the 1.37 conversion factor for initial SCIG dose calculation, schedule a 3-month IgG trough and grip-strength follow-up to confirm non-inferiority, and document patient-reported quality-of-life improvement. Site-rotation diary review at each quarterly visit is essential to prevent lipohypertrophy and ensure consistent IgG absorption.',
  },
  {
    title: 'Anti-GM1 IgM Antibody Titer and IVIG Response — Neurology 2000',
    finding: 'Multicenter analysis of 115 MMN patients found high-titer anti-GM1 IgM antibodies (>1:1000) in 44% of cases, with IVIG response rate of 78% in high-titer vs. 52% in seronegative patients. Rising anti-GM1 titer during stable therapy predicted clinical relapse within 8 weeks in 73% of cases, and titer normalization correlated with sustained clinical remission.',
    implication: 'NPs must order baseline anti-GM1 IgM titer for all suspected MMN patients. For high-titer patients on IVIG, annual titer surveillance and a relapse-alert protocol triggered by ≥twofold titer rise from nadir are best practice. Seronegative patients (25–35%) require clinical and electrodiagnostic relapse criteria as primary alert metrics since antibody titer is uninformative.',
  },
  {
    title: 'Long-Term IVIG in MMN — Axonal Loss Prevention (van Asseldonk et al.) — Brain 2011',
    finding: 'Prospective 10-year follow-up of 88 MMN patients showed that patients on regular IVIG maintenance had significantly slower motor axon loss (mean CMAP amplitude decline 0.4 mV/year vs. 1.1 mV/year in untreated controls) and lower disability progression (FDS +0.2 vs. +0.8 over 10 years). Sub-therapeutic IVIG intervals (>8 weeks) correlated with accelerated axonal loss independent of grip-strength changes.',
    implication: 'NPs must document IVIG dosing intervals precisely and treat sub-therapeutic trough IgG (<6 g/L) or intervals >8 weeks as a risk factor for irreversible axonal loss — even in asymptomatic patients. Annual CMAP amplitude trending on NCS is essential to detect silent axonal loss. Maintenance adherence above 90% is the program quality standard.',
  },
  {
    title: 'IgA Deficiency and IVIG Anaphylaxis Risk (Patel et al.) — JACI 2010',
    finding: 'Retrospective safety analysis of 14,000 IVIG infusions across 880 patients showed that IgA deficiency (<0.07 g/L) combined with anti-IgA antibodies carried a 10–50× higher anaphylaxis risk versus IgA-replete patients. Switching to IgA-depleted formulations reduced anaphylaxis risk to baseline. Routine IgA pre-screening reduced severe adverse event rates by 87% in high-risk populations.',
    implication: 'NPs must complete IgA pre-screening before every new IVIG product initiation or product switch, document the result, and maintain a product-specific safety record for each patient. Product switch protocols (insurance formulary changes, supply issues) must trigger automatic IgA re-verification. Anaphylaxis emergency kits and escalation protocols must be current at every infusion visit.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'AGPCNP-BC / FNP-BC Renewal',
    details: 'Adult-Gerontology Primary Care NP or Family NP Board Certified renewal — 100 CE credits including 25 pharmacology credits. Required for primary care delivery to MMN patients on chronic IVIG or SCIG therapy.',
  },
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP Certification Renewal (if oncology-subspecialized)',
    details: 'Advanced Oncology Certified Nurse Practitioner — 45 oncology-specific CE credits for NPs managing MMN in neuromuscular oncology or paraneoplastic NP subspecialty practice contexts. ONCC Online CE Tracker.',
  },
  {
    frequency: 'Annual',
    item: 'EMG/NCS Interpretation CE',
    details: 'Annual CE focused on motor conduction block identification, CMAP amplitude trending, and MMN vs. ALS electrodiagnostic differentiation. Required for NPs interpreting or co-ordering nerve conduction studies.',
  },
  {
    frequency: 'Pre-Infusion',
    item: 'IgA Deficiency Pre-Screen (All Product Initiations)',
    details: 'Serum IgA level required before initiating any new IVIG product or switching formulations. IgA <0.07 g/L = contraindication to IgA-containing products. Document result and product selection rationale in chart.',
  },
  {
    frequency: 'Pre-Infusion',
    item: 'IgG Trough Level Draw',
    details: 'Trough IgG (drawn immediately before IVIG infusion) for all patients on Q4w+ maintenance. Target >6 g/L. Values <5 g/L trigger interval shortening or dose increase. Record lot number and infusion rate.',
  },
  {
    frequency: 'Quarterly',
    item: 'Grip-Strength Dynamometry & MRC Sum Score',
    details: 'Jamar dynamometer at each IVIG maintenance visit — three trials per hand, average in kg-force. MRC sum score (0–60) targeting distal upper-limb muscles. ≥10% grip-strength decline triggers IVIG review.',
  },
  {
    frequency: 'Quarterly',
    item: 'Anti-GM1 IgM Titer Relapse-Alert Review',
    tasks: 'Review most recent anti-GM1 IgM titer against nadir. Flag ≥twofold titer rise for same-week clinical assessment. For seronegative patients, use clinical MRC and grip-strength relapse criteria as primary alert metric.',
  },
  {
    frequency: 'Quarterly',
    item: 'SCIG Injection-Site Diary Review',
    details: 'Review injection-site rotation diary at each visit — confirm ≥4 distinct sites used. Inspect for lipohypertrophy, persistent erythema, or nodule formation. Correct technique errors and update site diagram.',
  },
  {
    frequency: 'Every 3 Months (Post-Transition)',
    item: 'SCIG Post-Transition Non-Inferiority Check',
    details: 'At 3 months after IVIG-to-SCIG transition: IgG trough level + grip-strength + MRC sum score. If any parameter worsens from IV baseline, assess dose calculation (1.37× factor), interval adherence, and absorption.',
  },
  {
    frequency: 'Annual',
    item: 'Nerve Conduction Study & Anti-GM1 IgM Panel',
    details: 'Annual nerve conduction study (motor CMAP amplitude trending) for all stable MMN patients plus annual anti-GM1 IgM ELISA and immunoblot. Schedule proactively — do not wait for symptom change to justify annual electrodiagnostic.',
  },
]

export default function MultifocalMotorNeuropathyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Multifocal Motor Neuropathy"
        title="MMN Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs coordinating IVIG infusion logs, IgA-deficiency pre-screening, grip-strength trending, and subcutaneous immunoglobulin home-training in multifocal motor neuropathy clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full MMN NP Practice
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
              The Evidence Base Driving MMN NP Compliance
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

      {/* CE & Monitoring Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              MMN NP Certification & Monitoring Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.frequency}</div>
                  <div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>{item.item}</div>
                    <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.6 }}>{(item as { frequency: string; item: string; details?: string; tasks?: string }).details ?? (item as { frequency: string; item: string; details?: string; tasks?: string }).tasks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥90% IVIG Adherence and Zero Missed Grip-Strength Assessments?"
        subtext="Momenties consolidates IgA pre-screening, quarterly grip-strength dynamometry, MRC sum score trending, anti-GM1 antibody relapse-alert protocols, SCIG home-training milestones, and NP certification renewals into one accountable calendar — so every MMN patient receives precision-timed therapy, every cycle."
      />
    </main>
  )
}
