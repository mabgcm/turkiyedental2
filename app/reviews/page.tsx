import { collection, getDocs } from "firebase/firestore";
import ClinicListClient from "./ClinicListClient";
import { db } from "@/lib/firebase";
import { type Clinic } from "@/types/review";

type ClinicListItem = Pick<Clinic, "id" | "name" | "slug" | "city" | "country">;

const clinicsCollection = collection(db, "clinics");

export default async function ClinicsReviewsPage() {
    const snapshot = await getDocs(clinicsCollection);
    const clinics: ClinicListItem[] = snapshot.docs.map((docSnap) => {
        const docData = docSnap.data() as Partial<ClinicListItem>;
        return {
            id: docData.id ?? docSnap.id,
            name: docData.name ?? "Clinic",
            slug: docData.slug ?? docSnap.id,
            city: docData.city ?? "",
            country: docData.country ?? "",
        };
    });

    return <ClinicListClient clinics={clinics} />;
}
