export interface TechItem {
  name: string;
  icon: string;
}

export interface StackCategory {
  category: string;
  items: TechItem[];
}

export const stack: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML", icon: "html" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cplusplus" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Python", icon: "python" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Arduino", icon: "arduino" },
      { name: "Discord", icon: "discord" },
    ],
  },
];
