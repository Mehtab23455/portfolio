"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, GraduationCap } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

// A quiet node-graph motif standing in for a citation / knowledge graph --
// the one visual signature of the page. Nodes and edges are fixed and
// hand-placed (not random), so it reads as designed rather than decorative
// noise. Motion is a slow opacity pulse only.
const NODES = [
  { id: 0, x: 90, y: 70 },
  { id: 1, x: 230, y: 40 },
  { id: 2, x: 340, y: 130 },
  { id: 3, x: 150, y: 190 },
  { id: 4, x: 420, y: 60 },
  { id: 5, x: 470, y: 200 },
  { id: 6, x: 300, y: 240 },
  { id: 7, x: 60, y: 230 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [1, 4],
  [4, 5],
  [5, 2],
  [3, 6],
  [6, 5],
  [3, 7],
];

function ResearchGraph() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 520 300"
      aria-hidden="true"
      className="absolute right-0 top-1/2 hidden w-[520px] -translate-y-1/2 opacity-[0.55] lg:block xl:w-[600px]"
    >
      {EDGES.map(([a, b], i) => {
        const from = NODES[a];
        const to = NODES[b];
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#2563EB"
            strokeWidth="1"
            strokeOpacity="0.25"
            className={reduceMotion ? undefined : "animate-pulse-slow"}
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        );
      })}
      {NODES.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.id % 3 === 0 ? 4 : 2.5}
          fill={n.id % 3 === 0 ? "#3B82F6" : "#64748B"}
          className={reduceMotion ? undefined : "animate-pulse-slow"}
          style={{ animationDelay: `${n.id * 0.5}s` }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-grid-fade pt-16"
    >
      <ResearchGraph />

      <div className="section-container relative z-10">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-4">
            {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-strong bg-card font-mono text-lg font-medium text-muted">
              {profile.initials}
            </div> */}
            <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
              <GraduationCap size={22} />
              Graduate Applicant, Fall 2027
            </div>
          </div>

          <h1 className="text-display-lg font-semibold text-balance text-foreground">
            {profile.name}
          </h1>

          <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5 font-mono text-sm text-muted">
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2">
                {role}
                {i < profile.roles.length - 1 && <span className="text-border-strong">/</span>}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href={profile.resumeUrl} download>
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#research">View Research</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">Projects</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={profile.social.zenodo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              Publications <ArrowUpRight size={13} />
            </a>
            <span className="h-4 w-px bg-border-strong" />
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted hover:text-foreground transition-colors md:block"
      >
        <ArrowDown size={18} className={reduceMotion ? undefined : "animate-bounce"} />
      </a>
    </section>
  );
}
