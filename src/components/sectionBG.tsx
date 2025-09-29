// src/components/SectionBg.tsx
"use client";

export function SectionBg({ variant = "a" }: { variant?: "a" | "b" }) {
  const light = variant === "a" ? "bg-section-light-a" : "bg-section-light-b";
  const dark  = variant === "a" ? "dark:bg-section-dark-a" : "dark:bg-section-dark-b";
  return (
    <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[100vw] -translate-x-1/2">
      <div className={`h-full ${light} dark:hidden`} />
      <div className={`hidden h-full ${dark} dark:block`} />
      {/* gentle opaque fade to match base, no transparency seam */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(10,15,30)] dark:to-[rgb(10,15,30)]" />
    </div>
  );
}
