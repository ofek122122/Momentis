import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: '15 Calendar Tips That Actually Work — From power users',
  description:
    'Fifteen calendar tips from Momenties power users: time blocking that sticks, recurring events done right, analytics that change behavior, and capture habits that make your calendar trustworthy.',
  alternates: { canonical: '/calendar-tips' },
  openGraph: {
    title: '15 Calendar Tips — Momenties',
    description: 'Calendar tips from people who take scheduling seriously.',
    url: '/calendar-tips',
    type: 'website',
  },
}

type Category = 'capture' | 'blocks' | 'analytics' | 'habits' | 'team'

const TAG_COLORS: Record<Category, string> = {
  capture: 'text-blue-400/80 bg-blue-400/10 border-blue-400/20',
  blocks: 'text-emerald-400/80 bg-emerald-400/10 border-emerald-400/20',
  analytics: 'text-purple-400/80 bg-purple-400/10 border-purple-400/20',
  habits: 'text-amber-400/80 bg-amber-400/10 border-amber-400/20',
  team: 'text-rose-400/80 bg-rose-400/10 border-rose-400/20',
}

const TIPS: { number: number; title: string; body: string; category: Category }[] = [
  {
    number: 1,
    category: 'capture',
    title: 'Add events the moment they\'re confirmed, not later',
    body: 'The single most important habit: add to calendar while the other person is still talking. "Later" means 30% chance it\'s forgotten. Voice input makes this possible — it\'s faster than finishing the call.',
  },
  {
    number: 2,
    category: 'blocks',
    title: 'Name blocks descriptively, not generically',
    body: '"Deep work" is useless. "Write Q2 report — sections 2–4" tells you exactly what to do when the block starts. The more specific the title, the faster you get into flow.',
  },
  {
    number: 3,
    category: 'habits',
    title: 'Schedule recurring events with an end date, then renew',
    body: '"Weekly 1:1 with Alex for 12 weeks" forces you to review whether the meeting still makes sense. Many recurring meetings that everyone hates continue because nobody thought to question them.',
  },
  {
    number: 4,
    category: 'analytics',
    title: 'Look at last week\'s hours before planning this week',
    body: 'Most people plan aspirationally. Looking at what actually happened last week grounds the plan in reality. Two minutes on analytics before the weekly review changes what you schedule.',
  },
  {
    number: 5,
    category: 'blocks',
    title: 'Add travel time as a separate block',
    body: 'Treat commute and travel as real calendar time. An offsite meeting at 2pm with 45 minutes of travel means a 1:15pm block, not a 2pm block. Respect it as work time.',
  },
  {
    number: 6,
    category: 'capture',
    title: 'Photo any printed schedule immediately',
    body: 'Conference agenda, class timetable, event program, training plan — photograph it the moment it\'s in your hand. Don\'t trust memory or "I\'ll add it later." AI extracts all the dates in 30 seconds.',
  },
  {
    number: 7,
    category: 'analytics',
    title: 'Tag every event at creation, not after',
    body: 'Retroactive tagging never happens. Tag when you create: "client-A," "deep-work," "admin," "personal." After 2 weeks, analytics becomes meaningful. After 2 months, it\'s genuinely actionable.',
  },
  {
    number: 8,
    category: 'blocks',
    title: 'Protect lunch every day, not just sometimes',
    body: 'Lunch is a recovery block. Protect it daily with Focus mode. When it\'s consistently blocked, meetings don\'t bleed into afternoons. When it\'s not, every afternoon starts depleted.',
  },
  {
    number: 9,
    category: 'habits',
    title: 'Daily Brief before email, every morning',
    body: 'The order matters: calendar first, email second. See what the day actually holds before being pulled into reactive mode by the inbox. Two minutes of awareness before 8 hours of work.',
  },
  {
    number: 10,
    category: 'team',
    title: 'Stop asking "when are you free?" — use availability overlay',
    body: 'The most time-wasting scheduling pattern: three messages back and forth to find a meeting time. Team overlay shows availability instantly. See the free window, book the meeting, done.',
  },
  {
    number: 11,
    category: 'analytics',
    title: 'Watch for creeping meeting time',
    body: 'Meetings expand to fill available calendar space. Weekly analytics shows the trend. Most people don\'t notice meeting load increasing until it\'s 60% of their week. The data catches it at 45%.',
  },
  {
    number: 12,
    category: 'capture',
    title: 'Voice-add immediately when a thought arises',
    body: '"Oh I should schedule X" in the shower, during a run, while cooking. Speak it. Done. The gap between thought and calendar entry should be zero, not "I\'ll remember to add it later."',
  },
  {
    number: 13,
    category: 'blocks',
    title: 'Leave buffer time between meetings',
    body: 'Back-to-back meetings are a scheduling error. 10 minutes between meetings for notes, bio break, and transition. Block it intentionally — your future self will be grateful every time.',
  },
  {
    number: 14,
    category: 'habits',
    title: 'Weekly review: compare intended vs. actual schedule',
    body: 'Every Sunday or Friday: what did you plan, what actually happened? Analytics shows the delta. The patterns that emerge from four weeks of this data are more actionable than any productivity book.',
  },
  {
    number: 15,
    category: 'team',
    title: 'Template every repeatable process',
    body: 'If you\'ve done it more than twice, it\'s a template candidate: sprint ceremonies, client onboarding, quarterly reviews, event planning. Templates reduce setup from 30 minutes to 30 seconds.',
  },
]

export default function CalendarTipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Tips"
        title={
          <>
            15 calendar tips
            <br />
            <em className="not-italic text-gold">from power users.</em>
          </>
        }
        lede="These aren't generic productivity tips — they're habits from Momenties users who take their calendar seriously. Capture habits, block discipline, analytics reviews, and team coordination patterns that actually work."
        crumbs={[{ label: 'Calendar Tips' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/productivity-tips"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Productivity tips
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · These tips work in any calendar app</p>
      </PageHero>

      {/* Tips */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TAG_COLORS) as Category[]).map((cat) => (
                <span key={cat} className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${TAG_COLORS[cat]}`}>
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            {TIPS.map((tip, i) => (
              <Reveal key={tip.number} delay={(i % 3) * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-mono text-[11px] text-gold/50 shrink-0 pt-0.5">#{tip.number}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full border ${TAG_COLORS[tip.category]}`}>{tip.category}</span>
                      </div>
                      <h3 className="text-sm font-medium text-foreground">{tip.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">{tip.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Go deeper on any tip.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Time blocking', href: '/time-blocking', desc: 'How to build a time-blocked calendar that actually works' },
              { label: 'Deep work system', href: '/deep-work', desc: 'Protecting focus blocks with calendar enforcement' },
              { label: 'Calendar analytics', href: '/features/analytics', desc: 'What your calendar data can tell you' },
              { label: 'Voice scheduling', href: '/voice-calendar', desc: 'Adding events by voice — the fastest capture method' },
              { label: 'Calendar templates', href: '/calendar-templates', desc: 'Templating every repeatable process' },
              { label: 'Weekly planner', href: '/weekly-planner', desc: 'The 7-minute weekly planning ritual' },
            ].map((link) => (
              <Reveal key={link.href} delay={60}>
                <Link href={link.href} className="block rounded-xl border border-border/50 p-4 hover:border-gold/30 transition-colors">
                  <p className="text-sm font-medium text-foreground mb-0.5">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Put the tips to work."
        subtitle="Momenties makes it fast enough to actually do them — free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
