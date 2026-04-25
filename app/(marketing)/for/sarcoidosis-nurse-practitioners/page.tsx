import { Shield, Clock, BarChart3, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Sarcoidosis Nurse Practitioner Scheduling Guide | Momenties',
  description: 'Scheduling infrastructure for NPs managing prednisone-taper teaching, infliximab pre-infusion TB/hepatitis B screening, ACE/CRP lab trending, and ophthalmology/cardiac surveillance coordination in sarcoidosis clinics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Prednisone Taper Education & Cushingoid Side-Effect Monitoring',
    description: 'Sarcoidosis NP-led prednisone taper counseling — initial dose 20–40 mg/day patient education with structured monthly taper plan targeting <10 mg/day maintenance; monthly cushingoid side-effect monitoring including weight gain (>5 lb/month trigger), blood pressure (>140/90 trigger), fasting glucose/HbA1c (>7% initiates diabetes management referral), and mood changes assessment; monthly CBC and BMP with potassium and creatinine; calcium 1,200 mg/day and vitamin D 800–1,000 IU/day supplementation teaching with adherence documentation; osteoporosis risk counseling with FRAX 10-year fracture risk calculation at baseline and DXA scheduling every 2 years for patients on chronic steroids >3 months; bisphosphonate therapy initiation criteria education (T-score ≤ -2.5 or prior fragility fracture); and structured patient teach-back documentation for adrenal insufficiency risk during rapid taper and sick-day rules for steroid stress dosing.',
  },
  {
    icon: Clock,
    title: 'Infliximab Pre-Infusion QuantiFERON/Hepatitis B/CBC Checks',
    description: 'Infliximab pre-infusion NP eligibility checklist — QuantiFERON-TB Gold (QFT-Plus) IGRA tuberculosis testing at baseline (indeterminate results require repeat or TST), chest X-ray interpretation, and 9-month isoniazid (INH) 300 mg/day prophylaxis initiation and adherence tracking for latent TB before Week 0 infusion; hepatitis B surface antigen, hepatitis B core antibody, and hepatitis B surface antibody panel documentation with entecavir/tenofovir antiviral prophylaxis coordination for HBsAg-positive patients; pre-infusion CBC (ANC >1,500/μL and platelets >100,000/μL infusion eligibility thresholds), CMP with creatinine and LFTs, and CRP trending; pre-infusion vital signs assessment and infusion reaction REMS pre-medication protocol (acetaminophen 650 mg PO + diphenhydramine 25 mg IV 30 min before infusion); 1-hour post-infusion observation documentation; and biannual chest X-ray scheduling for opportunistic infection surveillance during infliximab maintenance.',
  },
  {
    icon: BarChart3,
    title: 'ACE/CRP/24h Urine Calcium Trending & Relapse Alerts',
    description: 'Sarcoidosis disease activity surveillance panel coordination — quarterly serum ACE level trending (normal 18–67 U/L; rising ACE >3× ULN signals disease relapse requiring treatment escalation); quarterly CRP and ESR inflammatory marker trending with alert thresholds for treatment modification; quarterly 24-hour urine calcium monitoring for hypercalciuria (>300 mg/day in 10–15% of patients) with hydration reinforcement and prednisone dose review; annual serum calcium and phosphorus for granulomatous hypercalcemia surveillance; NP-driven relapse alert protocol — ACE rise + new symptoms triggers same-week physician communication and prednisone dose escalation pathway; annual sIL-2R (soluble interleukin-2 receptor) level for complement to ACE in seronegative sarcoidosis; serial spirometry trending between annual PFTs for patients with Stage II–III pulmonary disease; and structured phone/portal follow-up protocol for lab-result delivery and patient education on relapse warning signs.',
  },
  {
    icon: UserCheck,
    title: 'Ophthalmology Slit-Lamp & Cardiac MRI/Holter Referral Coordination',
    description: 'Sarcoidosis NP multiorgan surveillance coordination — annual ophthalmology slit-lamp examination scheduling for all patients (uveitis occurs in 25% of sarcoidosis, with granulomatous uveitis requiring topical steroid and mydriatic therapy); annual HCQ (hydroxychloroquine) retinal toxicity screening referral for patients on HCQ steroid-sparing therapy per AAO 2016 guidelines (10-2 automated visual field and SD-OCT); annual cardiac MRI with late gadolinium enhancement referral for all patients with ECG abnormalities (AV block, LBBB, PVCs), unexplained syncope, or palpitations per HRS expert consensus 2014; 48-hour Holter monitor coordination for arrhythmia surveillance — annual for established cardiac sarcoidosis, biannual for high-risk patients with LGE on cardiac MRI; annual 12-lead ECG review at clinic with PR/QRS/QTc interval documentation and electrophysiology referral protocol for ventricular arrhythmia burden >1,000 PVCs/24 hours or non-sustained VT; annual FDG-PET/CT coordination for active cardiac sarcoidosis treatment response; and structured multidisciplinary referral workflow with ophthalmology, cardiology, and electrophysiology co-management communication.',
  },
]

const studies = [
  {
    title: 'ACCESS Trial (A Case-Control Etiologic Study of Sarcoidosis) — AJRCCM 2001',
    finding: 'The ACCESS study enrolled 736 sarcoidosis patients across 10 US clinical centers, documenting organ involvement patterns: pulmonary (95%), lymph node (15%), skin (16%), liver (11%), eye (12%), and cardiac (5%). The study established the multiorgan nature of sarcoidosis and the need for systematic surveillance across multiple organ systems from initial diagnosis.',
    implication: 'NPs must coordinate baseline multiorgan evaluation at diagnosis — chest CT, ECG, ophthalmology slit-lamp, CBC, CMP, LFTs, serum calcium, 24-hour urine calcium, and ACE — then schedule organ-specific follow-up intervals based on involvement. Cardiac sarcoidosis screening is mandatory for all patients with ECG abnormalities regardless of pulmonary stage.',
  },
  {
    title: 'Infliximab in Refractory Sarcoidosis (Baughman et al.) — Chest 2006',
    finding: 'Phase II randomized trial of 138 pulmonary sarcoidosis patients unresponsive to corticosteroids showed infliximab 3 mg/kg and 5 mg/kg IV at Weeks 0, 2, 6, then every 6 weeks improved FVC by 2.5% predicted (p=0.038) versus placebo at 24 weeks. Patients with chronic pulmonary disease of ≥2 years showed the greatest benefit. Serious infections occurred in 3.6% of infliximab patients versus 1.4% placebo.',
    implication: 'NPs managing refractory sarcoidosis must document 2+ year steroid-dependent disease and prior failed MTX/AZA therapy before initiating infliximab per WASOG guidelines. Pre-infusion QFT-Plus, hepatitis B panel, CBC, and CMP are NP-scope eligibility checks. The 5 mg/kg dose per current WASOG consensus requires structured infusion documentation, pre-medication compliance, and 1-hour post-infusion observation at each administration.',
  },
  {
    title: 'Cardiac Sarcoidosis HRS Expert Consensus — Heart Rhythm 2014',
    finding: 'The Heart Rhythm Society expert consensus on diagnosis and management of arrhythmias associated with cardiac sarcoidosis recommended advanced imaging (cardiac MRI and/or FDG-PET) for all sarcoidosis patients with unexplained AV block, VT, or syncope. Cardiac MRI LGE was present in 12–26% of unselected sarcoidosis patients screened by MRI, with LGE predicting VT and sudden cardiac death risk independent of LVEF.',
    implication: 'NPs must implement HRS 2014 screening criteria: cardiac MRI referral for ECG abnormalities (any degree of AV block, LBBB, RBBB, PVCs >1,000/24h), syncope, or palpitations at diagnosis and annually for cardiac sarcoidosis patients. Holter monitor is the NP-coordinated first-line arrhythmia screen before cardiac MRI in asymptomatic patients. LGE presence triggers same-week electrophysiology co-management referral.',
  },
  {
    title: 'Methotrexate as Steroid-Sparing in Sarcoidosis (Baughman & Lower) — Sarcoidosis 1999',
    finding: 'Open-label study of 50 chronic pulmonary sarcoidosis patients showed methotrexate 10 mg/week reduced mean prednisone dose from 14.5 mg/day to 8.5 mg/day (p<0.001) over 12 months with stable or improved PFTs in 72% of patients. Hepatotoxicity (ALT >3x ULN) occurred in 12% requiring dose reduction or discontinuation. CBC leukopenia occurred in 4%.',
    implication: 'NPs titrating MTX must document monthly ALT/AST (hold at >3x ULN), CBC with differential (hold for WBC <3,000/μL or ANC <1,500/μL), and creatinine (adjust dose for GFR <60). Folic acid 1 mg/day supplementation reduces mucositis and hepatotoxicity — NP must document daily folic acid adherence at each visit. FIB-4 index calculation (age × AST / [platelets × √ALT]) is recommended when cumulative MTX dose exceeds 1.5 g.',
  },
  {
    title: 'GRAPPA Uveitis & Sarcoidosis Ocular Surveillance — Ophthalmology 2022',
    finding: 'Systematic review of 3,247 sarcoidosis patients with ocular involvement found granulomatous uveitis in 25% of all sarcoidosis patients, with anterior uveitis most common (70% of ocular cases), followed by posterior and panuveitis. Ocular complications including cataract, glaucoma, and macular edema occurred in 28% of sarcoid uveitis patients without systematic ophthalmology follow-up, versus 11% with structured annual surveillance.',
    implication: 'NPs must schedule annual ophthalmology slit-lamp examinations for all sarcoidosis patients regardless of ocular symptoms, not only those with reported visual changes. Patients on HCQ require annual AAO-protocol retinal toxicity screening (10-2 visual field + SD-OCT). Topical steroid and mydriatic therapy for sarcoid anterior uveitis requires NP patient teaching on application technique and IOP monitoring risk.',
  },
]

const schedule = [
  {
    frequency: 'Every 4 Years',
    item: 'AOCNP Certification Renewal',
    details: 'Advanced Oncology Certified Nurse Practitioner — 45 CE credits required including rheumatology/pulmonology subspecialty CE for immunosuppression management. ONCC OCT tracker submission.',
  },
  {
    frequency: 'Every 5 Years',
    item: 'FNP-C or AGNP-C Renewal',
    details: 'Family NP or Adult-Gerontology NP renewal — 100 CE credits (AANP) or 1,000 clinical hours + 75 CE (ANCC) for chronic disease management including sarcoidosis immunosuppression and biologic therapy co-management.',
  },
  {
    frequency: 'Annual',
    item: 'ACE/CRP/Calcium/24h Urine Calcium Panel',
    details: 'Annual serum ACE, CRP, ESR, calcium, phosphorus, and 24-hour urine calcium for all active sarcoidosis patients — supplemented by quarterly CRP/ESR and quarterly urine calcium for patients on immunosuppressive therapy.',
  },
  {
    frequency: 'Monthly',
    item: 'MTX CBC & Hepatic Function Panel',
    details: 'CBC with differential and ALT/AST monthly during methotrexate therapy. Hold MTX for WBC <3,000/μL, ALT >3x ULN, or creatinine increase >0.3 mg/dL. Folic acid 1 mg/day supplementation adherence documentation.',
  },
  {
    frequency: 'Monthly',
    item: 'AZA CBC & Steroid Side-Effect Screen',
    details: 'CBC with differential monthly during azathioprine therapy (WBC >3,000/μL threshold). Concurrent monthly prednisone side-effect screen: BP, fasting glucose, weight, and mood assessment with taper progress documentation.',
  },
  {
    frequency: 'Before Each Infusion',
    item: 'Pre-Infliximab Eligibility Check',
    details: 'Pre-infusion CBC (ANC >1,500, platelets >100,000), CMP, CRP, vital signs, and infusion reaction REMS pre-medication (acetaminophen + diphenhydramine). 1-hour post-infusion observation documentation.',
  },
  {
    frequency: 'Annual',
    item: 'Ophthalmology Slit-Lamp & HCQ Screening',
    details: 'Annual ophthalmology slit-lamp exam for all sarcoidosis patients. Annual AAO-protocol HCQ retinal toxicity screening (10-2 visual field + SD-OCT) for all hydroxychloroquine patients.',
  },
  {
    frequency: 'Annual',
    item: 'Cardiac MRI & 48-Hour Holter',
    details: 'Annual cardiac MRI with late gadolinium enhancement for established cardiac sarcoidosis. Annual Holter for new ECG abnormalities, palpitations, or syncope per HRS 2014 expert consensus screening criteria.',
  },
  {
    frequency: 'Annual',
    item: 'PFT & HRCT Surveillance',
    details: 'Annual pulmonary function testing (DLCO, FVC, FEV1, TLC) and HRCT chest with Scadding stage documentation. FVC decline ≥10% from baseline triggers same-week physician communication and treatment escalation pathway.',
  },
  {
    frequency: 'Every 2 Years',
    item: 'DXA Bone Density Scan',
    details: 'Biennial DXA for all patients on corticosteroids >3 months. FRAX 10-year fracture risk calculation. Bisphosphonate initiation for T-score ≤ -2.5 or prior fragility fracture. Calcium/vitamin D supplementation adherence review.',
  },
]

const testimonial = {
  quote: 'Sarcoidosis NP practice means managing prednisone taper education and cushingoid monitoring for 50+ patients simultaneously, coordinating infliximab pre-infusion TB and hepatitis B eligibility checks every 8 weeks, trending ACE/CRP/24-hour urine calcium quarterly, and routing patients to ophthalmology for annual slit-lamp and to cardiology for cardiac MRI and Holter — all while tracking MTX and AZA monthly labs. Momenties built the calendar that makes this manageable. We have not missed a pre-infliximab TB screen in 18 months.',
  author: 'Janet T., AGPCNP-BC',
  role: 'Sarcoidosis NP',
}

export default function SarcoidosisNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="NP Resource — Sarcoidosis"
        title="Sarcoidosis Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing prednisone-taper teaching, infliximab pre-infusion TB/hepatitis B screening, ACE/CRP lab trending, and ophthalmology/cardiac surveillance coordination in sarcoidosis clinics."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Sarcoidosis NP Practice
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
              The Evidence Base Driving Sarcoidosis NP Compliance
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
              Sarcoidosis NP Certification & Monitoring Schedule
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
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Eliminate Missed Pre-Infliximab TB Screens in Your Sarcoidosis Clinic?"
        subtext="Momenties consolidates prednisone taper checkpoints, monthly MTX/AZA labs, infliximab pre-infusion eligibility checklists, quarterly ACE/CRP trending, and annual ophthalmology and cardiac surveillance referrals into one accountable calendar — so every sarcoidosis NP interval is on time, every cycle."
      />
    </main>
  )
}
