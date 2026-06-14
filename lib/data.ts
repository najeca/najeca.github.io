import type { ComponentType } from "react";
import type { IconType } from "react-icons";

export type SkillIcon = {
  label: string;
  icon?: IconType;
  color?: string;
  customIcon?: ComponentType<{ size?: number }>;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  action: { type: "appstore" | "github"; url: string };
  screenshot?: string;
};

export type SkillGroup = {
  category: string;
  descriptor: string;
  iconStyle: "logo" | "pill";
  icons: SkillIcon[];
};

export const projects: Project[] = [
  {
    name: "Landis",
    description:
      "A CV and cover letter generator that uses AI to tailor job applications from a master profile.",
    tags: ["Next.js", "TypeScript", "Claude API", "Supabase", "Expo"],
    action: {
      type: "appstore",
      url: "https://apps.apple.com/gb/app/landis/id6765484923",
    },
  },
  {
    name: "Belific",
    description:
      "A focused productivity app for managing daily schedules with a Pomodoro timer — built as a PWA that works offline and installs on iPhone.",
    tags: ["JavaScript", "PWA", "Service Worker"],
    action: {
      type: "github",
      url: "https://github.com/najeca/belific",
    },
  },
  {
    name: "Cadix",
    description:
      "A habit and routine tracking app for iOS that helps users build and maintain daily habits.",
    tags: ["Swift", "iOS", "Xcode"],
    action: {
      type: "appstore",
      url: "https://apps.apple.com/gb/app/cadix/id6764518983",
    },
  },
  {
    name: "Verto CMS",
    description:
      "A full-stack content management system featuring CRUD operations for digital content, image upload, and role-based access control.",
    tags: ["ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
    action: {
      type: "github",
      url: "https://github.com/najeca/Verto_CMS_Project",
    },
  },
  {
    name: "Security Log Analysis Tool",
    description:
      "A rule-based detection pipeline that ingests raw logs, applies sliding-window rules to detect five attack patterns, and outputs structured incident reports with MITRE ATT&CK mapping.",
    tags: ["Python", "MITRE ATT&CK", "SIEM"],
    action: {
      type: "github",
      url: "https://github.com/najeca/security_log_analysis_tool",
    },
  },
];

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiCss,
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";
import { TypeScriptIcon, Html5Icon, PythonIcon, LinuxIcon } from "@/components/skills/TechIcons";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    descriptor: "I build interfaces that work cleanly on any device.",
    iconStyle: "logo",
    icons: [
      { label: "React",        icon: SiReact,       color: "#61DAFB" },
      { label: "Next.js",      icon: SiNextdotjs,   color: "currentColor" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "JavaScript",   icon: SiJavascript,  color: "#F7DF1E" },
      { label: "TypeScript",   customIcon: TypeScriptIcon },
      { label: "HTML",         customIcon: Html5Icon },
      { label: "CSS",          icon: SiCss,         color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    descriptor: "I write server-side logic that does the job without overcomplicating it.",
    iconStyle: "logo",
    icons: [
      { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { label: "Python",  customIcon: PythonIcon },
      { label: "Docker",  icon: SiDocker,    color: "#2496ED" },
      { label: "Linux",   customIcon: LinuxIcon },
      { label: "SQL" },
      { label: "REST APIs" },
    ],
  },
  {
    category: "Security and Testing",
    descriptor: "I understand how systems can fail and write tests to make sure they don't.",
    iconStyle: "pill",
    icons: [
      { label: "CompTIA Security+" },
      { label: "TryHackMe" },
      { label: "TDD" },
      { label: "Vitest" },
    ],
  },
];
