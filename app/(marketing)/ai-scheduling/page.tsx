import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, Zap, Brain, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI scheduling — Smarter calendar, not a smarter form',
  description:
    'AI scheduling means different things to different products. Here\'s exactly what Momenties\' AI does: fast natural language parsing, smart slot suggestions, Daily Brief, and voice input.',
  alternates: { canonical: '/ai-scheduling' },
  openGraph: {
    title: 'AI scheduling that actually makes sense',
    description: 'Fast parsing. Smart suggestions. Not a chatbot.',
    url: '/ai-scheduling',
    type: 'website',
  },
}

const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Natural language event creation',
    desc: 'Type "lunch with Maria next wednesday at noon at the office" and the event is created. No form, no clicks, no dropdowns. Under 20ms for most inputs.',
    href: '/natural-language-calendar',
  },
  {
    icon: Brain,
    title: 'Contextual parsing',
    desc: 'Gemini 2.5 Flash handles the edge cases chrono-node can\'t: "before the board meeting", "sometime next quarter", "around 3pm". AI fills the gap.',
    href: '/ai',
  },
  {
    icon: Clock,
    title: 'Smart slot suggestions',
    desc: 'When you need to schedule something but don\'t have a specific time in mind, smart scheduling scans your free windows and suggests optimal slots based on your existing patterns.',
    href: '/features',
  },
]

const PIPELINE = [
  { step: '1', name: 'You type', detail: '"dentist thursday 3pm for an hour"', timing: '0ms' },
  { step: '2', name: 'Debounce', detail: '250ms wait to avoid calling on every keystroke', timing: '0–250ms' },
  { step: '3', name: 'chrono-node', detail: 'Local parse attempt. Handles 75% of inputs.', timing: '18ms' },
  { step: '4', name: 'Gemini (if needed)', detail: 'AI fallback for ambiguous or complex inputs', timing: '+280ms' },
  { step: '5', name: 'Preview', detail: 'Parsed event shown before you confirm', timing: 'Instant' },
  { step: '6', name: 'Confirm', detail: 'Press enter or click. Event created.', timing: 'Instant' },
]

const WHAT_IT_ISNT = [
  { label: 'An AI chatbot', note: 'You don\'t have a conversation about your calendar. You type events the way you\'d text them to a friend.' },
  { label: 'Auto-scheduling', note: 'Momenties doesn\'t move your existing events or auto-fill your calendar. You stay in control of what goes where.' },
  { label: 'Predictive AI', note: 'We don\'t predict what you\'ll want to add next. We just make adding things much faster when you decide to.' },
]

export default function AISchedulingPage() {
  return (
    <>
      <PageHero
        eyebrow="AI scheduling"
        title={
          <>
            Smarter calendar,
            <br />
            <em className="not-italic text-gold">not a smarter form.</em>
          </>
        }
        lede="AI scheduling is a feature that's been promised by many apps and delivered by few. Here's exactly what Momenties' AI does — and what it doesn't — so you can judge for yourself."
        crumbs={[{ label: 'AI scheduling' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try it free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Live demo
          </Link>
        </div>
      </PageHero>

      {/* What the AI actually does */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">AI capabilities</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Three things Momenties AI does.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <Link href={c.href} className="block rounded-xl border border-border lux-card p-6 h-full group">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <c.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2 group-hover:text-gold transition-colors">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The pipeline */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Under the hood</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What happens from keystroke to event.
            </h2>
          </Reveal>
          <div className="space-y-2">
            {PIPELINE.map((step, i) => (
              <Reveal key={step.step} delay={i * 35}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <div className="w-7 h-7 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] text-gold/70">{step.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-foreground">{step.name}</span>
                      <span className="font-mono text-[10px] text-gold/60 shrink-0">{step.timing}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono italic">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="text-xs text-muted-foreground/50 mt-4 font-mono">
              Average total latency across all inputs: under 100ms. For the 75% handled by chrono-node alone: ~18ms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What it isn't */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Honest limitations</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What AI scheduling is not.</h2>
          </Reveal>
          <div className="space-y-3">
            {WHAT_IT_ISNT.map((w, i) => (
              <Reveal key={w.label} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{w.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{w.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dive links */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Dig deeper.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Natural language calendar deep-dive', href: '/natural-language-calendar' },
                { label: 'Voice input architecture', href: '/features/voice' },
                { label: 'Photo-to-calendar', href: '/features/photo' },
                { label: 'Full AI architecture', href: '/ai' },
                { label: 'AI ethics & data policy', href: '/ai/ethics' },
                { label: 'AI feature comparison', href: '/ai-calendar' },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between rounded-xl border border-border/50 px-4 py-3 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{l.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="18ms average parse time. See what that feels like."
        subtitle="Free forever. No form to fill. Just type your first event."
        primary={{ label: 'Try AI scheduling free', href: '/login' }}
        secondary={{ label: 'Live demo', href: '/demo' }}
      />
    </>
  )
}
