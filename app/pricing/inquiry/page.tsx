import { Suspense } from "react";
import InquiryFormClient from "./InquiryFormClient";

export default function PricingInquiryPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-[#2B3A55]">Pack Purchase Inquiry</h1>
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mt-2">
                    Tell us which pack you want and how to reach you. We’ll confirm details, timelines, and next steps.
                </p>
            </header>

            <Suspense fallback={<div className="text-gray-600">Loading form...</div>}>
                <InquiryFormClient />
            </Suspense>
        </main>
    );
}
