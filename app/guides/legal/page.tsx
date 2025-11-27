import Link from "next/link";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";
import CaseIntakeForm from "./CaseIntakeForm";

export const metadata: Metadata = {
    title: "Legal Support & Patient Rights After Dental Treatment in Turkey",
    description: "Get guidance, mediation and legal support if you experience problems after dental treatment in Turkey. Free support for our own patients, paid services for others.",
};

const helpCards = [
    { title: "Complaint guidance", body: "How to structure your complaint and communicate with the clinic in a neutral, fact-based way." },
    { title: "Mediation & communication", body: "Support with wording and mediation to seek a respectful resolution directly with the clinic." },
    { title: "Document review", body: "Review of contracts, invoices, and messages to flag gaps and suggest next steps." },
    { title: "Formal letters", body: "Help preparing clear, professional complaints or letters." },
    { title: "Attorney referrals", body: "Introductions to licensed lawyers in Türkiye when representation is needed." },
    { title: "Patient rights education", body: "Information on patient and consumer rights pathways in Türkiye." },
];

const processSteps = [
    { title: "Submit your details and documents", body: "Share your situation, timeline, and supporting files for review." },
    { title: "We review and outline options", body: "You receive guidance on mediation, formal complaints, or legal referral." },
    { title: "If needed, connect to lawyers", body: "We can coordinate introductions to licensed attorneys in Türkiye." },
    { title: "Follow-up and next steps", body: "We keep communication open until the case is resolved or closed." },
];

const docsChecklist = [
    "Treatment plans and consent forms",
    "Invoices and proof of payments",
    "Screenshots of clinic conversations (WhatsApp/email)",
    "Before/after photos",
    "X-rays or imaging (if available)",
    "Travel dates and clinic contact details",
];

const mediationVsLegal = [
    {
        title: "Mediation",
        badge: "Often faster",
        points: ["Focus on reaching agreement with the clinic", "Lower cost and shorter timelines", "Suitable for many disputes"],
    },
    {
        title: "Legal action",
        badge: "May be required",
        points: ["For serious or unresolved cases", "Requires licensed lawyers; outcomes not guaranteed", "Longer timelines and formal processes"],
    },
];

const faqItems = [
    {
        q: "Is legal support really free for patients who travelled through you?",
        a: "Yes. If you booked and received treatment through our organisation, legal support services are free of charge.",
    },
    {
        q: "I used a different clinic in Turkey. Can I still get help?",
        a: "Yes, but services such as case review, mediation, and legal coordination may be subject to fees. Pricing is discussed after initial evaluation.",
    },
    {
        q: "Do I need to travel back to Turkey for legal matters?",
        a: "Not always. Some steps can be handled remotely, but your lawyer will advise if travel is needed based on your case.",
    },
    {
        q: "Can you represent me in court?",
        a: "We do not represent patients in court. Licensed lawyers in Türkiye handle representation; we can refer and coordinate.",
    },
    {
        q: "How long does a complaint process take?",
        a: "Timelines vary. Mediation can be faster; formal legal routes take longer and outcomes are not guaranteed.",
    },
    {
        q: "What if my documents are incomplete?",
        a: "Send what you have. More complete documentation helps us and any lawyer assess options effectively.",
    },
];

export default function LegalSupportPage() {
    return (
        <main className="bg-gray-50 text-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Hero */}
                <section className="max-w-3xl mx-auto text-center space-y-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">How It Works</p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Legal Support &amp; Patient Rights</h1>
                    <p className="text-lg text-gray-700">
                        We help international patients who experience serious issues with dental treatment in Türkiye and need guidance on next steps.
                    </p>
                    <div className="bg-teal-50 border border-teal-100 text-teal-900 rounded-xl px-4 py-3 text-sm">
                        <p className="font-semibold">Legal support is free of charge for patients who booked and received their treatment through us. For other patients, legal support services are available for an additional fee.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="#case-review"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            Request a Case Review
                        </a>
                        <a
                            href="#who"
                            className="inline-flex items-center justify-center px-4 py-3 text-teal-700 font-semibold hover:text-teal-800 transition"
                        >
                            See What We Can Help With →
                        </a>
                    </div>
                </section>

                {/* Who this is for */}
                <section id="who" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-semibold">Who Our Legal Support Is For</h2>
                    <p className="text-gray-700 text-sm">
                        We support patients facing serious concerns about their dental treatment in Türkiye, including unresolved complaints or disputes.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Dissatisfaction with outcomes or unresolved quality concerns</li>
                        <li>Complications and difficulty getting answers</li>
                        <li>Unexpected charges or warranty disputes</li>
                        <li>Communication breakdowns with the clinic</li>
                    </ul>
                    <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                        Note: This service focuses on disputes/complaints after treatment. It is not emergency medical care.
                    </div>
                </section>

                {/* Free vs paid */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Free for Our Patients, Fees for Others</h2>
                    <p className="text-gray-700 text-sm">
                        If you travelled and received treatment through us, legal support is free. Other patients can still request help, but services may be fee-based.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-brand-secondary">Patients Treated Through Us</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-teal-600 text-white">Free legal support</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Case review and guidance at no cost</li>
                                <li>Mediation and coordination included</li>
                                <li>Referrals to licensed lawyers if required</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-brand-secondary">Other Patients in Türkiye</h3>
                                <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Paid legal services</span>
                            </div>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                <li>Fee-based case review and guidance</li>
                                <li>Mediation and legal coordination may incur costs</li>
                                <li>Pricing confirmed after initial evaluation</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-xs text-gray-700">Exact pricing for non-network patients is discussed after we review your case and scope.</p>
                </section>

                {/* What we can help */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">What We Can Help You With</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {helpCards.map((card) => (
                            <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-brand-secondary">{card.title}</h3>
                                <p className="text-gray-700 text-sm">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What we do not do */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">What This Service Does Not Provide</h2>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl space-y-2">
                        <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                            <li>No guarantee of compensation or specific legal outcomes</li>
                            <li>Not a substitute for independent legal advice from your own lawyer</li>
                            <li>No public accusations or defamatory statements about clinics</li>
                            <li>No medical decisions or diagnoses—we do not provide clinical care</li>
                        </ul>
                        <p className="text-xs text-amber-900">Each case is unique; decisions rest with qualified legal authorities, lawyers, and courts.</p>
                    </div>
                </section>

                {/* Process */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">How Our Legal Support Process Works</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <ol className="relative border-l border-teal-100 pl-5 space-y-4">
                            {processSteps.map((step, idx) => (
                                <li key={step.title} className="relative pl-4">
                                    <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-teal-600" aria-hidden />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <span className="text-sm font-semibold text-teal-700">Step {idx + 1}</span>
                                        <span className="text-base font-semibold text-brand-secondary">{step.title}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-1">{step.body}</p>
                                </li>
                            ))}
                        </ol>
                        <p className="text-xs text-gray-700 mt-4">
                            Free vs paid pathways depend on whether you received treatment through us (free) or independently at another clinic (fees may apply).
                        </p>
                    </div>
                </section>

                {/* Documents */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">What Documents Help Us Help You</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <ul className="space-y-2">
                            {docsChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white text-xs">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Patient rights overview */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-semibold">General Information About Patient Rights in Turkey</h2>
                    <p className="text-gray-700 text-sm">Patients have the right to clear information and informed consent.</p>
                    <p className="text-gray-700 text-sm">Consumer and patient protection pathways exist; disputes can be raised through formal channels.</p>
                    <p className="text-gray-700 text-sm">This is general information, not formal legal advice; consult a licensed lawyer for legal guidance.</p>
                </section>

                {/* Mediation vs legal */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Mediation or Legal Action: What Is Right for You?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {mediationVsLegal.map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-brand-secondary">{item.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{item.badge}</span>
                                </div>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {item.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-700">Patients treated through us may receive free mediation support; external patients may pay fees based on scope.</p>
                </section>

                {/* Confidentiality */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-3">
                    <h2 className="text-2xl font-semibold">Confidentiality and Privacy</h2>
                    <p className="text-gray-700 text-sm">Information and documents are treated confidentially and used only to evaluate and handle the case.</p>
                    <p className="text-gray-700 text-sm">Nothing is shared without explicit consent, except where required by law.</p>
                </section>

                {/* FAQ */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Legal Support – Frequently Asked Questions</h2>
                    <FAQAccordion items={faqItems} />
                    <p className="text-xs text-gray-700">
                        Reminder: Free for patients treated through us; fee-based for others. This page is informational, not legal advice.
                    </p>
                </section>

                {/* CTA + Form */}
                <section id="case-review" className="space-y-8">
                    <div className="bg-teal-600 text-white rounded-2xl shadow-sm p-6 md:p-8 space-y-3">
                        <h2 className="text-2xl font-semibold">Request a Case Review</h2>
                        <p className="text-sm text-teal-50">
                            Send details and documents so we can evaluate if your case qualifies for free support (if treated through us) or a paid service (for others).
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#intake-form"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-teal-700 font-semibold hover:bg-teal-50 transition"
                            >
                                Start My Case Review
                            </a>
                            <a
                                href="mailto:dentalclinicturkiye@gmail.com"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white font-semibold hover:text-teal-50 transition"
                            >
                                Ask a General Question
                            </a>
                        </div>
                    </div>

                    <div id="intake-form" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
                        <h3 className="text-xl font-semibold text-brand-secondary">Case Intake Form</h3>
                        <CaseIntakeForm />
                        <p className="text-xs text-gray-700">
                            Reminder: Free for patients treated through us; fees may apply for others. We provide guidance, not guaranteed legal outcomes.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
