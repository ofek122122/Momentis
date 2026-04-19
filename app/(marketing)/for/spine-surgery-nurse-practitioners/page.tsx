import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Spine Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, RNFA, ATLS renewal, NASS annual CE, NSQIP spine outcomes tracking, VTE prophylaxis protocol compliance, surgical site infection surveillance, and SBNS annual meeting CE deadlines for spine surgery NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Spine Surgery Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care hours, RNFA (Registered Nurse First Assistant) 2-year/20 CE renewal for surgical assistance, ATLS (Advanced Trauma Life Support) 4-year renewal for spine trauma cases, CCRN 3-year renewal for spine ICU NPs, annual NASS (North American Spine Society) membership CE, annual SBNS (Society for Brain and Neural Sciences) annual meeting CE, annual CSRS (Cervical Spine Research Society) annual meeting CE, and biennial hospital credentialing renewal for complex spine procedure assistance (ACDF, posterior fusion, TLIF, ADR).',
  },
  {
    icon: Clock,
    title: 'NASS, SBNS & Spine Surgery CE',
    description: 'NASS Annual Meeting CE, SBNS Annual Meeting CE, CSRS Annual Meeting CE, AANS/CNS Joint Section on Disorders of the Spine annual meeting CE, annual spine biomechanics and implant technology CE update, annual neuromonitoring (SSEP/MEP) interpretation annual CE for intraoperative monitoring awareness, annual cervical and lumbar MRI interpretation annual update CE, and annual spinal cord injury (SCI) management annual CE — all tracked toward AGACNP-BC renewal.',
  },
  {
    icon: BarChart3,
    title: 'NSQIP Spine & Quality Metrics',
    description: 'Annual ACS NSQIP spine module outcomes report — 30-day morbidity, mortality, SSI, and VTE rates, monthly SSI rate documentation for spine surgery (ACS benchmark ≤1.5% for posterior lumbar fusion), monthly VTE prophylaxis protocol compliance audit (DVT ≤1%, PE ≤0.5% for elective spine cases), quarterly return-to-OR rate tracking (≤2% for elective spine procedures), quarterly patient-reported outcome measures (PROMIS pain and physical function at 3 and 12 months), and annual dural tear rate documentation (posterior lumbar ≤3%, cervical ≤1%).',
  },
  {
    icon: Users,
    title: 'Neuromonitoring & Collaborative Practice',
    description: 'Annual collaborative practice agreement review with spine surgeon and neurosurgeon, annual intraoperative neuromonitoring (IONM) alert protocol annual competency — SSEP/MEP significant change criteria and surgical response protocol, DEA 3-year registration renewal for ketamine and opioid prescribing, annual fluoroscopy radiation safety training for C-arm/O-arm-equipped spine ORs, annual spinal cord stimulator (SCS) and intrathecal drug delivery (IDDS) management annual CE (if implanting program), and annual opioid stewardship annual review for post-spine surgery discharge prescribing.',
  },
]

const studies = [
  {
    title: 'SPORT Trial — Lumbar Disc Herniation — NEJM 2006',
    finding: 'SPORT trial: surgical discectomy achieved superior 2-year outcomes vs. non-operative treatment for symptomatic lumbar disc herniation (SF-36 bodily pain 36.1 vs. 28.1 improvement) — but as-treated analysis showed sustained benefit while intention-to-treat was confounded by crossover.',
    implication: 'Annual NSQIP spine outcomes reporting and quarterly PROMIS patient-reported outcome measures document the evidence base that spine surgery NPs communicate to patients regarding realistic outcome expectations and shared decision-making.',
  },
  {
    title: 'SPORT Trial — Spinal Stenosis — NEJM 2008',
    finding: 'SPORT stenosis arm: surgical decompression achieved superior 4-year outcomes for lumbar spinal stenosis vs. non-operative treatment (SF-36 bodily pain 15.2 vs. 8.5 improvement) — with sustained benefit through 8 years for patients with moderate-to-severe disability.',
    implication: 'Annual spine surgical indication documentation audit — confirming appropriate patient selection per ACS/NASS evidence-based guidelines — requires NP annual CE to apply evolving evidence for surgical vs. non-operative pathway decision-making.',
  },
  {
    title: 'Cervical Disc Arthroplasty vs. ACDF — NEJM 2015',
    finding: 'Five RCTs demonstrated cervical disc replacement achieved equivalent or superior 5-year outcomes vs. ACDF for single-level cervical disc disease with lower adjacent segment disease rates (3.2% vs. 11.3%) — establishing ADR as an evidence-based alternative for appropriate candidates.',
    implication: 'Annual cervical spine implant technology CE for spine NPs — including ADR patient selection criteria, ACDF vs. ADR outcome data, and adjacent segment disease surveillance — ensures NPs providing pre-operative counseling present current evidence-based options.',
  },
  {
    title: 'Lumbar Fusion for Degenerative Disease — NEJM 2016',
    finding: 'Systematic review of 5 RCTs: lumbar fusion achieved modest superiority over non-operative care for spondylolisthesis (ODI improvement 15.6 vs. 7.7) but equivalent outcomes to intensive non-operative treatment for degenerative disc disease — driving stringent patient selection criteria.',
    implication: 'Annual spine surgical indication audit — confirming appropriate lumbar fusion candidacy per ACS/NASS shared decision-making criteria — requires NP annual update CE to apply evolving evidence for fusion vs. non-fusion vs. non-operative pathway selection.',
  },
  {
    title: 'Intraoperative Neuromonitoring — Spine J 2012',
    finding: 'Multimodal IONM (SSEP + MEP) detected neurological changes in 3.8% of spine deformity cases, allowing surgical modification that prevented permanent neurological deficit in 90% of alerted cases — establishing IONM as the standard of care for complex deformity and high-risk spine surgery.',
    implication: 'Annual IONM alert protocol competency for spine NPs — SSEP/MEP significant change criteria (≥50% amplitude decrease, ≥10% latency increase) and expected surgical response — requires annual simulation-based skills review to ensure immediate recognition and communication to the surgical team.',
  },
  {
    title: 'Enhanced Recovery After Spine Surgery — Spine J 2020',
    finding: 'ERAS protocols for lumbar fusion reduced hospital LOS by 1.4 days, opioid use at discharge by 40%, and 30-day readmission by 22% across evidence-based elements including pre-operative optimization, minimally invasive techniques, and early mobilization.',
    implication: 'Annual ERAS spine protocol adherence documentation — including pre-habilitation, multimodal analgesia compliance, and early ambulation documentation — is an emerging NSQIP quality metric that NP post-operative management drives directly.',
  },
]

const testimonial = {
  quote: 'Spine surgery NP practice requires AGACNP-BC and RNFA renewal, ATLS recertification, NASS annual CE, monthly SSI rate tracking, VTE prophylaxis compliance audits, quarterly PROMIS outcomes collection, annual NSQIP spine report, dural tear rate monitoring, IONM alert protocol documentation, and annual opioid stewardship review — all simultaneously. Momenties consolidated every deadline. Our spine program achieved the lowest SSI rate in our system and top-quartile NSQIP risk-adjusted outcomes.',
  author: 'AGACNP-BC, RNFA',
  role: 'Spine Surgery Nurse Practitioner, Academic Neurosurgery &amp; Orthopedic Spine Program',
}

export default function SpineSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Spine Surgery Nurse Practitioners"
        title="Every Spine NP Credential. Every NSQIP Deadline. One Calendar."
        subtitle="Spine surgery nurse practitioners manage one of the highest-volume and most outcome-monitored surgical advanced practice portfolios — AGACNP-BC renewal, RNFA certification, ATLS recertification, NASS annual CE, monthly SSI and VTE rate tracking, quarterly PROMIS outcomes collection, annual NSQIP spine report, dural tear monitoring, and IONM alert protocol documentation. Momenties automates every deadline so your program delivers top-quartile spine outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Spine Surgery NP Compliance Lifecycle
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
              6 Landmark Trials That Define Spine Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind NASS surgical indication criteria, NSQIP quality metrics, and spine surgery NP outcome benchmarks.
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
        headline="Ready for Top-Quartile NSQIP Spine Outcomes?"
        subtext="Join spine surgery nurse practitioners using Momenties to automate every NASS, NSQIP, and RNFA deadline. Free to start."
      />
    </main>
  )
}
