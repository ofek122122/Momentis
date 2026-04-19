import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Interventional Cardiologists — ABIM MOC CME renewal, interventional cardiology credential management',
  description:
    'Interventional cardiologists manage ABIM MOC continuous CME with interventional cardiology content, state medical license biennial CME, annual fluoroscopy radiation safety CE, MPSC annual credentialing review, SCAI certification or credentials, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full interventional cardiologist credential calendar.',
  alternates: { canonical: '/for/interventional-cardiologists' },
  openGraph: {
    title: 'Momenties for Interventional Cardiologists',
    description: 'ABIM MOC CME renewal, interventional cardiology credential management.',
    url: '/for/interventional-cardiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM MOC and state medical license renewal',
    desc: 'Interventional cardiologists maintain ABIM Internal Medicine and Cardiovascular Disease certifications under continuous MOC, with interventional cardiology subspecialty certification requiring specific interventional content CME. State medical license biennial CME runs independently with AMA PRA Category 1 requirements. ABIM MOC mandatory CE categories — patient safety and medical knowledge — tracked separately from total CME count. SCAI Fellow (FSCAI) maintenance CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Interventional cardiologist multi-credential renewal calendar',
    desc: '"ABIM MOC — continuous, internal medicine + cardiovascular + interventional CME." "State medical license — biennial AMA PRA CME." "ABIM patient safety mandatory CE — tracked within total." "Annual fluoroscopy radiation safety CE." "MPSC annual cath lab credentialing review." "DEA registration — 3-year renewal." "SCAI membership — annual." All interventional cardiologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABIM MOC mandatory categories and cath lab radiation safety analytics',
    desc: 'ABIM MOC requires mandatory patient safety and professionalism CE tracked separately from general cardiovascular CME — reaching total CME without mandatory categories fails MOC requirements. Annual fluoroscopy radiation safety CE for cath lab operators required under state and institutional radiation protection programs — separate from ABIM CME. MPSC annual cath lab credentialing review covers procedure volumes and outcomes separate from board certification. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'SCAI, ACC, and interventional cardiology professional involvement',
    desc: '"SCAI Annual Scientific Sessions — may." "ACC Annual Scientific Session — march." "TCT Annual Meeting — october." "PCR Annual Course (Europe)." "Complex PCI and structural heart disease CE." "TAVR and WATCHMAN implanter training certification." "Left heart catheterization and ventriculography CE." "IVUS, OCT, and coronary physiology CE." All interventional cardiology professional development on calendar. SCAI and ACC conference CME tagged by ABIM MOC and state licensure applicability.',
  },
]

const IC_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM MOC CME pace (interventional content weighted), ABIM patient safety and professionalism mandatory category pace, state medical license biennial CME, annual fluoroscopy radiation safety CE, MPSC annual cath lab review, DEA 3-year renewal, ACC Annual Session, and SCAI membership all loaded in January. ABIM MOC CME counter and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"ACC JACC CME — physiologic lesion assessment with FFR and iFR: technique validation, clinical decision thresholds, and outcomes data in multivessel disease, 2 CME, AMA PRA Category 1, ABIM MOC applicable — interventional cardiology domain." ABIM MOC counter updates. State licensure CME updates. Interventional procedural CE tagged by procedure type for MPSC annual credentialing documentation.' },
  { time: 'Radiation safety', action: '"Annual fluoroscopy radiation safety CE — catheterization laboratory dose optimization, radiation protection posture, and patient dose management, 1 CME, Q1." Annual fluoroscopy radiation safety CE placed as a state and institutional radiation protection requirement for cath lab operators. Separate from ABIM MOC CME — regulatory requirement for all fluoroscopy operators. Annual placement with Q1 completion target before cath lab credentialing review cycle.' },
  { time: 'MPSC review', action: '"MPSC annual cath lab credentialing review — PCI volume, STEMI door-to-balloon performance, and complication rates, Q2." Annual MPSC cath lab credentialing review placed as a transplant center-equivalent institutional credentialing requirement. MPSC review covers PCI volume thresholds, STEMI performance metrics, and operator-specific complication rates — separate from ABIM board certification. Annual review placed as Q2 milestone.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM MOC CME on pace? Patient safety and professionalism mandatory categories satisfied? State medical license CME adequate? Annual radiation safety CE documented? MPSC cath lab credentialing review scheduled? DEA valid? SCAI membership active? Complete interventional cardiologist credential audit 90 days before earliest renewal. ABIM, state board, MPSC, and institutional documentation maintained separately.' },
]

export default function ForInterventionalCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Interventional Cardiologists"
        title={
          <>
            ABIM MOC and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Cath lab credentialing and radiation safety current.</em>
          </>
        }
        lede="Interventional cardiologists manage ABIM MOC continuous CME with mandatory patient safety and professionalism categories, state medical license biennial CME on an independent cycle, annual fluoroscopy radiation safety CE as a regulatory requirement for cath lab operators, annual MPSC cath lab credentialing review with procedure volume and outcomes documentation, DEA 3-year registration, and professional development simultaneously. Momenties tracks CME by interventional cardiologist credential, surfaces renewal deadlines 90 days early, and manages the full interventional cardiologist credential calendar in one view."
        crumbs={[{ label: 'For Interventional Cardiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How interventional cardiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for interventional cardiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Interventional cardiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABIM MOC cycle, radiation safety requirement, and cath lab credentialing obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {IC_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM MOC is three boards — internal medicine, cardiovascular disease, and interventional cardiology — each continuous and each with content requirements. My state license is biennial on a different schedule. We have annual radiation safety CE because of the fluoroscopy exposure in the cath lab — that&apos;s a regulatory requirement separate from MOC. Then the hospital runs its own MPSC credentialing process for cath lab operators that reviews our volumes and outcomes annually. DEA is 3 years. At any given time I have 5 credential obligations active. Momenties is the first tool I&apos;ve used that treats all of them as first-class calendar items — not just a CE tracker but an actual credential calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Michael T., MD, FSCAI, FACC</div>
                  <div className="text-xs text-muted-foreground">Interventional cardiologist, structural heart disease and complex PCI program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All interventional cardiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM MOC CME — continuous, IM + CV + interventional content',
                'ABIM patient safety and professionalism mandatory categories',
                'State medical license CME — biennial AMA PRA Category 1',
                'Annual fluoroscopy radiation safety CE — cath lab operator requirement',
                'MPSC annual cath lab credentialing review',
                'DEA registration renewal — 3-year',
                'SCAI membership renewal — annual',
                'SCAI and ACC conference CME planning by ABIM MOC applicability',
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
        title="ABIM MOC and state licensure maintained."
        subtitle="CME tracking with mandatory category analytics, cath lab credentialing calendar, radiation safety tracking, and interventional cardiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
