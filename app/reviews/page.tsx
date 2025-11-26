import { getAllClinics } from "@/lib/clinicService";
import ReviewsDashboardClient from "./ReviewsDashboardClient";

export default async function ReviewsPage() {
    const clinics = await getAllClinics();
    return <ReviewsDashboardClient clinics={clinics} />;
}
