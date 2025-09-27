// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      backgroundImage: {
        // Light
        'section-light-a':
          'radial-gradient(80% 60% at 50% 10%, rgb(248 249 252), transparent 60%), linear-gradient(180deg, rgb(244 246 250), rgb(244 246 250))',
        'section-light-b':
          'radial-gradient(80% 60% at 20% 0%, rgb(246 247 251), transparent 60%), linear-gradient(180deg, rgb(241 243 248), rgb(241 243 248))',
        // Dark
        'section-dark-a':
          'radial-gradient(80% 60% at 50% 10%, rgb(22 30 50), transparent 60%), linear-gradient(180deg, rgb(10 15 30), rgb(10 15 30))',
        'section-dark-b':
          'radial-gradient(80% 60% at 15% 0%, rgb(18 26 44), transparent 60%), linear-gradient(180deg, rgb(9 13 26), rgb(9 13 26))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.07)" },

      /* ⬇️ New: floating badges animation */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-rev": "float 10s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
