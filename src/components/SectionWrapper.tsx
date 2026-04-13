import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  /** aria-labelledby target — defaults to `${id}-heading` */
  labelledBy?: string;
  /** Extra classes on the <section> (e.g. overflow, justify overrides) */
  className?: string;
  children: React.ReactNode;
}

/**
 * Shared wrapper for snap-scroll sections.
 * Centralises the snap-section class, responsive padding, and max-width.
 *
 * Usage:
 *   <SectionWrapper id="about">
 *     <h2 id="about-heading">…</h2>
 *     …
 *   </SectionWrapper>
 */
export function SectionWrapper({
  id,
  labelledBy,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'snap-section px-[24px] md:px-[48px] lg:px-[80px]',
        className,
      )}
      aria-labelledby={labelledBy ?? `${id}-heading`}
    >
      <div className="w-full max-w-content">{children}</div>
    </section>
  );
}
