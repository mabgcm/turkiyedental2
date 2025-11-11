// components/TreatmentCards.tsx
import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";

export type TreatmentItem = {
    title: string;
    excerpt: string;
    href: string;
    image: {
        src: string;
        alt: string;
        width?: number;  // optional: for next/image optimization
        height?: number; // optional
    };
};

export default function TreatmentCards({
    items,
    className = "",
}: {
    items: TreatmentItem[];
    className?: string;
}) {
    return (
        <section className={`mx-auto max-w-7xl px-4 md:px-6 ${className}`}>
            {/* grid */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((t, i) => (
                    <article
                        key={i}
                        className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                    >
                        {/* image */}
                        <div className="relative aspect-[16/10]">
                            {/* Use provided width/height if available to avoid CLS */}
                            <Image
                                src={t.image.src}
                                alt={t.image.alt}
                                fill={!t.image.width}
                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                priority={i < 2}
                                className="object-cover"
                                {...(t.image.width
                                    ? { width: t.image.width, height: t.image.height ?? Math.round((t.image.width * 10) / 16) }
                                    : {})}
                            />
                        </div>

                        {/* body */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#1b2a57]">
                                {t.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                {t.excerpt}
                            </p>

                            <div className="mt-5 flex items-center justify-between">
                                <Link
                                    href={t.href}
                                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#1b76d1] hover:opacity-90"
                                >
                                    READ MORE <Plus className="h-4 w-4" />
                                </Link>

                                <div className="grid h-10 w-10 place-content-center rounded-full border-2 border-[#1b76d1]/60 text-[#1b76d1]">
                                    <Plus className="h-5 w-5" />
                                </div>
                            </div>
                        </div>

                        {/* hover outline */}
                        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#21CDC0]/0 transition group-hover:ring-4 group-hover:ring-[#21CDC0]/30" />
                    </article>
                ))}
            </div>
        </section>
    );
}