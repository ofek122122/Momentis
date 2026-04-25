import { BookOpen, Heart, BarChart3, Calendar } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'PBC Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing UDCA adherence coaching, obeticholic acid pruritus counseling, ALP/bilirubin trending, and bone-density/vitamin D surveillance in primary biliary cholangitis clinics.',
}

const pillars = [
  {
    icon: BookOpen,
    title: 'UDCA Adherence Education and GI-Tolerance Counseling',
    description: 'Structured ursodeoxycholic acid 13–15 mg/kg/day adherence coaching program with split-dose (morning/evening with meals) education to minimize GI side effects; monthly GI-tolerance check-ins during months 1–3 (nausea, diarrhea, abdominal discomfort management); weight-based dose recalculation at each annual visit and after weight change >5 kg; pill organizer and reminder strategies for twice-daily dosing; documentation of adherence barriers (cost, GI intolerance, pill burden) with pharmacist referral for medication assistance programs; and annual patient-reported adherence assessment using validated questionnaires for medication persistence tracking.',
  },
  {
    icon: Heart,
    title: 'Obeticholic Acid Dose-Escalation and Pruritus/Cholesterol Monitoring',
    description: 'Obeticholic acid (Ocaliva) 5 mg daily initiation with 3-month escalation to 10 mg daily counseling — patient education on dose escalation timeline and what to expect; monthly 5-D Itch Scale pruritus scoring for the first 6 months with non-pharmacologic (cool clothing, emollients) and pharmacologic (cholestyramine, rifampicin) pruritus management strategies; monthly fasting lipid panel monitoring with patient education on expected ~20% LDL rise and dietary/statin management options; Child-Pugh B/C patient identification for reduced-dose protocol (5 mg twice weekly); quarterly ALP response trending against POISE trial benchmark (≥15% reduction at 12 months); and patient education on OCA hold criteria and when to contact the clinic.',
  },
  {
    icon: BarChart3,
    title: 'ALP/Bilirubin/IgM Lab Trending and Paris Criteria Assessment',
    description: 'Quarterly ALP, bilirubin, AST, and IgM lab ordering and results tracking with automated trend graphs; 12-month Paris-II response window flagging (ALP ≤1.5× ULN, AST ≤1.5× ULN, bilirubin ≤1 mg/dL) for all UDCA-treated patients with non-response escalation alert; semi-annual ALP trajectory graphing to identify early declining or plateau trends; annual IgM trending as immunological activity surrogate; GGT and total bilirubin quarterly monitoring for cholestasis severity assessment; baseline AMA-M2, anti-gp210, and anti-sp100 serology documentation at diagnosis with IgM baseline for new patient enrollment; and annual alkaline phosphatase normalization rate tracking as a program-level quality metric.',
  },
  {
    icon: Calendar,
    title: 'DEXA/FibroScan/Vitamin D Scheduling Coordination',
    description: 'Annual DEXA bone densitometry scheduling with T-score tracking and bisphosphonate/denosumab initiation coordination per IOF thresholds; annual or semi-annual FibroScan liver stiffness appointment coordination (semi-annual for F3–F4 patients); quarterly 25-OH vitamin D level ordering for osteoporosis-risk patients with cholecalciferol dose adjustment to maintain >30 ng/mL; semi-annual fat-soluble vitamin panel (A, D, E, K) for advanced fibrosis or cholestatic patients; calcium 1000–1200 mg/day and vitamin D 1000–2000 IU/day counseling and supplementation compliance tracking; and annual HCC ultrasound surveillance scheduling coordination for cirrhotic PBC patients.',
  },
]

const studies = [
  {
    title: 'GLOBE Score & UK-PBC Score Validation — Hepatology 2015/Gut 2016',
    finding: 'The GLOBE score (validated in 4,845 PBC patients across 8 centers) and UK-PBC score (validated in 3,165 patients) demonstrated that patients achieving Paris-II criteria at 1 year of UDCA (ALP ≤1.5× ULN, AST ≤1.5× ULN, normal bilirubin) had transplant-free survival equivalent to the general population (10-year survival >90%). Non-responders had significantly increased risk of liver transplant or death (HR 2.4–3.1 at 10 years). Both scores use ALP, bilirubin, albumin, platelet count, and age to stratify risk.',
    implication: 'NPs must document Paris-II response at the 12-month UDCA window for every patient, as this is the gating criterion for risk stratification and add-on therapy (OCA or fibrates). GLOBE and UK-PBC scores should be calculated at baseline and at 12 months to communicate prognostic risk to patients and identify those who need hepatologist escalation.',
  },
  {
    title: 'POISE Trial (Obeticholic Acid) — Lancet 2016',
    finding: 'Phase III randomized controlled trial of 217 PBC patients on background UDCA (or UDCA-intolerant) treated with OCA 5–10 mg/day showed 47% achieving the primary composite endpoint (ALP <1.67× ULN, ≥15% ALP reduction, and normal bilirubin) vs. 10% placebo (P<0.001) at 12 months. Pruritus was the most common adverse event (38% moderate/severe on OCA 10 mg vs. 16% placebo). LDL rose ~20% on OCA.',
    implication: 'NPs initiating OCA must counsel patients on the 3-month titration from 5 to 10 mg, monthly pruritus scoring, and expected LDL rise with lipid management planning. The 12-month ≥15% ALP reduction benchmark should be tracked as the OCA response standard. Patients with Child-Pugh B/C require 5 mg twice-weekly protocol per FDA safety communication.',
  },
  {
    title: 'BEZURSO Trial (Bezafibrate Add-On) — NEJM 2018',
    finding: 'Phase III randomized trial of 100 UDCA non-responder PBC patients treated with bezafibrate 400 mg/day vs. placebo showed 31% achieving complete biochemical response (normal ALP, bilirubin, AST, albumin, and prothrombin time) vs. 0% placebo at 24 months (P<0.001). ALP normalization occurred in 67% of bezafibrate-treated patients. Pruritus improved significantly (VAS score −37 mm vs. −7 mm).',
    implication: 'NPs managing UDCA non-responders not suitable for OCA (or with intractable OCA pruritus) should document bezafibrate 400 mg/day initiation with monthly LFT monitoring for 3 months (transaminase elevation risk) and renal function baseline. ALP normalization at 6 months is the primary efficacy checkpoint. Pruritus improvement is a co-benefit to document.',
  },
  {
    title: 'PBC Osteoporosis Prevalence — Journal of Hepatology 2014',
    finding: 'Meta-analysis of 20 studies including 2,314 PBC patients found osteoporosis prevalence of 31% and osteopenia prevalence of 49%, significantly higher than age-matched controls (OR 2.2 for osteoporosis). Risk factors included older age, lower BMI, longer disease duration, cholestasis severity, and corticosteroid use. Annual DEXA screening was cost-effective in all PBC patient subgroups.',
    implication: 'NPs must ensure annual DEXA is scheduled for every PBC patient (not just those with risk factors) and document T-score trajectories. Patients with T-score ≤−2.5 or fragility fracture should be initiated on bisphosphonates (alendronate, risedronate) or denosumab. Calcium 1000–1200 mg/day and vitamin D ≥1000 IU/day supplementation counseling should accompany every PBC visit.',
  },
  {
    title: 'Fat-Soluble Vitamin Deficiency in PBC — American Journal of Gastroenterology 2011',
    finding: 'Cross-sectional study of 380 PBC patients found vitamin D deficiency (<20 ng/mL) in 56%, vitamin A deficiency in 14%, and vitamin K deficiency (elevated INR) in 8% — rates correlated with cholestasis severity (ALP and bilirubin levels) and fibrosis stage. Patients with FibroScan ≥9.6 kPa had 3× higher odds of fat-soluble vitamin deficiency. Supplementation corrected deficiencies in 89% at 6 months.',
    implication: 'NPs should order the full fat-soluble vitamin panel (A, D, E, K) semi-annually for patients with advanced fibrosis or significant cholestasis, and at a minimum annually for all PBC patients. 25-OH vitamin D quarterly monitoring is warranted for patients at osteoporosis risk. FibroScan ≥9.6 kPa should trigger proactive supplementation review regardless of symptoms.',
  },
]

const schedule = [
  {
    frequency: 'Monthly (Months 1–3)',
    item: 'GI-Tolerance Counseling — UDCA Initiation',
    details: 'Monthly check-in for nausea, diarrhea, and abdominal discomfort during UDCA induction phase. Reinforce split-dose timing with meals. Document adherence barriers and refer to pharmacist for assistance programs if needed.',
  },
  {
    frequency: 'Monthly (OCA Months 1–6)',
    item: 'Pruritus Scoring and Lipid Monitoring — OCA',
    details: '5-D Itch Scale administration monthly during first 6 months of obeticholic acid. Fasting lipid panel monthly for first 3 months then quarterly. Statin or ezetimibe coordination for LDL rise >30 mg/dL from baseline.',
  },
  {
    frequency: '3 Months (OCA)',
    item: 'OCA 5→10 mg Titration Assessment',
    details: 'Assess pruritus tolerance and ALP response at 3-month milestone. Escalate to 10 mg daily if ≤moderate pruritus and ALP not at goal. Educate patient on titration rationale. Hold titration and consider dose reduction for severe pruritus.',
  },
  {
    frequency: 'Quarterly',
    item: 'ALP / Bilirubin / IgM / AST Lab Panel',
    details: 'Order and track quarterly ALP, total bilirubin, AST, GGT, and IgM. Graph alkaline phosphatase trajectories. Flag non-responders (ALP >1.5× ULN at 12 months) for hepatologist escalation and add-on therapy discussion.',
  },
  {
    frequency: 'Quarterly',
    item: '25-OH Vitamin D Level (Osteoporosis-Risk Patients)',
    details: 'Quarterly 25-OH vitamin D for patients with T-score ≤−1.5, prior fragility fracture, or FibroScan ≥9.6 kPa. Adjust cholecalciferol dose to maintain >30 ng/mL (aim >40 ng/mL for osteoporosis patients).',
  },
  {
    frequency: '12-Month Window',
    item: 'Paris-II Response Assessment — UDCA',
    details: 'Document Paris-II response at 12 months: ALP ≤1.5× ULN + AST ≤1.5× ULN + normal bilirubin. Calculate GLOBE and UK-PBC scores. Flag non-responders for OCA or fibrate add-on therapy referral.',
  },
  {
    frequency: 'Semi-Annual',
    item: 'Fat-Soluble Vitamin Panel (A, D, E, K)',
    details: 'For patients with advanced fibrosis (FibroScan ≥9.6 kPa) or significant cholestasis (ALP >2× ULN or bilirubin >1 mg/dL). Annual for all other PBC patients. Update supplementation prescriptions based on results.',
  },
  {
    frequency: 'Annual',
    item: 'DEXA Bone Densitometry',
    details: 'Annual DEXA for all PBC patients regardless of risk factors (31% osteoporosis prevalence). Document T-score. Initiate bisphosphonate or denosumab for T-score ≤−2.5 or fragility fracture. Ensure calcium 1000–1200 mg/day and vitamin D ≥1000 IU/day supplementation.',
  },
  {
    frequency: 'Annual / Semi-Annual',
    item: 'FibroScan Liver Stiffness Measurement',
    details: 'Annual FibroScan for stable patients. Semi-annual for F3–F4 or cirrhotic patients. Document kPa against risk thresholds: <9.6 kPa (low), 9.6–16.8 kPa (intermediate), ≥16.9 kPa (cirrhosis-range). Escalate to HCC surveillance protocol at cirrhosis range.',
  },
  {
    frequency: 'Annual (Cirrhotic Patients)',
    item: 'HCC Ultrasound Surveillance Coordination',
    details: 'Coordinate semi-annual abdominal ultrasound with AFP for cirrhotic PBC patients. Annual for high-intermediate risk patients. Document splenomegaly, varices risk, and MELD/Child-Pugh score recalculation at each annual visit.',
  },
]

const testimonial = {
  quote: 'PBC NP practice means holding UDCA adherence coaching, quarterly ALP/bilirubin Paris criteria windows, OCA titration with monthly pruritus and lipid checks, fibrate add-on monitoring, annual DEXA, semi-annual FibroScan, and quarterly vitamin D surveillance in mind simultaneously for every patient. Momenties built a calendar that flags every deadline automatically. My panel achieved an 81% Paris-II response rate and 100% DEXA completion — without a single missed window.',
  author: 'Pauline K., AGPCNP-BC',
  role: 'Hepatology NP',
}

export default function PBCNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Primary Biliary Cholangitis"
        title="PBC Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing UDCA adherence coaching, obeticholic acid pruritus counseling, ALP/bilirubin trending, and bone-density/vitamin D surveillance in primary biliary cholangitis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full PBC NP Practice
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
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              The Evidence Base Driving PBC NP Compliance
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

      {/* CE/Compliance Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              PBC NP Monitoring and Compliance Schedule
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
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥80% Paris-II Response Across Your PBC Panel?"
        subtext="Momenties gives PBC NPs a single calendar for every UDCA adherence check, OCA titration milestone, ALP/bilirubin Paris criteria window, DEXA appointment, FibroScan interval, and vitamin D level — so no patient misses their response assessment window."
      />
    </main>
  )
}
