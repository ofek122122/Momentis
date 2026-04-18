import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Dietetic Technicians — DTR renewal, CE tracking, and dietetics credential management',
  description:
    'Dietetic technicians, registered manage 50 CPE units per 5-year DTRD renewal cycle with CDR-approved CE requirements, state dietetic license renewals, ServSafe food safety certification, and professional development simultaneously. Momenties tracks CPE by learning need code, surfaces renewal deadlines 90 days early, and manages the full dietetics credential calendar.',
  alternates: { canonical: '/for/dietetic-technicians' },
  openGraph: {
    title: 'Momenties for Dietetic Technicians',
    description: 'DTR renewal, CPE tracking, and dietetics credential management.',
    url: '/for/dietetic-technicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CPE tracking for DTRD renewal',
    desc: 'CDR DTRD renewal requires 50 CPE units per 5-year cycle with CDR-approved CE. CPE must align with the DTR\'s Individual Development Plan (IDP) learning need codes. Tag every CPE activity by CDR learning need code category: nutrition assessment, food service management, community nutrition, clinical nutrition, education and research. IDP alignment tracked alongside CPE unit total.',
  },
  {
    icon: Clock,
    title: 'Dietetic technician multi-credential renewal calendar',
    desc: '"DTRD — CDR, 5-year renewal, december." "State dietetic technician license — varies by state." "ServSafe food handler certification — 5-year." "CFPP food protection manager — 5-year." "CDR membership — annual." "Ethics CE — required by CDR." All dietetics credentials with 90-day advance alerts. Food service and clinical practice never interrupted by expired credentials.',
  },
  {
    icon: BarChart3,
    title: 'IDP learning need code analytics',
    desc: 'CDR requires DTRDs to complete CPE aligned with an Individual Development Plan based on self-identified learning needs. DTRs who track only total CPE units risk renewal rejection when IDP code coverage is insufficient. Tag each CPE activity by CDR learning need code. Analytics confirms IDP category distribution matches the documented learning plan before renewal submission.',
  },
  {
    icon: Users,
    title: 'AND, CDR, and state association involvement',
    desc: '"AND Annual Food and Nutrition Conference — october." "State dietetic association conference — spring." "CDR webinar series — quarterly." "Food service management workshop — annual." "Foodborne illness prevention training — biennial." All dietetics professional development on calendar. AND FNCE CPE sessions identified by CDR learning need code in advance for IDP alignment.',
  },
]

const DTR_WORKFLOW = [
  { time: 'Annual planning', action: 'DTRD 5-year renewal date, state license renewal deadline, ServSafe recertification, CDR membership renewal, AND FNCE conference, and IDP review all loaded in January. CPE pace: 10 CDR units per year satisfies the 5-year requirement. IDP learning need balance reviewed and updated annually.' },
  { time: 'CPE completion', action: '"CDR-approved webinar — medical nutrition therapy for diabetes management, 2 CPE units, learning need code 4000." Tagged by CDR learning need code. DTRD 5-year counter updates. IDP category distribution updates. Ethics CE tracked separately when applicable to CDR ethics requirement.' },
  { time: 'IDP review', action: '"Annual IDP review — CDR portal update, january." Individual Development Plan updated with current professional goals and learning needs. Upcoming CPE activities matched against updated IDP categories. IDP documentation ready for CDR renewal submission. Learning need code balance adjusted based on previous year CPE completion.' },
  { time: 'ServSafe', action: '"ServSafe Food Handler — 5-year, renewal october." ServSafe tracked as a separate credential from CDR credentials. Food service managers who hold CFPP track both on the same calendar. Recertification placed on calendar when current credential is obtained — not when it approaches expiration.' },
  { time: 'Renewal audit', action: 'Analytics: DTRD CPE units on pace? IDP learning need code coverage adequate? Ethics CPE satisfied? State license CE complete? ServSafe current? CDR membership active? Complete dietetic technician credential audit 90 days before DTRD renewal window. IDP documentation prepared for CDR renewal submission.' },
]

export default function ForDieteticTechniciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Dietetic Technicians"
        title={
          <>
            DTRD maintained. IDP aligned.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Dietetic technicians, registered manage 50 CPE units per 5-year DTRD renewal cycle with CDR learning need code requirements, state dietetic license CE, ServSafe and food protection certifications, and professional development simultaneously. Momenties tracks CPE by IDP learning need code, surfaces renewal deadlines 90 days early, and manages the full dietetics credential calendar in one view."
        crumbs={[{ label: 'For Dietetic Technicians' }]}
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
            CPE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dietetic technicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for DTRD credential and CPE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Dietetics credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CPE and credentials managed through the 5-year DTRD cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {DTR_WORKFLOW.map((step, i) => (
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
                &ldquo;The CDR IDP requirement is what gets overlooked. I had 52 CPE units heading into my DTRD renewal — more than enough — but my learning need code distribution didn&apos;t match my IDP. I had loaded up on clinical nutrition CE but my IDP was weighted toward food service management. Momenties shows me my IDP category breakdown live so I can course-correct mid-cycle, not at renewal time.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nadia P., DTR</div>
                  <div className="text-xs text-muted-foreground">Dietetic technician, school nutrition program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All dietetics credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CDR CPE by learning need code — DTRD 5-year renewal',
                'IDP learning need distribution analytics',
                'State dietetic technician license renewal',
                'ServSafe Food Handler — 5-year renewal',
                'CFPP food protection manager renewal',
                'CDR ethics CE — required category',
                'CDR membership renewal — annual',
                'AND FNCE and state association conference CPE',
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
        title="DTRD maintained. IDP aligned."
        subtitle="CPE tracking by learning need code, IDP distribution analytics, and dietetics credential renewal calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CPE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
