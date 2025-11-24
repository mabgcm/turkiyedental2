import ClinicReviewsPageClient from "./ClinicReviewsPageClient";

type PageProps = {
    params: { slug: string };
};

export default function Page({ params }: PageProps) {
    return <ClinicReviewsPageClient slug={params.slug} />;
}
