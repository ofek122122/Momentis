import { Microscope, FlaskConical, AlertTriangle, Stethoscope } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Mast Cell Disease Center Compliance Calendar | Momenties',
  description: 'Automate WHO 2022 systemic mastocytosis classification monitoring, quarterly serum tryptase tracking, KIT D816V mutation surveillance, midostaurin (Rydapt) and avapritinib (Ayvakit) treatment cycle compliance, anaphylaxis emergency protocols, mast cell activation syndrome (MCAS) workup, and UrticariaNet/ECNM registry reporting deadlines.',
}

const pillars = [
  {
    icon: Microscope,
    title: 'WHO Systemic Mastocytosis Classification & Diagnosis',
    description: 'Annual reassessment per WHO 2022 5th edition classification — indolent SM (ISM), smoldering SM (SSM), aggressive SM (ASM), SM with associated hematologic neoplasm (SM-AHN), and mast cell leukemia (MCL); major diagnostic criterion documentation requiring multifocal dense infiltrates of ≥15 mast cells in bone marrow or extracutaneous biopsy with tryptase immunohistochemistry; minor criteria audit including atypical/spindle-shaped morphology in ≥25% mast cells, KIT D816V mutation by allele-specific PCR or NGS, aberrant CD25/CD2/CD30 expression by flow cytometry, and persistently elevated baseline serum tryptase >20 ng/mL; quarterly B-finding (organ infiltration without dysfunction) and C-finding (organ damage) assessment for staging progression; annual IPSM (International Prognostic Scoring System for Mastocytosis) and MARS (Mutation-Adjusted Risk Score) re-stratification; and quarterly ECNM (European Competence Network on Mastocytosis) registry submission for advanced systemic mastocytosis cases.',
  },
  {
    icon: FlaskConical,
    title: 'Midostaurin/Avapritinib Treatment Monitoring',
    description: 'Midostaurin (Rydapt) 100 mg PO BID continuous dosing for advanced SM (ASM, SM-AHN, MCL) with monthly CBC, comprehensive metabolic panel, and serum tryptase monitoring per D2201 trial protocol; quarterly response assessment using IWG-MRT-ECNM criteria — complete remission, partial remission, clinical improvement, stable disease, or progressive disease; avapritinib (Ayvakit) 200 mg PO daily for advanced SM with weekly CBC for first 8 weeks (intracranial hemorrhage and thrombocytopenia surveillance per EXPLORER and PATHFINDER trials), monthly thereafter, with platelet threshold ≥50,000/μL for initiation; avapritinib 25 mg PO daily for indolent SM per PIONEER trial with monthly tryptase and symptom score (ISM-SAF) assessment; quarterly KIT D816V variant allele frequency (VAF) by digital droplet PCR for molecular response tracking with ≥50% VAF reduction defining molecular response; biweekly QTc monitoring on midostaurin; and annual cardiac echocardiogram for patients with baseline cardiac risk factors.',
  },
  {
    icon: Stethoscope,
    title: 'Serum Tryptase & Bone Marrow Surveillance',
    description: 'Quarterly baseline serum tryptase measurement with target reduction ≥50% from pre-treatment baseline as molecular and biochemical response marker; hereditary alpha-tryptasemia (HαT) screening via TPSAB1 gene copy number testing for patients with persistently elevated tryptase >8 ng/mL and family history; annual bone marrow aspirate and biopsy for advanced SM patients with morphology, flow cytometry (CD25/CD2/CD30), KIT D816V testing, and tryptase immunohistochemistry; biennial bone marrow for indolent SM with stable disease; quarterly chromogranin A, 24-hour urinary N-methylhistamine, and 11β-prostaglandin F2α for mediator-related symptom assessment; annual DEXA scan for osteoporosis surveillance (40% ISM patients have osteoporosis/osteopenia) with bisphosphonate or denosumab initiation per IOF guidelines; quarterly liver function panel and abdominal ultrasound for hepatosplenomegaly monitoring in B-finding ISM/SSM; and annual full skin examination for cutaneous mastocytosis lesion progression and Darier sign documentation.',
  },
  {
    icon: AlertTriangle,
    title: 'Anaphylaxis Protocol & Emergency Preparedness',
    description: 'Annual anaphylaxis action plan review for every SM/MCAS patient with documented Hymenoptera venom allergy, drug hypersensitivity, or idiopathic anaphylaxis history; mandatory dual epinephrine auto-injector (EpiPen 0.3 mg or Auvi-Q) prescription with annual technique demonstration and 12-month expiration tracking; quarterly venom immunotherapy (VIT) compliance audit for patients with Hymenoptera anaphylaxis (lifelong VIT recommended in mastocytosis per EAACI guidelines); annual perioperative anaphylaxis prophylaxis protocol review — H1/H2 antihistamines, corticosteroid pre-medication, avoidance of NSAIDs/opioids/neuromuscular blockers; quarterly mast cell activation syndrome (MCAS) consensus criteria assessment per Akin/Valent — episodic mediator symptoms involving ≥2 organ systems, ≥20% increase in serum tryptase from baseline plus 2 ng/mL within 4 hours, and response to mast cell-targeted therapy; annual cromolyn sodium, ketotifen, and montelukast titration documentation; annual omalizumab (Xolair) compliance for refractory MCAS with idiopathic anaphylaxis; and quarterly TMS (The Mastocytosis Society) patient-reported outcome measure (MC-QoL) administration.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual WHO Reclassification & IPSM Re-Stratification',
    tasks: 'Complete annual WHO 2022 systemic mastocytosis reclassification for all active SM patients (ISM/SSM/ASM/SM-AHN/MCL). Re-run IPSM and MARS prognostic scoring with updated cytogenetics and KIT D816V VAF data. Audit B-finding and C-finding documentation for staging progression. Schedule Q1 ECNM registry submissions for all advanced SM cases.',
  },
  {
    phase: 'February',
    title: 'Quarterly Serum Tryptase & KIT D816V VAF',
    tasks: 'Complete Q1 baseline serum tryptase measurement for all SM patients. Run quarterly KIT D816V variant allele frequency by digital droplet PCR for patients on midostaurin or avapritinib. Document ≥50% VAF reduction milestones for molecular response. Review hereditary alpha-tryptasemia (HαT) TPSAB1 screening results for patients with elevated baseline tryptase.',
  },
  {
    phase: 'March',
    title: 'Midostaurin/Avapritinib Q1 Response Assessment',
    tasks: 'Complete Q1 IWG-MRT-ECNM response assessment for all advanced SM patients on midostaurin 100 mg BID or avapritinib 200 mg daily. Review monthly CBC and CMP trends, biweekly QTc on midostaurin, and weekly CBC for new avapritinib starts (intracranial hemorrhage and thrombocytopenia surveillance). Audit Q1 PIONEER-protocol avapritinib 25 mg daily compliance for ISM patients.',
  },
  {
    phase: 'April',
    title: 'Annual Anaphylaxis Action Plan & EpiPen Audit',
    tasks: 'Complete annual anaphylaxis action plan review for every SM and MCAS patient. Verify dual epinephrine auto-injector prescriptions, expiration dates, and technique demonstration. Audit Hymenoptera venom immunotherapy compliance for patients with sting anaphylaxis. Review perioperative anaphylaxis prophylaxis protocols (H1/H2 antihistamines, corticosteroid pre-medication).',
  },
  {
    phase: 'May',
    title: 'MCAS Workup & Mediator Studies',
    tasks: 'Complete Q2 mast cell activation syndrome (MCAS) consensus criteria assessment per Akin/Valent. Order 24-hour urinary N-methylhistamine, 11β-prostaglandin F2α, and chromogranin A for mediator-related symptom evaluation. Document ≥20% tryptase rise from baseline plus 2 ng/mL during symptomatic episodes. Audit cromolyn sodium, ketotifen, and montelukast titration regimens.',
  },
  {
    phase: 'June',
    title: 'Q2 Bone Marrow Surveillance & Tryptase',
    tasks: 'Complete semi-annual bone marrow aspirate and biopsy for advanced SM patients (morphology, CD25/CD2/CD30 flow cytometry, KIT D816V testing, tryptase IHC). Submit Q2 ECNM registry data. Review Q2 serum tryptase trends with target ≥50% reduction from pre-treatment baseline. Audit ISM-SAF symptom severity scores for indolent SM patients on avapritinib.',
  },
  {
    phase: 'July',
    title: 'Annual DEXA & Osteoporosis Management',
    tasks: 'Complete annual DEXA bone densitometry for all ISM/SSM patients (40% have osteoporosis/osteopenia per IOF). Initiate bisphosphonate (zoledronic acid) or denosumab for patients meeting treatment thresholds. Audit calcium and vitamin D supplementation. Review annual skin examination for cutaneous mastocytosis lesion progression and Darier sign documentation.',
  },
  {
    phase: 'August',
    title: 'Cardiac & Hepatic Safety Surveillance',
    tasks: 'Complete annual cardiac echocardiogram for advanced SM patients on midostaurin with baseline cardiac risk factors. Audit biweekly QTc monitoring compliance. Complete quarterly liver function panel and abdominal ultrasound for hepatosplenomegaly monitoring (B-finding). Review chromogranin A and mediator markers.',
  },
  {
    phase: 'September',
    title: 'Q3 ECNM Registry & Response Assessment',
    tasks: 'Submit Q3 ECNM registry data for all advanced SM patients. Complete Q3 IWG-MRT-ECNM response assessment for midostaurin and avapritinib treatment cohorts. Document complete remission, partial remission, clinical improvement, stable disease, or progressive disease classifications. Review TMS MC-QoL patient-reported outcome scores.',
  },
  {
    phase: 'October',
    title: 'Refractory MCAS & Omalizumab Audit',
    tasks: 'Complete annual omalizumab (Xolair) compliance audit for refractory MCAS patients with idiopathic anaphylaxis. Review monthly omalizumab dosing and tryptase response. Audit antihistamine, leukotriene receptor antagonist, and mast cell stabilizer regimens. Update VIT immunotherapy schedules for Hymenoptera-allergic SM patients.',
  },
  {
    phase: 'November',
    title: 'Annual Mastocytosis Symposium & CME',
    tasks: 'Attend annual ECNM/American Initiative in Mast Cell Diseases (AIM) meeting — complete CME requirements. Update protocols from latest WHO classification updates, midostaurin/avapritinib trial data, and MCAS consensus criteria. Review BLU-263 (elenestinib) and bezuclastinib pipeline data for indolent SM clinical trial enrollment opportunities.',
  },
  {
    phase: 'December',
    title: 'Q4 ECNM Submission & Annual Center Report',
    tasks: 'Submit Q4 ECNM registry data. Compile annual Mast Cell Disease Center compliance report — WHO reclassification rates, midostaurin/avapritinib response rates, ≥50% tryptase reduction achievement, KIT D816V molecular response, anaphylaxis prevention compliance, and MC-QoL patient outcomes. Plan next-year IPSM re-stratification and clinical trial enrollment.',
  },
]

const kpis = [
  { metric: '≥50%', label: 'Serum Tryptase Reduction (Avapritinib)' },
  { metric: '≥60%', label: 'Midostaurin Overall Response (Advanced SM)' },
  { metric: '100%', label: 'Anaphylaxis Action Plan Compliance' },
  { metric: '≥50%', label: 'KIT D816V VAF Reduction' },
  { metric: 'Quarterly', label: 'ECNM Registry Submission' },
  { metric: 'Annual', label: 'WHO Classification Reassessment' },
]

const testimonial = {
  quote: 'Mast cell disease center management requires annual WHO 2022 reclassification, quarterly serum tryptase tracking, KIT D816V VAF molecular surveillance, monthly midostaurin CBC monitoring, weekly avapritinib platelet checks, biweekly QTc audits, semi-annual bone marrow biopsies, annual DEXA scans, anaphylaxis action plan reviews, MCAS consensus criteria assessments, omalizumab compliance, ECNM quarterly registry reporting, and IPSM/MARS prognostic re-stratification — all simultaneously. Momenties consolidated every deadline into a single calendar. Our program achieved 64% midostaurin response in advanced SM and 100% anaphylaxis preparedness compliance.',
  author: 'Director of Mast Cell Disease Program',
  role: 'Center of Excellence in Mastocytosis, Academic Medical Center',
}

export default function MastCellDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Mast Cell Disease Center Calendar"
        title="Every Tryptase Check. Every Midostaurin Cycle. One Calendar."
        subtitle="Mast cell disease centers manage one of the most diagnostically complex hematology-allergy portfolios — annual WHO 2022 systemic mastocytosis reclassification, quarterly serum tryptase tracking, KIT D816V molecular surveillance, midostaurin and avapritinib treatment cycle monitoring, anaphylaxis emergency protocols, MCAS consensus criteria assessment, and ECNM registry reporting. Momenties automates every deadline so your SM, MCL, and MCAS patients achieve durable molecular response and anaphylaxis-free outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Mast Cell Disease Center Compliance Lifecycle
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

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              The Mast Cell Disease Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every tryptase check, midostaurin cycle, KIT D816V test, anaphylaxis review, and ECNM registry milestone — sequenced across 12 months.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.phase} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.phase}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '0.97rem', lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                  <p style={{ color: '#a0998e', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
              The 6 KPIs That Define Mast Cell Disease Program Excellence
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 700, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.4 }}>{kpi.label}</div>
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
        headline="Ready to Achieve ≥60% Midostaurin Response in Advanced Systemic Mastocytosis?"
        subtext="Join mast cell disease centers using Momenties to automate every WHO classification, tryptase, KIT D816V, midostaurin, and ECNM deadline. Free to start."
      />
    </main>
  )
}
