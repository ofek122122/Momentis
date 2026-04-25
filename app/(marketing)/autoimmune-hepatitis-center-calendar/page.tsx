import { Activity, ClipboardList, ShieldCheck, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Autoimmune Hepatitis Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for AIH centers coordinating ANA/anti-SMA/anti-LKM1 serology, prednisone induction and taper, azathioprine/MMF maintenance dose optimization, liver biopsy remission confirmation, and annual fibroscan/elastography surveillance.',
}

const pillars = [
  {
    icon: Activity,
    title: 'ANA/anti-SMA/IgG and ALT/AST Remission Monitoring',
    description: 'Systematic autoimmune hepatitis serologic and biochemical remission tracking — ANA, anti-smooth muscle antibody (anti-SMA), anti-LKM1, and anti-LC1 titer trending at baseline, 3, 6, and 12 months; IgG normalization (target <16 g/L) as primary remission biomarker per EASL 2015 guidelines; monthly ALT/AST and total bilirubin surveillance during induction (target ALT <2× ULN at 6 months, normalization by 12 months); alkaline phosphatase and GGT for overlap syndrome (AIH-PBC or AIH-PSC) monitoring; quarterly complete metabolic panel including albumin and INR for hepatic synthetic function assessment; semi-annual anti-mitochondrial antibody (AMA) and pANCA for overlap syndrome re-evaluation; and annual anti-SLA/LP (anti-soluble liver antigen) testing as high-specificity AIH marker associated with severe disease and relapse risk.',
  },
  {
    icon: ClipboardList,
    title: 'Prednisone 40 mg Taper to ≤10 mg/day Maintenance',
    description: 'Standardized prednisone induction and taper protocol compliance — initial prednisone 40 mg/day (or prednisolone 30 mg/day combined with azathioprine 50 mg/day per IAIHG combination regimen) with documented 5 mg/week taper after biochemical remission (ALT normalization and IgG <16 g/L); maintenance target ≤10 mg/day prednisone or complete withdrawal per histologic remission confirmation; monthly Cushingoid side-effect assessment (blood pressure, glucose, weight gain, cataract screen) during active taper; quarterly bone density (DEXA) and vertebral fracture risk assessment with calcium 1,000–1,500 mg/day and vitamin D 800–1,000 IU/day supplementation documentation; annual ophthalmology referral for posterior subcapsular cataract surveillance in patients on prednisone >3 months; and biennial osteoporosis management per ACR glucocorticoid-induced osteoporosis guidelines with bisphosphonate initiation tracking (alendronate/risedronate/zoledronic acid) for T-score <−2.5 or fragility fracture history.',
  },
  {
    icon: ShieldCheck,
    title: 'Azathioprine 50–150 mg/day TPMT-Guided Dosing and 6-TGN Monitoring',
    description: 'Azathioprine maintenance therapy optimization — mandatory TPMT (thiopurine methyltransferase) phenotype or genotype pre-testing before initiation to identify poor metabolizers (TPMT activity <5 nmol/h/mL RBC) who require 50% dose reduction or MMF substitution to prevent severe myelosuppression; azathioprine 50 mg/day starting dose with escalation to 1–2 mg/kg/day (typically 50–150 mg/day) based on CBC response and clinical remission; quarterly CBC with differential and LFTs for myelosuppression (ANC <1,500/μL hold azathioprine) and hepatotoxicity monitoring; annual 6-thioguanine nucleotide (6-TGN) and 6-methylmercaptopurine (6-MMP) metabolite level testing to assess therapeutic range (6-TGN 230–450 pmol/8×10⁸ RBC) and differentiate adherence failure from non-response; mycophenolate mofetil (MMF) 1–3 g/day monitoring as azathioprine-intolerant alternative with monthly CBC and pregnancy test for women of childbearing age; and annual skin cancer surveillance for long-term azathioprine users (>10 years) per BTS immunosuppression guidance.',
  },
  {
    icon: BarChart3,
    title: 'Annual Liver Biopsy/Fibroscan for Histologic Remission Confirmation',
    description: 'Histologic remission assessment and fibrosis surveillance program — liver biopsy after ≥24 months of biochemical remission (ALT normal, IgG <16 g/L) to confirm histologic remission (HAI ≤3, no interface hepatitis) before considering immunosuppression withdrawal per EASL/AASLD guidelines; annual transient elastography (FibroScan, ≥10 kPa indicating advanced fibrosis/cirrhosis F3–F4) and controlled attenuation parameter (CAP) for steatosis co-morbidity monitoring; semi-annual liver biopsy in non-cirrhotic remission to guide attempted drug withdrawal after 2+ years biochemical remission; MRI elastography (MRE) for patients with BMI >30 where FibroScan has limited reliability; AFP (alpha-fetoprotein) and liver ultrasound every 6 months for HCC surveillance in cirrhotic AIH patients (Child-Pugh A or B); and annual esophagogastroduodenoscopy (EGD) for variceal screening in AIH cirrhosis per BAVENO VII guidelines (FibroScan >20 kPa or platelet <150,000/μL).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual Histologic Remission Biopsy & HCC Surveillance',
    tasks: 'Schedule liver biopsy for patients with ≥24 months of biochemical remission (ALT normal, IgG <16 g/L) to confirm histologic remission per EASL guidelines. Complete H1 AFP and liver ultrasound for HCC surveillance in all cirrhotic AIH patients. Perform annual DEXA bone density scan and fracture risk assessment for all patients on prednisone >3 months. Initiate bisphosphonate referrals for T-score <−2.5.',
  },
  {
    phase: 'February',
    title: 'TPMT Pre-Testing & Azathioprine Initiation Review',
    tasks: 'Complete TPMT phenotype/genotype pre-testing for all newly diagnosed AIH patients prior to azathioprine initiation. Identify poor metabolizers (TPMT <5 nmol/h/mL RBC) for MMF substitution. Review Q4 prior-year azathioprine dose escalation — confirm titration to 1–2 mg/kg/day. Complete annual skin cancer surveillance referrals for long-term azathioprine users (>10 years). Audit 6-TGN metabolite levels for non-responders.',
  },
  {
    phase: 'March',
    title: 'Q1 Serologic & Biochemical Remission Assessment',
    tasks: 'Complete Q1 remission panel: ANA, anti-SMA, anti-LKM1, IgG, ALT, AST, total bilirubin, alkaline phosphatase, GGT, albumin, and INR for all active AIH patients. Assess prednisone taper progress — confirm patients at ≤10 mg/day maintenance or document reasons for taper delay. Review MMF monthly CBC and pregnancy test compliance for women of childbearing age.',
  },
  {
    phase: 'April',
    title: 'Prednisone Taper Compliance & Cushingoid Monitoring',
    tasks: 'Complete Q1 Cushingoid side-effect assessment — blood pressure, fasting glucose, weight, and cataract screen for all patients on prednisone. Initiate Q2 bone health supplementation documentation (calcium 1,000–1,500 mg/day and vitamin D 800–1,000 IU/day). Audit prednisone taper adherence: patients on >40 mg/day >3 months require rheumatology or endocrine co-management consultation.',
  },
  {
    phase: 'May',
    title: 'Annual Ophthalmology Referral & Overlap Syndrome Evaluation',
    tasks: 'Generate annual ophthalmology referrals for all patients on prednisone >3 months (posterior subcapsular cataract surveillance). Complete semi-annual anti-mitochondrial antibody (AMA) and pANCA testing for overlap syndrome surveillance (AIH-PBC and AIH-PSC). Evaluate bile duct findings on imaging and MRCP for PSC overlap. Audit ursodeoxycholic acid (UDCA) compliance in AIH-PBC overlap patients.',
  },
  {
    phase: 'June',
    title: 'H1 FibroScan & Elastography Surveillance',
    tasks: 'Complete H1 transient elastography (FibroScan) and CAP assessment for all active AIH patients. Patients with FibroScan ≥10 kPa escalate to MRE if BMI >30. Review Q2 azathioprine CBC and LFT results — hold azathioprine for ANC <1,500/μL. Complete Q2 6-TGN metabolite level testing for patients with inadequate biochemical response. Audit EGD variceal screening in cirrhotic patients (FibroScan >20 kPa or platelet <150,000/μL).',
  },
  {
    phase: 'July',
    title: 'Drug Withdrawal Candidacy Assessment',
    tasks: 'Evaluate histologic remission biopsy results from January — identify patients eligible for attempted immunosuppression withdrawal (HAI ≤3, no interface hepatitis, ≥2 years biochemical remission). Begin structured drug tapering protocol with 3-monthly ALT/AST and IgG monitoring during withdrawal. Document anti-SLA/LP status as high-relapse-risk marker. Schedule semi-annual liver biopsy for withdrawal candidates at 12 months.',
  },
  {
    phase: 'August',
    title: 'Q3 Remission Panel & Osteoporosis Management Review',
    tasks: 'Complete Q3 remission panel: IgG, ALT, AST, total bilirubin, albumin, INR for all patients. Review bisphosphonate therapy compliance and alendronate/risedronate/zoledronic acid dosing adherence from January initiation. Complete Q3 azathioprine CBC monitoring and MMF CBC compliance. Audit annual anti-SLA/LP testing completion rate for newly diagnosed AIH patients.',
  },
  {
    phase: 'September',
    title: 'H2 HCC Surveillance & Variceal Screening',
    tasks: 'Complete H2 AFP and liver ultrasound for HCC surveillance in all cirrhotic AIH patients. Complete annual EGD variceal screening for cirrhotic patients meeting BAVENO VII criteria. Review Q3 FibroScan results — escalate patients with FibroScan ≥15 kPa to hepatology advanced fibrosis clinic. Perform annual anti-mitochondrial antibody re-testing for overlap syndrome re-evaluation in all AIH patients.',
  },
  {
    phase: 'October',
    title: 'Annual 6-TGN Metabolite Panel & Adherence Review',
    tasks: 'Complete annual 6-TGN and 6-MMP metabolite level review for all patients on azathioprine — differentiate therapeutic range (6-TGN 230–450 pmol/8×10⁸ RBC), supratherapeutic (hepatotoxicity risk), and subtherapeutic (adherence failure or TPMT-related underdosing). Adjust azathioprine dosing based on metabolite profile. Complete Q4 CBC and LFT monitoring. Begin prednisone dose planning for Q1 taper continuation.',
  },
  {
    phase: 'November',
    title: 'H2 FibroScan & Relapse Assessment',
    tasks: 'Complete H2 transient elastography (FibroScan) for all active AIH patients. Identify relapse cases (ALT >3× ULN post-withdrawal or during maintenance) for prednisone re-induction at 40 mg/day. Document relapse rate (target <20% annually in remission patients) as program quality metric. Review MMF compliance and tolerability in azathioprine-intolerant patients. Schedule year-end DEXA and calcium/vitamin D supplementation audit.',
  },
  {
    phase: 'December',
    title: 'Annual Center Report & Guideline Update Review',
    tasks: 'Compile annual AIH center outcomes report — biochemical remission rates (target ≥80% ALT normalization at 12 months), prednisone withdrawal success rates, relapse rates, fibrosis progression (FibroScan delta kPa), HCC incidence, and azathioprine toxicity events. Review updated EASL and AASLD AIH guidelines. Plan January liver biopsy cohort for next cycle. Finalize annual DEXA, ophthalmology, and skin cancer surveillance completion audit.',
  },
]

const kpis = [
  { metric: '≥80%', label: 'ALT Normalization at 12 Months' },
  { metric: '<20%', label: 'Annual Relapse Rate Post-Remission' },
  { metric: '100%', label: 'TPMT Pre-Testing Before Azathioprine' },
  { metric: '≤10 mg/day', label: 'Prednisone Maintenance Target' },
  { metric: 'Semi-Annual', label: 'FibroScan/Elastography Surveillance' },
  { metric: '6-Monthly', label: 'HCC Ultrasound in Cirrhotic AIH' },
]

const testimonial = {
  quote: 'Autoimmune hepatitis management requires simultaneous tracking of monthly ALT/IgG trends, prednisone taper schedules, quarterly azathioprine CBC and LFT monitoring, annual TPMT-guided dose reviews, 6-TGN metabolite panels, semi-annual FibroScan elastography, annual liver biopsy remission confirmation, HCC surveillance, and ophthalmology and DEXA referrals — all for patients who may be in remission for years with no symptoms. Momenties turned what was a spreadsheet nightmare into an automated calendar. Our biochemical remission rate is now consistently above 85%.',
  author: 'Dr. M. Heneghan',
  role: 'Autoimmune Liver Program',
}

export default function AutoimmuneHepatitisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Autoimmune Hepatitis Center"
        title="Autoimmune Hepatitis Center Calendar Management"
        subtitle="AI-powered scheduling for AIH centers coordinating ANA/anti-SMA/anti-LKM1 serology, prednisone induction and taper, azathioprine/MMF maintenance dose optimization, liver biopsy remission confirmation, and annual fibroscan/elastography surveillance."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full AIH Center Compliance Lifecycle
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
              The Autoimmune Hepatitis Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every serologic remission panel, prednisone taper checkpoint, azathioprine metabolite review, FibroScan interval, and biopsy milestone — sequenced across 12 months.
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
              The 6 KPIs That Define AIH Center Excellence
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
        headline="Ready to Achieve ≥80% Biochemical Remission in Autoimmune Hepatitis?"
        subtext="Join AIH centers using Momenties to automate every serology panel, prednisone taper checkpoint, azathioprine metabolite review, FibroScan interval, and liver biopsy milestone. Free to start."
      />
    </main>
  )
}
