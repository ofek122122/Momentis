import { Activity, Droplet, ShieldCheck, ClipboardList } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Bone Marrow Failure Center Compliance Calendar | Momenties',
  description: 'Automate IBMTR/CIBMTR quarterly data submission, aplastic anemia IST horse-ATG/cyclosporine monitoring, MDS IPSS-R risk stratification, PNH eculizumab/ravulizumab surveillance, Diamond-Blackfan anemia transfusion protocols, eltrombopag monthly CBC tracking, and BMT transplant registry reporting deadlines.',
}

const pillars = [
  {
    icon: Activity,
    title: 'Aplastic Anemia IST & Eltrombopag Protocols',
    description: 'Severe aplastic anemia (SAA) immunosuppressive therapy (IST) compliance — horse-ATG (ATGAM) 40 mg/kg/day × 4 days plus cyclosporine A 12 mg/kg/day with target trough 200–400 ng/mL; weekly CBC with differential and reticulocyte count during induction, biweekly through month 3, monthly through month 6, then quarterly to evaluate hematologic response per NIH/EBMT criteria (complete vs. partial vs. non-response at 3 and 6 months); monthly eltrombopag (Promacta) CBC monitoring at 150 mg/day with hepatic function panel every 2 weeks for first 3 months per RACE trial protocol; quarterly cyclosporine trough levels with renal function (creatinine, magnesium, potassium); annual bone marrow biopsy with cytogenetics and PNH clone flow cytometry to monitor for clonal evolution to MDS/AML; serum sickness surveillance days 7–14 post-ATG; and annual reassessment for HSCT eligibility in non-responders aged ≤50 with matched sibling donor.',
  },
  {
    icon: ClipboardList,
    title: 'MDS IPSS-R Scoring & ESA Monitoring',
    description: 'Annual myelodysplastic syndrome IPSS-R (Revised International Prognostic Scoring System) re-stratification using cytogenetics, marrow blast %, hemoglobin, ANC, and platelet count to assign Very Low/Low/Intermediate/High/Very High risk categories; quarterly serum erythropoietin level documentation (response prediction threshold <500 mU/mL) for ESA candidacy; monthly CBC during epoetin alfa or darbepoetin alfa therapy with hemoglobin target 10–12 g/dL per NCCN guidelines; quarterly ferritin and transferrin saturation monitoring with iron chelation initiation (deferasirox/Exjade) when ferritin >1000 ng/mL or after 20+ pRBC transfusions; quarterly TP53, SF3B1, ASXL1, RUNX1 molecular testing for high-risk MDS; azacitidine 75 mg/m² SC days 1–7 every 28 days cycle tracking with response assessment after 4–6 cycles per IWG 2006 criteria; and luspatercept (Reblozyl) compliance for ring sideroblast MDS with monthly Q3W dosing.',
  },
  {
    icon: ShieldCheck,
    title: 'PNH Eculizumab/Ravulizumab Surveillance',
    description: 'Paroxysmal nocturnal hemoglobinuria (PNH) complement inhibitor compliance — biweekly eculizumab (Soliris) 900 mg IV q14d or every-8-week ravulizumab (Ultomiris) 3000–3600 mg IV maintenance; mandatory Neisseria meningitidis quadrivalent (MenACWY) and Serogroup B (MenB) vaccination ≥2 weeks before first dose with 5-year MenACWY booster and quarterly meningococcal symptom education documentation per REMS program; monthly LDH monitoring (target <1.5× ULN indicating intravascular hemolysis control), absolute reticulocyte count, and free hemoglobin; quarterly PNH clone size by high-sensitivity flow cytometry on RBCs and granulocytes (FLAER, CD55, CD59); annual D-dimer and thrombosis risk assessment; annual bone marrow biopsy to assess for evolving aplastic anemia or MDS; pegcetacoplan (Empaveli) compliance for C3-mediated extravascular hemolysis with twice-weekly SC dosing; and annual breakthrough hemolysis event reporting to International PNH Registry.',
  },
  {
    icon: Droplet,
    title: 'CIBMTR/IBMTR Registry Reporting',
    description: 'Center for International Blood and Marrow Transplant Research (CIBMTR) quarterly TED (Transplant Essential Data) and CRF (Comprehensive Report Form) submission for all allogeneic and autologous HSCT recipients within 100-day, 6-month, 1-year, and annual post-transplant intervals; FACT-JACIE accreditation triennial inspection preparation with quality management plan, donor eligibility documentation, cellular product release criteria, and adverse event reporting; annual NMDP/Be The Match unrelated donor search and HLA high-resolution typing compliance; quarterly Diamond-Blackfan anemia (DBA) transfusion protocol audit with corticosteroid response documentation, ferritin monitoring, and DBA Registry submission; annual Fanconi anemia chromosome breakage testing and androgen therapy (oxymetholone) compliance; quarterly post-HSCT chimerism analysis (donor/recipient STR), CMV/EBV/adenovirus PCR surveillance weekly through day +100; and annual aGVHD/cGVHD grading per NIH consensus criteria with steroid-refractory ruxolitinib (Jakafi) reporting.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual IPSS-R Re-Stratification & PNH Registry',
    tasks: 'Complete annual MDS IPSS-R risk re-stratification for all active MDS patients using updated cytogenetics, marrow blast %, hemoglobin, ANC, and platelet counts. Submit annual International PNH Registry breakthrough hemolysis event report. Schedule Q1 CIBMTR TED form submissions for all 100-day post-HSCT patients. Verify meningococcal MenACWY 5-year booster status for all eculizumab/ravulizumab patients.',
  },
  {
    phase: 'February',
    title: 'Aplastic Anemia 6-Month Response Assessment',
    tasks: 'Complete 6-month NIH/EBMT response assessment for all SAA patients on horse-ATG plus cyclosporine — complete response, partial response, or non-response classification. Initiate eltrombopag 150 mg/day for non-responders per RACE trial protocol. Document cyclosporine trough levels (200–400 ng/mL target) and renal function. Schedule HSCT consultation for non-responders aged ≤50 with matched sibling donor.',
  },
  {
    phase: 'March',
    title: 'Q1 CIBMTR Submission & Chimerism Audit',
    tasks: 'Submit Q1 CIBMTR TED and CRF forms for all 100-day, 6-month, 1-year, and annual post-HSCT recipients. Complete Q1 post-HSCT chimerism analysis (donor/recipient STR) and CMV/EBV/adenovirus PCR surveillance audit. Review Q1 LDH and reticulocyte count trends for all PNH patients on complement inhibition. Update DBA Registry transfusion logs and ferritin levels.',
  },
  {
    phase: 'April',
    title: 'MDS Iron Chelation & ESA Audit',
    tasks: 'Complete Q1 MDS iron overload audit — initiate deferasirox (Exjade) for patients with ferritin >1000 ng/mL or ≥20 pRBC transfusions. Review serum erythropoietin levels and ESA response in low-risk MDS patients (epoetin/darbepoetin with hemoglobin target 10–12 g/dL). Audit luspatercept Q3W dosing compliance for ring sideroblast MDS. Schedule Q2 azacitidine cycle planning for high-risk MDS.',
  },
  {
    phase: 'May',
    title: 'FACT-JACIE Accreditation Preparation',
    tasks: 'Begin biennial/triennial FACT-JACIE accreditation inspection preparation — review quality management plan, donor eligibility documentation, cellular product release criteria, adverse event reporting protocols. Complete annual NMDP/Be The Match unrelated donor search and HLA high-resolution typing audit. Update aGVHD/cGVHD grading documentation per NIH consensus criteria.',
  },
  {
    phase: 'June',
    title: 'Q2 CIBMTR & PNH Clone Flow Cytometry',
    tasks: 'Submit Q2 CIBMTR TED and CRF forms. Complete semi-annual PNH high-sensitivity flow cytometry (FLAER, CD55, CD59) on RBCs and granulocytes for all active PNH patients. Review pegcetacoplan compliance for patients with C3-mediated extravascular hemolysis. Audit Q2 ravulizumab every-8-week dosing schedules and infusion timing.',
  },
  {
    phase: 'July',
    title: 'Fanconi Anemia & DBA Surveillance',
    tasks: 'Complete annual Fanconi anemia chromosome breakage testing (mitomycin C or diepoxybutane) for all FA patients. Audit androgen therapy (oxymetholone) compliance and hepatic function panels. Review Diamond-Blackfan anemia corticosteroid response documentation and transfusion-dependent patient registry submissions. Schedule annual bone marrow biopsy for clonal evolution surveillance.',
  },
  {
    phase: 'August',
    title: 'Aplastic Anemia Annual Bone Marrow & Clonal Evolution',
    tasks: 'Complete annual bone marrow biopsy with cytogenetics and PNH clone flow cytometry for all SAA patients to monitor for clonal evolution to MDS/AML. Audit cyclosporine quarterly trough levels and renal function. Review eltrombopag long-term hepatic function panels. Document MDS surveillance findings for treatment-naive SAA survivors.',
  },
  {
    phase: 'September',
    title: 'Q3 CIBMTR & MDS Molecular Testing',
    tasks: 'Submit Q3 CIBMTR TED and CRF forms. Complete Q3 high-risk MDS molecular testing (TP53, SF3B1, ASXL1, RUNX1) for prognostic stratification. Review azacitidine 4–6 cycle response per IWG 2006 criteria for high-risk MDS patients. Audit Q3 ruxolitinib compliance for steroid-refractory aGVHD/cGVHD.',
  },
  {
    phase: 'October',
    title: 'PNH REMS & Meningococcal Vaccination Audit',
    tasks: 'Complete annual PNH REMS program documentation — meningococcal symptom education, MenACWY 5-year booster verification, MenB vaccination status, and breakthrough hemolysis event reporting. Audit annual D-dimer and thrombosis risk assessment for all PNH patients. Review LDH monthly trends (target <1.5× ULN) for complement inhibitor compliance.',
  },
  {
    phase: 'November',
    title: 'Annual GVHD Grading & Transplant Outcomes',
    tasks: 'Complete annual aGVHD/cGVHD grading per NIH consensus criteria for all post-HSCT patients. Document steroid-refractory ruxolitinib (Jakafi) outcomes and reporting. Review 1-year overall survival, transplant-related mortality, and relapse rates for CIBMTR annual report. Audit Q4 chimerism and viral PCR surveillance.',
  },
  {
    phase: 'December',
    title: 'Q4 CIBMTR Submission & Annual Center Report',
    tasks: 'Submit Q4 CIBMTR TED and CRF forms. Compile annual Bone Marrow Failure Center compliance report — SAA response rates, MDS azacitidine response, PNH LDH control, HSCT outcomes, FACT-JACIE quality metrics. Finalize FACT-JACIE accreditation submission package. Plan next-year IPSS-R re-stratification cycle and PNH Registry annual report.',
  },
]

const kpis = [
  { metric: '≥80%', label: 'SAA Complete Response (IST + Eltrombopag)' },
  { metric: '≥50%', label: 'MDS Transfusion Independence (Luspatercept)' },
  { metric: '<1.5× ULN', label: 'PNH LDH on Complement Inhibition' },
  { metric: '100%', label: 'CIBMTR Quarterly Submission On-Time' },
  { metric: '≥86%', label: '1-Year HSCT Overall Survival' },
  { metric: 'Quarterly', label: 'PNH Clone Flow Cytometry' },
]

const testimonial = {
  quote: 'Bone marrow failure center management requires quarterly CIBMTR TED/CRF submissions, weekly CBC monitoring during ATG induction, monthly eltrombopag CBCs, biweekly eculizumab infusions, monthly PNH LDH tracking, quarterly MDS molecular testing, annual IPSS-R re-stratification, FACT-JACIE accreditation prep, NMDP donor search audits, post-HSCT chimerism surveillance, and Diamond-Blackfan Registry reporting — all simultaneously. Momenties consolidated every deadline into a single calendar. Our program achieved 84% complete response in severe aplastic anemia and 100% on-time CIBMTR submission compliance.',
  author: 'Hematology Program Director',
  role: 'Bone Marrow Failure Center, Academic Medical Center',
}

export default function BoneMarrowFailureCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Bone Marrow Failure Center Calendar"
        title="Every CIBMTR Submission. Every IST Protocol. One Calendar."
        subtitle="Bone marrow failure centers manage one of the most compliance-intensive hematology portfolios — quarterly CIBMTR registry submissions, weekly CBC monitoring during horse-ATG induction, monthly eltrombopag tracking, biweekly eculizumab infusions for PNH, quarterly MDS IPSS-R re-stratification, Diamond-Blackfan anemia transfusion protocols, FACT-JACIE accreditation, and post-HSCT chimerism surveillance. Momenties automates every deadline so your aplastic anemia, MDS, PNH, and DBA patients achieve top-tier outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Bone Marrow Failure Center Compliance Lifecycle
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
              The Bone Marrow Failure Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every CIBMTR submission, IST monitoring interval, MDS scoring deadline, PNH surveillance, and DBA registry milestone — sequenced across 12 months.
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
              The 6 KPIs That Define Bone Marrow Failure Program Excellence
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
        headline="Ready to Achieve ≥80% Complete Response in Severe Aplastic Anemia?"
        subtext="Join bone marrow failure centers using Momenties to automate every CIBMTR, IST, MDS, and PNH deadline. Free to start."
      />
    </main>
  )
}
