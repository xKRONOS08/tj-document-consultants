import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'T&J Document Consultants'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111827',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 16,
            border: '2px dashed rgba(255,255,255,0.35)',
            color: '#ffffff',
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          T&J
        </div>
        <div
          style={{
            display: 'flex',
            color: '#ffffff',
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          T&J Document Consultants
        </div>
        <div
          style={{
            display: 'flex',
            color: '#9ca3af',
            fontSize: 28,
            marginTop: 16,
          }}
        >
          Property Document Experts · Mananthavady, Wayanad
        </div>
      </div>
    ),
    { ...size }
  )
}
