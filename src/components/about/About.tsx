"use client";

import Image from "next/image";
import { SectionBg } from "../sectionBG"; // ensure casing matches the file

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card/90 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/70">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-secondary-foreground text-base">
          {icon}
        </span>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 ">
      {/* One background only: handles light + dark */}
      {/* <SectionBg variant="b" /> */}

      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <Image
                src="/local/office_3.png"
                alt="Workspace with code editor on screen"
                width={1280}
                height={720}
                className="h-full w-full object-cover aspect-[16/10]"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <p className="text-muted-foreground max-w-prose">
              I build scalable, user-friendly web applications that solve real problems. My work spans
              SaaS, fintech, and enterprise platforms—focused on clean interfaces, performance, and
              accessible design systems that scale.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={<span className="text-yellow-400">⚡</span>} title="Performance Focused">
                Profile, trim re-renders, budget payloads, and cache smartly. Performance is a product
                feature, tracked against Core Web Vitals.
              </FeatureCard>

              <FeatureCard icon={<span className="text-amber-300">🤝</span>} title="Team Collaboration">
                Partner with design and backend, write small RFCs, review PRs carefully, and leave
                docs/Storybook examples that make reuse effortless.
              </FeatureCard>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Design systems", "A11y"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
