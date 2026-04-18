import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Midwives — CNM AMCB recertification, APRN CE, and midwifery credential management',
  description:
    'Certified Nurse-Midwives manage AMCB recertification (30 CE/5yr), state RN/APRN license CE, prescriptive authority pharmacology CE requirements, DEA registration, NRP and ACLS 2-year renewals, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full CNM credential calendar.',
  alternates: { canonical: '/for/midwives' },
  openGraph: {
    title: 'Momenties for Midwives',
    description: 'CNM AMCB recertification, APRN CE, and midwifery credential management.',
    url: '/for/midwives',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for AMCB recertification and APRN license renewal',
    desc: 'AMCB CNM recertification requires 30 CE per 5-year cycle with content in midwifery-specific domains. State RN license CE and APRN license CE requirements run on independent biennial cycles. AMCB CE may partially satisfy state license requirements, but not all AMCB-approved CE qualifies for state CE depending on state rules. Tag every CE by applicable credential. AMCB, state RN, and state APRN counters tracked independently.',
  },
  {
    icon: Clock,
    title: 'CNM multi-credential renewal calendar',
    desc: '"AMCB recertification — 5-year, 30 CE." "State RN license — biennial CE." "State APRN license — biennial CE." "DEA registration — 3-year." "Prescriptive authority pharmacology CE — state required." "NRP — 2-year." "ACLS — 2-year." "ACNM membership — annual." All CNM credentials with 90-day advance alerts. Midwifery practice never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'Prescriptive authority and NRP analytics',
    desc: 'CNMs who prescribe medications face state-mandated pharmacology CE requirements for prescriptive authority renewal independent of AMCB CE. NRP and ACLS run on separate 2-year cycles that do not align with biennial state licenses or the 5-year AMCB recertification. Pharmacology CE and resuscitation certifications tracked independently. Analytics confirms both satisfied before APRN license and hospital credentialing renewal.',
  },
  {
    icon: Users,
    title: 'ACNM, AWHONN, and midwifery professional involvement',
    desc: '"ACNM Annual Meeting — may." "AWHONN National Convention — june." "State midwifery association conference — annual." "Perinatal safety collaborative education." "Fetal monitoring interpretation course — annual or biennial." All midwifery professional development on calendar. ACNM Annual Meeting CE tagged by AMCB applicability in advance for maximum recertification credit.',
  },
]

const CNM_WORKFLOW = [
  { time: 'Annual planning', action: 'AMCB 5-year CE pace (6 CE per year), state RN biennial CE, state APRN biennial CE, DEA 3-year renewal, pharmacology CE requirement, NRP and ACLS 2-year cycles, ACNM Annual Meeting, and ACNM membership all loaded in January. CE pace: 6 CE per year toward 30-hour AMCB cycle.' },
  { time: 'CE completion', action: '"AMCB-approved — management of obstetric emergencies: shoulder dystocia and postpartum hemorrhage, 3 CE, CNM midwifery." Tagged by applicable credential. AMCB counter updates. If state APRN license accepts the content, state counter also updates. If pharmacology category applies, pharmacology counter updates. Each tracked independently.' },
  { time: 'NRP renewal', action: '"NRP renewal — 2-year, february." NRP tracked on a 2-year cycle independent of biennial state licenses and the 5-year AMCB recertification. NRP expiration is a hospital credentialing requirement — lapse means loss of hospital privileges, not just an administrative gap. NRP renewal reminder placed 90 days before expiration.' },
  { time: 'DEA and CS CE', action: '"DEA registration renewal — 3-year, october." "State-required pharmacology CE — 3-hour minimum." DEA tracked on 3-year cycle separate from biennial state licenses and 2-year NRP. State pharmacology CE confirmed satisfied before APRN license renewal. DEA renewal and pharmacology CE calendar placed when current registration and CE dates are confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: AMCB CE on pace for 5-year cycle? State RN CE complete? State APRN CE complete? Pharmacology CE hours adequate? DEA registration valid? NRP current? ACLS current? ACNM membership active? Complete CNM credential audit 90 days before earliest renewal. AMCB and state board documentation maintained separately.' },
]

export default function ForMidwivesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Certified Nurse-Midwives"
        title={
          <>
            AMCB certification and APRN credentials maintained.
            <br />
            <em className="not-italic text-gold">NRP and DEA never lapsed.</em>
          </>
        }
        lede="Certified Nurse-Midwives manage AMCB recertification with 30 CE per 5-year cycle, state RN and APRN license CE on independent biennial cycles, prescriptive authority pharmacology CE requirements, DEA 3-year registration, and NRP/ACLS 2-year renewals simultaneously. Momenties tracks CE by CNM credential, surfaces renewal deadlines 90 days early, and manages the full midwifery credential calendar in one view."
        crumbs={[{ label: 'For Midwives' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How certified nurse-midwives use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CNM credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CNM credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed across independent 2-, 3-, and 5-year cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {CNM_WORKFLOW.map((step, i) => (
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
                &ldquo;I maintain AMCB certification, an RN license, an APRN license with prescriptive authority, DEA registration, NRP, and ACLS. These have cycle lengths of 2, 2, 2, 3, 2, and 5 years. None of them align. The NRP is the one that would cause immediate privilege issues if it lapses — the hospital doesn&apos;t accept grace periods. Momenties put all six on one calendar with 90-day alerts. I stopped tracking cycle end dates in a spreadsheet and started trusting that the alert would reach me in time.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Karen L., CNM, MSN, FACNM</div>
                  <div className="text-xs text-muted-foreground">Certified nurse-midwife, academic birth center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All CNM credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AMCB CNM recertification CE — 5-year, 30 CE',
                'State RN license CE — biennial renewal',
                'State APRN license CE — biennial renewal',
                'Prescriptive authority pharmacology CE — state required',
                'DEA registration renewal — 3-year',
                'NRP certification — 2-year renewal',
                'ACLS certification — 2-year renewal',
                'ACNM and AWHONN conference CE planning',
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
        title="AMCB certification and APRN credentials maintained."
        subtitle="CE tracking by credential, NRP and DEA renewal calendar, and midwifery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
