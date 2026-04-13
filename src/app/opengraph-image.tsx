import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const runtime = 'edge';
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A0A0A',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,140,50,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,50,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Terminal prompt */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#FF8C32', fontSize: '20px' }}>$</span>
          <span style={{ color: 'rgba(232,232,232,0.44)', fontSize: '20px' }}>
            whoami
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#E8E8E8',
            lineHeight: 1.1,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}
        >
          {site.ogTagline.split('。')[0]}。
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#FF8C32',
            lineHeight: 1.1,
            marginBottom: '40px',
            letterSpacing: '-0.02em',
          }}
        >
          {site.ogTagline.split('。')[1]}。
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(232,232,232,0.68)',
            lineHeight: 1.5,
          }}
        >
          {site.title}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ADE80',
                boxShadow: '0 0 8px rgba(74,222,128,0.5)',
              }}
            />
            <span style={{ color: '#4ADE80', fontSize: '16px' }}>AVAILABLE</span>
          </div>
          <span style={{ color: 'rgba(232,232,232,0.28)', fontSize: '16px' }}>
            {site.url.replace(/^https?:\/\//, '')}
          </span>
        </div>

        {/* Corner accents */}
        {[
          { top: 0, left: 0 },
          { top: 0, right: 0 },
          { bottom: 0, left: 0 },
          { bottom: 0, right: 0 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '24px',
              height: '24px',
              ...pos,
              borderTop: pos.top === 0 ? '3px solid #FF8C32' : undefined,
              borderBottom: pos.bottom === 0 ? '3px solid #FF8C32' : undefined,
              borderLeft: pos.left === 0 ? '3px solid #FF8C32' : undefined,
              borderRight: pos.right === 0 ? '3px solid #FF8C32' : undefined,
            }}
          />
        ))}
      </div>
    ),
    { ...size },
  );
}
