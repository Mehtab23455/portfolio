import { researchInterests } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function Research() {
  return (
    <section id="research" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="Research"
        title="Research interests"
        description="Where my current work concentrates, weighted by depth of engagement rather than volume of output."
      />

      <Reveal>
        <Card className="p-8 md:p-10">
          <div className="space-y-6">
            {researchInterests.map((interest) => (
              <div key={interest.label}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-sm text-foreground">{interest.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {interest.weight}
                  </span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                    style={{ width: `${interest.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
