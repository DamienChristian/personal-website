import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "neutral";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  const toneStyles =
    tone === "accent"
      ? "border-accent bg-accent-soft text-accent"
      : "border-subtle bg-surface text-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${toneStyles}`}
    >
      {children}
    </span>
  );
}
