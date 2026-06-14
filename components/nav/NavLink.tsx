"use client";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export function NavLink({ href, label, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`font-display text-sm font-semibold lowercase transition-colors ${
        active
          ? "text-accent"
          : "text-text-secondary hover:text-accent"
      }`}
    >
      {label}
    </a>
  );
}
