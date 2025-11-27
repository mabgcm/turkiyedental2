// app/about/page.tsx
import Link from "next/link";

export const metadata = {
    title: "About – TürkiyeDental",
    description:
        "TürkiyeDental provides clinic-independent guidance, education, and second opinions to help patients make confident dental decisions.",
};

const pillars = [
    {
        title: "Independent guidance",
        body: "We’re not a clinic. We’re a clinic-independent partner focused on honest, clear advice so you can decide with confidence.",
    },
    {
        title: "Patient-first clarity",
        body: "We explain options in plain language—implants, crowns, veneers—so you understand timelines, risks, and realistic outcomes.",
    },
    {
        title: "Trusted clinicians",
        body: "Second opinions come from experienced clinicians in Türkiye and abroad, using modern materials and labs.",
    },
];

const bullets = [
    "Explain treatment choices (e.g., implants vs. bridges vs. crowns)",
    "Review quotes and treatment plans for clarity and fairness",
    "Offer second opinions from trusted clinicians (Türkiye & abroad)",
    "Share educational resources to help you decide with confidence",
];

export default function AboutPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
                {/* Hero */}
                <section className="text-center space-y-4 max-w-3xl mx-auto">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">About</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">About TürkiyeDental</h1>
                    <p className="text-lg text-gray-700">
                        We’re not a clinic. We’re your clinic-independent dental guidance partner—offering education, honest advice,
                        and second opinions from trusted clinicians in Türkiye and abroad.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="/upload"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Upload Photos &amp; X-Rays
                        </Link>
                        <Link
                            href="/guides/travel"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Plan your trip →
                        </Link>
                    </div>
                </section>

                {/* Pillars */}
                <section className="grid md:grid-cols-3 gap-4">
                    {pillars.map((item) => (
                        <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-2">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-700 text-sm">{item.body}</p>
                        </div>
                    ))}
                </section>

                {/* Who we are */}
                <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-secondary">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        TürkiyeDental helps patients navigate dental decisions with clarity and confidence. We review cases, explain options in plain language,
                        and help you request qualified second opinions—without clinic bias or pressure tactics.
                    </p>
                </section>

                {/* What we do */}
                <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-secondary">What We Do</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {bullets.map((b) => (
                            <li key={b}>{b}</li>
                        ))}
                    </ul>
                </section>

                {/* Independence */}
                <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-secondary">Why Independence Matters</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Guidance is most valuable when it’s free from sales goals. Our mission is to protect your interests—by prioritizing long-term oral health,
                        realistic timelines, and transparent costs.
                    </p>
                </section>

                {/* CTA */}
                <section className="rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#3FB8FF] to-[#21CDC0] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold">Get a Free Second Opinion</h3>
                        <p className="opacity-90 text-sm md:text-base">
                            Share your case and files; we’ll respond with an unbiased overview of options.
                        </p>
                    </div>
                    <Link
                        href="/start?from=/about"
                        className="inline-flex items-center justify-center bg-white text-[#1E3A8A] px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Start the Form
                    </Link>
                </section>
            </div>
        </main>
    );
}
