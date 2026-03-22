"use client";

import { useEffect, useRef } from "react";

type Props = { phrases: readonly string[] };

export function TypewriterTagline({ phrases }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (phrases.length === 0) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const pi = { current: 0 };
    const ci = { current: 0 };
    const del = { current: false };

    const setText = (v: string) => {
      if (!cancelled && spanRef.current) spanRef.current.textContent = v;
    };

    const type = () => {
      if (cancelled) return;
      const w = phrases[pi.current]!;
      if (!del.current) {
        ci.current += 1;
        setText(w.slice(0, ci.current));
        if (ci.current === w.length) {
          del.current = true;
          timeoutId = setTimeout(type, 2000);
          return;
        }
      } else {
        ci.current -= 1;
        setText(w.slice(0, ci.current));
        if (ci.current === 0) {
          del.current = false;
          pi.current = (pi.current + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(type, del.current ? 40 : 90);
    };

    type();
    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phrases]);

  return (
    <>
      <span id="tw" ref={spanRef} />
      <span id="twc">█</span>
    </>
  );
}
