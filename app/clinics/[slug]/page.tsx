"use client";

import { useEffect, useMemo, useState } from "react";
import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewList from "@/components/reviews/ReviewList";
import { getApprovedReviewsByClinic } from "@/lib/reviewService";
import { type Clinic, type Review } from "@/types/review";

type PageProps = {
    params?: Promise<{ slug: string }>;
};

type MinimalClinic = Pick<Clinic, "id" | "name" | "slug" | "city" | "country">;

const fetchClinicBySlug = async (slug: string): Promise<MinimalClinic> => {
    const humanName = slug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

    // Placeholder fetch; replace with real data source as needed.
    return {
        id: slug,
        name: humanName || "Clinic",
        slug,
        city: "Unknown",
        country: "Unknown",
    };
};

const computeAverages = (reviews: Review[]) => {
    if (!reviews.length) {
        return null;
    }

    const totals = reviews.reduce(
        (acc, review) => {
            acc.overall += review.ratings.overall;
            acc.hygiene += review.ratings.hygiene;
            acc.communication += review.ratings.communication;
            acc.transparency += review.ratings.transparency;
            acc.treatmentQuality += review.ratings.treatmentQuality;
            acc.staffAttitude += review.ratings.staffAttitude;
            return acc;
        },
        { overall: 0, hygiene: 0, communication: 0, transparency: 0, treatmentQuality: 0, staffAttitude: 0 },
    );

    const count = reviews.length;
    return {
        count,
        overall: totals.overall / count,
        hygiene: totals.hygiene / count,
        communication: totals.communication / count,
        transparency: totals.transparency / count,
        treatmentQuality: totals.treatmentQuality / count,
        staffAttitude: totals.staffAttitude / count,
    };
};

export default function ClinicDetailPage({ params }: PageProps) {
    const [clinic, setClinic] = useState<MinimalClinic | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            const resolvedParams = params ? await params : null;
            const slug = resolvedParams?.slug;

            if (!slug) {
                setLoading(false);
                return;
            }

            setLoading(true);
            const clinicData = await fetchClinicBySlug(slug);
            if (cancelled) return;
            setClinic(clinicData);

            const approved = await getApprovedReviewsByClinic(clinicData.id);
            if (cancelled) return;
            setReviews(approved);
            setLoading(false);
        };

        void load();
        return () => {
            cancelled = true;
        };
    }, [params]);

    const averages = useMemo(() => computeAverages(reviews), [reviews]);

    const refreshReviews = async () => {
        if (!clinic) return;
        setLoading(true);
        const approved = await getApprovedReviewsByClinic(clinic.id);
        setReviews(approved);
        setLoading(false);
    };

    return (
        <main className="max-w-4xl mx-auto p-4 space-y-6">
            <header className="space-y-2">
                <p className="text-sm text-gray-600">{clinic?.city}, {clinic?.country}</p>
                <h1 className="text-2xl font-bold">{clinic?.name ?? "Clinic"}</h1>
            </header>

            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Clinic Reviews</h2>
                {loading ? (
                    <p>Loading reviews...</p>
                ) : averages ? (
                    <div className="border rounded p-3 space-y-1">
                        <p className="text-lg font-semibold">Average rating: {averages.overall.toFixed(1)} / 5</p>
                        <p className="text-sm text-gray-700">Based on {averages.count} reviews</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                            <p>Hygiene: {averages.hygiene.toFixed(1)}</p>
                            <p>Communication: {averages.communication.toFixed(1)}</p>
                            <p>Transparency: {averages.transparency.toFixed(1)}</p>
                            <p>Treatment quality: {averages.treatmentQuality.toFixed(1)}</p>
                            <p>Staff attitude: {averages.staffAttitude.toFixed(1)}</p>
                        </div>
                    </div>
                ) : (
                    <p>No reviews yet for this clinic.</p>
                )}
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Write a Review</h2>
                <p className="text-sm text-gray-700">Approved reviews appear publicly once moderated.</p>
                {clinic && <ReviewForm clinicId={clinic.id} onSubmitted={refreshReviews} />}
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Recent Reviews</h2>
                {loading ? <p>Loading reviews...</p> : <ReviewList reviews={reviews} />}
            </section>
        </main>
    );
}
