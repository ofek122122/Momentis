import { Activity, FlaskConical, ShieldCheck, ClipboardList } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hereditary Angioedema Center Compliance Calendar | Momenties',
  description:
    'C4/C1-INH quarterly monitoring, lanadelumab prophylaxis q2wk/q4wk cycle management, HAE attack rate monthly tracking, icatibant/berotralstat on-demand protocol compliance, HAE World Database registry submission, WAAE/US HAEA guideline annual review.',
}

const pillars = [
  {
    icon: FlaskConical,
    title: 'C4/C1-INH Quarterly Monitoring & HAE Type Confirmation',
    description:
      'Run C4 complement and C1-INH antigenic plus functional assays every quarter for all HAE Type I and Type II patients. Annually reaffirm HAE-FXII, HAE-PLG, HAE-KNG1, HAE-ANGPT1, and HAE-MYOF mutation status for HAE Type III (HAE-nC1-INH), with documented family history mapping and SERPING1 sequencing where indicated.',
  },
  {
    icon: Activity,
    title: 'Lanadelumab Prophylaxis Cycle Management',
    description:
      'Coordinate lanadelumab 300 mg subcutaneous every 2 weeks for steady-state prophylaxis, with stepdown to every 4 weeks after six months of attack-free control. Each cycle is logged with pre-dose attack rate trending, injection site reaction surveillance, and aPTT prolongation monitoring for assay interference awareness.',
  },
  {
    icon: ShieldCheck,
    title: 'On-Demand Treatment Protocol & Emergency Kit Compliance',
    description:
      'Verify icatibant 30 mg subcutaneous, plasma-derived C1-INH (Berinert/Cinryze), and recombinant C1-INH (Ruconest) emergency kits every six months for expiry, dose count, and patient self-administration competence. Track berotralstat 150 mg daily oral prophylaxis with monthly LFTs and CYP interaction reviews.',
  },
  {
    icon: ClipboardList,
    title: 'HAE Attack Rate Monitoring & WAAE Registry',
    description:
      'Document monthly attack logs across laryngeal, abdominal, peripheral, and facial sites with severity scoring. Submit HAE World Database registry entries quarterly. Annually reaffirm WAAE/US HAEA international consensus guidelines, AE-QoL score trending, and angioedema activity score (AAS-28) compliance.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual HAE Type Confirmation & Baseline Reset',
    tasks:
      'Reaffirm HAE Type I, Type II, or Type III classification with C4, C1-INH antigenic, C1-INH functional, and SERPING1 mutation results. Capture baseline attack rate, AE-QoL, and AAS-28. Refresh emergency action plans for laryngeal attacks, school/work letters, and patient self-administration competence.',
  },
  {
    phase: 'February',
    title: 'Lanadelumab Q2-Week Cycle Audit',
    tasks:
      'Validate lanadelumab 300 mg q2wk dosing across all prophylaxis-eligible patients. Reconcile injection site reaction logs, aPTT interference notes, and attack-free interval trending. Confirm pharmacy refill cadence and missed-dose recapture protocols.',
  },
  {
    phase: 'March',
    title: 'Q1 C4/C1-INH Labs & Berotralstat LFT Review',
    tasks:
      'Run first-quarter C4 and C1-INH antigenic plus functional assays for every HAE Type I/II patient. Pull berotralstat-treated cohort LFTs and CYP3A4/P-gp interaction reviews. Update HAE World Database registry submissions with Q1 attack data.',
  },
  {
    phase: 'April',
    title: 'Emergency Kit Expiry & On-Demand Drill',
    tasks:
      'Run six-monthly emergency kit verification: icatibant 30 mg, plasma-derived C1-INH 20 IU/kg, recombinant C1-INH 50 IU/kg dose counts and expiry. Confirm patient self-administration competence with observed return demonstrations. Update laryngeal attack escalation pathways.',
  },
  {
    phase: 'May',
    title: 'Lanadelumab Q4-Week Stepdown Eligibility Review',
    tasks:
      'Identify lanadelumab patients with six months of sustained attack-free control eligible for q4wk stepdown. Document shared decision-making, attack rate baselines, and rebound surveillance plans. Run AE-QoL and AAS-28 mid-year scoring.',
  },
  {
    phase: 'June',
    title: 'Q2 C4/C1-INH Labs & Mid-Year Outcomes',
    tasks:
      'Complete second-quarter C4 and C1-INH labs. Pull mid-year cohort attack rate, ≥87% attack-free benchmark adherence on lanadelumab, and prophylaxis adherence ≥90%. Submit Q2 HAE World Database entries.',
  },
  {
    phase: 'July',
    title: 'WAAE/US HAEA Guideline Annual Review',
    tasks:
      'Reaffirm WAAE and US HAEA international consensus guideline versions in active use. Update protocol library for first-line on-demand, long-term prophylaxis, short-term prophylaxis (procedural), and pediatric considerations. Refresh staff training records.',
  },
  {
    phase: 'August',
    title: 'Pediatric HAE & Pregnancy Cohort Surveillance',
    tasks:
      'Run dedicated review of pediatric HAE patients including pdC1-INH dosing, lanadelumab pediatric label adherence, and growth monitoring. Reconcile pregnancy and lactation cohort with pdC1-INH first-line, attack rate adjustments, and obstetric coordination.',
  },
  {
    phase: 'September',
    title: 'Q3 C4/C1-INH Labs & Berotralstat Adherence',
    tasks:
      'Complete third-quarter C4 and C1-INH labs. Pull berotralstat 150 mg daily adherence reports, monthly LFTs, and CYP interaction surveillance. Submit Q3 HAE World Database entries with attack severity, location, and treatment-to-resolution times.',
  },
  {
    phase: 'October',
    title: 'Short-Term Prophylaxis & Procedural Planning',
    tasks:
      'Reconcile procedural and dental short-term prophylaxis protocols including pdC1-INH 20 IU/kg pre-procedure dosing. Update patient pre-procedure checklists, anesthesia coordination notes, and attack-rescue access for elective interventions.',
  },
  {
    phase: 'November',
    title: 'AE-QoL, AAS-28 & QoL Outcomes Audit',
    tasks:
      'Run cohort-wide AE-QoL score improvement audit and AAS-28 trending. Document ≥87% attack-free rate on lanadelumab, prophylaxis adherence ≥90%, and emergency kit compliance 100%. Pull C4 normalization percentages.',
  },
  {
    phase: 'December',
    title: 'Q4 Labs, Annual Outcomes Report & Year-End Reaffirmation',
    tasks:
      'Run final C4 and C1-INH quarter, year-end attack rate ≤1/month benchmark, and registry reconciliation. Compile annual outcomes report for the HAE Center of Excellence. Stage next-year lanadelumab cycles, berotralstat reviews, and emergency kit refresh calendars.',
  },
]

const kpis = [
  { metric: '≥87%', label: 'Attack-free rate on lanadelumab' },
  { metric: 'C4 norm', label: 'C4 normalization percentage' },
  { metric: '≤1/mo', label: 'Monthly HAE attack rate' },
  { metric: '100%', label: 'Emergency kit compliance' },
  { metric: '≥90%', label: 'Prophylaxis adherence' },
  { metric: 'AE-QoL', label: 'Quality-of-life score improvement' },
]

const testimonial = {
  quote:
    'Momenties brought every C4 lab, every lanadelumab dose, and every emergency kit expiry into one calendar. Our attack-free rate on lanadelumab cleared 87% across the program, registry submissions to the HAE World Database run on time, and our emergency kit compliance is locked at 100%. The team finally has confidence in the cadence.',
  author: 'Dr. Naomi Beresford-Hale',
  role: 'HAE Center of Excellence Program Director',
}

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Hereditary Angioedema Center Calendar"
        title="Every C4 Level. Every Lanadelumab Dose. Every Attack Log."
        subtitle="Managing HAE Type I/II/III compliance including lanadelumab prophylaxis cycles, C4/C1-INH quarterly monitoring, attack rate monthly documentation, berotralstat dosing, emergency kit verification, and WAAE registry submissions."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.6rem,3vw,2.2rem)',
              fontFamily: 'Playfair Display,serif',
              marginBottom: 48,
              color: '#f0ece3',
            }}
          >
            Built for the Full Hereditary Angioedema Compliance Lifecycle
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 28,
            }}
          >
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: '#131318',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                fontFamily: 'Playfair Display,serif',
                marginBottom: 12,
                color: '#f0ece3',
              }}
            >
              The Hereditary Angioedema Compliance Calendar — Month by Month
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#a0998e',
                marginBottom: 56,
                fontSize: '0.97rem',
              }}
            >
              Every deadline sequenced across 12 months.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.phase}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: 24,
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '24px 28px',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: '#c5a35c',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: 4,
                      }}
                    >
                      {item.phase}
                    </div>
                    <div
                      style={{
                        color: '#f0ece3',
                        fontWeight: 600,
                        fontSize: '0.97rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {item.tasks}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                fontFamily: 'Playfair Display,serif',
                marginBottom: 48,
                color: '#f0ece3',
              }}
            >
              The 6 KPIs That Define Hereditary Angioedema Excellence
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  style={{
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '28px 20px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.4rem,2.5vw,1.9rem)',
                      fontWeight: 700,
                      color: '#c5a35c',
                      fontFamily: 'Playfair Display,serif',
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16 }}>&ldquo;</div>
            <p
              style={{
                fontSize: 'clamp(1rem,2vw,1.2rem)',
                color: '#f0ece3',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: 28,
              }}
            >
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>
              {testimonial.author}
            </div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>
              {testimonial.role}
            </div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥87% Attack-Free Rate in Your Lanadelumab HAE Program?"
        subtext="Sequence C4/C1-INH labs, lanadelumab cycles, berotralstat reviews, emergency kit verification, and WAAE registry submissions into one compliance calendar."
      />
    </main>
  )
}
