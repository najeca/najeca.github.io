"use client";

import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

const NAV_LINKS = [
  { label: "home", href: "#hero" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
];

export function BottomNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => href.replace("#", ""));
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 items-center justify-around border-t border-border bg-background/90 backdrop-blur-sm">
      {NAV_LINKS.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={`flex-1 flex items-center justify-center py-4 text-sm font-display font-semibold lowercase transition-colors min-h-[56px] ${
            activeSection === href.replace("#", "")
              ? "text-accent"
              : "text-text-secondary hover:text-accent"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
