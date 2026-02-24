"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const posts = [
    {
        title: "The 2-Visit vs 3-Visit Timelines Guide to All-on-6 Treatment Visits",
        description: "Understand All-on-6 visit timelines, healing phases, and planning considerations for international patients.",
        href: "/blog/all-on-6-visit-timelines",
        date: "Feb 24, 2026",
        tag: "Implants",
        image: "/images/allon6timeline.jpg",
    },
    {
        title: "All-On-4 vs. All-On-6: Which Full Mouth Restoration Is Right for You?",
        description: "Compare All-On-4 and All-On-6 implant restorations, including bone needs, stability, costs, and recovery.",
        href: "/blog/all-on-4-vs-all-on-6",
        date: "Feb 21, 2026",
        tag: "Implants",
        image: "/images/4vs6.png",
    },
    {
        title: "Save Your Teeth or Remove Them All?",
        description: "All-on-4 vs tooth preservation: medical reasons, costs, timelines, and how to choose the right path.",
        href: "/blog/save-your-teeth-or-remove-them-all",
        date: "Feb 19, 2026",
        tag: "Implants",
        image: "/images/saveorremove.png",
    },
    {
        title: "Dental Scams in Turkey: What Happens When You Choose the Wrong Clinic?",
        description: "Understand common scam patterns, red flags, and the real consequences of choosing the wrong dental clinic abroad.",
        href: "/blog/dental-scams-in-turkey-wrong-clinic",
        date: "Feb 01, 2026",
        tag: "Safety",
        image: "/images/scam.jpg",
    },
    {
        title: "Eating With Temporary Teeth After Dental Implants",
        description: "What you can eat, what to avoid, and how to stay comfortable while your implants heal.",
        href: "/blog/eating-with-temporary-teeth-after-dental-implants",
        date: "Jan 18, 2026",
        tag: "Implants",
        image: "/images/eatimplant.png",
    },
    {
        title: "Caught Between Dental Clinics? How to Find Clarity Before You Decide",
        description: "Compare conflicting plans, verify diagnostics, and regain confidence before committing to treatment.",
        href: "/blog/caught-between-dental-clinics",
        date: "Jan 03, 2026",
        tag: "Clarity",
        image: "/images/thornapart.png",
    },
    {
        title: "How Sleep Quality Influences Oral and Dental Health",
        description: "See how sleep affects gums, implants, crowns, and healing—plus practical steps to reduce bruxism, dry mouth, and inflammation.",
        href: "/blog/how-sleep-influences-oral-dental-health",
        date: "Dec 08, 2025",
        tag: "Wellness",
        image: "/images/sleep.jpeg",
    },
    {
        title: "The Free Hotel Dental Scam: What Patients Should Know",
        description: "Spot “free hotel + cheap dental” red flags, and learn how to verify quotes before you travel.",
        href: "/blog/free-hotel-cheap-dental-scam-guide",
        date: "Nov 20, 2025",
        tag: "Safety",
        image: "/images/scam.png",
    },
];

export default function BlogIndexPage() {
    const [query, setQuery] = useState("");

    const filteredPosts = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) {
            return posts;
        }

        return posts.filter((post) => {
            const haystack = `${post.title} ${post.description} ${post.tag ?? ""}`.toLowerCase();
            return haystack.includes(normalized);
        });
    }, [query]);

    return (
        <main className="min-h-screen bg-white text-brand-secondary">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-slate-50" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Blog</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Insights for Smarter Dental Choices</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Educational articles on dental treatments, healing, and travel — grounded in real patient experience.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <label className="block text-left text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted mb-2" htmlFor="blog-search">
                            Search articles
                        </label>
                        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100">
                            <svg aria-hidden="true" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 21l-4.35-4.35m1.6-4.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                id="blog-search"
                                type="search"
                                placeholder="Search implants, travel, healing..."
                                className="w-full bg-transparent text-sm text-gray-700 focus:outline-none"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 className="text-2xl font-semibold">Latest posts</h2>
                    <p className="text-sm text-gray-600">{filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}</p>
                </div>
                {filteredPosts.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-gray-200 bg-slate-50 p-8 text-center text-sm text-gray-600">
                        No posts match your search. Try a different keyword.
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <article key={post.href} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                                <Link href={post.href} className="block">
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-5 space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span>{post.date}</span>
                                            <span className="h-1 w-1 rounded-full bg-gray-300" />
                                            <span className="font-semibold text-teal-700">{post.tag}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-brand-secondary group-hover:text-teal-700 transition">{post.title}</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed">{post.description}</p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <section className="bg-teal-600 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">Want a second opinion?</h2>
                        <p className="text-sm text-teal-50">Upload your case and get a clear, clinic-independent review.</p>
                    </div>
                    <Link
                        href="/upload"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                    >
                        Upload &amp; get guidance
                    </Link>
                </div>
            </section>
        </main>
    );
}
