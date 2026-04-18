import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Case Managers — CCM renewal, CE tracking, and case management credential calendar',
  description:
    'Case managers manage 80 CE hours per 5-year CCM renewal cycle, state licensure CE requirements for underlying professional licenses (RN, LCSW, LPC), CMSA conference commitments, and continuing competency requirements simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full case management calendar.',
  alternates: { canonical: '/for/case-managers' },
  openGraph: {
    title: 'Momenties for Case Managers',
    description: 'CCM renewal, CE tracking, and case management credential management.',
    url: '/for/case-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CCM renewal',
    desc: 'CCMC requires 80 CE hours per 5-year CCM renewal cycle with CE approved by CCMC-approved providers. CE must be in case management content areas. Tag every CE activity by CCM content area: care coordination, health promotion, community resources, rehabilitation, reimbursement, vocational concepts. CCMC-approved hours tracked separately from general professional development.',
  },
  {
    icon: Clock,
    title: 'Case manager multi-credential renewal calendar',
    desc: '"CCM — CCMC, 5-year renewal, june." "RN license — state board, october (if nurse CM)." "LCSW — state licensing board, biennial (if social worker CM)." "ACM or CMAC specialty cert — renewal." "CPR — 2-year." All case management credentials with 90-day advance alerts. Both base professional license and CCM credential maintained.',
  },
  {
    icon: BarChart3,
    title: 'Dual license CE analytics',
    desc: 'Most case managers maintain a base professional license (RN, LCSW, LPC, SW) with its own CE requirements alongside CCM certification. CE hours that qualify for both the CCM and the base license tracked as dual-applicable. Analytics shows each credential\'s independent progress. No hour counted toward the wrong credential.',
  },
  {
    icon: Users,
    title: 'CMSA and specialty society involvement',
    desc: '"CMSA Annual Conference — june." "State case management society meeting — annual." "ACM annual conference — acute care case management." "Disease management certification (CDMS) — renewal." Professional development and specialty certifications on calendar. CMSA conference CME applied to CCM renewal immediately after attendance.',
  },
]

const CM_WORKFLOW = [
  { time: 'Annual planning', action: 'CCM 5-year renewal date, base professional license renewal, any specialty case management certs, CPR recertification, and CMSA Annual Conference all loaded in January. 90-day alerts on every credential. CE completion pace calculated — 16 CCMC hours per year satisfies the 5-year CCM requirement without end-of-cycle scramble.' },
  { time: 'CE completion', action: '"CCMC-approved webinar — transitions of care coordination, tuesday 1pm, 2 hours, CCM CE." Tagged by CCM content area and base license applicability. CCM renewal counter updates. RN or LCSW CE counter also updates if CE qualifies for both credentials.' },
  { time: 'Base license', action: '"RN license renewal — state board, october 31." State RN CE requirements documented separately from CCMC CE requirements. Some CCMC-approved CE also qualifies for state RN renewal hours; others are CCM-only. Both sets tracked without confusion between the two credentialing bodies.' },
  { time: 'Specialty certs', action: '"ACM certification renewal — acute care case management, 2-year." "CDMS disability management renewal." Specialty case management certifications tracked independently. Acute care and disability management practice areas require distinct CE alongside general CCM maintenance.' },
  { time: 'Renewal audit', action: 'Analytics: CCMC CE hours on pace? CCM content areas covered? Base professional license CE complete? Specialty cert hours current? CPR valid? Complete case management credential audit 90 days before any renewal deadline. Both credentials confirmed current before the renewal window.' },
]

export default function ForCaseManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Case Managers"
        title={
          <>
            CCM renewed. Base license maintained.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Case managers manage 80 CE hours per 5-year CCM renewal cycle with CCMC-approved content requirements, state professional license CE (RN, LCSW, or LPC) with independent renewal cycles, specialty case management certifications, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full case management credential calendar in one view."
        crumbs={[{ label: 'For Case Managers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How case managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CCM credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CCM credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year CCM cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CM_WORKFLOW.map((step, i) => (
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
                &ldquo;I&apos;m a nurse case manager — I maintain both my RN license and CCM certification. The CE requirements overlap in some places and are completely distinct in others. I was accidentally counting non-CCMC-approved CE toward my CCM renewal. Momenties filters this correctly: I tag each CE as CCMC-approved or not, and the CCM counter only counts approved hours. My RN renewal CE tracks separately. No more cross-contamination.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">W</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Wendy F., RN, CCM</div>
                  <div className="text-xs text-muted-foreground">Nurse case manager, health insurance utilization review</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All case management credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CCMC-approved CE — CCM 5-year renewal',
                'CE by CCM content area',
                'RN license or LCSW/LPC renewal CE',
                'CPR/BLS recertification — 2-year',
                'ACM acute care certification renewal',
                'CDMS disability management cert renewal',
                'CMSA Annual Conference and regional events',
                'Specialty disease management certifications',
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
        title="CCM renewed. Base license maintained."
        subtitle="CE tracking by credential, multi-certification renewal calendar, and case management professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
