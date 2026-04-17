import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { FAQPageJsonLd } from '@/components/marketing/StructuredData'
import {
  Brain, Mic, Camera, Clock, Sparkles, Shield, ArrowUpRight, Lock, Eye, Check,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI in Calendro — Quiet, capable, and on your side',
  description: 'How Calendro uses AI: natural-language parsing, voice, photo OCR, smart time suggestions — with privacy-first defaults and your data never used for training.',
  alternates: { canonical: '/ai' },
  openGraph: {
    title: 'AI in Calendro',
    description: 'Quiet, capable AI — with privacy-first defaults.',
    url: '/ai',
  },
}

const CAPABILITIES = [
  {
    icon: Brain,
    title: 'Natural-language parsing',
    tagline: 'Type like you talk.',
    desc: 'chrono-node handles the easy cases locally, Gemini 2.5 Flash picks up the rest. Structured output, schema-validated with Zod, safe enough to ship.',
    sample: 'dentist thursday 3pm → parsed event',
  },
  {
    icon: Mic,
    title: 'Voice input',
    tagline: 'Dump your week out loud.',
    desc: 'Deepgram Nova-3 transcribes in under a second. The parser handles multi-event dictation — three events in one breath, all extracted and previewed.',
    sample: '🎙 "standup daily 9am, lunch fri 12:30, dentist tue 4"',
  },
  {
    icon: Camera,
    title: 'Photo → events',
    tagline: 'Any schedule, photographed.',
    desc: 'Gemini Vision reads the whole schedule. Exam timetables, concert bills, wedding itineraries, handwritten on-call boards — all extracted at once.',
    sample: '📷 syllabus.jpg → 20 events',
  },
  {
    icon: Clock,
    title: 'Smart time suggestions',
    tagline: 'The gap that fits.',
    desc: 'When you omit the time, Calendro proposes an optimal slot based on your meetings, focus hours, timezone, and historical preferences. Local model for privacy and speed.',
    sample: '"coffee with sarah this week" → proposes Thu 10am',
  },
  {
    icon: Sparkles,
    title: 'Daily briefing',
    tagline: 'A warm morning summary.',
    desc: 'A two-paragraph summary of your day, delivered at your preferred hour. Written by AI, tuned to your tone, and short enough to actually read.',
    sample: '"Morning, Daniel. 3 meetings today. Your board prep is still open."',
  },
  {
    icon: Shield,
    title: 'Privacy-first defaults',
    tagline: 'Your data isn\'t training data.',
    desc: 'We never use your calendar contents to train AI models. Submissions for parsing go to Gemini / Deepgram under strict no-retention contracts.',
    sample: 'Zero retention · no model training',
  },
]

const PRINCIPLES = [
  { icon: Lock, title: 'Zero retention from our AI providers', desc: 'Gemini and Deepgram both operate under no-retention enterprise agreements with Calendro. Your inputs are processed and discarded.' },
  { icon: Eye, title: 'Never used for training', desc: 'We contractually prohibit any training use of customer data, full stop — ours or our vendors\'.' },
  { icon: Check, title: 'A human is always in the loop', desc: 'Every parsed event shows a preview before it commits. No AI-only writes to your calendar. You stay in charge.' },
  { icon: Shield, title: 'Opt-out at any time', desc: 'Want zero AI? Turn it off in Settings → AI. The app still works — just with chrono-node as the only parser.' },
]

const FAQS = [
  { q: 'Does Calendro train on my calendar data?', a: 'No. We contractually prohibit any training use of customer data — ours or our AI providers\'. When you submit an event for parsing, it\'s processed and discarded.' },
  { q: 'What AI models are you using?', a: 'Gemini 2.5 Flash for text and image parsing. Deepgram Nova-3 for voice transcription. We evaluate new models quarterly.' },
  { q: 'Can I use Calendro without AI?', a: 'Yes. Settings → AI → disable. You\'ll have a local, chrono-node-based parser and a manual event creator. Most features still work.' },
  { q: 'What happens when the AI gets it wrong?', a: 'Every parsed event is previewed before it commits. You can edit, re-parse with more context, or discard — all in one tap. We track error rates and ship fixes.' },
  { q: 'Do you retain my voice recordings?', a: 'No. Voice uploads are transcribed by Deepgram, returned to us, and immediately discarded. Neither we nor Deepgram keep the audio.' },
  { q: 'Is the AI available on the free tier?', a: 'Yes. Free gets full AI with a daily photo limit (5). Pro removes the limit and gives you priority parsing.' },
]

export default function AiPage() {
  return (
    <>
      <FAQPageJsonLd items={FAQS} />
      <PageHero
        eyebrow="AI in Calendro"
        title={
          <>
            Quiet AI. <em className="not-italic text-gold">On your side.</em>
          </>
        }
        lede="The machine learning is behind the curtain, where it belongs. Calendro's AI does the boring work so you keep the judgment. Here's exactly what it does and how we protect you."
        crumbs={[{ label: 'AI' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Try the live demo <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="#privacy"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Read privacy stance
          </Link>
        </div>
      </PageHero>

      {/* Capabilities */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              What our AI actually does
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Six capabilities, honestly described.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <div className="rounded-2xl border border-border lux-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center">
                      <c.icon className="h-4 w-4 text-gold" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70">
                      {c.tagline}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                  <div className="mt-5 pt-5 border-t border-border/60 rounded-lg">
                    <code className="font-mono text-[11px] text-gold/80 leading-relaxed block">{c.sample}</code>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              How it fits together
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              The pipeline.
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border bg-[#0a0a0d] p-6 md:p-10 font-mono text-xs md:text-sm leading-[1.85]">
            <div className="space-y-2">
              <div className="text-muted-foreground"># 1. Input arrives (text, voice, or photo)</div>
              <div className="text-foreground">input: <span className="text-emerald-300">&quot;dentist thursday 3pm&quot;</span></div>
              <div className="text-muted-foreground"># 2. chrono-node tries first (local, free, fast)</div>
              <div className="text-foreground">chronoResult = <span className="text-gold">chrono.parse</span>(input)</div>
              <div className="text-muted-foreground">→ {'{'}confidence: 0.94, event: {'{...}'}{'}'}</div>
              <div className="text-muted-foreground"># 3. If confidence &lt; 0.75, escalate to Gemini</div>
              <div className="text-foreground">if (chronoResult.confidence &lt; <span className="text-gold">0.75</span>) {'{'}</div>
              <div className="text-foreground">  geminiResult = <span className="text-gold">gemini</span>.parse(input, prompt)</div>
              <div className="text-foreground">  result = <span className="text-gold">zod</span>.validate(geminiResult)</div>
              <div className="text-foreground">{'}'}</div>
              <div className="text-muted-foreground"># 4. Fallback to chrono if Zod fails</div>
              <div className="text-muted-foreground"># 5. Human sees a preview</div>
              <div className="text-muted-foreground"># 6. Only after confirm do we write to the calendar</div>
              <div className="text-emerald-300">→ event scheduled · 0.84s total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Privacy posture
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Four commitments.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <p.icon className="h-5 w-5 text-gold mb-4" />
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-muted-foreground max-w-xl mx-auto">
            For the full technical detail, see our{' '}
            <Link href="/security" className="text-gold hover:underline">security overview</Link>
            {' '}and{' '}
            <Link href="/subprocessors" className="text-gold hover:underline">subprocessors list</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8 text-center">
            Common questions
          </h2>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group rounded-xl border border-border lux-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="See the AI in action."
        subtitle="No signup. Type a sentence, watch Calendro turn it into a calendar event in under a second."
        primary={{ label: 'Try the demo', href: '/demo' }}
        secondary={{ label: 'Read the blog', href: '/blog' }}
      />
    </>
  )
}
