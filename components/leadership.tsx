import { Users } from "lucide-react";
import { leadership } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function Leadership() {
  return (
    <section id="leadership" className="section-container py-28 md:py-36">
      <SectionHeading eyebrow="Leadership" title="Community & leadership" />

      <div className="grid gap-5 md:grid-cols-3">
        {leadership.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05}>
            <Card className="h-full p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-accent-soft">
                <Users size={16} />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-foreground">{item.org}</h3>
              <p className="mt-1 text-sm text-accent-soft">{item.role}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{item.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
