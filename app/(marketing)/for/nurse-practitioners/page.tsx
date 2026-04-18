import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nurse Practitioners — CE tracking, AANP/ANCC renewal, and prescriptive authority',
  description:
    'Nurse practitioners manage continuing education for AANP or ANCC certification renewal, state NP license maintenance, DEA registration, prescriptive authority CE requirements, and professional development calendars simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the full NP credential calendar.',
  alternates: { canonical: '/for/nurse-practitioners' },
  openGraph: {
    title: 'Momenties for Nurse Practitioners',
    description: 'CE tracking, AANP/ANCC renewal, and NP credential management.',
    url: '/for/nurse-practitioners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for AANP and ANCC renewal',
    desc: 'AANP requires 75 CE hours per 5-year renewal cycle with pharmacology and specialty topic requirements. ANCC varies by certification. Tag every CE activity by category: pharmacology, specialty content, professional development. Hours and categories tracked toward your specific certification\'s renewal requirements.',
  },
  {
    icon: Clock,
    title: 'Multi-credential NP renewal calendar',
    desc: '"NP certification — AANP, 5-year cycle, april." "State NP license — renewal, october." "DEA registration — 3-year, june." "State prescriptive authority — annual CE." "BLS/ACLS — 2-year." All NP credentials with 90-day advance alerts. Practice authority never interrupted by an expired license.',
  },
  {
    icon: BarChart3,
    title: 'Prescriptive authority CE analytics',
    desc: 'Many states require specific pharmacology or controlled substance CE hours for prescriptive authority maintenance. Tag pharmacology CE separately from general certification CE. Analytics shows prescriptive authority CE progress alongside AANP/ANCC renewal progress — two tracks tracked without confusion.',
  },
  {
    icon: Users,
    title: 'Professional development and specialty growth',
    desc: '"AANP National Conference — june." "State NP coalition meeting — quarterly." "Specialty NP society (NAPNAP, AACNP) — annual." "Collaborative practice agreement review — annual." All NP professional commitments on calendar from January. Autonomous practice requires sustained development.',
  },
]

const NP_WORKFLOW = [
  { time: 'Annual planning', action: 'AANP or ANCC certification renewal date, state NP license deadline, DEA expiration, prescriptive authority CE requirements, and BLS/ACLS recertification all loaded in January. 90-day alerts on every credential. CE completion pace calculated for the renewal cycle.' },
  { time: 'CE completion', action: '"AANP-approved module — advanced pharmacology, tuesday 8pm, 2.5 hours, pharmacology CE." Tagged by certification category. Prescriptive authority CE tracked separately. Renewal counter updates. No category gap discovered at renewal audit.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year, june 15." 90-day alert fires in March. Renewal initiated before expiration. Practice authority to prescribe controlled substances maintained without interruption during renewal processing.' },
  { time: 'State license', action: '"NP license renewal — state board, october 31." CE requirements for state renewal documented separately from AANP/ANCC certification CE. Some states have independent CE requirements. Both sets of hours tracked without confusion.' },
  { time: 'Renewal audit', action: 'Analytics: CE hours by category. AANP pharmacology requirement met? ANCC specialty content complete? State prescriptive authority CE on track? DEA renewal initiated? Total hours vs. certification requirement. Complete picture 90 days before any deadline.' },
]

export default function ForNursePractitionersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nurse Practitioners"
        title={
          <>
            Every credential maintained.
            <br />
            <em className="not-italic text-gold">Practice uninterrupted.</em>
          </>
        }
        lede="Nurse practitioners manage CE requirements for AANP or ANCC certification renewal, state NP license deadlines, DEA registration, prescriptive authority CE mandates, and professional development simultaneously. Momenties tracks CE by category for every credential, surfaces renewal deadlines 90 days early, and manages the full NP calendar in one view."
        crumbs={[{ label: 'For Nurse Practitioners' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nurse practitioners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for NP credential and practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">NP credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {NP_WORKFLOW.map((step, i) => (
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
                &ldquo;I maintain AANP certification, a state NP license, DEA registration, and prescriptive authority in two states. Each has different CE requirements and different renewal cycles. I was keeping this in a spreadsheet that I never trusted. Momenties replaced the spreadsheet with a calendar that alerts me 90 days before anything expires. I&apos;ve renewed everything on time for two years running.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tamika S., NP-C, FNP-BC</div>
                  <div className="text-xs text-muted-foreground">Family nurse practitioner, independent practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All NP credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE hours by category — AANP or ANCC renewal',
                'State NP license renewal deadline',
                'DEA registration — 3-year renewal',
                'Prescriptive authority CE — state-specific',
                'BLS/ACLS recertification — 2-year',
                'Specialty NP certification (FNP, AGNP, PMHNP)',
                'Collaborative practice agreement renewals',
                'AANP/ANCC national conference CE events',
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
        title="Every credential maintained. Practice uninterrupted."
        subtitle="CE tracking by category, multi-credential renewal calendar, and NP professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
