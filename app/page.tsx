import { AcademiaHome } from "@/components/academia/AcademiaHome";
import { TerminalHome } from "@/components/terminal/TerminalHome";
import { fetchGitHubContributionWeeks } from "@/lib/github-contributions";
import { site } from "@/lib/site";

export default async function Home() {
  const contributionWeeks = await fetchGitHubContributionWeeks(site.githubLogin);

  const resumeHref =
    site.contactCells.find((c) => c.key === "resume")?.href ?? "/resume.pdf";
  const emailHref =
    site.contactCells.find((c) => c.key === "email")?.href ?? "#contact";

  return (
    <>
      <div className="terminal-only">
        <TerminalHome
          contributionWeeks={contributionWeeks}
          resumeHref={resumeHref}
          emailHref={emailHref}
        />
      </div>
      <div className="academia-only">
        <AcademiaHome resumeHref={resumeHref} emailHref={emailHref} />
      </div>
    </>
  );
}
