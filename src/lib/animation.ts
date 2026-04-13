/**
 * Shared animation constants.
 * Tailwind config の transitionTimingFunction / transitionDuration と値を揃えてある。
 * framer-motion 側で使う場合はこのファイルから import する。
 */

/** Design-spec easing curves */
export const ease = {
  out: [0.33, 1, 0.68, 1] as const,
  in: [0.32, 0, 0.67, 0] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

/** Design-spec durations (seconds) */
export const duration = {
  micro: 0.15,
  normal: 0.25,
  slow: 0.35,
  reveal: 0.5,
};

/** Common viewport-triggered fade-in (for whileInView / animate) */
export const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: ease.out },
} as const;

/** Viewport options shared by most sections */
export const viewportOnce = { once: true, margin: '-80px' } as const;
