import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI ethics at Momenties — How we use AI responsibly',
  description:
    'Our commitments on AI use: what data we send to models, when AI fires, how we handle model errors, and what we will never do with your calendar data.',
  alternates: { canonical: '/ai/ethics' },
  openGraph: {
    title: 'AI ethics at Momenties',
    description: 'What we send to AI, when, and why.',
    url: '/ai/ethics',
    type: 'website',
  },
}

const COMMITMENTS = [
  {
    title: 'Minimum necessary data',
    desc: 'We send only the text or image segment needed to parse your event — never your full calendar history, contacts, or account information. Gemini receives: the input string and today\'s date. Nothing else.',
  },
  {
    title: 'AI is opt-in at the user level',
    desc: 'If you prefer not to use Gemini for parsing, you can disable the AI fallback in settings. Events will still be parsed by chrono-node locally — you just won\'t get AI disambiguation for ambiguous inputs.',
  },
  {
    title: 'Transparent when AI fires',
    desc: 'The UI shows a small indicator when Gemini (vs. chrono-node) parsed your event. You always know whether a human-readable rule or an AI model interpreted your intent.',
  },
  {
    title: 'No training on your data',
    desc: 'We do not use your event text to train or fine-tune any AI model. Our Gemini contract explicitly prohibits Google from using API inputs for model training.',
  },
  {
    title: 'AI errors are always recoverable',
    desc: 'If the AI misparses an event, you see the result before it\'s created and can edit or cancel. AI output is never silently committed to your calendar.',
  },
  {
    title: 'No behavioral profiling',
    desc: 'We use calendar analytics to show you your own patterns — never to sell that data, infer demographics, or share behavioral profiles with third parties.',
  },
]

const NEVER = [
  'Use your calendar data to target you with ads',
  'Share individual event text with any third party for marketing',
  'Use AI to make decisions about you without your review',
  'Store voice recordings after transcription is complete',
  'Store uploaded images after event parsing is complete',
  'Build profiles of your habits to sell to insurers, employers, or data brokers',
]

const MODEL_USE = [
  {
    trigger: 'Text event creation',
    model: 'chrono-node (local)',
    data: 'Input string only',
    fallback: 'Gemini 2.5 Flash if chrono confidence < 85%',
  },
  {
    trigger: 'Voice event creation',
    model: 'Deepgram Nova-3',
    data: 'Audio segment (deleted after transcription)',
    fallback: 'None — transcription required',
  },
  {
    trigger: 'Photo-to-calendar',
    model: 'Gemini 2.5 Flash (Vision)',
    data: 'Image file (deleted after parsing)',
    fallback: 'Manual entry if parsing fails',
  },
  {
    trigger: 'Daily Brief generation',
    model: 'Gemini 2.5 Flash',
    data: 'Today\'s event titles and times only',
    fallback: 'Static brief with no suggestion if Gemini fails',
  },
  {
    trigger: 'Smart scheduling suggestions',
    model: 'Local algorithm',
    data: 'Free/busy blocks only (no event titles)',
    fallback: 'No suggestion if insufficient data',
  },
]

export default function AIEthicsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI ethics"
        title={
          <>
            What AI does.
            <br />
            <em className="not-italic text-gold">What AI doesn&apos;t.</em>
          </>
        }
        lede="Momenties uses AI to parse your events. Here is exactly what data we send to models, when AI fires, and what we commit to never doing with your information."
        crumbs={[{ label: 'AI' }, { label: 'Ethics' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/ai/policy"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Full AI policy <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Privacy policy <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* What we commit to */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Our commitments</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Six things we commit to.</h2>
          </Reveal>
          <div className="space-y-4">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-foreground mb-1">{c.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we will never do */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hard limits</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What we will never do.</h2>
          </Reveal>
          <div className="space-y-2">
            {NEVER.map((n, i) => (
              <Reveal key={n} delay={i * 30}>
                <div className="flex items-start gap-3 rounded-xl border border-border/30 p-4">
                  <XCircle className="h-4 w-4 text-red-400/60 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">{n}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exactly when AI fires */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Model use</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">When AI fires, and with what data.</h2>
            <p className="text-sm text-muted-foreground mt-2">Every AI call Momenties makes. No surprises.</p>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-[#0c0c0f]">
                    <th className="text-left px-4 py-3 font-mono text-muted-foreground/60 uppercase tracking-wider">Trigger</th>
                    <th className="text-left px-4 py-3 font-mono text-muted-foreground/60 uppercase tracking-wider">Model</th>
                    <th className="text-left px-4 py-3 font-mono text-muted-foreground/60 uppercase tracking-wider">Data sent</th>
                    <th className="text-left px-4 py-3 font-mono text-muted-foreground/60 uppercase tracking-wider">Fallback</th>
                  </tr>
                </thead>
                <tbody>
                  {MODEL_USE.map((row, i) => (
                    <tr key={row.trigger} className={`border-b border-border/50 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                      <td className="px-4 py-3 font-medium text-foreground/90">{row.trigger}</td>
                      <td className="px-4 py-3 text-foreground/70 font-mono">{row.model}</td>
                      <td className="px-4 py-3 text-foreground/70">{row.data}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.fallback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technical detail */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">The parsing architecture.</h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                For text inputs, we run <strong className="font-medium text-foreground">chrono-node</strong> first — a local, open-source date parsing library that runs entirely in your browser. No API call, no data sent anywhere. For 75% of inputs, this is the only step.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                When chrono-node confidence is below 85%, or when the input contains implicit references chrono can't resolve ("next quarter", "before my flight"), we call <strong className="font-medium text-foreground">Gemini 2.5 Flash</strong>. The exact string you typed (and only that string) is sent, along with today's date for relative reference resolution.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                For images, we send the image to Gemini Vision with a prompt that instructs it to extract calendar events and return them as structured JSON. The image is not stored after the response is received.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                For voice, Deepgram transcribes the audio segment and returns text. We then run that text through the same chrono-node → Gemini pipeline as regular text input. The audio is not stored after transcription.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/ai" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              Full AI architecture documentation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA
        title="A calendar that uses AI, not one that uses you."
        subtitle="Free forever. No advertising model. No data brokering."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'Privacy policy', href: '/privacy' }}
      />
    </>
  )
}
