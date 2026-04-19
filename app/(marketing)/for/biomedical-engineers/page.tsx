import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Biomedical Engineers — CBME/PE CE renewal, biomedical engineer credential management',
  description:
    'Biomedical engineers manage ACCE CBME certification CE renewal, PE (Professional Engineer) license biennial PDH requirements, state PE biennial renewal independent of CBME, annual medical equipment competency, CMMS annual training, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full biomedical engineer credential calendar.',
  alternates: { canonical: '/for/biomedical-engineers' },
  openGraph: {
    title: 'Momenties for Biomedical Engineers',
    description: 'CBME/PE CE renewal, biomedical engineer credential management.',
    url: '/for/biomedical-engineers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CBME certification and PE license renewal',
    desc: 'ACCE Certified Biomedical Equipment Technician/Engineer (CBET/CRES/CLES) and CBME certifications require CE hours per renewal cycle in biomedical technology content. Biomedical engineers with PE (Professional Engineer) licensure face state-specific PDH (Professional Development Hour) requirements every 2 years — state PDH requirements vary significantly and are independent of ACCE CE requirements. CBME/CBET CE and state PE PDH tracked on independent cycles with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Biomedical engineer multi-credential renewal calendar',
    desc: '"CBET/CBME — ACCE/AAMI, CE per renewal cycle." "PE license — state PDH biennial, varies by state." "Annual medical equipment competency — JCAHO/DNV standard." "Annual CMMS (Computerized Maintenance Management System) training." "Manufacturer equipment training CE — major OEM updates." "ACCE or AAMI membership — annual." All biomedical engineer credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'JCAHO equipment competency and manufacturer training analytics',
    desc: 'Biomedical engineers responsible for medical equipment maintenance face Joint Commission (or DNV) annual competency documentation requirements separate from ACCE certification CE. Manufacturer OEM training required for maintenance of specific equipment classes (GE, Philips, Siemens) with independent training certification cycles. Annual CMMS training placed as a separate institutional IT competency requirement. FDA 21 CFR Part 820 quality systems training tracked independently for biomedical engineers in device manufacturing settings.',
  },
  {
    icon: Users,
    title: 'ACCE, AAMI, and biomedical engineering professional involvement',
    desc: '"ACCE Annual Conference." "AAMI Exchange Annual Meeting — june." "HIMSS Annual Conference." "IEEE EMBS Annual Conference." "Manufacturer CE: GE Healthcare training, Philips service certification." "FDA medical device regulation updates CE." "Cybersecurity for medical devices CE — FDA guidance updates." "IEC 60601 standards updates training." All biomedical engineering professional development on calendar. ACCE and AAMI conference CE tagged by CBET/CBME and state PE PDH applicability.',
  },
]

const BME_WORKFLOW = [
  { time: 'Annual planning', action: 'CBET/CBME CE renewal cycle, state PE PDH biennial cycle (if applicable), annual medical equipment competency assessment, annual CMMS training, manufacturer OEM training schedule, AAMI Exchange Annual Meeting, and ACCE membership all loaded in January. CBET/CBME CE counter and state PE PDH counter tracked independently.' },
  { time: 'CE completion', action: '"AAMI-approved — infusion pump risk management: IEC 60601-2-24 standards update, alarm management, and preventive maintenance protocol development, 2 CE, CBET applicable." CE counter updates. If state PE PDH applies (engineering content), PDH counter updates. Manufacturer-specific training CE logged separately — OEM training may qualify for CE but is tracked independently for service authorization purposes.' },
  { time: 'Equipment competency', action: '"Annual medical equipment competency — life support devices, high-risk equipment, and imaging systems, Q1." Annual medical equipment competency placed as a Joint Commission/DNV standard requirement for biomedical staff. Competency assessed per device category — not a single exam but category-specific competency documentation. Annual placement as Q1 institutional requirement separate from CBET/CBME CE documentation.' },
  { time: 'OEM training', action: '"GE Healthcare CT service certification — annual renewal, Q2." Manufacturer OEM training certifications placed on independent schedules per equipment class. Service authorization for GE, Philips, and Siemens equipment requires current OEM training certification — training lapse affects service authorization scope. OEM renewal placed separately for each manufacturer relationship on its own annual or biennial cycle.' },
  { time: 'Renewal audit', action: 'Analytics: CBET/CBME CE adequate for renewal? State PE PDH complete for biennial renewal? Annual medical equipment competency documented? CMMS training current? OEM service certifications current? ACCE membership active? Complete biomedical engineer credential audit 90 days before earliest renewal. ACCE, state PE board, Joint Commission, and OEM documentation maintained separately.' },
]

export default function ForBiomedicalEngineersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Biomedical Engineers"
        title={
          <>
            CBET/CBME certification and PE license maintained.
            <br />
            <em className="not-italic text-gold">OEM service certifications and equipment competency current.</em>
          </>
        }
        lede="Biomedical engineers manage ACCE CBET or CBME certification CE renewal, state PE Professional Engineer PDH requirements on an independent biennial cycle, Joint Commission annual medical equipment competency documentation, manufacturer OEM service certifications per equipment class on independent cycles, annual CMMS training, and professional development simultaneously. Momenties tracks CE by biomedical engineering credential, surfaces renewal deadlines 90 days early, and manages the full biomedical engineer credential calendar in one view."
        crumbs={[{ label: 'For Biomedical Engineers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How biomedical engineers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for biomedical engineer credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Biomedical engineer credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CBET/CBME cycle, PE PDH requirement, and OEM service certification.</h2>
          </Reveal>
          <div className="space-y-3">
            {BME_WORKFLOW.map((step, i) => (
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
                &ldquo;I maintain CBET, a PE license in two states, and OEM service certifications for three major manufacturers. CBET has its own CE cycle. Each state PE license has different PDH requirements and different renewal dates. My GE, Philips, and Siemens service certifications are annual but on completely different schedules because I got certified in different years. The Joint Commission competency documentation is annual and completely separate from all of the above. I had a spreadsheet for this that I updated maybe twice a year and was always out of date. Momenties replaced the spreadsheet with something I actually check — because it surfaces what&apos;s coming in the next 90 days without me having to remember to check.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kevin M., CBET, PE</div>
                  <div className="text-xs text-muted-foreground">Biomedical engineer, regional health system clinical engineering department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All biomedical engineer credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ACCE CBET/CBME certification CE — renewal cycle',
                'State PE license PDH — biennial, state-specific requirements',
                'Annual medical equipment competency — Joint Commission/DNV standard',
                'OEM service certifications — per manufacturer, independent cycles',
                'Annual CMMS training — institutional IT requirement',
                'FDA medical device quality systems training — where applicable',
                'ACCE membership renewal — annual',
                'AAMI and ACCE conference CE planning by CBET and PE PDH applicability',
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
        title="CBET/CBME certification and PE license maintained."
        subtitle="CE tracking by credential, OEM service certification calendar, annual competency tracking, and biomedical engineering professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
