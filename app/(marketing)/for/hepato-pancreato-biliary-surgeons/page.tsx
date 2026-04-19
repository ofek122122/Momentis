import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HPB Surgeon CME Calendar — ABS MOC, AHPBA CE, hepatectomy CE, pancreatectomy CE, robotic HPB CE',
  description:
    'Hepato-pancreato-biliary surgeons managing ABS general surgery MOC alongside AHPBA Fellowship in HPB Surgery credential renewal track annual hepatectomy CE (laparoscopic versus open major hepatectomy ORANGE II PLUS trial, robotic hepatectomy DROB trial outcomes, ALPPS versus two-stage hepatectomy portal vein embolization comparison), pancreatectomy CE (minimally invasive pancreatoduodenectomy LEOPARD-2 trial, robotic distal pancreatectomy DIPLOMA trial, enhanced recovery after surgery ERAS HPB Society guidelines), and biliary CE (laparoscopic bile duct exploration versus ERCP-LC data, Bismuth-Corlette classification update, robotic hepaticojejunostomy). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/hepato-pancreato-biliary-surgeons' },
  openGraph: {
    title: 'HPB Surgeon CME Calendar',
    description: 'ABS MOC, AHPBA Fellowship credential, hepatectomy CE, pancreatectomy CE, and robotic HPB CE — one structured calendar.',
    url: '/for/hepato-pancreato-biliary-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABS general surgery MOC (10-year cycle) + AHPBA Fellowship in HPB Surgery credential — tracked with separate requirements and different renewal cadences',
    desc: 'HPB surgeons maintain ABS general surgery certification on a 10-year cycle requiring 90 CME credits per cycle (30 self-assessment CME required), a practice quality improvement component, and the Qualifying and Certifying Examinations at cycle end. Simultaneously, the Americas Hepato-Pancreato-Biliary Association Fellowship in HPB Surgery requires 50 CME credits per 5-year renewal cycle with documented HPB-specific content and attestation of ongoing HPB case volume (50+ major HPB procedures per year). The AHPBA Fellowship also requires participation in the NSQIP HPB case-specific module or equivalent quality registry. A CME calendar that treats all credits as equivalent misses the AHPBA HPB-specific content requirement and the ABS self-assessment CME category. Momenties tracks both credit banks simultaneously with renewal alerts 12 months before each deadline.',
  },
  {
    icon: Clock,
    title: 'Annual hepatectomy CE — ORANGE II PLUS laparoscopic versus open, robotic DROB trial, ALPPS versus PVE portal vein strategy',
    desc: 'Hepatectomy technique CE requires annual review as minimally invasive evidence matures. Laparoscopic major hepatectomy CE: ORANGE II PLUS international RCT — laparoscopic versus open right hemihepatectomy, 60-day complication rate equivalent, hospital stay 5 versus 7 days, blood loss 400mL versus 500mL. Robotic hepatectomy CE: DROB trial — robotic versus laparoscopic right hemihepatectomy, RCT, operative time longer for robotic (260 versus 220 min), conversion rate lower for robotic (2% versus 8%), blood loss equivalent. ALPPS versus two-stage with PVE CE: LIGRO trial — ALPPS superior 3-month curative resection rate versus PVE (92% versus 57%) in inadequate future liver remnant, ALPPS 90-day mortality 8% versus PVE/TSH 6% — CE on patient selection criteria. Indocyanine green fluorescence CE: ICG guidance for liver resection margin visualization, parenchyma sparing, and biliary leak detection.',
  },
  {
    icon: BarChart3,
    title: 'Annual pancreatectomy CE — LEOPARD-2 minimally invasive PD, DIPLOMA robotic distal, ERAS HPB Society guidelines update',
    desc: 'Pancreatectomy CE tracks rapidly evolving minimally invasive evidence for both pancreatoduodenectomy and distal pancreatectomy. Minimally invasive PD CE: LEOPARD-2 trial — laparoscopic versus open PD RCT stopped early for excess mortality in laparoscopic arm (8.7% versus 2.5%): CE on current patient selection for laparoscopic PD (high-volume center, standardized technique, oncologic equivalence data at 2 years from centers that continued). Robotic PD CE: MIRA trial — robotic PD at high-volume centers, 90-day mortality 1.2%, conversion rate 4%, blood loss 300mL. Robotic distal pancreatectomy CE: DIPLOMA trial — robotic versus laparoscopic, RCT, functional recovery day 4 versus 6, Clavien-Dindo IIIb complication equivalent, spleen preservation rate 41% versus 33%. ERAS HPB Society pancreatectomy guidelines 2023 update: preoperative biliary drainage CE, nasojejunal tube omission, early oral feeding, prophylactic octreotide CE.',
  },
  {
    icon: Users,
    title: 'Annual biliary CE — laparoscopic CBDE versus ERCP, Bismuth-Corlette hilar cholangiocarcinoma staging, robotic hepaticojejunostomy technique',
    desc: 'Biliary CE covers both benign biliary disease (laparoscopic common bile duct exploration versus two-stage ERCP-LC) and malignant biliary disease (hilar cholangiocarcinoma staging and resectability). Laparoscopic CBDE CE: single-stage laparoscopic CBD exploration versus two-stage ERCP-LC — E-SURGE trial 2024: equivalent stone clearance (95% versus 94%), shorter hospital stay single-stage (3.1 versus 4.8 days), cost analysis CE. Hilar cholangiocarcinoma CE: Bismuth-Corlette classification application CE, Blumgart staging update, portal vein involvement CE (contralateral or ipsilateral — resectability algorithm), preoperative biliary drainage CE (volume-targeted drainage, unilateral drainage for future liver remnant). Robotic hepaticojejunostomy CE: technique for redo bilioenteric anastomosis, minimally invasive repair of iatrogenic bile duct injury. Indeterminate biliary stricture CE: SpyGlass DS2 cholangioscopy, FISH cytology, next-generation sequencing CE for IgG4-related cholangiopathy versus CCA.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS MOC cycle audit: if within 5 years of ABS exam date, verify CME credits logged including self-assessment CME category (30 of 90 required credits must be SA-CME). AHPBA Fellowship renewal audit: HPB-specific CE credits logged, NSQIP HPB module participation current, HPB case volume attestation (50+ major HPB procedures per year reviewed). ACS NSQIP HPB module annual report reviewed for practice quality data (hepatectomy SSI rate, pancreatectomy POPF rate, bile duct injury rate versus national benchmark).' },
  { phase: 'Mar–Apr', task: 'AHPBA annual meeting (spring): 15-20 HPB-specific CME credits. Hepatectomy session CE: minimally invasive hepatectomy technique update, fluorescence guidance session, ALPPS session. Pancreatectomy session CE: robotic PD outcomes data, ERAS protocol adherence data. Annual robotic HPB training (simulation CE if available at AHPBA). Biliary session CE: hilar cholangiocarcinoma preoperative staging CE, cholangioscopy technique CE. HPB oncology CE: systemic treatment integration CE (borderline resectable pancreatic cancer — FOLFIRINOX or gemcitabine/nab-paclitaxel neoadjuvant CE, response assessment CE).' },
  { phase: 'May–Jun', task: 'Annual hepatectomy CE literature review: ORANGE II PLUS and DROB trial publications review (HPB, Annals of Surgery, JACS). ICG fluorescence technique CE. Liver volumetry CE: future liver remnant calculation methods (Couinaud segment-based, 3D planning software CE). Portal vein embolization CE: contralateral hypertrophy rate CE, PVE technique (right versus left approach CE). Liver transplant assessment CE for HPB surgeons: Milan criteria update, bridging therapy CE for HCC waitlist candidates (ablation, TACE, SIRT).' },
  { phase: 'Jul–Aug', task: 'Pancreatectomy CE: LEOPARD-2 and DIPLOMA trial updates (annual follow-up data if published). Postoperative pancreatic fistula CE: ISGPF 2023 update, drain management CE (early drain removal protocol for low-risk anastomosis). Pancreatic exocrine insufficiency CE: PEI after pancreatectomy — PERT dosing CE, monitoring CE. Vascular resection CE: superior mesenteric vein/portal vein resection and reconstruction for borderline resectable pancreatic cancer — outcomes CE (R0 rate, 5-year survival comparison). Annual fellowship teaching CE if academic HPB surgeon (AHPBA resident/fellow education CE).' },
  { phase: 'Sep–Oct', task: 'SSAT annual meeting (DDW — spring or fall depending on year) or ESSO European CE: HPB oncology CE, minimally invasive technique CE. AHPBA self-assessment CME: HPB-specific SA-CME module completion (required for ABS self-assessment CME category). Hilar cholangiocarcinoma resectability CE: annual review of Blumgart staging, vascular involvement assessment, future liver remnant planning. Annual laparoscopic skills CE: objective structured assessment of technical skills (OSATS) for hepatectomy if available through SAGES or AHPBA.' },
  { phase: 'Nov–Dec', task: 'ABS MOC documentation: verify CME credits logged in ABS portfolio. If within 2 years of ABS Certifying Examination, begin exam preparation calendar (5-year pass rate HPB — 87% first attempt). AHPBA Fellowship renewal documentation: if renewal due within 12 months, verify all requirements met. Hospital privileging renewal: major hepatectomy, pancreatoduodenectomy, biliary reconstruction — credentialing audit (most institutions require 10-15 major HPB procedures per year minimum). ACS NSQIP annual report review: HPB outcomes benchmark versus national peer group, identify QI project for following year.' },
]

export default function HepatoPancreatoBliliarySurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For HPB Surgeons"
        title={
          <>
            ABS MOC and AHPBA Fellowship tracked in parallel.
            <br />
            <em className="not-italic text-gold">Robotic hepatectomy CE, minimally invasive pancreatectomy CE, hilar cholangiocarcinoma staging CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Hepato-pancreato-biliary surgeons carry two parallel CME obligations: ABS general surgery 10-year MOC with self-assessment CME requirement and AHPBA Fellowship 5-year renewal with HPB case volume attestation. Annual CE priorities include ORANGE II PLUS laparoscopic versus open major hepatectomy, DROB robotic hepatectomy trial, LEOPARD-2 minimally invasive pancreatoduodenectomy, DIPLOMA robotic distal pancreatectomy, and hilar cholangiocarcinoma staging CE. A CME calendar that misses the AHPBA HPB-specific content requirement fails the most distinctive renewal obligation. Momenties structures the full HPB CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For HPB Surgeons' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for HPB surgeons: ABS/AHPBA dual credential, hepatectomy technique CE, pancreatectomy CE, and biliary disease CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month HPB CME schedule from AHPBA annual meeting through NSQIP outcome review and year-end ABS documentation.</h2>
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
                &ldquo;The AHPBA case volume attestation was the requirement I consistently underestimated. I was doing the CME credits fine but never had a systematic audit of whether I was hitting 50 major HPB procedures per year for Fellowship renewal. When I added a mid-year procedural log review in June, I discovered in year 3 of my renewal cycle that I was at 19 major HPB cases — below pace because I had taken a sabbatical. I had 18 months to course-correct, which I did. The LEOPARD-2 CE reminder was the other thing that changed my practice discussion. That trial was stopped for excess mortality in the laparoscopic arm, but I kept getting fellowship applicants who wanted to do laparoscopic PDs. Having the CE block scheduled in May meant I read the full safety data and the center-specific outcomes before the academic year, so I could have the nuanced conversation: high-volume standardized centers still get good outcomes, but the threshold for patient selection is higher than we thought. The DROB robotic hepatectomy CE was the newest addition — I added it when the trial published and it is now my annual anchor for the robotic technique review before our HPB tumor board case volume increases in Q4.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus O., MD, FACS, FAHPBA</div>
                  <div className="text-xs text-muted-foreground">HPB Surgeon, academic medical center HPB program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical technique review for HPB surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC — 10-year cycle, 90 credits, 30 SA-CME required, exam preparation calendar',
                'AHPBA Fellowship renewal — 50 credits per 5 years, HPB-specific content, case volume attestation annual',
                'Hepatectomy CE — ORANGE II PLUS laparoscopic vs open, DROB robotic trial, ALPPS vs PVE LIGRO',
                'ICG fluorescence CE — liver margin visualization, biliary leak detection, parenchyma sparing technique',
                'Pancreatectomy CE — LEOPARD-2 minimally invasive PD safety, DIPLOMA robotic distal, ERAS HPB 2023',
                'Biliary CE — laparoscopic CBDE vs ERCP E-SURGE trial, Bismuth-Corlette hilar CCA staging update',
                'AHPBA annual meeting CE — spring, 15-20 HPB-specific credits, robotic simulation workshop',
                'NSQIP HPB module — annual report review, hepatectomy/pancreatectomy outcomes vs national benchmark',
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
        title="ABS MOC and AHPBA Fellowship tracked in parallel. HPB case volume attested mid-year."
        subtitle="HPB surgery CME calendar: dual credential tracking, robotic hepatectomy CE, minimally invasive pancreatectomy CE, biliary staging CE, and NSQIP quality review — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
