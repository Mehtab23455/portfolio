"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, FileText, ChevronDown, Layers } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Set all to false by default for a compact, scannable layout
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1.1fr,1.4fr]">
        {/* Left Side: Optimized Image Preview Frame */}
        <div className="relative flex aspect-[16/11] items-center justify-center border-b border-border bg-gradient-to-br from-white/[0.03] to-transparent lg:aspect-auto lg:border-b-0 lg:border-r overflow-hidden">
          {project.imageUrl ? (
            <div className="relative h-full w-full min-h-[220px] lg:min-h-full">
              <Image
                src={project.imageUrl}
                alt={`${project.name} interface preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                priority={index === 0}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-muted-foreground p-6">
              <Layers size={28} strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-center">
                Screenshot placeholder
              </span>
            </div>
          )}
          {project.featured && (
            <span className="absolute left-4 top-4 z-10">
              <Badge variant="accent">Featured</Badge>
            </span>
          )}
        </div>

        {/* Right Side: Information Data Block */}
        <div className="p-7 md:p-8 flex flex-col">
          <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
          <p className="mt-1.5 text-sm text-accent-soft">{project.tagline}</p>

          {/* Key Metrics */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-border bg-white/[0.02] p-3">
                <p className="font-mono text-base font-medium text-foreground">{m.value}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>

          {/* Action Buttons (Moved up so they are always visible) */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.demoUrl && (
              <Button size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live Demo <ArrowUpRight size={13} className="ml-1.5" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={13} className="mr-1.5" /> GitHub
                </a>
              </Button>
            )}
            {project.caseStudyUrl && (
              <Button size="sm" variant="ghost" asChild>
                <a href={project.caseStudyUrl}>
                  <FileText size={13} className="mr-1.5" /> Case Study
                </a>
              </Button>
            )}
          </div>

          {/* Expandable Details Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-6 flex w-full items-center justify-between border-t border-border pt-5 text-left text-sm text-muted hover:text-foreground transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-[0.15em]">
              {open ? "Hide project details" : "Read full description"}
            </span>
            <ChevronDown
              size={16}
              className={cn("transition-transform duration-300", open && "rotate-180")}
            />
          </button>

          {/* Expanded Content */}
          {open && (
            <div className="mt-5 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  The Problem
                </h4>
                <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Architecture
                </h4>
                <p className="text-sm leading-relaxed text-muted">{project.architecture}</p>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Six systems spanning applied ML products, financial modeling, and enterprise analytics."
      />

      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
