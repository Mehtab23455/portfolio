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
            {/* Added 'group' class here for hover effects on children */}
            <a href={cert.url} target="_blank" rel="noreferrer" className="block h-full group">
              <Card className="h-full p-5 hover:bg-card-hover flex flex-col">
                
                {/* Header: Icon & External Link Indicator */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-accent-soft">
                    <ShieldCheck size={16} />
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>

                {/* Certificate Image Display */}
                {cert.imageUrl && (
                  <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg border border-border-strong bg-muted/20">
                    <img 
                      src={cert.imageUrl} 
                      alt={`${cert.name} Certificate`} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="mt-auto">
                  <h3 className="text-sm font-medium leading-snug text-foreground group-hover:text-accent-soft transition-colors">
                    {cert.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>

              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
