import { type Timestamp } from "firebase/firestore";

export type ReviewStatus = "pending" | "approved" | "rejected";

export interface Ratings {
    overall: number;
    hygiene: number;
    communication: number;
    transparency: number;
    treatmentQuality: number;
    staffAttitude: number;
}

export interface ClinicReply {
    message: string;
    authorName?: string;
    authorRole?: string;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
    isEdited?: boolean;
}

export interface Clinic {
    id: string;
    name: string;
    slug: string;
    city: string;
    country: string;
    addressLine1?: string;
    addressLine2?: string;
    phone?: string;
    email?: string;
    website?: string;
    specialties?: string[];
    accreditation?: string[];
    logoUrl?: string;
    heroImageUrl?: string;
    ratingSummary?: Ratings & {
        reviewCount: number;
    };
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
}

export interface UserProfile {
    id: string;
    displayName: string;
    email?: string;
    phoneNumber?: string;
    photoURL?: string;
    country?: string;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
}

export interface Review {
    id: string;
    clinicId: string;
    userId: string;
    title: string;
    text: string;
    visitDate: Timestamp;
    countryOfPatient: string;
    ratings: Ratings;
    status: ReviewStatus;
    isFlagged: boolean;
    flaggedReason?: string;
    reply?: ClinicReply;
    moderation?: {
        moderatedBy?: string;
        moderatedAt?: Timestamp;
        rejectionReason?: string;
    };
    createdAt: Timestamp;
    updatedAt?: Timestamp;
}
