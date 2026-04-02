import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function HomePage() {
  return (
    <>
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none z-base" aria-hidden="true">
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern" />

        {/* Gradient orbs */}
        <div
          className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,50,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,100,30,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[1]">
        <a
          href="#works-heading"
          className="sr-only focus:not-sr-only focus:absolute focus:top-[16px] focus:left-[16px]
            focus:z-tooltip focus:px-[16px] focus:py-[8px] focus:bg-brand focus:text-white
            focus:rounded-[8px] focus:text-sm focus:font-display"
        >
          Skip to works
        </a>

        <Header />

        <main>
          <Hero />

          {/* Divider */}
          <div className="px-[24px] md:px-[48px] lg:px-[80px]" aria-hidden="true">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-muted to-transparent" />
          </div>

          <PortfolioGrid />
        </main>

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}
