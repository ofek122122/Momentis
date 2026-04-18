import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Journalists — Source calls, deadline tracking, and writing time protection',
  description:
    'Journalists manage source calls, publication deadlines, interview schedules, and writing time simultaneously. Momenties captures every deadline the moment it\'s assigned and protects writing blocks from calendar creep.',
  alternates: { canonical: '/for/journalists' },
  openGraph: {
    title: 'Momenties for Journalists',
    description: 'Deadline capture and writing time protection.',
    url: '/for/journalists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Clock,
    title: 'Deadline capture as it happens',
    desc: '"Breaking news piece deadline today 5pm." "Feature on climate deadline friday EOD." "Investigative pitch due to editor monday morning." Voice-added the moment the assignment arrives.',
  },
  {
    icon: Shield,
    title: 'Writing time that survives the week',
    desc: '"Writing block every morning 8-11am." Protected by Focus mode. No new source calls booked in the block. No notifications. The piece gets written because the calendar defends the time.',
  },
  {
    icon: Zap,
    title: 'Source call scheduling in seconds',
    desc: '"Source call with Dr. Chen thursday 2pm 30 mins." On calendar before you close the email. Tagged to the story. No double-booking another call over a source.',
  },
  {
    icon: BarChart3,
    title: 'Story time tracking',
    desc: 'Tag all work by story. Analytics shows hours per piece. Understand which investigations are consuming your capacity — useful for pitch negotiations and workload conversations.',
  },
]

const JOURNALIST_WEEK = [
  { time: 'Assignment', action: '"Feature deadline friday 5pm." Voice-added immediately. On calendar. Visible all week.' },
  { time: 'Source calls', action: 'Four source calls across the week. All added in under 10 seconds each. Tagged to the story.' },
  { time: 'Morning', action: 'Writing block 8-11am. Protected. Focus mode active. Phone quiet. The draft moves forward.' },
  { time: 'Wednesday', action: 'Breaking news assigned. New deadline: wednesday 6pm. Voice-added. Calendar immediately reflects the shift.' },
  { time: 'Friday', action: 'Analytics: feature piece 14h, breaking news 4h, admin 2h. Accurate time investment for rate conversations.' },
]

export default function ForJournalistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Journalists"
        title={
          <>
            Deadlines never missed.
            <br />
            <em className="not-italic text-gold">Writing time defended.</em>
          </>
        }
        lede="Journalists live in deadline pressure and reactive scheduling. Momenties captures every deadline the instant it's assigned, protects writing blocks from being scheduled over, and tracks story time without a separate tool."
        crumbs={[{ label: 'For Journalists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-mode"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus mode
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Voice input for on-the-go capture · Mobile-first</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How journalists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for deadline-driven work.</h2>
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

      {/* Journalist week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A journalist's week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {JOURNALIST_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
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
                &ldquo;I voice-add every deadline the moment my editor mentions it. Used to miss the odd one because I'd think "I'll put it in later." Now I don't miss any. The calendar is always current.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Peter H.</div>
                  <div className="text-xs text-muted-foreground">Staff writer, national newspaper</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The deadline is captured. The writing time is protected."
        subtitle="Voice capture, Focus mode, and story analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See Focus mode', href: '/focus-mode' }}
      />
    </>
  )
}
