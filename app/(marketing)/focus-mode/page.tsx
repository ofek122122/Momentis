import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Focus, BellOff, Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Focus mode — Protect your deep work from your calendar',
  description:
    'Momenties Focus mode automatically enables DND during your scheduled focus blocks, warns people who try to book over them, and tracks how often you actually protect your deep work time.',
  alternates: { canonical: '/focus-mode' },
  openGraph: {
    title: 'Momenties Focus Mode',
    description: 'Scheduled focus time that actually holds.',
    url: '/focus-mode',
    type: 'website',
  },
}

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Mark a block as focus time',
    desc: 'Create a calendar event and tag it as Focus. You can use templates to create recurring weekly focus blocks in seconds.',
  },
  {
    step: '02',
    title: 'Momenties auto-enables DND',
    desc: 'When a focus block starts, Momenties enables system-level Do Not Disturb. Desktop and mobile notifications pause automatically.',
  },
  {
    step: '03',
    title: 'Attendee warnings fire',
    desc: 'If someone tries to book a meeting during your focus window, they see a note: "This overlaps with a scheduled focus block." They can still book, but they know.',
  },
  {
    step: '04',
    title: 'Analytics tracks compliance',
    desc: 'The analytics tab shows how often your focus blocks actually held vs. how often you accepted a meeting into them. Visibility creates accountability.',
  },
]

const STATS = [
  { value: '88%', label: 'Focus block compliance for users with focus mode on vs 43% without' },
  { value: '2.3×', label: 'Increase in uninterrupted 90-min work sessions after enabling' },
  { value: '15 min', label: 'Average time saved per day from proactive attendee warnings' },
]

export default function FocusModePage() {
  return (
    <>
      <PageHero
        eyebrow="Focus mode · Pro feature"
        title={
          <>
            Your focus blocks
            <br />
            <em className="not-italic text-gold">that actually hold.</em>
          </>
        }
        lede="You schedule focus time. It gets trampled. Momenties Focus mode auto-enables DND, warns people who try to book over you, and tracks whether your protected time is actually protected."
        crumbs={[{ label: 'Focus mode' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Enable focus mode <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pro"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See Pro features
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Pro feature · 14-day free trial</p>
      </PageHero>

      {/* Stats */}
      <section className="py-14 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 70}>
                <div className="rounded-xl border border-border p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gold mb-2">{stat.value}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-xs text-muted-foreground/50 mt-4 font-mono text-center">
              Based on anonymised aggregate data from Pro users, April 2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four things that happen when you use focus mode.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="flex items-start gap-5 rounded-xl border border-border/50 p-5">
                  <div className="w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-gold/70">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why focus blocks fail */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The problem</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Why most focus blocks fail.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Adding a "Deep Work" block to your calendar doesn&apos;t protect it. Colleagues who can see your calendar still book over it. Notifications still arrive. You still check them.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The block is a signal to yourself, not a barrier to the world. And signals that require manual enforcement fail. You&apos;re not going to reject a meeting from your manager because "I have a focus block."
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Focus mode changes the default. Instead of manually protecting your time each time someone tries to book over it, the warning fires automatically. You still get to decide — but now you decide explicitly, not by accident.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The analytics layer closes the loop. If your blocks are being overridden, you&apos;ll see it. Most people look at that number once and change their behavior. The act of measurement is itself protective.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What it doesn't do */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Limitations</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              What it doesn&apos;t do.
            </h2>
          </Reveal>
          <div className="space-y-2">
            {[
              { item: 'It doesn\'t block meetings automatically', note: 'Attendees get a warning, but can still book. The final call is always yours.' },
              { item: 'It doesn\'t block websites or apps', note: 'Momenties is a calendar tool, not a distraction blocker. Use Focus mode alongside tools like Focus (macOS) or Freedom.' },
              { item: 'DND on mobile requires the Momenties app', note: 'System DND integration on iOS and Android ships with the mobile app in Q4 2026.' },
            ].map((l, i) => (
              <Reveal key={l.item} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{l.item}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{l.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Start protecting the hours that matter."
        subtitle="Focus mode activates the moment you start your Pro trial."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'See all Pro features', href: '/pro' }}
      />
    </>
  )
}
