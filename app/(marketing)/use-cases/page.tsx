import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Briefcase, GraduationCap, Pen, Laptop, Heart, Users2, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Use cases — Calendro for every kind of day',
  description: 'Founders, students, freelancers, managers, parents, and doctors — here\'s how Calendro fits your week.',
  alternates: { canonical: '/use-cases' },
  openGraph: {
    title: 'Calendro Use Cases',
    description: 'How Calendro works for founders, students, freelancers, and more.',
    url: '/use-cases',
  },
}

const PERSONAS = [
  {
    icon: Briefcase,
    slug: 'founder',
    title: 'Founders',
    tagline: 'Every meeting is an interruption. Treat it that way.',
    quote: 'I used to spend 20 minutes a day scheduling. Now I spend zero. That\'s 80 hours a year back.',
    person: 'Indira Patel, Founder · Aperture',
    bullets: [
      'Snap a photo of an investor coffee list — every email, every intro, in 30 seconds.',
      'Daily AI briefing highlights your "real work" hours vs meeting hours.',
      'Meeting cost indicator shows the aggregate burn of every recurring standup.',
      'Shared calendars for your two co-founders. Find overlap instantly.',
    ],
  },
  {
    icon: GraduationCap,
    slug: 'student',
    title: 'Students',
    tagline: 'The syllabus is a photo. The semester is done.',
    quote: 'I take a photo of every syllabus in week one, and every assignment for the whole semester lands on my calendar with 3 days of lead time. Genuinely changed my GPA.',
    person: 'Noah Tessier, junior · NYU',
    bullets: [
      'Photo-to-events reads exam timetables, syllabi, and group-chat screenshots.',
      'Smart time suggestions block study sessions around class and social plans.',
      'Free forever on the education tier — no card, no upsells.',
      'Keyboard-first for people who live in the terminal.',
    ],
  },
  {
    icon: Pen,
    slug: 'freelancer',
    title: 'Freelancers',
    tagline: 'Five clients. One calendar. Zero chaos.',
    quote: 'Three client calendars, one personal, plus my partner\'s shared view. Calendro merges them without turning into a rainbow crayon box.',
    person: 'Priya Shankar, Fractional COO',
    bullets: [
      'Unified view across Google, Apple, and client Outlook calendars.',
      'Color-coding by source keeps work and life distinct without shouting.',
      'iCal export for invoicing — hours by client, project, or tag.',
      'Client-safe scheduling links that hide your personal events.',
    ],
  },
  {
    icon: Laptop,
    slug: 'manager',
    title: 'Managers',
    tagline: 'Protect your team\'s attention like it\'s yours.',
    quote: 'Our engineering team saw a 35% drop in meeting hours in the first quarter with Calendro. I did nothing but install it.',
    person: 'Linh Ngo, Engineering Manager · Helix',
    bullets: [
      'Team calendars with shared focus blocks and "do not disturb" windows.',
      'Meeting analytics: who\'s over-scheduled, who\'s under, who\'s drifting.',
      'One-click recurring-meeting audit: which standups are earning their spot?',
      'Slack integration so you never chase a meeting link again.',
    ],
  },
  {
    icon: Users2,
    slug: 'parent',
    title: 'Parents',
    tagline: 'Your family\'s week, in one quiet view.',
    quote: 'I used to have the whole school calendar on a magnet on the fridge. Now it\'s on my phone. Calendro read the PDF and did it.',
    person: 'Daniel Reyes, partner & parent',
    bullets: [
      'Snap the school calendar — every half-day, holiday, and conference populated.',
      'Shared family calendar with roles (parent, co-parent, caregiver).',
      'Smart reminders that respect bedtime and wake-up routines.',
      'Private by design — family plans deserve real privacy.',
    ],
  },
  {
    icon: Heart,
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'HIPAA-ready. Shift-aware. Actually human.',
    quote: 'Our residency program uses Calendro for shift swaps. The on-call schedule is now a photo, not a spreadsheet. Our chief resident sleeps better because of it.',
    person: 'Dr. Amira Okafor, Residency Director',
    bullets: [
      'HIPAA BAA available on Enterprise tier.',
      'Shift-swap requests with automatic conflict detection.',
      'Photo-to-calendar for hand-drawn on-call boards.',
      'Works on every device in the break room.',
    ],
  },
]

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title={
          <>
            Calendro fits <em className="not-italic text-gold">every kind of day</em>.
          </>
        }
        lede="Whatever your shape of week — startup, school, ward, studio — here's how Calendro slots in."
        crumbs={[{ label: 'Use cases' }]}
      />

      {/* Sections per persona */}
      <section className="border-b border-border">
        {PERSONAS.map((p, i) => (
          <div
            key={p.slug}
            id={p.slug}
            className={`py-20 px-5 md:px-8 border-b border-border last:border-b-0 ${i % 2 === 1 ? 'bg-white/[0.015]' : ''}`}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center mb-5">
                  <p.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                  For {p.title.toLowerCase()}
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05]">
                  {p.tagline}
                </h2>
                <ul className="mt-8 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="text-gold mt-1.5">✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/use-cases/${p.slug}`}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
                  >
                    Read the full case
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
                  >
                    Try it free
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={140} className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="rounded-2xl border border-border lux-card p-7">
                  <p className="font-display italic text-lg md:text-xl text-foreground leading-snug">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-border/60 text-xs font-mono text-muted-foreground">
                    — {p.person}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <CTA
        title="Your week. Calendro-shaped."
        subtitle="Free to start. Works with every calendar. Takes 90 seconds to set up."
        primary={{ label: 'Get started free', href: '/login' }}
        secondary={{ label: 'Read customer stories', href: '/customers' }}
      />
    </>
  )
}
