import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Palliative Care Physicians — ABMS Hospice and Palliative Medicine MOC, CME tracking, and credential management',
  description:
    'Palliative care physicians manage ABMS Hospice and Palliative Medicine (HPM) MOC alongside their primary specialty board MOC (IM, Family Medicine, Neurology, etc.), state medical license biennial CME, DEA registration for opioid prescribing, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full palliative care credential calendar.',
  alternates: { canonical: '/for/palliative-care-physicians' },
  openGraph: {
    title: 'Momenties for Palliative Care Physicians',
    description: 'ABMS HPM MOC, CME tracking, and palliative care credential management.',
    url: '/for/palliative-care-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for HPM subspecialty MOC and primary board MOC',
    desc: 'ABMS Hospice and Palliative Medicine is a subspecialty offered by 11 ABMS member boards. HPM MOC requirements run concurrently with primary board MOC (ABIM IM, ABFM Family Medicine, ABN Neurology, ABA Anesthesiology, etc.). CME must satisfy both board tracks. Palliative medicine CME often qualifies for both; primary specialty CME may not qualify for HPM. Each board tracked independently.',
  },
  {
    icon: Clock,
    title: 'Palliative care multi-credential renewal calendar',
    desc: '"Primary board MOC — continuous, board-specific cycle." "ABMS HPM subspecialty MOC — 10-year certification, continuous activity." "State medical license — biennial CME, varies." "DEA registration — 3-year." "ELNEC training — periodic recertification." "AAHPM membership — annual." All palliative care credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'DEA opioid prescribing and REMS analytics',
    desc: 'Palliative care physicians who prescribe opioids for pain and symptom management require current DEA registration plus any applicable opioid prescriber REMS requirements. DEA registration tracked on 3-year cycle separately from biennial state licenses and board MOC. Opioid prescriber education tracked as regulatory compliance independent of CME totals. Analytics confirms DEA and opioid requirements satisfied.',
  },
  {
    icon: Users,
    title: 'AAHPM, NHPCO, and palliative care professional involvement',
    desc: '"AAHPM Annual Assembly — february." "NHPCO Annual Conference — april." "CAPC National Seminar — fall." "Primary specialty board annual meeting (ACP, AAFP, etc.)." "Palliative care ethics and communication skills training." All palliative care professional development on calendar. AAHPM Assembly CME tagged by both HPM MOC and primary board MOC applicability in advance.',
  },
]

const PALL_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary board MOC annual requirements, ABMS HPM MOC continuous activity, state medical license biennial renewal, DEA 3-year renewal, opioid prescriber REMS requirements, AAHPM Annual Assembly, and AAHPM membership all loaded in January. CME pace calculated per board requirement independently — HPM and primary board tracked separately.' },
  { time: 'CME completion', action: '"AAHPM-approved — communication skills in serious illness: goals of care conversations, 3 CME, HPM subspecialty." Tagged by applicable board. ABMS HPM MOC counter updates. If primary board (e.g., ABIM IM) also accepts the content, primary board counter also updates. Each board tracked independently.' },
  { time: 'DEA and opioids', action: '"DEA registration renewal — 3-year, april." "Buprenorphine prescriber training — 8-hour, REMS required." DEA registration tracked on 3-year cycle. Opioid prescriber education and buprenorphine prescriber requirements tracked as regulatory compliance CE, separate from ABMS MOC CME. Compliance confirmed before DEA registration renewal submitted.' },
  { time: 'ELNEC training', action: '"ELNEC Core Curriculum — periodic recertification recommended." ELNEC (End-of-Life Nursing Education Consortium) training for physicians tracked as professional development CE. ELNEC renewal placed on calendar when initial training completion date is confirmed. ELNEC CE logged separately from ABMS MOC CME — applicable to institutional credentialing.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC annual requirements current? ABMS HPM MOC CME on pace? State medical license CME complete? DEA registration valid? Opioid REMS requirements satisfied? AAHPM membership active? ELNEC current? Complete palliative care credential audit 90 days before earliest renewal. Separate documentation per ABMS board.' },
]

export default function ForPalliativeCarePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Palliative Care Physicians"
        title={
          <>
            HPM and primary board MOC maintained.
            <br />
            <em className="not-italic text-gold">DEA and opioid CE never lapsed.</em>
          </>
        }
        lede="Palliative care physicians manage ABMS Hospice and Palliative Medicine subspecialty MOC alongside their primary specialty board MOC on independent cycles, DEA 3-year registration for opioid prescribing, opioid prescriber REMS requirements, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full palliative care credential calendar in one view."
        crumbs={[{ label: 'For Palliative Care Physicians' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How palliative care physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for palliative care credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Palliative care credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board and regulatory cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {PALL_WORKFLOW.map((step, i) => (
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
                &ldquo;Palliative care is a subspecialty on top of a primary specialty, which means I maintain two board MOC tracks simultaneously. My ABIM IM MOC and my ABMS HPM MOC have different CME requirements and different knowledge check-in schedules. Then there&apos;s DEA registration, opioid prescriber training, a state license, and AAHPM membership — all on different timelines. Momenties was the first tool that let me see all five tracks at once without manually cross-checking each one.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Christopher V., MD, FACP, FAAHPM</div>
                  <div className="text-xs text-muted-foreground">Palliative care physician, academic cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All palliative care credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Primary specialty board MOC CME — board-specific cycle',
                'ABMS HPM subspecialty MOC — continuous activity',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Opioid prescriber REMS education — regulatory',
                'Buprenorphine prescriber training (if applicable)',
                'AAHPM membership renewal — annual',
                'ELNEC and communication skills training',
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
        title="HPM and primary board MOC maintained."
        subtitle="CME tracking by board credential, DEA and opioid CE calendar, and palliative care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
