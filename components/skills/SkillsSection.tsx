import { skillGroups } from "@/lib/data";
import { SkillGroupCard } from "./SkillGroupCard";

export function SkillsSection() {
  return (
    <section id="skills" className="pt-24 pb-0 px-6 max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary lowercase mb-12">
        skills.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}
