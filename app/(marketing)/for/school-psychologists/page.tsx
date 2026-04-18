import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for School Psychologists — NCSP renewal, CE tracking, and school psych credential management',
  description:
    'School psychologists manage 75 CE hours per 3-year NCSP renewal cycle with NASP-approved CE requirements, state school psychologist certification renewals, state psychology license CE, and professional development simultaneously. Momenties tracks CE by NCSP domain, surfaces renewal deadlines 90 days early, and manages the full school psychology credential calendar.',
  alternates: { canonical: '/for/school-psychologists' },
  openGraph: {
    title: 'Momenties for School Psychologists',
    description: 'NCSP renewal, CE tracking, and school psychology credential management.',
    url: '/for/school-psychologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NCSP renewal',
    desc: 'NASP NCSP renewal requires 75 CE hours per 3-year cycle with NASP-approved CE in NASP domains of practice. Tag every CE activity by NASP domain: data-based decision making, consultation and collaboration, academic interventions, mental health services, prevention, family engagement. Domain coverage tracked alongside total hour count.',
  },
  {
    icon: Clock,
    title: 'School psych multi-credential renewal calendar',
    desc: '"NCSP — NASP, 3-year renewal, july." "State school psychology certification — varies by state." "State psychology license — biennial, if licensed." "Crisis intervention training — CIST, annual refresher." "Safe Talk/ASIST — biennial." All school psychology credentials with 90-day advance alerts. No credential lapse between school year assignment cycles.',
  },
  {
    icon: BarChart3,
    title: 'Dual credential CE analytics',
    desc: 'Many school psychologists hold both a NASP NCSP and a state psychology license — each with independent CE requirements. CE from APA or NASP conferences may apply to one or both credentials. Analytics shows each credential\'s CE progress independently. No hour mistakenly counted toward the wrong credential\'s requirement.',
  },
  {
    icon: Users,
    title: 'NASP and state association involvement',
    desc: '"NASP Annual Convention — february." "State school psychology association conference — fall." "Trauma-informed practices workshop — annual." "Suicide prevention training — annual." All school psychology professional development on calendar. NASP Annual Convention CE planned in advance by NASP domain for maximum NCSP credit.',
  },
]

const SP_WORKFLOW = [
  { time: 'Annual planning', action: 'NCSP 3-year renewal date, state certification renewal deadline, state psychology license CE (if applicable), crisis intervention training refresher, and NASP Annual Convention all loaded in August (school year start). CE pace: 25 NCSP hours per year satisfies the 3-year requirement.' },
  { time: 'CE completion', action: '"NASP-approved workshop — multi-tiered systems of support, saturday 9am, 6 CE hours, MTSS domain." Tagged by NASP domain. NCSP 3-year counter updates. State license CE counter updates if CE also qualifies for state requirements. Domain coverage visible alongside total hours.' },
  { time: 'Crisis training', action: '"CIST crisis intervention refresher — annual, october." "ASIST suicide prevention — biennial, every other october." Crisis intervention credentials maintained as separate calendar items. Annual and biennial training placed on calendar at start of each school year. No crisis response capability gap.' },
  { time: 'State certification', action: '"School psychology certification — state education department, renewal june 30." State certification CE requirements may differ from NCSP requirements. Some states accept NCSP CE; others have district-approved in-service requirements. Both sets tracked without conflation.' },
  { time: 'Renewal audit', action: 'Analytics: NCSP CE hours on pace? NASP domain coverage adequate? State certification CE complete? State psychology license CE (if applicable) on track? Crisis training current? NASP membership active? Complete school psychology credential audit 90 days before NCSP renewal window.' },
]

export default function ForSchoolPsychologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for School Psychologists"
        title={
          <>
            NCSP maintained. Certifications current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="School psychologists manage 75 CE hours per 3-year NCSP renewal cycle with NASP domain requirements, state school psychology certification renewals, state psychology license CE, crisis intervention training, and professional development simultaneously. Momenties tracks CE by NASP domain, surfaces renewal deadlines 90 days early, and manages the full school psychology credential calendar in one view."
        crumbs={[{ label: 'For School Psychologists' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No student data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How school psychologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for NCSP credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">School psych credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 3-year NCSP cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {SP_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold NCSP and a state psychology license — two sets of CE requirements with different approved providers and different renewal calendars. I also maintain ASIST suicide prevention training which is biennial and easy to let slip. When I started using Momenties I realized my NCSP had adequate total CE hours but poor domain coverage — I was heavy on data-based decision making and light on family engagement. Fixed that in year two.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Carmen O., PhD, NCSP</div>
                  <div className="text-xs text-muted-foreground">School psychologist, urban K-12 district</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All school psychology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NCSP CE by NASP domain — 3-year renewal',
                'State school psychology certification',
                'State psychology license CE (if applicable)',
                'CIST crisis intervention — annual refresher',
                'ASIST suicide prevention — biennial',
                'Threat assessment training renewal',
                'NASP Annual Convention CE planning',
                'District-required professional development',
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
        title="NCSP maintained. Certifications current."
        subtitle="CE tracking by NASP domain, dual credential renewal calendar, and school psychology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
