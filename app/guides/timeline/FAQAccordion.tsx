"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

type Props = {
    items: FAQItem[];
};

export default function FAQAccordion({ items }: Props) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y">
            {items.map((item, idx) => {
                const open = openIdx === idx;
                return (
                    <div key={item.q} className="p-4">
                        <button
                            type="button"
                            className="w-full flex items-center justify-between text-left"
                            onClick={() => setOpenIdx(open ? null : idx)}
                        >
                            <span className="font-semibold text-brand-secondary">{item.q}</span>
                            <span className="text-xl text-teal-700">{open ? "−" : "+"}</span>
                        </button>
                        {open && <p className="mt-2 text-sm text-gray-700">{item.a}</p>}
                    </div>
                );
            })}
        </div>
    );
}
