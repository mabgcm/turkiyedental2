// components/TreatmentCards.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export type TreatmentItem = {
    title: string;
    excerpt: string;
    href: string;
    image: { src: string; alt: string; width?: number; height?: number };
};

function normalizeSrc(src?: string) {
    if (!src) return null;
    if (/^https?:\/\//i.test(src)) return src; // external
    if (!src.startsWith("/")) return `/${src}`; // ensure leading slash for public assets
    return src;
}

export default function TreatmentCards({
    items,
    className = "",
}: {
    items: TreatmentItem[];
    className?: string;
}) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    // update active index on scroll
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const onScroll = () => {
            const { scrollLeft, clientWidth } = el;
            const i = Math.round(scrollLeft / clientWidth);
            setIndex(Math.max(0, Math.min(items.length - 1, i)));
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [items.length]);

    const go = (dir: -1 | 1) => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.clientWidth; // snap by viewport width
        el.scrollTo({ left: el.scrollLeft + dir * step, behavior: "smooth" });
    };

    const goTo = (i: number) => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.clientWidth;
        el.scrollTo({ left: step * i, behavior: "smooth" });
    };

    return (
        <section className={`relative ${className}`}>
            {/* slider viewport */}
            <div
                ref={trackRef}
                className="no-scrollbar relative mx-auto max-w-7xl overflow-x-auto scroll-smooth px-4 md:px-6 snap-x snap-mandatory"
            >
                <div className="flex">
                    {items.map((t, i) => {
                        const safeSrc = normalizeSrc(t.image?.src);
                        const hasIntrinsic = !!t.image?.width;

                        return (
                            <article
                                key={i}
                                className="
                  snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[52%] lg:w-[34%]
                  mr-4 md:mr-6
                  group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm
                "
                            >
                                <div className="relative aspect-[16/10] bg-gray-100">
                                    {safeSrc ? (
                                        <Image
                                            src={safeSrc}
                                            alt={t.image.alt || t.title}
                                            {...(!hasIntrinsic
                                                ? {
                                                    fill: true as const,
                                                    sizes:
                                                        "(min-width:1024px) 33vw, (min-width:768px) 50vw, 88vw",
                                                }
                                                : {
                                                    width: t.image.width!,
                                                    height:
                                                        t.image.height ??
                                                        Math.round((t.image.width! * 10) / 16),
                                                })}
                                            priority={i < 2}
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 grid place-content-center text-gray-400">
                                            <Plus className="h-8 w-8 opacity-60" />
                                        </div>
                                    )}
                                </div>

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


                                    </div>
                                </div>

                                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#21CDC0]/0 transition group-hover:ring-4 group-hover:ring-[#21CDC0]/30" />
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* controls */}
            <button
                aria-label="Previous"
                onClick={() => go(-1)}
                className="absolute -left-15 top-1/2 -translate-y-1/2 hidden md:grid h-12 w-12 place-content-center rounded-full border border-gray-300 bg-white/90 text-gray-600 shadow hover:bg-white hover:text-[#1b76d1] transition"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                aria-label="Next"
                onClick={() => go(1)}
                className="absolute -right-15 top-1/2 -translate-y-1/2 hidden md:grid h-12 w-12 place-content-center rounded-full border border-gray-300 bg-white/90 text-gray-600 shadow hover:bg-white hover:text-[#1b76d1] transition"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* dots */}
            <div className="mt-4 flex justify-center gap-2">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${index === i ? "w-6 bg-[#21CDC0]" : "w-2.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}