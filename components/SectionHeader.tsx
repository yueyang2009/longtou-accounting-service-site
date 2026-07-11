import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  hero?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "left", hero = false }: SectionHeaderProps) {
  const h2Class = hero
    ? "text-4xl font-semibold leading-tight text-brand-ink md:text-6xl"
    : "text-3xl font-semibold leading-tight text-brand-ink md:text-4xl";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold text-brand-gold">{eyebrow}</p> : null}
      <h2 className={h2Class}>{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-brand-muted">{description}</p> : null}
    </div>
  );
}
