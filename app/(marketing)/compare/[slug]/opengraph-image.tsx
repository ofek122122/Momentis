import { ImageResponse } from 'next/og'
import { getCompetitor } from '@/lib/competitors'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Momenties comparison'

export default async function Image({ params }: { params: { slug: string } }) {
  const c = getCompetitor(params.slug)
  const competitor = c?.name ?? 'Alternatives'
  const tagline = c?.tagline ?? 'A side-by-side comparison'

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
            'radial-gradient(55% 55% at 50% 100%, rgba(197,163,92,0.2) 0%, rgba(197,163,92,0) 55%)',
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
          <span style={{ color: 'rgba(240,236,227,0.4)', fontSize: 20 }}>· Comparison</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 20,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c5a35c',
            }}
          >
            Side by side
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 36,
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              flexWrap: 'wrap',
            }}
          >
            <span>Momenties</span>
            <span style={{ color: 'rgba(240,236,227,0.35)', fontSize: 64 }}>vs.</span>
            <span style={{ color: '#c5a35c', fontStyle: 'italic' }}>{competitor}</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(240,236,227,0.75)',
              lineHeight: 1.3,
              fontStyle: 'italic',
              maxWidth: 1000,
            }}
          >
            &ldquo;{tagline}&rdquo;
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            fontFamily: 'monospace',
            color: 'rgba(240,236,227,0.5)',
          }}
        >
          <span>momenties.app/compare</span>
          <span>Honest comparison</span>
        </div>
      </div>
    ),
    size
  )
}
