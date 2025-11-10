"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <header className="fixed w-full top-0 sm:top-11 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
            <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Turkiye Dental" width={180} height={40} />
                </Link>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium text-brand-secondary">
                    <li><Link className="hover:text-brand-primary" href="/">Home</Link></li>

                    <li className="relative group">
                        <span className="cursor-default group-hover:text-brand-primary">Treatments</span>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-md min-w-56 p-2">
                            {[
                                ["Dental Implants", "/treatments/dental-implants"],
                                ["All-on-4 / All-on-6", "/treatments/all-on-4"],
                                ["Veneers", "/treatments/veneers"],
                                ["Zirconium Crowns", "/treatments/zirconium-crowns"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link className="block px-3 py-2 rounded hover:bg-brand-surface" href={href as string}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="relative group">
                        <span className="cursor-default group-hover:text-brand-primary">Destinations</span>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-md min-w-40 p-2">
                            {[
                                ["Istanbul", "/destinations/istanbul"],
                                ["Antalya", "/destinations/antalya"],
                                ["Izmir", "/destinations/izmir"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link className="block px-3 py-2 rounded hover:bg-brand-surface" href={href as string}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li><Link className="hover:text-brand-primary" href="/reviews">Reviews</Link></li>

                    <li className="relative group">
                        <span className="cursor-default group-hover:text-brand-primary">How It Works</span>
                        <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-md min-w-64 p-2">
                            {[
                                ["Upload X-ray/Photos (Secure)", "/upload"],
                                ["Travel Guide", "/guides/travel"],
                                ["Timeline & Healing", "/guides/timeline"],
                                ["Warranty & After-care", "/guides/warranty"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link className="block px-3 py-2 rounded hover:bg-brand-surface" href={href as string}>
                                        {label}
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
                    <i className="fa-solid fa-tooth text-xl"></i>
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
                                <summary className="py-2 cursor-pointer">Treatments</summary>
                                <ul className="pl-3 border-l space-y-1">
                                    <li><Link className="block py-1" href="/treatments/dental-implants" onClick={() => setOpen(false)}>Dental Implants</Link></li>
                                    <li><Link className="block py-1" href="/treatments/all-on-4" onClick={() => setOpen(false)}>All-on-4 / All-on-6</Link></li>
                                    <li><Link className="block py-1" href="/treatments/veneers" onClick={() => setOpen(false)}>Veneers</Link></li>
                                    <li><Link className="block py-1" href="/treatments/zirconium-crowns" onClick={() => setOpen(false)}>Zirconium Crowns</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details className="group">
                                <summary className="py-2 cursor-pointer">Destinations</summary>
                                <ul className="pl-3 border-l space-y-1">
                                    <li><Link className="block py-1" href="/destinations/istanbul" onClick={() => setOpen(false)}>Istanbul</Link></li>
                                    <li><Link className="block py-1" href="/destinations/antalya" onClick={() => setOpen(false)}>Antalya</Link></li>
                                    <li><Link className="block py-1" href="/destinations/izmir" onClick={() => setOpen(false)}>Izmir</Link></li>
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