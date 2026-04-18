import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Genetic Counselors — CGCEP renewal, CEU tracking, and genetic counseling credential management',
  description:
    'Genetic counselors manage ABGC CGC certification renewal with CGCEP-approved CEUs (50 per 5 years), state genetic counselor license renewals, ACMG membership requirements, and professional development simultaneously. Momenties tracks CEUs by category, surfaces renewal deadlines 90 days early, and manages the full genetic counseling credential calendar.',
  alternates: { canonical: '/for/genetic-counselors' },
  openGraph: {
    title: 'Momenties for Genetic Counselors',
    description: 'CGCEP renewal, CEU tracking, and genetic counseling credential management.',
    url: '/for/genetic-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking for CGC certification renewal',
    desc: 'ABGC CGC renewal requires 50 CEUs per 5-year cycle through CGCEP-approved activities. CEUs must be in areas relevant to genetic counseling practice: medical genetics, genetic counseling theory and practice, psychosocial issues, professional ethics, and teaching/supervision. Tag every CEU by CGCEP content domain. Domain distribution tracked alongside total CEU count.',
  },
  {
    icon: Clock,
    title: 'Genetic counselor multi-credential renewal calendar',
    desc: '"CGC — ABGC, 5-year renewal, december." "State genetic counselor license — varies by state." "ACMG membership — annual." "Board exam currency — ABGC renewal prerequisite." "NSGC membership — annual." All genetic counseling credentials with 90-day advance alerts. Clinical genetics practice never interrupted by expired certification or state licensure.',
  },
  {
    icon: BarChart3,
    title: 'State license and ABGC CEU analytics',
    desc: 'States with genetic counselor licensure laws may have CE requirements independent of ABGC renewal requirements. State-required CE topics may or may not align with CGCEP content domains. Analytics tracks ABGC CEU progress and state license CE progress independently. CE tagged to applicable credential at completion — no conflation between ABGC and state requirements.',
  },
  {
    icon: Users,
    title: 'NSGC, ACMG, and clinical genetics involvement',
    desc: '"NSGC Annual Education Conference — october." "ACMG Annual Clinical Genetics Meeting — march." "State genetic counseling society symposium — spring." "Precision medicine conference — annual." "Laboratory-sponsored CE webinars." All genetic counseling professional development on calendar. NSGC conference CEUs planned by CGCEP domain in advance for maximum renewal coverage.',
  },
]

const GC_WORKFLOW = [
  { time: 'Annual planning', action: 'CGC 5-year renewal date, state license renewal deadline, NSGC Annual Conference, ACMG Annual Meeting, and NSGC membership renewal all loaded in January. CEU pace: 10 CGCEP CEUs per year satisfies the 5-year requirement. CGCEP content domain balance reviewed annually.' },
  { time: 'CEU completion', action: '"CGCEP-approved webinar — variant interpretation and variant of uncertain significance management, 2 CEUs, medical genetics domain." Tagged by CGCEP domain. CGC 5-year counter updates. State license CE counter updates if applicable. Domain distribution updates. Ethics CEUs tracked separately when CE qualifies for ethics category.' },
  { time: 'State license', action: '"State genetic counselor license renewal — biennial, march." State CE requirements tracked separately from CGCEP requirements. Some states accept CGCEP CEUs; others have state-specific approved provider lists. Both credential CE requirements monitored independently without conflation. State expiry separate from CGC expiry.' },
  { time: 'Laboratory partnerships', action: '"Sponsored CE — diagnostic laboratory genetics update, 1 CEU, medical genetics." Laboratory-sponsored CE programs are common in genetic counseling. Tag lab-sponsored CE with CGCEP domain. Track sponsored CE separately from independent CE to confirm CGCEP content balance is genuinely diverse. Conflict of interest documentation maintained.' },
  { time: 'Renewal audit', action: 'Analytics: CGC CEU total on pace? CGCEP domain coverage balanced (medical genetics, psychosocial, ethics)? State license CE current? NSGC and ACMG memberships active? Board exam requirement satisfied? Complete genetic counseling credential audit 90 days before CGC renewal window. CGCEP documentation prepared for ABGC submission.' },
]

export default function ForGeneticCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Genetic Counselors"
        title={
          <>
            CGC maintained. State license current.
            <br />
            <em className="not-italic text-gold">CEUs never scrambled.</em>
          </>
        }
        lede="Genetic counselors manage ABGC CGC renewal with 50 CGCEP CEUs per 5 years across required content domains, state genetic counselor license CE with independent requirements, NSGC and ACMG involvement, and professional development simultaneously. Momenties tracks CEUs by CGCEP domain, surfaces renewal deadlines 90 days early, and manages the full genetic counseling credential calendar in one view."
        crumbs={[{ label: 'For Genetic Counselors' }]}
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
            CEU analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How genetic counselors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CGC credential and CEU management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Genetic counseling credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEUs and credentials managed through the 5-year CGC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {GC_WORKFLOW.map((step, i) => (
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
                &ldquo;My state has its own genetic counselor license CE requirements that don&apos;t map cleanly to CGCEP domains. I was tracking ABGC CEUs and state CE in the same spreadsheet and conflating them. By year three of my CGC cycle I thought I had 38 CEUs — but I was counting some state CE that wasn&apos;t CGCEP-approved. Momenties forced me to tag each CEU by source organization. I had 28 actual CGCEP CEUs. Glad I found out in year three, not year five.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elena S., MS, CGC</div>
                  <div className="text-xs text-muted-foreground">Genetic counselor, oncology genetics program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All genetic counseling credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CGCEP CEUs by domain — CGC 5-year renewal',
                'State genetic counselor license CE',
                'Medical genetics domain CE tracking',
                'Ethics CEU minimum — required category',
                'Psychosocial competency CE tracking',
                'NSGC and ACMG membership renewals',
                'NSGC and ACMG conference CEU planning',
                'Laboratory-sponsored CE documentation',
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
        title="CGC maintained. State license current."
        subtitle="CEU tracking by CGCEP domain, dual credential renewal calendar, and genetic counseling professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
