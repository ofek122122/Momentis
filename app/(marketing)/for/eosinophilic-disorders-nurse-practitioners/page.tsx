import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Eosinophilic Disorders Nurse Practitioners — Compliance Calendar | Momenties',
  description:
    'AOCNP renewal, HES/EGPA diagnostic criteria CE, mepolizumab/benralizumab biologic cycle management, AEC ≤150 cells/μL monitoring, FIP1L1-PDGFRA mutation testing CE, BVAS scoring competency, ACR/EULAR criteria annual review.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Oncology/Allergy NP Credentials & Eosinophil CE',
    description:
      'Eosinophilic disorders sit at the crossroads of hematology, oncology, allergy, and rheumatology — and your credentialing has to mirror that breadth. AOCNP renewal every four years requires 1,000 oncology practice hours plus 100 contact hours of oncology CE, and increasingly programs expect dedicated coursework in HES classification (FIP1L1-PDGFRA, lymphocytic, idiopathic), EGPA diagnostic criteria, and the 2023 ACR/EULAR vasculitis classification. Building a calendar that tracks state APRN renewal, DEA, AOCNP/AAAAI cycles, and specialty CE prevents lapses that could pull you off a biologic-heavy panel. Momenties links every renewal date to its source-of-truth board portal so nothing falls through.',
  },
  {
    icon: Clock,
    title: 'Mepolizumab/Benralizumab Biologic Administration & AEC Monitoring',
    description:
      'Anti-IL-5 and anti-IL-5Rα biologics define modern eosinophilic disorder care, but each agent runs on its own clock — mepolizumab every 4 weeks at 300 mg SC for HES, benralizumab 30 mg every 4 weeks for the first three doses then every 8 weeks, and dupilumab every 2 weeks for EoE. Layered on top is the AEC ≤150 cells/μL target that drives dose-hold decisions and corticosteroid taper milestones. Missing an AEC draw or a cycle window can derail months of disease control. Momenties pairs each biologic cycle with its required CBC-with-differential, prior-auth renewal, and patient education touchpoint so the panel never drifts.',
  },
  {
    icon: BarChart3,
    title: 'FIP1L1-PDGFRA Testing & Imatinib Management',
    description:
      'For myeloproliferative HES, FIP1L1-PDGFRA fusion testing is the single most important workup decision you make — a positive result means imatinib 100–400 mg daily produces near-universal molecular remission, while a negative result redirects you toward IL-5 pathway biologics. Annual repeat FISH or RT-PCR is recommended to monitor for clonal evolution, and imatinib patients need quarterly CBC, CMP, and LVEF surveillance for the first year. Cardiac troponin baseline before imatinib initiation is now standard of care after reports of eosinophilic myocarditis flare on TKI start. Momenties keeps every molecular checkpoint, echo, and troponin tied to the cycle that triggered it.',
  },
  {
    icon: Users,
    title: 'EGPA/BVAS Disease Activity Documentation',
    description:
      'EGPA management hinges on objective disease-activity scoring, and the Birmingham Vasculitis Activity Score (BVAS) is the documentation standard payors and registries now expect quarterly. Each BVAS visit captures nine organ systems, ANCA status, and corticosteroid dose — feeding directly into avacopan eligibility decisions and mepolizumab continuation criteria. Annual ACR/EULAR 2022 criteria review keeps your differential sharp between EGPA, GPA, and MPA in ANCA-positive patients. Momenties templates every BVAS visit with the prior score, the trend line, and the trigger thresholds for therapy escalation so your charts read like a vasculitis registry submission.',
  },
]

const studies = [
  {
    title: 'DREAM Mepolizumab HES — NEJM 2012',
    finding:
      'Phase III RCT (n=85) of mepolizumab 750 mg IV q4wk vs placebo in FIP1L1-PDGFRA-negative HES on prednisone showed 84% of mepolizumab patients achieved prednisone reduction to ≤10 mg/day for ≥8 consecutive weeks vs 43% placebo (p<0.001), with sustained AEC <600 cells/μL in the active arm.',
    implication:
      'NPs running steroid-sparing protocols should calendar mepolizumab cycles every 4 weeks with a same-day AEC and prednisone-taper checkpoint, documenting the ≤10 mg/day threshold as the primary efficacy endpoint per DREAM methodology for payor continuation reviews.',
  },
  {
    title: 'MIRRA/SIRIO Benralizumab EGPA — NEJM 2021',
    finding:
      'MIRRA Phase III RCT (n=136) of mepolizumab 300 mg SC q4wk in relapsing/refractory EGPA demonstrated 28% remission for ≥24 weeks vs 3% placebo (OR 5.91, p<0.001) and 44% achieved oral corticosteroid dose ≤4 mg/day vs 7% placebo, establishing IL-5 blockade as steroid-sparing in EGPA.',
    implication:
      'NPs should pair every q4wk benralizumab/mepolizumab cycle with a BVAS score and prednisone dose log, using the ≤4 mg/day threshold as the documented continuation criterion to support quarterly prior-authorization renewals.',
  },
  {
    title: 'ADVOCATE Avacopan EGPA/AAV — NEJM 2021',
    finding:
      'Phase III RCT (n=331) of avacopan 30 mg BID vs prednisone taper in ANCA-associated vasculitis showed avacopan non-inferior at week 26 (72.3% vs 70.1%) and superior at week 52 (65.7% vs 54.9%, p=0.007 for sustained remission), with 86% lower glucocorticoid toxicity index.',
    implication:
      'NPs initiating avacopan in ANCA-positive EGPA must calendar week 4, 13, 26, and 52 BVAS plus monthly LFTs for the first 6 months — Momenties templates pull the ADVOCATE schedule directly into the patient timeline so no hepatic checkpoint is missed.',
  },
  {
    title: 'MELTEMI Long-Term Mepolizumab HES — Blood 2021',
    finding:
      'Open-label extension (n=78) of mepolizumab in HES showed 92% maintained AEC <600 cells/μL through year 5 with median prednisone dose dropping from 13.5 mg to 5 mg daily; serious adverse event rate was 18 per 100 patient-years with no anti-drug antibody-related discontinuations.',
    implication:
      'NPs managing chronic HES on mepolizumab should schedule annual cardiac and pulmonary surveillance plus end-of-year prednisone dose attestation — the MELTEMI 5-year safety profile underpins the every-4-week dosing rhythm Momenties enforces by default.',
  },
  {
    title: 'Imatinib FIP1L1-PDGFRA HES — NEJM 2003 / Blood 2009 follow-up',
    finding:
      'Initial cohort (n=11) showed 100% complete hematologic response to imatinib 100–400 mg daily in FIP1L1-PDGFRA+ HES within 4 weeks; 9-year follow-up (n=44) showed 95% molecular remission durability with no progression to AML when adherence was maintained.',
    implication:
      'NPs must order FIP1L1-PDGFRA RT-PCR before any biologic decision in suspected myeloproliferative HES — Momenties hard-codes the molecular checkpoint as a precondition before mepolizumab/benralizumab cycles can be scheduled.',
  },
]

const schedule = [
  {
    frequency: 'Every 4 years',
    item: 'AOCNP Recertification (ONCC)',
    details:
      '1,000 oncology practice hours over 4 years + 100 contact hours of oncology CE including dedicated HES/EGPA modules; submit through ONCC portal 90 days before expiration.',
  },
  {
    frequency: 'Monthly',
    item: 'AEC with Biologic Cycle (CBC + Differential)',
    details:
      'Same-day AEC draw with every mepolizumab/benralizumab/dupilumab cycle; target ≤150 cells/μL with prednisone-taper trigger documented in chart per DREAM/MIRRA endpoints.',
  },
  {
    frequency: 'Every 4 weeks',
    item: 'Mepolizumab 300 mg SC (HES) / 100 mg SC (EGPA)',
    details:
      'Subcutaneous administration with 30-minute observation; AEC, BVAS (if EGPA), and prednisone dose logged at every cycle; prior-auth renewal queued at month 11.',
  },
  {
    frequency: 'Q4wk x3 then Q8wk',
    item: 'Benralizumab 30 mg SC',
    details:
      'Loading phase weeks 0, 4, 8 followed by maintenance every 8 weeks; AEC depletion to ~0 cells/μL is expected — document anti-IL-5Rα-driven eosinophil apoptosis in continuation notes.',
  },
  {
    frequency: 'Annual',
    item: 'FIP1L1-PDGFRA RT-PCR or FISH',
    details:
      'Repeat molecular testing in all HES patients regardless of prior result; clonal evolution can shift therapy from biologic to imatinib TKI — required before any therapy escalation review.',
  },
  {
    frequency: 'Quarterly',
    item: 'BVAS Score for EGPA Patients',
    details:
      'Birmingham Vasculitis Activity Score across nine organ systems documented every 12 weeks with ANCA status and prednisone dose; feeds avacopan continuation and mepolizumab eligibility.',
  },
  {
    frequency: 'Annual',
    item: 'ACR/EULAR 2022 Vasculitis Criteria Review',
    details:
      'Re-review of ACR/EULAR EGPA/GPA/MPA classification criteria CE module; required for ANCA-vasculitis panel attestation and registry submissions.',
  },
  {
    frequency: 'Quarterly',
    item: 'Imatinib Cardiac & Hepatic Surveillance',
    details:
      'CBC, CMP, troponin, and LVEF every 3 months for the first year of imatinib; baseline echo within 30 days of initiation per eosinophilic myocarditis safety profile.',
  },
  {
    frequency: 'Annual',
    item: 'ECP Eosinophilia Protocol Recertification',
    details:
      'Extracorporeal photopheresis competency for refractory CTCL-associated or steroid-refractory eosinophilic syndromes; annual sim-lab attestation per institutional apheresis policy.',
  },
  {
    frequency: 'Every 2 years',
    item: 'State APRN Renewal + DEA',
    details:
      'State board APRN/RN compound renewal plus federal DEA registration (3-year cycle, calendared at 24 and 30 months); separate controlled-substance CE in states requiring it.',
  },
]

export default function Page() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Eosinophilic Disorders Nurse Practitioners"
        title="Every AEC Check. Every Biologic Cycle. Every EGPA Score."
        subtitle="Built for eosinophilic disorder NPs managing HES, EGPA, and EoE biologic therapies — mepolizumab and benralizumab cycles, AEC ≤150 cells/μL targets, FIP1L1-PDGFRA molecular testing, BVAS disease-activity documentation, and ACR/EULAR criteria compliance — without losing a renewal, a cycle window, or a registry submission."
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
            Built for the Full Eosinophilic Disorders NP Practice
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
              The Evidence Base Driving Eosinophilic Disorders NP Compliance
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
              Eosinophilic Disorders NP Certification & CE Schedule
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
        headline="Ready to Achieve AEC ≤150 cells/μL Across Your Eosinophilic Disorders Panel?"
        subtext="Momenties keeps every mepolizumab and benralizumab cycle, every FIP1L1-PDGFRA checkpoint, and every BVAS score on the same calendar — so AOCNP renewal, ACR/EULAR review, and biologic continuation never slip out of sync."
      />
    </main>
  )
}
