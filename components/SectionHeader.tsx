type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold text-brand-gold">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-brand-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-brand-muted">{description}</p> : null}
    </div>
  );
}

