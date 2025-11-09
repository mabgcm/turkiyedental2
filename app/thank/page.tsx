// app/thank/page.tsx
"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankPage() {
    const router = useRouter();
    const [from, setFrom] = useState<string>("/");
    const [seconds, setSeconds] = useState(5);

    // Read ?from= on the client (no useSearchParams)
    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        setFrom(sp.get("from") || "/");
    }, []);

    // Countdown + auto-redirect after 5s
    useEffect(() => {
        const tick = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
        const go = setTimeout(() => router.replace(from), 5000);
        return () => {
            clearInterval(tick);
            clearTimeout(go);
        };
    }, [from, router]);

    return (
        <main className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-[#2B3A55]">Thank you!</h1>
            <p className="text-gray-700 mt-3">
                We’ve received your request. Our clinicians will review your details and follow up with an unbiased second opinion.
            </p>

            <p className="text-gray-500 mt-6">
                Returning you to your previous page in <strong>{seconds}</strong> seconds…
            </p>
            <p className="mt-4">
                <Link href={from} className="text-[#3FB8FF] hover:underline">Go back now</Link>
            </p>
        </main>
    );
}