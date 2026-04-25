import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hereditary Angioedema Nurse Practitioners — Compliance Calendar | Momenties',
  description:
    'AGACNP-BC renewal, lanadelumab prophylaxis q2wk cycle management CE, C4/C1-INH quarterly monitoring, HAE attack rate documentation, berotralstat monthly LFT monitoring, icatibant self-administration training, WAAE/US HAEA guideline annual review.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Allergy/Immunology NP Credentials & HAE CE',
    description:
      'Hereditary angioedema is one of the rarest conditions an APRN will manage, and the credentialing pathway has to reflect that. AGACNP-BC renewal every five years requires 75 contact hours including pharmacology, with HAE-specific CE increasingly expected from US HAEA, WAO/WAAE, and AAAAI annual meetings. State APRN renewal, DEA, and prescriptive authority for icatibant, berotralstat, and the kallikrein inhibitor class all run on different cycles. Momenties consolidates every credential, CE module, and HAE-specific competency into a single calendar so a missed renewal never pulls you off a prophylaxis panel.',
  },
  {
    icon: Clock,
    title: 'Lanadelumab/Garadacumab Prophylaxis Management',
    description:
      'Long-term prophylaxis is the modern standard for moderate-to-severe HAE, and each agent has its own dosing rhythm: lanadelumab 300 mg SC every 2 weeks (or every 4 weeks after 6 months attack-free), garadacumab 120 mg SC every 4 weeks, and SC C1-INH (Haegarda) 60 IU/kg twice weekly. Each cycle requires attack-rate reconciliation, HAE-AS/HAE-QoL scoring, and prior-authorization renewal at fixed intervals. Missing a lanadelumab dose can restart the attack-frequency clock and trigger a payor re-review. Momenties templates each prophylaxis cycle with its required PRO instrument, attack log review, and PA milestone so the panel runs on rails.',
  },
  {
    icon: BarChart3,
    title: 'On-Demand Therapy & Emergency Kit Training',
    description:
      'Every HAE patient — prophylaxis or not — needs at least two on-demand doses on hand at all times. That means icatibant 30 mg SC self-injection competency annually, IV C1-INH (Berinert/Cinryze) administration training for caregivers, and ecallantide in-clinic protocols for the rare anaphylactoid responder. Emergency kits expire at 18–24 months and must be checked twice a year against the manufacturer lot recall feed. Momenties pairs every patient encounter with a kit-expiry check, a self-administration competency attestation, and a written action plan refresh so no patient ever reaches an ED without a working dose.',
  },
  {
    icon: Users,
    title: 'C4/C1-INH Monitoring & HAE Attack Documentation',
    description:
      'HAE diagnosis and ongoing management depend on quantitative C4, C1-INH antigenic level, and C1-INH functional assay — a triad that needs quarterly review on prophylaxis and at least annually off-therapy. Attack documentation is the lifeblood of payor continuation reviews: location, severity (HAE-AS), duration, on-demand use, and ED utilization all feed the WAAE registry and the ≥87% attack-free rate threshold lanadelumab payors now expect. Annual WAO/WAAE 2021 guideline review and US HAEA attestation keep the practice current with Type I, II, and HAE-nC1-INH (Type III) classification updates. Momenties formats every attack log to drop directly into a registry submission.',
  },
]

const studies = [
  {
    title: 'HELP Lanadelumab — NEJM 2018',
    finding:
      'Phase III RCT (n=125) of lanadelumab vs placebo in Type I/II HAE showed 87% mean reduction in monthly attack rate at 300 mg q2wk (0.26 vs 1.97 attacks/month, p<0.001) and 44% of patients on q2wk were completely attack-free over 26 weeks vs 2% placebo.',
    implication:
      'NPs should target the ≥87% attack reduction threshold as the documented continuation criterion at month 6 PA renewal and pair every q2wk lanadelumab cycle with attack-log reconciliation per the HELP endpoint methodology.',
  },
  {
    title: 'ZENITH-1 Garadacimab — Lancet 2023 / NEJM 2023',
    finding:
      'Phase III RCT (n=64) of garadacimab 200 mg SC q4wk (after 400 mg load) vs placebo showed 87% reduction in monthly HAE attack rate (median 0 vs 1.35 attacks/month, p<0.0001) over 6 months with 62% of patients attack-free vs 0% placebo.',
    implication:
      'NPs adopting garadacimab should calendar the loading dose plus q4wk maintenance with attack-rate reconciliation at month 3 and month 6 — Momenties enforces the loading-to-maintenance transition so the first PA renewal lands on validated efficacy data.',
  },
  {
    title: 'COMPACT C1-INH SC (Haegarda) — NEJM 2017',
    finding:
      'Phase III crossover RCT (n=90) of SC C1-INH 60 IU/kg twice weekly vs placebo showed 95% reduction in time-normalized HAE attack rate (0.52 vs 4.03 attacks/month, p<0.001) and 100% reduction in median use of on-demand therapy.',
    implication:
      'NPs running twice-weekly SC C1-INH protocols must template both injection visits with vial-reconstitution competency checks; Momenties pairs each dose with the on-demand utilization log that drives continuation review.',
  },
  {
    title: 'APeX-2/APeX-S Berotralstat — JAMA Allergy 2021',
    finding:
      'Phase III RCT (n=121) of berotralstat 150 mg PO daily vs placebo showed 44% reduction in monthly attack rate (1.31 vs 2.35, p<0.001) at 24 weeks; long-term APeX-S extension confirmed durability through 96 weeks with hepatic transaminase elevation in 7% requiring monthly LFT surveillance for the first 6 months.',
    implication:
      'NPs prescribing berotralstat must calendar monthly LFTs for the first 6 months and quarterly thereafter; Momenties hard-codes the hepatic-monitoring schedule against APeX-S safety data so the first dose cannot be authorized without the LFT cadence in place.',
  },
  {
    title: 'FAST-3 Icatibant On-Demand — NEJM 2012',
    finding:
      'Phase III RCT (n=98) of icatibant 30 mg SC vs placebo for acute HAE attacks showed median time to ≥50% symptom reduction of 2.0 hours vs 19.8 hours (p<0.001), establishing the bradykinin B2 receptor antagonist as a self-administered first-line on-demand therapy.',
    implication:
      'NPs should deliver annual icatibant self-injection competency to every prophylaxis and non-prophylaxis HAE patient — the FAST-3 2-hour symptom-reduction window is the patient-education benchmark Momenties templates into every encounter.',
  },
]

const schedule = [
  {
    frequency: 'Every 5 years',
    item: 'AGACNP-BC Recertification (AACN/ANCC)',
    details:
      '75 contact hours including pharmacology with HAE-specific CE from US HAEA, WAAE, or AAAAI; submit through AACN/ANCC portal 90 days before expiration.',
  },
  {
    frequency: 'Every 2 weeks',
    item: 'Lanadelumab 300 mg SC Cycle',
    details:
      'Q2wk for first 6 months; transition to q4wk only after documented 6 months attack-free per HELP open-label extension; attack log reconciliation at every cycle.',
  },
  {
    frequency: 'Quarterly',
    item: 'C4 + C1-INH Antigenic + C1-INH Functional Assay',
    details:
      'Quantitative C4 and C1-INH triad every 12 weeks on prophylaxis; baseline plus annual functional assay for HAE-nC1-INH (Type III) patients with FXII/PLG/KNG1/ANGPT1 mutation panels.',
  },
  {
    frequency: 'Monthly',
    item: 'HAE Attack Log Review',
    details:
      'Patient-reported attack log reviewed monthly with location, HAE-AS severity score, duration, on-demand use, and ED utilization; feeds WAAE registry and ≥87% attack-free continuation threshold.',
  },
  {
    frequency: 'Monthly x6 then Quarterly',
    item: 'Berotralstat LFT Monitoring',
    details:
      'AST/ALT/total bilirubin monthly for the first 6 months of berotralstat 150 mg PO daily, then quarterly per APeX-S safety profile; hold for ALT >3x ULN.',
  },
  {
    frequency: 'Annual',
    item: 'Icatibant Self-Injection Competency',
    details:
      'Annual sim-lab attestation of icatibant 30 mg SC self-administration including auto-injector technique, abdominal site rotation, and 2-hour observation guidance per FAST-3 protocol.',
  },
  {
    frequency: 'Every 4 weeks',
    item: 'Garadacimab 120 mg SC Cycle',
    details:
      'Loading dose 400 mg followed by 200 mg q4wk maintenance; attack-rate reconciliation at month 3 and month 6 against ZENITH-1 endpoint for first PA renewal.',
  },
  {
    frequency: 'Every 6 months',
    item: 'Emergency Kit Expiry & Recall Check',
    details:
      'Two on-demand doses (icatibant + IV C1-INH) checked against manufacturer lot recall feed twice yearly; written HAE action plan refreshed at each check.',
  },
  {
    frequency: 'Annual',
    item: 'WAAE Registry Submission',
    details:
      'Annual aggregate attack rate, prophylaxis utilization, and PRO data submission to the World Allergy Organization HAE registry; required for academic-affiliated HAE Center of Excellence designation.',
  },
  {
    frequency: 'Annual',
    item: 'US HAEA + WAO/WAAE Guideline CE',
    details:
      'US HAEA medical advisory board annual update plus WAO/WAAE 2021 international consensus guideline review CE; required for Type I/II/nC1-INH classification competency.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Hereditary Angioedema Nurse Practitioners"
        title="Every Lanadelumab Dose. Every C4 Level. Every Attack Log."
        subtitle="Built for HAE NPs managing Type I, II, and HAE-nC1-INH patients — lanadelumab and garadacimab prophylaxis cycles, quarterly C4/C1-INH triads, monthly attack documentation, berotralstat LFT surveillance, icatibant self-injection training, and annual WAAE/US HAEA registry submissions — without losing a renewal, a dose window, or an emergency kit expiry."
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
            Built for the Full Hereditary Angioedema NP Practice
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
                marginBottom: 48,
                color: '#f0ece3',
              }}
            >
              The Evidence Base Driving Hereditary Angioedema NP Compliance
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {studies.map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '28px 32px',
                  }}
                >
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.9rem', marginBottom: 12 }}>
                    {s.title}
                  </div>
                  <p style={{ color: '#f0ece3', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 10 }}>
                    <strong>Finding:</strong> {s.finding}
                  </p>
                  <p style={{ color: '#a0998e', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    <strong>NP Implication:</strong> {s.implication}
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
              Hereditary Angioedema NP Certification & CE Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {schedule.map((item) => (
                <div
                  key={item.item}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '160px 1fr',
                    gap: 20,
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                    padding: '20px 24px',
                    alignItems: 'start',
                  }}
                >
                  <div
                    style={{
                      color: '#c5a35c',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.frequency}
                  </div>
                  <div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>
                      {item.item}
                    </div>
                    <div style={{ color: '#a0998e', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥87% Attack-Free Rate Documentation in Your Lanadelumab HAE Panel?"
        subtext="Momenties keeps every lanadelumab and garadacimab cycle, every C4/C1-INH triad, and every attack log on the same calendar — so AGACNP-BC renewal, WAAE registry submission, and prophylaxis continuation never slip out of sync."
      />
    </main>
  )
}
