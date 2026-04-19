import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Sickle Cell Disease Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CPHON renewal, ASH annual CE, hydroxyurea monitoring quarterly labs, voxelotor/crizanlizumab REMS annual training, transcranial Doppler annual screening, SCD acute chest syndrome protocol, and SCDAA quality metrics for sickle cell NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'SCD Credentials & Certification',
    description: 'AGPCNP-BC or AGACNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, CPHON (Certified Pediatric Hematology Oncology Nurse) 4-year/32 CE renewal for pediatric SCD NP practice, APHON (Association of Pediatric Hematology/Oncology Nurses) annual membership and CE requirement, ASH (American Society of Hematology) annual meeting CE — SCD session, sickle cell disease-specific nursing CE modules (VOC management, stroke prevention, organ damage surveillance), annual NHLBI (National Heart, Lung, and Blood Institute) SCD clinical guidelines annual update review, annual Sickle Cell Disease Association of America (SCDAA) national conference CE, and biennial collaborative practice agreement renewal with hematologist for hydroxyurea prescribing, voxelotor (Oxbryta) prescribing, and crizanlizumab (Adakveo) administration authority.',
  },
  {
    icon: Clock,
    title: 'Hydroxyurea Monitoring & Disease-Modifying Therapy',
    description: 'Quarterly CBC with differential and reticulocyte count for all hydroxyurea-treated SCD patients — toxicity monitoring (ANC ≥2,000/μL, platelets ≥80,000/μL, Hgb ≥5.3 g/dL before dose escalation — NHLBI guidelines); quarterly HbF (fetal hemoglobin) percentage documentation (target HbF ≥20% optimal response); quarterly hydroxyurea dose optimization documentation (target maximum tolerated dose — MTD: 25–35 mg/kg/day); annual voxelotor annual safety monitoring — hemoglobin, bilirubin, hepatic function (LFT at baseline, 3 months, then annually); monthly crizanlizumab infusion documentation and VOC (vaso-occlusive crisis) frequency tracking; annual L-glutamine (Endari) adherence and VOC reduction documentation; quarterly pregnancy test for all reproductive-age females on hydroxyurea (teratogenic — category D); and annual SCD patient self-management education annual reassessment.',
  },
  {
    icon: BarChart3,
    title: 'Stroke Prevention & Organ Damage Surveillance',
    description: 'Annual transcranial Doppler (TCD) ultrasound scheduling compliance for HbSS/HbSβ⁰ patients ages 2–16 (NHLBI: annual TCD — conditional velocity ≥200 cm/s indicates chronic transfusion therapy initiation); quarterly chronic transfusion patient iron overload monitoring — serum ferritin (target <1,000 ng/mL), LIC by MRI T2* (target <3 mg/g dry weight); annual echocardiogram for tricuspid regurgitant velocity (TRV) surveillance — TRV ≥2.5 m/s: pulmonary hypertension evaluation referral; annual ophthalmology referral for proliferative sickle retinopathy; annual renal function and proteinuria surveillance (eGFR trending, urine ACR — NHLBI: ACR ≥30 mg/g treatment initiation); annual hip and spine X-ray for avascular necrosis surveillance in patients with prior AVN or bone pain; annual pulmonary function testing for chronic lung disease surveillance; and quarterly VOC hospitalization rate and ED utilization tracking (target ≤2 hospitalizations/year).',
  },
  {
    icon: Users,
    title: 'Acute Crisis Management & Transition Care',
    description: 'Annual acute chest syndrome (ACS) protocol competency — oxygen, incentive spirometry, empiric antibiotics (cephalosporin + azithromycin), simple vs. exchange transfusion criteria (Hgb drop ≥2 g/dL, PaO₂ <60 mmHg, bilateral infiltrates); annual pain management protocol annual review — individualized pain plan, IV morphine/hydromorphone dosing, non-opioid adjuncts (ketorolac, IV fluids); annual priapism management protocol review (warm compresses, analgesia, aspiration/irrigation criteria, sildenafil prophylaxis); annual sepsis protocol annual review — functional asplenia: empiric broad-spectrum antibiotics within 1 hour of fever ≥38.5°C; annual pediatric-to-adult transition protocol documentation (ages 16–25 — NHLBI recommendation: structured transition program); annual SCD multidisciplinary team conference documentation (hematology + social work + psychology + pain management); and annual AHFS sickle cell disease certification annual update for emergency staff.',
  },
]

const studies = [
  {
    title: 'Hydroxyurea in SCD — NEJM 1995',
    finding: 'MSH (Multicenter Study of Hydroxyurea) trial: hydroxyurea reduced VOC rate from 4.5 to 2.5 episodes/year (44% reduction, p<0.001), ACS rate by 50%, and transfusion requirements by 72% in adults with HbSS — establishing hydroxyurea as the first FDA-approved SCD disease-modifying therapy.',
    implication: 'Quarterly CBC/reticulocyte monitoring (ANC ≥2,000/μL, platelets ≥80,000/μL before dose escalation) and quarterly HbF documentation (target ≥20%) are the primary SCD NP hydroxyurea quality metrics — MTD achievement drives maximal VOC reduction benefit.',
  },
  {
    title: 'Transcranial Doppler Stroke Prevention — NEJM 1998',
    finding: 'STOP trial: TCD-directed chronic transfusion therapy in children with SCD and TCD velocity ≥200 cm/s reduced first stroke incidence by 92% (10% vs. <1% annually) — establishing annual TCD screening as mandatory stroke prevention surveillance for all HbSS/HbSβ⁰ children ages 2–16.',
    implication: 'Annual TCD scheduling compliance for all eligible pediatric SCD patients and quarterly ferritin monitoring for transfused patients (target <1,000 ng/mL) require NP annual stroke prevention CE to coordinate TCD recall, identify conditional/abnormal velocities, and manage iron chelation for chronic transfusion recipients.',
  },
  {
    title: 'Voxelotor (Oxbryta) for SCD — NEJM 2019',
    finding: 'HOPE trial: voxelotor 1500 mg daily in 274 SCD patients — hemoglobin increase ≥1 g/dL in 51% vs. 7% placebo (p<0.001), significant reduction in hemolysis markers (bilirubin, LDH, reticulocytes), and vasculopathy marker improvement — establishing voxelotor as the first anti-sickling therapy targeting hemoglobin polymerization.',
    implication: 'Annual voxelotor LFT monitoring and quarterly hemoglobin response tracking require NP annual voxelotor prescribing CE to monitor hepatic adverse effects, assess hemoglobin response adequacy, and combine with hydroxyurea for additive HbF + anti-sickling effects in patients with severe anemia.',
  },
  {
    title: 'Crizanlizumab for VOC Prevention — NEJM 2017',
    finding: 'SUSTAIN trial: crizanlizumab 5 mg/kg IV monthly reduced annual VOC rate by 45.3% vs. placebo (1.63 vs. 2.98 crises/year, p=0.01) and time-to-first crisis was significantly longer — establishing P-selectin inhibition as an add-on therapy for VOC prevention independent of hydroxyurea status.',
    implication: 'Monthly crizanlizumab infusion documentation and quarterly VOC hospitalization rate tracking require NP annual crizanlizumab CE to coordinate IV infusion scheduling, monitor for infusion reactions, and document VOC rate reduction for payer authorization renewals.',
  },
  {
    title: 'L-Glutamine for SCD — NEJM 2018',
    finding: 'L-glutamine (Endari) 0.3 g/kg BID reduced annual VOC hospitalizations from 3.15 to 2.31 per year (26.7% reduction, p=0.005) and ACS episodes by 41% in adults and children with SCD — establishing L-glutamine as an FDA-approved oral add-on therapy for VOC prevention.',
    implication: 'Annual L-glutamine adherence documentation and quarterly VOC documentation require NP annual SCD pharmacotherapy CE to counsel on powder preparation (twice-daily oral dosing), monitor for GI side effects, and combine with hydroxyurea + crizanlizumab for comprehensive VOC prevention strategy.',
  },
  {
    title: 'SCD Acute Chest Syndrome — NEJM 2000',
    finding: 'NHLBI multicenter ACS study (n=671): ACS was the leading cause of SCD mortality (25% of deaths) — fat embolism (44%), infection (29%), and hypoventilation (16%) identified as primary causes; exchange transfusion within 24 hours of respiratory deterioration (PaO₂ <60 mmHg) reduced mortality from 9% to 1.4%.',
    implication: 'Annual ACS protocol competency — oxygen, incentive spirometry, empiric antibiotic selection, and simple vs. exchange transfusion criteria — requires NP annual ACS management CE to identify early ACS deterioration, initiate exchange transfusion within 24 hours of PaO₂ decline, and reduce ACS-related mortality.',
  },
]

const testimonial = {
  quote: 'Sickle cell disease NP practice requires AGPCNP-BC and CPHON renewal, quarterly hydroxyurea CBC monitoring, HbF percentage tracking, annual TCD scheduling for all pediatric patients, quarterly ferritin monitoring for transfused patients, monthly crizanlizumab infusion documentation, annual echocardiogram and renal surveillance coordination, annual retinopathy ophthalmology referrals, VOC hospitalization rate tracking, and pediatric-to-adult transition documentation — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥85% HbF ≥20% response rate and zero missed TCD screens.',
  author: 'AGPCNP-BC, CPHON',
  role: 'Sickle Cell Disease Nurse Practitioner, Comprehensive SCD Program',
}

export default function SickleCellDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Sickle Cell Disease Nurse Practitioners"
        title="Every SCD Monitoring Deadline. Every TCD Screen. One Calendar."
        subtitle="Sickle cell disease nurse practitioners manage one of the most surveillance-intensive advanced practice portfolios in hematology — AGPCNP-BC and CPHON renewal, quarterly hydroxyurea CBC monitoring, HbF documentation, annual TCD screening coordination, monthly crizanlizumab infusion tracking, organ damage surveillance scheduling, and pediatric-to-adult transition documentation. Momenties automates every deadline so your program achieves zero missed TCD screens and top-quartile VOC outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full SCD NP Compliance Lifecycle
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
              6 Landmark Trials That Define SCD NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind NHLBI SCD guidelines, SCDAA quality metrics, and SCD NP monitoring benchmarks.
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
        headline="Ready to Achieve Zero Missed TCD Screens?"
        subtext="Join sickle cell disease nurse practitioners using Momenties to automate every hydroxyurea, TCD, and organ surveillance deadline. Free to start."
      />
    </main>
  )
}
