import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { createReview } from "@/lib/reviewService";
import { type Review } from "@/types/review";

type ReviewFormProps = {
    clinicId: string;
    onSubmitted?: () => void;
};

const ratingOptions = [1, 2, 3, 4, 5];

const initialFormState = {
    overallRating: "5",
    doctorStaffRating: "5",
    hygieneRating: "5",
    treatmentQualityRating: "5",
    priceTransparencyRating: "5",
    communicationRating: "5",
    title: "",
    text: "",
    visitDate: "",
    countryOfPatient: "",
};

const isRatingValid = (value: number) => value >= 1 && value <= 5;

/**
 * Collects a review for a clinic and submits it to Firestore.
 */
export default function ReviewForm({ clinicId, onSubmitted }: ReviewFormProps) {
    const [user, setUser] = useState<User | null>(null);
    const [form, setForm] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => setUser(current));
        return () => unsubscribe();
    }, []);

    const handleSignIn = async () => {
        setError(null);
        setAuthLoading(true);
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (err) {
            setError("Sign-in failed. Please try again.");
        } finally {
            setAuthLoading(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!user) {
            setError("You must sign in to submit a review.");
            return;
        }

        const title = form.title.trim();
        const text = form.text.trim();
        const visitDateValue = form.visitDate;
        const countryOfPatient = form.countryOfPatient.trim();

        const ratings = {
            overall: Number(form.overallRating),
            staffAttitude: Number(form.doctorStaffRating),
            hygiene: Number(form.hygieneRating),
            treatmentQuality: Number(form.treatmentQualityRating),
            transparency: Number(form.priceTransparencyRating),
            communication: Number(form.communicationRating),
        };

        // Basic validation
        if (!title || !text || !visitDateValue || !countryOfPatient) {
            setError("Please fill in all required fields.");
            return;
        }

        if (text.length < 30) {
            setError("Review text should be at least 30 characters.");
            return;
        }

        if (Object.values(ratings).some((value) => !isRatingValid(value))) {
            setError("Ratings must be between 1 and 5.");
            return;
        }

        const visitDate = new Date(visitDateValue);
        if (Number.isNaN(visitDate.getTime())) {
            setError("Please provide a valid visit date.");
            return;
        }

        setSubmitting(true);
        try {
            const payload: Omit<Review, "id" | "status" | "isFlagged" | "createdAt" | "updatedAt"> = {
                clinicId,
                userId: user.uid,
                title,
                text,
                visitDate: Timestamp.fromDate(visitDate),
                countryOfPatient,
                ratings,
            };
            await createReview(payload);

            setSuccess("Your review has been submitted and is awaiting approval.");
            setForm(initialFormState);
            onSubmitted?.();
        } catch (err) {
            setError("Failed to submit review. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const ratingField = (name: keyof typeof form, label: string) => (
        <label className="flex flex-col gap-1">
            <span>{label}</span>
            <select
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="border rounded px-2 py-1"
                required
            >
                {ratingOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </label>
    );

    if (!user) {
        return (
            <div className="border rounded p-4 space-y-3">
                <p>You must sign in with Google to leave a review.</p>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                    type="button"
                    onClick={handleSignIn}
                    disabled={authLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
                >
                    {authLoading ? "Signing in..." : "Sign in with Google"}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="border rounded p-4 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                {ratingField("overallRating", "Overall rating")}
                {ratingField("doctorStaffRating", "Doctor & staff attitude")}
                {ratingField("hygieneRating", "Hygiene")}
                {ratingField("treatmentQualityRating", "Treatment quality")}
                {ratingField("priceTransparencyRating", "Price transparency")}
                {ratingField("communicationRating", "Communication")}
            </div>

            <label className="flex flex-col gap-1">
                <span>Review title</span>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                    required
                />
            </label>

            <label className="flex flex-col gap-1">
                <span>Review</span>
                <textarea
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                    minLength={30}
                    className="border rounded px-2 py-2"
                    rows={5}
                    required
                />
            </label>

            <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1">
                    <span>Visit date</span>
                    <input
                        type="date"
                        name="visitDate"
                        value={form.visitDate}
                        onChange={handleChange}
                        className="border rounded px-2 py-1"
                        required
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span>Country of patient</span>
                    <input
                        type="text"
                        name="countryOfPatient"
                        value={form.countryOfPatient}
                        onChange={handleChange}
                        className="border rounded px-2 py-1"
                        required
                    />
                </label>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-700 text-sm">{success}</p>}

            <button
                type="submit"
                disabled={submitting}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
            >
                {submitting ? "Submitting..." : "Submit review"}
            </button>
        </form>
    );
}
