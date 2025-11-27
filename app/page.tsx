import Link from "next/link";
import FAQ, { type FaqItem } from "@/components/FAQ";
import TreatmentCards, { type TreatmentItem } from "@/components/TreatmentCards";

const treatments: TreatmentItem[] = [
    {
        title: "Dental Implants",
        href: "/treatments/dental-implants",
        image: { src: "/images/full-mouth.jpg", alt: "Dental implants" },
        excerpt: "Clear answers on cost, safety, pain, and timelines so you can choose implants with confidence.",
    },
    {
        title: "Dental Crowns",
        href: "/treatments/dental-crowns",
        image: { src: "/images/preventive.jpg", alt: "Dental crowns" },
        excerpt: "When to crown, when not to, material choices, and how to avoid overtreatment.",
    },
    {
        title: "Veneers",
        href: "/treatments/veneers",
        image: { src: "/images/veneers.png", alt: "Veneers" },
        excerpt: "Pros, downsides, costs, longevity, and whether veneers fit your smile goals.",
    },
    {
        title: "All-on-4",
        href: "/treatments/allon4",
        image: { src: "/images/allon4.jpeg", alt: "All-on-4 implants" },
        excerpt: "Full-arch fixed solutions: timelines, provisional teeth, and long-term maintenance.",
    },
    {
        title: "All-on-6",
        href: "/treatments/allon6",
        image: { src: "/images/allon6.jpeg", alt: "All-on-6 implants" },
        excerpt: "Compare to other full-arch options, understand costs, healing, and quotes.",
    },
];

const faqItems: FaqItem[] = [
    {
        q: "Are you a clinic?",
        a: "No. TürkiyeDental is clinic-independent. We provide education and second opinions so you can decide confidently.",
    },
    {
        q: "Can you help me compare two treatment plans?",
        a: "Yes. We review your x-rays, photos, and quotes to explain differences in materials, timelines, risks, and total cost.",
    },
    {
        q: "Do you work only with clinics in Türkiye?",
        a: "We can review cases for any location. When referrals are requested, we point to verified providers in Türkiye and abroad.",
    },
    {
        q: "How much does a second opinion cost?",
        a: "We offer a free initial review and transparent pricing for more detailed case assessments when needed.",
    },
    {
        q: "What files should I send?",
        a: "OPG or CBCT (if available), recent photos, and any treatment quotes. More context helps us give clearer guidance.",
    },
];

const howItWorksLinks = [
    { title: "Upload Photos & X-Rays", href: "/upload", desc: "Securely share your case for an unbiased plan and timeline." },
    { title: "Travel Guide", href: "/guides/travel", desc: "Plan flights, stays, and city choices for care in Türkiye." },
    { title: "Timeline & Healing", href: "/guides/timeline", desc: "Know how long each treatment takes and what to expect." },
    { title: "Warranty & Aftercare", href: "/guides/warranty", desc: "Learn how clinics handle coverage and your responsibilities." },
    { title: "Legal Support & Rights", href: "/guides/legal", desc: "Free for our patients; fee-based for others needing dispute help." },
];

const pillars = [
    { title: "Clinic-independent guidance", body: "We’re not a clinic. We explain options clearly so you feel confident choosing your path." },
    { title: "Second opinions & case reviews", body: "We review your images and quotes to highlight risks, timelines, and realistic outcomes." },
    { title: "Travel-ready clarity", body: "We connect treatment plans with travel days so you can book flights and hotels wisely." },
    { title: "Support & patient rights", body: "Free legal/dispute support for our patients; fee-based help for others needing mediation or referrals." },
];

const resourceCards = [
    { title: "Plan your trip", href: "/guides/travel", body: "Flights, cities, hotel tips, safety, and what to expect day to day." },
    { title: "Healing & timelines", href: "/guides/timeline", body: "Stay lengths for veneers, crowns, implants, All-on-4, and more." },
    { title: "Warranty & aftercare", href: "/guides/warranty", body: "Understand clinic coverage and what you must do to keep it valid." },
    { title: "Legal support & rights", href: "/guides/legal", body: "Free for our patients; paid options for others with disputes." },
];

const steps = [
    { title: "Share your case", body: "Upload photos/X-rays or tell us your goals. We keep your data secure.", cta: "/upload" },
    { title: "Get a clear plan", body: "We outline options, timelines, risks, and travel days so you can decide confidently.", cta: "/guides/timeline" },
    { title: "Travel prepared", body: "Use our travel, warranty, and legal resources to feel supported before and after treatment.", cta: "/guides/travel" },
];

export default function HomePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-gray-50" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                            Clinic-independent guidance
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Clear, unbiased dental guidance for patients traveling to Türkiye
                        </h1>
                        <p className="text-lg text-gray-700">
                            Get a free review of your photos, X-rays, and quotes. Understand timelines, travel days, aftercare, and your patient rights—without clinic pressure.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Upload Photos &amp; X-Rays
                            </Link>
                            <Link
                                href="/guides/timeline"
                                className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                See timelines &amp; stays
                            </Link>
                        </div>
                        <div className="text-sm text-gray-600">
                            Free legal/dispute support for patients treated through us. Paid options available for others.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 space-y-3">
                        <h3 className="text-lg font-semibold">How It Works at a Glance</h3>
                        <ul className="space-y-3">
                            {howItWorksLinks.slice(0, 4).map((item) => (
                                <li key={item.href} className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                                    <div>
                                        <Link href={item.href} className="text-sm font-semibold text-brand-secondary hover:text-teal-700 transition">
                                            {item.title}
                                        </Link>
                                        <p className="text-sm text-gray-700">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                                <div>
                                    <Link href="/guides/legal" className="text-sm font-semibold text-brand-secondary hover:text-teal-700 transition">
                                        Legal Support &amp; Rights
                                    </Link>
                                    <p className="text-sm text-gray-700">Free for our patients; fee-based for others needing dispute help.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Why TürkiyeDental</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Patient-first, transparent, and travel-ready</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Guidance, timelines, aftercare, and rights information in one place so you can plan your trip with confidence.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pillars.map((item) => (
                        <div key={item.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Steps */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Simple process</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">From upload to clear next steps</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {steps.map((step, idx) => (
                        <div key={step.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-sm font-semibold">{idx + 1}</span>
                            <h3 className="text-lg font-semibold text-brand-secondary">{step.title}</h3>
                            <p className="text-sm text-gray-700">{step.body}</p>
                            <Link href={step.cta} className="text-sm font-semibold text-teal-700 hover:text-teal-800 transition">
                                Go there →
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-sm text-gray-700 text-center">
                    Free legal/dispute support applies to patients treated through us; fee-based options are available for others.
                </div>
            </section>

            {/* Treatments */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Treatment guides</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Discover the right treatment for your smile</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Learn about common treatments, costs, healing, and timelines before you travel.</p>
                </div>
                <TreatmentCards items={treatments} className="py-1" />
            </section>

            {/* Resources */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Plan &amp; protect</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Travel, healing, warranty, and legal support</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Use these guides to plan your stay, understand aftercare, and know your rights.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {resourceCards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-2 hover:border-teal-200 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                            <p className="text-sm text-gray-700">{card.body}</p>
                            <span className="text-sm font-semibold text-teal-700">Open guide →</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Questions? We’ve got answers.</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">Frequently asked</h2>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10">
                    <FAQ items={faqItems} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-teal-600 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">Ready for a free review?</h3>
                        <p className="text-sm text-teal-50">Upload your case to get a clear plan, travel timeline, and aftercare guidance.</p>
                        <p className="text-xs text-teal-50">Legal/dispute support is free for patients treated through us; fees may apply for others.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/upload"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                        >
                            Upload &amp; get guidance
                        </Link>
                        <Link
                            href="/guides/warranty"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                        >
                            See aftercare &amp; rights
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
