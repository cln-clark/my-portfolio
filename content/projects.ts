import type { TechItem } from "./stack";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  outcome: string;
  stack: TechItem[];
  status: "completed" | "in-progress";
  year: string;
  role: string;
  kicker: string;
  cover?: string;
  coverAlt?: string;
  caseStudyUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "negeshoca",
    title: "NeGeShoCa",
    subtitle: "Next Generation Shopping Cart Powered by Arduino Technology",
    description:
      "A smart checkout system for small businesses using Arduino, Kotlin, Firebase and QR-based payment.",
    outcome:
      "An IoT checkout system that automates scanning, payment, and real-time inventory for small retailers.",
    stack: [
      { name: "Arduino", icon: "arduino" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Firebase", icon: "firebase" },
      { name: "C++", icon: "cplusplus" },
    ],
    status: "completed",
    year: "2025",
    role: "Team lead · Sole developer",
    kicker: "IoT capstone",
    cover: "/images/behind-the-scene/bts5.jpg",
    coverAlt:
      "Close-up of the NeGeShoCa checkout hardware printing a receipt beside a QR payment screen",
    caseStudyUrl: "/case-studies/negeshoca",
    demoUrl:
      "https://drive.google.com/drive/folders/16A_1ifhGLFP4fgBMJeN6dk38aG7_q2Vb?usp=sharing",
    demoLabel: "Demo video",
    featured: true,
  },
  {
    id: "pos-inventory",
    title: "POS & Inventory",
    subtitle: "NeGeShoCa companion system",
    description:
      "A supplementary desktop system built for our capstone defense, handling product management and sales records for the NeGeShoCa smart shopping cart.",
    outcome:
      "A desktop companion for product management and sales records, built for the NeGeShoCa capstone.",
    stack: [
      { name: "NetBeans", icon: "netbeans" },
      { name: "Java", icon: "java" },
      { name: "Firebase", icon: "firebase" },
    ],
    status: "in-progress",
    year: "2025",
    role: "Developer",
    kicker: "Desktop system",
  },
];
