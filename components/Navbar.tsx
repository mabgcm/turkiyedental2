"use client";

import { useEffect, useState, type SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        aria-hidden="true"
        {...props}
    >
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="16" y2="17" />
    </svg>
);

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const treatments = [
        { label: "Dental Implants", href: "/treatments/dental-implants" },
        { label: "All-on-4", href: "/treatments/allon4" },
        { label: "All-on-6", href: "/treatments/allon6" },
        { label: "Veneers", href: "/treatments/veneers" },
        { label: "Dental Crowns", href: "/treatments/dental-crowns" },
    ];

    const destinations = [
        { label: "Istanbul", href: "/destinations/istanbul" },
        { label: "Antalya", href: "/destinations/antalya" },
        { label: "Izmir", href: "/destinations/izmir" },
    ];

    const howItWorks = [
        { label: "Upload X-ray/Photos (Secure)", href: "/upload" },
        { label: "Travel Guide", href: "/guides/travel" },
        { label: "Timeline & Healing", href: "/guides/timeline" },
        { label: "Warranty & After-care", href: "/guides/warranty" },
    ];

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
            <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Turkiye Dental" width={180} height={40} />
                </Link>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium text-brand-secondary">
                    <li><Link className="hover:text-brand-primary" href="/">Home</Link></li>

                    <li className="relative group">
                        <span className="cursor-default group-hover:text-brand-primary">
                            Treatments
                        </span>

                        <ul className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-md min-w-56 p-2 z-50">
                            {treatments.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 rounded hover:bg-brand-surface hover:text-[#3FB8FF] transition"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="relative group">
                        <span className="cursor-default group-hover:text-brand-primary">Destinations</span>
                        <ul className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-md min-w-40 p-2 z-50">
                            {destinations.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 rounded hover:bg-brand-surface hover:text-[#3FB8FF] transition"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li><Link className="hover:text-brand-primary" href="/reviews">Reviews</Link></li>

                    <li className="relative group">
                        <span className="cursor-default group-hover:text-brand-primary">How It Works</span>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-md min-w-64 p-2">
                            {howItWorks.map((item) => (
                                <li key={item.href}>
                                    <Link className="block px-3 py-2 rounded hover:bg-brand-surface" href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li><a href="/about" className="hover:text-[#3FB8FF]">About</a></li>

                    <li>
                        <Button href="/start" size="md" variant="primary">
                            Get Free Second Opinion
                        </Button>
                    </li>
                </ul>

                {/* Mobile trigger */}
                <button
                    className="md:hidden inline-flex items-center justify-center rounded-full border border-[#213360]/40 p-2 text-[#213360] hover:bg-[#F5F7FB] hover:text-[#21CDC0] transition"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(v => !v)}
            >
                <span className="sr-only">Toggle menu</span>
                <MenuIcon className="h-5 w-5" />
            </button>
        </nav>

            {/* Mobile panel */}
            {/* MOBİL MENÜ - akordeon grid */}
            <div
                id="mobile-menu"
                className={`md:hidden grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="bg-white relative z-[70] border-t px-4 py-3 space-y-3 text-[16px] text-[#213360]">
                        <li><Link className="block py-2" href="/" onClick={() => setOpen(false)}>Home</Link></li>

                        <li>
                            <details className="group">
                                <summary className="py-2 cursor-pointer flex items-center gap-2 list-none [&::-webkit-details-marker]:hidden">
                                    <span className="text-brand-secondary">{">"}</span>
                                    <span>Treatments</span>
                                </summary>
                                <ul className="pl-3 border-l space-y-1">
                                    {treatments.map((item) => (
                                        <li key={item.href}>
                                            <Link className="block py-1" href={item.href} onClick={() => setOpen(false)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details className="group">
                                <summary className="py-2 cursor-pointer flex items-center gap-2 list-none [&::-webkit-details-marker]:hidden">
                                    <span className="text-brand-secondary">{">"}</span>
                                    <span>Destinations</span>
                                </summary>
                                <ul className="pl-3 border-l space-y-1">
                                    {destinations.map((item) => (
                                        <li key={item.href}>
                                            <Link className="block py-1" href={item.href} onClick={() => setOpen(false)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details className="group">
                                <summary className="py-2 cursor-pointer flex items-center gap-2 list-none [&::-webkit-details-marker]:hidden">
                                    <span className="text-brand-secondary">{">"}</span>
                                    <span>How It Works</span>
                                </summary>
                                <ul className="pl-3 border-l space-y-1">
                                    {howItWorks.map((item) => (
                                        <li key={item.href}>
                                            <Link className="block py-1" href={item.href} onClick={() => setOpen(false)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        <li><Link className="block py-2" href="/reviews" onClick={() => setOpen(false)}>Reviews</Link></li>
                        <li><Link className="block py-2" href="/about" onClick={() => setOpen(false)}>About</Link></li>

                        {/* CTA: Ayrı Button bileşeni */}
                        <li className="pt-1">
                            <Button href="/start" fullWidth>
                                Get Free Second Opinion
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
