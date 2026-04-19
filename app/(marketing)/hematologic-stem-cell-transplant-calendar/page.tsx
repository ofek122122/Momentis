import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hematologic Stem Cell Transplant Program Compliance Calendar | Momenties',
  description: 'Automate FACT accreditation annual compliance, CIBMTR quarterly registry submissions, NMDP/Be The Match donor registry compliance, TBI protocol annual review, GVHD prophylaxis protocol updates, CMV/EBV quarterly surveillance, engraftment benchmark tracking, 100-day NRM monitoring, and cellular therapy QC annual review for allogeneic and autologous SCT programs.',
}

const pillars = [
  {
    icon: Target,
    title: 'FACT Accreditation & Cellular Therapy Compliance',
    description: 'Annual FACT (Foundation for the Accreditation of Cellular Therapy) HSCT accreditation compliance review — allogeneic and autologous SCT program standards (donor eligibility, collection, processing, administration); triennial FACT on-site inspection preparation (institutional SOP review, product labeling QC, staff training verification, adverse event documentation audit); annual JACIE (Joint Accreditation Committee ISCT-EBMT) standards compliance review for international programs; annual CAR-T cellular therapy REMS compliance — Kymriah (tisagenlecleucel) REMS, Yescarta/Tecartus (axicabtagene ciloleucel) REMS, Breyanzi (lisocabtagene maraleucel) REMS, Carvykti (ciltacabtagene autoleucel) REMS — REMS-certified sites only; annual TJC (The Joint Commission) Disease-Specific Care Certification for BMT programs; biennial COC (Commission on Cancer) HSCT accreditation standards compliance; and annual ISCT (International Society of Cell and Gene Therapy) quality standards review for cellular therapy manufacturing.',
  },
  {
    icon: RefreshCw,
    title: 'GVHD Prophylaxis, Conditioning & Protocol Compliance',
    description: 'Annual myeloablative conditioning (MAC) regimen protocol review — BuCy2 (busulfan 3.2 mg/kg/day × 4 days + cyclophosphamide 60 mg/kg/day × 2 days), FluBu4 (fludarabine 40 mg/m²/day × 4 + busulfan 130 mg/m²/day × 4), TBI/Cy (TBI 12 Gy in 6 fractions + cyclophosphamide 60 mg/kg × 2 days); annual reduced-intensity conditioning (RIC) protocol review — FluMel140 (fludarabine + melphalan 140 mg/m²), FluBu2; annual GVHD prophylaxis protocol review — tacrolimus target 5–10 ng/mL days +1 to +180, MTX 15 mg/m² day +1 + 10 mg/m² days +3/+6/+11 (standard), post-transplant cyclophosphamide (PTCy) day +3/+4 for haploidentical SCT; quarterly steroid-refractory cGVHD second-line protocol — ruxolitinib JAK1/2 (ibrutinib/belumosudil/axatilimab alternative); annual TBI (total body irradiation) protocol review — radiation safety, fractionation schedule, pulmonary dose constraints (bilateral lung V10 ≤70%); and annual organ toxicity monitoring protocol — hepatic VOD/SOS (defibrotide prophylaxis), hemorrhagic cystitis (mesna protocol), mucositis (palifermin eligibility).',
  },
  {
    icon: TrendingUp,
    title: 'CMV/EBV Surveillance, Engraftment & Infectious Prophylaxis',
    description: 'Quarterly CMV surveillance protocol compliance — weekly CMV PCR days +1 to +100 (threshold: CMV DNA ≥137 IU/mL → preemptive letermovir/ganciclovir), letermovir primary prophylaxis (CMV-seropositive donor or recipient — standard of care post-TRANSPLANT 2017 trial); quarterly EBV surveillance protocol — weekly EBV PCR for MUD/MMUD allogeneic SCT (threshold: EBV DNA >1000 copies/mL → rituximab 375 mg/m² × 1 for PTLD prevention); quarterly Aspergillus surveillance — serum galactomannan twice weekly days +1 to +100 (GM index >0.5 → voriconazole/isavuconazole escalation); quarterly engraftment benchmark documentation — neutrophil engraftment ≤14 days (FACT standard: ANC >500/μL × 3 consecutive days), platelet engraftment ≤21 days (>20,000/μL unsupported × 3 days); quarterly chimerism assessment — donor chimerism ≥95% at day +30 for MAC (mixed chimerism <95% → DLI protocol); annual PCP prophylaxis protocol review (TMP-SMX/pentamidine); and annual antifungal prophylaxis protocol review (posaconazole for MDS/AML + allogeneic SCT — NCCN standard).',
  },
  {
    icon: BarChart3,
    title: 'CIBMTR Registry, Donor Compliance & Program Outcomes',
    description: 'Quarterly CIBMTR (Center for International Blood and Marrow Transplant Research) registry data submission — 100-day, 6-month, 1-year, and 2-year outcomes forms (CIBMTR Forms 2400/2402/2450); annual NMDP/Be The Match institutional participation compliance review — unrelated donor search protocol, HLA typing standards (8/8 MUD ≥80% goal, 7/8 MMUD protocol), donor medical clearance criteria; annual HLA typing policy compliance review — high-resolution HLA-A/B/C/DRB1/DQB1 matching (NMDP minimum standard), KIR ligand mismatch documentation for NK alloreactivity protocol in AML; quarterly 100-day non-relapse mortality (NRM) tracking — MAC allogenic target ≤20%, RIC allogeneic ≤10%; quarterly 100-day acute GVHD Grade III–IV rate documentation (target ≤15% MUD MAC); annual chronic GVHD (cGVHD) 1-year prevalence documentation (NIH 2014 consensus: moderate/severe cGVHD target ≤40%); annual HSCT program outcomes report — OS at 1 year (AML CR1 MAC MUD target ≥65%), DFS, relapse rate, NRM by conditioning intensity; annual donor lymphocyte infusion (DLI) protocol compliance review for relapse management; and annual allogeneic SCT recipient vaccination compliance — live vaccine avoidance × 24 months, inactivated influenza annual, pneumococcal series at 12 months post-SCT.',
  },
]

const timeline: { phase: string; title: string; tasks: string }[] = [
  {
    phase: 'January',
    title: 'CIBMTR Annual Data Audit & FACT Review',
    tasks: 'Complete CIBMTR Q4 data submission. Initiate annual FACT accreditation internal audit — SOP review, product labeling QC, adverse event log review. Complete annual HLA typing policy compliance review. Review conditioning protocol updates from ASH. Schedule Q1 chimerism assessments.',
  },
  {
    phase: 'February',
    title: 'GVHD Prophylaxis Protocol Annual Update',
    tasks: 'Complete annual GVHD prophylaxis protocol review — tacrolimus/MTX standard vs. PTCy haploidentical update. Review ruxolitinib steroid-refractory cGVHD second-line data. Update tacrolimus taper schedule based on cGVHD risk stratification. Complete annual TBI protocol radiation safety review.',
  },
  {
    phase: 'March',
    title: 'Q1 Engraftment & CMV Compliance Audit',
    tasks: 'Complete Q1 engraftment benchmark documentation — neutrophil ≤14 days, platelet ≤21 days. Audit Q1 CMV PCR surveillance compliance (weekly × 100 days). Review letermovir prophylaxis adherence for CMV-seropositive recipients. Submit Q1 CIBMTR forms. Document Q1 chimerism results.',
  },
  {
    phase: 'April',
    title: 'CAR-T REMS Annual Compliance Review',
    tasks: 'Complete annual CAR-T REMS training for all HSCT staff — Kymriah/Yescarta/Tecartus/Breyanzi/Carvykti REMS. Review CRS/ICANS management protocols (tocilizumab + dexamethasone algorithm). Update site REMS certification documentation. Schedule annual FACT cellular therapy SOP review. Review Q1 100-day NRM data.',
  },
  {
    phase: 'May',
    title: 'Infectious Prophylaxis Protocol Review',
    tasks: 'Complete annual PCP prophylaxis protocol review (TMP-SMX/pentamidine/atovaquone). Complete annual antifungal prophylaxis review — posaconazole for AML/MDS allogeneic SCT (NCCN). Review annual EBV surveillance threshold and rituximab PTLD prevention protocol. Complete Q2 CIBMTR data submission. Review annual mesna hemorrhagic cystitis protocol.',
  },
  {
    phase: 'June',
    title: 'Q2 Outcomes Review & NRM Tracking',
    tasks: 'Complete Q2 100-day NRM rate documentation (MAC allogenic target ≤20%). Audit Q2 acute GVHD Grade III–IV incidence (target ≤15%). Review Q2 platelet and neutrophil engraftment benchmarks. Complete semi-annual cGVHD prevalence assessment. Audit NMDP unrelated donor search protocol compliance.',
  },
  {
    phase: 'July',
    title: 'TANDEM Annual Meeting CE & Protocol Updates',
    tasks: 'Attend TANDEM Meetings (BMT Tandem Meetings) — complete CE requirements for all HSCT physicians and APPs. Collect updated GVHD prophylaxis evidence, conditioning intensity data, CAR-T outcome updates. Review EBMT Annual Meeting guidelines. Update institutional protocols. Complete annual NMDP/Be The Match compliance review.',
  },
  {
    phase: 'August',
    title: 'HLA Typing & Donor Compliance Review',
    tasks: 'Complete annual HLA typing compliance audit — high-resolution 8-locus matching documentation, KIR ligand mismatch protocol review for AML allografts. Review NMDP donor medical clearance criteria. Audit donor chimerism assessment timing compliance. Complete annual palifermin mucositis prophylaxis eligibility review. Document Q3 CIBMTR data.',
  },
  {
    phase: 'September',
    title: 'Q3 Chimerism & Registry Audit',
    tasks: 'Complete Q3 chimerism assessment documentation — MAC target ≥95% donor at day +30. Review mixed chimerism DLI protocol activation criteria. Audit Q3 CMV and EBV PCR surveillance compliance. Complete Q3 engraftment benchmark audit. Review annual Aspergillus galactomannan surveillance compliance. Document DLI protocol cases.',
  },
  {
    phase: 'October',
    title: 'FACT Triennial Inspection Preparation',
    tasks: 'Complete FACT triennial inspection readiness review — institutional SOP currency, staff training records, adverse event and deviation logs, product labeling QC documentation, cellular therapy manufacturing standards. Complete annual TJC Disease-Specific Care Certification BMT review. Audit CAR-T REMS site certification currency.',
  },
  {
    phase: 'November',
    title: 'Annual Vaccination & Long-Term Follow-Up Compliance',
    tasks: 'Complete annual HSCT recipient vaccination compliance audit — inactivated influenza all patients, pneumococcal series at 12 months, live vaccine avoidance × 24 months documentation. Complete annual cGVHD 1-year prevalence documentation (NIH 2014 consensus criteria). Submit Q4 CIBMTR data. Review survivorship care plan compliance.',
  },
  {
    phase: 'December',
    title: 'Annual Program Outcomes Report',
    tasks: 'Compile annual HSCT program outcomes report — 1-year OS (AML CR1 MAC MUD target ≥65%), DFS, relapse rate, NRM by conditioning intensity, cGVHD prevalence. Submit full-year CIBMTR forms. Complete annual FACT accreditation self-assessment. Update MAC/RIC conditioning protocols for next year based on evidence review.',
  },
]

const kpis = [
  { metric: '≤14 days', label: 'Neutrophil Engraftment (MAC)' },
  { metric: '≤20%', label: '100-Day NRM (Allogeneic MAC)' },
  { metric: '≤15%', label: 'Acute GVHD Grade III–IV (MUD)' },
  { metric: '≥95%', label: 'Donor Chimerism at Day +30' },
  { metric: '≥65%', label: '1-Year OS (AML CR1 MUD MAC)' },
  { metric: '100%', label: 'FACT/CAR-T REMS Compliance' },
]

const testimonial = {
  quote: 'Hematologic SCT program compliance requires FACT triennial inspection preparation, quarterly CIBMTR registry submissions, CAR-T REMS annual certification for five products, weekly CMV/EBV PCR surveillance audits, quarterly engraftment benchmark tracking, 100-day NRM documentation, annual HLA typing policy review, NMDP donor compliance, MAC and RIC conditioning protocol annual updates, GVHD prophylaxis protocol review, annual TBI radiation safety review, and recipient vaccination compliance — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥65% 1-year OS for AML CR1 MUD MAC and zero FACT deficiencies.',
  author: 'Medical Director, Hematologic Stem Cell Transplant Program',
  role: 'FACT-Accredited Allogeneic and Autologous SCT Center, Academic Medical Center',
}

export default function HematologicStemCellTransplantCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Hematologic Stem Cell Transplant Calendar"
        title="Every FACT Deadline. Every CIBMTR Submission. One Calendar."
        subtitle="Hematologic stem cell transplant programs manage one of the most compliance-intensive portfolios in oncology — FACT triennial accreditation, quarterly CIBMTR registry submissions, CAR-T REMS for five cellular therapy products, weekly CMV/EBV PCR surveillance audits, quarterly engraftment benchmarks, 100-day NRM tracking, GVHD prophylaxis protocol reviews, HLA matching compliance, and annual conditioning protocol updates. Momenties automates every deadline so your SCT program achieves top-quartile transplant outcomes."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full SCT Program Compliance Lifecycle
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
              The SCT Program Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every FACT deadline, CIBMTR submission, CMV surveillance audit, engraftment benchmark, GVHD protocol review, and CAR-T REMS certification — sequenced across 12 months.
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
              The 6 KPIs That Define SCT Program Excellence
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
        headline="Ready to Achieve Zero FACT Deficiencies and Top-Quartile SCT Outcomes?"
        subtext="Join stem cell transplant programs using Momenties to automate every CIBMTR, FACT, and CAR-T REMS compliance deadline. Free to start."
      />
    </main>
  )
}
