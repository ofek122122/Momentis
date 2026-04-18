import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hospice Workers — CHPN/ACHPN CE renewal, interdisciplinary credential tracking, and hospice credential management',
  description:
    'Hospice workers manage HPCC CHPN or ACHPN specialty certification renewal, state license CE for nursing or social work, mandatory grief and bereavement education, NHPCO professional development, and interdisciplinary team training simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full hospice credential calendar.',
  alternates: { canonical: '/for/hospice-workers' },
  openGraph: {
    title: 'Momenties for Hospice Workers',
    description: 'CHPN/ACHPN CE renewal, interdisciplinary credential tracking, and hospice credential management.',
    url: '/for/hospice-workers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CHPN and ACHPN hospice certification',
    desc: 'HPCC Certified Hospice and Palliative Nurse (CHPN) and Advanced Certified Hospice and Palliative Nurse (ACHPN) require 500 CE per 5-year recertification cycle in hospice and palliative content areas. State RN license CE requirements run on independent biennial cycles. Hospice-specific CE may satisfy both; general nursing CE may not meet HPCC specialty content requirements. Each credential tracked independently.',
  },
  {
    icon: Clock,
    title: 'Hospice worker multi-credential renewal calendar',
    desc: '"CHPN/ACHPN — HPCC, 5-year, 500 CE." "State RN/LCSW/MSW license — biennial CE, varies." "Mandatory grief and bereavement training — state or employer required." "ELNEC Core — periodic recertification." "NHPCO membership — annual." "Interdisciplinary team competency — annual." All hospice credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Grief, bereavement, and mandatory category CE analytics',
    desc: 'Hospice workers in nursing, social work, and chaplaincy roles often face employer or regulatory requirements for grief and bereavement education, self-care and secondary traumatic stress training, and cultural competency in end-of-life care. These mandatory categories tracked separately from HPCC CE totals — adequate total CE hours with insufficient grief-specific hours fails compliance. Each category confirmed independently.',
  },
  {
    icon: Users,
    title: 'NHPCO, HPNA, and hospice professional involvement',
    desc: '"NHPCO Annual Conference — april." "HPNA Spring Symposium — april." "AAHPM Annual Assembly — february." "State hospice and palliative care organization annual meeting." "Interdisciplinary team simulation training." "ELNEC Train-the-Trainer — periodic." All hospice professional development on calendar. Conference CE tagged by HPCC and state license applicability in advance.',
  },
]

const HOSPICE_WORKFLOW = [
  { time: 'Annual planning', action: 'HPCC certification 5-year CE pace (100 CE per year), state license biennial CE cycle, mandatory grief and bereavement category CE, annual interdisciplinary team competency, NHPCO Annual Conference, and NHPCO membership all loaded in January. CE pace: 100 CE per year toward 500-hour HPCC cycle.' },
  { time: 'CE completion', action: '"HPCC-approved — managing refractory symptoms in the final hours: dyspnea and terminal restlessness, 3 CE, CHPN hospice palliative." Tagged by applicable credential. HPCC counter updates. If state RN license accepts the content, state counter also updates. Grief and bereavement category counter updates if applicable. Each tracked independently.' },
  { time: 'Grief CE tracking', action: '"Grief and bereavement education — grief theory and counseling in hospice families, 2 CE, grief category." Grief-specific CE tracked as a required category within the total CE count. Employers and state hospice regulations may require a minimum number of grief CE hours per cycle. Grief hours confirmed adequate independently of total HPCC CE before renewal.' },
  { time: 'ELNEC training', action: '"ELNEC Core Curriculum recertification — 5-year cycle." ELNEC (End-of-Life Nursing Education Consortium) recertification tracked on 5-year cycle independent of HPCC certification and biennial state license. ELNEC CE logged separately from HPCC certification CE — applicable to institutional credentialing and Joint Commission requirements.' },
  { time: 'Renewal audit', action: 'Analytics: HPCC CE on pace for 5-year cycle? State license CE complete? Grief and bereavement category CE adequate? Mandatory cultural competency CE satisfied? Annual interdisciplinary competency documented? ELNEC current? NHPCO membership active? Complete hospice credential audit 90 days before earliest renewal.' },
]

export default function ForHospiceWorkersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hospice Workers"
        title={
          <>
            CHPN and ACHPN certification maintained.
            <br />
            <em className="not-italic text-gold">Grief CE and state license never lapsed.</em>
          </>
        }
        lede="Hospice workers manage HPCC CHPN or ACHPN certification with 500 CE per 5-year cycle, state RN or social work license CE on independent biennial cycles, mandatory grief and bereavement education category requirements, ELNEC recertification, and professional development simultaneously. Momenties tracks CE by hospice credential, surfaces renewal deadlines 90 days early, and manages the full hospice worker credential calendar in one view."
        crumbs={[{ label: 'For Hospice Workers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hospice workers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hospice credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hospice credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 5-year HPCC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {HOSPICE_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ACHPN certification and a state RN license, and my employer requires documented grief and bereavement CE every year on top of both. The grief CE requirement is the one that catches people off guard — it&apos;s not part of the HPCC certification requirement, it&apos;s an employer and state surveyor expectation. I used to track my HPCC CE total carefully and then realize at year-end that I had 120 hours of CE but only 4 of them were grief-specific. Momenties tracks the grief category separately and I can see the gap before the year ends.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Beth A., RN, ACHPN, FPCN</div>
                  <div className="text-xs text-muted-foreground">Advanced certified hospice and palliative nurse, inpatient hospice unit</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hospice credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'HPCC CHPN/ACHPN certification CE — 5-year, 500 CE',
                'State RN or LCSW license CE — biennial renewal',
                'Grief and bereavement CE — category requirement',
                'ELNEC Core Curriculum — 5-year recertification',
                'Annual interdisciplinary team competency',
                'NHPCO membership renewal — annual',
                'NHPCO and HPNA conference CE planning',
                'Cultural competency and self-care CE documentation',
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
        title="CHPN and ACHPN certification maintained."
        subtitle="CE tracking by credential, grief and mandatory category counters, and hospice professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
