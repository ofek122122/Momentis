import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Health Educators — CHES/MCHES CE renewal, health education credential management',
  description:
    'Health educators manage NCHEC CHES or MCHES certification 75 CE/5 years renewal, mandatory category CE hours, state public health education licensure CE, institutional health equity training, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full health educator credential calendar.',
  alternates: { canonical: '/for/health-educators' },
  openGraph: {
    title: 'Momenties for Health Educators',
    description: 'CHES/MCHES CE renewal, health education credential management.',
    url: '/for/health-educators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CHES, MCHES, and health education certification',
    desc: 'NCHEC Certified Health Education Specialist (CHES) and Master Certified Health Education Specialist (MCHES) certifications require 75 CE hours every 5 years in health education content. CE must be in NCHEC-recognized content areas across the Seven Areas of Responsibility. MCHES has additional advanced-level content requirements beyond CHES. Mandatory categories — health equity, cultural competency — tracked separately from total CE. CHES and MCHES counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Health educator multi-credential renewal calendar',
    desc: '"CHES — NCHEC, 75 CE/5 years." "MCHES — NCHEC, 75 CE/5 years with advanced requirements." "State public health education licensure — CE varies by state." "Health equity and cultural competency CE — mandatory category." "SOPHE membership — annual." "Annual institutional DEI/health equity training." All health educator credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory category and Area of Responsibility analytics',
    desc: 'NCHEC CHES and MCHES renewal requires CE distributed across the Seven Areas of Responsibility — a health educator with 75 CE hours concentrated in one area may fail renewal if other areas have inadequate coverage. Health equity and cultural competency CE tracked as a mandatory institutional category separate from NCHEC requirements. Area distribution tracked independently to surface imbalances before renewal.',
  },
  {
    icon: Users,
    title: 'SOPHE, APHA, and health education professional involvement',
    desc: '"SOPHE Annual Meeting — fall." "APHA Annual Meeting and Expo — november." "NCHEC webinar CE — quarterly." "Society of Public Health Education regional conference." "ASTHO annual public health education update." "NACCHO community health education training." All health education professional development on calendar. SOPHE and APHA conference CE tagged by CHES and MCHES applicability in advance.',
  },
]

const HE_WORKFLOW = [
  { time: 'Annual planning', action: 'CHES or MCHES 5-year 75-CE pace (annualized to 15 CE/year), state public health licensure CE cycle, health equity mandatory category CE pace, institutional DEI training annual date, SOPHE Annual Meeting, and SOPHE membership all loaded in January. CHES/MCHES cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"SOPHE-approved — social determinants of health: structural racism and health equity in community health education, 3 CE, CHES applicable." Tagged by applicable certification. CHES counter updates (cumulative toward 75/5yr target). MCHES counter updates if advanced content. Health equity mandatory category updates. State licensure CE updates if content qualifies. Each tracked independently.' },
  { time: 'Area distribution', action: '"CHES CE distribution audit — Q2." Seven Areas of Responsibility distribution reviewed at mid-year. Area I: Assess Needs. Area II: Plan Programs. Area III: Implement. Area IV: Evaluate. Area V: Administer. Area VI: Serve as Resource. Area VII: Communicate. CHES with imbalanced area distribution identified at Q2 — not at year 5 of renewal cycle.' },
  { time: 'Health equity CE', action: '"Health equity and anti-racism in public health education practice — 4 CE, CHES applicable, mandatory category." Health equity CE tracked as a mandatory institutional and professional development category beyond NCHEC totals. Many public health employers and credentialing bodies increasingly require documented health equity CE. Category counter maintained separately from NCHEC totals.' },
  { time: 'Renewal audit', action: 'Analytics: CHES/MCHES CE on pace (cumulative toward 75/5yr)? Seven Areas of Responsibility distribution adequate? Health equity category satisfied? State licensure CE complete? Institutional DEI training documented? SOPHE membership active? Complete health educator credential audit 90 days before NCHEC renewal. NCHEC and state documentation maintained separately.' },
]

export default function ForHealthEducatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Health Educators"
        title={
          <>
            CHES and MCHES certifications maintained.
            <br />
            <em className="not-italic text-gold">Area distribution and health equity CE never short.</em>
          </>
        }
        lede="Health educators manage NCHEC CHES or MCHES certification with 75 CE hours over 5 years distributed across the Seven Areas of Responsibility, mandatory health equity and cultural competency CE categories, state public health education licensure CE on independent cycles, annual institutional equity training, and professional development simultaneously. Momenties tracks CE by health education credential with area distribution analytics, surfaces renewal deadlines 90 days early, and manages the full health educator credential calendar in one view."
        crumbs={[{ label: 'For Health Educators' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How health educators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for health education credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Health educator credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every NCHEC certification and state licensure cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {HE_WORKFLOW.map((step, i) => (
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
                &ldquo;CHES renewal has two problems most people don&apos;t anticipate: the 5-year cycle is long enough that you forget about it, and the Seven Areas of Responsibility requirement means you can&apos;t just accumulate 75 hours of whatever you find interesting. I had 78 hours at renewal but almost none in Area V (Administration) and Area VI (Resource Person) because those aren&apos;t the fun topics at conferences. NCHEC wants distribution. My state also has a separate public health licensure CE requirement. Momenties broke out the area distribution so I could see the gap while I still had time to address it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Andrea H., MPH, CHES</div>
                  <div className="text-xs text-muted-foreground">Health educator, community health program, county health department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All health educator credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NCHEC CHES certification CE — 75 hours/5 years',
                'NCHEC MCHES certification CE — 75 hours/5 years (advanced)',
                'Seven Areas of Responsibility distribution tracking',
                'State public health education licensure CE',
                'Health equity CE — mandatory category',
                'Cultural competency CE — mandatory category',
                'Annual institutional DEI and equity training',
                'SOPHE and APHA conference CE planning by applicability',
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
        title="CHES and MCHES certifications maintained."
        subtitle="CE tracking with area distribution analytics, health equity category, state licensure, and health education professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
