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
          subtle: 'rgba(255, 140, 50, 0.10)',
          muted: 'rgba(255, 140, 50, 0.20)',
        },
        surface: {
          base: '#0F0F0F',
          raised: '#141414',
          overlay: 'rgba(20, 20, 20, 0.88)',
        },
        content: {
          primary: '#F5F5F5',
          secondary: 'rgba(255, 255, 255, 0.72)',
          tertiary: 'rgba(255, 255, 255, 0.48)',
          muted: 'rgba(255, 255, 255, 0.32)',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.06)',
          brand: 'rgba(255, 140, 50, 0.25)',
        },
        semantic: {
          success: '#4ADE80',
          warning: '#FACC15',
          error: '#F87171',
          info: '#60A5FA',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['"Noto Sans JP"', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        pixel: ['"Silkscreen"', 'cursive'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1.4' }],
        'sm': ['13px', { lineHeight: '1.4' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'lg': ['18px', { lineHeight: '1.5' }],
        'xl': ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
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
        content: '1280px',
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
        slow: '300ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.33, 1, 0.68, 1)',
        in: 'cubic-bezier(0.32, 0, 0.67, 0)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
