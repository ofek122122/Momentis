import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Social Workers — LCSW renewal, CE tracking, and social work credential management',
  description:
    'Clinical social workers manage state LCSW license renewal (typically 30–40 CE per 2 years with mandatory ethics hours), NASW specialty credentials, ASWB exam currency, and supervision hour documentation simultaneously. Momenties tracks CE by license and mandatory category, surfaces renewal deadlines 90 days early, and manages the full clinical social work credential calendar.',
  alternates: { canonical: '/for/clinical-social-workers' },
  openGraph: {
    title: 'Momenties for Clinical Social Workers',
    description: 'LCSW renewal, CE tracking, and clinical social work credential management.',
    url: '/for/clinical-social-workers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for LCSW renewal with mandatory ethics',
    desc: 'State LCSW renewal CE requirements vary: most states require 30–40 CE hours per 2-year cycle with mandatory ethics CE (typically 3–6 hours). Some states also require CE in suicide prevention, cultural competency, or domestic violence. Tag every CE by state-required mandatory category: ethics, suicide prevention, cultural competency. Mandatory minimums tracked separately from total CE hours.',
  },
  {
    icon: Clock,
    title: 'Clinical social worker multi-credential renewal calendar',
    desc: '"LCSW — state board, 2-year renewal, may." "NASW Academy specialty — renewal, if credentialed." "C-CATODSW substance use specialty — 2-year." "ACSW — NASW member credential." "CPR — 2-year, some settings require." "Mandatory reporter training — state required, periodic." All social work credentials with 90-day advance alerts. Clinical practice never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory CE category analytics',
    desc: 'State social work boards that require mandatory CE subcategories (ethics, suicide prevention, cultural competency) reject renewals when the total CE hours are sufficient but the mandatory subcategory minimums are not met. Analytics tracks each mandatory category\'s CE hours independently. Renewal cannot proceed until all mandatory minimums are satisfied. No last-minute mandatory CE scramble.',
  },
  {
    icon: Users,
    title: 'NASW, CSWE, and clinical social work involvement',
    desc: '"NASW Annual Conference — fall." "State NASW chapter conference — spring." "Trauma-informed care institute — annual." "Clinical supervision training." "NASW specialty credential continuing education." All clinical social work professional development on calendar. NASW conference CE tagged by state mandatory category applicability in advance for maximum renewal coverage.',
  },
]

const CSW_WORKFLOW = [
  { time: 'Annual planning', action: 'State LCSW renewal date, any NASW specialty credential renewals, mandatory reporter training due dates, NASW Annual Conference, and NASW membership renewal all loaded in January. CE pace: half biennial requirement per year with mandatory categories front-loaded to confirm early satisfaction.' },
  { time: 'CE completion', action: '"State-approved CE — ethics in social media and client relationships, 3 CE hours, ethics category." Tagged by applicable license and mandatory category. LCSW CE counter updates. Ethics subcategory counter updates. NASW specialty CE counter updates if applicable. Mandatory category totals visible at all times.' },
  { time: 'Mandatory CE categories', action: '"Suicide prevention training — 6 CE hours, state required." "Cultural competency training — 3 CE hours, state required." Each state-mandated CE category tracked as a separate counter. Analytics confirms all mandatory minimums satisfied before total CE completion is reached. Board will reject renewal if mandatory categories incomplete regardless of total CE hours.' },
  { time: 'Supervision hours', action: '"Supervision toward LICSW upgrade — biweekly thursdays." "Board-approved supervisor sessions documented." Supervision hours toward LICSW (or LCSW, depending on state) tracked separately from CE. Supervision calendar integrates with CE commitments. Hours toward approved supervisor credential also tracked if pursuing supervisor authorization.' },
  { time: 'Renewal audit', action: 'Analytics: LCSW CE hours on pace? Ethics CE minimum satisfied? Suicide prevention training current? Cultural competency CE complete? NASW specialty credential CE satisfied? Mandatory reporter training current? NASW membership active? Complete social work credential audit 90 days before LCSW renewal window.' },
]

export default function ForClinicalSocialWorkersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Social Workers"
        title={
          <>
            LCSW maintained. Ethics CE current.
            <br />
            <em className="not-italic text-gold">Mandatory categories satisfied.</em>
          </>
        }
        lede="Clinical social workers manage state LCSW renewal with mandatory ethics CE, suicide prevention, and cultural competency hours, NASW specialty credentials, supervision documentation, and professional development simultaneously. Momenties tracks CE by mandatory category, surfaces renewal deadlines 90 days early, and manages the full clinical social work credential calendar in one view."
        crumbs={[{ label: 'For Clinical Social Workers' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical social workers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for LCSW credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Clinical social work credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CSW_WORKFLOW.map((step, i) => (
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
                &ldquo;My state requires 40 CE hours per renewal, 6 of which must be ethics, 6 suicide prevention, and 3 cultural competency. I had 38 CE hours at my last renewal with 4 weeks to go and thought I was nearly done. Then I checked: I had 2 ethics hours, 0 suicide prevention, and 0 cultural competency. I had to complete 13 mandatory CE hours in 4 weeks. Now I track every mandatory category separately from day one of the renewal cycle.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus W., LCSW</div>
                  <div className="text-xs text-muted-foreground">Clinical social worker, community mental health agency</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical social work credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State LCSW CE with mandatory categories — 2-year',
                'Ethics CE minimum — mandatory tracking',
                'Suicide prevention CE — state required',
                'Cultural competency CE — state required',
                'NASW specialty credential CE renewal',
                'Mandatory reporter training — periodic requirement',
                'Supervision hours toward LICSW documentation',
                'NASW conference and chapter CE planning',
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
        title="LCSW maintained. Mandatory categories satisfied."
        subtitle="CE tracking with mandatory subcategory monitoring, renewal calendar, and social work professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
