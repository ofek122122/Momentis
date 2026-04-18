import { ImageResponse } from 'next/og'
import { getJob } from '@/lib/jobs'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Momenties role'

export default async function Image({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug)
  const title = job?.title ?? 'Open role'
  const team = job?.team ?? 'Team'
  const location = job?.location ?? 'Remote'
  const salary = job?.salary ?? ''

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
            'radial-gradient(55% 55% at 0% 100%, rgba(197,163,92,0.2) 0%, rgba(197,163,92,0) 55%)',
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
          <span style={{ color: 'rgba(240,236,227,0.4)', fontSize: 20 }}>· Careers</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 1000 }}>
          <div
            style={{
              fontSize: 20,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c5a35c',
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <span>Hiring · {team}</span>
            <span style={{ color: 'rgba(240,236,227,0.3)' }}>·</span>
            <span>{location}</span>
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          {salary && (
            <div
              style={{
                fontSize: 28,
                color: '#c5a35c',
                fontStyle: 'italic',
              }}
            >
              {salary}
            </div>
          )}
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
          <span>momenties.app/careers</span>
          <span>Apply today</span>
        </div>
      </div>
    ),
    size
  )
}
