// components/Footer.tsx

"use client";

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f9fafb] border-t border-gray-200 text-[#14233d]">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 md:grid-cols-4">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-extrabold mb-4 text-[#1b76d1]">TürkiyeDental</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Empowering patients with transparent, clinic-independent dental guidance and second opinions worldwide.
                    </p>
                    <div className="flex gap-4 mt-5">
                        <Link href="https://www.facebook.com/profile.php?id=61584497004756" className="hover:text-[#21CDC0]" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.instagram.com/turkiyedentalguide/" className="hover:text-[#21CDC0]" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.youtube.com/@TurkiyeDentalGuide" className="hover:text-[#21CDC0]" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-5 w-5" />
                        </Link>

                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link href="/" className="hover:text-[#1b76d1]">Home</Link></li>
                        <li><Link href="/treatments" className="hover:text-[#1b76d1]">Treatments</Link></li>
                        <li><Link href="/pricing" className="hover:text-[#1b76d1]">Pricing</Link></li>
                        <li><Link href="/about" className="hover:text-[#1b76d1]">About Us</Link></li>
                        <li><Link href="/start" className="hover:text-[#1b76d1]">Get a Second Opinion</Link></li>
                        <li><Link href="/guides/legal" className="hover:text-[#1b76d1]">Legal Guide</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-[#1b76d1] mt-0.5" />
                            <a href="mailto:dentalclinicturkiye@gmail.com" className="hover:text-[#1b76d1]">
                                dentalclinicturkiye@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-[#1b76d1] mt-0.5" />
                            <a href="tel:+14372662552">+44 790 339 6743</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-[#1b76d1] mt-0.5" />
                            <span>London • New York • Toronto</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                        Get educational articles, dental insights, and updates delivered straight to your inbox.
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row items-center gap-3"
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#21CDC0] focus:ring-1 focus:ring-[#21CDC0]"
                        />
                        <button
                            type="submit"
                            className="bg-[#21CDC0] hover:bg-[#1bb5a9] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-5 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} TürkiyeDental. All rights reserved.
            </div>
        </footer>
    );
}
