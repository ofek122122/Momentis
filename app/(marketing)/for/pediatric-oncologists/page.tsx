import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Oncologists — ABP/ABIM MOC CME renewal, pediatric oncology credential management',
  description:
    'Pediatric oncologists manage ABP or ABIM board certification MOC continuous CME with pediatric hematology-oncology content, state medical license biennial CME, PALS 2-year renewal, DEA 3-year registration, COG protocol training, institutional tumor board CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric oncologist credential calendar.',
  alternates: { canonical: '/for/pediatric-oncologists' },
  openGraph: {
    title: 'Momenties for Pediatric Oncologists',
    description: 'ABP MOC CME renewal, pediatric oncology credential management.',
    url: '/for/pediatric-oncologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP or ABIM MOC and state medical license renewal',
    desc: 'Pediatric oncologists trained in pediatrics hold ABP (American Board of Pediatrics) certification with pediatric hematology-oncology subspecialty. Pediatric oncologists with internal medicine training hold ABIM certification. ABP MOC and ABIM MOC have different CME structures and renewal cycles — tracked independently. Pediatric hematology-oncology subspecialty certification requires content-specific CME separate from general pediatrics or internal medicine CME. State medical license biennial CME runs independently.',
  },
  {
    icon: Clock,
    title: 'Pediatric oncologist multi-credential renewal calendar',
    desc: '"ABP or ABIM primary board MOC — continuous CME." "Pediatric hematology-oncology subspecialty MOC — independent content requirements." "State medical license — biennial CME." "PALS — 2-year renewal." "DEA registration — 3-year renewal." "COG protocol training — annual institutional update." "ASCO membership — annual." All pediatric oncologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'COG protocol training and pediatric oncology compliance analytics',
    desc: 'Children\'s Oncology Group (COG) protocol participation requires annual protocol training updates as a condition of institutional participation — separate from board MOC. Pediatric oncologists participating in COG studies must complete protocol-specific training before opening each new study. ASCO CME for annual meetings applicable to oncology MOC tracked separately from ASPHO conference CME applicable to pediatric subspecialty content. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'ASPHO, ASCO, and pediatric oncology professional involvement',
    desc: '"ASPHO Annual Meeting — may." "ASCO Annual Meeting — june." "ASH Annual Meeting — december." "COG Fall Meeting." "SIOP Annual Congress — international." "Pediatric cancer survivorship CME." "Late effects of childhood cancer treatment CE." "Chemotherapy and biologic therapy certification renewal." All pediatric oncology professional development on calendar. ASPHO and ASCO conference CME tagged by ABP and ABIM MOC applicability.',
  },
]

const PO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP or ABIM MOC CME pace (hematology-oncology content weighted), state medical license biennial CME, PALS 2-year cycle, DEA 3-year renewal, COG annual protocol training, ASPHO Annual Meeting, ASCO Annual Meeting, and ASCO membership all loaded in January. ABP/ABIM MOC counter and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"ASPHO-approved — immunotherapy in pediatric solid tumors: checkpoint inhibitor mechanisms, toxicity management in pediatric patients, and response assessment criteria, 3 CME, ABP MOC applicable — pediatric hematology-oncology domain." ABP MOC counter updates. State licensure CME updates. Pediatric-specific oncology CME tagged separately from general adult oncology CME that may not satisfy ABP subspecialty content requirements.' },
  { time: 'COG training', action: '"COG protocol training — ACNS1232 study opening, medulloblastoma treatment protocol updates, and data submission requirements, Q1." COG annual protocol training placed as an institutional requirement for COG member institutions. Protocol training mandatory before first patient enrollment on each new study. Annual training update covers protocol amendments and safety reports. Separate from ABP MOC CME — institutional research compliance, not board certification.' },
  { time: 'PALS renewal', action: '"PALS renewal — pediatric advanced life support, 2-year cycle." PALS renewal particularly critical for pediatric oncologists managing patients through febrile neutropenia, septic shock from treatment-related complications, and oncologic emergencies. Pediatric oncology patients have unique resuscitation considerations — PALS content directly relevant to clinical practice. Placed with 6-month advance alert for course registration.' },
  { time: 'Renewal audit', action: 'Analytics: ABP or ABIM MOC CME on pace? Subspecialty content requirements satisfied? State medical license CME complete? PALS current? DEA valid? COG protocol training documented? ASCO membership active? Complete pediatric oncologist credential audit 90 days before earliest renewal. ABP/ABIM, state board, COG institutional, and DEA documentation maintained separately.' },
]

export default function ForPediatricOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Oncologists"
        title={
          <>
            ABP MOC and state licensure maintained.
            <br />
            <em className="not-italic text-gold">COG protocol training current. PALS never lapsed.</em>
          </>
        }
        lede="Pediatric oncologists manage ABP or ABIM board certification MOC with pediatric hematology-oncology subspecialty content requirements, state medical license biennial CME on an independent cycle, PALS 2-year renewal critical for pediatric oncologic emergencies, DEA 3-year registration, annual COG protocol training as an institutional research compliance requirement, and professional development at ASPHO and ASCO simultaneously. Momenties tracks CME by pediatric oncologist credential, surfaces renewal deadlines 90 days early, and manages the full pediatric oncologist credential calendar in one view."
        crumbs={[{ label: 'For Pediatric Oncologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric oncologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric oncologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric oncologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABP MOC cycle, COG protocol obligation, and PALS renewal window.</h2>
          </Reveal>
          <div className="space-y-3">
            {PO_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABP pediatrics and ABP pediatric hematology-oncology. The subspecialty MOC requires that my CME content hits pediatric oncology topics — not just any pediatric or oncology CME. ASCO is my main conference and a lot of that CME is adult oncology, which counts for some MOC purposes but not all. I participate in COG which means annual protocol training that is completely separate from MOC. I also need PALS because my patients crash in non-obvious ways during treatment. My DEA renewal is every 3 years. Momenties is the first thing I&apos;ve used that treats all of these as distinct items rather than dumping everything into one CME bucket and hoping I figure out the rest.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Danielle K., MD, FAAP</div>
                  <div className="text-xs text-muted-foreground">Pediatric hematologist-oncologist, academic children&apos;s hospital solid tumor program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric oncologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP primary board MOC — continuous CME, pediatrics content',
                'ABP pediatric hematology-oncology subspecialty MOC — content-specific',
                'State medical license CME — biennial',
                'PALS certification — 2-year renewal',
                'DEA registration renewal — 3-year',
                'COG annual protocol training — institutional research compliance',
                'ASCO membership renewal — annual',
                'ASPHO and ASCO conference CME planning by ABP MOC applicability',
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
        title="ABP MOC and state licensure maintained."
        subtitle="CME tracking with subspecialty content requirements, COG protocol training calendar, PALS renewal, and pediatric oncology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
