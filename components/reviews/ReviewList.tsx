"use client";

import { Timestamp } from "firebase/firestore";
import { type Review } from "@/types/review";

type ReviewListProps = {
    reviews: Review[];
};

const formatDate = (value: Timestamp) => {
    try {
        return value.toDate().toLocaleDateString();
    } catch {
        return "";
    }
};

const renderBar = (label: string, value: number) => {
    const percent = Math.max(0, Math.min(5, value)) / 5 * 100;
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs text-brand-secondary">
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

export default function ReviewList({ reviews }: ReviewListProps) {
    if (!reviews.length) {
        return <p className="text-gray-600">No reviews yet for this clinic.</p>;
    }

    return (
        <ul className="space-y-4">
            {reviews.map((review) => (
                <li key={review.id} className="border border-gray-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                            <p className="font-semibold text-brand-secondary">{review.title}</p>
                            <p className="text-sm text-gray-600">
                                Visit date: {formatDate(review.visitDate)} • Country: {review.countryOfPatient}
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-base font-semibold text-brand-secondary">
                            ⭐ {review.ratings.overall.toFixed(1)} / 5
                        </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{review.text}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-brand-secondary">
                        <p>Hygiene: {review.ratings.hygiene}/5</p>
                        <p>Communication: {review.ratings.communication}/5</p>
                        <p>Transparency: {review.ratings.transparency}/5</p>
                        <p>Treatment quality: {review.ratings.treatmentQuality}/5</p>
                        <p>Staff attitude: {review.ratings.staffAttitude}/5</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                        {renderBar("Hygiene", review.ratings.hygiene)}
                        {renderBar("Communication", review.ratings.communication)}
                        {renderBar("Transparency", review.ratings.transparency)}
                        {renderBar("Treatment quality", review.ratings.treatmentQuality)}
                        {renderBar("Staff attitude", review.ratings.staffAttitude)}
                        {renderBar("Overall", review.ratings.overall)}
                    </div>

                    {review.reply && (
                        <div className="mt-2 border-t border-gray-200 pt-2 text-sm text-gray-700">
                            <p className="font-semibold text-brand-secondary">Clinic reply</p>
                            <p>{review.reply.message}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}
