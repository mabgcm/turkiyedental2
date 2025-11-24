"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { type Clinic } from "@/types/review";

type ClinicListItem = Pick<Clinic, "id" | "name" | "slug" | "city" | "country"> & {
    avgRating?: number | null;
    reviewCount?: number;
};

const clinicsCollection = collection(db, "clinics");

export default function ClinicsReviewsPage() {
    const [clinics, setClinics] = useState<ClinicListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadClinics = async () => {
            setLoading(true);
            setError(null);
            try {
                const snapshot = await getDocs(clinicsCollection);
                const data: ClinicListItem[] = snapshot.docs.map((docSnap) => {
                    const docData = docSnap.data() as Partial<ClinicListItem>;
                    return {
                        id: docData.id ?? docSnap.id,
                        name: docData.name ?? "Clinic",
                        slug: docData.slug ?? docSnap.id,
                        city: docData.city ?? "",
                        country: docData.country ?? "",
                        avgRating: docData.avgRating ?? null,
                        reviewCount: docData.reviewCount ?? 0,
                    };
                });
                setClinics(data);
            } catch (err) {
                setError("Failed to load clinics.");
            } finally {
                setLoading(false);
            }
        };

        loadClinics();
    }, []);

    return (
        <main className="max-w-5xl mx-auto p-6 space-y-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold">Clinics &amp; Reviews</h1>
                <p className="text-gray-700 text-sm">Browse clinics and read patient feedback.</p>
            </header>

            {loading && <p>Loading clinics...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !error && clinics.length === 0 && <p>No clinics have been added yet.</p>}

            <div className="grid gap-4">
                {clinics.map((clinic) => (
                    <article key={clinic.id} className="border rounded p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">{clinic.name}</h2>
                                <p className="text-sm text-gray-700">
                                    {clinic.city}{clinic.city && clinic.country ? ", " : ""}{clinic.country}
                                </p>
                            </div>
                            <div className="text-right text-sm text-gray-700">
                                <p>
                                    {clinic.avgRating != null
                                        ? `${clinic.avgRating.toFixed(1)} / 5`
                                        : "No rating yet"}
                                </p>
                                <p>
                                    {clinic.reviewCount && clinic.reviewCount > 0
                                        ? `Based on ${clinic.reviewCount} reviews`
                                        : "0 reviews yet"}
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/reviews/${clinic.slug}`}
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            View reviews
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
