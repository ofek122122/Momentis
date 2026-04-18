import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Addiction Counselors — CADC/NAADAC CE renewal, mandatory category tracking, and credential management',
  description:
    'Addiction counselors manage NAADAC NCC AP or MAC certification renewal, state CADC/LADC license CE with mandatory ethics and substance abuse category requirements, continuing supervision documentation, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full addiction counseling credential calendar.',
  alternates: { canonical: '/for/addiction-counselors' },
  openGraph: {
    title: 'Momenties for Addiction Counselors',
    description: 'CADC/NAADAC CE renewal, mandatory category tracking, and credential management.',
    url: '/for/addiction-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NAADAC national and state CADC/LADC certification',
    desc: 'NAADAC NCC AP or MAC certification requires CE per renewal cycle with content in addiction counseling competency domains. State CADC/LADC licensure requirements run on independent biennial cycles with mandatory CE categories: ethics, cultural competency, substance-specific education, and co-occurring disorders. State CE may or may not satisfy NAADAC requirements. Each credential tracked independently.',
  },
  {
    icon: Clock,
    title: 'Addiction counselor multi-credential renewal calendar',
    desc: '"NAADAC MAC/NCC AP — renewal cycle CE." "State CADC/LADC license — biennial CE, varies." "Mandatory ethics CE — state required, 6 hours biennial." "Mandatory substance abuse CE — category minimum." "Cultural competency CE — state required." "Supervision documentation — ongoing." "NAADAC membership — annual." All addiction counseling credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory category CE analytics',
    desc: 'Many states require addiction counselors to complete CE in specific mandatory categories: ethics, cultural competency, co-occurring disorders, domestic violence, and trauma-informed care. Meeting total CE hours without adequate hours in mandatory categories means state license renewal fails even with sufficient total CE. Each mandatory category counter tracked independently to surface gaps before renewal.',
  },
  {
    icon: Users,
    title: 'NAADAC, NAATP, and addiction counseling professional involvement',
    desc: '"NAADAC Annual Conference — october." "NAATP Annual Conference — october." "State addiction counseling association annual conference." "Co-occurring disorders education — annual updates." "Medication-assisted treatment (MAT) prescriber education." "Motivational interviewing skills renewal." All addiction counseling professional development on calendar.',
  },
]

const CADC_WORKFLOW = [
  { time: 'Annual planning', action: 'State CADC/LADC biennial CE cycle, mandatory ethics CE hours (6 per 2 years), mandatory substance abuse category CE, cultural competency CE, NAADAC certification renewal cycle, NAADAC Annual Conference, and NAADAC membership all loaded in January. Mandatory category CE paces tracked independently — not just total CE.' },
  { time: 'CE completion', action: '"NAADAC-approved — motivational interviewing for opioid use disorder: advanced clinical applications, 3 CE, CADC and NAADAC applicable." Tagged by applicable credential. State CADC counter updates. If NAADAC also accepts the CE, NAADAC counter updates. If ethics category applies, ethics counter updates. Substance abuse CE category updates if applicable.' },
  { time: 'Ethics CE', action: '"Ethics in addiction counseling — 6 CE hours required per biennial cycle, state mandatory." Ethics CE tracked as a mandatory state requirement, separate from general CE total. Ethics CE confirmed at the category level — 6 hours minimum. A CADC counselor with 30 total CE hours but 3 ethics hours fails the category requirement at renewal.' },
  { time: 'MAT education', action: '"Medication-assisted treatment education — buprenorphine, naltrexone, and methadone in SUD treatment, 3 CE." MAT education logged as substance-specific CE. States increasingly require MAT competency CE for addiction counselors as part of the opioid crisis response. MAT CE tracked as a sub-category of substance abuse CE.' },
  { time: 'Renewal audit', action: 'Analytics: State CADC/LADC CE complete? Ethics category hours satisfied? Substance abuse category CE adequate? Cultural competency CE done? NAADAC certification CE current? Supervision documentation current? NAADAC membership active? Complete addiction counseling credential audit 90 days before earliest license renewal. State board documentation separate from NAADAC.' },
]

export default function ForAddictionCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Addiction Counselors"
        title={
          <>
            CADC and NAADAC credentials maintained.
            <br />
            <em className="not-italic text-gold">Ethics and mandatory categories never short.</em>
          </>
        }
        lede="Addiction counselors manage state CADC/LADC license CE with mandatory ethics, substance abuse, and cultural competency category requirements, NAADAC national certification renewal on an independent cycle, supervision documentation requirements, and professional development simultaneously. Momenties tracks CE by addiction counseling credential, surfaces renewal deadlines 90 days early, and manages the full addiction counselor credential calendar in one view."
        crumbs={[{ label: 'For Addiction Counselors' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How addiction counselors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for addiction counseling credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Addiction counseling credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and mandatory categories managed through every biennial renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CADC_WORKFLOW.map((step, i) => (
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
                &ldquo;I have a state LADC license and NAADAC MAC certification — two different credential bodies with overlapping but not identical CE requirements. My state requires 6 hours of ethics CE per cycle, and I need to document it separately. The first time I renewed, I had plenty of total CE but only 4 ethics hours — and the renewal board was clear about it. Now I track ethics CE as its own counter in Momenties, separate from my LADC total and my NAADAC total. I can see the gap the moment I fall behind on ethics hours, not at renewal.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Frank O., LADC, MAC</div>
                  <div className="text-xs text-muted-foreground">Licensed alcohol and drug counselor, residential treatment program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All addiction counseling credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State CADC/LADC license CE — biennial renewal',
                'NAADAC MAC/NCC AP certification CE — renewal cycle',
                'Mandatory ethics CE — 6 hours per biennial cycle',
                'Substance abuse content CE — category minimum',
                'Cultural competency CE — state required',
                'Co-occurring disorders and trauma CE',
                'MAT and medication-assisted treatment education',
                'NAADAC membership renewal — annual',
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
        title="CADC and NAADAC credentials maintained."
        subtitle="CE tracking by credential, ethics and mandatory category counters, and addiction counseling professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
