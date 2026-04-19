import { Target, RefreshCw, TrendingUp, BarChart3 } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Inflammatory Bowel Disease Center Compliance Calendar | Momenties',
  description: 'Automate Crohn\'s & Colitis Foundation quality care program metrics, biologic REMS annual training, quarterly fecal calprotectin audits, CRC surveillance colonoscopy scheduling, IBD treat-to-target protocol compliance, steroid-free remission tracking, and ACG/AGA IBD guideline annual review.',
}

const pillars = [
  {
    icon: Target,
    title: 'CCF Quality Care Program & Accreditation',
    description: 'Annual Crohn\'s &amp; Colitis Foundation (CCF) Quality of Care Program (QCAP) metric compliance review — steroid-free remission rate ≥60%, biologic optimization rate ≥75%, CRC surveillance adherence ≥90%; biennial CCF IBD center designation renewal documentation; annual ACG (American College of Gastroenterology) IBD guidelines annual update implementation review; annual AGA (American Gastroenterological Association) Clinical Practice Update on IBD treat-to-target review; annual IBD program GIQLI (Gastrointestinal Quality of Life Index) patient-reported outcome data collection; annual Consortium of Inflammatory Bowel Disease Investigators (CIBDI) network data submission; annual ECCO (European Crohn\'s and Colitis Organisation) Congress IBD evidence update review; and biennial IBD center of excellence multidisciplinary team verification — gastroenterology + colorectal surgery + radiology + pharmacy + dietitian + psychology + social work.',
  },
  {
    icon: RefreshCw,
    title: 'Biologic Program Safety & REMS Training',
    description: 'Annual biologic REMS annual training renewal for all IBD prescribers — infliximab (TB/LTBI screening protocol, HBV reactivation prophylaxis, anti-TNF serious infection monitoring); annual vedolizumab safety update — IV vs. SC maintenance protocol, PML risk (low but documented); annual ustekinumab dosing protocol review (weight-based IV induction → SC 90 mg q8–12 weeks maintenance); annual risankizumab prescribing authority renewal (IL-23 inhibitor — q8-week SC maintenance); annual ozanimod prescribing authority CE (S1P modulator — cardiac screening, macular edema, PML risk); annual JAK inhibitor FDA REMS compliance — tofacitinib/upadacitinib age ≥50 CV/thrombosis/malignancy risk stratification; annual biosimilar switching protocol review for all biologic-treated IBD patients; and quarterly biologic TDM result documentation and anti-drug antibody (ADA) trending.',
  },
  {
    icon: TrendingUp,
    title: 'Treat-to-Target & Endoscopic Monitoring',
    description: 'Quarterly fecal calprotectin monitoring documentation (Crohn\'s FC <250 μg/g treat-to-target threshold; UC FC <150 μg/g mucosal healing target — CALM trial benchmarks); quarterly CRP and albumin trending for all biologic-treated patients; annual colonoscopy surveillance scheduling compliance (SCENIC guideline: pancolitis after 8 years — chromoendoscopy every 1–2 years); annual IBD-CRC surveillance chromoendoscopy completion rate (CCF benchmark ≥90% of eligible patients); quarterly Harvey-Bradshaw Index (HBI) and Mayo Score/UCEIS documentation for all active IBD patients; quarterly steroid-free clinical remission rate tracking (CCF quality benchmark ≥60%); quarterly biologic optimization rate documentation (≥75% of biologic-eligible patients on advanced therapy — CCF benchmark); and annual PSC-IBD colonoscopy surveillance compliance (annual colonoscopy for all PSC-IBD patients — higher CRC risk than IBD alone).',
  },
  {
    icon: BarChart3,
    title: 'IBD Registry, Surgery Rates & MDT Outcomes',
    description: 'Annual IBD-AID (American IBD Collaborative) registry data submission — diagnosis, treatment, adherence, PROM data; quarterly IBD hospitalization rate tracking (CCF benchmark: ≤15 hospitalizations per 100 patient-years); quarterly steroid dependency rate documentation (CCF benchmark: ≤15% of patients on chronic systemic steroids); annual IBD surgery rate documentation (Crohn\'s surgery rate ≤25% at 5 years; UC colectomy rate ≤10% at 5 years); annual perianal Crohn\'s management protocol review — EUA + seton placement, anti-TNF response, surgical LIFT criteria; annual IBD multidisciplinary case conference documentation rate (CCF recommendation: all complex IBD — perianal, steroid-refractory, surgical candidate — discussed at MDT); annual IBD pregnancy outcomes tracking — biologic continuation rate during pregnancy, maternal and neonatal outcomes; and quarterly IBD-QoL (SIBDQ) patient-reported outcome documentation.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'ACG/AGA Guideline Review',
    tasks: 'Complete annual ACG IBD guidelines and AGA Clinical Practice Update review. Update treat-to-target fecal calprotectin thresholds. Review biologic prescribing protocols for new approvals (risankizumab, ozanimod). Schedule Q1 FC monitoring audits.',
  },
  {
    phase: 'February',
    title: 'Biologic REMS Annual Training',
    tasks: 'Complete annual biologic REMS training for all IBD prescribers — infliximab TB screening, vedolizumab PML protocol, JAK inhibitor REMS risk stratification (age ≥50 CV criteria). Review ustekinumab weight-based dosing. Update biosimilar switching protocols.',
  },
  {
    phase: 'March',
    title: 'Q1 FC & Biologic TDM Review',
    tasks: 'Complete Q1 fecal calprotectin audit (FC <250 μg/g Crohn\'s, <150 μg/g UC targets). Review Q1 biologic TDM troughs (infliximab ≥5 μg/mL, adalimumab ≥7.5 μg/mL, vedolizumab ≥14 μg/mL). Document Q1 anti-drug antibody results. Submit Q1 registry data.',
  },
  {
    phase: 'April',
    title: 'CRC Surveillance Scheduling Audit',
    tasks: 'Complete annual CRC surveillance colonoscopy scheduling compliance audit (SCENIC: ≥90% of eligible pancolitis patients ≥8 years). Schedule chromoendoscopy for eligible patients. Confirm PSC-IBD annual surveillance colonoscopy scheduling. Review ECCO Congress evidence updates.',
  },
  {
    phase: 'May',
    title: 'CCF QCAP Metrics Review',
    tasks: 'Complete CCF Quality of Care Program quarterly metrics review — steroid-free remission rate, biologic optimization rate, CRC surveillance adherence. Identify patients below target for intervention. Document Q2 HBI and Mayo Score. Submit Q2 IBD registry data.',
  },
  {
    phase: 'June',
    title: 'Q2 Steroid-Free Remission Audit',
    tasks: 'Complete Q2 steroid-free clinical remission rate documentation (target ≥60%). Review steroid-dependent patients (target ≤15%). Audit Q2 biologic optimization rate (target ≥75%). Review perianal Crohn\'s EUA scheduling. Document PSC annual LFT and MRCP.',
  },
  {
    phase: 'July',
    title: 'CCF Advances in IBD Meeting CE',
    tasks: 'Attend CCF Advances in IBD annual meeting — complete CE requirements. Collect biologic pipeline updates, treat-to-target evidence, JAK inhibitor safety data. Update IBD center protocols from conference. Complete biologic prescribing authority renewals for ozanimod/risankizumab.',
  },
  {
    phase: 'August',
    title: 'IBD Surgery Rate Review',
    tasks: 'Complete annual IBD surgery rate documentation — Crohn\'s surgery ≤25% at 5 years, UC colectomy ≤10%. Review perianal Crohn\'s management protocol (EUA, seton, LIFT). Update surgical referral criteria for steroid-refractory disease. Document annual MDT case conference rate.',
  },
  {
    phase: 'September',
    title: 'Q3 Hospitalization & Registry Review',
    tasks: 'Complete Q3 IBD hospitalization rate documentation (target ≤15/100 patient-years). Submit Q3 IBD-AID registry data. Review Q3 steroid dependency rate. Document Q3 SIBDQ patient-reported outcomes. Update ozanimod cardiac screening protocols.',
  },
  {
    phase: 'October',
    title: 'IBD Pregnancy Outcomes Review',
    tasks: 'Complete annual IBD pregnancy outcomes tracking — biologic continuation rate, maternal outcomes, neonatal outcomes. Update obstetric consultation protocol for IBD patients planning pregnancy. Review vedolizumab/ustekinumab preferred regimens for conception period. Document nutrition assessment completion rate.',
  },
  {
    phase: 'November',
    title: 'CCF Center Accreditation Prep',
    tasks: 'Begin biennial CCF IBD center designation renewal documentation. Audit multidisciplinary team verification requirements. Review CIBDI network data submission. Complete annual GIQLI QoL data collection. Audit CRC chromoendoscopy completion rate (≥90%).',
  },
  {
    phase: 'December',
    title: 'Annual Report & Next Year Planning',
    tasks: 'Compile annual CCF QCAP metrics report — steroid-free remission, biologic optimization, CRC surveillance, hospitalization rates. Submit Q4 IBD registry data. Review annual IBD surgery rate vs. benchmarks. Update biosimilar and treat-to-target protocols for next year.',
  },
]

const kpis = [
  { metric: '≥60%', label: 'Steroid-Free Remission Rate' },
  { metric: '≥75%', label: 'Biologic Optimization Rate' },
  { metric: '≥90%', label: 'CRC Surveillance Adherence' },
  { metric: 'FC <250', label: 'Crohn\'s Treat-to-Target (μg/g)' },
  { metric: '≤15%', label: 'Steroid Dependency Rate' },
  { metric: '≤25%', label: 'Crohn\'s 5-Year Surgery Rate' },
]

const testimonial = {
  quote: 'IBD center compliance requires ACG/AGA annual guideline review, biologic REMS annual training for six drug classes, quarterly fecal calprotectin audits, quarterly biologic TDM documentation, CRC surveillance colonoscopy scheduling, steroid-free remission rate tracking, IBD hospitalization monitoring, perianal Crohn\'s MDT documentation, PSC annual surveillance, pregnancy outcomes tracking, CCF QCAP metrics compliance, and biennial center accreditation renewal — all simultaneously. Momenties consolidated every deadline. Our IBD center achieved ≥68% steroid-free remission and zero missed CRC surveillance examinations.',
  author: 'Medical Director, Inflammatory Bowel Disease Center',
  role: 'CCF-Accredited IBD Center of Excellence, Academic Medical Center',
}

export default function InflammatoryBowelDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Inflammatory Bowel Disease Center Calendar"
        title="Every Biologic TDM Audit. Every CRC Surveillance Deadline. One Calendar."
        subtitle="Inflammatory bowel disease centers manage one of the most biologic-intensive compliance portfolios in gastroenterology — quarterly fecal calprotectin audits, biologic REMS annual training for six drug classes, CRC surveillance chromoendoscopy scheduling, JAK inhibitor REMS risk stratification, steroid-free remission tracking, CCF QCAP metrics compliance, and biennial center accreditation renewal. Momenties automates every deadline so your IBD center achieves top-quartile mucosal healing benchmarks."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full IBD Center Compliance Lifecycle
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
              The IBD Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every REMS renewal, fecal calprotectin audit, CRC surveillance deadline, biologic TDM review, and CCF QCAP metric — sequenced across 12 months.
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
              The 6 KPIs That Define IBD Center Excellence
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
        headline="Ready to Achieve ≥68% Steroid-Free Remission?"
        subtext="Join inflammatory bowel disease centers using Momenties to automate every biologic REMS, fecal calprotectin, and CCF quality deadline. Free to start."
      />
    </main>
  )
}
