import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Pulmonary Hypertension Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC 5-year renewal, CCTC (Certified Clinical Transplant Coordinator) biennial CE, ERA/PDE5i/prostacyclin combination therapy monitoring CE, REVEAL Lite 2 risk stratification annual training, RHC (right heart catheterization) hemodynamic interpretation competency, 6MWT (6-minute walk test) protocol certification, treprostinil titration CE, ACLS annual renewal, and PHA quality benchmarks for pulmonary hypertension nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'PH NP Credentials & CCTC Renewal',
    description: 'AGACNP-BC (Adult-Gerontology Acute Care Nurse Practitioner — Board Certified) 5-year renewal (1,000 clinical hours + 100 CE hours, including 25 CE in advanced pharmacology) for the primary advanced practice credential underpinning Group 1 PAH management; biennial CCTC (Certified Clinical Transplant Coordinator) recertification (60 CE every 2 years) for NPs coordinating PAH lung transplant referrals at REVEAL Lite 2 ≥9 high-risk thresholds; annual ACLS renewal for in-clinic syncope, RV failure, and PAH crisis response; and annual PHA (Pulmonary Hypertension Association) PH Professional Network CE plus biennial CHEST PH track CE to maintain expertise across WHO Group 1–5 differential diagnosis, REVEAL Lite 2 application, and ESC/ERS 2022 PH guideline updates.',
  },
  {
    icon: Clock,
    title: 'ERA/PDE5i/Prostacyclin Combination Therapy Management',
    description: 'Monthly upfront combination therapy documentation per AMBITION (ambrisentan + tadalafil) and 2022 ESC/ERS guideline-recommended dual oral therapy for intermediate-low risk PAH; monthly LFT (AST/ALT/bilirubin) monitoring for ERA-class agents (bosentan REMS, ambrisentan, macitentan) with hold criteria at AST/ALT >3× ULN; monthly hemoglobin and pregnancy testing under bosentan/macitentan REMS programs (teratogenicity Category X); quarterly selexipag (Uptravi) titration documentation from 200 mcg BID to maximum tolerated dose (1,600 mcg BID); and monthly parenteral prostacyclin (IV epoprostenol/treprostinil, SC treprostinil) site, pump, and dose titration documentation with central line infection surveillance per CDC CLABSI protocols.',
  },
  {
    icon: BarChart3,
    title: 'RHC Hemodynamic Interpretation & PVR Targets',
    description: 'Annual RHC (right heart catheterization) competency renewal for NP interpretation of mPAP ≥20 mmHg + PCWP ≤15 mmHg + PVR >2 Wood units (2022 ESC/ERS PAH hemodynamic definition); quarterly RHC repeat documentation at treatment escalation decision points and pre-listing for lung transplantation; quarterly cardiac index (CI <2.0 L/min/m² = high risk) and right atrial pressure (RAP >14 mmHg = high risk) trending for REVEAL Lite 2 hemodynamic inputs; annual vasoreactivity testing documentation (inhaled NO or IV epoprostenol) with positive response defined as mPAP fall ≥10 mmHg to ≤40 mmHg with preserved/increased CO — identifying the <10% of IPAH patients eligible for high-dose CCB monotherapy; and quarterly mixed venous oxygen saturation (SvO₂ <65% = high risk) documentation as a marker of cardiac output adequacy.',
  },
  {
    icon: Users,
    title: 'REVEAL Lite 2 Risk Stratification & Goal-Directed Therapy',
    description: 'Annual REVEAL Lite 2 risk calculator training documenting the 6 noninvasive variables (WHO FC, SBP, HR, 6MWD, BNP/NT-proBNP, eGFR) with low-risk score ≤6 as the goal-directed treatment target for all prevalent PAH patients; quarterly REVEAL Lite 2 reassessment at every clinic visit with treatment escalation triggered by intermediate (7–8) or high (≥9) scores per 2022 ESC/ERS 4-strata model; monthly 6MWT (6-minute walk test) certification per ATS 2014 protocol with Borg dyspnea scoring, SpO₂ desaturation tracking, and predicted distance calculation (low-risk threshold >440 m); quarterly NT-proBNP trending (low-risk <300 pg/mL) and WHO functional class documentation (low-risk WHO FC I–II); and annual treatment escalation algorithm documentation — initial dual oral combination therapy, escalation to triple therapy (ERA + PDE5i + oral/parenteral prostacyclin) at intermediate risk, and lung transplant referral at persistent high-risk REVEAL Lite 2 ≥9.',
  },
]

const studies = [
  {
    title: 'AMBITION ERA + PDE5i Combination — NEJM 2015',
    finding: 'AMBITION trial: upfront ambrisentan + tadalafil vs. ambrisentan or tadalafil monotherapy in 500 treatment-naïve PAH patients — combination therapy reduced clinical failure events (composite of death, hospitalization, disease progression, unsatisfactory long-term response) by 50% vs. pooled monotherapy (HR 0.50, 95% CI 0.35–0.72, p<0.001) — establishing initial dual oral combination therapy as the standard of care for intermediate-low risk WHO Group 1 PAH.',
    implication: 'Monthly upfront combination therapy documentation and monthly LFT monitoring for ambrisentan require NP annual ERA hepatotoxicity CE to implement AMBITION-based dual therapy initiation, manage REMS-mandated monthly LFTs (hold at AST/ALT >3× ULN), and document combination therapy initiation as a quality measure for accreditation.',
  },
  {
    title: 'GRIPHON Selexipag — NEJM 2015',
    finding: 'GRIPHON trial: selexipag vs. placebo in 1,156 PAH patients (80% on background ERA + PDE5i) — selexipag reduced the composite of morbidity/mortality events by 40% (HR 0.60, 95% CI 0.46–0.78, p<0.001) at median 1.4-year follow-up, with consistent benefit across mono, dual, and triple therapy backgrounds — establishing selexipag as the first oral selective IP-receptor agonist for triple therapy escalation.',
    implication: 'Quarterly selexipag titration documentation (200 mcg BID weekly escalation to maximum tolerated 1,600 mcg BID) and monthly tolerability assessment require NP annual prostacyclin pathway CE to manage headache/jaw pain/diarrhea titration toxicity, document GRIPHON-based escalation at intermediate-risk REVEAL Lite 2 (7–8), and coordinate prior authorization continuation.',
  },
  {
    title: 'PATENT-1 Riociguat — NEJM 2013',
    finding: 'PATENT-1 trial: riociguat vs. placebo in 443 PAH patients — riociguat improved 6MWD by 36 m (95% CI 20–52, p<0.001) at 12 weeks and reduced clinical worsening events by 78%, with PVR reduction of 226 dyn·s·cm⁻⁵ — establishing riociguat as the first soluble guanylate cyclase stimulator for both PAH and inoperable CTEPH (CHEST-1 companion trial).',
    implication: 'Monthly riociguat titration documentation (1.0 mg TID weekly escalation to 2.5 mg TID) and monthly BP monitoring for hypotension hold criteria (SBP <95 mmHg) require NP annual sGC stimulator CE to differentiate riociguat from PDE5i (never combine — hypotension risk), document PATENT-1-based escalation, and manage REMS-required pregnancy prevention.',
  },
  {
    title: 'SERAPHIN Macitentan — NEJM 2013',
    finding: 'SERAPHIN trial: macitentan 10 mg vs. placebo in 742 PAH patients — macitentan reduced the composite of morbidity/mortality events by 45% (HR 0.55, 95% CI 0.39–0.76, p<0.001) at median 100-week follow-up, with significant reduction in PAH-related death/hospitalization — establishing macitentan as the first ERA with confirmed long-term morbidity/mortality benefit and the first long-term endpoint trial in PAH.',
    implication: 'Monthly macitentan REMS documentation (monthly pregnancy testing, monthly hemoglobin for anemia surveillance) and quarterly LFT monitoring require NP annual SERAPHIN CE to implement macitentan REMS, document SERAPHIN-based long-term endpoint outcomes for prior authorization, and coordinate macitentan initiation at intermediate-low risk per ESC/ERS guidelines.',
  },
  {
    title: 'FREEDOM-EV Oral Treprostinil — NEJM Evidence 2023',
    finding: 'FREEDOM-EV trial: oral treprostinil vs. placebo in 690 PAH patients on background mono or dual oral therapy — oral treprostinil reduced the composite of clinical worsening events by 26% (HR 0.74, 95% CI 0.56–0.97, p=0.028) and improved 6MWD by 12 m at 24 weeks — establishing oral treprostinil as the first oral prostacyclin demonstrating event-driven outcome benefit in combination therapy.',
    implication: 'Quarterly oral treprostinil titration documentation (0.125 mg TID escalation per tolerability) and monthly GI tolerability assessment (nausea, diarrhea, headache) require NP annual oral prostacyclin CE to differentiate oral treprostinil from selexipag (different IP-receptor selectivity), document FREEDOM-EV-based combination therapy escalation, and coordinate transition to parenteral treprostinil at high-risk REVEAL Lite 2 ≥9.',
  },
]

const schedule = [
  { frequency: 'Every 5 Years', item: 'AGACNP-BC Renewal', details: '1,000 clinical hours + 100 CE hours (25 in advanced pharmacology) — primary advanced practice credential for adult-gerontology acute care PAH management.' },
  { frequency: 'Biennial', item: 'CCTC Recertification', details: 'Certified Clinical Transplant Coordinator — 60 CE every 2 years for NPs coordinating PAH lung transplant referrals at REVEAL Lite 2 ≥9 high-risk thresholds.' },
  { frequency: 'Annual', item: 'ACLS Renewal', details: 'AHA Advanced Cardiac Life Support — required for in-clinic PAH syncope, RV failure, and pulmonary hypertensive crisis response.' },
  { frequency: 'Annual', item: 'RHC Interpretation Competency', details: 'Right heart catheterization competency renewal — interpretation of mPAP ≥20 mmHg + PCWP ≤15 mmHg + PVR >2 Wood units per 2022 ESC/ERS hemodynamic definition.' },
  { frequency: 'Annual', item: '6MWT Certification', details: 'ATS 2014 6-minute walk test protocol — Borg dyspnea scoring, SpO₂ desaturation tracking, predicted distance calculation, low-risk threshold >440 m.' },
  { frequency: 'Annual', item: 'REVEAL Lite 2 Training', details: 'Risk calculator training — 6 noninvasive variables (WHO FC, SBP, HR, 6MWD, BNP/NT-proBNP, eGFR), low-risk score ≤6 goal-directed target.' },
  { frequency: 'Annual', item: 'ERA Hepatotoxicity Monitoring CE', details: 'Bosentan/ambrisentan/macitentan REMS — monthly LFT monitoring (AST/ALT >3× ULN hold), monthly hemoglobin, monthly pregnancy testing (Category X).' },
  { frequency: 'Quarterly', item: 'Treprostinil Titration Protocol', details: 'IV/SC/oral/inhaled treprostinil dose escalation documentation, central line CLABSI surveillance, GI tolerability, and site rotation per pump-specific protocols.' },
  { frequency: 'Annual', item: 'PHA PH Professional Network CE', details: 'Pulmonary Hypertension Association — WHO Group 1–5 differential, REVEAL Lite 2 application, and ESC/ERS 2022 guideline updates.' },
  { frequency: 'Biennial', item: 'CHEST PH Track CE', details: 'CHEST Annual Meeting pulmonary hypertension specialty track — combination therapy, vasoreactivity testing, and lung transplant referral criteria.' },
]

export default function PulmonaryHypertensionNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Pulmonary Hypertension Nurse Practitioners"
        title="Every REVEAL Score. Every Treprostinil Titration. Every RHC."
        subtitle="Pulmonary hypertension nurse practitioners manage one of the most pharmacologically intricate advanced practice portfolios in cardiopulmonary medicine — Group 1 PAH upfront combination therapy (ERA + PDE5i ± prostacyclin), monthly REVEAL Lite 2 risk stratification, monthly 6-minute walk testing, quarterly RHC hemodynamic documentation, ERA/PDE5i/prostacyclin titration CE, bosentan/macitentan REMS monitoring, and lung transplant referral coordination at persistent high-risk thresholds. Momenties automates every deadline so your PAH program achieves goal-directed low-risk REVEAL Lite 2 ≤6."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Pulmonary Hypertension NP Compliance Lifecycle
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
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              5 Landmark Trials That Define Pulmonary Hypertension NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind PHA quality benchmarks, ESC/ERS PAH treatment algorithms, and REVEAL Lite 2 goal-directed therapy.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.95rem', color: '#f0ece3', lineHeight: 1.65, marginBottom: 14 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.88rem', color: '#a0998e', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14 }}>{study.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CE / Certification Schedule */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
            Pulmonary Hypertension NP CE & Certification Calendar
          </h2>
          <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
            Every credential, REMS protocol, and competency renewal mapped to its frequency. One calendar. Zero missed deadlines.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {schedule.map((row) => (
              <div key={row.item} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px', alignItems: 'start' }}>
                <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'JetBrains Mono, monospace' }}>{row.frequency}</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#f0ece3', fontSize: '0.98rem', marginBottom: 4 }}>{row.item}</div>
                  <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.55 }}>{row.details}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve Low-Risk REVEAL Lite 2 ≤6 in Your PAH Program?"
        subtext="Join pulmonary hypertension nurse practitioners using Momenties to automate every RHC, 6MWT, REMS, and combination therapy escalation deadline. Free to start."
      />
    </main>
  )
}
