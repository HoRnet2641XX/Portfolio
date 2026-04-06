import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF8C32',
          light: '#FFB366',
          dark: '#FF6B00',
          subtle: 'rgba(255, 140, 50, 0.08)',
          muted: 'rgba(255, 140, 50, 0.18)',
        },
        surface: {
          base: '#0A0A0A',
          raised: '#111111',
          overlay: 'rgba(17, 17, 17, 0.92)',
        },
        content: {
          primary: '#E8E8E8',
          secondary: 'rgba(232, 232, 232, 0.68)',
          tertiary: 'rgba(232, 232, 232, 0.44)',
          muted: 'rgba(232, 232, 232, 0.28)',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.07)',
          subtle: 'rgba(255, 255, 255, 0.04)',
          brand: 'rgba(255, 140, 50, 0.22)',
        },
        semantic: {
          success: '#4ADE80',
          warning: '#FACC15',
          error: '#F87171',
          info: '#60A5FA',
        },
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'sans-serif'],
        body: ['var(--font-body)', 'var(--font-display)', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1.4' }],
        'sm': ['13px', { lineHeight: '1.5' }],
        'base': ['15px', { lineHeight: '1.7' }],
        'lg': ['18px', { lineHeight: '1.5' }],
        'xl': ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.15' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['64px', { lineHeight: '1.05' }],
      },
      spacing: {
        '0.5': '2px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
        '9': '96px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      maxWidth: {
        content: '1200px',
      },
      zIndex: {
        base: '0',
        dropdown: '10',
        sticky: '20',
        modal: '30',
        toast: '40',
        tooltip: '50',
      },
      transitionDuration: {
        micro: '150ms',
        normal: '250ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.33, 1, 0.68, 1)',
        in: 'cubic-bezier(0.32, 0, 0.67, 0)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 4px rgba(255, 140, 50, 0.4)' },
          '50%': { boxShadow: '0 0 12px rgba(255, 140, 50, 0.7)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
