"use client";

import { useEffect, useMemo, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { getPendingReviews, recalculateClinicStats, updateReviewStatus } from "@/lib/reviewService";
import { type Review } from "@/types/review";
import { isAdminUser } from "@/lib/admin";

type ActionState = {
    loading: boolean;
    error?: string;
};

const formatDate = (value?: Timestamp) => {
    if (!value) return "";
    try {
        return value.toDate().toLocaleDateString();
    } catch {
        return "";
    }
};

export default function ReviewModerationPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loadingReviews, setLoadingReviews] = useState(false);
    const [actions, setActions] = useState<Record<string, ActionState>>({});
    const [globalError, setGlobalError] = useState<string | null>(null);

    const isAdmin = useMemo(() => isAdminUser(user), [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoadingUser(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const load = async () => {
            if (!isAdmin) return;
            setLoadingReviews(true);
            setGlobalError(null);
            try {
                const pending = await getPendingReviews();
                setReviews(pending);
            } catch (err) {
                console.error("Error loading pending reviews:", err);
                setGlobalError("Failed to load pending reviews.");
            } finally {
                setLoadingReviews(false);
            }
        };
        load();
    }, [isAdmin]);

    const handleSignIn = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error: any) {
            console.error("SIGN-IN ERROR (admin reviews):", error);
            const message = `${error?.code ?? "unknown"} - ${error?.message ?? "Sign-in failed"}`;
            setGlobalError(message);
            alert(message);
        }
    };

    const handleAction = async (review: Review, status: "approved" | "rejected") => {
        setActions((prev) => ({ ...prev, [review.id]: { loading: true } }));
        try {
            console.log("[AdminReviews] Action clicked:", status, review.id, "clinicId:", review.clinicId);
            await updateReviewStatus(review.id, status);
            console.log("[AdminReviews] Status updated, calling recalc for clinic:", review.clinicId);
            await recalculateClinicStats(review.clinicId);
            console.log("[AdminReviews] Recalc done for clinic:", review.clinicId);
            setReviews((prev) => prev.filter((r) => r.id !== review.id));
        } catch (err) {
            console.error("[AdminReviews] Update/recalc failed:", err);
            setActions((prev) => ({ ...prev, [review.id]: { loading: false, error: "Update failed" } }));
            return;
        }
        setActions((prev) => ({ ...prev, [review.id]: { loading: false } }));
    };

    const renderPending = () => {
        if (loadingReviews) return <p className="text-sm text-gray-600">Loading pending reviews...</p>;
        if (globalError) return <p className="text-red-600 text-sm">{globalError}</p>;
        if (!reviews.length) return <p className="text-sm text-gray-600">No pending reviews.</p>;

        return (
            <div className="space-y-4">
                {reviews.map((review) => {
                    const actionState = actions[review.id] || { loading: false };
                    return (
                        <div
                            key={review.id}
                            className="border border-gray-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-[0.1em] text-brand-muted">Clinic</p>
                                    <p className="text-sm text-brand-secondary font-semibold">ID: {review.clinicId}</p>
                                    <p className="text-xs text-gray-500">User: {review.userId}</p>
                                </div>
                                <div className="text-right text-sm text-brand-secondary">
                                    <p className="font-semibold text-lg">⭐ {review.ratings.overall.toFixed(1)} / 5</p>
                                    <p className="text-xs text-gray-500">Visit: {formatDate(review.visitDate)}</p>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-brand-secondary">{review.title}</p>
                                <p className="text-gray-700 leading-relaxed">{review.text}</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-brand-secondary">
                                <p className="px-2 py-1 bg-brand-surface rounded-lg border border-gray-200">Hygiene: {review.ratings.hygiene}/5</p>
                                <p className="px-2 py-1 bg-brand-surface rounded-lg border border-gray-200">Communication: {review.ratings.communication}/5</p>
                                <p className="px-2 py-1 bg-brand-surface rounded-lg border border-gray-200">Transparency: {review.ratings.transparency}/5</p>
                                <p className="px-2 py-1 bg-brand-surface rounded-lg border border-gray-200">Treatment quality: {review.ratings.treatmentQuality}/5</p>
                                <p className="px-2 py-1 bg-brand-surface rounded-lg border border-gray-200">Staff attitude: {review.ratings.staffAttitude}/5</p>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-600">
                                <p>Country: {review.countryOfPatient}</p>
                                <p>Created: {formatDate(review.createdAt)}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center bg-green-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors disabled:opacity-60"
                                    disabled={actionState.loading}
                                    onClick={() => handleAction(review, "approved")}
                                >
                                    {actionState.loading ? "Processing..." : "Approve"}
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center border border-red-200 text-red-700 px-3 py-1.5 rounded-lg text-sm font-medium disabled:opacity-60"
                                    disabled={actionState.loading}
                                    onClick={() => handleAction(review, "rejected")}
                                >
                                    {actionState.loading ? "Processing..." : "Reject"}
                                </button>
                                {actionState.error && <span className="text-red-600 text-sm">{actionState.error}</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-brand-surface">
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                <header className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-2">
                    <h1 className="text-3xl font-bold text-brand-secondary">Admin – Review Moderation</h1>
                    <p className="text-sm text-gray-700">Approve or reject pending clinic reviews.</p>
                </header>

                {loadingUser ? (
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 text-sm text-gray-700">
                        Loading user...
                    </div>
                ) : !user ? (
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-3">
                        <p>You must sign in as admin to view this page.</p>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg bg-brand-primary text-white px-4 py-2 font-medium hover:bg-brand-primary-dark transition-colors"
                            onClick={handleSignIn}
                        >
                            Sign in with Google
                        </button>
                        {globalError && <p className="text-red-600">{globalError}</p>}
                    </div>
                ) : !isAdmin ? (
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 text-gray-700">
                        Not authorized.
                    </div>
                ) : (
                    <section className="space-y-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-brand-secondary">Filters:</span>
                            <button className="border border-gray-200 px-3 py-1 rounded-full bg-brand-surface text-sm">Pending</button>
                        </div>
                        {renderPending()}
                    </section>
                )}
            </div>
        </main>
    );
}
