"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter that triggers when scrolled into view.
 * Useful for stat blocks (e.g. "30 Yrs", "6+", "B2B").
 *
 * Parses the leading numeric portion of `value` (so "30 Yrs" animates 0→30,
 * "6+" animates 0→6, "B2B" stays as-is since it has no leading number).
 */
export function Counter({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Try to parse a leading number from the value (e.g. "30" from "30 Yrs", "6" from "6+")
    const match = value.match(/^\s*(\d+(?:\.\d+)?)/);
    if (!match) {
      // No leading number (e.g. "B2B", "GM & Dir") — just render as-is.
      return;
    }
    const target = parseFloat(match[1]);
    const prefix = value.slice(0, match.index ?? 0);
    const suffix = value.slice((match.index ?? 0) + match[1].length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              // easeOutCubic for a nice settle
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              const rounded =
                target % 1 === 0 ? Math.round(current) : current.toFixed(1);
              setDisplay(`${prefix}${rounded}${suffix}`);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
