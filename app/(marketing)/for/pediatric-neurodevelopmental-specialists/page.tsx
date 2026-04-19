import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Neurodevelopmental Specialists — ABP MOC CME renewal, neurodevelopmental pediatrics credential management',
  description:
    'Pediatric neurodevelopmental specialists manage ABP general pediatrics primary MOC and ABP neurodevelopmental disabilities subspecialty certification on a 10-year examination cycle, annual ADHD medication management CE as stimulant supply constraints and new non-stimulant approvals change practice, annual autism diagnostic CE as DSM-5-TR criteria and ADOS-2 updates evolve, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-neurodevelopmental-specialists' },
  openGraph: {
    title: 'Momenties for Pediatric Neurodevelopmental Specialists',
    description: 'ABP MOC CME renewal, neurodevelopmental pediatrics credential management.',
    url: '/for/pediatric-neurodevelopmental-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and neurodevelopmental disabilities subspecialty independently',
    desc: 'Pediatric neurodevelopmental specialists hold ABP general pediatrics primary certification under continuous MOC and ABP neurodevelopmental disabilities subspecialty certification on a 10-year examination cycle with a 24-month preparation window. ABP neurodevelopmental disabilities subspecialty requires neurodevelopmental-specific content including autism spectrum disorder (diagnosis, evidence-based intervention), attention-deficit/hyperactivity disorder (ADHD — evaluation and medication management), intellectual disability, learning disorders, developmental language disorder, cerebral palsy, fetal alcohol spectrum disorder, Down syndrome, and neurodevelopmental management of premature infants. ABP general pediatrics MOC runs on a continuous cycle with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Pediatric neurodevelopmental specialist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP neurodevelopmental disabilities subspecialty — 10-year examination cycle, 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual ADHD medication CE — stimulant supply updates, viloxazine (Qelbree) and non-stimulant evidence updates." "Annual autism diagnostic CE — ADOS-2 updates, DSM-5-TR autism spectrum disorder criteria." "SDBP membership — annual." "AAP developmental section membership — annual." All neurodevelopmental specialist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual ADHD CE and autism diagnostic assessment analytics',
    desc: 'Pediatric neurodevelopmental specialists managing ADHD must maintain CE on a rapidly changing medication landscape — viloxazine extended release (Qelbree) FDA approval in children and adolescents, amphetamine supply constraints and substitution protocols, and updated AAP ADHD Clinical Practice Guidelines 2023 extending diagnosis and management to adults and toddlers (ages 4-5) requires annual CE for expanded practice scope. Annual autism diagnostic CE: ADOS-2 Module 4 updates, DSM-5-TR Level 1 and Level 2 screening tool validation, and diagnosis in females and underrepresented populations requires annual CE to address diagnostic disparity.',
  },
  {
    icon: Users,
    title: 'SDBP, AAP developmental section, and neurodevelopmental professional involvement',
    desc: '"SDBP Annual Meeting — march." "AAP National Conference — october." "INSAR International Society for Autism Research — may." "CNS Summit — october." "ADHD CE — AAP ADHD Clinical Practice Guideline 2023 (extended to toddlers and adults), methylphenidate versus amphetamine in treatment-naive patients by age group, viloxazine versus atomoxetine non-stimulant head-to-head data, ADHD diagnosis in females using sex-specific normative data." "Autism CE — ADOS-2 cultural adaptation validity, CARS-2 sensitivity in intellectual disability, early intensive behavioral intervention versus developmental naturalistic interventions (JASPER, ESDM) evidence update." All neurodevelopmental professional development on calendar.',
  },
]

const PEDNDDX_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (neurodevelopmental content weighted), ABP neurodevelopmental disabilities subspecialty CE pace (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal, annual ADHD medication CE, annual autism diagnostic CE, SDBP Annual Meeting, AAP National Conference, and SDBP membership all loaded in January. ABP primary counter and neurodevelopmental subspecialty counter tracked independently. DEA renewal placed with 3-year cycle tracking — DEA is required for controlled substance prescribing (Schedule II stimulants: methylphenidate, amphetamine) that is central to this subspecialty.' },
  { time: 'CE completion', action: '"SDBP-approved — AAP ADHD Clinical Practice Guideline 2023: expanded age range for ADHD diagnosis to age 4 and adults through 18, toddler (4-5 year) behavioral therapy-first protocol before medication in preschool ADHD, sex-specific normative data for ADHD rating scales in diagnosing ADHD in females, updated comorbidity screening protocol (anxiety, oppositional, mood, sleep), 2 CME, AMA PRA Category 1, ABP MOC applicable, ABP neurodevelopmental disabilities applicable — ADHD domain." Both ABP counters update.' },
  { time: 'ADHD CE', action: '"Annual ADHD medication management CE — stimulant supply and non-stimulant update: amphetamine product shortage management protocol (lisdexamfetamine versus mixed amphetamine salts substitution by dose equivalency), viloxazine ER (Qelbree) efficacy versus atomoxetine in treatment-naive patients ages 6-17 (ADHD-AN trial data), clonidine ER timing optimization for sleep-onset insomnia with stimulant use, and guanfacine ER combination with stimulant in ADHD with significant emotional dysregulation, 3 CME, ABP neurodevelopmental disabilities applicable, Q1." Annual ADHD CE placed Q1.' },
  { time: 'Autism CE', action: '"Annual autism diagnostic CE — diagnostic equity and ADOS-2: underdiagnosis in females with autism and masking/camouflaging assessment strategies, ADOS-2 Module 4 sensitivity in intellectually able adolescents, CARS-2 in minimal verbal children with co-occurring intellectual disability, and caregiver interview supplement (3di, ADI-R abbreviated) in low-resource clinic settings with limited assessor time, 2 CME, ABP neurodevelopmental disabilities applicable, Q3." Annual autism diagnostic CE placed Q3 aligned with INSAR annual meeting data and AAP October conference.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP neurodevelopmental disabilities subspecialty content satisfied? (24-month prep window calculated for 10-year exam?) State medical license CME complete? DEA valid (critical for Schedule II stimulant prescribing)? Annual ADHD CE documented? Annual autism diagnostic CE documented? SDBP membership active? Complete neurodevelopmental specialist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricNeurodevelopmentalSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Neurodevelopmental Specialists"
        title={
          <>
            ABP MOC and neurodevelopmental disabilities subspecialty maintained.
            <br />
            <em className="not-italic text-gold">ADHD medication CE current. Autism diagnostic criteria tracked.</em>
          </>
        }
        lede="Pediatric neurodevelopmental specialists manage ABP general pediatrics continuous MOC and ABP neurodevelopmental disabilities subspecialty certification on a 10-year examination cycle with 24-month preparation window alerts, state medical license biennial CME, DEA 3-year registration (required for Schedule II stimulant prescribing), annual ADHD medication CE as AAP guidelines expand to toddlers and adults and stimulant supply constraints change prescribing protocols, annual autism diagnostic CE as ADOS-2 updates and diagnostic equity evolve, and professional development at SDBP and AAP. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Neurodevelopmental Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric neurodevelopmental specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric neurodevelopmental specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric neurodevelopmental specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP MOC cycles, neurodevelopmental disabilities 10-year subspecialty examination, and annual ADHD and autism CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDNDDX_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP general pediatrics MOC on a continuous cycle, and ABP neurodevelopmental disabilities subspecialty on a 10-year exam cycle — both tracked separately. The 2023 AAP ADHD guideline expansion to toddlers (ages 4-5) and adults required CE before I changed my practice to include those age groups. The stimulant supply shortages in 2022-2023 required urgent CE on dose equivalency substitution before I could safely switch patients — that CE had nothing to do with my board renewal calendar. DEA registration is critical for me — I prescribe Schedule II stimulants for nearly all my ADHD patients and a lapsed DEA registration would shut down my practice. The autism diagnostic CE has become about equity — I need annual training on female presentation and diagnostic bias before I update my assessment protocols. The 10-year subspecialty exam cycle means I have a 24-month preparation window calculation that I track independently.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">O</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Olivia M., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric neurodevelopmental specialist and ADHD program director, academic developmental pediatrics division</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric neurodevelopmental specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, neurodevelopmental content weighted',
                'ABP neurodevelopmental disabilities subspecialty — 10-year cycle, 24-month preparation window alert',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year (required for Schedule II stimulant prescribing)',
                'Annual ADHD medication CE — AAP guideline updates, stimulant/non-stimulant protocol',
                'Annual autism diagnostic CE — ADOS-2 updates, diagnostic equity in females',
                'SDBP membership renewal — annual',
                'SDBP and AAP conference CME planning by ABP primary and neurodevelopmental subspecialty applicability',
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
        title="ABP MOC and neurodevelopmental disabilities subspecialty maintained."
        subtitle="CME tracking for ABP dual certification with 10-year exam prep window, DEA tracking for stimulant prescribing, annual ADHD and autism CE, and neurodevelopmental professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
