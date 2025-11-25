"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getApprovedReviewsByClinic } from "@/lib/reviewService";
import { type Clinic } from "@/types/review";

type ClinicListItem = Pick<Clinic, "id" | "name" | "slug" | "city" | "country">;

type Stats = {
    avgOverall: number;
    reviewCount: number;
};

type Props = {
    clinics: ClinicListItem[];
};

export default function ClinicListClient({ clinics }: Props) {
    const [stats, setStats] = useState<Record<string, Stats>>({});

    const { globalAvg, totalReviews } = useMemo(() => {
        const values = Object.values(stats);
        const total = values.reduce((count, item) => count + item.reviewCount, 0);
        const sum = values.reduce((acc, item) => acc + item.avgOverall * item.reviewCount, 0);
        const avg = total > 0 ? sum / total : 0;
        return { globalAvg: avg, totalReviews: total };
    }, [stats]);

    useEffect(() => {
        let cancelled = false;
        const loadStats = async () => {
            const entries: [string, Stats][] = [];
            for (const clinic of clinics) {
                try {
                    const reviews = await getApprovedReviewsByClinic(clinic.id);
                    const reviewCount = reviews.length;
                    if (reviewCount === 0) {
                        entries.push([clinic.id, { avgOverall: 0, reviewCount: 0 }]);
                        continue;
                    }
                    const sum = reviews.reduce((acc, r) => acc + r.ratings.overall, 0);
                    const avgOverall = sum / reviewCount;
                    entries.push([clinic.id, { avgOverall, reviewCount }]);
                } catch (err) {
                    console.error("[ReviewsList] Failed to load stats for clinic", clinic.id, err);
                    entries.push([clinic.id, { avgOverall: 0, reviewCount: 0 }]);
                }
            }
            if (!cancelled) {
                const map: Record<string, Stats> = {};
                entries.forEach(([id, value]) => { map[id] = value; });
                setStats(map);
            }
        };

        if (clinics.length > 0) {
            loadStats();
        }

        return () => { cancelled = true; };
    }, [clinics]);

    return (
        <main className="max-w-5xl mx-auto p-6 space-y-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold">Clinics &amp; Reviews</h1>
                <p className="text-gray-700 text-sm">Browse clinics and read patient feedback.</p>
                <p className="text-sm text-gray-800">
                    ⭐ {globalAvg.toFixed(1)} / 5 · {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
                </p>
            </header>

            {clinics.length === 0 && <p>No clinics have been added yet.</p>}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {clinics.map((clinic) => {
                    const s = stats[clinic.id] ?? { avgOverall: 0, reviewCount: 0 };
                    return (
                        <article key={clinic.id} className="border rounded p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold">{clinic.name}</h2>
                                    <p className="text-sm text-gray-700">
                                        {clinic.city}{clinic.city && clinic.country ? ", " : ""}{clinic.country}
                                    </p>
                                </div>
                                <div className="text-right text-sm text-gray-700">
                                    <p>{`${s.avgOverall.toFixed(1)} / 5`}</p>
                                    <p>{s.reviewCount > 0 ? `Based on ${s.reviewCount} reviews` : "0 reviews yet"}</p>
                                </div>
                            </div>
                            <Link
                                href={`/reviews/${clinic.slug}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                View reviews
                            </Link>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}
