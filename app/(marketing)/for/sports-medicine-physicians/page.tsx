import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sports Medicine Physicians — ABFM/ABIM/ABEM + CAQ CME tracking and sports medicine credential management',
  description:
    'Sports medicine physicians manage primary board MOC (ABFM, ABIM, ABEM, ABOS, or ABPN) plus CAQ Sports Medicine additional qualification CME, state medical license biennial CME, DEA 3-year registration, musculoskeletal ultrasound credentialing, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full sports medicine credential calendar.',
  alternates: { canonical: '/for/sports-medicine-physicians' },
  openGraph: {
    title: 'Momenties for Sports Medicine Physicians',
    description: 'Primary board + CAQ Sports Medicine CME tracking and credential management.',
    url: '/for/sports-medicine-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and CAQ Sports Medicine',
    desc: 'Sports medicine physicians hold a primary board certification (ABFM, ABIM, ABEM, ABOS, or ABPN) with a Certificate of Added Qualification (CAQ) in Sports Medicine. Primary board MOC requirements are independent of CAQ Sports Medicine renewal. Primary board CME requirements may not overlap with CAQ sports medicine CME. Two boards tracked independently — primary board counter and CAQ counter maintained separately, since CME that qualifies for one may not qualify for the other.',
  },
  {
    icon: Clock,
    title: 'Sports medicine physician multi-credential renewal calendar',
    desc: '"Primary board MOC — continuous CME (ABFM, ABIM, ABEM, ABOS, or ABPN)." "CAQ Sports Medicine — renewal CE, sports medicine content." "State medical license — biennial CE." "DEA registration — 3-year." "Musculoskeletal ultrasound credentialing — institutional annual." "AMSSM membership — annual." "Team physician event coverage credentials — seasonal." All sports medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'MSK ultrasound credentialing and team physician analytics',
    desc: 'Sports medicine physicians performing musculoskeletal ultrasound (MSKUS) for diagnostic imaging and ultrasound-guided injections require institutional credentialing with manufacturer training and case minimums. Team physician event coverage credentials for sports at the collegiate, professional, or Olympic level have separate activation and renewal processes. MSKUS credentialing and team physician credentials tracked on independent institutional schedules.',
  },
  {
    icon: Users,
    title: 'AMSSM, ACSM, and sports medicine professional involvement',
    desc: '"AMSSM Annual Meeting — april." "ACSM Annual World Congress." "Team Physician Consensus Conference." "NATA Annual Clinical Symposia and AT Expo." "AAOS Sports Medicine section." "Sideline medicine and event coverage CE." "Concussion management certification updates." All sports medicine professional development on calendar. AMSSM and ACSM conference CE tagged by primary board and CAQ applicability.',
  },
]

const SM_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC continuous CME pace (varies by board: ABFM, ABIM, ABEM, ABOS, or ABPN), CAQ Sports Medicine renewal CE cycle, state medical license biennial CE, DEA 3-year renewal, MSKUS credentialing institutional renewal, AMSSM Annual Meeting, and AMSSM membership all loaded in January. Primary board, CAQ, and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"AMSSM-approved — return-to-play decision making in concussion: current protocols and evidence for team physicians, 3 CME, CAQ Sports Medicine applicable." Tagged by applicable credential. CAQ counter updates. Primary board counter updates only if content meets primary board CME requirements — sports medicine CME may or may not satisfy ABFM or ABIM content requirements. Each tracked independently.' },
  { time: 'MSKUS credentialing', action: '"Musculoskeletal ultrasound credentialing renewal — institutional peer review, case documentation, Q1." MSKUS credentialing tracked on institutional renewal cycle. Case minimum thresholds maintained for diagnostic and interventional applications. MSKUS initial credentialing and renewal requirements vary by institution — some require separate diagnostic and interventional track credentialing.' },
  { time: 'Team physician CE', action: '"NCAA team physician documentation — annual." "NFL/NBA/MLB team physician credentialing — league-specific." Team physician credentials for professional sports leagues tracked on league-specific annual or seasonal cycles. College and university athletic team physician agreements tracked per academic year. Sideline coverage certifications (ACLS, ATLS for sideline) placed on independent renewal calendars.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace? CAQ CE adequate? State license CE complete? DEA valid? MSKUS credentialing current? Team physician credentials active? AMSSM membership current? Complete sports medicine credential audit 90 days before earliest renewal. Primary board, CAQ, and institutional documentation maintained separately.' },
]

export default function ForSportsMedicinePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sports Medicine Physicians"
        title={
          <>
            Primary board MOC and CAQ both maintained.
            <br />
            <em className="not-italic text-gold">MSKUS credentialing and DEA never lapsed.</em>
          </>
        }
        lede="Sports medicine physicians manage primary board MOC (ABFM, ABIM, ABEM, ABOS, or ABPN) and CAQ Sports Medicine renewal CE on independent cycles, institutional musculoskeletal ultrasound credentialing on annual peer review, team physician credentials on league or institutional schedules, DEA 3-year registration, and professional development simultaneously. Momenties tracks CME by board credential with dual-board tracking, surfaces renewal deadlines 90 days early, and manages the full sports medicine credential calendar in one view."
        crumbs={[{ label: 'For Sports Medicine Physicians' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sports medicine physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for sports medicine credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sports medicine credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across primary board, CAQ, and institutional cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {SM_WORKFLOW.map((step, i) => (
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
                &ldquo;The CAQ is the part that surprises family medicine sports medicine physicians — we have ABFM MOC with family medicine CME requirements and CAQ Sports Medicine with sports-specific CME requirements. They&apos;re both continuous, they don&apos;t share the same content standards, and they renew on different schedules. I also have MSKUS credentialing at two facilities and a professional sports team physician agreement that has its own documentation cycle. I was managing it all in a spreadsheet. Momenties tracks each credential independently with its own counter and alert. I haven&apos;t had a credential issue since I set it up.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Brian C., MD, FAAFP, CAQSM</div>
                  <div className="text-xs text-muted-foreground">Sports medicine physician, team physician, academic sports medicine program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sports medicine credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary board MOC CME — continuous (ABFM, ABIM, ABEM, ABOS, or ABPN)',
                'CAQ Sports Medicine CE — renewal cycle',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Musculoskeletal ultrasound credentialing — institutional annual',
                'Team physician credentials — league or institutional cycle',
                'AMSSM membership renewal — annual',
                'AMSSM and ACSM conference CE by primary board and CAQ applicability',
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
        title="Primary board MOC and CAQ both maintained."
        subtitle="CME tracking with dual-board counters, MSKUS credentialing, team physician credentials, and sports medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
