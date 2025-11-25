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
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
            <header className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-[0.12em] text-brand-muted">Reviews</p>
                    <h1 className="text-3xl font-bold text-brand-secondary">Clinics &amp; Reviews</h1>
                    <p className="text-sm text-gray-600">
                        Explore clinics, read patient feedback, and share your experience.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-brand-secondary">
                    <span className="inline-flex items-center gap-2 bg-brand-surface px-3 py-2 rounded-full border border-gray-200">
                        <span className="text-lg">⭐</span>
                        <strong className="text-base">{globalAvg.toFixed(1)} / 5</strong>
                        <span className="text-gray-600">Global average</span>
                    </span>
                    <span className="inline-flex items-center gap-2 bg-brand-surface px-3 py-2 rounded-full border border-gray-200">
                        <span className="text-lg">📝</span>
                        <strong className="text-base">{totalReviews}</strong>
                        <span className="text-gray-600">{totalReviews === 1 ? "review" : "reviews"}</span>
                    </span>
                </div>
            </header>

            {clinics.length === 0 && (
                <p className="text-center text-gray-600">No clinics have been added yet.</p>
            )}

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {clinics.map((clinic) => {
                    const s = stats[clinic.id] ?? { avgOverall: 0, reviewCount: 0 };
                    return (
                        <article
                            key={clinic.id}
                            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <h2 className="text-lg font-semibold text-brand-secondary">{clinic.name}</h2>
                                    <p className="text-sm text-gray-600">
                                        {clinic.city}{clinic.city && clinic.country ? ", " : ""}{clinic.country}
                                    </p>
                                </div>
                                <div className="text-right text-sm text-brand-secondary">
                                    <p className="font-semibold">{s.avgOverall.toFixed(1)} / 5</p>
                                    <p className="text-gray-600">
                                        {s.reviewCount > 0 ? `Based on ${s.reviewCount} reviews` : "0 reviews yet"}
                                    </p>
                                </div>
                            </div>

                            <Link
                                href={`/reviews/${clinic.slug}`}
                                className="inline-flex w-fit items-center justify-center rounded-xl bg-brand-primary text-white px-4 py-2 font-medium hover:bg-brand-primary-dark transition-colors"
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
