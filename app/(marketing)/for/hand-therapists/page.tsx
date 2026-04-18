import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hand Therapists — CHT CE renewal, hand therapy credential management',
  description:
    'Hand therapists manage HTCC CHT certification 80-hour CE renewal every 5 years, state OT or PT license biennial CE, HTCC mandatory ethics and patient safety CE categories, splinting and upper extremity competency CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full hand therapy credential calendar.',
  alternates: { canonical: '/for/hand-therapists' },
  openGraph: {
    title: 'Momenties for Hand Therapists',
    description: 'CHT CE renewal, hand therapy credential management.',
    url: '/for/hand-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CHT certification and state OT/PT license renewal',
    desc: 'HTCC Certified Hand Therapist (CHT) certification requires 80 CE hours every 5 years in hand and upper extremity therapy content. CHT CE must be in hand therapy content areas — general OT or PT CE may not satisfy HTCC requirements. State OT or PT license CE runs on an independent biennial cycle with its own content requirements. CHT and state license CE may partially overlap; mandatory categories tracked separately. Both counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Hand therapist multi-credential renewal calendar',
    desc: '"CHT — HTCC, 80 CE/5 years." "State OT or PT license — biennial CE." "ASHT membership — annual." "Ethics CE — HTCC mandatory category." "Patient safety CE — HTCC mandatory category." "Upper extremity splinting competency — employer annual." "Custom orthotic fabrication CE — as required." All hand therapy credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory CE category and competency analytics',
    desc: 'HTCC CHT renewal requires mandatory CE in specific categories beyond the 80-hour total: ethics, patient safety, and hand therapy content domain hours. A CHT candidate who reaches 80 hours but lacks the mandatory category minimums fails renewal even with adequate total CE. Mandatory categories tracked as separate counters — inadequate category hours visible immediately rather than discovered at renewal.',
  },
  {
    icon: Users,
    title: 'ASHT, AOTA, and hand therapy professional involvement',
    desc: '"ASHT Annual Meeting — october/november." "AOTA Annual Conference — april." "APTA Combined Sections Meeting (CSM) — february." "HTCC CHT Prep Course CE." "Upper Extremity Society annual education." "Splinting and orthotic fabrication CE." All hand therapy professional development on calendar. ASHT Annual Meeting CE tagged by CHT and state license applicability in advance.',
  },
]

const HAND_WORKFLOW = [
  { time: 'Annual planning', action: 'CHT 5-year 80-CE pace (annualized to 16 CE/year), state OT or PT biennial CE cycle, ethics CE mandatory category pace, patient safety mandatory category, upper extremity splinting competency, ASHT Annual Meeting, and ASHT membership all loaded in January. CHT 5-year cumulative counter and state biennial counter tracked independently.' },
  { time: 'CE completion', action: '"ASHT-approved — flexor tendon rehabilitation: zone II repairs and early active motion protocols, 3 CE, CHT applicable." Tagged by applicable certification. CHT counter updates (cumulative toward 80/5yr target). State OT/PT license counter updates if state accepts upper extremity content. Ethics and patient safety categories updated if content qualifies. Each tracked independently.' },
  { time: 'Ethics CE', action: '"Ethics in hand therapy practice — documentation, informed consent, and billing compliance, 2 CE, HTCC mandatory." Ethics CE tracked as a mandatory CHT category, separate from total CE count. HTCC requires documented ethics CE within the 5-year renewal window — a CHT with 80 hours but no ethics CE cannot renew. Ethics category counter maintained separately.' },
  { time: 'Splinting competency', action: '"Annual upper extremity splinting competency — static and dynamic orthosis fabrication, employer assessment." Annual splinting competency placed as an institutional requirement separate from HTCC CE. Many hand therapy employers require documented annual competency in custom orthosis fabrication independent of CHT renewal. Competency logged separately from HTCC CE totals.' },
  { time: 'Renewal audit', action: 'Analytics: CHT CE on pace (cumulative toward 80/5yr)? Ethics CE category satisfied? Patient safety CE category met? State license CE complete? Splinting competency documented? ASHT membership active? Complete hand therapy credential audit 90 days before CHT renewal. HTCC documentation and state board documentation maintained separately.' },
]

export default function ForHandTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hand Therapists"
        title={
          <>
            CHT certification and state license maintained.
            <br />
            <em className="not-italic text-gold">Ethics category and splinting competency never short.</em>
          </>
        }
        lede="Hand therapists manage HTCC CHT certification with 80 CE hours over 5 years in hand therapy content including mandatory ethics and patient safety categories, state OT or PT license biennial CE on an independent cycle, annual upper extremity splinting competency documentation, and professional development simultaneously. Momenties tracks CE by hand therapy credential with mandatory category counters, surfaces renewal deadlines 90 days early, and manages the full hand therapist credential calendar in one view."
        crumbs={[{ label: 'For Hand Therapists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hand therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hand therapy credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hand therapy credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every HTCC renewal cycle and biennial state license.</h2>
          </Reveal>
          <div className="space-y-3">
            {HAND_WORKFLOW.map((step, i) => (
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
                &ldquo;CHT renewal is every 5 years and the 80-hour total sounds like a lot of time — which is exactly why I nearly missed the ethics mandatory category. I had 79 hours, more than enough, but only 1 hour of ethics CE. HTCC requires a minimum ethics category that I hadn&apos;t been tracking separately. My state OT license also has different content requirements, so I was tracking one CE total that applied to neither credential correctly. Momenties gave me separate counters for CHT total, CHT ethics, and state OT. I saw the ethics shortfall 9 months before renewal.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jenna W., OT, CHT</div>
                  <div className="text-xs text-muted-foreground">Hand therapist, academic hand surgery and rehabilitation program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hand therapy credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'HTCC CHT certification CE — 80 hours/5 years',
                'CHT ethics CE — mandatory category',
                'CHT patient safety CE — mandatory category',
                'State OT or PT license CE — biennial renewal',
                'Annual upper extremity splinting competency',
                'Custom orthotic fabrication CE — as required',
                'ASHT membership renewal — annual',
                'ASHT and AOTA conference CE planning by applicability',
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
        title="CHT certification and state license maintained."
        subtitle="CE tracking with mandatory category counters, splinting competency calendar, and hand therapy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
