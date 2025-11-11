"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

export type FaqItem = { q: string; a: string };

export default function FAQ({
    items,
    singleOpen = true, // only one open at a time
    jsonLd = true, // include FAQPage schema
    className = "",
}: {
    items: FaqItem[];
    singleOpen?: boolean;
    jsonLd?: boolean;
    className?: string;
}) {
    const baseId = useId();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

    const isOpen = (i: number) => (singleOpen ? openIndex === i : openSet.has(i));

    const toggle = (i: number) => {
        if (singleOpen) {
            setOpenIndex((prev) => (prev === i ? null : i));
        } else {
            setOpenSet((prev) => {
                const next = new Set(prev);
                next.has(i) ? next.delete(i) : next.add(i);
                return next;
            });
        }
    };

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((it) => ({
            "@type": "Question",
            "name": it.q,
            "acceptedAnswer": { "@type": "Answer", "text": it.a },
        })),
    };

    return (
        <section className={`mx-auto max-w-5xl px-4 md:px-6 ${className}`}>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
                {items.map((it, i) => {
                    const panelId = `${baseId}-panel-${i}`;
                    const btnId = `${baseId}-button-${i}`;
                    const open = isOpen(i);

                    return (
                        <div key={i} className="p-5 md:p-6">
                            <h3 className="text-left">
                                <button
                                    id={btnId}
                                    aria-controls={panelId}
                                    aria-expanded={open}
                                    onClick={() => toggle(i)}
                                    className="group w-full flex items-center justify-between gap-4 text-left"
                                >
                                    <span className="text-[25px] md:text-md font-semibold text-[#1b2a57]">
                                        {it.q}
                                    </span>
                                    <span
                                        className={`rounded-full border border-gray-300 p-2 text-gray-600 transition
                      group-hover:border-[#21CDC0] group-hover:text-[#21CDC0]
                      ${open ? "rotate-180" : ""}`}
                                        aria-hidden
                                    >
                                        <ChevronDown className="h-5 w-5" />
                                    </span>
                                </button>
                            </h3>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={btnId}
                                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out
                  ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="pt-3 text-gray-600 leading-relaxed">{it.a}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {jsonLd && (
                <Script
                    id={`faq-jsonld-${baseId}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
            )}
        </section>
    );
}