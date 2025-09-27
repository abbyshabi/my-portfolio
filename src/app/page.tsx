import { About } from "@/components/about/About";
import { ThemeToggle } from "../components/theme/themeToggle";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { SectionDivider } from "@/components/ui/section-divider";
import { Skills } from "@/components/skills/skills";
import Experience from "@/components/experience/experience";
import { ContactSection } from "@/components/contact/contact";


function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="container mx-auto space-y-10">
      {/* Hero */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ContactSection />
    </main>
  );
}
