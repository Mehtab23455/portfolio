import { about } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="About"
        title="From curiosity to applied research"
        description="A brief account of how I got here, and where this is headed."
      />

      <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr]">
        <Reveal delay={0.05} className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.8] text-muted">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative border-l border-border pl-8">
            {about.timeline.map((item, i) => (
              <li key={item.year} className={i !== about.timeline.length - 1 ? "pb-10" : ""}>
                <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-soft">
                  {item.year}
                </span>
                <h3 className="mt-1.5 text-[15px] font-medium text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
