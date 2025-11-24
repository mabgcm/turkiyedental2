"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewList from "@/components/reviews/ReviewList";
import { db } from "@/lib/firebase";
import { getApprovedReviewsByClinic } from "@/lib/reviewService";
import { type Clinic, type Review } from "@/types/review";

type PageProps = {
    params: { slug: string };
};

type ClinicDoc = Pick<Clinic, "id" | "name" | "slug" | "city" | "country"> & {
    avgRating?: number | null;
    reviewCount?: number;
};

const clinicsCollection = collection(db, "clinics");

/**
 * Fetch a single clinic by slug from Firestore.
 */
const fetchClinicBySlug = async (slug: string): Promise<ClinicDoc | null> => {
    // First try to find by slug field.
    const q = query(clinicsCollection, where("slug", "==", slug));
    const snapshot = await getDocs(q);
    console.log("DEBUG clinic slug query:", slug, "size:", snapshot.size);
    if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        const data = docSnap.data() as Partial<ClinicDoc>;
        console.log("DEBUG clinic doc by slug:", docSnap.id, data);
        return {
            id: data.id ?? docSnap.id,
            name: data.name ?? "Clinic",
            slug: data.slug ?? slug,
            city: data.city ?? "",
            country: data.country ?? "",
            avgRating: data.avgRating ?? null,
            reviewCount: data.reviewCount ?? 0,
        };
    }

    // Fallback: if slug matches the document id (e.g., when slug field is missing), fetch by id.
    const docSnap = await getDoc(doc(clinicsCollection, slug));
    console.log("DEBUG clinic doc by id fallback exists:", docSnap.exists());
    if (!docSnap.exists()) return null;
    const data = docSnap.data() as Partial<ClinicDoc>;
    console.log("DEBUG clinic doc by id:", docSnap.id, data);
    return {
        id: data.id ?? docSnap.id,
        name: data.name ?? "Clinic",
        slug: data.slug ?? slug,
        city: data.city ?? "",
        country: data.country ?? "",
        avgRating: data.avgRating ?? null,
        reviewCount: data.reviewCount ?? 0,
    };
};

export default function ClinicReviewsDetailPage({ params }: PageProps) {
    const slug = params?.slug;
    const [clinic, setClinic] = useState<ClinicDoc | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loadingClinic, setLoadingClinic] = useState(true);
    const [loadingReviews, setLoadingReviews] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            setLoadingClinic(true);
            setError(null);

            if (!slug) {
                setError("Invalid clinic slug.");
                setClinic(null);
                setLoadingClinic(false);
                return;
            }

            try {
                const clinicData = await fetchClinicBySlug(slug);
                if (cancelled) return;

                if (!clinicData) {
                    setClinic(null);
                    setError("Clinic not found.");
                    return;
                }

                setClinic(clinicData);

                setLoadingReviews(true);
                try {
                    const approved = await getApprovedReviewsByClinic(clinicData.id);
                    if (cancelled) return;
                    setReviews(approved);
                } catch (err) {
                    console.error("Failed to load reviews:", err);
                    if (cancelled) return;
                    setError("Failed to load reviews.");
                } finally {
                    if (!cancelled) setLoadingReviews(false);
                }
            } catch (err) {
                console.error("Failed to load clinic:", err);
                if (cancelled) return;
                setError("Failed to load clinic.");
                setClinic(null);
            } finally {
                if (!cancelled) setLoadingClinic(false);
            }
        };
        load();
        return () => {
            cancelled = true;
        };
    }, [params.slug]);

    const refreshReviews = async () => {
        if (!clinic) return;
        setLoadingReviews(true);
        try {
            const approved = await getApprovedReviewsByClinic(clinic.id);
            setReviews(approved);
        } catch {
            setError("Failed to load reviews.");
        } finally {
            setLoadingReviews(false);
        }
    };

    const reviewCount = useMemo(() => clinic?.reviewCount ?? reviews.length, [clinic, reviews.length]);
    const avgRating = useMemo(() => clinic?.avgRating ?? null, [clinic]);

    if (loadingClinic) {
        return <main className="max-w-4xl mx-auto p-6"><p>Loading clinic...</p></main>;
    }

    if (!clinic) {
        return <main className="max-w-4xl mx-auto p-6"><p>Clinic not found.</p></main>;
    }

    return (
        <main className="max-w-4xl mx-auto p-6 space-y-6">
            <header className="space-y-1">
                <h1 className="text-2xl font-bold">{clinic.name}</h1>
                <p className="text-sm text-gray-700">{clinic.city}{clinic.city && clinic.country ? ", " : ""}{clinic.country}</p>
                <p className="text-sm text-gray-700">
                    {avgRating != null ? `Average rating: ${avgRating.toFixed(1)} / 5` : "No rating yet"} •{" "}
                    {reviewCount ? `${reviewCount} reviews` : "0 reviews"}
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Write a Review</h2>
                <p className="text-sm text-gray-700">Your review will appear once approved by moderators.</p>
                <ReviewForm clinicId={clinic.id} onSubmitted={refreshReviews} />
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Patient Reviews</h2>
                {loadingReviews && <p>Loading reviews...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loadingReviews && !reviews.length && <p>No reviews yet for this clinic.</p>}
                {!loadingReviews && !!reviews.length && <ReviewList reviews={reviews} />}
            </section>
        </main>
    );
}
