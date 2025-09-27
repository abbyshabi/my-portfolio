export type Project = {
  id: string;
  title: string;
  role?: string;
  period?: string;      // "2025 · Contract"
  stack?: string[];     // ["React", "TypeScript", "Next.js"]
  summary: string;
  highlights?: string[]; // bullets in the modal
  cover?: string;        // /local/projects/xyz.jpg
  links?: { label: string; href: string }[];
};
