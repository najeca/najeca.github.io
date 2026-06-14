import { render, screen } from "@testing-library/react";
import { SkillGroupCard } from "@/components/skills/SkillGroupCard";
import type { SkillGroup } from "@/lib/data";
import { SiReact } from "react-icons/si";

const logoGroup: SkillGroup = {
  category: "Frontend",
  descriptor: "I build interfaces that work cleanly on any device.",
  iconStyle: "logo",
  icons: [
    { label: "React", icon: SiReact, color: "#61DAFB" },
    { label: "SQL" },
  ],
};

const pillGroup: SkillGroup = {
  category: "Security and Testing",
  descriptor: "I understand how systems can fail and write tests to make sure they don't.",
  iconStyle: "pill",
  icons: [{ label: "TDD" }, { label: "Vitest" }],
};

describe("SkillGroupCard", () => {
  it("renders the category title", () => {
    render(<SkillGroupCard group={logoGroup} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("renders the descriptor sentence", () => {
    render(<SkillGroupCard group={logoGroup} />);
    expect(
      screen.getByText("I build interfaces that work cleanly on any device.")
    ).toBeInTheDocument();
  });

  it("renders all Tech Icon labels for a logo-style card", () => {
    render(<SkillGroupCard group={logoGroup} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("SQL")).toBeInTheDocument();
  });

  it("renders pill badges for a pill-style card", () => {
    render(<SkillGroupCard group={pillGroup} />);
    expect(screen.getByText("TDD")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });
});
