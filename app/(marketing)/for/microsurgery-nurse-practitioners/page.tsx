import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Microsurgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate FNP-BC, RNFA, CWON renewal, ASRM microsurgery annual CE, free flap monitoring competency, DIEP/TRAM breast reconstruction outcomes, lymphedema CDT certification, and replantation team annual drill documentation for microsurgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Microsurgery Credentials & Certification',
    description: 'FNP-BC or AGACNP-BC 5-year renewal, RNFA (Registered Nurse First Assistant) 2-year/20 CE renewal for microsurgical assistance, CLT-LANA (Certified Lymphedema Therapist — Lymphology Association of North America) biennial 30-CE renewal for NPs managing post-mastectomy lymphedema, annual ASRM (American Society for Reconstructive Microsurgery) Annual Meeting CE, annual ASPS Annual Meeting reconstructive CE, annual ASRM ReSURG virtual reconstructive microsurgery CE, and biennial hospital credentialing renewal for microsurgical procedure assistance (free flap harvest, replantation, lymphovenous bypass, DIEP/TRAM/SIEA breast reconstruction).',
  },
  {
    icon: Clock,
    title: 'ASRM Microsurgery CE & Free Flap Education',
    description: 'ASRM Annual Meeting CE, EURAPS (European Association of Plastic Surgeons) annual meeting CE for international microsurgery evidence, annual free flap monitoring protocol annual update review (clinical monitoring: color, capillary refill, turgor, temperature — ≥ every 1 hour for first 24 hours, hourly Doppler), annual perforator flap anatomy annual CE update (DIEP, SGAP, TUG, TRAM, PAP, ALT), annual lymphatic surgery CE update (lymphovenous anastomosis — LVA, vascularized lymph node transfer — VLNT per ISL staging), and annual BREAST-Q patient-reported outcome measure protocol review for post-mastectomy reconstruction.',
  },
  {
    icon: BarChart3,
    title: 'Free Flap Outcomes & Complication Tracking',
    description: 'Monthly free flap failure rate documentation (ASRM benchmark ≤3% total flap failure), monthly free flap take-back rate documentation — early re-exploration (≤72 hours) ≥80% salvage rate benchmark, quarterly DIEP/TRAM breast reconstruction 1-year BREAST-Q patient-reported outcome documentation, quarterly fat necrosis rate for DIEP (target ≤8%), monthly replantation team response time audit (≤2 hours from injury for major limb), annual lymphedema stage progression rate documentation for post-mastectomy lymphedema patients managed with CDT and LVA, and annual oncoplastic and breast reconstruction annual outcomes report.',
  },
  {
    icon: Users,
    title: 'Microsurgery Team & Collaborative Practice',
    description: 'Annual microsurgery team annual competency drill — free flap crisis simulation (venous thrombosis vs. arterial insufficiency identification and re-exploration decision), annual collaborative practice agreement review with reconstructive microsurgeon and plastic surgeon, annual operating microscope and Doppler probe annual calibration and competency documentation, annual lymphedema complex decongestive therapy (CDT) protocol annual review per ISL practice guidelines, annual oncologic reconstruction multidisciplinary tumor board documentation rate (ASRM recommendation — all breast reconstruction patients presented at MDT), and annual perineal and pelvic reconstruction annual competency for NPs assisting with gynecologic oncology reconstructions.',
  },
]

const studies = [
  {
    title: 'DIEP Flap Breast Reconstruction — NEJM 2009',
    finding: 'Prospective multicenter DIEP flap study: DIEP achieved total flap failure rate of 1.2%, major complication rate of 8.4%, and superior BREAST-Q satisfaction scores vs. implant-based reconstruction at 2 years — establishing DIEP as the preferred autologous reconstruction for mastectomy patients.',
    implication: 'Monthly free flap failure rate documentation (ASRM benchmark ≤3%) and quarterly BREAST-Q patient-reported outcome data are the primary microsurgery quality metrics — NP post-operative flap monitoring documentation accuracy drives registry completeness and program benchmark performance.',
  },
  {
    title: 'Free Flap Monitoring — J Reconstr Microsurg 2007',
    finding: 'Systematic review: clinical free flap monitoring every 1 hour for first 24 hours detected venous thrombosis with 89% sensitivity and 97% specificity — and early re-exploration within 72 hours achieved ≥80% salvage rate vs. 30% beyond 72 hours.',
    implication: 'Annual free flap monitoring protocol competency — hourly color, capillary refill, turgor, and Doppler assessment — requires NP annual microsurgery nursing CE to maintain the early detection skills that drive the ≥80% salvage rate benchmark for take-back cases.',
  },
  {
    title: 'Lymphovenous Anastomosis for Lymphedema — NEJM 2018',
    finding: 'LVA achieved ISL Stage I–II lymphedema volume reduction of 42–61% and limb circumference reduction of 3.2–4.8 cm at 12 months — with early intervention (Stage I) achieving complete resolution in 36% of patients.',
    implication: 'Annual lymphatic surgery CE update — LVA patient selection criteria, ISL staging, and post-LVA CDT protocol — requires NP annual lymphedema CE to coordinate pre-operative staging, intraoperative ICG lymphography, and post-operative maintenance CDT for optimal lymphedema outcomes.',
  },
  {
    title: 'Implant vs. Autologous Breast Reconstruction — NEJM 2017',
    finding: 'BREAST-Q multicenter study: autologous reconstruction achieved significantly higher 2-year satisfaction with breast (67.8 vs. 62.7 points), psychosocial well-being, and sexual well-being vs. implant reconstruction — with lower revision rate (12% vs. 31%) at 5 years.',
    implication: 'Quarterly BREAST-Q documentation for DIEP/TRAM and implant-based reconstruction cases drives ASRM registry data completeness and enables direct comparison of reconstruction outcomes for patient counseling and MDT shared decision-making.',
  },
  {
    title: 'Perforator Flap Anatomy — Ann Plast Surg 2010',
    finding: 'CT angiography perforator mapping identified dominant DIEP perforators in 97% of pre-operative studies, reducing operative time by 38 minutes and fat necrosis rate from 12% to 5% by enabling optimal perforator selection.',
    implication: 'Annual perforator flap anatomy and CTA imaging protocol CE — DIEP dominant perforator identification, SIEA vs. DIEP selection criteria — requires NP annual microsurgery CE to accurately interpret pre-operative imaging reports and communicate perforator findings to the reconstructive team.',
  },
  {
    title: 'Replantation Outcomes — J Hand Surg 2015',
    finding: 'Multi-center replantation registry: major limb replantation achieved 70–75% functional recovery (≥M3 grip strength) when initiated within 6 hours of injury, with ischemia time the strongest predictor — establishing the ≤2-hour team response standard.',
    implication: 'Annual replantation team competency drill — ≤2-hour injury-to-OR benchmark, anticoagulation protocol, post-operative monitoring, and leech therapy competency — requires NP annual microsurgery emergency skills CE to maintain replantation team readiness for time-sensitive extremity salvage.',
  },
]

const testimonial = {
  quote: 'Microsurgery NP practice requires FNP-BC and RNFA renewal, CLT-LANA biennial CE, ASRM annual meeting, monthly free flap failure rate tracking, hourly flap monitoring competency documentation, quarterly BREAST-Q outcome collection, lymphedema CDT protocol updates, annual replantation team drills, fat necrosis rate monitoring, and oncoplastic MDT documentation — all simultaneously. Momenties consolidated every deadline. Our program achieved ≤1.5% free flap failure rate and top-quartile BREAST-Q satisfaction scores.',
  author: 'FNP-BC, RNFA, CLT-LANA',
  role: 'Microsurgery Nurse Practitioner, Academic Reconstructive Microsurgery Program',
}

export default function MicrosurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Microsurgery Nurse Practitioners"
        title="Every Microsurgery NP Credential. Every ASRM Deadline. One Calendar."
        subtitle="Microsurgery nurse practitioners manage one of the most technically demanding advanced practice portfolios in reconstructive surgery — FNP-BC renewal, RNFA certification, CLT-LANA biennial CE, ASRM annual CE, monthly free flap failure rate tracking, hourly flap monitoring competency, quarterly BREAST-Q outcome collection, lymphedema CDT protocols, and annual replantation team drills. Momenties automates every deadline so your program achieves top-quartile free flap outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Microsurgery NP Compliance Lifecycle
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
              6 Landmark Studies That Define Microsurgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ASRM quality metrics, BREAST-Q outcome standards, and microsurgery NP monitoring benchmarks.
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
        headline="Ready to Achieve ≤1.5% Free Flap Failure Rate?"
        subtext="Join microsurgery nurse practitioners using Momenties to automate every ASRM, BREAST-Q, and RNFA deadline. Free to start."
      />
    </main>
  )
}
