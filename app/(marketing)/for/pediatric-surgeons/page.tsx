import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pediatric Surgeon CME Calendar — ABP + ABS MOC, neonatal surgery CE, minimally invasive pediatric surgery CE, pediatric trauma CE',
  description:
    'Pediatric surgeons managing dual ABP general pediatrics and ABS general surgery MOC track annual neonatal surgery CE (tracheoesophageal fistula thoracoscopic repair outcomes, congenital diaphragmatic hernia ECMO decision CE, anorectal malformation laparoscopic Peña CE), minimally invasive pediatric surgery CE (laparoscopic Kasai portoenterostomy CE, thoracoscopic CDH repair TROCARS trial, single-incision pediatric laparoscopy), and pediatric trauma CE (APSA nonoperative management solid organ injury 2024 update, pediatric damage control CE, pediatric massive transfusion protocol). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/pediatric-surgeons' },
  openGraph: {
    title: 'Pediatric Surgeon CME Calendar',
    description: 'ABP + ABS dual MOC, neonatal surgery CE, minimally invasive pediatric surgery CE, and pediatric trauma CE — one structured calendar.',
    url: '/for/pediatric-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABP general pediatrics MOC (continuous 5-year) + ABS general surgery MOC (10-year cycle) — two boards, two cycles, two credit banks',
    desc: 'Pediatric surgeons completing general surgery residency and pediatric surgery fellowship maintain both ABS general surgery certification (10-year cycle, 90 CME credits with 30 SA-CME) and ABP general pediatrics certification (continuous 5-year cycle, 100 MOC points: 40 medical knowledge, 20 PQI, 40 medical knowledge activities). The APSA (American Pediatric Surgical Association) does not issue a separate board certification — pediatric surgery is an ABS subspecialty certificate. However, many pediatric surgeons also hold or pursue ABP certification when their training included pediatrics. The dual-board structure means two separate renewal calendars with different cycle lengths, different credit categories, and different assessment requirements. A CME calendar that ignores the ABP continuous cycle while focusing on the 10-year ABS cycle allows ABP MOC to fall behind silently. Momenties tracks both simultaneously.',
  },
  {
    icon: Clock,
    title: 'Annual neonatal surgery CE — tracheoesophageal fistula thoracoscopic outcomes, CDH ECMO decision CE, anorectal malformation CE',
    desc: 'Neonatal surgery CE requires annual updates as thoracoscopic approaches mature and CDH management data accumulates. Tracheoesophageal fistula CE: thoracoscopic TEF repair outcomes — BAPS/EUPSA multi-center registry data (thoracoscopic versus open: recurrent fistula 8% versus 4%, anastomotic leak 12% versus 9%, hypercapnia CE for thoracoscopic approach in neonates under 2kg). Long-gap EA CE: LAPSE trial (traction CE for gap reduction, circular myotomy CE, jejunal interposition CE for gap greater than 4 vertebral bodies). CDH CE: CDH EURO consortium 2024 survival benchmark (survival with ECMO 57%, without ECMO 79%), ECMO entry criteria CE (oxygenation index >40, pH <7.2 refractory CE), CDH intervention CE (fetal FETO — tracheal occlusion TOTAL trial 2-year neurodevelopmental outcomes). Anorectal malformation CE: laparoscopic-assisted Peña PSARP CE, Krickenbeck classification, colostomy versus primary repair in newborn CE.',
  },
  {
    icon: BarChart3,
    title: 'Annual minimally invasive pediatric surgery CE — thoracoscopic CDH TROCARS trial, laparoscopic Kasai, single-incision pediatric laparoscopy',
    desc: 'Minimally invasive pediatric surgery CE tracks rapidly evolving evidence for thoracoscopic and laparoscopic approaches in children. Thoracoscopic CDH CE: TROCARS trial — thoracoscopic versus open CDH repair in neonates, international RCT, recurrence rate thoracoscopic 12% versus open 5% at 2 years — CE on patient selection (patch repair, poor lung compliance: open preferred). Laparoscopic Kasai CE: laparoscopic portoenterostomy versus open — BAPS registry 5-year native liver survival equivalent (52% versus 54%), CE on Kasai timing (day of life 30-60 optimal window CE, ARPKD cholangiopathy CE). Single-incision pediatric surgery CE: SILS appendectomy in children 3-year outcomes, robotic-assisted pediatric surgery CE (robotic fundoplication, robotic pyeloplasty in pediatric — RALPN versus laparoscopic CE for duplex systems and horseshoe kidney). CE also covers surgical technique for pediatric obesity CE: sleeve gastrectomy TEEN-LABS 5-year outcomes in adolescents 14-19.',
  },
  {
    icon: Users,
    title: 'Annual pediatric trauma CE — APSA nonoperative management update, pediatric damage control, and pediatric massive transfusion protocol',
    desc: 'Pediatric trauma CE updates annually as nonoperative management criteria expand and damage control protocols are refined. APSA nonoperative management CE: 2024 update for solid organ injury — spleen grade IV (CT blush without intervention for hemodynamically stable child: 94% success rate); liver grade IV nonoperative management (hepatic artery embolization CE for grade IV with CT blush); pancreatic injury CE (APSA pancreas WG — distal pancreatectomy versus duct stent CE for grade III injury in children). Pediatric damage control CE: DCR in pediatric trauma (1:1:1 FFP/PRBC/platelets CE for penetrating pediatric trauma, TXA dose CE — 15mg/kg bolus plus 15mg/kg infusion CRASH-3 pediatric subgroup). Pediatric massive transfusion protocol CE: viscoelastic hemostasis (TEG/ROTEM in pediatric trauma CE, fibrinogen replacement threshold CE). Child abuse recognition CE: abusive head trauma CE, posterior rib fracture CE, retinal hemorrhage CE — required in many state CME portfolios annually.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS MOC cycle audit: verify 90-credit running total, SA-CME 30-credit component, and ACS NSQIP or equivalent quality module completion. ABP MOC audit: verify continuous cycle running total — if ABP board held, verify 100 MOC points on 5-year pace. APSA quality registry enrollment current (NSQIP Pediatric or NSQIP Pediatric hospital track). Annual congenital anomaly case log review: TEF/EA, CDH, anorectal malformation annual volume for credentialing.' },
  { phase: 'Mar–Apr', task: 'APSA annual meeting (spring): 15-20 pediatric surgery-specific CME credits. Neonatal surgery session CE: TEF thoracoscopic outcomes update, CDH management session. Minimally invasive session CE: laparoscopic versus thoracoscopic technique update, robotic pediatric surgery emerging data. Pediatric trauma session CE: APSA nonoperative management guideline presentation. Annual abdominal wall CE: CDH patch repair technique, gastroschisis surgical management update, omphalocele CE. Pediatric oncology surgery CE: Wilms tumor COG protocol update, hepatoblastoma PRETEXT staging CE.' },
  { phase: 'May–Jun', task: 'Neonatal surgery CE literature review: TEF/EA registry data (BAPS/EUPSA annual publication), CDH EURO consortium survival benchmark update. Pediatric GI surgery CE: Hirschsprung disease pull-through technique CE (single-stage transanal versus laparoscopic-assisted, redo pull-through CE), intussusception CE (pneumatic reduction success rate update, surgical CE for pneumatic failure), pyloric stenosis CE (laparoscopic versus open Ramstedt outcomes). Intestinal failure CE: short bowel syndrome STEP procedure versus LILT CE, intestinal transplant criteria CE.' },
  { phase: 'Jul–Aug', task: 'Minimally invasive pediatric surgery CE: TROCARS trial 2-year data review. Laparoscopic Kasai CE literature review. Robotic pediatric surgery platform CE: da Vinci Xi for fundoplication, pyeloplasty, cholecystectomy in pediatric — outcome data update. Pediatric trauma CE: APSA NOM guideline annual update review. Child abuse recognition CE: mandatory state CME requirements review — abusive head trauma, fracture patterns CE. Pediatric obesity surgery CE: TEEN-LABS 5-year follow-up review if published.' },
  { phase: 'Sep–Oct', task: 'IPEG annual meeting (International Pediatric Endosurgery Group — fall): minimally invasive pediatric surgery CE. Thoracoscopic and laparoscopic CE credits (largest MIPS CE event). Robotic simulation CE if offered at IPEG. ABS subspecialty certificate in pediatric surgery: if within 2 years of exam, begin ABS pediatric surgery certifying exam preparation (10-year cycle for subspecialty certificate separate from general surgery). Pediatric anesthesia CE: joint CE with anesthesia team on neonatal anesthesia considerations, CDH anesthetic management, one-lung ventilation in neonate.' },
  { phase: 'Nov–Dec', task: 'ABS MOC documentation: verify all credits logged in ABS portfolio. ABP documentation if applicable. APSA quality registry annual report: NSQIP Pediatric risk-adjusted outcomes review for pediatric surgery service line (appendectomy SSI rate, intestinal obstruction readmission rate, neonatal surgery mortality versus national benchmark). Hospital privileging renewal: neonatal surgery, thoracoscopic CDH, laparoscopic Kasai — credentialing documentation. Annual PA/NP protocol review: pediatric surgery advanced practice standing orders for postoperative care updated.' },
]

export default function PediatricSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pediatric Surgeons"
        title={
          <>
            ABP MOC and ABS MOC tracked in parallel.
            <br />
            <em className="not-italic text-gold">Neonatal surgery CE, TROCARS minimally invasive CE, APSA nonoperative management update — scheduled before deadlines close.</em>
          </>
        }
        lede="Pediatric surgeons carry two parallel CME obligations: ABS general surgery 10-year MOC with SA-CME requirement and ABP general pediatrics continuous 5-year MOC if held. Annual CE priorities include thoracoscopic TEF/CDH TROCARS outcomes, laparoscopic Kasai portoenterostomy data, APSA nonoperative solid organ management 2024 update, CDH ECMO decision criteria, and pediatric massive transfusion protocol. A CME calendar that misses the ABP continuous cycle while tracking the 10-year ABS deadline allows one board to fall behind silently. Momenties structures the full pediatric surgery CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Pediatric Surgeons' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for pediatric surgeons: dual ABS/ABP MOC, neonatal surgery CE, minimally invasive pediatric CE, and pediatric trauma CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month pediatric surgery CME schedule from APSA annual meeting through IPEG minimally invasive CE and year-end ABS documentation.</h2>
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
                &ldquo;I did not realize I was behind on ABP MOC until the portal sent me a warning 8 months before the cycle closed. I had been tracking my ABS credits carefully but treating the ABP as a secondary obligation because my practice is surgical. The calendar I built in Momenties tracks both boards simultaneously with independent running totals, and I can see at a glance if either cycle is behind pace. The TROCARS trial CE reminder was the most practically important one — we had been offering thoracoscopic CDH repair broadly and the 2-year recurrence data changed our patient selection criteria significantly. I reviewed the data in June, changed our CDH tumor board discussion template in July, and we had two CDH cases in August where the updated criteria led us to recommend open rather than thoracoscopic. The neonatal trauma CE block in August became my anchor for child abuse recognition CE — that is a mandatory state requirement in our state and I had been completing it reactively. Now it is in the calendar as a recurring August event and I am always current before the academic year starts.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Thandiwe M., MD, FACS, FAAP</div>
                  <div className="text-xs text-muted-foreground">Pediatric Surgeon, children&apos;s hospital academic practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical technique review for pediatric surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC — 10-year cycle, 90 credits, 30 SA-CME, NSQIP quality module',
                'ABP general pediatrics MOC — continuous 5-year cycle, 100 points, tracked if board held',
                'Neonatal surgery CE — TEF thoracoscopic outcomes, CDH ECMO decision, anorectal CE annual',
                'CDH CE — EURO consortium survival benchmark, FETO TOTAL trial neurodevelopmental outcomes',
                'Minimally invasive CE — TROCARS trial, laparoscopic Kasai 5-year data, robotic pediatric CE',
                'Pediatric trauma CE — APSA NOM 2024 update, DCR in children, TEG/ROTEM massive transfusion',
                'APSA annual meeting CE — spring, 15-20 pediatric surgery-specific credits',
                'IPEG annual meeting CE — fall, largest minimally invasive pediatric surgery CE event',
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
        title="ABS MOC and ABP MOC tracked in parallel. Neonatal and minimally invasive CE scheduled annually."
        subtitle="Pediatric surgery CME calendar: dual board tracking, neonatal surgery CE, TROCARS minimally invasive CE, APSA nonoperative management updates, and child abuse recognition CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
