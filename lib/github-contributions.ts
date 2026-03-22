export type GitHubContributionDay = {
  date: string;
  count: number;
  color: string;
};

const GRAPHQL = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

/**
 * Last N full weeks of contribution squares (columns = weeks, 7 rows = Sun–Sat),
 * using GitHub’s own colors. Requires `GITHUB_TOKEN` in env (classic PAT: read:user).
 */
export async function fetchGitHubContributionWeeks(
  login: string,
  weekCount = 24,
): Promise<GitHubContributionDay[][] | null> {
  const token = process.env.GITHUB_TOKEN?.trim();
  if (!token) return null;

  const to = new Date();
  const from = new Date(to);
  from.setUTCDate(from.getUTCDate() - weekCount * 7 - 7);

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "SG-portfolio",
      },
      body: JSON.stringify({
        query: GRAPHQL,
        variables: {
          login,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const body = (await res.json()) as {
      errors?: { message: string }[];
      data?: {
        user?: {
          contributionsCollection?: {
            contributionCalendar?: {
              weeks?: {
                contributionDays: {
                  date: string;
                  contributionCount: number;
                  color: string;
                }[];
              }[];
            };
          };
        };
      };
    };

    if (body.errors?.length) return null;

    const weeks =
      body.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!weeks?.length) return null;

    const slice = weeks.slice(-weekCount);
    return slice.map((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        color: d.color,
      })),
    );
  } catch {
    return null;
  }
}
