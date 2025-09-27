// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/themeProvider";
import { Navbar } from "../components/shell/navarbar"; // small typo fix from 'navarbar'
import { Footer } from "@/components/shell/footer";

export const metadata: Metadata = {
  title: "Oluwadamilola Shabi | Senior Frontend Engineer",
  description: "React, TypeScript, UX, and design systems.",
  icons: {
    icon: "/local/logo_dark.png",       // must exist under /public/local/
    shortcut: "/local/logo_light.png",
    apple: "/local/apple-touch-icon.png" // 180×180 PNG recommended
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body className="min-h-screen bg-white text-foreground dark:bg-[#0a0f1e]">
        <ThemeProvider>
          <Navbar />
          <main id="main" className="pb-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
