import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function TechStack() {
  return (
    <section id="tech-stack" className="section-container py-28 md:py-36">
      <SectionHeading eyebrow="Stack" title="Tools & technologies" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04}>
            <Card className="h-full p-6">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent-soft">
                {group.category}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
