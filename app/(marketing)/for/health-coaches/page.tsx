import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Health Coaches — NBC-HWC renewal, CE tracking, and health coaching credential management',
  description:
    'Health and wellness coaches manage 35 CE hours per 3-year NBC-HWC renewal cycle with NBHWC-approved CE requirements, ICF coaching credential CE (if dual-credentialed), client session calendars, and professional development simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the full health coaching credential and client calendar.',
  alternates: { canonical: '/for/health-coaches' },
  openGraph: {
    title: 'Momenties for Health Coaches',
    description: 'NBC-HWC renewal, CE tracking, and health coaching credential management.',
    url: '/for/health-coaches',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NBC-HWC renewal',
    desc: 'NBHWC NBC-HWC renewal requires 35 CE hours per 3-year cycle with NBHWC-approved CE providers. CE must be in health and wellness coaching content areas. Tag every CE activity by NBHWC content area: health behavior change, motivational interviewing, lifestyle medicine, positive psychology, group coaching. Category distribution tracked alongside total CE hours.',
  },
  {
    icon: Clock,
    title: 'Health coach multi-credential renewal calendar',
    desc: '"NBC-HWC — NBHWC, 3-year renewal, june." "ICF ACC or PCC — coaching credential, 3-year, if dual." "NASM or ACE specialty certification — renewal, if fitness-based." "CPR — 2-year." "NBHWC membership renewal — annual." All health coaching credentials with 90-day advance alerts. Client-facing practice never interrupted by expired credentials.',
  },
  {
    icon: BarChart3,
    title: 'Client session and professional development analytics',
    desc: 'Health coaches who work independently track client session hours separately from CE and professional development. Tag client sessions, supervision hours, CE, and mentorship sessions separately. Analytics shows whether client hour capacity is aligned with CE investment. NBHWC renewal includes documented coaching experience hours — all tracked in one view.',
  },
  {
    icon: Users,
    title: 'NBHWC and wellness society involvement',
    desc: '"NBHWC Annual Summit — spring." "ICHWC conference — annual." "Lifestyle medicine conference — october." "Peer supervision group — monthly." All health coaching professional development on calendar. Conference CE sessions identified in advance for NBHWC content category coverage.',
  },
]

const HC_WORKFLOW = [
  { time: 'Annual planning', action: 'NBC-HWC 3-year renewal date, ICF credential renewal (if applicable), CPR recertification, NBHWC membership renewal, and annual conference all loaded in January. CE pace: 12 NBHWC CE hours per year satisfies the 3-year requirement with margin for category coverage.' },
  { time: 'CE completion', action: '"NBHWC-approved webinar — motivational interviewing advanced skills, thursday 6pm, 3 CE hours, behavior change." Tagged by NBHWC content category. 3-year CE counter updates. ICF CCE counter also updates if CE qualifies for both credentials. Domain coverage tracked against NBHWC content balance.' },
  { time: 'ICF credential', action: '"ICF ACC renewal — 3-year, aligned with NBC-HWC." ICF requires 40 CCEs per 3-year cycle including ICF-accredited core coaching CE. Tracked separately from NBHWC CE. Some coaching CE qualifies for both; some is credential-specific. Each credential tracked independently.' },
  { time: 'Client practice', action: '"Client sessions — monday/wednesday/friday 9am-12pm." "Group coaching program — tuesdays 6pm." "Discovery calls — thursdays 2-4pm." Client-facing calendar blocks placed as recurring events. Practice capacity visible alongside CE and professional development commitments.' },
  { time: 'Renewal audit', action: 'Analytics: NBHWC CE on pace? Content category coverage adequate? ICF CCE hours satisfied? CPR valid? NBHWC membership active? Documented coaching experience hours current? Complete health coaching credential audit 90 days before NBC-HWC renewal window.' },
]

export default function ForHealthCoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Health Coaches"
        title={
          <>
            NBC-HWC maintained. Practice growing.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Health and wellness coaches manage 35 CE hours per 3-year NBC-HWC renewal cycle with NBHWC content category requirements, ICF coaching credential CE for dual-credentialed coaches, client session calendars, and professional development simultaneously. Momenties tracks CE by NBHWC category, surfaces renewal deadlines 90 days early, and manages the full health coaching credential and client calendar in one view."
        crumbs={[{ label: 'For Health Coaches' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How health coaches use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for health coaching credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Health coaching credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 3-year NBC-HWC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {HC_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold NBC-HWC and ICF ACC — two separate coaching credentials with different CE requirements and different renewal cycles. Lifestyle medicine CE often qualifies for NBHWC but not ICF, and ICF core competency CE doesn&apos;t always qualify for NBHWC. I was applying CE to the wrong credential repeatedly. Momenties lets me tag each CE to the applicable credentials immediately after I complete it. Both counters accurate, no overlap confusion.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sandra P., NBC-HWC, ACC</div>
                  <div className="text-xs text-muted-foreground">Health and wellness coach, private practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All health coaching credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE by NBHWC category — NBC-HWC 3-year renewal',
                'ICF CCE hours — ACC/PCC 3-year renewal',
                'NBHWC membership renewal — annual',
                'CPR/BLS recertification — 2-year',
                'NASM or ACE fitness specialty renewal',
                'Lifestyle medicine certification renewal',
                'Supervision and mentorship hours documentation',
                'NBHWC Summit and lifestyle medicine conferences',
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
        title="NBC-HWC maintained. Practice growing."
        subtitle="CE tracking by NBHWC category, dual credential renewal calendar, and health coaching professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
