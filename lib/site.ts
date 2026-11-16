/** Inline emphasis inside terminal-style copy */
export type BioChunk =
  | { kind: "text"; v: string }
  | { kind: "hl"; v: string }
  | { kind: "str"; v: string };

export type ProjectBadge =
  | "feat"
  | "ml"
  | "sys"
  | "web"
  | "qa"
  | "backend"
  | "mobile"
  | "team"
  | "ux"
  | "ai";

export type ProjectBadgeChip = { label: string; type: ProjectBadge };

export type SkillLevel = "hi" | "mid" | "lo";

export const site = {
  /** Shorthand for titlebar / footer (often lowercase / handle-style) */
  handle: "shrishty",
  /** GitHub username (for live contribution graph; needs GITHUB_TOKEN in env) */
  githubLogin: "SG-TRINITY",
  /** Shown after @ in prompts */
  promptUser: "sg",
  promptHost: "portfolio",
  name: "Shrishty Gnanasekaran",
  /** Rotating strings under the hero heading */
  typingPhrases: [
    "building things & causing minor chaos ✨",
    "professionally curious, occasionally chaotic 🌀",
    "turning 'what if...' into working software 💻",
    "making pixels behave (mostly) 💅",
    "side quests are my main quests 🎮",
    "it worked on my machine 💀",
    "building things I probably should've downloaded 🛠️",
    "CSS enthusiast. JavaScript survivor. 🎨",
    "professional side-quest enthusiast ✨",
  ],
  heroBio: [
    { kind: "text", v: "CS graduate " },
    { kind: "hl", v: "@[University of Alberta]" },
    { kind: "text", v: " with experience across " },
    { kind: "hl", v: "[full-stack development]" },
    { kind: "text", v: " and a soft spot for " },
    { kind: "hl", v: "[creative frontend & UI/UX]" },
    { kind: "text", v: ". I love building things that work, making them look good, and occasionally turning minor inconveniences into entire side projects. ✨" },
  ] satisfies BioChunk[],
  statusRow: [
    { key: "location:", value: "[London, ON]", valClass: "blue" as const },
    { key: "day job:", value: "[Residence Life Coordinator]", valClass: "green" as const },
  ],
  aboutLeft: [
    [
      { kind: "text", v: "I studied Computer Science at the " },
      { kind: "hl", v: "University of Alberta" },
      { kind: "text", v: ". I build across the full stack, but creative frontend and UI/UX are where I have the most fun." },
    ],
    [
      { kind: "text", v: "I’m a " },
      { kind: "hl", v: "Residence Life Coordinator at Western University" },
      { kind: "text", v: ", where I support students, build community, and work on problems that unfortunately cannot be fixed by restarting the server." },
    ],
    [
      { kind: "text", v: "Away from my laptop, I’m usually reading or playing dodgeball. Back at my laptop, I’m probably turning a silly idea into a side project." },
    ],
  ] satisfies BioChunk[][],
  whoami: [
    { key: "name", value: '"Shrishty G"', valClass: "default" as const },
    { key: "uni", value: '"University of Alberta"', valClass: "blue" as const },
    { key: "focus", value: '"full-stack + UI/UX"', valClass: "purple" as const },
    { key: "day_job", value: '"Residence Life Coordinator"', valClass: "default" as const },
    { key: "sports", value: '"dodgeball 🏐"', valClass: "blue" as const },
    { key: "side_quests", value: "true", valClass: "green" as const },
    { key: "coffee", value: '"sleep_mode 💤"', valClass: "yellow" as const },
  ],
  /** Seed so the activity grid matches SSR and client */
  contribSeed: 20260321,
  projects: [
    {
      num: "01",
      folder: "TomatoSoup/",
      badges: [
        { label: "backend", type: "backend" as ProjectBadge },
        { label: "ux", type: "ux" as ProjectBadge },
      ] satisfies ProjectBadgeChip[],
      description:
        "Django hobby community app—pick interests, a personalized “My Bowl” feed, posts with images, comments, and profiles. I owned UI/UX and frontend: templates, layout, and keeping the look consistent.",
      stack: ["django", "python", "html/css"],
      links: {
        repo: "https://github.com/Irisveil/TomatoSoup",
      },
    },
    {
      num: "02",
      folder: "banana-math/",
      badges: [
        { label: "web", type: "web" as ProjectBadge },
        { label: "featured", type: "feat" as ProjectBadge },
      ] satisfies ProjectBadgeChip[],
      description:
        "Mental math practice web app (Next.js, Supabase auth, leaderboard, stats). I focused on UI/UX and frontend—simple, fast flows and a polished interface.",
      stack: ["next.js", "typescript", "supabase"],
      links: {
        demo: "https://www.numerify.me/",
        repo: "https://github.com/Gym-Bros-Programs/banana-math",
      },
    },
    {
      num: "03",
      folder: "f24project-Kayanou/",
      badges: [
        { label: "team", type: "team" as ProjectBadge },
        { label: "ux", type: "ux" as ProjectBadge },
      ] satisfies ProjectBadgeChip[],
      description:
        "CMPUT 401 (UAlberta) team software project. I led UI/UX and frontend work—making the product clear, usable, and visually cohesive for users.",
      stack: ["frontend", "ui/ux", "typescript"],
      links: {
        repo: "https://github.com/UAlberta-CMPUT401/f24project-Kayanou",
      },
    },
    {
      num: "04",
      folder: "agile-beast/",
      badges: [
        { label: "mobile", type: "mobile" as ProjectBadge },
        { label: "testing", type: "qa" as ProjectBadge },
      ] satisfies ProjectBadgeChip[],
      description:
        "CMPUT 301 Android household-inventory app (items, tags, sort/filter, insurance-style records). I was responsible for testing—coverage, edge cases, and keeping quality tight as the team shipped features.",
      stack: ["java", "android", "testing"],
      links: {
        repo: "https://github.com/CMPUT301F23T29/agile-beast",
      },
    },
    {
      num: "05",
      folder: "SG_portfolio/",
      badges: [
        { label: "web", type: "web" as ProjectBadge },
        { label: "ux", type: "ux" as ProjectBadge },
      ] satisfies ProjectBadgeChip[],
      description:
        "This site: terminal / GitHub-dark theme, optional live GitHub contribution graph, and copy driven from one config file—Next.js, React, TypeScript.",
      stack: ["next.js", "react", "typescript"],
      links: {
        repo: "https://github.com/SG-TRINITY/SG_portfolio",
      },
    },
    {
      num: "06",
      folder: "Borscht/",
      badges: [
        { label: "web", type: "web" as ProjectBadge },
        { label: "ai", type: "ai" as ProjectBadge },
      ] satisfies ProjectBadgeChip[],
      description:
        "Brutalist SPA for feeding résumés and cover letters into an AI review-and-roast pipeline—upload flow, roast intensity, industrial UI. Vite + React 19 + TypeScript; backend and models are the next step.",
      stack: ["vite", "react", "typescript"],
      links: {
        repo: "https://github.com/SG-TRINITY/Borscht",
      },
    },
    {
      num: "07",
      folder: "Ladle Me Jobs/",
      badges: [{ label: "personal", type: "feat" as ProjectBadge }] satisfies ProjectBadgeChip[],
      description: "A personal project for my job search.",
      stack: [],
      links: { repo: undefined },
    },
  ],
  skillGroups: [
    {
      name: "// languages",
      skills: [
        { name: "python", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "javascript", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "c / c++", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "java", level: "mid" as SkillLevel, stars: "★★★☆" },
      ],
    },
    {
      name: "// frameworks",
      skills: [
        { name: "react", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "node.js", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "fastapi", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "next.js", level: "mid" as SkillLevel, stars: "★★★☆" },
      ],
    },
    {
      name: "// tools",
      skills: [
        { name: "git", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "docker", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "linux", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "postgresql", level: "mid" as SkillLevel, stars: "★★☆☆" },
      ],
    },
    {
      name: "// ml / ai",
      skills: [
        { name: "pytorch", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "numpy", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "scikit-learn", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "hugging face", level: "mid" as SkillLevel, stars: "★★☆☆" },
      ],
    },
    {
      name: "// cloud",
      skills: [
        { name: "aws", level: "mid" as SkillLevel, stars: "★★☆☆" },
        { name: "vercel", level: "hi" as SkillLevel, stars: "★★★★" },
        { name: "firebase", level: "mid" as SkillLevel, stars: "★★★☆" },
        { name: "supabase", level: "mid" as SkillLevel, stars: "★★☆☆" },
      ],
    },
    {
      name: "// learning",
      skills: [
        { name: "rust", level: "lo" as SkillLevel, stars: "★☆☆☆" },
        { name: "kubernetes", level: "lo" as SkillLevel, stars: "★☆☆☆" },
        { name: "typescript", level: "mid" as SkillLevel, stars: "★★☆☆" },
        {
          name: "still exploring",
          level: "lo" as SkillLevel,
          stars: "★☆☆☆",
        },
      ],
    },
  ],
  contactTagline:
    "open to: open source · collaborations · creative side quests · interesting ideas ✨",
  contactCells: [
    { key: "email", display: "gnshrishty@gmail.com", href: "mailto:gnshrishty@gmail.com" },
    {
      key: "github",
      display: "github.com/SG-TRINITY",
      href: "https://github.com/SG-TRINITY",
    },
    {
      key: "linkedin",
      display: "linkedin.com/in/shrishty-gnanasekaran",
      href: "https://www.linkedin.com/in/shrishty-gnanasekaran/",
    },
    {
      key: "resume",
      display: "download pdf",
      href: "/SG_sw_fullstack.pdf",
    },
  ],
  footer: {
    rightPrefix: "made with ",
    rightHeart: "♥",
    rightSuffix: " and a lot of Cheetos",
  },
  /** Page <title> and meta description */
  metaTitle: "Shrishty G — personal website",
  metaDescription:
    "Personal website of Shrishty Gnanasekaran, a CS graduate and Residence Life Coordinator. Explore my experience, projects, and skills.",
} as const;
