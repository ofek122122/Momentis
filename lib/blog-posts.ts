export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  author: { name: string; role: string; initials: string }
  date: string
  readingMinutes: number
  category: 'Productivity' | 'AI' | 'Design' | 'Time' | 'Engineering' | 'Company'
  excerpt: string
  body: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'the-quietest-feature',
    title: 'The quietest feature in Calendro',
    subtitle: 'Why the absence of a notification is a feature.',
    author: { name: 'Iris Kwon', role: 'Co-founder', initials: 'IK' },
    date: '2026-04-02',
    readingMinutes: 4,
    category: 'Design',
    excerpt:
      'Most calendar apps measure success in pings. We decided to measure it in the silences between them.',
    body: [
      "The most common request we got in our first year of Calendro wasn't for a new integration, a new theme, or a better AI model. It was, in so many words: *please stop interrupting me*.",
      "We took that seriously. We built a calendar that, by default, doesn't notify you about things you already know — about meetings you accepted weeks ago, about birthdays you've remembered on your own, about the bus you always catch at 8:15.",
      "Instead, Calendro only notifies you when something has changed, when a friend has invited you into a block you previously held open, or when a meeting you cared about got canceled. In other words: when a notification actually earns its ping.",
      "This is a hard feature to demo. It's literally the absence of something. But our users — the quiet ones, the ones whose phones already buzz for a living — tell us this is the thing they feel most strongly. They describe it as 'calmer.' One person said: 'My phone stopped lying to me.'",
      "Our bet at Calendro is that calm software will win — eventually — because attention is the most expensive currency we spend. We hope this essay is a small, quiet piece of evidence in that direction.",
    ],
  },
  {
    slug: 'what-we-learned-from-50000-events',
    title: 'What we learned from 50,000 events',
    subtitle: 'A designer, an engineer, and a spreadsheet walk into a bar.',
    author: { name: 'Oren Marlow', role: 'Co-founder', initials: 'OM' },
    date: '2026-03-18',
    readingMinutes: 7,
    category: 'Productivity',
    excerpt:
      "50,000 events later, patterns started to emerge. Here's what real calendars look like — and what we changed because of it.",
    body: [
      "Last month, Calendro crossed 50,000 events scheduled through our natural-language parser. That's small potatoes compared to Google Calendar, but it's enough to notice things. Here's what we found.",
      "**Most events are under 40 characters long.** The median input is 28 characters. This surprised us — we'd designed our input bar assuming long, rambling sentences. Most people say exactly what they need and nothing more.",
      "**Fridays are chaos.** Friday between 2-4pm is the most frequent reschedule window in our data. Whatever is happening in people's lives — let's call it the *Friday shuffle* — it reliably disrupts plans. We responded by making drag-to-reschedule faster and less punishing.",
      "**About 1 in 12 inputs contains a location.** Half of those locations are people, not places — 'at Sarah's house,' 'at Dave's desk,' 'at my dentist's office.' We now treat named people in locations as a soft hint to link the event to a contact.",
      "**The word 'maybe' appears in 3% of inputs.** That might not sound like a lot, but it was enough to convince us to add tentative events as a first-class concept. You can now type 'coffee with Marc maybe Thursday' and Calendro marks it as provisional until you accept.",
      "**Photos beat voice, narrowly.** 28% of inputs this quarter came from camera; 24% from voice; the rest from text. Vision is the sleeper hit. We think it's because the physical world is full of schedules no one wants to retype.",
      "None of this is world-shaking. But good software comes from quiet observation, and we think you deserve to know what we're looking at when we build.",
    ],
  },
  {
    slug: 'why-we-chose-gemini',
    title: "Why we chose Gemini (and not GPT)",
    subtitle: 'A boring engineering decision with a surprising amount of feeling.',
    author: { name: 'Rafa Vieira', role: 'Founding AI', initials: 'RV' },
    date: '2026-02-27',
    readingMinutes: 6,
    category: 'Engineering',
    excerpt:
      'We evaluated four frontier models for our parsing pipeline. Here\'s what made Gemini 2.5 the right fit for a calm calendar.',
    body: [
      "When we started Calendro, our parser was chrono-node plus a hand-written set of regexes. It worked. It worked for most short inputs. It did not work for 'a friend's wedding the weekend after Easter but only the reception, no ceremony.'",
      "So we evaluated AI models. We built the same suite of 600 test inputs — including traps — and ran them through GPT-4o, Claude 3.5 Sonnet, Gemini 2.5 Flash, and Gemini 2.5 Pro.",
      "**Accuracy**. All four were above 94%. Gemini 2.5 Pro was highest at 98.1%; Claude second at 97.3%; Gemini 2.5 Flash at 96.8%; GPT-4o at 96.2%. The gaps are small and real.",
      "**Latency**. This is where Gemini 2.5 Flash pulled away. Median 480ms to structured JSON, compared to 1.2s for Claude and 1.8s for GPT. On a device in your pocket, this is the difference between feeling instant and feeling laggy. We pick instant, every time.",
      "**Cost**. Flash is 10-20x cheaper per million tokens than the Pro-tier alternatives. For a calm product with a free tier, this is decisive.",
      "**Vision**. Our photo-to-events feature requires strong visual OCR + temporal reasoning. Gemini's vision model was consistently better at reading messy handwritten calendars, exam timetables, and small fonts.",
      "Gemini 2.5 Flash won on three of four criteria and was close on the fourth. We pair it with chrono-node as a local fallback, and we keep GPT-4o warm as a backup in case Gemini has an outage. The stack is boring and works, which is what we wanted.",
    ],
  },
  {
    slug: 'time-is-not-money',
    title: 'Time is not money',
    subtitle: 'Against the most common metaphor in productivity.',
    author: { name: 'Lena Osei', role: 'Head of Product', initials: 'LO' },
    date: '2026-02-11',
    readingMinutes: 5,
    category: 'Time',
    excerpt:
      "We say 'time is money' because both are scarce. But they behave nothing alike, and treating them the same is what makes most productivity apps so joyless.",
    body: [
      "Time is not money. They are both scarce resources, and that's where the similarity ends.",
      "Money is fungible. Time is not. A dollar you earn at 9am is exactly equivalent to a dollar you earn at 9pm. An hour you spend with your mother at 9am is not equivalent to an hour you spend with her at 9pm — they have different weather, different tones, different things to say to each other.",
      "Money is transferable. Time is not. You can lend me a hundred dollars; you cannot lend me an hour. Every hour I have is mine and only mine, non-refundable.",
      "Money is recoverable. Time is not. A dollar lost in a bad investment can be earned again. An hour lost in a bad meeting is simply gone, permanently, from the finite pile you were born with.",
      "Most productivity software misreads this. It treats hours as units to be maximized, as if your life were a spreadsheet whose efficiency score wanted raising. But the goal of a life is not efficiency. The goal is *presence* — the felt sense of actually being inside your hours rather than watching them fly by.",
      "Calendro is a small attempt to build software that respects this difference. We try to give you back minutes of agency, not to squeeze your day until it hums. If we save you 45 seconds creating an event, the goal is not to fit in another task — it's to give you 45 seconds of not looking at a screen.",
    ],
  },
  {
    slug: 'designing-for-the-end-of-the-day',
    title: 'Designing for the end of the day',
    subtitle: 'Most apps are designed for 9am. We designed for 9pm.',
    author: { name: 'Iris Kwon', role: 'Co-founder', initials: 'IK' },
    date: '2026-01-24',
    readingMinutes: 6,
    category: 'Design',
    excerpt:
      "When we design interfaces, we don't picture a fresh, caffeinated user. We picture someone at the end of a hard week, trying to remember one thing before bed.",
    body: [
      "Open any productivity app on a Sunday evening and you'll feel the mismatch. Bright whites. Sharp reds. Aggressive calls to action. 'Get more done!' shouts the splash screen. It feels like being yelled at by a life coach who never sleeps.",
      "We made a decision early at Calendro: design for 9pm, not 9am. Here's what that meant in practice.",
      "**Dark by default.** Not dark-mode-as-toggle, but dark as the primary theme. Our background is #0c0c0f — warmer than pure black, softer on late-night eyes.",
      "**Gold instead of blue.** Blue is the color of notifications, of action, of urgency. We chose a muted gold for accents — #c5a35c — because gold reads as 'earned,' not 'urgent.'",
      "**Serif headings.** Playfair Display, not Inter or SF Pro. Serifs feel slower, more considered. They signal that what you're reading is for thinking, not for scrolling.",
      "**Fewer calls to action.** Every screen has one main action, not five. On a Sunday at 9pm, choice paralysis is real. We resolve it by offering less.",
      "**Whitespace like a library.** If our designers think a screen is 'empty,' they're doing the job right. Empty space is attention protection.",
      "None of this is original. These ideas are borrowed from Kinfolk magazine, the New Yorker, Dieter Rams's ten principles, and every good library you've ever sat in. We didn't invent the aesthetic. We just noticed it was missing from productivity software.",
    ],
  },
  {
    slug: 'the-hardest-part-of-calendar-software',
    title: 'The hardest part of calendar software',
    subtitle: "It's timezones. It's always timezones.",
    author: { name: 'Sam Halverson', role: 'Founding Engineer', initials: 'SH' },
    date: '2025-12-14',
    readingMinutes: 8,
    category: 'Engineering',
    excerpt:
      "We thought the hardest part of Calendro would be the AI. We were wrong. The hardest part — by miles — was timezones.",
    body: [
      "When we started building Calendro, we assumed the hard part would be the AI: tuning prompts, handling edge cases, wrestling with latency. We were wrong. The AI was the easy part.",
      "The hard part, by miles, was timezones.",
      "Consider: what does 'tomorrow at 3pm' mean? Simple, right? Except — tomorrow in whose timezone? The user's device timezone? The calendar account's default timezone? The timezone of the meeting organizer? The timezone of the location being referenced? ('Meeting at 3pm in Tokyo next week' is not 3pm the user's time.)",
      "Now consider recurring events. A weekly standup at 9am in New York, for someone who's traveling to Singapore for three weeks. Do the 9am occurrences in Singapore stay at 9am New York time (which is a deeply weird hour in Singapore) or do they stay at 9am in whatever timezone the user is currently in? The answer is: it depends. On what? On the user's actual intent, which is not in the data.",
      "We ended up building a system we call *timezone intention inference*. When you type an event, we try to infer the intended timezone from the event's context — the location, the attendees' known timezones, the user's travel history, the time of day the user is typing. It's correct about 97% of the time. The other 3% is why we surface timezone choices when there's ambiguity.",
      "CalDAV, the protocol Apple Calendar uses, makes this worse. CalDAV timezones are embedded in VTIMEZONE blocks that can be self-contradictory — we've seen calendars where the DST transition dates don't match the historical rules. We have a small team of one (me, waving) whose primary job is reading other people's broken TZ data and guessing what they meant.",
      "If you've been wondering why new calendar apps are so rare, it's partly because of this. There is no way to ship a modern calendar without re-implementing timezone handling from scratch, at least three times, before you get it right.",
      "I'm still not sure we've gotten it right. But every week it gets a little closer.",
    ],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
