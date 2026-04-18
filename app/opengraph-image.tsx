import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Momenties — Just say it. It\'s scheduled.'

export default function Image() {
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
            'radial-gradient(60% 60% at 50% 0%, rgba(197,163,92,0.18) 0%, rgba(197,163,92,0) 60%)',
          fontFamily: 'serif',
          color: '#f0ece3',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background:
                'linear-gradient(135deg, rgba(197,163,92,0.9) 0%, rgba(197,163,92,0.5) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0c0c0f',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            C
          </div>
          Momenties
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c5a35c',
            }}
          >
            AI-powered calendar
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Just say it.</span>
            <span style={{ color: '#c5a35c', fontStyle: 'italic' }}>It&apos;s scheduled.</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            fontFamily: 'monospace',
            color: 'rgba(240,236,227,0.5)',
          }}
        >
          <span>momenties.app</span>
          <span>Type it. Speak it. Snap it.</span>
        </div>
      </div>
    ),
    size
  )
}
