import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Registered Nurses — CE tracking, RN license renewals, and specialty certifications',
  description:
    'Registered nurses manage CE requirements for state RN license renewals, specialty certification maintenance, BLS/ACLS/PALS recertifications, and professional development calendars simultaneously. Momenties tracks CE credits, surfaces renewal deadlines 90 days early, and manages the non-clinical calendar.',
  alternates: { canonical: '/for/registered-nurses' },
  openGraph: {
    title: 'Momenties for Registered Nurses',
    description: 'CE tracking, RN license renewals, and specialty certification management for nurses.',
    url: '/for/registered-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RN license renewal',
    desc: 'Tag every continuing education activity by category: clinical practice, pharmacology, ethics, specialty topics. Track hours toward your state\'s RN renewal requirement. Some states require specific CE categories — all tracked separately. 2-year renewal cycle monitored throughout, not discovered in the final month.',
  },
  {
    icon: Clock,
    title: 'Multi-credential renewal calendar',
    desc: '"RN license renewal — state board, october 31." "BLS — 2-year, april." "ACLS — 2-year, october." "PALS — 2-year, march." "Specialty certification — CCRN, 3-year cycle." All nursing credentials with 90-day advance alerts. No credential lapses between shifts.',
  },
  {
    icon: BarChart3,
    title: 'Professional development analytics',
    desc: 'Tag CE events, specialty certification study, nursing conferences, and continuing competence activities separately. Analytics shows professional development hours per year and per category. Which specialty certifications are you building toward? Track the development path visibly.',
  },
  {
    icon: Users,
    title: 'Professional meetings and specialty development',
    desc: '"ANA annual conference." "Specialty nursing society meeting." "Unit-based education — monthly." "Certification study group — weekly." All professional development and community commitments on calendar. Consistent development that certification maintenance requires.',
  },
]

const RN_WORKFLOW = [
  { time: 'Annual planning', action: 'State RN license renewal date, BLS/ACLS/PALS recertification dates, specialty certification renewal dates, and CE requirements all on calendar. 90-day alerts on every credential. CE pace calculated — hours per quarter to finish before the deadline.' },
  { time: 'CE completion', action: '"ANA-approved online module — clinical pharmacology, tuesday 8pm, 2 hours, pharmacology CE." Tagged and added. Category counter updates. State-mandated CE topics tracked separately. No gap discovered during license renewal audit.' },
  { time: 'Specialty certification', action: '"CCRN renewal — exam scheduled, november 15." "CCRN certification study group — thursdays 6pm." Study blocks scheduled 3 months before the exam. Certification content areas prioritized based on practice gaps.' },
  { time: 'BLS/ACLS renewal', action: '"ACLS recertification — saturday, 8-hour course." Tagged and added. 2-year expiration updated in calendar. Hospital credential renewal requiring current ACLS will not catch you without it when the renewal window opens.' },
  { time: 'License audit', action: 'Analytics: CE progress by category. State-mandated topics complete? Total hours vs. renewal requirement? Specialty certification maintenance on track? Time to complete remaining CE before the license renewal deadline.' },
]

export default function ForRegisteredNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Registered Nurses"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Registered nurses manage continuing education requirements for state RN license renewals, specialty certification maintenance, BLS and ACLS recertifications, and professional development simultaneously. Momenties tracks CE by category, surfaces renewal deadlines 90 days early, and manages the professional calendar in one view."
        crumbs={[{ label: 'For Registered Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How registered nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for nursing license and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Professional calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {RN_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold a CCRN certification and my hospital requires current ACLS and BLS at all times. Plus my state RN license needs 30 CEs per 2-year cycle. I was managing all of this in my head and getting nervous every time a credentialing window opened. Momenties gave me a complete calendar with 90-day alerts on everything. I renewed my CCRN last month — first time I went in fully prepared.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">O</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Olivia R., RN, CCRN</div>
                  <div className="text-xs text-muted-foreground">ICU nurse, level 1 trauma center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All nursing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE credits by category — state RN renewal',
                'State RN license renewal deadline',
                'BLS — 2-year recertification',
                'ACLS — 2-year recertification',
                'PALS — 2-year recertification (if required)',
                'Specialty certifications (CCRN, CEN, CNOR)',
                'Hospital credentialing renewal',
                'ANA and specialty nursing society membership',
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
        title="Every credential current. CE never scrambled."
        subtitle="CE tracking by category, multi-credential renewals, and nursing professional calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
