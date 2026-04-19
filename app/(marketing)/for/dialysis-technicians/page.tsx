import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Dialysis Technicians — CHT/CCHT CE renewal, dialysis technician credential management',
  description:
    'Dialysis technicians manage BONENT CHT or NNCC CCHT certification renewal CE, annual CMS-required machine competency documentation, vascular access competency, BLS 2-year renewal, mandatory patient safety CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full dialysis technician credential calendar.',
  alternates: { canonical: '/for/dialysis-technicians' },
  openGraph: {
    title: 'Momenties for Dialysis Technicians',
    description: 'CHT/CCHT CE renewal, dialysis technician credential management.',
    url: '/for/dialysis-technicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CHT, CCHT, and dialysis technician certifications',
    desc: 'BONENT Certified Hemodialysis Technician (CHT) and NNCC Certified Clinical Hemodialysis Technician (CCHT) certifications require CE per renewal cycle in dialysis-specific content. CHT and CCHT are independent certifications from different organizations with different renewal requirements — technicians holding both face independent CE cycles. Dialysis-specific CE must cover hemodialysis content areas; general patient care CE may not qualify for specialty renewal.',
  },
  {
    icon: Clock,
    title: 'Dialysis technician multi-credential renewal calendar',
    desc: '"CHT — BONENT, renewal CE." "CCHT — NNCC, renewal CE (if applicable)." "BLS — 2-year renewal." "Annual dialysis machine competency — CMS required." "Vascular access competency — annual, ANNA/NNCC recommended." "Water treatment competency — annual." "ANNA or NNCC membership — annual." All dialysis technician credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'CMS-required machine competency and water treatment analytics',
    desc: 'Dialysis technicians face CMS ESRD facility requirements for annual dialysis machine competency documentation — separate from CHT or CCHT CE. Water treatment system competency required annually for technicians responsible for water quality monitoring. Vascular access competency (AV fistula cannulation, catheter care) tracked as a separate annual institutional requirement. Each tracked independently on calendar.',
  },
  {
    icon: Users,
    title: 'ANNA, NNCC, and dialysis technician professional involvement',
    desc: '"ANNA National Symposium — spring." "NNCC Dialysis Technician Summit." "NKF Spring Clinical Meetings." "ANNA Chapter local meetings — quarterly CE." "Hemodialysis technology updates — manufacturer CE." "Home hemodialysis and nocturnal dialysis training." All dialysis technician professional development on calendar. ANNA conference CE tagged by CHT and CCHT applicability in advance.',
  },
]

const DT_WORKFLOW = [
  { time: 'Annual planning', action: 'CHT renewal CE cycle, CCHT cycle (if applicable), BLS 2-year cycle, annual dialysis machine competency assessment, annual water treatment competency, annual vascular access competency, ANNA National Symposium, and ANNA membership all loaded in January. CHT, CCHT, and BLS paces tracked independently.' },
  { time: 'CE completion', action: '"NNCC-approved — hemodialysis adequacy monitoring: Kt/V calculation and treatment time optimization for patient outcomes, 2 CE, CCHT applicable." Tagged by applicable certification. CCHT counter updates. If CHT also applies, CHT counter updates. Machine-specific CE logged to competency documentation when applicable — different from certification CE.' },
  { time: 'Machine competency', action: '"Annual dialysis machine competency — Fresenius 2008K2 and NxStage System One, Q1." Annual machine competency assessment placed as institutional requirement under CMS ESRD facility conditions. CMS requires documented competency for each machine type used by dialysis facility staff. Annual competency placed as a Q1 event separate from CHT/CCHT CE documentation.' },
  { time: 'Water treatment', action: '"Annual water treatment competency — RO system monitoring, water quality testing, and disinfection protocols, Q1." Water treatment system competency placed as annual institutional requirement. AAMI standards for hemodialysis water quality require documented competency for staff performing water quality monitoring. Annual water treatment competency documentation placed separately from CHT/CCHT CE.' },
  { time: 'Renewal audit', action: 'Analytics: CHT CE on pace for renewal? CCHT CE adequate? BLS current? Annual machine competency documented? Water treatment competency current? Vascular access competency reviewed? ANNA membership active? Complete dialysis technician credential audit 90 days before earliest certification renewal. BONENT, NNCC, and CMS documentation maintained separately.' },
]

export default function ForDialysisTechniciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Dialysis Technicians"
        title={
          <>
            CHT and CCHT certifications maintained.
            <br />
            <em className="not-italic text-gold">Machine competency and BLS never lapsed.</em>
          </>
        }
        lede="Dialysis technicians manage BONENT CHT and NNCC CCHT certification CE renewal on independent cycles, CMS-required annual dialysis machine competency documentation separate from certification CE, annual water treatment competency requirements, vascular access competency, BLS 2-year renewal, and professional development simultaneously. Momenties tracks CE by dialysis credential, surfaces renewal deadlines 90 days early, and manages the full dialysis technician credential calendar in one view."
        crumbs={[{ label: 'For Dialysis Technicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dialysis technicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for dialysis technician credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Dialysis technician credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every certification cycle and CMS competency requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {DT_WORKFLOW.map((step, i) => (
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
                &ldquo;I have CHT from BONENT and CCHT from NNCC because different jobs asked for different certifications. They have different renewal cycles and different CE requirements. The machine competency is what CMS asks about during ESRD surveys — and it&apos;s completely separate from both certifications. When our facility switched from Fresenius to also using NxStage, I needed separate competency documentation for each machine type. I had machine competency, water treatment competency, vascular access competency, two certifications, and BLS all tracked in different places. Momenties consolidated all of it. One place, independent alerts for each.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Q</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Quinton R., CHT, CCHT</div>
                  <div className="text-xs text-muted-foreground">Dialysis technician, outpatient hemodialysis center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All dialysis technician credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'BONENT CHT certification CE — renewal cycle',
                'NNCC CCHT certification CE — renewal cycle',
                'BLS certification — 2-year renewal',
                'Annual dialysis machine competency — CMS required',
                'Annual water treatment system competency',
                'Vascular access competency — annual',
                'ANNA membership renewal — annual',
                'ANNA and NNCC conference CE planning',
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
        title="CHT and CCHT certifications maintained."
        subtitle="CE tracking by certification, CMS machine competency calendar, water treatment competency, and dialysis professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
