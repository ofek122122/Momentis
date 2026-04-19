import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Allergy Immunology Practice Compliance Calendar | Momenties',
  description: 'Automate ABAI MOC triennial exam, ACAAI/AAAAI annual CE, allergen immunotherapy OSHA compliance, subcutaneous immunotherapy 30-minute observation protocol, biologics REMS training, anaphylaxis drill annual documentation, and JC allergy practice accreditation deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'Allergy Practice Accreditation & Guideline Compliance',
    description: 'Annual AAAAI (American Academy of Allergy, Asthma and Immunology) Annual Meeting CE requirement for all allergists; annual ACAAI (American College of Allergy, Asthma and Immunology) Annual Scientific Meeting CE; annual ABAI (American Board of Allergy and Immunology) MOC (Maintenance of Certification) activities — triennial exam cycle, annual MOC Part II (self-assessment) and Part IV (practice improvement) documentation; annual GINA (Global Initiative for Asthma) Annual Guideline update review and implementation; annual JC (Joint Commission) allergy practice standards compliance review for hospital-based practices; annual WAO (World Allergy Organization) international guidelines annual update for severe asthma and anaphylaxis; and biennial ABAI MOC examination registration and preparation documentation.',
  },
  {
    icon: RefreshCw,
    title: 'Allergen Immunotherapy Safety & OSHA Compliance',
    description: 'Annual allergen immunotherapy (AIT) protocol annual review — subcutaneous immunotherapy (SCIT) build-up and maintenance dosing, 30-minute observation period compliance documentation (AAAAI Practice Parameter — post-injection observation standard); annual SCIT anaphylaxis emergency drill documentation — epinephrine auto-injector availability, resuscitation equipment check, staff training; annual OSHA Bloodborne Pathogen training renewal for all injection staff; annual AIT vial preparation and labeling protocol review (AAAAI/ACAAI practice parameters); quarterly AIT systemic reaction rate documentation (AAAAI benchmark: systemic reaction rate <0.1% per injection); annual sublingual immunotherapy (SLIT) adverse event monitoring protocol review — first-dose in-office observation, home administration protocol; annual allergen extract mixing competency documentation; and annual penicillin skin testing protocol annual update for drug allergy evaluation.',
  },
  {
    icon: TrendingUp,
    title: 'Biologic Safety & Asthma Outcomes Monitoring',
    description: 'Annual biologic REMS/prescribing protocol training — dupilumab (Dupixent) annual safety update (conjunctivitis monitoring, eosinophilic conditions); annual omalizumab (Xolair) REMS training renewal (anaphylaxis risk — observe 30 minutes × first 3 injections, then 20 minutes); annual mepolizumab (Nucala) / benralizumab (Fasenra) / tezepelumab (Tezspire) prescribing authority renewal and eosinophil monitoring protocol; annual atopic dermatitis severity scoring documentation (IGA, EASI, NRS pruritus) for dupilumab-treated patients; quarterly severe asthma outcomes tracking — ACQ/ACT scores, annualized exacerbation rate (target ≤1/year on biologic), OCS reduction documentation; annual food allergy OIT (oral immunotherapy) protocol — peanut OIT (Palforzia) REMS compliance, in-office escalation dose documentation, home maintenance phase monitoring; and quarterly peripheral blood eosinophil trending for all biologic-treated severe asthma patients.',
  },
  {
    icon: BarChart3,
    title: 'Immunodeficiency, PIDD & Quality Outcomes',
    description: 'Annual PIDD (primary immunodeficiency disease) registry data submission — USIDNET (US Immunodeficiency Network) annual registry contribution for IgA deficiency, CVID, XLA; quarterly IVIG/SCIG infusion documentation for CVID patients — IgG trough targets (≥700 mg/dL for most PIDD), monthly infusion site rotation; quarterly infection rate tracking for PIDD patients (target: sinopulmonary infections ≤2/year for CVID on IVIG); annual spirometry documentation for CVID-associated bronchiectasis progression surveillance; annual hereditary angioedema (HAE) attack frequency documentation — C1-inhibitor concentrate/lanadelumab/berotralstat prophylaxis compliance; quarterly HAE attack trigger identification and avoidance protocol review; annual anaphylaxis follow-up documentation rate (AAAAI benchmark ≥95% — epinephrine auto-injector prescription, allergist referral, medical ID documentation); and annual allergy/immunology practice asthma control rate documentation (ACT ≥20 target — national asthma quality benchmark).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'GINA & ABAI MOC Activities',
    tasks: 'Complete annual GINA guideline update review — severe asthma GINA Step 5 biologic selection criteria. Complete ABAI MOC Part II self-assessment activity for the year. Review WAO anaphylaxis guideline updates. Schedule Q1 biologic eosinophil labs and ACQ/ACT assessments.',
  },
  {
    phase: 'February',
    title: 'AIT Protocol Review & OSHA',
    tasks: 'Complete annual allergen immunotherapy protocol review — SCIT build-up and maintenance dosing protocols. Complete annual OSHA Bloodborne Pathogen training renewal for all injection staff. Review AIT vial mixing competency documentation. Update penicillin skin testing protocol.',
  },
  {
    phase: 'March',
    title: 'Q1 AIT Reaction & Biologic Audit',
    tasks: 'Complete Q1 AIT systemic reaction rate documentation (benchmark <0.1% per injection). Review Q1 severe asthma ACQ/ACT scores and annualized exacerbation rates. Submit Q1 USIDNET registry data for PIDD patients. Review Q1 CVID IgG trough levels and infection rates.',
  },
  {
    phase: 'April',
    title: 'Anaphylaxis Emergency Drill',
    tasks: 'Complete annual SCIT anaphylaxis emergency drill — epinephrine auto-injector location, resuscitation equipment check, mock anaphylaxis scenario training for all staff. Document drill participation. Review omalizumab Xolair REMS compliance (30-minute post-injection observation).',
  },
  {
    phase: 'May',
    title: 'Biologic REMS Annual Renewals',
    tasks: 'Complete annual omalizumab REMS renewal. Complete annual dupilumab safety update review (conjunctivitis monitoring protocol). Complete mepolizumab/benralizumab prescribing authority renewals. Review Palforzia peanut OIT REMS compliance for all enrolled patients.',
  },
  {
    phase: 'June',
    title: 'AAAAI Annual Meeting CE',
    tasks: 'Attend AAAAI Annual Meeting — complete CE requirements. Collect biologic pipeline updates, food allergy OIT protocols, PIDD management updates. Update practice protocols from conference evidence. Complete Q2 USIDNET data submission. Review Q2 HAE attack frequency documentation.',
  },
  {
    phase: 'July',
    title: 'Allergen Extract & SLIT Compliance',
    tasks: 'Complete annual allergen extract labeling and preparation protocol review. Complete annual SLIT adverse event monitoring protocol review. Audit SLIT first-dose in-office observation compliance documentation. Review extract beyond-use dating compliance. Update mixing competency records.',
  },
  {
    phase: 'August',
    title: 'Severe Asthma Biologic Outcomes Review',
    tasks: 'Complete Q3 biologic outcomes audit — ACQ/ACT scores, annualized exacerbation rates, OCS reduction documentation, peripheral eosinophil trending. Review tezepelumab prescribing for severe asthma without eosinophilic phenotype. Document IGA/EASI/NRS for dupilumab atopic dermatitis patients.',
  },
  {
    phase: 'September',
    title: 'ACAAI Annual Meeting CE',
    tasks: 'Attend ACAAI Annual Scientific Meeting — complete CE requirements. Collect updated immunotherapy safety data, SLIT evidence, anaphylaxis management updates. Update allergy practice protocols. Complete ABAI MOC Part IV practice improvement documentation for the year.',
  },
  {
    phase: 'October',
    title: 'PIDD & HAE Annual Review',
    tasks: 'Complete annual PIDD registry USIDNET data submission. Review CVID bronchiectasis spirometry surveillance scheduling. Document HAE attack frequency and prophylaxis adherence (lanadelumab/berotralstat/C1-INH). Review Q4 IVIG/SCIG IgG trough levels for CVID patients.',
  },
  {
    phase: 'November',
    title: 'Anaphylaxis Follow-Up Audit',
    tasks: 'Complete annual anaphylaxis follow-up documentation rate audit (AAAAI benchmark ≥95% — epinephrine auto-injector prescription, allergist referral, medical ID). Review food allergy action plan documentation completeness. Complete JC allergy practice standards annual compliance review.',
  },
  {
    phase: 'December',
    title: 'Annual Outcomes Report & ABAI Prep',
    tasks: 'Compile annual allergy/immunology practice outcomes report — asthma control rate (ACT ≥20 target), AIT reaction rate, biologic exacerbation reduction, PIDD infection rate. Review ABAI MOC triennial exam schedule. Prepare next-year GINA step-up/step-down protocol updates.',
  },
]

const kpis = [
  { metric: '<0.1%', label: 'AIT Systemic Reaction Rate' },
  { metric: 'ACT ≥20', label: 'Severe Asthma Control Target' },
  { metric: '≥95%', label: 'Anaphylaxis Follow-Up Rate' },
  { metric: 'IgG ≥700', label: 'CVID IgG Trough (mg/dL)' },
  { metric: '≤1/year', label: 'Exacerbation Rate on Biologic' },
  { metric: '≤2/year', label: 'CVID Sinopulmonary Infections' },
]

const testimonial = {
  quote: 'Allergy and immunology practice compliance requires AAAAI/ACAAI annual CE, ABAI MOC annual activities, GINA guideline review, annual SCIT anaphylaxis drill, OSHA Bloodborne Pathogen renewal, AIT reaction rate monitoring, omalizumab REMS compliance, biologic eosinophil monitoring, dupilumab conjunctivitis protocol, Palforzia OIT REMS, PIDD USIDNET registry, CVID IgG trough tracking, and HAE attack frequency documentation — all simultaneously. Momenties consolidated every deadline. Our practice achieved zero anaphylaxis complications and top-quartile severe asthma ACT scores.',
  author: 'Medical Director, Allergy and Immunology Practice',
  role: 'ABAI Board-Certified Academic Allergy and Immunology Program',
}

export default function AllergyImmunologyPracticeCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Allergy Immunology Practice Calendar"
        title="Every AIT Safety Deadline. Every Biologic REMS Renewal. One Calendar."
        subtitle="Allergy and immunology practices manage one of the most safety-intensive compliance portfolios in ambulatory medicine — annual SCIT anaphylaxis drills, OSHA Bloodborne Pathogen renewals, omalizumab REMS compliance, biologic eosinophil monitoring, Palforzia OIT REMS, PIDD USIDNET registry, CVID IgG trough tracking, ABAI MOC annual activities, and GINA guideline reviews. Momenties automates every deadline so your practice achieves top-quartile safety and asthma outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Allergy Immunology Practice Compliance Lifecycle
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
              The Allergy Immunology Practice Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every REMS renewal, AIT safety drill, biologic monitoring deadline, PIDD registry submission, and ABAI MOC activity — sequenced across 12 months.
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
              The 6 KPIs That Define Allergy Immunology Practice Excellence
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
        headline="Ready to Achieve Zero AIT Anaphylaxis Complications?"
        subtext="Join allergy and immunology practices using Momenties to automate every REMS, AIT safety, and ABAI MOC deadline. Free to start."
      />
    </main>
  )
}
