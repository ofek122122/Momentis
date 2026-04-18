import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Brain, Zap, Mic2, Camera, Sun, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI calendar — Momenties, the AI-first calendar app',
  description:
    'Momenties is an AI calendar that creates events from natural language, voice, and photos. Smart scheduling, daily briefs, and calendar analytics — all powered by Gemini 2.5 Flash.',
  alternates: { canonical: '/ai-calendar' },
  openGraph: {
    title: 'Momenties — The AI calendar',
    description: 'Natural language. Voice. Photos. AI-powered scheduling.',
    url: '/ai-calendar',
    type: 'website',
  },
}

const AI_FEATURES = [
  {
    icon: Zap,
    title: 'Natural language input',
    desc: 'Type "dentist thursday 3pm" and press enter. Momenties parses it, structures it, and saves it. No form fields, no dropdowns.',
    link: '/features',
  },
  {
    icon: Mic2,
    title: 'Voice-to-calendar',
    desc: 'Speak your event. Deepgram Nova-3 transcribes it, our parser converts it to a structured event. 440ms end-to-end.',
    link: '/features/voice',
  },
  {
    icon: Camera,
    title: 'Photo-to-calendar',
    desc: 'Photograph any schedule — conference programme, class timetable, whiteboard. Gemini Vision extracts every event.',
    link: '/features/photo',
  },
  {
    icon: Clock,
    title: 'Smart scheduling',
    desc: 'Add an event without a time. Momenties suggests the best free slot based on your schedule, preferences, and focus windows.',
    link: '/pro',
  },
  {
    icon: Sun,
    title: 'Daily AI brief',
    desc: 'Every morning at 7:30 AM, Momenties reads your calendar and delivers a 3-minute summary: load, anchor, watch, suggestion.',
    link: '/daily-brief',
  },
  {
    icon: Brain,
    title: 'Calendar analytics',
    desc: 'AI surfaces patterns in your calendar: meeting/focus ratio, busiest days, recurring time sinks. See your schedule, not just your schedule.',
    link: '/pro',
  },
]

const HOW_DIFFERENT = [
  {
    aspect: 'The AI role',
    others: 'A bolt-on feature for premium users',
    us: 'The primary input method. Every event starts with natural language.',
  },
  {
    aspect: 'Latency',
    others: 'AI means 1-3 second waits',
    us: 'Hybrid architecture: 18ms locally, 280ms with Gemini. Invisible.',
  },
  {
    aspect: 'What it sees',
    others: 'You type into an AI assistant',
    us: 'The AI reads your calendar to give context-aware suggestions.',
  },
  {
    aspect: 'Privacy',
    others: 'Training data opt-in ambiguous',
    us: 'Your event content is never used for AI training. See our AI policy.',
  },
]

export default function AiCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="AI calendar"
        title={
          <>
            The calendar that
            <br />
            <em className="not-italic text-gold">understands you.</em>
          </>
        }
        lede="Momenties is an AI-first calendar. Not a calendar with an AI chatbot bolted on — one where the AI is the input method. Type it, speak it, photograph it. It handles the rest."
        crumbs={[{ label: 'AI calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try the AI calendar <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Live demo
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card · 90 seconds to first event</p>
      </PageHero>

      {/* AI features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">AI features</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Six ways the AI makes your calendar better.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 50}>
                <Link href={f.link} className="block rounded-xl border border-border lux-card p-5 h-full group">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5 group-hover:text-gold transition-colors">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it parses */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The parser</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Why it&apos;s fast and accurate.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most AI calendar features run everything through a language model. That means 500ms–3 second waits for every event. We took a different approach.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties first tries <strong className="font-medium text-foreground">chrono-node</strong>, a local date-parsing library. It runs in under 20ms and handles 75% of inputs correctly. Only when chrono-node returns low confidence do we send the input to <strong className="font-medium text-foreground">Gemini 2.5 Flash</strong> for the full AI interpretation.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p className="font-display text-xl italic text-foreground/90 leading-snug pl-5 border-l-2 border-gold/40 py-1">
                &ldquo;75% of events at 18ms. 25% of events at 280ms. Average: fast enough to feel instant.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                This matters because a calendar you use all day has a different latency budget than a tool you sit down to use. If parsing takes two seconds, you notice. You pause. You wait. That pause, multiplied across dozens of interactions per day, makes the tool feel heavy. We made a deliberate architectural choice to keep it invisible.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/ai" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              Deep dive into how our AI works <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How different */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Compared</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              How we differ from other &ldquo;AI calendars.&rdquo;
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Aspect</div>
                <div className="px-4 py-3">Other AI calendars</div>
                <div className="px-4 py-3 text-gold">Momenties</div>
              </div>
              {HOW_DIFFERENT.map((row, i) => (
                <div key={row.aspect} className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-4 text-sm font-medium text-foreground">{row.aspect}</div>
                  <div className="px-4 py-4 text-sm text-muted-foreground">{row.others}</div>
                  <div className="px-4 py-4 text-sm text-foreground/90">{row.us}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-start gap-4 rounded-xl border border-gold/20 bg-gold/5 p-6">
              <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">AI that doesn&apos;t learn from your calendar.</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use Gemini 2.5 Flash for parsing, but we&apos;ve configured it for zero data retention and disabled model training on our requests. Your events are never used to train AI models.{' '}
                  <Link href="/ai/policy" className="text-gold hover:text-gold/80 transition-colors">
                    Read our AI policy →
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The AI calendar that actually works."
        subtitle="Type one event. See why it matters."
        primary={{ label: 'Try it free', href: '/login' }}
        secondary={{ label: 'How the AI works', href: '/ai' }}
      />
    </>
  )
}
