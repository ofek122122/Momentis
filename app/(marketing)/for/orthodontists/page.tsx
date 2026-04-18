import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Orthodontists — CE tracking, AAO requirements, and practice calendar',
  description:
    'Orthodontists manage AAO continuing education requirements, state dental license renewals, board certification maintenance, DEA registrations, and practice management calendars simultaneously. Momenties tracks CE credits, surfaces renewal deadlines early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/orthodontists' },
  openGraph: {
    title: 'Momenties for Orthodontists',
    description: 'CE tracking, AAO requirements, and practice calendar management for orthodontists.',
    url: '/for/orthodontists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'AAO CE and specialty certification',
    desc: 'Tag every continuing education activity by category: clinical orthodontics, technology and innovation, practice management, ethics. Track hours toward AAO membership CE requirements and state board renewal minimums. ABO Diplomate status maintenance tracked separately.',
  },
  {
    icon: Clock,
    title: 'Dental and specialty credential renewals',
    desc: '"State dental license renewal — june 30." "DEA registration — 3-year, october." "ABO Part III practice assessment — ongoing." "BLS recertification — 2-year, march." "Radiology permit — biennial." All credentials with 90-day advance alerts. Nothing lapses between treatment plans.',
  },
  {
    icon: BarChart3,
    title: 'Practice and study club time analytics',
    desc: 'Tag AAO courses, study club sessions, technology training, and practice management work separately from clinical chair time. Analytics shows how non-clinical hours distribute. Protect the continuing education that specialty practice quality demands.',
  },
  {
    icon: Users,
    title: 'Professional meetings and education',
    desc: '"AAO annual session — may 2-6." "Regional component meeting — fall." "Study group — quarterly friday." "Digital workflow CE — saturday seminar." All orthodontic professional commitments on calendar. Great CE registered before the schedule fills with patient blocks.',
  },
]

const ORTHO_WORKFLOW = [
  { time: 'Annual planning', action: 'State dental license renewal, DEA registration, radiology permit, BLS recertification, and AAO CE requirements all on calendar in January. AAO annual session registration opened and completed before hotel blocks sell out. 90-day alerts on all credentials.' },
  { time: 'CE events', action: '"AAO approved course — clear aligner mechanics, saturday 8am-5pm, 8 hours, clinical CE." Tagged and added. Category tracked. State CE requirement and AAO membership requirements monitored separately throughout the year.' },
  { time: 'AAO session', action: '"AAO annual session — may 2-6." Pre-planned CE tracks selected: ABO-relevant clinical sessions first, technology second. Hotel and travel booked. Practice coverage confirmed for the full week. ABO practice assessment documentation reviewed.' },
  { time: 'Technology training', action: '"iTero scanner training — tuesday evening, 3 hours." "Insignia training update — friday CE day." Technology and digital workflow CE tagged separately. Specialty and equipment CE tracked alongside general CE totals.' },
  { time: 'License audit', action: 'Analytics: CE hours by category. State-mandated topics complete? Total hours vs. biennial renewal requirement? ABO maintenance on track? Any category gaps addressed before the license renewal deadline.' },
]

export default function ForOrthodontistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Orthodontists"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">CE always on track.</em>
          </>
        }
        lede="Orthodontists manage AAO continuing education requirements, state dental license renewals, ABO Diplomate maintenance, DEA registrations, and practice management calendars simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the non-clinical calendar so specialty practice management doesn't become a second job."
        crumbs={[{ label: 'For Orthodontists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How orthodontists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for orthodontic practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Non-clinical calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {ORTHO_WORKFLOW.map((step, i) => (
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
                &ldquo;Between state dental license, DEA, radiology permit, ABO maintenance, and AAO CE requirements — I was tracking all of this in my head and occasionally panicking when something was due. The AAO annual session registration is the worst — the good courses fill in hours. Now I have 90-day alerts on everything and I register for AAO the day registration opens.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dr. Jonathan Y., DDS, MS</div>
                  <div className="text-xs text-muted-foreground">Orthodontist, private practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All orthodontic credentials in one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE credits by category — AAO and state requirements',
                'State dental license renewal',
                'DEA registration — 3-year renewal',
                'ABO Diplomate maintenance',
                'Radiography certification renewal',
                'BLS recertification — 2-year',
                'AAO and regional component membership',
                'Technology certifications (aligner systems)',
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
        title="Every credential current. CE always on track."
        subtitle="CE tracking by category, multi-credential renewals, and orthodontic practice calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
