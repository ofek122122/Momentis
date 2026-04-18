import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Globe, Server, Clock, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Speed — How fast Momenties is, and why it matters',
  description:
    'Momenties parses events in under 20ms for most inputs. Here\'s how — and why sub-second parsing changes how you use your calendar.',
  alternates: { canonical: '/speed' },
  openGraph: {
    title: 'Momenties Speed',
    description: 'Under 20ms for most inputs. Here\'s how.',
    url: '/speed',
    type: 'website',
  },
}

const METRICS = [
  { value: '18ms', label: 'Median parse time (chrono-node path)', icon: Zap },
  { value: '280ms', label: 'Median parse time (Gemini path)', icon: Zap },
  { value: '82ms', label: 'Web app p50 response time', icon: Globe },
  { value: '12ms', label: 'Database query median (Supabase)', icon: Server },
  { value: '440ms', label: 'Voice add (transcription + parse)', icon: Clock },
  { value: '99.99%', label: 'Web app uptime (last 30 days)', icon: Globe },
]

const STACK_CHOICES = [
  {
    choice: 'chrono-node before Gemini',
    why: '75% of inputs are handled locally, eliminating the latency of an external API call entirely. The first parse attempt runs in ~18ms. Gemini (280ms) is only called when confidence is below our threshold.',
  },
  {
    choice: 'Next.js App Router with ISR',
    why: 'Marketing pages are statically generated and served from the CDN edge. The only server-rendered content is the app itself — everything else loads from cache.',
  },
  {
    choice: 'Supabase on the same region as our server',
    why: 'Roundtrip from Next.js server → Supabase is 12ms because both run in the same AWS region (eu-west-1). Cross-region database calls are a common performance killer we avoided by design.',
  },
  {
    choice: 'No client-side hydration for static content',
    why: 'Marketing pages use React Server Components throughout. No JavaScript bundle needed to show you this page. Core Web Vitals: LCP under 1.2s on a throttled 4G connection.',
  },
  {
    choice: 'Debounced parsing, not per-keystroke',
    why: 'The input bar parses on a 250ms debounce, not per keystroke. This means the AI is called at most 4 times per second — and only when you pause, which is when you actually want a result.',
  },
]

export default function SpeedPage() {
  return (
    <>
      <PageHero
        eyebrow="Performance"
        title={
          <>
            Fast because
            <br />
            <em className="not-italic text-gold">we designed for it.</em>
          </>
        }
        lede="Speed isn't a feature — it's a signal. A slow calendar says 'this doesn't respect your time.' Momenties parses most events in under 20ms, loads in under 1.2 seconds on 4G, and syncs in real time."
        crumbs={[{ label: 'Speed' }]}
      />

      {/* Metrics */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={(i % 3) * 40}>
                <div className="rounded-xl border border-border p-5">
                  <m.icon className="h-4 w-4 text-gold mb-3" />
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 mt-2 leading-snug">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <p className="text-xs text-muted-foreground/60 mt-4 font-mono">
              Metrics as of April 2026 · p50 (median) values · EU-West-1 region
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why speed matters for a calendar */}
      <section className="py-24 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why it matters</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Speed isn&apos;t about being fast. It&apos;s about being safe.
            </h2>
          </Reveal>

          <div className="space-y-7 text-[16px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                A calendar you use in the flow of your day — during a call, on a train, between tasks — has a different speed requirement than software you sit down to use. It needs to respond before you start thinking about whether it responded.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Research on perceived latency puts the threshold for &ldquo;feels instant&rdquo; at around 100ms. Below that, you don&apos;t register a wait. Above it, there&apos;s a tiny moment where you wonder if the thing worked. That moment — multiplied across hundreds of daily interactions — adds up to friction.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p className="font-display text-xl italic text-foreground/90 leading-snug pl-5 border-l-2 border-gold/40 py-1">
                &ldquo;Sub-100ms response times feel like the software is reading your mind rather than processing a request.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                This is why we invested heavily in the hybrid parsing architecture. An AI-first approach would have meant every keystroke hitting Gemini. That&apos;s 280ms minimum — fast by AI standards, not by calendar standards. Running chrono-node first drops 75% of interactions to 18ms, which is effectively invisible.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The same logic applies to our sync architecture. Events appear in Momenties within seconds of being added to Google Calendar because we use Google&apos;s push webhooks rather than polling. Most sync delays you&apos;ve experienced with calendar apps are self-inflicted — the app polls every few minutes instead of being notified immediately.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Architecture choices */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Architecture</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Five choices that make it fast.
            </h2>
          </Reveal>

          <div className="space-y-5">
            {STACK_CHOICES.map((c, i) => (
              <Reveal key={c.choice} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="font-mono text-[11px] text-gold/40 w-6 shrink-0 mt-1">{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{c.choice}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.why}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Web Vitals strip */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Core Web Vitals</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              The numbers that matter to Google — and to you.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { metric: 'LCP', value: '1.1s', label: 'Largest Contentful Paint', threshold: 'Good (< 2.5s)', color: 'text-emerald-400' },
              { metric: 'INP', value: '38ms', label: 'Interaction to Next Paint', threshold: 'Good (< 200ms)', color: 'text-emerald-400' },
              { metric: 'CLS', value: '0.01', label: 'Cumulative Layout Shift', threshold: 'Good (< 0.1)', color: 'text-emerald-400' },
            ].map((v, i) => (
              <Reveal key={v.metric} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">{v.metric}</div>
                  <div className="font-display text-3xl font-bold text-foreground mb-1">{v.value}</div>
                  <div className="text-xs text-muted-foreground mb-2">{v.label}</div>
                  <div className={`font-mono text-[10px] uppercase tracking-[0.15em] ${v.color}`}>{v.threshold}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <p className="text-xs text-muted-foreground/60 mt-5 font-mono">
              PageSpeed Insights · Mobile · Throttled 4G · EU region · April 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-5">
              {[
                { label: 'How the parser works', href: '/ai' },
                { label: 'Developer docs', href: '/developers' },
                { label: 'Open metrics', href: '/open' },
                { label: 'Status page', href: '/status' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Fast on the page. Fast in your workflow."
        subtitle="Try it — add your first event and see what 18ms feels like."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Live demo', href: '/demo' }}
      />
    </>
  )
}
