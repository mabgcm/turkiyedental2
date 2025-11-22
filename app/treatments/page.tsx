// app/treatments/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Treatments | TürkiyeDental",
    description: "Explore TürkiyeDental’s treatment guides, including dental implants, crowns, veneers, All-on-4, and All-on-6 options.",
};

export default function TreatmentsIndex() {
    return (
        <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#14233d]">Treatments</h1>
            <p className="mt-3 text-base text-gray-700">
                Explore our detailed guides and second-opinion resources for the most common treatments we review.
            </p>
            <ul className="mt-6 list-disc pl-6 space-y-2 text-[#1b76d1]">
                <li>
                    <Link href="/treatments/dental-implants">Dental Implants</Link>
                </li>
                <li>
                    <Link href="/treatments/dental-crowns">Dental Crowns</Link>
                </li>
                <li>
                    <Link href="/treatments/veneers">Veneers</Link>
                </li>
                <li>
                    <Link href="/treatments/allon4">All-on-4 Implants</Link>
                </li>
                <li>
                    <Link href="/treatments/allon6">All-on-6 Implants</Link>
                </li>
                {/* diğer tedaviler */}
            </ul>
        </main>
    );
}
