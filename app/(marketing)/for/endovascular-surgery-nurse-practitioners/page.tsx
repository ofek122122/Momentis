import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Endovascular Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, RNFA, RVT renewal, SVS VQI quarterly data, EVAR 1-year CT surveillance, fluoroscopy radiation annual safety, TEVAR annual outcomes, EVAR device IFU compliance, and SVS annual CE deadlines for endovascular surgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Endovascular Surgery Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care clinical hours, RNFA (Registered Nurse First Assistant) 2-year/20 CE renewal for endovascular surgical assistance, RVT (Registered Vascular Technologist — ARDMS) biennial 30-CE renewal, annual SVS (Society for Vascular Surgery) Annual Meeting CE, annual VEITH Symposium annual endovascular CE, annual SIR (Society of Interventional Radiology) Annual Scientific Meeting CE for hybrid endovascular procedures, biennial fluoroscopy operator certification renewal (state-specific), and biennial hospital credentialing renewal for endovascular procedure assistance (EVAR, TEVAR, FEVAR, carotid stenting, iliac stenting).',
  },
  {
    icon: Clock,
    title: 'SVS VQI Registry & Endovascular Quality',
    description: 'SVS Vascular Quality Initiative (VQI) quarterly data submission ≥90% case capture for all vascular and endovascular procedures — required for SVS Center of Excellence designation, quarterly VQI composite quality score review vs. national VQI peer group, annual SVS/AAVS annual quality outcomes report, annual SVS volume requirement audit (EVAR: ≥50 AAA repairs/year for high-volume center designation), annual CMS Hospital Outpatient Quality Reporting (HOQR) vascular procedure data submission, and annual SVS Center of Excellence annual self-assessment.',
  },
  {
    icon: BarChart3,
    title: 'EVAR Surveillance & Outcomes Tracking',
    description: 'Annual EVAR 30-day, 1-year, and 5-year surveillance CT angiography protocol compliance audit — SVS/SIR guideline: CT at 1 month, 6 months, 12 months, then annual, monthly endoleak rate documentation (Type I/III: immediate reintervention required; Type II: surveillance ≥6 months), monthly EVAR 30-day mortality rate (benchmark ≤1% for elective infrarenal EVAR), monthly TEVAR spinal cord ischemia rate (benchmark ≤5%), quarterly aortic-related reintervention rate (EVAR benchmark ≤8% at 5 years), and annual fluoroscopy radiation dose audit for endovascular suite (≤5 rem occupational dose per year).',
  },
  {
    icon: Users,
    title: 'FDA Device IFU & Collaborative Practice',
    description: 'Annual EVAR and TEVAR device IFU (Instructions for Use) compliance audit — confirm all elective stent graft implants are within anatomic IFU criteria (aortic neck length, angulation, diameter) per device-specific IFU, annual Medtronic/Cook/Endologix/Gore EVAR device annual clinical training update, annual collaborative practice agreement review with vascular surgeon and interventional radiologist, DEA 3-year registration renewal, annual hybrid OR fluoroscopy safety and radiation protection training for all endovascular team members, and annual ruptured AAA emergency team annual drill — ≤60 minutes from ED arrival to OR for REBOA-eligible patients.',
  },
]

const studies = [
  {
    title: 'EVAR vs. Open AAA Repair — NEJM 2010',
    finding: 'EVAR-1 trial 10-year follow-up: EVAR achieved 70% lower perioperative mortality (0.5% vs. 1.8%) but equivalent long-term all-cause mortality vs. open repair at 10 years — with significantly higher EVAR reintervention rate (26% vs. 9%) requiring lifelong CT surveillance.',
    implication: 'Annual EVAR CT surveillance protocol compliance audit — SVS/SIR CT at 1/6/12 months then annual — is the primary EVAR quality metric. NP coordination of long-term EVAR follow-up drives endoleak detection and reintervention timing to prevent AAA rupture after EVAR.',
  },
  {
    title: 'TEVAR for Type B Dissection — NEJM 2013',
    finding: 'INSTEAD-XL trial: TEVAR for uncomplicated type B aortic dissection reduced aortic-related mortality from 19.3% to 6.9% and aortic disease progression from 27% to 14.3% at 5 years vs. optimal medical therapy alone — establishing TEVAR as superior for uncomplicated TBAD at 2 years.',
    implication: 'Monthly TEVAR spinal cord ischemia rate documentation (benchmark ≤5%) and annual TEVAR 1-year and 5-year aortic remodeling outcomes require NP annual endovascular CE to manage post-TEVAR surveillance and spinal drain protocol for high-risk extent cases.',
  },
  {
    title: 'FEVAR for Complex Aortic Anatomy — J Vasc Surg 2015',
    finding: 'Fenestrated EVAR (FEVAR) achieved 30-day mortality of 0.7% and 5-year survival of 68% for juxtarenal and pararenal AAAs — comparable to open repair — establishing FEVAR as the preferred approach for complex proximal neck anatomy at high-volume centers.',
    implication: 'Annual device IFU compliance audit for FEVAR and branched EVAR cases — confirming target vessel anatomy meets device-specific IFU criteria — is an FDA compliance requirement. NP pre-operative CT assessment documentation drives IFU compliance and CMS reimbursement.',
  },
  {
    title: 'EVAR Endoleak Classification — J Vasc Surg 2002',
    finding: 'Veith EVAR endoleak classification established Type I (attachment site) and Type III (fabric failure) as requiring immediate reintervention due to direct aortic pressurization risk, vs. Type II (branch back-filling) managed conservatively with surveillance — the standard EVAR complication framework.',
    implication: 'Monthly endoleak rate documentation by type — Type I/III immediate reintervention, Type II ≥6 months surveillance — requires NP annual endovascular CE to accurately classify post-EVAR CT findings and initiate appropriate reintervention pathways.',
  },
  {
    title: 'Carotid Artery Stenting vs. CEA — NEJM 2016',
    finding: 'CREST-1: CAS and CEA achieved equivalent 4-year stroke or death rates (6.4% vs. 4.7%) with CAS showing higher peri-procedural stroke but lower MI rate — establishing CAS as equivalent for selected patients at high surgical risk or with anatomically unfavorable CEA.',
    implication: 'Quarterly carotid stenting 30-day stroke/death rate documentation (SVS benchmark ≤3% for asymptomatic, ≤6% for symptomatic) is an SVS VQI quality metric — NP pre-procedural NASCET grading accuracy and patient risk stratification drives appropriate CAS candidacy selection.',
  },
  {
    title: 'REBOA for Hemorrhagic Shock — J Trauma 2015',
    finding: 'Zone I REBOA achieved 90% aortic occlusion success and hemodynamic stabilization in 89% of cases for non-compressible torso hemorrhage — with 24-hour survival of 71% vs. 43% for matched historical controls without aortic occlusion.',
    implication: 'Annual ruptured AAA and trauma REBOA emergency drill — ≤60-minute ED-to-OR benchmark — requires NP annual resuscitative endovascular skills CE to support hybrid trauma/endovascular team activation and REBOA-qualified staff availability for hemorrhagic emergencies.',
  },
]

const testimonial = {
  quote: 'Endovascular surgery NP practice requires AGACNP-BC and RNFA renewal, RVT biennial recertification, SVS VQI quarterly data submissions, monthly EVAR endoleak rate tracking, annual CT surveillance protocol compliance audits, TEVAR spinal cord ischemia monitoring, device IFU compliance audits, fluoroscopy radiation safety annual certification, annual ruptured AAA emergency drills, and carotid stenting outcome documentation — all simultaneously. Momenties consolidated every deadline. Our program achieved SVS Center of Excellence designation and top-quartile VQI outcomes.',
  author: 'AGACNP-BC, RNFA, RVT',
  role: 'Endovascular Surgery Nurse Practitioner, SVS Center of Excellence',
}

export default function EndovascularSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Endovascular Surgery Nurse Practitioners"
        title="Every Endovascular NP Credential. Every VQI Registry Deadline. One Calendar."
        subtitle="Endovascular surgery nurse practitioners manage one of the most device-intensive and surveillance-driven surgical advanced practice portfolios — AGACNP-BC renewal, RNFA certification, RVT biennial renewal, SVS VQI quarterly data submissions, annual EVAR CT surveillance compliance audits, TEVAR spinal cord ischemia monitoring, device IFU compliance, fluoroscopy safety certification, and ruptured AAA emergency drills. Momenties automates every deadline so your program achieves SVS Center of Excellence status."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Endovascular Surgery NP Compliance Lifecycle
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
              6 Landmark Trials That Define Endovascular Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind SVS VQI quality metrics, EVAR surveillance protocols, and endovascular surgery NP outcome benchmarks.
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
        headline="Ready to Achieve SVS Center of Excellence Status?"
        subtext="Join endovascular surgery nurse practitioners using Momenties to automate every SVS VQI, EVAR surveillance, and RNFA deadline. Free to start."
      />
    </main>
  )
}
