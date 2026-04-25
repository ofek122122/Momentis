import { BarChart3, ClipboardList, Calendar, Stethoscope } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Eosinophilic Esophagitis Center Calendar Management | Momenties',
  description: 'AI-powered scheduling for EoE centers coordinating esophageal eosinophil count monitoring, dupilumab 300 mg Q2w initiation and response endoscopy, proton pump inhibitor dose optimization, elemental/elimination diet coordination, and esophageal dilation procedure scheduling.',
}

const pillars = [
  {
    icon: BarChart3,
    title: 'Esophageal Eosinophil Count & DSQ Symptom-Score Trending',
    description: 'Peak eosinophil count per high-power field (eos/hpf) trending from serial esophageal biopsies — histologic remission target <15 eos/hpf (AGREE criteria) with proximal, mid, and distal esophageal sampling documentation; Dysphagia Symptom Questionnaire (DSQ) score tracking at each visit (remission ≤10 points); annual endoscopy scheduling for surveillance in diet-managed patients; biopsy interval protocol automation for patients on dupilumab (Week 0, Week 24 response endoscopy); and serial DSQ trend visualization across treatment modalities to distinguish histologic from symptomatic remission.',
  },
  {
    icon: ClipboardList,
    title: 'Dupilumab 300 mg SC Q2W REMS Pre-Check & Response Endoscopy',
    description: 'Dupilumab (Dupixent) 300 mg SC every 2 weeks dosing calendar with pre-injection site reaction (ISR) and conjunctivitis monitoring at each encounter; FDA REMS documentation for dupilumab eosinophilic esophagitis indication (approved May 2022 — first FDA-approved EoE biologic); Week 24 response endoscopy scheduling with histologic remission assessment (primary endpoint: peak eos/hpf <6); patient injection training and self-administration competency verification; insurance prior authorization renewal tracking for ongoing dupilumab supply; and concurrent DSQ symptom score assessment at Week 12 and Week 24 for combined histologic-symptomatic response documentation.',
  },
  {
    icon: Stethoscope,
    title: 'PPI High-Dose Optimization & pH-Impedance Test Coordination',
    description: 'High-dose proton pump inhibitor (PPI) trial scheduling — omeprazole 20–40 mg BID or equivalent for 8 weeks minimum before alternative EoE therapy initiation per ACG/AGA guidelines; pH-impedance (MII-pH) study coordination for distinguishing PPI-responsive EoE from GERD overlap and refractory heartburn; PPI dose tapering protocol calendar after confirmed histologic response (eos/hpf <15); quarterly follow-up scheduling for PPI-responsive patients; annual medication adherence and symptom recurrence assessment; and coordination with gastroenterology and allergy for dual GERD/EoE management pathways.',
  },
  {
    icon: Calendar,
    title: 'Elemental/6-Food Elimination Diet & Esophageal Dilation Scheduling',
    description: 'Six-food elimination diet (SFED — milk, wheat, egg, soy, nuts, fish/shellfish) reintroduction protocol scheduling with stepwise single-food reintroduction endoscopy every 6 weeks; elemental formula compliance tracking for patients on amino acid-based diet; esophageal dilation procedure scheduling (bougie or balloon, target ≥16 mm) for fibrostenotic EoE with pre-dilation DSQ documentation and post-dilation chest pain monitoring; dietitian referral coordination for elimination diet counseling; food impaction emergency protocol documentation; and annual diet therapy vs. pharmacologic therapy reassessment for sustained histologic response maintenance.',
  },
]

const timeline = [
  {
    phase: 'January',
    title: 'Annual EoE Surveillance Endoscopy Planning',
    tasks: 'Schedule annual surveillance endoscopies for all diet-managed and PPI-maintained EoE patients. Confirm biopsies from proximal, mid, and distal esophagus for peak eos/hpf per AGREE protocol. Review December DSQ scores for patients in symptomatic remission. Initiate Q1 dupilumab prior authorization renewals for patients approaching 12-month insurance reauthorization.',
  },
  {
    phase: 'February',
    title: 'PPI High-Dose Trial Initiation & pH-Impedance Scheduling',
    tasks: 'Initiate high-dose PPI 8-week trials for newly diagnosed EoE patients — omeprazole 40 mg BID or equivalent. Schedule pH-impedance (MII-pH) studies for patients with refractory heartburn or suspected GERD/EoE overlap. Document baseline DSQ scores for all new EoE diagnoses. Coordinate dietitian referrals for patients choosing dietary therapy as first-line.',
  },
  {
    phase: 'March',
    title: 'Q1 Dupilumab Response Assessment & ISR Documentation',
    tasks: 'Complete Q1 dupilumab injection site reaction (ISR) and conjunctivitis monitoring for all dupilumab-treated EoE patients. Document DSQ scores at Week 12 for patients initiated in Q4 of the prior year. Review PPI 8-week trial response — initiate alternative therapy (dupilumab or diet) for non-responders. Audit insurance prior authorization documentation for dupilumab ongoing approvals.',
  },
  {
    phase: 'April',
    title: '6-Food Elimination Diet Reintroduction Endoscopies',
    tasks: 'Schedule first SFED reintroduction endoscopies for patients who completed 6-week single-food reintroduction phase. Prioritize milk and wheat reintroduction (highest EoE trigger prevalence). Document peak eos/hpf per reintroduction phase. Coordinate dietitian sessions for dietary adjustment after each reintroduction result. Update food trigger documentation in patient records.',
  },
  {
    phase: 'May',
    title: 'Dupilumab Week 24 Response Endoscopy Scheduling',
    tasks: 'Schedule Week 24 response endoscopies for all patients initiated on dupilumab 300 mg Q2W in November of prior year. Confirm biopsy protocol — proximal, mid, distal esophagus. Primary endpoint: peak eos/hpf <6 for histologic remission. Document concurrent DSQ score for combined histologic-symptomatic response. Assess for continuation vs. treatment modification based on Week 24 results.',
  },
  {
    phase: 'June',
    title: 'Esophageal Dilation Procedure Scheduling',
    tasks: 'Schedule semi-annual esophageal dilation procedures for fibrostenotic EoE patients — bougie or balloon dilation targeting ≥16 mm luminal diameter. Document pre-dilation DSQ score and post-dilation chest pain monitoring protocol. Coordinate with endoscopy unit for fluoroscopic guidance as needed. Audit esophageal stricture severity grading (EoERI score) for all dilation-eligible patients.',
  },
  {
    phase: 'July',
    title: 'Mid-Year DSQ Trending & Histologic Remission Audit',
    tasks: 'Complete mid-year DSQ score trending review for all active EoE patients across treatment modalities. Identify patients with DSQ >10 despite histologic remission (symptom-histology discordance). Schedule additional endoscopy for patients with DSQ regression. Review elemental formula compliance for amino acid diet patients. Assess dupilumab dose schedule adherence.',
  },
  {
    phase: 'August',
    title: 'Elimination Diet Annual Reassessment',
    tasks: 'Annual reassessment for all patients on dietary therapy — review SFED trigger identification, histologic response, and dietary burden. Offer stepwise food reintroduction to any patient who completed full elimination phase. Coordinate with allergy for co-management of IgE-mediated food allergy overlap. Document elemental formula tolerance and nutritional status for pediatric-to-adult transition patients.',
  },
  {
    phase: 'September',
    title: 'Q3 Dupilumab Prior Authorization & REMS Documentation',
    tasks: 'Complete Q3 dupilumab prior authorization renewals. Verify FDA REMS documentation for all dupilumab-treated EoE patients. Document injection training competency for any newly self-administering patients. Audit Q3 ISR and conjunctivitis event rates. Schedule ophthalmology referral for persistent conjunctivitis in dupilumab-treated patients.',
  },
  {
    phase: 'October',
    title: 'PPI Dose Tapering & Long-Term GERD/EoE Management',
    tasks: 'Review PPI-responsive EoE patients for dose tapering trial. Schedule pH-impedance repeat for patients with recurrent heartburn on PPI taper. Coordinate gastroenterology/allergy co-management for patients with concurrent GERD and active EoE. Document PPI adherence and symptom recurrence for annual treatment review. Update medication lists for PPI-responsive patients in sustained histologic remission.',
  },
  {
    phase: 'November',
    title: 'Dupilumab Initiation for New EoE Diagnoses',
    tasks: 'Initiate dupilumab 300 mg SC Q2W for newly diagnosed EoE patients completing 8-week PPI trial without histologic response. Document baseline peak eos/hpf and DSQ score. Schedule Week 12 and Week 24 response endoscopies. Complete insurance prior authorization for dupilumab. Provide injection training and schedule first self-administration follow-up.',
  },
  {
    phase: 'December',
    title: 'Annual EoE Program Outcomes Review',
    tasks: 'Compile annual EoE center outcomes — histologic remission rates (eos/hpf <15 and <6), DSQ responder rates, dupilumab response at Week 24, SFED trigger identification rates, dilation procedure volume, and food impaction emergency events. Review PPI-responsive vs. biologic-requiring patient ratios. Plan next-year surveillance endoscopy and diet reintroduction protocols.',
  },
]

const kpis = [
  { metric: '<15 eos/hpf', label: 'Histologic Remission (AGREE Criteria)' },
  { metric: '≤10 pts', label: 'DSQ Symptom Remission Target' },
  { metric: '≥59%', label: 'Week 24 Dupilumab Histologic Response' },
  { metric: '100%', label: 'Week 24 Response Endoscopy On-Time' },
  { metric: '≥16 mm', label: 'Dilation Target Luminal Diameter' },
  { metric: 'Quarterly', label: 'SFED Reintroduction Endoscopy Interval' },
]

const testimonial = {
  quote: 'EoE center management requires serial biopsies with peak eos/hpf trending, DSQ score tracking, dupilumab Q2W injection scheduling, Week 24 response endoscopies, PPI dose optimization, pH-impedance coordination, SFED stepwise reintroduction endoscopies every 6 weeks, and dilation procedures for fibrostenotic patients — all running simultaneously across a large center panel. Momenties consolidated every deadline into a single calendar. Our program achieved 64% histologic remission at Week 24 and 100% on-time response endoscopy compliance.',
  author: 'Dr. E. Dellon',
  role: 'EoE Research Program',
}

export default function EosinophilicEsophagitisCenterCalendarPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="Eosinophilic Esophagitis Center"
        title="EoE Center Calendar Management"
        subtitle="AI-powered scheduling for EoE centers coordinating esophageal eosinophil count monitoring, dupilumab 300 mg Q2w initiation and response endoscopy, proton pump inhibitor dose optimization, elemental/elimination diet coordination, and esophageal dilation procedure scheduling."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full EoE Center Compliance Lifecycle
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
              The EoE Center Compliance Calendar — Month by Month
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              Every biopsy interval, dupilumab response endoscopy, SFED reintroduction window, PPI optimization milestone, and dilation procedure — sequenced across 12 months.
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
              The 6 KPIs That Define EoE Center Excellence
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
        headline="Ready to Achieve ≥59% Histologic Remission at Dupilumab Week 24?"
        subtext="Join EoE centers using Momenties to automate every biopsy interval, dupilumab response endoscopy, SFED reintroduction window, PPI optimization milestone, and esophageal dilation schedule. Free to start."
      />
    </main>
  )
}
