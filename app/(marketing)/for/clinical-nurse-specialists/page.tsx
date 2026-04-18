import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Nurse Specialists — CNS APRN CE, specialty certification renewal, and credential management',
  description:
    'Clinical Nurse Specialists manage state RN license CE, APRN license renewal, ANCC CNS specialty certification (1000 CE hours/5yr), population-focused CNS certification, mandatory category CE requirements, prescriptive authority CE, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full CNS credential calendar.',
  alternates: { canonical: '/for/clinical-nurse-specialists' },
  openGraph: {
    title: 'Momenties for Clinical Nurse Specialists',
    description: 'CNS APRN CE, specialty certification renewal, and credential management.',
    url: '/for/clinical-nurse-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking across CNS APRN and specialty certifications',
    desc: 'CNS APRN practice requires state RN license CE renewal plus APRN license renewal CE — these may be the same hours or separate depending on state. ANCC CNS specialty certification requires 1000 CE hours per 5 years with specific content requirements. Population-focused CNS certifications (adult-gerontology, pediatric, neonatal) each have independent renewal cycles. CE tagged by applicable credential.',
  },
  {
    icon: Clock,
    title: 'CNS multi-credential renewal calendar',
    desc: '"State RN license CE — biennial, varies by state." "APRN license renewal CE — biennial." "ANCC CNS specialty certification — 5-year, 1000 hours." "Population-focused CNS certification — 5-year." "Prescriptive authority CE — state specific, varies." "Mandatory ethics CE — state required." "NACNS membership — annual." All CNS credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory category CE and prescriptive authority analytics',
    desc: 'Many states require CNS APRN CE in specific mandatory categories: pharmacology CE for prescriptive authority, opioid prescribing education, pain management CE, end-of-life care CE, or implicit bias training. Mandatory category CE tracked separately from total CE count — a CNS may have adequate total CE hours but insufficient pharmacology hours for prescriptive authority renewal. Each category confirmed independently.',
  },
  {
    icon: Users,
    title: 'NACNS, ANA, and specialty organization involvement',
    desc: '"NACNS Annual Conference — spring." "Specialty organization annual meeting (ONS, SCCM, AWHONN, AACN, etc.)." "ANA National Conference." "State nursing organization annual meeting." "CNS preceptor education — annually." All CNS professional development on calendar. Conference CE tagged by applicable CNS certification in advance for maximum renewal credit.',
  },
]

const CNS_WORKFLOW = [
  { time: 'Annual planning', action: 'State RN license CE cycle, APRN license CE cycle, ANCC CNS specialty certification 5-year pace, population CNS certification cycle, prescriptive authority pharmacology CE requirement, mandatory state CE categories, and NACNS membership all loaded in January. CE pace: 200 CE hours per year toward 5-year ANCC total.' },
  { time: 'CE completion', action: '"ANCC-approved — advanced pharmacology for CNS prescribers: drug interactions and monitoring, 3 CE, CNS specialty and pharmacology category." Tagged by applicable credential. ANCC CNS counter updates. Pharmacology CE category counter updates. If state RN CE accepts the content, state counter also updates. Each credential tracked independently.' },
  { time: 'Prescriptive authority', action: '"Pharmacology CE for prescriptive authority renewal — 45 CE hours per renewal cycle, state required." Pharmacology CE tracked as a required category within the total CE count. CNS who prescribe medications must satisfy pharmacology CE requirements separate from general clinical CE. Pharmacology hours confirmed sufficient before APRN license renewal submitted.' },
  { time: 'Population CNS cert', action: '"ANCC Adult-Gerontology CNS certification renewal — 5-year, 1000 CE hours." Population-focused CNS certification tracked on 5-year cycle independent of core CNS specialty certification. CE for population specialty tagged with population CNS applicability at completion. Two independent CNS certification cycles managed simultaneously if applicable.' },
  { time: 'Renewal audit', action: 'Analytics: State RN CE complete? APRN license CE complete? ANCC CNS certification CE on pace? Pharmacology CE hours satisfied? Mandatory state CE categories complete? Population CNS certification CE adequate? NACNS membership active? Complete CNS credential audit 90 days before earliest renewal. Separate documentation per state board and certification body.' },
]

export default function ForClinicalNurseSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Nurse Specialists"
        title={
          <>
            CNS APRN credentials maintained.
            <br />
            <em className="not-italic text-gold">Prescriptive authority CE never missed.</em>
          </>
        }
        lede="Clinical Nurse Specialists manage state RN and APRN license CE renewal, ANCC CNS specialty certification with 1000 CE hours over 5 years, population-focused CNS certification on a separate 5-year cycle, mandatory state CE category requirements for prescriptive authority, and professional development simultaneously. Momenties tracks CE by CNS credential, surfaces renewal deadlines 90 days early, and manages the full CNS credential calendar in one view."
        crumbs={[{ label: 'For Clinical Nurse Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical nurse specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CNS credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CNS credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed across independent renewal cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {CNS_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ANCC CNS certification, ANCC Adult-Gerontology CNS certification, a state RN license, and an APRN license with prescriptive authority. The prescriptive authority requires pharmacology CE on a separate counter — I can have enough total CE hours for my RN license and still be short on pharmacology hours for APRN renewal. I discovered this at renewal time. Now each category has its own counter in Momenties and I can see the pharmacology gap months in advance.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Maria T., MSN, APRN, CNS-BC</div>
                  <div className="text-xs text-muted-foreground">Clinical nurse specialist, adult-gerontology acute care</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All CNS credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State RN license CE — biennial renewal',
                'APRN license CE — biennial renewal',
                'ANCC CNS specialty certification — 5-year, 1000 CE',
                'Population-focused CNS certification — 5-year',
                'Pharmacology CE for prescriptive authority',
                'Mandatory state CE categories (ethics, opioids)',
                'NACNS membership renewal — annual',
                'Specialty organization CE planning (AACN, ONS, etc.)',
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
        title="CNS APRN credentials maintained."
        subtitle="CE tracking by credential, pharmacology and mandatory category counters, and CNS professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
