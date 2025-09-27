"use client";

import { useEffect } from "react";
import { Project } from "./types";

export function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-border bg-card text-card-foreground shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-5 border-b border-border">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-xs text-muted-foreground">
              {project.role ?? ""} {project.period ? `• ${project.period}` : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-sm text-muted-foreground">{project.summary}</p>

          {project.highlights?.length ? (
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : null}

          {project.stack?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {project.links?.length ? (
          <div className="flex flex-wrap gap-2 p-5 border-t border-border">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center rounded-md border border-border bg-background px-3 text-sm hover:bg-secondary hover:text-secondary-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
