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

export default function ReviewList({ reviews }: ReviewListProps) {
    if (!reviews.length) {
        return <p>No reviews yet for this clinic.</p>;
    }

    return (
        <ul className="space-y-4">
            {reviews.map((review) => (
                <li key={review.id} className="border rounded p-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">{review.title}</p>
                            <p className="text-sm text-gray-600">
                                Visit date: {formatDate(review.visitDate)} • Country: {review.countryOfPatient}
                            </p>
                        </div>
                        <span className="text-lg font-bold">Overall: {review.ratings.overall.toFixed(1)} / 5</span>
                    </div>

                    <p>{review.text}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                        <p>Hygiene: {review.ratings.hygiene}/5</p>
                        <p>Communication: {review.ratings.communication}/5</p>
                        <p>Transparency: {review.ratings.transparency}/5</p>
                        <p>Treatment quality: {review.ratings.treatmentQuality}/5</p>
                        <p>Staff attitude: {review.ratings.staffAttitude}/5</p>
                    </div>

                    {review.reply && (
                        <div className="mt-2 border-t pt-2 text-sm">
                            <p className="font-semibold">Clinic reply</p>
                            <p>{review.reply.message}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}
