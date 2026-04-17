import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { GraduationCap, Check, Camera, BookOpen, Users, ArrowUpRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendro for Students — Free forever with a .edu email',
  description: 'Students and educators get Calendro Pro free with a verified .edu (or equivalent) email. Snap your syllabus. Keep your semester.',
  alternates: { canonical: '/education' },
  openGraph: {
    title: 'Calendro for Students & Educators',
    description: 'Free Pro with a .edu email.',
    url: '/education',
  },
}

const FEATURES = [
  { icon: Camera, title: 'Snap your syllabus', desc: 'First week of class: photograph every syllabus. Every assignment, reading, and exam lands on your calendar with 3-day lead time.' },
  { icon: BookOpen, title: 'Study blocks, protected', desc: 'Smart time suggestions carve out study windows around classes, social commitments, and sleep.' },
  { icon: Users, title: 'Group project sanity', desc: 'Shared calendars for team projects. Find meeting times without a 40-message chat thread.' },
  { icon: Sparkles, title: 'Morning briefing', desc: 'AI summary each morning: today\'s classes, deadlines this week, and one gentle nudge about the big one.' },
]

const WHO = [
  { title: 'Students', bullets: ['Free Pro for entire degree', 'Syllabus photo parsing', 'Shared group-project calendars', 'Keyboard-first shortcuts'] },
  { title: 'Educators', bullets: ['Free for full-time teaching staff', 'Office-hour booking links', 'Class schedule templates', 'Academic calendar sync'] },
  { title: 'Schools & universities', bullets: ['Bulk licensing for whole departments', 'SSO via campus IdP', 'Custom training on request', 'Academic DPA'] },
]

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendro for Students"
        title={
          <>
            Your <em className="not-italic text-gold">whole semester</em>, in a photo.
          </>
        }
        lede="A calm calendar that reads your syllabus, protects your study time, and keeps your group projects from becoming group-chat disasters. Free forever with a .edu email."
        crumbs={[{ label: 'Education' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="#get-free"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Get free Pro
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/30 transition-colors"
          >
            Try the demo
          </Link>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="py-14 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 'Free', l: 'Pro plan for students' },
            { v: '2 min', l: 'To parse a syllabus' },
            { v: '42', l: 'Partner universities' },
            { v: '12k+', l: 'Students using Calendro' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl font-bold shimmer-text">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">
              For the semester ahead
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Built for your week.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div className="rounded-2xl border border-border lux-card p-7 h-full">
                  <f.icon className="h-5 w-5 text-gold mb-5" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Who qualifies.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {WHO.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="rounded-2xl border border-border lux-card p-7 h-full">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-5">{w.title}</h3>
                  <ul className="space-y-2.5">
                    {w.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student story */}
      <section className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="h-9 w-9 text-gold mx-auto mb-5" />
          <p className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
            &ldquo;I take a photo of every syllabus in week one, and every assignment for the whole semester lands on my calendar with 3 days of lead time. Genuinely changed my GPA.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center text-xs font-mono text-gold">
              NT
            </div>
            <div className="text-left">
              <div className="text-sm text-foreground">Noah Tessier</div>
              <div className="text-xs font-mono text-muted-foreground">Junior · NYU</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get free */}
      <section id="get-free" className="py-20 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Claim your free plan.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Sign up with any .edu email (or equivalent academic domain) and Calendro Pro is yours for as long as you&apos;re a student. No card required, no trial, no auto-upgrade.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Get started free <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-xs font-mono text-muted-foreground">
            Need your school added to our list? Email{' '}
            <a href="mailto:edu@calendro.app" className="text-gold hover:underline">
              edu@calendro.app
            </a>
          </p>
        </div>
      </section>

      <CTA
        title="A calmer semester is yours."
        subtitle="If you're a student, you pay nothing. If you're an educator, same. We keep the lights on through paid plans and a quiet bit of enterprise."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Read customer stories', href: '/customers' }}
      />
    </>
  )
}
