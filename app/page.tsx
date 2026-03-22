import Link from "next/link";
import { renderBioChunks } from "@/components/BioChunks";
import { ContribGrid } from "@/components/ContribGrid";
import { TypewriterTagline } from "@/components/TypewriterTagline";
import { fetchGitHubContributionWeeks } from "@/lib/github-contributions";
import { site } from "@/lib/site";

function whoamiValClass(c: string) {
  return c === "default" ? "val" : `val ${c}`;
}

export default async function Home() {
  const contributionWeeks = await fetchGitHubContributionWeeks(site.githubLogin);

  const resumeHref =
    site.contactCells.find((c) => c.key === "resume")?.href ?? "/resume.pdf";
  const emailHref =
    site.contactCells.find((c) => c.key === "email")?.href ?? "#contact";

  return (
    <div className="page">
      <div className="titlebar">
        <div className="tb-left">
          <div className="tb-dot red" />
          <div className="tb-dot yellow" />
          <div className="tb-dot green" />
          <span className="tb-title">
            <span>{site.handle}</span> — bash — 120×40
          </span>
        </div>
        <nav className="tb-nav">
          <a href="#about">~/about</a>
          <a href="#projects">~/projects</a>
          <a href="#skills">~/skills</a>
          <a href="#contact">~/contact</a>
        </nav>
      </div>

      <section className="hero">
        <div className="cmd-block">
          <div className="prompt-line">
            <span className="prompt-user">{site.promptUser}</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">{site.promptHost}</span>
            <span className="prompt-path"> ~/</span>
            <span className="prompt-sym">$</span>
            <span className="prompt-cmd">
              {" "}
              cat <span className="prompt-arg">README.md</span>
            </span>
          </div>
        </div>
        <div className="output-block">
          <div className="hero-name">
            <span className="hash"># </span>
            {site.name}
          </div>
          <div className="hero-tagline">
            <span className="str">&quot;</span>
            <TypewriterTagline phrases={site.typingPhrases} />
            <span className="str">&quot;</span>
          </div>
          <p className="hero-bio">{renderBioChunks(site.heroBio)}</p>
          <div className="status-row">
            {site.statusRow.map((row) => (
              <div key={row.key} className="status-item">
                <span className="status-key">{row.key}</span>
                <span className={`status-val ${row.valClass}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-btns">
          <Link href={resumeHref} className="btn primary">
            view resume
          </Link>
          <Link href={emailHref} className="btn">
            get in touch
          </Link>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-cmd">
          <div className="prompt-line">
            <span className="prompt-user">{site.promptUser}</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">{site.promptHost}</span>
            <span className="prompt-path"> ~/about</span>
            <span className="prompt-sym">$</span>
            <span className="prompt-cmd">
              {" "}
              cat <span className="prompt-arg">bio.txt</span>
            </span>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-cell">
            {site.aboutLeft.map((chunks, i) => (
              <p key={i} className="about-p">
                {renderBioChunks(chunks)}
              </p>
            ))}
          </div>
          <div className="about-cell right">
            <div className="prompt-line" style={{ marginBottom: 14 }}>
              <span className="prompt-user">{site.promptUser}</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">{site.promptHost}</span>
              <span className="prompt-sym" style={{ marginLeft: 4 }}>
                $
              </span>
              <span className="prompt-cmd">
                {" "}
                whoami <span className="prompt-flag">--json</span>
              </span>
            </div>
            <table className="info-table">
              <tbody>
                {site.whoami.map((row) => (
                  <tr key={row.key}>
                    <td className="key">{row.key}</td>
                    <td className={whoamiValClass(row.valClass)}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="contrib-section">
        <div className="contrib-label">activity — last 24 weeks</div>
        <ContribGrid weeks={contributionWeeks} seed={site.contribSeed} />
      </div>

      <section className="section" id="projects">
        <div className="section-cmd">
          <div className="prompt-line">
            <span className="prompt-user">{site.promptUser}</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">{site.promptHost}</span>
            <span className="prompt-path"> ~/projects</span>
            <span className="prompt-sym">$</span>
            <span className="prompt-cmd">
              {" "}
              ls <span className="prompt-flag">-la</span>
            </span>
          </div>
        </div>
        <div className="project-list">
          {site.projects.map((project) => {
            const href =
              "demo" in project.links && project.links.demo
                ? project.links.demo
                : project.links.repo;
            return (
              <div key={project.num} className="project-item">
                <span className="project-num">{project.num}</span>
                <div>
                  <div className="project-header">
                    <span className="project-name">
                      {href ? (
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                          {project.folder}
                        </Link>
                      ) : (
                        project.folder
                      )}
                    </span>
                    <div className="project-badges">
                      {project.badges.map((b, i) => (
                        <span key={i} className={`badge ${b.type}`}>
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  {("demo" in project.links && project.links.demo) ||
                  project.links.repo ? (
                    <div className="project-links">
                      {"demo" in project.links && project.links.demo ? (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          demo →
                        </Link>
                      ) : null}
                      {project.links.repo ? (
                        <Link
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          source →
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="project-stack">
                    {project.stack.map((t) => (
                      <span key={t} className="stack-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-cmd">
          <div className="prompt-line">
            <span className="prompt-user">{site.promptUser}</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">{site.promptHost}</span>
            <span className="prompt-path"> ~/skills</span>
            <span className="prompt-sym">$</span>
            <span className="prompt-cmd">
              {" "}
              cat <span className="prompt-arg">stack.json</span>
            </span>
          </div>
        </div>
        <div className="skills-grid">
          {site.skillGroups.map((group) => (
            <div key={group.name} className="skill-group">
              <div className="skill-group-name">{group.name}</div>
              {group.skills.map((s) => (
                <div key={s.name} className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <span className={`skill-level ${s.level}`}>{s.stars}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-cmd">
          <div className="prompt-line">
            <span className="prompt-user">{site.promptUser}</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">{site.promptHost}</span>
            <span className="prompt-path"> ~/contact</span>
            <span className="prompt-sym">$</span>
            <span className="prompt-cmd">
              {" "}
              ./reach_out<span className="prompt-flag"> --help</span>
            </span>
          </div>
          <p className="contact-hint">{site.contactTagline}</p>
        </div>
        <div className="contact-grid">
          {site.contactCells.map((cell) => (
            <Link
              key={cell.key}
              href={cell.href}
              className="contact-cell"
              {...(cell.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <div className="c-key">{cell.key}</div>
              <div className="c-val">{cell.display}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span className="footer-l">
          © {new Date().getFullYear()} {site.handle} · built with Next.js
        </span>
        <span className="footer-r">
          {site.footer.rightPrefix}
          <span>{site.footer.rightHeart}</span>
          {site.footer.rightSuffix}
        </span>
      </footer>
    </div>
  );
}
