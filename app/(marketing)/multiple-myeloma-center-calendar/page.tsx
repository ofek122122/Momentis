import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Multiple Myeloma Center Compliance Calendar | Momenties',
  description: 'Automate IMiD REMS annual training, IMWG quarterly response documentation, CAR-T REMS compliance, MRD assessment scheduling, CoMMpass registry data submission, ASH annual CE, autologous stem cell transplant program accreditation, and NCDB myeloma quality metrics.',
}

const pillars = [
  {
    icon: Target,
    title: 'Program Accreditation & IMWG Standards',
    description: 'Annual FACT (Foundation for the Accreditation of Cellular Therapy) accreditation compliance review for autologous SCT and CAR-T cell therapy programs; annual NMDP/Be The Match partnership compliance for allogeneic SCT programs; annual IMWG (International Myeloma Working Group) consensus criteria annual update review — response criteria, MRD standardization, diagnostic criteria, treatment recommendations; annual MMRF (Multiple Myeloma Research Foundation) CoMMpass registry annual data submission compliance; annual ASH (American Society of Hematology) Annual Meeting myeloma session CE for all program faculty; annual IMF (International Myeloma Foundation) nurse summit CE requirement; annual NCDB (National Cancer Data Base) myeloma case submission ≥90% completeness within 6 months of diagnosis; and biennial myeloma program COC (Commission on Cancer) accreditation requirements review.',
  },
  {
    icon: RefreshCw,
    title: 'IMiD REMS, CAR-T REMS & Safety Compliance',
    description: 'Annual RevAssist/REMS program training renewal for all myeloma prescribers — monthly pregnancy testing and contraception counseling for all lenalidomide/pomalidomide-treated females of reproductive potential; annual thalidomide STEPS REMS training renewal; annual CAR-T REMS compliance for cilta-cel (Carvykti REMS) and idecabtagene vicleucel (KymrIah REMS) — certified treatment site requirements, CRS/ICANS management training; annual belantamab mafodotin (Blenrep) REMS ocular monitoring protocol — monthly slit-lamp exam and BCVA before each dose; quarterly RevAssist REMS enrollment verification for all active lenalidomide/pomalidomide patients; annual bortezomib neuropathy monitoring protocol review — CIPN grading, dose reduction criteria (Grade 2: reduce dose; Grade 3: hold); annual carfilzomib cardiac monitoring protocol — baseline ECHO/MUGA, BP monitoring algorithm; and annual selinexor (Xpovio) nausea management protocol update.',
  },
  {
    icon: TrendingUp,
    title: 'MRD Assessment & Response Monitoring',
    description: 'Quarterly MRD assessment scheduling coordination — bone marrow NGS at 10⁻⁵ sensitivity (IMWG 2016 criteria) at post-induction, post-transplant, post-consolidation, and annual maintenance timepoints; quarterly IMWG response documentation — M-protein by SPEP (undetectable = CR), 24-hour urine UPEP, serum free light chain (FLC) ratio (normal 0.26–1.65); quarterly ISS/R-ISS staging documentation for NCDB registry; monthly β₂-microglobulin and LDH trending for risk stratification; quarterly whole-body PET/CT for extramedullary disease surveillance; annual bone marrow biopsy for cytogenetics/FISH — del(17p), t(4;14), t(14;16), 1q amplification — high-risk feature documentation; annual SMM (smoldering myeloma) risk stratification update (Mayo 20/2/20 criteria: M-protein ≥2 g/dL, FLC ratio ≥20, BMPC ≥20%); and quarterly treatment sequencing documentation for RRMM (relapsed/refractory) cases.',
  },
  {
    icon: BarChart3,
    title: 'CoMMpass Registry & Transplant Outcomes',
    description: 'Annual MMRF CoMMpass registry genomic sequencing enrollment documentation; quarterly NCDB myeloma case submission review (≥90% completeness); annual autologous SCT 100-day overall survival documentation (FACT benchmark: ≥90% 100-day OS); annual CAR-T 100-day CRS/ICANS toxicity report for REMS compliance; quarterly ASCT engraftment documentation — neutrophil engraftment ≤14 days, platelet engraftment ≤21 days (FACT benchmark); annual second autologous SCT eligibility and outcomes tracking for relapsed patients; annual PBSC collection mobilization protocol compliance documentation (G-CSF + plerixafor — target ≥2 × 10⁶ CD34+ cells/kg); annual myeloma multidisciplinary case conference participation documentation (NCCN guideline — all new diagnoses and complex RRMM cases discussed at MDT); and annual clinical trial enrollment rate documentation (NCI benchmark ≥10% of myeloma patients on clinical trials).',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'IMWG Guidelines Review',
    tasks: 'Complete annual IMWG consensus criteria update review — response criteria, MRD standardization, diagnostic criteria. Update VRd and Dara-VRd induction protocols. Review SMM Mayo 20/2/20 risk stratification protocol. Schedule Q1 MRD assessments for post-induction patients.',
  },
  {
    phase: 'February',
    title: 'IMiD REMS Annual Training',
    tasks: 'Complete annual RevAssist REMS training renewal for all myeloma prescribers. Complete thalidomide STEPS REMS renewal. Verify REMS enrollment for all active lenalidomide/pomalidomide patients. Confirm monthly pregnancy testing and contraception counseling compliance.',
  },
  {
    phase: 'March',
    title: 'Q1 Response Monitoring & MRD Review',
    tasks: 'Complete Q1 IMWG response documentation — SPEP, UPEP, serum FLC ratios. Review Q1 MRD assessment results for post-transplant and consolidation patients. Audit Q1 NCDB myeloma case submission completeness. Submit Q1 CoMMpass registry genomic data.',
  },
  {
    phase: 'April',
    title: 'CAR-T REMS & Ocular Monitoring',
    tasks: 'Complete CAR-T REMS compliance review — Carvykti and KymrIah certified site requirements. Complete annual belantamab mafodotin Blenrep REMS ocular monitoring protocol review. Audit monthly slit-lamp and BCVA documentation for all active Blenrep patients. Update CRS/ICANS management protocols.',
  },
  {
    phase: 'May',
    title: 'FACT Accreditation & CoMMpass',
    tasks: 'Complete annual FACT accreditation compliance review for ASCT and CAR-T programs. Submit annual CoMMpass registry data. Review ASCT engraftment benchmarks (neutrophil ≤14 days, platelet ≤21 days). Audit 100-day OS (target ≥90%). Review PBSC mobilization protocol.',
  },
  {
    phase: 'June',
    title: 'Q2 High-Risk Cytogenetics Review',
    tasks: 'Complete Q2 FISH cytogenetics documentation audit — del(17p), t(4;14), t(14;16), 1q amplification for all new diagnoses. Review high-risk treatment intensification protocols. Document R-ISS staging completeness for NCDB. Review RRMM treatment sequencing for DPd/KPd protocols.',
  },
  {
    phase: 'July',
    title: 'ASH & IMF Annual Meeting CE',
    tasks: 'Attend ASH Annual Meeting preview sessions and IMF nurse summit — complete CE requirements. Collect updated IMWG consensus updates, CAR-T toxicity management, daratumumab + VRd evidence. Update myeloma center protocols from conference. Complete annual COC accreditation self-assessment.',
  },
  {
    phase: 'August',
    title: 'Bortezomib & Carfilzomib Safety Review',
    tasks: 'Complete annual bortezomib CIPN monitoring protocol review (Grade 2 dose reduction criteria). Complete annual carfilzomib cardiac monitoring protocol update (ECHO/MUGA baseline, BP algorithm). Review selinexor nausea management protocol. Audit REMS toxicity documentation completeness.',
  },
  {
    phase: 'September',
    title: 'Q3 MRD & SMM Risk Stratification',
    tasks: 'Complete Q3 MRD assessment scheduling for maintenance-phase patients. Review annual SMM risk stratification updates (Mayo 20/2/20 criteria). Document whole-body PET/CT scheduling for extramedullary disease surveillance. Submit Q3 NCDB case data. Review Q3 RRMM treatment responses.',
  },
  {
    phase: 'October',
    title: 'Clinical Trial Enrollment Audit',
    tasks: 'Complete annual clinical trial enrollment rate documentation (NCI benchmark ≥10% of myeloma patients). Review Q4 ASCT eligibility assessments (VRd induction ≥VGPR response). Complete biennial NMDP partnership compliance review. Document MDT conference participation rate.',
  },
  {
    phase: 'November',
    title: 'CAR-T Toxicity Annual Report',
    tasks: 'Complete annual CAR-T 100-day CRS/ICANS toxicity report for REMS compliance. Review REMS certification requirements for all CAR-T treating physicians and APPs. Complete belantamab mafodotin ophthalmic discontinuation criteria protocol review. Submit annual MMRF CoMMpass summary.',
  },
  {
    phase: 'December',
    title: 'Annual Outcomes Report & NCDB Audit',
    tasks: 'Compile annual myeloma program outcomes report — ORR, MRD negativity rates, PFS, ASCT 100-day OS, CAR-T toxicity rates. Finalize NCDB case submission completeness (≥90% within 6 months). Review annual IMWG response rate benchmarks. Prepare Q1 REMS renewal schedule.',
  },
]

const kpis = [
  { metric: '≥90%', label: 'ASCT 100-Day Overall Survival' },
  { metric: '≥95%', label: 'MRD Negativity Post-ASCT' },
  { metric: '100%', label: 'IMiD REMS Monthly Compliance' },
  { metric: '≥90%', label: 'NCDB Case Completeness' },
  { metric: '≥10%', label: 'Clinical Trial Enrollment Rate' },
  { metric: '≤14 days', label: 'Neutrophil Engraftment Target' },
]

const testimonial = {
  quote: 'Multiple myeloma center compliance requires IMWG annual guideline review, RevAssist REMS monthly monitoring for all lenalidomide patients, CAR-T REMS site certification, belantamab REMS monthly ophthalmic documentation, quarterly MRD assessment coordination, quarterly SPEP/FLC response tracking, annual FISH cytogenetics documentation, FACT accreditation maintenance, CoMMpass registry submissions, ASCT engraftment tracking, and NCDB case completeness monitoring — all simultaneously. Momenties consolidated every deadline. Our myeloma program achieved ≥96% post-ASCT MRD negativity and top-quartile NCDB outcomes.',
  author: 'Medical Director, Multiple Myeloma Program',
  role: 'FACT-Accredited Transplant and Cellular Therapy Center, Academic Medical Center',
}

export default function MultipleMyelomaCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Multiple Myeloma Center Calendar"
        title="Every IMiD REMS Deadline. Every MRD Assessment. One Calendar."
        subtitle="Multiple myeloma programs manage one of the most pharmacologically complex compliance portfolios in hematologic oncology — monthly IMiD REMS monitoring, quarterly MRD assessment coordination, CAR-T REMS certification, belantamab monthly ocular monitoring, IMWG quarterly response documentation, FACT accreditation maintenance, CoMMpass registry submissions, and ASH annual CE. Momenties automates every deadline so your program achieves top-quartile MRD negativity outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Multiple Myeloma Center Compliance Lifecycle
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
              The Multiple Myeloma Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every REMS renewal, MRD assessment, FACT accreditation milestone, CoMMpass submission, and CAR-T toxicity report — sequenced across 12 months.
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
              The 6 KPIs That Define Multiple Myeloma Center Excellence
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
        headline="Ready to Achieve ≥96% Post-ASCT MRD Negativity?"
        subtext="Join multiple myeloma programs using Momenties to automate every REMS, MRD, and FACT accreditation deadline. Free to start."
      />
    </main>
  )
}
