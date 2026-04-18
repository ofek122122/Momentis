import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Camera, Clock, Zap, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Designers — From brief to blocked in seconds',
  description:
    'Designers context-switch between clients, feedback rounds, and deep work. Momenties adds AI event input, photo-to-calendar for briefs and schedules, and analytics to see where client time really goes.',
  alternates: { canonical: '/for/designers' },
  openGraph: {
    title: 'Momenties for Designers',
    description: 'From brief to blocked in seconds.',
    url: '/for/designers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Camera,
    title: 'Snap a brief, add a deadline',
    desc: 'Client sends a brief PDF with dates. Snap it. Deadlines, review dates, and presentation slots all added to your calendar automatically.',
  },
  {
    icon: Zap,
    title: 'Block creative time before meetings arrive',
    desc: '"Deep work tuesday and wednesday morning every week" — two recurring blocks created in one sentence. They\'ll show as busy before clients even try to book.',
  },
  {
    icon: BarChart3,
    title: 'See how much time each client really takes',
    desc: 'Analytics shows total hours per client per week. Most designers who look find one client taking 40% of their time for 25% of their revenue.',
  },
  {
    icon: Clock,
    title: 'Add project context mid-flow',
    desc: 'Voice-add "revision round 3 for Nike project thursday 2pm for 2 hours" without breaking focus. 3 seconds, done.',
  },
]

const WORKFLOW = [
  { time: 'Monday', action: 'Daily Brief shows the week: which clients are heavy, where there\'s breathing room, any double-booking.' },
  { time: 'Client kickoff', action: 'Snap photo of the project brief. All milestone dates added before the call ends.' },
  { time: 'During design work', action: 'Voice: "design review with Airbnb team thursday 10am 90 minutes." Added without leaving your canvas.' },
  { time: 'Friday review', action: 'Analytics: which client took how much time? Are you on track with your project estimate?' },
  { time: 'Monthly retro', action: 'Trend view shows which months were overloaded. Use it to calibrate project estimates going forward.' },
]

export default function ForDesignersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Designers"
        title={
          <>
            From brief to blocked
            <br />
            <em className="not-italic text-gold">in seconds.</em>
          </>
        }
        lede="Designers need deep work time, client visibility, and deadline tracking — without spending that time on calendar management. Momenties handles the admin so you can stay in the work."
        crumbs={[{ label: 'For Designers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/photo"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Photo-to-calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features for designers</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              How designers use Momenties.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Weekly flow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              A designer week with Momenties.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The creative time protection essay */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The hard part</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Creative work needs protection, not just scheduling.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Designers often say the hardest part of client work isn't the design itself — it's protecting the time to do it. Everyone wants a meeting. Feedback rounds expand. Revision requests arrive without time estimates.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Blocking deep work time is the right move. The reason it doesn't stick is that blocks are soft targets — a politely-worded meeting request from a client gets accepted even though it falls inside a "focus" block, because saying no feels harder than saying yes.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Focus mode changes the dynamic. When a client's scheduling link hits your focus block, they see: "This time overlaps with a focus window." They don't get blocked — but the friction shifts to them. Most of the time, they find another slot. The block survives without a confrontation.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <Link href="/focus-mode" className="inline-flex items-center gap-1.5 mt-6 text-sm text-gold hover:text-gold/80 transition-colors">
              How Focus mode works <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I snapped my client&apos;s project brief PDF and had 14 deadline events on my calendar before I finished reading the email. That&apos;s just not possible with any other calendar app.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Kira B.</div>
                  <div className="text-xs text-muted-foreground">Senior brand designer, freelance 6 years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your best work happens in protected time. Let's build that."
        subtitle="AI input, photo-to-calendar, focus mode. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Photo-to-calendar', href: '/features/photo' }}
      />
    </>
  )
}
