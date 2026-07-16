import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Research } from "@/components/research";
import { Publications } from "@/components/publications";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { TechStack } from "@/components/tech-stack";
import { Leadership } from "@/components/leadership";
import { Certifications } from "@/components/certifications";
import { Skills } from "@/components/skills";
import { GithubSection } from "@/components/github-section";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="divide-y divide-border">
          <About />
          <Education />
          <Research />
          <Publications />
          <Projects />
          <Experience />
          <TechStack />
          <Leadership />
          <Certifications />
          <Skills />
          <GithubSection />
          <Blog />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
