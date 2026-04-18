import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Orthotists and Prosthetists — ABC/BOC renewal, CE tracking, and O&P credential management',
  description:
    'Orthotists and prosthetists manage ABC or BOC credential renewal with 75 CE per 5 years, state O&P license CE, specialty certifications in pediatrics or upper extremity prosthetics, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full O&P credential calendar.',
  alternates: { canonical: '/for/orthotists-prosthetists' },
  openGraph: {
    title: 'Momenties for Orthotists and Prosthetists',
    description: 'ABC/BOC renewal, CE tracking, and O&P credential management.',
    url: '/for/orthotists-prosthetists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ABC and BOC credential renewal',
    desc: 'ABC CPO/CO/CP renewal requires 75 CE per 5 years with ABC-approved CE. BOC CO/CP/CPO renewal also requires 75 CE per 5 years with BOC-approved CE. CE must be in O&P content areas: patient assessment, device design and fabrication, biomechanics, outcomes, ethics, and practice management. Tag every CE by applicable credentialing organization. ABC and BOC counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'O&P practitioner multi-credential renewal calendar',
    desc: '"ABC CPO — 5-year renewal, march." "BOC CO — 5-year renewal, if dual." "State O&P license — biennial, varies." "Ethics CE — required by ABC." "ABC membership — annual." "AOPA membership — annual." All O&P credentials with 90-day advance alerts. Patient care and durable medical equipment billing never interrupted by expired practitioner credentials.',
  },
  {
    icon: BarChart3,
    title: 'Dual credentialing and state license CE analytics',
    desc: 'O&P practitioners who hold both ABC and BOC credentials face two independent 5-year CE cycles with different approved CE providers. State O&P license CE requirements may be different from ABC and BOC requirements. Some CE qualifies for multiple credentials; some is specific to one organization. Analytics tracks each credential independently. No CE mistakenly counted toward the wrong renewal.',
  },
  {
    icon: Users,
    title: 'AOPA, ABC, and BOCUSA professional involvement',
    desc: '"AOPA National Assembly — october." "ABC Annual Conference." "State O&P association conference — spring." "PFOLA lower limb prosthetics symposium." "NAOP national conference." All O&P professional development on calendar. AOPA National Assembly CE planned by credentialing organization in advance for maximum renewal credit.',
  },
]

const OP_WORKFLOW = [
  { time: 'Annual planning', action: 'ABC and BOC 5-year renewal dates, state O&P license renewal, AOPA National Assembly, and ABC/BOC membership renewals all loaded in January. CE pace: 15 CE per year satisfies the 5-year cycle for each credential independently. CE needs tracked per organization.' },
  { time: 'CE completion', action: '"ABC-approved CE — transfemoral prosthetic alignment principles, 4 CE hours, prosthetics." Tagged by applicable credentialing organization. ABC CPO counter updates. If BOC also approves the CE, BOC counter updates independently. State license CE updates if state-approved. Each credential tracked without conflation.' },
  { time: 'Ethics CE', action: '"ABC ethics module — documentation and billing compliance, 3 CE hours." ABC requires ethics CE as a component of the 75-hour total. Ethics CE tagged separately. Running ethics total visible alongside overall CE count. Ethics CE also tagged for BOC if applicable to BOC ethics requirement.' },
  { time: 'State license CE', action: '"State O&P license renewal — biennial, june." State CE requirements tracked separately from ABC and BOC requirements. Some states require state-approved CE; some accept ABC/BOC CE. State license and national credentials monitored independently. State license lapse affects billing eligibility regardless of national credential status.' },
  { time: 'Renewal audit', action: 'Analytics: ABC CE hours on pace? BOC CE current (if dual)? Ethics CE satisfied (ABC required)? State O&P license CE complete? ABC and BOC memberships active? Complete O&P credential audit 90 days before earliest renewal date. Documentation prepared for each organization\'s renewal submission independently.' },
]

export default function ForOrthotistsProsthetistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Orthotists and Prosthetists"
        title={
          <>
            ABC and BOC credentials maintained.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Orthotists and prosthetists manage ABC credential renewal with 75 CE per 5 years, BOC credential renewal with independent requirements, state O&P license CE, and professional development simultaneously. Momenties tracks CE by credentialing organization, surfaces renewal deadlines 90 days early, and manages the full O&P credential calendar in one view."
        crumbs={[{ label: 'For Orthotists and Prosthetists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How orthotists and prosthetists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for O&P credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">O&P credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year O&P renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {OP_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold both ABC and BOC certifications. Both renew on 5-year cycles but the cycles are offset by 2 years. CE that counts for ABC doesn&apos;t always count for BOC — the approved provider lists are different. I was tracking both in one running spreadsheet total and couldn&apos;t tell how much of each was actually applicable to each organization. Momenties separates them completely. I now know exactly where each renewal cycle stands at any time.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Wayne L., CPO, ABC and BOC</div>
                  <div className="text-xs text-muted-foreground">Certified prosthetist-orthotist, multi-location O&P practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All O&P credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABC CE by content area — CPO/CO/CP 5-year renewal',
                'BOC CE — CO/CP/CPO 5-year renewal (if dual)',
                'ABC ethics CE — required category',
                'State O&P license CE — biennial renewal',
                'Pediatric O&P specialty CE tracking',
                'Upper extremity prosthetics specialty CE',
                'ABC and BOC membership renewals',
                'AOPA National Assembly CE planning',
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
        title="ABC and BOC credentials maintained."
        subtitle="CE tracking by organization, dual credential renewal calendar, and O&P professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
