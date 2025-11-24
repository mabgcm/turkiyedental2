import {
    addDoc,
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
    where,
    type DocumentData,
    type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { type Review, type ReviewStatus } from "@/types/review";

const reviewsCollection = collection(db, "reviews");

const mapReview = (snapshot: QueryDocumentSnapshot<DocumentData>): Review => {
    const data = snapshot.data() as Omit<Review, "id">;
    return { id: snapshot.id, ...data };
};

/**
 * Create a new review with default moderation fields.
 */
export const createReview = async (
    review: Omit<Review, "id" | "status" | "isFlagged" | "createdAt" | "updatedAt">,
) => {
    const payload: Omit<Review, "id"> = {
        ...review,
        status: "pending",
        isFlagged: false,
        createdAt: serverTimestamp() as Review["createdAt"],
        updatedAt: serverTimestamp() as Review["createdAt"],
    };

    const docRef = await addDoc(reviewsCollection, payload);
    return { id: docRef.id, ...payload };
};

/**
 * Get approved reviews for a clinic ordered by newest first.
 */
export const getApprovedReviewsByClinic = async (clinicId: string): Promise<Review[]> => {
    if (!clinicId) {
        throw new Error("getApprovedReviewsByClinic called without clinicId");
    }
    const q = query(
        reviewsCollection,
        where("clinicId", "==", clinicId),
        where("status", "==", "approved"),
        orderBy("createdAt", "desc"),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(mapReview);
};

/**
 * Get all pending reviews for moderation ordered by newest first.
 */
export const getPendingReviews = async (): Promise<Review[]> => {
    const q = query(reviewsCollection, where("status", "==", "pending"),
        // orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(mapReview);
};

/**
 * Update the moderation status of a review.
 */
export const updateReviewStatus = async (reviewId: string, status: ReviewStatus) => {
    const reviewRef = doc(reviewsCollection, reviewId);
    await updateDoc(reviewRef, {
        status,
        updatedAt: serverTimestamp(),
    });
};

/**
 * Add a clinic reply to a review.
 */
export const addClinicReply = async (reviewId: string, replyText: string) => {
    const reviewRef = doc(reviewsCollection, reviewId);
    await updateDoc(reviewRef, {
        clinicReplyText: replyText,
        clinicReplyAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });
};
