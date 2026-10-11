import type { TechItem } from "./stack";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  stack: TechItem[];
  status: "completed" | "in-progress";
  caseStudyUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
}

export const projects: Project[] = [
  {
    id: "negeshoca",
    title: "NeGeShoCa",
    subtitle: "Next Generation Shopping Cart Powered by Arduino Technology",
    description:
      "A smart checkout system for small businesses using Arduino, Kotlin, Firebase and QR-based payment.",
    stack: [
      { name: "Arduino", icon: "arduino" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Firebase", icon: "firebase" },
      { name: "C++", icon: "cplusplus" },
    ],
    status: "completed",
    caseStudyUrl: "/case-studies/negeshoca",
    demoUrl:
      "https://drive.google.com/drive/folders/16A_1ifhGLFP4fgBMJeN6dk38aG7_q2Vb?usp=sharing",
    demoLabel: "Demo video",
  },
  {
    id: "pos-inventory",
    title: "NeGeShoCa POS & Inventory System",
    description:
      "A supplementary desktop system built for our capstone defense, handling product management and sales records for the NeGeShoCa smart shopping cart.",
    stack: [
      { name: "NetBeans", icon: "netbeans" },
      { name: "Java", icon: "java" },
      { name: "Firebase", icon: "firebase" },
    ],
    status: "in-progress",
  },
];
