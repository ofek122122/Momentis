import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Certified Diabetes Care and Education Specialists — CDCES renewal, CE tracking, and diabetes educator credential management',
  description:
    'Certified Diabetes Care and Education Specialists manage ADCES CDCES renewal with 75 CE per 5 years including DCES-specific CE, base license CE (RN, RD, PA, PharmD, or others), annual diabetes care standard updates, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full diabetes education credential calendar.',
  alternates: { canonical: '/for/certified-diabetes-educators' },
  openGraph: {
    title: 'Momenties for Certified Diabetes Care Specialists',
    description: 'CDCES renewal, CE tracking, and diabetes education credential management.',
    url: '/for/certified-diabetes-educators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CDCES renewal',
    desc: 'ADCES CDCES renewal requires 75 CE per 5-year cycle with ADCES-approved CE in diabetes care and education content areas. At least 30 of the 75 CE must be DCES-specific. CE must address diabetes care topics: pathophysiology, pharmacology, technology and devices, nutrition, physical activity, behavior change, monitoring, and prevention. Tag by CDCES content area and DCES-specific status.',
  },
  {
    icon: Clock,
    title: 'Diabetes educator multi-credential renewal calendar',
    desc: '"CDCES — ADCES, 5-year renewal, september." "RN or RD or PA base license — biennial, varies by state." "ADA professional membership — annual." "ADCES membership — annual." "Annual diabetes care standards training — january each year." "Pump and CGM technology update — annual." All diabetes education credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Base license and CDCES CE analytics',
    desc: 'Every CDCES holds a base clinical license (RN, RD, PA, PharmD, MD, etc.) with its own independent CE requirement. Base license CE and CDCES CE have different approved providers and content requirements. Some CE qualifies for both; most is credential-specific. Analytics tracks base license CE and CDCES CE independently. No hours miscounted between the two requirements.',
  },
  {
    icon: Users,
    title: 'ADCES, ADA, and diabetes professional involvement',
    desc: '"ADCES Annual Conference — august." "ADA Scientific Sessions — june." "State diabetes association meeting — fall." "ATTD advanced technologies conference." "Local ADCES chapter meeting — monthly." All diabetes education professional development on calendar. ADCES and ADA conference CE sessions tagged by CDCES content area and DCES-specific status in advance.',
  },
]

const CDCES_WORKFLOW = [
  { time: 'Annual planning', action: 'CDCES 5-year renewal date, base license renewal deadline (RN, RD, PA, etc.), annual diabetes care standards review (January), ADCES Annual Conference, and ADCES membership renewal all loaded in January. CE pace: 15 CDCES CE per year satisfies the 5-year requirement with DCES-specific minimums tracked.' },
  { time: 'CE completion', action: '"ADCES-approved webinar — closed-loop insulin delivery systems for type 1 diabetes, 2 CE hours, DCES-specific, technology and devices." Tagged by CDCES content area and DCES-specific status. CDCES 5-year counter updates. DCES-specific 30-hour minimum counter updates. Base license CE counter updates if CE also qualifies.' },
  { time: 'Standards updates', action: '"ADA Standards of Medical Care in Diabetes — january annual update review." "ADCES standards update training." Annual diabetes care standard changes documented as CE where applicable. Technology update CE (new pump platforms, CGM devices, hybrid closed-loop systems) tagged separately as device-specific professional development.' },
  { time: 'Base license CE', action: '"RN license renewal — biennial, june, 30 CE hours." Base clinical license CE tracked separately from CDCES CE. Base license renewal is independent of CDCES renewal cycle and must be maintained to retain CDCES eligibility. Both credential CE requirements monitored separately and alerting 90 days before each renewal.' },
  { time: 'Renewal audit', action: 'Analytics: CDCES CE total on pace? DCES-specific 30-hour minimum satisfied? Base license CE complete? Annual standards review current? Technology CE up to date? ADCES membership active? Complete diabetes education credential audit 90 days before CDCES renewal window. ADCES documentation prepared for renewal submission.' },
]

export default function ForCertifiedDiabetesEducatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Certified Diabetes Care and Education Specialists"
        title={
          <>
            CDCES maintained. Base license current.
            <br />
            <em className="not-italic text-gold">DCES-specific CE satisfied.</em>
          </>
        }
        lede="Certified Diabetes Care and Education Specialists manage CDCES renewal with 75 CE per 5 years including 30 DCES-specific hours, base clinical license CE with independent requirements, annual diabetes care standards updates, and professional development simultaneously. Momenties tracks CE by CDCES content area, surfaces renewal deadlines 90 days early, and manages the full diabetes education credential calendar in one view."
        crumbs={[{ label: 'For Certified Diabetes Educators' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How diabetes educators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CDCES credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Diabetes educator credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year CDCES cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CDCES_WORKFLOW.map((step, i) => (
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
                &ldquo;The CDCES has a 30-hour DCES-specific CE requirement within the 75-hour total. I had 68 CE hours going into year 4 of my cycle and thought I was almost done. Then I checked my DCES-specific total: only 22 hours. I needed 8 more DCES-specific hours from an approved provider. Not all my general diabetes CE counted. Momenties tracks DCES-specific hours as a separate counter so I see this gap at year 2, not year 4.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Brenda C., RN, CDCES</div>
                  <div className="text-xs text-muted-foreground">Diabetes care and education specialist, endocrinology practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All diabetes education credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CDCES CE by content area — 5-year renewal',
                'DCES-specific 30-hour minimum tracking',
                'Base clinical license CE (RN, RD, PA) — biennial',
                'Annual ADA standards update review',
                'CGM and insulin pump technology CE',
                'ADCES membership renewal — annual',
                'ADCES Annual Conference CE planning',
                'ADA Scientific Sessions CE by CDCES content area',
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
        title="CDCES maintained. DCES-specific CE satisfied."
        subtitle="CE tracking with DCES-specific subcategory monitoring, base license renewal calendar, and diabetes education professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
