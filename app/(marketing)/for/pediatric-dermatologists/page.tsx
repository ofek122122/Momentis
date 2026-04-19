import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Dermatologists — ABD MOC CME renewal, pediatric dermatology credential management',
  description:
    'Pediatric dermatologists manage ABD dermatology MOC and SPD pediatric dermatology subspecialty certification, annual dupilumab and biologic CE for pediatric atopic dermatitis as approvals expand to younger age groups, annual dermoscopy and procedural CE, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-dermatologists' },
  openGraph: {
    title: 'Momenties for Pediatric Dermatologists',
    description: 'ABD MOC CME renewal, pediatric dermatology credential management.',
    url: '/for/pediatric-dermatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABD dermatology MOC and SPD pediatric dermatology subspecialty independently',
    desc: 'Pediatric dermatologists hold ABD (American Board of Dermatology) dermatology certification under continuous MOC and SPD (Society for Pediatric Dermatology) pediatric dermatology subspecialty certification — credentials from two different organizations. ABD dermatology MOC requires dermatology-breadth content. SPD pediatric dermatology subspecialty certification requires pediatric-specific content: neonatal dermatology, genetic skin disorders (epidermolysis bullosa, ichthyoses, incontinentia pigmenti), vascular anomalies (infantile hemangioma, vascular malformations), inflammatory skin disease in children (pediatric atopic dermatitis, psoriasis, morphea), pediatric melanocytic nevi, and drug eruptions in children. Each credential tracks CE independently.',
  },
  {
    icon: Clock,
    title: 'Pediatric dermatologist multi-credential renewal calendar',
    desc: '"ABD dermatology MOC — continuous CME." "SPD pediatric dermatology subspecialty — separate cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual biologic CE for pediatric atopic dermatitis — dupilumab, tralokinumab, lebrikizumab age extensions." "Annual pediatric procedural CE — dermoscopy update, laser safety CE for vascular lesions." "AAD membership — annual." "SPD membership — annual." All pediatric dermatologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual pediatric biologic CE and dermoscopy/procedural competency analytics',
    desc: 'Pediatric dermatologists managing atopic dermatitis must maintain CE on rapidly expanding biologic approvals — dupilumab approved in adults (2017), then adolescents (2019), then children 6-11 (2022), then infants 6 months to 5 years (2023). Tralokinumab, lebrikizumab, nemolizumab, and amlitelimab have different approved age ranges and follow-on trial data. Annual biologic CE ensures current knowledge of age-appropriate dosing, injection technique counseling for pediatric patients and caregivers, and insurance authorization strategies. Annual dermoscopy CE: dermoscopy in pediatric patients has specific applications in pediatric melanocytic lesion surveillance — annual CE ensures current ISIC and Consensus-Net criteria for pediatric nevi.',
  },
  {
    icon: Users,
    title: 'SPD, AAD, and pediatric dermatology professional involvement',
    desc: '"SPD Annual Meeting — july." "AAD Annual Meeting — march." "ISID International Society for Infectious Diseases Annual Meeting." "SID Society for Investigative Dermatology Annual Meeting." "Pediatric AD CE — dupilumab in infants 6 months to 5 years LIBERTY AD PRESCHOOL trial data, nemolizumab in pediatric prurigo nodularis, JAK inhibitor use in pediatric AD (upadacitinib age 12+, abrocitinib age 12+, ruxolitinib cream in mild-moderate AD)." "Vascular CE — propranolol versus timolol in infantile hemangioma by age and size, laser selection for port wine stain early treatment in pediatric patients." "Genetic CE — gene therapy trials in recessive dystrophic epidermolysis bullosa (beremagene geperpavec approval)." All pediatric dermatology professional development on calendar.',
  },
]

const PEDDERM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABD dermatology MOC CME pace (pediatric dermatology content weighted), SPD pediatric dermatology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, annual pediatric biologic CE, annual dermoscopy CE, SPD Annual Meeting, AAD Annual Meeting, and SPD membership all loaded in January. ABD MOC counter and SPD subspecialty counter tracked independently. Biologic age extension approvals tracked with CE deadline at time of FDA approval.' },
  { time: 'CE completion', action: '"SPD-approved — dupilumab in infants and toddlers with moderate-to-severe atopic dermatitis: LIBERTY AD PRESCHOOL phase 3 trial outcomes at 16 weeks and 52-week long-term safety extension, dosing by weight (5-15 kg weight band), caregiver injection technique training and auto-injector device selection for young children, management of conjunctivitis adverse event in preschool patients, and real-world dupilumab discontinuation rates in children under 5, 2 CME, AMA PRA Category 1, ABD MOC applicable, SPD subspecialty applicable — pediatric atopic dermatitis domain." Both counters update.' },
  { time: 'Biologic CE', action: '"Annual pediatric atopic dermatitis biologic CE — 2025 treatment algorithm: dupilumab versus JAK inhibitors in adolescent moderate-to-severe AD (upadacitinib HEADS UP versus LIBERTY AD MEASURE head-to-head data), nemolizumab approval in prurigo nodularis for patients 12+, lebrikizumab phase 3 data in adolescent AD, and biosimilar dupilumab anticipated timeline for cost reduction in pediatric prescribing, 3 CME, ABD and SPD applicable, Q1." Annual biologic CE placed Q1 aligned with AAD March annual meeting data.' },
  { time: 'Procedural CE', action: '"Annual pediatric dermoscopy CE — melanocytic lesion surveillance in children: ISIC consensus criteria for pediatric Spitz nevus versus Spitzoid melanoma differentiation, dermoscopy features of congenital melanocytic nevi by size category (small <1.5 cm, medium, large, giant), reflectance confocal microscopy as adjunct in pediatric equivocal lesions, and total body photography monitoring protocol for children with multiple atypical nevi, 2 CME, ABD applicable, Q2." Annual pediatric dermoscopy CE placed Q2 aligned with SID annual meeting content.' },
  { time: 'Renewal audit', action: 'Analytics: ABD dermatology MOC CME on pace? SPD pediatric dermatology subspecialty content satisfied? State medical license CME complete? DEA valid? Annual pediatric biologic CE documented? Annual dermoscopy CE documented? SPD membership active? AAD membership active? Complete pediatric dermatologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricDermatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Dermatologists"
        title={
          <>
            ABD MOC and SPD pediatric dermatology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Biologic age extension CE current. Dermoscopy surveillance tracked.</em>
          </>
        }
        lede="Pediatric dermatologists manage ABD dermatology MOC and SPD pediatric dermatology subspecialty certification on separate cycles from two organizations, state medical license biennial CME, DEA 3-year registration, annual biologic CE as dupilumab, JAK inhibitors, and IL-13 antagonists expand approved age ranges in pediatric atopic dermatitis, annual dermoscopy CE for pediatric melanocytic lesion surveillance, and professional development at SPD and AAD. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Dermatologists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric dermatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric dermatologist credential and CME management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric dermatologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABD and SPD certification cycles, and annual pediatric biologic and dermoscopy CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDDERM_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
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
                &ldquo;ABD tracks my dermatology MOC and SPD tracks my pediatric dermatology subspecialty certification separately. The dupilumab age expansion story is the best example of CE that can&apos;t wait for a board renewal cycle — from adults to adolescents to school-age to infants over six years. Every age extension approval meant I needed new CE before I could responsibly prescribe to that age group. Insurance authorization for dupilumab in infants requires documentation of failed alternatives — I needed current CE to counsel families about the step-therapy requirements. The JAK inhibitor data in adolescent AD is evolving rapidly. Dermoscopy in children has its own criteria set that is different from adults — I need annual CE to stay current. State license biennial. DEA 3-year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Katherine N., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric dermatologist and atopic dermatitis program director, academic children&apos;s hospital</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric dermatologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABD dermatology MOC CME — continuous, pediatric dermatology content weighted',
                'SPD pediatric dermatology subspecialty — neonatal, genetic skin disorders, vascular anomalies, pediatric AD',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual pediatric biologic CE — dupilumab age extensions, JAK inhibitors in adolescent AD',
                'Annual dermoscopy CE — pediatric melanocytic lesion surveillance, Spitz nevus criteria',
                'AAD membership renewal — annual',
                'SPD and AAD conference CME planning by ABD and SPD certification applicability',
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
        title="ABD MOC and SPD pediatric dermatology subspecialty maintained."
        subtitle="CME tracking for ABD and SPD dual-organization certification, annual pediatric biologic CE, dermoscopy surveillance CE, and pediatric dermatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
