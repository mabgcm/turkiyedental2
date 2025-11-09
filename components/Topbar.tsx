"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.99 3.65 9.14 8.42 9.95v-7.03H7.9v-2.92h2.38V9.41c0-2.35 1.4-3.64 3.54-3.64 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.54.72-1.54 1.46v1.76h2.63l-.42 2.92h-2.21V22c4.77-.81 8.42-4.96 8.42-9.93z" />
        </svg>
    );
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.62.51.71.28 1.31.66 1.88 1.23.57.57.95 1.17 1.23 1.88.27.66.46 1.45.51 2.62.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.51 2.62a4.8 4.8 0 0 1-1.23 1.88 4.8 4.8 0 0 1-1.88 1.23c-.66.27-1.45.46-2.62.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.62-.51a4.8 4.8 0 0 1-1.88-1.23 4.8 4.8 0 0 1-1.23-1.88c-.27-.66-.46-1.45-.51-2.62C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.96.51-2.62.28-.71.66-1.31 1.23-1.88A4.8 4.8 0 0 1 5.9.52c.66-.27 1.45-.46 2.62-.51C9.78-.05 10.16-.06 13.36-.06h-2c3.2 0 3.58.01 4.85.07" fill="none" />
            <path d="M12 5.9a6.1 6.1 0 1 0 0 12.2 6.1 6.1 0 0 0 0-12.2zm0 10a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8zM17.7 5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
            <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="5.5" ry="5.5" fill="none" />
        </svg>
    );
}
function IconTwitterX(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M3 3h5.7l4.3 6.3L19.3 3H23l-7.7 8.6L23 21h-5.7l-4.7-6.8L8.7 21H1l8.5-9.4L3 3z" />
        </svg>
    );
}
function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M20.5 3.5A11 11 0 0 0 3.4 20l-1 3.6 3.7-1A11 11 0 0 0 21 12a11 11 0 0 0-.5-8.5zM12 20.1a8.1 8.1 0 1 1 0-16.2 8.1 8.1 0 0 1 0 16.2z" />
            <path d="M16.9 14.7c-.2-.1-1.4-.7-1.5-.7-.2-.1-.3-.1-.5.1l-.7.9c-.1.1-.3.1-.5 0a6.3 6.3 0 0 1-3-2.6c-.2-.3 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.1 0-.4.1-.6.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.8 4.2 3.8 2.5 1 2.5.7 3 .7s1.6-.7 1.8-1.4c.2-.6.2-1.2.1-1.3 0-.1-.2-.2-.3-.2z" />
        </svg>
    );
}

export default function Topbar() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        if (open) document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [open]);

    return (
        <div className="fixed top-0 inset-x-0 z-[60] hidden sm:block bg-white">
            <div className="mx-auto max-w-6xl px-4 h-11 flex items-center justify-between border-b">
                {/* Left */}
                <ul className="flex flex-wrap items-center gap-4 text-[14px] text-brand-secondary">
                    {/* 24/7 */}
                    <li>
                        <button
                            onClick={() => setOpen(v => !v)}
                            className="px-3 h-8 inline-flex items-center rounded-md border border-gray-300 text-brand-secondary hover:bg-brand-surface"
                        >
                            24/7 Assistance
                        </button>
                        {open && (
                            <div className="absolute left-0 mt-2 w-80 rounded-lg border bg-white shadow-lg p-3 z-[70]">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-white text-sm">
                                        ☎
                                    </span>
                                    <span className="font-semibold text-brand-secondary">Emergency / Questions</span>
                                </div>
                                <a href="tel:+902122222222" className="block font-medium text-brand-primary hover:underline">
                                    +90 212 222 22 22
                                </a>
                                <p className="text-brand-muted text-[13px] mt-1">
                                    Implants, veneers, All-on-4 için 7/24 koordinatör desteği.
                                </p>
                                <Link
                                    href="/start"
                                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand-primary py-2 text-white font-semibold hover:bg-brand-primaryDark"
                                >
                                    Get Free Second Opinion
                                </Link>
                            </div>
                        )}
                    </li>

                    {/* WhatsApp */}
                    <li className="flex items-center gap-1">
                        <IconWhatsApp className="h-4 w-4 fill-[#25D366]" />
                        <a href="https://wa.me/905555555555" target="_blank" rel="noopener" className="hover:underline">
                            WhatsApp: +90 555 555 55 55
                        </a>
                    </li>

                    {/* Locations */}
                    <li className="hidden md:flex items-center gap-1">
                        <span>📍</span>
                        <span>Locations: Istanbul • Antalya • Izmir</span>
                    </li>

                    {/* Hours */}
                    <li className="hidden md:flex items-center gap-1">
                        <span>⏰</span>
                        <Link href="/contact-us" className="hover:underline">
                            Mon–Sat: 09:00–19:00 (TRT)
                        </Link>
                    </li>

                    {/* For Clinics */}
                    <li className="hidden md:flex items-center gap-1">
                        <span>👤</span>
                        <Link href="/for-clinics" className="hover:underline">For Clinics</Link>
                    </li>
                </ul>

                {/* Socials */}
                <ul className="flex items-center gap-3">
                    <li>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-secondary text-white hover:bg-brand-primary transition"
                            title="Facebook"
                        >
                            <IconFacebook className="h-3.5 w-3.5 fill-current" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-secondary text-white hover:bg-brand-primary transition"
                            title="Instagram"
                        >
                            <IconInstagram className="h-3.5 w-3.5 fill-current" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-label="X"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-secondary text-white hover:bg-brand-primary transition"
                            title="X"
                        >
                            <IconTwitterX className="h-3.5 w-3.5 fill-current" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}