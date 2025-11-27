import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel Guide for Dental Treatment in Turkey | Flights, Stay & Timeline",
    description: "Plan your trip for dental treatment in Turkey with guidance on flights, accommodation, treatment duration, safety, transportation and travel tips for international patients.",
};

const destinations = [
    {
        city: "Antalya",
        desc: "Beachfront resorts, medical tourism infrastructure, and clinics familiar with international patients.",
        airport: "Antalya Airport (AYT)",
        bullets: ["Resort areas close to clinics", "Transfer services common", "Plenty of hotel options"],
    },
    {
        city: "Istanbul",
        desc: "Historic sites plus a large network of clinics and labs for complex restorative cases.",
        airport: "Istanbul Airport (IST) or Sabiha Gökçen (SAW)",
        bullets: ["Many direct flights", "Wide hotel range by district", "Easy metro/taxi access"],
    },
    {
        city: "Izmir",
        desc: "Coastal city with calmer pace, experienced clinicians, and nearby resorts.",
        airport: "Izmir Adnan Menderes (ADB)",
        bullets: ["Short rides to city center", "Popular for combined beach stays", "Good ferry/rail links"],
    },
];

const stayCards = [
    {
        title: "Veneers / Crowns",
        badge: "5–7 days",
        points: ["Consult & prep early in the week", "Fitting and adjustments before departure"],
    },
    {
        title: "Implants (single/multiple)",
        badge: "Two visits",
        points: ["Visit 1: 2–3 days for surgery", "Visit 2: 5–7 days for crowns after healing"],
    },
    {
        title: "All-on-4 / Full mouth",
        badge: "7–10 days",
        points: ["Surgery + immediate temps", "Follow-ups and bite checks included"],
    },
    {
        title: "Gum treatment / Whitening",
        badge: "2–4 days",
        points: ["Evaluation and hygiene", "Optional review visit before leaving"],
    },
];

const faqItems = [
    {
        q: "How many days should I stay in Turkey for dental work?",
        a: "Stay depends on treatment. Veneers/crowns often need a week; implants usually need two visits; minor care can be shorter. We’ll confirm after reviewing your case.",
    },
    {
        q: "Can I fly soon after dental implants?",
        a: "Most patients can fly 24–48 hours after surgery, but follow your clinician’s specific advice. Avoid strenuous activity and plan soft foods.",
    },
    {
        q: "Is it safe to travel alone for treatment?",
        a: "Many patients do. Choose central, reputable areas, use trusted transport, and keep your clinic contact handy.",
    },
    {
        q: "Do you help with hotel bookings?",
        a: "We can suggest areas or partner hotels; you’re free to book what fits your budget and schedule.",
    },
];

const steps = [
    { title: "Arrival & consultation", body: "Meet the clinician, review your plan, confirm health history, and take any new scans." },
    { title: "Preparation / treatment days", body: "Procedures like prep, surgery, impressions, or scans happen early to allow checks before you leave." },
    { title: "Follow-up appointment", body: "Fit crowns/veneers or check healing. Adjust bite and provide care instructions." },
    { title: "Free time for sightseeing", body: "Light activities between visits—pace yourself and follow the eating/medication guidance provided." },
];

const checklist = [
    "Passport, visa (if required), and travel insurance details",
    "Clinic contact info, appointment confirmations, and hotel address",
    "Comfortable clothes, layers, and a small travel pillow",
    "Soft foods and snacks (soups, yogurt, smoothies) post-treatment",
    "Mild painkillers (per advice), lip balm, and a refillable water bottle",
    "Toothbrush, mouthwash, and any prescribed rinses",
    "Phone charger, adapters, and offline maps",
];

export default function TravelGuidePage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="space-y-6">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">How It Works</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Travel Guide for Dental Treatment in Turkey</h1>
                    <p className="text-lg text-gray-700">
                        Many patients visit from the USA, Canada, UK, and Europe. This guide makes planning easy so you can focus on your smile and feel prepared before you fly.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#cta"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Get Your Treatment Plan First
                        </a>
                        <a
                            href="#duration"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            Learn how long you should stay →
                        </a>
                    </div>
                </section>

                {/* Why Planning */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Why Planning Your Dental Trip Matters</h2>
                            <p className="text-gray-700">Your treatment type decides how long you stay, when to book flights, and what to budget for.</p>
                            <p className="text-gray-700">A clear plan prevents rushed bookings, reduces downtime, and ensures you have enough days for fittings, healing checks, and adjustments.</p>
                            <p className="text-gray-700">Get your treatment plan or quote first—then choose dates that align with clinical timelines.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-brand-secondary">Travel + treatment go together</h3>
                            <p className="text-gray-700">Flights, hotel location, and length of stay should follow the clinical schedule, not the other way around.</p>
                            <p className="text-gray-700">We’ll guide you on which days are critical for appointments versus when you can plan free time.</p>
                        </div>
                    </div>
                </section>

                {/* Cities */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Where Our Patients Travel in Turkey</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {destinations.map((city) => (
                            <div key={city.city} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-lg font-semibold">{city.city}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{city.airport}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{city.desc}</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {city.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Flights */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Flights, Arrival and Entry</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">From USA &amp; Canada</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Typical flight durations: ~10–14 hours with one stop.</li>
                                <li>Common hubs: London, Frankfurt, Amsterdam, or direct to IST in some cases.</li>
                                <li>Seasonal prices rise in summer—plan early if dates are fixed.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">From UK &amp; Europe</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Typical flight durations: ~3–5 hours.</li>
                                <li>Frequent direct flights to Antalya, Istanbul, and Izmir.</li>
                                <li>Shoulder seasons often have better fares and fewer crowds.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-900">
                        <p className="font-semibold">Passport &amp; visa</p>
                        <p>Always check the official government website for the latest entry rules and visa requirements before you travel.</p>
                    </div>
                </section>

                {/* Duration */}
                <section id="duration" className="space-y-6">
                    <h2 className="text-2xl font-semibold">How Long Should You Stay for Dental Treatment?</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {stayCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-600 text-white">{card.badge}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {card.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">What Your Trip Will Look Like Day by Day</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
                        <ol className="space-y-4">
                            {steps.map((step, idx) => (
                                <li key={step.title} className="flex gap-4">
                                    <div className="flex-none h-10 w-10 rounded-full bg-teal-600 text-white font-semibold grid place-items-center">
                                        {idx + 1}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">{step.title}</h3>
                                        <p className="text-gray-700 text-sm">{step.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Accommodation */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Where to Stay and How to Get Around</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">Accommodation</h3>
                            <p className="text-gray-700 text-sm">Choose hotels or serviced apartments close to the clinic for easy transfers and rest between visits.</p>
                            <p className="text-gray-700 text-sm">Budget, mid-range, and boutique options exist in all three cities; proximity often matters more than star rating.</p>
                            <p className="text-xs text-teal-900 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2">Clinics can suggest nearby hotels if you want quick access for early or late appointments.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-3">
                            <h3 className="text-lg font-semibold">Local transport</h3>
                            <p className="text-gray-700 text-sm">Taxis and ride apps are widely available; many clinics offer airport or hotel transfers.</p>
                            <p className="text-gray-700 text-sm">Plan for light walking; use metro/tram in Istanbul where it suits your route.</p>
                            <p className="text-gray-700 text-sm">Confirm pickup points and timing for treatment days to avoid delays.</p>
                        </div>
                    </div>
                </section>

                {/* Safety */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Safety, Hygiene and Comfort</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Clinic hygiene</h3>
                            <p className="text-gray-700 text-sm">Modern sterilisation, disposables, and infection control protocols are standard—ask to see policies if you wish.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">English-speaking team</h3>
                            <p className="text-gray-700 text-sm">Coordinators and clinicians communicate in English; written instructions are provided for aftercare.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Materials &amp; standards</h3>
                            <p className="text-gray-700 text-sm">Clinics use internationally recognised materials and labs; your plan will list brands and warranty terms.</p>
                        </div>
                    </div>
                </section>

                {/* Packing */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">What to Pack for Your Dental Trip</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
                        <ul className="space-y-2">
                            {checklist.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Food & activities */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Food, Activities and Free Time</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold">Eating during treatment</h3>
                            <p className="text-gray-700 text-sm">Soft foods after implants; expect temporary sensitivity after veneers/crowns. Avoid very hot or hard foods until cleared.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                            <h3 className="text-lg font-semibold">Activities & tourism</h3>
                            <p className="text-gray-700 text-sm">Light sightseeing fits between appointments—Antalya beaches, Istanbul’s historic sites, or Izmir’s seaside promenades.</p>
                        </div>
                    </div>
                </section>

                {/* After return */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">After You Return Home</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                        <p className="text-gray-700 text-sm">Expect online follow-ups for healing checks. Contact the clinic if you notice pain, swelling, or bite changes.</p>
                        <p className="text-gray-700 text-sm">Review warranty and aftercare guidelines; keep records of medications and instructions handy.</p>
                        <p className="text-gray-700 text-sm">
                            Read more in{" "}
                            <Link href="/guides/warranty" className="text-teal-700 underline">
                                Warranty &amp; Aftercare
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Frequently Asked Questions About Traveling for Dental Treatment</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y">
                        {faqItems.map((item, idx) => (
                            <details key={item.q} className="group" {...(idx === 0 ? { open: true } : {})}>
                                <summary className="p-4 flex items-center justify-between cursor-pointer select-none">
                                    <span className="font-semibold text-brand-secondary">{item.q}</span>
                                    <span className="text-xl text-teal-700 transition group-open:rotate-90">+</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-gray-700">{item.a}</div>
                            </details>
                        ))}
                    </div>
                </section>
            </div>

            {/* CTA */}
            <section id="cta" className="bg-teal-50 border-t border-teal-100 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-brand-secondary">Plan Your Trip with a Personalised Treatment Plan</h2>
                            <p className="text-gray-700 text-sm">Send photos or X-rays first. We’ll outline your timeline, visits, and budget before you book flights.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/upload"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Get Your Free Treatment Plan
                            </Link>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-teal-700 font-semibold hover:text-teal-800 transition"
                            >
                                Ask us about dates and availability
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
