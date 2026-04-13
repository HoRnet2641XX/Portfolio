'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>[]{}|;:,.';

/**
 * Scrambles text character-by-character, resolving to the final string.
 * Use `trigger` to restart the animation on demand.
 */
export function useTextScramble(
  text: string,
  {
    speed = 30,
    delay = 0,
    enabled = true,
  }: { speed?: number; delay?: number; enabled?: boolean } = {},
) {
  const [displayed, setDisplayed] = useState('');
  const frameRef = useRef(0);
  const rafRef = useRef<ReturnType<typeof setInterval>>();

  const run = useCallback(() => {
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    let resolved = 0;
    const length = text.length;

    const tick = () => {
      if (resolved >= length) {
        setDisplayed(text);
        if (rafRef.current) clearInterval(rafRef.current);
        return;
      }

      let result = '';
      for (let i = 0; i < length; i++) {
        if (text[i] === ' ' || text[i] === '\n') {
          result += text[i];
        } else if (i < resolved) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      resolved++;
      setDisplayed(result);
    };

    const timeout = setTimeout(() => {
      rafRef.current = setInterval(tick, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) clearInterval(rafRef.current);
    };
  }, [text, speed, delay, enabled]);

  useEffect(() => {
    const cleanup = run();
    return cleanup;
  }, [run]);

  return displayed;
}
