import type { SkillGroup, SkillIcon } from "@/lib/data";

interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const { category, descriptor, iconStyle, icons } = group;

  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
      <h3 className="font-display font-bold text-text-primary text-lg">{category}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{descriptor}</p>

      {iconStyle === "logo" ? (
        <LogoIconRow icons={icons} />
      ) : (
        <PillRow icons={icons} />
      )}
    </div>
  );
}

function LogoIconRow({ icons }: { icons: SkillIcon[] }) {
  return (
    <div className="flex flex-wrap gap-4 pt-1">
      {icons.map(({ label, icon: Icon, customIcon: CustomIcon, color }) => {
        if (CustomIcon) {
          return (
            <div key={label} className="flex flex-col items-center gap-1.5 w-12">
              <CustomIcon size={28} aria-hidden={true} />
              <span className="text-xs text-text-secondary text-center leading-tight">
                {label}
              </span>
            </div>
          );
        }
        if (Icon) {
          return (
            <div key={label} className="flex flex-col items-center gap-1.5 w-12">
              <Icon
                size={28}
                style={{ color: color ?? "currentColor" }}
                aria-hidden="true"
              />
              <span className="text-xs text-text-secondary text-center leading-tight">
                {label}
              </span>
            </div>
          );
        }
        return (
          <span
            key={label}
            className="px-2.5 py-1 rounded-full text-xs font-medium border border-border text-text-secondary"
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

function PillRow({ icons }: { icons: SkillIcon[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {icons.map(({ label }) => (
        <span
          key={label}
          className="px-3 py-1 rounded-full text-xs font-medium border border-border text-text-secondary"
        >
          {label}
        </span>
      ))}
    </div>
  );
}
