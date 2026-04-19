import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Electrophysiology Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, CCDS, CEPS renewal, ACC EP/device clinic CE, NCDR ICD and AFib ablation quarterly data, radiation safety annual training, WATCHMAN LAAC REMS, and CMS NCD documentation deadlines for electrophysiology NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'EP Credentials & Device Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care clinical hours, CCDS (Certified Cardiac Device Specialist — IBHRE) biennial renewal with 20 CE hours, CEPS (Certified Electrophysiology Specialist — IBHRE) biennial renewal, annual HRS (Heart Rhythm Society) Annual Scientific Sessions CE, annual ACC Cardiovascular Disease or Cardiac Electrophysiology Section CE, annual APHRS (Asia Pacific Heart Rhythm Society) or EHRA international EP meeting CE, annual pacemaker/ICD/CRT device interrogation annual competency documentation for all EP clinic NPs, and biennial fluoroscopy operator certification renewal (state-specific, typically 2–3 years).',
  },
  {
    icon: Clock,
    title: 'NCDR Registries & EP Lab Quality',
    description: 'ACC NCDR ICD Registry quarterly data submission ≥90% case capture for all ICD and CRT-D implantations, ACC NCDR AFib Ablation Registry quarterly data submission for all pulmonary vein isolation and complex ablation procedures, annual HRS/ACC EP lab quality metrics annual report — procedure volume, complication rate, acute success rate, and 30-day outcomes, quarterly device infection rate audit (CIED infection target ≤1% at 30 days), annual pacemaker appropriate implantation rate audit (CMS NCD documentation for single vs. dual-chamber pacemaker), and annual fluoroscopy radiation dose audit for EP lab (≤5 rem occupational dose per year).',
  },
  {
    icon: BarChart3,
    title: 'Ablation Outcomes & Device Complications',
    description: 'Monthly AFib ablation 12-month freedom from atrial arrhythmia rate documentation (HRS benchmark ≥60% for first AF ablation), monthly pericardial effusion/tamponade rate for all ablation procedures (target ≤1%), quarterly cardiac perforation/vascular complication rate for device implantations (target ≤2%), quarterly CIED extraction complication rate (major complication target ≤2% for lead extractions), monthly inappropriate ICD shock rate documentation (target ≤5% per year for FDA Class III indication ICD recipients), and annual CRT-D biventricular pacing percentage audit (≥98% BiV pacing required for optimal CRT response).',
  },
  {
    icon: Users,
    title: 'WATCHMAN LAAC REMS & Collaborative Practice',
    description: 'Annual WATCHMAN/WATCHMAN FLX Left Atrial Appendage Closure (LAAC) device REMS — Boston Scientific annual clinical training update, NCDR LAAO Registry quarterly data submission for all WATCHMAN procedures (required for CMS reimbursement), annual collaborative practice agreement review with electrophysiologist and cardiac surgeon, DEA 3-year registration renewal, annual LAAC patient selection protocol review (HRS/ACC/SCAI consensus criteria — LAA thrombus exclusion TEE documentation), annual device clinic remote monitoring protocol review (HRS remote monitoring consensus ≥90% patient enrollment), and annual anticoagulation management protocol review for AF patients post-ablation and post-WATCHMAN.',
  },
]

const studies = [
  {
    title: 'AFib Ablation vs. Drug Therapy — NEJM 2019',
    finding: 'CABANA trial: AFib ablation achieved superior quality of life and freedom from AF vs. drug therapy (freedom from recurrence 67.8% vs. 67.4% at 5 years in ITT — but 89.3% vs. 77.2% in as-treated analysis), establishing ablation as first-line for symptomatic AF in selected patients.',
    implication: 'Monthly AFib ablation freedom-from-arrhythmia rate documentation (HRS benchmark ≥60% at 12 months for first ablation) requires NP annual EP CE to communicate evolving CABANA-era evidence to patients during pre-ablation shared decision-making consultations.',
  },
  {
    title: 'ICD Primary Prevention — NEJM 2005',
    finding: 'SCD-HeFT trial: ICD reduced all-cause mortality by 23% vs. placebo in NYHA Class II–III HF patients with LVEF ≤35% — establishing EF-based ICD criteria as the primary prevention CMS coverage standard now embedded in NCD documentation requirements.',
    implication: 'Annual pacemaker/ICD appropriate implantation rate audit — CMS NCD documentation for LVEF ≤35%, NYHA class, and 3-month optimal medical therapy — requires NP pre-procedure documentation accuracy to ensure CMS reimbursement and NCDR registry data completeness.',
  },
  {
    title: 'CRT for Heart Failure — NEJM 2004',
    finding: 'COMPANION trial: CRT-D reduced all-cause mortality by 36% and hospitalization by 34% vs. optimal medical therapy in NYHA Class III–IV HF with LBBB QRS ≥120ms — establishing CRT-D as standard of care for wide-complex dyssynchrony HF.',
    implication: 'Annual CRT-D biventricular pacing percentage audit (≥98% BiV pacing required for optimal response) is an HRS device clinic quality metric — NP remote monitoring management of CRT device programming optimization drives response rates and reduces HF hospitalization.',
  },
  {
    title: 'WATCHMAN LAAC vs. Warfarin — NEJM 2014',
    finding: 'PROTECT AF trial: WATCHMAN LAA closure was non-inferior to warfarin for stroke prevention in AF with superiority for cardiovascular death and all-cause mortality at 3.8 years — establishing LAAC as an evidence-based warfarin alternative for patients with high bleeding risk.',
    implication: 'NCDR LAAO Registry quarterly data submission (required for CMS reimbursement) and annual WATCHMAN REMS training update require NP annual device CE to maintain LAAC procedural certification and document patient selection per HRS/ACC/SCAI consensus criteria.',
  },
  {
    title: 'Cardiac Lead Extraction Safety — HRS Consensus 2017',
    finding: 'HRS Expert Consensus on Lead Extraction documented major complication rates of 1.4–1.9% including SVC tear (0.5%), cardiac perforation (0.8%), and pericardial effusion — establishing minimum operator volume (≥40 extractions) and center volume (≥20/year) for safe extraction practice.',
    implication: 'Quarterly CIED extraction complication rate documentation (major complication target ≤2%) is an HRS quality metric — NP pre-extraction patient assessment, anticoagulation management, and 30-day post-extraction outcome documentation drives registry data accuracy.',
  },
  {
    title: 'Remote ICD Monitoring — NEJM 2010',
    finding: 'CONNECT trial: remote ICD monitoring reduced time from clinical event to clinical decision by 4.6 days vs. standard in-person follow-up (3.0 vs. 22.0 days) and reduced cardiovascular hospitalizations by 18% — establishing remote monitoring as the preferred follow-up strategy.',
    implication: 'Annual device clinic remote monitoring protocol review — HRS consensus ≥90% patient enrollment in remote monitoring, alert response timeframes, and telemedicine integration — requires NP annual device CE update to optimize remote monitoring workflow and alert management.',
  },
]

const testimonial = {
  quote: 'Electrophysiology NP practice requires AGACNP-BC and CCDS/CEPS renewal, HRS annual CE, quarterly NCDR ICD and AFib Ablation Registry submissions, NCDR LAAO Registry for WATCHMAN, WATCHMAN REMS annual training, fluoroscopy radiation safety annual certification, monthly inappropriate shock rate tracking, annual BiV pacing percentage audits, and remote monitoring enrollment documentation — all simultaneously. Momenties consolidated every deadline. Our EP program achieved ≥95% NCDR case capture and top-quartile HRS AFib ablation success rates.',
  author: 'AGACNP-BC, CCDS, CEPS',
  role: 'Electrophysiology Nurse Practitioner, Academic Heart Rhythm Program',
}

export default function ElectrophysiologyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Electrophysiology Nurse Practitioners"
        title="Every EP NP Credential. Every NCDR Registry Deadline. One Calendar."
        subtitle="Electrophysiology nurse practitioners manage one of the most device-intensive and registry-driven advanced practice portfolios in cardiology — AGACNP-BC renewal, CCDS/CEPS certification, quarterly NCDR ICD/AFib Ablation/LAAO Registry submissions, WATCHMAN REMS annual training, fluoroscopy safety certification, monthly ablation outcome tracking, and remote monitoring enrollment documentation. Momenties automates every HRS, ACC, and CMS deadline so your EP program achieves top-quartile ablation success and zero CMS reimbursement denials."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Electrophysiology NP Compliance Lifecycle
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
              6 Landmark Trials That Define Electrophysiology NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind HRS quality metrics, NCDR registry requirements, and electrophysiology NP outcome benchmarks.
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
        headline="Ready for ≥95% NCDR EP Registry Case Capture?"
        subtext="Join electrophysiology nurse practitioners using Momenties to automate every HRS, NCDR, and CCDS deadline. Free to start."
      />
    </main>
  )
}
