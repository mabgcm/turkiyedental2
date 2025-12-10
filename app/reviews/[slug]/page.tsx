import ClinicReviewsPageClient from "./ClinicReviewsPageClient";

type PageProps = {
    params?: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
    const resolved = params ? await params : null;
    const slug = resolved?.slug ?? "";

    return <ClinicReviewsPageClient slug={slug} />;
}
