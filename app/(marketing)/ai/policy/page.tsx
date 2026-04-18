import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Brain, Lock, Eye, XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Use Policy — How Momenties uses AI',
  description:
    'Exactly how Momenties uses AI: what we send to which models, what we never do, and how your calendar data stays private.',
  alternates: { canonical: '/ai/policy' },
  openGraph: {
    title: 'Momenties AI Use Policy',
    description: 'Exactly what AI does — and doesn\'t do — with your calendar data.',
    url: '/ai/policy',
    type: 'website',
  },
}

const USES = [
  {
    icon: Brain,
    title: 'Natural language parsing',
    model: 'Gemini 2.5 Flash + chrono-node',
    what: 'When you type, speak, or photograph an event, we parse your intent into structured data (title, time, duration, recurrence).',
    sent: 'The input text or image only. No calendar history, no profile data.',
    stored: 'Not stored. The API call is stateless.',
  },
  {
    icon: Eye,
    title: 'Smart time suggestions',
    model: 'On-device heuristic (no external AI)',
    what: 'When you add an event without a time, we suggest a free slot based on your existing events.',
    sent: 'Nothing — this runs locally on our servers using your calendar data, with no external AI calls.',
    stored: 'No external storage. Only your calendar events, which you already gave us.',
  },
]

const NEVERS = [
  'We never train AI models on your personal calendar data.',
  'We never send your calendar history, contacts, or event titles to any AI model.',
  'We never use your data to improve Gemini, Deepgram, or any other external model.',
  'We never build profiles or inferences about you from your calendar patterns.',
  'We never use AI to generate automated decisions about you (e.g. credit, employment, health).',
  'We never use AI to create advertising profiles or sell targeting data.',
]

export default function AIPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="AI use policy"
        title={
          <>
            What AI does with
            <br />
            <em className="not-italic text-gold">your calendar.</em>
          </>
        }
        lede="An honest, plain-language account of every AI interaction in Momenties: what models we use, what data we send, and what we never do."
        crumbs={[
          { label: 'AI in Momenties', href: '/ai' },
          { label: 'AI use policy' },
        ]}
      />

      {/* How AI is used */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How AI is used</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Two AI use cases. Both clearly bounded.
            </h2>
          </Reveal>

          <div className="space-y-6">
            {USES.map((u, i) => (
              <Reveal key={u.title} delay={i * 60}>
                <div className="rounded-2xl border border-border lux-card overflow-hidden">
                  <div className="flex items-start gap-4 p-6 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center shrink-0">
                      <u.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{u.title}</h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold/60 mt-1">{u.model}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="p-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-2">What it does</div>
                      <p className="text-sm text-foreground/85 leading-relaxed">{u.what}</p>
                    </div>
                    <div className="p-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-2">What's sent</div>
                      <p className="text-sm text-foreground/85 leading-relaxed">{u.sent}</p>
                    </div>
                    <div className="p-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 mb-2">What's stored</div>
                      <p className="text-sm text-foreground/85 leading-relaxed">{u.stored}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The hybrid approach */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The hybrid approach</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              chrono-node first. Gemini only when needed.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-[#0f0f14] px-5 py-3 border-b border-border">
                <span className="font-mono text-[11px] text-muted-foreground">Parsing pipeline</span>
              </div>
              <div className="bg-[#080810] p-5 space-y-4">
                {[
                  { stage: '01', name: 'Input received', detail: 'Your text, voice transcription, or image caption arrives at our server.', local: true },
                  { stage: '02', name: 'chrono-node (local)', detail: '~75% of inputs are parsed entirely by chrono-node — a local, open-source library. No external API call. ~18ms.', local: true },
                  { stage: '03', name: 'Confidence check', detail: 'If confidence < 0.80, the input escalates to Gemini. The input text (and only the input text) is sent.', local: true },
                  { stage: '04', name: 'Gemini 2.5 Flash', detail: 'Handles ambiguous inputs. Returns structured JSON. Stateless — no history, no user ID. ~280ms average.', local: false },
                  { stage: '05', name: 'Zod validation', detail: 'Gemini\'s response is validated. If it fails schema, we fall back to chrono-node\'s best guess.', local: true },
                ].map((step) => (
                  <div key={step.stage} className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-gold/40 w-6 shrink-0 mt-1">{step.stage}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-foreground">{step.name}</span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${step.local ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-gold bg-gold/10 border-gold/20'}`}>
                          {step.local ? 'Local' : 'External API'}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we never do */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Our commitments</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What we will never do with AI.
            </h2>
          </Reveal>

          <div className="space-y-3">
            {NEVERS.map((n, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <XCircle className="h-5 w-5 text-rose-400/70 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85 leading-relaxed">{n}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Opt out */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border p-7 flex items-start gap-5">
              <Lock className="h-6 w-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">Opt out of AI parsing</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  In Settings → Privacy, you can disable all AI parsing. Your events will only be parsed by chrono-node (local, no external calls). The trade-off: ambiguous inputs may not be understood correctly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
                  >
                    Go to privacy settings <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 h-9 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy policy <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="AI that helps, doesn't harvest."
        subtitle="Your calendar is for you. Our AI is here to make it easier."
        primary={{ label: 'Learn how AI works', href: '/ai' }}
        secondary={{ label: 'Privacy policy', href: '/privacy' }}
      />
    </>
  )
}
