import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Radiation Therapists — ARRT RT(T) CE renewal, radiation therapist credential management',
  description:
    'Radiation therapists manage ARRT RT(T) certification 24CE/2yr renewal, state radiation therapist licensure CE, annual radiation safety and protection CE mandatory category, ARRT ethics CE mandatory requirement, BLS 2-year renewal, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full radiation therapist credential calendar.',
  alternates: { canonical: '/for/radiation-therapists' },
  openGraph: {
    title: 'Momenties for Radiation Therapists',
    description: 'ARRT RT(T) CE renewal, radiation therapist credential management.',
    url: '/for/radiation-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RT(T) certification and state licensure renewal',
    desc: 'ARRT Registered Radiation Therapist RT(T) certification requires 24 CE hours every 2 years. ARRT mandates that CE include radiation safety and protection content — general oncology CE does not automatically satisfy the mandatory radiation safety category. State radiation therapist licensure (required in most states) runs on an independent cycle with separate CE documentation. ARRT ethics CE requirement tracked separately from total CE count.',
  },
  {
    icon: Clock,
    title: 'Radiation therapist multi-credential renewal calendar',
    desc: '"RT(T) — ARRT, 24 CE/2 years." "State radiation therapist license — biennial CE." "ARRT ethics CE — required within renewal period." "Radiation safety and protection CE — mandatory ARRT category." "BLS — 2-year renewal." "Annual radiation protection program review." "ASTRO membership — annual." All radiation therapist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ARRT mandatory CE category and radiation safety analytics',
    desc: 'ARRT RT(T) renewal requires CE distributed across content areas — radiation safety and protection is a mandatory category that must be satisfied within the 24-hour total. ARRT ethics CE is tracked as a separate requirement distinct from the CE hour count. State licensure CE may have different content requirements than ARRT categories. Annual institutional radiation protection program reviews tracked as a separate clinical requirement. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'ASTRO, ASRT, and radiation therapy professional involvement',
    desc: '"ASTRO Annual Meeting — fall." "ASRT Annual Symposium." "ACRO Annual Meeting." "ASRT Chapter local CE meetings — quarterly." "Linac manufacturer training updates — annual." "New treatment modality credentialing — SBRT, IMRT, proton therapy." "Image-guided radiation therapy (IGRT) competency updates." All radiation therapist professional development on calendar. ASTRO and ASRT conference CE tagged by RT(T) and state licensure applicability.',
  },
]

const RT_WORKFLOW = [
  { time: 'Annual planning', action: 'RT(T) 2-year 24-CE pace (annualized to 12 CE/year), state radiation therapist licensure CE cycle, ARRT ethics CE requirement, radiation safety mandatory category pace, BLS 2-year cycle, annual radiation protection program review, ASTRO Annual Meeting, and ASRT membership all loaded in January. RT(T) cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"ASRT-approved — adaptive radiation therapy: image guidance, plan adaptation, and dose verification for moving target volumes, 2 CE, RT(T) applicable — radiation safety and treatment delivery domain." Tagged by applicable certification and ARRT content category. RT(T) counter and radiation safety mandatory category counter both update. State licensure CE updates if applicable.' },
  { time: 'Ethics CE', action: '"ARRT ethics CE — professional ethics and standards in radiation therapy practice, 1 CE." ARRT ethics CE placed as a separate mandatory requirement with its own tracking distinct from the 24-hour CE total. ARRT requires RT(T) registrants to complete ethics CE during each renewal period. Ethics requirement placed with independent completion tracking — not merged into the CE hour counter.' },
  { time: 'BLS renewal', action: '"BLS renewal — AHA, 2-year cycle, March." BLS placed on 2-year renewal cycle independent of RT(T) 2-year cycle. RT(T) renewal and BLS renewal are both 2-year cycles but renewal dates differ based on initial certification date — they may renew the same year or in alternating years depending on when each was first obtained. Placed separately with 90-day advance alert.' },
  { time: 'Renewal audit', action: 'Analytics: RT(T) CE on pace (toward 24/2yr)? Radiation safety mandatory category satisfied? ARRT ethics CE completed? State licensure CE adequate? BLS current? Annual radiation protection program review documented? ASRT membership active? Complete radiation therapist credential audit 90 days before earliest renewal. ARRT and state board documentation maintained separately.' },
]

export default function ForRadiationTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Radiation Therapists"
        title={
          <>
            RT(T) certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Radiation safety CE and ethics never short.</em>
          </>
        }
        lede="Radiation therapists manage ARRT RT(T) certification with 24 CE hours every 2 years including mandatory radiation safety and protection category, a separate ARRT ethics CE requirement, state radiation therapist licensure on an independent cycle, BLS 2-year renewal, annual radiation protection program reviews, and professional development simultaneously. Momenties tracks CE by radiation therapy credential with mandatory category analytics, surfaces renewal deadlines 90 days early, and manages the full radiation therapist credential calendar in one view."
        crumbs={[{ label: 'For Radiation Therapists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How radiation therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for radiation therapist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Radiation therapist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every RT(T) cycle, ethics requirement, and mandatory category.</h2>
          </Reveal>
          <div className="space-y-3">
            {RT_WORKFLOW.map((step, i) => (
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
                &ldquo;ARRT is 2 years and 24 hours — which sounds straightforward until you find out about the radiation safety category requirement and the ethics CE that tracks separately. I was accumulating CE at a good pace but hadn&apos;t tracked whether my radiation safety category was satisfied. I had plenty of total hours but was short on that mandatory category going into my renewal period. My state license is also on a 2-year cycle but renews at a different time than my ARRT. Momenties shows me the category breakdown, not just the total. That&apos;s the piece that actually matters when you&apos;re renewing.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus T., RT(T), CMD</div>
                  <div className="text-xs text-muted-foreground">Radiation therapist, academic radiation oncology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All radiation therapist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ARRT RT(T) certification CE — 24 hours/2 years',
                'Radiation safety and protection CE — mandatory ARRT category',
                'ARRT ethics CE — separate mandatory requirement',
                'State radiation therapist license CE — biennial',
                'BLS certification — 2-year renewal',
                'Annual radiation protection program review',
                'ASRT membership renewal — annual',
                'ASTRO and ASRT conference CE planning by RT(T) domain applicability',
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
        title="RT(T) certification and state licensure maintained."
        subtitle="CE tracking with mandatory category analytics, ARRT ethics tracking, radiation safety CE calendar, and radiation therapy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
