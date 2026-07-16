"use client";

import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, GraduationCap, Database, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const links = [
  { id: "email", label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { id: "github", label: "GitHub", value: "@Mehtab23455", href: profile.social.github, icon: Github },
  { id: "linkedin", label: "LinkedIn", value: "/in/mehtab-singh-sidhu", href: profile.social.linkedin, icon: Linkedin },

  {
    id: "zenodo",
    label: "Zenodo",
    value: "View records",
    href: "https://zenodo.org/me/uploads?q=&f=shared_with_me%3Afalse&l=list&p=1&s=10&sort=newest",
    icon: Database
  },
  {
    id: "scholar",
    label: "Google Scholar",
    value: "View profile",
    href: profile.social.scholar,
    icon: GraduationCap,
  },
];
type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this up to a form endpoint (Formspree, Resend, a serverless
    // route) before deploying -- this is a placeholder submit handler.
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="section-container py-28 md:py-36">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk research"
        description="Open to conversations about graduate programs, collaborations, or research opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
        <Reveal className="space-y-3">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="block">
              <Card className="flex items-center gap-4 p-5 hover:bg-card-hover">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03] text-accent-soft">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              </Card>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="p-7 md:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border-strong bg-white/[0.02] px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                    placeholder="Mehtab Singh Sidhu"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border-strong bg-white/[0.02] px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                    placeholder="mehtabsinghsidhu01@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border-strong bg-white/[0.02] px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <Button type="submit" disabled={status !== "idle"} className="w-full sm:w-auto">
                {status === "idle" && (
                  <>
                    Send message <Send size={14} className="ml-2" />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message sent"}
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
