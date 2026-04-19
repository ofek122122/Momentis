import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Cardiac Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, RNFA, CSC renewal, STS ACSD registry submissions, IABP management competency, and CTSNET annual CE deadlines for cardiac surgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Cardiac Surgery Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care hours, RNFA 2-year/20 CE renewal, CSC (Cardiac Surgery Certification) AACN 3-year renewal, CCRN-Adult 3-year renewal for CSICU NPs, annual STS (Society of Thoracic Surgeons) membership CE, annual AATS membership CE, and biennial hospital credentialing for cardiac surgical procedure assistance (CABG, valve, LVAD).',
  },
  {
    icon: Clock,
    title: 'STS, AATS & Cardiac Surgery CE',
    description: 'STS Annual Meeting CE, AATS Annual Meeting CE, ISMICS (International Society for Minimally Invasive Cardiothoracic Surgery) Annual Meeting CE, annual IABP/ECMO management competency documentation, annual ventricular assist device (VAD) management CE, annual anticoagulation for cardiac surgery CE, and ACLS biennial recertification — all tracked toward AGACNP-BC and CSC renewal.',
  },
  {
    icon: BarChart3,
    title: 'STS ACSD Registry & Cardiac Surgery Quality',
    description: 'STS Adult Cardiac Surgery Database (ACSD) quarterly data submission (≥90% case capture), annual STS composite quality score review (3-star vs. 2-star vs. 1-star program), monthly 30-day CABG mortality and morbidity reviews, quarterly valve surgery outcome tracking, monthly LVAD 90-day adverse event documentation, and annual STS/ACC TVT (Transcatheter Valve Therapy) registry data submission for TAVR/MitraClip.',
  },
  {
    icon: Users,
    title: 'LVAD REMS & Collaborative Practice',
    description: 'Annual LVAD center certification renewal (INTERMACS/AHNS) — program certification required for CMS reimbursement, annual STS INTERMACS registry annual data completeness audit, annual HeartMate 3 Abbott LVAD annual clinical training update, annual Heartware HVAD or MVAD clinical training (if applicable), annual collaborative practice agreement review with cardiac surgeon, and DEA 3-year registration renewal.',
  },
]

const studies = [
  {
    title: 'Off-Pump CABG vs. On-Pump — NEJM 2013',
    finding: 'CORONARY trial: off-pump CABG had similar 30-day mortality to on-pump (2.0% vs. 2.5%) but lower transfusion rate (50% vs. 63%) and shorter ventilation time — without sacrificing graft patency at 1 year.',
    implication: 'Quarterly CABG approach rate documentation (on-pump vs. off-pump) and annual graft patency audit are STS ACSD quality metrics — NP post-operative documentation drives registry completeness.',
  },
  {
    title: 'TAVR vs. SAVR in Low-Risk — NEJM 2019',
    finding: 'PARTNER 3 trial: TAVR was non-inferior to SAVR in low-risk severe AS patients at 1 year (death/stroke/rehospitalization 8.5% vs. 15.1%, p<0.001), expanding TAVR eligibility across all risk categories.',
    implication: 'Annual STS/ACC TVT registry data submission for all TAVR and SAVR cases is required for CMS reimbursement — NP procedure documentation drives registry accuracy and program quality star ratings.',
  },
  {
    title: 'LVAD as Destination Therapy — NEJM 2009',
    finding: 'HEARTMATE II trial established continuous-flow LVAD as effective destination therapy in advanced HF patients not eligible for transplant — 2-year survival 58% vs. 24% for pulsatile device.',
    implication: 'Monthly LVAD 90-day adverse event documentation (major bleeding, stroke, driveline infection, pump thrombosis) is required by INTERMACS registry for all certified LVAD programs.',
  },
  {
    title: 'Mitral Valve Repair vs. Replacement — NEJM 2015',
    finding: 'AHA/ACC guidelines recommend repair over replacement for severe degenerative MR; repair achieves 98% freedom from reoperation at 20 years in specialized centers vs. 75% for replacement.',
    implication: 'Quarterly mitral repair rate documentation for isolated degenerative MR is an STS ACSD quality metric — programs achieving <75% repair rate for degenerative MR trigger STS quality improvement consultation.',
  },
  {
    title: 'Aortic Valve Reoperation After TAVR — NEJM 2022',
    finding: 'TAVR valve-in-valve reoperation achieved acceptable outcomes for structural valve deterioration with 30-day mortality 3.5% and 1-year survival 89% — establishing the long-term management pathway for aging TAVR valves.',
    implication: 'Annual TVT registry TAVR follow-up data completeness audit ensures all TAVR patients have 30-day, 1-year, and annual follow-up data submitted — NP clinic documentation drives this longitudinal registry.',
  },
  {
    title: 'Enhanced Recovery After Cardiac Surgery — JTCVS 2020',
    finding: 'ERAS protocols for cardiac surgery reduced ICU LOS by 1.2 days, hospital LOS by 1.8 days, and blood transfusion rate by 23% across 15 evidence-based elements in prospective implementation trials.',
    implication: 'Monthly ERAS protocol adherence documentation for post-cardiac surgery patients is an emerging STS quality metric — NP management of early extubation, early mobilization, and early oral intake drives pathway compliance.',
  },
]

const testimonial = {
  quote: 'Cardiac surgery NP practice is credential-intensive at every level — AGACNP-BC, RNFA, CSC renewal, ACLS recertification, IABP and ECMO competency documentation, STS ACSD quarterly registry submissions, LVAD INTERMACS data, and TVT registry follow-up. Momenties consolidated every deadline. Our STS program received its first 3-star composite rating the year after we implemented it.',
  author: 'AGACNP-BC, RNFA, CSC',
  role: 'Cardiac Surgery Nurse Practitioner, Academic Heart &amp; Vascular Center',
}

export default function CardiacSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Cardiac Surgery Nurse Practitioners"
        title="Every Cardiac Surgery NP Credential. Every STS Registry Deadline. One Calendar."
        subtitle="Cardiac surgery NPs hold the most technically complex credential portfolio in surgical advanced practice — AGACNP-BC renewal, RNFA certification, CSC 3-year renewal, STS ACSD quarterly registry submissions, LVAD INTERMACS data, TVT registry follow-up, and IABP/ECMO competency documentation. Momenties automates every deadline so your program earns and keeps its 3-star rating."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Cardiac Surgery NP Compliance Lifecycle
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
              6 Landmark Trials That Define Cardiac Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind STS ACSD quality metrics, INTERMACS registry requirements, and cardiac surgery NP outcome benchmarks.
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
        headline="Ready to Earn a 3-Star STS Rating?"
        subtext="Join cardiac surgery nurse practitioners using Momenties to automate every STS registry, LVAD, and CSC deadline. Free to start."
      />
    </main>
  )
}
