import { Star, GitFork, Github, ArrowUpRight } from "lucide-react";
import { githubConfig } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const languageDot: Record<string, string> = {
  Python: "#3B82F6",
  TypeScript: "#60A5FA",
  "Jupyter Notebook": "#F59E0B",
};

export function GithubSection() {
  return (
    <section id="github" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="Open Source"
        title="GitHub"
        description="Pinned repositories, refreshed automatically from the live profile once connected to the GitHub API."
      />

      <Reveal>
        <div className="mb-6 flex justify-end">
          <Button variant="outline" size="sm" asChild>
            <a href={`https://github.com/${githubConfig.username}`} target="_blank" rel="noreferrer">
              <Github size={14} className="mr-2" /> View full profile
              <ArrowUpRight size={13} className="ml-1.5" />
            </a>
          </Button>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {githubConfig.pinnedRepos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.04}>
            <a
              href={`https://github.com/${githubConfig.username}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className="block h-full"
            >
              <Card className="h-full p-6 hover:bg-card-hover">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Github size={14} className="text-muted-foreground" />
                  <span className="font-medium">{repo.name}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{repo.description}</p>
                <div className="mt-5 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: languageDot[repo.language] ?? "#64748B" }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks}
                  </span>
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
