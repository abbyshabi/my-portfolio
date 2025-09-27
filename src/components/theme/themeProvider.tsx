"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"      // adds/removes the `.dark` class on <html>
      defaultTheme="light"   // start in light, per your request
      enableSystem={false}   // ignore OS theme for now
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
