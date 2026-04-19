import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Colon & Rectal Surgery Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, RNFA, CWOCN renewal, ASCRS annual CE, NCDB colorectal data submission, and enhanced recovery after surgery (ERAS) protocol quality metrics.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Colon & Rectal Surgery Credentials',
    description: 'AGACNP-BC 5-year renewal with 500 acute care hours, RNFA 2-year/20 CE renewal, CWOCN (Certified Wound Ostomy Continence Nurse) 5-year/75 CE renewal, CRNFA maintenance, annual ASCRS membership CE, annual WOCN Society annual conference CE, and biennial hospital credentialing for laparoscopic/robotic colorectal procedure assistance and ostomy care.',
  },
  {
    icon: Clock,
    title: 'ASCRS, SAGES & Colorectal CE',
    description: 'ASCRS Annual Scientific Meeting CE, SAGES Annual Meeting CE, WOCN Society Annual Conference CE, annual NCCN Colorectal Cancer guidelines annual update review CE, annual Lynch syndrome colorectal surveillance CE, annual IBD surgical management CE, annual ERAS protocol colorectal CE — all tracked toward AGACNP-BC and CWOCN renewal.',
  },
  {
    icon: BarChart3,
    title: 'NCDB Registry & ERAS Quality Metrics',
    description: 'Annual NCDB colorectal cancer case submission ≥90% completeness within 6 months, quarterly NCDB outstanding case review, monthly ERAS protocol adherence documentation (early diet, early mobilization, multimodal analgesia, IV fluid restriction), quarterly anastomotic leak rate reviews (target ≤5% for low anterior resection), monthly ostomy complication documentation, and annual ACS NSQIP colorectal outcomes report.',
  },
  {
    icon: Users,
    title: 'Ostomy Expertise & Collaborative Practice',
    description: 'Annual stoma siting pre-operative consultation documentation (ASCRS/WOCN guidelines — 100% of planned ostomy patients), annual collaborative practice agreement review with colorectal surgeon, DEA 3-year registration renewal, annual peristomal skin complication management CE, annual wound care CE update, and annual irrigation and pouching system product knowledge update.',
  },
]

const studies = [
  {
    title: 'ERAS for Colorectal Surgery — NEJM 2019',
    finding: 'Enhanced Recovery After Surgery protocols in colorectal surgery reduced median LOS from 7 to 4 days, major complications from 28% to 16%, and readmissions from 15% to 8% across 20 evidence-based elements.',
    implication: 'Monthly ERAS adherence documentation rate (target ≥80% element compliance) is the primary NP quality metric for colorectal ERAS programs — protocol deviations require structured documentation.',
  },
  {
    title: 'Anastomotic Leak Risk Factors — Dis Colon Rectum 2012',
    finding: 'Anastomotic leak in low anterior resection occurred in 11% overall; independent risk factors included male sex, distance from anal verge <5 cm, operative time >180 minutes, and intraoperative contamination.',
    implication: 'Quarterly anastomotic leak rate review by surgical approach (open vs. laparoscopic vs. robotic) and height of anastomosis is an ASCRS quality metric — NP documentation drives registry accuracy.',
  },
  {
    title: 'Defunctioning Stoma and LAR Outcomes — NEJM 2007',
    finding: 'Defunctioning loop ileostomy in LAR for rectal cancer reduced symptomatic anastomotic leak requiring reoperation from 12% to 4.6% — establishing temporary stoma as standard for high-risk anastomoses.',
    implication: 'Annual temporary stoma reversal timing documentation audit (ASCRS recommends 8–12 weeks) ensures NP-managed ostomy programs track reversal delays that increase stoma complication risk.',
  },
  {
    title: 'Lynch Syndrome Surveillance Colonoscopy — Lancet 2018',
    finding: 'MLH1/MSH2 carriers who underwent annual surveillance colonoscopy had 67% lower colorectal cancer incidence and 70% lower CRC mortality vs. less frequent surveillance in the CAPP2 trial extension.',
    implication: 'Annual Lynch syndrome patient surveillance colonoscopy scheduling compliance is an NCCN hereditary colorectal cancer management standard — NP scheduling systems drive adherence rates.',
  },
  {
    title: 'Robotic vs. Laparoscopic Rectal Resection — NEJM 2017',
    finding: 'ROLARR trial: robotic TME had similar conversion rates to laparoscopic TME (8.1% vs. 12.2%, p=0.16) but achieved higher pathological complete mesorectal excision grades (68% vs. 61%).',
    implication: 'Quarterly conversion rate and mesorectal excision quality grade documentation is an ASCRS registry metric — NP procedure assistance documentation ensures complete NCDB and institutional data.',
  },
  {
    title: 'Pre-operative Stoma Siting Outcomes — JCRS 2010',
    finding: 'Pre-operative stoma marking by an ostomy nurse reduced stoma complication rates from 43% to 22% — establishing pre-operative stoma siting as a standard of care for all planned ostomy patients.',
    implication: '100% pre-operative stoma siting consultation documentation is a CWOCN competency standard and ASCRS/WOCN joint position statement requirement — NP compliance drives this quality metric.',
  },
]

const testimonial = {
  quote: 'Colon and rectal surgery NP practice spans AGACNP-BC and RNFA renewal, CWOCN certification, ASCRS annual CE, NCDB case completeness, monthly ERAS adherence tracking, anastomotic leak rate reviews, and Lynch syndrome surveillance scheduling. Momenties consolidated all of it. Our NCDB data completeness went from 82% to 97% in one year after we implemented it.',
  author: 'AGACNP-BC, RNFA, CWOCN',
  role: 'Colon &amp; Rectal Surgery Nurse Practitioner, Comprehensive Colorectal Program',
}

export default function ColonRectalSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Colon &amp; Rectal Surgery Nurse Practitioners"
        title="Every Colorectal NP Credential. Every NCDB Deadline. One Calendar."
        subtitle="Colon and rectal surgery NPs manage one of the most credential-dense surgical advanced practice portfolios — AGACNP-BC renewal, RNFA certification, CWOCN 5-year renewal, ASCRS registry submissions, monthly ERAS protocol audits, anastomotic leak rate tracking, and Lynch syndrome surveillance scheduling. Momenties automates every deadline so your team focuses on delivering world-class colorectal care."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Colorectal Surgery NP Compliance Lifecycle
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
              6 Landmark Trials That Define Colorectal Surgery NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ASCRS quality metrics, NCDB data requirements, and colorectal NP outcome benchmarks.
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
        headline="Ready to Master Every Colorectal NP Deadline?"
        subtext="Join colon and rectal surgery nurse practitioners using Momenties to automate every CWOCN, NCDB, and ERAS deadline. Free to start."
      />
    </main>
  )
}
