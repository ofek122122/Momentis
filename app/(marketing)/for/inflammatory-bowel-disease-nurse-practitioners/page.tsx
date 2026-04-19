import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Inflammatory Bowel Disease Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CGRN renewal, CCFA/Crohn\'s & Colitis Foundation annual CE, biologic REMS training, fecal calprotectin quarterly monitoring, colonoscopy surveillance scheduling, IBD-QoL tracking, and IOIBD quality metrics for IBD NPs.',
}

const pillars = [
  {
    icon: Shield,
    title: 'IBD Credentials & Certification',
    description: 'AGPCNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, CGRN (Certified Gastroenterology Registered Nurse) 5-year/75 CE renewal for GI specialty certification, SGNA (Society of Gastroenterology Nurses and Associates) annual membership and CE requirement, Crohn\'s &amp; Colitis Foundation (CCF) annual Advances in IBD meeting CE, annual ACG (American College of Gastroenterology) Annual Scientific Meeting IBD-specific CE, annual AGA (American Gastroenterological Association) Clinical Practice Update on IBD review, biennial collaborative practice agreement renewal with IBD gastroenterologist for biologic prescribing authority (infliximab, adalimumab, vedolizumab, ustekinumab, risankizumab, ozanimod), annual IBD-specific pharmacology CE for biologic mechanism of action updates, and annual advanced IBD nursing practice CE for treat-to-target strategy implementation.',
  },
  {
    icon: Clock,
    title: 'Biologic REMS, Safety Monitoring & TDM',
    description: 'Annual biologic REMS program training — infliximab (Remicade/Inflectra REMS: TB screening, hepatitis B reactivation, serious infection monitoring); annual TNF inhibitor safety monitoring protocol review (annual tuberculin skin test or IGRA for all biologic patients); quarterly therapeutic drug monitoring (TDM) documentation — infliximab trough target ≥5 μg/mL (Crohn\'s), adalimumab ≥7.5 μg/mL, vedolizumab ≥14 μg/mL; quarterly anti-drug antibody (ADA) documentation for loss of response evaluation; annual vedolizumab prescribing authority renewal; annual ustekinumab dosing protocol update (IV induction 260/390/520 mg × 1 — weight-based, then SC 90 mg q8–12 weeks); annual JAK inhibitor CV risk screening protocol update for tofacitinib/upadacitinib-treated patients (MACE, thrombosis, malignancy risk per FDA REMS); and annual biosimilar substitution protocol review for all biologic-treated IBD patients.',
  },
  {
    icon: BarChart3,
    title: 'IBD Treat-to-Target & Endoscopic Outcomes',
    description: 'Quarterly fecal calprotectin monitoring documentation (Crohn\'s treat-to-target: FC <250 μg/g; UC: FC <150 μg/g — CALM trial benchmarks); quarterly CRP and albumin trending for mucosal healing assessment; annual colonoscopy surveillance scheduling compliance (SCENIC guideline: Crohn\'s — colonoscopy every 1–2 years after 8 years of colonic disease; UC — colonoscopy every 1–2 years pancolitis after 8 years); annual IBD-related colorectal cancer (CRC) surveillance chromoendoscopy scheduling; quarterly Harvey-Bradshaw Index (HBI) for Crohn\'s and Mayo Score/UCEIS for UC documentation; quarterly steroid-free remission rate tracking (IBD quality benchmark: ≥60% steroid-free clinical remission); quarterly IBD-QoL (SIBDQ) or SF-36 patient-reported outcome documentation; and annual IBD surgery rate documentation (Crohn\'s surgery rate ≤25% at 5 years; UC colectomy rate ≤10% at 5 years — CCF benchmark).',
  },
  {
    icon: Users,
    title: 'IBD MDT & Colorectal Oncology Collaboration',
    description: 'Annual IBD multidisciplinary team documentation — gastroenterology + colorectal surgery + radiology + pharmacy + dietitian + psychology; annual nutrition assessment documentation for all moderate-to-severe IBD patients (IBD-specific malnutrition screening — MUST or PG-SGA); annual Crohn\'s perianal disease annual protocol review (EUA + LIFT procedure criteria, anti-TNF + seton combination); annual IBD-associated extraintestinal manifestation (EIM) surveillance protocol update — arthropathy, pyoderma gangrenosum, primary sclerosing cholangitis (PSC-IBD: annual LFT and MRCP documentation); annual PSC-IBD annual CRC surveillance colonoscopy scheduling (annual colonoscopy for all PSC-IBD — higher CRC risk); annual obstetric consultation protocol for IBD patients planning pregnancy (pregnancy safety profile: vedolizumab/ustekinumab preferred over TNF-α for conception period); and quarterly IBD education session attendance documentation for patient empowerment program.',
  },
]

const studies = [
  {
    title: 'Infliximab for Crohn\'s Disease — NEJM 1997',
    finding: 'ACCENT I trial: infliximab 5 mg/kg induction (0/2/6 weeks) achieved clinical response in 81% and remission in 33% at week 2 in moderate-to-severe Crohn\'s — with maintenance infusions every 8 weeks achieving 39% clinical remission at week 30 vs. 21% placebo, establishing infliximab as the first biologic therapy for Crohn\'s disease.',
    implication: 'Annual biologic REMS training (TB screening, HBV reactivation, serious infection monitoring) and quarterly infliximab TDM documentation (trough target ≥5 μg/mL) require NP annual IBD biologic pharmacology CE to optimize dosing intervals, manage anti-drug antibodies, and prevent loss of response.',
  },
  {
    title: 'CALM Treat-to-Target in Crohn\'s — NEJM 2018',
    finding: 'CALM trial: tight control (fecal calprotectin >250 μg/g or CRP >5 mg/L → treatment escalation) vs. clinical symptoms only — tight control achieved mucosal healing in 46% vs. 30% (p=0.010) at 48 weeks. FC <250 μg/g was the strongest predictor of endoscopic remission.',
    implication: 'Quarterly fecal calprotectin monitoring (FC <250 μg/g Crohn\'s target) and quarterly CRP trending require NP annual IBD treat-to-target CE to implement tight control escalation protocols, guide colonoscopy scheduling for objective mucosal assessment, and prevent steroid-dependent relapse.',
  },
  {
    title: 'Vedolizumab for UC and Crohn\'s — NEJM 2013',
    finding: 'GEMINI I (UC) and GEMINI II (Crohn\'s) trials: vedolizumab achieved clinical remission in 41.8% (UC) and 31.4% (Crohn\'s) vs. 9.3% and 15.9% placebo at week 52 — with a gut-selective mechanism providing superior safety profile (no systemic immunosuppression) vs. TNF inhibitors.',
    implication: 'Quarterly vedolizumab TDM documentation (trough ≥14 μg/mL) and annual vedolizumab prescribing authority renewal require NP annual IBD biologic CE to guide IV-to-SC maintenance transition, interpret ADA results, and select vedolizumab for patients with systemic infection risk or prior TNF failure.',
  },
  {
    title: 'SCENIC IBD Dysplasia Surveillance — Gastroenterology 2015',
    finding: 'SCENIC consensus statement: chromoendoscopy with targeted biopsy detected dysplasia in 7% of IBD-CRC surveillance colonoscopies vs. 2.4% for white-light random biopsy (OR 3.1, p<0.001) — establishing chromoendoscopy as the preferred IBD-CRC surveillance technique over random biopsy protocols.',
    implication: 'Annual IBD-related CRC surveillance colonoscopy scheduling (pancolitis after 8 years: every 1–2 years) and annual chromoendoscopy protocol compliance require NP annual IBD surveillance CE to coordinate recall scheduling, confirm dye-spray chromoendoscopy availability, and document PSC-IBD annual surveillance.',
  },
  {
    title: 'JAK Inhibitors in UC — NEJM 2017',
    finding: 'OCTAVE Induct 1 and 2: tofacitinib 10 mg BID induction achieved clinical remission in 18.5% and 16.6% vs. 8.2% placebo (both p<0.001) at week 8; OCTAVE Sustain maintenance: 34.3% clinical remission at week 52 vs. 11.1% placebo — establishing JAK inhibitors as small-molecule oral alternatives to biologics for moderate-to-severe UC.',
    implication: 'Annual JAK inhibitor CV risk screening protocol update (MACE, thrombosis, malignancy — FDA REMS for age ≥50 or cardiovascular risk factors) and annual tofacitinib/upadacitinib prescribing authority renewal require NP annual JAK inhibitor CE to implement REMS-required risk stratification and avoid prescribing in high-risk populations.',
  },
  {
    title: 'IBD Pregnancy Outcomes — NEJM 2021',
    finding: 'PIANO registry multicenter study (n=1,490 IBD pregnancies): TNF inhibitor + thiopurine combination was not associated with increased preterm birth or congenital anomalies vs. no therapy — however, active IBD at conception was the strongest predictor of adverse pregnancy outcomes (preterm birth OR 2.8, miscarriage OR 1.9), establishing disease control at conception as the primary pregnancy optimization target.',
    implication: 'Annual obstetric consultation protocol for IBD patients planning pregnancy and quarterly mucosal remission documentation for reproductive-age patients require NP annual IBD pregnancy CE to guide biologic selection (vedolizumab/ustekinumab preferred near conception), time conception to remission, and coordinate obstetric-GI comanagement.',
  },
]

const testimonial = {
  quote: 'IBD NP practice requires AGPCNP-BC and CGRN renewal, quarterly fecal calprotectin monitoring, quarterly biologic TDM documentation, annual biologic REMS training, annual CRC surveillance colonoscopy scheduling, JAK inhibitor REMS risk stratification, PSC-IBD annual MRCP documentation, quarterly HBI and Mayo Score tracking, steroid-free remission rate monitoring, pregnancy biologic protocol, and IBD MDT conference participation — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥65% steroid-free remission and zero missed CRC surveillance colonoscopies.',
  author: 'AGPCNP-BC, CGRN',
  role: 'Inflammatory Bowel Disease Nurse Practitioner, Comprehensive IBD Center',
}

export default function InflammatoryBowelDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Inflammatory Bowel Disease Nurse Practitioners"
        title="Every Biologic TDM Deadline. Every CRC Surveillance Screen. One Calendar."
        subtitle="Inflammatory bowel disease nurse practitioners manage one of the most biologic-intensive advanced practice portfolios in gastroenterology — AGPCNP-BC and CGRN renewal, quarterly fecal calprotectin monitoring, quarterly biologic TDM documentation, annual biologic REMS training, CRC surveillance colonoscopy scheduling, JAK inhibitor REMS risk stratification, and IBD treat-to-target protocol documentation. Momenties automates every deadline so your program achieves top-quartile mucosal healing rates."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full IBD NP Compliance Lifecycle
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
              6 Landmark Trials That Define IBD NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind CCF quality metrics, biologic TDM targets, and IBD NP treat-to-target monitoring benchmarks.
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
        headline="Ready to Achieve ≥65% Steroid-Free Remission?"
        subtext="Join inflammatory bowel disease nurse practitioners using Momenties to automate every biologic TDM, REMS, and surveillance deadline. Free to start."
      />
    </main>
  )
}
