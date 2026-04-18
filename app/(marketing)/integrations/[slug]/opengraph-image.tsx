import { ImageResponse } from 'next/og'
import { getIntegration } from '@/lib/integrations'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Momenties integration'

export default async function Image({ params }: { params: { slug: string } }) {
  const integration = getIntegration(params.slug)
  const name = integration?.name ?? 'Integration'
  const tagline = integration?.tagline ?? 'Connect Momenties to your stack'
  const letter = integration?.letter ?? '?'
  const color = integration?.color ?? '#c5a35c'
  const category = integration?.category ?? 'Integration'

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
            'radial-gradient(55% 55% at 85% 80%, rgba(197,163,92,0.18) 0%, rgba(197,163,92,0) 55%)',
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
          <span style={{ color: 'rgba(240,236,227,0.4)', fontSize: 20 }}>· Integration</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div
            style={{
              fontSize: 20,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c5a35c',
            }}
          >
            {category}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div
              style={{
                width: 108,
                height: 108,
                borderRadius: 22,
                background: color,
                color: '#0c0c0f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 60,
                fontWeight: 700,
              }}
            >
              {letter}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ fontSize: 32, color: 'rgba(240,236,227,0.4)' }}>Momenties ×</div>
              <div
                style={{
                  fontSize: 80,
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {name}
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#c5a35c',
              fontStyle: 'italic',
              lineHeight: 1.3,
              maxWidth: 980,
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
          <span>momenties.app/integrations</span>
          <span>Connect in seconds</span>
        </div>
      </div>
    ),
    size
  )
}
