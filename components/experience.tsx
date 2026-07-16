import { Building2 } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="section-container py-28 md:py-36">
      <SectionHeading eyebrow="Experience" title="Professional experience" />

      <div className="space-y-6">
        {experience.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 0.06}>
            <Card className="p-7 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-accent-soft">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{entry.org}</h3>
                    <p className="mt-0.5 text-sm text-accent-soft">{entry.role}</p>
                  </div>
                </div>
                <div className="font-mono text-xs text-muted-foreground md:text-right">
                  <p>{entry.period}</p>
                  <p className="mt-0.5">{entry.location}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
                <div>
                  <p className="mb-2.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {entry.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Impact
                  </p>
                  <ul className="space-y-2">
                    {entry.impact.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                {entry.technologies.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
