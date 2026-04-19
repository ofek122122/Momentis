import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Endocrinologists — ABP MOC CME renewal, pediatric endocrinology credential management',
  description:
    'Pediatric endocrinologists manage ABP general pediatrics primary MOC with pediatric endocrinology subspecialty content, ABP pediatric endocrinology subspecialty certification on a separate cycle, annual diabetes technology CE for CGM and closed-loop insulin delivery systems, annual growth hormone prescribing CE, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-endocrinologists' },
  openGraph: {
    title: 'Momenties for Pediatric Endocrinologists',
    description: 'ABP MOC CME renewal, pediatric endocrinology credential management.',
    url: '/for/pediatric-endocrinologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric endocrinology subspecialty independently',
    desc: 'Pediatric endocrinologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric endocrinology subspecialty certification on a separate cycle — two ABP credentials with different content requirements. ABP pediatric endocrinology subspecialty requires endocrinology-specific content including type 1 diabetes management (insulin therapy, CGM, closed-loop systems), growth disorders (GH deficiency, Turner syndrome, Prader-Willi syndrome), thyroid disorders in children, adrenal insufficiency, pubertal disorders (precocious puberty, delayed puberty), and DSD. ABP general pediatrics MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Pediatric endocrinologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric endocrinology subspecialty — endocrinology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual diabetes technology CE — CGM, AID systems, sensor-augmented pump." "Annual growth hormone prescribing CE — REMS requirements for growth hormone deficiency." "PES membership — annual." "ESPE membership — annual." All pediatric endocrinologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual diabetes technology CE and growth hormone REMS prescribing analytics',
    desc: 'Pediatric endocrinologists managing type 1 diabetes must maintain CE on diabetes technology — automated insulin delivery (AID) systems including Control-IQ, Omnipod 5, and MiniMed 780G each have different algorithm parameters, CGM integration, and user interface considerations requiring device-specific CE. Annual diabetes technology CE is a practice requirement as new AID systems reach the pediatric market on accelerated approval timelines. Growth hormone prescribing for pediatric growth disorders has REMS requirements for some GH products (Somavert/pegvisomant for acromegaly; some novel GH preparations) — annual prescribing CE ensures current REMS compliance and monitoring protocol awareness.',
  },
  {
    icon: Users,
    title: 'PES, ESPE, and pediatric endocrinology professional involvement',
    desc: '"PES Annual Meeting — march." "ESPE Annual Meeting — september." "ENDO Annual Meeting (Endocrine Society) — june." "ADA Scientific Sessions — june." "Type 1 diabetes CE — AID system comparison (Control-IQ, Omnipod 5, MiniMed 780G), time-in-range targets in pediatric T1D, looping community and DIY systems." "Growth CE — somatrogon once-weekly GH approval, lonapegsomatropin approval in GHD." "Thyroid CE — thyroid nodule evaluation in pediatric patients, Bethesda reporting system in childhood." "Adrenal CE — congenital adrenal hyperplasia glucocorticoid optimization, adrenal crisis prevention education." All pediatric endocrinology professional development on calendar. PES and ENDO conference CME tagged by ABP primary and subspecialty applicability.',
  },
]

const PEDENDO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (endocrinology content weighted), ABP pediatric endocrinology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, annual diabetes technology CE, annual GH prescribing CE, PES Annual Meeting, ENDO Annual Meeting, ADA Scientific Sessions, and PES membership all loaded in January. ABP primary counter, endocrinology subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"PES-approved — automated insulin delivery in pediatric T1D: Control-IQ algorithm update with sleep mode validation data in children 2-5 years, time-in-range targets for AID-managed pediatric patients, CGM accuracy in the 70-180 mg/dL range, and hybrid closed-loop troubleshooting for parent management at home, 2 CME, AMA PRA Category 1, ABP MOC applicable, ABP pediatric endocrinology applicable — diabetes technology domain." ABP primary counter updates. Endocrinology subspecialty counter updates. State licensure CME updates.' },
  { time: 'Diabetes tech CE', action: '"Annual diabetes technology CE — AID system updates: somatrogon (Ngenla) weekly GH formulation versus daily somatropin in pediatric GHD — non-inferiority trial height velocity data, injection frequency impact on adherence in adolescents, and REMS requirements for weekly GH prescribing, 3 CME, ABP pediatric endocrinology applicable — growth domain, Q2." Annual diabetes technology CE placed Q2. New AID algorithm updates (Tandem Mobi, Omnipod 5 pediatric expansion) released annually — CE placed mid-year when device-specific training data is incorporated into clinical recommendations.' },
  { time: 'Growth CE', action: '"Annual growth hormone prescribing CE — NCGS registry update and 10-year outcomes: adult height outcomes in GHD, ISS, Turner syndrome, and SGA cohorts by initial GH dose and age at start, transition to adult GH therapy criteria, and REMS compliance documentation for approved indications, 2 CME, ABP pediatric endocrinology applicable — growth domain, Q3." Annual GH prescribing CE placed Q3. NCGS registry publishes annual outcomes data. REMS requirements for novel GH preparations require annual awareness for prescribers.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric endocrinology subspecialty content satisfied? State medical license CME complete? DEA valid? Annual diabetes technology CE documented? Annual GH prescribing CE documented? PES membership active? Complete pediatric endocrinologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricEndocrinologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Endocrinologists"
        title={
          <>
            ABP MOC and pediatric endocrinology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">AID system CE current. Growth hormone prescribing tracked.</em>
          </>
        }
        lede="Pediatric endocrinologists manage ABP general pediatrics continuous MOC with endocrinology subspecialty content, ABP pediatric endocrinology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, annual diabetes technology CE as Control-IQ, Omnipod 5, and MiniMed 780G AID systems update their pediatric algorithms, annual growth hormone prescribing CE for REMS compliance, and professional development at PES, ENDO, and ADA. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Endocrinologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric endocrinologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric endocrinologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric endocrinologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, pediatric endocrinology subspecialty, and annual diabetes technology and growth hormone CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDENDO_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics and my pediatric endocrinology separately with different content requirements. The diabetes technology landscape changes faster than the board renewal cycle — Control-IQ, Omnipod 5, and MiniMed 780G all updated their algorithms in the last 18 months with new pediatric age approvals. My families ask me about the differences between AID systems at every visit and I need to be current before that conversation, not after my board renewal. I prescribe growth hormone for GHD, ISS, Turner, and SGA — the REMS landscape changes as new weekly GH formulations come to market. State license biennial. DEA 3-year. The diabetes technology CE has a practical urgency that doesn&apos;t line up with any board calendar — it lines up with when the new device approvals hit the pediatric market.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Caroline B., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric endocrinologist and diabetes technology program director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric endocrinologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, endocrinology content weighted',
                'ABP pediatric endocrinology subspecialty — diabetes, growth, thyroid, adrenal domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual diabetes technology CE — AID system updates, CGM, closed-loop algorithms',
                'Annual growth hormone prescribing CE — REMS compliance, NCGS registry outcomes',
                'PES membership renewal — annual',
                'PES, ENDO, and ADA conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric endocrinology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, annual AID system CE, growth hormone REMS prescribing CE, and pediatric endocrinology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
