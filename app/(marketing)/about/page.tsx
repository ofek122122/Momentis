import type { Metadata } from 'next'
import { PageHero } from '@/components/marketing/PageHero'
import { CTA } from '@/components/marketing/CTA'
import { Reveal } from '@/components/marketing/Reveal'
import { Compass, Feather, Heart, Lock, Sparkles, Sunrise } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Our story, our mission',
  description: 'Calendro is built by a small team obsessed with the quiet hours of the day. This is why we started, and where we\'re going.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Calendro',
    description: 'The story behind the calendar built for your most-protected hours.',
    type: 'website',
    url: '/about',
  },
}

const VALUES = [
  {
    icon: Feather,
    title: 'Quiet over loud',
    desc: 'We design for the end of a long day, not the start of a sales meeting.',
  },
  {
    icon: Heart,
    title: 'Respect the human',
    desc: 'No streaks, no notifications that don\'t earn their spot. Your attention is sacred.',
  },
  {
    icon: Lock,
    title: 'Private by default',
    desc: 'Your calendar is the most revealing document you own. We treat it accordingly.',
  },
  {
    icon: Sparkles,
    title: 'AI as a quiet helper',
    desc: 'Models do the boring work. You keep the agency. Always a human in the loop.',
  },
  {
    icon: Compass,
    title: 'Slow to ship',
    desc: 'One polished thing beats ten half-things. We cut more features than we release.',
  },
  {
    icon: Sunrise,
    title: 'Calm software',
    desc: 'Software should lower your heart rate. If it doesn\'t, we\'ve failed.',
  },
]

const TEAM = [
  { name: 'Iris Kwon', role: 'Co-founder · Design', initials: 'IK', bio: 'Previously at Stripe, Superhuman. Obsessed with typography and silence.' },
  { name: 'Oren Marlow', role: 'Co-founder · Engineering', initials: 'OM', bio: 'Built calendaring infrastructure at Google. Writes C like it\'s poetry.' },
  { name: 'Rafa Vieira', role: 'Founding AI', initials: 'RV', bio: 'ML at Anthropic and DeepMind. Speaks six languages, argues in Rust.' },
  { name: 'Lena Osei', role: 'Head of Product', initials: 'LO', bio: 'Shipped calm-software at Linear and Notion. Bakes sourdough.' },
  { name: 'Sam Halverson', role: 'Founding Engineer', initials: 'SH', bio: 'Early Vercel. Will spend three weeks to save users three seconds.' },
  { name: 'Noa Bellini', role: 'Community & Support', initials: 'NB', bio: 'Answers every email like it\'s from a friend. Because usually, it is.' },
]

const MILESTONES = [
  { date: 'Spring 2024', title: 'Two notes apps and a whiteboard', desc: 'Iris and Oren prototype a parser that turns "dentist thursday 3pm" into a real event.' },
  { date: 'Summer 2024', title: 'First private beta', desc: '40 friends and family. First time a stranger says "I trust this with my life."' },
  { date: 'Fall 2024', title: 'Seed round closed', desc: 'Backed by a small group of people who care about calm software, not growth at all costs.' },
  { date: 'Winter 2024', title: 'Voice & photo launch', desc: 'Deepgram + Gemini Vision ship. Users start sending us photos of their grandmothers\' recipe cards.' },
  { date: 'Spring 2025', title: '50,000 events scheduled', desc: 'Quietly. No big press push. Just good word of mouth.' },
  { date: 'Today', title: 'Public beta', desc: 'We open the doors. You\'re here. Hello.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Calendro"
        title={
          <>
            A calendar for the <em className="not-italic text-gold">quiet hours</em>.
          </>
        }
        lede="We started Calendro because scheduling software felt like an argument. It barked, it nagged, and it confused what mattered with what merely was urgent. We wanted a gentler tool. One that asked less and did more."
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-[1.75] text-foreground/85 font-light">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic text-foreground leading-snug">
              &ldquo;The calendar is the most revealing document a person owns.&rdquo;
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">— Iris Kwon, co-founder</p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              In 2024, we were two friends working on other things. Iris was designing a meditation app; Oren was
              making calendar infrastructure for an airline. We both, separately, had the same annoyance: every
              tool we used to schedule our lives treated a dentist appointment the same as a board meeting, and
              our calendars were turning into a chorus of tiny arguments.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p>
              We started sketching. Then prototyping. The first version was an input field that took the sentence
              <span className="font-mono text-sm text-gold mx-1">&quot;dentist thursday 3pm&quot;</span>
              and turned it into a real event on Google Calendar. We used it for two weeks. We couldn&apos;t go back.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              That&apos;s the company. A quiet tool that respects the fact that your time is actually your life. We
              don&apos;t think calendars should be loud. We don&apos;t think AI should be creepy. We don&apos;t think you
              should have to click five things to remember to call your mother.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="font-display text-xl md:text-2xl text-gold italic">
              Just say it. It&apos;s scheduled.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-sm text-muted-foreground">
              For the long version of our thinking, read the{' '}
              <a href="/manifesto" className="text-gold hover:underline">
                Calendro Manifesto
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-5 md:px-8 border-b border-border relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(40% 50% at 50% 0%, rgba(197,163,92,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Mission</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Give people a kinder relationship with their time.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
            We believe the way software treats your attention shapes the way you treat yourself. Calendro is our
            attempt to make that treatment a little more careful, a little more quiet, and a little more true.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Values</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              What we hold to.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center mb-4">
                    <v.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">The team</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Fourteen people.<br/>
              <em className="not-italic text-gold">One very long whiteboard.</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center mb-5 font-mono text-gold text-sm">
                    {member.initials}
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{member.name}</h3>
                  <p className="text-xs font-mono text-gold/70 mt-0.5">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-3">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Milestones</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Where we&apos;ve been.
            </h2>
          </Reveal>
          <ol className="relative border-l border-border/60 pl-8 space-y-10">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <li className="relative">
                  <span className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-gold ring-4 ring-[#0c0c0f]" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-1">{m.date}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{m.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTA
        title="Build your quieter day with us."
        subtitle="We're hiring thoughtful people. And we're always hiring thoughtful users."
        primary={{ label: 'See open roles', href: '/careers' }}
        secondary={{ label: 'Start using Calendro', href: '/login' }}
      />
    </>
  )
}
