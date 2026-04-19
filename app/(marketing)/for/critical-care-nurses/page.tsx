import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Critical Care Nurses — CCRN/PCCN CE renewal, ICU credential management',
  description:
    'Critical care nurses manage AACN CCRN or PCCN certification 100CE/3yr renewal, state RN license biennial CE, ACLS/BLS biennial renewal, NIHSS certification, mandatory ICU competency CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full critical care nursing credential calendar.',
  alternates: { canonical: '/for/critical-care-nurses' },
  openGraph: {
    title: 'Momenties for Critical Care Nurses',
    description: 'CCRN/PCCN CE renewal, ICU credential management.',
    url: '/for/critical-care-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CCRN, PCCN, and critical care certifications',
    desc: 'AACN Certified Critical Care Registered Nurse (CCRN) and Progressive Care Certified Nurse (PCCN) certifications require 100 CE hours every 3 years in critical care content. CCRN Adult, Pediatric (CCRN-P), and Neonatal (CCRN-N) are separate certifications with independent renewal requirements. PCCN is a distinct progressive care certification. CE must be in critical care content areas. State RN license CE tracked on an independent biennial cycle.',
  },
  {
    icon: Clock,
    title: 'Critical care nurse multi-credential renewal calendar',
    desc: '"CCRN — AACN, 100 CE/3 years." "PCCN — AACN, 100 CE/3 years (if applicable)." "State RN license — biennial CE." "ACLS — 2-year renewal." "BLS — 2-year renewal." "NIHSS certification — annual renewal." "Annual ICU competency assessment." "AACN membership — annual." All critical care nursing credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ACLS, NIHSS, and ICU competency analytics',
    desc: 'Critical care nurses must maintain ACLS biennial renewal independent of CCRN and state RN license cycles. NIH Stroke Scale (NIHSS) certification required for critical care nurses in stroke centers — renews annually. Annual ICU competency assessment required for Joint Commission compliance covering hemodynamic monitoring, ventilator management, and vasopressor administration. Each tracked independently on calendar.',
  },
  {
    icon: Users,
    title: 'AACN, ANA, and critical care nursing professional involvement',
    desc: '"AACN National Teaching Institute (NTI) — may." "AACN ECCO online courses." "SCCM Annual Congress — february." "AANN Annual Educational Meeting (neurocritical care)." "ISPAN annual (perianesthesia critical care)." "Hemodynamic monitoring certification CE." "Sedation and analgesia CE." All critical care nursing professional development on calendar. AACN conference CE tagged by CCRN applicability.',
  },
]

const CC_WORKFLOW = [
  { time: 'Annual planning', action: 'CCRN 3-year 100-CE pace (annualized to 33 CE/year), PCCN pace (if applicable), state RN biennial CE cycle, ACLS 2-year cycle, BLS 2-year cycle, NIHSS annual renewal, annual ICU competency assessment, AACN NTI, and AACN membership all loaded in January. CCRN, PCCN, and state CE paces tracked independently.' },
  { time: 'CE completion', action: '"AACN-approved — hemodynamic monitoring in cardiogenic shock: PA catheter interpretation and vasoactive therapy titration, 4 CE, CCRN applicable." Tagged by applicable certification. CCRN counter updates (cumulative toward 100/3yr target). State RN CE updates if state accepts critical care content. NIHSS annual renewal CE tracked separately — not the same as CCRN CE.' },
  { time: 'ACLS renewal', action: '"ACLS renewal — AHA, 2-year cycle, June." ACLS placed on 2-year renewal cycle independent of CCRN 3-year and state RN biennial. Expired ACLS means the critical care nurse cannot serve as team leader or medication provider in a code situation — a core ICU function. ACLS renewal placed with 90-day advance alert on independent 2-year cycle.' },
  { time: 'NIHSS renewal', action: '"NIHSS certification renewal — annual, Q1." NIHSS placed on annual renewal cycle — different from all other critical care nursing credentials. Annual NIHSS renewal required for nurses in Joint Commission Comprehensive Stroke Center or Primary Stroke Center certified hospitals. NIHSS lapse affects stroke protocol participation eligibility. Annual renewal placed as a January event.' },
  { time: 'Renewal audit', action: 'Analytics: CCRN CE on pace (cumulative toward 100/3yr)? PCCN CE adequate? State RN CE complete? ACLS current? BLS current? NIHSS certification current? Annual ICU competency done? AACN membership active? Complete critical care nursing credential audit 90 days before earliest certification renewal. AACN and state board documentation maintained separately.' },
]

export default function ForCriticalCareNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Critical Care Nurses"
        title={
          <>
            CCRN certification and state license maintained.
            <br />
            <em className="not-italic text-gold">ACLS, NIHSS, and BLS never lapsed.</em>
          </>
        }
        lede="Critical care nurses manage AACN CCRN certification with 100 CE hours over 3 years in critical care content, state RN license biennial CE on an independent cycle, ACLS biennial renewal required for code team participation, annual NIH Stroke Scale certification, annual ICU competency assessments, and professional development simultaneously. Momenties tracks CE by critical care credential, surfaces renewal deadlines 90 days early, and manages the full critical care nursing credential calendar in one view."
        crumbs={[{ label: 'For Critical Care Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How critical care nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for critical care nursing credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Critical care nursing credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CCRN certification and resuscitation cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CC_WORKFLOW.map((step, i) => (
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
                &ldquo;I work in a comprehensive stroke center, which means NIHSS is a required annual renewal — not optional, not biennial. It&apos;s separate from my CCRN, which is 3 years, and my state license, which is biennial, and ACLS, which is 2 years. Four different renewal cycles and only ACLS and BLS happen to align. I kept the NIHSS renewal in my head because &apos;it&apos;s just once a year in January&apos; — and then January arrived and I was behind. A 90-day Momenties alert meant I had NIHSS renewed before I even thought about it. CCRN and state CE running in the background, tracked separately.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lisa N., RN, CCRN</div>
                  <div className="text-xs text-muted-foreground">Critical care nurse, neurocritical care and stroke ICU, comprehensive stroke center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All critical care nursing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AACN CCRN certification CE — 100 hours/3 years',
                'AACN PCCN certification CE — 100 hours/3 years',
                'State RN license CE — biennial renewal',
                'ACLS certification — 2-year renewal',
                'BLS certification — 2-year renewal',
                'NIHSS certification — annual renewal',
                'Annual ICU competency assessment',
                'AACN NTI and conference CE planning',
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
        title="CCRN certification and state license maintained."
        subtitle="CE tracking by certification, ACLS and NIHSS renewal calendar, ICU competency tracking, and critical care nursing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
