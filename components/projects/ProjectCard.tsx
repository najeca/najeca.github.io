import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, tags, action, screenshot } = project;

  return (
    <article className="flex flex-col bg-card border border-border rounded-xl overflow-hidden">
      {screenshot ? (
        <img
          src={screenshot}
          alt={`${name} screenshot`}
          className="w-full aspect-video object-cover"
        />
      ) : (
        <div
          data-testid="screenshot-placeholder"
          className="w-full aspect-video bg-background flex items-center justify-center border-b border-border"
        >
          <span className="font-display font-bold text-text-secondary text-sm lowercase">
            {name}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="font-display font-bold text-text-primary text-lg lowercase">
          {name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium border border-border text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          {action.type === "appstore" ? (
            <a
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} on the App Store`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-display font-semibold border border-accent text-accent hover:bg-accent hover:text-background transition-colors"
            >
              App Store
            </a>
          ) : (
            <a
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} on GitHub`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-display font-semibold border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
