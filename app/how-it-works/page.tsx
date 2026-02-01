import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works | TurkiyeDental",
    description:
        "See how TurkiyeDental supports patients: upload photos, plan travel and timelines, understand warranty and aftercare, and know your legal rights.",
};

const steps = [
    {
        title: "Upload Photos & X-Rays",
        href: "/upload",
        description:
            "Send clear photos or a recent panoramic X-ray so we can review your case, outline options, and estimate timelines before you travel.",
    },
    {
        title: "Travel Guide",
        href: "/guides/travel",
        description:
            "Plan flights, length of stay, and logistics in Turkey so your treatment schedule and travel days match.",
    },
    {
        title: "Timeline & Healing",
        href: "/guides/timeline",
        description:
            "See how long each treatment typically takes and what healing looks like so you can plan with confidence.",
    },
    {
        title: "Warranty & Aftercare",
        href: "/guides/warranty",
        description:
            "Understand how clinic warranties and aftercare usually work and what questions to ask before treatment.",
    },
    {
        title: "Legal Support & Rights",
        href: "/guides/legal",
        description:
            "Learn your options if problems arise after treatment and how we support patients with guidance and mediation.",
    },
];

const pillars = [
    {
        title: "Clinic-independent guidance",
        body: "We explain options and risks so you can decide without pressure or sales tactics.",
    },
    {
        title: "Clear, practical planning",
        body: "We connect treatment plans to real-world travel days, recovery, and follow-ups.",
    },
    {
        title: "Long-term protection",
        body: "We help you understand warranties, aftercare, and what to do if something feels off.",
    },
];

export default function HowItWorksPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">How It Works</p>
                        <h1 className="text-3xl sm:text-4xl font-bold">A clear, step-by-step path before you travel</h1>
                        <p className="text-lg text-gray-700">
                            TurkiyeDental helps international patients understand options, timelines, and risks before committing to care.
                            Here is the simplest way to move from uncertainty to a confident plan.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Upload Photos &amp; X-Rays
                            </Link>
                            <Link
                                href="/start"
                                className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Get a Second Opinion
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                        <Image
                            src="/images/dentalselfy.jpg"
                            alt="Patient taking dental photos for a second opinion"
                            fill
                            className="object-cover"
                            sizes="(min-width:1024px) 520px, 100vw"
                            priority
                        />
                    </div>
                </section>

                {/* Pillars */}
                <section className="grid md:grid-cols-3 gap-4">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2">
                            <h2 className="text-lg font-semibold text-brand-secondary">{pillar.title}</h2>
                            <p className="text-sm text-gray-700">{pillar.body}</p>
                        </div>
                    ))}
                </section>

                {/* Steps */}
                <section className="space-y-6">
                    <div className="space-y-2 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold">What happens next</h2>
                        <p className="text-gray-700">
                            Each step links to a detailed guide so you can go deeper only where you need to.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {steps.map((step, idx) => (
                            <Link
                                key={step.href}
                                href={step.href}
                                className="group bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-3 hover:border-teal-200 hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-sm font-semibold">
                                        {idx + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold text-brand-secondary group-hover:text-teal-700 transition">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700">{step.description}</p>
                                <span className="text-sm font-semibold text-teal-700">Open guide →</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-teal-600 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">Ready for a clear, clinic-independent review?</h2>
                        <p className="text-sm text-teal-50">
                            Upload photos or X-rays to get a realistic plan, timeline, and next steps before you book flights.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/upload"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                        >
                            Upload Your Case
                        </Link>
                        <Link
                            href="/guides/timeline"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                        >
                            See timelines first
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
