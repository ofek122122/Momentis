import { Shield, BarChart3, Calendar, ClipboardList } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Eosinophilic Esophagitis Nurse Practitioners — Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing dupilumab injection training, DSQ symptom trending, endoscopy scheduling, and elimination diet coordination in eosinophilic esophagitis clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Dupilumab SC Injection Training & ISR/Conjunctivitis Monitoring',
    description: 'Dupilumab (Dupixent) 300 mg SC every 2 weeks patient injection training — site rotation education (abdomen, thigh, upper arm), cold-chain storage counseling (2–8°C), and first self-administration competency verification with return demonstration; injection site reaction (ISR) monitoring at each visit with erythema, pruritus, and induration grading (CTCAE v5.0); conjunctivitis surveillance and ophthalmology referral triggers for persistent ocular symptoms (occurs in approximately 10–28% of dupilumab-treated EoE patients); biologic prior authorization renewal tracking; missed-dose management protocol for Q2W schedule adherence; and collaborative practice agreement renewal with gastroenterologist for dupilumab prescribing authority.',
  },
  {
    icon: BarChart3,
    title: 'DSQ Dysphagia Symptom Score Trending & Food Impaction Education',
    description: 'Dysphagia Symptom Questionnaire (DSQ) score administration and trending at each clinical encounter — 10-item validated instrument (0–44 points, remission ≤10); serial DSQ trajectory graphing to distinguish symptom improvement from histologic response; food impaction emergency education — Heimlich maneuver alternatives, soft diet modification during acute dysphagia, when to present to emergency department; food impaction event documentation and frequency trending (>1 per year triggers dilation reassessment); symptom-histology discordance identification for patients with DSQ >10 despite eos/hpf <15; and patient-reported outcome (PRO) data collection for quality reporting.',
  },
  {
    icon: Calendar,
    title: 'Endoscopy Scheduling & Post-Dilation Care Education',
    description: 'Week 24 dupilumab response endoscopy coordination — insurance pre-authorization, anesthesia consent, and biopsy protocol education (proximal/mid/distal esophageal sampling required); esophageal dilation procedure pre-procedural education including NPO instructions, post-dilation diet progression (clear liquid → soft diet → regular diet over 48–72 hours), and chest pain monitoring with 24-hour post-dilation phone follow-up; endoscopy scheduling for SFED reintroduction protocol (every 6 weeks per food group reintroduction); annual surveillance endoscopy reminders for diet-managed patients; and urgent endoscopy triage for acute food impaction or severe dysphagia.',
  },
  {
    icon: ClipboardList,
    title: 'Elemental/6-Food Elimination Diet Reintroduction Protocol Coordination',
    description: 'Six-food elimination diet (SFED — milk, wheat, egg, soy, tree nuts/peanuts, fish/shellfish) stepwise reintroduction scheduling — single food reintroduction every 6 weeks with confirmatory endoscopy per ACG/AGA guidelines; elemental amino acid formula compliance counseling and nutritional adequacy monitoring (particularly calcium and vitamin D for milk-eliminated patients); dietitian co-management referral for SFED planning and meal preparation guidance; food diary review and trigger identification at each follow-up; transition counseling from elemental formula to SFED for newly tolerant patients; and annual dietary therapy vs. pharmacologic therapy reassessment for histologic remission maintenance.',
  },
]

const studies = [
  {
    title: 'LIBERTY-EoE-TREET (Dupilumab in EoE) — NEJM 2023',
    finding: 'Phase III trial of 321 EoE patients randomized to dupilumab 300 mg Q2W vs. placebo showed 59% of dupilumab patients achieved histologic remission (peak eos/hpf <6) at Week 24 vs. 6% placebo (P<0.001). DSQ score improvement was −21.9 points with dupilumab vs. −9.6 placebo. Esophageal distensibility also significantly improved on balloon functional lumen imaging (EndoFLIP).',
    implication: 'NPs initiating dupilumab must schedule Week 24 response endoscopy at time of prescription, document baseline peak eos/hpf and DSQ score, provide injection training with ISR monitoring, and assess conjunctivitis at every Q2W follow-up. Week 24 combined histologic-symptomatic response (eos/hpf <6 AND DSQ ≤10) is now the dual primary endpoint benchmark for EoE biologic therapy.',
  },
  {
    title: 'Six-Food Elimination Diet (Molina-Infante et al.) — J Allergy Clin Immunol 2014',
    finding: 'Systematic review and meta-analysis of 672 EoE patients across empiric dietary elimination trials found 6-food elimination diet achieved histologic remission (<15 eos/hpf) in 72% of patients, 4-food elimination in 54%, 2-food elimination (milk + gluten) in 43%, and elemental diet in 90.8%. Milk was the most common single trigger (identified in 65–80% of patients who underwent reintroduction).',
    implication: 'NPs coordinating dietary therapy must schedule reintroduction endoscopies every 6 weeks per single food reintroduction phase, prioritize milk and wheat reintroduction first (highest yield), counsel on dietitian referral for SFED planning, and document histologic response at each reintroduction phase. Failure to identify trigger within 5–6 food reintroductions prompts pharmacologic therapy initiation.',
  },
  {
    title: 'Esophageal Dilation in EoE (Schoepfer et al.) — Gastrointest Endosc 2010',
    finding: 'Retrospective study of 207 EoE patients undergoing 293 dilation procedures showed symptom improvement in 83% with target luminal diameter ≥16 mm. Complication rate was 1% (perforation risk lower than historically estimated). Symptom recurrence at 1 year was 45%, with re-dilation required in approximately one-third of patients annually.',
    implication: 'EoE NPs must document DSQ score pre-dilation and at 4-week post-dilation follow-up, educate patients on post-dilation soft diet progression (48–72 hours), provide 24-hour post-dilation chest pain monitoring instructions, and schedule annual re-dilation assessment for fibrostenotic patients. Dilation improves dysphagia independently of eosinophilic inflammation and is complementary to pharmacologic and dietary therapy.',
  },
  {
    title: 'PPI-Responsive Esophageal Eosinophilia (Molina-Infante et al.) — Am J Gastroenterol 2016',
    finding: 'Systematic review of 619 patients with esophageal eosinophilia treated with high-dose PPI showed histologic remission (<15 eos/hpf) in 50.5% — indicating that PPI-responsive EoE and GERD-associated eosinophilia are histologically indistinguishable without pH-impedance testing. PPI-responsive patients have similar clinical, endoscopic, and histologic features to GERD-non-responsive EoE.',
    implication: 'NPs must complete 8-week high-dose PPI trial (omeprazole 40 mg BID or equivalent) for all new EoE diagnoses before initiating dupilumab or dietary therapy, coordinate pH-impedance (MII-pH) study for refractory heartburn or GERD/EoE overlap, and document PPI response endoscopy (eos/hpf at 8 weeks). PPI non-responders with persistent eos/hpf >15 are appropriate candidates for dupilumab or dietary escalation.',
  },
  {
    title: 'EoE Complications & Natural History (Straumann et al.) — Gastroenterology 2011',
    finding: 'Prospective 11.5-year follow-up of 30 adult EoE patients showed 100% developed fibrostenotic features (rings, strictures) without treatment. Annual food impaction rate was 50%. Untreated active EoE results in progressive subepithelial fibrosis and esophageal remodeling — peak eosinophil counts correlate with fibrostenotic severity score (EoERI).',
    implication: 'NPs must educate all EoE patients on food impaction risk (emergency department presentation criteria, Heimlich maneuver limitations for esophageal obstruction, soft diet modifications during dysphagia flares), document annual DSQ trajectories, and refer for esophageal dilation assessment when DSQ >10 or luminal diameter <13 mm on EndoFLIP or barium swallow. Early treatment prevents irreversible fibrostenotic remodeling.',
  },
]

const schedule = [
  {
    frequency: 'Every 2 Weeks',
    item: 'Dupilumab 300 mg SC Q2W Dosing',
    details: 'Patient self-administration calendar with injection site rotation; ISR monitoring (erythema, pruritus, induration grading per CTCAE v5.0); conjunctivitis surveillance; missed-dose management (administer as soon as possible, resume Q2W schedule).',
  },
  {
    frequency: 'Every 6 Weeks',
    item: 'SFED Reintroduction Endoscopy',
    details: 'Single food reintroduction with confirmatory endoscopy per ACG/AGA protocol — proximal, mid, distal esophageal biopsies; peak eos/hpf assessment; food trigger identification documentation. Prioritize milk, then wheat, then egg, soy, nuts, fish/shellfish.',
  },
  {
    frequency: 'Week 12 & Week 24',
    item: 'Dupilumab Response Assessment',
    details: 'DSQ score at Week 12 for early symptom response trending; Week 24 response endoscopy for primary endpoint histologic remission (peak eos/hpf <6); combined histologic-symptomatic response documentation; treatment continuation vs. modification decision.',
  },
  {
    frequency: 'At Each Visit',
    item: 'DSQ Symptom Score Trending',
    details: 'Dysphagia Symptom Questionnaire (10-item, 0–44 points) administration; remission target ≤10 points; food impaction frequency documentation; symptom-histology discordance identification; patient-reported outcome data collection for quality reporting.',
  },
  {
    frequency: 'Annual',
    item: 'Surveillance Endoscopy (Diet-Managed)',
    details: 'Annual surveillance endoscopy for EoE patients in dietary-induced histologic remission — proximal, mid, distal biopsy sampling; AGREE protocol compliance; fibrostenotic feature assessment (rings, furrows, stricture); EoERI scoring for dilation eligibility.',
  },
  {
    frequency: 'Annual',
    item: 'Esophageal Dilation Re-Assessment',
    details: 'Annual fibrostenotic re-assessment for all dilation-eligible EoE patients; DSQ score and luminal diameter trending; re-dilation scheduling for recurrent symptoms (45% annual symptom recurrence rate post-dilation); EndoFLIP or barium swallow coordination.',
  },
  {
    frequency: 'Every 8 Weeks',
    item: 'High-Dose PPI Compliance Review',
    details: 'PPI adherence and symptom recurrence monitoring for PPI-responsive EoE patients; dose tapering trial eligibility assessment after 12+ months of histologic remission; pH-impedance re-study for refractory heartburn on maintenance PPI.',
  },
  {
    frequency: 'Annual',
    item: 'Dietitian Co-Management & Nutritional Review',
    details: 'SFED patient nutritional adequacy review — calcium/vitamin D for milk-eliminated patients, protein monitoring for multi-food elimination; elemental formula tolerance and transition counseling; annual dietary therapy vs. pharmacologic reassessment.',
  },
]

export default function EosinophilicEsophagitisnpPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Eosinophilic Esophagitis"
        title="EoE Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing dupilumab injection training, DSQ symptom trending, endoscopy scheduling, and elimination diet coordination in eosinophilic esophagitis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full EoE NP Practice
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
              The Evidence Base Driving EoE NP Practice
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

      {/* Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              EoE NP Protocol Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
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
              Managing EoE patients means tracking dupilumab Q2W injection schedules, ISR and conjunctivitis monitoring, DSQ scores at every visit, Week 24 response endoscopies, SFED reintroduction endoscopies every 6 weeks, post-dilation care instructions, and PPI compliance — all simultaneously across a busy GI NP panel. Momenties automated every interval so I could focus on patient education and care coordination rather than chasing scheduling gaps.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Lisa M., FNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Gastroenterology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Automate Your EoE NP Scheduling Workflow?"
        subtext="Momenties consolidates dupilumab Q2W injection schedules, ISR and conjunctivitis monitoring, DSQ trending, Week 24 response endoscopies, SFED reintroduction protocols, and dilation follow-up into one accountable calendar — so every EoE patient milestone is on time, every visit."
      />
    </main>
  )
}
