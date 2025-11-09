// app/thank/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ThankPage() {
    const router = useRouter();
    const search = useSearchParams();
    const from = useMemo(() => search.get("from") || "/", [search]);

    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
        const go = setTimeout(() => router.replace(from), 5000);
        return () => {
            clearInterval(t);
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
                You’ll be returned to where you came from in <strong>{seconds}</strong> seconds.
            </p>
            <p className="mt-4">
                <Link href={from} className="text-[#3FB8FF] hover:underline">Go back now</Link>
            </p>
        </main>
    );
}