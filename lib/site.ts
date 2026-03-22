/** Inline emphasis inside terminal-style copy */
export type BioChunk =
  | { kind: "text"; v: string }
  | { kind: "hl"; v: string }
  | { kind: "str"; v: string };

export type ProjectBadge = "feat" | "ml" | "sys" | "web";

export type SkillLevel = "hi" | "mid" | "lo";

export const site = {
  /** Shorthand for titlebar / prompts, e.g. "yourname" */
  handle: "yourname",
  /** Shown after @ in prompts */
  promptUser: "you",
  promptHost: "portfolio",
  name: "YourName",
  /** Rotating strings under the hero heading */
  typingPhrases: [
    "software engineer",
    "ml enthusiast",
    "open source contributor",
    "full stack dev",
    "computer scientist",
    "bug wrangler",
  ],
  heroBio: [
    { kind: "text", v: "CS student " },
    { kind: "hl", v: "@[Your University]" },
    { kind: "text", v: " · focused on " },
    { kind: "hl", v: "[your area]" },
    {
      kind: "text",
      v: " · building things that are useful, sometimes elegant, occasionally both. Open to internships, research, and interesting problems.",
    },
  ] satisfies BioChunk[],
  statusRow: [
    { key: "status:", value: "● open_to_work", valClass: "green" as const },
    { key: "location:", value: "[Your City]", valClass: "blue" as const },
    { key: "year:", value: "[2nd/3rd/4th]", valClass: "yellow" as const },
  ],
  aboutLeft: [
    [
      { kind: "text", v: "Hi — I'm a " },
      { kind: "str", v: "[year]" },
      {
        kind: "text",
        v: " year CS student at ",
      },
      { kind: "hl", v: "[University]" },
      {
        kind: "text",
        v: ". I love building software that does something real, preferably something that would have seemed like magic a decade ago.",
      },
    ],
    [
      { kind: "text", v: "My interests include " },
      { kind: "hl", v: "[your area]" },
      {
        kind: "text",
        v: ", distributed systems, and the occasional rabbit hole into programming language theory at 2am.",
      },
    ],
    [
      {
        kind: "text",
        v: "Outside of code: reading, contributing to open source, and spending way too long configuring my terminal. Some things are worth it.",
      },
    ],
  ] satisfies BioChunk[][],
  whoami: [
    { key: "name", value: '"[Your Name]"', valClass: "default" as const },
    { key: "uni", value: '"[University]"', valClass: "blue" as const },
    { key: "focus", value: '"[Your Area]"', valClass: "purple" as const },
    { key: "available", value: "true", valClass: "green" as const },
    { key: "location", value: '"[City]"', valClass: "default" as const },
    { key: "coffee", value: "required", valClass: "yellow" as const },
  ],
  /** Seed so the activity grid matches SSR and client */
  contribSeed: 20260321,
  projects: [
    {
      num: "01",
      folder: "project-alpha/",
      badge: { label: "featured", type: "feat" as ProjectBadge },
      description:
        "A short description of what this does and the problem it solves. Make it crisp.",
      stack: ["react", "node", "postgresql"],
      links: { repo: "https://github.com" },
    },
    {
      num: "02",
      folder: "project-beta/",
      badge: { label: "ml", type: "ml" as ProjectBadge },
      description:
        "The interesting technical challenge here and what you discovered building it.",
      stack: ["python", "pytorch", "fastapi"],
      links: { repo: "https://github.com" },
    },
    {
      num: "03",
      folder: "project-gamma/",
      badge: { label: "systems", type: "sys" as ProjectBadge },
      description:
        "What makes this one technically interesting — the hard part you're proud you solved.",
      stack: ["c++", "linux", "cmake"],
      links: { repo: "https://github.com" },
    },
    {
      num: "04",
      folder: "project-delta/",
      badge: { label: "web", type: "web" as ProjectBadge },
      description:
        "Another cool build. Link to GitHub or a live demo so people can actually try it.",
      stack: ["typescript", "next.js", "vercel"],
      links: { demo: "https://example.com", repo: "https://github.com" },
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
        { name: "[your thing]", level: "lo" as SkillLevel, stars: "★☆☆☆" },
      ],
    },
  ],
  contactTagline:
    "open to: internships · research · collabs · interesting problems",
  contactCells: [
    { key: "email", display: "you@email.com", href: "mailto:you@email.com" },
    {
      key: "github",
      display: "github.com/yourhandle",
      href: "https://github.com/yourhandle",
    },
    {
      key: "linkedin",
      display: "linkedin.com/in/you",
      href: "https://linkedin.com/in/you",
    },
    { key: "resume", display: "download pdf", href: "/resume.pdf" },
  ],
  footer: {
    rightPrefix: "made with ",
    rightHeart: "♥",
    rightSuffix: " and too much caffeine",
  },
  /** Page <title> and meta description */
  metaTitle: "yourname — cs student",
  metaDescription:
    "CS student portfolio — projects, skills, and contact. Open to internships and interesting problems.",
} as const;
