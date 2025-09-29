// src/components/hero/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="relative py-16 md:py-20">
            {/* FULL-BLEED BACKGROUND */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[100vw] -translate-x-1/2">
                {/* Light */}
                <div className="h-[700px] bg-[oklch(0.94_0.045_100)] dark:hidden" />

                {/* Dark – brighter, layered glows */}

                <div className="hidden h-[700px] dark:block bg-[radial-gradient(60%_50%_at_20%_20%,rgba(56,189,248,.28),transparent_60%),radial-gradient(55%_45%_at_85%_35%,rgba(217,70,239,.26),transparent_60%),linear-gradient(180deg,#142238_0%,#122033_55%,#0d1627_100%)]" />

            </div>

            {/* FLOATING BADGES (dark, md+) */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-0 select-none hidden dark:hidden md:dark:block"
            >
                <span className="motion-reduce:animate-none animate-float absolute left-[10%] top-[18%] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur">
                    ⚛️ React
                </span>
                <span className="motion-reduce:animate-none animate-float-rev absolute right-[12%] top-[32%] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur">
                    🧩 TypeScript
                </span>
                <span className="motion-reduce:animate-none animate-float-slow absolute left-[18%] bottom-[22%] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur">
                    🎯 UX
                </span>
            </div>

            {/* CONTENT */}
            <div className="container">
                <div className="mx-auto max-w-5xl text-center">
                    <div className="mx-auto mb-6 h-28 w-28 rounded-full p-[4px] bg-gradient-to-tr from-cyan-400 to-fuchsia-400 shadow-[0_0_40px_rgba(56,189,248,.35)]">
                        <div className="h-full w-full rounded-full bg-card p-[3px]">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image src="/local/logo_dark.png" alt="Oluwadamilola Shabi" fill className="object-cover" priority />
                            </div>
                        </div>
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-7xl bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Senior Frontend Engineer
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-base text-muted-foreground md:text-lg">
                        7+ years crafting exceptional user experiences with React, TypeScript, and modern frontend ecosystems.
                    </p>

                    <div className="mx-auto mt-6 max-w-fit rounded-md border border-border/60 bg-secondary/70 px-3 py-2 font-mono text-sm text-secondary-foreground backdrop-blur">
                        const <span className="text-emerald-600 dark:text-emerald-400">passion</span> = "UX Excellence";
                        <span className="mx-2 text-foreground/50">•</span>
                        experience.years = <span className="text-sky-700 dark:text-sky-300">7+</span>;
                    </div>

                    <div className="mt-20">
                        <Link
                            href="#projects"
                            className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow hover:opacity-95"
                        >
                            Explore My Work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
