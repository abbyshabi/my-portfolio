// src/components/shell/navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme/themeToggle";
import { Logo } from "@/components/shell/logo";

// ...
const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];
// ...


export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Logo src="/local/logo_light.png"  darkSrc="/local/logo_dark.png"  size={70} showWordmark />

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="leading-none hover:text-foreground/80">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 mr-[-50px]">
            <ThemeToggle /> 
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90 leading-none"
            >
              Let’s talk
            </a>
          </div>

          {/* Mobile hamburger (optional) */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border leading-none"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm leading-none">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground leading-none"
              >
                Let’s talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
