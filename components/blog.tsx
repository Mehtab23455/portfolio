import { FileText } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Blog() {
  return (
    <section id="blog" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="Writing"
        title="Research notes"
        description="Long-form articles on applied ML and decision intelligence, published here as they're written."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.05}>
            <Card className="h-full p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-muted-foreground">
                <FileText size={16} />
              </div>
              <h3 className="mt-4 text-sm font-medium leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <Badge className="mt-4" variant="default">
                {post.status}
              </Badge>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
