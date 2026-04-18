import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Dental Hygienists — CE tracking, RDH license renewals, and local anesthesia certification',
  description:
    'Dental hygienists manage continuing education for state RDH license renewals, local anesthesia permit maintenance, nitrous oxide certification, CPR recertification, and professional development simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the full dental hygiene credential calendar.',
  alternates: { canonical: '/for/dental-hygienists' },
  openGraph: {
    title: 'Momenties for Dental Hygienists',
    description: 'CE tracking, RDH license renewals, and dental hygiene credential management.',
    url: '/for/dental-hygienists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RDH license renewal',
    desc: 'State RDH renewal requirements vary: some require infection control CE hours, others mandate jurisprudence credits, many require specific topic minimums. Tag every CE activity by category: infection control, ethics/jurisprudence, clinical skills, patient education. All state-mandated topics tracked separately from general CE hours.',
  },
  {
    icon: Clock,
    title: 'Dental hygiene credential renewal calendar',
    desc: '"RDH license — state board, october 31." "Local anesthesia permit — renewal, 2-year." "Nitrous oxide permit — renewal, biennial." "CPR/BLS — healthcare provider, 2-year." "Coronal polishing cert — state renewal." All dental hygiene credentials with 90-day advance alerts. No permit lapses between patient appointments.',
  },
  {
    icon: BarChart3,
    title: 'CE analytics for multi-state practice',
    desc: 'Many dental hygienists hold licenses in multiple states or move between states. Each state has distinct CE requirements, different renewal cycles, and different mandated topics. Track CE hours per state license separately. Analytics shows whether each state\'s requirements are on track without confusing the totals.',
  },
  {
    icon: Users,
    title: 'Professional development and ADHA involvement',
    desc: '"ADHA Annual Session — june." "State dental hygiene association meeting — spring." "Periodontal disease symposium — october." "Local component society meeting — monthly." Professional development and association commitments on calendar. Active membership supports CE access and career growth.',
  },
]

const RDH_WORKFLOW = [
  { time: 'Annual planning', action: 'State RDH license renewal date, local anesthesia permit expiration, nitrous oxide permit, CPR/BLS recertification, and total CE hours needed all loaded in January. 90-day alerts on every credential. CE completion pace calculated — hours per quarter to finish before the state renewal deadline.' },
  { time: 'CE completion', action: '"ADHA-approved course — periodontal health and systemic disease, wednesday 6pm, 2 hours, clinical CE." Tagged and logged. Infection control and jurisprudence categories tracked separately if state-mandated. Running total visible against state renewal requirement.' },
  { time: 'Permit renewals', action: '"Local anesthesia permit renewal — forms submitted, state board." "Nitrous oxide permit renewal — biennial, may." Permit renewal timelines longer than license renewals — initiated 90 days early. Practice scope that requires each permit maintained without gap.' },
  { time: 'CPR recertification', action: '"CPR/BLS — healthcare provider recertification, saturday 9am, 4 hours." Healthcare provider BLS required in most states for dental practice. 2-year certification tracked. Expiration date updated immediately after completion.' },
  { time: 'License audit', action: 'Analytics: CE progress by category. State-mandated infection control hours complete? Jurisprudence requirement met? Local anesthesia permit current? CPR valid? Total hours vs. state renewal minimum. Complete audit before renewal window opens.' },
]

export default function ForDentalHygienistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Dental Hygienists"
        title={
          <>
            License current.
            <br />
            <em className="not-italic text-gold">Every permit maintained.</em>
          </>
        }
        lede="Dental hygienists manage CE requirements with state-specific topic mandates, RDH license renewal deadlines, local anesthesia and nitrous oxide permits, CPR recertification, and professional development calendars simultaneously. Momenties tracks CE by state-mandated category, surfaces renewal deadlines 90 days early, and manages the full dental hygiene credential calendar in one view."
        crumbs={[{ label: 'For Dental Hygienists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dental hygienists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for RDH license and permit management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">RDH credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and permits managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {RDH_WORKFLOW.map((step, i) => (
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
                &ldquo;My state requires 2 hours of infection control and 1 hour of jurisprudence within every renewal cycle. I completed both in year one and forgot I&apos;d done them — then panicked at renewal thinking I was missing requirements. Momenties changed this: every CE I complete is tagged by category and the mandated topics show as complete immediately. No more renewal panic.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nicole A., RDH</div>
                  <div className="text-xs text-muted-foreground">Dental hygienist, private periodontal practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All dental hygiene credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE hours by category — state RDH renewal',
                'Infection control CE — state-mandated',
                'Ethics and jurisprudence CE',
                'Local anesthesia permit renewal',
                'Nitrous oxide permit renewal',
                'CPR/BLS — healthcare provider, 2-year',
                'ADHA annual session and local component',
                'Specialty CE (periodontics, pediatrics, oncology)',
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
        title="License current. Every permit maintained."
        subtitle="CE tracking by state-mandated category, permit renewal calendar, and dental hygiene professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
