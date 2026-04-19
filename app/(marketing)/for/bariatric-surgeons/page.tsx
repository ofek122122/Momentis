import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bariatric Surgeon CME Calendar — ABS MOC, ASMBS membership CE, sleeve gastrectomy CE, RYGB CE, GLP-1 interaction CE, revisional CE',
  description:
    'Bariatric surgeons managing ABS general surgery MOC alongside ASMBS (American Society for Metabolic and Bariatric Surgery) Bariatric Surgery Center of Excellence accreditation requirements track annual sleeve gastrectomy CE (SG versus RYGB SLEEVEPASS 5-year outcomes, SG GERD progression CE, SG staple line reinforcement CE), RYGB CE (single-anastomosis gastric bypass OMEGA trial CE, laparoscopic versus robotic RYGB comparative outcomes), GLP-1 receptor agonist interaction CE (perioperative semaglutide management, post-bariatric GLP-1 CE for inadequate weight loss), and revisional CE (SG to RYGB conversion CE, anastomotic ulcer CE, dumping syndrome CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/bariatric-surgeons' },
  openGraph: {
    title: 'Bariatric Surgeon CME Calendar',
    description: 'ABS MOC, ASMBS BSCOE accreditation CE, sleeve gastrectomy CE, RYGB CE, and GLP-1 interaction CE — one structured calendar.',
    url: '/for/bariatric-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABS general surgery MOC (10-year) + ASMBS BSCOE accreditation CE requirements — center accreditation ties team CE compliance to surgical privileges',
    desc: 'Bariatric surgeons maintain ABS general surgery certification (10-year MOC cycle, 90 CME credits, 30 SA-CME) while their operating privileges depend on ASMBS Bariatric Surgery Center of Excellence or MBSAQIP (Metabolic and Bariatric Surgery Accreditation and Quality Improvement Program) accreditation. MBSAQIP requires that bariatric surgeons performing primary procedures at accredited centers maintain current ASMBS membership, complete MBSAQIP data entry and quality review, and meet minimum annual case volume requirements (50+ primary bariatric procedures per year for high-volume center, 25 for low-acuity center). The ASMBS Clinical Issues and Guidelines Committee publishes annual guideline updates that require surgeon CE review for accreditation compliance. A CME calendar that tracks only ABS MOC misses MBSAQIP accreditation CE documentation and annual case volume audit. Momenties tracks both cycles simultaneously with accreditation deadline alerts.',
  },
  {
    icon: Clock,
    title: 'Annual sleeve gastrectomy CE — SLEEVEPASS 5-year outcomes, GERD progression data, staple line reinforcement CE',
    desc: 'Sleeve gastrectomy CE requires annual updates as GERD progression data accumulates and the SG-versus-RYGB debate matures. SLEEVEPASS CE: 5-year outcomes (SG versus RYGB — total weight loss SG 49% versus RYGB 57% EWL, T2DM remission SG 37% versus RYGB 45%, GERD new onset SG 25% versus RYGB 5% — CE on patient selection algorithm with GERD history). SM-BOSS trial CE: 5-year data (equivalent weight loss, GERD superior RYGB). GERD progression CE: de novo GERD after SG — Barrett&apos;s esophagus risk CE (AGA guideline: mandatory endoscopy 2 years post-SG if symptoms, CE on surveillance protocol). Staple line reinforcement CE: buttressed versus oversewn versus staple line without reinforcement — meta-analysis 2024 (no difference in leak rate CE, oversewing superior staple line bleeding CE). Hiatal hernia CE: concurrent hiatal hernia repair at time of SG — CE on identification technique, crura repair versus fundoplication CE for GERD prevention.',
  },
  {
    icon: BarChart3,
    title: 'Annual RYGB CE — OMEGA single-anastomosis trial, robotic versus laparoscopic outcomes, internal hernia CE',
    desc: 'RYGB CE updates annually as single-anastomosis gastric bypass (SAGB/MGB) data matures and robotic outcomes accumulate. Single-anastomosis gastric bypass CE: OMEGA trial — SAGB versus RYGB RCT, 5-year EWL equivalent (57% versus 62%), bile reflux SAGB 2.3% versus RYGB 0.6% CE — CE on informed consent for bile reflux risk and revision implications. Robotic RYGB CE: robotic versus laparoscopic RYGB — MBSAQIP 2024 registry data, leak rate equivalent (0.4% robotic versus 0.5% laparoscopic), OR time longer robotic (140 versus 115 min), conversion rate lower robotic — CE on robotic program implementation and learning curve. Internal hernia CE: Petersen&apos;s defect versus mesenteric defect closure CE — antecolic versus retrocolic Roux limb CE, Peterson closure technique CE (polypropylene suture CE, mesh closure CE). Marginal ulcer CE: anastomotic ulcer risk factors (smoking, NSAIDs, H. pylori), prevention protocol CE, revision anastomosis CE for refractory ulcers.',
  },
  {
    icon: Users,
    title: 'Annual GLP-1 CE — perioperative semaglutide management, post-bariatric GLP-1 for inadequate loss, and aspiration risk CE',
    desc: 'GLP-1 receptor agonist CE is now required annually as perioperative safety data and post-bariatric use indications rapidly evolve. Perioperative semaglutide CE: ASA/ASMBS 2023 guidance — hold semaglutide 1 week before surgery (daily dosing) or 4 weeks before surgery (weekly dosing) due to delayed gastric emptying aspiration risk. NPO extension CE: consider 24-hour liquid diet before surgery for weekly semaglutide patients, point-of-care gastric ultrasound CE for residual content. Post-bariatric GLP-1 CE: SURMOUNT-5 trial CE — semaglutide for weight recidivism post-bariatric (response CE: primary procedure type interaction), tirzepatide CE for inadequate weight loss post-SG or RYGB. OBES-002 trial CE: pharmacotherapy versus revision surgery for inadequate weight loss — CE on shared decision-making protocol. Annual revisional CE: SG to RYGB conversion CE (GERD indication versus weight loss indication — technique CE, outcomes CE), SG to SADI-S CE (single anastomosis duodenoileal bypass — ASMBS 2024 CE).',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS MOC audit: 10-year cycle CME credits verified, SA-CME 30-credit component documented. MBSAQIP accreditation audit: annual case volume verified (50+ primary bariatric procedures for high-volume, 25 for low-acuity), MBSAQIP data submission current, ASMBS membership active. Annual MBSAQIP outcomes report: leak rate, conversion rate, readmission rate versus MBSAQIP national benchmark — variance identified for QI project. GLP-1 perioperative protocol review: current hold protocol matches ASA/ASMBS 2023 guidance, anesthesia team briefed.' },
  { phase: 'Mar–Apr', task: 'ASMBS annual meeting (spring): 15-20 bariatric surgery-specific CE credits. SG versus RYGB session CE: SLEEVEPASS update, GERD progression data. GLP-1 session CE: perioperative management update, post-bariatric pharmacotherapy. SADI-S session CE: duodenoileal bypass outcomes update, ASMBS CPT code CE. Revisional session CE: SG to RYGB conversion, RYGB to RYGB revision, biliary anastomosis revision CE. Endoscopic bariatric CE: endoscopic sleeve gastroplasty CE (ESG versus SG — MERIT trial 2-year outcomes), intragastric balloon CE.' },
  { phase: 'May–Jun', task: 'Annual SG CE literature review (SOARD, Obesity Surgery annual publications): SLEEVEPASS 5-year update if published. Barrett&apos;s surveillance CE: AGA guideline post-SG endoscopy protocol review. Staple line reinforcement CE: annual meta-analysis update. Hiatal hernia concurrent repair CE literature review. RYGB CE: OMEGA trial long-term follow-up data review. Marginal ulcer prevention protocol CE: H. pylori testing before bariatric surgery CE (all patients tested and treated before RYGB — CE on timing). Nutrition CE: post-bariatric micronutrient deficiency CE (iron, B12, folate, thiamine, zinc, vitamin D — ASMBS 2024 nutritional guideline update).' },
  { phase: 'Jul–Aug', task: 'GLP-1 CE: SURMOUNT-5 trial data review if published. Tirzepatide CE for post-bariatric weight recidivism. Perioperative semaglutide CE: any updated guidance since January review. Internal hernia CE: Petersen defect closure CE annual literature review. Robotic RYGB CE: MBSAQIP annual registry report review — robotic versus laparoscopic outcomes update. MBSAQIP mid-year case volume audit: verify 25+ cases if on pace for low-acuity, 50+ if high-volume center — identify surgical scheduling gap if behind pace. Annual psychology CE: pre-bariatric psychological evaluation CE, post-bariatric mental health CE.' },
  { phase: 'Sep–Oct', task: 'SAGES annual meeting (Society of American Gastrointestinal and Endoscopic Surgeons — spring or fall): minimally invasive bariatric CE, robotic CE, endoscopic CE. Annual IFSO (International Federation for the Surgery of Obesity) meeting CE if attending: global bariatric surgery data CE, emerging procedures CE. Revisional bariatric CE: SG-to-RYGB indications and outcomes update. Revisional RYGB CE: anastomotic ulcer revision CE, distalization CE for inadequate weight loss. Bariatric trauma CE: managing acute abdomen in post-bariatric patient (internal hernia CT protocol, leak presentation CE, marginal ulcer perforation CE).' },
  { phase: 'Nov–Dec', task: 'ABS documentation: verify all credits logged before December 31. MBSAQIP annual report submission: 2024 outcomes data submitted to MBSAQIP database before deadline (January). GLP-1 protocol year-end update: hold guidelines updated based on any Q4 ASA or ASMBS guidance updates. Hospital privileging renewal: bariatric surgery minimum annual case volume documentation, robotic privileging CE if robotic program. ASMBS membership renewal: active membership required for MBSAQIP accreditation. Annual patient outcome review: 1-year excess weight loss rate, 1-year T2DM remission rate, leak rate — benchmark versus MBSAQIP national data.' },
]

export default function BariatricSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Bariatric Surgeons"
        title={
          <>
            ABS MOC and MBSAQIP accreditation CE tracked in parallel.
            <br />
            <em className="not-italic text-gold">SLEEVEPASS GERD CE, GLP-1 perioperative management, SG-to-RYGB revision CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Bariatric surgeons carry two parallel obligations: ABS general surgery 10-year MOC and MBSAQIP accreditation CE with annual case volume minimums. Annual CE priorities include SLEEVEPASS 5-year SG versus RYGB GERD progression data, ASA/ASMBS perioperative semaglutide hold protocol, SURMOUNT-5 post-bariatric GLP-1 CE, OMEGA single-anastomosis gastric bypass trial, and SADI-S ASMBS 2024 CE. A CME calendar that misses MBSAQIP case volume tracking or accreditation CE documentation puts center accreditation at risk. Momenties structures the full bariatric surgery CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Bariatric Surgeons' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for bariatric surgeons: ABS/MBSAQIP dual compliance, sleeve gastrectomy CE, RYGB outcomes CE, and GLP-1 perioperative CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month bariatric surgery CME schedule from ASMBS annual meeting through MBSAQIP annual report and year-end ABS documentation.</h2>
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
                &ldquo;The GLP-1 perioperative CE was the most urgent addition to my calendar. We had two near-miss events in late 2023 with patients who had taken weekly semaglutide within 2 weeks of surgery — both required extended NPO and one required aspiration management. The ASA/ASMBS guidance changed in 2023 and we had not updated our pre-operative instructions. The calendar now has a standing January CE block for perioperative GLP-1 guidance review, and we added point-of-care gastric ultrasound to our preoperative protocol. The SLEEVEPASS GERD CE changed how I discuss procedure selection with patients who have pre-existing GERD — the 25% de novo GERD rate after SG versus 5% after RYGB is now in my consent discussion, not just in a brochure I hand them. The MBSAQIP mid-year case volume audit was the feature I did not think I needed — but July showed me I was at 19 primary cases and needed to reach 25 by December for our low-acuity accreditation. I scheduled 8 cases in Q3 that I would have otherwise deferred. The accreditation depends on hitting that number.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patricia G., MD, FACS, FASMBS</div>
                  <div className="text-xs text-muted-foreground">Bariatric Surgeon, MBSAQIP-accredited community bariatric program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical evidence review for bariatric surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC — 10-year cycle, 90 credits, 30 SA-CME, quality module',
                'MBSAQIP accreditation CE — annual case volume audit, data submission, ASMBS membership',
                'Sleeve gastrectomy CE — SLEEVEPASS 5-year, GERD progression, Barrett surveillance protocol',
                'RYGB CE — OMEGA single-anastomosis trial, robotic MBSAQIP registry, internal hernia CE',
                'GLP-1 CE — perioperative semaglutide hold ASA/ASMBS 2023, SURMOUNT-5 post-bariatric CE',
                'Revisional CE — SG-to-RYGB GERD indication, SADI-S ASMBS 2024, distalization CE',
                'ASMBS annual meeting CE — spring, 15-20 bariatric-specific credits, GLP-1 session',
                'MBSAQIP outcomes review — annual leak rate, EWL, T2DM remission vs national benchmark',
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
        title="ABS MOC and MBSAQIP accreditation tracked in parallel. GLP-1 and SG GERD CE scheduled annually."
        subtitle="Bariatric surgery CME calendar: ABS/MBSAQIP dual compliance, SG GERD progression CE, GLP-1 perioperative CE, RYGB outcomes CE, and case volume mid-year audit — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
