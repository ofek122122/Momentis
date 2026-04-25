import { BarChart3, ClipboardList, Calendar, Shield } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'PBC Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for PBC centers coordinating AMA-M2/anti-gp210 serology, ursodeoxycholic acid response monitoring, obeticholic acid titration, fibrates (bezafibrate/fenofibrate) add-on therapy, and annual bone-density/liver-stiffness surveillance.',
}

const pillars = [
  {
    icon: BarChart3,
    title: 'AMA-M2/IgM and ALP/Bilirubin Paris Criteria Response Monitoring',
    description: 'Quarterly ALP, bilirubin, IgM, and AST trending against Paris-I criteria (ALP ≤3× ULN, AST ≤2× ULN, bilirubin ≤1 mg/dL at 1 year) and Paris-II criteria (ALP ≤1.5× ULN, AST ≤1.5× ULN, bilirubin ≤1 mg/dL at 1 year); baseline AMA-M2 and anti-gp210/anti-sp100 serology documentation at diagnosis; annual IgM trending as surrogate for disease activity; automated flags for inadequate UDCA response (ALP >1.5× ULN at 12 months) triggering add-on therapy review; and semi-annual alkaline phosphatase trajectory graphing to detect early non-response before Paris criteria window closes.',
  },
  {
    icon: ClipboardList,
    title: 'UDCA 13–15 mg/kg/day Adherence and Paris-II Response Assessment',
    description: 'Daily ursodeoxycholic acid (UDCA) 13–15 mg/kg/day adherence tracking with split-dose (morning/evening) compliance documentation; monthly weight-based dose recalculation for dosing accuracy; 12-month Paris-II response assessment (ALP ≤1.5× ULN + AST ≤1.5× ULN + normal bilirubin) — the primary UDCA efficacy endpoint; GI-tolerance counseling intervals (nausea, diarrhea) for first 3 months; annual GGT and total bilirubin trending; and automated reminder for dose adjustment after significant weight change (>5 kg) in either direction.',
  },
  {
    icon: Shield,
    title: 'Obeticholic Acid 5→10 mg Titration with Pruritus and Lipid Monitoring',
    description: 'Obeticholic acid (Ocaliva) 5 mg PO daily initiation with titration to 10 mg PO daily at 3 months if tolerated and ALP response is inadequate; monthly pruritus severity scoring (5-D Itch Scale) during first 6 months of therapy; monthly fasting lipid panel (OCA raises LDL ~20% — monitor and manage); dose reduction to 5 mg twice weekly for Child-Pugh B/C patients (cirrhosis safety protocol); quarterly ALP and bilirubin response assessment against POISE trial benchmarks (≥15% ALP reduction from baseline); and semi-annual liver stiffness measurement (FibroScan) to assess fibrosis progression during OCA therapy.',
  },
  {
    icon: Calendar,
    title: 'Annual DEXA, FibroScan, and Fat-Soluble Vitamin Supplementation Surveillance',
    description: 'Annual DEXA bone densitometry (≥30% of PBC patients develop osteoporosis; bisphosphonate/denosumab initiation per IOF T-score thresholds); annual FibroScan liver stiffness measurement (target <9.6 kPa for low fibrosis risk; ≥16.9 kPa triggers cirrhosis surveillance); semi-annual fat-soluble vitamin panel (vitamins A, D, E, K) with supplementation adequacy review for patients with advanced fibrosis or cholestasis; annual calcium (1000–1200 mg/day) and vitamin D (1000–2000 IU/day) adequacy audit; quarterly 25-OH vitamin D level for patients at osteoporosis risk; and annual hepatocellular carcinoma ultrasound surveillance for cirrhotic PBC patients (semi-annual).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual DEXA, Vitamin Panel, and Osteoporosis Review',
    tasks: 'Complete annual DEXA bone densitometry for all PBC patients. Review fat-soluble vitamin panel (A, D, E, K) and update supplementation regimens. Initiate or adjust bisphosphonate/denosumab for patients meeting IOF T-score thresholds. Audit calcium and vitamin D supplementation adequacy across the PBC cohort.',
  },
  {
    phase: 'February',
    title: 'Q1 ALP/Bilirubin/IgM Trending and Paris Criteria Assessment',
    tasks: 'Run Q1 ALP, bilirubin, IgM, and AST labs for all UDCA-treated patients. Graph alkaline phosphatase trajectories from treatment baseline. Flag patients with ALP >1.5× ULN at this timepoint for enhanced monitoring. Review AMA-M2 and anti-gp210 serology baselines for newly diagnosed patients.',
  },
  {
    phase: 'March',
    title: 'UDCA 12-Month Paris-II Response Assessment Window',
    tasks: 'Complete the critical 12-month Paris-II response assessment for patients starting UDCA the prior March. Document ALP ≤1.5× ULN, AST ≤1.5× ULN, and normal bilirubin achievement. Flag non-responders for obeticholic acid or fibrate add-on therapy discussion. Recalculate UDCA doses for patients with weight changes >5 kg.',
  },
  {
    phase: 'April',
    title: 'Obeticholic Acid 3-Month Titration and Pruritus Review',
    tasks: 'Assess patients at 3-month OCA milestone for titration from 5 mg to 10 mg daily based on ALP response and pruritus tolerance. Administer 5-D Itch Scale scoring. Review fasting lipid panel for LDL elevation (expect ~20% rise on OCA). Confirm Child-Pugh B/C patients remain on reduced dosing (5 mg twice weekly).',
  },
  {
    phase: 'May',
    title: 'Fibrate Add-On Therapy Initiation and Monitoring',
    tasks: 'Initiate bezafibrate 400 mg/day or fenofibrate 160 mg/day for UDCA non-responders not suitable for OCA. Establish monthly LFT monitoring for first 3 months of fibrate therapy (transaminase elevation risk). Document ALP and GGT response at 6 and 12 months (BEZURSO trial ALP normalization benchmarks). Audit renal function at baseline and 3 months (fibrate-related creatinine elevation).',
  },
  {
    phase: 'June',
    title: 'Semi-Annual FibroScan and Liver Stiffness Measurement',
    tasks: 'Complete semi-annual FibroScan liver stiffness measurement for advanced fibrosis patients (F3–F4). Document kPa values against risk thresholds (≥9.6 kPa intermediate, ≥16.9 kPa cirrhosis-range). Initiate semi-annual HCC ultrasound surveillance for cirrhotic patients. Review Q2 bilirubin and albumin for decompensation risk stratification.',
  },
  {
    phase: 'July',
    title: 'Q3 ALP/Bilirubin Trending and Add-On Therapy Response',
    tasks: 'Run Q3 ALP, bilirubin, AST, and GGT labs. Assess OCA-treated patients against POISE trial benchmark (≥15% ALP reduction from baseline). Review fibrate-treated patients for GGT and ALP response. Update alkaline phosphatase trajectory graphs. Flag patients with bilirubin >1 mg/dL for enhanced cholestasis management.',
  },
  {
    phase: 'August',
    title: 'Annual HCC Surveillance and Portal Hypertension Screening',
    tasks: 'Complete annual abdominal ultrasound and AFP for cirrhotic PBC patients (semi-annual if high-risk). Screen for portal hypertension signs (platelet count <150K, splenomegaly on imaging). Schedule upper endoscopy for varices surveillance if portal hypertension suspected. Review albumin, INR, and bilirubin for Child-Pugh and MELD score recalculation.',
  },
  {
    phase: 'September',
    title: 'Obeticholic Acid 6-Month Pruritus and Lipid Audit',
    tasks: 'Complete 6-month OCA pruritus reassessment (5-D Itch Scale) for patients on therapy. Review statin or ezetimibe initiation for patients with LDL elevation >30 mg/dL from baseline. Assess OCA dose reduction need for intractable pruritus. Document cholestyramine/rifampicin co-prescription for pruritus management.',
  },
  {
    phase: 'October',
    title: 'Q4 25-OH Vitamin D and Fat-Soluble Vitamin Recheck',
    tasks: 'Run Q4 25-OH vitamin D level for all osteoporosis-risk patients. Adjust cholecalciferol supplementation to maintain target >30 ng/mL. Review vitamins A, E, and K for deficiency in patients with advanced fibrosis or cholestasis. Update supplementation prescriptions ahead of winter.',
  },
  {
    phase: 'November',
    title: 'Annual Serology and Immunological Activity Review',
    tasks: 'Run annual IgM, AMA-M2, anti-gp210, and anti-sp100 panel. Document IgM trending as surrogate for immunological disease activity. Review ANA and anti-sp100 for PBC-AIH overlap syndrome assessment. Flag rising AMA-M2 titers with worsening ALP for enhanced monitoring and liver biopsy consideration.',
  },
  {
    phase: 'December',
    title: 'Annual Program Review and Next-Year Surveillance Planning',
    tasks: 'Compile annual PBC center outcomes report — Paris-II response rates, UDCA adherence, OCA and fibrate add-on therapy utilization, osteoporosis screening completion, and FibroScan fibrosis distribution. Schedule next-year DEXA, FibroScan, and fat-soluble vitamin appointments. Review EASL/AASLD PBC guideline updates and incorporate into protocols.',
  },
]

const kpis = [
  { metric: '≥80%', label: 'Paris-II Response at 12 Months on UDCA', description: 'ALP ≤1.5× ULN + AST ≤1.5× ULN + normal bilirubin — primary UDCA efficacy benchmark.' },
  { metric: '≥15%', label: 'ALP Reduction on OCA (POISE Benchmark)', description: 'Obeticholic acid response threshold from the POISE trial at 12 months of therapy.' },
  { metric: '100%', label: 'Annual DEXA Completion', description: 'Bone densitometry compliance for all PBC patients given ≥30% osteoporosis prevalence.' },
  { metric: 'Annual', label: 'FibroScan Liver Stiffness Assessment', description: 'Non-invasive fibrosis monitoring; semi-annual for F3–F4 and cirrhotic patients.' },
  { metric: '100%', label: 'UDCA Dose Accuracy (13–15 mg/kg/day)', description: 'Weight-based dosing compliance with annual recalculation to ensure therapeutic window.' },
  { metric: 'Quarterly', label: 'ALP/Bilirubin/IgM Lab Trending', description: 'Frequency required to catch inadequate UDCA response before the Paris criteria window closes.' },
]

const testimonial = {
  quote: 'Primary biliary cholangitis program management requires simultaneous tracking of quarterly ALP/bilirubin/IgM Paris criteria windows, annual UDCA dose recalculations, obeticholic acid titration with monthly pruritus and lipid checks, fibrate add-on monitoring, annual DEXA and FibroScan intervals, and fat-soluble vitamin surveillance. Momenties consolidated every deadline into a single calendar. Our center achieved an 83% Paris-II response rate and 100% DEXA completion in the first program year.',
  author: 'Dr. C. Corpechot',
  role: 'PBC Research Program',
}

export default function PBCCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Primary Biliary Cholangitis Center"
        title="PBC Center Calendar Management"
        subtitle="AI-powered scheduling for PBC centers coordinating AMA-M2/anti-gp210 serology, ursodeoxycholic acid response monitoring, obeticholic acid titration, fibrates (bezafibrate/fenofibrate) add-on therapy, and annual bone-density/liver-stiffness surveillance."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full PBC Center Compliance Lifecycle
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
              The PBC Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every ALP check, UDCA dose review, OCA titration, DEXA scan, and FibroScan interval — sequenced across 12 months.
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
              The 6 KPIs That Define PBC Program Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.88rem', color: '#f0ece3', fontWeight: 600, marginBottom: 6 }}>{kpi.label}</div>
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
        headline="Ready to Achieve ≥80% Paris-II Response in Your PBC Program?"
        subtext="Join PBC centers using Momenties to automate every UDCA adherence check, OCA titration, ALP/bilirubin Paris criteria window, DEXA scan, and FibroScan interval — so every patient achieves optimal biochemical response, on time."
      />
    </main>
  )
}
