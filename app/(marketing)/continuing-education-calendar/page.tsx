import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Continuing Education Calendar — How to structure CE credits across multiple certifications and license renewals',
  description:
    'A continuing education calendar maps all active certifications and licenses with their CE requirements onto a single timeline, distributes CE acquisition across the renewal cycle rather than compressing it to the final quarter, tags each completed activity by certification applicability, and places 90-day renewal alerts — so CE requirements are met in advance without last-minute compliance cramming.',
  alternates: { canonical: '/continuing-education-calendar' },
  openGraph: {
    title: 'Continuing Education Calendar — Momenties',
    description: 'Structure CE credits across multiple certifications and license renewals.',
    url: '/continuing-education-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'All active certifications and licenses mapped to a single CE timeline',
    desc: '"Certification 1: [name], [renewal date], [CE requirement]. Certification 2: [name], [renewal date], [CE requirement]. License: [state], [renewal date], [CE requirement]." All active credentials mapped with CE requirements and renewal dates before any CE activity is logged. A professional with 3 active credentials typically has 3 independent CE requirements with different renewal cycles, different content requirements, and different approved provider standards. A single timeline with all CE requirements visible simultaneously is the prerequisite for distributing CE acquisition rationally — without it, each credential exists in isolation and the full CE load is invisible until renewal deadlines cluster.',
  },
  {
    icon: Clock,
    title: 'CE acquisition distributed across the renewal cycle, not compressed to the final quarter',
    desc: '"Quarterly CE target: [total annual CE] ÷ 4 = [quarterly target] hours." CE acquisition distributed across the renewal cycle in quarterly targets. A 40-credit CE requirement over a 2-year cycle is 10 credits per quarter — achievable in 5-6 hours per quarter. The same 40 credits completed in the final quarter requires 10-15 hours of CE in 12 weeks alongside clinical or professional responsibilities. Last-quarter CE compression produces compliance completion but not learning — CE consumed at high intensity under deadline pressure is retained at a fraction of the rate of CE consumed consistently over the cycle. Quarterly targets convert CE from a deadline event to a recurring calendar item.',
  },
  {
    icon: BarChart3,
    title: 'Completed CE tagged by certification applicability at time of entry',
    desc: '"Conference session — Topic: [title], 2 CE, AMA PRA Category 1, Certification A applicable, Certification B applicable, License applicable." Completed CE tagged by certification applicability at time of entry — not at renewal time. Tagging at the time of conference or course completion takes 30 seconds and prevents the renewal-time archaeology of determining which CE counts for which credential. A single conference session may satisfy CE for multiple certifications with overlapping content domains — dual-credit logging at entry time prevents the same hours from being counted more than once and ensures CE allocation matches each certification&apos;s content requirements.',
  },
  {
    icon: Shield,
    title: 'Renewal alerts placed 90 days before each certification and license deadline',
    desc: '"Alert: [Certification name] renewal — 90 days. CE requirement: [X] of [Y] credits completed." Renewal alerts placed 90 days before each deadline. 90-day advance alert gives time to close a CE gap without compressing all remaining credits into the last few weeks. For certifications with required content in specific domains (e.g., pharmacy credits for a pharmacy license, ethics credits for a counseling license), 90 days allows time to find domain-specific CE from approved providers — approved provider availability for specific content domains is constrained, and 2-week lead times produce last-minute registration at available sessions rather than selected sessions.',
  },
]

const CE_STEPS = [
  {
    step: 'List every active credential with its CE requirement and renewal date before building the calendar',
    detail: '"Credential inventory: [credential 1 — issuer, renewal date, CE requirement, content constraints]. [Credential 2 — issuer, renewal date, CE requirement, content constraints]." Complete credential inventory before any CE tracking begins. Credential inventory includes: issuer name (to identify which provider standards apply), renewal date (to set calendar target), CE requirement (total hours and any required content domains), and approved provider standards (ACCME, ACPE, APA, ANCC, or other accreditation body). Professionals who skip the inventory step discover content or provider constraints at renewal time when approved provider availability is limited.',
  },
  {
    step: 'Calculate the quarterly CE pace for each credential based on the renewal cycle',
    detail: '"[Credential] quarterly CE pace: [total CE] ÷ [quarters in cycle] = [quarterly target] hours." Quarterly CE pace calculated for each credential independently. For a credential with a 30-credit/2-year requirement, the quarterly target is 3.75 credits — approximately 2-3 CE sessions per quarter from conferences, online modules, or journal CE. For a credential with a 60-credit/3-year requirement, the quarterly target is 5 credits. Quarterly targets placed as recurring calendar reminders at the start of each quarter — a single check-in to verify pace, not a CE session trigger.',
  },
  {
    step: 'Map content domain requirements to conference and activity planning windows',
    detail: '"Required content domains: [Credential A] — ethics (3 credits), [Credential B] — pharmacology (6 credits), [License] — patient safety (2 credits)." Required content domains mapped to the annual conference and activity calendar before the year begins. Certifications with required content domains (ethics, pharmacology, patient safety, cultural competency) require CE from specific domains that may not be available from the professional&apos;s primary conference schedule. Content domain CE placed on the calendar during windows when approved CE events are available — typically early in the year when annual conference schedules are published.',
  },
  {
    step: 'Place the annual CE audit as a recurring calendar event, not a renewal-time event',
    detail: '"Annual CE audit: [recurring, Q4 or 90 days before earliest renewal]. CE log current? Content domains satisfied? Approved provider documentation filed?" Annual CE audit placed as a recurring calendar event — not triggered by a renewal deadline. An annual audit conducted 90 days before the earliest renewal date surfaces gaps with sufficient time to close them. CE audit checklist: total hours logged per credential, content domain requirements satisfied, approved provider documentation filed (certificates of completion, course transcripts), and renewal application deadline confirmed. Professionals who audit only at renewal time discover documentation gaps — missing certificates from courses completed 18 months ago — that require provider contact and may cause renewal delays.',
  },
  {
    step: 'Log CE immediately after each activity, not in batches at renewal time',
    detail: '"CE logged: [date], [activity], [hours], [provider accreditation], [applicable credentials]." CE logged immediately after each activity. Immediate logging prevents the accumulation of incomplete CE records — conference attendance logs, online course completion emails, journal CE quiz results — that must be reconstructed at renewal time. Immediate logging also captures the credential applicability determination at the time when the content is fresh. A session on clinical ethics is most accurately tagged as ethics CE by the attendee immediately after the session, not 14 months later when the renewal audit triggers a review of 40 accumulated CE entries.',
  },
  {
    step: 'Build a 3-year CE calendar horizon for long-cycle certifications',
    detail: '"Long-cycle credential: [name], renewal [date], CE requirement [X credits over Y years]. 3-year calendar view activated." Long-cycle certifications (3-year, 5-year, or 10-year renewal cycles) placed on a multi-year calendar horizon. A 5-year certification requires CE distributed across 20 quarters — a horizon that extends beyond typical annual planning windows. Without a multi-year view, long-cycle CE requirements are treated as future-self problems until the cycle is 12-18 months from expiration. Multi-year CE calendars for long-cycle credentials surface the annual CE pace required and prevent the discovery at year 4 of a 5-year cycle that the first 3 years were under the required pace.',
  },
]

const CE_FAILURES = [
  { failure: 'CE logged at renewal time, not at completion — documentation gaps discovered too late', consequence: 'CE logged at renewal time rather than immediately after completion produces documentation reconstruction work at the worst possible moment. Providers may not respond to certificate reissue requests within the renewal window. Conferences attended 2 years prior may have closed their attendance records. Online course platforms may have changed login systems. The certificate reconstruction effort for a multi-credential renewal can consume 8-12 hours — time that the professional does not have in the final 2 weeks before a renewal deadline. Immediate CE logging at completion eliminates this class of problem entirely.' },
  { failure: 'Content domain requirements discovered at renewal — approved provider availability constrained', consequence: 'CE content domain requirements discovered at renewal time produce a constrained search for approved CE at short notice. A credential requiring 3 ethics credits that is discovered at 4-week renewal will find the available ethics CE calendar severely limited — most approved ethics CE in professional certifications is offered at annual conferences or quarterly webinars, not as on-demand modules. Demand for the same CE events concentrates in the final quarter before widespread renewal deadlines. Content domain requirements placed on the calendar at the start of the renewal cycle can be satisfied from any available approved event over 24 months rather than from whatever is available in the last 4 weeks.' },
  { failure: 'Single-credential tracking — total CE load invisible, last-minute compression unavoidable', consequence: 'Tracking CE for each credential in isolation makes the total annual CE load invisible. A professional with 3 certifications may have 40, 15, and 12 CE credits required annually — 67 credits per year — but if each is tracked separately, the compounding load appears only when all three reach renewal proximity. Professionals who track all credentials in a unified calendar discover that 67 CE credits requires approximately 1.5 hours per week of CE attendance — a manageable pace distributed across the year, but an impossible sprint if compressed to any single quarter.' },
  { failure: 'No multi-year horizon for long-cycle credentials — year 1-3 under-pace discovered in year 4', consequence: 'Long-cycle certifications (3, 5, 7, or 10-year renewal cycles) tracked without a multi-year calendar horizon produce the predictable pattern of underpace in years 1-3 and compression in years 3-4 or 4-5. A 60-credit/5-year requirement needs 12 credits per year. A professional who earns 6 credits in years 1 and 2, 8 in year 3, and discovers the deficit in year 4 now needs 28 credits in the remaining 2 years — a 14-credit-per-year pace 50% higher than the natural annual target. Multi-year CE calendars for each long-cycle credential surface the annual required pace and make under-pace visible in year 1, not year 4.' },
]

export default function ContinuingEducationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Continuing Education Calendar"
        title={
          <>
            Every certification CE mapped to one timeline.
            <br />
            <em className="not-italic text-gold">Quarterly targets. 90-day renewal alerts.</em>
          </>
        }
        lede="Continuing education failures are mostly calendar failures. A CE calendar maps every active certification and license requirement to a single timeline before the year begins, sets quarterly CE acquisition targets to distribute the load across the renewal cycle, tags each completed activity by certification applicability at the time of completion, places required content domain CE during windows when approved providers are available, and places 90-day renewal alerts — so CE requirements are met in advance without last-minute compliance cramming."
        crumbs={[{ label: 'Continuing Education Calendar' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the continuing education calendar so CE requirements are met in advance.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a continuing education calendar that distributes CE load, satisfies content domains, and meets every renewal deadline in advance.</h2>
          </Reveal>
          <div className="space-y-3">
            {CE_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE calendar patterns that produce last-minute compression and documentation failures.</h2>
          </Reveal>
          <div className="space-y-3">
            {CE_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CE calendar analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for continuing education calendar discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Total CE credits logged per credential (vs. quarterly target pace)',
                'Content domain CE completion rate (required domains vs. earned)',
                'Days between CE activity completion and log entry (documentation lag)',
                'CE acquired in final 90 days of renewal cycle (compression rate)',
                'Approved provider CE percentage (credential-specific compliance rate)',
                'Multi-year CE pace for long-cycle credentials (3-, 5-, 7-year cycles)',
                '90-day renewal alert response time (gap identified to gap closed)',
                'Credential count with CE requirements active (total renewal calendar load)',
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
        title="Every certification CE on one timeline. Quarterly targets. 90-day alerts."
        subtitle="Multi-credential CE tracking, content domain requirements, approved provider documentation, and renewal deadline management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
