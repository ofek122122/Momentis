import { allEntries } from '@/lib/changelog'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://momenties.app'

function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const entries = allEntries()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20)

  const items = entries
    .map((e) => {
      const url = `${BASE}/changelog/${e.version}`
      const changeList = e.changes
        .map((c) => `• [${c.type.toUpperCase()}] ${escape(c.text)}`)
        .join('&#10;')
      return `    <item>
      <title>v${escape(e.version)} — ${escape(e.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <description>${escape(e.summary)}&#10;&#10;${changeList}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Momenties Changelog</title>
    <link>${BASE}/changelog</link>
    <description>Every Momenties release, in chronological order. Notes written by the engineers who shipped them.</description>
    <language>en-us</language>
    <atom:link href="${BASE}/changelog/feed" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
