import { Github, Linkedin, GraduationCap, Mail } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-sm text-foreground">{profile.name}</p>
            <p className="mt-1.5 max-w-xs text-sm text-muted">
              Applied AI, Data Analytics & Decision Intelligence.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Mail size={17} />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.social.scholar}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              className="text-muted hover:text-foreground transition-colors"
            >
              <GraduationCap size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
