import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About TürkiyeDental Guide | Independent, Ethical, Patient-First",
    description:
        "Learn how TürkiyeDental protects international dental patients with unbiased second opinions, clinic insights, personalized portfolios, and legal guidance—free of charge.",
};

const services = [
    {
        id: "service-1",
        label: "1. Second Opinion Service",
        lead: "If you already have a treatment plan from a clinic or dentist—anywhere in the world—you can send it to us.",
        bullets: ["Medical accuracy", "Price fairness", "Necessity of procedures", "Alternative options that may benefit you"],
        closing: "You receive a transparent, unbiased assessment created solely to protect your dental and financial health.",
    },
    {
        id: "service-2",
        label: "2. Clinic Insight Report",
        lead: "If you’ve already researched clinics but can’t decide which one to trust, we help you go deeper.",
        bullets: [
            "Background analysis",
            "Past patient experiences",
            "Professional reputation checks",
            "Ethical compliance and reliability signals",
            "Insider details not publicly available",
        ],
        closing: "This service helps you pick the safest and most reputable provider for your specific needs.",
    },
    {
        id: "service-3",
        label: "3. Personalized Treatment Portfolio",
        lead: "If you don’t know where to start—no problem.",
        bullets: [
            "Multiple treatment plans from different trusted clinics",
            "Transparent price comparisons",
            "Travel and accommodation options",
            "Recommended timelines",
            "Pros and cons of each choice",
        ],
        closing: "We help you select the option that gives you the best balance of quality, cost, and comfort.",
    },
    {
        id: "service-4",
        label: "4. Legal Guidance & Mediation",
        lead: "If you received treatment in Türkiye and believe you were misled, overcharged, treated improperly, or exposed to malpractice, TürkiyeDental can help you understand your rights.",
        bullets: ["Document evaluation", "Communication with the clinic", "Mediation attempts", "Legal escalation when necessary"],
        closing: "We stand by the patient to ensure justice and accountability.",
    },
];

const trustBullets = [
    "Independent & unbiased – We do not work for any clinic.",
    "Professional team – Dentists, legal experts, industry consultants.",
    "Ethically driven – Protecting patients is our top priority.",
    "Transparent guidance – Honest, clear, and detailed information.",
    "Free of charge – Our mission is public health, not profit.",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 space-y-14">
                {/* Hero */}
                <section className="space-y-6 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-700">Independent • Ethical • Patient-First</p>
                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">About TürkiyeDental Guide</h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                            At TürkiyeDental, our mission is simple: protect international dental patients and strengthen the global reputation of Türkiye’s dental
                            industry. We are an independent team of dental practitioners, retired judges, active lawyers, consultants, and business professionals.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                            Together, we advocate for transparency, patient safety, and fair practice in an industry millions rely on every year. Our service is completely
                            free of charge for patients. Our only commitment is to you—your health, your budget, and your peace of mind.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-100">
                            Service is free of charge
                        </span>
                        <Link
                            href="/upload"
                            className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                        >
                            Get Free Guidance
                        </Link>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-3">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                            <span className="h-2 w-2 rounded-full bg-teal-500" />
                            Our Mission
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Our Mission</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            “To guide international dental patients with verified information, protect them from misleading practices, and help them make informed
                            decisions with confidence.”
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-3">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-slate-500" />
                            Our Vision
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Our Vision</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            “A world where every patient choosing Türkiye for dental treatment receives accurate information, transparent options, and ethical care—
                            without the fear of overpricing, overtreatment, or misinformation.”
                        </p>
                    </div>
                </section>

                {/* What We Do */}
                <section className="space-y-4">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">What We Do</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What We Do</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">TürkiyeDental provides four essential services for international patients:</p>
                    </div>
                </section>

                {/* Services Grid */}
                <section aria-label="Our Core Services for International Patients" className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Our Core Services for International Patients</h3>
                    <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                        {services.map((service) => (
                            <article key={service.id} className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-700">{service.label}</h2>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed text-slate-700">{service.lead}</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
                                    {service.bullets.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="text-sm md:text-base font-semibold text-slate-800">{service.closing}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Why Patients Trust */}
                <section className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-7 space-y-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Why Patients Trust TürkiyeDental</p>
                            <h3 className="text-2xl font-bold text-slate-900">Why Patients Trust TürkiyeDental</h3>
                        </div>
                        <ul className="space-y-2 text-base md:text-lg text-slate-800">
                            {trustBullets.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-bold">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Promise */}
                <section className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 space-y-3">
                        <h3 className="text-2xl font-bold text-slate-900">Our Promise</h3>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            At TürkiyeDental, every patient is treated with honesty, respect, and care. Whether you’re choosing a clinic, comparing treatment plans, or
                            navigating a difficult situation after treatment, we are here to support you from start to finish.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            Your smile deserves safety, transparency, and expertise. We make sure you receive exactly that.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/start"
                                className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                            >
                                Contact TürkiyeDental
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
