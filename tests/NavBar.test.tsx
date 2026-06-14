import { render, screen } from "@testing-library/react";
import { NavBar } from "@/components/nav/NavBar";
import { BottomNav } from "@/components/nav/BottomNav";

const NAV_LINKS = [
  { label: "home", href: "#hero" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
];

describe("NavBar", () => {
  it("renders four Nav Links with correct href values", () => {
    render(<NavBar />);
    const links = screen.getAllByRole("link");
    const navLinks = links.filter((l) => l.getAttribute("href")?.startsWith("#"));
    expect(navLinks).toHaveLength(4);
    NAV_LINKS.forEach(({ label, href }) => {
      expect(screen.getByRole("link", { name: new RegExp(label, "i") })).toHaveAttribute("href", href);
    });
  });

  it("contains a theme toggle button", () => {
    render(<NavBar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("BottomNav", () => {
  it("renders four Nav Links with correct href values", () => {
    render(<BottomNav />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    NAV_LINKS.forEach(({ label, href }) => {
      expect(screen.getByRole("link", { name: new RegExp(label, "i") })).toHaveAttribute("href", href);
    });
  });
});
