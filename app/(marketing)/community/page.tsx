import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { MessageCircle, Calendar, Users, Mic2, BookOpen, ArrowUpRight, Handshake, Coffee } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community — Come say hello',
  description: 'Join the Calendro community: Discord, monthly office hours, user-run meetups, and a quiet corner of the internet for people who care about their time.',
  alternates: { canonical: '/community' },
  openGraph: {
    title: 'Calendro Community',
    description: 'Discord, office hours, meetups, and more.',
    url: '/community',
  },
}

const CHANNELS = [
  { icon: MessageCircle, title: 'Discord server', members: '4,200+', desc: 'The main forum. Feature requests, bug chat, show-and-tell. Open 24/7.', cta: 'Join Discord' },
  { icon: Mic2, title: 'Monthly office hours', members: 'Every 1st Thursday', desc: 'One hour with our founders. Questions, feedback, previews of what\'s coming. RSVPs on Luma.', cta: 'Next session →' },
  { icon: Calendar, title: 'User-run meetups', members: '14 cities', desc: 'Coffee with other Calendro users. Organized by people, not by us. Find one near you.', cta: 'Find a meetup' },
  { icon: BookOpen, title: 'Reading group', members: '~200 people', desc: 'A biweekly book club on time, attention, and calm software. Current book: Four Thousand Weeks.', cta: 'Join the list' },
]

const EVENTS = [
  { date: 'May 8', title: 'Office hours with Iris & Oren', place: 'Online · Luma', type: 'Webinar' },
  { date: 'May 15', title: 'NYC meetup at Devoción', place: 'Brooklyn, NY', type: 'Meetup' },
  { date: 'May 22', title: 'Deep-work day', place: 'San Francisco, CA', type: 'Workshop' },
  { date: 'Jun 3', title: 'Reading group · Four Thousand Weeks', place: 'Online', type: 'Book club' },
  { date: 'Jun 12', title: 'London meetup at Kaffeine', place: 'London, UK', type: 'Meetup' },
  { date: 'Jun 18', title: 'Office hours', place: 'Online · Luma', type: 'Webinar' },
]

const PROGRAMS = [
  { icon: Handshake, title: 'Student ambassadors', desc: 'Free Pro for a year, a branded kit, and a few dozen new friends. For students running their campus\'s productivity community.' },
  { icon: Users, title: 'Power-user program', desc: 'Early access to beta features. A private Slack. Quarterly swag. For people who tap every key on the keyboard.' },
  { icon: Coffee, title: 'Speakers & writers', desc: 'Guest posts on the Calendro blog. Podcast appearances. Co-branded essays. Email press@calendro.app to pitch.' },
]

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={
          <>
            Come <em className="not-italic text-gold">say hello</em>.
          </>
        }
        lede="A quieter corner of the internet, run by people who care about time. Discord, office hours, meetups, and a reading group for those who want to slow down together."
        crumbs={[{ label: 'Community' }]}
      />

      {/* Channels */}
      <section className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 80}>
                <a
                  href="#"
                  className="group block rounded-2xl border border-border lux-card p-7 h-full"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center">
                      <c.icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                      {c.members}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gold group-hover:-translate-y-0.5 transition-transform">
                    {c.cta} <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Upcoming
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              What&apos;s on.
            </h2>
          </Reveal>
          <div className="rounded-2xl border border-border overflow-hidden">
            {EVENTS.map((e, i) => (
              <div
                key={e.title}
                className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] items-center gap-4 px-5 py-4 border-b border-border last:border-b-0 hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.012]'}`}
              >
                <div className="font-mono text-sm text-gold min-w-[60px]">{e.date}</div>
                <div className="text-sm text-foreground font-medium">{e.title}</div>
                <div className="text-xs text-muted-foreground hidden md:block">{e.place}</div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold/70 px-2 py-0.5 rounded-full border border-gold/20">
                  {e.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Get involved
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Programs.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <p.icon className="h-5 w-5 text-gold mb-5" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Code of conduct */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              Code of conduct
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              We care how we show up.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our community is for people of all backgrounds, levels, and politics. Treat others as you&apos;d want the internet to treat you. Disagreements are welcome. Unkindness is not.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/90">
              {[
                'Be patient with newcomers. Everyone was one once.',
                'Critique ideas, not people.',
                'Assume good faith. Ask before judging.',
                'No harassment, hate, or discrimination. We enforce this immediately.',
                'Our moderators are volunteers. Treat them accordingly.',
              ].map((l) => (
                <li key={l} className="flex items-start gap-2">
                  <span className="text-gold mt-1">·</span> {l}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border hover:border-gold/30 text-sm text-foreground"
              >
                Full code of conduct <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="We hope to see you."
        subtitle="The community is small, kind, and growing. Come join us."
        primary={{ label: 'Join Discord', href: '#' }}
        secondary={{ label: 'Read the blog', href: '/blog' }}
      />
    </>
  )
}
