import { Stethoscope, ClipboardList, BarChart3, Shield } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Focal Segmental Glomerulosclerosis Center Compliance Calendar | Momenties',
  description: 'Automate FSGS sparsentan/voclosporin protocol monitoring, nephrotic syndrome proteinuria surveillance, KDIGO guideline-driven steroid taper tracking, kidney biopsy follow-up, LDL apheresis scheduling, and transplant recurrence screening deadlines for nephrology centers.',
}

const pillars = [
  {
    icon: Stethoscope,
    title: 'FSGS Immunosuppression & Steroid Taper Protocols',
    description: 'KDIGO 2021-based first-line FSGS management — daily high-dose prednisone 1 mg/kg/day (max 80 mg) for 4–16 weeks with proteinuria-driven taper: complete remission (uPCR <300 mg/g) triggers taper over 6 months; partial remission (uPCR reduction ≥50% to 300–3500 mg/g) guides 12-month taper plan; monthly urine protein-to-creatinine ratio (uPCR) and 24-hour urine protein during active therapy; biweekly blood glucose, blood pressure (target <125/75 mmHg per KDIGO), weight, and BMI during steroid induction; cyclosporine A (CsA) trough monitoring (target 100–200 ng/mL) every 2 weeks during induction and monthly during maintenance for steroid-dependent FSGS; quarterly serum creatinine, cystatin C-based eGFR, and uric acid for calcineurin inhibitor nephrotoxicity surveillance; tacrolimus 0.05–0.1 mg/kg/day with target trough 5–10 ng/mL for CsA-intolerant patients; and mycophenolate mofetil (MMF) 1.5–2 g/day CBC monthly for steroid-resistant FSGS combination regimens.',
  },
  {
    icon: ClipboardList,
    title: 'Sparsentan & Voclosporin Novel Agent Compliance',
    description: 'Sparsentan (Filspari) — dual endothelin angiotensin receptor antagonist — FDA-approved January 2023 for IgA nephropathy with ongoing FSGS clinical trials (EPPIK Phase III); daily sparsentan 400 mg PO with monthly uPCR, eGFR, liver enzymes (ALT/AST), and serum potassium; quarterly REMS-mandated pregnancy test for women of childbearing potential and mandatory monthly contraception counseling documentation; monthly systolic blood pressure monitoring (target <130 mmHg); voclosporin (Lupkynis) 23.7 mg BID — calcineurin inhibitor — trough level monitoring monthly (target 15–30 ng/mL); biweekly lipid panel (voclosporin dyslipidemia monitoring); LDL apheresis bi-weekly scheduling for treatment-resistant nephrotic FSGS with LDL >190 mg/dL despite maximally tolerated statin; monthly apolipoprotein B and Lp(a) for LDL apheresis response documentation; and quarterly FSGS Clinical Trial Consortium biobank sample collection (urine suPAR, plasma uPAR, CLCF-1 permeability factor assay) per IRB-approved protocol.',
  },
  {
    icon: BarChart3,
    title: 'Proteinuria Surveillance & CKD Staging',
    description: 'Monthly urine protein-to-creatinine ratio (uPCR) and albumin-to-creatinine ratio (uACR) during active FSGS treatment; quarterly 24-hour urine protein collection for definitive proteinuria burden assessment (nephrotic range >3.5 g/day threshold); quarterly serum albumin, cholesterol, LDL, triglycerides for nephrotic syndrome complication monitoring (VTE risk, infection risk); quarterly eGFR (CKD-EPI 2021 creatinine-cystatin equation) for CKD stage progression tracking and ESKD risk modeling per Kidney Failure Risk Equation (KFRE); annual renal biopsy review for histopathologic FSGS variant reclassification (NOS vs. tip vs. cellular vs. collapsing vs. perihilar) — collapsing variant drives urgent high-dose IS escalation; bi-annual podocyte density and foot process effacement assessment from biopsy morphometry for treatment response prediction; quarterly urine suPAR (soluble urokinase plasminogen activator receptor) as circulating permeability factor biomarker; and annual nephrology/pathology multidisciplinary conference review for complex FSGS cases with refractory proteinuria or progressive CKD.',
  },
  {
    icon: Shield,
    title: 'Transplant Recurrence & ESKD Registry Compliance',
    description: 'Post-transplant FSGS recurrence surveillance — uPCR weekly for first 3 months post-transplant (recurrence risk 20–40% for primary FSGS; >80% after prior graft loss from recurrent FSGS); plasma exchange (PLEX) prophylactic scheduling (5 sessions pre-transplant and 3 sessions post-transplant per high-risk protocol) with weekly albumin and IgG replacement documentation; rituximab 375 mg/m² IV dosing for recurrent FSGS post-transplant with monthly CD19/CD20 B-cell depletion monitoring; quarterly DSA (donor-specific antibody) panel reactive antibody (PRA) assessment; tacrolimus trough monitoring weekly for 3 months then monthly post-transplant; annual UNOS/OPTN transplant registry outcome submission for FSGS-attributed ESKD; quarterly USRDS (United States Renal Data System) incident ESKD cause coding audit for FSGS attribution accuracy; and biennial Kidney Disease Improving Global Outcomes (KDIGO) FSGS guideline re-training for all nephrology staff with CE documentation.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual FSGS Registry Submission & Biopsy Review',
    tasks: 'Complete USRDS annual FSGS-attributed ESKD incident case submission. Conduct annual nephrology/pathology multidisciplinary conference for complex refractory FSGS cases — review collapsing variant histology and escalate immunosuppression as indicated. Verify KDIGO guideline updates published Q4 prior year. Schedule annual kidney biopsy follow-up appointments for patients with incomplete remission at 12 months. Complete Q1 KFRE ESKD risk model recalculations for all active FSGS patients.',
  },
  {
    phase: 'February',
    title: 'Steroid Taper Audit & CKD Progression Review',
    tasks: 'Complete semi-annual steroid taper protocol audit — verify all prednisone induction patients have uPCR-guided taper plans documented at 4-month, 8-month, and 12-month checkpoints. Review Q4 eGFR trends for CKD stage progression; escalate CKD 4 patients to transplant nephrology for pre-emptive transplant evaluation. Audit cyclosporine A and tacrolimus trough documentation for CNI-treated steroid-resistant FSGS cohort. Submit Q1 sparsentan REMS pregnancy risk program documentation.',
  },
  {
    phase: 'March',
    title: 'Q1 Proteinuria Surveillance & LDL Apheresis Review',
    tasks: 'Complete Q1 24-hour urine protein and uPCR review for all active FSGS patients. Assess LDL apheresis scheduling adherence — biweekly sessions with monthly LDL and apolipoprotein B response documentation. Review Q1 serum albumin and cholesterol for nephrotic complication risk stratification. Initiate or audit statin plus ezetimibe combination therapy for patients with LDL >70 mg/dL and uPCR >3.5 g/g. Document urine suPAR biomarker collection per Q1 FSGS Clinical Trial Consortium protocol.',
  },
  {
    phase: 'April',
    title: 'FSGS Variant Reclassification & Permeability Factor Testing',
    tasks: 'Complete annual FSGS histologic variant reclassification review for all patients with biopsy within past 12 months — NOS vs. tip vs. cellular vs. collapsing vs. perihilar classification with podocyte density morphometry. Expedite collapsing variant immunosuppression escalation referrals. Process Q2 urine suPAR and plasma CLCF-1 permeability factor assays per biobank protocol. Review pilot sparsentan patients at Month 3 for uPCR reduction and ALT/AST safety labs.',
  },
  {
    phase: 'May',
    title: 'Post-Transplant Recurrence Surveillance & PLEX Audit',
    tasks: 'Complete semi-annual post-transplant FSGS recurrence audit — review weekly uPCR trends for all FSGS transplant recipients in first year post-transplant. Audit prophylactic plasma exchange documentation for high-risk pre-transplant PLEX recipients (5 pre-op + 3 post-op sessions, albumin 5% replacement). Review rituximab dosing and monthly CD19/CD20 B-cell depletion logs for recurrent FSGS post-transplant. Submit Q2 UNOS/OPTN FSGS transplant outcome data.',
  },
  {
    phase: 'June',
    title: 'Q2 eGFR & Voclosporin/Sparsentan Trough Audit',
    tasks: 'Complete Q2 eGFR (CKD-EPI creatinine-cystatin 2021) staging for all FSGS patients — update KFRE 2-year and 5-year ESKD risk projections. Audit voclosporin trough levels (target 15–30 ng/mL) and biweekly lipid panels for all voclosporin-treated patients. Review sparsentan monthly ALT/AST, serum potassium, and systolic BP documentation for REMS compliance. Conduct Q2 DSA/PRA panel for all transplant-recipient FSGS patients.',
  },
  {
    phase: 'July',
    title: 'KDIGO Re-Training & Staff CE Documentation',
    tasks: 'Complete biennial KDIGO FSGS guideline re-training session for all nephrology staff — document CE hours for ANCC/ABIM requirements. Review ASN Kidney Week abstract submission deadlines for FSGS center outcomes data. Audit Q3 24-hour urine protein collection compliance. Review Q3 cyclosporine A trough levels (target 100–200 ng/mL) and quarterly creatinine for CNI nephrotoxicity surveillance.',
  },
  {
    phase: 'August',
    title: 'Nephrotic Syndrome Complication Audit',
    tasks: 'Complete annual nephrotic syndrome complication audit — VTE incidence review for patients with albumin <2.5 g/dL (anticoagulation threshold per KDIGO); infection prophylaxis audit (pneumococcal vaccination, varicella zoster prophylaxis during high-dose steroid); hyperlipidemia management review with LDL targets and LDL apheresis response. Assess quarterly LDL apheresis adherence and reorder apheresis schedule for Q4. Review Q3 uACR trends.',
  },
  {
    phase: 'September',
    title: 'Q3 Biomarker Collection & Clinical Trial Screening',
    tasks: 'Complete Q3 urine suPAR and plasma CLCF-1 biomarker collection per FSGS Clinical Trial Consortium protocol. Screen active FSGS patient panel for eligibility in ongoing Phase II/III trials (EPPIK sparsentan FSGS trial, JAK inhibitor trials, CXCR3 antagonist trials). Submit Q3 USRDS and OPTN registry data. Review Q3 tacrolimus post-transplant trough documentation and DSA surveillance.',
  },
  {
    phase: 'October',
    title: 'Annual Biopsy Scheduling & ESKD Risk Reassessment',
    tasks: 'Schedule annual kidney biopsy for all FSGS patients with persistent uPCR >1 g/g at 12 months of therapy — coordinate pathology and nephrology MDC for biopsy review. Complete annual KFRE ESKD risk reassessment — refer CKD 4–5 patients with >50% 5-year ESKD risk for pre-emptive transplant listing. Complete Q4 sparsentan REMS documentation and pregnancy risk program compliance. Review collapsing FSGS patients for rituximab eligibility.',
  },
  {
    phase: 'November',
    title: 'Post-Transplant Annual Registry & Rituximab Audit',
    tasks: 'Complete annual UNOS/OPTN post-transplant FSGS recurrence outcome registry submission — 1-year and 3-year graft survival, recurrent FSGS incidence, time-to-recurrence data. Audit rituximab CD19/CD20 B-cell reconstitution for all post-transplant FSGS patients who received anti-CD20 therapy — plan re-dosing if CD20 >1% of lymphocytes. Review Q4 voclosporin and cyclosporine nephrotoxicity labs. Complete ASN Kidney Week preparation for FSGS center outcomes abstract.',
  },
  {
    phase: 'December',
    title: 'Annual Center Report & Next-Year Compliance Planning',
    tasks: 'Compile annual FSGS center compliance report — complete remission rates, partial remission rates, CKD progression rates, ESKD incidence, transplant recurrence rates, and novel agent adoption. Finalize USRDS annual FSGS case submission. Plan next-year sparsentan REMS, voclosporin trough monitoring, LDL apheresis scheduling, and biopsy MDC calendar. Review KDIGO and NCCN guideline updates for next-year protocol revisions.',
  },
]

const kpis = [
  { metric: '≥50%', label: 'Complete or Partial Remission Rate at 12 Months' },
  { metric: '<3.5 g/day', label: 'Proteinuria Target (Partial Remission Threshold)' },
  { metric: '≤20%', label: 'FSGS Post-Transplant Recurrence Rate (High-Risk Protocols)' },
  { metric: '100%', label: 'REMS Pregnancy Risk Documentation (Sparsentan/Voclosporin)' },
  { metric: 'Quarterly', label: 'eGFR Staging & KFRE ESKD Risk Reassessment' },
  { metric: '≥90%', label: 'USRDS/OPTN Annual Registry Submission On-Time' },
]

const testimonial = {
  quote: 'FSGS center management requires monthly uPCR and eGFR tracking, biweekly sparsentan and voclosporin trough labs, biweekly LDL apheresis sessions, weekly post-transplant proteinuria surveillance, quarterly KDIGO protocol audits, and annual biopsy MDC review — all simultaneously. Momenties consolidated every deadline into one calendar. Our center achieved a 54% complete or partial remission rate at 12 months and 100% REMS compliance across all novel agent patients.',
  author: 'Nephrology Program Director',
  role: 'FSGS Center of Excellence, Academic Medical Center',
}

export default function FSGSCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="FSGS Center Calendar"
        title="Every Proteinuria Target. Every Trough Level. One Calendar."
        subtitle="Focal segmental glomerulosclerosis centers manage one of nephrology's most compliance-intensive portfolios — monthly uPCR surveillance, biweekly sparsentan REMS labs, cyclosporine and voclosporin trough monitoring, LDL apheresis scheduling, post-transplant weekly proteinuria checks, quarterly KDIGO protocol audits, and annual biopsy MDC review. Momenties automates every deadline so your FSGS patients achieve top-tier remission and transplant outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full FSGS Center Compliance Lifecycle
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
              The FSGS Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every proteinuria surveillance interval, novel agent REMS deadline, LDL apheresis cycle, transplant recurrence screen, and registry submission — sequenced across 12 months.
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
              The 6 KPIs That Define FSGS Program Excellence
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
        headline="Ready to Achieve ≥50% Remission Rates in Your FSGS Program?"
        subtext="Join nephrology centers using Momenties to automate every uPCR surveillance interval, sparsentan REMS deadline, LDL apheresis session, and transplant recurrence check. Free to start."
      />
    </main>
  )
}
