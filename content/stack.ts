export interface TechItem {
  name: string;
  icon: string;
}

export interface StackCategory {
  category: string;
  blurb: string;
  items: TechItem[];
}

export const stack: StackCategory[] = [
  {
    category: "Frontend",
    blurb: "Interfaces, client architecture, and the details people feel.",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML", icon: "html" },
    ],
  },
  {
    category: "Backend & Data",
    blurb: "APIs, services, integrations, and the data underneath.",
    items: [
      { name: "Rust", icon: "rust" },
      { name: "Java", icon: "java" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "C++", icon: "cplusplus" },
      { name: "Python", icon: "python" },
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "SQLite", icon: "sqlite" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    category: "Tools & Workflow",
    blurb: "The environment around the work, including the AI-assisted parts.",
    items: [
      { name: "Tauri", icon: "tauri" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Arduino", icon: "arduino" },
      { name: "Claude", icon: "claude" },
    ],
  },
];
