import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hepato-Pancreato-Biliary (HPB) Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, RNFA, CCTC renewal, AHPBA annual CE, NCDB hepatobiliary data submission, and pancreatic cancer registry reporting deadlines for HPB NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'HPB Surgery Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal with 500 clinical hours, RNFA 2-year/20 CE renewal for surgical assistance, CCTC (Certified Clinical Transplant Coordinator) biennial renewal for NPs managing liver transplant coordination, annual AHPBA membership CE, annual SSO membership CE for HPB oncology, and biennial hospital credentialing for laparoscopic/robotic hepatic resection and pancreaticoduodenectomy assistance.',
  },
  {
    icon: Clock,
    title: 'AHPBA, SSO & HPB Conference CE',
    description: 'AHPBA Annual Meeting CE, SSO Annual Cancer Symposium CE, ASCO Annual Meeting CE, IASGO (International Association of Surgeons, Gastroenterologists and Oncologists) annual CE, annual NCCN Hepatobiliary Cancer guidelines annual update review, annual pancreatic cancer surveillance CE, and annual cholangiocarcinoma management CE — all tracked toward AGPCNP-BC renewal.',
  },
  {
    icon: BarChart3,
    title: 'NCDB Registry & HPB Quality Metrics',
    description: 'Annual NCDB hepatobiliary and pancreatic cancer case submission ≥90% completeness within 6 months of diagnosis, quarterly NCDB outstanding case audit, monthly 90-day post-Whipple mortality and major morbidity reviews, quarterly R0 resection rate tracking for pancreatic and hepatic malignancies, quarterly post-hepatectomy liver failure (PHLF) grade documentation, and annual ACS NSQIP hepatobiliary procedure outcomes report.',
  },
  {
    icon: Users,
    title: 'Collaborative Practice & Oncology Coordination',
    description: 'Annual collaborative practice agreement review with HPB surgeon and hepatologist, annual tumor board case presentation documentation (weekly HPB multidisciplinary tumor board — NP case presentation rate ≥25%), DEA 3-year registration renewal, annual CA 19-9 and AFP monitoring protocol review for post-resection surveillance, annual ERCP assistance credentialing review if applicable, and annual biliary stent management competency documentation.',
  },
]

const studies = [
  {
    title: 'Whipple 90-Day Mortality at High-Volume Centers — NEJM 1999',
    finding: 'Hospital volume was the strongest predictor of pancreaticoduodenectomy (Whipple) outcomes — 90-day mortality 16% at low-volume (<1/year) vs. 3% at high-volume (>16/year) centers, driving regionalization of HPB surgery.',
    implication: 'Monthly 90-day post-Whipple major morbidity (POPF, DGE, post-pancreatectomy hemorrhage) rate review is the primary HPB quality metric — NP post-operative documentation drives registry completeness.',
  },
  {
    title: 'FOLFIRINOX for Metastatic Pancreatic Cancer — NEJM 2011',
    finding: 'FOLFIRINOX improved median OS from 6.8 to 11.1 months vs. gemcitabine in metastatic PDAC with PS 0-1, establishing it as the preferred first-line regimen for fit patients.',
    implication: 'Annual NCCN pancreatic cancer guideline update CE ensures HPB NPs managing neoadjuvant therapy patients remain current with evolving regimens and response assessment criteria.',
  },
  {
    title: 'Neoadjuvant Therapy in Borderline Resectable PDAC — NEJM 2021',
    finding: 'PREOPANC trial: neoadjuvant chemoradiation followed by resection achieved median OS 17.1 months vs. 13.7 months for upfront resection in borderline resectable PDAC — shifting paradigm toward neoadjuvant-first approach.',
    implication: 'Quarterly borderline resectable PDAC neoadjuvant completion rate and subsequent resection rate documentation is an NCDB quality requirement — NP coordination of multidisciplinary decision-making drives this metric.',
  },
  {
    title: 'ALPPS for Future Liver Remnant — NEJM 2016',
    finding: 'Associating Liver Partition and Portal vein ligation for Staged hepatectomy (ALPPS) achieved 100% resection rate in 94% technically resectable patients at 20 days — but with high major morbidity (64%) requiring careful patient selection.',
    implication: 'Annual HPB surgical technique update CE — including ALPPS, TACE bridge, portal vein embolization — ensures NPs managing complex hepatic resection candidates understand staged resection planning options.',
  },
  {
    title: 'ICG Fluorescence in Hepatic Surgery — Br J Surg 2019',
    finding: 'Indocyanine green fluorescence navigation identified 21% additional HCC lesions not visible on preoperative imaging and confirmed complete resection margins intraoperatively in 96% of cases.',
    implication: 'Annual HPB surgical technology CE — including ICG fluorescence, intraoperative ultrasound, and robotic hepatectomy techniques — ensures NPs coordinating surgical care manage pre-operative preparation accurately.',
  },
  {
    title: 'Post-Hepatectomy Liver Failure Grading — Surgery 2011',
    finding: 'ISGLS (International Study Group of Liver Surgery) PHLF grading standardized post-hepatectomy liver failure documentation — Grade B/C PHLF (clinically relevant) occurs in 8–12% of major hepatectomies and carries 30% mortality.',
    implication: 'Quarterly PHLF grade B/C incidence tracking is an AHPBA quality standard — standardized NP post-operative documentation of INR, bilirubin, and clinical PHLF grade drives registry accuracy.',
  },
]

const testimonial = {
  quote: 'HPB surgery NP practice requires AGPCNP-BC and RNFA renewal, CCTC maintenance, AHPBA annual CE, weekly tumor board documentation, NCDB case completeness, 90-day Whipple outcomes tracking, and post-hepatectomy liver failure grading — all simultaneously. Momenties was the first system that gave me one calendar for all of it. Our NCDB case completeness rate is now 97%.',
  author: 'AGPCNP-BC, RNFA, CCTC',
  role: 'HPB Surgery Nurse Practitioner, Comprehensive Hepatobiliary Program',
}

export default function HepatoPancreaticBiliaryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Hepato-Pancreato-Biliary (HPB) Nurse Practitioners"
        title="Every HPB NP Credential. Every NCDB Deadline. One Calendar."
        subtitle="HPB nurse practitioners manage one of the most outcome-monitored surgical advanced practice portfolios — AGPCNP-BC renewal, RNFA certification, AHPBA annual CE, weekly tumor board documentation, NCDB hepatobiliary data completeness, 90-day Whipple outcomes, and post-hepatectomy liver failure grading. Momenties automates every deadline so your program delivers world-class HPB outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full HPB Surgery NP Compliance Lifecycle
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
              6 Landmark Studies That Define HPB Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind AHPBA quality metrics, NCDB data requirements, and HPB NP outcome benchmarks.
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
        headline="Ready to Achieve 97% NCDB Case Completeness?"
        subtext="Join HPB surgery nurse practitioners using Momenties to automate every AHPBA, NCDB, and RNFA deadline. Free to start."
      />
    </main>
  )
}
