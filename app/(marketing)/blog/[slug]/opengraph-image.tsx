import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog-posts'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Momenties field notes'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const title = post?.title ?? 'Momenties field notes'
  const author = post?.author.name ?? 'Momenties'
  const category = post?.category ?? 'Essay'
  const reading = post?.readingMinutes ?? 5

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#0c0c0f',
          backgroundImage:
            'radial-gradient(50% 50% at 15% 110%, rgba(197,163,92,0.22) 0%, rgba(197,163,92,0) 60%)',
          fontFamily: 'serif',
          color: '#f0ece3',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 600 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(197,163,92,0.9), rgba(197,163,92,0.5))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0c0c0f',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <span>Momenties</span>
          <span style={{ color: 'rgba(240,236,227,0.4)', fontSize: 20 }}>· Field Notes</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 960 }}>
          <div
            style={{
              fontSize: 20,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c5a35c',
              display: 'flex',
              gap: 20,
            }}
          >
            <span>{category}</span>
            <span style={{ color: 'rgba(240,236,227,0.3)' }}>·</span>
            <span>{reading} min read</span>
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            fontFamily: 'monospace',
            color: 'rgba(240,236,227,0.55)',
          }}
        >
          <span>by {author}</span>
          <span>momenties.app/blog</span>
        </div>
      </div>
    ),
    size
  )
}
