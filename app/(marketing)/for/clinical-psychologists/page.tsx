import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Psychologists — CE credits, license renewals, and practice management',
  description:
    'Clinical psychologists manage APA CE requirements by content domain, state license renewals, supervision hours, professional organization commitments, and practice scheduling. Momenties tracks CE by category, surfaces renewal deadlines early, and protects clinical and continuing education time.',
  alternates: { canonical: '/for/clinical-psychologists' },
  openGraph: {
    title: 'Momenties for Clinical Psychologists',
    description: 'CE tracking, license renewals, and practice management for clinical psychologists.',
    url: '/for/clinical-psychologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'APA CE by content domain',
    desc: 'Tag every CE activity by APA content domain: clinical practice, assessment, ethics, diversity, supervision, research. Analytics shows CE hours per domain against state renewal requirements. Each state\'s specific ethics requirement tracked separately.',
  },
  {
    icon: Clock,
    title: 'License and credential renewal deadlines',
    desc: '"Psychology license renewal — state board, october 31." "NPI renewal — annual." "Malpractice insurance renewal — july." "HIPAA training renewal." All professional credential deadlines on calendar. 90-day advance visibility.',
  },
  {
    icon: BarChart3,
    title: 'Supervision hours and non-clinical time',
    desc: 'Track supervision hours provided and received separately from direct client contact. Analytics shows clinical vs. administrative vs. continuing education time distribution. Document supervision hours for clinical supervisor credentials.',
  },
  {
    icon: Users,
    title: 'Professional organization scheduling',
    desc: '"APA annual convention — august 7-10." "State psychological association meeting — october." "Division committee call, first tuesday monthly." All professional commitments on calendar from the start of the year.',
  },
]

const PSYCHOLOGIST_WORKFLOW = [
  { time: 'Annual planning', action: 'State license renewal dates on calendar. APA and state ethics CE requirements calculated. Annual convention travel blocked. Supervision schedule templated.' },
  { time: 'CE events', action: '"Ethics CE webinar, friday 12pm 3 hours, ethics domain." Tagged and added. State-specific ethics requirement tracked separately. CE counter updates per domain.' },
  { time: 'Supervision', action: '"Supervision — Dr. Martinez, wednesday 8am 50 mins." Individual and group supervision hours tracked. Documentation for supervisory credentials maintained through the calendar.' },
  { time: 'CE audit', action: 'Analytics: CE hours per domain vs. state requirement. Ethics requirement met? Diversity CE completed? Time to register for fall workshops to close gaps.' },
  { time: 'Renewal prep', action: 'Daily Brief surfaces license renewal 90 days out. CE documentation consolidated. License renewal applications submitted before expiration — never reactive.' },
]

export default function ForClinicalPsychologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Psychologists"
        title={
          <>
            CE documented.
            <br />
            <em className="not-italic text-gold">License always current.</em>
          </>
        }
        lede="Clinical psychologists manage APA CE requirements across multiple content domains, state license renewals, supervision hours, professional commitments, and practice scheduling simultaneously. Momenties tracks CE by domain, surfaces renewal deadlines 90 days early, and documents supervision hours without a separate system."
        crumbs={[{ label: 'For Clinical Psychologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical psychologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for psychology practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and renewal management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {PSYCHOLOGIST_WORKFLOW.map((step, i) => (
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
                &ldquo;My state requires ethics CE as a specific subset of total CE hours, and the rules changed two years ago. I used to track this in a spreadsheet that I updated maybe three times a year. Momenties lets me tag every CE event with the domain at the time I complete it — and shows me exactly where I stand on every requirement without any manual tracking.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Karen L., PhD</div>
                  <div className="text-xs text-muted-foreground">Licensed clinical psychologist, private practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Privacy and compliance</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">HIPAA-aware design for clinical practice.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'No patient names, diagnoses, or PHI shared with AI',
                'Calendar events use codes or initials — not clinical details',
                'CE and administrative tracking fully separated from clinical',
                'GDPR-compliant data handling',
                'Data encrypted at rest and in transit',
                'Export your CE documentation anytime',
                'No data shared with third parties',
                'Delete your account and all data at any time',
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
        title="CE documented. License current. Practice managed."
        subtitle="APA CE domain tracking, license renewal deadlines, and supervision hour documentation. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
