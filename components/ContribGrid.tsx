import type { GitHubContributionDay } from "@/lib/github-contributions";

const lvls = ["", "l1", "l2", "l3", "l4"] as const;

function mulberry32(seed: number) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededCells(seed: number, cells: number) {
  const rand = mulberry32(seed);
  return Array.from({ length: cells }, () => {
    const r = rand();
    const extra = r > 0.55 ? lvls[Math.floor(r * 5)] : "";
    return extra ? `contrib-day ${extra}` : "contrib-day";
  });
}

type Props = {
  /** GitHub weeks (live); if missing, falls back to decorative grid */
  weeks: GitHubContributionDay[][] | null;
  seed: number;
};

export function ContribGrid({ weeks, seed }: Props) {
  if (weeks?.length) {
    return (
      <div className="contrib-scroll">
        <div className="contrib-grid contrib-grid--github" id="contrib">
          {weeks.flatMap((week) =>
            week.map((day) => (
              <div
                key={day.date}
                className="contrib-day"
                title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                style={
                  day.count > 0
                    ? {
                        backgroundColor: day.color,
                        borderColor: day.color,
                      }
                    : undefined
                }
              />
            )),
          )}
        </div>
      </div>
    );
  }

  const classNames = seededCells(seed, 168);
  return (
    <div className="contrib-grid" id="contrib">
      {classNames.map((cn, i) => (
        <div key={i} className={cn} />
      ))}
    </div>
  );
}
