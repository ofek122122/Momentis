import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Pharmacists — BCPS/BCACP board certification CE, state license renewal, and pharmacist credential management',
  description:
    'Clinical pharmacists manage state pharmacy license CE renewal, BCPS or BCACP board certification recertification CE, specialty certifications (BCOP, BCCP, BCCCP) on independent cycles, immunization administration CE, DEA registration, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full clinical pharmacist credential calendar.',
  alternates: { canonical: '/for/clinical-pharmacists' },
  openGraph: {
    title: 'Momenties for Clinical Pharmacists',
    description: 'BCPS/BCACP board certification CE, state license renewal, and pharmacist credential management.',
    url: '/for/clinical-pharmacists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for BPS board certifications and state pharmacy license',
    desc: 'BPS BCPS (pharmacotherapy), BCACP (ambulatory care), BCOP (oncology), BCCP (critical care), BCCCP (compounded sterile preparations) each require 30 CE per 7-year recertification cycle in specialty-specific content areas. State pharmacy license CE requirements run on independent biennial cycles. BPS CE may partially satisfy state requirements; specialty CE may not. Each credential tracked independently.',
  },
  {
    icon: Clock,
    title: 'Clinical pharmacist multi-credential renewal calendar',
    desc: '"State pharmacy license — biennial CE, varies." "BPS board certification — 7-year, 30 CE." "DEA registration — 3-year." "Immunization training certification — 2-year." "Controlled substance CE — state required." "ASHP membership — annual." "BPS specialty certification — multiple independent cycles." All pharmacist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Controlled substance and immunization analytics',
    desc: 'Clinical pharmacists who administer immunizations require 2-year immunization certification renewal. State pharmacy licenses increasingly require controlled substance prescribing CE independent of total license CE. DEA registration tracked on a 3-year cycle separate from biennial state licenses and 7-year BPS cycles. Each regulatory requirement confirmed independently from BPS recertification CE totals.',
  },
  {
    icon: Users,
    title: 'ASHP, ACCP, APhA, and clinical pharmacy professional involvement',
    desc: '"ASHP Midyear Clinical Meeting — december." "ACCP Annual Meeting — october." "APhA Annual Meeting — march." "Specialty pharmacy society annual meeting (HOPA, SCCM)." "Drug information and clinical decision support education." All clinical pharmacy professional development on calendar. Conference CE tagged by applicable BPS board and state license in advance.',
  },
]

const PHARM_WORKFLOW = [
  { time: 'Annual planning', action: 'State pharmacy license biennial CE cycle, BPS certification 7-year pace (4-5 CE per year), immunization certification 2-year cycle, DEA 3-year renewal, controlled substance CE (state-required), ASHP Midyear, and ASHP membership all loaded in January. BPS specialty CE pace calculated per certification independently.' },
  { time: 'CE completion', action: '"ACPE-approved — management of sepsis in the ICU: antibiotic stewardship and hemodynamic support, 2 CE, BCPS pharmacotherapy." Tagged by applicable credential. State license counter updates. BPS BCPS counter updates. If BPS BCCCP also applies, BCCCP counter updates. Each BPS specialty tracked independently.' },
  { time: 'Immunization CE', action: '"Pharmacist immunization training — 2-year renewal, CDC and APhA curriculum." Immunization certification tracked on 2-year cycle independent of biennial state license and 7-year BPS cycle. Immunization certification lapse means loss of immunization administration authority — not just an administrative gap. Renewal reminder placed 90 days before expiration.' },
  { time: 'DEA and CS CE', action: '"DEA registration renewal — 3-year, may." "State-required controlled substance CE — 3 CE hours." DEA tracked on 3-year cycle separate from biennial state license and 2-year immunization certification. Controlled substance CE confirmed satisfied before state license renewal. DEA renewal and CS CE calendar placed when current dates are confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: State license CE complete? BPS BCPS CE on pace for 7-year cycle? Other BPS specialty CE adequate? Immunization certification current? DEA registration valid? Controlled substance CE satisfied? ASHP membership active? Complete pharmacist credential audit 90 days before earliest renewal. BPS and state board documentation maintained separately.' },
]

export default function ForClinicalPharmacistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Pharmacists"
        title={
          <>
            BPS certifications and state license maintained.
            <br />
            <em className="not-italic text-gold">Immunization CE and DEA never lapsed.</em>
          </>
        }
        lede="Clinical pharmacists manage BPS board certifications (BCPS, BCACP, BCOP, BCCP) each with 30 CE per 7-year recertification cycle on independent clocks, state pharmacy license CE on a biennial cycle, immunization certification 2-year renewal, DEA 3-year registration, and professional development simultaneously. Momenties tracks CE by pharmacist credential, surfaces renewal deadlines 90 days early, and manages the full clinical pharmacist credential calendar in one view."
        crumbs={[{ label: 'For Clinical Pharmacists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical pharmacists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pharmacist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Clinical pharmacist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed across independent 2-, 3-, and 7-year cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {PHARM_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold BCPS and BCOP — two BPS certifications — plus a state pharmacy license, DEA registration, and immunization certification. The BPS certifications renew on 7-year cycles, but I got them 3 years apart, so they expire at different times. The immunization certification expires every 2 years and is completely separate from everything else. Before Momenties I was checking each one manually on different websites. Now I can see all five on one screen with the exact day each is due.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">I</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Isabel C., PharmD, BCPS, BCOP</div>
                  <div className="text-xs text-muted-foreground">Clinical pharmacist, academic oncology and critical care</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical pharmacist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State pharmacy license CE — biennial renewal',
                'BPS BCPS pharmacotherapy — 7-year, 30 CE',
                'BPS BCACP ambulatory care — 7-year, 30 CE',
                'BPS BCOP oncology — 7-year, 30 CE',
                'DEA registration renewal — 3-year',
                'Immunization certification — 2-year renewal',
                'State controlled substance CE — required',
                'ASHP and ACCP membership and conference CE',
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
        title="BPS certifications and state license maintained."
        subtitle="CE tracking by credential, immunization and DEA calendar, and clinical pharmacy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
