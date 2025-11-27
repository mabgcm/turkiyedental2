"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CaseIntakeForm() {
    const router = useRouter();
    const [from, setFrom] = useState<string>("/guides/legal");
    const [fileNames, setFileNames] = useState("No file chosen");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        setFrom(sp.get("from") || "/guides/legal");
    }, []);

    const onFiles: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const arr = e.target.files ? Array.from(e.target.files) : [];
        setFileNames(arr.length ? arr.map((f) => f.name).join(", ") : "No file chosen");
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setError(null);

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
        const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
        const description = (form.elements.namedItem("issue_description") as HTMLTextAreaElement)?.value.trim();
        const treatment = (form.elements.namedItem("requested_treatment") as HTMLInputElement)?.value.trim();

        if (!name) return setError("Please enter your name.");
        if (!phone) return setError("Please enter your phone number.");
        if (!treatment) return setError("Please enter the requested treatment.");
        if (!description) return setError("Please describe what went wrong.");

        setSending(true);
        try {
            const res = await fetch(form.action, { method: "POST", body: new FormData(form) });
            const data = await res.json().catch(() => ({}));
            if (res.ok && data?.ok) {
                router.push(`/thank?from=${encodeURIComponent(from)}`);
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
        <form
            action="/api/contact"
            method="post"
            encType="multipart/form-data"
            noValidate
            onSubmit={onSubmit}
            className="grid gap-4 md:grid-cols-2"
        >
            <input type="hidden" name="requested_treatment" value="Legal Support Case" />
            <input type="hidden" name="from_page" value="legal-support" />

            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Full name *</span>
                <input
                    name="name"
                    required
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Email</span>
                <input
                    name="email"
                    type="email"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Country / City</span>
                <input
                    name="location"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Phone *</span>
                <input
                    name="phone"
                    required
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <div className="md:col-span-2 space-y-2">
                <span className="text-sm font-semibold">Are you our patient?</span>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700">
                    <label className="inline-flex items-center gap-2">
                        <input type="radio" name="our_patient" value="yes" className="h-4 w-4 text-teal-600" />
                        <span>Yes, I travelled / will travel with you (free support)</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                        <input type="radio" name="our_patient" value="no" className="h-4 w-4 text-teal-600" defaultChecked />
                        <span>No, I used a different clinic in Turkey (fees may apply)</span>
                    </label>
                </div>
            </div>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Name of clinic</span>
                <input
                    name="clinic_name"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">City of clinic</span>
                <input
                    name="clinic_city"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Date of treatment</span>
                <input
                    name="treatment_date"
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    placeholder="e.g., March 2024"
                />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-semibold">Short description of what went wrong *</span>
                <textarea
                    name="issue_description"
                    rows={4}
                    required
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-semibold">Upload documents / screenshots</span>
                <input
                    type="file"
                    name="files"
                    multiple
                    onChange={onFiles}
                    className="rounded-xl border border-dashed border-brand-primary bg-brand-surface px-3 py-3 text-sm text-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    aria-label="Upload documents and screenshots"
                />
                <span className="text-xs text-gray-600">{fileNames}</span>
                <span className="text-xs text-gray-600">Attach treatment plans, invoices, messages, photos, and X-rays if available.</span>
            </label>
            {error && <div className="md:col-span-2 text-sm text-red-600">{error}</div>}
            <div className="md:col-span-2 flex flex-wrap gap-3">
                <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition disabled:opacity-60"
                >
                    {sending ? "Sending..." : "Submit my case"}
                </button>
                <a
                    href="mailto:dentalclinicturkiye@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-teal-200 text-teal-700 font-semibold hover:bg-teal-50 transition"
                >
                    Ask a general question
                </a>
            </div>
        </form>
    );
}
