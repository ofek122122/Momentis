import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Craniofacial Surgeon CME Calendar — ABS or ABP-S MOC, ACPA CE, craniosynostosis CE, cleft lip and palate CE, virtual surgical planning CE',
  description:
    'Craniofacial surgeons managing ABS plastic surgery or ABP-S primary board MOC alongside ACPA (American Cleft Palate-Craniofacial Association) Team Standards compliance track annual craniosynostosis CE (pi procedure versus strip craniectomy versus CVR for sagittal synostosis outcomes MOSAS CE, endoscopic strip craniectomy long-term CHOA data, whole-exome sequencing syndromic craniosynostosis CE), cleft lip and palate CE (primary cleft rhinoplasty timing CE, Furlow versus straight-line palatoplasty VPI outcomes, alveolar bone graft secondary timing CE), and virtual surgical planning CE (photogrammetry versus CT for orthognathic CE, 3D-printed custom implants CE, patient-specific osteotomy guides CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/craniofacial-surgeons' },
  openGraph: {
    title: 'Craniofacial Surgeon CME Calendar',
    description: 'ABS/ABP-S MOC, ACPA Team Standards CE, craniosynostosis CE, cleft lip/palate CE, and virtual surgical planning CE — one structured calendar.',
    url: '/for/craniofacial-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABS plastic surgery MOC (10-year) + ACPA Team Standards compliance + multidisciplinary team CE requirements — three parallel obligations',
    desc: 'Craniofacial surgeons hold ABS plastic surgery certification (10-year MOC cycle, 120 CME credits, 30 SA-CME required) or, if fellowship-trained in craniofacial, may also hold fellowship credentials recognized by ACPA, ASPS, and AAFPRS. ACPA does not issue a separate board certification but requires that ACPA-approved team programs meet Team Standards including continuing education in the care of patients with cleft and craniofacial conditions. ACPA Team Standards review occurs every 3-5 years and requires documentation of team member CE in craniofacial conditions. Many craniofacial surgeons also maintain ABP-S (American Board of Plastic Surgery — Craniofacial Surgery Certificate of Added Qualification) which adds a separate renewal cycle. A CME calendar that tracks only ABS MOC misses the ACPA team CE documentation requirement and the ABP-S CAQ cycle if held. Momenties tracks all credentials simultaneously with renewal alerts.',
  },
  {
    icon: Clock,
    title: 'Annual craniosynostosis CE — pi procedure versus CVR outcomes MOSAS, endoscopic strip craniectomy long-term data, syndromic WES CE',
    desc: 'Craniosynostosis management CE requires annual updates as endoscopic and open technique outcomes data matures. Sagittal synostosis CE: MOSAS multi-center study — pi procedure versus CVR versus strip craniectomy, 5-year outcomes (intracranial volume gain: CVR superior at 5 years, pi procedure inferior for severe cases, endoscopic strip with helmeting equivalent to CVR at 5 years for mild-moderate SAST). Endoscopic strip craniectomy CE: Children&apos;s Healthcare of Atlanta long-term data — 10-year ICP normalization rate, helmet compliance CE (23-24 hours per day for 12 months), neurodevelopmental outcomes at 6 years. Syndromic craniosynostosis CE: whole-exome sequencing CE (FGFR1-3, TWIST1, EFNB1, TCF12, ERF — CE on genetic counseling integration), Apert syndrome CE (midface hypoplasia CE, Le Fort III timing CE, monobloc versus Le Fort III for airway CE). Virtual CE: spring CGF meeting (Craniofacial Society meetings) — comprehensive craniofacial CE, largest single-event block.',
  },
  {
    icon: BarChart3,
    title: 'Annual cleft lip and palate CE — primary cleft rhinoplasty timing, Furlow versus straight-line palatoplasty VPI outcomes, alveolar bone graft CE',
    desc: 'Cleft lip and palate CE tracks surgical timing and technique evidence that continues to evolve in the literature. Primary cleft rhinoplasty CE: timing debate (primary rhinoplasty at time of lip repair versus deferred — CCPA outcomes data: primary rhinoplasty superior aesthetic and functional outcomes at 10 years versus deferred approach in UCLP, CE on septoplasty timing). Palatoplasty CE: Furlow double-opposing Z-plasty versus straight-line closure for VPI — ACPA 2023 consensus (Furlow superior VPI rates: 15-22% versus 28-35% Veau-Wardill-Kilner, CE on muscle repair technique). Alveolar bone graft CE: mixed dentition timing CE (9-11 years, canine root two-thirds formed CE), iliac crest versus tibia versus BMP-2 CE (BMP-2 ActivOss CE — RCT evidence, cost versus autograft CE). Speech outcomes CE: nasometry CE, CAPS-A evaluation CE, VPI surgical decision (pharyngeal flap versus sphincter pharyngoplasty versus Furlow revision CE).',
  },
  {
    icon: Users,
    title: 'Annual virtual surgical planning CE — photogrammetry versus CT, 3D-printed patient-specific implants, custom osteotomy guide CE',
    desc: 'Virtual surgical planning CE updates annually as photogrammetry replaces CT in some workflows and patient-specific implant data accumulates. VSP CE: photogrammetry versus CBCT for orthognathic planning — accuracy CE (submillimeter for maxillary and mandibular movement with photogrammetry + CBCT hybrid versus CT-only), radiation dose reduction CE (CBCT 50-80% dose reduction versus conventional CT). Patient-specific osteotomy guides CE: cutting guide accuracy for Le Fort I and BSSO — CE on intraoperative deviation (mean 1.2mm versus freehand 2.8mm), cost-benefit CE for complex asymmetry cases. 3D-printed custom craniofacial implants CE: porous titanium CE (KLS Martin, DePuy Synthes custom orbital and cranial implants — ingrowth CE, infection rate CE versus PEEK), PEEK patient-specific CE for secondary cranioplasty (cranial reconstruction CE, orbital reconstruction CE). Intraoperative imaging CE: O-arm CT for midface osteotomy verification, navigation CE for orbital decompression.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABS plastic surgery MOC audit: 120-credit 10-year running total verified, SA-CME 30-credit component documented. ABP-S CAQ audit if held: CAQ cycle date verified, CAQ Part III exam preparation plan if within 3 years. ACPA Team Standards documentation audit: team CE records current for craniofacial conditions requirement. Annual craniofacial outcome metrics review: team cleft and craniofacial case volume, fistula rate, VPI rate, alveolar bone graft success rate — benchmark versus ACPA team outcomes database. Genetics clinic integration review: WES testing rate for syndromic craniosynostosis, genetic counselor CE.' },
  { phase: 'Mar–Apr', task: 'ACPA annual meeting (spring): ACPA team CE credits, cleft lip and palate session CE. Palatoplasty outcomes session CE: VPI CE update, Furlow versus straight-line outcomes data. Primary rhinoplasty session CE. Craniosynostosis session CE: MOSAS update if presented. Speech-language pathology joint CE (ACPA SLP CE requirement for team members — craniofacial CE for SLP team). Multidisciplinary team CE: annual team case conference CE — orthodontics, speech, ENT, genetics joint CE. CGF (Craniofacial Society of Great Britain and Ireland) or CCA (Craniofacial Collaborative) meeting CE if attending.' },
  { phase: 'May–Jun', task: 'Craniosynostosis CE literature review: MOSAS data annual update (Journal of Craniofacial Surgery, Plastic and Reconstructive Surgery). Endoscopic strip craniectomy long-term data review. Syndromic craniosynostosis genetics CE: FGFR mutation CE, Apert midface CE. Orthognathic surgery CE: virtual surgical planning accuracy data review (photogrammetry CE, CBCT hybrid planning CE). American Society of Craniofacial Surgeons (ASCS) meeting (if attended): VSP and technology CE session, distraction osteogenesis CE update, midface distraction CE.' },
  { phase: 'Jul–Aug', task: 'Cleft lip and palate CE literature review (Cleft Palate-Craniofacial Journal summer publications). Alveolar bone graft CE: BMP-2 versus autograft updated data review. VPI CE: sphincter pharyngoplasty versus pharyngeal flap 5-year outcomes review. Annual ACPA Team Standards self-audit: team member CE documentation current, team outcome data collected (VPI rate, fistula rate, patient satisfaction). 3D-printed implant CE: patient-specific craniofacial implant outcomes data review (annual publication review — CTAS, DePuy registry).' },
  { phase: 'Sep–Oct', task: 'ASPS annual meeting (Plastic Surgery The Meeting — fall): ABS plastic surgery MOC credits, craniofacial session CE. VSP and technology session CE. Patient-specific implant CE. International Cleft Lip and Palate symposium CE if triennial meeting year. Annual orthognathic surgery CE: Le Fort I accuracy CE, BSSO CE, genioplasty CE. Distraction osteogenesis CE: mandibular distraction in Pierre Robin sequence CE, midface distraction timing and vector CE. Rare syndrome CE: orbital hypertelorism CE (transcranial medial orbital wall osteotomy CE), fibrous dysplasia management CE.' },
  { phase: 'Nov–Dec', task: 'ABS documentation: verify all credits logged in ABS portfolio before December 31. ABP-S CAQ documentation if held. ACPA team CE documentation: verify all team members have met CE requirements for Team Standards compliance — craniofacial CE documentation submitted to ACPA team coordinator. Hospital privileging renewal: craniotomy, Le Fort I, BSSO, distraction osteogenesis — credentialing documentation (craniofacial surgery minimum case volume varies by institution). Annual outcome data compilation: fistula rate, VPI rate, alveolar bone graft success, craniosynostosis ICP normalization — submitted to ACPA team registry.' },
]

export default function CraniofacialSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Craniofacial Surgeons"
        title={
          <>
            ABS MOC, ACPA Team Standards, and VSP CE tracked in parallel.
            <br />
            <em className="not-italic text-gold">MOSAS craniosynostosis CE, Furlow palatoplasty outcomes, 3D-printed implant CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Craniofacial surgeons carry three parallel CME obligations: ABS plastic surgery 10-year MOC, ABP-S Craniofacial CAQ cycle if held, and ACPA Team Standards CE documentation for approved team programs. Annual CE priorities include MOSAS sagittal synostosis pi/CVR/endoscopic outcomes, Furlow versus straight-line palatoplasty VPI data, primary rhinoplasty timing CE, virtual surgical planning photogrammetry accuracy CE, and 3D-printed patient-specific implant CE. Momenties structures the full craniofacial surgery CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Craniofacial Surgeons' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for craniofacial surgeons: ABS/ACPA dual compliance, craniosynostosis technique CE, cleft lip and palate CE, and virtual surgical planning CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month craniofacial surgery CME schedule from ACPA annual meeting through ASPS fall meeting and year-end team documentation.</h2>
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
                &ldquo;The ACPA team CE documentation was the obligation I consistently underestimated. I knew about my ABS MOC but the ACPA Team Standards review happens every 3-5 years and I had let the team CE documentation fall behind. When I set up the craniofacial CME calendar, I discovered that two team members — our SLP and our orthodontist — had not completed their ACPA-specified CE in craniofacial conditions in the prior 18 months. We had 10 months before our next Team Standards review. That was enough time to fix it, but only because the calendar surfaced it. The MOSAS CE was the most valuable for my own surgical decision-making. I had been using the pi procedure more broadly than the data supports for severe sagittal synostosis. The CVR outcomes advantage at 5 years for severe cases changed my algorithm. The VSP photogrammetry CE was the newest addition — we are transitioning to a hybrid photogrammetry plus CBCT workflow and the accuracy data needed to be current before we made that equipment investment. I reviewed the literature in June and we made the purchase decision in August. Without the calendar, that review would have been postponed indefinitely.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Cecilia R., MD, FACS, FAAP</div>
                  <div className="text-xs text-muted-foreground">Craniofacial Surgeon, ACPA-approved craniofacial team, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical technique review for craniofacial surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS plastic surgery MOC — 10-year cycle, 120 credits, 30 SA-CME, PQI module',
                'ACPA Team Standards CE — team craniofacial CE documentation, 3-5 year review cycle',
                'Craniosynostosis CE — MOSAS pi/CVR/endoscopic outcomes, syndromic WES CE annual',
                'Cleft CE — primary rhinoplasty timing, Furlow vs straight-line VPI data, ABG timing CE',
                'VSP CE — photogrammetry vs CT accuracy, 3D-printed custom implants, osteotomy guides',
                'VPI CE — nasometry, sphincter pharyngoplasty vs pharyngeal flap 5-year outcomes',
                'ACPA annual meeting CE — spring, team craniofacial CE, cleft outcomes sessions',
                'ASPS annual meeting CE — fall, ABS plastic surgery MOC credits, technology session',
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
        title="ABS MOC and ACPA Team Standards tracked in parallel. Craniosynostosis and cleft CE scheduled annually."
        subtitle="Craniofacial surgery CME calendar: ABS/CAQ dual tracking, ACPA team CE documentation, MOSAS craniosynostosis CE, cleft outcomes CE, VSP photogrammetry CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
