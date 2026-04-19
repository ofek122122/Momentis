import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Emergency Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate ENP-C, ACNPC-AG, ACLS, PALS, TNCC renewals and EDPMA quality metric deadlines. Built for emergency medicine nurse practitioners.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Emergency NP Board Certification',
    description: 'ENP-C (Emergency Nurse Practitioner Certificate) biennial 100 CE renewal, ACNPC-AG 5-year renewal with 500 acute care hours, AGACNP-BC 5-year renewal, FNP-BC 5-year renewal — whichever board certification pathway you hold, Momenties tracks every renewal date and CE requirement.',
  },
  {
    icon: Clock,
    title: 'Life Support & Emergency Procedure CE',
    description: 'ACLS biennial recertification, PALS biennial recertification, TNCC (Trauma Nursing Core Course) 4-year renewal, ENPC (Emergency Nursing Pediatric Course) 4-year renewal, SANE-A/SANE-P biennial 40-CE renewal, and annual airway management competency documentation — all on one timeline.',
  },
  {
    icon: BarChart3,
    title: 'EDPMA Quality Metrics & CMS Reporting',
    description: 'Monthly door-to-provider time documentation (CMS OP-18 ≤60 min), monthly left-without-being-seen rate reviews (≤2%), quarterly sepsis bundle compliance (CMS SEP-1 compliance ≥90%), annual ED throughput benchmark reporting, and quarterly ESI triage accuracy audits.',
  },
  {
    icon: Users,
    title: 'Collaborative Practice & DEA Authority',
    description: 'Annual collaborative practice agreement review, DEA 3-year Schedule II–V prescribing registration, state-specific emergency NP prescriptive authority renewal, biennial hospital credentialing for emergency procedures (intubation, chest tube, central line, LP, procedural sedation), and annual NPI taxonomy verification.',
  },
]

const studies = [
  {
    title: 'NP vs. Physician Outcomes in ED — BMJ 2000',
    finding: 'Nurse practitioners managing minor injury patients in EDs achieved equivalent clinical outcomes to junior physicians, with higher patient satisfaction scores and equivalent 2-week follow-up rates.',
    implication: 'Demonstrating equivalent quality outcomes requires documented monthly LWBS rates, 72-hour return visit rates, and patient experience scores — all tracked in Momenties.',
  },
  {
    title: 'Rivers et al. EGDT — NEJM 2001',
    finding: 'Early goal-directed therapy for severe sepsis reduced 28-day mortality from 46.5% to 30.5% — establishing the 3- and 6-hour sepsis bundles that became CMS SEP-1 measure.',
    implication: 'CMS SEP-1 compliance ≥90% is an ED quality benchmark; monthly bundle completion audits require structured scheduling and documentation review workflows.',
  },
  {
    title: 'ACEP Sepsis Quality Metrics — 2019',
    finding: 'EDs achieving ≥90% 3-hour bundle completion rates (lactate, blood cultures ×2, broad-spectrum antibiotics) had 10–15% lower sepsis mortality compared to lower-compliance sites.',
    implication: 'Quarterly sepsis bundle compliance reviews are a standard credentialing quality metric for emergency NPs with hospitalist admitting privileges.',
  },
  {
    title: 'Door-to-ECG in STEMI — JACC 2006',
    finding: 'EDs achieving ≤10-minute door-to-ECG time for STEMI patients had significantly higher rates of timely reperfusion and lower in-hospital mortality vs. EDs with longer delays.',
    implication: 'Monthly door-to-ECG time audits (CMS OP-4 ≤10 min) are required for STEMI receiving center certification — NP documentation drives this metric.',
  },
  {
    title: 'ACEP Advanced Practice Providers in EM — 2021',
    finding: 'EDs with structured NP orientation programs using simulation and supervised procedural volume requirements had 40% lower first-year adverse event rates than unstructured programs.',
    implication: 'Annual procedural competency documentation (intubation, central line, LP) is a hospital privileging requirement — Momenties tracks minimum case volume milestones.',
  },
  {
    title: 'LWBS Rates and ED Crowding — Ann Emerg Med 2007',
    finding: 'Left-without-being-seen rates >2% are associated with measurable patient harm events and are a leading indicator of ED crowding and throughput dysfunction.',
    implication: 'Monthly LWBS rate reviews are standard ED quality dashboards; ENPs managing fast-track or provider-in-triage models are responsible for documenting this metric.',
  },
]

const testimonial = {
  quote: 'Emergency NP practice has more credential layers than any other advanced practice role I know — ENP-C, ACLS, PALS, TNCC, ENPC, SANE certification, DEA, hospital privileges, and CMS quality metrics. Momenties is the only system that tracks all of it in one place. My chief was shocked I had every renewal current at my last credentialing review.',
  author: 'ENP-C, AGACNP-BC, SANE-A',
  role: 'Emergency Nurse Practitioner, Level I Trauma Center',
}

export default function EmergencyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Emergency Nurse Practitioners"
        title="Every ENP Credential. Every Quality Metric. One Calendar."
        subtitle="Emergency nurse practitioners carry one of the most credential-dense portfolios in advanced practice — ENP-C or ACNPC-AG certification, ACLS, PALS, TNCC, ENPC, SANE certification, DEA registration, procedural competency documentation, and monthly CMS quality metrics. Momenties automates every deadline so you focus on the patients who need you."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Emergency NP Compliance Lifecycle
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
              6 Studies That Define Emergency NP Quality Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind CMS ED quality metrics, privileging requirements, and ENP outcome benchmarks.
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
        headline="Ready to Master Every Emergency NP Deadline?"
        subtext="Join emergency nurse practitioners using Momenties to automate every ENP-C, ACLS, TNCC, and CMS quality metric deadline. Free to start."
      />
    </main>
  )
}
