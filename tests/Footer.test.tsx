import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer/Footer";

describe("Footer", () => {
  it("renders the copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Jethro/)).toBeInTheDocument();
  });

  it("renders three Social Links with accessible labels", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email/i })).toBeInTheDocument();
  });
});
