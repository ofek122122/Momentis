import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Critical Care Pharmacists — BCCCP CE renewal, critical care pharmacy credential management',
  description:
    'Critical care pharmacists manage BCCCP recertification 100 CE/7yr with critical care pharmacy content, state pharmacist license biennial CE renewal, ACLS 2-year renewal if required, annual ICU competency assessment, SCCM membership obligations, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full critical care pharmacist credential calendar.',
  alternates: { canonical: '/for/critical-care-pharmacists' },
  openGraph: {
    title: 'Momenties for Critical Care Pharmacists',
    description: 'BCCCP CE renewal, critical care pharmacy credential management.',
    url: '/for/critical-care-pharmacists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for BCCCP recertification and state pharmacist license renewal independently',
    desc: 'Critical care pharmacists hold BCCCP (Board Certified Critical Care Pharmacist) certification from BPS (Board of Pharmacy Specialties), requiring 100 CE hours over 7 years with critical care pharmacy content. BPS-approved CE from ACCP or other BPS-recognized providers qualifies — general pharmacy CE does not automatically satisfy BCCCP content requirements. State pharmacist license biennial CE runs on an independent cycle with its own state board-approved provider requirements. Critical care pharmacists with additional BPS certifications (BCPS, BCIDP) maintain those certifications on independent 7-year cycles. Each tracked separately.',
  },
  {
    icon: Clock,
    title: 'Critical care pharmacist multi-credential renewal calendar',
    desc: '"BCCCP — BPS 100 CE/7 years, critical care content." "State pharmacist license — biennial CE, state board-approved." "BCPS or BCIDP (if held) — independent 7-year BPS cycles." "ACLS — 2-year renewal (if required by institution)." "Annual ICU pharmacy competency assessment." "SCCM membership — annual." "ACCP membership — annual." All critical care pharmacist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'BPS content requirements and ICU pharmacy competency analytics',
    desc: 'BCCCP renewal requires CE content mapped to critical care pharmacy practice domains — pharmacokinetics in critically ill patients, vasoactive medications, sedation and analgesia protocols, and antimicrobial stewardship in the ICU — general pharmacy CE not in critical care domains does not satisfy BPS requirements. Annual ICU pharmacy competency assessment covers institution-specific protocols and new drug therapies separate from BPS certification. Critical care pharmacists at academic centers with residency programs face ASHP accreditation compliance documentation separate from personal CE.',
  },
  {
    icon: Users,
    title: 'SCCM, ACCP, and critical care pharmacy professional involvement',
    desc: '"SCCM Critical Care Congress — february." "ACCP Annual Meeting — october." "ASHP Midyear Clinical Meeting — december." "IDSA Annual IDWeek (if antimicrobial stewardship role)." "Extracorporeal membrane oxygenation (ECMO) pharmacy CE." "CRRT pharmacokinetics and dosing CE." "Vasoactive medication protocols update." "Nutrition support in the ICU CE." All critical care pharmacy professional development on calendar. SCCM and ACCP conference CE tagged by BCCCP domain and state license applicability.',
  },
]

const CCP_WORKFLOW = [
  { time: 'Annual planning', action: 'BCCCP 100-CE/7yr pace (annualized to ~14 CE/year), BCPS or BCIDP CE pace (if held, separate 7-year cycles), state pharmacist biennial CE, ACLS 2-year cycle, annual ICU competency assessment, SCCM Congress, ACCP Annual Meeting, and SCCM membership all loaded in January. BCCCP CE counter, any additional BPS certification counters, and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"ACCP-approved — hemodynamic monitoring in septic shock: pulmonary artery catheter interpretation, echocardiography for pharmacists, and vasopressor titration endpoints, 2 CE, BPS-approved provider, BCCCP applicable — cardiovascular and hemodynamic support domain." BCCCP CE counter updates. State licensure CE updates if provider approved by state board. Critical care domain content confirmed at logging — non-critical care pharmacy CE logged separately.' },
  { time: 'ICU competency', action: '"Annual ICU pharmacy competency assessment — sedation protocol management (CPOT and RASS scales), neuromuscular blockade monitoring, and targeted temperature management drug dosing, Q1." Annual ICU competency assessment placed as an institutional requirement separate from BCCCP certification. ICU competency covers unit-specific medication protocols, new formulary agents, and safety-focused competency areas required for ICU pharmacy practice at the institution.' },
  { time: 'ACLS renewal', action: '"ACLS renewal — 2-year cycle, required for ICU pharmacy rounding." ACLS certification required by many institutions for pharmacists participating in ICU interdisciplinary rounds and code blue responses. Placed with 6-month advance alert for course registration. ACLS renewal separate from all pharmacy CE — American Heart Association certification, not a pharmacy board requirement. Institutional credentialing for ICU access may require ACLS currency.' },
  { time: 'Renewal audit', action: 'Analytics: BCCCP CE on pace (100/7yr)? Critical care domain coverage adequate? State pharmacist CE complete? BCPS or BCIDP CE current (if applicable)? ACLS current? Annual ICU competency documented? SCCM membership active? Complete critical care pharmacist credential audit 90 days before earliest renewal. BPS, state board, and institutional documentation maintained separately.' },
]

export default function ForCriticalCarePharmacistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Critical Care Pharmacists"
        title={
          <>
            BCCCP certification and state license maintained.
            <br />
            <em className="not-italic text-gold">ICU competency current. Critical care CE domains tracked.</em>
          </>
        }
        lede="Critical care pharmacists manage BCCCP certification with 100 BPS-approved CE hours over 7 years in critical care pharmacy content domains, state pharmacist license biennial CE on an independent cycle, additional BPS specialty certifications (BCPS, BCIDP) each on independent 7-year cycles if held, ACLS 2-year renewal for ICU rounding participation, annual ICU pharmacy competency assessment, and professional development at SCCM and ACCP simultaneously. Momenties tracks CE by critical care pharmacist credential, surfaces renewal deadlines 90 days early, and manages the full critical care pharmacist credential calendar in one view."
        crumbs={[{ label: 'For Critical Care Pharmacists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How critical care pharmacists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for critical care pharmacist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Critical care pharmacist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every BCCCP renewal cycle, ICU competency requirement, and ACLS renewal window.</h2>
          </Reveal>
          <div className="space-y-3">
            {CCP_WORKFLOW.map((step, i) => (
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
                &ldquo;I have BCCCP and BCPS — both through BPS, both 7-year cycles, but mine are offset by 3 years because I got them at different times. State license is biennial. My ICU requires ACLS for rounding pharmacists, so that&apos;s a 2-year cycle. We also do annual ICU competency sign-offs on sedation protocols and new drug therapies. The BCCCP content requirement is the tricky part — not all pharmacy CE counts. It has to be in a critical care domain. I was logging CE to my state board system and separately trying to track BCCCP domain coverage in a spreadsheet. Momenties was the first time I could see both in one place and know at any moment whether my BCCCP domain coverage was on track.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Samantha O., PharmD, BCCCP, BCPS</div>
                  <div className="text-xs text-muted-foreground">Critical care pharmacist, medical ICU and surgical ICU, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All critical care pharmacist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'BCCCP certification CE — 100 hours/7 years, BPS-approved critical care content',
                'BCPS or BCIDP CE — independent 7-year BPS cycles (if held)',
                'State pharmacist license CE — biennial, state board-approved providers',
                'ACLS certification — 2-year renewal (if required by institution)',
                'Annual ICU pharmacy competency assessment — institutional requirement',
                'ASHP residency program compliance (if preceptor) — annual documentation',
                'SCCM membership renewal — annual',
                'SCCM and ACCP conference CE planning by BCCCP domain and state license applicability',
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
        title="BCCCP certification and state license maintained."
        subtitle="CE tracking with BPS domain requirements, multi-certification coverage analysis, ICU competency calendar, and critical care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
