import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hemophilia Treatment Center Compliance Calendar | Momenties',
  description: 'Automate MASAC annual factor product review, ATHNdataset annual outcomes reporting, prophylaxis adherence quarterly monitoring, inhibitor surveillance annual Bethesda assay, emicizumab safety documentation, factor replacement REMS training, and HTC federal grant compliance deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'HTC Federal Grant Compliance & Accreditation',
    description: 'Annual HRSA (Health Resources and Services Administration) Hemophilia Treatment Center Program (HTCP) federal grant annual report — patient census, clinical outcomes, comprehensive care team staffing, health education activities; biennial HTCP site visit preparation and federal program review; annual MASAC (Medical and Scientific Advisory Council — National Hemophilia Foundation) annual recommendations review and implementation documentation; annual HTCP Hemophilia Core Competency training completion for all HTC team members; annual HTCP data reporting compliance — ATHNdataset outcome submission, factor utilization tracking; annual NHF (National Hemophilia Foundation) Annual Meeting CE attendance; annual CDC Division of Blood Disorders (DBD) population surveillance data contribution; and biennial HTCP federal performance measures compliance review — comprehensive care visit rate ≥90%, patient education documentation ≥85%.',
  },
  {
    icon: RefreshCw,
    title: 'Factor Product Safety & REMS Compliance',
    description: 'Annual recombinant factor VIII and IX product annual review — MASAC product recommendations update, biosimilar vs. brand switching protocol; annual emicizumab (Hemlibra) safety monitoring protocol review — anti-emicizumab antibody screening, aPTT interference documentation, concurrent factor product restriction (rFVIIa preferred over aPCC — thrombotic microangiopathy risk); annual fitusiran (Alhemo) safety REMS program training — antithrombin-reducing therapy, thrombosis risk monitoring; annual concizumab (Alhemo-class) REMS annual renewal; annual FEIBA/aPCC and NovoSeven/rFVIIa bypassing agent dosing protocol annual review for inhibitor patients; monthly factor product recall and lot number tracking; quarterly inhibitor (anti-FVIII or anti-FIX antibody) surveillance — annual Bethesda assay for all moderate-to-severe hemophilia patients; and annual von Willebrand disease (VWD) desmopressin (DDAVP) challenge annual protocol review.',
  },
  {
    icon: TrendingUp,
    title: 'Prophylaxis Adherence & Joint Outcomes',
    description: 'Quarterly prophylaxis adherence documentation — standard prophylaxis target: ≥80% adherence rate (MASAC recommendation); quarterly annualized bleed rate (ABR) documentation — target ABR ≤3 for prophylaxis patients (MASAC benchmark), ABR ≤1 for emicizumab-treated severe hemophilia A; quarterly joint health assessment documentation (HJHS — Hemophilia Joint Health Score) for all prophylaxis patients; annual musculoskeletal ultrasound or MRI for patients with target joints; annual physiotherapy consultation documentation for all patients with chronic arthropathy; quarterly FVIII/FIX peak and trough pharmacokinetic (PK)-guided prophylaxis dose optimization documentation; annual PROBE (Patient Reported Outcomes, Burdens and Experiences) survey completion for QoL tracking; and annual inhibitor rescue prophylaxis (ITI — immune tolerance induction) response documentation for inhibitor patients on ITI therapy.',
  },
  {
    icon: BarChart3,
    title: 'ATHNdataset Reporting & Outcomes Quality',
    description: 'Annual ATHNdataset (American Thrombosis and Hemostasis Network) outcome data submission — diagnosis, treatment type, adherence, bleeds, joint health, inhibitor status, QoL; annual NHF Steps for Living patient outcomes report participation; quarterly inhibitor incidence rate documentation — new inhibitor development rate (MASAC benchmark: FVIII inhibitor incidence ≤25% for previously untreated patients on recombinant products); annual ITI success rate documentation (full success: FVIII recovery ≥66%, t½ ≥6 hours, inhibitor titer <0.6 BU — Bonn Protocol); quarterly HCV and HIV serostatus documentation for older transfusion-exposed hemophilia patients; annual vaccination documentation — hepatitis A and B (2-dose series), meningococcal, pneumococcal for asplenic or immunocompromised; annual comprehensive care visit completion rate (HTCP benchmark ≥90%); and annual bleeding episode cause analysis — joint vs. soft tissue vs. CNS vs. surgical.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'MASAC Recommendations Review',
    tasks: 'Complete annual MASAC annual recommendations review for factor product updates, prophylaxis protocols, and emicizumab safety guidelines. Update factor product formulary per MASAC. Review inhibitor surveillance protocol. Schedule Q1 Bethesda assays.',
  },
  {
    phase: 'February',
    title: 'HRSA Annual Report Preparation',
    tasks: 'Begin HRSA HTCP federal grant annual report preparation — patient census, outcomes data, team staffing documentation. Compile ATHNdataset Q4 data for annual submission. Confirm federal performance measures compliance (≥90% comprehensive care visit rate).',
  },
  {
    phase: 'March',
    title: 'Q1 ABR & Prophylaxis Adherence Review',
    tasks: 'Complete Q1 annualized bleed rate documentation (target ≤3 prophylaxis patients, ≤1 emicizumab patients). Audit Q1 prophylaxis adherence rates (target ≥80%). Document HJHS joint health scores. Review factor product lot numbers for recalls.',
  },
  {
    phase: 'April',
    title: 'ATHNdataset Annual Submission',
    tasks: 'Submit annual ATHNdataset outcomes data — diagnosis, treatment, adherence, bleeds, inhibitor status, QoL. Complete NHF Steps for Living program data. Review inhibitor incidence rate vs. MASAC benchmark. Document HCV/HIV serostatus updates.',
  },
  {
    phase: 'May',
    title: 'REMS Annual Renewals',
    tasks: 'Complete annual emicizumab safety monitoring protocol review. Complete fitusiran REMS annual training. Review bypassing agent (FEIBA, NovoSeven) dosing protocols for inhibitor patients. Update aPCC thrombotic microangiopathy protocol for emicizumab-exposed patients.',
  },
  {
    phase: 'June',
    title: 'Q2 PK-Guided Prophylaxis Review',
    tasks: 'Complete Q2 FVIII/FIX pharmacokinetic documentation and dose optimization. Review Q2 joint health scores for target joint patients. Schedule musculoskeletal ultrasound/MRI for chronic arthropathy patients. Submit Q2 ATHNdataset quarterly data.',
  },
  {
    phase: 'July',
    title: 'NHF Annual Meeting CE',
    tasks: 'Attend NHF Annual Meeting — complete annual CE requirements. Collect updated MASAC product recommendations, gene therapy pipeline updates, PK-guided prophylaxis evidence. Update HTC protocols from conference. Complete HTCP Core Competency training.',
  },
  {
    phase: 'August',
    title: 'ITI Outcome Review & VWD Protocols',
    tasks: 'Document annual ITI success rate for inhibitor patients (full success criteria: FVIII recovery ≥66%, t½ ≥6 hours). Review VWD DDAVP challenge protocol. Complete annual vaccination documentation (HAV, HBV, meningococcal, pneumococcal). Update factor product switching protocols.',
  },
  {
    phase: 'September',
    title: 'Q3 Inhibitor Surveillance',
    tasks: 'Complete Q3 inhibitor surveillance Bethesda assays for all moderate-to-severe hemophilia patients. Document new inhibitor incidence. Review ITI protocol for new inhibitors. Complete Q3 adherence audit and ABR documentation. Submit Q3 ATHNdataset data.',
  },
  {
    phase: 'October',
    title: 'PROBE Survey & QoL Documentation',
    tasks: 'Administer annual PROBE patient-reported outcomes survey. Document QoL data for ATHNdataset. Review physiotherapy consultation completion rate for arthropathy patients. Update HJHS scoring for all prophylaxis patients. Prepare HTCP site visit documentation.',
  },
  {
    phase: 'November',
    title: 'HRSA Performance Measures Audit',
    tasks: 'Complete biennial HTCP federal performance measures compliance review. Audit comprehensive care visit completion rate (≥90% HRSA benchmark). Review patient education documentation rate (≥85%). Confirm CDC DBD population surveillance data submission. Update HTCP team staffing documentation.',
  },
  {
    phase: 'December',
    title: 'Annual Report & Factor Formulary Review',
    tasks: 'Complete annual HRSA HTCP grant report submission. Submit Q4 ATHNdataset data. Finalize annual ABR, inhibitor incidence, and QoL outcome report. Review MASAC December product recommendations. Update factor formulary and biosimilar switching protocols for next year.',
  },
]

const kpis = [
  { metric: 'ABR ≤3', label: 'Prophylaxis Annualized Bleed Rate' },
  { metric: '≥80%', label: 'Prophylaxis Adherence Rate' },
  { metric: '≥90%', label: 'Comprehensive Care Visit Rate' },
  { metric: '≤25%', label: 'New Inhibitor Incidence (PUPs)' },
  { metric: 'ABR ≤1', label: 'Emicizumab Target Bleed Rate' },
  { metric: 'Annual', label: 'ATHNdataset Submission' },
]

const testimonial = {
  quote: 'Hemophilia treatment center compliance requires MASAC annual product review, HRSA HTCP federal grant reporting, ATHNdataset annual submission, quarterly prophylaxis adherence monitoring, quarterly ABR documentation, quarterly Bethesda assay surveillance, emicizumab safety protocol review, fitusiran REMS training, ITI success rate tracking, PROBE annual QoL surveys, vaccination documentation, and biennial HTCP site visit preparation — all simultaneously. Momenties consolidated every deadline. Our HTC achieved zero missed federal reporting deadlines and top-quartile ABR outcomes.',
  author: 'Medical Director, Hemophilia Treatment Center',
  role: 'HRSA-Designated Hemophilia Treatment Center, Academic Medical Center',
}

export default function HemophiliaTreatmentCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Hemophilia Treatment Center Calendar"
        title="Every MASAC Deadline. Every HRSA Report. One Calendar."
        subtitle="Hemophilia treatment centers manage the most federally regulated compliance portfolio in hematology — HRSA HTCP annual grant reports, ATHNdataset annual submissions, quarterly prophylaxis adherence monitoring, quarterly ABR documentation, annual inhibitor surveillance, emicizumab safety protocols, fitusiran REMS training, biennial federal performance measures reviews, and NHF annual CE. Momenties automates every deadline so your HTC achieves zero missed federal reporting deadlines."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full HTC Compliance Lifecycle
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
              The Hemophilia Treatment Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every HRSA report, ATHNdataset submission, REMS renewal, inhibitor surveillance, and federal performance review — sequenced across 12 months.
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
              The 6 KPIs That Define HTC Excellence
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
        headline="Ready to Achieve Zero Missed Federal Reporting Deadlines?"
        subtext="Join hemophilia treatment centers using Momenties to automate every HRSA, ATHNdataset, and MASAC compliance deadline. Free to start."
      />
    </main>
  )
}
