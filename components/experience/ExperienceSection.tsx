"use client";

import { useState } from "react";

type Tab = "experience" | "education";

const EXPERIENCE_ENTRIES = [
  {
    organisation: "Bedford Borough Council",
    role: "IT Service Desk Work Experience",
    dates: "April 2026",
    bullets: [
      "Used Hornbill ITSM to log, triage and track incidents and service requests.",
      "Carried out Active Directory tasks including user account creation, password resets, OU navigation and access group membership changes.",
      "Used VNC and RDP for remote access and troubleshooting.",
      "Followed IT security protocols and data handling procedures in a regulated local government environment.",
    ],
  },
  {
    organisation: "Bedford Hospital NHS Trust",
    role: "Administrative Work Experience",
    dates: "March 2026",
    bullets: [
      "Managed patient records and appointment documentation across clinical systems including ICE, Medilogik and IPM.",
      "Maintained files via a secure portal with full accuracy and confidentiality.",
      "Produced process flowcharts in SmartDraw for SOP documentation.",
      "Supported senior staff with scheduling and correspondence.",
    ],
  },
  {
    organisation: "Verto",
    role: "Full Stack CMS, Contract",
    dates: "October 2025",
    bullets: [
      "Built a full-stack content management system featuring complete CRUD operations for digital content, image upload, and role-based access control.",
    ],
  },
];

const EDUCATION_ENTRIES = [
  {
    institution: "Nottingham Trent University",
    qualification: "BSc Software Engineering",
    date: "2024",
  },
  {
    qualification: "CompTIA Security+ SY0-701",
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex gap-1 mb-10">
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-5 py-2 rounded-md font-display font-semibold text-sm lowercase transition-colors ${
            activeTab === "experience"
              ? "text-accent border border-accent"
              : "text-text-secondary hover:text-accent border border-transparent"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-5 py-2 rounded-md font-display font-semibold text-sm lowercase transition-colors ${
            activeTab === "education"
              ? "text-accent border border-accent"
              : "text-text-secondary hover:text-accent border border-transparent"
          }`}
        >
          Education and Certifications
        </button>
      </div>

      <div hidden={activeTab !== "experience"}>
        <ul className="flex flex-col gap-8">
          {EXPERIENCE_ENTRIES.map((entry) => (
            <li key={entry.organisation} className="border-l-2 border-border pl-6">
              <p className="font-display font-bold text-text-primary">{entry.organisation}</p>
              <p className="text-text-secondary text-sm mt-0.5">{entry.role} · {entry.dates}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="text-text-secondary text-sm leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div hidden={activeTab !== "education"}>
        <ul className="flex flex-col gap-8">
          {EDUCATION_ENTRIES.map((entry, i) => (
            <li key={i} className="border-l-2 border-border pl-6">
              {entry.institution && (
                <p className="font-display font-bold text-text-primary">{entry.institution}</p>
              )}
              <p className={`text-sm mt-0.5 ${entry.institution ? "text-text-secondary" : "font-display font-bold text-text-primary"}`}>
                {entry.qualification}
              </p>
              {entry.date && (
                <p className="text-text-secondary text-sm">{entry.date}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
