import { EPISODES, type Episode } from './podcast'

export type EpisodeDetail = {
  slug: string
  highlights: { at: string; quote: string }[]
  transcript: string[] // a few paragraphs, not a full transcript
  related: string[] // other episode slugs
  recordedIn: string
}

const BY_SLUG: Record<string, Omit<EpisodeDetail, 'slug'>> = {
  'when-the-software-gets-out-of-the-way': {
    highlights: [
      {
        at: '04:12',
        quote:
          'The best software I have ever used was the software I stopped thinking about. That is also the hardest kind to make.',
      },
      {
        at: '12:40',
        quote:
          "I have a test: if I don't remember using the tool an hour later, that is the tool I keep. The memorable ones are performing.",
      },
      {
        at: '22:05',
        quote:
          "The attention economy asked for your time. Quiet software is the counter-offer: what if we let you keep it?",
      },
    ],
    transcript: [
      "Mei opens with a ritual she started in 2024: every December, she deletes her calendar down to the bones and rebuilds it from a blank page. It takes three evenings. She says it is the only way to see which meetings are load-bearing and which were inherited from a version of her life that no longer exists.",
      'We talk about the moment quiet software wins — which, she argues, is usually not when you open it, but when you close it. If the day after using a tool is calmer than the day before, the tool is working. If the day after is busier, the tool has made you its marketing channel.',
      "Iris offers Momenties's internal measure: the 'exhale test.' Do users exhale when they open the app, or inhale? The exhale is a rare product shape, but a measurable one in user interviews. Mei is unconvinced that the exhale can be designed into existence — she thinks it comes from restraint, not feature work.",
      "Closing chapter is on Mei's reading ritual. She reads fiction for twenty minutes before bed every night, on a Kindle with no software other than the books. She considers it the most underrated form of calendar management.",
    ],
    related: ['a-manifesto-in-public', 'typography-as-trust'],
    recordedIn: "Mei's study, Lisbon",
  },
  'hiring-for-people-who-finish-things': {
    highlights: [
      {
        at: '00:00',
        quote:
          "We ask every candidate for one thing they shipped that they're quietly proud of. Not the big ones. The small ones. That's where the signal is.",
      },
      {
        at: '07:22',
        quote:
          "The reference I want is the junior person who worked alongside them, not the VP who managed them from three rungs up.",
      },
      {
        at: '18:40',
        quote:
          'An offsite is a hiring signal, not an expense line. If the logistics break, the team will break the same way, six months later.',
      },
    ],
    transcript: [
      "Pauline walks through her playbook for running the recent 24-person offsite across Tel Aviv, Lisbon, and London. She describes calendars as the load-bearing document of every modern company: if the calendar cannot be trusted, every other process inherits the distrust.",
      "We discuss the 'rockstar' framing. Pauline thinks it is both inaccurate and harmful. The people she wants on her team are the ones who finish the quiet 80% of a task that nobody wants to do. She tests for this in first-round interviews by asking about the last boring task they shipped without complaint.",
      "The episode closes on references — not the ones at the top of the candidate's list, but the ones that weren't offered. Pauline requests one peer-level reference at least, and often finds the signal there.",
    ],
    related: ['the-walk-home-planning-ritual', 'the-second-source-of-truth'],
    recordedIn: "Pauline's office, London",
  },
  'the-hybrid-parser-in-detail': {
    highlights: [
      {
        at: '00:00',
        quote:
          "We did not start with the LLM. Not out of principle — out of cost. Starting local made the LLM feel like a surgical tool, not a default.",
      },
      {
        at: '18:11',
        quote:
          'Arbiter v1 was a heuristic with six lines of code. Arbiter v2 is a heuristic with twelve. The improvement is in the tokens, not the code.',
      },
      {
        at: '32:05',
        quote:
          'We spent three weeks on a tokenizer that we ended up not shipping. That is a feature of how we work, not a bug.',
      },
    ],
    transcript: [
      "Oren explains the parser architecture: chrono-node runs locally and handles the easy cases (tomorrow at 3pm, next Thursday). Gemini 2.5 Flash runs server-side and handles the ambiguous cases ('after standup, before lunch, Thursday if possible'). The arbiter between them is twelve lines of TypeScript and one confidence score.",
      "We talk about the three-week misadventure where Oren rebuilt the tokenizer from scratch and nearly shipped it before noticing the speed regression. He killed it and wrote Method §03 shortly after: 'rollback before fix.'",
      "Closing chapter is on costs. The parser cost per event fell 71% between v1 and v2 — not because the model got cheaper, but because fewer events reached the model. The best cost optimization in AI, Oren argues, is often not using the AI.",
    ],
    related: ['typography-as-trust', 'a-manifesto-in-public'],
    recordedIn: 'The Momenties office, Tel Aviv',
  },
  'typography-as-trust': {
    highlights: [
      {
        at: '00:00',
        quote:
          "The typefaces you choose tell the user how much you are willing to charge them in dignity. They notice, even when they can't name it.",
      },
      {
        at: '09:14',
        quote:
          "Playfair Display has a working-class earnestness under the ornament. That is what we wanted. We did not want aristocracy.",
      },
      {
        at: '20:02',
        quote:
          "We rejected Tiempos because it was too serious. We rejected Freight because it was too friendly. The goal is the right amount of friendliness at the right time of day.",
      },
    ],
    transcript: [
      "Isabelle frames typography as a trust signal: before a single word is read, the user has already made a micro-judgment about whether the company knows what it is doing. A thoughtful pairing of display and body typefaces is the fastest visible signal of care.",
      "We walk through four rejected typefaces for Momenties (Tiempos Text, Freight Big, Ciutadella, Austin Text) and explain the rejection reasoning for each. Isabelle adds a short defense of italics as emphasis in interfaces where other kinds of emphasis would feel loud.",
      "Closing chapter is on DM Sans, the body typeface Momenties uses. Isabelle agrees with the choice but argues it is slightly overexposed. She predicts we will move to something more neutral within a year.",
    ],
    related: ['when-the-software-gets-out-of-the-way', 'the-hybrid-parser-in-detail'],
    recordedIn: 'Folio Studio, Paris',
  },
  'the-walk-home-planning-ritual': {
    highlights: [
      {
        at: '00:00',
        quote:
          'The walk from the office to my front door is twenty-two minutes. In those minutes, I dictate my week into Momenties. I have not planned my week any other way since March.',
      },
      {
        at: '08:11',
        quote:
          'Short phrases, one commitment at a time, with a slight pause between them. That is the cadence the parser likes most. I found it by accident, kept it on purpose.',
      },
    ],
    transcript: [
      "Tomás demonstrates the exact phrasing he uses when dictating his week on the walk home. He breaks up sentences like 'Monday nine-to-ten, standup; Tuesday noon, lunch with Rami at Ebene.' The parser handles each as a discrete event. The pause is the key — he calls it 'the comma.'",
      "We talk about how he corrects mistakes without breaking the flow. When the parser mishears, he says 'no, scratch that, Thursday at two.' The conversational parser lab that ships next quarter will pick this phrase up explicitly; today he relies on manual correction.",
      "Closing is a short essay on what he used to spend Sundays doing. The short version: he used to plan his week on Sundays. He does not plan his week on Sundays anymore. His Sundays are better.",
    ],
    related: ['the-second-source-of-truth', 'hiring-for-people-who-finish-things'],
    recordedIn: 'A sidewalk in Lisbon',
  },
  'a-manifesto-in-public': {
    highlights: [
      {
        at: '00:00',
        quote:
          "A manifesto should be read out loud, by its authors, at least once, before it is published. You hear the untrue sentences immediately.",
      },
      {
        at: '14:10',
        quote:
          'We cut the sentence "we are on a mission to reinvent calendars" in the first draft. That sentence is the reason most manifestos are bad.',
      },
    ],
    transcript: [
      "A single-voice episode. Iris walks through the manifesto's eight theses and describes the arguments the team had about each. The manifesto began as margin notes in a shared Google Doc in September 2025. It was published in January 2026 after three rounds of line-by-line editing.",
      "We talk about the thesis that almost didn't make it: §03, 'Quiet software will win.' Oren argued it was too bold for the company's stage. Iris argued it was too important to cut. She won. The thesis is, today, the most quoted of the eight.",
      "Closing chapter is a short reading of Thesis 08, 'Software should lower your heart rate,' in full.",
    ],
    related: ['when-the-software-gets-out-of-the-way', 'typography-as-trust'],
    recordedIn: 'A borrowed studio, London',
  },
  'the-second-source-of-truth': {
    highlights: [
      {
        at: '00:00',
        quote:
          'I have had the same notebook format since 2019. Leuchtturm A5, plain lined, navy cover. It is the one surface in my day that does not update itself.',
      },
      {
        at: '21:00',
        quote:
          'Some ideas refuse to migrate from paper to software. I have stopped trying to force them. They are the reason I still carry a notebook.',
      },
    ],
    transcript: [
      "Jonas opens by distinguishing between notebooks and todo apps. The notebook, he argues, is a ledger of thought, not a ledger of tasks. The calendar is a commitment record. The three together — paper, tasks, calendar — form a trust-weighted working system.",
      "We talk about the Sunday review ritual. Jonas spends 15 minutes each Sunday flipping through the previous week's notebook pages. Things worth keeping migrate to Momenties or to a long-term notes system; the rest stay on paper, unmigrated, where they belong.",
      "Closing is on what never migrates. Certain ideas, Jonas says, need the slowness of handwriting. They are the ideas that will be ruined by being searchable.",
    ],
    related: ['the-walk-home-planning-ritual', 'hiring-for-people-who-finish-things'],
    recordedIn: "Jonas's desk, Oslo",
  },
  pilot: {
    highlights: [
      {
        at: '00:00',
        quote:
          "One promise: we will not make this into a marketing channel. If the episodes ever sound like ads, we will stop.",
      },
      {
        at: '15:00',
        quote:
          'We will credit the guests, the editor, and the music. That is the whole credit roll. There will not be a longer one.',
      },
    ],
    transcript: [
      "Iris and Oren explain the show's rules. Rule one: no product plugs except in the credits. Rule two: episodes end when they have said what they have to say. Ten minutes is a legitimate episode length; so is fifty.",
      "They talk about the working assumption behind the podcast: that the team has something to say about time and software that they cannot say in a blog post. The podcast is a medium choice, not a marketing choice.",
      'Closing: a short credit roll. Music by Reuben Dalton, logo by Isabelle Moreau, produced, edited, and mixed by Iris from a borrowed studio in London.',
    ],
    related: ['a-manifesto-in-public', 'when-the-software-gets-out-of-the-way'],
    recordedIn: 'A borrowed studio, London',
  },
}

export function getEpisodeDetail(slug: string): EpisodeDetail | null {
  const d = BY_SLUG[slug]
  if (!d) return null
  return { slug, ...d }
}

export function findEpisode(slug: string): Episode | undefined {
  return EPISODES.find((e) => e.slug === slug)
}

export function relatedEpisodes(slug: string): Episode[] {
  const d = BY_SLUG[slug]
  if (!d) return []
  return d.related.map((s) => EPISODES.find((e) => e.slug === s)).filter(Boolean) as Episode[]
}

export function navEpisodes(slug: string): { prev?: Episode; next?: Episode } {
  const sorted = [...EPISODES].sort((a, b) => a.n - b.n)
  const idx = sorted.findIndex((e) => e.slug === slug)
  return {
    prev: idx > 0 ? sorted[idx - 1] : undefined,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : undefined,
  }
}
