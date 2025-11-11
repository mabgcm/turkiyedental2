// app/about/page.tsx
import SectionHeader from "@/components/SectionHeader";

// (Optional) SEO for this page
export const metadata = {
    title: "About – TürkiyeDental",
    description:
        "TürkiyeDental provides clinic-independent guidance, education, and second opinions to help patients make confident dental decisions.",
};

export default function AboutPage() {
    const headerData = {
        title: "About TürkiyeDental",
        subtitle:
            "We’re not a clinic. We’re your clinic-independent dental guidance partner—offering education, honest advice, and second opinions from trusted clinicians in Türkiye and abroad.",
        highlight: "TürkiyeDental",
        subtitleColor: "text-[#000]",
        variant: "page" as const,
        align: "center" as const,
    };

    return (
        <main className="max-w-5xl mx-auto px-4 py-16">
            {/* PAGE HEADER */}
            <SectionHeader {...headerData} />

            {/* BODY CONTENT */}
            <section className="space-y-10 text-gray-700">
                {/* Who we are */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Who We Are</h2>
                    <p className="leading-relaxed">
                        TürkiyeDental helps patients navigate dental decisions with clarity and confidence.
                        We review cases, explain options in plain language, and help you request qualified
                        second opinions—without clinic bias or pressure tactics.
                    </p>
                </div>

                {/* What we do */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-3">What We Do</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Explain treatment choices (e.g., implants vs. bridges vs. crowns)</li>
                        <li>Review quotes and treatment plans for clarity and fairness</li>
                        <li>Offer second opinions from trusted clinicians (Türkiye & abroad)</li>
                        <li>Share educational resources to help you decide with confidence</li>
                    </ul>
                </div>

                {/* Why independence matters */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-3">Why Independence Matters</h2>
                    <p className="leading-relaxed">
                        Guidance is most valuable when it’s free from sales goals. Our mission is to
                        protect your interests—by prioritizing long-term oral health, realistic timelines,
                        and transparent costs.
                    </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#3FB8FF] to-[#21CDC0] text-white">
                    <h3 className="text-xl md:text-2xl font-semibold">Get a Free Second Opinion</h3>
                    <p className="mt-2 opacity-90">
                        Share your case and files; we’ll respond with an unbiased overview of options.
                    </p>
                    <a
                        href="/start?from=/about"
                        className="inline-block mt-4 bg-white text-[#1E3A8A] px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Start the Form
                    </a>
                </div>
            </section>
        </main>
    );
}