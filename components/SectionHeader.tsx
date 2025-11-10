// components/SectionHeader.tsx
import React from "react";

interface HeaderProps {
    title: string;
    subtitle?: string;
    highlight?: string; // new prop for highlighted text
    align?: "left" | "center";
    variant?: "page" | "section";
    subtitleColor?: string; // 🎨 new prop

}

export default function SectionHeader({
    title,
    subtitle,
    highlight,
    align = "center",
    variant = "page",
    subtitleColor = "text-gray-600", // default if none given

}: HeaderProps) {
    const isCenter = align === "center";
    const isPage = variant === "page";

    // Split title text into parts
    const parts = highlight ? title.split(highlight) : [title];

    return (
        <header
            className={`${isCenter ? "text-center mx-auto" : "text-left"
                } max-w-3xl py-8`}
        >
            {/* Title */}
            <h1
                className={`font-bold tracking-tight ${isPage
                    ? "text-3xl md:text-4xl text-[#2B3A55]"
                    : "text-xl md:text-2xl text-[#1E3A8A]"
                    }`}
            >
                {parts[0]}
                {highlight && (
                    <span className="text-[red]">{highlight}</span>
                )}
                {parts[1]}
            </h1>

            {/* Subtitle */}
            {subtitle && (
                <p
                    className={`mt-4 tracking-wide uppercase ${subtitleColor} ${isCenter ? "mx-auto" : ""
                        } ${isPage
                            ? "text-base md:text-lg leading-relaxed"
                            : "text-sm md:text-base leading-relaxed"
                        }`}
                >
                    {subtitle}
                </p>
            )}

            {/* Gradient underline only for sections */}
            {!isPage && (
                <div className="h-[3px] w-24 mt-4 mx-auto rounded-full bg-gradient-to-r from-[#3FB8FF] to-[#21CDC0]" />
            )}
        </header>
    );
}