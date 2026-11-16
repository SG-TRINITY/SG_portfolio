export const branches = {
  reslife: "residence-life",
  dev: "development",
  research: "research",
} as const;

export type Branch = keyof typeof branches;

export const commits = [
  { hash: "e26a01", branch: "reslife", name: "Western University", role: "Residence Life Coordinator", dates: "Nov 2026–present", detail: "Building community and supporting students as a Residence Life Coordinator in London, Ontario.", note: "current chapter · London, Ontario" },
  { hash: "c26b02", branch: "reslife", name: "Campus Living Centres", role: "Residence Life Coordinator", dates: "Jul–Nov 2026", detail: "My first professional Residence Life Coordinator role, in Vernon, British Columbia.", note: "Vernon, British Columbia" },
  { hash: "d26c03", branch: "dev", name: "Innova Tickets", role: "Volunteer Frontend Developer", dates: "Apr–Jun 2026", detail: "Volunteered as a frontend developer for Innova Tickets.", note: "volunteer frontend development" },
  { hash: "a25d04", branch: "research", name: "University of Alberta", role: "ML Undergraduate Researcher", dates: "Sep–Dec 2025", detail: "Worked on machine learning experiments and shared technical findings with senior researchers at the University of Alberta.", note: "undergraduate research · Edmonton" },
  { hash: "b24e05", branch: "reslife", name: "UAlberta · Senior RA", organization: "University of Alberta", role: "Senior Resident Assistant", dates: "Aug 2024–May 2025", detail: "Supported the residence community as a Senior Resident Assistant at the University of Alberta.", note: "Residence Life · Edmonton" },
  { hash: "f24a06", branch: "dev", name: "Hofintech", role: "Software Intern", dates: "May–Aug 2024", detail: "Worked as a software intern at Hofintech in Hyderabad, India.", note: "software development · Hyderabad" },
  { hash: "a23f07", branch: "reslife", name: "UAlberta · Resident Assistant", organization: "University of Alberta", role: "Resident Assistant", dates: "Aug 2023–May 2024", detail: "Supported students and helped build community in residence at the University of Alberta.", note: "Residence Life · Edmonton" },
] as const;

export const locations = [
  { id: "chennai", city: "Chennai", place: "Chennai, Tamil Nadu, India", icon: "🇮🇳", label: "roots", tag: "roots · where I was born", x: 75, y: 61, detail: "I was born in Chennai, Tamil Nadu. It’s where my story starts, and being Tamil is part of who I am.", note: "Tamil roots" },
  { id: "muscat", city: "Muscat", place: "Muscat, Oman", icon: "🇴🇲", label: "childhood home", tag: "childhood · where I grew up", x: 66.3, y: 45, detail: "I grew up in Muscat from around age three through high school. I went to Indian School Muscat from kindergarten through graduation, and I’m still proud of being in Red House. ❤️", note: "childhood HQ · Red House forever ❤️" },
  { id: "hyderabad", city: "Hyderabad", place: "Hyderabad, India", icon: "🇮🇳", label: "India home", tag: "india_home · family base in India", x: 71.8, y: 51, detail: "Hyderabad has long been my family’s base in India through my dad’s work. When we visited India while I was growing up in Oman, this was where we went. I spent some time in kindergarten here, too.", note: "our longtime home in India" },
  { id: "edmonton", city: "Edmonton", place: "Edmonton, Alberta, Canada", icon: "🎓", label: "university", tag: "university · UAlberta", x: 18.5, y: 25, detail: "I earned my BSc in Computer Science at the University of Alberta, worked in machine learning research, and went from RA to Senior RA in Residence Life.", note: "computer science · research · Residence Life" },
  { id: "vernon", city: "Vernon", place: "Vernon, British Columbia, Canada", icon: "💼", label: "career", tag: "career · first coordinator role", x: 15.4, y: 31, detail: "Vernon is where I started my first professional Residence Life Coordinator role, with Campus Living Centres.", note: "first professional Residence Life role" },
  { id: "london", city: "London", place: "London, Ontario, Canada", icon: "✨", label: "current", tag: "home.exe · HOME NOW", x: 27.5, y: 35, detail: "London is home now. I work at Western University as a Residence Life Coordinator, supporting students and building community.", note: "current home · Western University" },
] as const;
