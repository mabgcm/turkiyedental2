import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";
import AftercareTabs from "./AftercareTabs";

export const metadata: Metadata = {
    title: "Dental Warranty & Aftercare | TurkiyeDental",
    description: "Learn how clinic warranties and aftercare typically work in Türkiye. Educational guidance on coverage, care expectations, and questions to ask your clinic.",
};

const coverageCards = [
    {
        title: "Veneers & Crowns",
        duration: "Typical: multi-year coverage by clinics",
        bullets: ["Chipping or debonding under normal use", "Lab and material standards listed in clinic documents"],
    },
    {
        title: "Bridges & Onlays",
        duration: "Typical: multi-year coverage by clinics",
        bullets: ["Fractures or debonding under normal function", "Requires good hygiene and regular checks"],
    },
    {
        title: "Dental Implants",
        duration: "Prosthetic vs fixture terms vary by clinic",
        bullets: ["Prosthetic part covers chipping or loosening", "Fixture coverage depends on healing and maintenance"],
    },
    {
        title: "Full Mouth / All-on-4",
        duration: "Typical: multi-year coverage by clinics",
        bullets: ["Framework issues and normal-use fractures", "Bite checks and follow-ups keep coverage active"],
    },
];

const responsibilities = [
    "Regular dental check-ups at home (per your clinic plan)",
    "Good daily hygiene: brushing, flossing/interdental, rinses",
    "Use night guard if recommended for grinding or clenching",
    "Do not use teeth as tools or bite very hard objects",
    "Tell your clinic promptly if something feels loose, painful, or off",
];

const aftercareTabs = [
    {
        key: "veneers",
        title: "Veneers & Crowns",
        points: [
            "First 24–48h: gentle brushing, soft foods, avoid extremes of temperature.",
            "First week: expect temporary sensitivity; avoid hard/sticky foods.",
            "Long-term: night guard if recommended; routine hygiene and checks.",
        ],
    },
    {
        key: "implants",
        title: "Dental Implants",
        points: [
            "First 24–48h: cold packs, prescribed meds, soft diet, no chewing on surgical side.",
            "First week: gentle rinses as advised; avoid smoking/alcohol per clinician guidance.",
            "Long-term: maintain hygiene around implants; attend follow-ups for stability and bite.",
        ],
    },
    {
        key: "fullmouth",
        title: "All-on-4 / Full Mouth",
        points: [
            "First 24–48h: follow implant and prosthetic care instructions; soft foods.",
            "First week: adjustments may be needed; keep tissues clean and avoid pressure on sore areas.",
            "Long-term: routine checks for bite, screws, and maintenance as scheduled.",
        ],
    },
    {
        key: "gum",
        title: "Gum Treatment & Cleaning",
        points: [
            "First 24–48h: mild soreness/bleeding is common; use prescribed rinses.",
            "First week: avoid very hot/spicy/crunchy foods; gentle brushing.",
            "Long-term: consistent hygiene and recall visits to keep gums healthy.",
        ],
    },
];

const homeCare = [
    {
        title: "Brushing & toothpaste",
        body: "Use a soft toothbrush; non-abrasive toothpaste unless prescribed otherwise. Brush 2x/day.",
    },
    {
        title: "Flossing / interdental",
        body: "Use floss or interdental brushes where advised. Water flossers can help around bridges and implants.",
    },
    {
        title: "Mouthwash / special products",
        body: "Follow any prescribed rinses. Avoid harsh products unless recommended by your clinician.",
    },
];

const faqItems = [
    { q: "What happens if a crown breaks after I return home?", a: "Contact your treating clinic with photos and details. Ask how your warranty applies and what steps to take locally or on a visit." },
    { q: "Do I need to come back to Turkey if something goes wrong?", a: "Some issues can be managed locally; others may need a visit. Clarify this with your clinic before treatment and keep their contact handy." },
    { q: "Will another dentist in my country be able to help under a clinic’s warranty?", a: "Policies differ. Many clinics prefer to assess first; some may collaborate with a local dentist. Ask for written guidance." },
    { q: "Does smoking affect a clinic warranty?", a: "Smoking can affect healing and may limit coverage. Check the specific terms you receive." },
    { q: "How long should sensitivity last after treatment?", a: "Temporary sensitivity is common; if it persists or worsens, contact your treating clinic for advice." },
];

const normalVsContact = {
    normal: ["Mild sensitivity or soreness", "Light bleeding after hygiene or minor procedures", "Temporary bite awareness during adjustment"],
    contact: [
        "Persistent or increasing pain or swelling",
        "Loose crown, bridge, or implant screw feeling",
        "Bite feels very wrong, or teeth feel mobile",
        "Signs of infection: fever, pus, foul taste",
    ],
};

export default function WarrantyPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">How It Works</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Warranty &amp; Aftercare</h1>
                    <p className="text-lg text-gray-700">
                        We are not a clinic and do not provide treatment. This page explains how Turkish clinics typically handle warranties and aftercare so you can ask informed questions and protect your results.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Ask a Question About Aftercare
                        </a>
                        <Link
                            href="/guides/timeline"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            See Healing Timelines →
                        </Link>
                    </div>
                </section>

                {/* Commitment */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Our Commitment to Clear Guidance</h2>
                            <p className="text-gray-700">We help you understand how clinic warranties and aftercare commonly work in Türkiye.</p>
                            <p className="text-gray-700">Use this page to prepare questions for your treating clinic so you know what is covered and what is expected of you.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Built on quality and support</h3>
                            <p className="text-gray-700">We focus on clear information, not sales. Your clinic provides the actual warranty, aftercare, and clinical decisions.</p>
                            <p className="text-gray-700">If something feels off, reach your clinic promptly; we can help you frame the right questions.</p>
                        </div>
                    </div>
                </section>

                {/* Coverage */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">What Clinic Warranties Often Cover</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {coverageCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{card.duration}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {card.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-700">
                        Exact warranty conditions and durations are provided by your treating clinic in your personal treatment plan and consent forms.
                    </p>
                </section>

                {/* Not covered */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">What Is Not Covered by the Warranty</h2>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl space-y-2">
                        <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                            <li>Trauma or accidents outside normal use</li>
                            <li>Untreated gum disease or decay affecting results</li>
                            <li>Not following aftercare or hygiene instructions</li>
                            <li>Heavy grinding/clenching without using a recommended night guard</li>
                            <li>Smoking-related complications</li>
                            <li>Experimental treatments not in your plan</li>
                        </ul>
                        <p className="text-xs text-amber-900">This list is general information and does not replace the specific terms in your treatment documents from your clinic.</p>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Your Responsibilities for Keeping Your Warranty Valid</h2>
                    <div className="grid md:grid-cols-2 gap-3 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        {responsibilities.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">✓</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Aftercare tabs/cards */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Aftercare Instructions by Treatment Type</h2>
                    <AftercareTabs tabs={aftercareTabs} />
                </section>

                {/* Home care */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Daily Home Care for Long-Lasting Results</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {homeCare.map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                                <p className="text-gray-700 text-sm">{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700">Consistent home care is part of keeping your warranty valid. Follow the plan provided by your clinician.</p>
                </section>

                {/* When to contact */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">When Should You Contact Your Clinic After Treatment?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Normal sensations</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {normalVsContact.normal.map((n) => (
                                    <li key={n}>{n}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Contact the clinic if you notice…</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {normalVsContact.contact.map((c) => (
                                    <li key={c}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-900">
                        Urgent issues: if you cannot reach your clinic immediately and have severe pain, swelling, or fever, seek local emergency care and inform your clinic as soon as possible.
                    </div>
                </section>

                {/* Remote support */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Online Support After You Return Home</h2>
                    <div className="md:grid md:grid-cols-2 md:gap-6 space-y-4 md:space-y-0">
                        <div className="space-y-2">
                            <p className="text-gray-700 text-sm">Many clinics can review photos or videos to assess concerns and guide next steps remotely.</p>
                            <p className="text-gray-700 text-sm">They may ask for updated X-rays or scans to decide if local care is possible or if a visit is needed.</p>
                            <p className="text-gray-700 text-sm">We can help you prepare the right questions and understand typical next steps.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 grid place-items-center text-sm text-gray-500">
                            Illustration / screenshot placeholder
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Warranty &amp; Aftercare – Frequently Asked Questions</h2>
                    <FAQAccordion items={faqItems} />
                </section>
            </div>

            {/* CTA */}
            <section id="contact" className="bg-teal-600 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Have a Question About Warranty or Aftercare?</h2>
                            <p className="text-sm text-teal-50">We are not a clinic, but we can help you understand typical policies and what to ask your treating clinic.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Ask a Question Now
                            </a>
                            <Link
                                href="/guides/timeline"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                            >
                                See Timeline &amp; Healing Information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
