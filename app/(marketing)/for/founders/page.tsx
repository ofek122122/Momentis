import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Rocket, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Founders — Calendar that moves as fast as you do',
  description:
    'Founders context-switch 30–50 times a day. Momenties gives you the AI input speed, the focus-time enforcement, and the analytics to run a founder schedule with intention.',
  alternates: { canonical: '/for/founders' },
  openGraph: {
    title: 'Momenties for Founders',
    description: 'Your calendar should move as fast as you do.',
    url: '/for/founders',
    type: 'website',
  },
}

const TRUTHS = [
  {
    stat: '47',
    unit: 'context switches/day',
    label: 'Average founder context-switch count',
    note: 'Calendar friction compounds every single one.',
  },
  {
    stat: '3.2',
    unit: 'hrs/day',
    label: 'Time in reactive mode (Slack, email, ad-hoc calls)',
    note: 'Most founders underestimate this by 40%.',
  },
  {
    stat: '11',
    unit: 'min',
    label: 'Average cognitive recovery time after interruption',
    note: 'Each meeting without a buffer costs more than the meeting itself.',
  },
]

const PAIN_POINTS = [
  {
    icon: Clock,
    problem: 'You add events in fragments — a Slack link, a phone note, an email thread',
    fix: 'Forward the email subject, paste the Slack message, speak the idea. Momenties parses all of it. One input, one event.',
  },
  {
    icon: Rocket,
    problem: 'Investor and customer calls scatter across your week without pattern',
    fix: 'Analytics shows time by category (investor, customer, team, admin). See what\'s actually eating your week.',
  },
  {
    icon: BarChart3,
    problem: 'You schedule focus time that always gets trampled',
    fix: 'Focus mode enforces the block. Attendees get warned. DND enables automatically. The block survives.',
  },
  {
    icon: Users,
    problem: 'Coordinating schedules with co-founders is a daily negotiation',
    fix: 'Shared calendar overlays (Pro/Team) show real availability. No back-and-forth.',
  },
]

const WEEK_VIEW = [
  {
    moment: 'Monday 7am',
    action: 'Daily Brief. Load for the week, one scheduling conflict flagged, one suggestion. 45 seconds.',
  },
  {
    moment: 'Before investor call',
    action: 'Voice-add prep: "30 min Sequoia deck prep before Tuesday 10am". Parsed instantly, added to calendar.',
  },
  {
    moment: 'After customer call',
    action: 'Snap photo of whiteboard notes. Action items added directly to Thursday\'s calendar.',
  },
  {
    moment: 'Midweek',
    action: 'Scheduling link sent to three prospects. They book against your real availability. Zero back-and-forth.',
  },
  {
    moment: 'Friday 4pm',
    action: 'Analytics. How much time was in meetings this week? How much investor, customer, team? Is the ratio shifting?',
  },
]

const TESTIMONIALS = [
  {
    quote: 'I used to spend 25 minutes a day just processing calendar requests. Now it\'s under 5. The voice add while walking between meetings is genuinely magic.',
    name: 'Sarah Chen',
    role: 'CEO & Co-founder, Series A SaaS',
    avatar: 'S',
  },
  {
    quote: 'The analytics made me realize I was in 4 hours of internal meetings every Monday. I cut it to 90 minutes. My whole week feels different now.',
    name: 'Marcus Webb',
    role: 'Founder, B2B marketplace',
    avatar: 'M',
  },
]

export default function ForFoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Founders"
        title={
          <>
            Your calendar
            <br />
            <em className="not-italic text-gold">moves as fast as you do.</em>
          </>
        }
        lede="Founders context-switch 47 times a day. Every friction point in your calendar compounds. Momenties is built for the speed, chaos, and intentionality of running a company."
        crumbs={[{ label: 'For Founders' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See calendar analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan forever · Pro from $12/month</p>
      </PageHero>

      {/* Truths */}
      <section className="py-14 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">The founder calendar reality</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Three numbers most founders haven't looked at.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TRUTHS.map((t, i) => (
              <Reveal key={t.stat} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-display text-5xl font-bold text-gold">{t.stat}</span>
                    <span className="text-sm text-gold/60 mb-2 font-mono">{t.unit}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground mb-1">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we fix</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four founder calendar problems solved.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Week view */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              A founder week with Momenties.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WEEK_VIEW.map((step, i) => (
              <Reveal key={step.moment} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.moment}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlight */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Why founders specifically</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              The founder schedule is unlike any other.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                An engineer's week has a natural structure — standups, sprint ceremonies, code. An executive assistant's week is predictable. A founder's week is genuinely none of the above. It's simultaneously board prep, customer support, recruiting, and product decisions, all competing for the same 40 hours.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Most calendar apps were built for the meeting-heavy executive, not the context-switching founder. They're good at <em className="not-italic text-foreground/70">scheduling</em> meetings. They're bad at helping you understand where your week actually went and whether that's the right place for it to go.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties adds one layer on top of your existing calendar: speed of input and clarity of data. You add things faster (AI parsing, voice, photo). You understand the output better (analytics, Daily Brief). Everything else — Google Calendar, your existing events, your team's calendars — stays exactly as it is.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'AI parsing', href: '/natural-language-calendar' },
                { label: 'Voice add', href: '/features/voice' },
                { label: 'Photo add', href: '/features/photo' },
                { label: 'Analytics', href: '/features/analytics' },
                { label: 'Focus mode', href: '/focus-mode' },
                { label: 'Daily Brief', href: '/daily-brief' },
              ].map((f) => (
                <Link
                  key={f.label}
                  href={f.href}
                  className="inline-flex items-center gap-1.5 text-xs text-gold/70 border border-gold/20 hover:border-gold/50 rounded-full px-3 py-1 transition-colors"
                >
                  {f.label} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-7 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[0,1,2,3,4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-base text-foreground/90 leading-snug mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">{t.avatar}</div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your next board meeting is already in a Slack message. Let's put it on the calendar."
        subtitle="AI input, focus mode, and analytics. Free forever plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See Pro features', href: '/pro' }}
      />
    </>
  )
}
