import Link from "next/link";
import { renderBioChunks } from "@/components/BioChunks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterTagline } from "@/components/TypewriterTagline";
import { academiaContent } from "@/lib/academia-content";
import { site } from "@/lib/site";

type Props = {
  resumeHref: string;
  emailHref: string;
};

export function AcademiaHome({ resumeHref, emailHref }: Props) {
  const parts = site.name.trim().split(/\s+/);
  const firstName = parts[0] ?? site.name;
  const restName = parts.slice(1).join(" ");

  return (
    <>
      <div className="da-vignette" aria-hidden />
      <div className="da-wrap">
        <nav className="da-nav">
          <div className="da-logo">
            {firstName}
            {restName ? <span>{restName}</span> : null}
          </div>
          <div className="da-nav-inner">
            <ThemeToggle />
            <div className="da-nav-links">
              <a href="#about">About</a>
              <a href="#projects">Works</a>
              <a href="#skills">Stack</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        <section className="da-hero">
          <div className="da-hero-left">
            <div className="da-hero-epigraph">
              {academiaContent.epigraphLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            <div className="da-hero-name">
              {firstName}
              {restName ? <em>{`${restName}.`}</em> : null}
            </div>
            <div className="da-hero-sub">
              <TypewriterTagline
                phrases={site.typingPhrases}
                variant="academia"
              />
            </div>
            <div className="da-hero-bio">{renderBioChunks(site.heroBio)}</div>
            <div className="da-hero-btns">
              <Link href={resumeHref} className="da-btn da-btn-fill">
                Curriculum Vitae
              </Link>
              <Link href={emailHref} className="da-btn da-btn-ghost">
                Correspondence
              </Link>
            </div>
          </div>
          <div className="da-hero-right">
            {academiaContent.heroImages.map((src, i) => (
              <div key={src} className="da-hero-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="da-hero-img"
                  src={src}
                  alt={i === 0 ? "Library" : "Books"}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="da-section" id="about">
          <div className="da-section-head">
            <span className="da-s-num">I.</span>
            <span className="da-s-title">On the Subject of Myself</span>
            <div className="da-s-line" />
          </div>
          <div className="da-about-grid">
            <div className="da-about-left">
              <div className="da-about-copy">
                {site.aboutLeft.map((chunks, i) => (
                  <p key={i} className="da-about-p">
                    {renderBioChunks(chunks)}
                  </p>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="da-about-photo da-about-photo-below-copy"
                src={academiaContent.aboutPhotoBelowCopy}
                alt=""
              />
            </div>
            <div className="da-about-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="da-about-photo da-about-photo-above-ledger"
                src={academiaContent.aboutPhotoAboveLedger}
                alt=""
              />
              <div className="da-ledger">
                {site.whoami.map((row) => (
                  <div key={row.key} className="da-ledger-row">
                    <span className="da-l-key">{row.key}</span>
                    <span className="da-l-val">
                      {row.key === "available" &&
                      row.value.replace(/"/g, "").toLowerCase() === "true" ? (
                        <>
                          <span className="da-dot" aria-hidden />
                          Available
                        </>
                      ) : (
                        row.value.replace(/^"|"$/g, "")
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="da-section" id="projects">
          <div className="da-section-head">
            <span className="da-s-num">II.</span>
            <span className="da-s-title">Selected Works</span>
            <div className="da-s-line" />
          </div>
          <div className="da-projects-layout">
            {site.projects.map((project, idx) => {
              const img =
                academiaContent.projectCardImages[idx] ??
                academiaContent.projectCardImages[
                  academiaContent.projectCardImages.length - 1
                ]!;
              const href =
                "demo" in project.links && project.links.demo
                  ? project.links.demo
                  : project.links.repo;
              const tag = project.badges[0]?.label ?? "project";
              return (
                <div key={project.num} className="da-project-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="da-project-card-img"
                    src={img}
                    alt=""
                  />
                  <div className="da-project-tag">{tag}</div>
                  <div className="da-project-name">
                    {href ? (
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.folder.replace(/\/$/, "")}
                      </Link>
                    ) : (
                      project.folder
                    )}
                  </div>
                  <p className="da-project-desc">{project.description}</p>
                  {("demo" in project.links && project.links.demo) ||
                  project.links.repo ? (
                    <div className="da-project-links">
                      {"demo" in project.links && project.links.demo ? (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live
                        </Link>
                      ) : null}
                      {project.links.repo ? (
                        <Link
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repository
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="da-pills">
                    {project.stack.map((t) => (
                      <span key={t} className="da-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="da-section" id="skills">
          <div className="da-section-head">
            <span className="da-s-num">III.</span>
            <span className="da-s-title">Instruments &amp; Apparatus</span>
            <div className="da-s-line" />
          </div>
          <div className="da-skills-cols">
            {site.skillGroups.map((group) => (
              <div key={group.name}>
                <div className="da-skill-group-title">
                  {group.name.replace(/^\/\/\s*/, "")}
                </div>
                {group.skills.map((s) => (
                  <div key={s.name} className="da-skill-item">
                    {s.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="da-section" id="contact">
          <div className="da-section-head">
            <span className="da-s-num">IV.</span>
            <span className="da-s-title">Correspondence</span>
            <div className="da-s-line" />
          </div>
          <div className="da-contact-layout">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="da-contact-photo"
                src={academiaContent.contactPhoto}
                alt=""
              />
              <p className="da-contact-intro">{site.contactTagline}</p>
            </div>
            <div className="da-contact-links">
              {site.contactCells.map((cell) => (
                <Link
                  key={cell.key}
                  href={cell.href}
                  className="da-contact-row"
                  {...(cell.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="da-c-label">{cell.key}</span>
                  <span className="da-c-val">{cell.display}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer className="da-footer">
          <span className="da-footer-l">
            © {new Date().getFullYear()} {site.name} —{" "}
            {academiaContent.footerLeftNote}
          </span>
          <span className="da-footer-r">
            {academiaContent.footerRightMotto}
          </span>
        </footer>
      </div>
    </>
  );
}
