import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExperienceSection } from "@/components/experience/ExperienceSection";

describe("ExperienceSection", () => {
  it("shows Experience Tab content by default", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Bedford Borough Council")).toBeVisible();
  });

  it("clicking the Education Tab shows Education Entries and hides Experience Entries", async () => {
    render(<ExperienceSection />);
    await userEvent.click(screen.getByRole("button", { name: /education/i }));
    expect(screen.getByText("Nottingham Trent University")).toBeVisible();
    expect(screen.getByText(/CompTIA Security\+/i)).toBeVisible();
    expect(screen.queryByText("Bedford Borough Council")).not.toBeVisible();
  });

  it("clicking the Experience Tab restores Experience Entries", async () => {
    render(<ExperienceSection />);
    await userEvent.click(screen.getByRole("button", { name: /education/i }));
    await userEvent.click(screen.getByRole("button", { name: /^experience$/i }));
    expect(screen.getByText("Bedford Borough Council")).toBeVisible();
    expect(screen.queryByText("Nottingham Trent University")).not.toBeVisible();
  });
});
