import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { type Clinic } from "@/types/review";

const clinicsCollection = collection(db, "clinics");

export const getAllClinics = async (): Promise<Clinic[]> => {
    const q = query(clinicsCollection, orderBy("name"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => {
        const data = docSnap.data() as Partial<Clinic>;
        return {
            id: data.id ?? docSnap.id,
            name: data.name ?? "",
            slug: data.slug ?? "",
            city: data.city ?? "",
            country: data.country ?? "",
            avgRating: data.avgRating ?? 0,
            reviewCount: data.reviewCount ?? 0,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        };
    });
};

export const createClinic = async (
    clinic: Omit<Clinic, "id" | "avgRating" | "reviewCount" | "createdAt" | "updatedAt">,
) => {
    const payload = {
        ...clinic,
        avgRating: 0,
        reviewCount: 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    };
    const docRef = await addDoc(clinicsCollection, payload);
    return { id: docRef.id, ...payload };
};

export const updateClinic = async (id: string, data: Partial<Clinic>) => {
    const ref = doc(clinicsCollection, id);
    await updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
};

export const deleteClinic = async (id: string) => {
    const ref = doc(clinicsCollection, id);
    await deleteDoc(ref);
};
