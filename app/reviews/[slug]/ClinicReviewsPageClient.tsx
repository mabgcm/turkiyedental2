"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewList from "@/components/reviews/ReviewList";
import { db } from "@/lib/firebase";
import { getApprovedReviewsByClinic } from "@/lib/reviewService";
import { type Clinic, type Review } from "@/types/review";

type ClinicDoc = Clinic & {
    avgRating?: number | null;
    reviewCount?: number | null;
};

type Props = {
    slug: string;
};

export default function ClinicReviewsPageClient({ slug }: Props) {
    const [clinic, setClinic] = useState<ClinicDoc | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();

    const effectiveSlug = useMemo(() => {
        if (slug) return slug;
        const fromParams = params?.slug;
        if (typeof fromParams === "string") return fromParams;
        if (Array.isArray(fromParams) && fromParams.length > 0) return fromParams[0];
        return "";
    }, [params, slug]);

    const reviewCount = reviews.length;
    const avgOverall = reviewCount
        ? reviews.reduce((sum, r) => sum + (r.ratings?.overall ?? 0), 0) / reviewCount
        : 0;

    useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            if (!effectiveSlug || typeof effectiveSlug !== "string") {
                setError("Invalid clinic slug.");
                setClinic(null);
                setReviews([]);
                setLoading(false);
                return;
            }

            let clinicId: string | null = null;

            // 1) Load clinic (controls error state)
            try {
                const clinicRef = doc(db, "clinics", effectiveSlug);
                const snap = await getDoc(clinicRef);
                if (!snap.exists()) {
                    if (!cancelled) {
                        setError("Clinic not found.");
                        setClinic(null);
                        setReviews([]);
                        setLoading(false);
                    }
                    return;
                }

                const clinicData: ClinicDoc = {
                    id: snap.id,
                    ...(snap.data() as Omit<Clinic, "id">),
                };
                clinicId = snap.id;

                if (!cancelled) {
                    setClinic(clinicData);
                }
            } catch (err) {
                console.error("Error loading clinic:", err);
                if (!cancelled) {
                    setError("Failed to load clinic.");
                    setLoading(false);
                }
                return;
            }

            // 2) Load reviews (errors here should not block clinic display)
            try {
                if (!clinicId) {
                    throw new Error("Missing clinicId for reviews load.");
                }
                console.log("DEBUG getApprovedReviewsByClinic clinicId:", clinicId);
                const approved = await getApprovedReviewsByClinic(clinicId);
                if (!cancelled) {
                    setReviews(approved);
                }
            } catch (err) {
                console.error("Error loading reviews:", err);
                // do not set error state; show clinic with empty reviews instead
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();
        return () => {
            cancelled = true;
        };
    }, [effectiveSlug]);

    const handleSubmitted = async () => {
        if (!clinic) return;
        const updated = await getApprovedReviewsByClinic(clinic.id);
        setReviews(updated);
    };

    if (loading && !clinic && !error) {
        return <main className="max-w-4xl mx-auto p-6"><p>Loading clinic...</p></main>;
    }

    if (error) {
        return <main className="max-w-4xl mx-auto p-6"><p className="text-red-600">{error}</p></main>;
    }

    if (!clinic) {
        return <main className="max-w-4xl mx-auto p-6"><p>Clinic not found.</p></main>;
    }

    return (
        <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
            <header className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-3">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.12em] text-brand-muted">Clinic</p>
                        <h1 className="text-3xl font-bold text-brand-secondary">{clinic.name}</h1>
                        <p className="text-sm text-gray-700">
                            {clinic.city}{clinic.city && clinic.country ? ", " : ""}{clinic.country}
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm text-brand-secondary">
                        <span className="inline-flex items-center gap-2 bg-brand-surface px-3 py-2 rounded-full border border-gray-200">
                            <span className="text-lg">⭐</span>
                            <strong className="text-base">{avgOverall.toFixed(1)} / 5</strong>
                        </span>
                        <span className="text-gray-600">{reviewCount} {reviewCount === 1 ? "review" : "reviews"}</span>
                    </div>
                </div>
            </header>

            <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-3">
                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.12em] text-brand-muted">Share your experience</p>
                    <h2 className="text-xl font-semibold text-brand-secondary">Write a Review</h2>
                    <p className="text-sm text-gray-600">Your review will appear once approved by moderators.</p>
                </div>
                <ReviewForm clinicId={clinic.id} onSubmitted={handleSubmitted} />
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-brand-secondary">Patient Reviews</h2>
                {!reviews.length && (
                    <p className="text-gray-600 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                        No reviews yet for this clinic.
                    </p>
                )}
                {!!reviews.length && <ReviewList reviews={reviews} />}
            </section>
        </main>
    );
}
