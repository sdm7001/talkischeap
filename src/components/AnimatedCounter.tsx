import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** Final display string, e.g. "99.999%", "14.99", "100+" */
  value: string;
  duration?: number;
  className?: string;
}

/** Counts numeric portions of `value` up from 0 when scrolled into view. */
export function AnimatedCounter({ value, duration = 1600, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/[\d.]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[0]);
    const decimals = (match[0].split(".")[1] || "").length;
    setDisplay(value.replace(match[0], "0"));

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(value.replace(match[0], (target * eased).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
