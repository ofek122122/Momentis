import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Adult Congenital Heart Disease Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGACNP-BC, ACHD cardiology board certification, ACHA annual CE, ACC Adult Congenital and Pediatric Cardiology section CE, ACHD program accreditation, and IMPACT registry data submission deadlines for ACHD NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'ACHD Credentials & Certification',
    description: 'AGACNP-BC 5-year renewal with 500 acute care clinical hours, Adult Congenital Heart Disease (ACHD) subspecialty-trained NP annual CE documentation (ABP/ABIM ACHD certification pathway for physicians — NP equivalent: annual ACHA and ACC/PCNA ACHD CE), annual ACHA (Adult Congenital Heart Association) annual meeting CE, annual ACC Adult Congenital and Pediatric Cardiology (ACPC) section annual meeting CE, annual ISHLT Adult Congenital Heart Disease CE, and biennial hospital credentialing renewal for ACHD catheterization assistance and complex ACHD post-operative management.',
  },
  {
    icon: Clock,
    title: 'ACHD Program Accreditation & Registry',
    description: 'Annual ACC/ACHA Adult Congenital Heart Disease program accreditation annual conformance — ACHD programs require ≥50 adult CHD patients per year and ≥1 ACHD cardiologist for Level I or II accreditation, annual ACC IMPACT registry data submission for all catheterization-based ACHD interventions, quarterly ACC IMPACT catheterization laboratory quality report review, annual ACC GWTG Congenital Heart Disease registry data submission for surgical cases (if surgical program), annual UNOS waitlist documentation for ACHD patients listed for heart transplantation, and annual state ACHD program designation compliance (select states require annual reporting).',
  },
  {
    icon: BarChart3,
    title: 'Outcomes Monitoring & Complication Tracking',
    description: 'Monthly catheterization complication rate documentation for ACHD interventional cases (ASD/PFO closure, pulmonary valve replacement, coarctation stenting) — major complication target ≤2%, quarterly 30-day mortality and morbidity for ACHD surgical repairs, quarterly pregnancy and contraception counseling documentation rate for all female ACHD patients of reproductive age (ISACHD guideline — 100% target), annual endocarditis prophylaxis prescription appropriateness audit per current AHA 2023 endocarditis guidelines, monthly atrial arrhythmia surveillance rate documentation (AF/atrial flutter in ACHD ≤15% annual incidence), and annual sudden cardiac death (SCD) risk stratification documentation for high-risk ACHD lesions.',
  },
  {
    icon: Users,
    title: 'Transition Program & Collaborative Practice',
    description: 'Annual pediatric-to-adult ACHD transition program outcomes audit — transition completion rate ≥90% for pediatric CHD patients reaching age 18 (ACHA quality standard), annual collaborative practice agreement review with ACHD cardiologist and congenital cardiac surgeon, DEA 3-year registration renewal, annual arrhythmia monitoring protocol review for ACHD-specific atrial arrhythmia management (TOF, TGA, Fontan — each with unique arrhythmia risk profiles), annual contraception and pregnancy counseling documentation for WHO class III/IV ACHD patients (highest maternal mortality risk), and annual Fontan-associated liver disease (FALD) surveillance protocol annual review.',
  },
]

const studies = [
  {
    title: 'ACHD Survival to Adulthood — Circulation 2010',
    finding: 'Population-based study (Quebec): adults with CHD outnumbered children with CHD for the first time in 2000, with the ACHD population growing at 5% annually — driven by surgical advances that allowed >90% survival to adulthood for most CHD lesions.',
    implication: 'Annual ACHD program accreditation conformance — demonstrating ≥50 adult CHD patients per year — reflects the growing ACHD population requiring specialized NP expertise distinct from both pediatric cardiology and adult general cardiology.',
  },
  {
    title: 'PERCLOSURE in Fontan Catheterization — JACC 2019',
    finding: 'Fontan-associated complications (protein-losing enteropathy, plastic bronchitis, liver fibrosis) developed in 40–50% of Fontan patients by age 40 — and hepatocellular carcinoma occurred in 2% of adult Fontan patients ≥30 years despite absence of cirrhosis.',
    implication: 'Annual Fontan-associated liver disease (FALD) surveillance protocol review — liver ultrasound and AFP frequency, biopsy criteria, and HCC surveillance thresholds — requires NP annual CE update as FALD management guidelines continue to evolve.',
  },
  {
    title: 'Pulmonary Valve Replacement in TOF — NEJM 2018',
    finding: 'Pulmonary valve replacement (PVR) in repaired tetralogy of Fallot with severe PR reduced RVESVI and preserved RV function at 2 years, with transcatheter PPVI (SAPIEN 3) achieving equivalent outcomes to surgical PVR — expanding minimally invasive options for ACHD pulmonary valve disease.',
    implication: 'Annual ACC IMPACT registry data submission for all ACHD catheterization interventions — including PPVI, ASD/PFO closure, and coarctation stenting — requires NP procedure documentation to drive registry completeness and program quality metrics.',
  },
  {
    title: 'Pregnancy in ACHD — NEJM 2021',
    finding: 'CARPREG II study: maternal cardiac event rate was 16% across all ACHD pregnancies, with WHO class III/IV lesions (Eisenmenger, Fontan, severe systemic ventricular dysfunction) carrying 20–50% maternal mortality risk — establishing mandatory pre-conception ACHD counseling as standard of care.',
    implication: 'Quarterly pregnancy and contraception counseling documentation rate audit (100% target for all female ACHD patients of reproductive age) is an ISACHD quality standard — NP-delivered counseling per WHO cardiac risk classification drives patient safety and documentation compliance.',
  },
  {
    title: 'Transcatheter ASD Closure — NEJM 2001',
    finding: 'Transcatheter Amplatzer ASD closure achieved equivalent 12-month success to surgical repair (86.9% vs. 99.6% complete closure) with significantly shorter hospitalization (1.6 vs. 3.2 days) — establishing transcatheter closure as preferred approach for most secundum ASD anatomy.',
    implication: 'Monthly catheterization complication rate documentation for ACHD ASD and PFO closures — cardiac perforation, device embolization, and residual shunt — is an ACC IMPACT quality metric. NP peri-procedural care documentation drives registry data completeness.',
  },
  {
    title: 'ACHD Sudden Cardiac Death Risk — Circulation 2014',
    finding: 'SCD occurred in 6% of ACHD patients over 10 years follow-up — with repaired TOF, TGA-Mustard/Senning, and Fontan patients carrying highest risk (annual SCD rate 0.5–1.2%) — establishing systematic SCD risk stratification protocols as ACHD standard of care.',
    implication: 'Annual SCD risk stratification documentation for high-risk ACHD lesions — ambulatory Holter monitoring, EP study criteria, ICD implantation thresholds — requires NP annual ACHD CE update to apply current ISACHD and ACC/AHA SCD prevention guidelines.',
  },
]

const testimonial = {
  quote: 'ACHD NP practice requires AGACNP-BC renewal, ACHA and ACC ACPC annual CE, ACC IMPACT registry quarterly data, annual ACHD program accreditation conformance, monthly catheterization complication tracking, 100% pregnancy counseling documentation for reproductive-age patients, Fontan liver disease surveillance protocol updates, and SCD risk stratification documentation — all simultaneously. Momenties consolidated every deadline. Our ACHD program achieved ACC Level II accreditation and 100% IMPACT registry case capture.',
  author: 'AGACNP-BC',
  role: 'Adult Congenital Heart Disease Nurse Practitioner, ACC Accredited ACHD Program',
}

export default function AdultCongenitalHeartDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Adult Congenital Heart Disease Nurse Practitioners"
        title="Every ACHD NP Credential. Every IMPACT Registry Deadline. One Calendar."
        subtitle="Adult congenital heart disease nurse practitioners manage one of the most complex and rapidly growing advanced practice portfolios in cardiology — AGACNP-BC renewal, ACHA annual CE, ACC IMPACT registry quarterly submissions, ACHD program accreditation conformance, monthly catheterization complication tracking, mandatory pregnancy counseling documentation, Fontan liver surveillance, and SCD risk stratification. Momenties automates every deadline so your ACHD program achieves world-class outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full ACHD NP Compliance Lifecycle
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
              6 Landmark Studies That Define ACHD NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind ACC IMPACT quality metrics, ACHA program accreditation standards, and ACHD NP outcome benchmarks.
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
        headline="Ready to Achieve ACC Level II ACHD Accreditation?"
        subtext="Join adult congenital heart disease nurse practitioners using Momenties to automate every ACHA, IMPACT, and AGACNP-BC deadline. Free to start."
      />
    </main>
  )
}
