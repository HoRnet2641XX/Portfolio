import type { Metadata } from 'next';
import {
  DotGothic16,
  Zen_Kaku_Gothic_New,
  DM_Sans,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';

const dotGothic = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pixel',
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'ポートフォリオ — AI Engineer / Full-Stack Developer / Designer',
  description:
    'AIエンジニア・フルスタック開発者・デザイナーのポートフォリオ。AI/ML、開発、デザインの領域を横断するプロジェクトを掲載。',
  openGraph: {
    title: 'ポートフォリオ — AI Engineer / Full-Stack Developer / Designer',
    description:
      'テクノロジーとクリエイティブの交差点で。AI/ML、開発、デザインのプロジェクト。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ポートフォリオ — AI × 開発 × デザイン',
    description: 'テクノロジーとクリエイティブの交差点で。',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${dotGothic.variable} ${zenKaku.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
