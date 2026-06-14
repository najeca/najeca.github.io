import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/nav/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("switches from dark to light and persists to localStorage", async () => {
    document.documentElement.setAttribute("data-theme", "dark");
    render(<ThemeToggle />);

    await userEvent.click(screen.getByRole("button"));

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
  });

  it("switches from light to dark and persists to localStorage", async () => {
    document.documentElement.setAttribute("data-theme", "light");
    render(<ThemeToggle />);

    await userEvent.click(screen.getByRole("button"));

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });
});
