"use client";

const TOP = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Design systems", "Accessibility",
    "React Query / SWR", "Zustand / Redux",
    "Node.js", "Express / Nest", "PostgreSQL", "Prisma",
    "Auth (JWT/OAuth)", "AWS", "Docker",
    "Storybook", "Testing (RTL/Jest)", "Performance", "CI/CD",
];


function Bar({ value }: { value: number }) {
    return (
        <div className="h-2 w-full rounded-full bg-border/50">
            <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                style={{ width: `${value}%` }}
                aria-hidden
            />
        </div>
    );
}

function ChipIcon({ children }: { children: React.ReactNode }) {
    return (
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-secondary-foreground text-base leading-none">
            {children}
        </span>
    );
}

function Li({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-2">
            <span className="mt-0.5 text-emerald-600 dark:text-emerald-300">✔</span>
            <span>{children}</span>
        </li>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-foreground/80">
            {children}
        </span>
    );
}

function Card({
    title,
    icon,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="h-full rounded-xl border border-border bg-card/95 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/80">
            <div className="mb-3 flex items-center gap-3">
                <ChipIcon>{icon}</ChipIcon>
                <h3 className="text-base font-semibold leading-none">{title}</h3>
            </div>
            {children}
        </div>
    );
}


export function Skills() {
    return (
        <section id="skills" className="relative isolate py-12 md:py-16">
            {/* FULL-BLEED BG */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[oklch(0.97_0_0)] dark:bg-surface-b" />

            <div className="container">
                <header className="mb-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Technical Expertise
                    </h2>

                    {/* Top skillset chips */}
                    <div className="mx-auto mt-4 flex max-w-5xl flex-wrap justify-center gap-2">
                        {/* {TOP.map((t) => (
                            <Pill key={t}>{t}</Pill>
                        ))} */}
                    </div>
                </header>

                {/* Equal-height cards; will wrap to 2 rows on lg */}
                <div className="grid auto-rows-[1fr] gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* 1. Frontend frameworks */}
                    <Card title="Frontend Frameworks" icon={<span>⚛️</span>}>
                        <div className="space-y-4">
                            <div>
                                <div className="mb-1 flex items-center justify-between text-sm">
                                    <span>React.js</span>
                                    <span className="text-xs text-muted-foreground">Expert</span>
                                </div>
                                <Bar value={92} />
                            </div>
                            <div>
                                <div className="mb-1 flex items-center justify-between text-sm">
                                    <span>TypeScript</span>
                                    <span className="text-xs text-muted-foreground">Advanced</span>
                                </div>
                                <Bar value={88} />
                            </div>
                            <div>
                                <div className="mb-1 flex items-center justify-between text-sm">
                                    <span>Next.js (App Router)</span>
                                    <span className="text-xs text-muted-foreground">Advanced</span>
                                </div>
                                <Bar value={85} />
                            </div>
                        </div>
                    </Card>

                    {/* 2. UI / Styling */}
                    <Card title="UI & Styling" icon={<span>🎨</span>}>
                        <ul className="space-y-2 text-sm">
                            <Li>Tailwind CSS, tokens & theming</Li>
                            <Li>Design systems & component libraries</Li>
                            <Li>Responsive layouts, grid/flex mastery</Li>
                            <Li>Accessible UI (focus, keyboard, roles)</Li>
                        </ul>
                    </Card>

                    {/* 3. Data & State */}
                    <Card title="Data & State" icon={<span>🗂️</span>}>
                        <ul className="space-y-2 text-sm">
                            <Li>React Query / SWR (server cache)</Li>
                            <Li>Zustand / Redux (app state)</Li>
                            <Li>REST & GraphQL integrations</Li>
                            <Li>Form handling & validation</Li>
                        </ul>
                    </Card>

                    {/* 4. Performance & Quality */}
                    <Card title="Performance & Quality" icon={<span>📈</span>}>
                        <ul className="space-y-2 text-sm">
                            <Li>Performance optimization & Core Web Vitals</Li>
                            <Li>Code-splitting, render & memo strategy</Li>
                            <Li>Cross-browser compatibility</Li>
                            <Li>Linting & type-safety workflows</Li>
                        </ul>
                    </Card>

                    {/* 5. Testing & Tooling */}
                    <Card title="Testing & Tooling" icon={<span>🧪</span>}>
                        <ul className="space-y-2 text-sm">
                            <Li>React Testing Library / Jest</Li>
                            <Li>Storybook docs & visual tests</Li>
                            <Li>Playwright (E2E) when needed</Li>
                            <Li>CI/CD pipelines & preview envs</Li>
                        </ul>
                    </Card>

                    {/* 6. Backend & Platform */}
                    <Card title="Backend & Platform" icon={<span>⚙️</span>}>
                        <ul className="space-y-2 text-sm">
                            <Li>Node.js with Express / Nest</Li>
                            <Li>REST / GraphQL APIs, pagination & caching</Li>
                            <Li>PostgreSQL + Prisma (schema, migrations)</Li>
                            <Li>Auth: JWT / OAuth, sessions, CSRF basics</Li>
                            <Li>AWS (S3/Lambda/CloudFront) • Docker • Vercel</Li>
                            <Li>Observability (Sentry/LogRocket), rate limits</Li>
                        </ul>
                    </Card>

                </div>
            </div>
        </section>
    );
}
