import { GraduationCap, Award } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="section-container py-28 md:py-36">
      <SectionHeading eyebrow="Education" title="Academic foundation" />

      <Reveal>
        <Card className="p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-accent-soft">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
                <p className="mt-1 text-sm text-accent-soft">{education.specialization}</p>
                <p className="mt-2 text-sm text-muted">
                  {education.institution} · {education.location}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 gap-8 md:text-right">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Period
                </p>
                <p className="mt-1 text-sm text-foreground">{education.period}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  CGPA
                </p>
                <p className="mt-1 text-sm text-foreground">{education.cgpa}</p>
              </div>
            </div>
          </div>

          <div className="mt-9 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <Award size={13} /> Academic achievements
              </p>
              <ul className="space-y-2">
                {education.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
