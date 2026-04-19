import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Anesthesiologist Assistants — NCCAA CAA CE renewal, anesthesia assistant credential management',
  description:
    'Anesthesiologist assistants manage NCCAA CAA certification 40CE/2yr renewal, state licensure CE, ACLS/BLS biennial renewal, PALS renewal, DEA registration, annual anesthesia competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full anesthesiologist assistant credential calendar.',
  alternates: { canonical: '/for/anesthesiologist-assistants' },
  openGraph: {
    title: 'Momenties for Anesthesiologist Assistants',
    description: 'NCCAA CAA CE renewal, anesthesia assistant credential management.',
    url: '/for/anesthesiologist-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CAA certification and state licensure renewal',
    desc: 'NCCAA Certified Anesthesiologist Assistant (CAA) certification requires 40 CE hours every 2 years in anesthesia-specific content. CE must be in anesthesia content areas — general medical CE does not automatically qualify. State anesthesiologist assistant licensure runs on independent cycles (biennial or annual depending on state) with separate CE documentation requirements. CAA 2-year counter and state licensure CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Anesthesiologist assistant multi-credential renewal calendar',
    desc: '"CAA — NCCAA, 40 CE/2 years." "State AA or AA-C licensure — biennial or annual CE." "ACLS — 2-year renewal." "BLS — 2-year renewal." "PALS — 2-year renewal (for pediatric anesthesia)." "DEA registration — 3-year." "Annual anesthesia competency assessment." "AAAA membership — annual." All anesthesiologist assistant credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ACLS, PALS, and anesthesia competency analytics',
    desc: 'Anesthesiologist assistants must maintain ACLS biennial renewal independent of CAA 2-year and state licensure cycles. PALS required for CAAs covering pediatric cases — biennial renewal independent of ACLS. Annual anesthesia competency assessment required by most institutions covering airway management, regional anesthesia technique, and pharmacology updates. DEA 3-year registration tracked on an independent cycle. Each tracked separately on calendar.',
  },
  {
    icon: Users,
    title: 'AAAA, ASA, and anesthesiologist assistant professional involvement',
    desc: '"AAAA Annual Conference — fall." "ASA Annual Meeting — october." "SAMBA Annual Meeting (ambulatory anesthesia)." "SOAP Annual Meeting (obstetric anesthesia)." "SPA Annual Meeting (pediatric anesthesia)." "Regional anesthesia and PONV management CE." All anesthesiologist assistant professional development on calendar. AAAA and ASA conference CE tagged by CAA and state licensure applicability.',
  },
]

const AA_WORKFLOW = [
  { time: 'Annual planning', action: 'CAA 2-year 40-CE pace (annualized to 20 CE/year), state AA licensure CE cycle, ACLS 2-year cycle, BLS 2-year cycle, PALS 2-year cycle (if applicable), DEA 3-year renewal, annual anesthesia competency assessment, AAAA Annual Conference, and AAAA membership all loaded in January. CAA, state licensure, and life support renewal paces tracked independently.' },
  { time: 'CE completion', action: '"AAAA-approved — regional anesthesia for total joint arthroplasty: continuous peripheral nerve blocks and enhanced recovery outcomes, 4 CE, CAA applicable." Tagged by applicable certification. CAA counter updates (cumulative toward 40/2yr target). State licensure CE updates if state accepts anesthesia CE. PALS renewal CE tracked separately — not the same category.' },
  { time: 'ACLS/PALS renewal', action: '"ACLS renewal — AHA, 2-year cycle, August." "PALS renewal — AHA, 2-year cycle, September." ACLS and PALS placed on independent 2-year renewal cycles. For CAAs covering pediatric anesthesia, both ACLS and PALS are required. PALS cycle placed separately from ACLS — both 2-year cycles but renewal dates differ based on initial certification date. Each placed with 90-day advance alert.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year cycle." DEA registration placed on 3-year renewal cycle independent of CAA 2-year and state licensure cycles. Anesthesiologist assistants with DEA registration for controlled substance ordering require renewal every 3 years. DEA registration lapse prevents controlled substance administration orders — affecting anesthesia practice scope.' },
  { time: 'Renewal audit', action: 'Analytics: CAA CE on pace (toward 40/2yr)? State licensure CE complete? ACLS current? BLS current? PALS current? DEA valid? Annual anesthesia competency done? AAAA membership active? Complete anesthesiologist assistant credential audit 90 days before earliest renewal. NCCAA, state board, and institutional documentation maintained separately.' },
]

export default function ForAnesthesiologistAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Anesthesiologist Assistants"
        title={
          <>
            CAA certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">ACLS, PALS, and DEA never lapsed.</em>
          </>
        }
        lede="Anesthesiologist assistants manage NCCAA CAA certification with 40 CE hours every 2 years in anesthesia content, state AA licensure CE on an independent cycle, ACLS and PALS biennial renewals on independent cycles, DEA 3-year registration, annual anesthesia competency assessments, and professional development simultaneously. Momenties tracks CE by anesthesia credential, surfaces renewal deadlines 90 days early, and manages the full anesthesiologist assistant credential calendar in one view."
        crumbs={[{ label: 'For Anesthesiologist Assistants' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How anesthesiologist assistants use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for anesthesiologist assistant credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Anesthesiologist assistant credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed across NCCAA, state, and life support renewal cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {AA_WORKFLOW.map((step, i) => (
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
                &ldquo;CAA certification is 2 years, which sounds like a short cycle — and it is, which means it comes around faster than you expect. My state has its own AA licensure renewal on a different schedule. ACLS, BLS, and PALS are all 2-year cycles but they started on different dates so they don&apos;t renew at the same time. DEA is 3 years. At any given point I have 5 credentials on different cycles, none of which align. The CAA cycle is tight enough that underpacing CE in year 1 creates a year-2 scramble. Momenties gives me a year-1 pace indicator so I know exactly where I stand relative to the 40-hour target.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Frederick J., AA-C, CAA</div>
                  <div className="text-xs text-muted-foreground">Anesthesiologist assistant, academic anesthesiology practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All anesthesiologist assistant credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NCCAA CAA certification CE — 40 hours/2 years',
                'State AA or AA-C licensure CE — biennial or annual',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'BLS certification — 2-year renewal',
                'PALS certification — 2-year renewal (pediatric)',
                'Annual anesthesia competency assessment',
                'AAAA and ASA conference CE planning by CAA applicability',
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
        title="CAA certification and state licensure maintained."
        subtitle="CE tracking by credential, ACLS and PALS renewal calendar, DEA tracking, and anesthesiologist assistant professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
