import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Polysomnographic Technologists — RPSGT renewal, CE tracking, and sleep technology credential management',
  description:
    'Registered polysomnographic technologists manage BRPT RPSGT renewal with 50 CE per 5 years, AASM facility accreditation training requirements, CPSGT entry-level maintenance, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full sleep technology credential calendar.',
  alternates: { canonical: '/for/polysomnographic-technologists' },
  openGraph: {
    title: 'Momenties for Polysomnographic Technologists',
    description: 'RPSGT renewal, CE tracking, and sleep technology credential management.',
    url: '/for/polysomnographic-technologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RPSGT renewal',
    desc: 'BRPT RPSGT renewal requires 50 CE per 5-year cycle with BRPT-approved CE in sleep technology content areas: polysomnography, CPAP titration, pediatric sleep, home sleep testing, scoring and interpretation, and equipment. Tag every CE by BRPT content area. 5-year pace: 10 CE per year. Content area distribution tracked alongside total CE hours to prevent renewal submission problems.',
  },
  {
    icon: Clock,
    title: 'Sleep tech multi-credential renewal calendar',
    desc: '"RPSGT — BRPT, 5-year renewal, august." "CPSGT — BRPT, annual renewal." "CCSH (Certified Clinical Sleep Health) — AASM, 3-year, if credentialed." "BLS — 2-year." "AASM accreditation training — facility-required, annual." "BRPT membership — annual." All sleep technology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'AASM facility and multi-credential CE analytics',
    desc: 'Sleep technologists in AASM-accredited facilities face CE requirements from BRPT renewal and AASM facility accreditation training simultaneously. AASM annual training may or may not count toward BRPT RPSGT CE. CCSH specialty credential CE tracked independently from RPSGT CE. Analytics shows each credential\'s CE progress without conflation. Facility accreditation CE documented separately.',
  },
  {
    icon: Users,
    title: 'AASM, BRPT, and sleep medicine involvement',
    desc: '"AASM Annual Meeting — june." "BRPT Symposium." "SLEEP Annual Meeting — sleep science, june." "State sleep society conference." "Online AASM CE modules." All sleep technology professional development on calendar. AASM Annual Meeting CE planned by BRPT content area in advance for maximum RPSGT renewal coverage.',
  },
]

const PSG_WORKFLOW = [
  { time: 'Annual planning', action: 'RPSGT 5-year renewal date, CPSGT annual renewal date, CCSH 3-year renewal (if applicable), BLS recertification, AASM Annual Meeting, and BRPT membership renewal all loaded in January. CE pace: 10 BRPT CE per year satisfies the 5-year RPSGT cycle with content area balance.' },
  { time: 'CE completion', action: '"BRPT-approved webinar — advanced CPAP pressure titration techniques, 2 CE hours, CPAP/PAP therapy content area." Tagged by BRPT content area. RPSGT 5-year counter updates. CCSH counter updates if AASM-approved CE also qualifies. Content area distribution updates. Facility accreditation training tracked when BRPT-approved.' },
  { time: 'CPSGT renewal', action: '"CPSGT annual renewal — BRPT, due august." CPSGT is an annual renewal distinct from the 5-year RPSGT cycle. Some RPSGTs maintain CPSGT for specific employment contexts. Annual renewal placed on calendar alongside 5-year RPSGT tracking. CPSGT renewal requirements verified annually against BRPT current requirements.' },
  { time: 'AASM facility training', action: '"AASM facility accreditation training — annual, september." Facility-required AASM training documented with BRPT-approved CE designation where applicable. Training records maintained for AASM accreditation audit. AASM training CE tagged with BRPT content area when applicable to RPSGT renewal.' },
  { time: 'Renewal audit', action: 'Analytics: RPSGT CE hours on pace? BRPT content area coverage adequate? CPSGT annual renewal current? CCSH CE satisfied (if applicable)? BLS valid? AASM facility training current? BRPT membership active? Complete sleep technology credential audit 90 days before RPSGT renewal window. BRPT documentation prepared.' },
]

export default function ForPolysomnographicTechnologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Polysomnographic Technologists"
        title={
          <>
            RPSGT maintained. CPSGT current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Registered polysomnographic technologists manage RPSGT renewal with 50 CE per 5 years across BRPT content areas, CPSGT annual renewal, CCSH specialty credential, AASM facility accreditation training, and professional development simultaneously. Momenties tracks CE by BRPT content area, surfaces renewal deadlines 90 days early, and manages the full sleep technology credential calendar in one view."
        crumbs={[{ label: 'For Polysomnographic Technologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How polysomnographic technologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for RPSGT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sleep technology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year RPSGT cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {PSG_WORKFLOW.map((step, i) => (
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
                &ldquo;The 5-year RPSGT cycle with annual CPSGT renewal and AASM facility training requirements means I have credentials on three different schedules. I also picked up the CCSH credential which has its own 3-year cycle. Before Momenties I was managing this with a mix of email reminders and memory. I missed my CPSGT annual renewal one year — not expiration, but the renewal window — because it fell during a busy schedule period and I had no calendar anchor for it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kevin B., RPSGT, CCSH</div>
                  <div className="text-xs text-muted-foreground">Polysomnographic technologist, AASM-accredited sleep center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sleep technology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'BRPT CE by content area — RPSGT 5-year renewal',
                'CPSGT — annual BRPT renewal',
                'CCSH — AASM 3-year specialty renewal',
                'BLS certification — 2-year renewal',
                'AASM facility accreditation training — annual',
                'BRPT membership renewal — annual',
                'AASM Annual Meeting and SLEEP conference CE',
                'Home sleep testing and scoring CE tracking',
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
        title="RPSGT maintained. CPSGT current."
        subtitle="CE tracking by BRPT content area, multi-cycle renewal calendar, and sleep technology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
