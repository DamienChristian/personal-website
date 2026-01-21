type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <p className="heading-accent text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="max-w-2xl text-base text-muted">{description}</p>
      ) : null}
    </div>
  );
}
