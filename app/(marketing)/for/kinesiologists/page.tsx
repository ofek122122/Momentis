import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Kinesiologists — CSEP/ACSM/NSCA renewal, CE tracking, and kinesiology credential management',
  description:
    'Kinesiologists manage CSEP-CEP or CSEP-CPT renewal (40 CE per 4 years), ACSM certification CE (45 CE per 3 years), NSCA CSCS or CPT renewal (6 CECs per 3 years), clinical exercise physiology credentials, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full kinesiology credential calendar.',
  alternates: { canonical: '/for/kinesiologists' },
  openGraph: {
    title: 'Momenties for Kinesiologists',
    description: 'CSEP/ACSM/NSCA renewal, CE tracking, and kinesiology credential management.',
    url: '/for/kinesiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CSEP, ACSM, and NSCA credentials',
    desc: 'CSEP-CEP renewal requires 40 CE hours per 4 years. ACSM certifications require 45 CE per 3 years with ACSM-approved providers. NSCA CSCS renewal requires 6 CECs per 3 years (NSCA-approved). Tag every CE by applicable credential organization. CSEP, ACSM, and NSCA CE counters tracked independently — CE approved by one organization may not count for another.',
  },
  {
    icon: Clock,
    title: 'Kinesiologist multi-credential renewal calendar',
    desc: '"CSEP-CEP — 4-year renewal, june." "ACSM-EP or ACSM-CPT — 3-year renewal." "NSCA CSCS — 3-year, november." "CPR/AED — 2-year (required by all three)." "First aid — 3-year." "CSEP membership — annual." All kinesiology credentials with 90-day advance alerts. Clinical exercise and fitness practice never interrupted by expired credentials.',
  },
  {
    icon: BarChart3,
    title: 'Multi-organization CE analytics',
    desc: 'Kinesiologists holding CSEP, ACSM, and NSCA credentials face three independent CE requirements on three different renewal cycles. Some CE activities qualify for multiple credentials; most are organization-specific. Analytics shows each credential\'s CE progress independently. CE tagged to applicable organizations at completion — no confusion about which CE satisfies which renewal.',
  },
  {
    icon: Users,
    title: 'CSEP, ACSM, and NSCA professional involvement',
    desc: '"CSEP Annual Conference — fall." "ACSM Annual Meeting — may." "NSCA National Conference — july." "ACSM regional workshop — spring." "NSCA state clinic." All kinesiology professional development on calendar. Major conferences planned in advance with CE identified by credential organization for maximum renewal credit.',
  },
]

const KINE_WORKFLOW = [
  { time: 'Annual planning', action: 'CSEP-CEP 4-year renewal date, ACSM 3-year renewal, NSCA 3-year renewal, CPR/AED recertification, ACSM and NSCA Annual Conference dates, and CSEP membership renewal all loaded in January. CE pace calculated per credential: 10 CSEP CE, 15 ACSM CE, and 2 NSCA CECs per year satisfies all three cycles.' },
  { time: 'CE completion', action: '"ACSM-approved workshop — exercise prescription for cardiovascular disease, 6 CE, ACSM-EP." Tagged by applicable credential. ACSM counter updates. If NSCA also accepts the CE, NSCA CEC counter updates. CSEP counter updates only if CSEP-approved CE. Each organization tracked independently without conflation.' },
  { time: 'CPR/AED', action: '"CPR/AED — 2-year, october." Required by CSEP, ACSM, and NSCA for all active certifications. Placed on calendar at time of recertification — not when it nears expiration. Single CPR/AED card satisfies all three credential organizations\' emergency response requirements. Expiry tracked centrally.' },
  { time: 'Clinical practice', action: '"Exercise testing sessions — monday/wednesday 9am-12pm." "Cardiac rehab program — tuesdays/thursdays." "Graduate student supervision — fridays." Clinical practice calendar visible alongside CE commitments. CSEP-CEP supervised practice hour requirements tracked for initial certification or scope expansion.' },
  { time: 'Renewal audit', action: 'Analytics: CSEP-CEP CE hours on pace? ACSM CE satisfied? NSCA CECs current? CPR/AED valid for all three organizations? CSEP membership active? ACSM and NSCA memberships current? Complete kinesiology credential audit 90 days before earliest renewal deadline — CSEP, ACSM, and NSCA cycles rarely align.' },
]

export default function ForKinesiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Kinesiologists"
        title={
          <>
            CSEP, ACSM, and NSCA maintained.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Kinesiologists manage CSEP-CEP renewal with 40 CE per 4 years, ACSM certification with 45 CE per 3 years, NSCA CSCS renewal with independent CECs, CPR/AED on a 2-year cycle, and professional development simultaneously. Momenties tracks CE by credential organization, surfaces renewal deadlines 90 days early, and manages the full kinesiology credential calendar in one view."
        crumbs={[{ label: 'For Kinesiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How kinesiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for kinesiology credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Kinesiology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE managed across three independent certification cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {KINE_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CSEP-CEP, ACSM-EP, and NSCA-CSCS — three organizations with three different CE standards and three renewal cycles that don&apos;t align. The ACSM conference gives ACSM CE. The NSCA clinic gives NSCA CECs. Rarely does the same event give me credit for all three. Momenties lets me track each organization&apos;s CE progress independently so I can see at any time which credential needs attention — before it becomes the urgent one.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patrick W., CSEP-CEP, ACSM-EP, CSCS</div>
                  <div className="text-xs text-muted-foreground">Clinical exercise physiologist, cardiac rehabilitation program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All kinesiology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CSEP CE hours — CSEP-CEP/CPT 4-year renewal',
                'ACSM CE hours — ACSM-EP/CPT 3-year renewal',
                'NSCA CECs — CSCS/CPT 3-year renewal',
                'CPR/AED — 2-year renewal (all three orgs)',
                'CSEP, ACSM, NSCA membership renewals',
                'Clinical exercise physiology specialty credentials',
                'Annual conference CE by credential organization',
                'Supervised practice hours documentation',
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
        title="CSEP, ACSM, and NSCA maintained."
        subtitle="CE tracking by credential organization, multi-cycle renewal calendar, and kinesiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
