// app/treatments/page.tsx
import Link from "next/link";

export default function TreatmentsIndex() {
    return (
        <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#14233d]">Treatments</h1>
            <ul className="mt-6 list-disc pl-6 space-y-2 text-[#1b76d1]">
                <li>
                    <Link href="/treatments/dental-implants">Dental Implants</Link>
                </li>
                {/* diğer tedaviler */}
            </ul>
        </main>
    );
}
