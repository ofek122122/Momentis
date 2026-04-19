import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pediatric Ophthalmologist CME Calendar — ABP + AAO MOC, amblyopia treatment CE, pediatric cataract CE, retinopathy of prematurity CE',
  description:
    'Pediatric ophthalmologists managing dual ABP general pediatrics and AAO ophthalmic subspecialty continuing education requirements track amblyopia treatment CE (PEDIG atropine versus patching 2024 update, binocular treatment CE), pediatric cataract CE (Infant Aphakia Treatment Study 10-year outcomes, IOL timing), retinopathy of prematurity CE (ETROP anti-VEGF criteria update, bevacizumab Minion zone I ROP), and pediatric glaucoma CE (trabeculotomy versus goniotomy Childhood Glaucoma Research Network). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/pediatric-ophthalmologists' },
  openGraph: {
    title: 'Pediatric Ophthalmologist CME Calendar',
    description: 'ABP general pediatrics MOC, AAO subspecialty CE, amblyopia treatment, pediatric cataract, and ROP CE — all in one structured calendar.',
    url: '/for/pediatric-ophthalmologists',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABP general pediatrics MOC (continuous) + AAO Fellowship and subspecialty CE requirements tracked separately',
    desc: 'Pediatric ophthalmologists complete ABP general pediatrics maintenance of certification on a continuous 5-year cycle requiring 100 MOC points per 5 years — 40 medical knowledge, 20 practice quality improvement, and 20 safety/professionalism. Simultaneously, the American Academy of Ophthalmology requires 90 CE credits per 3-year cycle for Fellows, with structured subspecialty content in pediatric ophthalmology and strabismus. The dual-track structure means two separate renewal calendars, two separate credit banks, and two separate documentation systems. A CME calendar that treats all credits as interchangeable misses the AAO structured content requirement and the ABP assessment requirement. Momenties maintains both credit banks simultaneously with deadline alerts before each cycle closes.',
  },
  {
    icon: Clock,
    title: 'Annual amblyopia treatment CE — PEDIG protocol updates, binocular treatment evidence, and patching compliance data',
    desc: 'Amblyopia management is in active transition as binocular treatment evidence accumulates alongside the established PEDIG patching and atropine protocols. Annual CE in amblyopia tracks the PEDIG atropine versus patching 10-year outcomes (2024 update: similar acuity outcomes, atropine superior compliance in preschool cohort), binocular treatment CE (dichoptic game-based therapy BRAVO trial — 2 hours per day, no superior outcome to patching at 16 weeks, but compliance data from real-world Luminopia data), and refractive error CE (PEDIG refractive correction amblyopia study — 16 weeks spectacle correction before patching in moderate amblyopia, updated refraction thresholds). CME calendar alert: PEDIG updates publish annually in JAAPOS — review immediately on publication.',
  },
  {
    icon: BarChart3,
    title: 'Annual pediatric cataract CE — Infant Aphakia Treatment Study outcomes, IOL timing, and perioperative care updates',
    desc: 'Pediatric cataract management requires CE updates as the Infant Aphakia Treatment Study (IATS) long-term outcomes data matures. Annual CE tracks the IATS 10-year outcomes (contact lens versus IOL for unilateral cataract under 7 months — contact lens arm: 1.3 logMAR, IOL arm: 1.2 logMAR, no statistically significant difference; adverse event rate IOL arm 72% versus contact lens arm 49% — CE on updated risk-benefit communication), bilateral cataract IOL timing CE (early bilateral: improved outcomes versus deferred; CCCT guideline update 2024 IOL power calculation in infants under 3 months), and perioperative CE (PANDA study: postoperative atropine penalization versus patching after bilateral cataract). Momenties flags the JAAPOS and Journal of Cataract and Refractive Surgery pediatric cataract sections for annual review.',
  },
  {
    icon: Users,
    title: 'Annual ROP CE — anti-VEGF criteria, bevacizumab zone I ROP data, and telemedicine screening protocols',
    desc: 'Retinopathy of prematurity CE updates annually as anti-VEGF therapy moves from rescue to primary treatment in select cases. Annual ROP CE tracks the ETROP anti-VEGF criteria update (bevacizumab Minion trial — zone I any stage plus ROP, zone II posterior stage 3+: 0.625mg versus laser, reactivation risk 24-26 weeks gestation requiring extended follow-up to 65 weeks PMA), telemedicine ROP screening CE (Stanford Photoscreening NICU validation, ICON-ROP diagnostic accuracy CE, tele-ROP program implementation requirements), and laser versus anti-VEGF decision CE (zone II stage 3+: BEAT-ROP 3-year structural outcomes, myopia risk differential). CME calendar alert: AAO PPP ROP updated 2024 — mandatory review. Neonatal NICU ROP call schedule tracked separately with NCQA requirements.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABP MOC points audit: verify 5-year cycle running total (medical knowledge, PQI, safety/professionalism). If behind on PQI component — identify QI project before mid-year ABP reporting window. AAO CE running total verified against 3-year cycle end date. ABMS portfolio update completed for any prior-year CE completed but not logged.' },
  { phase: 'Mar–Apr', task: 'Annual amblyopia CE: PEDIG publications review (JAAPOS March issue — PEDIG annual data). Binocular treatment evidence review (Luminopia real-world outcomes, BRAVO trial update). Patching compliance CE if not completed prior year. Strabismus CE: AAPOS Strabismus Symposium abstracts (spring meeting) — type of surgery, adjustable versus non-adjustable, reoperation data. AAPOS annual meeting (spring) — subspecialty CE category hours.' },
  { phase: 'May–Jun', task: 'Pediatric cataract CE: IATS long-term outcomes review (annual JAAPOS update). IOL power calculation CE for infant cataract (updated nomograms, SRK/T versus Hoffer Q for short axial length). Infantile glaucoma CE: Childhood Glaucoma Research Network registry update, trabeculotomy versus goniotomy comparative outcomes (CGRN data). Genetic testing CE for pediatric ocular conditions (CHX10, CYP1B1 glaucoma, PAX6 aniridia).' },
  { phase: 'Jul–Aug', task: 'ROP CE: anti-VEGF update review (Minion trial 2-year outcomes if published). Telemedicine screening protocol CE (RetCam 3 versus wide-field fundus camera comparison, ICON-ROP algorithm CE). Zone I ROP decision framework update. ETROP screening criteria review. Amblyopia vision therapy CE: current evidence for vision therapy in amblyopia versus patching — AAP policy statement review.' },
  { phase: 'Sep–Oct', task: 'AAO annual meeting (October) — subspecialty day pediatric ophthalmology CE hours (largest single-event CE opportunity, often 8-12 hours Category 1). Pediatric glaucoma surgical CE: Ahmed valve versus Baerveldt pediatric data, cyclophotocoagulation in refractory pediatric glaucoma. Nystagmus CE: INS consensus classification update, prism versus surgical treatment decision CE. Nasolacrimal duct obstruction CE: PANDO study probing versus observation 1-year outcomes.' },
  { phase: 'Nov–Dec', task: 'ABP MOC cycle documentation: verify points logged in ABMS portfolio before December 31 deadline for current cycle year. AAO CE cycle check: if cycle closes within 12 months, identify remaining CE gap and schedule completion. Annual privileging renewal documentation: verify hospital CE requirements for pediatric ophthalmology surgical privileges (strabismus surgery, cataract surgery, glaucoma surgery — separate credentialing in many systems). Year-end tax documentation for CME expenses.' },
]

export default function PediatricOphthalmologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pediatric Ophthalmologists"
        title={
          <>
            ABP MOC and AAO CE tracked in parallel.
            <br />
            <em className="not-italic text-gold">PEDIG amblyopia updates, ROP anti-VEGF CE, pediatric cataract IATS outcomes — scheduled before deadlines close.</em>
          </>
        }
        lede="Pediatric ophthalmologists carry two parallel CME obligations: ABP general pediatrics continuous MOC and AAO Fellowship CE on a 3-year cycle. Annual CE priorities include PEDIG amblyopia protocol updates, anti-VEGF ROP criteria (Minion trial zone I data), Infant Aphakia Treatment Study long-term outcomes, and Childhood Glaucoma Research Network surgical comparison data. A CME calendar without both credit banks tracked simultaneously allows one cycle to close short. Momenties structures the full pediatric ophthalmology CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Pediatric Ophthalmologists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/doctors"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All physicians
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">HIPAA-aware · No PHI stored · Free to start</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CME calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for pediatric ophthalmologists: dual ABP/AAO MOC, amblyopia CE, ROP anti-VEGF CE, and pediatric cataract outcomes CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month pediatric ophthalmology CME schedule from PEDIG amblyopia updates through AAO annual meeting CE and year-end MOC documentation.</h2>
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
                &ldquo;The dual ABP and AAO tracking was what I needed most. I was in my third year of the ABP 5-year cycle and still had no PQI points logged because I kept confusing the two credit systems. Setting up separate calendars for each with independent deadline alerts finally made both cycles legible. The annual PEDIG reminder in March became my trigger to review the amblyopia literature before clinic rather than chasing CE hours at year end. The ROP anti-VEGF calendar was the most valuable for on-call decision support — I had the Minion zone I criteria referenced in a recurring annual review block that fired three weeks before my next ROP call rotation started. Now when I&apos;m making a zone I treatment decision at 2am, I reviewed the evidence two weeks ago, not two years ago.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Simone A., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric Ophthalmologist, children&apos;s hospital academic practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and clinical evidence review for pediatric ophthalmologists in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC — 5-year continuous cycle, 100 points, 3 components tracked separately',
                'AAO Fellowship CE — 90 credits per 3-year cycle, structured subspecialty content requirement',
                'PEDIG amblyopia CE — annual protocol update review, binocular treatment evidence, patching compliance data',
                'Pediatric cataract CE — IATS 10-year outcomes, IOL timing, perioperative patching CE',
                'ROP anti-VEGF CE — Minion trial zone I criteria, bevacizumab reactivation follow-up protocol',
                'Telemedicine ROP CE — RetCam validation, ICON-ROP algorithm, tele-ROP program requirements',
                'Pediatric glaucoma CE — CGRN registry, trabeculotomy vs goniotomy comparative data',
                'AAO annual meeting CE — subspecialty day pediatric ophthalmology, largest single-event CE block',
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
        title="ABP MOC and AAO CE tracked in parallel. PEDIG and ROP CE scheduled annually."
        subtitle="Pediatric ophthalmology CME calendar: dual credit bank tracking, amblyopia PEDIG updates, ROP anti-VEGF criteria CE, and pediatric cataract IATS outcomes — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All physicians', href: '/for/doctors' }}
      />
    </>
  )
}
