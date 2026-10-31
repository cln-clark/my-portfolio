export const site = {
  name: "Clark Louise Navales",
  role: "Full-Stack Software Engineer",
  location: "City of Imus, Cavite",
  email: "clarknvls@gmail.com",
  linkedin: "https://linkedin.com/in/clark-louise-navales/",
  github: "https://github.com/cln-clark",
  resume: "/resume/clark-louise-navales-resume.pdf",
  hero: {
    lead: "I build production software end to end — from the interface to the database — and make the systems in between work together.",
    now: "System Engineer at Divergent Technologies",
  },
  about: [
    "I started with school projects across web, Android, and IoT, which taught me how the pieces of a system connect — from backend logic to the screen to the hardware. Today I build features end to end on a production POS platform at Divergent Technologies and work on integrations between business systems.",
    "My main tools are React, Next.js, TypeScript, Rust, Supabase, and SQLite. I get the most out of taking an idea from sketch to shipped, then watching it get used.",
  ],
  principles: [
    {
      title: "End-to-end ownership",
      text: "From UI to database, I stay with the problem until it ships.",
    },
    {
      title: "Production-minded",
      text: "I care about reliability, edge cases, and the people using the software.",
    },
    {
      title: "AI-assisted, human-reviewed",
      text: "I use agents to move faster, then review and test before release.",
    },
  ],
  description:
    "Portfolio of Clark Louise Navales, a full-stack software engineer in Cavite, Philippines. He builds production software end to end, from the interface to the database, and works on system integrations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};
