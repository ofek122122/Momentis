import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata: Metadata = {
  title: 'Manifesto — Why we built a quieter calendar',
  description: 'Our working beliefs about time, attention, AI, and calm software. Updated rarely. Long by design.',
  alternates: { canonical: '/manifesto' },
  openGraph: {
    title: 'The Momenties Manifesto',
    description: 'Our working beliefs about time, attention, and calm software.',
    url: '/manifesto',
  },
}

const THESES = [
  {
    n: '01',
    title: 'Your calendar is the most revealing document you own.',
    body:
      'It knows who you love, what you fear, where you are wasting your life. It deserves a tool that treats it that way. Not as a data object to be optimized, but as a portrait of a life — to be kept with care, edited with humility, shared on your terms and no one else\'s.',
  },
  {
    n: '02',
    title: 'Time is not money.',
    body:
      'Money is fungible and recoverable. Time is neither. An hour you lose in a bad meeting cannot be earned back. Any software that treats hours like spreadsheet cells is, however well-intentioned, telling you a lie about the basic physics of your life.',
  },
  {
    n: '03',
    title: 'Quiet software will win.',
    body:
      'The first wave of consumer software was utility. The second was engagement. We believe the third is restraint. The companies that win the next decade will be the ones that ask the least of your attention while still being indispensable. We are building for the third wave.',
  },
  {
    n: '04',
    title: 'AI should be a quiet helper, not a manager.',
    body:
      'We use AI because it saves you minutes of agency — not because we want to replace your judgment. Momenties\'s AI is a parser, not an advisor. It converts words into structured events, full stop. You stay in charge of your days.',
  },
  {
    n: '05',
    title: 'Privacy is a design problem before it is a legal one.',
    body:
      'Legal compliance is the floor. The ceiling is software that respects you even when it could legally not. We collect as little as possible. We never sell data. We read your calendar only to help you hold it. The rest — your meetings, your patterns, your people — stays yours.',
  },
  {
    n: '06',
    title: 'Design for the end of the day.',
    body:
      'Most productivity software is designed for 9am — caffeinated, ambitious, alert. We design for 9pm — tired, considered, ready to close the laptop. Dark-first. Quiet typography. One action per screen. Because most of life is not the peak, and software should meet you at the trough.',
  },
  {
    n: '07',
    title: 'Ship slowly on purpose.',
    body:
      'We kill more features than we release. We prefer three months of thought to three weeks of urgency. When we do ship, we try to ship things that stay — not fads dressed as features. We think our users can tell the difference, and we are betting the company on it.',
  },
  {
    n: '08',
    title: 'Software should lower your heart rate.',
    body:
      'If an app makes you feel worse, it has failed, regardless of how many tasks it completed. The test that matters is: does the user exhale when they open it? Momenties is our attempt at an exhale.',
  },
]

export default function ManifestoPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-2">
          <Breadcrumbs items={[{ label: 'Manifesto' }]} />
        </div>
        <div className="max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-5">
            A working document · last edited April 2026
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            The <em className="not-italic text-gold">Momenties</em> Manifesto
          </h1>
          <p className="mt-7 font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-2xl">
            Our working beliefs about time, attention, AI, and the quiet software we want to build.
            Updated rarely. Long by design.
          </p>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xl">
            Manifestos are easy to write badly. They become slogan salads. We&apos;ve tried to keep this one grounded in
            sentences we actually say to each other in Monday meetings.
          </p>
        </div>
      </section>

      {/* Theses */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-16">
          {THESES.map((t, i) => (
            <Reveal key={t.n} delay={i * 40}>
              <article>
                <p className="font-mono text-xs tracking-[0.3em] text-gold/60 mb-4">
                  THESIS {t.n}
                </p>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.12]">
                  {t.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.78] text-foreground/85 font-light">
                  {t.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
            &ldquo;We hope this software, read backwards from the last screen to the first, tells the story of a
            company that tried — genuinely — to give its users back a little of their lives.&rdquo;
          </p>
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-gold/70">
            — Iris & Oren, founders
          </div>
        </div>
      </section>

      <CTA
        title="The quickest way to test a manifesto is to use the product."
        subtitle="Momenties is free forever for individuals. No card. Ninety-second setup."
        primary={{ label: 'Start using Momenties', href: '/login' }}
        secondary={{ label: 'Read our blog', href: '/blog' }}
      />
    </>
  )
}
