import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thoracic Surgeon CME Calendar — ABS MOC, STS CE, VATS lobectomy CE, robotic thoracic CE, esophagectomy CE, mesothelioma CE',
  description:
    'Thoracic surgeons managing ABS general surgery and ABS thoracic surgery MOC alongside STS (Society of Thoracic Surgeons) database participation track annual VATS and robotic lobectomy CE (uniportal VATS CE, robotic versus VATS VIOLET trial CE, sublobar resection ACOSOG Z4099/RTOG 1307 CE), esophagectomy CE (Ivor Lewis versus McKeown versus transhiatal CE, minimally invasive esophagectomy TIME trial CE, CROSS trial chemoradiation CE update), and lung cancer staging CE (ctDNA MRD CE for adjuvant therapy decision, neoadjuvant immunotherapy CE, CheckMate 816 nivolumab CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/thoracic-surgeons' },
  openGraph: {
    title: 'Thoracic Surgeon CME Calendar',
    description: 'ABS primary + thoracic surgery MOC, VATS/robotic lobectomy CE, esophagectomy CE, and neoadjuvant immunotherapy CE — one structured calendar.',
    url: '/for/thoracic-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABS general surgery MOC (10-year) + ABS thoracic surgery subspecialty certificate — two exam cycles, two credit tracks, STS database participation required',
    desc: 'Thoracic surgeons hold ABS general surgery certification (10-year MOC cycle, 90 CME credits, 30 SA-CME) and ABS thoracic surgery subspecialty certificate (10-year recertification, separate Part III examination). STS (Society of Thoracic Surgeons) participation requires annual data submission to the STS Adult Cardiac Surgery Database or STS General Thoracic Surgery Database for accredited programs. STS annual risk-adjusted outcomes report serves as the quality improvement component. AATS (American Association for Thoracic Surgery) annual meeting and STS annual meeting provide the major CE events. A CME calendar that tracks only the ABS general surgery cycle misses the thoracic subspecialty certificate renewal timing and STS database annual submission deadline. Momenties tracks both ABS cycles and STS obligations simultaneously.',
  },
  {
    icon: Clock,
    title: 'Annual lobectomy CE — uniportal VATS CE, robotic VIOLET trial CE, sublobar resection ACOSOG Z4099 CE for early-stage NSCLC',
    desc: 'Lung resection CE requires annual updates as sublobar resection evidence matures and robotic comparative data accumulates. Sublobar resection CE: ACOSOG Z4099/RTOG 1307 — segmentectomy versus lobectomy for stage IA NSCLC ≤2cm: DFS equivalent at 5 years (segmentectomy 63.6% versus lobectomy 64.1%), OS equivalent CE. JCOG0802 CE: Japanese RCT — segmentectomy versus lobectomy for peripheral NSCLC ≤2cm: 5-year OS superior segmentectomy (91.1% versus 94.3% p=0.04), CE on JCOG versus ACOSOG data reconciliation. Robotic CE: VIOLET trial — robotic versus open lobectomy (not VATS) RCT CE, 30-day conversion CE, blood loss CE. Uniportal VATS CE: single-port VATS lobectomy versus three-port CE, learning curve CE. Sublobar anatomy CE: intersegmental plane CE (indocyanine green fluorescence CE for segment boundary, 3D planning CE). Annual lymph node staging CE: systemic lymph node sampling CE, MLND CE (mediastinal lymph node dissection versus sampling — ACOSOG Z0030 long-term CE).',
  },
  {
    icon: BarChart3,
    title: 'Annual esophagectomy CE — TIME trial minimally invasive outcomes, CROSS trial chemoradiation update, Ivor Lewis versus McKeown CE',
    desc: 'Esophagectomy CE updates annually as minimally invasive and hybrid technique data matures. TIME trial CE: minimally invasive versus open esophagectomy — 5-year OS equivalent (42% versus 43%), pulmonary complication superior MIE (29% versus 48% CE), blood loss CE. Ivor Lewis versus McKeown CE: approach selection CE — LASER trial (laparoscopic versus open McKeown versus Ivor Lewis CE — not yet fully published), thoracoscopic versus open McKeown CE, robotic Ivor Lewis CE (robotic technique CE versus laparoscopic for intrathoracic anastomosis). CROSS trial CE: carboplatin plus paclitaxel plus radiation neoadjuvant CE — pCR 29% SCC versus 23% ADC, CROSS 10-year OS SCC 47% versus 12% surgery alone CE — CE on CROSS applicability versus FLOT CE (FLOT versus ECF for gastric and GEJ adenocarcinoma). Enhanced recovery CE: ERAS for esophagectomy CE — thoracic epidural versus paravertebral CE, early nasogastric removal CE. Annual anastomotic leak CE: cervical versus thoracic anastomosis leak rate CE, endoscopic vacuum CE for anastomotic leak management.',
  },
  {
    icon: Users,
    title: 'Annual neoadjuvant immunotherapy CE — CheckMate 816 nivolumab CE, ctDNA MRD CE for adjuvant decision, perioperative immunotherapy CE',
    desc: 'Lung cancer surgical oncology CE requires annual updates as neoadjuvant immunotherapy evidence matures. CheckMate 816 CE: nivolumab plus chemotherapy versus chemotherapy neoadjuvant for resectable NSCLC stage IB-IIIA — pCR 24% versus 2.2%, EFS 31.6 versus 20.8 months CE — CE on surgical timing after immunotherapy (4-6 weeks CE), immune-related adverse event CE, adhesion CE intraoperatively post-neoadjuvant IO. Perioperative immunotherapy CE: KEYNOTE-671 CE (pembrolizumab neoadjuvant plus adjuvant versus neoadjuvant chemo alone — EFS superior at 3 years), CheckMate 77T CE. ctDNA MRD CE: circulating tumor DNA minimal residual disease CE for adjuvant therapy decision after R0 resection — MERMAID-1 CE (ctDNA positive post-surgery — adjuvant durvalumab CE), clinical utility CE. Annual mesothelioma CE: EPP versus PD CE (extended pleurectomy decortication versus extrapleural pneumonectomy — MARS2 trial CE, EORTC trial CE), pembrolizumab CE for unresectable mesothelioma.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS primary MOC audit: 10-year cycle credits (90 total, 30 SA-CME). Thoracic subspecialty certificate audit: exam date verified, preparation plan if within 3 years. STS database audit: annual data submission deadline (typically February 28), data completeness review, risk-adjusted outcomes versus national benchmark (anastomotic leak rate, operative mortality, 30-day readmission). Annual lobectomy volume audit: VATS versus robotic versus open ratio reviewed, sublobar resection volume CE. Multidisciplinary tumor board CE: neoadjuvant immunotherapy eligibility protocol updated (CheckMate 816 CE criteria reviewed with oncology team).' },
  { phase: 'Mar–Apr', task: 'STS annual meeting (spring): 15-20 thoracic surgery-specific CME credits. Lung resection session CE: sublobar resection ACOSOG/JCOG update, robotic CE. Esophagectomy session CE: minimally invasive technique CE. Neoadjuvant IO session CE: CheckMate 816 and KEYNOTE-671 update. Mesothelioma session CE: EPP versus PD update, immunotherapy CE. Annual myasthenia gravis surgery CE: extended thymectomy for MG MGTX trial CE — extended versus simple, robotic thymectomy CE for myasthenia. Anterior mediastinal mass CE: thymoma resection CE, germ cell tumor CE, robotic versus VATS thymectomy CE.' },
  { phase: 'May–Jun', task: 'AATS annual meeting (May): academic thoracic surgery CE, 15-20 credits. Presidential address and plenary CE. Lung cancer staging CE: IASLC TNM staging 9th edition update CE (if published). Segmentectomy anatomy CE: 3D CT angiography for S segment identification CE. Lymph node mapping CE: IASLC lymph node map update CE. Neoadjuvant immunotherapy literature review: CheckMate 816 and KEYNOTE-671 data review. Esophagectomy CE: TIME trial 5-year data review. ctDNA MRD CE: MERMAID-1 CE update if published. ERAS esophagectomy CE: literature review, institutional protocol update.' },
  { phase: 'Jul–Aug', task: 'Annual esophagectomy CE: Ivor Lewis versus McKeown outcomes data review. CROSS versus FLOT trial positioning CE review. Anastomotic leak management CE: endoscopic vacuum therapy CE, self-expanding stent CE. Tracheal surgery CE: tracheal resection CE for adenoid cystic carcinoma, tracheal stenosis CE. Pulmonary hypertension surgery CE: balloon pulmonary angioplasty CE for CTEPH, pulmonary endarterectomy CE. Pleural disease CE: EBUS-guided pleural CE, surgical pleurodesis versus pleuroscopy CE. Annual VATS skills CE: simulation CE for VATS lobectomy if available through AATS or STS.' },
  { phase: 'Sep–Oct', task: 'CHEST annual meeting (October): lung cancer staging CE, multidisciplinary CE, pulmonary hypertension CE. Robotic thoracic CE update: annual platform CE, da Vinci versus Intuitive Ion CE. Neoadjuvant CE: Q4 lung cancer congress CE — ASCO lung CE or ESMO CE for neoadjuvant IO update. ctDNA CE: circulating tumor DNA 2024 consensus CE review. Mesothelioma CE: MARS2 trial 5-year data CE. Tracheobronchomalacia CE: dynamic airway collapse CE, Bergeron stent CE, tracheoplasty CE. Annual sleep apnea hypoglossal nerve CE if applicable to practice.' },
  { phase: 'Nov–Dec', task: 'ABS documentation: verify all credits logged before December 31. Thoracic subspecialty certificate documentation. STS database annual data submission: 2024 data submitted before February deadline — initiate data cleaning in November. Hospital privileging renewal: VATS lobectomy, robotic thoracic, esophagectomy, thoracic aortic surgery — annual case volume documentation. ABS CTS subspecialty exam preparation: if exam within 24 months, study schedule initiated. Annual thoracic oncology protocol review: neoadjuvant IO eligibility, ctDNA MRD testing criteria, adjuvant therapy decision algorithm updated to current evidence.' },
]

export default function ThoracicSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Thoracic Surgeons"
        title={
          <>
            ABS primary MOC and thoracic subspecialty certificate tracked in parallel.
            <br />
            <em className="not-italic text-gold">ACOSOG/JCOG sublobar CE, CheckMate 816 neoadjuvant IO CE, TIME esophagectomy CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Thoracic surgeons carry two ABS certification obligations: general surgery 10-year MOC and thoracic surgery subspecialty certificate 10-year recertification. Annual CE priorities include ACOSOG Z4099 versus JCOG0802 segmentectomy data reconciliation, uniportal VATS CE, TIME trial minimally invasive esophagectomy 5-year OS data, CheckMate 816 nivolumab neoadjuvant CE with surgical timing CE, and ctDNA MRD CE for adjuvant therapy decisions. Momenties structures the full thoracic surgery CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Thoracic Surgeons' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/surgeons"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All surgeons
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">HIPAA-aware · No PHI stored · Free to start</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CME calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for thoracic surgeons: ABS dual certificate tracking, lobectomy technique CE, esophagectomy CE, and neoadjuvant immunotherapy CE.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <c.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual CME calendar</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month thoracic surgery CME schedule from STS annual meeting through AATS May CE and year-end ABS documentation.</h2>
          </Reveal>
          <div className="space-y-3">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.phase} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{item.phase}</span>
                  <p className="text-sm text-foreground/90">{item.task}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;The ACOSOG versus JCOG segmentectomy CE was the most important update I needed and the one I kept deferring. The trials had been published but I had not sat down to reconcile the contradictory headlines — ACOSOG shows equivalence, JCOG shows superiority for segmentectomy. Having the May CE review block forced me to actually read the methodology differences and understand why the populations differ. I updated my patient selection algorithm for segmentectomy versus lobectomy and the tumor board discussion changed immediately. The CheckMate 816 surgical timing CE was the one my oncology colleagues needed me to know. When a patient completes nivolumab plus chemo neoadjuvant, the 4-6 week surgical window is not obvious — and I was getting referrals without the timing context. The calendar CE review means I am current on the immunotherapy-to-surgery interval CE before cases arrive. The STS database deadline reminder in November was the practical fix — I had been submitting in January, after the February deadline had passed in two prior cycles. Moving the data cleaning to November solved a 3-year pattern.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Joao F., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Thoracic Surgeon, academic thoracic oncology program</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the CME calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical evidence review for thoracic surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC — 10-year cycle, 90 credits, 30 SA-CME',
                'ABS thoracic subspecialty certificate — 10-year cycle, separate exam prep calendar tracked',
                'Sublobar resection CE — ACOSOG Z4099 vs JCOG0802 reconciliation, segmentectomy anatomy CE',
                'Robotic thoracic CE — VIOLET trial, uniportal VATS, ICG fluorescence segment boundary CE',
                'Esophagectomy CE — TIME trial MIE 5-year data, CROSS vs FLOT CE, anastomotic leak CE',
                'Neoadjuvant IO CE — CheckMate 816 surgical timing, KEYNOTE-671 CE, ctDNA MRD CE',
                'STS annual meeting CE — spring, 15-20 thoracic-specific credits, database submission deadline',
                'AATS annual meeting CE — May, academic thoracic surgery CE, 15-20 credits',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="ABS primary MOC and thoracic subspecialty certificate tracked in parallel. STS database deadline tracked."
        subtitle="Thoracic surgery CME calendar: dual ABS certificate tracking, segmentectomy CE, neoadjuvant IO CE, esophagectomy CE, and STS/AATS annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
