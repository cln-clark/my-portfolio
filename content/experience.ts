export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  location: string;
  summary?: string;
  points?: string[];
  tech?: string[];
}

export const experience: TimelineItem[] = [
  {
    title: "System Engineer",
    org: "Divergent Technologies Philippines, Inc.",
    period: "2026 - Present",
    location: "City of Makati, Metro Manila",
    tech: [
      "Tauri",
      "Next.js",
      "Rust",
      "React",
      "SQLite",
      "Supabase",
      "Agentic coding",
      "Git",
    ],
    points: [
      "Adopted agentic coding with human review and testing before every release, delivering client-requested features 30% faster than my earlier AI-assisted workflow and under original estimates.",
      "Took part in multiple client deployment cycles, rolling out updates to live merchants with minimal downtime.",
      "Maintained and improved production reliability by fixing bugs and tuning performance for clients who rely on the system daily.",
      "Contributed to architecture decisions as the platform evolved, using AI agents to speed up refactoring, testing, and iteration.",
      "Built hands-on fluency with AI-assisted engineering — including agents, MCP integrations, and community-sourced skills — and used it to accelerate my own learning of new software concepts.",
    ],
  },
  {
    title: "Data Processing Associate",
    org: "Appen",
    period: "2025 - 2026",
    location: "City of Kawit, Cavite",
    points: [
      "Labeled and reviewed image data against strict annotation guidelines to ensure quality and consistency.",
      "Supported data processing workflows across large datasets while maintaining confidentiality.",
    ],
  },
  {
    title: "Intern / OJT",
    org: "Sun Life of Canada Philippines Inc. Phoenix Palm NBO",
    period: "2025",
    location: "City of Pasay, Metro Manila",
    tech: ["PowerPoint", "VBA macros"],
    points: [
      "Completed on-the-job training as part of the academic curriculum, supporting event tech operations — setup, troubleshooting, and system checks — in a fast-paced corporate environment.",
      "Designed an interactive Wheel of Fortune-style game in PowerPoint using VBA for a client engagement event.",
    ],
  },
  {
    title: "BS Information Technology",
    org: "Cavite State University - Cum Laude",
    period: "2021 - 2025",
    location: "City of Imus, Cavite",
  },
  {
    title: "ICT",
    org: "University of Perpetual Help System Dalta",
    period: "2018 - 2020",
    location: "Molino, City of Bacoor, Cavite",
  },
];
