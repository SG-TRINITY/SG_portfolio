"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { branches, commits, locations } from "@/lib/experience";
import type { Branch } from "@/lib/experience";
import { site } from "@/lib/site";
import styles from "./ExperienceSection.module.css";

const filters = ["all", "reslife", "dev", "research"] as const;
const views = [
  { id: "atlas", label: "🌍 world_atlas" },
  { id: "history", label: "⌘ git_history" },
] as const;

function Prompt({ path, command, flags }: { path: string; command: string; flags?: string }) {
  return (
    <div className={`prompt-line ${styles.prompt}`}>
      <span className="prompt-user">{site.promptUser}</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">{site.promptHost}</span>
      <span className="prompt-path">~/{path}</span>
      <span className="prompt-sym">$</span>
      <span className="prompt-cmd">{command}</span>
      {flags && <span className="prompt-flag">{flags}</span>}
    </div>
  );
}

export function ExperienceSection() {
  const [view, setView] = useState<(typeof views)[number]["id"]>("atlas");
  const [city, setCity] = useState<(typeof locations)[number]["id"]>("muscat");
  const [filter, setFilter] = useState<"all" | Branch>("all");
  const [hash, setHash] = useState<string>(commits[0].hash);
  const location = locations.find((entry) => entry.id === city) ?? locations[1];
  const visible = commits.filter((commit) => filter === "all" || commit.branch === filter);
  const selectedCommit = visible.find((commit) => commit.hash === hash) ?? visible[0];

  function changeFilter(next: typeof filter) {
    setFilter(next);
    if (next !== "all" && selectedCommit.branch !== next) {
      const first = commits.find((commit) => commit.branch === next);
      if (first) setHash(first.hash);
    }
  }

  return (
    <section className={`section ${styles.experience}`} id="experience" aria-label="Experience">
      <div className={styles.toolbar}>
        <Prompt path="experience" command="./explore" />
        <div className={styles.controls} role="group" aria-label="Experience view">
          {views.map((option) => (
            <button key={option.id} type="button" aria-pressed={view === option.id} onClick={() => setView(option.id)}>
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {view === "atlas" ? (
        <div className={styles.panel}>
          <div className={styles.titlebar} aria-hidden="true">
            <span className="tb-dot red" /><span className="tb-dot yellow" /><span className="tb-dot green" />
            <span>{site.handle} — where_is_home</span>
          </div>
          <div className={styles.body}>
            <Prompt path="where_is_home" command="./atlas" flags="--all-homes" />
            <p className={styles.intro}>{"// `cd ~` is surprisingly complicated when you have multiple homes 🏠"}</p>
            <div className={styles.map} role="group" aria-label="World map locations">
              {locations.map((entry, index) => (
                <button key={entry.id} type="button" className={styles.pin}
                  data-home={entry.id === "london"} aria-label={entry.city}
                  aria-pressed={city === entry.id} onClick={() => setCity(entry.id)}
                  style={{ "--x": `${entry.x}%`, "--y": `${entry.y}%` } as CSSProperties}>
                  {index + 1}
                </button>
              ))}
              <span className={styles.mapCaption}>6 locations · schematic pins</span>
            </div>
            <div className={styles.cities} role="group" aria-label="Choose a location">
              {locations.map((entry, index) => (
                <button key={entry.id} type="button" aria-pressed={city === entry.id}
                  data-home={entry.id === "london"} onClick={() => setCity(entry.id)}>
                  <small>{String(index + 1).padStart(2, "0")} · {entry.label}</small>
                  {entry.city} {entry.icon}
                </button>
              ))}
            </div>
            <div className={`${styles.detail} ${styles.locationDetail}`} aria-live="polite">
              <p className={styles.detailCommand}><span>➜</span> cat <b>{location.id}.location</b></p>
              <h2>{location.place} {location.icon}</h2>
              <p className={styles.locationTag} data-home={location.id === "london"}>{location.tag}</p>
              <p className={styles.description}>{location.detail}</p>
              <p className={styles.locationNote}>{"// "}{location.note}</p>
            </div>
            <p className={styles.note}>{"// these places represent different parts of my life"}</p>
          </div>
        </div>
      ) : (
        <div className={styles.panel}>
          <div className={styles.body}>
            <Prompt path="experience" command="git log" flags="--graph --all --oneline" />
            <p className={styles.intro}>{"// two career paths, one very confused git history ✨"}</p>
            <div className={styles.legend}>
              {Object.entries(branches).map(([id, label]) => (
                <span key={id} data-branch={id}>{label}</span>
              ))}
            </div>
            <div className={styles.controls} role="group" aria-label="Filter experience">
              {filters.map((option) => (
                <button key={option} type="button" aria-pressed={filter === option} onClick={() => changeFilter(option)}>
                  --{option}
                </button>
              ))}
            </div>
            <div className={styles.history} role="group" aria-label="Experience entries">
              <div className={styles.rails} aria-hidden="true">
                {Object.keys(branches).map((branch) => <span key={branch} data-branch={branch} />)}
              </div>
              {visible.map((commit) => (
                <button key={commit.hash} type="button" className={styles.commit} data-branch={commit.branch}
                  aria-pressed={commit.hash === selectedCommit.hash} onClick={() => setHash(commit.hash)}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.commitTitle}>
                    <span className={styles.hash}>{commit.hash}</span>
                    <strong>{commit.name}</strong>
                    <span className={styles.branchTag}>{commit === commits[0] ? "HEAD → " : ""}{commit.branch}</span>
                  </span>
                  <span className={styles.commitSubtitle}>{commit.role} · {commit.dates}</span>
                </button>
              ))}
            </div>
            <div className={styles.detail} aria-live="polite">
              <p className={styles.detailCommand}><span>➜</span> git show <b>{selectedCommit.hash}</b></p>
              <h2>{"organization" in selectedCommit ? selectedCommit.organization : selectedCommit.name} — {selectedCommit.role}</h2>
              <p className={styles.description}>{selectedCommit.detail}</p>
              <p className={styles.note}>{"// "}{selectedCommit.note}</p>
            </div>
            <p className={styles.note}>{"// commit IDs are illustrative · select any entry to inspect"}</p>
          </div>
        </div>
      )}
    </section>
  );
}
