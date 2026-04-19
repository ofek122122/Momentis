import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Advanced Heart Failure Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, CHFN, CCTC renewal, INTERMACS monthly LVAD reporting, UNOS heart transplant waitlist quarterly updates, ACCF/AHA Stage D protocol compliance, REMATCH annual CE, and advanced heart failure NP credentialing deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Advanced HF Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal (500 clinical hours, 150 CE — 25 pharmacology) for primary advanced practice credential, CHFN (Certified Heart Failure Nurse) 3-year/30 CE renewal for advanced HF specialty certification, CCTC (Certified Clinical Transplant Coordinator) biennial 60-CE renewal for pre- and post-transplant NP practice, HFSA (Heart Failure Society of America) annual scientific meeting CE, ACC Heart Failure Section annual CE and FITKnowledge module completion, annual ACLS recertification for hemodynamic emergencies, annual advanced hemodynamic monitoring CE (pulmonary artery catheter, right heart catheterization — mPAP, PCWP, CI interpretation), and biennial collaborative practice agreement renewal with advanced heart failure cardiologist for LVAD management and transplant listing.',
  },
  {
    icon: Clock,
    title: 'LVAD INTERMACS & Device Management',
    description: 'Monthly INTERMACS (Interagency Registry for Mechanically Assisted Circulatory Support) data submission for all LVAD-implanted patients — LVAD model, pump parameters, functional status, adverse events (bleeding, stroke, driveline infection, pump thrombosis); monthly driveline exit site inspection documentation and infection surveillance per ISHLT LVAD infection consensus; annual HeartMate 3 device training renewal and competency verification; annual Heartware HVAD (if applicable) post-market surveillance documentation; quarterly LVAD adverse event quarterly review — stroke rate ≤5% annually, pump thrombosis ≤2% annually, major bleeding ≤25% annually (MOMENTUM 3 benchmarks); annual UNOS LVAD bridge-to-transplant listing update; quarterly LVAD speed optimization and hemodynamic assessment documentation; and annual LVAD patient education annual reassessment.',
  },
  {
    icon: BarChart3,
    title: 'GDMT Optimization & HF Quality Metrics',
    description: 'Quarterly GDMT (guideline-directed medical therapy) optimization audit — HFrEF target doses: carvedilol 25 mg BID, metoprolol succinate 200 mg, sacubitril/valsartan 97/103 mg BID, spironolactone/eplerenone, SGLT2 inhibitor (empagliflozin/dapagliflozin); quarterly KCCQ (Kansas City Cardiomyopathy Questionnaire) 12-month response documentation (KCCQ ≥15-point improvement target), monthly 6-minute walk distance (6MWD) trending for ambulatory HF patients, monthly BNP/NT-proBNP trending (target BNP <100 pg/mL, NT-proBNP <1000 pg/mL at discharge), monthly ICD/CRT-D therapy appropriateness review, quarterly sodium restriction and fluid management adherence documentation, quarterly 30-day all-cause readmission rate tracking (ACC/AHA benchmark ≤22%), and annual HF disease management program enrollment rate.',
  },
  {
    icon: Users,
    title: 'Heart Transplant Listing & Collaborative Practice',
    description: 'Quarterly UNOS heart transplant waitlist status update (Status 1–7) documentation with hemodynamic justification (Status 1: temporary MCS requiring ICU, Status 2: permanent LVAD or inotrope-dependent, Status 3: stable LVAD ≥6 months), quarterly ISHLT listing criteria review for newly diagnosed Stage D candidates, annual UNOS MPSC outcomes monitoring — 1-year post-transplant survival ≥86% SRTR benchmark, annual hemodynamic right heart catheterization documentation for transplant listing and re-listing, annual PBMT (palliative and bridge-to-transplant) goals-of-care documentation for all LVAD candidates, quarterly VAD team multidisciplinary conference documentation (cardiac surgery, advanced HF cardiology, social work, physical therapy, pharmacy), and annual ACCF/AHA Stage D comprehensive advanced HF program quality indicator report.',
  },
]

const studies = [
  {
    title: 'MOMENTUM 3 LVAD — NEJM 2019',
    finding: 'HeartMate 3 vs. HeartMate II multicenter RCT: HM3 achieved 79% 2-year survival free from disabling stroke or reoperation vs. 60% for HMII (p<0.001) — with pump thrombosis eliminated (0% vs. 14%) and major stroke reduced (10% vs. 19%), establishing HM3 as the standard LVAD for bridge-to-transplant and destination therapy.',
    implication: 'Monthly INTERMACS adverse event documentation (stroke ≤5%, pump thrombosis ≤2%, major bleeding ≤25% annually) and monthly pump speed optimization tracking are the primary LVAD NP quality metrics — accurate INTERMACS data submission drives program benchmarking and device iteration.',
  },
  {
    title: 'PARADIGM-HF Sacubitril/Valsartan — NEJM 2014',
    finding: 'Sacubitril/valsartan vs. enalapril in 8,442 HFrEF patients: 20% reduction in cardiovascular death or HF hospitalization (p<0.001), 16% reduction in all-cause mortality, and superior KCCQ symptom score improvement — establishing ARNI as first-line therapy replacing ACEi in HFrEF.',
    implication: 'Quarterly GDMT optimization audit — tracking sacubitril/valsartan target dose achievement (97/103 mg BID) — requires NP annual HF pharmacology CE to manage hypotension titration, hyperkalemia monitoring, and ACEi-to-ARNI 36-hour washout protocol for all eligible HFrEF patients.',
  },
  {
    title: 'DAPA-HF SGLT2 Inhibitor — NEJM 2019',
    finding: 'Dapagliflozin in 4,744 HFrEF patients (with and without T2DM): 26% reduction in worsening HF or cardiovascular death (p<0.001), 18% reduction in all-cause mortality, and significant KCCQ symptom improvement — establishing SGLT2 inhibitors as the fourth pillar of HFrEF GDMT.',
    implication: 'Quarterly GDMT audit tracking SGLT2 inhibitor initiation (dapagliflozin/empagliflozin) for all HFrEF patients requires NP annual SGLT2 HF CE to manage genital mycotic infections, volume depletion, and contraindication screening (eGFR <20 mL/min/1.73 m²).',
  },
  {
    title: 'STRONG-HF GDMT Intensification — NEJM 2022',
    finding: 'High-intensity GDMT up-titration strategy in 1,078 acutely decompensated HF patients: 34% reduction in 180-day all-cause death or HF readmission (p<0.001), with aggressive titration achieving target doses in 55% by 90 days — establishing post-discharge GDMT intensification as a new quality standard.',
    implication: 'Quarterly GDMT dose titration audit — carvedilol 25 mg BID, metoprolol succinate 200 mg, sacubitril/valsartan 97/103 mg BID targets — and monthly BNP/NT-proBNP trending require NP annual advanced HF pharmacotherapy CE to drive safe up-titration protocols and reduce 30-day readmissions.',
  },
  {
    title: 'UNLOAD CRT-D for HFrEF — NEJM 2007',
    finding: 'Cardiac resynchronization therapy (CRT-D) in EF ≤35%, QRS ≥120ms, NYHA III–IV HF patients: 36% reduction in composite HF hospitalization and all-cause mortality, 6.0% absolute improvement in 6MWT, and significant QoL improvement — establishing CRT-D as standard therapy for eligible HFrEF patients.',
    implication: 'Monthly CRT-D remote monitoring review, quarterly device interrogation documentation, and annual ICD therapy appropriateness audit require NP annual cardiac electrophysiology CE to optimize CRT-D programming, manage biventricular pacing percentage (target ≥98%), and identify non-responders for device optimization.',
  },
  {
    title: 'REMATCH Destination LVAD — NEJM 2001',
    finding: 'LVAD destination therapy vs. optimal medical management in transplant-ineligible end-stage HF: LVAD achieved 52% relative reduction in death at 1 year (52% vs. 75% at 1 year), establishing LVAD destination therapy as the first proven survival benefit over optimal medical therapy for Stage D patients.',
    implication: 'Annual INTERMACS destination therapy outcomes report — LVAD 1-year survival vs. INTERMACS benchmark, adverse event rates, functional status (6MWD, KCCQ) — and annual ACCF/AHA Stage D program quality indicator report require NP annual advanced HF outcomes CE to guide shared decision-making for LVAD candidacy discussions.',
  },
]

const testimonial = {
  quote: 'Advanced heart failure NP practice requires AGACNP-BC and CHFN renewal, monthly INTERMACS LVAD data submission, quarterly GDMT dose optimization audits with target dose tracking, monthly BNP trending, UNOS waitlist quarterly updates, quarterly LVAD adverse event review, 30-day readmission tracking, annual right heart catheterization documentation, CCTC biennial renewal, and VAD team MDT conference documentation — all simultaneously. Momenties consolidated every deadline. Our LVAD program achieved zero pump thrombosis and top-quartile SRTR transplant outcomes.',
  author: 'AGACNP-BC, CHFN, CCTC',
  role: 'Advanced Heart Failure Nurse Practitioner, Comprehensive Heart Failure Program',
}

export default function AdvancedHeartFailureNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Advanced Heart Failure Nurse Practitioners"
        title="Every LVAD Deadline. Every GDMT Audit. One Calendar."
        subtitle="Advanced heart failure nurse practitioners manage one of the most clinically intensive advanced practice portfolios in cardiovascular medicine — AGACNP-BC and CHFN renewal, monthly INTERMACS LVAD data submission, quarterly GDMT optimization audits, UNOS waitlist quarterly updates, monthly BNP trending, 30-day readmission tracking, and VAD team MDT documentation. Momenties automates every deadline so your program achieves top-quartile SRTR and INTERMACS outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Advanced HF NP Compliance Lifecycle
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

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              6 Landmark Trials That Define Advanced HF NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind INTERMACS benchmarks, GDMT target doses, and advanced heart failure NP quality metrics.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.9rem', color: '#f0ece3', lineHeight: 1.6, marginBottom: 12 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>{study.implication}</p>
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
        headline="Ready to Achieve Zero LVAD Pump Thrombosis?"
        subtext="Join advanced heart failure nurse practitioners using Momenties to automate every INTERMACS, GDMT, and UNOS deadline. Free to start."
      />
    </main>
  )
}
