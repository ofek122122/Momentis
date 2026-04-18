import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nurse Anesthetists — CRNA CE, NBCRNA recertification, and credential management',
  description:
    'Certified Registered Nurse Anesthetists manage NBCRNA CPC recertification (40 Class A CE per 4yr), state RN/APRN license CE, prescriptive authority pharmacology CE, controlled substance DEA registration, ACLS/PALS/BLS 2-year renewals, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full CRNA credential calendar.',
  alternates: { canonical: '/for/nurse-anesthetists' },
  openGraph: {
    title: 'Momenties for Nurse Anesthetists',
    description: 'CRNA CE, NBCRNA recertification, and credential management.',
    url: '/for/nurse-anesthetists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NBCRNA CPC and state APRN license',
    desc: 'NBCRNA Continued Professional Certification (CPC) requires 40 Class A CE credits per 4-year cycle — not all CE qualifies. State RN license and APRN license CE renewal requirements run on independent biennial cycles. Class A CRNA CE may or may not satisfy state CE requirements depending on state rules. Tag every CE by applicable credential. NBCRNA Class A counter, state RN counter, and state APRN counter tracked independently.',
  },
  {
    icon: Clock,
    title: 'CRNA multi-credential renewal calendar',
    desc: '"NBCRNA CPC — 4-year, 40 Class A CE." "State RN license — biennial CE, varies." "State APRN license — biennial CE, varies." "DEA registration — 3-year." "Prescriptive authority pharmacology CE — state required." "ACLS — 2-year." "PALS — 2-year." "AANA membership — annual." All CRNA credentials with 90-day advance alerts. Anesthesia practice never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'DEA and controlled substance prescribing analytics',
    desc: 'CRNAs who have prescriptive authority and DEA registration face annual DEA registration renewal plus state-mandated controlled substance prescribing CE requirements that vary by state. Controlled substance CE tracked separately from NBCRNA Class A CE. DEA registration tracked on 3-year cycle separate from biennial state licenses. Analytics confirms DEA and CS prescribing requirements satisfied independent of NBCRNA CPC CE.',
  },
  {
    icon: Users,
    title: 'AANA, ASRA, and nurse anesthesia professional involvement',
    desc: '"AANA Annual Meeting — august." "ASRA Pain Medicine Annual Meeting — spring." "State nurse anesthesia association conference — annual." "Regional CRNA study group." "Hospital anesthesia quality improvement education." All CRNA professional development on calendar. AANA Annual Meeting CE tagged by NBCRNA Class A applicability in advance.',
  },
]

const CRNA_WORKFLOW = [
  { time: 'Annual planning', action: 'NBCRNA CPC 4-year cycle CE pace (10 Class A per year), state RN biennial CE, state APRN biennial CE, DEA 3-year renewal, prescriptive authority pharmacology CE, ACLS and PALS 2-year cycles, AANA Annual Meeting, and AANA membership all loaded in January. Class A CE pace calculated against 4-year cycle.' },
  { time: 'CE completion', action: '"NBCRNA Class A — anesthesia for complex cardiac procedures: TAVI and VAD, 3 Class A CE, CRNA." Tagged by applicable credential. NBCRNA Class A counter updates. If state APRN license accepts the content, state counter also updates. Class A CE distinguished from non-qualifying CE at entry. Each credential tracked independently.' },
  { time: 'ACLS/PALS', action: '"ACLS renewal — 2-year, march." "PALS renewal — 2-year, march." ACLS and PALS tracked on 2-year cycles independent of the 4-year NBCRNA CPC and biennial state license renewals. Renewal reminders placed 90 days before certification expiration. BLS tracked separately if hospital credentialing requires current provider card.' },
  { time: 'DEA and CS CE', action: '"DEA registration renewal — 3-year, july." "State-required controlled substance CE — 3 CE hours." DEA tracked on 3-year cycle separate from 2-year ACLS and biennial state licenses. State CS prescribing CE confirmed satisfied before APRN license renewal. DEA renewal and CS CE calendar placed when current registration and CE cycle are confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: NBCRNA Class A CE on pace for 4-year cycle? State RN CE complete? State APRN CE complete? Prescriptive authority pharmacology CE adequate? DEA registration valid? CS prescribing CE satisfied? ACLS current? PALS current? AANA membership active? Complete CRNA audit 90 days before earliest renewal. NBCRNA and state board documentation separate.' },
]

export default function ForNurseAnesthetistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nurse Anesthetists"
        title={
          <>
            NBCRNA CPC and APRN credentials maintained.
            <br />
            <em className="not-italic text-gold">ACLS, DEA, and Class A CE on track.</em>
          </>
        }
        lede="Certified Registered Nurse Anesthetists manage NBCRNA CPC 4-year recertification with 40 Class A CE credits, state RN and APRN license CE on independent biennial cycles, DEA 3-year registration renewal, state-mandated controlled substance prescribing CE, and ACLS/PALS 2-year renewals simultaneously. Momenties tracks CE by CRNA credential, surfaces renewal deadlines 90 days early, and manages the full nurse anesthesia credential calendar in one view."
        crumbs={[{ label: 'For Nurse Anesthetists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nurse anesthetists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CRNA credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CRNA credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed across independent 2-, 3-, and 4-year cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {CRNA_WORKFLOW.map((step, i) => (
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
                &ldquo;As a CRNA I track the NBCRNA 4-year CPC cycle, two state licenses (RN and APRN) each on biennial cycles, DEA registration, state-required CS prescribing CE, ACLS, and PALS. The complexity is that these all have different cycle lengths that never align. The NBCRNA Class A requirement is the one that trips people up — not all CE qualifies. Momenties separates Class A from everything else and I can see instantly that I&apos;m on track for 4-year recertification without mixing it up with my state license counters.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dana W., CRNA, DNP</div>
                  <div className="text-xs text-muted-foreground">Certified registered nurse anesthetist, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All CRNA credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NBCRNA CPC Class A CE — 4-year, 40 hours',
                'State RN license CE — biennial renewal',
                'State APRN license CE — biennial renewal',
                'DEA registration renewal — 3-year',
                'Prescriptive authority pharmacology CE — state required',
                'ACLS certification — 2-year renewal',
                'PALS certification — 2-year renewal',
                'AANA membership and Annual Meeting CE planning',
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
        title="NBCRNA CPC and APRN credentials maintained."
        subtitle="Class A CE tracking, DEA and CS calendar, ACLS/PALS renewals, and CRNA professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
