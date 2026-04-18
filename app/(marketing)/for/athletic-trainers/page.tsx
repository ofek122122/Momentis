import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Athletic Trainers — BOC certification, CEU tracking, and AT credential management',
  description:
    'Athletic trainers manage 50 CEUs per 2-year BOC certification renewal cycle with category requirements including emergency care, professional development, and patient care content, state licensure renewals, CPR/AED recertification, and sports medicine society involvement simultaneously. Momenties tracks CEUs by BOC category, surfaces renewal deadlines 90 days early, and manages the full AT credential calendar.',
  alternates: { canonical: '/for/athletic-trainers' },
  openGraph: {
    title: 'Momenties for Athletic Trainers',
    description: 'BOC certification renewal, CEU tracking, and athletic trainer credential management.',
    url: '/for/athletic-trainers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking for BOC certification renewal',
    desc: 'BOC requires 50 CEUs per 2-year renewal cycle with mandatory categories: emergency care (must be current at all times), professional development, and total patient care content. BOC-approved providers must be used. Tag every CEU by BOC category: emergency care, professional development, evidence-based practice, prevention. Mandatory emergency care CEU tracked as a distinct requirement.',
  },
  {
    icon: Clock,
    title: 'AT multi-credential renewal calendar',
    desc: '"BOC certification — 2-year renewal, december." "State AT license — renewal, varies by state." "CPR/AED — 2-year, march." "Emergency action plan review — annual." "Concussion management certification — renewal." All athletic training credentials with 90-day advance alerts. Emergency care certifications never lapse at any sport setting.',
  },
  {
    icon: BarChart3,
    title: 'BOC category analytics',
    desc: 'BOC CEU requirements are not just a total hour count — each category has a minimum or maximum that must be respected. Professional development CEUs are capped. Emergency care must be current at all times with no expiration gap. Analytics shows category distribution against BOC requirements so no category violation is discovered at renewal.',
  },
  {
    icon: Users,
    title: 'NATA and sports medicine society involvement',
    desc: '"NATA Annual Meeting — june." "State athletic trainers association meeting — annual." "NATA district meeting — semi-annual." "Sports medicine symposium — fall." All AT professional development on calendar from year start. NATA Annual Meeting CEUs planned in advance by BOC category to maximize renewal credit per conference.',
  },
]

const AT_WORKFLOW = [
  { time: 'Annual planning', action: 'BOC 2-year renewal date, state AT license deadline, CPR/AED recertification, concussion management certification renewal, and NATA Annual Meeting all loaded in January. 90-day alerts on every credential. CEU completion pace calculated: 25 BOC CEUs per year satisfies the 2-year requirement with category coverage planned from the start.' },
  { time: 'CEU completion', action: '"BOC-approved online module — therapeutic modalities, tuesday 7pm, 2 CEUs, patient care." Tagged by BOC category. Professional development, evidence-based practice, and patient care counters update. Emergency care category separately confirmed current. No BOC category violation at renewal audit.' },
  { time: 'Emergency care', action: '"CPR/AED recertification — saturday 9am, 4 hours, march." BOC requires emergency care to be current at all times — not just renewed before the biennial deadline. CPR/AED tracked with its own 2-year renewal separate from the BOC 2-year cycle. No sport setting coverage gap due to expired emergency care.' },
  { time: 'NATA Annual', action: '"NATA Annual Meeting — june 20-23." CEU sessions pre-selected for BOC category coverage: emergency care session, evidence-based practice workshop, professional development symposium. 15+ BOC CEUs from one conference planned in advance. BOC category requirements substantially covered by annual conference attendance.' },
  { time: 'Renewal audit', action: 'Analytics: BOC CEU progress by category. Emergency care current? Professional development CEUs within cap? Total 50-CEU requirement on track? State license CE complete? CPR/AED valid? Concussion cert current? Complete AT credential audit 90 days before the BOC renewal window opens.' },
]

export default function ForAthleticTrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Athletic Trainers"
        title={
          <>
            BOC certified. Emergency care current.
            <br />
            <em className="not-italic text-gold">CEUs never scrambled.</em>
          </>
        }
        lede="Athletic trainers manage 50 CEUs per 2-year BOC certification renewal cycle with mandatory category requirements, state AT license renewals, CPR/AED recertification as an always-current requirement, concussion management certifications, and NATA involvement simultaneously. Momenties tracks CEUs by BOC category, surfaces renewal deadlines 90 days early, and manages the full athletic training credential calendar in one view."
        crumbs={[{ label: 'For Athletic Trainers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How athletic trainers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for BOC credential and CEU management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">BOC credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEU and credentials managed through the 2-year BOC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {AT_WORKFLOW.map((step, i) => (
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
                &ldquo;The BOC professional development CEU cap caught me off guard my second renewal. I had earned 30 of my 50 CEUs but 18 were professional development — above the cap. They only counted 10 toward my renewal. I was short 8 CEUs with 3 weeks to go. Momenties fixed this — I can see my professional development total in real time against the cap and I&apos;ve never been over-weighted in a single category since.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Z</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Zach R., ATC</div>
                  <div className="text-xs text-muted-foreground">Athletic trainer, NCAA Division I athletics</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All athletic training credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CEU by BOC category — 2-year renewal cycle',
                'Professional development CEU cap tracking',
                'Emergency care CEU — always-current requirement',
                'State AT license renewal deadline',
                'CPR/AED recertification — 2-year',
                'Concussion management certification renewal',
                'NATA Annual Meeting CEU planning',
                'Sport-specific safety training requirements',
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
        title="BOC certified. Emergency care current."
        subtitle="CEU tracking by BOC category with cap management, renewal calendar, and AT professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
