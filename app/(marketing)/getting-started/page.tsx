import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  UserPlus, Link2, Zap, Mic, Keyboard, Calendar, ArrowRight,
  CheckCircle2, Clock, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Getting Started — Your first 10 minutes with Momenties',
  description:
    'From zero to scheduled in 10 minutes. Connect your calendar, add your first events, and learn the three things that make Momenties worth keeping.',
  alternates: { canonical: '/getting-started' },
  openGraph: {
    title: 'Getting Started with Momenties',
    description: 'From sign-up to power user in 10 minutes.',
    url: '/getting-started',
    type: 'article',
  },
}

const STEPS = [
  {
    icon: UserPlus,
    duration: '1 min',
    title: 'Create your account',
    desc: 'Sign in with Google. That\'s it. We don\'t ask for a name, company, or job title. The product doesn\'t need to know.',
    tip: 'Use the same Google account that manages your existing calendar for the smoothest sync.',
    cta: { label: 'Sign in with Google', href: '/login' },
  },
  {
    icon: Link2,
    duration: '30 sec',
    title: 'Connect Google Calendar',
    desc: 'Settings → Calendars → Connect Google Calendar. Two-way sync starts immediately. Your existing events appear in Momenties; new events go back to Google.',
    tip: 'You can connect multiple Google accounts — personal, work, or both.',
    cta: { label: 'Open Settings', href: '/login' },
  },
  {
    icon: Zap,
    duration: '2 min',
    title: 'Add your first event',
    desc: 'Click the input bar (or press N). Type anything: "standup every weekday 9am" or "dentist friday 3pm". Watch it parse in real time.',
    tip: 'Try something with recurrence — "yoga every tuesday and thursday at 7am". Momenties generates the full RRULE automatically.',
    cta: { label: 'Open the calendar', href: '/login' },
  },
  {
    icon: Mic,
    duration: '1 min',
    title: 'Try voice add',
    desc: 'Hold the microphone button and say an event out loud. Deepgram transcribes it, the parser understands it. Two seconds start to finish.',
    tip: 'Voice works without unlocking your phone on mobile (coming Q4 2026 with the native app).',
    cta: null,
  },
  {
    icon: Keyboard,
    duration: '5 min',
    title: 'Learn 5 shortcuts',
    desc: 'N → add event. T → today. J → next day. K → previous day. / → search. These five cover 90% of everyday use.',
    tip: 'Press ? anywhere in the app to see the full keyboard reference.',
    cta: { label: 'View all shortcuts', href: '/keyboard' },
  },
]

const FAQS = [
  {
    q: 'Will Momenties delete my existing Google Calendar events?',
    a: 'No. Momenties is read/write but never destructive without your explicit action. Your existing events appear in Momenties; we only delete what you ask us to delete.',
  },
  {
    q: 'How does the AI parsing work?',
    a: 'We use a two-stage approach: chrono-node (local, fast, free) handles 75% of inputs. Gemini 2.5 Flash handles the other 25%. Only the text of your input is sent to Gemini — never your calendar history or profile.',
  },
  {
    q: 'What if I type something and it parses wrong?',
    a: 'Click the event to edit it. Or delete and retype more clearly. Common pattern: add a comma before the time — "dentist, friday 3pm" is slightly more explicit than "dentist friday 3pm."',
  },
  {
    q: 'Can I use Momenties without connecting Google Calendar?',
    a: 'Yes. Momenties has its own internal calendar. You can add events and view them without any sync. Connect Google when you\'re ready.',
  },
  {
    q: 'I have Apple Calendar, not Google. Can I still use this?',
    a: 'Apple Calendar sync is available on the Pro plan. Settings → Calendars → Connect Apple Calendar. You\'ll need an app-specific password from appleid.apple.com.',
  },
]

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting started"
        title={
          <>
            From sign-up to
            <br />
            <em className="not-italic text-gold">power user in 10 minutes.</em>
          </>
        }
        lede="Everything you need to know to get full value from Momenties — the three inputs, the two sync modes, and the five shortcuts that change how you work."
        crumbs={[{ label: 'Getting started' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            ~10 minutes
          </div>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
          >
            Start for free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Steps */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-0">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 50}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                  )}

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center shrink-0 z-10">
                    <step.icon className="h-5 w-5 text-gold" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold/60">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.desc}</p>

                    {/* Tip */}
                    <div className="flex items-start gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2.5 mb-4">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold/60 shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground/90 leading-relaxed">{step.tip}</p>
                    </div>

                    {step.cta && (
                      <Link
                        href={step.cta.href}
                        className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                      >
                        {step.cta.label} <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* After 10 minutes */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What comes next</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Go deeper when you&apos;re ready.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Photo-to-calendar', desc: 'Snap a printed schedule and have every event added in one step.', href: '/product', icon: Calendar },
              { title: 'Smart scheduling', desc: 'Add an event without a time — let Momenties find the best slot.', href: '/features', icon: Zap },
              { title: 'CLI access', desc: 'Add events from your terminal. Pipe schedules directly into your calendar.', href: '/cli', icon: Keyboard },
              { title: 'Integrations', desc: 'Connect Slack, Zoom, Notion, and 60+ other tools.', href: '/integrations', icon: Link2 },
              { title: 'Learn: power-user course', desc: 'A one-hour guided course that covers every feature.', href: '/learn', icon: Calendar },
              { title: 'Help center', desc: 'Every question, every edge case, written down.', href: '/help', icon: CheckCircle2 },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 40}>
                <Link
                  href={item.href}
                  className="group block rounded-xl border border-border lux-card p-5 hover:border-gold/30 transition-colors"
                >
                  <item.icon className="h-5 w-5 text-gold mb-3" />
                  <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">FAQ</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Common questions.</h2>
          </Reveal>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="border-b border-border/60 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <div className="mt-10 flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">More questions?</span>
              <Link href="/help" className="text-gold hover:text-gold/80 transition-colors inline-flex items-center gap-1">
                Help center <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="You&apos;re ready."
        subtitle="Start with the free plan. Upgrade when you know you want to."
        primary={{ label: 'Create your account', href: '/login' }}
        secondary={{ label: 'Watch the product tour', href: '/product' }}
      />
    </>
  )
}
