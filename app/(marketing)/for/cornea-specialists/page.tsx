import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cornea Specialist CME Calendar — ABO MOC, DMEK CE, DSAEK CE, keratoconus crosslinking CE, corneal gene therapy CE',
  description:
    'Cornea specialists managing ABO ophthalmology MOC and EBAA eye bank CE track annual endothelial keratoplasty CE (DMEK versus DSAEK 5-year graft survival CE, DMEK rebubbling CE, DMEK in complex eyes — post-trabeculectomy, aphakia, aniridia CE), keratoconus CE (corneal crosslinking FDA-approved CXL CE, topography-guided PRK CE for irregular astigmatism, CAIRS intrastromal allogenic rings CE), and anterior segment CE (FLACS CE for cataract, premium IOL CE for corneal ectasia, EVO ICL CE for high myopia). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/cornea-specialists' },
  openGraph: {
    title: 'Cornea Specialist CME Calendar',
    description: 'ABO MOC, DMEK CE, keratoconus CXL CE, topography-guided PRK CE, and anterior segment CE — one structured calendar.',
    url: '/for/cornea-specialists',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABO ophthalmology MOC (10-year, 400 credits) + AAO Fellowship 3-year CE + EBAA eye bank proficiency CE — three parallel obligations',
    desc: 'Cornea specialists hold ABO certification (10-year cycle, 40 Category 1 CME credits per year) and AAO Fellowship (90 credits per 3-year cycle). Cornea specialists who perform lamellar keratoplasty also typically complete EBAA (Eye Bank Association of America) eye bank tissue quality CE and may hold eye bank medical directorship roles requiring separate EBAA documentation. AAO Subspecialty Day Cornea is the single largest subspecialty CE event for cornea. ASCRS (American Society of Cataract and Refractive Surgery) annual meeting provides CE for the refractive surgery component of cornea practice. A CME calendar that tracks only ABO credits misses the AAO 3-year Fellowship cycle and EBAA CE. Additionally, cornea specialists performing refractive surgery must maintain LASIK and CXL credentialing CE. Momenties tracks all credential cycles simultaneously.',
  },
  {
    icon: Clock,
    title: 'Annual endothelial keratoplasty CE — DMEK versus DSAEK 5-year graft survival, rebubbling CE, DMEK in complex eyes',
    desc: 'Endothelial keratoplasty CE requires annual updates as DMEK data matures and complex-eye DMEK evidence accumulates. DMEK versus DSAEK CE: Cornea Society EK registry 5-year outcomes (DMEK 5-year graft survival 88% versus DSAEK 82%, BCVA superior DMEK at 2 years — CE on DSAEK indications remaining: complex eyes, low endothelial cell donor CE). DMEK rebubbling CE: isoexpansive gas versus air CE (20% SF6 versus 20% C2F6 versus air for rebubbling — rebubbling rate with air 18% versus SF6 12% — CE on rebubbling technique and patient positioning). DMEK in complex eyes CE: DMEK post-trabeculectomy (bleb interference CE, positioning CE), DMEK in aphakia (posterior chamber support CE), DMEK in aniridia (endothelial cell loss CE). Pre-cut DMEK tissue CE: EBAA pre-stripped tissue CE versus surgeon-stripped, storage time CE. Annual eye bank CE: EBAA annual tissue quality report review, endothelial cell count threshold CE (minimum 2000 cells/mm² CE updated 2023).',
  },
  {
    icon: BarChart3,
    title: 'Annual keratoconus CE — FDA-approved CXL protocols, topography-guided PRK, CAIRS CE for advanced keratoconus',
    desc: 'Keratoconus CE updates annually as crosslinking protocols are refined and intrastromal ring options expand. CXL CE: FDA-approved accelerated CXL CE (iLink Photrexa Viscous CE — 9mW/cm² for 10 minutes, pulsed versus continuous CE, oxygen supplementation CE for accelerated CXL). Dresden standard protocol CE (3mW/cm² for 30 minutes — 5.4J/cm² total CE) — comparison accelerated versus standard CE. Transepithelial CXL CE: TFXL CE (iontophoresis-assisted riboflavin delivery, outcome inferior to standard CE — patient selection CE). Topography-guided PRK for irregular astigmatism CE: Contoura Vision CE for post-CXL residual ectasia, wavefront-guided CE for forme fruste keratoconus, PRK safety CE in CXL-stabilized keratoconus. CAIRS CE: corneal allogenic intrastromal ring segments — CAIRS versus ICRS CE (synthetic rings: INTACS, Ferrara CE), CAIRS outcomes CE (allogenic ring CE for irregular astigmatism, keratoconus tolerance of contact lenses post-CAIRS CE). Annual keratoconus progression monitoring CE: Pentacam Belin/Ambrósio deviation CE, pachymetry map CE, anterior and posterior elevation CE.',
  },
  {
    icon: Users,
    title: 'Annual anterior segment CE — FLACS CE for dense cataract, EVO ICL CE for high myopia, premium IOL CE in irregular cornea',
    desc: 'Anterior segment CE covers the refractive surgery component of cornea practice plus cataract CE in the setting of corneal pathology. FLACS CE: femtosecond laser cataract surgery CE — FLACS versus conventional phacoemulsification 5-year outcomes (FLACS superior corneal endothelial cell preservation for dense cataracts, equivalent BCVA, higher cost CE). EVO ICL CE: EVO+ Visian ICL FDA approval (2022) CE — vault prediction CE (ICL vault CE using ACD and WTW calculation), endophthalmitis risk CE for phakic IOL, ICL versus LASIK for myopia greater than -6D CE. Premium IOL in corneal ectasia CE: toric IOL CE for post-CXL stable keratoconus (ESCRS toric CE — CE on vector planning for irregular astigmatism, manifest versus topographic axis CE). LASIK CE: LASIK versus PRK in forme fruste keratoconus CE — contraindication CE update. Annual dry eye CE: cornea interface CE for cataract in severe dry eye, scleral lens CE for ocular surface disease, LipiFlow CE, intense pulsed light CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABO MOC audit: 10-year cycle running total (400 total, 40/year pace), self-assessment module completion. AAO Fellowship audit: 3-year cycle running total (90 credits). EBAA CE: eye bank annual report review, tissue quality CE documentation if medical director. Keratoconus case audit: CXL case volume, progression monitoring protocol compliance (Pentacam scans at 6-month intervals CE verified in EHR). DMEK case volume review: hospital privileging minimum case volumes verified (DMEK 25+ per year for independent privileging in most institutions).' },
  { phase: 'Mar–Apr', task: 'ASCRS annual meeting (spring): refractive surgery CE, anterior segment CE. CXL CE session: iLink protocol update. ICL CE session: EVO+ outcomes update. FLACS CE session. Keratoconus CE session: topography-guided PRK outcomes. AAO Subspecialty Day Cornea (if spring — otherwise October): subspecialty-specific CE credits. Cornea Society annual meeting (if spring schedule): DMEK and DSAEK registry data, keratoconus management CE, endothelial CE.' },
  { phase: 'May–Jun', task: 'ARVO annual meeting (May): cornea and anterior segment CE, keratoconus genetics CE, corneal dystrophy CE. DMEK CE literature review: annual registry data (CORNEA journal May-June publications). Keratoconus CXL CE: accelerated versus standard protocol comparative outcomes update (CORNEA Society CXL registry). Topography-guided PRK CE update. EVO ICL CE: vault outcomes and late complications annual data review. EBAA tissue quality CE: annual endothelial cell count threshold update, storage media CE update. Corneal gene therapy CE: ABCA4 Stargardt (gene therapy pipeline), corneal dystrophies CE (TGFBI lattice CE, macular dystrophy CE).' },
  { phase: 'Jul–Aug', task: 'Annual endothelial keratoplasty CE: DMEK rebubbling technique update, complex-eye DMEK outcomes data review. DSAEK versus DMEK 5-year registry data review. Penetrating keratoplasty CE: PKP versus EK CE for remaining PKP indications (stromal scar CE, failed EK CE, anterior ectasia CE). Dry eye CE: TFOS DEWS II update, scleral lens CE for advanced dry eye. Annual ocular surface CE: graft versus host disease corneal involvement CE, Stevens-Johnson syndrome CE, limbal stem cell transplantation CE (CLET versus SLET CE). Corneal topography interpretation CE: keratoconus versus pellucid marginal degeneration CE, post-LASIK ectasia CE.' },
  { phase: 'Sep–Oct', task: 'AAO annual meeting (October): AAO Subspecialty Day Cornea — largest single cornea CE event (8-12 Category 1 credits). DMEK hands-on workshop CE if available. CXL workshop CE. Premium IOL in irregular cornea CE. Toric IOL for keratoconus CE. Annual refractive surgery CE: LASIK versus PRK versus SMILE CE (SMILE versus LASIK ESCRS registry 5-year — SMILE superior dry eye at 6 months, equivalent BCVA CE). SMILE 2 protocol CE (latest generation platform). Corneal inlay CE: KAMRA inlay CE for presbyopia, PRESBIA CE.' },
  { phase: 'Nov–Dec', task: 'ABO documentation: verify all credits logged. AAO Fellowship documentation: 3-year cycle check. EBAA documentation if medical director. Hospital privileging renewal: DMEK, CXL, LASIK/PRK, phacoemulsification privileging CE documentation. FLACS credentialing renewal: minimum annual case volume CE for femtosecond laser privileging. Annual corneal tissue quality review: DMEK graft failure rate, rebubbling rate, primary graft failure rate — benchmark versus EBAA national data. CXL outcome audit: progression-halted rate at 12 months post-CXL, keratoconus regression CE.' },
]

export default function CorneaSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Cornea Specialists"
        title={
          <>
            ABO MOC and AAO Fellowship tracked in parallel.
            <br />
            <em className="not-italic text-gold">DMEK registry CE, CXL accelerated protocol CE, topography-guided PRK CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Cornea specialists carry three parallel CE obligations: ABO 10-year MOC, AAO Fellowship 3-year cycle, and EBAA tissue quality CE. Annual CE priorities include Cornea Society DMEK versus DSAEK 5-year registry data, DMEK rebubbling gas versus air CE, iLink accelerated CXL protocol update, topography-guided PRK for post-CXL ectasia, CAIRS intrastromal ring CE, and EVO+ ICL vault prediction CE. A CME calendar that misses the AAO 3-year Fellowship deadline loses the Fellowship credential. Momenties structures the full cornea CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Cornea Specialists' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for cornea specialists: ABO/AAO dual cycle, endothelial keratoplasty CE, keratoconus management CE, and anterior segment refractive CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month cornea CME schedule from ASCRS spring meeting through AAO Subspecialty Day Cornea and year-end ABO documentation.</h2>
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
                &ldquo;The AAO 3-year Fellowship cycle was the one that caught me off guard. I had been tracking ABO credits fine — the 10-year cycle is more forgiving. But the 3-year cycle requires 90 credits and I discovered in October of my second Fellowship year that I was 22 credits short with only 14 months remaining. I scrambled and completed it, but it was entirely avoidable. The DMEK CE calendar changed my complex-eye DMEK practice. I had been avoiding DMEK in post-trabeculectomy eyes based on older case reports, but the 2023 CORNEA journal data on bleb management and positioning protocol showed acceptable outcomes in experienced hands. I updated my evaluation protocol after the June CE review and operated on two post-trabeculectomy Fuchs patients that I would have previously referred. The CXL accelerated protocol CE was the most technically consequential — I had been using 9mW/cm² without oxygen supplementation. The oxygen CE showed a meaningful difference in stromal demarcation line depth versus non-supplemented accelerated CXL. I added the oxygen system in Q3 after reviewing the evidence in May.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nikolai V., MD</div>
                  <div className="text-xs text-muted-foreground">Cornea Specialist, academic ophthalmology practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical technique review for cornea specialists in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABO ophthalmology MOC — 10-year cycle, 400 credits, 40/year, self-assessment modules',
                'AAO Fellowship CE — 90 credits per 3-year cycle, tracked independently from ABO',
                'DMEK CE — Cornea Society registry 5-year, rebubbling gas vs air, complex-eye DMEK',
                'Keratoconus CE — iLink accelerated CXL oxygen supplementation, CAIRS CE, progression monitoring',
                'Topography-guided PRK CE — Contoura for post-CXL residual ectasia, wavefront-guided CE',
                'Anterior segment CE — EVO+ ICL vault prediction, FLACS for dense cataract, toric IOL CE',
                'ASCRS annual meeting CE — spring, refractive surgery and anterior segment CE',
                'AAO Subspecialty Day Cornea — October, largest cornea CE event, 8-12 Category 1 credits',
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
        title="ABO MOC and AAO Fellowship tracked in parallel. DMEK and CXL CE scheduled annually."
        subtitle="Cornea CME calendar: dual credit cycle tracking, DMEK registry CE, accelerated CXL protocol CE, topography-guided PRK CE, EVO ICL CE, and ASCRS/AAO annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All physicians', href: '/for/doctors' }}
      />
    </>
  )
}
