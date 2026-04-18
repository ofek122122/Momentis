import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { MessageSquare, Zap, GitMerge, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Feedback — Tell us what to build next',
  description:
    'The Momenties feedback board. Vote on feature requests, report bugs, or suggest something entirely new. We read everything.',
  alternates: { canonical: '/feedback' },
  openGraph: {
    title: 'Momenties Feedback',
    description: 'Vote on features, report bugs, shape what we build.',
    url: '/feedback',
    type: 'website',
  },
}

const HOW_IT_WORKS = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit or vote',
    desc: 'Post a feature request, bug report, or open question. Upvote requests from others. Votes signal priority — we look at them every Monday.',
  },
  {
    icon: Eye,
    step: '02',
    title: 'We read every one',
    desc: 'Everything goes into Iris\'s queue (CEO). We triage weekly: acknowledge within 3 business days, status updates when status changes.',
  },
  {
    icon: GitMerge,
    step: '03',
    title: 'Ships or explains',
    desc: 'We either ship it (roadmap entry), explain why we won\'t (and publish the reasoning), or ask follow-up questions. No black hole.',
  },
  {
    icon: Zap,
    step: '04',
    title: 'You get notified',
    desc: 'Subscribe to any request. When it ships, changes status, or gets a response — you get a notification. No checking required.',
  },
]

const RECENT_SHIPPED = [
  { title: 'Focus mode with auto-DND', votes: 412, shipped: 'Apr 2026', tag: 'Pro' },
  { title: 'Calendar analytics — meeting/focus ratio', votes: 298, shipped: 'Mar 2026', tag: 'Pro' },
  { title: 'Custom event templates', votes: 256, shipped: 'Mar 2026', tag: 'Pro' },
  { title: 'Keyboard shortcut: open input bar from anywhere', votes: 189, shipped: 'Feb 2026', tag: 'All' },
  { title: 'Export events to CSV', votes: 167, shipped: 'Feb 2026', tag: 'All' },
]

const TOP_REQUESTED = [
  { title: 'Outlook / Microsoft 365 sync', votes: 412, tag: 'Integration', eta: 'Q3 2026' },
  { title: 'Native iOS and Android apps', votes: 856, tag: 'Mobile', eta: 'Q4 2026' },
  { title: 'Recurring events with smart exceptions', votes: 298, tag: 'Core', eta: 'Q3 2026' },
  { title: 'Travel-aware scheduling (block transit time)', votes: 189, tag: 'AI', eta: 'Q4 2026' },
  { title: 'Public API v1', votes: 167, tag: 'Developer', eta: 'Q3 2026' },
  { title: 'Team scheduling links', votes: 240, tag: 'Teams', eta: 'Q3 2026' },
]

const TAG_COLORS: Record<string, string> = {
  Integration: 'bg-sky-500/15 text-sky-400 border-sky-500/20',
  Mobile: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  Core: 'bg-gold/15 text-gold border-gold/20',
  AI: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  Developer: 'bg-rose-500/15 text-rose-400 border-rose-500/20',
  Teams: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  Pro: 'bg-gold/15 text-gold border-gold/20',
  All: 'bg-white/5 text-muted-foreground border-border',
}

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title={
          <>
            We build what
            <br />
            <em className="not-italic text-gold">you actually need.</em>
          </>
        }
        lede="Not a checkbox. Not a black hole. Every request is read, triaged, and either shipped or honestly explained. Vote to signal priority. Subscribe to know when it lands."
        crumbs={[{ label: 'Feedback' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Submit feedback <MessageSquare className="h-4 w-4" />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See roadmap
          </Link>
        </div>
      </PageHero>

      {/* How it works */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Process</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What happens after you submit.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center">
                      <step.icon className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-mono text-xs text-gold/40">{step.step}</span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recently shipped from feedback */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Ships from this board</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Recent requests we shipped.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              These were all community requests, not internal ideas.
            </p>
          </Reveal>
          <div className="space-y-2">
            {RECENT_SHIPPED.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-border/50 p-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.votes} votes · Shipped {item.shipped}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${TAG_COLORS[item.tag] ?? TAG_COLORS['All']}`}>
                    {item.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={RECENT_SHIPPED.length * 40 + 20}>
            <Link
              href="/changelog"
              className="inline-flex items-center gap-1.5 mt-5 text-sm text-gold hover:text-gold/80 transition-colors"
            >
              See full changelog <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Top requested */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">In progress</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Top requested — on the roadmap.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              These already have enough votes. They&apos;re shipping. Vote to get notified when they do.
            </p>
          </Reveal>
          <div className="space-y-2">
            {TOP_REQUESTED.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-border/50 p-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 w-10 text-center">
                      <span className="font-mono text-sm font-bold text-gold">{item.votes}</span>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/50 leading-none">votes</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground font-mono">ETA: {item.eta}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${TAG_COLORS[item.tag] ?? TAG_COLORS['All']}`}>
                    {item.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={TOP_REQUESTED.length * 40 + 20}>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-1.5 mt-5 text-sm text-gold hover:text-gold/80 transition-colors"
            >
              Full roadmap <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Guidelines</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              What makes a good request.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Describe the problem, not the solution', note: '"I can\'t see how much time I spend in meetings" lands better than "add a pie chart."' },
              { label: 'One request per post', note: 'Bundled requests are hard to track, vote on, and respond to independently.' },
              { label: 'Context over brevity', note: 'Tell us who you are, what you\'re trying to do, and where the current experience fails.' },
              { label: 'Bug reports get a separate queue', note: 'Use the bug category for reproducible issues. We triage those on a different SLA.' },
            ].map((g, i) => (
              <Reveal key={g.label} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-1.5">{g.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{g.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Got something on your mind?"
        subtitle="Post it. We read every single one."
        primary={{ label: 'Submit feedback', href: '/login' }}
        secondary={{ label: 'See the roadmap', href: '/roadmap' }}
      />
    </>
  )
}
