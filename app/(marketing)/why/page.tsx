import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Breadcrumbs } from '@/components/marketing/Breadcrumbs'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Momenties — The argument for AI calendar',
  description:
    'A short essay on why the calendar is the last productivity tool to get a real AI upgrade — and what that upgrade should actually look like.',
  alternates: { canonical: '/why' },
  openGraph: {
    title: 'Why Momenties — The argument for AI calendar',
    description:
      'The calendar is the last productivity tool to get a real AI upgrade. Here is what that upgrade should look like.',
    url: '/why',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Momenties',
    description: 'The case for an AI calendar that actually helps.',
  },
}

export default function WhyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
          <Breadcrumbs items={[{ label: 'Why Momenties' }]} />
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-5 mt-4">
            An essay · April 2026
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.06] tracking-tight text-foreground">
            The calendar is the last tool that hasn&apos;t changed.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Email got AI. Code got AI. Writing, design, search, customer support — all changed. The calendar is still a grid of boxes you drag things into.
          </p>
        </div>
      </section>

      {/* Essay body */}
      <article className="py-16 px-5 md:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto space-y-10">

          <Reveal>
            <p className="text-[17px] md:text-[18px] leading-[1.85] text-foreground/88 font-light">
              Consider what hasn&apos;t changed about your calendar in the last decade. You still click a box. You still fill in a title, a time, a duration. You still fight with invite notifications. You still send a &ldquo;What time works for you?&rdquo; email and wait.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] md:text-[18px] leading-[1.85] text-foreground/88 font-light">
              Meanwhile, every other tool around you has been overhauled. Your code editor understands your codebase. Your email client drafts replies. Your design tool suggests alternatives. But your calendar still requires you to know the exact syntax for adding a recurring event.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="font-display text-2xl md:text-3xl italic text-foreground/90 leading-snug border-l-2 border-gold/40 pl-6 py-2">
              &ldquo;You still send a &lsquo;What time works for you?&rsquo; email and wait.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={40}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Why the calendar specifically.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-foreground/88 font-light">
              The calendar is special because it governs everything else. It&apos;s not a place you visit once a day. It&apos;s the lens through which your entire work life is organized. What you schedule is what gets done. What you don&apos;t schedule drifts.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              It&apos;s also special because of its friction. Most people hate managing their calendar. They put it off. They double-book by accident. They miss things they meant to schedule. They feel behind. The friction is not incidental — it&apos;s the product.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              An AI that removes that friction completely changes the relationship. When adding an event costs nothing — when you can say &ldquo;dentist Friday at three&rdquo; and it&apos;s done — the calendar becomes less of a burden and more of a thought partner. You put <em>more</em> in it because the cost of putting things in it approaches zero.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              What &ldquo;AI calendar&rdquo; usually means — and why it&apos;s wrong.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-foreground/88 font-light">
              Most products that call themselves &ldquo;AI calendar&rdquo; have done one of two things: bolted a chatbot onto a calendar UI, or added a scheduling assistant that proposes optimal times based on your existing events. Both are genuinely useful. Neither is transformative.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              The chatbot approach is limited by the interface. You&apos;re still going to the calendar to talk to it. The friction is still there — it&apos;s just been moved from &ldquo;click and fill&rdquo; to &ldquo;describe and confirm.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              The scheduling assistant approach is limited by scope. It optimizes the calendar you already have. It doesn&apos;t change how you add things to it in the first place. Your calendar is still a form.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="font-display text-2xl md:text-3xl italic text-foreground/90 leading-snug border-l-2 border-gold/40 pl-6 py-2">
              &ldquo;The goal is not to make the form easier. It&apos;s to remove the form entirely.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={40}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              What it should actually look like.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-foreground/88 font-light">
              The right version of AI calendar looks like a very good assistant. You tell it things. It figures out the rest. &ldquo;Dentist Thursday 3pm&rdquo; → scheduled. &ldquo;Standup every weekday 9am&rdquo; → recurring event. A photograph of a conference schedule → all eleven events in your calendar by the time you put your phone down.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              It&apos;s modally indifferent. You can type, speak, or snap — whichever requires the least effort in the moment. You&apos;re on a train: speak it. You&apos;re reading a printed schedule: snap it. You&apos;re at your desk: type it. The method doesn&apos;t matter. The event ends up in your calendar either way.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              It&apos;s also not anxious. This is harder to describe, but important. A lot of calendar software feels slightly panicked — badges, alerts, color-coded urgency, dashboards telling you whether you&apos;ve been productive enough. Momenties is the opposite. It helps you schedule things and then gets out of your way. It doesn&apos;t track you. It doesn&apos;t grade you. It doesn&apos;t ask for your attention; it protects it.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              The right question to ask.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-foreground/88 font-light">
              Here is the test we apply when deciding whether to build a feature: does this make the calendar feel like less work, or more? If the answer is &ldquo;less&rdquo; — if it removes friction, surfaces something you need without you asking, or handles a repetitive task you were going to do anyway — we build it. If the answer is &ldquo;more&rdquo; — if it adds a new thing to configure, a new notification to process, a new dashboard to check — we don&apos;t.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              This test sounds simple. It is surprisingly hard to pass. Most features fail it. The natural tendency of software is to accumulate — to add one more setting, one more toggle, one more stat. The discipline is saying no to the right things. We&apos;re not perfect at it. But we try.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="font-display text-2xl md:text-3xl italic text-foreground/90 leading-snug border-l-2 border-gold/40 pl-6 py-2">
              &ldquo;The natural tendency of software is to accumulate. The discipline is saying no to the right things.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={40}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Why now.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-foreground/88 font-light">
              Momenties is possible now because two things converged: fast, cheap language models that can parse intent from natural language, and multimodal models that can read images. The language piece existed a few years ago, but it was too slow and too expensive for real-time, single-event creation. The image piece didn&apos;t exist at consumer quality until Gemini.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className="text-[17px] leading-[1.85] text-foreground/88 font-light">
              The combination means the calendar can now accept the same inputs you already use naturally. You photograph the conference schedule. You say the dentist appointment out loud. You type the lunch plan the same way you&apos;d text it to a friend. The calendar should understand all of these. Now it can.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-5">
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors"
              >
                Read the full manifesto <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Try the live demo <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About the team <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <CTA
        title="The calendar you just read about."
        subtitle="Try it in two minutes. No credit card, no form, no friction."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Live demo', href: '/demo' }}
      />
    </>
  )
}
