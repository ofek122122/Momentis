import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Oncology Pharmacists — BCOP CE renewal, oncology pharmacy credential management',
  description:
    'Oncology pharmacists manage BPS BCOP certification 100CE/7yr renewal, state pharmacy license biennial CE, ACPE CE requirements, HOPA membership, chemotherapy administration competency CE, oral oncology drug safety CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full oncology pharmacy credential calendar.',
  alternates: { canonical: '/for/oncology-pharmacists' },
  openGraph: {
    title: 'Momenties for Oncology Pharmacists',
    description: 'BCOP CE renewal, oncology pharmacy credential management.',
    url: '/for/oncology-pharmacists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for BCOP and oncology pharmacy board certification',
    desc: 'Board of Pharmacy Specialties (BPS) Board Certified Oncology Pharmacist (BCOP) certification requires 100 CE hours every 7 years in oncology pharmacy content. BCOP CE must be in oncology-specific content — general pharmacy CE does not automatically qualify. State pharmacy license CE runs on an independent biennial cycle with its own ACPE credit requirements. BCOP 7-year cumulative counter and state biennial counter tracked independently.',
  },
  {
    icon: Clock,
    title: 'Oncology pharmacist multi-credential renewal calendar',
    desc: '"BCOP — BPS, 100 CE/7 years." "State pharmacy license — biennial CE, ACPE hours." "HOPA membership — annual." "Chemotherapy administration competency — annual institutional." "Oral oncology drug safety CE — annual, ASCO/HOPA." "REMS program training — per drug, ongoing." "ASHP membership — annual." All oncology pharmacy credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'REMS program and chemotherapy competency analytics',
    desc: 'Oncology pharmacists dispensing drugs with FDA Risk Evaluation and Mitigation Strategies (REMS) programs must complete REMS-specific training before dispensing — and ongoing REMS training requirements as programs update. Annual chemotherapy administration and handling competency required by USP <800> and institutional policy. Each REMS program tracked independently per drug with program-specific renewal requirements.',
  },
  {
    icon: Users,
    title: 'HOPA, ASCO, and oncology pharmacy professional involvement',
    desc: '"HOPA Annual Conference — march." "ASCO Annual Meeting — may/june." "ASHP Midyear Clinical Meeting — december." "ACCC Annual Meeting." "NCCN clinical practice guideline updates — ongoing." "New FDA approvals and label changes — ongoing CE." "CAR-T therapy administration training." All oncology pharmacy professional development on calendar. HOPA and ASCO conference CE tagged by BCOP applicability.',
  },
]

const ONCO_RX_WORKFLOW = [
  { time: 'Annual planning', action: 'BCOP 7-year 100-CE pace (annualized to ~14 CE/year), state pharmacy biennial CE cycle, annual chemotherapy competency assessment, annual oral oncology drug safety CE, HOPA Annual Conference, and HOPA membership all loaded in January. BCOP 7-year cumulative counter and state biennial counter tracked independently.' },
  { time: 'CE completion', action: '"HOPA-approved — antibody-drug conjugates: mechanism, toxicity management, and dispensing considerations for oncology pharmacists, 3 CE, BCOP applicable." Tagged by applicable certification. BCOP counter updates (cumulative toward 100/7yr target). State pharmacy CE updates if ACPE credit and state requirements met. Oncology-specific CE logged to BCOP content areas.' },
  { time: 'REMS training', action: '"REMS training — REVLIMID (lenalidomide) REMS: prescriber enrollment update." "POMALYST REMS annual attestation." REMS program training tracked per drug independently. Lenalidomide, pomalidomide, isotretinoin, clozapine, and other REMS drugs have independent ongoing training requirements. REMS documentation failure means the pharmacist cannot dispense that specific drug. Each REMS program tracked on its independent requirement schedule.' },
  { time: 'Chemo competency', action: '"Annual chemotherapy compounding and handling competency — USP <800> assessment, Q1." Annual chemotherapy hazardous drug handling competency assessment placed as institutional requirement under USP <800> compliance. Hazardous drug competency documented separately from BCOP CE. NIOSH hazardous drug handling updates tracked as mandatory annual content alongside compounding competency.' },
  { time: 'Renewal audit', action: 'Analytics: BCOP CE on pace (cumulative toward 100/7yr)? State pharmacy CE complete with ACPE hours? Chemotherapy competency documented? REMS training current for all drugs dispensed? Oral oncology safety CE done? HOPA membership active? Complete oncology pharmacy credential audit 90 days before state pharmacy renewal. BCOP and state documentation maintained separately.' },
]

export default function ForOncologyPharmacistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Oncology Pharmacists"
        title={
          <>
            BCOP certification and state license maintained.
            <br />
            <em className="not-italic text-gold">REMS training and chemo competency never lapsed.</em>
          </>
        }
        lede="Oncology pharmacists manage BPS BCOP certification with 100 CE hours over 7 years in oncology pharmacy content, state pharmacy license biennial CE with ACPE requirements on an independent cycle, REMS program training tracked independently per drug, annual chemotherapy hazardous drug handling competency under USP <800>, and professional development simultaneously. Momenties tracks CE by oncology pharmacy credential, surfaces renewal deadlines 90 days early, and manages the full oncology pharmacist credential calendar in one view."
        crumbs={[{ label: 'For Oncology Pharmacists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How oncology pharmacists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for oncology pharmacy credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Oncology pharmacy credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every BCOP cycle, REMS requirement, and state license renewal.</h2>
          </Reveal>
          <div className="space-y-3">
            {ONCO_RX_WORKFLOW.map((step, i) => (
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
                &ldquo;BCOP is a 7-year cycle and the long window means it&apos;s easy to underpace CE in years 1-4 and then scramble in years 5-7. My state license is biennial with different CE requirements. REMS programs are the most acute risk — I dispense 6 drugs with independent REMS requirements, and if one attestation lapses I can&apos;t dispense that drug until I requalify. The REMS notifications come from the drug company portals, not from a single system. I was managing REMS in a spreadsheet that I updated inconsistently. Momenties tracks every REMS program independently with its own alert. The 7-year BCOP pace tracking alone prevented a year-6 scramble.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elena S., PharmD, BCOP</div>
                  <div className="text-xs text-muted-foreground">Oncology pharmacist, hematology/oncology practice, academic cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All oncology pharmacy credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'BPS BCOP certification CE — 100 hours/7 years',
                'State pharmacy license CE — biennial with ACPE requirements',
                'REMS program training — per drug, independent requirements',
                'Annual chemotherapy hazardous drug handling competency',
                'Oral oncology drug safety CE — annual',
                'USP <800> compliance training — annual updates',
                'HOPA membership renewal — annual',
                'HOPA and ASCO conference CE planning by BCOP applicability',
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
        title="BCOP certification and state license maintained."
        subtitle="CE tracking by credential, REMS program calendar, chemotherapy competency, and oncology pharmacy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
