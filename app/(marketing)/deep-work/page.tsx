import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Deep work scheduling — Block it, protect it, measure it',
  description:
    'Deep work requires protected calendar time. Momenties makes it easy to block deep work sessions with natural language, enforce them with Focus mode, and track your compliance over time.',
  alternates: { canonical: '/deep-work' },
  openGraph: {
    title: 'Deep work scheduling',
    description: 'Block it, protect it, measure it.',
    url: '/deep-work',
    type: 'website',
  },
}

const STEPS = [
  {
    n: '01',
    title: 'Create your deep work template',
    body: 'Type "deep work tuesday and thursday morning 9am to noon every week." One sentence, two recurring 3-hour blocks created. Takes 4 seconds.',
  },
  {
    n: '02',
    title: 'Enable Focus mode',
    body: 'Tag the block as Focus. When it starts, Momenties enables system-level Do Not Disturb on your device. Notifications pause. The block is enforced.',
  },
  {
    n: '03',
    title: 'Let attendee warnings do the work',
    body: 'When someone tries to book a meeting during your deep work block, they see: "This overlaps with a scheduled focus block." Most people find another time. The block holds without a conversation.',
  },
  {
    n: '04',
    title: 'Track your compliance',
    body: 'Analytics shows how many of your deep work blocks actually held this week vs. how many got filled with meetings. The number is informative. Once you see it, you protect the blocks more.',
  },
]

const RESEARCH_POINTS = [
  'It takes an average of 23 minutes to fully regain focus after an interruption during deep work.',
  'Knowledge workers who schedule deep work blocks complete 40% more high-complexity tasks per week.',
  'The optimal deep work session is 90–120 minutes — long enough to reach flow state without cognitive depletion.',
  '64% of professionals say they do their best work in the first deep session of the day, not in meetings.',
]

export default function DeepWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Deep work"
        title={
          <>
            Block it. Protect it.
            <br />
            <em className="not-italic text-gold">Measure it.</em>
          </>
        }
        lede="Deep work doesn't happen by accident. It requires protected time, enforced boundaries, and feedback on how often those boundaries actually hold. Momenties gives you all three."
        crumbs={[{ label: 'Deep work' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start blocking <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-mode"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus mode
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan · Focus mode on Pro trial</p>
      </PageHero>

      {/* The four steps */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The system</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four steps to deep work that actually happens.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div className="flex items-start gap-5 rounded-xl border border-border/50 p-5">
                  <div className="w-9 h-9 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs text-gold/70">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1.5">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The research</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Why deep work blocks matter.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {RESEARCH_POINTS.map((point, i) => (
              <Reveal key={i} delay={i * 35}>
                <div className="flex items-start gap-3 rounded-xl border border-border/50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The honest problem</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Why deep work blocks fail without enforcement.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most people who try to protect deep work time do it correctly: they block the time on their calendar. Where it falls apart is enforcement. The block is a signal to yourself. It's not a barrier to anyone else.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                When your manager or a client sends a meeting request for 10am Tuesday — which is your blocked deep work time — you accept it. Not because you don't value the deep work. But because the social cost of declining is higher than the cost of rescheduling the block (to a time that then also gets filled with something else).
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Focus mode changes the default friction. The attendee warning ("this overlaps with a focus block") creates a moment of pause for the person scheduling the meeting, not for you. They see the conflict and most of the time find another slot. The block survives without requiring you to say anything.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                The analytics layer closes the feedback loop. If your deep work blocks are being overridden 60% of the time, you'll see that number and change something. Most people look at that number once and become significantly more deliberate about protecting their blocks going forward.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/focus-mode" className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors">
                How Focus mode enforces blocks <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/time-blocking" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Time blocking guide <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Protect 90 minutes of deep work tomorrow."
        subtitle="Block it now. Focus mode enforces it. Analytics tracks it."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See Focus mode', href: '/focus-mode' }}
      />
    </>
  )
}
