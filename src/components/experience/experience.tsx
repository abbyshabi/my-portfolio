"use client";

import * as React from "react";

type Item = {
  title: string;
  subtitle?: string;
  org?: string;
  period?: string;
  side: "left" | "right";
  summary: string;
  backTitle?: string;
  backBullets?: string[];
};

const items: Item[] = [
  {
    title: "Senior Frontend Engineer",
    org: "Probound.ai",
    period: "Jul 2025 — Present",
    side: "left",
    summary:
      "Leading frontend for AI agent workflows. Building scalable component libraries, optimizing UX and performance.",
    backTitle: "Key Deliverables & Tech",
    backBullets: [
      "Next.js + React (TS), shadcn/ui, Tailwind",
      "Figma Dev Mode → code tooling",
      "Perf budgets, bundle trims, RUM",
    ],
  },
  {
    title: "Software Engineer (Contract)",
    org: "Cisco",
    period: "Nov 2023 — Mar 2024",
    side: "right",
    summary:
      "Supported FE teams with faster APIs and feature toggles; improved DX and cut latency on critical paths.",
    backTitle: "Highlights",
    backBullets: [
      "Python/Go services, optimized Postgres",
      "Feature flags + dynamic config",
      "Datadog/Grafana dashboards",
    ],
  },
  {
    title: "Acting Team Lead ",
    org: "Indicina Technologies",
    period: "Jan 2023 — Aug 2023",
    side: "left",
    summary:
      "Led FE initiatives, shipped shared design system, improved load perf across white-label deployments.",
    backTitle: "Highlights",
    backBullets: [
      "React + TS migration",
      "Storybook component library",
      "Perf: code-split, lazy routes",
    ],
  },
  {
    title: "Software Developer",
    org: "Indicina Technologies",
    period: "Jul 2019 — Dec 2022",
    side: "right",
    summary:
      "Built dashboards & SDKs; integrated AWS and data viz; collaborated across product and ML teams.",
    backTitle: "Highlights",
    backBullets: [
      "Node.js/Python services, S3/Lambda",
      "GraphQL & REST integrations",
      "Email templating (Handlebars)",
    ],
  },
];

/* ── UI atoms ─────────────────────────────────────────────────────────── */

function GlowDot() {
  return (
    <div className="relative z-10 h-4 w-4 rounded-full bg-white">
      <span className="absolute inset-0 rounded-full shadow-[0_0_22px_6px_rgba(14,165,233,0.35)] dark:shadow-[0_0_30px_8px_rgba(59,130,246,0.6)]" />
      <span className="absolute inset-0 rounded-full ring-2 ring-cyan-500/45 dark:ring-0" />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] leading-none text-slate-600 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white/80">
      {children}
    </span>
  );
}

function CardChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(2,6,23,0.06)] ring-1 ring-slate-100 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:ring-white/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-transparent dark:bg-[linear-gradient(90deg,rgba(14,165,233,0.10),rgba(56,189,248,0.10),rgba(16,185,129,0.10))] [mask-image:linear-gradient(to_bottom,black,transparent_25%,transparent_75%,black)]" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

/* ── Flip card: fixed responsive height + scrollable faces ───────────── */

function FlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = React.useState(false);
  const onActivate = () => setFlipped(v => !v);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? "Flip card to front" : "Flip card to back"}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      className="relative w-full text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
      style={{ isolation: "isolate" }}
    >
      {/* The wrapper has a fixed height via CSS var */}
      <div
        className={`relative w-full preserve-3d motion-safe:transition-transform motion-safe:duration-500 ${flipped ? "rotate-y-180" : ""}`}
        style={{
          height: "var(--card-h)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div className="backface-hidden absolute inset-0">
          <CardChrome>
            {/* Make the face content scroll if taller than card */}
            <div className="h-full overflow-y-auto pr-1">
              {front}
            </div>
          </CardChrome>
        </div>

        {/* BACK */}
        <div className="backface-hidden absolute inset-0" style={{ transform: "rotateY(180deg)" }}>
          <CardChrome>
            <div className="h-full overflow-y-auto pr-1">
              {back}
            </div>
          </CardChrome>
        </div>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden py-20 pb-28 md:pb-24 transition-colors"
      /* Set consistent heights once, per breakpoint */
      style={
        {
          // mobile default
          // You can tune these numbers
          ["--card-h" as any]: "260px",
        }
      }
    >
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional{" "}
            <span className="text-cyan-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500 dark:bg-clip-text dark:text-transparent">
              Journey
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-white/60">
            Click a card to flip and view key deliverables & tech.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-none grid-cols-1 gap-10 md:grid-cols-2">
          {/* Center rail (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
            <div className="relative mx-auto h-full w-1 rounded-full bg-cyan-400 opacity-60 dark:bg-gradient-to-b dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500 dark:opacity-80">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/25 to-cyan-400/25 blur-[10px] dark:from-cyan-400 dark:via-sky-400 dark:to-emerald-400" />
            </div>
          </div>

          {items.map((it, i) => {
            const left = it.side === "left";
            return (
              <div key={i} className={`relative ${left ? "" : "md:col-start-2"}`}>
                {/* Connector dot (desktop only) */}
                <div
                  className={`absolute top-1/2 hidden -translate-y-1/2 md:block ${
                    left ? "right-[-28px]" : "left-[-28px]"
                  }`}
                >
                  <GlowDot />
                </div>

                <FlipCard
                  front={
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                            {it.title}
                          </h3>
                          <div className="mt-0.5 text-sm text-slate-600 dark:text-white/70">
                            {it.org ? `${it.org}` : null}
                            {it.org && it.period ? " · " : ""}
                            {it.period}
                          </div>
                          {it.subtitle ? (
                            <div className="mt-1 text-xs text-slate-500 dark:text-white/50">
                              {it.subtitle}
                            </div>
                          ) : null}
                        </div>
                        <Pill>Tap to flip</Pill>
                      </div>

                      {/* Optional: clamp front summary to keep visual rhythm */}
                      <p className="mt-3 text-sm leading-[1.55] text-slate-700 dark:text-white/80 line-clamp-5">
                        {it.summary}
                      </p>
                    </>
                  }
                  back={
                    <>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white/90">
                        {it.backTitle ?? "Details"}
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-700 dark:text-white/80">
                        {(it.backBullets ?? []).map((b, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-white/70" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-xs text-slate-500 dark:text-white/50">
                        Tap to flip back
                      </div>
                    </>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Helpers + responsive height */}
      <style jsx global>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        @media (min-width: 768px) {
          #experience { --card-h: 220px; }  /* tablet/desktop */
        }
        @media (min-width: 1280px) {
          #experience { --card-h: 200px; }  /* big screens */
        }
        /* optional: hide mobile scrollbar track for cleaner look */
        .no-scrollbar::-webkit-scrollbar { width: 0; height: 0; }
      `}</style>
    </section>
  );
}
