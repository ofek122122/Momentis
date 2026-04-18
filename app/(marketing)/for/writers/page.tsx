import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, BarChart3, Shield, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Writers — Protect writing time. Hit every deadline.',
  description:
    'Writers need protected blocks for deep work, deadline tracking across projects, and a calendar that doesn\'t interrupt flow. Momenties adds fast deadline capture, focus protection, and writing analytics.',
  alternates: { canonical: '/for/writers' },
  openGraph: {
    title: 'Momenties for Writers',
    description: 'Protect writing time. Hit every deadline.',
    url: '/for/writers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Protected writing blocks',
    desc: '"Writing block every morning 8–11am." Focus mode enforces it. Notifications pause. Meeting requests get a warning. The block survives.',
  },
  {
    icon: Zap,
    title: 'Deadline capture in seconds',
    desc: 'Editor says "piece due March 20." Voice-add it before the call ends: "article deadline March 20." Done. On calendar.',
  },
  {
    icon: BarChart3,
    title: 'Writing vs. admin ratio',
    desc: 'Analytics shows how many hours were in actual writing vs. emails, calls, and admin. Most writers who look adjust their calendar immediately.',
  },
  {
    icon: Clock,
    title: 'Research and revision blocks',
    desc: '"Research for feature piece tuesday 2–4pm." Or "revision round magazine piece thursday morning." Specific, scheduled, protected.',
  },
]

const WRITING_WEEK = [
  { time: 'Morning', action: 'Writing block, protected by Focus mode. 8–11am. No interruptions, no meeting requests getting through.' },
  { time: 'Editor call', action: 'Three new deadlines mentioned. Voice-add them mid-call. All three on calendar before the call ends.' },
  { time: 'Wednesday', action: 'Pitch deadline this week. Analytics confirms you have 6 hours of protected writing time between now and Friday.' },
  { time: 'Friday', action: 'Review analytics. How much writing time this week vs. last? Are you protecting enough, or is admin creeping in?' },
]

export default function ForWritersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Writers"
        title={
          <>
            Protect the writing.
            <br />
            <em className="not-italic text-gold">Hit every deadline.</em>
          </>
        }
        lede="Writing requires protected time and deadline discipline. Momenties makes blocking writing time instant, enforces it with Focus mode, and captures deadlines as fast as editors announce them."
        crumbs={[{ label: 'For Writers' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Focus mode on Pro trial</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How writers use Momenties</p>
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

      {/* Writing week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Weekly flow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A writing week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {WRITING_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
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
                &ldquo;I voice-add every deadline as soon as my editor mentions it. I\'ve missed exactly zero deadlines since I started doing that. The calendar is the memory I don\'t have.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">O</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Olivia H.</div>
                  <div className="text-xs text-muted-foreground">Freelance journalist and essayist</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The writing happens in the protected time. Build the protection."
        subtitle="Focus mode, fast capture, deadline tracking. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See Focus mode', href: '/focus-mode' }}
      />
    </>
  )
}
