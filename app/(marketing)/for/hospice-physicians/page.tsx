import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hospice Physicians — ABHPM HPM MOC CME renewal, hospice physician credential management',
  description:
    'Hospice and palliative medicine physicians manage ABHPM HPM board certification MOC continuous CME, state medical license biennial CME, DEA 3-year renewal, annual hospice and palliative care competency, NHPCO compliance training, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full hospice physician credential calendar.',
  alternates: { canonical: '/for/hospice-physicians' },
  openGraph: {
    title: 'Momenties for Hospice Physicians',
    description: 'HPM MOC CME renewal, hospice physician credential management.',
    url: '/for/hospice-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for HPM certification MOC and state medical license renewal',
    desc: 'ABHPM (American Board of Hospice and Palliative Medicine) Hospice and Palliative Medicine (HPM) certification MOC requires continuous CME with palliative care-specific content. Hospice physicians with primary board certifications (ABFM, ABIM, ABPN, or other) maintain those primary board MOC cycles independently from HPM. State medical license biennial CME runs on an independent cycle. ABHPM HPM MOC, primary board MOC, and state licensure all tracked independently.',
  },
  {
    icon: Clock,
    title: 'Hospice physician multi-credential renewal calendar',
    desc: '"HPM — ABHPM MOC, continuous CME." "Primary board MOC — ABFM/ABIM/ABPN, independent cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual hospice and palliative care competency." "NHPCO compliance training — annual." "AAHPM membership — annual." All hospice physician credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Primary board MOC and hospice compliance training analytics',
    desc: 'Hospice physicians maintaining both ABHPM HPM certification and a primary board certification (internal medicine, family medicine, or neurology) face two independent MOC tracks with overlapping but non-identical CME requirements. CME that qualifies for HPM MOC does not automatically qualify for ABIM or ABFM MOC, and vice versa. Annual NHPCO compliance training required for hospice medical directors under CMS Conditions of Participation — separate from MOC. Each tracked on independent cycles.',
  },
  {
    icon: Users,
    title: 'AAHPM, NHPCO, and hospice professional involvement',
    desc: '"AAHPM Annual Assembly — february." "NHPCO Annual Conference." "Palliative Care in Oncology Symposium." "End-of-Life Nursing Education Consortium (ELNEC) — CME for physicians." "Pain management and opioid prescribing CE." "POLST and advance directive CME." "Medical aid in dying legislation and ethics CE." All hospice and palliative medicine professional development on calendar. AAHPM conference CME tagged by HPM MOC and primary board MOC applicability.',
  },
]

const HP_WORKFLOW = [
  { time: 'Annual planning', action: 'HPM MOC CME pace, primary board MOC CME pace (independent), state medical license biennial CME cycle, DEA 3-year renewal, annual hospice competency, NHPCO annual compliance training, AAHPM Annual Assembly, and AAHPM membership all loaded in January. HPM MOC counter, primary board MOC counter, and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"AAHPM-approved — palliative care communication in serious illness: breaking bad news, goals of care conversation frameworks, and family meeting facilitation, 3 CME, AMA PRA Category 1, HPM MOC applicable." HPM MOC counter updates. If primary board MOC also qualifies, that counter updates. State licensure CME updates. Palliative care-specific CME is tagged separately from general internal medicine or family medicine CME.' },
  { time: 'NHPCO training', action: '"NHPCO annual compliance training — CMS Hospice CoP updates, fraud and abuse prevention, and quality measure reporting, Q1." NHPCO annual compliance training placed as a mandatory CMS requirement for hospice physicians under Conditions of Participation. Compliance training documentation required for CMS surveys and NHPCO accreditation. Annual placement with Q1 completion target.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year cycle." DEA registration particularly critical for hospice physicians prescribing controlled substances for pain and symptom management — opioids, benzodiazepines, and other Schedule II-IV medications. DEA lapse prevents controlled substance prescribing and directly affects patient care continuity. Placed with 12-month advance alert for renewal application.' },
  { time: 'Renewal audit', action: 'Analytics: HPM MOC CME on pace? Primary board MOC CME adequate? State medical license CME complete? NHPCO compliance training documented? DEA valid? Annual hospice competency reviewed? AAHPM membership active? Complete hospice physician credential audit 90 days before earliest renewal. ABHPM, primary board, state board, and CMS documentation maintained separately.' },
]

export default function ForHospicePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hospice Physicians"
        title={
          <>
            HPM certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Primary board MOC and DEA never lapsed.</em>
          </>
        }
        lede="Hospice and palliative medicine physicians manage ABHPM HPM certification MOC continuous CME with palliative care-specific content, primary board MOC on a completely independent cycle, state medical license biennial CME, DEA 3-year registration critical for pain and symptom management prescribing, annual NHPCO compliance training under CMS Conditions of Participation, and professional development simultaneously. Momenties tracks CME by hospice physician credential, surfaces renewal deadlines 90 days early, and manages the full hospice physician credential calendar in one view."
        crumbs={[{ label: 'For Hospice Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hospice physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hospice physician credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hospice physician credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every HPM MOC cycle, primary board requirement, and CMS compliance obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {HP_WORKFLOW.map((step, i) => (
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
                &ldquo;I have HPM through ABHPM and I maintain my ABIM internal medicine certification because it matters for hospital credentialing. They are two completely independent MOC tracks with different CME requirements. Some palliative care CME qualifies for both; most qualifies for one. My DEA renewal is the one I care most about because a lapse directly affects my ability to prescribe for patients in active symptom crises — that is not an administrative inconvenience, it affects care. NHPCO compliance training is annual for our hospice. I was managing all of this reactively. Momenties gave me a 90-day forward view that I check weekly. The DEA alert alone was worth it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Vivian L., MD, FAAHPM</div>
                  <div className="text-xs text-muted-foreground">Hospice and palliative medicine physician, academic inpatient palliative care service</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hospice physician credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABHPM HPM certification MOC — continuous, palliative care CME',
                'Primary board MOC — ABFM/ABIM/ABPN, independent cycle',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual NHPCO compliance training — CMS Conditions of Participation',
                'Annual hospice and palliative care competency assessment',
                'AAHPM membership renewal — annual',
                'AAHPM conference CME planning by HPM MOC and primary board MOC applicability',
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
        title="HPM certification and state licensure maintained."
        subtitle="CME tracking for dual MOC tracks, DEA renewal calendar, NHPCO compliance training, and hospice palliative medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
