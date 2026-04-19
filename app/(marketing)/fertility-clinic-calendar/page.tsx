import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Fertility Clinic Compliance Calendar | Momenties',
  description: 'Track CDC ART Surveillance annual data submission, SART clinic membership data, CAP laboratory accreditation, ABOG/REI MOC deadlines, FDA tissue and donor screening compliance, ESHRE annual CE, and ASRM practice committee guideline annual review for fertility clinics.',
}

const pillars = [
  {
    icon: Target,
    title: 'CDC ART Surveillance & SART Reporting',
    description: 'Annual CDC Assisted Reproductive Technology (ART) Surveillance data submission — all ART cycles (IVF, frozen embryo transfer, donor egg, gestational carrier) reported via SART CORS by March 31 for prior calendar year, SART (Society for Assisted Reproductive Technology) clinic membership annual data validation, annual SART National Data Summary clinic-specific outcome reporting, annual ASRM (American Society for Reproductive Medicine) Practice Committee opinion and guideline annual review, and annual ESHRE (European Society of Human Reproduction and Embryology) Annual Meeting CE for international evidence updates.',
  },
  {
    icon: RefreshCw,
    title: 'CAP Accreditation & IVF Laboratory Standards',
    description: 'CAP (College of American Pathologists) IVF laboratory accreditation — biennial site visit with annual internal quality control review, annual CAP IVF laboratory proficiency testing — embryology and andrology PT cycles, annual CLIA IVF laboratory certification biennial renewal documentation, annual quality control documentation for all IVF laboratory equipment (incubators, laminar flow hoods, cryostorage tanks) — daily/weekly/monthly QC logs, annual cryo-storage inventory audit (embryo, sperm, oocyte) and lost specimen protocol review, and annual FDA 21 CFR Part 1271 human cell, tissue, and cellular product (HCT/P) compliance review.',
  },
  {
    icon: TrendingUp,
    title: 'Live Birth Rate & Outcome Benchmarks',
    description: 'Annual SART live birth rate per transfer by age cohort documentation — SART national average benchmark: <35 years ≥40% LBR, 35–37 years ≥32%, 38–40 years ≥22%, 41–42 years ≥12%, annual multiple birth rate monitoring (ASRM elective single embryo transfer target — twin rate ≤20%), monthly embryo utilization rate documentation (blastocyst rate and viable embryo rate per retrieval cycle), quarterly clinical pregnancy rate per transfer audit, annual miscarriage rate documentation by age cohort and embryo type (fresh vs. frozen), and annual FDA donor oocyte program annual outcomes report.',
  },
  {
    icon: BarChart3,
    title: 'FDA HCT/P Donor Screening & REMS',
    description: 'Annual FDA 21 CFR Part 1271 HCT/P compliance audit — anonymous donor sperm and egg: STI screening (HIV, HBV, HCV, syphilis, gonorrhea, chlamydia, CMV) within 7 days of donation, annual sperm bank third-party vendor compliance audit (FDA inspection records and adverse event reporting), annual gestational carrier screening protocol review per ASRM practice committee guidelines, annual reproductive genetics CE for preimplantation genetic testing (PGT-A, PGT-M, PGT-SR) — ACMG guideline annual update review, annual endocrine disruptor and environmental exposure protocol review for male factor infertility workup, and annual ABOG REI MOC (Maintenance of Certification) December 31 deadline for physician directors.',
  },
]

const phases = [
  {
    period: 'Jan – Feb',
    title: 'CDC ART Data Submission Prep & Lab QC Audit',
    tasks: [
      'Annual CDC ART Surveillance data submission preparation — all prior year IVF cycles compiled in SART CORS for March 31 deadline; data quality audit for cycle start, retrieval, transfer, and outcome data completeness',
      'Annual CAP IVF laboratory accreditation internal review — compile all daily/weekly/monthly QC logs for incubators, laminar flow hoods, and cryostorage tanks for prior year',
      'Annual cryo-storage inventory audit — confirm all cryopreserved embryos, sperm, and oocytes have current consent, annual storage fee status, and accurate location documentation',
      'Annual OIG/LEIE and SAM.gov exclusion checks for all fertility clinic clinical staff',
      'Annual HIPAA training for all fertility clinic personnel including lab staff with access to donor-identified information',
      'Annual ABOG REI MOC planning — confirm all REI physician directors are on track for December 31 MOC deadline requirements',
    ],
  },
  {
    period: 'Mar – Apr',
    title: 'CDC ART Submission & SART Validation',
    tasks: [
      'CDC ART Surveillance annual data submission deadline March 31 — all prior year cycles submitted via SART CORS with complete outcome data',
      'SART clinic membership annual data validation — SART data coordinator review of submitted data for accuracy and completeness',
      'Annual FDA 21 CFR Part 1271 donor screening compliance audit — confirm all anonymous donor sperm and oocyte screening within required timeframes and all adverse event reports filed',
      'Annual IVF laboratory proficiency testing enrollment — CAP andrology and embryology PT cycle enrollment for current year',
      'Annual ASRM practice committee opinion annual review — update all clinical protocols affected by new ASRM guidelines effective in current year',
      'Q1 live birth rate per transfer audit by age cohort — compare to SART national averages and prior year clinic benchmarks',
    ],
  },
  {
    period: 'May – Jun',
    title: 'ESHRE Annual Meeting CE & Genetics Update',
    tasks: [
      'Annual ESHRE Annual Meeting CE documentation — European evidence updates in ART, embryology, and reproductive genetics for clinical and laboratory staff',
      'Annual ASRM Annual Meeting CE documentation — confirm all REI physicians and IVF laboratory directors have ASRM meeting CE documented',
      'Annual preimplantation genetic testing (PGT-A/PGT-M/PGT-SR) annual update CE — ACMG clinical genetics guideline updates for embryo biopsy indications and reporting',
      'Annual embryo utilization rate mid-year review — blastocyst rate, viable embryo rate, and frozen embryo bank growth vs. patient consents',
      'Annual gestational carrier screening protocol review — confirm current ASRM and ACOG practice committee guidance is incorporated into carrier screening and legal contract protocols',
      'Q2 multiple birth rate audit — confirm twin rate ≤20% target (ASRM eSET guidance) and document elective single embryo transfer rate by age cohort',
    ],
  },
  {
    period: 'Jul – Aug',
    title: 'CAP Accreditation Prep & Lab Equipment QC',
    tasks: [
      'Annual CAP IVF laboratory accreditation mid-year self-assessment — compile all incubator temperature logs, CO2 calibration records, and laminar flow hood monthly certifications for CAP accreditation file',
      'Annual IVF laboratory equipment preventive maintenance — incubator HEPA filter annual replacement, laminar flow hood annual certification, cryostorage Dewar annual inspection, and gas line leak testing documentation',
      'Annual sperm bank third-party vendor compliance audit — review FDA inspection reports and adverse event reporting records for all donor sperm sources used by clinic',
      'Annual SART national data summary mid-year review — compare clinic live birth rates to national SART benchmarks by age and cycle type',
      'Annual miscarriage rate documentation audit by age cohort and embryo type — compare aneuploidy rates in PGT-A-screened vs. unscreened embryos',
      'Annual endocrine disruptor exposure protocol review for male factor infertility — environmental and lifestyle counseling protocol update',
    ],
  },
  {
    period: 'Sep – Oct',
    title: 'FDA Compliance Audit & Accreditation Prep',
    tasks: [
      'Annual FDA 21 CFR Part 1271 HCT/P annual compliance audit — review all donor screening records, adverse event reports, and tissue bank documentation for regulatory compliance',
      'Annual CAP accreditation documentation compilation — if biennial site visit due in current or upcoming year, compile full accreditation documentation package',
      'Annual CLIA IVF laboratory biennial certification renewal documentation (if renewal year) — compile all required CLIA documentation for certificate renewal',
      'Annual donor oocyte program annual outcomes report — live birth rate by donor age cohort, anonymous vs. known donor, and fresh vs. vitrified oocyte outcomes',
      'Annual fertility preservation outcomes report — all social egg freezing and oncofertility patients with 5-year follow-up data compiled',
      'Annual cryopreserved embryo patient consent renewal review — identify all patients with cryopreserved embryos whose annual storage consent is due for renewal',
    ],
  },
  {
    period: 'Nov – Dec',
    title: 'Year-End MOC Deadlines & SART Data Prep',
    tasks: [
      'Annual ABOG REI Maintenance of Certification (MOC) December 31 deadline — confirm all REI physician directors have completed all required MOC components including Self-Assessment modules and knowledge check',
      'Annual SART CORS data preparation for upcoming March 31 CDC submission — begin Q4 cycle data entry and outcome tracking for all current year cycles',
      'Annual fertility clinic quality improvement annual report — compile live birth rates, multiple birth rates, miscarriage rates, PGT-A utilization, and laboratory KPIs for medical director and board review',
      'Annual IVF laboratory staff CE annual verification — confirm all embryologists and andrologists have completed required annual CE for CAP accreditation staff training documentation',
      'Annual genetics and preimplantation testing counseling protocol review — ACMG and ASRM annual guideline update integration into patient counseling materials and consent forms',
      'Annual patient satisfaction survey annual results review — compile patient experience data for SART quality program and clinic continuous improvement initiatives',
    ],
  },
]

const kpis = [
  { metric: 'March 31', label: 'CDC ART Annual Submission Deadline', description: 'Hard SART/CDC deadline — late submission triggers SART membership review and removes clinic from national data publication' },
  { metric: '≥40%', label: 'Live Birth Rate/Transfer (<35 Years)', description: 'SART national benchmark for patients under 35 — below-average LBR triggers SART clinic performance review and patient disclosure requirement' },
  { metric: '≤20%', label: 'Twin Birth Rate (eSET Target)', description: 'ASRM elective single embryo transfer quality target — twin rate above 20% triggers mandatory eSET protocol review and patient counseling documentation audit' },
  { metric: '100%', label: 'FDA HCT/P Donor Screening Compliance', description: 'FDA 21 CFR Part 1271 requirement — any screening gap for anonymous donors triggers mandatory FDA adverse event report and potential clinic inspection' },
  { metric: 'Dec 31', label: 'ABOG REI MOC Annual Deadline', description: 'ABOG annual MOC requirement for board-certified REI physician directors — missed MOC triggers loss of ABOG certification status' },
  { metric: '≥95%', label: 'Cryo-Storage Consent Currency', description: 'CAP accreditation standard — expired embryo storage consents trigger mandatory patient contact and legal hold protocol; non-compliance is a CAP citation' },
]

const testimonial = {
  quote: 'Fertility clinic compliance runs on the March 31 CDC ART data submission deadline, annual SART validation, quarterly live birth rate tracking, CAP IVF laboratory biennial accreditation with continuous QC documentation, FDA donor screening compliance, annual CLIA renewal, monthly multiple birth rate monitoring, annual PGT genetics counseling updates, December ABOG REI MOC deadline, and cryopreserved embryo annual consent renewals — all simultaneously. Momenties mapped every deadline. Our clinic achieved SART national average live birth rates and zero FDA compliance citations for four consecutive years.',
  author: 'IVF Program Medical Director, MD, REI',
  role: 'SART Member Fertility Clinic, Reproductive Endocrinology and Infertility Program',
}

export default function FertilityClinicCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Compliance Calendar for Fertility Clinics"
        title="CDC ART Submission. SART Data. CAP Laboratory. Live Birth Rates. One Calendar."
        subtitle="Fertility clinic compliance is a year-round multi-deadline discipline — March 31 CDC ART submission, quarterly live birth rate monitoring, CAP IVF laboratory accreditation with continuous QC documentation, FDA donor screening compliance, annual CLIA renewal, multiple birth rate tracking, PGT genetics counseling updates, and December ABOG REI MOC deadlines. Momenties maps every SART, CAP, FDA, and CMS milestone so your fertility program achieves top benchmarks and maintains accreditation year after year."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            End-to-End Fertility Clinic Compliance Coverage
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

      {/* Timeline */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              12-Month Fertility Clinic Compliance Calendar
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              From January ART data prep through December MOC deadline &mdash; every CDC, SART, CAP, FDA, and ABOG milestone mapped.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {phases.map((phase) => (
                <div key={phase.period} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px 28px', alignItems: 'start' }}>
                  <div>
                    <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{phase.period}</div>
                    <div style={{ color: '#f0ece3', fontWeight: 600, fontSize: '1rem', lineHeight: 1.35 }}>{phase.title}</div>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem', color: '#a0998e', lineHeight: 1.55 }}>
                        <span style={{ color: '#c5a35c', marginTop: 3, flexShrink: 0 }}>▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            The KPIs SART, CDC, and CAP Measure Your Fertility Program By
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {kpis.map(({ metric, label, description }) => (
              <div key={label} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c5a35c', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>{metric}</div>
                <div style={{ fontWeight: 600, fontSize: '0.97rem', color: '#f0ece3', marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55 }}>{description}</div>
              </div>
            ))}
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
        headline="Ready for Zero FDA Citations and Top SART Benchmarks?"
        subtext="Join fertility clinics using Momenties to automate every CDC, SART, CAP, and ABOG deadline. Free to start."
      />
    </main>
  )
}
