import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: '12 Calendar Hacks That Actually Work — From power users',
  description:
    'Twelve calendar hacks from Momenties power users: input tricks that save 10 minutes a day, block structures that protect focus, analytics moves that change behavior, and team patterns that eliminate scheduling waste.',
  alternates: { canonical: '/calendar-hacks' },
  openGraph: {
    title: '12 Calendar Hacks — Momenties',
    description: 'Calendar tricks from people who take scheduling seriously.',
    url: '/calendar-hacks',
    type: 'website',
  },
}

type HackCategory = 'speed' | 'focus' | 'analytics' | 'team'

const HACK_COLORS: Record<HackCategory, string> = {
  speed: 'text-blue-400/80 bg-blue-400/10 border-blue-400/20',
  focus: 'text-emerald-400/80 bg-emerald-400/10 border-emerald-400/20',
  analytics: 'text-purple-400/80 bg-purple-400/10 border-purple-400/20',
  team: 'text-rose-400/80 bg-rose-400/10 border-rose-400/20',
}

const HACKS: { number: number; title: string; body: string; category: HackCategory }[] = [
  {
    number: 1,
    category: 'speed',
    title: 'Voice-add during the conversation, not after',
    body: 'The moment a time is confirmed — still on the call, still in the meeting — speak it: "Doctor thursday 2pm." By the time you say goodbye, it\'s on calendar. The post-conversation window where events die is eliminated.',
  },
  {
    number: 2,
    category: 'focus',
    title: 'Block tomorrow\'s first hour today',
    body: 'Before ending the workday, add one block for tomorrow\'s most important task. Name it specifically: "Write proposal introduction." Tomorrow you wake up knowing exactly what the first hour is for. No decision cost at 8am.',
  },
  {
    number: 3,
    category: 'analytics',
    title: 'One tag rule: add it when you create the event',
    body: 'Retroactive tagging is an intention that never happens. Add the category tag — "client-A," "deep-work," "admin" — at creation. Two weeks of tagged events turns analytics from noise into signal.',
  },
  {
    number: 4,
    category: 'speed',
    title: 'Photograph any printed schedule immediately',
    body: 'The moment a printed conference program, class schedule, or training agenda is in your hand: photograph it. AI extracts every date and time in 30 seconds. The alternative is "I\'ll do it later" — which means 40% chance it doesn\'t happen.',
  },
  {
    number: 5,
    category: 'team',
    title: 'Overlay before every scheduling conversation',
    body: '"When are you free?" is a two-message sequence that takes 24-48 hours. Overlay shows the free window in 3 seconds. "Tuesday 2pm works?" closes the loop before the slack thread gets long.',
  },
  {
    number: 6,
    category: 'focus',
    title: 'Name blocks with the deliverable, not the category',
    body: '"Deep work" is noise. "Draft investor update email" is a block you get into immediately. The title is a cue — the more specific it is, the faster the cognitive transition from calendar to execution.',
  },
  {
    number: 7,
    category: 'analytics',
    title: 'Run the meeting audit quarterly',
    body: 'Every recurring meeting was created for a reason that may no longer exist. Four times per year: open analytics, see which recurring meetings are still producing value, kill the ones that aren\'t. Meeting load drops 20% on average.',
  },
  {
    number: 8,
    category: 'speed',
    title: 'Template every repeatable week or event type',
    body: 'Sprint week, onboarding week, conference prep week, quarterly planning cycle — any structured sequence you\'ve done twice is a template candidate. Creating from a template takes 30 seconds. Building from scratch takes 30 minutes.',
  },
  {
    number: 9,
    category: 'focus',
    title: 'Add buffer blocks before high-stakes meetings',
    body: 'A 30-minute prep block before the board presentation or client pitch is not optional — it\'s part of the meeting. Block it when you schedule the meeting. Future you will enter the room prepared, not breathless.',
  },
  {
    number: 10,
    category: 'team',
    title: 'End every recurring meeting with "next meeting time"',
    body: 'When the meeting ends, the next one is already agreed on. One person voice-adds it before closing their laptop: "Team sync in two weeks, thursday 3pm." Everyone hears it happen. Nobody needs a calendar invite negotiation.',
  },
  {
    number: 11,
    category: 'analytics',
    title: 'Check last week\'s hours before planning next week',
    body: 'Two minutes on analytics before the weekly planning session grounds the plan in reality. Most people who see they spent 22 hours in meetings last week will immediately protect time differently for next week.',
  },
  {
    number: 12,
    category: 'speed',
    title: 'Set recurring events with an end date and review',
    body: '"Weekly 1:1 with Sam for 12 weeks." The end date forces a conscious renewal decision. Most meetings that people hate continue because they were created without an end date and nobody thought to stop them.',
  },
]

export default function CalendarHacksPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Hacks"
        title={
          <>
            12 calendar hacks
            <br />
            <em className="not-italic text-gold">that actually save time.</em>
          </>
        }
        lede="These aren't tricks — they're habits that compound. Each one saves 5-15 minutes per day individually. Together they represent a fundamentally different relationship with your calendar: proactive instead of reactive, precise instead of approximate."
        crumbs={[{ label: 'Calendar Hacks' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try Momenties free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-tips"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Calendar tips
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Works with any calendar app</p>
      </PageHero>

      {/* Hacks */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(HACK_COLORS) as HackCategory[]).map((cat) => (
                <span key={cat} className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${HACK_COLORS[cat]}`}>
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            {HACKS.map((hack, i) => (
              <Reveal key={hack.number} delay={(i % 3) * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-mono text-[11px] text-gold/50 shrink-0 pt-0.5">#{hack.number}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full border ${HACK_COLORS[hack.category]}`}>{hack.category}</span>
                      </div>
                      <h3 className="text-sm font-medium text-foreground">{hack.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">{hack.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Go deeper on these habits.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: '15 calendar tips', href: '/calendar-tips', desc: 'The companion to this list — capture habits and block discipline' },
              { label: 'Voice scheduling', href: '/voice-calendar', desc: 'The fastest input method — add events as fast as you think them' },
              { label: 'Calendar analytics', href: '/features/analytics', desc: 'What your calendar data can tell you about your week' },
              { label: 'Time blocking', href: '/time-blocking', desc: 'The method behind most of the focus hacks on this list' },
              { label: 'Calendar templates', href: '/calendar-templates', desc: 'Templates for every repeatable sequence' },
              { label: 'Team calendar', href: '/team-calendar', desc: 'The overlay and team coordination features' },
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
        title="The calendar that makes these habits easy."
        subtitle="Voice input, templates, analytics, and focus mode — all in Momenties. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See all features', href: '/features' }}
      />
    </>
  )
}
