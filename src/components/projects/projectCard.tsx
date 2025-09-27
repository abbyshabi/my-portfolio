"use client";

import Image from "next/image";
import { Project } from "./types";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group text-left"
      aria-label={`Open ${project.title}`}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="relative aspect-[16/10] w-full">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-sm text-muted-foreground">
              No cover
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {project.summary}
          </p>
          {project.stack?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-[11px]"
                >
                  {t}
                </span>
              ))}
              {project.stack.length > 4 ? (
                <span className="text-[11px] text-muted-foreground">
                  +{project.stack.length - 4}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  );
}
