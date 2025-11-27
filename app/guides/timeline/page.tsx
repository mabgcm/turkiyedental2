import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
    title: "Dental Treatment Timeline & Healing | TurkiyeDental",
    description: "Learn how long dental treatments in Turkey take, what happens day by day, and what to expect during healing after veneers, crowns, implants and full-mouth restorations.",
};

const timelineCards = [
    {
        title: "Veneers / Crowns",
        badge: "Single Trip",
        stay: "5–7 days",
        points: ["Consultation and prep", "Lab fabrication", "Fitting and bite checks"],
    },
    {
        title: "Dental Implants",
        badge: "Two Trips",
        stay: "Visit 1: 2–3 days • Visit 2: 5–7 days",
        points: ["Surgery and healing checks", "Impressions and final crowns on second visit"],
    },
    {
        title: "All-on-4 / Full Mouth",
        badge: "Single Trip",
        stay: "7–10 days",
        points: ["Surgery with temporaries", "Follow-ups and bite refinement"],
    },
    {
        title: "Gum Tx / Cleaning / Whitening",
        badge: "Single Trip",
        stay: "2–4 days",
        points: ["Evaluation and hygiene", "Comfort checks before departure"],
    },
];

const veneerWeek = [
    { day: "Day 1", title: "Arrival & consultation", body: "Exam, scans, photos, and treatment confirmation." },
    { day: "Day 2", title: "Preparation & temporaries", body: "Prep teeth if needed; place comfortable temporaries." },
    { day: "Day 3–4", title: "Lab work / try-in", body: "Lab fabricates; possible try-in for shade/fit." },
    { day: "Day 5–6", title: "Final fitting & adjustments", body: "Seat final work, adjust bite, polish." },
    { day: "Day 7", title: "Final check & return", body: "Review care instructions and travel readiness." },
];

const implantVisits = [
    {
        visit: "Visit 1 – Implant Placement",
        stay: "2–3 days",
        bullets: ["Consultation and planning", "Surgery day with local anesthesia", "Post-op check and travel clearance"],
    },
    {
        visit: "Visit 2 – Final Teeth",
        stay: "5–7 days",
        bullets: ["Impressions or scans", "Try-in / framework checks", "Final fit and bite adjustments"],
    },
];

const healingBlocks = [
    {
        title: "First 24–48 Hours",
        body: "Mild pain or swelling is common. Use cold packs, prescribed meds, and rest. Soft foods recommended.",
    },
    {
        title: "First Week",
        body: "Sensitivity or tenderness may persist. Keep the area clean with gentle brushing and any prescribed rinses.",
    },
    {
        title: "Long-Term Healing",
        body: "Tissues and bite continue to settle. Follow review schedules and report any bite changes or pain.",
    },
];

const healingCompare = [
    {
        title: "Veneers & Crowns",
        details: ["Sensitivity for a few days", "Most feel normal within 1–2 weeks"],
    },
    {
        title: "Implants",
        details: ["Gum healing in 1–2 weeks", "Bone integration over 3–6 months"],
    },
    {
        title: "All-on-4",
        details: ["Initial adjustment to temporaries", "Refinement when final teeth are placed"],
    },
    {
        title: "Gum Treatment",
        details: ["Tenderness and slight bleeding early", "Noticeable comfort improvement in 1–2 weeks"],
    },
];

const faqItems = [
    { q: "How long will my gums be sore after treatment?", a: "Mild soreness is common for a few days. Follow rinsing and medication instructions and contact us if pain worsens." },
    { q: "When can I fly back home after implants?", a: "Most patients fly 24–48 hours after surgery; your clinician will confirm based on your case." },
    { q: "When can I eat normally again?", a: "Soft foods are advised initially. Return to normal eating as guided by your clinician and the treatment type." },
    { q: "Can I go swimming or to the gym while healing?", a: "Avoid strenuous exercise for several days after surgery. Light walking is usually fine; ask before swimming." },
];

export default function TimelinePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">How It Works</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Timeline &amp; Healing After Dental Treatment</h1>
                    <p className="text-lg text-gray-700">
                        See how long typical treatments take when you travel to Turkey and what to expect as you heal. This overview helps you plan flights, hotels, and recovery with confidence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="#summary"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            See Timelines by Treatment
                        </a>
                        <a
                            href="#sample-week"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Plan your trip days →
                        </a>
                    </div>
                </section>

                {/* Why timelines */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Why Understanding Your Timeline Is Important</h2>
                            <p className="text-gray-700">Knowing how many days you need helps you book the right flights and hotel dates.</p>
                            <p className="text-gray-700">Clear expectations reduce stress about work leave, childcare, and recovery time.</p>
                            <p className="text-gray-700">Every mouth is different—use these guides, then confirm a personalised plan before you book.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">Healing with confidence</h3>
                            <p className="text-gray-700">Understand when discomfort is normal, when to rest, and when to contact the clinic.</p>
                            <p className="text-gray-700">Set aside time for follow-up checks so your final result feels comfortable and stable.</p>
                        </div>
                    </div>
                </section>

                {/* Summary cards */}
                <section id="summary" className="space-y-6">
                    <h2 className="text-2xl font-semibold">Treatment Timelines at a Glance</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {timelineCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{card.badge}</span>
                                    <span className="text-sm font-semibold text-brand-secondary">{card.stay}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {card.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sample week */}
                <section id="sample-week" className="space-y-6">
                    <h2 className="text-2xl font-semibold">Example 7-Day Timeline for Veneers or Crowns</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <ol className="relative border-l border-teal-100 pl-5 space-y-4">
                            {veneerWeek.map((item) => (
                                <li key={item.day} className="relative pl-4">
                                    <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-teal-600" aria-hidden />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <span className="text-sm font-semibold text-teal-700">{item.day}</span>
                                        <span className="text-base font-semibold text-brand-secondary">{item.title}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-1">{item.body}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Implants two-trip */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Timeline for Dental Implants (Two Visits)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {implantVisits.map((visit) => (
                            <div key={visit.visit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-brand-secondary">{visit.visit}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{visit.stay}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {visit.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3">
                        Healing between visits typically ranges from 3–6 months so bone can integrate with the implant before the final teeth are fitted.
                    </p>
                </section>

                {/* Healing expectations */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Healing After Your Treatment – What to Expect</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {healingBlocks.map((block) => (
                            <div key={block.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                                <div className="h-10 w-10 rounded-full bg-teal-50 text-teal-700 grid place-items-center font-semibold">ℹ</div>
                                <h3 className="text-lg font-semibold text-brand-secondary">{block.title}</h3>
                                <p className="text-gray-700 text-sm">{block.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pain & comfort */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Pain, Swelling and Comfort</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Managing discomfort</h3>
                            <p className="text-gray-700 text-sm">Local anesthesia is used during procedures. Mild to moderate soreness is typical afterward; prescribed pain relief and cold packs usually help.</p>
                            <p className="text-gray-700 text-sm">Rest, avoid strenuous activity for a few days, and follow medication and rinse instructions.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-brand-secondary">Normal vs call us</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Normal: mild swelling, tenderness, small spots of blood.</li>
                                <li>Call us: severe pain, heavy bleeding, fever, or bite feels off.</li>
                                <li>Call us: swelling that worsens after day 3–4 or any numbness concerns.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 text-sm text-teal-900">
                        This page is for general information only and does not replace personal medical advice. Your clinician will give you instructions specific to your case.
                    </div>
                </section>

                {/* Eating */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">What Can You Eat While You Heal?</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Veneers / Crowns</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Soft foods for the first days.</li>
                                <li>Avoid very hard, sticky, or chewy items.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Implants</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Soft diet; do not chew on the surgical side.</li>
                                <li>Follow implant-specific rinse and hygiene guidance.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Gum treatments</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Gentle temperatures; avoid spicy or crunchy foods initially.</li>
                                <li>Use prescribed rinses as directed.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                        <h3 className="text-lg font-semibold">Activities &amp; Rest</h3>
                        <p className="text-gray-700 text-sm">Plan light walking, avoid heavy exercise for a few days, and follow clinician guidance on returning to work or sports.</p>
                    </div>
                </section>

                {/* Oral care */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">How to Look After Your Teeth While Healing</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Brushing</h3>
                            <p className="text-gray-700 text-sm">Use a soft toothbrush. Avoid brushing directly on surgical sites until cleared; keep other areas clean.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Mouthwash / rinses</h3>
                            <p className="text-gray-700 text-sm">Follow prescribed rinses; gentle warm saltwater may be advised. Avoid vigorous swishing early on.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Flossing / interdental</h3>
                            <p className="text-gray-700 text-sm">Resume flossing once tissues allow. Use interdental brushes carefully and only when approved.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Night guards</h3>
                            <p className="text-gray-700 text-sm">If you grind teeth, ask about a night guard after final restorations are placed.</p>
                        </div>
                    </div>
                </section>

                {/* Healing comparison */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Healing Timeline by Treatment Type</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {healingCompare.map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {item.details.map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Timeline &amp; Healing – Frequently Asked Questions</h2>
                    <FAQAccordion items={faqItems} />
                </section>
            </div>

            {/* CTA */}
            <section className="bg-teal-600 text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">Get a Personalised Timeline for Your Case</h2>
                            <p className="text-sm text-teal-50">Every mouth is unique. Send your photos or X-rays and we’ll confirm your exact visits, healing time, and budget.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Send Your Photos for a Free Plan
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                            >
                                Ask a Question About Healing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
