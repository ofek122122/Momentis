import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Physician Assistants — CME tracking, NCCPA renewal, and PA license management',
  description:
    'Physician assistants manage 100 CME hours per 2-year NCCPA cycle, Pathway to Excellence recertification, state PA license renewals, DEA registration, and specialty certification maintenance simultaneously. Momenties tracks CME by category, surfaces renewal deadlines 90 days early, and manages the full PA credential calendar.',
  alternates: { canonical: '/for/physician-assistants' },
  openGraph: {
    title: 'Momenties for Physician Assistants',
    description: 'CME tracking, NCCPA renewal, and PA credential management.',
    url: '/for/physician-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for NCCPA certification',
    desc: 'NCCPA requires 100 CME hours per 2-year cycle with a minimum of 50 Category 1 hours. Tag every CME activity by category: Category 1 (approved, formal), Category 2 (self-study, informal). NCCPA also requires at least 50 CME hours in specialty content for Pathway to Excellence. All tracked separately.',
  },
  {
    icon: Clock,
    title: 'PA multi-credential renewal calendar',
    desc: '"PA-C certification — NCCPA, 2-year cycle, december." "State PA license — renewal, october." "DEA registration — 3-year, august." "BLS/ACLS — 2-year." "PANRE exam — 10-year." All PA credentials with 90-day advance alerts. No credential gap between shifts at any practice site.',
  },
  {
    icon: BarChart3,
    title: 'CME category analytics and PANRE prep',
    desc: 'Tag Category 1 vs. Category 2 CME, specialty content vs. general medicine, and PANRE exam prep separately. Analytics shows category balance throughout the 2-year NCCPA cycle. Are you on track for 50 Category 1 hours with 6 months remaining? Data answers the question without a spreadsheet audit.',
  },
  {
    icon: Users,
    title: 'Professional development and specialty growth',
    desc: '"AAPA National Conference — may." "State PA society meeting — annual." "Specialty society (ACEP, ACOI) CME conference — october." "Hospital credentialing renewal — annual." All PA professional commitments on calendar. Consistent development sustains both clinical skills and NCCPA requirements.',
  },
]

const PA_WORKFLOW = [
  { time: 'Annual planning', action: 'NCCPA certification renewal date, state PA license deadline, DEA expiration, PANRE exam date (10-year cycle), and BLS/ACLS recertification all loaded in January. 90-day alerts on every credential. CME completion pace calculated for both the annual and 2-year windows.' },
  { time: 'CME events', action: '"AAPA Category 1 CME — pharmacology update, saturday, 4 hours, specialty content." Tagged by NCCPA category and topic. Category 1 counter and specialty content counter both update. Running total visible at any point in the 2-year cycle.' },
  { time: 'PANRE preparation', action: '"PANRE exam — scheduled, november 8." "PANRE review course — september 6-8." Study blocks placed 3 months before the exam. High-yield topic areas identified from NCCPA blueprint. 10-year cycle managed as a known future date, not a surprise.' },
  { time: 'State license', action: '"PA license renewal — state board, october 31." State-mandated CME requirements may differ from NCCPA requirements. Hours for state renewal tracked separately. Dual-state practice requires two sets of state renewal dates on calendar.' },
  { time: 'Renewal audit', action: 'Analytics: CME progress by category. Category 1 minimum met? Specialty content on track? State CE requirements complete? DEA renewal initiated? Time remaining before NCCPA cycle closes? Complete credential audit in one view.' },
]

export default function ForPhysicianAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Physician Assistants"
        title={
          <>
            Certification maintained.
            <br />
            <em className="not-italic text-gold">CME never scrambled.</em>
          </>
        }
        lede="Physician assistants manage 100 CME hours per 2-year NCCPA cycle with Category 1 minimums, state PA license renewals, DEA registration, PANRE exam preparation, and specialty certification maintenance simultaneously. Momenties tracks CME by category, surfaces renewal deadlines 90 days early, and manages the full PA credential calendar in one view."
        crumbs={[{ label: 'For Physician Assistants' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How physician assistants use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for PA credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">PA credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {PA_WORKFLOW.map((step, i) => (
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
                &ldquo;I work in emergency medicine and my CME has to serve both NCCPA renewal and my state board. The category requirements are different — 50 Category 1 for NCCPA, 20 specifically in emergency medicine for the state. I was double-counting and missing the state requirement until Momenties. Now I track both separately and I can see exactly which hours count toward which requirement.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rafael M., PA-C</div>
                  <div className="text-xs text-muted-foreground">Emergency medicine PA, level 2 trauma center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All PA credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CME hours by category — NCCPA 2-year cycle',
                'Category 1 vs. Category 2 CME tracking',
                'State PA license renewal deadline',
                'DEA registration — 3-year renewal',
                'BLS/ACLS recertification — 2-year',
                'PANRE exam — 10-year cycle preparation',
                'Hospital credentialing renewal',
                'AAPA and specialty society conferences',
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
        title="Certification maintained. CME never scrambled."
        subtitle="CME tracking by category, multi-credential renewal calendar, and PA professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
