Jethro � Portfolio Website Brief
Stack: Next.js + Tailwind CSS � Deployed to GitHub Pages via GitHub Actions Deployment: Static export using Next.js output: 'export'. No API routes, no SSR, no dynamic routes required. The site is fully static. URL: najeca.github.io GitHub account: najeca Last updated: June 2026


Project Status
This is a brand new project. There are no existing files, folders, or code of any kind. Nothing has been built yet. Do not assume any prior structure exists. Read this entire brief before taking any action, writing any code, or asking questions.


Working Methodology
Before any development begins, follow this process in order. Do not skip steps or reorder them.

Step one � Design alignment. Before writing any code or creating any files, ask Jethro a series of questions to confirm full understanding of the brief and surface any ambiguity. Ask one question at a time and wait for an answer before asking the next. Cover visual direction, section behaviour, component naming, and any unclear requirements. This step is strictly planning � no coding, no file creation, no folder structure until alignment is confirmed by Jethro.

Step two � Ubiquitous language file. Create a markdown file that defines the shared terminology used across the entire project. This follows Domain-Driven Design practice. The file lists every component name, section name, data structure, and domain-specific term with a clear definition. Once written, all code, comments, variable names, and communication must use this language consistently. No synonyms, no drift, no renaming mid-build.

Step three � Product Requirements Document. Write a PRD that outlines the purpose, features, functionality, and behaviour of the site in full before any implementation begins. The PRD covers every section, every interaction, every component, and every edge case. It is the contract between planning and building. Nothing gets built that is not in the PRD.

Step four � Break the PRD into tasks. Decompose the PRD into granular, actionable development tasks. Each task must be small enough to be built and tested independently. Work through tasks in sequence and do not start the next task until the current one is complete and verified.

Step five � Build using Test-Driven Development. Write tests before writing implementation code. This prevents outrunning headlights � moving faster in development than the feedback loops can keep up with. Outrunning headlights means the code grows faster than confidence in it, which creates compounding bugs that are expensive to fix. Each feature is verified before the next one starts.

Throughout the build, prioritise deep modules with simple interfaces over shallow modules. A deep module does significant work behind a clean minimal surface. A shallow module does little but exposes a lot � this adds complexity without value. Every component and function should be designed so its interface is simpler than its implementation.

Design all interfaces to be clean enough that implementation can be delegated without ambiguity. If an interface requires explanation to use, simplify it first.


Overview
This is the planning brief for Jethro's developer portfolio website. The preferred display name throughout the site is Jethro only � no surname, no full first name. The site targets recruiters hiring for junior developer, SOC analyst, IT support, and QA roles, as well as other developers reviewing the work. It has two equal jobs: convert a recruiter into someone curious enough to reach out, and demonstrate technical capability through shipped projects. The feeling for any visitor should be: "this person is capable and worth a second look."

The tone is problem-led and honest throughout. No clich�s, no padding, no faking seniority. The projects carry the weight. A correct example of the tone is: "I like building things that fix real problems." An incorrect example is: "I am a passionate developer who loves creating innovative solutions." Every word on the site is held to this standard.


Visual Direction
The background is a warm dark charcoal � approximately #111010 or similar. It must have a very slight warm undertone, not cold blue-grey and not navy-tinted. Over this background sits a subtle fine grid pattern overlay. The grid lines are very low contrast against the background � they should feel like graph paper printed in near-invisible ink, purely atmospheric depth, not a dominant visual element.

The accent colour is a muted deep emerald green. Tailwind's emerald-400 range is the starting reference. In dark mode the accent appears as a lighter emerald against the dark background. In light mode it shifts to a deeper forest green to remain readable against a light background. This accent is used on links, hover states, Tech Tags, active nav items, and interactive elements. It must not be neon and must not look like a terminal hacker aesthetic.

The site supports both light mode and dark mode with a toggle. Dark mode is the default. A flash prevention inline script must be included in layout.tsx so the page does not flicker from dark to light on first load.

Typography uses DM Sans for all headings and display text, and Inter for body text. All display headings are set in lowercase � for example "jethro." and "projects." and "skills." This makes the site feel warm and personal without being casual. No ultra-thin light fonts anywhere. No all-caps aggressive display headings anywhere.

Motion is minimal. Subtle scroll-triggered fade-ins on sections are acceptable. No heavy transitions between sections, no cursor followers, no decorative floating elements, and no animation that exists to show off. This is a developer portfolio not a design portfolio.

There are no giant outlined section title letters used as background decoration behind content. There is no photo of Jethro anywhere on the site. There is no publicly downloadable resume. There is no location displayed anywhere on the site.


Site Structure and Section Order
The site is a single scrolling page with anchor navigation. The section order when scrolling is: Hero Section, Experience Section, Projects Section, Skills Section, Footer. There is no About section � the hero handles that. There is no Contact section � contact links live in the footer only.

On desktop the Nav Bar is a clean horizontal bar at the top of the page with anchor links to each section. It stays visible as the user scrolls.

On mobile there is no hamburger menu and no top nav bar. Instead there is a Bottom Nav � a sticky bar fixed to the bottom of the screen at all times, containing the same anchor links as the desktop Nav Bar. This is app-like, always visible, and requires no tap-to-open interaction.

There is no separate projects page in version one. All projects appear on the main scrolling page. A dedicated projects page becomes relevant when the project count reaches eight or more and is noted as a future implementation.


Hero Section
The Hero Section is full-width and centered. There is no photo and no illustrated monogram. The display name is "jethro." in lowercase bold DM Sans � large, the dominant element on the page.

Below the name sits a single bold statement in the same lowercase style:

"I build things that just work."

Below the statement are three icon-only link buttons: LinkedIn, GitHub, and Email. These are the only three. No resume link, no Instagram, no other platforms.

The hero has generous whitespace. Nothing competes with the name and statement. The dark grid background is visible behind it.


Experience Section
The Experience Section uses a tab toggle with two tabs side by side. The first tab is labelled Experience and the second is labelled Education and Certifications. Tapping or clicking a tab shows its content below. Only one tab is visible at a time.

The Experience Tab contains three Experience Entries displayed as a clean vertical list. Each Experience Entry shows the organisation name in bold, the role title, the dates, and two to three bullet points describing what was done. The entries are listed in reverse chronological order � most recent first.

Experience Entry one: Bedford Borough Council � IT Service Desk Work Experience, April 2026. Used Hornbill ITSM to log, triage and track incidents and service requests. Carried out Active Directory tasks including user account creation, password resets, OU navigation and access group membership changes. Used VNC and RDP for remote access and troubleshooting. Followed IT security protocols and data handling procedures in a regulated local government environment.

Experience Entry two: Bedford Hospital NHS Trust � Administrative Work Experience, March 2026. Managed patient records and appointment documentation across clinical systems including ICE, Medilogik and IPM. Maintained files via a secure portal with full accuracy and confidentiality. Produced process flowcharts in SmartDraw for SOP documentation. Supported senior staff with scheduling and correspondence.

Experience Entry three: Verto � Full Stack CMS, Contract, October 2025. Built a full stack content management system for a client. Read the GitHub repository najeca/Verto_CMS_Project for the specific description of what was built.

The Education and Certifications Tab contains two Education Entries. BSc Software Engineering, Nottingham Trent University, 2024. CompTIA Security+ SY0-701. The certification appears once here and nowhere else on the site.


Projects Section
All projects are displayed on the main scrolling page as Project Cards in a two-column grid layout. Project Cards stack downward in pairs. Each Project Card is the same height and follows the same structure.

Each Project Card contains: a screenshot or placeholder thumbnail at the top, the project name in bold lowercase, a one-sentence description of what problem the project solves, Tech Tags as small pill labels listing the technologies used, and one Project Card Action button.

The project name and description are always immediately visible. No hover or click interaction is required to discover what a project is.

The Project Card Action is either an App Store Button or a GitHub Button depending on the project. There are no Live Buttons on any current project.

Project Card details are as follows.

Landis: a CV and cover letter generator that uses AI to tailor job applications from a master profile. Project Card Action is an App Store Button linking to https://apps.apple.com/gb/app/landis/id6765484923. No GitHub Button � the repo is private.

Belific: read the GitHub repository najeca/belific for the one-sentence description. Project Card Action is a GitHub Button linking to najeca/belific. No live URL � the deployed version contains personal data.

Cadix: a habit and routine tracking app for iOS that helps users build and maintain daily habits. Project Card Action is an App Store Button linking to https://apps.apple.com/gb/app/cadix/id6764518983. No GitHub Button � it is an Xcode project not on GitHub.

Verto CMS: read the GitHub repository najeca/Verto_CMS_Project for the one-sentence description. Project Card Action is a GitHub Button linking to najeca/Verto_CMS_Project.

Security Log Analysis Tool: read the GitHub repository najeca/security_log_analysis_tool for the one-sentence description. Project Card Action is a GitHub Button linking to najeca/security_log_analysis_tool.

Screenshots are placeholders throughout the build. Real assets will be supplied later.


Skills Section
The Skills Section sits directly above the Footer with no separating section between them. They flow together as a visual unit at the bottom of the page. This pairing is a fixed design requirement and must not be changed.

The Skills Section uses a two-by-two grid of four Skill Group Cards. The page background and grid pattern continue behind the Skills Section. Each Skill Group Card has a card background that is slightly lighter than the page background � enough to read as a distinct card without high contrast. Each Skill Group Card contains a category title in bold, one plain-English sentence describing what Jethro does in that area, and Tech Icons with text labels arranged in a row below the sentence. Tech Icons must always show both the icon and the text label � icons without labels are not permitted.

The four Skill Group Cards are as follows.

Frontend: React, Next.js, Tailwind CSS, HTML, CSS.

Backend: Node.js, Python, SQL, REST APIs.

Security and Tooling: CompTIA Security+, TryHackMe, Git, GitHub, VS Code.

Workflow and Process: TDD, Agile, Claude Code.

A flat icon grid with no grouping or context is not used under any circumstances.


Footer
The Footer sits directly below the Skills Section. It is minimal. It contains a copyright line on the left � copyright 2026 Jethro � and three social icon links on the right: LinkedIn, GitHub, and Email. These are the only contact touchpoints on the entire site. No additional links, no additional text.


What Is Explicitly Not Being Built
The following were considered and rejected. They should not be added without revisiting this brief.

No photo of Jethro. No full surname displayed. No location displayed. No downloadable resume. No About section. No Contact section or contact form. No hamburger menu on mobile � use Bottom Nav instead. No Live Buttons on any Project Card � use App Store Button or GitHub Button only. No in-progress projects listed � only the five confirmed completed projects. No testimonials. No blog. No chatbot. No heavy scroll animations. No cursor followers or decorative characters. No flat icon grid for skills without grouping or context. No giant outlined section title letters as background decoration. No hover-only project information. No Instagram link. No vertical sidebar navigation. No separate projects page in version one. CompTIA Security+ appears once only in the Education and Certifications tab.


Future Implementations
These are deliberate deferrals with clear triggers for when they become appropriate.

A dedicated projects page at the route /projects should be added when the project count reaches eight or more. At that point a technology filter above the project grid becomes useful � pill-shaped filter tags that show and hide Project Cards by stack.

A testimonials section should be added once two or three genuine LinkedIn recommendations exist. It should be a carousel of quotes with the recommender name, photo, and role, positioned above the Footer.

A blog or writing section should only be added with a minimum of four to five real posts ready to publish. It should not be added as a placeholder.

The Experience Section grows as Jethro's career develops. New Experience Entries are added to the Experience Tab as roles are completed or started.

A pixel art or illustrated personal mark using the initials NJ can be explored in later versions as an alternative to the text-only hero.


Open Questions to Resolve During Build
The Verto CMS and Belific one-sentence descriptions should be read from their GitHub repositories under the najeca account.

The emerald green shade needs a final decision once a first prototype is visible. Tailwind emerald-400 is the current direction.

The four Skill Group Card descriptor sentences � one per group � need to be written during the build to match the tone rule. They must be plain English and problem-led, not generic.



End of brief. Last updated June 2026.


