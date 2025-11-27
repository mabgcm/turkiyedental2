"use client";

import { useState } from "react";

type Tab = {
    key: string;
    title: string;
    points: string[];
};

type Props = {
    tabs: Tab[];
};

export default function AftercareTabs({ tabs }: Props) {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]?.key ?? "");
    const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

    return (
        <>
            <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={[
                            "px-4 py-2 rounded-full text-sm font-semibold border transition",
                            activeTab === tab.key
                                ? "bg-teal-600 text-white border-teal-700"
                                : "bg-white text-brand-secondary border-gray-200 hover:bg-teal-50",
                        ].join(" ")}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {active && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-2 mt-3">
                    <h3 className="text-lg font-semibold text-brand-secondary">{active.title}</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {active.points.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
