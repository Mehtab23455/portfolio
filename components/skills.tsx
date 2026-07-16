import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const groups: { title: string; items: string[] }[] = [
  { title: "Research", items: skills.research },
  { title: "Technical", items: skills.technical },
  { title: "Leadership", items: skills.leadership },
];

export function Skills() {
  return (
    <section id="skills" className="section-container py-28 md:py-36">
      <SectionHeading eyebrow="Skills" title="Capabilities" />

      <div className="grid gap-10 md:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent-soft">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
