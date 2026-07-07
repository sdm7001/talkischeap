import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("max-w-3xl mb-14", align === "center" ? "mx-auto text-center" : "")}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
      )}
      <Tag className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">{title}</Tag>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </ScrollReveal>
  );
}
