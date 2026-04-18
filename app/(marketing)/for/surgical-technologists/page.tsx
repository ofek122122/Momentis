import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Surgical Technologists — CST renewal, CE tracking, and surgical tech credential management',
  description:
    'Surgical technologists manage 60 CE credits per 4-year CST renewal cycle with NBSTSA-approved CE requirements, state surgical tech licensure renewals, CPR/BLS recertification, specialty certifications in surgical first assisting, and professional development simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the full surgical tech credential calendar.',
  alternates: { canonical: '/for/surgical-technologists' },
  openGraph: {
    title: 'Momenties for Surgical Technologists',
    description: 'CST renewal, CE tracking, and surgical technologist credential management.',
    url: '/for/surgical-technologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CST renewal',
    desc: 'NBSTSA CST renewal requires 60 CE credits per 4-year cycle from NBSTSA-approved CE providers. CE must be in surgical technology content areas. Tag every CE activity by content category: surgical procedures, pharmacology, sterilization and asepsis, anatomy and physiology, patient care. Running total with category breakdown against the 4-year 60-credit requirement.',
  },
  {
    icon: Clock,
    title: 'Surgical tech multi-credential renewal calendar',
    desc: '"CST — NBSTSA, 4-year renewal, june." "State surgical tech license — varies." "CSFA (surgical first assisting) — NBSTSA, 4-year." "CPR/BLS — 2-year, april." "Fire safety training — hospital annual." "HIPAA refresher — annual." All surgical tech credentials with 90-day advance alerts. OR privileges never interrupted by an expired credential.',
  },
  {
    icon: BarChart3,
    title: 'Hospital surgical service CE documentation',
    desc: 'Surgical technologists at teaching hospitals and trauma centers often participate in in-service training, case conferences, and specialty procedure education that qualifies for NBSTSA CE. Tag hospital in-service education as CE where NBSTSA-approved. Analytics shows whether facility-based CE is adequately contributing to the 4-year renewal alongside online CE courses.',
  },
  {
    icon: Users,
    title: 'AST and specialty service involvement',
    desc: '"AST Annual National Conference — june." "State surgical technology association — annual." "Specialty service training — robotic surgery, annual." "Trauma team refresher — annual." All surgical technology professional development and hospital-required training on calendar from year start.',
  },
]

const CST_WORKFLOW = [
  { time: 'Annual planning', action: 'CST 4-year renewal date, state surgical tech license deadline, CPR/BLS recertification, CSFA renewal if applicable, AST Annual Conference, and hospital annual training requirements all loaded in January. CE pace calculated: 15 credits per year satisfies the 4-year NBSTSA requirement.' },
  { time: 'CE completion', action: '"NBSTSA-approved online module — minimally invasive surgical techniques, wednesday 7pm, 3 CE credits, surgical procedures." Tagged by NBSTSA content category. 4-year CST CE counter updates. No content category gap discovered at 4-year renewal audit.' },
  { time: 'Hospital training', action: '"Annual fire safety training — OR department, january 15." "Robotic surgery platform update — quarterly." "Bloodborne pathogens refresher — annual." Hospital-required annual training tracked alongside NBSTSA CE requirements. Some hospital in-service qualifies for NBSTSA credit — tagged appropriately.' },
  { time: 'CSFA renewal', action: '"Certified Surgical First Assistant renewal — NBSTSA, 4-year, aligned with CST." CSFA specialty credential tracked separately from primary CST certification. First assisting CE requirements documented independently. Both credentials managed on the same calendar.' },
  { time: 'Renewal audit', action: 'Analytics: CST CE credits on pace? NBSTSA content categories covered? State license CE complete? CPR valid? Hospital annual training complete? CSFA CE current? 60-credit 4-year requirement met? Complete surgical tech credential audit 90 days before NBSTSA renewal window.' },
]

export default function ForSurgicalTechnologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Surgical Technologists"
        title={
          <>
            CST certified. OR privileges current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Surgical technologists manage 60 CE credits per 4-year NBSTSA CST renewal cycle with content category requirements, state surgical tech license renewals, hospital annual training requirements, specialty certifications in first assisting, and AST involvement simultaneously. Momenties tracks CE by NBSTSA category, surfaces renewal deadlines 90 days early, and manages the full surgical tech credential calendar in one view."
        crumbs={[{ label: 'For Surgical Technologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How surgical technologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CST credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CST credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 4-year NBSTSA cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CST_WORKFLOW.map((step, i) => (
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
                &ldquo;The 4-year CST renewal cycle is long enough that it feels distant — until it&apos;s not. I went into my second renewal year having earned 22 of my 60 required CE credits with 12 months left. I had to complete 38 credits in one year while working full time in the OR. Momenties prevents this now: I see my pace against the 4-year target every quarter and adjust before I&apos;m behind.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Gabrielle N., CST</div>
                  <div className="text-xs text-muted-foreground">Surgical technologist, cardiovascular OR</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All surgical tech credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE by NBSTSA category — 4-year CST renewal',
                'State surgical technology license renewal',
                'CSFA specialty certification — 4-year renewal',
                'CPR/BLS recertification — 2-year',
                'Annual hospital fire safety training',
                'Bloodborne pathogens annual refresher',
                'Robotic surgery platform certification',
                'AST Annual Conference CE planning',
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
        title="CST certified. OR privileges current."
        subtitle="CE tracking by NBSTSA category, 4-year renewal pacing, and surgical tech professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
