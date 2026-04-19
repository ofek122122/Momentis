import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Advanced Heart Failure Center Compliance Calendar | Momenties',
  description: 'Automate INTERMACS monthly LVAD reporting, UNOS heart transplant quarterly waitlist updates, ACC/AHA GDMT quarterly audits, 30-day readmission tracking, HFSA annual CE, SRTR semi-annual outcomes review, and advanced heart failure program accreditation deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'Program Accreditation & GDMT Standards',
    description: 'Annual ACC Heart Failure Accreditation Program (HFAP) compliance review — required multidisciplinary team composition, GDMT documentation standards, patient education protocols, care transition standards; annual HFSA scientific meeting CE requirement for HF program staff; annual AHA/ACC/HFSA 2022 Guideline for the Management of Heart Failure update implementation review; biennial ACC Heart Failure Certification self-assessment module completion for all advanced practice providers; annual ACLS recertification for all HF program clinical staff; annual advanced hemodynamic monitoring training (PA catheter, right heart catheterization) competency documentation; and biennial Get With The Guidelines (GWTG-HF) recognition program requirements review (Target: HF Gold Plus — ≥85% GDMT at discharge, ≥85% smoking cessation, ≥85% patient education).',
  },
  {
    icon: RefreshCw,
    title: 'LVAD Program & INTERMACS Reporting',
    description: 'Monthly INTERMACS data submission for all active LVAD patients — pump model, speed parameters, functional status (6MWT, KCCQ), adverse events; quarterly INTERMACS adverse event benchmarking — pump thrombosis ≤2% (MOMENTUM 3 benchmark), major stroke ≤5%, driveline infection ≤10%, major bleeding ≤25% annually; annual HeartMate 3 device training renewal and pump management competency for all LVAD coordinators; annual LVAD destination therapy informed consent protocol review; annual VAD center volume requirement verification (INTERMACS minimum 10 implants/year for reporting center designation); quarterly LVAD remote monitoring alert response time audit (≤24-hour response for high-priority alerts); annual LVAD patient education annual curriculum review; and annual LVAD program complications management protocol update (pump thrombosis, driveline infection, GI bleeding, stroke).',
  },
  {
    icon: TrendingUp,
    title: 'Heart Transplant SRTR & UNOS Compliance',
    description: 'Quarterly UNOS heart transplant waitlist status update compliance — Status 1–7 hemodynamic justification documentation within 7 days of clinical change; semi-annual SRTR program-specific report review (January and July) — 1-year patient survival ≥86%, 1-year graft survival ≥86% SRTR benchmark; annual UNOS MPSC (Membership and Professional Standards Committee) outcomes monitoring review; annual UNOS transplant program requirements (TPR) self-assessment; quarterly donor heart utilization review — organ offer acceptance rate, cold ischemia time ≤4 hours documentation; annual ABO verification policy competency documentation (≥2 independent verifications pre-transplant per OPTN Policy 18.1); annual desensitization protocol review for highly sensitized candidates (PRA ≥80%); and quarterly post-transplant EMB (endomyocardial biopsy) surveillance scheduling compliance — weekly ×4 → biweekly ×4 → monthly ×6 → annual (ISHLT protocol).',
  },
  {
    icon: BarChart3,
    title: 'Readmission, GDMT & Program Quality Metrics',
    description: 'Monthly 30-day all-cause readmission rate tracking (ACC/AHA benchmark ≤22% — CMS HF readmission penalty threshold); monthly 30-day HF-specific readmission tracking for GWTG registry submission; quarterly GDMT target dose achievement audit — sacubitril/valsartan 97/103 mg BID, carvedilol 25 mg BID, metoprolol succinate 200 mg, spironolactone/eplerenone, SGLT2 inhibitor (empagliflozin/dapagliflozin); quarterly BNP/NT-proBNP discharge value documentation (target NT-proBNP <1000 pg/mL at discharge — STRONG-HF protocol); quarterly biventricular pacing percentage audit for all CRT-D patients (target ≥98%); annual Mended Hearts patient support program partnership documentation; quarterly diuretic resistance protocol compliance (metolazone + loop diuretic, aquapheresis criteria); and annual palliative care integration documentation rate for NYHA Class IV patients.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'AHA/ACC/HFSA Guideline Review',
    tasks: 'Complete annual AHA/ACC/HFSA 2022 Heart Failure Guideline update implementation review. Update GDMT four-pillar initiation protocol (ARNI, beta-blocker, MRA, SGLT2). Schedule Q1 30-day readmission audit. Review SRTR January semi-annual report.',
  },
  {
    phase: 'February',
    title: 'LVAD Competency Renewals',
    tasks: 'Complete annual HeartMate 3 device training renewal for all LVAD coordinators. Update pump management competency documentation. Review INTERMACS January adverse event data. Verify driveline infection surveillance protocols.',
  },
  {
    phase: 'March',
    title: 'Q1 GDMT & INTERMACS Review',
    tasks: 'Complete Q1 GDMT target dose achievement audit. Submit March INTERMACS monthly data. Review Q1 LVAD adverse event rates vs. MOMENTUM 3 benchmarks. Document pump thrombosis and major bleeding rates. Submit Q1 UNOS waitlist status updates.',
  },
  {
    phase: 'April',
    title: 'GWTG-HF Registry Compliance',
    tasks: 'Complete Q1 GWTG-HF data submission. Review Gold Plus recognition status — ≥85% GDMT at discharge, smoking cessation, patient education. Audit Q1 NT-proBNP discharge values. Schedule HFAP accreditation review documentation.',
  },
  {
    phase: 'May',
    title: 'Transplant Protocol Review',
    tasks: 'Complete annual ABO verification policy competency documentation. Review desensitization protocol for PRA ≥80% candidates. Update EMB surveillance scheduling compliance. Document Q2 UNOS waitlist status updates with hemodynamic justification.',
  },
  {
    phase: 'June',
    title: 'Q2 Outcomes & 30-Day Readmission',
    tasks: 'Complete Q2 30-day all-cause and HF-specific readmission audit. Submit INTERMACS Q2 data. Review Q2 GDMT dose titration. Complete SRTR June semi-annual report review. Audit biventricular pacing percentages for CRT-D patients.',
  },
  {
    phase: 'July',
    title: 'HFSA Annual Meeting CE',
    tasks: 'Attend HFSA Scientific Meeting — complete annual CE requirements. Collect updated GDMT evidence, LVAD management updates, transplant protocol changes. Update program protocols from conference evidence. Complete biennial ACC HF Certification module for APPs.',
  },
  {
    phase: 'August',
    title: 'LVAD Program Volume Audit',
    tasks: 'Complete annual INTERMACS minimum volume verification (10 implants/year). Review LVAD destination therapy patient education curriculum. Audit LVAD remote monitoring alert response times (≤24 hours). Update LVAD program complications management protocol.',
  },
  {
    phase: 'September',
    title: 'Q3 GDMT & Palliative Care Review',
    tasks: 'Complete Q3 GDMT audit and target dose tracking. Document annual palliative care integration rate for NYHA Class IV patients. Review diuretic resistance protocol compliance. Submit Q3 INTERMACS and GWTG-HF data. Complete Q3 UNOS waitlist updates.',
  },
  {
    phase: 'October',
    title: 'ACLS Recertification & Hemodynamic Training',
    tasks: 'Complete annual ACLS recertification for all HF program clinical staff. Complete advanced hemodynamic monitoring competency documentation (PA catheter, RHC interpretation). Update cardiogenic shock protocol. Review UNOS MPSC outcomes data.',
  },
  {
    phase: 'November',
    title: 'SRTR & UNOS Annual Review',
    tasks: 'Complete annual UNOS MPSC outcomes monitoring review. Submit annual UNOS TPR self-assessment. Review 1-year post-transplant survival vs. SRTR benchmark (≥86%). Document donor heart utilization and cold ischemia time performance.',
  },
  {
    phase: 'December',
    title: 'Annual Report & HFAP Prep',
    tasks: 'Compile annual HFAP accreditation compliance documentation. Finalize annual 30-day readmission rate report. Review annual GDMT achievement rates. Submit Q4 INTERMACS data. Prepare GWTG-HF Gold Plus recognition renewal documentation.',
  },
]

const kpis = [
  { metric: '≤22%', label: '30-Day All-Cause Readmission' },
  { metric: '≥86%', label: '1-Year Post-Transplant Survival' },
  { metric: '≤2%', label: 'LVAD Pump Thrombosis Rate' },
  { metric: '≥98%', label: 'CRT-D Biventricular Pacing' },
  { metric: '≥85%', label: 'GDMT at Discharge (GWTG)' },
  { metric: 'Monthly', label: 'INTERMACS Data Submission' },
]

const testimonial = {
  quote: 'Advanced heart failure program management requires AHA/ACC/HFSA annual guideline review, monthly INTERMACS LVAD data submission, quarterly GDMT dose achievement audits, UNOS quarterly waitlist updates, semi-annual SRTR review, monthly 30-day readmission tracking, annual HeartMate 3 device renewals, GWTG-HF Gold Plus compliance, biventricular pacing audits, palliative care integration documentation, and HFAP accreditation maintenance — all simultaneously. Momenties consolidated every deadline. Our program achieved ≤18% readmission rate and top-quartile SRTR outcomes.',
  author: 'Medical Director, Advanced Heart Failure Program',
  role: 'ACC Heart Failure Accreditation Program, Academic Medical Center',
}

export default function AdvancedHeartFailureCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Advanced Heart Failure Center Calendar"
        title="Every GDMT Audit. Every INTERMACS Deadline. One Calendar."
        subtitle="Advanced heart failure programs manage one of the most compliance-intensive cardiovascular portfolios — monthly INTERMACS LVAD data submission, quarterly GDMT dose achievement audits, UNOS quarterly waitlist updates, semi-annual SRTR outcomes review, monthly 30-day readmission tracking, GWTG-HF Gold Plus compliance, and HFAP accreditation maintenance. Momenties automates every deadline so your program achieves top-quartile heart failure outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Advanced HF Center Compliance Lifecycle
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
              The Advanced HF Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every GDMT audit, INTERMACS submission, UNOS update, readmission review, and accreditation milestone — sequenced across 12 months.
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
              The 6 KPIs That Define Advanced HF Program Excellence
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
        headline="Ready to Achieve ≤18% 30-Day Readmission Rate?"
        subtext="Join advanced heart failure programs using Momenties to automate every INTERMACS, GDMT, and SRTR deadline. Free to start."
      />
    </main>
  )
}
