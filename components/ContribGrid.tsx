"use client";

import { useMemo } from "react";

const lvls = ["", "l1", "l2", "l3", "l4"] as const;

function mulberry32(seed: number) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Props = { seed: number; cells?: number };

export function ContribGrid({ seed, cells = 168 }: Props) {
  const classNames = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: cells }, () => {
      const r = rand();
      const extra = r > 0.55 ? lvls[Math.floor(r * 5)] : "";
      return extra ? `contrib-day ${extra}` : "contrib-day";
    });
  }, [seed, cells]);

  return (
    <div className="contrib-grid" id="contrib">
      {classNames.map((cn, i) => (
        <div key={i} className={cn} />
      ))}
    </div>
  );
}
