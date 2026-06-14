"use client";

import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "home", href: "#hero" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
];

export function NavBar() {
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
    <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <NavLink
            key={href}
            href={href}
            label={label}
            active={activeSection === href.replace("#", "")}
          />
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
