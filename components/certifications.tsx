import { ShieldCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function Certifications() {
  return (
    <section id="certifications" className="section-container py-28 md:py-36">
      <SectionHeading eyebrow="Certifications" title="Certifications" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.05}>
            <a href={cert.url} target="_blank" rel="noreferrer" className="block h-full">
              <Card className="h-full p-6 hover:bg-card-hover">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-accent-soft">
                    <ShieldCheck size={16} />
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-sm font-medium leading-snug text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-1.5 text-xs text-muted">
                  {cert.issuer} · {cert.year}
                </p>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
