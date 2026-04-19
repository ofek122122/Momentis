import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Clinical Trials Office Compliance Calendar | Momenties',
  description: 'Automate IRB annual continuing review deadlines, FDA IND/NDA annual report submissions, protocol amendment tracking, GCP training renewals, sponsor monitoring visit scheduling, SAE 15/7-day reporting, CTMS audit preparation, and research compliance deadlines.',
}

const pillars = [
  {
    icon: Target,
    title: 'IRB Continuing Review & Protocol Management',
    description: 'Annual IRB continuing review deadline tracking for all active protocols (45 CFR 46 — federal requirement: annual review for minimal risk, more frequent for greater-than-minimal risk); quarterly new protocol submission tracking and IRB board meeting calendar alignment; annual OHRP (Office for Human Research Protections) assurance renewal (FWA — Federal Wide Assurance, 3-year renewal cycle); protocol amendment submission tracking — IRB approval before implementation (21 CFR 312.66); quarterly IRB deviation/protocol violation documentation and reportable new information (RNI) submission; annual informed consent form revision for protocol updates; annual IRB exemption re-evaluation for qualifying studies; and annual IRB member GCP training renewal documentation for board members (ICH E6(R3) Good Clinical Practice compliance).',
  },
  {
    icon: RefreshCw,
    title: 'FDA IND/IDE Reporting & Annual Report Deadlines',
    description: 'Annual FDA IND (Investigational New Drug) annual report — due within 60 days of IND anniversary date (21 CFR 312.33) — protocol summary, IND safety reports, manufacturing changes, clinical study summaries; annual IDE (Investigational Device Exemption) annual report — due within 60 days of IDE anniversary (21 CFR 812.150(b)); SAE/SUSAR 15-day expedited safety report to FDA (unexpected serious adverse reaction) and 7-day fatal/life-threatening SUSAR; IND safety report distribution to all co-investigators within 15 calendar days; annual Form FDA 1572 update for investigator and site changes; annual DSMB/DMC (Data Safety Monitoring Board) charter annual review and meeting documentation; quarterly IND annual report preparation tracking (subject enrollment, adverse events, protocol deviations); and biennial NDA/BLA supplemental application tracking for approved drug expanded use studies.',
  },
  {
    icon: TrendingUp,
    title: 'GCP Training & Regulatory Compliance',
    description: 'Biennial GCP (Good Clinical Practice) training renewal for all research staff — ICH E6(R3) 2023 revision implementation (updated monitoring, trial master file, data integrity standards); annual CITI Program (Collaborative Institutional Training Initiative) module renewals — Human Subjects Research, Conflicts of Interest, HIPAA; annual research staff training documentation — protocol-specific training before first patient contact; annual financial conflict of interest (FCOI) disclosure and management plan review (42 CFR 50 — PHS-funded research: annual disclosure, 60-day management plan); quarterly Form FDA 1572 financial disclosure update; annual ClinicalTrials.gov results reporting deadline compliance (FDAAA 801 — results due 12 months after primary completion date); quarterly enrollment and retention metric reporting; and annual research misconduct training for all federally funded research staff.',
  },
  {
    icon: BarChart3,
    title: 'Sponsor Monitoring, Audit & Quality Metrics',
    description: 'Quarterly sponsor monitoring visit preparation — essential document file completeness (ICH E6 Trial Master File), source document verification, drug/device accountability reconciliation; annual FDA inspection preparation — Form 1572 currency, consent form compliance, protocol deviation documentation completeness; annual AAHRPP (Association for the Accreditation of Human Research Protection Programs) accreditation renewal documentation (3-year cycle); quarterly enrollment rate tracking per protocol milestone (≥80% target enrollment at 50% of study duration — industry benchmark); quarterly protocol deviation classification and trending (major vs. minor — CAPA documentation); monthly investigational product (IP) accountability audit — receipt, storage temperature logs, dispensing records, return/destruction documentation; quarterly randomization code break documentation; and annual CTO (Clinical Trials Office) quality management system (QMS) internal audit.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'IND Annual Report Tracking Review',
    tasks: 'Audit all active IND anniversary dates for Q1 annual reports (due within 60 days of anniversary). Update IND annual report preparation tracker. Confirm IDE annual report deadlines. Review GCP training expiration schedule for Q1 renewals.',
  },
  {
    phase: 'February',
    title: 'IRB Continuing Review Coordination',
    tasks: 'Confirm all IRB continuing review submission deadlines for Q2 protocols. Prepare continuing review documents — protocol status, enrollment, adverse events, risk-benefit reassessment. Submit annual OHRP FWA renewal if applicable. Review Form FDA 1572 for any site personnel changes.',
  },
  {
    phase: 'March',
    title: 'Q1 Safety Report Audit & GCP Renewals',
    tasks: 'Complete Q1 SAE and SUSAR reporting compliance audit (15-day/7-day deadlines). Confirm biennial GCP/ICH E6(R3) training renewals for Q2 expirations. Review Q1 protocol deviation classification and CAPA documentation. Audit IP accountability records.',
  },
  {
    phase: 'April',
    title: 'ClinicalTrials.gov Results Reporting',
    tasks: 'Audit all studies with primary completion dates in prior 12 months for results reporting compliance (FDAAA 801 — results due 12 months post-completion). Review ClinicalTrials.gov registration for all applicable studies. Update enrollment and completion records. Complete FCOI annual disclosure review.',
  },
  {
    phase: 'May',
    title: 'Sponsor Monitoring Preparation',
    tasks: 'Prepare for Q2 sponsor monitoring visits — essential document files, source document binders, IP accountability logs, consent form versions. Complete protocol deviation trending report. Review DSMB charter and confirm next meeting schedule. Update staff training documentation.',
  },
  {
    phase: 'June',
    title: 'Q2 Enrollment & Retention Review',
    tasks: 'Complete Q2 enrollment rate audit vs. protocol milestones (≥80% target at 50% study duration). Submit Q2 sponsor progress reports. Review IRB continuing review deadlines for Q3 protocols. Complete CITI Program renewals for Q3 expirations. Audit randomization code break documentation.',
  },
  {
    phase: 'July',
    title: 'AAHRPP Accreditation Prep',
    tasks: 'Begin annual AAHRPP accreditation renewal documentation review (3-year cycle). Assess human research protection program policies against AAHRPP standards. Complete internal CTO QMS audit. Review IRB member GCP training compliance. Update IRB exemption re-evaluations.',
  },
  {
    phase: 'August',
    title: 'FDA Inspection Readiness Audit',
    tasks: 'Complete annual FDA inspection readiness audit — Form 1572 currency, consent form version control, protocol deviation completeness, IP accountability. Review 483 response protocols. Confirm NDA/BLA supplemental application tracking for expanded use studies. Update essential document filing.',
  },
  {
    phase: 'September',
    title: 'Q3 IND Report & Safety Compliance',
    tasks: 'Prepare Q3 IND annual reports (60-day deadline tracking). Audit Q3 SAE/SUSAR reporting timeliness. Complete financial COI annual disclosure review for PHS-funded staff. Review research misconduct training compliance for federally funded investigators. Submit Q3 enrollment reports to sponsors.',
  },
  {
    phase: 'October',
    title: 'IRB Annual Protocol Review Season',
    tasks: 'Submit Q4 IRB continuing review applications for all protocols with November–January anniversaries. Review new protocol submissions for Q4 IRB board meetings. Complete protocol amendment tracking audit. Confirm informed consent form revisions are current. Submit annual OHRP reporting.',
  },
  {
    phase: 'November',
    title: 'GCP Training & CITI Renewals',
    tasks: 'Complete biennial GCP training renewals before year-end for all research staff. Confirm CITI Program Human Subjects, COI, and HIPAA modules are current. Update protocol-specific training documentation for new study staff. Review ICH E6(R3) 2023 implementation status.',
  },
  {
    phase: 'December',
    title: 'Annual CTO Quality Report',
    tasks: 'Compile annual CTO quality metrics report — protocol deviations, enrollment performance, SAE timeliness, monitoring visit findings, IRB compliance rate. Review ClinicalTrials.gov results reporting compliance. Prepare IND/IDE annual report tracking for Q1. Update FCOI management plans for next year.',
  },
]

const kpis = [
  { metric: '15 Days', label: 'SAE/SUSAR Reporting Window' },
  { metric: '60 Days', label: 'IND Annual Report Deadline' },
  { metric: '100%', label: 'GCP Training Compliance Rate' },
  { metric: '≥80%', label: 'Protocol Enrollment Target' },
  { metric: '12 Months', label: 'ClinicalTrials.gov Results Deadline' },
  { metric: '3-Year', label: 'AAHRPP/FWA Renewal Cycle' },
]

const testimonial = {
  quote: 'Clinical trials office compliance requires tracking IND annual report anniversaries, IRB continuing review deadlines, FDA 15-day/7-day SAE reporting windows, ClinicalTrials.gov results posting deadlines, CITI Program renewal schedules, FCOI annual disclosure cycles, sponsor monitoring visit preparation, FDA 1572 currency for 40+ active protocols, AAHRPP accreditation maintenance, and enrollment milestone tracking across 60 concurrent studies. Momenties consolidated every deadline. Our CTO achieved zero FDA 483 findings and 100% SAE reporting timeliness.',
  author: 'Director, Clinical Trials Office',
  role: 'AAHRPP-Accredited Research Institution, Academic Medical Center',
}

export default function ClinicalTrialsOfficeCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Clinical Trials Office Calendar"
        title="Every IRB Deadline. Every IND Annual Report. One Calendar."
        subtitle="Clinical trials offices manage the most regulatory-intensive compliance portfolio in academic research — IRB continuing review deadlines, IND/IDE 60-day annual reports, FDA 15-day/7-day SAE reporting, ClinicalTrials.gov results posting, GCP biennial training renewals, FCOI annual disclosures, sponsor monitoring visit preparation, and AAHRPP accreditation maintenance across dozens of concurrent protocols. Momenties automates every deadline so your CTO achieves zero FDA 483 findings."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Clinical Trials Office Compliance Lifecycle
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
              The Clinical Trials Office Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every IRB submission, IND annual report, FDA safety deadline, training renewal, and monitoring visit — sequenced across 12 months.
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
              The 6 KPIs That Define Clinical Trials Office Excellence
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
        headline="Ready to Achieve Zero FDA 483 Findings?"
        subtext="Join clinical trials offices using Momenties to automate every IRB, IND, FDA safety report, and GCP training deadline. Free to start."
      />
    </main>
  )
}
