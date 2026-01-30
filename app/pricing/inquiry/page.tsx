"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const packOptions = [
    "Second Opinion Service",
    "Clinic Insight Report",
    "Personalized Treatment Portfolio",
    "Legal Guidance & Mediation",
];

export default function PricingInquiryPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [pack, setPack] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        const fromQuery = (searchParams.get("pack") || "").trim();
        if (fromQuery) {
            setPack(fromQuery);
        }
    }, [searchParams]);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setError(null);

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
        const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
        const requestedTreatment = (form.elements.namedItem("requested_treatment") as HTMLSelectElement)?.value.trim();

        if (!name) return setError("Please enter your name.");
        if (!phone) return setError("Please enter your phone number.");
        if (!requestedTreatment) return setError("Please select a pack.");

        setSending(true);
        try {
            const res = await fetch(form.action, { method: "POST", body: new FormData(form) });
            const data = await res.json().catch(() => ({}));
            if (res.ok && data?.ok) {
                router.push("/thank?from=/pricing/inquiry");
            } else {
                setError(data?.error || "Unable to send. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setError("Server error. Please try again later.");
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-[#2B3A55]">Pack Purchase Inquiry</h1>
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mt-2">
                    Tell us which pack you want and how to reach you. We’ll confirm details, timelines, and next steps.
                </p>
            </header>

            <section className="bg-white border border-gray-200/80 shadow-sm rounded-2xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#3FB8FF] via-[#21CDC0] to-[#3FB8FF]" />

                <form
                    action="/api/contact"
                    method="post"
                    noValidate
                    onSubmit={onSubmit}
                    className="p-6 md:p-8 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</label>
                            <input id="name" name="name" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</label>
                            <input id="phone" name="phone" required className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="requested-treatment" className="text-sm font-medium text-gray-700">Pack Selection *</label>
                            <select
                                id="requested-treatment"
                                name="requested_treatment"
                                required
                                value={pack}
                                onChange={(e) => setPack(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]"
                            >
                                <option value="" disabled>Select a pack…</option>
                                {packOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="notes" className="text-sm font-medium text-gray-700">Notes (optional)</label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={4}
                            placeholder="Tell us about your goals, timing, or any details we should know."
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FB8FF]"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="submit"
                            disabled={sending}
                            className="inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#1BB5A9] transition disabled:opacity-60"
                        >
                            {sending ? "Sending..." : "Send Inquiry"}
                        </button>
                        <a
                            href="mailto:dentalclinicturkiye@gmail.com"
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                        >
                            Prefer email? Contact us
                        </a>
                    </div>
                </form>
            </section>
        </main>
    );
}
