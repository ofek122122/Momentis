import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Ambulatory Care Pharmacists — BCACP CE renewal, ambulatory pharmacist credential management',
  description:
    'Ambulatory care pharmacists manage BPS BCACP 100 CE/7yr with ambulatory care-specific content, state pharmacist biennial CE on an independent cycle, additional BPS specialty certifications on independent 7-year cycles (BCPS, BCGP), collaborative practice agreement annual review requirements, annual immunization training currency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full ambulatory care pharmacist credential calendar.',
  alternates: { canonical: '/for/clinical-pharmacists-ambulatory' },
  openGraph: {
    title: 'Momenties for Ambulatory Care Pharmacists',
    description: 'BCACP CE renewal, ambulatory pharmacist credential management.',
    url: '/for/clinical-pharmacists-ambulatory',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for BPS BCACP and additional specialty certifications on independent cycles',
    desc: 'Ambulatory care pharmacists holding BCACP (Board Certified Ambulatory Care Pharmacist) must complete 100 BPS-approved CE hours every 7 years with ambulatory care-specific content — chronic disease management (diabetes, hypertension, dyslipidemia), medication therapy management, transitions of care, and point-of-care testing. Ambulatory care pharmacists often hold additional BPS certifications: BCPS (pharmacotherapy) or BCGP (geriatric pharmacy) on independent 7-year cycles, each with different CE content requirements. State pharmacist biennial CE runs on a third cycle. The three or four cycles are rarely aligned.',
  },
  {
    icon: Clock,
    title: 'Ambulatory care pharmacist multi-credential renewal calendar',
    desc: '"BPS BCACP — 100 CE/7yr, ambulatory care content." "BPS BCPS (if held) — 100 CE/7yr, pharmacotherapy content, independent cycle." "BPS BCGP (if held) — 100 CE/7yr, geriatric pharmacy content, independent cycle." "State pharmacist license — biennial CE." "Annual immunization training currency." "Annual collaborative practice agreement review." "ACCP membership — annual." All ambulatory care pharmacist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Collaborative practice agreement review and immunization training currency analytics',
    desc: 'Ambulatory care pharmacists practicing under collaborative practice agreements (CPAs) with physician partners typically have annual CPA review requirements — the CPA may need to be renewed, updated for new disease state authority, or amended as formulary or clinical guidelines change. Annual CPA review is an institutional and regulatory requirement separate from BPS CE. Ambulatory care pharmacists who administer vaccines maintain immunization training currency through ACIP-approved programs — immunization training typically requires annual update CE as ACIP schedules and vaccine recommendations change.',
  },
  {
    icon: Users,
    title: 'ACCP, APhA, and ambulatory care pharmacy professional involvement',
    desc: '"ACCP Annual Meeting — october." "APhA Annual Meeting — march." "ASHP Midyear Clinical Meeting — december." "Diabetes management CE — GLP-1 agonist dosing and monitoring, SGLT-2 inhibitor safety." "Heart failure pharmacotherapy CE — sacubitril/valsartan initiation and uptitration protocols." "Anticoagulation management CE — DOAC selection and renal dose adjustment." "Geriatric polypharmacy deprescribing CE (if BCGP)." All ambulatory care pharmacy professional development on calendar. ACCP conference CE tagged by BCACP, BCPS, and BCGP applicability.',
  },
]

const AMBPHARM_WORKFLOW = [
  { time: 'Annual planning', action: 'BCACP 100 CE/7yr pace (annual target: 15 CE, ambulatory care content), BCPS 100 CE/7yr pace (pharmacotherapy content, independent cycle), BCGP 100 CE/7yr (if held, geriatric content, third independent cycle), state pharmacist biennial CE, annual CPA review, annual immunization training currency, ACCP Annual Meeting, APhA Annual Meeting, and ACCP membership all loaded in January. Three BPS certification CE counters and state licensure CE tracked independently. BPS certifications on offset cycles — renewal deadlines may land in different years.' },
  { time: 'CE completion', action: '"ACCP-approved — GLP-1 receptor agonist therapy in type 2 diabetes: semaglutide vs. tirzepatide comparative efficacy, injection site and GI adverse effect management, and initiation protocols in ambulatory care pharmacy practice, 2 CE, BPS-approved, BCACP applicable — diabetes management domain, BCPS applicable — pharmacotherapy domain." BCACP counter updates. BCPS counter updates. State licensure CE updates. Dual-certification CE confirmed.' },
  { time: 'CPA review', action: '"Annual collaborative practice agreement review — diabetes management CPA: formulary update with new GLP-1 agents, point-of-care A1C testing authority addition, and prescriber co-signature requirement update, Q1." Annual CPA review placed as Q1 requirement. CPA review placed before Q1 patient care planning — disease management authority under the CPA is confirmed before the new year patient appointments begin. CPA amendments that require prescriber signature placed with 30-day lead time before the effective date.' },
  { time: 'Immunization CE', action: '"Annual immunization training update — ACIP schedule changes: RSV vaccine recommendations for adults 60+, updated pneumococcal vaccine schedule with PCV20 series, and COVID-19 vaccine annual formulation update, 1 CE, Q1." Annual immunization training CE placed in Q1 to align with ACIP February advisory committee meeting schedule. Pharmacists administering vaccines confirm ACIP schedule currency before spring immunization season. Immunization CE documented in state pharmacist CE records and maintained for pharmacy permit renewal.' },
  { time: 'Renewal audit', action: 'Analytics: BCACP 100 CE on pace (15/yr target)? BCPS CE current? BCGP CE current (if applicable)? State pharmacist license CE complete? Annual CPA review documented? Immunization training current? ACCP membership active? Complete ambulatory care pharmacist credential audit 90 days before earliest BPS renewal. BPS certifications on different expiration dates — earliest expiration identified first.' },
]

export default function ForClinicalPharmacistsAmbulatoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Ambulatory Care Pharmacists"
        title={
          <>
            BCACP CE and specialty certifications maintained.
            <br />
            <em className="not-italic text-gold">CPA review current. Immunization training tracked.</em>
          </>
        }
        lede="Ambulatory care pharmacists manage BPS BCACP 100 CE every 7 years with ambulatory care-specific content, additional BPS specialty certifications (BCPS, BCGP) on independent 7-year cycles with different content requirements, state pharmacist biennial CE on a separate cycle, annual collaborative practice agreement review for disease state management authority, annual immunization training currency as ACIP schedules change, and professional development at ACCP and APhA simultaneously. Momenties tracks CE by ambulatory care pharmacist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Ambulatory Care Pharmacists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How ambulatory care pharmacists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for ambulatory care pharmacist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Ambulatory care pharmacist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through offset BPS certification cycles, state licensure, and annual CPA and immunization requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {AMBPHARM_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold BCACP for ambulatory care and BCPS for pharmacotherapy — two BPS certifications with different expiration dates because I earned them in different years. Each one needs 100 CE over 7 years and the CE content requirements are different. BCACP wants ambulatory care-specific CE: diabetes management, hypertension, MTM. BCPS wants general pharmacotherapy CE across broader domains. The same CE event may count toward one but not the other. My state license is biennial on a completely different timeline. I practice under two collaborative practice agreements that need annual review. Trying to track three renewal cycles in my head while also maintaining immunization training currency is what drove me to Momenties — I could finally see that my BCACP expires 14 months before my BCPS, so I need to front-load my BCACP CE this year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Laura G., PharmD, BCACP, BCPS</div>
                  <div className="text-xs text-muted-foreground">Ambulatory care pharmacist, primary care and diabetes management clinic</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All ambulatory care pharmacist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'BPS BCACP CE — 100 hours/7yr, ambulatory care content domain tracking',
                'BPS BCPS CE — 100 hours/7yr, pharmacotherapy content (if held)',
                'BPS BCGP CE — 100 hours/7yr, geriatric pharmacy content (if held)',
                'State pharmacist license CE — biennial, state-approved providers',
                'Annual collaborative practice agreement review — disease state authority',
                'Annual immunization training currency — ACIP schedule updates',
                'ACCP membership renewal — annual',
                'ACCP and APhA conference CE planning by BCACP, BCPS, and BCGP applicability',
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
        title="BCACP and specialty certifications maintained."
        subtitle="CE tracking for offset BPS certification cycles, collaborative practice agreement annual review, immunization training currency, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
