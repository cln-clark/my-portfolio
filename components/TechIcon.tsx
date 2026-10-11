import type { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaGit, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiApachenetbeanside,
  SiArduino,
  SiCplusplus,
  SiFirebase,
  SiKotlin,
  SiMysql,
  SiNestjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  react: FaReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html: FaHtml5,
  java: FaJava,
  cplusplus: SiCplusplus,
  kotlin: SiKotlin,
  python: SiPython,
  nestjs: SiNestjs,
  nodejs: FaNodeJs,
  mysql: SiMysql,
  firebase: SiFirebase,
  git: FaGit,
  github: FaGithub,
  vscode: SiVscodium,
  androidstudio: SiAndroidstudio,
  arduino: SiArduino,
  discord: FaDiscord,
  netbeans: SiApachenetbeanside,
};

export function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}
