import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Clock, BarChart3, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nurses — Shift scheduling, continuing education, and off-duty protection',
  description:
    'Nurses juggle rotating shifts, mandatory continuing education deadlines, and precious off-duty time. Momenties makes shift logging instant, tracks CE hours by category, and protects recovery time.',
  alternates: { canonical: '/for/nurses' },
  openGraph: {
    title: 'Momenties for Nurses',
    description: 'Shift scheduling, CE tracking, and off-duty protection.',
    url: '/for/nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Fast shift logging',
    desc: '"ICU night shift thursday 7pm to 7am." Logged. Tagged. No form, no app-switching from your phone at the end of a 12-hour shift. Voice works too.',
  },
  {
    icon: BarChart3,
    title: 'CE hours by category',
    desc: 'Tag CE events by type (pharmacology, patient safety, ethics). Analytics shows hours per category. Know where you stand before license renewal, not the day before.',
  },
  {
    icon: Shield,
    title: 'Recovery time protection',
    desc: 'After a 12-hour night shift, sleep and recovery are non-negotiable. Block recovery time and protect it with Focus mode. No one schedules over your sleep.',
  },
  {
    icon: Clock,
    title: 'Continuing education deadlines',
    desc: '"CE deadline pharmacology credit dec 31." Voice-added, tagged, visible. Renewal deadlines for certifications, licenses, and hospital requirements never missed.',
  },
]

const NURSING_WORKFLOW = [
  { time: 'Shift pickup', action: '"Day shift pediatrics monday 7am to 7pm." Voice-added in 5 seconds. Tagged to unit.' },
  { time: 'After shift', action: 'CE module completed. "2 CEUs patient safety module tonight." Added to CE tracker tag.' },
  { time: 'License renewal', action: 'Analytics shows CE hours by category. Pharmacology: 6h ✓, Ethics: 2h ✓, Patient safety: 4h ✓. All requirements met.' },
  { time: 'Recovery days', action: 'Post-nightshift recovery blocked and protected. Focus mode active. Phone quiet.' },
  { time: 'Annual review', action: 'Total shifts per unit, CE hours per category, overtime logged. Complete picture for performance review.' },
]

export default function ForNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nurses"
        title={
          <>
            Shift tracking.
            <br />
            <em className="not-italic text-gold">CE hours handled.</em>
          </>
        }
        lede="Nurses carry some of the most demanding schedules in any profession — rotating shifts, continuing education requirements, and precious off-duty recovery time. Momenties makes all three manageable in seconds."
        crumbs={[{ label: 'For Nurses' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Voice input included · Works on mobile</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that matter.</h2>
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

      {/* Nursing workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Nursing schedule with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {NURSING_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I track all my CE hours with tags. When my renewal comes up I just pull the analytics — every category, every hour, right there. I haven\'t had to scramble for credits at the last minute since I started.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rachel M.</div>
                  <div className="text-xs text-muted-foreground">ICU RN, 8 years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your shifts. Your CE hours. Your recovery time."
        subtitle="All three handled in seconds. Free plan available — voice input included."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
