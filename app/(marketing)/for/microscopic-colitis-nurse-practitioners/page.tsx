import { BookOpen, ClipboardList, BarChart3, Calendar } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Microscopic Colitis Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing budesonide taper teaching, culprit-medication deprescribing, stool-frequency logs, and vedolizumab infusion coordination in microscopic colitis clinics.',
}

const pillars = [
  {
    icon: BookOpen,
    title: 'Budesonide Taper Education & Relapse-Trigger Counseling',
    description: 'Structured patient education at every budesonide taper step-down visit — explanation of why taper occurs in 3 mg decrements every 4 weeks, recognition of early relapse symptoms (watery stools >3/day, urgency, nocturnal episodes), and use of daily stool frequency diary as objective relapse detection tool; counseling on budesonide-dependent pattern definition (≥2 relapses within 12 months) and its implication for biologics escalation discussion; education on lifestyle relapse triggers including stress, high-fat diet, raw vegetables, caffeine, and smoking (associated with twofold increased MC risk); patient instruction on bismuth subsalicylate self-administration (262 mg × 3 tablets TID for 8 weeks maximum) as rescue option; written action plan for relapse escalation — when to call clinic, when to self-resume budesonide 9 mg pending appointment, and when to proceed to urgent evaluation; FNP-BC or AGNP-C annual continuing education requirements for GI pharmacology and biologic therapy management; and shared decision-making documentation for patients declining colonoscopy surveillance or deprescribing NSAIDs for pain or cardiac indications.',
  },
  {
    icon: ClipboardList,
    title: 'NSAID/PPI/SSRI Culprit-Medication Deprescribing',
    description: 'Systematic culprit-medication deprescribing protocol at diagnosis and every annual review — NSAID cessation with documented gastroenterology-to-prescriber communication (OR 2.2–3.0 for MC); PPI substitution assessment with documented reason if unable to discontinue (only Barrett esophagus, PPI-dependent ulcer disease, or high-dose NSAID cardiac patients qualify for continued PPI); switch from omeprazole or lansoprazole (highest MC risk PPIs) to pantoprazole or H2-blocker where GI indication requires acid suppression; SSRI deprescribing co-management with psychiatry or primary care — documentation of bupropion or mirtazapine substitution consideration and risk-benefit discussion; statin interchange from simvastatin or atorvastatin to pravastatin (lower MC risk) for cardiovascular patients; acarbose, olmesartan, and carbamazepine review with prescribing specialist for substitution eligibility; 3-month post-deprescribing stool normalization assessment with Bristol Stool Form Scale documentation; and tracking of deprescribing acceptance rates and alternative agent prescriptions as NP quality metric.',
  },
  {
    icon: BarChart3,
    title: 'Stool-Frequency & Bristol Stool Chart Log Review',
    description: 'Stool frequency diary review at every clinic visit — collect patient-completed logs documenting daily stool count, Bristol Stool Form Scale type (type 6 = mushy, type 7 = watery = active MC), urgency episodes, nocturnal stools, and abdominal cramping; Microscopic Colitis Symptom Index (MSI) calculation at baseline, week 6–8, and every taper step-down visit (4 items: stool frequency, stool consistency, abdominal pain, general wellbeing; score ≥25 = active disease); target metrics: ≤3 stools/day, Bristol type ≤5, zero nocturnal episodes for clinical remission definition; patient-reported outcome digital log review using EHR-integrated symptom tracking or paper log protocol; correlation of stool-frequency spikes with new culprit medications, dietary changes, or NSAID use; weight monitoring at each visit for nutritional impact assessment; hydration status and electrolyte review for patients with Bristol type 7 stools (>5/day = risk of dehydration and hypokalemia); and semi-annual patient satisfaction and medication-adherence survey for budesonide and biologic patients.',
  },
  {
    icon: Calendar,
    title: 'Vedolizumab Infusion Pre-Checks & Colonoscopy Biopsy Scheduling',
    description: 'Vedolizumab infusion pre-check protocol at every infusion visit — vital signs, weight-based dosing verification (300 mg flat dose IV), IV access assessment, hypersensitivity history review, and prior infusion reaction documentation; pre-infusion labs: CBC, CMP, CRP, and fecal calprotectin at baseline, week 14, and week 52 response assessments; week 14 clinical response documentation (≤3 stools/day and ≥50% stool reduction) with escalation to anti-TNF or infliximab co-management pathway for non-responders; anti-vedolizumab antibody trough level ordering for primary non-responders at week 14; colonoscopy biopsy scheduling protocol for relapse — coordinate same-day segmental biopsy with pathology (minimum 2 biopsies/segment × right colon, transverse colon, left colon, rectum per ACG guidelines); histologic response documentation at month 12 on biologics — IEL count normalization (<20/100 epithelial cells) and collagen band measurement for collagenous colitis; vedolizumab every-8-week maintenance infusion chair scheduling in infusion center with 30-minute observation period; and coordination with gastroenterologist for de-escalation discussion in patients with ≥12 months histologic remission on vedolizumab.',
  },
]

const studies = [
  {
    title: 'Budesonide for Collagenous Colitis — Gastroenterology 2014 (Miehlke et al.)',
    finding: 'Randomized controlled trial of 84 patients with active collagenous colitis treated with budesonide 9 mg/day versus placebo for 8 weeks showed clinical remission in 81% vs. 17% (P<0.001). Histologic remission achieved in 63% vs. 16%. Relapse occurred in 61% within 24 weeks of budesonide discontinuation, establishing the foundation for structured taper protocols and relapse surveillance.',
    implication: 'NPs must document budesonide 9 mg induction response at 6–8 weeks (≤3 stools/day, no watery stools), initiate structured 3 mg step-down taper at 4-week intervals upon remission, and schedule relapse surveillance visits at each taper step. The 61% post-discontinuation relapse rate requires every taper patient to have a clear escalation pathway documented at initiation.',
  },
  {
    title: 'NSAID/PPI/SSRI as Microscopic Colitis Risk Factors — Gut 2019 (Masclee et al.)',
    finding: 'Population-based case-control study of 2,184 microscopic colitis patients showed NSAIDs conferred OR 2.2 (95% CI 1.8–2.7), PPIs OR 1.7–2.6 (lansoprazole OR 2.6, omeprazole OR 2.3), and SSRIs OR 1.5–2.9. Discontinuation of culprit medications achieved clinical remission without pharmacotherapy in 35% of patients, with stool normalization within 3 months of cessation in responders.',
    implication: 'NPs must complete culprit-medication review at every new MC diagnosis and annual visit. Documenting formal NSAID and PPI deprescribing communication to co-prescribers and scheduling 3-month post-cessation stool-frequency reassessment is a quality standard. A 35% remission rate from deprescribing alone means medication review should precede or accompany budesonide initiation, not follow it.',
  },
  {
    title: 'Vedolizumab for Refractory Microscopic Colitis — Alimentary Pharmacology & Therapeutics 2019',
    finding: 'Multicenter retrospective study of 31 patients with budesonide-refractory or budesonide-dependent microscopic colitis treated with vedolizumab 300 mg IV at weeks 0, 2, 6 then every 8 weeks showed clinical response in 68% at week 14 and clinical remission in 55% at week 52. Histologic remission documented in 45% at month 12. Vedolizumab was well tolerated with no serious adverse events.',
    implication: 'NPs co-managing refractory MC must document vedolizumab induction pre-checks, schedule week 14 clinical response assessments (≤3 stools/day, ≥50% stool reduction), order anti-vedolizumab antibody trough levels for non-responders, and coordinate colonoscopy with segmental biopsy at month 12 for histologic remission documentation. The 55% week-52 remission rate confirms vedolizumab as the first-choice biologic for budesonide-dependent MC.',
  },
  {
    title: 'Microscopic Colitis Symptom Index (MSI) Validation — Journal of Crohns Colitis 2014',
    finding: 'Prospective validation study of the MSI (stool frequency, consistency, abdominal pain, wellbeing; max 100 points) in 97 collagenous and lymphocytic colitis patients showed MSI ≥25 correlates with active disease (sensitivity 87%, specificity 91%), MSI decrease ≥25 points from baseline defines clinical response, and MSI <10 at week 8 predicts sustained remission through 12 months with 78% accuracy.',
    implication: 'NPs must calculate MSI at baseline, week 6–8 budesonide response assessment, and every taper step-down visit. MSI ≥25 at taper step documents relapse and triggers budesonide re-escalation or biologics evaluation. MSI <10 at week 8 identifies patients likely to achieve sustained remission and can guide shared decision-making about taper speed and eventual discontinuation attempt.',
  },
  {
    title: 'Microscopic Colitis and Celiac Disease Co-Prevalence — Digestive Diseases and Sciences 2015',
    finding: 'Systematic review and meta-analysis of 19 studies comprising 4,870 MC patients showed celiac disease prevalence of 9.7% in microscopic colitis vs. 0.83% in general population (OR 11.7, 95% CI 7.8–17.5). Among MC patients with positive celiac serology, gluten-free diet achieved stool normalization in 67% without additional pharmacotherapy.',
    implication: 'NPs must order serum tTG-IgA and total IgA annually for all MC patients not screened in the prior 12 months. Positive celiac serology requires upper endoscopy referral with duodenal biopsy. Confirmed celiac-MC overlap patients should receive structured gluten-free diet counseling — achieving stool normalization in 67% without budesonide reduces pharmacotherapy burden and simplifies the management schedule.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'FNP-BC / AGNP-C Certification Renewal',
    details: 'Family or Adult-Gerontology Nurse Practitioner Board Certified renewal — 100 CE credits including 25 pharmacology credits. Required for ongoing prescribing of budesonide, biologics, and culprit-medication deprescribing co-management with gastroenterology.',
  },
  {
    frequency: 'Annual',
    item: 'GI Pharmacology & Biologic Therapy CE',
    details: 'Annual continuing education covering budesonide pharmacokinetics, vedolizumab mechanism and monitoring, anti-TNF adverse effect surveillance, and GI drug-culprit literature updates per ACG/AGA annual meeting content.',
  },
  {
    frequency: 'Annual',
    item: 'Medication Reconciliation for All Active MC Patients',
    details: 'Full medication review for all microscopic colitis patients — screen for NSAIDs, PPIs (omeprazole/lansoprazole), SSRIs, statins (simvastatin/atorvastatin), olmesartan, acarbose, and carbamazepine. Document deprescribing communications to co-prescribers.',
  },
  {
    frequency: 'Every 6–8 Weeks',
    item: 'Budesonide Induction Response Assessment',
    details: 'Clinical response documentation at 6–8 weeks of budesonide 9 mg: ≤3 stools/day, no watery type 7 stools, MSI <10 target. Responders initiate taper. Non-responders flagged for colonoscopy rebiopsy and culprit-medication audit.',
  },
  {
    frequency: 'Every 4 Weeks (Taper)',
    item: 'Budesonide Taper Step-Down Visit',
    details: 'Taper visit at budesonide 9 mg → 6 mg → 3 mg → discontinuation. Collect stool frequency diary and Bristol Stool Form Scale at each step. Relapse at any step triggers return to previous dose and biologics evaluation if ≥2 relapses in 12 months.',
  },
  {
    frequency: 'At Every Infusion',
    item: 'Vedolizumab Pre-Infusion Check',
    details: 'Pre-infusion: vitals, IV access assessment, hypersensitivity history review, prior reaction documentation. Labs at week 14 and week 52: CBC, CMP, CRP, fecal calprotectin, and anti-vedolizumab antibody trough for non-responders.',
  },
  {
    frequency: 'Weekly (Active Disease)',
    item: 'Stool Frequency Diary Review',
    details: 'Patient-completed daily log of stool count, Bristol type, urgency, and nocturnal episodes. Review at every visit. Digital or paper log acceptable. MSI calculation at every taper step. Target: ≤3 stools/day, Bristol ≤5, zero nocturnal episodes.',
  },
  {
    frequency: 'Every 3 Months (Post-Deprescribing)',
    item: 'Culprit-Medication Cessation Response Assessment',
    details: '3-month post-NSAID/PPI/SSRI cessation stool-frequency assessment. Document Bristol Stool Form Scale normalization. 35% of patients achieve remission from deprescribing alone. Identify responders to avoid unnecessary pharmacotherapy.',
  },
  {
    frequency: 'Annual',
    item: 'Celiac Disease Co-Screening',
    details: 'Order serum tTG-IgA and total IgA for all MC patients not screened in prior 12 months. Positive serology triggers upper endoscopy referral. Confirmed celiac-MC overlap patients receive gluten-free diet counseling — 67% achieve stool normalization without additional pharmacotherapy.',
  },
  {
    frequency: 'At Relapse',
    item: 'Colonoscopy & Segmental Biopsy Coordination',
    details: 'Coordinate same-day colonoscopy with segmental biopsy per ACG protocol (minimum 2 biopsies/segment × right, transverse, left colon, rectum). Ensure IEL count and collagen band measurement in pathology report. Schedule histologic response biopsy at month 12 for patients on vedolizumab.',
  },
]

export default function MicroscopicColitisNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Microscopic Colitis"
        title="Microscopic Colitis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing budesonide taper teaching, culprit-medication deprescribing, stool-frequency logs, and vedolizumab infusion coordination in microscopic colitis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Microscopic Colitis NP Practice
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
              The Evidence Base Driving Microscopic Colitis NP Compliance
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

      {/* CE & Protocol Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              Microscopic Colitis NP Certification &amp; Protocol Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div key={item.item} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 20, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 24px', alignItems: 'start' }}>
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
              Managing microscopic colitis patients means tracking budesonide taper step-downs every 4 weeks, reviewing stool frequency diaries at every visit, coordinating NSAID and PPI deprescribing with primary care and cardiology, scheduling colonoscopy biopsies at every relapse, pre-checking vedolizumab infusions, and doing annual celiac co-screening — all across a full panel. Momenties gave me one calendar that sequences every protocol interval automatically. I stopped missing taper visits and my deprescribing documentation is complete for the first time.
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>Christine L., FNP-BC</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>Gastroenterology NP</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Streamline Every Budesonide Taper and Vedolizumab Infusion in Your Microscopic Colitis Panel?"
        subtext="Momenties consolidates budesonide taper step-down visits, stool-frequency log reviews, culprit-medication deprescribing follow-ups, vedolizumab pre-checks, and colonoscopy biopsy scheduling into one accountable calendar — so every MC patient is on protocol, every visit."
      />
    </main>
  )
}
