import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio — AI Engineer, Full-Stack Developer & Designer',
  description:
    'AI engineer, full-stack developer, and designer building at the intersection of technology and creativity. View selected works across AI/ML, development, and design.',
  openGraph: {
    title: 'Portfolio — AI Engineer, Full-Stack Developer & Designer',
    description:
      'Building at the intersection of technology and creativity. Selected works across AI/ML, development, and design.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — AI Engineer, Full-Stack Developer & Designer',
    description:
      'Building at the intersection of technology and creativity.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
