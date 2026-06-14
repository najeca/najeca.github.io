# Static export for GitHub Pages deployment

The site deploys to najeca.github.io via GitHub Actions. GitHub Pages serves only static files, so Next.js must be configured with `output: 'export'`. This disables SSR, API routes, ISR, and dynamic routes. The portfolio is a fully static site with no server-side logic required, so none of these capabilities are needed. Vercel was the alternative — it would have supported full Next.js features — but GitHub Pages was chosen to keep the deployment free, simple, and tied directly to the GitHub account that hosts the source.

## Considered Options

- **GitHub Pages + static export** — chosen. Free, no external service dependency, deployment via GitHub Actions on push to main.
- **Vercel** — rejected. Requires an account and external service dependency; no server-side features are needed to justify it.
