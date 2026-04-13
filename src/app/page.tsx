import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { SectionNav } from '@/components/SectionNav';
export default function HomePage() {
  return (
    <>
      {/* Noise grain overlay */}
      <div className="noise" aria-hidden="true" />

      {/* Side navigation dots */}
      <SectionNav />

      {/* Snap scroll container */}
      <div id="snap-root" className="snap-container relative z-[1]">
        {/* Header overlays the first section */}
        <div className="fixed top-0 left-0 right-0 z-sticky">
          <Header />
        </div>

        <Hero />
        <About />
        <Skills />
        <Timeline />
        <PortfolioGrid />

        {/* Contact + Footer combined in last snap section */}
        <div className="relative">
          <ContactCTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
