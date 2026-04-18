import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Clock, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Software Engineers — Deep work time, sprint planning, and no meeting morning',
  description:
    'Software engineers need long uninterrupted blocks for deep development work, clear sprint deadlines, and protection from the meeting creep that fragments coding time. Momenties protects deep work, tracks sprint milestones, and shows where engineering hours actually go.',
  alternates: { canonical: '/for/engineers' },
  openGraph: {
    title: 'Momenties for Software Engineers',
    description: 'Deep work protection, sprint tracking, and engineering time analytics for software engineers.',
    url: '/for/engineers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Deep work blocks that protect themselves',
    desc: 'Engineering requires 2–4 hour uninterrupted focus sessions. Block deep development time before standups, sprint reviews, and "quick calls" fill the calendar. "Deep work — auth refactor, tuesday 9am-noon." Protected before the sprint begins.',
  },
  {
    icon: Clock,
    title: 'Sprint milestones and deadlines',
    desc: '"PR review — auth service, thursday." "Sprint demo — friday 2pm." "Release cut — v2.4, monday EOD." All sprint and release deadlines on the calendar. Visible without opening Jira.',
  },
  {
    icon: BarChart3,
    title: 'Deep work vs. meeting ratio',
    desc: 'Tag every coding session, code review, meeting, and interrupt. Analytics shows the actual ratio — deep engineering work vs. everything else. Less than 50% coding? Now you can show it to your manager with data.',
  },
  {
    icon: Zap,
    title: 'No-meeting mornings protected',
    desc: '"No meetings before 11am" as a standing block. Colleagues see the signal. Mornings are the highest-cognitive-load window for most engineers. Protecting them is an engineering output multiplier.',
  },
]

const ENGINEER_PATTERNS = [
  { time: 'Sprint start', action: 'Block all deep work sessions for the sprint before sprint kickoff adds noise. 3-hour coding blocks on Tuesday, Wednesday, Thursday mornings. Calendar protected from the first day.' },
  { time: 'Daily', action: '"Deep work — feature X implementation, 9am-noon." Pre-standup focus session. The work happens before the status update. Not the other way around.' },
  { time: 'Code review', action: '"Code review block — 2-3pm daily." Batched, not scattered. Review is deep work too — requires focus. The team knows the review window.' },
  { time: 'Sprint ceremonies', action: 'Sprint review, retrospective, and planning all on calendar at the start of the sprint. No week-end calendar tetris trying to find a 90-minute slot.' },
  { time: 'On-call', action: '"On-call rotation — week of july 14." Blocked. Deep work sessions adjusted. Context-switching on-call week means shorter blocks, more interrupt buffer.' },
]

export default function ForEngineersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Software Engineers"
        title={
          <>
            Deep work protected.
            <br />
            <em className="not-italic text-gold">No-meeting morning enforced.</em>
          </>
        }
        lede="Software engineers need long uninterrupted blocks for deep development work, clear sprint milestones, and protection from the meeting fragmentation that kills output. Momenties blocks deep work before meetings fill the sprint, tracks engineering time vs. meeting time, and gives you the data to defend your focus time."
        crumbs={[{ label: 'For Software Engineers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How engineers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for engineering time management.</h2>
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

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Engineering sprint rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A software engineer&apos;s sprint with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {ENGINEER_PATTERNS.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;Analytics showed me I was getting 3–4 hours of actual coding per day. The rest was standups, Slack, reviews, and random calls. I shared the data with my eng manager and we implemented no-meeting mornings for the whole team. My deep work time jumped to 6 hours per day. Velocity went up 40%.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Liam K.</div>
                  <div className="text-xs text-muted-foreground">Senior software engineer, B2B SaaS</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Engineering analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Your engineering time in numbers.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Deep coding hours per sprint',
                'Meeting load vs. engineering ratio',
                'Deep work fragmentation (blocks interrupted)',
                'On-call vs. development week comparison',
                'Sprint ceremony time per sprint',
                'Code review time per week',
                'No-meeting morning adherence',
                'Weekly deep work trend',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Deep work protected. Sprint tracked. No-meeting morning enforced."
        subtitle="Engineering time blocking, deep work analytics, and sprint milestone tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Deep work guide', href: '/deep-work' }}
      />
    </>
  )
}
