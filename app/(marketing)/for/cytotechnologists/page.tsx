import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Cytotechnologists — CT(ASCP) CE renewal, specialty certification tracking, and credential management',
  description:
    'Cytotechnologists manage ASCP BOC CT(ASCP) recertification (36 CE/3yr), specialty certifications (SCT, CTIAC), annual competency assessments, CAP/CLIA laboratory compliance CE, state licensure CE where required, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full cytotechnology credential calendar.',
  alternates: { canonical: '/for/cytotechnologists' },
  openGraph: {
    title: 'Momenties for Cytotechnologists',
    description: 'CT(ASCP) CE renewal, specialty certification tracking, and credential management.',
    url: '/for/cytotechnologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CT(ASCP) and specialty cytology certifications',
    desc: 'ASCP BOC CT(ASCP) certification requires 36 CE per 3-year cycle, with content in cytology-specific categories. Specialist in Cytotechnology (SCT) credential and CTIAC (cytology informed consent) certification each have independent renewal requirements. CE must be in applicable cytology content areas. Tag every CE by certification applicability. CT(ASCP) and specialty counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'Cytotechnologist multi-credential renewal calendar',
    desc: '"CT(ASCP) — ASCP BOC, 3-year, 36 CE." "SCT specialty — 3-year if applicable." "State laboratory licensure — biennial CE, varies by state." "CAP inspector training — annual where applicable." "Annual competency assessment — institutional requirement." "IAC cytology accreditation CE — variable." "ASCP membership — annual." All cytotechnology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Laboratory compliance and competency CE analytics',
    desc: 'Cytotechnologists working in CAP-accredited or CLIA-regulated laboratories face annual competency assessments and periodic laboratory compliance education requirements. Compliance CE tracked separately from ASCP BOC CE — regulatory compliance is a laboratory requirement, not optional. Analytics confirms laboratory competency requirements and regulatory training satisfied independently from certification CE totals.',
  },
  {
    icon: Users,
    title: 'ASC, CAP, and cytotechnology professional involvement',
    desc: '"ASC Annual Scientific Meeting — spring." "CAP Annual Meeting — fall." "IAC World Congress — biennial." "State cytology society annual meeting." "Hospital pathology grand rounds." "Digital pathology and AI in cytology education." All cytotechnology professional development on calendar. Conference CE tagged by CT(ASCP) applicability in advance.',
  },
]

const CYTO_WORKFLOW = [
  { time: 'Annual planning', action: 'CT(ASCP) 3-year CE pace (12 per year), SCT certification cycle (if applicable), state licensure CE cycle, annual competency assessment date, CAP/CLIA compliance education, and ASC Annual Meeting all loaded in January. CE pace: 12 CE per year toward 36-hour ASCP BOC cycle.' },
  { time: 'CE completion', action: '"ASCP-approved — cervical cytology adequacy and quality: ThinPrep vs. SurePath, 2 CE, CT(ASCP) applicable." Tagged by applicable certification. CT(ASCP) counter updates. If SCT also applies, SCT counter updates. State licensure CE counter updates if state CE accepts the content. Each certification tracked independently.' },
  { time: 'Annual competency', action: '"Annual cytology competency assessment — institutional requirement, Q1." Annual competency assessment logged as a mandatory institutional requirement. Competency documentation maintained for CAP inspection and CLIA regulatory purposes. Laboratory director sign-off date tracked. Annual cycle placed as recurring event at the start of each year.' },
  { time: 'Lab compliance CE', action: '"CAP laboratory compliance education — Q2, 1.5 CE, regulatory." CAP inspection readiness training and CLIA compliance education logged as laboratory compliance CE, separate from ASCP BOC certification CE. Compliance education completed before annual CAP inspection windows. Compliance CE logged independently from certification totals.' },
  { time: 'Renewal audit', action: 'Analytics: CT(ASCP) CE on pace for 3-year cycle? SCT CE adequate? State licensure CE complete? Annual competency documented? CAP/CLIA compliance education done? ASCP membership active? Complete cytotechnology credential audit 90 days before earliest ASCP BOC renewal. Separate documentation per ASCP BOC and state board.' },
]

export default function ForCytotechnologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Cytotechnologists"
        title={
          <>
            CT(ASCP) certification maintained.
            <br />
            <em className="not-italic text-gold">Competency and compliance never missed.</em>
          </>
        }
        lede="Cytotechnologists manage ASCP BOC CT(ASCP) recertification with 36 CE per 3-year cycle, SCT specialty certification on an independent cycle, annual laboratory competency assessments required for CAP and CLIA compliance, state licensure CE where required, and professional development simultaneously. Momenties tracks CE by cytotechnology certification, surfaces renewal deadlines 90 days early, and manages the full cytotechnology credential calendar in one view."
        crumbs={[{ label: 'For Cytotechnologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How cytotechnologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for cytotechnology credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Cytotechnology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 3-year ASCP BOC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CYTO_WORKFLOW.map((step, i) => (
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
                &ldquo;Cytotechnology CE is specific — not all CE qualifies for CT(ASCP) renewal, and the lab requires annual competency documentation that&apos;s completely separate from my ASCP BOC CE. Before Momenties I would finish the year thinking my CE was complete, then realize the annual competency hadn&apos;t been formally logged for CAP. Now the competency assessment is a recurring event in January and my ASCP CE counter is separate from my lab compliance log. I know both are on track without confusion.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lena B., CT(ASCP), SCT</div>
                  <div className="text-xs text-muted-foreground">Cytotechnologist, academic medical center cytology laboratory</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All cytotechnology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CT(ASCP) certification CE — 3-year, 36 CE',
                'SCT specialist certification — 3-year if applicable',
                'State laboratory licensure CE — biennial',
                'Annual cytology competency assessment',
                'CAP/CLIA compliance CE documentation',
                'ASCP membership renewal — annual',
                'ASC Annual Meeting CE planning',
                'Digital pathology and AI education tracking',
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
        title="CT(ASCP) certification maintained."
        subtitle="CE tracking by cytology certification, competency and compliance calendar, and cytotechnology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
