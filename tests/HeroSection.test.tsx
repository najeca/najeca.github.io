import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/hero/HeroSection";

describe("HeroSection", () => {
  it("renders the display name", () => {
    render(<HeroSection />);
    expect(screen.getByText("jethro.")).toBeInTheDocument();
  });

  it("renders the Tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText("I build things that just work.")).toBeInTheDocument();
  });

  it("renders three Social Links with accessible labels", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email/i })).toBeInTheDocument();
  });

  it("GitHub Social Link points to najeca", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/najeca"
    );
  });

  it("Email Social Link uses mailto protocol", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:")
    );
  });
});
