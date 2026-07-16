import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-14", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-accent/60" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-display-md font-semibold text-foreground">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[15px] leading-relaxed text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
