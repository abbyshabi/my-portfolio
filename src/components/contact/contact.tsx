"use client";

import * as React from "react";
import {
    Mail, Phone, MapPin, Linkedin, Github, Twitter, Loader2,
} from "lucide-react";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactSection() {
    const [sending, setSending] = React.useState(false);
    const [ok, setOk] = React.useState<null | "sent" | "error">(null);
    const formRef = React.useRef<HTMLFormElement>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOk(null);

        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "").trim();
        const email = String(fd.get("email") || "").trim();
        const message = String(fd.get("message") || "").trim();

        const errors: FieldErrors = {};
        if (!name) errors.name = "Please enter your name.";
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            errors.email = "Please enter a valid email.";
        if (!message) errors.message = "Please enter a message.";

        if (Object.keys(errors).length > 0) {
            // simple client-side error reporting
            setFieldErrors(errors);
            return;
        }

        try {
            setSending(true);
            // POST to your API route (see route.ts below)
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            if (res.ok) {
                setOk("sent");
                formRef.current?.reset();
            } else {
                setOk("error");
            }
        } catch {
            setOk("error");
        } finally {
            setSending(false);
        }
    };

    const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});

    const Field = ({
        label,
        name,
        type = "text",
        as = "input",
        placeholder,
        rows,
    }: {
        label: string;
        name: "name" | "email" | "message";
        type?: string;
        as?: "input" | "textarea";
        placeholder?: string;
        rows?: number;
    }) => {
        const id = `contact-${name}`;
        const error = fieldErrors[name];

        const base =
            "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40";
        return (
            <div>
                <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-white/90">
                    {label}
                </label>
                {as === "textarea" ? (
                    <textarea
                        id={id}
                        name={name}
                        rows={rows ?? 6}
                        placeholder={placeholder}
                        className={base}
                        onChange={() => setFieldErrors(prev => ({ ...prev, [name]: "" }))}
                    />
                ) : (
                    <input
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className={base}
                        onChange={() => setFieldErrors(prev => ({ ...prev, [name]: "" }))}
                    />
                )}
                {error ? (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{error}</p>
                ) : null}
            </div>
        );
    };

    return (
        <section className="relative isolate py-12 md:py-16" id="contact">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                {/* light */}
                <div className="h-full bg-[oklch(0.97_0_0)] dark:hidden" />
                {/* dark */}
                <div className="hidden h-full dark:block bg-[radial-gradient(60%_50%_at_18%_12%,rgba(56,189,248,.14),transparent_60%),radial-gradient(55%_45%_at_85%_30%,rgba(217,70,239,.12),transparent_60%),linear-gradient(180deg,#142238_0%,#122033_55%,#0d1627_100%)]" />
            </div>
            <div className="mx-auto max-w-[1100px] px-6 md:px-10">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Let&apos;s Connect
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Left: info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Get In Touch</h3>
                        <p className="max-w-prose text-slate-600 dark:text-white/70">
                            I’m open to new opportunities and interesting projects. Reach out and I’ll respond quickly.
                        </p>

                        <ul className="space-y-3 text-slate-700 dark:text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-white/10 dark:text-cyan-300">
                                    <Mail size={18} />
                                </span>
                                <a className="hover:underline" href="mailto:abbyshabi@gmail.com">
                                    abbyshabi@gmail.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-white/10 dark:text-cyan-300">
                                    <MapPin size={18} />
                                </span>
                                <span>Toronto, ON</span>
                            </li>
                        </ul>

                        <div className="flex gap-3 pt-2">
                            <Social href="https://www.linkedin.com/in/oluwadamilola-shabi" label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Social>
                            <Social href="https://github.com/abbyshabi" label="GitHub">
                                <Github className="h-5 w-5" />
                            </Social>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div>
                        <form ref={formRef} onSubmit={onSubmit} className="w-[600px] space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(2,6,23,0.06)] ring-1 ring-slate-100 dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
                            <Field name="name" label="Name" placeholder="I will like to know how to address you" />
                            <Field name="email" label="Email" type="email" placeholder="How can I reach you too?" />
                            <Field name="message" label="Message" as="textarea" placeholder="Got an exciting opportunity or idea and want to collaborate? Tell me about it!" rows={7} />

                            <button
                                type="submit"
                                disabled={sending}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:hover:bg-sky-600"
                            >
                                {sending ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {ok === "sent" ? (
                                <p className="text-center text-sm text-emerald-600 dark:text-emerald-400">
                                    Thanks. Your message has been sent.
                                </p>
                            ) : ok === "error" ? (
                                <p className="text-center text-sm text-red-600 dark:text-red-400">
                                    Something went wrong. Please try again.
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Social button */
function Social({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:text-white"
        >
            {children}
        </a>
    );
}
