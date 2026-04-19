import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Comprehensive Cancer Center Compliance Calendar | Momenties',
  description: 'Automate NCI Comprehensive Cancer Center designation renewal, NCDB annual case completeness, COC accreditation triennial review, tumor board documentation, clinical trial enrollment metrics, REMS program compliance, multidisciplinary conference rates, and cancer program quality benchmarks.',
}

const pillars = [
  {
    icon: Target,
    title: 'NCI Designation & COC Accreditation',
    description: 'Annual NCI Comprehensive Cancer Center (CCC) designation renewal documentation — research grants portfolio (≥$22M peer-reviewed cancer funding), cancer prevention research, cancer control/population science, shared resources compliance (biorepository, genomics, imaging, biostatistics); biennial COC (Commission on Cancer) accreditation renewal — all 34 quality measures, tumor registry completeness ≥90%, multidisciplinary conference documentation ≥75% of analytic cases; annual ASCO Quality Oncology Practice Initiative (QOPI) quality reporting — 33 QOPI measures submission; annual NAPBC (National Accreditation Program for Breast Centers) breast program standard compliance review; annual ACOS NQMR (National Quality Measurement Reporting) submission; annual NCI Designated Cancer Center peer review preparation; and annual cancer program report for board of directors including quality, research, and community benefit metrics.',
  },
  {
    icon: RefreshCw,
    title: 'Tumor Registry, NCDB & Commission on Cancer Metrics',
    description: 'Quarterly NCDB (National Cancer Data Base) case submission — ≥90% completeness within 6 months of diagnosis (COC standard); quarterly abstracting quality review and inter-rater reliability audit; annual NCDB benchmark report review for each disease site — lung, breast, colorectal, prostate, bladder, melanoma; annual RQRS (Rapid Quality Reporting System) monthly quality reporting for breast, colon, and rectal cancer cases; annual ACS NQMR cross-site comparison for concordance with NCDB data; quarterly SEER (Surveillance, Epidemiology, and End Results) data submission for NCI-designated centers; quarterly cancer registry certification compliance — CTR (Certified Tumor Registrar) staffing requirements; and annual follow-up rate documentation (COC: ≥90% of analytic cases with vital status follow-up at 1, 2, 5 years).',
  },
  {
    icon: TrendingUp,
    title: 'Clinical Trial Enrollment & Research Compliance',
    description: 'Annual NCI cooperative group clinical trial enrollment documentation — NCI benchmark ≥4% of analytic cases enrolled on clinical trials (Comprehensive Cancer Center target ≥10%); annual IND/IDE annual report submission for investigator-initiated trials within 60 days of anniversary; annual IRB continuing review deadline tracking for all active cancer protocols; annual CTEP (Cancer Therapy Evaluation Program) registration and agreement compliance; quarterly GCP training renewal audit for all research staff; quarterly protocol deviation and SAE reporting timeliness audit (SAE 15-day/7-day FDA reporting); annual NCI CTEP agent accountability and drug inventory reconciliation; and annual translational research program metrics — tissue banking, genomic sequencing enrollment, biomarker correlative study participation.',
  },
  {
    icon: BarChart3,
    title: 'Multidisciplinary Conferences & Quality Programs',
    description: 'Quarterly MDT tumor board presentation rate documentation — COC standard ≥75% of analytic cases prospectively presented at multidisciplinary conference; quarterly site-specific tumor board participation documentation (breast, thoracic, GI, GU, head and neck, sarcoma, neuro-oncology, gynecologic); annual ASCO distress thermometer/NCCN Distress Screening implementation documentation (ASCO guideline: screen all cancer patients at diagnosis and major transitions); annual ASCO fertility preservation counseling rate documentation (ASCO guideline ≥95% for reproductive-age patients on gonadotoxic therapy); annual pain management quality indicator documentation (NCI PDQ palliative care guidelines); annual genetics/hereditary cancer program referral rate documentation — BRCA1/2, Lynch syndrome, PALB2, ATM; annual survivorship care plan completion rate (COC standard: written survivorship care plan for all Stage I–III patients completing curative therapy); and annual cancer prevention and early detection community outreach documentation.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'NCI Designation & QOPI Review',
    tasks: 'Complete annual NCI CCC designation metrics review — research grants portfolio, shared resources compliance. Submit Q4 NCDB cases. Review ASCO QOPI 33-measure compliance for annual reporting. Schedule Q1 tumor board case documentation audit.',
  },
  {
    phase: 'February',
    title: 'NCDB Completeness Audit',
    tasks: 'Complete Q4/annual NCDB benchmark report review for all disease sites. Audit completeness rate (target ≥90% within 6 months). Review RQRS monthly quality reporting for breast/colon/rectal cases. Update CTR staffing and certification compliance.',
  },
  {
    phase: 'March',
    title: 'Q1 Clinical Trial Enrollment Review',
    tasks: 'Complete Q1 clinical trial enrollment rate documentation (NCI benchmark ≥10% for CCC). Audit IND/IDE annual report deadlines (60-day window). Review IRB continuing review schedule for Q2 cancer protocols. Submit Q1 NCDB case data. Review SAE timeliness.',
  },
  {
    phase: 'April',
    title: 'COC Accreditation Preparation',
    tasks: 'Begin biennial COC accreditation renewal documentation. Audit all 34 quality measures. Review tumor board presentation rate (≥75% analytic cases). Confirm survivorship care plan completion rate. Prepare NCDB follow-up rate documentation (≥90% vital status at 5 years).',
  },
  {
    phase: 'May',
    title: 'NAPBC & Disease Site Program Reviews',
    tasks: 'Complete annual NAPBC breast program standards compliance review. Review site-specific tumor board participation — breast, thoracic, GI, GU, head and neck. Complete distress screening implementation audit. Review Q2 fertility preservation counseling documentation rate.',
  },
  {
    phase: 'June',
    title: 'Q2 Registry & Research Review',
    tasks: 'Complete Q2 NCDB/SEER case submission. Review Q2 clinical trial enrollment. Complete GCP training renewal audit for research staff. Review IRB deviation and SAE reporting timeliness. Submit Q2 RQRS quality data. Audit inter-rater abstracting reliability.',
  },
  {
    phase: 'July',
    title: 'Annual Cancer Program Report',
    tasks: 'Prepare annual cancer program report for board — quality, research, community benefit metrics. Review NCI CCC peer review preparation. Complete ASCO QOPI annual submission (33 measures). Document NCI cooperative group trial accrual vs. benchmarks.',
  },
  {
    phase: 'August',
    title: 'Genetics Program & Hereditary Cancer Review',
    tasks: 'Complete annual hereditary cancer genetics referral rate documentation (BRCA1/2, Lynch syndrome, PALB2, ATM). Review genetic counseling program volume and turnaround times. Audit cascade testing documentation for BRCA/Lynch positive probands. Review molecular tumor board participation.',
  },
  {
    phase: 'September',
    title: 'Q3 Tumor Board & Survivorship Audit',
    tasks: 'Complete Q3 tumor board presentation rate audit (COC ≥75% analytic cases). Review survivorship care plan completion rate (COC: written plan for all Stage I–III completing curative therapy). Document NCCN distress screening rates. Submit Q3 NCDB and SEER data.',
  },
  {
    phase: 'October',
    title: 'NCI Research Compliance Review',
    tasks: 'Complete annual CTEP registration and agreement compliance review. Complete annual NCI CTEP drug inventory and agent accountability reconciliation. Review IND annual report filing compliance (60-day windows). Update translational research tissue banking and genomic sequencing enrollment.',
  },
  {
    phase: 'November',
    title: 'NCDB Benchmark Report Review',
    tasks: 'Review annual NCDB benchmark comparison reports for all disease sites vs. national averages. Identify quality improvement opportunities. Complete Q4 RQRS reporting. Review pain management quality indicator documentation per NCI PDQ guidelines. Prepare COC renewal summary.',
  },
  {
    phase: 'December',
    title: 'Annual Metrics Report & COC Prep',
    tasks: 'Compile annual cancer program quality metrics — trial enrollment, tumor board rates, NCDB completeness, survivorship plan completion, distress screening, fertility counseling. Finalize NCI CCC designation documentation. Prepare next-year quality improvement targets. Submit Q4 NCDB.',
  },
]

const kpis = [
  { metric: '≥90%', label: 'NCDB Case Completeness Rate' },
  { metric: '≥75%', label: 'Tumor Board Presentation Rate' },
  { metric: '≥10%', label: 'Clinical Trial Enrollment (CCC)' },
  { metric: '≥90%', label: '5-Year Follow-Up Rate' },
  { metric: '≥95%', label: 'Survivorship Plan Completion' },
  { metric: '≥95%', label: 'Fertility Counseling Rate' },
]

const testimonial = {
  quote: 'Comprehensive cancer center compliance requires NCI CCC designation annual metrics, biennial COC 34-measure accreditation, quarterly NCDB completeness audits, RQRS monthly quality reporting, ASCO QOPI annual submission, tumor board quarterly documentation, ≥10% clinical trial enrollment tracking, IND/IDE annual report deadlines, IRB continuing review schedules, survivorship care plan completion, distress screening rates, fertility preservation counseling, genetics referral documentation, and NAPBC breast program standards — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥96% NCDB completeness and zero COC findings.',
  author: 'Cancer Program Director',
  role: 'NCI-Designated Comprehensive Cancer Center, Academic Medical Center',
}

export default function ComprehensiveCancerCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Comprehensive Cancer Center Calendar"
        title="Every NCI Designation Deadline. Every COC Metric. One Calendar."
        subtitle="Comprehensive cancer centers manage the most accreditation-intensive compliance portfolio in oncology — NCI CCC designation documentation, biennial COC 34-measure accreditation, quarterly NCDB completeness audits, RQRS monthly reporting, ASCO QOPI annual submission, clinical trial enrollment tracking, tumor board documentation, survivorship care plans, and distress screening compliance. Momenties automates every deadline so your cancer program achieves zero COC findings."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Comprehensive Cancer Center Compliance Lifecycle
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
              The Comprehensive Cancer Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every NCI designation metric, NCDB submission, COC accreditation milestone, clinical trial deadline, and tumor board audit — sequenced across 12 months.
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
              The 6 KPIs That Define Comprehensive Cancer Center Excellence
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
        headline="Ready to Achieve Zero COC Accreditation Findings?"
        subtext="Join comprehensive cancer centers using Momenties to automate every NCI designation, NCDB, and COC compliance deadline. Free to start."
      />
    </main>
  )
}
