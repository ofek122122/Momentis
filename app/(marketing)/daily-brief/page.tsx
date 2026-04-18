import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Sun, Clock, AlertTriangle, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Daily Brief — Your AI morning summary',
  description:
    'Momenties Daily Brief delivers a quiet 3-minute summary of your day every morning. Today\'s events, tomorrow\'s anchors, and one thing you should probably reschedule. Built for every user, no AI tax.',
  alternates: { canonical: '/daily-brief' },
  openGraph: {
    title: 'Momenties Daily Brief',
    description: 'Your calendar, narrated. 3 minutes every morning.',
    url: '/daily-brief',
    type: 'website',
  },
}

const BRIEF_SECTIONS = [
  {
    icon: Sun,
    title: "Today's load",
    desc: 'How full is your day? Back-to-back meetings get a warning. Long focus blocks get acknowledged. A quiet Friday gets noted.',
  },
  {
    icon: Clock,
    title: 'Upcoming anchors',
    desc: 'Your next three most-important events — flagged by recency, attendees, and how you\'ve scheduled around them before.',
  },
  {
    icon: AlertTriangle,
    title: 'Watch this',
    desc: 'Something feels off? Travel time conflict, a double-booking on another account, a recurring meeting you haven\'t accepted.',
  },
  {
    icon: Zap,
    title: 'One suggestion',
    desc: 'A single, specific thing you could do differently today. Move this meeting. Block this hour. The AI keeps it to one, so it stays useful.',
  },
]

const EXAMPLE_BRIEF = {
  date: 'Monday, April 21 · 7:42 AM',
  greeting: 'Good morning, Iris.',
  load: 'Heavy day — 6 hours scheduled across 4 meetings.',
  anchor: 'Board call at 2pm is your anchor. Everything else can move.',
  watch: 'Your 11am Investor Call ends at 12pm. You have no travel buffer before lunch at 12:15.',
  suggestion: 'Consider pushing the 11am to 10:30am to build a 45-minute buffer.',
}

export default function DailyBriefPage() {
  return (
    <>
      <PageHero
        eyebrow="Daily Brief"
        title={
          <>
            Your calendar,
            <br />
            <em className="not-italic text-gold">narrated.</em>
          </>
        }
        lede="Every morning, Momenties reads your calendar and tells you what matters today. Three minutes. Four sections. One actionable suggestion. Available on every plan — no upgrade required."
        crumbs={[{ label: 'Daily Brief' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Get your brief <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See all features
          </Link>
        </div>
      </PageHero>

      {/* Example brief */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Example</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What it actually looks like.
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-gold/20 bg-gold/5 overflow-hidden">
              <div className="bg-[#0f0f14] border-b border-gold/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-gold" />
                  <span className="font-mono text-xs text-gold/80">Daily Brief</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground/60">{EXAMPLE_BRIEF.date}</span>
              </div>
              <div className="p-6 space-y-5">
                <p className="font-display text-lg font-semibold text-foreground">{EXAMPLE_BRIEF.greeting}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="h-3 w-3 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/60 mb-1">Load</p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{EXAMPLE_BRIEF.load}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/60 mb-1">Anchor</p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{EXAMPLE_BRIEF.anchor}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="h-3 w-3 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-amber-400/60 mb-1">Watch</p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{EXAMPLE_BRIEF.watch}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl border border-gold/20 bg-gold/5">
                    <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="h-3 w-3 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/60 mb-1">Suggestion</p>
                      <p className="text-sm text-foreground leading-relaxed font-medium">{EXAMPLE_BRIEF.suggestion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four sections */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Anatomy</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four sections. Every morning.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {BRIEF_SECTIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <s.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Technical</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              How it&apos;s made.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Every morning at 7:30 AM in your local timezone, Momenties reads your calendar for the next 48 hours and sends it through Gemini 2.5 Flash with a carefully crafted prompt we&apos;ve iterated on for six months.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The prompt is structured to prevent the model from being verbose. We cap the response at 150 words. We explicitly tell it to pick one suggestion, not three. We&apos;ve found that brevity is what makes it actually useful, and verbosity is what makes AI summaries feel hollow.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The brief appears as a notification and within the app itself. You can read it in under 90 seconds. That&apos;s the design constraint: if you can&apos;t absorb it in a glance, we made it too long.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Daily Brief is available on all plans, including free. We believe that every Momenties user, regardless of plan, should start their day with a clear picture of what&apos;s ahead.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Start your first morning brief tomorrow."
        subtitle="Sign up tonight. Your first brief arrives tomorrow at 7:30 AM."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all AI features', href: '/ai' }}
      />
    </>
  )
}
