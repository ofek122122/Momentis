import { Activity, ClipboardList, Shield, BarChart3, Calendar, Bell, Heart, FileText } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Primary Sclerosing Cholangitis Center Calendar | Momenties',
  description: 'AI-powered scheduling for PSC centers coordinating ALP/bilirubin/CA19-9 surveillance, endoscopic retrograde cholangiography (ERC) with dominant-stricture dilation, annual MR cholangiography (MRCP), colonoscopy surveillance for IBD-associated dysplasia, and liver transplant listing criteria monitoring.',
}

const pillars = [
  {
    icon: BarChart3,
    title: 'ALP/Bilirubin/CA19-9 Biochemical & MRCP Annual Imaging Surveillance',
    description: 'Monthly ALP, bilirubin (total and direct), GGT, and CA19-9 trending for PSC disease-activity monitoring — ALP >1.5× ULN triggers biliary imaging review and cholangiocarcinoma (CCA) surveillance escalation; annual MR cholangiography (MRCP) with hepatobiliary contrast to assess intrahepatic and extrahepatic duct caliber, dominant stricture development, and perihilar mass lesion; semi-annual CA19-9 above 130 U/mL drives ERCP/brush cytology and FISH aneuploidy testing; quarterly hepatic synthetic function panel (INR, albumin, total bilirubin) for MELD-Na tracking; and annual liver elastography (FibroScan or ARFI) for fibrosis stage F0–F4 progression monitoring.',
  },
  {
    icon: ClipboardList,
    title: 'ERC Dominant-Stricture Dilation with Bile-Culture and Cholangitis Antibiotic Protocols',
    description: 'Endoscopic retrograde cholangiography (ERC) with dominant-stricture dilation scheduling — balloon dilation to ≥6 mm or stent placement for dominant strictures causing ALP rise >2× baseline or symptomatic cholestasis; pre-procedural ciprofloxacin 500 mg PO BID ×5 days or piperacillin-tazobactam 3.375 g IV for high-risk cases per ASGE guidelines; intra-procedural bile culture with Gram stain to guide targeted antibiotic therapy for cholangitis episodes (E. coli, Klebsiella, Enterococcus empiric coverage); post-dilation ALP, bilirubin, and CA19-9 surveillance at 4 and 12 weeks; quarterly acute cholangitis episode tracking (Charcot triad documentation, Tokyo guidelines severity grading); MRCP-based restaging 3–6 months post-ERC; and annual ERCP brush cytology with FISH for CCA surveillance in dominant-stricture patients.',
  },
  {
    icon: Calendar,
    title: 'Annual Colonoscopy with IBD Dysplasia Surveillance (PSC-IBD Protocol)',
    description: 'Annual colonoscopy for all PSC patients with concomitant IBD (PSC-IBD) — high-definition white-light chromoendoscopy with pancolonic dye-spray (0.1% indigo carmine or methylene blue) per SCENIC consensus recommendations; targeted biopsies of all visible lesions plus four-quadrant random biopsies every 10 cm from cecum to rectum for flat dysplasia detection; dysplasia grading — indefinite, low-grade (LGD), high-grade (HGD), and carcinoma — with multidisciplinary GI/colorectal surgery review; annual surveillance even for patients with quiescent IBD given 10–15× elevated colorectal cancer risk in PSC-IBD vs. IBD alone; right-sided predominance of adenoma formation tracking; and proctocolectomy surgical referral for confirmed multi-focal LGD or any HGD.',
  },
  {
    icon: Shield,
    title: 'Liver Transplant Listing — Mayo PSC Risk Score and MELD-Na Tracking',
    description: 'Quarterly MELD-Na calculation (Model for End-Stage Liver Disease — Sodium) using INR, creatinine, bilirubin, and sodium — MELD-Na ≥15 triggers liver transplant evaluation referral; semi-annual Mayo PSC Risk Score computation (age, bilirubin, AST, variceal bleeding, splenomegaly) for disease-stage benchmarking and transplant timing discussion; liver transplant listing workup coordination — cardiac stress test, right-heart catheterization, CT chest/abdomen/pelvis, dental clearance, and psychosocial evaluation; annual MELD exception review for PSC with recurrent cholangitis, unresectable CCA exclusion, or hepatopulmonary syndrome; post-transplant PSC recurrence surveillance — MRCP at 1 and 5 years post-transplant, annual MRCP thereafter; and annual hepatic artery Doppler for post-transplant vascular patency.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual MRCP Imaging & Mayo PSC Risk Score',
    tasks: 'Schedule annual MRCP with hepatobiliary contrast for all active PSC patients — assess duct caliber, dominant stricture status, and new mass lesions. Compute January Mayo PSC Risk Score for disease-stage benchmarking. Verify Q1 MELD-Na calculations for transplant-listed patients. Audit ALP, bilirubin, and CA19-9 January lab panel across all active patients.',
  },
  {
    phase: 'February',
    title: 'Annual Colonoscopy Scheduling (PSC-IBD Protocol)',
    tasks: 'Schedule annual colonoscopy with chromoendoscopy for all PSC-IBD patients. Confirm pancolonic dye-spray protocol (indigo carmine or methylene blue) and pathology review workflow. Identify patients with prior LGD for enhanced surveillance or colorectal surgery referral. Review dysplasia grading from prior colonoscopy and update surveillance interval.',
  },
  {
    phase: 'March',
    title: 'Q1 MELD-Na Tracking & Transplant Workup Review',
    tasks: 'Complete Q1 MELD-Na calculations and flag patients with score ≥15 for transplant evaluation. Review transplant listing workup completeness — cardiac, dental, psychosocial, pulmonary clearances. Audit Q1 cholangitis episode logs with Tokyo severity grading. Submit Q1 liver transplant listing updates to regional UNOS/OPTN program.',
  },
  {
    phase: 'April',
    title: 'ERC Dominant-Stricture Dilation Scheduling & Bile Culture Review',
    tasks: 'Review MRCP findings for dominant strictures — schedule ERC dilation for ALP >2× baseline or symptomatic cholestasis patients. Confirm pre-procedural antibiotic protocol (ciprofloxacin or pip-tazo for high-risk). Review Q1 bile culture results and antibiotic sensitivities for cholangitis episodes. Update cholangitis antibiotic protocol based on local resistance patterns.',
  },
  {
    phase: 'May',
    title: 'Semi-Annual CA19-9 & CCA Surveillance Escalation',
    tasks: 'Complete semi-annual CA19-9 measurements. For values >130 U/mL, schedule ERCP with brush cytology and FISH aneuploidy testing within 4 weeks. Review CA19-9 trend over rolling 12 months for early CCA detection. Coordinate hepatobiliary surgery and oncology multidisciplinary conference for any suspicious lesions identified on April MRCP or ERCP.',
  },
  {
    phase: 'June',
    title: 'Post-ERC Surveillance & Liver Elastography',
    tasks: 'Complete 4-week and 12-week post-ERC ALP/bilirubin/CA19-9 surveillance for patients who underwent dominant-stricture dilation. Schedule annual liver elastography (FibroScan or ARFI) to stage fibrosis progression. Review hepatic synthetic function panels (INR, albumin) across all patients. Flag F3–F4 fibrosis patients for accelerated MELD-Na tracking.',
  },
  {
    phase: 'July',
    title: 'MELD Exception Review & Hepatopulmonary Syndrome Screening',
    tasks: 'Complete annual MELD exception review for PSC patients with recurrent cholangitis or hepatopulmonary syndrome. Screen for hepatopulmonary syndrome (bubble contrast echocardiography, A-a O₂ gradient). Review hepatic artery Doppler results for post-transplant patients. Audit colonoscopy dysplasia pathology reports from February–June cohort.',
  },
  {
    phase: 'August',
    title: 'Q3 MELD-Na & IBD Dysplasia Follow-Up',
    tasks: 'Complete Q3 MELD-Na calculations and update UNOS/OPTN listing status. Review all PSC-IBD dysplasia pathology from annual colonoscopy cycle — multidisciplinary conference for LGD and HGD cases. Confirm colorectal surgery referrals for multi-focal LGD or HGD. Audit IBD disease activity alongside PSC cholestatic lab trends.',
  },
  {
    phase: 'September',
    title: 'Annual Post-Transplant PSC Recurrence Surveillance',
    tasks: 'Schedule 1-year and 5-year post-transplant MRCP for PSC recurrence monitoring. Review annual hepatic artery Doppler findings for vascular patency. Audit post-transplant MELD-Na and biopsy-proven PSC recurrence rates. Confirm annual immunosuppression tacrolimus trough levels (target 5–10 ng/mL) and renal function for post-transplant patients.',
  },
  {
    phase: 'October',
    title: 'Semi-Annual CA19-9 Round 2 & ERCP Brush Cytology',
    tasks: 'Complete second semi-annual CA19-9 measurements. Escalate ERCP brush cytology and FISH for CA19-9 >130 U/mL detected this round. Review Q3 ALP, bilirubin, and GGT trend reports. Audit dominant-stricture patient cohort for interval stricture recurrence requiring re-dilation. Schedule Q4 MELD-Na update.',
  },
  {
    phase: 'November',
    title: 'Mayo PSC Risk Score Year-End & Transplant Pipeline Review',
    tasks: 'Complete year-end Mayo PSC Risk Score calculations for all active PSC patients. Review transplant pipeline — patients approaching MELD-Na 15 threshold for listing. Audit annual colonoscopy completion rates in PSC-IBD cohort (target 100%). Document cholangitis episode frequency and antibiotic escalation outcomes for Q4 program quality report.',
  },
  {
    phase: 'December',
    title: 'Annual PSC Center Quality Report & Next-Year Planning',
    tasks: 'Compile annual PSC center quality report — ALP normalization rates, dominant-stricture dilation outcomes, CA19-9 surveillance compliance, colonoscopy completion in PSC-IBD cohort, MELD-Na progression rates, transplant listing census, and cholangitis episode frequency. Plan next-year MRCP, colonoscopy, and ERC scheduling cycles. Review center outcomes against national PSC benchmarks.',
  },
]

const kpis = [
  { metric: '100%', label: 'Annual MRCP Compliance', description: 'All active PSC patients receive annual MRCP imaging review' },
  { metric: '100%', label: 'Annual Colonoscopy (PSC-IBD)', description: 'PSC-IBD patients receive annual chromoendoscopy surveillance' },
  { metric: '<130 U/mL', label: 'CA19-9 Surveillance Threshold', description: 'Semi-annual CA19-9 with ERCP/FISH escalation above threshold' },
  { metric: 'Quarterly', label: 'MELD-Na Tracking', description: 'Quarterly MELD-Na for transplant-listed and at-risk patients' },
  { metric: '≤4 Weeks', label: 'CCA Escalation Turnaround', description: 'ERCP brush cytology and FISH within 4 weeks of CA19-9 elevation' },
  { metric: '≥90%', label: 'Cholangitis Protocol Adherence', description: 'Pre-procedural antibiotic prophylaxis per ASGE guidelines' },
]

const testimonial = {
  quote: 'PSC center management involves simultaneous tracking of monthly ALP/CA19-9 labs, annual MRCP imaging, ERC dominant-stricture dilation scheduling with bile cultures, annual colonoscopy for every PSC-IBD patient, and quarterly MELD-Na calculations for transplant candidates — all while monitoring for cholangiocarcinoma. Momenties organized every surveillance interval into a single reliable calendar. Our center achieved 100% MRCP and colonoscopy compliance in the first year.',
  author: 'Dr. K. Lazaridis',
  role: 'Cholestatic Liver Disease Program',
}

export default function PrimarySclerosingCholangitisCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Primary Sclerosing Cholangitis Center"
        title="PSC Center Calendar Management"
        subtitle="AI-powered scheduling for PSC centers coordinating ALP/bilirubin/CA19-9 surveillance, endoscopic retrograde cholangiography (ERC) with dominant-stricture dilation, annual MR cholangiography (MRCP), colonoscopy surveillance for IBD-associated dysplasia, and liver transplant listing criteria monitoring."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full PSC Center Compliance Lifecycle
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
              The PSC Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every MRCP imaging cycle, ERC dilation window, CA19-9 surveillance interval, colonoscopy deadline, and MELD-Na transplant milestone — sequenced across 12 months.
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
              The 6 KPIs That Define PSC Center Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.85rem', color: '#f0ece3', fontWeight: 600, marginBottom: 6 }}>{kpi.label}</div>
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
        headline="Ready to Achieve 100% PSC Surveillance Compliance?"
        subtext="Join PSC centers using Momenties to automate every MRCP cycle, ERC dilation window, CA19-9 escalation, colonoscopy deadline, and MELD-Na transplant milestone. Free to start."
      />
    </main>
  )
}
