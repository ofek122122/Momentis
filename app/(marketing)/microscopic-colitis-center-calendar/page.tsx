import { ClipboardList, Search, Stethoscope, Shield } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Microscopic Colitis Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for microscopic colitis centers coordinating budesonide 9 mg induction and taper, bismuth subsalicylate alternatives, colonoscopy/biopsy surveillance for relapse, medication-culprit review (NSAIDs/PPIs/SSRIs), and biologics (vedolizumab/anti-TNF) for refractory disease.',
}

const pillars = [
  {
    icon: ClipboardList,
    title: 'Budesonide 9 mg Induction & Taper Protocol',
    description: 'Budesonide 9 mg/day oral induction for collagenous colitis and lymphocytic colitis with clinical response assessment at 6–8 weeks (target ≤3 stools/day, no watery stools); structured 3 mg taper every 4 weeks to budesonide 6 mg, then 3 mg, then discontinuation with relapse surveillance at each step-down visit; relapse monitoring using stool frequency diary and Bristol Stool Form Scale type 6–7 documentation; bismuth subsalicylate (Pepto-Bismol) 262 mg × 3 tablets TID for 8 weeks as first-line alternative for patients intolerant of budesonide or with glucocorticoid contraindications; cholestyramine 4 g BID for bile acid malabsorption-associated microscopic colitis; annual review of budesonide-dependence pattern (≥2 relapses within 12 months) triggering biologics escalation pathway evaluation; and quarterly symptom-severity index (MSI) score documentation to stratify relapse risk and guide taper interval adjustments.',
  },
  {
    icon: Search,
    title: 'Culprit Medication Review & Deprescribing',
    description: 'Structured culprit-medication review at every visit — NSAIDs (odds ratio 2.2–3.0 for microscopic colitis), proton pump inhibitors (OR 1.7–2.6, particularly omeprazole and lansoprazole), selective serotonin reuptake inhibitors (OR 1.5–2.9), statins (OR 1.7 simvastatin/atorvastatin), acarbose, olmesartan, and carbamazepine; mandatory NSAID deprescribing with documented gastroenterology-to-prescriber communication for arthritis, cardiac, or pain management co-prescribers; PPI substitution with H2-blocker (famotidine 20–40 mg BID) or antacid for GERD indications where possible; SSRI medication review with psychiatry co-management and substitution to non-serotonergic alternatives (bupropion, mirtazapine) where clinically appropriate; 3-month post-deprescribing clinical response assessment documenting stool normalization; statin interchange protocol to pravastatin (lower MC risk) for cardiovascular patients; and annual medication reconciliation for all microscopic colitis patients to screen for newly added culprit agents.',
  },
  {
    icon: Stethoscope,
    title: 'Colonoscopy, Biopsy & Histologic Scoring',
    description: 'Colonoscopy with segmental biopsy protocol at relapse — minimum 2 biopsies each from right colon (cecum, ascending), transverse colon, left colon (descending, sigmoid), and rectum per ACG/ECCO microscopic colitis guidelines; Pardi histologic scoring for collagenous colitis: subepithelial collagen band ≥10 μm (normal <3 μm), mixed inflammatory infiltrate, intraepithelial lymphocytes >20/100 epithelial cells; lymphocytic colitis histology: intraepithelial lymphocytes >20/100 epithelial cells with absent collagen band thickening and surface epithelial damage; documentation of incomplete microscopic colitis (Fernández-Bañares criteria: IEL 10–20/100 with surface changes); annual consideration of upper endoscopy with duodenal biopsy for celiac disease co-screening (10–15% comorbidity); post-treatment biopsy at clinical remission to document histologic response; and centralized pathology review for borderline IEL counts to ensure inter-observer reliability.',
  },
  {
    icon: Shield,
    title: 'Vedolizumab & Anti-TNF for Refractory Disease',
    description: 'Vedolizumab induction for budesonide-dependent or refractory microscopic colitis — 300 mg IV at weeks 0, 2, and 6 induction followed by 300 mg IV every 8 weeks maintenance per published case series and UEG Week data; clinical response assessment at week 14 (≤3 stools/day without watery stool and ≥50% stool reduction) and week 52 for sustained remission; anti-TNF therapy (infliximab 5 mg/kg IV or adalimumab 160/80/40 mg SC) for vedolizumab-refractory or anti-integrin contraindication cases per ACG 2023 MC guidelines; budesonide-dependent microscopic colitis definition triggering biologics: ≥2 relapses within 12 months of taper or inability to taper below 6 mg without relapse; thiopurine (azathioprine 2–2.5 mg/kg/day or 6-mercaptopurine) as steroid-sparing bridge during biologic induction; anti-vedolizumab antibody trough level monitoring at week 14 for primary non-responders; and quarterly colonoscopy with biopsy at 12 months on biologics to assess mucosal and histologic healing.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Medication Reconciliation & Culprit Audit',
    tasks: 'Complete annual medication reconciliation for all active microscopic colitis patients. Screen all charts for newly added NSAIDs, PPIs (especially omeprazole/lansoprazole), SSRIs, statins, and other culprit agents added since last review. Initiate formal deprescribing communication to co-prescribers. Schedule Q1 clinical response assessments for patients currently on budesonide 9 mg induction.',
  },
  {
    phase: 'February',
    title: 'Budesonide 6–8 Week Induction Response Check',
    tasks: 'Complete 6–8 week budesonide induction response assessments for patients started in December–January. Document stool frequency (target ≤3/day), Bristol Stool Form Scale type, and Microscopic Colitis Symptom Index (MSI) score. Initiate taper to budesonide 6 mg/day for clinical responders. Flag non-responders for colonoscopy rebiopsy and culprit medication review.',
  },
  {
    phase: 'March',
    title: 'Q1 Taper Step-Down Surveillance & Relapse Check',
    tasks: 'Complete Q1 taper step-down visits for patients on budesonide 6 mg heading toward 3 mg reduction. Document stool frequency diary and Bristol type at each taper interval. Identify budesonide-dependent pattern (relapse at 6 mg or 3 mg step-down). Initiate biologics eligibility evaluation for patients with ≥2 relapses within rolling 12-month window.',
  },
  {
    phase: 'April',
    title: 'Colonoscopy & Biopsy Scheduling for Relapse',
    tasks: 'Schedule colonoscopy with segmental biopsy protocol for all patients with clinical relapse since Q4. Ensure minimum 2 biopsies per segment (right, transverse, left colon, rectum) per ACG/ECCO guidelines. Coordinate pathology reporting for collagen band measurement and IEL count. Review celiac co-screening eligibility for patients with IEL >20/100 and new diagnosis.',
  },
  {
    phase: 'May',
    title: 'Biologics Induction Assessment (Vedolizumab Week 14)',
    tasks: 'Complete week 14 vedolizumab clinical response assessments for patients started in February. Document ≤3 stools/day and ≥50% stool reduction as response criteria. Order anti-vedolizumab antibody trough levels for primary non-responders. Review anti-TNF candidacy (infliximab/adalimumab) for vedolizumab failures and co-manage with IBD service.',
  },
  {
    phase: 'June',
    title: 'Post-Deprescribing 3-Month Response Assessment',
    tasks: 'Complete 3-month post-culprit-medication deprescribing clinical response assessments for NSAID, PPI, and SSRI discontinuation patients enrolled in January–March. Document stool normalization and Bristol Stool Form Scale improvement. Identify patients achieving remission through deprescribing alone (no budesonide needed). Audit statin interchange compliance (simvastatin/atorvastatin to pravastatin).',
  },
  {
    phase: 'July',
    title: 'Bismuth Subsalicylate & Alternative Therapy Audit',
    tasks: 'Complete mid-year audit of bismuth subsalicylate 262 mg × 3 tablets TID compliance for budesonide-intolerant patients. Review 8-week treatment completion rates and clinical response. Assess cholestyramine 4 g BID efficacy for bile acid malabsorption-associated MC patients. Document adverse effects (bismuth neurotoxicity risk beyond 8 weeks) and transition planning.',
  },
  {
    phase: 'August',
    title: 'Q3 Taper Surveillance & Budesonide-Dependence Review',
    tasks: 'Complete Q3 budesonide taper step-down assessments. Conduct rolling 12-month relapse count for all taper patients — flag any with ≥2 relapses for biologics pathway. Review thiopurine (azathioprine/6-MP) compliance for patients using steroid-sparing bridge therapy during biologic induction. Adjust budesonide 3 mg to discontinuation for stable Q3 responders.',
  },
  {
    phase: 'September',
    title: 'Annual Celiac Disease Co-Screening',
    tasks: 'Complete annual celiac disease co-screening consideration for all microscopic colitis patients — order serum tTG-IgA and total IgA for patients not screened in prior 12 months (10–15% comorbidity rate). Schedule upper endoscopy with duodenal biopsy for serologically positive patients. Review gluten-free diet counseling for confirmed celiac-MC overlap patients.',
  },
  {
    phase: 'October',
    title: 'Vedolizumab Week 52 Sustained Remission Assessment',
    tasks: 'Complete week 52 vedolizumab sustained remission assessments for patients initiated in October of prior year. Schedule colonoscopy with biopsy for histologic healing documentation. Review vedolizumab every-8-week maintenance dosing compliance and infusion center scheduling for Q4. Identify patients in deep histologic remission for potential de-escalation discussion.',
  },
  {
    phase: 'November',
    title: 'SSRI & PPI Co-Prescriber Communication Audit',
    tasks: 'Complete annual co-prescriber communication audit — document all formal gastroenterology-to-primary-care or psychiatry letters requesting NSAID, PPI, and SSRI review for active microscopic colitis patients. Track acceptance rates and alternatives prescribed. Update patient medication lists in EHR with culprit-medication risk flags. Identify any patients with newly initiated culprit agents by non-GI providers.',
  },
  {
    phase: 'December',
    title: 'Annual Program Report & Protocol Update',
    tasks: 'Compile annual Microscopic Colitis Center report — budesonide induction response rates, taper completion rates, relapse rates per 12 months, biologics initiation rates, culprit-medication deprescribing outcomes, and histologic remission rates. Review ACG/ECCO updated MC guidelines. Plan next-year colonoscopy biopsy scheduling blocks and vedolizumab infusion chair allocations.',
  },
]

const kpis = [
  { metric: '≥80%', label: 'Clinical Response to Budesonide 9 mg Induction' },
  { metric: '<30%', label: '12-Month Relapse Rate After Taper Completion' },
  { metric: '100%', label: 'Segmental Biopsy Protocol Compliance at Relapse' },
  { metric: '≥70%', label: 'Culprit Medication Deprescribing Rate' },
  { metric: '≥65%', label: 'Vedolizumab Week 52 Sustained Remission' },
  { metric: 'Annual', label: 'Medication Reconciliation for All Active Patients' },
]

const testimonial = {
  quote: 'Microscopic colitis center management requires structured budesonide 9 mg induction and taper intervals, stool frequency diary review at every step-down, colonoscopy with segmental biopsy at relapse, annual culprit-medication reconciliation for NSAIDs, PPIs, and SSRIs, vedolizumab week 14 and week 52 response assessments, and celiac disease co-screening — all simultaneously across a large patient panel. Momenties consolidated every protocol milestone into a single calendar. Our center achieved 82% budesonide induction response and a 28% 12-month relapse rate.',
  author: 'Dr. D. Pardi',
  role: 'Microscopic Colitis Program',
}

export default function MicroscopicColitisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Microscopic Colitis Center"
        title="Microscopic Colitis Center Calendar Management"
        subtitle="AI-powered scheduling for microscopic colitis centers coordinating budesonide 9 mg induction and taper, bismuth subsalicylate alternatives, colonoscopy/biopsy surveillance for relapse, medication-culprit review (NSAIDs/PPIs/SSRIs), and biologics (vedolizumab/anti-TNF) for refractory disease."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Microscopic Colitis Center Compliance Lifecycle
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
              The Microscopic Colitis Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every budesonide taper interval, colonoscopy biopsy, culprit-medication review, and biologics response milestone — sequenced across 12 months.
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
              The 6 KPIs That Define Microscopic Colitis Program Excellence
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
        headline="Ready to Achieve ≥80% Budesonide Induction Response in Microscopic Colitis?"
        subtext="Join microscopic colitis centers using Momenties to automate every budesonide taper interval, colonoscopy biopsy schedule, culprit-medication review, and vedolizumab response checkpoint. Free to start."
      />
    </main>
  )
}
