import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Chiropractors — CE tracking, team meetings, and practice schedule management',
  description:
    'Chiropractors manage CE license requirements, team meetings, study groups, and continuing education. Momenties tracks CE hours by category, keeps renewal deadlines visible, and templates recurring practice meetings.',
  alternates: { canonical: '/for/chiropractors' },
  openGraph: {
    title: 'Momenties for Chiropractors',
    description: 'CE tracking and practice schedule management for chiropractors.',
    url: '/for/chiropractors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE hours tracked by category',
    desc: 'Tag every CE event by board-required category: spinal manipulation, ethics, clinical topics, technique seminars. Analytics shows accumulation by category. License renewal without the year-end scramble.',
  },
  {
    icon: Calendar,
    title: 'Practice meeting templates',
    desc: 'Monthly team huddle, quarterly goal review, annual staff performance cycle — all templated. Apply once per cycle. Every meeting on calendar before January ends.',
  },
  {
    icon: Clock,
    title: 'License and CPR renewal deadlines',
    desc: '"Chiropractic license renewal july 31." "CPR recertification march." "Malpractice renewal november." All compliance deadlines on calendar. All visible in Daily Brief as dates approach.',
  },
  {
    icon: BarChart3,
    title: 'Non-clinical time analytics',
    desc: 'Track study groups, association meetings, CE seminars, and admin separately from clinical hours. See how much time per month goes outside the adjusting room. Inform decisions about CE efficiency.',
  },
]

const CHIRO_WORKFLOW = [
  { time: 'January', action: 'Annual CE audit: current hours per category, identify gaps, add planned conferences and seminars to calendar for the year.' },
  { time: 'Monthly', action: 'Team huddle (templated, 45 mins, first Monday). Created for all 12 months in January. Zero scheduling overhead.' },
  { time: 'Seminar', action: '"Technique seminar saturday june 8, 6 hours, clinical CE." Tagged to category. CE counter updates. Certificate reminder added 2 weeks post-event.' },
  { time: 'Q3 check', action: 'CE analytics: 18/30 required hours, 3 categories fully satisfied, ethics still needs 4 hours. 4 months remaining — enough time to plan.' },
  { time: 'Renewal month', action: 'License renewal visible in Daily Brief for 60 days prior. Documents checklist on calendar. Submission deadline blocked. Nothing expires quietly.' },
]

export default function ForChiropractorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Chiropractors"
        title={
          <>
            Every CE hour counted.
            <br />
            <em className="not-italic text-gold">No renewal missed.</em>
          </>
        }
        lede="Chiropractors balance clinical hours with CE requirements, association involvement, study groups, and practice management. Momenties tracks CE by category, surfaces renewal deadlines before they're urgent, and keeps practice meetings scheduled without overhead."
        crumbs={[{ label: 'For Chiropractors' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How chiropractors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for chiropractic practices.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Practice and CE management through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {CHIRO_WORKFLOW.map((step, i) => (
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
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-1.5">Calendar only. Zero patient data.</h3>
              <p className="text-xs text-muted-foreground mb-4">Momenties tracks your schedule and CE hours, not patient records, treatment plans, or billing information.</p>
              <div className="space-y-2">
                {[
                  'No patient names or health information processed',
                  'AI reads only event text you type',
                  'CE tracking by category, not patient outcomes',
                  'GDPR-compliant data handling',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="CE tracked. Renewals visible. Practice meetings templated."
        subtitle="Category analytics, deadline reminders, and recurring meeting templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
