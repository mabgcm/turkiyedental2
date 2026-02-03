import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | TürkiyeDental Guide",
    description: "Transparent, placeholder pricing for TürkiyeDental’s independent patient services.",
};

const pricingPacks = [
    {
        id: "pack-1",
        label: "Second Opinion Service",
        paymentUrl: "https://square.link/u/tvmhlvbJ",
        price: "$50",
        note: "Per case review",
        lead: "Best for patients who already have a clinic plan and want a fast, unbiased review.",
        bullets: ["Medical accuracy check", "Procedure necessity review", "Alternative options", "Price fairness assessment"],
    },
    {
        id: "pack-2",
        label: "Clinic Insight Report",
        paymentUrl: "https://square.link/u/ucGIrusM",
        price: "$100",
        note: "For maximum 3 clinics, +$39 for each extra clinic",
        lead: "Ideal when choosing between clinics and you want verified trust signals.",
        bullets: [
            "Background analysis",
            "Reputation checks",
            "Ethics & reliability signals",
            "Past patient experience insights",
        ],
    },
    {
        id: "pack-3",
        label: "Personalized Treatment Portfolio",
        paymentUrl: "https://square.link/u/P4d9QRa8",
        price: "$150",
        note: "Per case portfolio",
        lead: "For patients starting from scratch who need options, timelines, and travel-ready clarity.",
        bullets: [
            "Multiple treatment options",
            "Transparent price comparisons",
            "Travel & accommodation guidance",
            "Pros/cons of each path",
        ],
    },
    {
        id: "pack-4",
        label: "Legal Guidance & Mediation",
        paymentUrl: "https://square.link/u/AC4n4okR",
        price: "$100",
        note: "Initial review",
        lead: "Support for patients who need help after treatment issues or disputes.",
        bullets: ["Document evaluation", "Clinic communication support", "Mediation attempts", "Escalation guidance"],
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 space-y-14">
                <section className="text-center space-y-5">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">Transparent • Patient-First • Independent</p>
                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Pricing & Service Packs</h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                            These packages mirror the services listed on our About page. Prices below are placeholders while the page is finalized.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-100">
                            Free initial guidance is always available
                        </span>
                        <Link
                            href="/pricing/inquiry"
                            className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                        >
                            Request a Pack
                        </Link>
                    </div>
                </section>

                <section className="grid gap-5 md:gap-6 md:grid-cols-2">
                    {pricingPacks.map((pack) => (
                        <article key={pack.id} className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-7 space-y-4">
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Service Pack</p>
                                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{pack.label}</h2>
                                <p className="text-slate-700">{pack.lead}</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-slate-900">{pack.price}</span>
                                <span className="text-sm text-slate-500">{pack.note}</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                                {pack.bullets.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className="pt-2">
                                <Link
                                    href={pack.paymentUrl}
                                    className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                                >
                                    Purchase This Pack
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 space-y-3 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Need help choosing?</h3>
                    <p className="text-slate-700 text-base md:text-lg">
                        Share your case and we’ll guide you to the right service. No pressure, no clinic ties.
                    </p>
                    <div className="pt-1">
                        <Link
                            href="/upload"
                            className="inline-flex items-center rounded-lg border border-teal-200 px-5 py-2.5 text-sm font-semibold text-teal-700 hover:border-teal-300 hover:text-teal-800"
                        >
                            Upload Photos & X-Rays
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
