"use client";

import { useEffect, useRef } from "react";

type Props = {
  phrases: readonly string[];
  /** terminal: #tw + block cursor; academia: #da-tw + CSS pipe cursor */
  variant?: "terminal" | "academia";
};

export function TypewriterTagline({ phrases, variant = "terminal" }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const delDelay = variant === "academia" ? 42 : 40;
  const typeDelay = variant === "academia" ? 95 : 90;
  const pauseFull = variant === "academia" ? 2400 : 2000;

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
          timeoutId = setTimeout(type, pauseFull);
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
      timeoutId = setTimeout(type, del.current ? delDelay : typeDelay);
    };

    type();
    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phrases, delDelay, typeDelay, pauseFull]);

  if (variant === "academia") {
    return <span id="da-tw" ref={spanRef} />;
  }

  return (
    <>
      <span id="tw" ref={spanRef} />
      <span id="twc">█</span>
    </>
  );
}
