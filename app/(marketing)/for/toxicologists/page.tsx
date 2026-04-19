import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Toxicologists — DABT/FATS CE renewal, toxicologist credential management',
  description:
    'Toxicologists manage ABAT DABT certification 36CE/3yr renewal, state pharmacist or other licensure CE, FATS Fellow renewal CE, annual laboratory competency, Good Laboratory Practice training, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full toxicologist credential calendar.',
  alternates: { canonical: '/for/toxicologists' },
  openGraph: {
    title: 'Momenties for Toxicologists',
    description: 'DABT/FATS CE renewal, toxicologist credential management.',
    url: '/for/toxicologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for DABT certification and underlying licensure renewal',
    desc: 'American Board of Applied Toxicology (ABAT) Diplomate in Applied Toxicology (DABT) requires 36 CE hours every 3 years in applied toxicology content. CE must be from recognized toxicology or closely related science content — general continuing education may not qualify. FATS (Fellow of the Academy of Toxicological Sciences) has separate renewal requirements. Toxicologists holding pharmacy, medical, or other professional licenses face independent biennial CE cycles with state-specific content requirements.',
  },
  {
    icon: Clock,
    title: 'Toxicologist multi-credential renewal calendar',
    desc: '"DABT — ABAT, 36 CE/3 years." "FATS renewal CE — Academy of Toxicological Sciences." "State pharmacist or other professional license — biennial CE." "GLP annual training — FDA 21 CFR Part 58 requirement." "Annual laboratory competency assessment." "ABAT membership and SOT membership — annual." All toxicologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'GLP compliance training and laboratory competency analytics',
    desc: 'Toxicologists conducting studies under Good Laboratory Practice (GLP) regulations face annual GLP training requirements under FDA 21 CFR Part 58 — separate from DABT CE. Annual laboratory competency covering analytical chemistry techniques, method validation, and quality control procedures tracked as institutional requirement. OECD GLP training requirements for studies conducted under international protocols placed as separate tracking requirement. Each tracked independently on calendar.',
  },
  {
    icon: Users,
    title: 'SOT, ABAT, and toxicology professional involvement',
    desc: '"SOT Annual Meeting — march." "ABAT annual CE webinar series." "EUROTOX Annual Congress." "Regulatory toxicology updates CE — FDA, EPA, ECHA." "New regulatory guidance CE — ICH guidelines updates." "Drug safety and pharmacovigilance CE." "Environmental toxicology and risk assessment CE." All toxicologist professional development on calendar. SOT and EUROTOX conference CE tagged by DABT and FATS applicability.',
  },
]

const TOX_WORKFLOW = [
  { time: 'Annual planning', action: 'DABT 3-year 36-CE pace (annualized to 12 CE/year), FATS renewal CE cycle (if applicable), state professional license biennial CE, annual GLP training, annual laboratory competency, SOT Annual Meeting, and SOT/ABAT membership all loaded in January. DABT cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"SOT-approved — reproductive and developmental toxicology: ICH S5 guideline updates, DART study design evolution, and risk assessment for reproductive endpoints, 3 CE, DABT applicable." Tagged by applicable certification. DABT counter updates (cumulative toward 36/3yr target). If FATS CE also qualifies, FATS counter updates. State licensure CE updates if applicable.' },
  { time: 'GLP training', action: '"Annual GLP training — FDA 21 CFR Part 58, quality assurance procedures, and deviation management, Q1." GLP annual training placed as a regulatory compliance requirement separate from DABT CE. Studies conducted under GLP require documented annual training for study personnel — FDA inspections review training records. Annual GLP training placed as a Q1 mandatory requirement with institutional documentation separate from DABT portfolio.' },
  { time: 'Lab competency', action: '"Annual laboratory competency — LC-MS/MS method validation, QC procedures, and proficiency testing, Q2." Annual laboratory competency placed as an institutional requirement covering analytical methods in use. Toxicology laboratory accreditation (ISO 17025 or CAP) requires documented competency for each analyst. Annual competency assessment placed as Q2 institutional milestone separate from DABT CE hours.' },
  { time: 'Renewal audit', action: 'Analytics: DABT CE on pace (cumulative toward 36/3yr)? FATS CE adequate (if applicable)? State professional license CE complete? Annual GLP training documented? Annual lab competency assessed? SOT and ABAT membership active? Complete toxicologist credential audit 90 days before DABT renewal. ABAT, state board, and institutional documentation maintained separately.' },
]

export default function ForToxicologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Toxicologists"
        title={
          <>
            DABT certification and professional licensure maintained.
            <br />
            <em className="not-italic text-gold">GLP training and laboratory competency never lapsed.</em>
          </>
        }
        lede="Toxicologists manage ABAT DABT certification with 36 CE hours every 3 years in applied toxicology content, FATS Fellow renewal CE on an independent cycle, state professional licensure biennial CE, annual GLP compliance training under FDA 21 CFR Part 58, annual laboratory competency assessments for accreditation, and professional development simultaneously. Momenties tracks CE by toxicologist credential, surfaces renewal deadlines 90 days early, and manages the full toxicologist credential calendar in one view."
        crumbs={[{ label: 'For Toxicologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How toxicologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for toxicologist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Toxicologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every DABT cycle, GLP requirement, and laboratory competency obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {TOX_WORKFLOW.map((step, i) => (
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
                &ldquo;DABT is a 3-year cycle for 36 hours — shorter than most specialty certifications, which means it comes around faster than you expect. My underlying pharmacy license is biennial on a different schedule. We run GLP studies in our lab so there&apos;s mandatory annual training that has to be documented for FDA inspections — that&apos;s completely separate from DABT CE. Then we have ISO 17025 accreditation which requires annual competency documentation for each analyst. I had my DABT CE in ABAT&apos;s portal, my pharmacist CE in the state board portal, and my GLP training records in a spreadsheet. Momenties made the 3-year DABT cycle visible as an annualized pace target. That&apos;s the piece that prevents the year-2 scramble.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Christine L., PharmD, DABT</div>
                  <div className="text-xs text-muted-foreground">Toxicologist, pharmaceutical safety assessment laboratory</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All toxicologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABAT DABT certification CE — 36 hours/3 years',
                'FATS Fellow renewal CE — Academy of Toxicological Sciences',
                'State professional licensure CE — biennial',
                'Annual GLP compliance training — FDA 21 CFR Part 58',
                'Annual laboratory competency assessment — ISO 17025/CAP',
                'OECD GLP training — for international study protocols',
                'SOT and ABAT membership renewal — annual',
                'SOT and EUROTOX conference CE planning by DABT applicability',
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
        title="DABT certification and professional licensure maintained."
        subtitle="CE pace tracking for 3-year DABT cycle, GLP annual training calendar, laboratory competency, and toxicology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
