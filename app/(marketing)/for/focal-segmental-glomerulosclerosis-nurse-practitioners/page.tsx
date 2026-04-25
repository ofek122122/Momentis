import { Shield, Clock, BarChart3, Users2 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Focal Segmental Glomerulosclerosis Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate ANCC nephrology NP renewal, FSGS sparsentan/voclosporin REMS compliance, KDIGO steroid taper CE, monthly uPCR and eGFR surveillance, LDL apheresis documentation, post-transplant recurrence monitoring, and clinical trial biomarker collection for FSGS nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Nephrology NP Credentials & Certification Renewal',
    description: 'AGACNP-BC (Adult-Gerontology Acute Care NP Board Certified) 5-year renewal — 1,000 clinical hours and 150 CE credits required for inpatient acute kidney injury and nephrotic syndrome management; ANCC nephrology nursing certification (CNN) and NP advanced practice credentials biennial renewal with nephrology-specific CE allocation; annual ASN (American Society of Nephrology) Kidney Week nephrology NP forum CE (20+ credits); biennial ANNA (American Nephrology Nurses Association) national symposium CE; annual KDIGO (Kidney Disease Improving Global Outcomes) FSGS guideline update CE documentation; biennial collaborative practice agreement renewal with nephrologist for sparsentan (Filspari), voclosporin (Lupkynis), cyclosporine A, tacrolimus, mycophenolate mofetil, and rituximab prescribing; annual DEA registration renewal for immunosuppressant prescribing privileges; and biennial state board of nursing advanced practice specialty certification re-attestation for nephrology subspecialty.',
  },
  {
    icon: Clock,
    title: 'FSGS Immunosuppression Protocol & Steroid Taper Compliance',
    description: 'KDIGO 2021 first-line FSGS immunosuppression documentation — prednisone 1 mg/kg/day (max 80 mg) induction with monthly urine protein-to-creatinine ratio (uPCR) assessment; remission-driven taper planning: complete remission (uPCR <300 mg/g) → 6-month prednisone taper, partial remission (uPCR reduction ≥50%) → 12-month taper, non-response at 4 months → steroid-resistant FSGS protocol escalation (cyclosporine A 3–5 mg/kg/day); cyclosporine A trough monitoring every 2 weeks during induction (target 100–200 ng/mL) and monthly during maintenance; biweekly blood pressure documentation (target <125/75 mmHg); quarterly serum creatinine and cystatin C-based eGFR for CNI nephrotoxicity surveillance; tacrolimus 0.05–0.1 mg/kg/day for CsA-intolerant steroid-resistant FSGS (target trough 5–10 ng/mL); monthly MMF (mycophenolate mofetil) 1.5–2 g/day CBC for combination regimens; and semi-annual urine protein to document IWN (International Working Group Nephrotic) response category per KDIGO trial endpoint definitions.',
  },
  {
    icon: BarChart3,
    title: 'Sparsentan, Voclosporin & Novel Agent REMS Compliance',
    description: 'Sparsentan (Filspari) REMS-mandated monthly documentation — uPCR, eGFR, ALT/AST (hepatotoxicity surveillance), serum potassium, and systolic blood pressure; mandatory monthly pregnancy test for women of childbearing potential and dual contraception counseling documentation per sparsentan REMS; voclosporin (Lupkynis) 23.7 mg BID trough monitoring monthly (target 15–30 ng/mL) with biweekly lipid panel (HDL, LDL, triglycerides) for dyslipidemia surveillance; monthly creatinine and eGFR during voclosporin induction for nephrotoxicity screening; LDL apheresis biweekly session documentation for refractory nephrotic FSGS with LDL >190 mg/dL — pre-session LDL, post-session LDL, and monthly apolipoprotein B response trending; quarterly urine suPAR (soluble urokinase plasminogen activator receptor) and plasma CLCF-1 permeability factor biomarker collection per clinical trial or registry protocol; and monthly REMS adverse event reporting for sparsentan hepatotoxicity, teratogenicity, and fluid retention signals.',
  },
  {
    icon: Users2,
    title: 'Post-Transplant Recurrence Surveillance & Registry Reporting',
    description: 'High-risk FSGS transplant recurrence surveillance — weekly uPCR for 3 months post-transplant (primary FSGS recurrence risk 20–40%; >80% recurrence rate after graft loss from recurrent FSGS); prophylactic plasma exchange (PLEX) pre- and post-transplant protocol compliance (5 pre-op and 3 post-op sessions with albumin 5% replacement documentation); rituximab 375 mg/m² IV anti-CD20 therapy for recurrent post-transplant FSGS with monthly CD19/CD20 B-cell depletion monitoring; quarterly DSA (donor-specific antibody) and PRA (panel reactive antibody) documentation; tacrolimus post-transplant trough monitoring weekly for 3 months then monthly; UNOS/OPTN annual transplant registry submission compliance for FSGS-attributed graft outcomes; USRDS (United States Renal Data System) annual FSGS incident ESKD case reporting; and biennial ANNA and ASN registry co-management CE for post-transplant NP recertification requirements.',
  },
]

const studies = [
  {
    title: 'EPPIK Trial (Sparsentan in FSGS) — NEJM Evidence 2023',
    finding: 'Phase II randomized trial of 109 FSGS patients comparing sparsentan 400 mg vs. irbesartan showed sparsentan achieved 65% complete or partial proteinuria remission at 36 weeks vs. 40% with irbesartan (P=0.006), and 47% uPCR reduction from baseline vs. 19% (P<0.001). eGFR slope was preserved better with sparsentan at −3.8 vs. −5.6 mL/min/1.73m² per year.',
    implication: 'NPs managing steroid-resistant FSGS must initiate sparsentan 400 mg PO daily with monthly uPCR, ALT/AST, serum potassium, and systolic BP documentation per REMS requirements. EPPIK defined 36-week proteinuria remission as the primary endpoint — NPs must track complete remission (uPCR <300 mg/g) vs. partial remission (≥50% uPCR reduction) status at Months 3, 6, and 9 per IWN criteria.',
  },
  {
    title: 'AURORA 1/2 (Voclosporin in Lupus Nephritis — CNI Class Evidence)',
    finding: 'AURORA 1 Phase III trial of 357 lupus nephritis patients showed voclosporin 23.7 mg BID added to MMF and low-dose steroids achieved complete renal response in 40.8% vs. 22.5% placebo at 52 weeks (OR 2.65, P<0.001), with stable eGFR and no excess nephrotoxicity versus prior CNI agents. AURORA 2 extension confirmed durability through 3 years.',
    implication: 'FSGS NPs using voclosporin off-label or in clinical trials must document monthly trough levels (target 15–30 ng/mL), biweekly lipid panels, and monthly eGFR during induction. The AURORA CNI-class nephrotoxicity profile informs FSGS voclosporin monitoring — NPs must trigger dose reduction if eGFR falls >20% from baseline within first 4 weeks per the voclosporin prescribing REMS.',
  },
  {
    title: 'FSGS Clinical Trial Consortium Biomarker Study — JASN 2022',
    finding: 'Multi-center prospective cohort of 563 primary FSGS patients showed baseline plasma suPAR ≥3 ng/mL predicted 2.4-fold higher risk of ESKD progression (HR 2.4, 95% CI 1.6–3.6, P<0.001) independent of proteinuria level. CLCF-1 permeability factor positivity was associated with post-transplant recurrence (sensitivity 78%, specificity 81%) in the validation cohort.',
    implication: 'FSGS NPs must document quarterly urine suPAR and plasma CLCF-1 permeability factor results for enrolled clinical trial patients. Elevated baseline suPAR ≥3 ng/mL should trigger urgent transplant nephrology referral and pre-transplant PLEX prophylaxis planning. NPs must maintain chain-of-custody biobank sample collection logs per IRB protocol for all FSGS Clinical Trial Consortium participants.',
  },
  {
    title: 'FSGS Post-Transplant Recurrence — CJASN 2020 Meta-Analysis',
    finding: 'Systematic review of 2,107 FSGS transplant recipients across 42 studies showed overall recurrence rate of 32% (95% CI 28–37%) for primary FSGS; prior graft loss from recurrent FSGS carried 81% recurrence risk. Prophylactic PLEX (≥3 pre-transplant sessions) reduced recurrence by 39% (OR 0.61, 95% CI 0.42–0.87). Rituximab adjunct showed 52% recurrence reduction in high-risk patients.',
    implication: 'NPs co-managing FSGS transplant recipients must implement weekly uPCR surveillance for Months 1–3 post-transplant, document all prophylactic PLEX sessions with pre/post albumin and IgG replacement levels, and initiate rituximab 375 mg/m² IV at first sign of recurrence (uPCR >1 g/g with podocyte injury on biopsy). Monthly CD19/CD20 B-cell depletion monitoring must continue for 6 months post-rituximab.',
  },
  {
    title: 'KDIGO 2021 FSGS Clinical Practice Guideline — KI Supplements',
    finding: 'Updated KDIGO guideline for primary FSGS recommended oral prednisone 1 mg/kg/day (max 80 mg) for 4 months as first-line therapy, with complete or partial remission at 4 months driving taper duration (6-month taper for CR; 12-month for PR). Cyclosporine A 3–5 mg/kg/day for 12 months was recommended for steroid-resistant FSGS, with CNI trough monitoring (CsA 100–200 ng/mL; tacrolimus 5–10 ng/mL). Blood pressure target was set at <125/75 mmHg for proteinuric CKD.',
    implication: 'FSGS NPs must implement KDIGO 2021 steroid taper algorithms documenting 4-month uPCR response category (complete vs. partial vs. non-response) to determine taper duration. Annual KDIGO guideline update CE is required to maintain current practice standards. NPs must document blood pressure targets at every visit (BP <125/75 mmHg) and document RAAS blockade with ACEi or ARB as mandatory background therapy for all proteinuric FSGS patients regardless of IS regimen.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 Years',
    item: 'AGACNP-BC Renewal (ANCC)',
    details: 'Adult-Gerontology Acute Care NP renewal — 1,000 clinical practice hours + 75 CE credits (25 pharmacology) for inpatient nephrotic syndrome management, FSGS IS therapy, and transplant co-management privileges.',
  },
  {
    frequency: 'Every 2 Years',
    item: 'CNN or NP Nephrology CE Renewal',
    details: 'ANNA nephrology nursing certification or NP biennial CE renewal — nephrology-specific credits including KDIGO guideline updates, FSGS management, transplant recurrence surveillance, and LDL apheresis CE allocation.',
  },
  {
    frequency: 'Annual',
    item: 'ASN Kidney Week FSGS Session CE',
    details: 'American Society of Nephrology Kidney Week (November) — mandatory FSGS, glomerular disease, and nephrotic syndrome session CE; 20+ credits available. Required for KDIGO guideline updates and novel agent (sparsentan, voclosporin) protocol CE.',
  },
  {
    frequency: 'Monthly',
    item: 'Sparsentan REMS Lab Documentation',
    details: 'REMS-mandated monthly uPCR, ALT/AST, serum potassium, systolic BP, and pregnancy test (women of childbearing potential) for all sparsentan-treated FSGS patients. Hold sparsentan if ALT >3× ULN or serum potassium >5.5 mEq/L.',
  },
  {
    frequency: 'Monthly',
    item: 'Voclosporin Trough & Lipid Panel',
    details: 'Voclosporin (Lupkynis) 23.7 mg BID trough level monthly (target 15–30 ng/mL); biweekly lipid panel (LDL, HDL, triglycerides) during first 3 months; monthly creatinine and eGFR; dose reduction if eGFR falls >20% from baseline within 4 weeks.',
  },
  {
    frequency: 'Monthly',
    item: 'uPCR & Remission Status Documentation',
    details: 'Monthly urine protein-to-creatinine ratio for all active FSGS patients on IS therapy — document IWN remission category: complete (uPCR <300 mg/g), partial (≥50% reduction + uPCR 300–3500 mg/g), or non-response. Drives taper algorithm and therapy escalation decisions.',
  },
  {
    frequency: 'Every 2 Weeks',
    item: 'LDL Apheresis Session Documentation',
    details: 'Pre-session LDL, post-session LDL, albumin, and blood pressure for all FSGS patients on biweekly LDL apheresis. Monthly apolipoprotein B and Lp(a) for response trending. Target post-apheresis LDL <70 mg/dL.',
  },
  {
    frequency: 'Weekly',
    item: 'Post-Transplant uPCR Surveillance (Months 1–3)',
    details: 'Weekly urine protein-to-creatinine ratio for all FSGS transplant recipients in first 3 months post-transplant. Recurrence threshold: uPCR >1 g/g → urgent biopsy. >80% recurrence risk for patients with prior graft loss from recurrent FSGS.',
  },
  {
    frequency: 'Quarterly',
    item: 'eGFR Staging & KFRE ESKD Risk Assessment',
    details: 'Quarterly eGFR (CKD-EPI 2021 creatinine-cystatin) for CKD stage classification and Kidney Failure Risk Equation 2-year and 5-year ESKD risk projection. CKD 4 patients with >50% 5-year risk → pre-emptive transplant referral.',
  },
  {
    frequency: 'Quarterly',
    item: 'Cyclosporine A / Tacrolimus Trough Monitoring',
    details: 'CsA trough every 2 weeks during induction → monthly during maintenance (target 100–200 ng/mL). Tacrolimus trough 5–10 ng/mL monthly. Quarterly creatinine and magnesium for CNI nephrotoxicity surveillance. Hold CNI if eGFR falls >30% from baseline.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Focal Segmental Glomerulosclerosis Nurse Practitioners"
        title="Every Certification. Every uPCR. Every REMS Deadline."
        subtitle="FSGS nurse practitioners co-manage steroid-resistant nephrotic syndrome with overlapping AGACNP-BC and nephrology credentials, monthly sparsentan REMS documentation, voclosporin trough monitoring, LDL apheresis biweekly scheduling, post-transplant weekly proteinuria surveillance, and quarterly KDIGO protocol audits. Momenties consolidates every certification renewal, uPCR interval, and biomarker collection deadline into one calendar so nothing slips through the cracks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full FSGS NP Practice
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
              The Evidence Base Driving FSGS NP Compliance
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

      {/* CE Schedule */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display,serif', marginBottom: 48, color: '#f0ece3' }}>
              FSGS NP Certification & CE Schedule
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

      <CTA
        headline="Ready to Achieve ≥50% Remission Tracking Across Your FSGS Patient Panel?"
        subtext="Momenties consolidates AGACNP-BC and nephrology CE renewals, monthly sparsentan REMS labs, biweekly voclosporin troughs and LDL apheresis sessions, weekly post-transplant proteinuria surveillance, and quarterly KDIGO protocol audits into one accountable calendar — so every uPCR checkpoint and REMS deadline is on time, every cycle."
      />
    </main>
  )
}
