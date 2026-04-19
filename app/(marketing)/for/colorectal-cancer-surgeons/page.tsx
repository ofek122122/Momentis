import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Colorectal Cancer Surgeon CME Calendar — ABS MOC, ASCRS CE, robotic colectomy CE, HIPEC CE, total neoadjuvant therapy CE',
  description:
    'Colorectal cancer surgeons managing ABS general surgery and ABS colon and rectal surgery MOC track annual robotic colectomy CE (robotic versus laparoscopic right colectomy ROLARR CE, intracorporeal versus extracorporeal anastomosis CE, robotic rectal surgery curative resection CE), total neoadjuvant therapy CE (RAPIDO trial CE, PRODIGE 23 CE, watch-and-wait CE for clinical complete response), HIPEC CE (PRODIGE-7 no HIPEC benefit CE, HIPEC for appendiceal CE, cytoreductive surgery CE), and early-onset colorectal cancer CE (screening age lowering CE, hereditary cancer syndrome CE, Lynch syndrome CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/colorectal-cancer-surgeons' },
  openGraph: {
    title: 'Colorectal Cancer Surgeon CME Calendar',
    description: 'ABS primary + CRS MOC, robotic colectomy CE, total neoadjuvant therapy CE, HIPEC CE, and early-onset CRC CE — one structured calendar.',
    url: '/for/colorectal-cancer-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABS general surgery MOC (10-year) + ABS colon and rectal surgery subspecialty certificate — two separate exam cycles, two credit requirements',
    desc: 'Colorectal cancer surgeons hold ABS general surgery certification (10-year MOC cycle, 90 CME credits, 30 SA-CME) and most pursue the ABS subspecialty certificate in colon and rectal surgery, which requires a separate 10-year recertification cycle with its own Part III examination. ASCRS (American Society of Colon and Rectal Surgeons) annual meeting provides the largest single-event block of colorectal-specific CME. ACS NSQIP colorectal module participation is required for ASCRS Accredited Education Institute programs. A CME calendar that tracks only the general surgery ABS cycle misses the CRS subspecialty certificate renewal timing — if the subspecialty certificate exam falls in the same year as the primary ABS exam, preparation resources are split. Momenties tracks both cycles separately with exam preparation lead time built in when cycles overlap.',
  },
  {
    icon: Clock,
    title: 'Annual robotic colorectal CE — ROLARR trial long-term CE, intracorporeal versus extracorporeal anastomosis CE, robotic rectal cancer CE',
    desc: 'Robotic colorectal CE requires annual updates as robotic versus laparoscopic comparative data matures and rectal resection outcomes accumulate. ROLARR trial CE: robotic versus laparoscopic rectal resection 3-year outcomes — conversion rate robotic 8.1% versus laparoscopic 12.2% (CE on conversion CE definition), CRM positivity equivalent (5.7% versus 4.0%), 30-day complication rate equivalent. Robotic right colectomy CE: intracorporeal versus extracorporeal anastomosis — ROCCA trial CE (intracorporeal CE: shorter ileus, faster return to diet, equivalent 30-day complications). Robotic rectal surgery CE: total mesorectal excision quality CE (ISREC grade CE, CRM and DRM CE), nerve preservation CE for urinary and sexual function, transanal TME CE (TaTME versus robotic — distal margin CE, hybrid approach CE). Robotic learning curve CE: ACS NSQIP colorectal robotic program assessment CE. Annual NOTES and single-port colorectal CE if applicable.',
  },
  {
    icon: BarChart3,
    title: 'Annual total neoadjuvant therapy CE — RAPIDO and PRODIGE 23 data, watch-and-wait CE for clinical complete response, organ preservation CE',
    desc: 'Total neoadjuvant therapy CE is the highest-volume CE update in colorectal oncology as watch-and-wait evidence matures. TNT CE: RAPIDO trial (short-course radiation plus consolidation chemotherapy — pathologic complete response 28% versus 14%, distant metastasis 24% versus 30% at 3 years) versus PRODIGE 23 (long-course radiation plus induction FOLFOX — pCR 28% versus 12% CRT-only). Comparison CE: RAPIDO versus PRODIGE 23 for locally advanced rectal cancer — pCR equivalent, 3-year DFS CE. Watch-and-wait CE: OPRA trial CE (organ preservation — TNT followed by watch-and-wait for cCR, 3-year TME-free survival 41% versus 38% for consolidation versus induction), International Watch and Wait Database CE (5-year data — 25% regrowth rate, 94% salvage resection success). Organ preservation CE: local excision CE after TNT for ypT0-1, transanal minimally invasive surgery CE (TAMIS) for completion after near-complete response, endoscopic CE for surveillance during watch-and-wait. Annual rectal cancer multidisciplinary CE: radiologist re-staging CE after TNT (MRI response CE, T2 versus T3 post-TNT CE).',
  },
  {
    icon: Users,
    title: 'Annual HIPEC CE — PRODIGE-7 no benefit CE, pseudomyxoma peritonei CE, appendiceal neoplasms CE, Lynch syndrome CE',
    desc: 'HIPEC CE requires annual updates as the landmark PRODIGE-7 evidence matures and peritoneal surface oncology indications are refined. HIPEC CE: PRODIGE-7 trial CE — colorectal peritoneal metastasis CRS + HIPEC versus CRS alone: OS equivalent (41.7 versus 41.2 months), HIPEC added morbidity CE. CE on persisting HIPEC indications: appendiceal neoplasms (PSOGI consensus CE — low-grade versus high-grade PMP CE), mesothelioma CE, ovarian CE. Early-onset CRC CE: USPSTF 2021 recommendation lowering screening to age 45 CE, early-onset CRC risk factors (processed meat, obesity, microbiome CE), hereditary syndrome CE. Lynch syndrome CE: universal mismatch repair testing CE (MSI/IHC for all CRC), germline testing CE for MLH1/MSH2/MSH6/PMS2, Lynch-associated cancer surveillance CE. Familial adenomatous polyposis CE: APC germline testing CE, colectomy timing CE (ileal pouch versus Koch pouch versus proctocolectomy CE for classic versus attenuated FAP). Annual colostomy reversal CE: Hartmann reversal CE, ileostomy closure timing CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS primary MOC audit: 10-year cycle credits (90 total, 30 SA-CME). CRS subspecialty certificate cycle audit: exam date, preparation plan if within 3 years. ASCRS quality registry enrollment current: ACS NSQIP colorectal module data submission current, anastomotic leak rate versus national benchmark reviewed. Annual tumor board CE: multidisciplinary rectal cancer team CE documentation — MRI staging CE, TNT eligibility CE, watch-and-wait protocol CE reviewed and updated. Lynch syndrome universal testing protocol: MMR IHC and MSI testing on all CRC specimens — compliance rate reviewed.' },
  { phase: 'Mar–Apr', task: 'ASCRS annual meeting (spring): 20-25 colorectal-specific CME credits. Robotic colorectal session CE: ROLARR update, TaTME session. TNT and organ preservation session CE: watch-and-wait protocol update. HIPEC and peritoneal surface oncology session CE. Early-onset CRC session CE. Lynch and hereditary session CE. Transanal TME CE: taTME technique CE — LOREC registry data, complication CE (urethral injury, CO2 insufflation CE). TAMIS CE: platform CE, technique CE for local excision and completion after organ preservation.' },
  { phase: 'May–Jun', task: 'TNT CE literature review: RAPIDO and PRODIGE 23 5-year follow-up data review (NEJM, Lancet Oncology annual update). Watch-and-wait CE: OPRA trial 5-year data review, International WWDB update. Organ preservation CE: ypT0 local excision outcomes CE. Robotic colorectal CE literature review: intracorporeal anastomosis ROCCA trial update. ACS NSQIP colorectal annual report: anastomotic leak rate, surgical site infection rate versus national benchmark — QI project identified. Annual transverse coloplasty CE: low anterior resection syndrome CE (LARS score CE), coloplasty versus colonic J-pouch CE.' },
  { phase: 'Jul–Aug', task: 'HIPEC CE: PRODIGE-7 5-year data review, appendiceal neoplasms PSOGI CE update. Peritoneal surface oncology CE: cytoreductive surgery patient selection CE (Sugarbaker PCI CE, completeness of cytoreduction CE). Pseudomyxoma peritonei CE: DPAM versus PMCA CE, CRS technique CE for PMP. Hereditary CRC CE: APC familial adenomatous polyposis CE update, MUTYH-associated polyposis CE. Serrated polyp CE: sessile serrated lesion management CE, surveillance interval CE (ACG 2023 polyp surveillance guideline update). Early-onset CRC CE: microbiome CE, diet CE, lifestyle CE for early-onset prevention.' },
  { phase: 'Sep–Oct', task: 'SSAT or ASCO colorectal meeting CE if attending: multidisciplinary CRC CE, oncology CE integration. Robotic colorectal surgery CE: annual platform update (da Vinci Xi versus Ion CE, Versius CE). Rectal cancer pathology CE: ISREC grading CE for TME quality, CRM CE for adjuvant therapy decision. Annual diverticulitis CE: DIRECT trial (antibiotics versus surgery CE), LADIES trial CE, Hinchey classification update CE, sigmoid resection CE. Annual IBD surgery CE: proctocolectomy with IPAA for UC CE, pouch complications CE (cuffitis CE, pouchitis CE). Annual anal cancer CE: chemoradiation response CE, salvage APR CE.' },
  { phase: 'Nov–Dec', task: 'ABS documentation: verify all credits logged. CRS subspecialty certificate documentation: verify credits logged. Hospital privileging renewal: robotic colorectal, laparoscopic colectomy, HIPEC — annual case volume documentation. Lynch syndrome registry: referral rate to genetic counseling reviewed — compliance CE. Annual NSQIP colorectal report submission: 2024 outcomes data. ACS quality program CE: Surgical Quality Alliance CE participation. ABS CRS subspecialty exam preparation: if exam within 24 months — study plan initiated (Shackelford CE, ACS surgery textbook CE, ASCRS self-assessment CE).' },
]

export default function ColorectalCancerSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Colorectal Cancer Surgeons"
        title={
          <>
            ABS primary MOC and CRS subspecialty certificate tracked in parallel.
            <br />
            <em className="not-italic text-gold">TNT watch-and-wait CE, PRODIGE-7 HIPEC CE, robotic TME CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Colorectal cancer surgeons carry two ABS certification obligations: general surgery 10-year MOC and CRS subspecialty certificate 10-year recertification. Annual CE priorities include RAPIDO versus PRODIGE 23 TNT comparison, OPRA watch-and-wait 5-year organ preservation data, PRODIGE-7 HIPEC-no-benefit CE, robotic rectal ROLARR CE, and Lynch syndrome universal MMR testing CE. A CME calendar that misses CRS subspecialty certificate timing risks back-to-back exams with insufficient preparation time. Momenties structures the full colorectal cancer CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Colorectal Cancer Surgeons' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for colorectal cancer surgeons: ABS dual certificate tracking, robotic colorectal CE, TNT organ preservation CE, and HIPEC/Lynch CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month colorectal cancer CME schedule from ASCRS annual meeting through NSQIP annual report and year-end ABS documentation.</h2>
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
                &ldquo;The watch-and-wait CE was the most practice-changing update I have had in the last 3 years. The OPRA 5-year data confirmed organ preservation rates that I had been cautiously counseling patients about, and having the annual June CE review block meant I updated my watch-and-wait consent protocol before our new academic year started. The CRS subspecialty certificate calendar was the reason I started using Momenties — I had my primary ABS exam in year 5 and discovered that my CRS subspecialty certificate exam was scheduled for year 8. That left me 3 years between two major board exams, but I had not started any preparation for the CRS exam. The dual-certificate calendar gave me visibility to that overlap two years in advance. The HIPEC CE was the most clinically nuanced — PRODIGE-7 showed no benefit for CRC peritoneal metastasis, but I still do HIPEC for appendiceal neoplasms and mesothelioma. The annual June CE review keeps that distinction current so I am not over-applying or under-applying the indication based on a headline CE from three years ago.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elena W., MD, FACS, FASCRS</div>
                  <div className="text-xs text-muted-foreground">Colorectal Cancer Surgeon, academic colorectal surgery program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical evidence review for colorectal cancer surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC — 10-year cycle, 90 credits, 30 SA-CME, NSQIP quality module',
                'CRS subspecialty certificate — 10-year cycle, separate exam prep calendar tracked vs primary ABS',
                'Robotic colorectal CE — ROLARR 3-year data, intracorporeal anastomosis ROCCA CE, TaTME CE',
                'TNT CE — RAPIDO vs PRODIGE 23, OPRA watch-and-wait 5-year CE, organ preservation CE',
                'HIPEC CE — PRODIGE-7 no benefit CE, appendiceal neoplasms PSOGI CE, mesothelioma CE',
                'Lynch syndrome CE — universal MMR testing, germline testing protocol, surveillance CE',
                'ASCRS annual meeting CE — spring, 20-25 colorectal-specific credits, TNT and robotic sessions',
                'NSQIP colorectal module — anastomotic leak rate vs benchmark, QI project identification',
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
        title="ABS primary MOC and CRS subspecialty certificate tracked in parallel. TNT and robotic CE scheduled annually."
        subtitle="Colorectal cancer surgery CME calendar: dual ABS certificate tracking, RAPIDO/PRODIGE 23 TNT CE, OPRA watch-and-wait organ preservation CE, PRODIGE-7 HIPEC CE, and ASCRS annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
