import { ImageResponse } from 'next/og'
import { getCustomerStory } from '@/lib/customers'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Momenties customer story'

export default async function Image({ params }: { params: { slug: string } }) {
  const story = getCustomerStory(params.slug)
  const company = story?.company ?? 'Customer'
  const tagline = story?.tagline ?? 'A Momenties customer story'
  const industry = story?.industry ?? ''
  const metrics = story?.metrics ?? []

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
            'radial-gradient(55% 55% at 85% 20%, rgba(197,163,92,0.2) 0%, rgba(197,163,92,0) 55%)',
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
          <span style={{ color: 'rgba(240,236,227,0.4)', fontSize: 20 }}>· Customer story</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 960 }}>
          <div
            style={{
              fontSize: 18,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c5a35c',
            }}
          >
            {industry}
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
            }}
          >
            {company}
          </div>
          <div
            style={{
              fontSize: 32,
              fontStyle: 'italic',
              color: '#c5a35c',
              lineHeight: 1.25,
              maxWidth: 900,
            }}
          >
            &ldquo;{tagline}&rdquo;
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '18px 24px',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                minWidth: 140,
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 700 }}>{m.value}</span>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'rgba(240,236,227,0.5)',
                  marginTop: 4,
                }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
