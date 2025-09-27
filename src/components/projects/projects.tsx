"use client";

import { useState } from "react";
import { Project } from "./types";
import { ProjectCard } from "./projectCard";
import { ProjectModal } from "./projectModal";

const SAMPLE: Project[] = [
    {
        id: "probound",
        title: "ProBound — Agentic CX Platform",
        role: "Senior Frontend Engineer",
        period: "2025",
        stack: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand"],
        summary:
            "Built knowledge-base groups, agent hiring flows, and Figma-to-code tooling. Focus on performance and accessible UI.",
        highlights: [
            "Designed reusable components and patterns across app surfaces",
            "Integrated file uploads and knowledge grouping with search",
            "Reduced UI latency by ~30% via API + render optimizations",
        ],
        cover: "/local/projects/probound.jpg",
        links: [{ label: "View details", href: "#" }],
    },
    {
        id: "indicina",
        title: "Indicina — Fintech Dashboards",
        role: "Frontend & Fullstack Developer",
        period: "2019–2023",
        stack: ["React", "TypeScript", "Storybook", "AWS S3/Lambda"],
        summary:
            "Migrated to TS, built design system & dashboards; improved load time and maintainability across white-label portals.",
        cover: "/local/projects/indicina.jpg",
    },
    {
        id: "asac",
        title: "All Saints 20th Anniversary",
        role: "Volunteer Frontend",
        period: "2024–2025",
        stack: ["React", "Tailwind", "A11y", "Apps Script"],
        summary:
            "Responsive microsite with RSVP to Google Sheets, photobook carousel, and AODA-conscious UI.",
        cover: "/local/projects/asac.jpg",
    },
];

export function Projects() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Project | null>(null);

    const onOpen = (p: Project) => {
        setActive(p);
        setOpen(true);
    };

    return (
        <section id="projects" className="relative py-16 md:py-24">
            {/* full-bleed gradient behind the section */}
            <div className="section-band" />

            <div className="container relative z-10">
                <header className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
                    <p className="mt-2 text-muted-foreground">
                        A few projects that show my focus on usability, speed, and scale.
                    </p>
                </header>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SAMPLE.map((p) => (
                        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
                    ))}
                </div>
            </div>
 
            <ProjectModal open={open} onClose={() => setOpen(false)} project={active} />
        </section >
    );
}
