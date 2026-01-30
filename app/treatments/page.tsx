import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Treatments | TürkiyeDental",
    description: "Explore TürkiyeDental’s treatment guides, including dental implants, crowns, veneers, All-on-4, and All-on-6 options.",
};

const treatmentCards = [
    {
        title: "Dental Implants",
        href: "/treatments/dental-implants",
        desc: "Clear answers on cost, safety, pain, and timelines so you can choose implants with confidence.",
        tag: "Implants",
    },
    {
        title: "Dental Crowns",
        href: "/treatments/dental-crowns",
        desc: "When to crown, when not to, material choices, and how to avoid overtreatment.",
        tag: "Crowns",
    },
    {
        title: "Veneers",
        href: "/treatments/veneers",
        desc: "Pros, downsides, costs, longevity, and whether veneers fit your smile goals.",
        tag: "Cosmetic",
    },
    {
        title: "All-on-4",
        href: "/treatments/allon4",
        desc: "Full-arch fixed solutions: timelines, provisional teeth, and long-term maintenance.",
        tag: "Full-arch",
    },
    {
        title: "All-on-6",
        href: "/treatments/allon6",
        desc: "Compare to other full-arch options, understand costs, healing, and quotes.",
        tag: "Full-arch",
    },
];

export default function TreatmentsIndex() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="space-y-3 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Treatments</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Find the right treatment guide</h1>
                    <p className="text-gray-700 max-w-3xl">
                        Clinic-independent guidance on implants, crowns, veneers, and full-arch solutions. Understand costs, timelines, healing, and what to ask before you travel.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {treatmentCards.map((card) => (
                        <Link
                            key={card.href}
                            href={card.href}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2 hover:border-teal-200 hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-2 text-xs text-teal-700">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{card.tag}</span>
                            </div>
                            <h2 className="text-xl font-semibold text-brand-secondary">{card.title}</h2>
                            <p className="text-sm text-gray-700">{card.desc}</p>
                            <span className="text-sm font-semibold text-teal-700">Open guide →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="bg-white border-t border-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Need a second opinion?</p>
                        <h2 className="text-2xl sm:text-3xl font-bold">Get a clinic-independent review</h2>
                        <p className="text-gray-700 text-sm">
                            Upload your photos, X-rays, and quotes. We outline options, timelines, and what to ask—before you commit to any clinic.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Upload Photos &amp; X-Rays
                            </Link>
                            <Link
                                href="/guides/timeline"
                                className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                See timelines
                            </Link>
                        </div>
                    </div>
                    <div className="bg-brand-surface rounded-2xl border border-gray-200 p-5 space-y-2">
                        <h3 className="text-lg font-semibold text-brand-secondary">What you’ll get</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Clear explanation of your options</li>
                            <li>Travel and healing timelines for each option</li>
                            <li>Questions to ask before you commit</li>
                            <li>Free legal/dispute support if you’re treated through us; fee-based options for others</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
