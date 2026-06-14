import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/data";

const appStoreProject: Project = {
  name: "Test App",
  description: "A test application.",
  tags: ["Swift", "iOS"],
  action: { type: "appstore", url: "https://apps.apple.com/gb/app/test/id123" },
};

const githubProject: Project = {
  name: "Test Tool",
  description: "A test tool.",
  tags: ["Python", "CLI"],
  action: { type: "github", url: "https://github.com/najeca/test-tool" },
};

describe("ProjectCard", () => {
  it("renders the project name, description, and Tech Tags", () => {
    render(<ProjectCard project={appStoreProject} />);
    expect(screen.getByRole("heading", { name: "Test App" })).toBeInTheDocument();
    expect(screen.getByText("A test application.")).toBeInTheDocument();
    expect(screen.getByText("Swift")).toBeInTheDocument();
    expect(screen.getByText("iOS")).toBeInTheDocument();
  });

  it("renders an App Store Button when action type is appstore", () => {
    render(<ProjectCard project={appStoreProject} />);
    const button = screen.getByRole("link", { name: /app store/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", appStoreProject.action.url);
  });

  it("renders a GitHub Button when action type is github", () => {
    render(<ProjectCard project={githubProject} />);
    const button = screen.getByRole("link", { name: /github/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", githubProject.action.url);
  });

  it("renders a Screenshot Placeholder when no screenshot is provided", () => {
    render(<ProjectCard project={appStoreProject} />);
    expect(screen.getByTestId("screenshot-placeholder")).toBeInTheDocument();
  });

  it("does not render a Screenshot Placeholder when a screenshot is provided", () => {
    const withScreenshot = { ...appStoreProject, screenshot: "/screenshots/test.png" };
    render(<ProjectCard project={withScreenshot} />);
    expect(screen.queryByTestId("screenshot-placeholder")).not.toBeInTheDocument();
  });
});
