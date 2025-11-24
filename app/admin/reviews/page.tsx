"use client";

import { useEffect, useMemo, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import ReviewList from "@/components/reviews/ReviewList";
import { auth } from "@/lib/firebase";
import { getPendingReviews, updateReviewStatus } from "@/lib/reviewService";
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

    const handleAction = async (reviewId: string, status: "approved" | "rejected") => {
        setActions((prev) => ({ ...prev, [reviewId]: { loading: true } }));
        try {
            await updateReviewStatus(reviewId, status);
            setReviews((prev) => prev.filter((r) => r.id !== reviewId));
        } catch {
            setActions((prev) => ({ ...prev, [reviewId]: { loading: false, error: "Update failed" } }));
            return;
        }
        setActions((prev) => ({ ...prev, [reviewId]: { loading: false } }));
    };

    const renderPending = () => {
        if (loadingReviews) return <p>Loading pending reviews...</p>;
        if (globalError) return <p className="text-red-600">{globalError}</p>;
        if (!reviews.length) return <p>No pending reviews.</p>;

        return (
            <div className="space-y-4">
                {reviews.map((review) => {
                    const actionState = actions[review.id] || { loading: false };
                    return (
                        <div key={review.id} className="border rounded p-4 space-y-2">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Clinic ID: {review.clinicId}</p>
                                    <p className="text-sm text-gray-600">User ID: {review.userId}</p>
                                </div>
                                <p className="font-semibold">Overall: {review.ratings.overall} / 5</p>
                            </div>
                            <p className="font-semibold">{review.title}</p>
                            <p>{review.text}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                                <p>Hygiene: {review.ratings.hygiene}/5</p>
                                <p>Communication: {review.ratings.communication}/5</p>
                                <p>Transparency: {review.ratings.transparency}/5</p>
                                <p>Treatment quality: {review.ratings.treatmentQuality}/5</p>
                                <p>Staff attitude: {review.ratings.staffAttitude}/5</p>
                                <p>Visit: {formatDate(review.visitDate)}</p>
                            </div>
                            <p className="text-sm text-gray-700">Country: {review.countryOfPatient}</p>
                            <p className="text-xs text-gray-500">Created: {formatDate(review.createdAt)}</p>

                            <div className="flex gap-2 pt-2">
                                <button
                                    type="button"
                                    className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-60"
                                    disabled={actionState.loading}
                                    onClick={() => handleAction(review.id, "approved")}
                                >
                                    {actionState.loading ? "Processing..." : "Approve"}
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-600 text-white px-3 py-1 rounded disabled:opacity-60"
                                    disabled={actionState.loading}
                                    onClick={() => handleAction(review.id, "rejected")}
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
        <main className="max-w-5xl mx-auto p-6 space-y-6">
            <header className="space-y-1">
                <h1 className="text-2xl font-bold">Admin – Review Moderation</h1>
                <p className="text-sm text-gray-700">Approve or reject pending clinic reviews.</p>
            </header>

            {loadingUser ? (
                <p>Loading user...</p>
            ) : !user ? (
                <div className="space-y-3">
                    <p>You must sign in as admin to view this page.</p>
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={handleSignIn}
                    >
                        Sign in with Google
                    </button>
                    {globalError && <p className="text-red-600">{globalError}</p>}
                </div>
            ) : !isAdmin ? (
                <p>Not authorized.</p>
            ) : (
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Filters:</span>
                        <button className="border px-3 py-1 rounded bg-gray-100">Pending</button>
                    </div>
                    {renderPending()}
                </section>
            )}
        </main>
    );
}
