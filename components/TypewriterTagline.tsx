"use client";

import { useEffect, useRef } from "react";

type Props = {
  phrases: readonly string[];
  variant?: "terminal" | "academia";
};

export function TypewriterTagline({ phrases, variant = "terminal" }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const delDelay = variant === "academia" ? 42 : 40;
  const typeDelay = variant === "academia" ? 95 : 90;
  const pauseFull = 7 * 60 * 1000;

  useEffect(() => {
    const span = spanRef.current;
    if (!span || phrases.length === 0 || typeof Intl.Segmenter !== "function") return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const words = phrases.filter(Boolean).map((phrase) => Array.from(segmenter.segment(phrase), ({ segment }) => segment));
    let timeout: ReturnType<typeof setTimeout>;
    let phraseIndex = 0;
    let count = 0;
    let deleting = false;

    const tick = () => {
      const word = words[phraseIndex];
      count += deleting ? -1 : 1;
      span.textContent = word.slice(0, count).join("");
      if (!deleting && count >= word.length) {
        deleting = true;
        timeout = setTimeout(tick, pauseFull);
        return;
      }
      if (deleting && count <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % words.length;
      }
      timeout = setTimeout(tick, deleting ? delDelay : typeDelay);
    };

    const applyMotionPreference = () => {
      clearTimeout(timeout);
      span.textContent = phrases[0];
      if (motion.matches || words.length === 0) return;
      phraseIndex = 0;
      count = 0;
      deleting = false;
      tick();
    };

    applyMotionPreference();
    motion.addEventListener("change", applyMotionPreference);
    return () => {
      clearTimeout(timeout);
      motion.removeEventListener("change", applyMotionPreference);
    };
  }, [phrases, delDelay, typeDelay, pauseFull]);

  if (variant === "academia") {
    return <span id="da-tw" ref={spanRef}>{phrases[0]}</span>;
  }

  return (
    <>
      <span id="tw" ref={spanRef}>{phrases[0]}</span>
      <span id="twc" aria-hidden="true">█</span>
    </>
  );
}
