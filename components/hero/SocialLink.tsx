interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  newTab?: boolean;
}

export function SocialLink({ href, label, children, newTab = true }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="p-2 text-text-secondary hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}
