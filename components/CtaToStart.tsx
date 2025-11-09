"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CtaToStart({
    children = "Get Free Second Opinion",
    className = "inline-block px-6 py-3 bg-[#3FB8FF] text-white font-semibold rounded-full hover:bg-[#2EA3E0] transition-all shadow-md",
}) {
    const pathname = usePathname();
    const [search, setSearch] = useState("");

    // Avoid SSR/hydration issues: read search on the client only
    useEffect(() => {
        if (typeof window !== "undefined") {
            setSearch(window.location.search || "");
        }
    }, []);

    const current = pathname + (search || "");
    const href = `/start?from=${encodeURIComponent(current)}`;

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}