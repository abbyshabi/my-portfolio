"use client";

import * as React from "react";
import { Mail, MapPin, Linkedin, Github, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

type FieldProps = {
    label: string;
    name: "name" | "email" | "message";
    type?: string;
    as?: "input" | "textarea";
    placeholder?: string;
    rows?: number;
    value: string;
    onChange: (v: string) => void;
    error?: string;
};


type ToastProps = {
    open: boolean;
    kind: "sent" | "error";
    onClose: () => void;
    message: string;
};

function Toast({ open, kind, onClose, message }: ToastProps) {
    const isOk = kind === "sent";
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="fixed bottom-6 left-1/2 z-[60] w-[min(92vw,560px)] -translate-x-1/2"
                    role="status"
                    aria-live="polite"
                >
                    <div
                        className={`relative overflow-hidden rounded-2xl border p-4 pr-10 shadow-xl ring-1 backdrop-blur
              ${isOk
                                ? "border-emerald-300/30 bg-emerald-50/70 ring-emerald-200/40 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:ring-emerald-400/20"
                                : "border-rose-300/30 bg-rose-50/70 ring-rose-200/40 dark:border-rose-400/20 dark:bg-rose-400/10 dark:ring-rose-400/20"}`}
                    >
                        {/* icon + text */}
                        <div className="flex items-start gap-3">
                            <div className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                ${isOk ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
                                    : "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300"}`}>
                                {isOk ? "✅" : "⚠️"}
                            </div>
                            <div className="text-sm text-slate-800 dark:text-slate-100">
                                {message}
                            </div>
                        </div>

                        {/* close button */}
                        <button
                            onClick={onClose}
                            className="absolute right-2 top-2 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
                            aria-label="Dismiss notification"
                        >
                            ✕
                        </button>

                        {/* progress bar */}
                        <motion.span
                            layoutId="toast-progress"
                            className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 
                ${isOk ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                                    : "bg-gradient-to-r from-rose-400 to-rose-500"}`}
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: 4, ease: "linear" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


const Field = React.memo(function Field({
    label,
    name,
    type = "text",
    as = "input",
    placeholder,
    rows,
    value,
    onChange,
    error,
}: FieldProps) {
    const id = `contact-${name}`;
    const base =
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 shadow-sm " +
        "focus:outline-none focus:ring-2 focus:ring-cyan-500/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40";

    const commonProps = {
        id,
        name,
        placeholder,
        className: base,
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
        // webkit quirk guard on iOS when using translucent backgrounds
        style: { WebkitTextFillColor: "currentColor" } as React.CSSProperties,
        autoComplete: name === "email" ? "email" : name === "name" ? "name" : "off",
        onMouseDown: (e: React.MouseEvent) => e.stopPropagation(), // in case a parent has click handlers
    };

    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-white/90">
                {label}
            </label>

            {as === "textarea" ? (
                <textarea {...(commonProps as any)} rows={rows ?? 6} />
            ) : (
                <input {...(commonProps as any)} type={type} inputMode={name === "email" ? "email" : "text"} />
            )}

            {error ? <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{error}</p> : null}
        </div>
    );
});

export function ContactSection() {
    const [sending, setSending] = React.useState(false);
    const [ok, setOk] = React.useState<null | "sent" | "error">(null);
    const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
    const [form, setForm] = React.useState({ name: "", email: "", message: "" });
    const formRef = React.useRef<HTMLFormElement>(null);
    const [toastOpen, setToastOpen] = React.useState(false);


    React.useEffect(() => {
        if (!ok) return;
        setToastOpen(true);
        const t = setTimeout(() => setToastOpen(false), 4000);
        return () => clearTimeout(t);
    }, [ok]);

    const set = (k: "name" | "email" | "message") => (v: string) => {
        setForm((p) => ({ ...p, [k]: v }));
        setFieldErrors((p) => ({ ...p, [k]: "" }));
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOk(null);

        const { name, email, message } = form;

        const errors: FieldErrors = {};
        if (!name) errors.name = "Please enter your name.";
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
        if (!message) errors.message = "Please enter a message.";
        if (Object.keys(errors).length) {
            setFieldErrors(errors);
            return;
        }

        const endpoint = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK;

        try {
            setSending(true); const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_WEBHOOK!, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" }, // simple = no preflight
                body: JSON.stringify({
                    name, email, message,
                    ua: typeof navigator !== "undefined" ? navigator.userAgent : "server",
                    company: (document.getElementById("company") as HTMLInputElement)?.value || "",
                }),
            });
            const data = await res.json();
            if (data.ok) {
                setOk("sent");
                setForm({ name: "", email: "", message: "" });
                formRef.current?.reset();
            } else setOk("error");
        } catch {
            setOk("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="relative isolate py-12 md:py-16">
            {/* FULL-BLEED BACKGROUNDS */}
            {/* light */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[100vw] -translate-x-1/2 bg-[oklch(0.97_0_0)] dark:hidden" />
            {/* dark */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-[100vw] -translate-x-1/2 dark:block
                  bg-[radial-gradient(60%_50%_at_18%_12%,rgba(56,189,248,.14),transparent_60%),radial-gradient(55%_45%_at_85%_30%,rgba(217,70,239,.12),transparent_60%),linear-gradient(180deg,#142238_0%,#122033_55%,#0d1627_100%)]" />

            {/* CONSTRAINED CONTENT */}
            <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-10">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let&apos;s Connect</h2>
                </div>

                {/* 2 cols on lg; explicit orders: form left, info right */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* FORM — left on lg */}
                    <div className="order-2 lg:order-2 space-y-6">
                        <form
                            ref={formRef}
                            onSubmit={onSubmit}
                            className="relative z-20 pointer-events-auto w-full space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(2,6,23,0.06)] ring-1 ring-slate-100 dark:border-white/10 dark:bg-white/5 dark:ring-white/5"
                        >
                            <Field name="name" label="Name" placeholder="I will like to know how to address you"
                                value={form.name} onChange={set('name')} error={fieldErrors.name} />
                            <Field name="email" label="Email" type="email" placeholder="How can I reach you too?"
                                value={form.email} onChange={set('email')} error={fieldErrors.email} />
                            <Field name="message" label="Message" as="textarea"
                                placeholder="Got an exciting opportunity or idea and want to collaborate? Tell me about it!"
                                rows={7} value={form.message} onChange={set('message')} error={fieldErrors.message} />

                            {/* honeypot */}
                         <input id="company" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />

                            <button type="submit" disabled={sending}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:hover:bg-sky-600">
                                {sending ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : "Send Message"}
                            </button>

                            <Toast
                                open={toastOpen && !!ok}
                                kind={ok === "error" ? "error" : "sent"}
                                message={
                                    ok === "sent"
                                        ? "Thank you! I’m sure your message has landed safely in my mailbox."
                                        : "Something went wrong. Please try again."
                                }
                                onClose={() => setToastOpen(false)}
                            />
                            {/* {ok === "error" && <p className="text-center text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>} */}
                        </form>
                    </div>

                    {/* INFO — right on lg */}


                    <div className="order-1 lg:order-1 mx-auto w-full max-w-[640px] lg:mx-0">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Get In Touch</h3>
                        <p className="max-w-prose text-slate-600 dark:text-white/70">
                            I’m open to new opportunities and interesting projects. Reach out and I’ll respond quickly.
                        </p>

                        <ul className="space-y-3 text-slate-700 dark:text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-white/10 dark:text-cyan-300"><Mail size={18} /></span>
                                <a className="hover:underline" href="mailto:abbyshabi@gmail.com">abbyshabi@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-white/10 dark:text-cyan-300"><MapPin size={18} /></span>
                                <span>Toronto, ON</span>
                            </li>
                        </ul>

                        <div className="flex gap-3 pt-2">
                            <a href="https://www.linkedin.com/in/oluwadamilola-shabi" target="_blank" rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:text-white">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/abbyshabi" target="_blank" rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:text-white">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
