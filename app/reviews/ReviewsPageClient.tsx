"use client";

import { useEffect, useState } from "react";
import { getAllClinics } from "@/lib/clinicService";
import { type Clinic } from "@/types/review";
import ReviewsDashboardClient from "./ReviewsDashboardClient";

export default function ReviewsPageClient() {
    const [clinics, setClinics] = useState<Clinic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            try {
                const data = await getAllClinics();
                if (!cancelled) {
                    setClinics(data);
                    setError(null);
                }
            } catch (err) {
                if (!cancelled) {
                    console.error("[ReviewsPage] Failed to load clinics:", err);
                    setError("We could not load clinics right now. Please try again soon.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };
        load();
        return () => { cancelled = true; };
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-surface text-brand-secondary">
                <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
                    Loading clinics...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-brand-surface text-brand-secondary">
                <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
                    {error}
                </div>
            </div>
        );
    }

    return <ReviewsDashboardClient clinics={clinics} />;
}
