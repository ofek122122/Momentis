import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Shield, Clock, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for HR Managers — SHRM certification, compliance deadlines, and people calendar',
  description:
    'HR managers manage SHRM-CP or SHRM-SCP recertification requirements, compliance filing deadlines, performance review cycles, hiring calendars, and benefits open enrollment simultaneously. Momenties tracks PDCs toward recertification, surfaces compliance deadlines, and manages the people operations calendar.',
  alternates: { canonical: '/for/human-resources-managers' },
  openGraph: {
    title: 'Momenties for HR Managers',
    description: 'SHRM certification, compliance deadlines, and people operations calendar for HR.',
    url: '/for/human-resources-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'SHRM recertification and PDC tracking',
    desc: 'Tag every professional development activity by SHRM PDC category: education, on-the-job learning, volunteering, leadership. Track credits toward the 60 PDC requirement per 3-year SHRM-CP or SHRM-SCP recertification cycle. PHR/SPHR HRCI credits tracked separately.',
  },
  {
    icon: Clock,
    title: 'Compliance and filing deadline calendar',
    desc: '"ACA reporting — january 31." "EEO-1 filing — march 31." "OSHA 300A posting — february 1." "Benefits open enrollment — november 1-15." "W-2 distribution — january 31." Every regulatory deadline on calendar. Nothing missed from a compliance calendar scattered across systems.',
  },
  {
    icon: Users,
    title: 'People operations rhythm',
    desc: '"Performance reviews — Q4, all managers." "Mid-year check-ins — june." "New hire orientations — first monday monthly." "Benefits renewal decision — october." "Compensation review — annual, Q3." All people calendar commitments templated and recurring.',
  },
  {
    icon: BarChart3,
    title: 'Time per HR function analytics',
    desc: 'Tag every meeting and working session by HR function: recruiting, employee relations, compliance, learning and development, benefits. Analytics shows how HR time distributes. Which functions are consuming the most hours? Is time allocation matching organizational priorities?',
  },
]

const HR_WORKFLOW = [
  { time: 'Annual planning', action: 'All compliance filing deadlines, benefits enrollment windows, performance review cycles, and SHRM recertification milestones loaded at year start. People operations calendar visible before the first urgent HR issue arrives.' },
  { time: 'Compliance cycle', action: '"EEO-1 filing — march 31." Added with 90-day alert. Data collection block added 6 weeks prior. HRIS report scheduled 4 weeks prior. Review and submission block added 1 week prior. Compliance deadlines become planned projects, not last-minute scrambles.' },
  { time: 'PDC credits', action: '"SHRM virtual learning session — performance management, wednesday 1pm, 2 hours, education PDC." Tagged and added. 3-year cycle counter updates. No searching for 60 PDCs in the final quarter before the recertification deadline.' },
  { time: 'Performance cycle', action: '"Q4 performance reviews — manager calibration, november 15." "Employee reviews — november 20-december 5." "Compensation decisions — december 10." Full cycle templated. Every HR calendar touchpoint from manager calibration to final rating visible.' },
  { time: 'SHRM audit', action: 'Analytics: PDC progress by category. 3-year cycle on track? Education credits sufficient? Time to register for SHRM national conference or local chapter events to close the PDC gap before recertification.' },
]

export default function ForHumanResourcesManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for HR Managers"
        title={
          <>
            Compliance never missed.
            <br />
            <em className="not-italic text-gold">SHRM certification current.</em>
          </>
        }
        lede="HR managers manage SHRM recertification PDC requirements, regulatory compliance filing deadlines, performance review cycles, benefits enrollment windows, and hiring calendars simultaneously. Momenties tracks PDCs toward recertification, surfaces compliance deadlines 90 days early, and manages the people operations calendar in one view."
        crumbs={[{ label: 'For HR Managers' }]}
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
            HR analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No employee data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How HR managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for HR practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">HR calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Compliance, certification, and people operations with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {HR_WORKFLOW.map((step, i) => (
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
                &ldquo;I manage HR for 200 employees and the compliance calendar alone is overwhelming — EEO-1, ACA, OSHA postings, benefits deadlines, W-2s. I used to keep all of this in a spreadsheet. Now every compliance deadline is on Momenties with a 90-day alert and a backwards-planned work schedule. We haven&apos;t had a compliance miss in two years.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Laura H., SHRM-SCP</div>
                  <div className="text-xs text-muted-foreground">HR Director, mid-market company</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">HR deadlines tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every HR and people operations deadline on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'SHRM PDCs by category — 3-year cycle',
                'SHRM-CP / SHRM-SCP recertification deadline',
                'EEO-1, ACA, OSHA compliance filings',
                'Benefits open enrollment window',
                'Performance review cycle dates',
                'W-2 and tax document distribution',
                'New hire orientation schedule',
                'SHRM national and chapter events',
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
        title="Compliance current. Certification on track. People ops managed."
        subtitle="SHRM PDC tracking, compliance deadline management, and HR time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'HR analytics', href: '/features/analytics' }}
      />
    </>
  )
}
