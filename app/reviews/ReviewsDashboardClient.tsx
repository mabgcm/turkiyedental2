"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { getApprovedReviewsByClinic } from "@/lib/reviewService";
import { auth } from "@/lib/firebase";
import { type Clinic, type Review } from "@/types/review";
import ReviewForm from "@/components/reviews/ReviewForm";

type Props = {
    clinics: Clinic[];
};

type ClinicStats = {
    avgOverall: number;
    reviewCount: number;
    avgHygiene: number;
    avgCommunication: number;
    avgTransparency: number;
    avgTreatmentQuality: number;
    avgStaffAttitude: number;
};

export default function ReviewsDashboardClient({ clinics }: Props) {
    const [activeCity, setActiveCity] = useState<string>("All");
    const [openClinicId, setOpenClinicId] = useState<string | null>(null);
    const [reviewsMap, setReviewsMap] = useState<Record<string, Review[]>>({});
    const [statsReady, setStatsReady] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [modalClinic, setModalClinic] = useState<Clinic | null>(null);

    const renderBar = (label: string, value: number) => {
        const percent = Math.max(0, Math.min(5, value)) / 5 * 100;
        return (
            <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-brand-secondary">
                    <span>{label}</span>
                    <span>{value.toFixed(1)}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className="h-full bg-amber-400"
                        style={{ width: `${percent}%` }}
                    />
                </div>
            </div>
        );
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (current) => setUser(current));
        return () => unsub();
    }, []);

    const handleWriteReview = async (clinic: Clinic) => {
        if (!user) {
            try {
                await signInWithPopup(auth, new GoogleAuthProvider());
            } catch (err) {
                console.error("[ReviewsDashboard] Sign-in failed:", err);
            }
            return;
        }
        setModalClinic(clinic);
    };

    const cities = useMemo(() => {
        const unique = Array.from(new Set(clinics.map((c) => c.city).filter(Boolean)));
        return ["All", ...unique];
    }, [clinics]);

    const clinicsByCity = useMemo(() => {
        if (activeCity === "All") return clinics;
        return clinics.filter((c) => c.city === activeCity);
    }, [activeCity, clinics]);

    const cityCounts = useMemo(() => {
        const map: Record<string, number> = { All: clinics.length };
        clinics.forEach((clinic) => {
            if (!clinic.city) return;
            map[clinic.city] = (map[clinic.city] || 0) + 1;
        });
        return map;
    }, [clinics]);

    useEffect(() => {
        let cancelled = false;
        const loadAll = async () => {
            setStatsReady(false);
            const nextReviews: Record<string, Review[]> = {};
            await Promise.all(
                clinics.map(async (clinic) => {
                    try {
                        const approved = await getApprovedReviewsByClinic(clinic.id);
                        nextReviews[clinic.id] = approved;
                    } catch (err) {
                        console.error("[ReviewsDashboard] Failed to load reviews for clinic", clinic.id, err);
                        nextReviews[clinic.id] = [];
                    }
                }),
            );
            if (!cancelled) {
                setReviewsMap(nextReviews);
                setStatsReady(true);
            }
        };
        if (clinics.length > 0) {
            loadAll();
        }
        return () => { cancelled = true; };
    }, [clinics]);

    const statsMap: Record<string, ClinicStats> = useMemo(() => {
        const result: Record<string, ClinicStats> = {};
        clinics.forEach((clinic) => {
            const reviews = reviewsMap[clinic.id] || [];
            const count = reviews.length;
            const sums = reviews.reduce(
                (acc, r) => {
                    acc.overall += r.ratings.overall;
                    acc.hygiene += r.ratings.hygiene;
                    acc.communication += r.ratings.communication;
                    acc.transparency += r.ratings.transparency;
                    acc.treatmentQuality += r.ratings.treatmentQuality;
                    acc.staffAttitude += r.ratings.staffAttitude;
                    return acc;
                },
                {
                    overall: 0,
                    hygiene: 0,
                    communication: 0,
                    transparency: 0,
                    treatmentQuality: 0,
                    staffAttitude: 0,
                },
            );
            result[clinic.id] = {
                avgOverall: count ? sums.overall / count : 0,
                reviewCount: count,
                avgHygiene: count ? sums.hygiene / count : 0,
                avgCommunication: count ? sums.communication / count : 0,
                avgTransparency: count ? sums.transparency / count : 0,
                avgTreatmentQuality: count ? sums.treatmentQuality / count : 0,
                avgStaffAttitude: count ? sums.staffAttitude / count : 0,
            };
        });
        return result;
    }, [clinics, reviewsMap]);

    return (
        <div className="min-h-screen bg-brand-surface text-brand-secondary">
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
                <header className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.12em] text-brand-muted">Reviews</p>
                    <h1 className="text-3xl font-bold text-brand-secondary">Clinic Reviews</h1>
                    <p className="text-sm text-gray-600">Browse clinics and read patient feedback by city.</p>
                </header>

                <nav className="flex items-center gap-3 overflow-x-auto bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-sm">
                    {cities.map((city) => {
                        const active = activeCity === city;
                        const count = cityCounts[city] ?? 0;
                        return (
                            <button
                                key={city}
                                onClick={() => setActiveCity(city)}
                                className={[
                                    "text-sm flex items-center gap-2 px-3 py-1.5 rounded-full transition border",
                                    active
                                        ? "text-brand-secondary bg-brand-ring/60 border-brand-primary/60"
                                        : "text-gray-600 bg-transparent border-transparent hover:bg-brand-surface",
                                ].join(" ")}
                            >
                                <span>{city}</span>
                                <span className="inline-flex items-center justify-center h-6 px-2 text-xs rounded-full bg-brand-surface text-brand-secondary">
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                <section className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200 shadow-sm">
                    {clinicsByCity.length === 0 && (
                        <div className="px-4 py-6 text-sm text-gray-600">No clinics found for this city.</div>
                    )}
                    {clinicsByCity.map((clinic) => {
                        const stat = statsMap[clinic.id] ?? {
                            avgOverall: 0,
                            reviewCount: 0,
                            avgHygiene: 0,
                            avgCommunication: 0,
                            avgTransparency: 0,
                            avgTreatmentQuality: 0,
                            avgStaffAttitude: 0,
                        };
                        const isOpen = openClinicId === clinic.id;
                        const reviews = reviewsMap[clinic.id] ?? [];
                        return (
                            <div key={clinic.id} className="flex flex-col">
                                <button
                                    type="button"
                                    onClick={() => setOpenClinicId((prev) => (prev === clinic.id ? null : clinic.id))}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-brand-surface transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-full bg-brand-surface text-brand-secondary flex items-center justify-center text-sm font-semibold border border-gray-200">
                                            {clinic.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-brand-secondary">{clinic.name}</p>
                                            <p className="text-xs text-gray-600">
                                                {clinic.city}{clinic.city && clinic.country ? ", " : ""}{clinic.country}
                                            </p>
                                            <div className="flex flex-wrap gap-1 mt-1 text-[11px]">
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                                                    ⭐ {stat.avgOverall.toFixed(1)}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                                                    Hygiene: {stat.reviewCount > 0 ? stat.avgHygiene.toFixed(1) : "–"}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                                                    Comm: {stat.reviewCount > 0 ? stat.avgCommunication.toFixed(1) : "–"}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                                                    Transparency: {stat.reviewCount > 0 ? stat.avgTransparency.toFixed(1) : "–"}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                                                    Quality: {stat.reviewCount > 0 ? stat.avgTreatmentQuality.toFixed(1) : "–"}
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                                                    Staff: {stat.reviewCount > 0 ? stat.avgStaffAttitude.toFixed(1) : "–"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-brand-secondary">
                                        <p className="font-semibold">
                                            {statsReady ? `${stat.avgOverall.toFixed(1)} / 5` : "…"}
                                        </p>
                                        <p className="text-gray-600">
                                            {statsReady
                                                ? (stat.reviewCount > 0 ? `${stat.reviewCount} reviews` : "No reviews")
                                                : "Loading scores..."}
                                        </p>
                                    </div>
                                </button>
                                {isOpen && (
                                    <div className="bg-brand-surface px-6 pb-4 pt-2 border-t border-gray-200">
                                        {!reviews.length && (
                                            <p className="text-sm text-gray-600">No approved reviews for this clinic.</p>
                                        )}
                                        {!!reviews.length && (
                                            <div className="space-y-3">
                                                {reviews.map((review) => (
                                                    <div
                                                        key={review.id}
                                                        className="rounded-xl border border-gray-200 bg-white p-3 space-y-3 shadow-sm"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-sm font-semibold text-brand-secondary">
                                                                {review.title}
                                                            </p>
                                                            <span className="text-xs text-gray-700">
                                                                ⭐ {review.ratings.overall.toFixed(1)} / 5
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-500">
                                                            {review.countryOfPatient} • {review.visitDate.toDate().toLocaleDateString()}
                                                        </p>
                                                        <p className="text-sm text-gray-700 leading-relaxed">
                                                            {review.text}
                                                        </p>
                                                        <div className="grid sm:grid-cols-2 gap-3 text-xs">
                                                            {renderBar("Hygiene", review.ratings.hygiene)}
                                                            {renderBar("Communication", review.ratings.communication)}
                                                            {renderBar("Transparency", review.ratings.transparency)}
                                                            {renderBar("Treatment quality", review.ratings.treatmentQuality)}
                                                            {renderBar("Staff attitude", review.ratings.staffAttitude)}
                                                            {renderBar("Overall", review.ratings.overall)}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mt-3">
                                            <button
                                                type="button"
                                                onClick={() => handleWriteReview(clinic)}
                                                className="inline-flex items-center gap-2 text-xs text-brand-secondary hover:text-brand-secondaryDark"
                                            >
                                                {user ? "Write a review →" : "Login to write a review →"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </section>
            </div>

            {modalClinic && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => setModalClinic(null)}
                            className="absolute top-3 right-3 text-sm text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <div className="mb-4">
                            <p className="text-xs uppercase tracking-[0.12em] text-brand-muted">Write a review</p>
                            <h3 className="text-xl font-semibold text-brand-secondary">{modalClinic.name}</h3>
                            <p className="text-sm text-gray-600">
                                {modalClinic.city}{modalClinic.city && modalClinic.country ? ", " : ""}{modalClinic.country}
                            </p>
                        </div>
                        <ReviewForm clinicId={modalClinic.id} onSubmitted={() => setModalClinic(null)} />
                    </div>
                </div>
            )}
        </div>
    );
}
